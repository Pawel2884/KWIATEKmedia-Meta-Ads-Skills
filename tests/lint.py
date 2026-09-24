#!/usr/bin/env python3
"""
Automatyczna kontrola jakości wyników skilli KWIATEKmedia Meta Ads.

Sprawdza to, co da się sprawdzić maszynowo (resztę ocenia krytyk w red teamie):
  - frazy i konstrukcje typowe dla "AI slop" i korporacyjnego języka (lista w slop_pl.txt)
  - pauzy i półpauzy w tekstach reklam
  - długości: nagłówek, opis, pierwsza linia Primary Text, tekst na grafice
  - liczby, których nie ma w briefie (potencjalnie zmyślone dowody)
  - wykrzykniki, długie zdania
  - podobieństwo hooków i Primary Text między koncepcjami (kosmetyczne warianty)

Użycie:
  python3 tests/lint.py WYNIK.md [--brief BRIEF.md] [--json]
"""
import argparse
import json
import re
import sys
from itertools import combinations
from pathlib import Path

HERE = Path(__file__).parent
SLOP_FILE = HERE / "slop_pl.txt"

# Etykiety pól w wynikach skilli (format wyjścia jest ujednolicony w skillach).
FIELD_PATTERNS = {
    "primary": r"(?:primary text(?: \(wariant[^)]*\))?|tekst główny)",
    "headline": r"(?:nagłówek|headline)",
    "description": r"(?:opis|description)",
    "graphic": r"(?:tekst na grafice|napis na grafice|grafika|tekst na ekranie)",
    "hook": r"(?:hook)",
    "audio": r"(?:audio)",
}

LIMITS = {
    "headline_chars": 40,
    "description_chars": 30,
    "primary_first_line_chars": 125,
    "graphic_words": 12,
    "sentence_words": 16,
}


def load_slop():
    items = []
    if not SLOP_FILE.exists():
        return items
    for line in SLOP_FILE.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        # format: regex ;; powód
        pat, _, why = line.partition(";;")
        items.append((re.compile(pat.strip(), re.IGNORECASE), why.strip()))
    return items


def extract_fields(text):
    """Zwraca listę (pole, treść). Pole zaczyna się od linii z etykietą, np.
    'Nagłówek: ...' albo '**Primary Text**' i trwa do następnej etykiety lub nagłówka sekcji."""
    label_re = re.compile(
        r"^\s*(?:[-*>]\s*)?(?:\*\*)?(" + "|".join(FIELD_PATTERNS.values()) + r")(?:\s*\([^)]*\))?(?:\*\*)?\s*[:：]?\s*(?:\*\*)?\s*(.*)$",
        re.IGNORECASE,
    )
    stop_re = re.compile(r"^\s*(#{1,6}\s|KONCEPT|KREACJA|REKLAMA\s+\d|STATYKA|WIDEO|KIERUNEK|---|═|━|(?:[-*]\s*)?\**[A-ZĄĆĘŁŃÓŚŹŻ][A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ /()]{1,28}:\**(?:\s|$))")
    fields = []
    current = None
    buf = []
    for raw in text.splitlines():
        m = label_re.match(raw)
        if m:
            if current:
                fields.append((current, "\n".join(buf).strip()))
            label = m.group(1).lower()
            current = next(k for k, p in FIELD_PATTERNS.items() if re.fullmatch(p, label, re.IGNORECASE))
            buf = [m.group(2)] if m.group(2) else []
            continue
        if current and stop_re.match(raw):
            fields.append((current, "\n".join(buf).strip()))
            current, buf = None, []
            continue
        if current is not None:
            buf.append(raw)
    if current:
        fields.append((current, "\n".join(buf).strip()))
    # odfiltruj puste i usuń znaczniki markdown
    clean = []
    for k, v in fields:
        v = re.sub(r"[*_`>]", "", v).strip().strip('"„”')
        if v:
            clean.append((k, v))
    return clean


def numbers_in(text):
    # liczby z opcjonalnymi spacjami tysięcy i przecinkiem dziesiętnym
    nums = re.findall(r"\d[\d\s ]*(?:[.,]\d+)?", text)
    out = set()
    for n in nums:
        n = re.sub(r"[\s ]", "", n).replace(",", ".").rstrip(".")
        if n:
            out.add(n)
    return out


def ngrams(s, n=3):
    s = re.sub(r"\s+", " ", s.lower())
    return {s[i : i + n] for i in range(max(0, len(s) - n + 1))}


def sim(a, b):
    A, B = ngrams(a), ngrams(b)
    if not A or not B:
        return 0.0
    return len(A & B) / len(A | B)


def strip_forms(text):
    """Usuwa sekcje formularza (mają własne limity znaków i odpowiedzi z liczbami)."""
    out, skip = [], False
    for line in text.splitlines():
        if re.match(r"^\s*(?:#+\s*)?(?:\*\*)?FORMULARZ", line):
            skip = True
            continue
        if skip and re.match(r"^\s*(?:#+\s*)?(?:\*\*)?(REKLAMA|STATYKA|KONCEPT|KREACJA|WIDEO|SCENARIUSZ|Do uzupełnienia|Zgodność)", line):
            skip = False
        if not skip:
            out.append(line)
    return "\n".join(out)


def graphic_words(v):
    n = 0
    for line in v.splitlines():
        line = line.strip().lstrip("-* ")
        if not line or re.match(r"^(Marka|Logo|Hierarchia)\b", line, re.I):
            continue
        quoted = re.findall(r"[„\"“]([^”\"“„]+)[”\"“]", line)
        if quoted:
            n += sum(len(re.findall(r"\w+", q)) for q in quoted)
        else:
            line = re.sub(r"^[^:]{1,30}:\s*", "", line)
            n += len(re.findall(r"\w+", line))
    return n


def lint(text, brief=None):
    issues = []
    slop = load_slop()
    fields = extract_fields(strip_forms(text))
    ad_text = "\n".join(v for _, v in fields)

    for pat, why in slop:
        for m in pat.finditer(ad_text):
            issues.append(("slop", f"'{m.group(0)}' — {why}"))

    for k, v in fields:
        if re.search(r"[–—]", re.sub(r"\d\s?[–—]\s?\d", "", v)):
            issues.append(("pauza", f"[{k}] zawiera pauzę/półpauzę: {v[:80]}"))
        if k == "headline" and len(v.splitlines()[0]) > LIMITS["headline_chars"]:
            issues.append(("dlugosc", f"[nagłówek] {len(v.splitlines()[0])} zn. > {LIMITS['headline_chars']}: {v.splitlines()[0]}"))
        if k == "description" and len(re.sub(r"^\[\d\]\s*", "", v.splitlines()[0])) > LIMITS["description_chars"]:
            issues.append(("dlugosc", f"[opis] {len(v.splitlines()[0])} zn. > {LIMITS['description_chars']}: {v.splitlines()[0]}"))
        if k in ("primary", "audio"):
            first = v.strip().splitlines()[0] if v.strip() else ""
            first = re.split(r"(?<=[.!?])\s+", first)[0]
            if len(first) > LIMITS["primary_first_line_chars"]:
                issues.append(("dlugosc", f"[primary] pierwsze zdanie {len(first)} zn. > {LIMITS['primary_first_line_chars']}: {first[:80]}"))
            for sent in re.split(r"(?<=[.!?])\s+", v):
                w = len(sent.split())
                if w > LIMITS["sentence_words"]:
                    issues.append(("zdanie", f"[primary] zdanie {w} słów: {sent[:90]}"))
            for para in re.split(r"\n\s*\n", v):
                ns = len([x for x in re.split(r"(?<=[.!?])\s+", para.strip()) if x])
                if ns > 3:
                    issues.append(("akapit", f"[{k}] akapit ma {ns} zdań (max 2–3 na telefonie): {para.strip()[:70]}"))
            if v.count("!") > 1:
                issues.append(("wykrzyknik", f"[primary] {v.count('!')} wykrzykników"))
        if k == "graphic":
            words = graphic_words(v)
            if words > LIMITS["graphic_words"]:
                issues.append(("grafika", f"[tekst na grafice] {words} słów > {LIMITS['graphic_words']}: {v[:90]}"))

    if brief is not None:
        allowed = numbers_in(brief)
        for k, v in fields:
            v = re.sub(r"\d+(?:[.,]\d+)?\s?[–-]\s?\d+(?:[.,]\d+)?\s?s\b|\d+(?:[.,]\d+)?\s?(?:s|sek\.?|px|zn\.?)\b|#[0-9A-Fa-f]{6}|\b[HKSVI]\d{1,2}\b|^\s*\[?\d\]?[.)]?\s", "", v, flags=re.M)
            for n in numbers_in(v):
                if n not in allowed and not re.fullmatch(r"[0-9]", n):
                    issues.append(("liczba", f"[{k}] liczba '{n}' nie występuje w briefie — sprawdź, czy nie jest zmyślona"))

    # cała odpowiedź: wstęp i formy męskie w 1. osobie (np. „zrobiłem”), jeśli nie pochodzą z briefu
    first_line = next((l for l in text.splitlines() if l.strip()), "")
    if re.match(r"^\W*(Zrobił|Przygotował|Napisał|Przeczytał|Sprawdził|Przeanalizował|Poniżej|Oto |Świetnie|Jasne|Dobrze)", first_line):
        issues.append(("wstep", f"odpowiedź zaczyna się od wstępu: {first_line[:80]}"))
    dashes = len(re.findall(r"[–—]", re.sub(r"\d\s?[–—]\s?\d", "", text)))
    if dashes:
        issues.append(("pauza_w_odpowiedzi", f"{dashes} pauz/półpauz poza zakresami liczb w całej odpowiedzi"))
    if "```" in text:
        issues.append(("blok_kodu", "odpowiedź zawiera blok kodu"))
    brief_l = (brief or "").lower()
    for m in set(re.findall(r"\b[a-ząćęłńóśźż]{2,}[aeiouy](?:łem|łam)\b", text.lower())):
        if m not in brief_l:
            issues.append(("rodzaj", f"forma 1. os. z rodzajem: '{m}' (używaj form neutralnych)"))

    hooks = [v.splitlines()[0] for k, v in fields if k in ("hook", "primary") and v.strip()]
    for (i, a), (j, b) in combinations(enumerate(hooks), 2):
        s = sim(a, b)
        if s > 0.45:
            issues.append(("podobienstwo", f"hooki #{i+1} i #{j+1} podobne ({s:.2f}): '{a[:60]}' / '{b[:60]}'"))

    return fields, issues


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("file")
    ap.add_argument("--brief")
    ap.add_argument("--json", action="store_true")
    a = ap.parse_args()
    text = Path(a.file).read_text(encoding="utf-8")
    brief = Path(a.brief).read_text(encoding="utf-8") if a.brief else None
    fields, issues = lint(text, brief)
    if a.json:
        print(json.dumps({"fields": len(fields), "issues": issues}, ensure_ascii=False, indent=1))
        return
    print(f"Pola reklamowe wykryte: {len(fields)}")
    by = {}
    for cat, msg in issues:
        by.setdefault(cat, []).append(msg)
    for cat, msgs in by.items():
        print(f"\n## {cat} ({len(msgs)})")
        for m in msgs:
            print(" -", m)
    if not issues:
        print("Brak problemów wykrytych maszynowo.")


if __name__ == "__main__":
    main()
