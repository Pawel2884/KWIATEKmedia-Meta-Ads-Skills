# WORKLOG — stan prac (plik do wznawiania pracy po odświeżeniu kontekstu)

## Ograniczenia środowiska (ustalone 2026-09-24)
- WebFetch: zablokowany dla większości domen (facebook.com, engineering.fb.com, wikipedia, reddit, ncbi, blogi marketingowe). Działa: github.com, code.claude.com.
- WebSearch: działa (tytuły + URL + streszczenie treści stron). Źródła z tego kanału oznaczane [WYSZUKIWARKA].
- Meta Ads MCP `ads_get_help_article`: zwraca pełne teksty Meta Business Help Center. Oznaczane [PEŁNY].
- Meta Ads MCP `ads_library_search`: Biblioteka Reklam Meta.

## Etapy
- [x] 1. Research (11 agentów równolegle → research/raw/*.md, plus 12 weryfikacja 31 twierdzeń)
- [x] 2. Synteza → RESEARCH.md, SOURCES.md (888 adresów), PRINCIPLES.md (42 zasady)
- [x] 3. Architektura systemu + plugin (shared/ → references/ przez scripts/build.py)
- [x] 4. Skille (10)
- [x] 5. Testy: R1 (30), R2 (15), R3 (9), R4 (5); runda R1 (tests/run_matrix.sh r1), krytyk (tests/judge.sh r1), lint (tests/lint.py). Poprawki R1 w shared/ zapisane, skille po zakończeniu R1.
- [ ] 6. Red team → poprawki (iteracje)
- [ ] 7. Dokumentacja, paczka instalacyjna, CHANGELOG
- [ ] 8. Commit + push, e-mail (draft Gmail)

## Decyzje użytkownika
- 2026-09-24: Paweł: "pomiń moje skille, one są do usunięcia. Chcę zupełnie nowe. Nie sugeruj się moimi". → Istniejące skille KWIATEKmedia (kampania-lead-meta-pl, meta-ads-optymalizacja itd.) NIE są źródłem ani wzorem. System budowany od zera z researchu i zasad z briefu zadania.

## Agenci researchowi (uruchomieni 2026-09-24, wyniki → research/raw/)
01 meta-delivery-andromeda | 02 meta-creative-placements-leadads | 03 attention-mobile-visual | 04 persuasion-trust-memory | 05 practitioners-creative-strategy | 06 video-hooks-formats | 07 leadgen-quality-pl-law | 08 testing-fatigue-iteration | 09 copy-pl-aislop-image-prompts | 10 claude-plugin-format | 11 ad-library-pl-analysis

## Stan testów (aktualizuj)
- R1: 30 uruchomień (10 skilli × 3 przypadki), wyniki tests/runs/r1, krytyka tests/runs/r1/krytyka.
- Znalezione w R1 (systemowe): dopowiadanie faktów (jednostka dowodu, szczegóły historii, „bo…”), wstęp „Przygotowałem…” i formy męskie, nazwa firmy jako hook i pierwsze słowo, brak „co zyskam”, brak oczywistego kąta kategorii, opis > 30 znaków, ekrany/dokumenty/ikony w pierwszej klatce i ujęciach, pytanie o etap długu (komornik) w formularzu, hook „Zanim weźmiesz kolejną chwilówkę”, odpowiedzi formularza w formie męskiej, kryterium celu bez zamknięcia w formularzu, CTA „Zarejestruj się” przy umawianiu rozmowy.

- R2, R3 zakończone, poprawki wprowadzone (TESTS.md). R4 w toku. Potem: finalny build, TESTS R4, e-mail (draft Gmail), podsumowanie.
