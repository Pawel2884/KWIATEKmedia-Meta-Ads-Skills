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

## Runda R2

(uzupełniane po zakończeniu rundy)
