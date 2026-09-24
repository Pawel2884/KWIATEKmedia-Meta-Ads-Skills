# WORKLOG — stan prac (plik do wznawiania pracy po odświeżeniu kontekstu)

## Ograniczenia środowiska (ustalone 2026-09-24)
- WebFetch: zablokowany dla większości domen (facebook.com, engineering.fb.com, wikipedia, reddit, ncbi, blogi marketingowe). Działa: github.com, code.claude.com.
- WebSearch: działa (tytuły + URL + streszczenie treści stron). Źródła z tego kanału oznaczane [WYSZUKIWARKA].
- Meta Ads MCP `ads_get_help_article`: zwraca pełne teksty Meta Business Help Center. Oznaczane [PEŁNY].
- Meta Ads MCP `ads_library_search`: Biblioteka Reklam Meta.

## Etapy
- [ ] 1. Research (11 agentów równolegle → research/raw/*.md)
- [ ] 2. Synteza → RESEARCH.md, SOURCES.md, PRINCIPLES.md
- [ ] 3. Architektura systemu + plugin
- [ ] 4. Skille (10)
- [ ] 5. Testy (5 biznesów) → TESTS.md, tests/
- [ ] 6. Red team → poprawki (iteracje)
- [ ] 7. Dokumentacja, paczka instalacyjna, CHANGELOG
- [ ] 8. Commit + push, e-mail (draft Gmail)

## Decyzje użytkownika
- 2026-09-24: Paweł: "pomiń moje skille, one są do usunięcia. Chcę zupełnie nowe. Nie sugeruj się moimi". → Istniejące skille KWIATEKmedia (kampania-lead-meta-pl, meta-ads-optymalizacja itd.) NIE są źródłem ani wzorem. System budowany od zera z researchu i zasad z briefu zadania.

## Agenci researchowi (uruchomieni 2026-09-24, wyniki → research/raw/)
01 meta-delivery-andromeda | 02 meta-creative-placements-leadads | 03 attention-mobile-visual | 04 persuasion-trust-memory | 05 practitioners-creative-strategy | 06 video-hooks-formats | 07 leadgen-quality-pl-law | 08 testing-fatigue-iteration | 09 copy-pl-aislop-image-prompts | 10 claude-plugin-format | 11 ad-library-pl-analysis
