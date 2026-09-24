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
