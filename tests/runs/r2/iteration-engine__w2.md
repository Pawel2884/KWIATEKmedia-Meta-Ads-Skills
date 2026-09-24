# ITERACJA: EkoTerm Instalacje | Okres: ostatnie 21 dni | Źródło: wklejone dane

## DECYZJE (zrób teraz)

**Zmiany poza kreacją (to one są dziś głównym ograniczeniem):**

1. Podłącz sygnał jakości leada do Meta (status z arkusza handlowca do Centrum leadów albo Conversions API). Bez tego Meta optymalizuje pod „kto najchętniej wyśle formularz”, czyli premiuje dokładnie tę reklamę, która daje najgorszą jakość (patrz wniosek 2).
2. Dodaj w arkuszu osobną kolumnę „powód odrzucenia”: dom nieocieplony / termin powyżej 6 miesięcy / nie odebrał telefonu. Bez tego nie da się rozdzielić winy kreacji od winy telefonu.
3. Sprawdź, czy formularz zamyka się (osobny ekran) dla odpowiedzi „dom nieocieplony” i „termin dłuższy niż 6 miesięcy”, czy tylko rejestruje je jako zwykłego leada.
4. Zgodność, pilne: nagłówek reklamy A „Dotacja Czyste Powietrze do 100%” obiecuje konkretną kwotę dofinansowania, która w programie zależy od dochodu i warunków wnioskodawcy. To ryzyko z modułu DOTACJE (nie obiecuj kwoty, jeśli zależy od warunków odbiorcy) i prawdopodobnie tłumaczy, dlaczego ta reklama ciągnie najgorszą jakość leadów. Do przepisania w tej partii, nie do przeczekania.

**Reklamy:**

1. ZASTĄP reklamę A (nagłówek i kąt). Najlepszy CPL w koncie (45 zł), ale najgorsza jakość (13% kwalifikowanych, koszt audytu 900 zł) i realne ryzyko zgodności. Nowa wersja obok starej, stara zostaje aktywna, dopóki nowa nie przejmie wolumenu.
2. SKALUJ reklamę B. Wyższy CPL (95 zł), ale najniższy koszt audytu w koncie (299 zł) i najwyższy odsetek kwalifikowanych (55%). To jest dziś prawdziwy zwycięzca, tylko po złej metryce nie widać tego na pierwszy rzut oka.
3. ZOSTAW reklamę D, z niewielkim wzrostem budżetu. Drugi najlepszy koszt audytu (438 zł), dobry CTR.
4. CZEKAJ z reklamą C do ok. 1500-2000 zł wydatku (dziś 1040 zł, 8 leadów, poniżej progu 10 dla oceny CPL). Sygnał, który już mamy: hold rate w porządku (41,5%), ale CTR w linku najniższy w koncie (0,60% przy 52 000 wyświetleń, to już rozstrzygnięte na tle innych reklam) - problem jest w ofercie/CTA po obejrzeniu, nie w hooku.
5. ZOSTAW reklamę E, zaplanuj jej większą ekspozycję w nowej partii. 180 zł wydatku i 1 lead to reklama nieprzetestowana, nie przegrana. Ma najwyższy hook rate w koncie (32% przy 9800 wyświetleń, próg spełniony).
6. CZEKAJ z reklamą F, niski priorytet, nie wyłączaj. 540 zł i 4 leady to za mało, by cokolwiek rozstrzygnąć (próg wyłączenia nieosiągnięty), ale karuzela realizacji nie pokazała żadnej przewagi. Jeśli w kolejnej partii nadal będzie płaska, zastąp ją nowym konceptem.

## CZEGO NAUCZYŁY NAS WYNIKI

1. Kąt „dotacja do 100%” (A) ciągnie tani wolumen, ale najgorszą jakość w koncie; kąty z konkretem (liczby z wyceny w B, dowód społeczny w D) dają 2-3x niższy koszt audytu. Status: SYGNAŁ (kwalifikowanych 8 i 12, poniżej pełnego progu 10-eventowego), ale mechanizm jest spójny i zgodny ze znanym wzorcem: obietnica „za darmo/dotacja” przyciąga łowców okazji, nie realnych kupujących.
2. Bez przekazywania statusu kwalifikacji do Meta system szuka „kto najchętniej wyśle formularz”, nie „kto kupi”. Status: mechanizm potwierdzony (dokumentacja Meta), efekt widoczny w danych: A dostała najwięcej wyświetleń i budżetu mimo najgorszej jakości.
3. Wideo C ma przyzwoity hold rate, ale najniższy CTR w linku w koncie. Status: ROZSTRZYGNIĘTE dla CTR (52 000 wyświetleń, próg dawno przekroczony), ZA MAŁO DANYCH dla CPL i jakości (8 leadów). Wąskie gardło to oferta/CTA po obejrzeniu, nowy hook tu nie pomoże.
4. UGC z rachunkiem przed i po (E) ma najmocniejszy hook w koncie, ale dostał śladowy budżet. Status: SYGNAŁ na hook rate, ZA MAŁO DANYCH na resztę lejka (1 lead).
5. Ekonomicznie audyt kosztuje dziś średnio 461 zł, a jego oczekiwana wartość to ok. 16 000 zł (48 000 zł x 1 do 3 domykalności). Status: ROZSTRZYGNIĘTE na podanych liczbach, z zastrzeżeniem, że to przychód, nie marża. Wniosek: głównym ograniczeniem nie jest opłacalność CPL, tylko dobór kreacji pod jakość i, jeśli zespół sprzedaży i instalacji ma zapas mocy, wolumen budżetu.

## REKLAMY (skrót)

A Dotacja 100%: 2700 zł, 60 leadów, CPL 45 zł, CPQL 338 zł, koszt audytu 900 zł, 3 audyty. Wąskie gardło: obietnica przyciąga zły segment, ryzyko zgodności.

B Koszty gaz vs pompa: 2090 zł, 22 leady, CPL 95 zł, CPQL 174 zł, koszt audytu 299 zł, 7 audytów. Wąskie gardło: brak, dziś najlepszy wynik jakościowy w koncie, ogranicza go tylko budżet.

C Montażysta 3 pytania: 1040 zł, 8 leadów, CPL 130 zł (przedział szeroki, za mało danych), CTR link 0,60% (najniższy w koncie). Wąskie gardło: oferta/CTA po dobrym hooku i holdzie.

D 640 montaży, własna ekipa: 1750 zł, 25 leadów, CPL 70 zł, CPQL 194 zł, koszt audytu 438 zł. Wąskie gardło: brak istotnego, dobry, zbalansowany wynik.

E UGC rachunek przed i po: 180 zł, 1 lead, hook rate 32% (najwyższy w koncie). Wąskie gardło: budżet, nie kreacja, nieprzetestowana.

F Karuzela realizacji: 540 zł, 4 leady, CTR 0,79%. Wąskie gardło: generyczny koncept bez wyraźnej przewagi, za mało danych na wyrok.

## NASTĘPNA PARTIA (5-6 reklam, start jak najszybciej)

1. I6 oferta/kąt, zamiennik A: „Sprawdź, na jakie dofinansowanie z Czyste Powietrze możesz realnie liczyć”
   Zmieniamy: usuwamy „do 100%”, dodajemy w treści filtr „dla kogo” (dom ocieplony, zmiana ogrzewania w ciągu pół roku) wprost w komunikacie, nie tylko w formularzu. Zostaje: format statyczny, CTA sprawdzenia dofinansowania. Hipoteza: filtr w samej reklamie podniesie % kwalifikowanych powyżej dzisiejszych 13%, nawet kosztem części wolumenu. Ocenimy po: % kwalifikowanych i CPQL po min. 10 kwalifikowanych leadach.

2. I2 wykonanie zwycięzcy B: krótkie wideo lub animowana statyka z tą samą tabelą kosztów gaz vs pompa
   Zmieniamy: format (ruch zamiast statyki), ewentualnie liczby dopasowane do lokalnego regionu (Podkarpacie/Małopolska). Zostaje: ten sam kąt „konkret z wyceny”. Hipoteza: ruch podniesie CTR przy zachowanej jakości leada z oryginału B. Ocenimy po: CTR i CPQL vs baseline B (174 zł).

3. I2 wykonanie zwycięzcy D: nowe zdjęcie ekipy, zaktualizowana liczba montaży, cytat klienta na grafice
   Zmieniamy: zdjęcie i dowód. Zostaje: kąt autorytetu/doświadczenia. Hipoteza: świeże wykonanie utrzyma CPQL D (194 zł) przy większym budżecie. Ocenimy po: CPQL po min. 10 kwalifikowanych.

4. I2/I3 dla E: pełne wideo UGC z rachunkiem przed i po, dłuższe niż 30 s, z mocniejszym zamknięciem i konkretną kwotą oszczędności na ekranie
   Zmieniamy: długość i jasność CTA na końcu. Zostaje: ta sama bohaterka i mechanizm dowodowy (rachunek). Hipoteza: taki sam mocny hook plus jaśniejsze zamknięcie podniesie CTR w linku, dziś nieoceniony przy 1 leadzie. Ocenimy po: CTR i liczbie leadów po min. 2000 zł wydatku.

5. I5 nowy kąt: „Co się dzieje po zgłoszeniu: audyt krok po kroku, ile trwa, kiedy przyjedziemy”
   Zmieniamy: motywację komunikatu na przejrzystość procesu (filtr CO DALEJ), zamiast dotacji czy porównania kosztów. Zostaje: sama oferta (bezpłatny audyt w domu). Hipoteza: transparentność procesu przyciągnie osoby bliżej decyzji, podniesie % kwalifikowanych podobnie jak B i D. Ocenimy po: % kwalifikowanych po min. 10 leadach.

6. I4 nowy segment (jeśli oferta to obejmuje, do potwierdzenia z klientem): dla domów ogrzewanych gazem z rosnącymi rachunkami, jeszcze nieocieplonych, pytanie o łączenie termomodernizacji z pompą
   Zmieniamy: odbiorcę i punkt wejścia. Zostaje: marka i dowody. Hipoteza: nowy, niezagospodarowany dotąd segment da świeży wolumen bez kanibalizacji B/D. Ocenimy po: liczbie leadów i % kwalifikowanych po min. 2000 zł wydatku.

Uwaga do produkcji: przy budżecie 300 zł dziennie (ok. 9000 zł miesięcznie) realnie ocenimy w tym miesiącu 2-3 z tych 6 kreacji do progu 10 leadów, reszta przejdzie do kolejnej partii z zapasem danych. Nie oceniaj żadnej z nich przed 10 leadami ani przed pełnym tygodniem od startu.

## NASTĘPNY PRZEGLĄD: ok. 15 października 2026 | Szukamy: czy nowa wersja A ma wyższy % kwalifikowanych niż 13%, czy B i D utrzymują koszt audytu poniżej 450 zł przy większym budżecie, czy E i nowe wideo osiągnęły 10 leadów do oceny CTR i CPL.

## Braki danych

Wydatek 8300 zł nie zgadza się z 300 zł dziennie x 21 dni (6300 zł). Sprawdź, czy budżet rósł w oknie i kiedy, bo to wpływa na ocenę stabilności CPL całego zestawu.

Brak dat startu poszczególnych reklam. Niski wydatek E i F może znaczyć, że wystartowały później, nie że Meta je odrzuciła.

Brak rozbicia tygodniowego. Same sumy z 21 dni nie pozwalają ocenić zmęczenia kreacji ani nasycenia grupy, tylko stan łączny.

Brak powodu dyskwalifikacji leada (ocieplenie / termin / brak odbioru telefonu) osobno w arkuszu, więc nie wiadomo, ile ze złej jakości A to wina kreacji, a ile brak odbioru telefonu.

Brak informacji, czy formularz zamyka się warunkowo dla odpowiedzi spoza kryteriów, czy tylko je rejestruje.

Brak marży i kosztu instalacji. 48 000 zł to przychód z zamówienia, nie zysk, więc realny próg opłacalności CPL i CPQL może być inny niż liczby w tym raporcie sugerują.

Brak informacji, czy konto ma podłączone Conversions API albo inny kanał przekazywania jakości leada do Meta.
