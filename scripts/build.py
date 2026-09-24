#!/usr/bin/env python3
"""
Build pluginu KWIATEKmedia Meta Ads.

1. Kopiuje wiedzę wspólną z shared/ do plugins/kwiatekmedia-meta-ads/skills/<skill>/references/
   według shared/mapa.json (kopie są commitowane, żeby instalacja z GitHuba działała bez budowania).
2. Waliduje każdy skill (frontmatter zgodny ze specyfikacją Agent Skills, nazwa = folder,
   opis <= 1024 znaki bez < >, SKILL.md < 500 linii, brak BOM, nazwy plików ASCII,
   odwołania do references/ istnieją).
3. Buduje paczki w dist/:
   - kwiatekmedia-meta-ads.zip i .plugin  (Customize > Plugins > upload)
   - skills/<skill>.zip                  (Customize > Skills > Upload a skill; folder skilla w korzeniu ZIP)

Użycie:
  python3 scripts/build.py          # synchronizacja + walidacja + paczki
  python3 scripts/build.py --check  # tylko sprawdzenie (kod 1, gdy coś jest nieaktualne lub błędne)
"""
import json
import re
import sys
import zipfile
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
PLUGIN = ROOT / "plugins" / "kwiatekmedia-meta-ads"
SHARED = ROOT / "shared"
DIST = ROOT / "dist"
SPEC_KEYS = {"name", "description", "license", "compatibility", "metadata", "allowed-tools"}
HEADER = "<!-- WYGENEROWANE z shared/{} przez scripts/build.py. Nie edytuj tutaj, edytuj shared/. -->\n"
EXCLUDE = {"evals", "__pycache__", ".DS_Store"}


def split_fm(text):
    m = re.match(r"^---\n(.*?)\n---\n?(.*)$", text, re.S)
    if not m:
        raise ValueError("brak frontmattera")
    return yaml.safe_load(m.group(1)), m.group(2)


def check_skill(d, errors, warnings):
    raw = (d / "SKILL.md").read_bytes()
    if raw.startswith(b"\xef\xbb\xbf"):
        errors.append(f"{d.name}: BOM w SKILL.md")
    try:
        fm, body = split_fm(raw.decode("utf-8").replace("\r\n", "\n"))
    except Exception as e:  # noqa: BLE001
        errors.append(f"{d.name}: frontmatter nie parsuje się w PyYAML ({e})")
        return {}, ""
    extra = set(fm) - SPEC_KEYS
    if extra:
        errors.append(f"{d.name}: pola spoza specyfikacji Agent Skills: {sorted(extra)}")
    name, desc = fm.get("name", ""), str(fm.get("description", ""))
    if name != d.name:
        errors.append(f"{d.name}: name '{name}' != nazwa folderu")
    if not re.fullmatch(r"[a-z0-9]+(-[a-z0-9]+)*", name or "") or len(name) > 64:
        errors.append(f"{d.name}: niepoprawna nazwa")
    if "claude" in name or "anthropic" in name:
        errors.append(f"{d.name}: nazwa zawiera słowo zastrzeżone")
    if not desc or len(desc) > 1024 or "<" in desc or ">" in desc:
        errors.append(f"{d.name}: description pusty, > 1024 znaków albo zawiera < >")
    lines = len(body.splitlines())
    if lines > 500:
        errors.append(f"{d.name}: SKILL.md ma {lines} linii (> 500)")
    for p in d.rglob("*"):
        if not p.name.isascii():
            errors.append(f"{d.name}: nazwa pliku nie-ASCII: {p.name}")
    for ref in set(re.findall(r"references/[A-Za-z0-9_.\-]+\.md", body)):
        if not (d / ref).exists():
            errors.append(f"{d.name}: odwołanie do nieistniejącego pliku {ref}")
    for bad in ("$ARGUMENTS", "${CLAUDE_PLUGIN_ROOT}", "${CLAUDE_SKILL_DIR}"):
        if bad in body:
            errors.append(f"{d.name}: użyto {bad} (nie działa poza Claude Code)")
    for ref in (d / "references").glob("*.md") if (d / "references").exists() else []:
        n = len(ref.read_text("utf-8").splitlines())
        if n > 100 and "## Spis" not in ref.read_text("utf-8"):
            warnings.append(f"{d.name}: {ref.name} ma {n} linii i brak '## Spis treści'")
    return fm, body


def sync_shared(check, errors):
    mapa = json.loads((SHARED / "mapa.json").read_text("utf-8"))
    for skill, files in mapa.items():
        sdir = PLUGIN / "skills" / skill
        if not sdir.exists():
            errors.append(f"mapa.json: brak skilla {skill}")
            continue
        for f in files:
            src = SHARED / f
            if not src.exists():
                errors.append(f"mapa.json: brak pliku shared/{f}")
                continue
            want = HEADER.format(f) + src.read_text("utf-8")
            dst = sdir / "references" / f
            if check:
                if not dst.exists() or dst.read_text("utf-8") != want:
                    errors.append(f"{skill}: nieaktualna kopia references/{f} (uruchom build.py)")
            else:
                dst.parent.mkdir(parents=True, exist_ok=True)
                dst.write_text(want, "utf-8", newline="\n")
        # usuń stare kopie wygenerowane, których nie ma już w mapie
        if not check and (sdir / "references").exists():
            for p in (sdir / "references").glob("*.md"):
                if p.name not in files and p.read_text("utf-8").startswith("<!-- WYGENEROWANE z shared/"):
                    p.unlink()


def zip_dir(src, out, prefix="", override=None):
    with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:
        for p in sorted(src.rglob("*")):
            rel = p.relative_to(src)
            if p.is_dir() or EXCLUDE & set(rel.parts):
                continue
            arc = prefix + rel.as_posix()
            data = override.get(rel.as_posix()) if override else None
            if data is not None:
                z.writestr(arc, data)
            else:
                z.write(p, arc)


def main():
    check = "--check" in sys.argv
    errors, warnings = [], []
    sync_shared(check, errors)
    skills = sorted(p for p in (PLUGIN / "skills").iterdir() if (p / "SKILL.md").exists())
    parsed = {d.name: check_skill(d, errors, warnings) for d in skills}
    for w in warnings:
        print("UWAGA:", w)
    if errors:
        print("\n".join("BŁĄD: " + e for e in errors))
        sys.exit(1)
    print(f"OK: {len(skills)} skilli poprawnych, kopie shared/ aktualne.")
    if check:
        return
    (DIST / "skills").mkdir(parents=True, exist_ok=True)
    for old in DIST.rglob("*.zip"):
        old.unlink()
    zip_dir(PLUGIN, DIST / "kwiatekmedia-meta-ads.zip")
    (DIST / "kwiatekmedia-meta-ads.plugin").write_bytes((DIST / "kwiatekmedia-meta-ads.zip").read_bytes())
    for d in skills:
        fm, body = parsed[d.name]
        fm = {k: v for k, v in fm.items() if k in SPEC_KEYS}
        skill_md = "---\n" + yaml.safe_dump(fm, allow_unicode=True, sort_keys=False, width=10**6) + "---\n" + body
        zip_dir(d, DIST / "skills" / f"{d.name}.zip", prefix=f"{d.name}/", override={"SKILL.md": skill_md})
    print("Zbudowano:")
    for p in sorted(DIST.rglob("*")):
        if p.is_file():
            print("  ", p.relative_to(ROOT), f"({p.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
