# Metryki, próby i decyzje

## Spis treści
1. Metryki i definicje
2. Minimalne próby i statusy
3. Niepewność CPL i klątwa zwycięzcy
4. Progi decyzji
5. Drzewo diagnozy
6. Drabina iteracji
7. Zmęczenie kreacji
8. Liczba kreacji według budżetu
9. Test w kampanii czy osobno

## 1. Metryki

| Metryka | Definicja | Do czego |
|---|---|---|
| Hook rate | 3-sekundowe odtworzenia / wyświetlenia | czy pierwsze sekundy zatrzymują (wideo) |
| Hold rate | ThruPlay / 3-sekundowe odtworzenia | czy środek trzyma (dla wideo < 15 s ThruPlay = ok. 97% długości) |
| Retencja | odtworzenia 25/50/75/95% | gdzie ludzie odpadają |
| CTR (link) | kliknięcia w link / wyświetlenia | czy obietnica i dopasowanie działają |
| CTR (all) vs CTR (link) | wysoki all, niski link | ciekawość bez jasnej oferty |
| CPM | koszt 1000 wyświetleń | konkurencja w aukcji i jakość reklamy |
| CVR | leady / kliknięcia (lub otwarcia formularza) | formularz i zgodność obietnicy |
| CPL | koszt leada | pomocniczo |
| % kwalifikowanych | kwalifikowane / wszystkie leady | jakość |
| CPQL | koszt leada kwalifikowanego | główna metryka |
| Koszt spotkania, CAC | koszt umówionego spotkania, klienta | decyzje budżetowe |
| Frequency | średnia liczba wyświetleń na osobę | kontekst zmęczenia (Meta nie podaje progu) |
| Diagnostyka trafności | quality, engagement, conversion ranking | od 500 wyświetleń, ostatnie 35 dni; nie jest wejściem do aukcji |

Benchmarki hook rate i hold rate z internetu (np. „dobry hook rate to 30%”) nie mają metodologii (C/D). Porównuj reklamy w obrębie konta, placementu i podobnej długości.

## 2. Minimalne próby i statusy

Każda liczba w raporcie ma status:
- **ZA MAŁO DANYCH**: poniżej progu. Wolno opisać, nie wolno wnioskować.
- **SYGNAŁ**: próg osiągnięty, kierunek widoczny, niepewność duża.
- **ROZSTRZYGNIĘTE**: próba pozwala podjąć decyzję.

| Co oceniasz | Minimum |
|---|---|
| Cokolwiek | pełny tydzień od startu lub istotnej edycji (A) |
| Diagnostyka trafności | 500 wyświetleń (A) |
| Hook rate reklamy | ok. 1500–2500 wyświetleń w placemencie (B) |
| CTR reklamy (różnica ok. 50%) | ok. 8000 wyświetleń przy CTR ok. 1% (B) |
| CVR (różnica ok. 50%) | ok. 300–700 kliknięć (B) |
| CPL reklamy | 10 leadów (B) |
| Stabilny CPL zestawu | ok. 50 zdarzeń od ostatniej istotnej edycji albo 28 dni przy małym budżecie (A/D) |
| Różnica CPL 20–30% między wariantami | ok. 150–350 leadów na wariant (B) |

## 3. Niepewność CPL i klątwa zwycięzcy

Przedział 95% prawdziwego CPL względem obserwowanego:
- 3 leady: 0,34–4,98×
- 5 leadów: 0,43–3,10×
- 10 leadów: 0,54–2,09×
- 20 leadów: 0,65–1,64×
- 50 leadów: 0,76–1,35×
- 100 leadów: 0,82–1,23×

Pięć identycznych reklam po 10 leadów: w ok. 80% przypadków jedna wygląda na tańszą o co najmniej 23%. „Zwycięzca” z małej próby jest zwykle gorszy, niż pokazują dane (prognozuj CPL × 1,15–1,3 przy 10–20 leadach).

Bayes (równy wydatek): 4 vs 6 leadów to tylko 73% szans, że lepsza jest naprawdę lepsza. 10 vs 20 to 97%.

## 4. Progi decyzji

- Wyłączenie reklamy z 0 leadów: wydatek co najmniej 3× docelowy CPL (ryzyko błędu ok. 5%). Przy spójnie słabym hook rate lub CTR (dolny kwartyl konta, wystarczająca próba): co najmniej 2× (ryzyko ok. 14%).
- Wyłączenie drogiej reklamy z leadami: co najmniej 10 leadów i ok. 90% szans, że CPL > docelowy.
- „Zwycięzca”: ok. 90% szans przy drogich decyzjach (skalowanie, porzucenie konceptu), 75–80% przy tanich (kolejność iteracji). Przy wielu reklamach wymagaj potwierdzenia w kolejnym tygodniu.
- Test A/B Meta: Meta ogłasza zwycięzcę od 65% pewności. To słaby sygnał. Do decyzji nieodwracalnych 90% albo powtórzenie.
- Budżet zestawu: dzienny co najmniej 10× CPA daje szansę wyjścia z fazy uczenia (A). Poniżej: 1 kampania, 1 zestaw, status „ograniczone uczenie” zaakceptowany, bez dzielenia budżetu.
- Reklama z małym wydatkiem jest nieprzetestowana. Meta celowo nie rozdziela budżetu równo (A). Oceniaj zestaw jako całość, chyba że cel jakościowy (CRM) mówi co innego.

## 5. Drzewo diagnozy

Krok 0. Higiena danych:
- Błędy i odrzucenia? Napraw, nie diagnozuj kreacji.
- Faza uczenia krócej niż 7 dni od istotnej edycji? Czekaj.
- Zmiana formularza, piksela, CRM, oferty, sezonu w oknie? Okna nieporównywalne.
- Próba poniżej progu? Status ZA MAŁO DANYCH.

Krok 1. Reklama, zestaw czy rynek?
- Wszystkie reklamy pogarszają się razem, CPM konta rośnie skokowo, CTR i CVR stabilne → zmiana aukcji lub sezon. Nie wymieniaj kreacji w panice.
- Spada odsetek pierwszych wyświetleń, rośnie frequency zestawu → nasycenie grupy. Poszerz grupę lub obszar, dodaj koncepty dla nowych segmentów.
- CVR spada nagle we wszystkich reklamach → formularz, śledzenie, CRM.
- Pogarsza się jedna reklama, inne działają → diagnoza tej reklamy.

Krok 2. Lejek reklamy (porównanie z innymi reklamami konta):
- Niski hook rate → nowe pierwsze 1–3 s (3–5 hooków różnych typów na tym samym ciele).
- Dobry hook, niski hold → środek: korzyść wcześniej, krótsza wersja, szybsze tempo, dowód wcześniej.
- Dobra uwaga, niski CTR link → wysoki CTR all: ciekawość bez jasnej oferty. Ogólnie niski: nowy kąt lub segment.
- Dobry CTR, niski CVR → formularz lub niespójna obietnica. Nowa kreacja nie pomoże.
- Dobry CPL, słaba jakość → reklama przyciąga złych ludzi: kwalifikacja w komunikacie (dla kogo, cena, warunki) i formularz (pytania, Higher intent, SMS).
- Wszystko dobre, trend pogorszenia przy rosnącej frequency → zmęczenie (sekcja 7).
- CPM wyraźnie wyższy niż innych reklam i niski quality ranking → cechy niskiej jakości (clickbait, sensacja, ukrywanie informacji).

Diagnostyka trafności Meta: niska jakość + dobre zaangażowanie + niska konwersja = „click-baity”. Produkty wymagające namysłu mają naturalnie niższy ranking konwersji.

## 6. Drabina iteracji

Od najtańszej do najdroższej zmiany:
1. **I1 Hook**: pierwsze 1–3 s, nagłówek na grafice, pierwsza klatka. Gdy hook lub CTR słaby, reszta OK.
2. **I2 Wykonanie**: ten sam scenariusz, inny montaż, osoba, długość, proporcje.
3. **I3 Format**: statyka → animowana statyka → wideo → karuzela → opinia.
4. **I4 Segment**: ta sama oferta, inny odbiorca (call-out, scena, obiekcja).
5. **I5 Kąt lub koncept**: nowa motywacja lub obietnica, „materially different”.
6. **I6 Oferta lub formularz**: lead magnet, gwarancja, cena, pytania, typ formularza.

Reklama, która niesie większość wydatku: tylko małe zmiany jako NOWE reklamy, nigdy edycja. Świeży zwycięzca: większe skoki (I3–I5).

Proporcje po znalezieniu zwycięzcy (C): ok. 50–70% iteracji zwycięzcy, 20–30% nowe segmenty i formaty, 10–25% nowe koncepty. Gdy nic nie działa: prawie wyłącznie nowe, bardzo różne koncepty.

## 7. Zmęczenie kreacji

Meta (A): status „Creative limited” (koszt wyniku wyższy niż wcześniejszych reklam, poniżej 2×) i „Creative fatigue” (co najmniej 2×). Zmęczenie liczone per obraz lub wideo, także z innych kampanii strony. Zalecenie: nowy obraz lub wideo „materially different”, stara reklama zostaje, jeśli nadal dowozi; reklamy bez wyników wyłącz.

Detektor systemu (D, do kalibracji), wszystkie warunki naraz:
- reklama działa co najmniej 14 dni, ma co najmniej 20 leadów w oknie bazowym i 10 w bieżącym;
- frequency wyraźnie rośnie;
- CTR spadł do ok. 75% bazowego lub CPL wzrósł do ok. 1,5× bazowego (ok. 80% pewności);
- wykluczone: zmiana aukcji, nasycenie grupy, zmiana formularza lub sezonu.

Frequency nie ma progu Meta. „Wyłącz przy frequency 3” to folklor.

## 8. Liczba kreacji według budżetu

Wzory:
- leady miesięcznie = budżet / oczekiwany CPL; tygodniowo = / 4,35.
- zestawy = max(1, leady tygodniowo / 50).
- koncepty ocenialne na CPL w miesiącu ≈ leady testowe / 20 (20 leadów wykrywa tylko różnice ok. 2×).
- nowe kreacje w miesiącu = najmniejsza z: możliwości produkcji, 1–2 × koncepty ocenialne, limit partii.

Orientacyjnie przy CPL 40 zł (przy wyższym CPL wszystko proporcjonalnie mniej):
| Budżet mies. | Leady mies. | Aktywne reklamy w zestawie | Nowe kreacje mies. | Partia co |
|---|---|---|---|---|
| 1500 zł | ok. 38 | 2–3 | 2–4 | 3–4 tyg. |
| 3000 zł | ok. 75 | 3–4 | 3–5 | 2–3 tyg. |
| 5000 zł | ok. 125 | 3–5 | 4–6 | 2 tyg. |
| 10 000 zł | ok. 250 | 4–6 | 6–10 | 1–2 tyg. |
| 20 000 zł | ok. 500 | 5–8 (1–2 zestawy) | 10–20 | 1 tyg. |
| 50 000 zł | ok. 1250 | 6–10 (2–5 zestawów) | 20–40 | 1 tyg. |

Wzory 1–2 i limity to A plus arytmetyka, wzory 3–4 to B, liczby w kolumnach to heurystyka C/D do kalibracji. Przy budżecie, który nie pozwala na testy statystyczne, powiedz to klientowi wprost: oceniamy po metrykach pośrednich i alokacji Meta, CPL w oknie 60–90 dni.

## 9. Test w kampanii czy osobno

| Sposób | Kiedy |
|---|---|
| Nowe reklamy partiami w głównym zestawie | domyślnie przy budżetach poniżej ok. 10 tys. zł miesięcznie |
| Narzędzie testu kreacji Meta (do 5 reklam, ok. 20% budżetu, 7 dni) | od ok. 10 tys. zł albo gdy test da 15–25 leadów na reklamę |
| A/B test Meta | ważne pytania strategiczne (koncept vs koncept, oferta, formularz), moc co najmniej 80%, min. 7 dni |
| Osobna kampania testowa | tylko duże konta; fragmentuje uczenie, Meta odradza testowanie przez ręczne włączanie i wyłączanie |
