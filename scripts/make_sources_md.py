#!/usr/bin/env python3
"""Tworzy treść listy źródeł (SOURCES.md) z research/sources.json. Uruchamiaj z katalogu głównego repo."""
import json, re, collections
from urllib.parse import urlparse
d = json.load(open("research/sources.json"))
CATS = [
 ("Meta Business Help Center, Instagram Help, Meta for Developers", r"facebook\.com/business/help|help\.instagram\.com|developers\.facebook\.com|facebook\.com/\d+$|facebook\.com/business/help"),
 ("Meta: inne źródła pierwotne (blogi inżynierskie, newsroom, Blueprint, IR)", r"engineering\.fb\.com|ai\.meta\.com|about\.fb\.com|facebook\.com/business/(news|ads)|facebookblueprint|investor\.atmeta|s21\.q4cdn|facebook\.com/iq|meta\.com|x\.com/Meta|instagramforbusiness|facebook\.com/instagramforbusiness"),
 ("Badania naukowe i duże zbiory danych", r"sagepub|informs\.org|sciencedirect|springer|wiley|tandfonline|frontiersin|ncbi|pubmed|researchgate|jstor|ssrn|arxiv|acm\.org|plos|mdpi|emerald|nature\.com|science\.org|apa\.org|repec|academia\.edu|nngroup|hbr\.org|hbs\.edu|tilburg|\.edu/|ucla|economic-policy\.pl|kantar|nielsen|lumen-research|amplified|warc|spiegel|thinkwithgoogle|business\.google|ads\.tiktok|tiktok\.com/business|upworthy|osf\.io|psycnet|journals\.|cambridge\.org|oup\.com|mi-3\.com|yougov|edelman|emarketer|img\.ly"),
 ("Prawo i regulatorzy (Polska, UE, USA jako wzorzec)", r"isap|sejm\.gov|eur-lex|uokik|gov\.pl|nil\.org\.pl|kirp|adwokatura|ora-|lexlege|arslege|prawo\.pl|ecfr|ftc\.gov|legalize|dziennikustaw|kif\.info|pwc\.pl|igifoodlaw|plgbc|focusonbusiness|tzlaw|glosfizjoterapeuty|mikroporady|iab\.org\.pl"),
 ("Dokumentacja Claude, specyfikacje i repozytoria GitHub", r"claude\.com|anthropic|github\.com|githubusercontent|agentskills"),
 ("Dokumentacja generatorów obrazów", r"openai\.com|deepmind|blog\.google|cloud\.google|ai\.google|midjourney|bfl\.ai|ideogram"),
 ("Polskie źródła praktyków, rynek i język", r"\.pl/|\.pl$|napoleoncat|datareportal|gemius|mediapanel|pbi\.org|promptowy|aiport"),
]
def cat(u):
    for name, rx in CATS:
        if re.search(rx, u, re.I): return name
    return "Praktycy, agencje, media branżowe (świat)"
groups = collections.OrderedDict((n, {"PEŁNY": [], "WYSZUKIWARKA": [], "CYTOWANE": []}) for n, _ in CATS)
groups["Praktycy, agencje, media branżowe (świat)"] = {"PEŁNY": [], "WYSZUKIWARKA": [], "CYTOWANE": []}
for o in d:
    groups[cat(o["url"])][o["mode"]].append(o)
lines = []
tot = collections.Counter(o["mode"] for o in d)
lines.append(f"Łącznie: {len(d)} unikalnych adresów. Pełny tekst przeczytany: {tot['PEŁNY']}. Znane z wyników wyszukiwarki (streszczenia, fragmenty): {tot['WYSZUKIWARKA']}. Znane z cytatu w przeczytanym materiale: {tot['CYTOWANE']}.\n")
for g, modes in groups.items():
    n = sum(len(v) for v in modes.values())
    if not n: continue
    lines.append(f"\n## {g} ({n})\n")
    for m, label in [("PEŁNY", "Przeczytane w całości [PEŁNY]"), ("WYSZUKIWARKA", "Znane ze streszczeń i fragmentów wyszukiwarki [WYSZUKIWARKA]"), ("CYTOWANE", "Znane z cytatu w przeczytanym materiale [CYTOWANE]")]:
        items = sorted(modes[m], key=lambda o: o["url"])
        if not items: continue
        lines.append(f"\n**{label}** ({len(items)})\n")
        for o in items:
            t = o["title"].strip(" .—-:;|")
            t = re.sub(r"^\d+\.\s*", "", t)
            bad = (not t) or t.startswith("http") or len(t) <= 4 or re.match(r"^(Źródła|\)|leadid|Źr\.)", t)
            if bad:
                pu = urlparse(o["url"])
                slug = [x for x in pu.path.split("/") if x and not re.fullmatch(r"[\d-]+|index\.html?|abs|full|article|doi|pdf", x)]
                t = pu.netloc.replace("www.", "") + (": " + re.sub(r"[-_]+", " ", slug[-1])[:70] if slug else "")
            files = ",".join(o["files"])
            lines.append(f"- {t} ({files}): {o['url']}")
print("\n".join(lines))
