# TESTS: jak system był testowany

## Metoda

1. **Prawdziwe uruchomienia**, nie symulacja. Każdy test to osobna sesja Claude z załadowanym pluginem (`claude -p "/kwiatekmedia-meta-ads:<skill> …" --plugin-dir plugins/kwiatekmedia-meta-ads`), bez dostępu do internetu i bez wiedzy o teście. Skrypt: `tests/run_matrix.sh`.
2. **Sześć różnych biznesów** (`tests/cases/`), briefy krótkie i niepełne, tak jak w praktyce:
   - 01 B2B: GPS dla flot (TrasaPro), problem z leadami od mikrofirm,
   - 02 usługa lokalna: gabinet fizjoterapii w Rzeszowie (zawód medyczny, tylko informacja),
   - 03 droga usługa lead gen: pompy ciepła z dotacją (38–62 tys. zł),
   - 04 e-commerce: krzesło ergonomiczne 1290 zł (kampania na zakupy),
   - 05 oferta wymagająca zaufania: kancelaria radcy, upadłość konsumencka,
   - 06 usługa B2B: sama agencja KWIATEKmedia,
   - plus 3 reklamy do audytu (słaba, dobra, przeładowana) i 3 zestawy wyników (za mało danych, jasne sygnały, zmęczenie kreacji).
3. **Lint maszynowy** (`tests/lint.py`, `tests/lint_round.sh`): słownik AI slop i języka urzędowego (ok. 130 wzorców), pauzy, długości pól (nagłówek 40, opis 30, pierwsze zdanie 125 znaków, grafika 12 słów, zdanie 16 słów, akapit do 3 zdań), liczby spoza briefu, wykrzykniki, podobieństwo hooków, wstęp, formy męskie w 1. osobie, bloki kodu.
4. **Krytyk (red team)**: każdy wynik czytany jako surowy Creative Director według rubryki `tests/rubryka-krytyka.md` (zrozumiałość w 2 s, jeden komunikat, język, wierność faktom, różnorodność strategiczna, jakość leadów, zgodność, praktyczność, specyfika skilla). W R1 dodatkowo niezależny krytyk w osobnej sesji (`tests/judge.sh`) dla 9 wyników, żeby sprawdzić, czy nie przeoczam problemów.
5. **Poprawka systemowa, nie punktowa**: każdy błąd powtarzający się w więcej niż jednym wyniku zmienia regułę w `shared/` albo w SKILL.md, a nie jeden tekst.

## Runda R1 (30 uruchomień, 20 udanych)

10 uruchomień (planer, silnik iteracji, master, jedna dywersyfikacja) trafiło na limit sesji konta i zostało powtórzonych w R2.

### Co działało od początku
- Brak klasycznego AI slop w tekstach reklam (0 trafień słownika Z w 19 z 20 wyników).
- Koncepty różniły się kątem, dowodem i formatem, nie kolorem. Test „obok siebie” przechodził.
- Styl informacyjny w fizjoterapii i u radcy prawnego, pominięcie opinii pacjentów, brak kwot dotacji, ceny netto w B2B, RRSO i Omnibus pilnowane.
- Pełne specyfikacje grafik (scena, postać, emocja, kompozycja, hook, krój, rozmiar, kolor, położenie tekstu, cel psychologiczny) i prompty bez przypadkowych napisów.
- Braki oznaczane `[UZUPEŁNIJ]` zamiast wymyślania opinii i liczb.

### Problemy znalezione przez krytyka (systemowe)

| Problem | Przykład z R1 | Poprawka |
|---|---|---|
| Dowód przeinaczony | „38 000 sprzedanych krzeseł” → „38 000 osób w Polsce kupiło”; „1870 opinii” → „prawie 2 tysiące”; wynik ankiety → „płacą 12% mniej” | zasada wierności dowodu (jednostka, okres, źródło, bez zaokrąglania w górę) w zasadach, `dowody-i-zaufanie.md` i checklistach |
| Dopisane szczegóły i uzasadnienia | „Marek dzwonił po kilka razy dziennie”; „dajemy 5 lat gwarancji, bo znamy każdy element”; „sklep działa od 2021” | zakaz dopisywania szczegółów historii i „bo…”; brakujący powód jako `[UZUPEŁNIJ]` |
| Twierdzenia techniczne i o rynku bez danych | „pompa w nieocieplonym domu grzeje drożej niż stary piec”; „brak rocznej umowy to rzadkość w branży”; „zwykłe krzesło tego nie wytrzyma” | porównania kosztów tylko z danymi klienta, mechanizm ogólny jako `Założenie`, twierdzenia o rynku tylko z danymi |
| Hook i pierwsze słowo = nazwa firmy | „Gabinet fizjoterapii Ruch w Rzeszowie.” jako hook wideo; każdy Primary Text zaczynał się od nazwy gabinetu | zasada „pierwsze słowa należą do odbiorcy”, wzory hooków informacyjnych dla zdrowia i prawa |
| Brak „co zyskam” | statyki agencji mówiły tylko o warunkach umowy | 5 pytań odbiorcy w zasadach i checklistach |
| Brak oczywistego kąta kategorii | żadna z 3 statyk krzesła nie mówiła o plecach po 8 godzinach | reguła „oczywisty kąt kategorii w zestawie” |
| Cechy osobiste w innych formach | „Zanim weźmiesz kolejną chwilówkę…”, „sprawdź, czy przysługuje Ci upadłość” | przykłady w `zgodnosc.md` i `hooki.md`; hook-generator odrzuca, nie „oznacza ryzyko” |
| Zakazane pytanie w formularzu | „mam już wezwanie od komornika” jako odpowiedź w pytaniu o etap | zasada: bez pytań o etap problemu finansowego lub zdrowotnego; dozwolone pytania podane |
| Kryterium celu bez zamknięcia | cel „zmiana ogrzewania w 6 miesięcy”, odpowiedź „później” trafiała jako zwykły lead | każde kryterium celu ma pytanie i zamknięcie albo osobną ścieżkę |
| Formy męskie i wstęp | „Przygotowałem…”, „Zrobiłem dwie statyki…”, odpowiedź formularza „nie znałem tej kwoty” | zakaz wstępu i form rodzajowych, także w formularzu |
| Ekrany, dokumenty, ikony w kadrze | „Paweł przy laptopie z panelem reklam”, „kalendarz z zaznaczonym terminem”, „animowane gwiazdki”, „rosnąca linia jak wykres” | pierwsza klatka to prawdziwa scena; liczby w napisie; ozdobniki udające treść zakazane |
| Limity pól | opis 42–62 znaki, akapity po 4–5 zdań | opis do 30 znaków (policz), akapity 1–2 zdania |
| CTA | „Zarejestruj się” przy umawianiu rozmowy i demo | „Zarezerwuj” albo „Wyślij zgłoszenie” |
| Audytor za łagodny i za surowy | reklama do całkowitego przepisania dostała 🟡; dobra reklama fizjoterapeuty dostała 2 „blokery” (w tym „4,9 jest podejrzanie blisko 5,0”); w poprawkach przykładowe liczby („np. 340 opinii”) | 🔴 gdy poprawka to nowa reklama; szara strefa prawa jako ISTOTNE; prawdziwa wysoka ocena nie jest podejrzana; brak przykładowych liczb |
| Język | „regulowana lędźwia”, „Umów 15 minut prezentacji” | lista częstych błędów i kalk w `jezyk-pl-anty-slop.md` |

Niezależny krytyk potwierdził te same główne problemy (dopowiadanie faktów, brak kąta „ból pleców”, formularz bez zamknięcia dla „później niż 6 miesięcy”) i dodał dwa: brak zgody klienta na cytat jako warunek przed publikacją oraz kalki językowe.

### Lint R1 (liczba problemów wykrytych maszynowo)

Formy męskie w 1. osobie: 9. Opis dłuższy niż 30 znaków: 8. Akapit dłuższy niż 3 zdania: 7. Liczby spoza briefu do sprawdzenia: 5 (część to przykłady w audycie, część przeinaczenia). Zdanie ponad 16 słów: 4. Tekst na grafice ponad 12 słów: 3. Wstęp: 3. Pauzy poza zakresami liczb: 3. Nagłówek ponad 40 znaków: 2. Podobne hooki: 2. Słownik AI slop: 1 trafienie w 20 wynikach.

## Runda R2 (15 uruchomień, wszystkie udane)

Zakres: 10 uruchomień skilli, których R1 nie sprawdziła (planer, silnik iteracji na 3 zestawach danych, master, dywersyfikacja agencji), oraz powtórka 8 przypadków z największą liczbą błędów w R1.

### Co poprawki z R1 naprawiły (potwierdzone)
- Fizjoterapia: hook to sytuacja pacjenta („Ból karku i pleców od biurka”), nie nazwa gabinetu; Primary Text nie zaczyna się od nazwy; opis w limicie; w wideo zero dokumentów i ekranów w kadrze.
- Kancelaria: zniknął hook „Zanim weźmiesz kolejną chwilówkę”; zamiast niego „Kolejna pożyczka na spłatę poprzedniej. Czasem lepszą drogą jest upadłość konsumencka.”; formularz pyta o rodzaj sprawy i porę kontaktu, nie o etap długu; konkurencja nie jest zmyślana.
- B2B: historia Marka bez dopisanych szczegółów, 12% podane jako wynik ankiety, przycisk „Zarezerwuj”, formularz zamyka się przy mniej niż 5 autach.
- Agencja: jest zdjęcie właściciela (instrukcja zrobienia telefonem), zero ozdobników, zero twierdzeń o rynku.
- Audytor: słaba reklama dostaje 🔴 NIE WDRAŻAJ; dobra reklama fizjoterapeuty dostaje jedną istotną uwagę (ocena Google w zawodzie medycznym jako ryzyko do sprawdzenia), bez nazywania prawdziwej oceny „podejrzaną”.

### Nowe skille w testach
- Silnik iteracji, za mało danych (4 dni, 3 leady): „nie, jeszcze nie wyłączać”, status ZA MAŁO DANYCH, przedział CPL, przegląd po pełnym tygodniu, nowe reklamy tylko w rezerwie. Zgodnie z oczekiwaniem.
- Silnik iteracji, jasne sygnały (pompy ciepła, dane z CRM): zwycięzca wybrany po koszcie audytu (299 zł), a nie po najniższym CPL (reklama z CPL 45 zł dawała audyt za 900 zł); wyłapane ryzyko prawne „dotacja do 100%”; najpierw zmiany poza kreacją (sygnał jakości do Meta, zamykanie formularza).
- Silnik iteracji, zmęczenie kreacji: poprawnie rozpoznane zmęczenie (frequency 1,5 → 3,4, CTR spada, koszt zakupu ×2,2), zmęczona reklama zostaje aktywna do czasu przejęcia wydatku przez nowe, druga reklama do skalowania.
- Planer: poprawna arytmetyka budżetu (1500 zł = ok. 25–50 leadów, 1 zestaw, 3 koncepty, ocena w 60–90 dni; 20 000 zł = 1 zestaw, 5 konceptów, próg fazy uczenia policzony), uczciwa sekcja „czego ten budżet nie sprawdzi”.
- Master: kompletny pakiet (decyzje na start, strategia, plan, 4 reklamy, formularz, rezerwa, checklista publikacji, braki).

### Problemy znalezione w R2 i poprawki

| Problem | Przykład | Poprawka |
|---|---|---|
| Wstęp w 1. osobie mimo reguły | „Przygotowałem 2 statyki…”, „Napisałem trzy reklamy…” | reguła przeniesiona z plików wiedzy do sekcji formatu w każdym SKILL.md |
| Półpauzy jako łączniki | 5 półpauz w sekcji braków strategii | ta sama linia formatu w SKILL.md: pauzy i półpauzy tylko w zakresach liczb |
| Sklejanie dowodu z grupą docelową | „1300 firm z transportu, budowlanki… przy flotach 5–100 aut” | reguła w `dowody-i-zaufanie.md` |
| Planer łamał zasady zawodu medycznego | kąt „rezultat”, opinie pacjentów w kreacji, porównanie z NFZ, pytanie o dolegliwość w formularzu | planer dostał moduł zgodności i sekcję „Zgodność konceptów i formularza” |
| Pytanie o dolegliwość w formularzu zdrowotnym | „czego dotyczy problem: kręgosłup lędźwiowy / szyjny” | zdrowie: bez pytań o dolegliwość, część ciała, zabieg; pytania o pierwszą wizytę, termin, porę kontaktu |
| Obietnica zdrowotna produktu | „bez bólu pleców po pracy” (krzesło) | nowy moduł: produkty niemedyczne bez obietnic efektu zdrowotnego |
| Wniosek o kącie z jednej reklamy | „kąt za kulisami nie działa w tej kategorii” po jednym wideo | iteracje: werdykt o kącie po co najmniej 2 wykonaniach |
| Iteracje nie zgłaszały naruszeń | reklama z opiniami pacjentów w danych fizjoterapeuty bez komentarza | iteracje: zgodność w decyzjach niezależnie od wyników |
| Audytor dopisywał zakres usługi | „technik sprawdzi dotacje i policzy koszt ogrzewania” | zasady poprawionej wersji w SKILL.md audytora: tylko fakty z reklamy i od klienta, bez narysowanych przycisków |
| Przycisk „Zarejestruj się” przy umawianiu rozmowy | master, audytor | mapa przycisków we wspólnej `specyfikacje-meta.md` |
| Master: ten sam tekst w 4 reklamach | każdy Primary Text z tym samym blokiem „9 lat, 400 spraw, bezpłatna rozmowa, cała Polska” | master i copy: każda reklama rozwija swój kąt w całym tekście, wspólne fakty najwyżej 1–2 zdania |
| Master przepisywał karty na własny format | Primary Text w jednym akapicie, etykieta „Opis sceny” | karty w pakiecie dokładnie w formacie skilli |
| Dywersyfikacja: formy męskie w nazwach kierunków, K# dla kierunków | „Sam ogarniasz reklamy”, „Pokrycie: K2, K3” | nazwy w formach neutralnych, kierunki numerowane „Kierunek N” |

### Lint R2

Na 15 wyników: wstęp 2 (w R1: 3 na 20), formy męskie 3 (w R1: 9), opis ponad 30 znaków 0 (w R1: 8), akapit ponad 3 zdania 4 (wszystkie w pakiecie mastera), pauzy 3, słownik AI slop 0.

## Runda R3 (9 uruchomień, wszystkie udane)

Zakres: przypadki z największą liczbą błędów w R1 (e-commerce: statyki, wideo, dywersyfikacja; pompy ciepła: copy; agencja: hooki; B2B: strategia; audyt przeładowanej reklamy), powtórka planera po dodaniu zgodności i master na nowym biznesie (fizjoterapia).

### Co potwierdzono
- Zero wstępów w 9 wynikach (w R1: 3 na 20, w R2: 2 na 15).
- E-commerce: oczywisty kąt kategorii na pierwszym miejscu („Podparcie lędźwi pod Twój wzrost”, „Osiem godzin przy biurku”); zniknęły „zwykłe krzesło tego nie wytrzyma”, animowane gwiazdki, „lędźwia”, zaokrąglanie opinii.
- Pompy ciepła: bez zmyślonych twierdzeń technicznych, przycisk „Zarezerwuj”, trzy różne kąty (cena, proces i dowód, kwalifikacja).
- Agencja: każdy hook wideo zaczyna się od prawdziwej sceny (Paweł mówi do kamery), pojawiła się korzyść (koszt zapytania), tezy z praktyki oznaczone jako poziom C.
- Planer fizjoterapii: bez kąta „rezultat”, bez opinii pacjentów, formularz bez pytań o dolegliwość.
- Master fizjoterapii: karty w formacie skilli, akapity po 1–2 zdania, formularz z pytaniem o dojazd i zamknięciem, czas oddzwonienia jako `[UZUPEŁNIJ]`.

### Co zostało i jak poprawiono

| Problem | Przykład | Poprawka |
|---|---|---|
| Wierność dowodu w nowej postaci | „38 000 krzeseł R3 w polskich domach” (brief: 38 000 krzeseł marki); „640 montaży od 2019” → „działamy od 2019”; „zwrot bez pytań” | przykłady „ten sam przedmiot” i „od roku” w zasadach; blok „Wierność dowodów” wpisany wprost do SKILL.md dywersyfikacji, mastera i stratega |
| Poprawiona wersja audytora nie usuwa własnego blokera | wskazał brak najniższej ceny z 30 dni, a poprawka jej nie zawiera; „Kup teraz” na grafice i w opisie | audytor sprawdza poprawioną wersję listą własnych blokerów przed oddaniem |
| Dwie statyki w tym samym układzie | tekst na płaskim tle + małe zdjęcie produktu w statyce 2 i 3 | najwyżej jedna statyka typograficzna w zestawie, pozostałe z różnych materiałów klienta |
| Dywiz ze spacjami jako myślnik | „ - ” w planie | reguła formatu i lint obejmują też dywiz ze spacjami |
| Czas oddzwonienia wymyślony z terminu wizyty | „oddzwaniamy w ciągu 3 dni roboczych” | planer: bez danych od klienta `[UZUPEŁNIJ: kiedy oddzwaniacie]` |
| Konstrukcja „to nie X, to Y” w hooku wideo | „Wygodne krzesło to nie miękkie krzesło” | wprost w checkliście wideo |
| Wspólny tekst reklam mastera | trzy reklamy fizjoterapii dzielą 3 z 4 akapitów | przy małej liczbie faktów (zawód medyczny, tylko informacja) akceptowalne; różnią się sytuacja, grafika i nagłówek |

### Lint R3

9 wyników: wstęp 0, formy męskie 0, opis ponad 30 znaków 0, AI slop 1 (hook „to nie X, to Y”), nagłówek o 1–2 znaki ponad 40: 2, pauzy poza zakresami 4 (listy braków).

## Runda R4

(uzupełniane po zakończeniu rundy)
