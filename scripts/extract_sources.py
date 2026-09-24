#!/usr/bin/env python3
"""Wyciąga źródła (URL + tryb dostępu + tytuł) z research/raw/*.md do scratch JSON."""
import re, json, pathlib, collections
RAW = pathlib.Path("research/raw")
url_re = re.compile(r"https?://[^\s)\]>\"'|,;`]+")
mode_re = re.compile(r"\[(PEŁNY|WYSZUKIWARKA|WIEDZA|TEST|OBLICZENIE)[^\]]{0,60}\]")
res = {}
for f in sorted(RAW.glob("*.md")):
    section_mode = None
    for line in f.read_text().splitlines():
        if line.startswith("#"):
            m = mode_re.search(line)
            section_mode = m.group(1) if m else (section_mode if line.startswith("####") else None)
        urls = url_re.findall(line)
        if not urls: continue
        modes = mode_re.findall(line)
        for u in urls:
            u = u.rstrip(".").rstrip("*")
            if "ads/library/?id=" in u: continue
            mode = None
            # tryb najbliżej przed URL w linii
            pos = line.find(u)
            before = [(mm.start(), mm.group(1)) for mm in mode_re.finditer(line) if mm.start() < pos]
            if before: mode = before[-1][1]
            elif modes: mode = modes[0]
            else: mode = section_mode
            # tytuł: tekst między trybem a URL
            prev_end = 0
            for mm in url_re.finditer(line):
                if mm.start() >= pos: break
                prev_end = mm.end()
            seg = line[prev_end:pos]
            seg = seg.split(" ; ")[-1].split("; ")[-1]
            seg = re.split(r"\[(?:PEŁNY|WYSZUKIWARKA|WIEDZA)[^\]]{0,60}\]", seg)[-1]
            title = re.sub(r"[*_`]|^[\s\-:;|(]+|[\s\-—:;(|]+$", "", seg).strip()
            title = re.sub(r"\s+", " ", title)[-140:]
            r = res.setdefault(u, {"url": u, "modes": set(), "titles": [], "files": set()})
            if mode: r["modes"].add(mode.replace("*", ""))
            if title and len(title) > 3: r["titles"].append(title)
            r["files"].add(f.name[:2])
out = []
for u, r in res.items():
    ms = r["modes"]
    if "PEŁNY" in ms: m = "PEŁNY"
    elif any(x.startswith("WYSZUKIWARKA") for x in ms): m = "WYSZUKIWARKA"
    elif "TEST" in ms: m = "PEŁNY"
    elif "12" in r["files"]: m = "WYSZUKIWARKA"
    elif re.search(r"(github\.com|githubusercontent\.com|code\.claude\.com|//claude\.com|support\.claude\.com|platform\.claude\.com)", u): m = "PEŁNY"
    else: m = "CYTOWANE"
    cands = [x for x in r["titles"] if 5 <= len(x) <= 120 and not any(q in x for q in ['„', '"', '“'])]
    title = min(cands, key=len) if cands else (min(r["titles"], key=len) if r["titles"] else "")
    out.append({"url": u, "mode": m, "title": title, "files": sorted(r["files"])})
json.dump(out, open("research/sources.json", "w"), ensure_ascii=False, indent=1)
c = collections.Counter(o["mode"] for o in out)
print(len(out), c)
