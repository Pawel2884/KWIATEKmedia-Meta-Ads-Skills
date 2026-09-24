# Kalkulator planu kreacji

## Wzory

1. leady_mies = budżet_mies / CPL (licz dla dolnej i górnej granicy CPL).
2. leady_tydz = leady_mies / 4,35.
3. Faza uczenia: szansa na wyjście, gdy leady_tydz na zestaw ≥ ok. 50, czyli budżet dzienny ≥ ok. 10 × CPA (Meta).
4. zestawy = max(1, floor(leady_tydz / 50)). Więcej zestawów tylko z powodu biznesowego (np. osobne budżety regionów).
5. aktywne reklamy w zestawie (heurystyka): 2–3 przy do ok. 40 leadów/mies., 3–5 przy ok. 40–150, 4–6 przy ok. 150–400, 6–10 powyżej 400.
6. koncepty ocenialne na CPL w miesiącu ≈ leady_mies_testowe / 20 (20 leadów na koncept wykrywa tylko różnice ok. 2×).
7. nowe kreacje w miesiącu = min(zdolność produkcji; 1–2 × koncepty ocenialne; limit partii).
8. partia co: 3–4 tyg. (do ok. 3000 zł), 2–3 tyg. (3000–5000 zł), 1–2 tyg. (10 000 zł i więcej).

## Przykład 1: mały budżet

Budżet 1500 zł/mies., CPL 50–90 zł.
- leady: 17–30 mies., 4–7 tyg.
- faza uczenia: nie (potrzeba ok. 50/tydz.; budżet dzienny 50 zł < 10 × 50 zł).
- struktura: 1 kampania, 1 zestaw, Advantage+ audience, formularz wyższej intencji.
- reklamy naraz: 2–3 bardzo różne koncepty.
- ocena: CPL reklamy dopiero po ok. 10 leadach, czyli po 3–6 tygodniach; w miesiącu da się rozróżnić tylko koncepty różniące się ok. 2×.
- komunikat do klienta: ten budżet nie pozwala na testy statystyczne; decyzje po metrykach pośrednich, alokacji Meta i jakości leadów w oknie 60–90 dni.

## Przykład 2: średni budżet

Budżet 9000 zł/mies., CPL 80–150 zł (droga usługa).
- leady: 60–112 mies., 14–26 tyg.
- faza uczenia: nie (do 50/tydz. daleko), 1 zestaw.
- reklamy naraz: 3–5.
- partie co 2 tygodnie, 2–3 nowe koncepty w partii.
- ocena CPL konceptu po 10+ leadach (ok. 2–4 tygodnie), jakość (CPQL) po 10+ kwalifikowanych.
- test A/B tylko dla dużego pytania (np. formularz z ceną vs bez), bo 20% budżetu to ok. 12–22 leady miesięcznie.

## Przykład 3: duży budżet

Budżet 40 000 zł/mies., CPL 40–60 zł.
- leady: 667–1000 mies., 153–230 tyg.
- faza uczenia: tak, 3–4 zestawy możliwe, ale tylko z powodu biznesowego; inaczej 1–2 zestawy z większym budżetem.
- reklamy naraz: 6–10 w zestawie.
- nowe kreacje: 20–30 miesięcznie, partia co tydzień.
- stałe testy: narzędzie testu kreacji (do 5 reklam, ok. 20% budżetu, 7 dni) albo A/B dla konceptów.

## Korekty

- Wyższy CPL = proporcjonalnie mniej leadów, mniej konceptów ocenialnych, rzadsze partie.
- Ograniczona produkcja (np. klient nie nagra wideo): statyki i animowane statyki, wideo z lektorem na zdjęciach klienta.
- Wąska geografia (małe miasto): szybsze nasycenie grupy, częściej nowe segmenty i kąty niż nowe wersje tego samego.
- Special Ad Category: kreacja musi kwalifikować, bo targetowanie jest ograniczone.
