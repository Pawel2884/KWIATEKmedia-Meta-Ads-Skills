# Jak działa system reklam Meta: co wiadomo, czego nie

Używaj tego pliku, gdy tłumaczysz decyzje o kreacjach, strukturze, testach albo spadkach wyników. Twierdzenia oznaczaj poziomem: (Meta) = A, (badania) = B, (praktyka) = C, (hipoteza) = D.

## Spis treści
1. Aukcja i jakość reklamy
2. Faza uczenia i edycje
3. Rozdział budżetu między reklamy
4. Zmęczenie i podobieństwo kreacji
5. Andromeda, GEM, Lattice: fakty
6. Czego NIE wiadomo (i co krąży jako mit)
7. Advantage+ i automatyzacja
8. Jak mówić o tym klientowi

## 1. Aukcja i jakość (Meta)

- Aukcję wygrywa reklama o najwyższej łącznej wartości: stawka, przewidywane prawdopodobieństwo akcji i jakość reklamy. Trafniejsza reklama może wygrać z wyższą stawką.
- Kreacja wpływa na aukcję dwoma kanałami: przewidywaną akcją u danej osoby i jakością reklamy.
- Jakość obniżają: ukrywanie informacji, żeby wymusić klik, sensacyjny język, engagement bait, ukrycia i zgłoszenia reklamy, słaba strona docelowa (odrzucenia, krótki czas).
- Powtarzane reklamy niskiej jakości mogą obniżyć konkurencyjność całej strony, domeny lub konta.
- Diagnostyka trafności (quality, engagement, conversion ranking) służy diagnozie i nie jest wejściem do aukcji. Działa od 500 wyświetleń. Produkty wymagające namysłu mają naturalnie niższy ranking konwersji.

## 2. Faza uczenia i edycje (Meta)

- Zestaw wychodzi z fazy uczenia po ok. 50 wynikach w tygodniu od ostatniej istotnej edycji.
- Istotna edycja: każda zmiana kreacji, dodanie nowej reklamy, zmiana targetowania, zdarzenia optymalizacji, strategii stawek, pauza powyżej 7 dni, duża zmiana budżetu.
- „Zmiana budżetu o ponad 20% resetuje uczenie” to uproszczenie praktyków. Meta mówi o skali zmiany, bez progu.
- „Ograniczone uczenie” to sygnał, że konfiguracja nie da ok. 50 zdarzeń tygodniowo. Jedna z oficjalnych przyczyn: za dużo reklam naraz.
- Wyniki oceniaj co najmniej w pełnym tygodniu. Koszty naturalnie rosną w trakcie kampanii, bo system najpierw bierze tańsze okazje.

## 3. Rozdział budżetu (Meta)

- System celowo nie dzieli budżetu równo. Pokazuje reklamę, która według predykcji da najniższy koszt u danej osoby.
- Reklama z małym wydatkiem nie jest przetestowana. Do równego porównania służy test A/B.
- Efekt rozbicia (breakdown effect): przesunięcie budżetu do elementu z wyższym średnim CPA bywa trafne. Oceniaj na poziomie zestawu.
- Do aukcji wchodzi tylko jedna reklama tego samego reklamodawcy (nakładanie aukcji). Wiele podobnych reklam do tych samych ludzi nie daje „więcej losów”. To tłumaczy objaw „z 20 reklam wydają 3” bez żadnych teorii o grupowaniu.

## 4. Zmęczenie i podobieństwo (Meta)

- Ads Manager pokazuje statusy „Creative limited” i „Creative fatigue” (koszt wyniku co najmniej 2× wyższy niż wcześniejszych reklam).
- Zmęczenie liczone jest per obraz lub wideo, także z ekspozycji w innych kampaniach strony.
- Zalecenie Meta: nowa reklama z nowym obrazem lub wideo „materially different”; oryginał zostaw, jeśli nadal dowozi.
- Account Insights pokazują „creative similarity”: obrazy lub wideo „too visually identical” mogą prowadzić do zmęczenia i wyższego kosztu. Wskaźnik dotyczy reklam statycznych z ostatnich 28 dni. Meta nie publikuje progu ani metody.
- Meta zaleca mniej reklam w zestawie, ale różnorodne zasoby. Za dużo reklam pogarsza wyniki.
- Meta: „focus has shifted from niche targeting to creative diversification as the best lever to find the most relevant audiences” (artykuł o dywersyfikacji; znany ze streszczeń). Wymiary: koncepty i kąty (problem–rozwiązanie, ból, opinie, demo) oraz formaty.

## 5. Andromeda, GEM, Lattice

- Andromeda (Meta, grudzień 2024) to silnik wyboru kandydatów (retrieval): z dziesiątek milionów reklam wybiera kilka tysięcy, które przechodzą do rankingu. Nie jest to cały „algorytm” ani aukcja.
- Meta raportowała +6% trafności wyboru i +8% jakości reklam w testowanych segmentach. To wewnętrzne metryki systemu, nie CPL reklamodawcy.
- Meta uzasadniała budowę Andromedy rosnącą liczbą kreacji w systemie (automatyzacja, generatywne AI).
- O tym, która reklama wygra u danej osoby, decyduje ranking (GEM, ogłoszony w 2025) i aukcja. Lattice łączy mniejsze modele w większe, uczące się między celami i powierzchniami.
- W Meta Business Help Center nie ma artykułu o Andromedzie. „Zasady Andromedy” w branży to interpretacje praktyków.

## 6. Czego NIE wiadomo (i mity)

Nie wiadomo:
- jak etap wyboru kandydatów traktuje wiele podobnych reklam jednego reklamodawcy;
- jaką miarą Meta liczy podobieństwo kreacji i czy tekst też się liczy;
- jaka jest optymalna liczba reklam w zestawie (Meta podaje tylko limity i kierunek);
- jak nowa reklama dostaje budżet na start;
- czy Andromeda działa tak samo we wszystkich celach i krajach;
- co liczby Meta oznaczają dla pojedynczego konta.

Mity (poziom D, nie podawaj jako faktu):
- „Entity ID grupuje podobne reklamy w jeden los w aukcji.” Brak w dokumentacji Meta; jedyny ślad to relacja z drugiej ręki.
- „Podobieństwo powyżej 60% (albo 70%) = tłumienie.” Meta nie publikuje skali ani progu.
- „Potrzebujesz 10–50 kreacji w zestawie.” Sprzeczne z zaleceniami Meta.
- „Andromeda to aktualizacja z 2025, która zmieniła wyniki kont.” To rozwijany od 2024 etap systemu.
- „Andromeda wybiera zwycięzcę aukcji.” Błędne.
- „Frequency powyżej 3 = wyłącz.” Meta nie podaje progu.
- „85% ogląda wideo bez dźwięku.” Dane wydawców z 2016 r.

Praktyczny wniosek jest ten sam bez mitów: różne koncepty (A), mniej reklam naraz (A), nowe obrazy i wideo przy zmęczeniu (A).

## 7. Advantage+ i automatyzacja (Meta)

- Kampanie Advantage+ są domyślne dla celów sprzedaż, aplikacje i leady.
- Advantage+ leads: Meta raportuje 14% niższy CPL (ufność powyżej 95%) i 10% niższy koszt leada jakościowego (ufność tylko 83%, 19 testów). Efekt na jakość sprawdzaj na własnych danych.
- Advantage+ audience: meta-analiza 469 testów Meta, niższy koszt wyniku (ok. 9,7% dla leadów). Advantage+ placements: ok. 11,7% niższy CPA. Liczby raportowane przez Meta, niezweryfikowane niezależnie.
- Advantage+ creative może zmieniać tekst i obraz. Przed publikacją checklista (plik `specyfikacje-meta.md`).
- Kampanie w kategoriach specjalnych (nieruchomości, praca, kredyt) mają ograniczone targetowanie.

## 8. Jak mówić o tym klientowi

- Nie tłumacz spadków „algorytmem” ani „Andromedą” bez danych. Najpierw: faza uczenia, zmęczenie, nakładanie aukcji, sygnał konwersji, sezon, formularz.
- Mów „Meta zaleca…” tylko o rzeczach z tego pliku oznaczonych jako Meta.
- Heurystyki praktyków nazywaj heurystykami („praktycy obserwują…”).
- Liczby Meta (np. −21% kosztu leada jakościowego) to średnie z testów Meta, nie obietnica dla konta klienta.
