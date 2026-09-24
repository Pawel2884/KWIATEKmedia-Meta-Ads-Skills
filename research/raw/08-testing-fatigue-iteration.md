# 08 — Testowanie kreacji, statystyka małych prób, zmęczenie kreacji, metryki diagnostyczne, logika iteracji

> Research agent 08, 2026-09-24. STATUS: UKOŃCZONY (wersja do syntezy).
> **Tryby dostępu:** [PEŁNY] pełny tekst (Meta Help Center przez MCP, katalog pól/schematy narzędzi Meta Ads MCP, pliki z github.com — przy WebFetch treść streszcza model pośredniczący, oznaczone [PEŁNY*]); [WYSZUKIWARKA] tylko streszczenie z WebSearch; [WIEDZA] wiedza modelu, NIEPOTWIERDZONA w tej sesji; [OBLICZENIE] moje obliczenia (Python, stdlib) z podanymi założeniami.
> **Poziomy dowodu:** A = Meta (źródło pierwotne); B = badania / duże zbiory / matematyka statystyczna; C = praktycy z przykładami; D = opinia / heurystyka bez danych.
> Surowe notatki ze wszystkich zapytań — Załącznik A. Pełne tabele obliczeń — sekcja 3 i Załącznik B.

---

## 1. Zakres i metoda

**Zakres:** (1) oficjalne mechanizmy Meta: learning phase, significant edits, learning limited, A/B test, narzędzie creative testing, breakdown effect, koncentracja wydatków, zmęczenie kreacji, frequency, ad relevance diagnostics; (2) statystyka małych prób (CTR, hook rate, CVR, CPL), wielokrotne porównania, regresja do średniej, podejście bayesowskie, reguły "kill"; (3) zmęczenie kreacji vs nasycenie grupy vs sezonowość vs zmiana aukcji; (4) metryki diagnostyczne i benchmarki; (5) logika iteracji i planowanie liczby kreacji wg budżetu; (6) jakość leadów w ocenie kreacji.

**Metoda i skala:**
- **46 zapytań do Meta Help Center** przez `ads_get_help_article` (pełne teksty artykułów, ~60 unikalnych artykułów) — rdzeń dowodów poziomu A.
- **Katalog pól Meta Ads MCP** (`ads_get_field_context`, 122 pola) i **schematy narzędzi** (`ads_experiment_abtest_create_test`, `ads_insights_*`) — co system realnie może pobrać/uruchomić.
- **WebSearch: tylko 7 zapytań** — wspólny budżet sesji (200 wywołań na wszystkich agentów) wyczerpał się. To główne ograniczenie tego raportu: benchmarki branżowe i część wiedzy praktyków i badań akademickich NIE zostały zweryfikowane w tej sesji — są oznaczone [WIEDZA] i wymagają potwierdzenia przed użyciem jako faktów.
- **WebFetch:** jonloomer.com zablokowany (1 próba). github.com działa → pełne transkrypcje Motion Creative Strategy Bootcamp (praktycy, C) i repo narzędzia gomarble (D).
- **Obliczenia własne** (sekcja 3): liczebności prób (test z dla dwóch proporcji; model Poissona dla CPL przy równym wydatku), przedziały ufności dla CPL (Garwood/Wilson-Hilferty), symulacje Monte Carlo (20–40 tys. powtórzeń, ustalony seed) dla wielokrotnych porównań, klątwy zwycięzcy i reguł "kill", bayesowskie P(B lepsze) w modelu Gamma-Poisson.
- **Krzyżowa kontrola z plikami 01, 02, 05, 06** innych agentów — wskazana tam, gdzie się pokrywają.

**Główne zastrzeżenie metodyczne dla wszystkich obliczeń:** modele zakładają niezależne zdarzenia (Poisson/dwumian). Prawdziwe dane reklamowe mają **nadmierną zmienność** (dzień tygodnia, pora dnia, aukcja, zmiany algorytmu), więc podane liczebności to **dolne granice** — w praktyce potrzeba więcej danych, nie mniej.

---

## 2. Kluczowe ustalenia

### 2.A Learning phase, istotne edycje i budżet

**A1. Teza:** Zestaw reklam wychodzi z fazy uczenia po ok. 50 zdarzeniach optymalizacyjnych w ciągu 7 dni od ostatniej istotnej edycji; do tego czasu wyniki "nie muszą przewidywać" przyszłych.
| Poziom: **A** | Źródła: [PEŁNY] About the learning phase — https://www.facebook.com/business/help/112167992830700 ; [PEŁNY] Cost per optimization event — https://www.facebook.com/business/help/1707952432550214 ; [PEŁNY] Last significant edit — https://www.facebook.com/business/help/942374239243867 |
Cytat: "this usually occurs after about 50 results in the week after the ad set's last significant edit"; "during the learning phase, performance is less stable, so your results aren't necessarily indicative of future performance"; "we recommend waiting until the ad set generates around 50 optimization events, but some ad sets stabilize earlier".
**Implikacja:** ITERATION ENGINE nie ocenia CPL zestawu w fazie uczenia i zawsze liczy wyniki "od ostatniej istotnej edycji" (pole `learning_stage_info` w MCP podaje czas tej edycji).

**A2. Teza:** Dodanie nowej reklamy do zestawu i każda zmiana kreacji to istotna edycja, która cofa zestaw do fazy uczenia.
| Poziom: **A** | [PEŁNY] Significant edits and learning phase — https://www.facebook.com/business/help/316478108955072 |
Cytat: "any change to ad creative"; "adding a new ad to your ad set"; "pausing your ad set for 7 days or longer"; budżet: "$100 to $101 isn't likely ... $100 to $1000 ... may". Przy budżecie kampanii Advantage+ dodanie nowego zestawu NIE resetuje pozostałych.
**Implikacja:** nowe kreacje wprowadzamy **partiami** (kilka naraz, rzadziej), nie pojedynczo co 2 dni; nie edytujemy działających zwycięzców — nowe wersje jako nowe reklamy.

**A3. Teza:** "Learning limited" to nie kara, tylko sygnał, że konfiguracja nie da ~50 zdarzeń/tydzień; jedną z przyczyn jest zbyt wiele reklam naraz.
| Poziom: **A** | [PEŁNY] About learning limited — https://www.facebook.com/business/help/269269737396981 ; [PEŁNY] About managing ad volume — https://www.facebook.com/business/help/2720085414702598 |
Cytat: "learning limited isn't a penalty"; przyczyny: "small audience size, low budget, low bid or cost control, high auction overlap, an infrequent optimization event, or other issues such as running too many ads at the same time"; "when an advertiser runs too many ads at once, each ad delivers less often ... too many ads can result in worse performance"; "decrease ads per ad set, but maintain diverse creative assets per ad set. one ad can contain multiple (up to 10) creative assets".
**Implikacja:** liczba aktywnych reklam w zestawie jest funkcją budżetu (sekcja 5). Przy małych budżetach status learning limited jest **strukturalny** — system ma go traktować jako oczekiwany, a nie jako alarm do ciągłych poprawek.

**A4. Teza (reguła budżetowa):** Meta podaje jako "dobrą ogólną regułę" budżet dzienny ≥ 10 × średni koszt zdarzenia optymalizacyjnego.
| Poziom: **A** (reguła) + [OBLICZENIE] (konsekwencje) | [PEŁNY] Troubleshoot: your ad set hasn't delivered enough since it started — https://www.facebook.com/business/help/666335734044063 |
Cytat: "a good general rule is that your daily budget should be at least 10 times the average cost of your optimization event".
[OBLICZENIE]: 10 × CPL dziennie ≈ 70 × CPL tygodniowo, czyli spójnie z ~50 zdarzeniami/tydzień. Przy CPL 40 zł: ≥ 400 zł/dzień ≈ 12 000 zł/mies. **na jeden zestaw**. Budżet 1500 zł/mies. (≈ 49 zł/dzień) spełnia tę regułę tylko przy CPL ≤ ~5 zł.
**Implikacja:** CAMPAIGN CREATIVE PLANNER liczy wprost `leady_tyg = budżet_tyg / CPL` i `max_zestawów = floor(leady_tyg / 50)` (min. 1). Rozbijanie małego budżetu na wiele zestawów lub kampanię testową jest nieuzasadnione.

**A5. Teza:** Wyniki ocenia się na średnich tygodniowych; po zmianie odczekuje się co najmniej 7 dni.
| Poziom: **A** | [PEŁNY] About cost per result goal — https://www.facebook.com/business/help/272336376749096 ; [PEŁNY] Understand fluctuations in ad performance — https://www.facebook.com/business/help/1364841787225722 |
Cytat: "day-to-day costs naturally fluctuate; evaluate performance using weekly averages rather than daily results. wait at least 7 days after any adjustment before re-evaluating"; "analyze performance over at least a full week"; cost per result goal "works best when your ad set gets at least 50-100 weekly conversions"; budżet dzienny może być przekroczony o 75% w danym dniu (maks. 7× tygodniowo).
**Implikacja:** minimalne okno decyzji = 7 pełnych dni (tydzień kalendarzowy wyrównuje efekt dnia tygodnia). Zakaz decyzji na podstawie wyników dziennych/godzinowych.

### 2.B Narzędzia testowe i dlaczego zwykłe porównanie reklam w zestawie NIE jest testem

**B1. Teza:** A/B test Meta losowo dzieli odbiorców (nikt nie widzi obu wersji), trwa 1–30 dni (zalecane min. 7), obejmuje do 5 wersji, a zwycięzcę wybiera po koszcie na wynik. Próg "zwycięstwa" to jednak tylko 65% pewności.
| Poziom: **A** (fakty) + **B** (interpretacja progu) | [PEŁNY] About A/B testing — https://www.facebook.com/business/help/1738164643098669 ; [PEŁNY] Best practices for A/B testing — https://www.facebook.com/business/help/290009911394576 ; [PEŁNY] About experiments — https://www.facebook.com/business/help/1915029282150425 ; [PEŁNY] About confidence in tests — https://www.facebook.com/business/help/239549606692303 ; [PEŁNY] How winning campaigns are determined — https://www.facebook.com/business/help/166313650471318 ; [PEŁNY] Create an A/B test by duplicating an ad set or ad — https://www.facebook.com/business/help/560857351380163 |
Cytaty: "we recommend a minimum of 7-day tests. a/b tests can only be run for a maximum of 30 days"; "for lift tests, a 90 percent or higher confidence percentage represents a statistically reliable result. for a/b tests, a 65 percent or higher confidence percentage represents a winning result"; "meta simulates possible outcomes tens of thousands of times"; "we recommend running tests with at least 80% estimated power"; zwycięzca może mieć wyższy koszt, gdy "the length of the study was too short / there weren't enough results".
[OBLICZENIE] 65% to słaby dowód: przy równym wydatku układ 4 vs 6 leadów daje już P(B tańsze) ≈ 73% (tabela J).
**Implikacja:** narzędzie A/B Meta jest właściwe do decyzji, które mają znaczenie (randomizacja, kontrola mocy testu), ale system **nie przyjmuje progu 65% jako "dowodu"** przy decyzjach nieodwracalnych (np. porzucenie konceptu). Przed testem system każe odczytać "estimated power" (≥80%).

**B2. Teza:** Narzędzie "creative testing" (2025) testuje 2–5 reklam wewnątrz istniejącego zestawu. Dzieli budżet testu po równo, każdy widzi tylko jedną wersję, domyślnie trwa 7 dni i bierze ~20% budżetu. Wymaga strategii Highest Volume.
| Poziom: **A** (schemat narzędzia MCP) + **C** (praktycy) | [PEŁNY] schemat `ads_experiment_abtest_create_test` (Meta Ads MCP): testy "campaign-level (L3), ad-set-level (L2), and creative-level (L1)"; "budget_percentage ... for creative tests. Defaults to 20%"; koniec domyślnie "7 days from start"; KPI leadów: "cost_per_action_type:lead". [WYSZUKIWARKA] Jon Loomer — Meta's Creative Testing Tool — https://www.jonloomer.com/meta-creative-testing/ ; Creative Testing Feature — https://www.jonloomer.com/qvt/creative-testing-feature/ ; Is Meta Expanding Creative Testing to 10 Ads? — https://www.jonloomer.com/qvt/meta-expanding-creative-testing-10-ads/ ; Alvaro Berrios — https://alvaroberrios.com/blog/metas-new-creative-testing-feature/ ; artykuł Meta "Set Up a Creative Test in Meta Ads Manager" — https://www.facebook.com/business/help/1423851372208214 (URL z wyszukiwarki; treści nie udało się pobrać przez MCP) |
Dane (streszczenia): "the only requirement is that you use the Highest Volume bid strategy. You cannot use Cost Per Result Goal, Bid Cap, or ROAS Goal"; "Meta recommends dedicating no more than 20% of your budget"; po teście normalna dystrybucja wraca; Loomer: różnice między reklamami mają być istotne, bo przy drobnych różnicach "any variance in results could be attributed to randomness".
**Implikacja:** to domyślne narzędzie do testów konceptów dla kont z budżetem, który daje ≥ ~15–25 leadów na testowaną reklamę w oknie testu (sekcja 5). Nie wiadomo (niezweryfikowane), czy narzędzie działa z każdą konfiguracją celu Leads / Instant Forms — do sprawdzenia w koncie.

**B3. Teza:** Wyniki reklam w jednym zestawie nie są porównaniem losowym: Meta pokazuje każdej osobie reklamę, która według prognozy da najniższy koszt. Niski wydatek reklamy to prognoza algorytmu, nie dowód, że reklama jest słaba.
| Poziom: **A** | [PEŁNY] About ad delivery — https://www.facebook.com/business/help/1000688343301256 ; [PEŁNY] Troubleshoot: not receiving enough results — https://www.facebook.com/business/help/284656872650053 ; [PEŁNY] About the breakdown effect — https://www.facebook.com/business/help/770303663944673 ; [PEŁNY] A+ campaign budget reporting — https://www.facebook.com/business/help/258714594633281 |
Cytaty: "we'll show the ad that's most likely to achieve the lowest cost per optimization event for the given person. this means that each of your ads won't necessarily be delivered the same number of times"; "uses predictions of future performance ... not each ad set's past performance"; "if your ad is not receiving enough results but other ads using the same budget are, that's okay ... if you want your ads to deliver equally, try creating an a/b test"; "when running multiple ads in 1 ad set, evaluate your results at the ad set level"; przykład breakdown effect: placement z niższym średnim CPA dostał $50 z $500, bo jego koszt krańcowy rósł szybciej (z $0.35 do $5.30 w 10 dni).
[WYSZUKIWARKA] Loomer "When One Ad Gets All the Budget: Your Options" — https://www.jonloomer.com/one-ad-gets-all-the-budget/ — opcja 1: nic nie robić, jeśli wynik zagregowany jest dobry.
**Implikacja:** (1) reklama z niskim wydatkiem = status **"NIEPRZETESTOWANA"**, nie "przegrana"; (2) średni CPL takiej reklamy nie przewiduje jej CPL przy większym wydatku (koszt średni ≠ koszt krańcowy); (3) sukces ocenia się na poziomie zestawu/kampanii; (4) jeśli trzeba wiedzieć, który koncept jest lepszy → A/B lub creative testing, nie włączanie i wyłączanie reklam.

**B4. Teza:** Meta odradza testowanie "na piechotę" (ręczne włączanie/wyłączanie). Dynamic creative nie zastępuje testu A/B, bo raportuje wyniki zbiorczo.
| Poziom: **A** | [PEŁNY] About A/B testing — https://www.facebook.com/business/help/1738164643098669 ; [PEŁNY] About dynamic creative — https://www.facebook.com/business/help/170372403538781 |
Cytat: "we do not recommend testing informally, such as by turning ad sets or campaigns on and off manually. this can lead to inefficient ad delivery and unreliable test results"; "using dynamic creative as a substitute for split testing is not recommended".

**B5. Teza:** Dla wideo na Instagramie Meta zaleca start od maks. 10 kreacji w zestawie, zostawienie 5 najlepszych i testy trwające co najmniej 4 dni. Zaleca też mieszanie wideo ze statykami przeciw zmęczeniu.
| Poziom: **A** (kontekst: wideo IG) | [PEŁNY] Best practices for Instagram video ads — https://www.facebook.com/business/help/188534925073536 ; [PEŁNY] Creative best practices for conversion testing — https://www.facebook.com/business/help/565573477186194 |
Cytaty: "start with up to 10 creatives per ad set, then keep the top 5 as evergreen. run tests for at least 4 days for reliable results"; "mix video and static ads for better performance and to reduce creative fatigue"; "campaigns with both static images and video achieved conversion lift at a 17% higher rate than campaigns with just static images".
**Implikacja:** górna granica aktywnych kreacji w zestawie ~10 (duże budżety). "4 dni" kłóci się z "min. 7 dni" dla A/B — system przyjmuje ostrzejszą regułę: **7 dni**.

### 2.C Zmęczenie kreacji — definicja, sygnały, odróżnianie

**C1. Teza:** Meta definiuje zmęczenie kreacji jako sytuację, w której odbiorcy zobaczyli tę samą kreację zbyt wiele razy. Nadaje statusy "creative limited" (koszt wyniku wyższy niż wcześniejszych reklam, ale poniżej 2×) i "creative fatigue" (≥ 2×). Liczy przy tym wyświetlenia tego samego obrazu/wideo ze wszystkich kampanii strony.
| Poziom: **A** | [PEŁNY] About creative fatigue recommendations — https://www.facebook.com/business/help/1346816142327858 |
Cytaty: "creative fatigue occurs when an audience has seen the same creative too many times"; "this feature is only available for ad sets with one creative"; "when cost per result is more than ads you ran in the past but less than twice as much, you will see a creative limited status. when cost per result is more than or equal to twice as much ..., you will see a creative fatigue status"; "we consider all recent exposures of the ad's image or video, including those from other campaigns from your page"; ostrzeżenie przed publikacją, jeśli Meta przewiduje zmęczenie w pierwszych 7 dniach; rekomendacja: "create a new ad with a new image or video that is materially different ... keeping your original ad active instead of pausing or turning it off may maximize results".
**Implikacja:** (1) status Meta jest dostępny tylko dla zestawów z jedną kreacją, a więc przy wielu reklamach system potrzebuje własnego detektora; (2) punktem odniesienia jest **historia konta** ("ads you ran in the past"), nie benchmark branżowy; (3) na zmęczenie → **nowy materiał wizualny wyraźnie inny** od dotychczasowego. Sama zmiana tekstu nie wystarcza (spójne z plikami 02 i 05). Oryginału nie wyłączać od razu; (4) ten sam obraz w retargetingu i prospectingu zmęczy się szybciej.

**C2. Teza:** Account insights pokazują osobno "creative fatigue" i "creative similarity" (zbyt podobne wizualnie obrazy/wideo, co przyspiesza zmęczenie).
| Poziom: **A** | [PEŁNY] About account insights in Meta ads reporting — https://www.facebook.com/business/help/1784925068944145 |
Cytat: "creative similarity occurs when the images or videos in your ads appear too visually identical. this can lead to creative fatigue and increase your cost per result" (dotyczy reklam statycznych aktywnych w ost. 28 dniach).
**Implikacja:** iteracje zwycięzcy muszą różnić się **wizualnie** (kadr, osoba, scena, kolorystyka, format), nie tylko tekstem na tym samym tle.

**C3. Teza:** Meta nie podaje progu "złej" częstotliwości. Sygnałem zmęczenia jest spadek wyników przy rosnącej częstotliwości.
| Poziom: **A** | [PEŁNY] Frequency — https://www.facebook.com/business/help/1546570362238584 |
Cytat: "frequency may average 1 to 2 per ad set or may be much higher"; "if performance begins to drop as your frequency numbers rise, your target audience may be experiencing ad fatigue, and it may be wise to change your ad creative or targeting".
[WIEDZA, D] Praktycy często podają progi częstotliwości (np. "powyżej ~2,5–3 w prospectingu") — niezweryfikowane w tej sesji, bez badań; **nie używać jako progu bezwzględnego**.
**Implikacja:** detektor zmęczenia patrzy na **trend częstotliwości sprzężony ze spadkiem wyników** tej samej reklamy względem jej własnego okresu bazowego, a nie na samą wartość częstotliwości.

**C4. Teza (badania wear-out):** Klasyczne badania pokazują kształt odwróconego U: pierwsze ekspozycje budują efekt (wear-in), kolejne go obniżają (wear-out). Wyniki pochodzą z badań TV/prasa/laboratorium i nie przekładają się bezpośrednio na feed.
| Poziom: **B** (ograniczona przenośność) | [WYSZUKIWARKA] Pechmann & Stewart (1988), "Advertising Repetition: A Critical Review of Wearin and Wearout", Current Issues and Research in Advertising 11(1-2):285–329 — https://www.tandfonline.com/doi/abs/10.1080/01633392.1988.10504936 ; https://scholars.lmu.edu/en/publications/advertising-repetition-a-critical-review-of-wearin-and-wearout/ ; [WYSZUKIWARKA] Exploring wearin and wearout in web advertising (2010) — https://researchrepository.wvu.edu/context/faculty_publications/article/2174/viewcontent/2010_Exploring_wearin_and_wearout_in_web_advertising_3_1_2010.pdf |
Dane (streszczenie): model dwuetapowy — wear-in przez ok. 3 pierwsze ekspozycje, od ok. 4. ekspozycji znudzenie i negatywne myśli związane z powtórzeniem.
[WIEDZA — do weryfikacji] Cacioppo & Petty (1979), teoria dwuczynnikowa (uczenie vs znudzenie); Schmidt & Eisend (2015), metaanaliza efektywnej częstotliwości w Journal of Advertising (liczb nie podaję, bo nie zweryfikowałem); Chae, Bruno & Feinberg (2019, JMR), wear-out w reklamie display online.
**Implikacja:** zmęczenie jest realnym zjawiskiem, ale jego próg zależy od kontekstu. System wykrywa je z danych konta, a nie z liczby ekspozycji wziętej z literatury.

**C5. Teza:** Rosnący CPL ma kilka możliwych przyczyn: zmęczenie konkretnej kreacji, nasycenie grupy odbiorców, zmianę aukcji lub sezonowość, a także to, że system zużył już najtańsze okazje. Meta udostępnia metryki, które pozwalają te przyczyny rozdzielić.
| Poziom: **A** | [PEŁNY] First time impression ratio — https://www.facebook.com/business/help/104316936854650 ; [PEŁNY] Audience reached ratio — https://www.facebook.com/business/help/1932319983694913 ; [PEŁNY] Auction competition change — https://www.facebook.com/business/help/2024547657774300 ; [PEŁNY] Understand fluctuations — https://www.facebook.com/business/help/1364841787225722 ; [PEŁNY] Troubleshoot: costs are too high — https://www.facebook.com/business/help/2727273724224874 |
Cytaty: first time impression ratio — "if your first time impression ratio is dropping significantly along with your ad set's performance, this may mean it's time to broaden your audience or find a new one"; auction competition change — różnica między dzisiejszym competitive bid a średnią z 3 poprzednich dni, "considered significant if it is over 20%"; "the delivery system seeks the highest volume opportunities first. when those lower cost opportunities run out, the system may move on to more expensive options ... you may see costs increase over the schedule"; przy optymalizacji na konwersje CPM "may not be a good indicator of performance"; "we subsidize relevant ads in the ad auction, so more relevant ads often cost less".
**Implikacja:** tabela różnicowa w sekcji 4 (krok 1) — przed diagnozą "zmęczenie kreacji" system musi wykluczyć przyczyny na poziomie zestawu/konta.

**C6. Teza:** Jedyna znaleziona liczba Meta dotycząca kadencji odświeżania to "2–4 razy w miesiącu", ale dotyczy kampanii aplikacyjnych Advantage+. Praktycy DTC pracują w partiach i miesięcznym cyklu retro. Jon Loomer uważa, że przy szerokich grupach zmęczenie rzadko jest prawdziwym problemem.
| Poziom: **A** (kontekst: aplikacje) / **C** | [PEŁNY] Creative recommendations and reporting for Advantage+ app campaigns — https://www.facebook.com/business/help/716015512512235 ; [PEŁNY*] Motion Bootcamp (retro, partie) — https://github.com/Motion-Creative/bootcamp/blob/main/references/week-03/thursday-coaching-creative-retro.md , https://github.com/Motion-Creative/bootcamp/blob/main/references/week-07/tuesday-sprint-2-adapt.md ; [WYSZUKIWARKA — z pliku 05] Loomer "Creative Fatigue: What It Is and How to Prevent It" — https://www.jonloomer.com/creative-fatigue-meta-ads/ |
Cytaty: "we recommend changing your ad creative 2-4 times per month to sustain performance" (A+ app); Motion: retro "monthly (explicitly not weekly)"; "3–5 batches per winning concept"; ~5 mocno zróżnicowanych reklam na partię. Loomer (streszczenie): zmęczenie "rarely the true problem today unless you've restricted your audience or limited variations".
**Implikacja:** odświeżanie ma wynikać z **sygnałów** (detektor + rosnące pokrycie grupy), a nie z kalendarza. Kalendarz służy tylko jako bezpiecznik: przegląd co 2–4 tygodnie. Liczby z blogów w rodzaju "20+ reklam/mies. = +65% ROAS" nie mają źródła (D, plik 05).

### 2.D Metryki diagnostyczne

**D1. Teza:** Metryki bazowe są jednoznacznie zdefiniowane przez Meta. Hook rate i hold rate to natomiast konwencje praktyków liczone z tych metryk.
| Poziom: **A** (składowe) / **C** (formuły) | [PEŁNY] CTR (link) — https://www.facebook.com/business/help/877711998984611 ; CTR (all) — https://www.facebook.com/business/help/928745330472862 ; 3-second video plays — https://www.facebook.com/business/help/743427195703387 ; About ThruPlay — https://www.facebook.com/business/help/2051461368219124 ; About video ad metrics calculation — https://www.facebook.com/business/help/1868286323447328 ; katalog pól Meta Ads MCP [PEŁNY] |
Definicje: CTR (link) = link clicks / impressions; CTR (all) = clicks (all) / impressions (obejmuje kliknięcia w profil, "więcej", reakcje itd.); 3-s plays = odtworzenie ≥3 s albo 97% długości, jeśli wideo <3 s, bez powtórek; ThruPlay = ≥15 s albo do końca (≥97%); "video plays at 25/50/75/95/100%" obejmują przewinięcia; 2-s continuous = ≥50% pikseli w widoku. **Hook rate = 3-s plays / impressions; hold rate = ThruPlays / 3-s plays** (konwencja C, szczegóły w pliku 06). UWAGA: artykuł Meta "3-second video plays rate per impressions" ma błędną definicję (https://www.facebook.com/business/help/1252260652457829) — liczyć samodzielnie.
**Implikacja:** hold rate wideo krótszego niż 15 s i dłuższego nie są porównywalne (dla krótkich ThruPlay oznacza obejrzenie całości). Hook rate porównywać tylko w obrębie tego samego placementu (autoplay w feedzie zawyża).

**D2. Teza:** Ad relevance diagnostics działają dopiero od 500 wyświetleń, nie wpływają na aukcję i służą do diagnozy słabych reklam, nie do optymalizacji dobrych. Z kombinacji trzech rankingów można odczytać, gdzie leży problem.
| Poziom: **A** | [PEŁNY] About ad relevance diagnostics — https://www.facebook.com/business/help/403110480493160 ; How to use ad relevance diagnostics — https://www.facebook.com/business/help/436113280262012 ; Engagement rate ranking — https://www.facebook.com/business/help/2351270371824148 |
Cytaty: "aren't available for ads with fewer than 500 impressions"; "aren't inputs into the ad auction"; "use ... to diagnose underperforming ads – not to optimize ads that are already meeting your advertising objectives"; average = 35.–55. percentyl; below average = dolne 35/20/10%; tylko ostatnie 35 dni. Mapa: niski quality ranking → reklama postrzegana jako niskiej jakości; niski engagement → "isn't spurring interest"; niski conversion ranking → "improve the call-to-action ... or post-click experience, or target a higher-intent audience"; niski quality + niski conversion przy dobrym engagement → "click-baity or controversial"; "more impactful to move a ranking from low to average than ... average to above average"; "sometimes high performing ads have below average ... and that's ok".
[PEŁNY — katalog MCP] Pola rankingów (quality/engagement/conversion ranking) ani statusu creative fatigue **nie ma** w katalogu pól Meta Ads MCP → system musi je brać z Ads Managera (eksport/zrzut), nie z automatycznego pobrania.

**D3. Teza:** Metryki jakości leadów po stronie Meta (qualified leads, CPQL, qualified lead rate) istnieją tylko przy integracji CRM przez CAPI i są częściowo modelowane.
| Poziom: **A** | [PEŁNY] View metrics for lead ads with instant forms — https://www.facebook.com/business/help/1544628789462866 ; Set up your CRM for qualified leads — https://www.facebook.com/business/help/279369167153556 ; Use a partner to connect your CRM — https://www.facebook.com/business/help/317857030149451 ; Recommended and maximum delay times — https://www.facebook.com/business/help/801591810609156 ; CAPI for CRM for platforms (developers) — https://developers.facebook.com/docs/marketing-api/conversions-api/guides/conversions-api-crm-for-platforms |
Cytaty: metryki "are estimated ... partially derived through modeling"; "make sure you send all the stages in your sales funnel, including the raw lead stage"; lead_id 15–16 cyfr; zdarzenia dla celu Leads — zalecane "within 1 hour", maks. "within 7 days"; wdrożenie partnera ~3–7 tyg., a do w pełni zoptymalizowanej kampanii ~1–2 mies. (w tym "learning phase 2-4 weeks").
**Implikacja:** jeśli klient nie ma CRM, system prowadzi prosty arkusz statusów leadów (per ad_id) — to jedyne źródło CPQL. Opóźnienie statusu sprzedaży oznacza, że ocena jakości kreacji jest opóźniona o cykl sprzedaży.

**D4. Teza:** Konstrukcja formularza wpływa na relację między liczbą a jakością leadów.
| Poziom: **A** | [PEŁNY] Best practices to create lead ads — https://www.facebook.com/business/help/435270316658768 ; About instant form types — https://www.facebook.com/business/help/252352181957512 ; Create a lead ad with instant form — https://www.facebook.com/business/help/791294492679966 |
Cytaty: "fewer multiple choice questions results in more form submissions, whereas more multiple choice questions typically results in more quality leads"; "test various instant form lengths: consider running an a/b test where you measure completion rates, cost per lead and cost per conversion"; formularz higher intent "prevent[s] receiving submissions from those people who are only marginally interested"; opcja weryfikacji SMS.
**Implikacja:** gdy jakość leadów jest słaba, a CTR dobry, pierwszą dźwignią jest często **formularz** (pytania kwalifikujące, higher intent), a nie kolejna kreacja.

**D5. Teza (benchmarki):** Benchmarki blogowe pochodzą z rynku USA i mają ograniczoną przydatność dla PL. Benchmarki hook rate są wzajemnie sprzeczne. Lepszym punktem odniesienia jest historia konta i narzędzie benchmarków Meta.
| Poziom: **C** (WordStream/LocaliQ: >1000 kampanii, USA, raport komercyjny) / **D** (hook rate) / **A** (narzędzie) | [WYSZUKIWARKA] Search Engine Land — https://searchengineland.com/facebook-ad-costs-jump-beat-google-461690 ; PPC Land — https://ppc.land/facebook-ad-costs-jump-21-as-lead-campaigns-struggle-while-traffic-ads-thrive/ ; LocaliQ — https://localiq.com/blog/facebook-advertising-benchmarks/ ; [PEŁNY*] gomarble meta-creative-analysis — https://github.com/gomarble-ai/ai-ads-agent/blob/main/skills/meta-creative-analysis/SKILL.md ; plik 06 (E2) ; [PEŁNY] schemat `ads_insights_industry_benchmark` (Meta Ads MCP) |
Dane: WordStream/LocaliQ 2025 (kampanie leadowe, USA): średni CPL $27.66 (+21% r/r), CVR 7.72% (z 8.67%), CPC kampanii leadowych $1.92; CTR kampanii ruchowych 1.71%. Hook rate: gomarble "≥40% good / 26–39% average / <25% poor" (D, bez metodologii); inne repozytoria: "good 30%+" (plik 06); [WIEDZA] w branży najczęściej 25–30%.
**Implikacja:** progi "dobry/słaby" system ustala **percentylami w koncie** (np. dolny kwartyl hook rate w danym placemencie przy min. próbie) i narzędziem `ads_insights_industry_benchmark` (porównanie z podobnymi reklamodawcami, cel LEAD_GENERATION). Benchmarki USA służą tylko do grubej kontroli sensu.

**D6. Teza:** Advantage+ leads w testach Meta obniżyły średnio CPL o 14% i CPQL o 10%. Pewność dla CPQL (83%) była wyraźnie niższa niż dla CPL (>95%), co ilustruje, że metryki jakości są statystycznie "cięższe".
| Poziom: **A** | [PEŁNY] About Advantage+ leads campaigns — https://www.facebook.com/business/help/992035952809423 |
Cytat: 19 testów (XI 2024 – I 2025), "improvement of cost per lead with more than 95% confidence, the improvement of cost per quality lead with 83% confidence".

### 2.E Statystyka małych prób (B — matematyka; [OBLICZENIE])

**E1. Teza:** Przy małej liczbie leadów CPL jest bardzo niepewny. Przy 10 leadach prawdziwy CPL może wynosić od ~0,5× do ~2× obserwowanego (95%).
| Poziom: **B** [OBLICZENIE] (przedział Poissona dla liczby zdarzeń przy stałym wydatku) | Tabela E w sekcji 3: 5 leadów → 0,43×–3,10×; 10 → 0,54×–2,09×; 20 → 0,65×–1,64×; 50 → 0,76×–1,35×; 100 → 0,82×–1,23×.
**Implikacja:** poniżej ~10 leadów na reklamę system nie wydaje werdyktu na podstawie CPL (status "ZA MAŁO DANYCH"). Nawet przy 20–30 leadach werdykt dotyczy tylko dużych różnic.

**E2. Teza:** Wykrycie różnicy CPL rzędu 20–30% wymaga setek leadów na reklamę. Na małych budżetach da się wykryć tylko różnice rzędu 2× lub większe.
| Poziom: **B** [OBLICZENIE] (Poisson, równy wydatek, moc 80%) | Tabela D: różnica 1,25× (lepszy tańszy o 20%): 284 vs 355 leadów (α=0,05) albo 163 vs 204 (α=0,20); 1,5×: 80 vs 120 (α=0,05) albo 46 vs 69 (α=0,20); 2×: 25 vs 50 albo 15 vs 29. |
**Implikacja (kluczowa dla PLANNERA):** przy małym budżecie testujemy **duże zmiany** (różne koncepty/kąty/formaty), a nie mikrowarianty (kolor przycisku, jedno słowo). Mikrowarianty mają sens dopiero przy dużych wolumenach i w metrykach górnego lejka.

**E3. Teza:** Metryki górnego lejka rozstrzygają się szybko i tanio (hook rate, CTR), dolnego wolno i drogo (CVR, CPL). Stąd diagnoza "gdzie reklama przegrywa" jest możliwa na małym budżecie, a pewny werdykt "która reklama daje tańszy lead" — nie.
| Poziom: **B** [OBLICZENIE] (test z dla dwóch proporcji, α=0,05, moc 80%, na ramię) | Hook rate 25% → +20%: ~1 250 wyświetleń (≈ 31 zł przy CPM 25 zł); CTR 1% → +50%: ~7 750 wyświetleń (~194 zł); CTR 1% → +30%: ~19 800 (~496 zł); CTR 1% → +20%: ~42 700 (~1 067 zł); CVR kliknięcie→lead 10% → +30%: ~1 770 kliknięć (~200 leadów). |
**Implikacja:** hook rate i CTR służą do **diagnozy i wczesnego odsiewu oczywistych porażek**. Ostateczny werdykt o CPL/CPQL wymaga dużo większej próby. Uwaga: związek hook rate/CTR z CPL nie jest pewny (sekcja 6).

**E4. Teza:** Przy wielu reklamach "zwycięzca" jest w dużej mierze artefaktem losowości. Przy 5 identycznych reklamach i 10 leadach na każdą w 80% przypadków najlepsza wygląda na tańszą od reszty o ≥23%.
| Poziom: **B** [OBLICZENIE] (symulacja 20 tys.; identyczny prawdziwy CPL, równy wydatek) | Tabela G: 5 reklam × 5 leadów → 93% (≥23%), 76% (≥33%); 5 × 20 leadów → 57% / 19%; 5 × 50 → 19% / 1%. FWER dla k porównań przy α=0,05: k=5 → 23%, k=10 → 40% (tabela H). |
**Implikacja:** im więcej reklam porównujemy naraz, tym wyższy musi być próg. System stosuje korektę na liczbę porównań (Bonferroni: α/k) albo próg bayesowski ≥90% (E7) i raportuje "zwycięzcę" zawsze z przedziałem niepewności.

**E5. Teza (klątwa zwycięzcy / regresja do średniej):** Obserwowany CPL zwycięzcy jest systematycznie zbyt optymistyczny. Po skalowaniu należy się spodziewać pogorszenia, nawet bez zmęczenia.
| Poziom: **B** [OBLICZENIE] (symulacja: prawdziwe CPL kreacji log-normalne, sd=0,25 lub 0,5) | Tabela I/I2: 5 reklam × 10 leadów → prawdziwy CPL zwycięzcy średnio 1,16–1,27× gorszy niż zmierzony; P(wybrano naprawdę najlepszą) 50–70%; 5 × 50 leadów → 1,03–1,07×, P = 71–85%. |
**Implikacja:** prognoza CPL po skalowaniu = obserwowany CPL × współczynnik korekty (np. ×1,15–1,3 przy ~10–20 leadach). Pogorszenie wyniku po skalowaniu nie może automatycznie oznaczać "zmęczenia kreacji".

**E6. Teza:** Reguła praktyków "oceniaj po ~3× CPA" sprawdza się jako próg wyłączenia reklamy **z zerową liczbą leadów**, ale nie jako próg oceny CPL. Przy 3× CPA reklama zgodna z targetem ma tylko ~3 leady (przedział 0,34×–4,98×).
| Poziom: **C** (reguła) + **B** [OBLICZENIE] (ocena) | [PEŁNY*] Motion Bootcamp, Evan Lee: "Use ~3× CPA or ~3× AOV as a statistically relevant spend threshold before judging a creative." — https://github.com/Motion-Creative/bootcamp/blob/main/references/week-05/tuesday-evan-analyze.md ; [WIEDZA, D] popularne w branży "wyłącz po 2–3× target CPA bez konwersji". Tabela F: P(0 leadów) po wydaniu k × target, gdy prawdziwy CPL = target: 1× → 37%, 2× → 14%, 3× → 5%, 4× → 2%. Gdy prawdziwy CPL = 2× target: przy 3× wydatku 22% (a więc 78% złych reklam ma ≥1 lead i reguła zerowa ich nie złapie). |
**Implikacja:** reguła "zero leadów po 3× target CPL → wyłącz/nie skaluj" ma ~5% ryzyka błędnego wyłączenia dobrej reklamy (przy 2× — 14%). Na złe reklamy, które mają kilka drogich leadów, potrzebna jest osobna reguła CPL (np. po ≥10 leadach, sekcja 7).

**E7. Teza (podejście bayesowskie):** P(B lepsze od A) jest bardziej zrozumiałe dla klienta i Pawła niż p-value i pasuje do sposobu, w jaki Meta wyznacza zwycięzcę (symulacja wyników).
| Poziom: **B** [OBLICZENIE] (Gamma-Poisson, słaby prior, równy wydatek) + **A** (Meta "simulates possible outcomes tens of thousands of times") | Tabela J: 4 vs 6 leadów (B tańsze o 33%) → 73%; 10 vs 15 → 84%; 20 vs 30 → 92%; 5 vs 10 (−50%) → 90%; 10 vs 20 → 97%. |
**Implikacja:** progi decyzji zależą od kosztu pomyłki: **≥90%** przy decyzjach drogich lub nieodwracalnych (porzucenie konceptu, skalowanie ×2); **≥75–80%** przy decyzjach tanich i odwracalnych (który koncept iterować jako pierwszy). Przy nierównym wydatku ramion (typowe w zestawie) model musi używać rzeczywistego wydatku, a interpretację dodatkowo osłabia B3 (selekcja przez algorytm).

**E8. Teza:** Efekt nowości, wahania dzień/tydzień i faza uczenia sprawiają, że pierwsze dni nowej reklamy są niereprezentatywne w obie strony.
| Poziom: **A** (learning phase: wyniki "aren't necessarily indicative"; analiza pełnym tygodniem) + [WIEDZA, B] (efekty nowości/pierwszeństwa w eksperymentach online — m.in. Kohavi i in., "Trustworthy Online Controlled Experiments", 2020; niezweryfikowane w sesji) |
**Implikacja:** okno oceny = pełne tygodnie (7/14/28 dni). Wstępna ocena reklamy po min. 7 dniach od startu, a przy małym budżecie po 14 dniach.

### 2.F Logika iteracji

**F1. Teza:** Lejek diagnostyczny wideo (uwaga → utrzymanie → kliknięcie → konwersja) jest standardem praktyków i odpowiada logice ad relevance diagnostics Meta (engagement vs conversion ranking).
| Poziom: **C** (praktycy) + **A** (mapa diagnostyk) | [PEŁNY*] Motion Bootcamp index — https://github.com/Motion-Creative/bootcamp/blob/main/references/index.md ; Week 5 — https://github.com/Motion-Creative/bootcamp/blob/main/references/week-05/tuesday-evan-analyze.md ; [PEŁNY] https://www.facebook.com/business/help/436113280262012 |
Cytaty: "Low Thumbstop → Hook flopped"; "High Thumbstop, low thruplay → Hook works; body loses viewers"; "Watching but not clicking → CTA or persona mismatch"; "Clicked but didn't buy → Landing page misalignment"; "You don't always have a creative problem".
**Implikacja:** drzewo w sekcji 4. W lead gen z formularzem natywnym odpowiednikiem landing page jest **formularz**.

**F2. Teza:** Po znalezieniu zwycięzcy najpierw się go eksploatuje (nowe hooki, formaty, osoby i persony wokół tego samego mechanizmu), a nowe koncepty dokłada się równolegle. Iteracje muszą się jednak wyraźnie różnić, bo Meta grupuje i męczy podobne kreacje.
| Poziom: **C** (praktycy) + **A** (materially different, similarity) | [PEŁNY*] Motion Week 7 — https://github.com/Motion-Creative/bootcamp/blob/main/references/week-07/tuesday-sprint-2-adapt.md ; Week 6 — https://github.com/Motion-Creative/bootcamp/blob/main/references/week-06/tuesday-jade-daniel-winning-stories.md ; [PEŁNY] https://www.facebook.com/business/help/1346816142327858 ; https://www.facebook.com/business/help/1784925068944145 ; [PEŁNY] https://www.facebook.com/business/help/565573477186194 |
Dane: drabina statyka → krótkie wideo (VO/tekst) → testimonial / high-production; 6 dźwigni (inne hooki przy tym samym skrypcie; ten sam skrypt, inny twórca; inny skrypt, ten sam twórca; ta sama struktura, inny skrypt; te same słowa, inne B-roll; ten sam koncept, inny format); "3–5 batches per winning concept"; Green (świeży zwycięzca → większe zmiany) / Yellow (reklama skalowana → małe zmiany); "Ad Families" (gałęzie wg person / poziomu świadomości); po Andromedzie ~5 mocno zróżnicowanych reklam na partię; Calm: pierwsze 3 reklamy konceptu "were not winners on their own but showed enough signal", a iteracja w miesiąc obniżyła CAC ~2×. Meta: z jednego zdjęcia zwycięzcy da się tanio zrobić wideo (animacja w pierwszych 3 s, 5–10 s, jedna korzyść); kampanie statyka + wideo → konwersyjny lift o 17% częściej niż same statyki.
**Implikacja:** ITERATION ENGINE ma "drabinę iteracji" (sekcja 4/7) z poziomem ryzyka; koncepty z sygnałem w metrykach pośrednich (ale bez wygranej w CPL) dostają 1–2 rundy iteracji, zanim zostaną porzucone.

**F3. Teza:** Liczba jednocześnie testowanych konceptów powinna rosnąć z budżetem. Praktycy podają "2–3 mocne koncepty" dla małych budżetów i "5–10 równoległych testów" dla większych.
| Poziom: **C** (DTC, duże konta) + **B** [OBLICZENIE] (tabela L) | [PEŁNY*] Motion Week 6 — "Small spend: 2–3 strong concepts; Higher spend: 5–10 concurrent tests; Scale phase: up to 200/month"; Week 3 — "minimum 3–4 distinct concepts across formats and funnel stages for a fair test"; Caraway ~40 nowych UGC/mies. |
**Implikacja:** sekcja 5.

**F4. Teza:** Udział budżetu na testy: w Meta creative testing domyślnie 20%. Praktycy DTC stosują 70/30 lub 50/25/25 (sprawdzone / wariacje / nowe koncepty).
| Poziom: **A** (domyślna wartość narzędzia) / **C** | [PEŁNY] schemat `ads_experiment_abtest_create_test` ("Defaults to 20%") ; [PEŁNY*] Motion index (50/25/25 "for aggressive scaling") i Week 3 ("~70/30 testing vs. scaling; ~80/20 for new/stale accounts; ~50/50 during promos" — kierunek podziału w streszczeniu niejednoznaczny) |
**Implikacja:** przy dużych budżetach 10–30% na planowe testy konceptów. Przy małych budżetach wydzielanie budżetu testowego nie ma sensu (za mało leadów, rozbicie uczenia): cały budżet działa jednocześnie jako test i skalowanie.

### 2.G Jakość leadów w ocenie kreacji

**G1. Teza:** Kreacja z wyższym CPL może być lepsza, jeśli ma niższy CPQL, koszt spotkania lub CAC. O wyborze decyduje najgłębszy etap lejka, który ma wystarczająco dużo danych.
| Poziom: **A** (Meta optymalizuje na jakość i mierzy CPQL) + **B** (logika) | [PEŁNY] https://www.facebook.com/business/help/1544628789462866 ; https://www.facebook.com/business/help/848158520256071 ("optimize your lead ads for higher lead quality instead of lead volume") ; https://www.facebook.com/business/help/992035952809423 |
[OBLICZENIE] Przykład: A: CPL 40 zł, 30% kwalifikowanych → CPQL 133 zł; B: CPL 55 zł, 55% kwalifikowanych → CPQL 100 zł. B jest o 25% tańsza na lead kwalifikowany mimo CPL wyższego o 37%.
**Implikacja:** metryka docelowa w ITERATION ENGINE = **CPQL** (lub koszt spotkania), jeśli jest dostępna; CPL to metryka pośrednia.

**G2. Teza:** Przy małej liczbie sprzedaży trzeba używać metryk pośrednich z hierarchii lejka i łączyć dane (pooling) na poziomie konceptu, a nie pojedynczej reklamy.
| Poziom: **B** (logika statystyczna: te same progi co E1–E2 dla każdego etapu) + **D** (dobór etapów) |
Hierarchia: lead → kontakt udany (odebrał / odpisał) → kwalifikacja (spełnia kryteria) → umówione spotkanie → spotkanie odbyte → sprzedaż. Reguła: oceniaj na **najgłębszym etapie, który ma ≥ ~10 zdarzeń na porównywaną jednostkę** (reklamę lub koncept). Jeśli żaden etap tego nie spełnia, łącz reklamy tego samego konceptu i wydłużaj okno.
**Implikacja:** w CRM/arkuszu każdy lead musi mieć ad_id / nazwę kreacji (lead ads to dostarczają) i status etapu. Bez tego ocena jakości kreacji jest niemożliwa.

---

## 3. Tabela minimalnych prób i progi decyzyjne

Założenia wspólne [OBLICZENIE]: porównanie dwóch wariantów z równym ruchem/wydatkiem (jak w A/B lub creative testing); test dwustronny α=0,05 i moc 80%, o ile nie podano inaczej; dwumian (proporcje) lub Poisson (leady na wydatek). Zmienność rzeczywista jest większa, więc to **dolne granice**. Skrypt: scratchpad `stats.py`, `stats2.py`.

### 3.1 Liczebności na ramię (wariant)

| Metryka | Bazowy poziom | Wykrywana zmiana (względna) | Potrzeba na ramię | Koszt ramienia przy CPM 25 zł |
|---|---|---|---|---|
| Hook rate (3-s / wyśw.) | 15% | +20% / +30% | 2 402 / 1 106 wyśw. | 60 / 28 zł |
| Hook rate | 25% | +20% / +30% | 1 251 / 571 wyśw. | 31 / 14 zł |
| Hold rate (ThruPlay / 3-s) | 10% | +20% / +30% | 3 841 / 1 774 odtworzeń 3-s | zależnie od hook rate |
| Hold rate | 20% | +20% / +30% | 1 683 / 772 odtworzeń 3-s | — |
| CTR (link) | 0,5% | +20% / +30% / +50% | 85 862 / 39 885 / 15 599 wyśw. | 2 147 / 997 / 390 zł |
| CTR (link) | 1,0% | +20% / +30% / +50% | 42 693 / 19 827 / 7 750 wyśw. | 1 067 / 496 / 194 zł |
| CTR (link) | 1,5% | +20% / +30% / +50% | 28 304 / 13 141 / 5 134 wyśw. | 708 / 329 / 128 zł |
| CTR (link) | 2,0% | +20% / +30% / +50% | 21 109 / 9 798 / 3 826 wyśw. | 528 / 245 / 96 zł |
| CVR kliknięcie→lead | 5% | +20% / +30% / +50% | 8 158 / 3 780 / 1 471 kliknięć (~449 / 217 / 92 leady) | — |
| CVR kliknięcie→lead | 10% | +20% / +30% / +50% | 3 841 / 1 774 / 686 kliknięć (~423 / 204 / 86 leadów) | — |
| CVR kliknięcie→lead | 20% | +20% / +30% / +50% | 1 683 / 772 / 294 kliknięć (~370 / 178 / 74 leady) | — |
| CVR kliknięcie→lead | 30% | +20% / +30% / +50% | 963 / 437 / 163 kliknięć (~318 / 151 / 61 leadów) | — |

CTR przy łagodniejszym α=0,10 (bazowy 1%): +20% → 33 629; +30% → 15 618; +50% → 6 105 wyświetleń na ramię.

### 3.2 CPL przy równym wydatku (Poisson) — leady na ramię

| Różnica CPL (gorszy/lepszy) | Lepszy tańszy o | α=0,05: leady (gorszy / lepszy) | α=0,20: leady (gorszy / lepszy) |
|---|---|---|---|
| 1,20× | 17% | 433 / 520 | 249 / 299 |
| 1,25× | 20% | 284 / 355 | 163 / 204 |
| 1,30× | 23% | 202 / 263 | 116 / 151 |
| 1,50× | 33% | 80 / 120 | 46 / 69 |
| 2,00× | 50% | 25 / 50 | 15 / 29 |
| 3,00× | 67% | 9 / 27 | 5 / 15 |

**Wniosek:** na wiarygodne potwierdzenie różnicy CPL 20–30% potrzeba ~150–350 leadów na wariant; to realne tylko w kontach ≥ ~20–50 tys. zł/mies. albo przy bardzo niskim CPL.

### 3.3 Niepewność CPL przy danej liczbie leadów (95%)

| Leady | Prawdziwy CPL = obserwowany × |
|---|---|
| 3 | 0,34 – 4,98 |
| 5 | 0,43 – 3,10 |
| 10 | 0,54 – 2,09 |
| 20 | 0,65 – 1,64 |
| 30 | 0,70 – 1,48 |
| 50 | 0,76 – 1,35 |
| 100 | 0,82 – 1,23 |
| 200 | 0,87 – 1,15 |

### 3.4 Reguła "zero leadów po k × target CPL" — ryzyko błędu

P(0 leadów) po wydaniu k × target CPL, zależnie od prawdziwego CPL reklamy:

| Wydano | prawdziwy CPL 0,8×T | = T | 1,5×T | 2×T | 3×T |
|---|---|---|---|---|---|
| 1× T | 29% | 37% | 51% | 61% | 72% |
| 1,5× T | 15% | 22% | 37% | 47% | 61% |
| 2× T | 8% | 14% | 26% | 37% | 51% |
| 3× T | 2% | 5% | 14% | 22% | 37% |
| 4× T | 1% | 2% | 7% | 14% | 26% |

Czytanie: kolumny 0,8×T i T pokazują ryzyko **błędnego wyłączenia dobrej reklamy**; kolumny 2×T i 3×T pokazują, jak często **zła reklama przeżyje** regułę zerową (1 − wartość).

### 3.5 Wielokrotne porównania i klątwa zwycięzcy

| Reklam | Oczek. leady / reklamę | P(losowy "zwycięzca" ≥23% tańszy) przy identycznych reklamach | Prawdziwy/obserwowany CPL zwycięzcy (sd 0,25 / 0,5) | P(wybrano naprawdę najlepszą) (sd 0,25 / 0,5) |
|---|---|---|---|---|
| 3 | 5 | 82% | 1,33× / 1,24× | 53% / 68% |
| 3 | 10 | 66% | 1,21× / 1,13× | 60% / 75% |
| 3 | 20 | 47% | 1,12× / 1,07× | 68% / 82% |
| 5 | 5 | 93% | 1,45× / 1,29× | 42% / 61% |
| 5 | 10 | 80% | 1,27× / 1,16× | 50% / 70% |
| 5 | 20 | 57% | 1,16× / 1,08× | 59% / 77% |
| 5 | 50 | 19% | 1,07× / 1,03× | 71% / 85% |
| 10 | 10 | 95% | — | — |

FWER przy α=0,05: 2 porównania → 10%; 5 → 23%; 10 → 40%; 20 → 64% (Bonferroni: α/k).

### 3.6 Bayes (Gamma-Poisson), równy wydatek: P(B tańsze od A)

| A | B | Obserwowana różnica | P(B naprawdę tańsze) |
|---|---|---|---|
| 4 | 6 | −33% | 73% |
| 8 | 12 | −33% | 81% |
| 10 | 15 | −33% | 84% |
| 20 | 30 | −33% | 92% |
| 40 | 60 | −33% | 98% |
| 5 | 10 | −50% | 90% |
| 10 | 20 | −50% | 97% |
| 0 | 3 | — | 94% |

### 3.7 Progi decyzyjne dla systemu (z typem uzasadnienia)

| # | Decyzja | Próg | Typ | Poziom |
|---|---|---|---|---|
| P1 | Najkrótsze okno oceny czegokolwiek | 7 pełnych dni od startu/istotnej edycji; decyzje na średnich tygodniowych | Meta | A |
| P2 | Ocena CPL **zestawu** jako stabilnego | ~50 zdarzeń od ostatniej istotnej edycji (lub 28 dni przy małych budżetach) | Meta + heurystyka (28 dni) | A / D |
| P3 | Relevance diagnostics czytelne | ≥500 wyświetleń reklamy | Meta | A |
| P4 | Hook rate — diagnoza reklamy | ≥1 500–2 500 wyświetleń w danym placemencie | statystyka | B |
| P5 | CTR (link) — diagnoza reklamy | ≥8 000 wyświetleń (wykrywa ~50% różnicy przy CTR ~1%) | statystyka | B |
| P6 | CVR kliknięcie→lead — diagnoza | ≥300–700 kliknięć (wykrywa ~50% różnicy przy CVR 10–20%) | statystyka | B |
| P7 | Jakikolwiek werdykt CPL reklamy | ≥10 leadów (poniżej: "ZA MAŁO DANYCH") | statystyka (CI 0,54–2,09×) | B |
| P8 | "Zwycięzca" CPL w porównaniu 2 reklam | P(lepsza) ≥90% (decyzja droga) / ≥75–80% (decyzja tania); ~15–30 leadów na ramię wykrywa tylko różnice ≈2× | statystyka + koszt błędu | B |
| P9 | Wyłączenie reklamy z 0 leadów | wydatek ≥3 × target CPL (ryzyko błędu ~5%), przy spójnie słabym CTR/hook dopuszczalnie ≥2× (ryzyko ~14%) | heurystyka zweryfikowana obliczeniem | C + B |
| P10 | Wyłączenie reklamy z leadami, ale drogiej | ≥10 leadów i górna granica 80% przedziału CPL > 1,5 × target, lub P(CPL > target) ≥90% | statystyka | B |
| P11 | Uznanie testu Meta A/B za rozstrzygnięty | confidence Meta ≥65% = "słaby sygnał"; do decyzji nieodwracalnych ≥90% lub powtórzenie testu | Meta + statystyka | A + B |
| P12 | Moc testu przed startem | "estimated power" w Ads Managerze ≥80% | Meta | A |
| P13 | Budżet zestawu z szansą wyjścia z learning | dzienny ≥10 × CPA (≈ tygodniowy ≥50–70 × CPA) | Meta | A |
| P14 | Korekta prognozy CPL po skalowaniu zwycięzcy | ×1,15–1,3 przy 10–20 leadach/reklamę, ×1,05 przy ≥50 | statystyka (symulacja) | B |
| P15 | Podejrzenie zmęczenia (heurystyka systemu) | patrz R11 w sekcji 7 | heurystyka | D (osadzona w A) |

---

## 4. Drzewo diagnostyczne: metryki → gdzie problem → jaka nowa kreacja

Zasada nadrzędna: **najpierw wyklucz przyczyny niekreatywne, potem diagnozuj lejek reklamy, dopiero potem projektuj nową kreację.** Każdy węzeł wymaga minimalnej próby z sekcji 3.7; bez niej wynik brzmi "za mało danych, czekaj / zbierz więcej", a nie "zmień".

```
KROK 0 — HIGIENA DANYCH (zanim cokolwiek ocenisz)
 ├─ Błędy/odrzucenia w kolumnie Delivery? → napraw (nie diagnozuj kreacji)
 ├─ Zestaw w "Learning" < 7 dni od istotnej edycji? → CZEKAJ (A1, A5)
 ├─ Zmiana formularza / pixela / CRM / oferty / sezonu w oknie? → okno nieporównywalne, podziel dane
 └─ Próba poniżej progów P4–P7? → status "ZA MAŁO DANYCH"; dopuszczalna jedynie diagnoza górnego lejka

KROK 1 — CZY PROBLEM JEST NA POZIOMIE REKLAMY, ZESTAWU CZY RYNKU?
 ├─ Wszystkie reklamy (także nowe) pogarszają się razem?
 │    ├─ auction competition change > 20% / CPM konta rośnie skokowo, CTR i CVR stabilne
 │    │     → ZMIANA AUKCJI / SEZONOWOŚĆ (A: 2024547657774300). Nie wymieniaj kreacji w panice;
 │    │       porównaj z tym samym okresem rok wcześniej; rozważ korektę celu CPL.
 │    ├─ first time impression ratio ↓, audience reached ratio ↑, frequency zestawu ↑
 │    │     → NASYCENIE GRUPY (A: 104316936854650). Poszerz grupę / Advantage+ audience;
 │    │       nowe kreacje dla NOWYCH segmentów (persony), nie kolejne warianty tego samego.
 │    └─ CVR kliknięcie→lead spadł nagle we wszystkich reklamach
 │          → FORMULARZ / TRACKING / CRM (nie kreacja).
 └─ Pogarsza się jedna reklama, a inne (zwłaszcza nowe) w tym samym zestawie działają normalnie
       → diagnoza lejka tej reklamy (KROK 2) + test zmęczenia (R11)

KROK 2 — LEJEK REKLAMY (porównanie z percentylami konta w tym samym placemencie)
 [wideo] HOOK RATE niski (dolny kwartyl konta, ≥1,5–2,5 tys. wyśw.)
     → problem: pierwsze 1–3 s nie zatrzymują
     → NOWA KREACJA: 3–5 NOWYCH HOOKÓW na tym samym "body" (inny pierwszy kadr, ruch w 1. klatce,
       tekst na ekranie z obietnicą/pytaniem, "call-out" odbiorcy, twarz/emocja) — iteracja tania
 [wideo] HOOK OK, HOLD RATE niski
     → problem: środek nie spełnia obietnicy hooka / za wolne tempo / korzyść za późno
     → NOWA KREACJA: ten sam hook + nowa struktura (kluczowa korzyść w 3–5 s, krótsza wersja 6–15 s,
       szybszy montaż, napisy, dowód wcześniej)
 [statyka/wideo] UWAGA OK, CTR (link) niski
     ├─ CTR (all) wysoki, a CTR (link) niski → ludzie klikają "więcej"/profil, ale nie CTA:
     │     ciekawość bez jasnej obietnicy / niejasna oferta → wyraźniejsza oferta, CTA, "co dostaniesz"
     └─ ogólnie niski → brak dopasowania persona–komunikat lub słaba oferta
         → NOWA KREACJA: nowy KĄT/obietnica (inna motywacja: oszczędność / wygoda / bezpieczeństwo /
           status / strach przed błędem), inne "call-out" persony; relevance: engagement ranking ↓
 CTR OK, CVR kliknięcie→lead niski
     ├─ quality ↓ + conversion ↓ przy dobrym engagement → "click-baity" (A: 436113280262012):
     │     reklama obiecuje coś, czego formularz nie potwierdza → dopasuj obietnicę do formularza
     └─ inaczej → FORMULARZ: intro zgodne z reklamą, mniej pól otwartych, prefill (A: 435270316658768).
         To NIE jest problem kreacji — nowa kreacja nie pomoże, zmień formularz (test A/B długości)
 CPL OK, JAKOŚĆ niska (odsetek kwalifikowanych, kontakt, spotkania)
     → problem: kreacja przyciąga złych ludzi (zbyt szeroka / zbyt "łatwa" obietnica)
     → NOWA KREACJA: kwalifikacja w komunikacie ("dla kogo / nie dla kogo", widełki ceny, wymagania,
       konkretny region), mniej "za darmo/bez zobowiązań"; RÓWNOLEGLE formularz: pytania wielokrotnego
       wyboru, higher intent, SMS OTP; conversion leads + CRM (A)
 Wszystkie etapy OK, ale TREND pogorszenia przy rosnącej frequency → ZMĘCZENIE (R11)
     → NIE wyłączaj oryginału od razu (A); dodaj partię "materially different" iteracji zwycięzcy
       (drabina iteracji poniżej); przy powtórnym zmęczeniu tego samego konceptu → nowy koncept
 CPM wyraźnie wyższy od innych reklam zestawu + quality ranking ↓
     → cechy "niskiej jakości" (engagement bait, sensacyjność, ukrywanie informacji — plik 01)
     → NOWA KREACJA bez tych cech (Meta "subsidize relevant ads")
```

**Drabina iteracji (co zrobić dalej, od najtańszego do najdroższego ryzyka):**

| Poziom | Co się zmienia | Kiedy | Liczba wariantów w partii | Dowód |
|---|---|---|---|---|
| I1 Hook | pierwsze 1–3 s / nagłówek na grafice / pierwszy kadr; reszta bez zmian | hook rate lub CTR słaby, dalsze etapy OK; świeży zwycięzca do "przedłużenia życia" | 3–5 | C (Motion), A (3 s) |
| I2 Wykonanie | ta sama treść, inny montaż / twórca / B-roll / długość / proporcje | hold słaby; zmęczenie zwycięzcy | 2–4 | C |
| I3 Format | statyka → wideo (animowana statyka, 5–10 s) → karuzela → UGC / testimonial | zwycięzca w jednym formacie; zmęczenie; dywersyfikacja | 2–3 | A (+17% konwersyjnego liftu statyka+wideo), C (drabina) |
| I4 Persona / segment | ta sama oferta i mechanizm, inny odbiorca (call-out, scenariusz, obiekcja) | nasycenie grupy; zwycięzca działa w jednym segmencie | 2–4 | C (Ad Families), A (dywersyfikacja, plik 01) |
| I5 Kąt / koncept | nowa motywacja lub obietnica; "materially different" | brak zwycięzcy; zmęczenie konceptu po 3–5 partiach; CTR słaby mimo dobrych hooków | 2–3 koncepty | A (materially different), C |
| I6 Oferta / formularz | lead magnet, gwarancja, cena, pytania w formularzu, typ formularza | CVR lub jakość słabe mimo dobrych kreacji | 1–2 (test A/B) | A (formularze), C ("You don't always have a creative problem") |

Reguła "Green/Yellow" (C): świeży zwycięzca → dozwolone większe skoki (I3–I5); reklama, która już niesie większość wydatku → tylko małe zmiany (I1–I2) jako **nowe reklamy**, nigdy edycja działającej.

---

## 5. Planowanie liczby kreacji wg budżetu

### 5.1 Logika (wzory dla CAMPAIGN CREATIVE PLANNER)

1. `leady_mies = budżet_mies / CPL_oczekiwany` (CPL z historii konta; bez historii — ostrożnie z `ads_insights_industry_benchmark` albo założenie z wywiadu, oznaczone jako niepewne).
2. `leady_tydz = leady_mies / 4,35`. `max_zestawów = max(1, floor(leady_tydz / 50))` — nie tworzyć więcej zestawów niż wolumen udźwignie (A1, A3, A4).
3. `aktywne_reklamy_na_zestaw`: 2–3 (≤ ~40 leadów/mies.), 3–5 (~40–150), 4–6 (~150–400), 6–10 (>400) — heurystyka osadzona w A ("decrease ads per ad set, but maintain diverse creative assets"; IG "up to 10 ... keep top 5"). Różnorodność zapewniają zróżnicowane assety **wewnątrz reklamy** (do 10 mediów) tam, gdzie format na to pozwala (dostępność dla Instant Forms — plik 02).
4. `kreacje_ocenialne_na_CPL_mies ≈ leady_testowe_mies / 20` (20 leadów/kreację wykrywa różnice ~2×; B, tabela 3.2). Dla ocen jakości (CPQL) ≈ `leady_kwalifikowane_mies / 10–20`.
5. `kreacje_ocenialne_na_hook/CTR ≈ wyświetlenia_mies / 2 500` (hook) lub `/ 8 000` (CTR ±50%) — górnego lejka nie ogranicza statystyka, tylko produkcja i resety uczenia.
6. Liczba **nowych** kreacji na miesiąc ≈ mniejsza z wartości: (a) zdolność produkcyjna, (b) 1–2 × `kreacje_ocenialne_na_CPL_mies` (część nowych kreacji ocenia się tylko metrykami pośrednimi i alokacją Meta), (c) limit resetów uczenia: partie co 1–4 tygodnie zależnie od budżetu.
7. Proporcje po znalezieniu zwycięzcy: ~50–70% iteracje I1–I3, ~20–30% I4, ~10–25% nowe koncepty I5 (C: Motion 50/25/25). Bez zwycięzcy: 100% zróżnicowane koncepty (I5), 2–3 naraz.
8. Kadencja: przegląd w pełnych tygodniach; partia nowych reklam dodawana naraz; retro kreatywne raz w miesiącu (C).

### 5.2 Tabela orientacyjna (CPL 40 zł, CPM 25 zł — założenia do podmiany)

| Budżet mies. | Leady / mies. | Leady / tydz. | Szansa na ~50/tydz. w 1 zestawie | Zestawy | Aktywne reklamy / zestaw | Nowe kreacje / mies. | W tym ocenialne na CPL | Partia co | Osobny test (creative testing / A/B)? |
|---|---|---|---|---|---|---|---|---|---|
| 1 500 zł | ~38 | ~9 | nie (learning limited strukturalnie) | 1 | 2–3 | 2–4 (1 partia) | ~2 (tylko różnice ≥2×) | 3–4 tyg. | nie — za mało leadów; testem jest alokacja Meta + metryki pośrednie |
| 3 000 zł | ~75 | ~17 | nie | 1 | 3–4 | 3–5 | ~3–4 | 2–3 tyg. | nie |
| 5 000 zł | ~125 | ~29 | nie (tak dopiero przy CPL ≤ ~23 zł) | 1 | 3–5 | 4–6 | ~5–6 | 2 tyg. | rzadko; A/B tylko dla dużych pytań (oferta/formularz), przy mocy ≥80% |
| 10 000 zł | ~250 | ~58 | tak (1 zestaw) | 1 | 4–6 | 6–10 | ~6–12 | 1–2 tyg. | tak, okazjonalnie: 20% budżetu ≈ 50 leadów/mies. ≈ 2–3 koncepty/mies. na CPL |
| 20 000 zł | ~500 | ~115 | tak (1–2 zestawy) | 1–2 | 5–8 | 10–20 | ~12–25 | 1 tydz. | tak, cyklicznie (np. co 2 tyg. 3–5 konceptów) |
| 50 000 zł | ~1 250 | ~290 | tak (kilka) | 2–5 | 6–10 | 20–40 | ~30–60 (w tym ~12/mies. w teście 20%) | 1 tydz. (3–5 reklam) | tak, stale (creative testing ≤20% + A/B ofert/formularzy) |

**Wrażliwość na CPL:** przy CPL 80 zł wszystkie wartości "leady" i "ocenialne" spadają o połowę; przy 150 zł o ~73%. Dla 1 500 zł/mies. i CPL 150 zł (~10 leadów/mies.) system **nie może** oceniać kreacji na CPL w horyzoncie miesiąca. Wtedy: (a) 2 zróżnicowane kreacje, ocena na metrykach pośrednich i alokacji Meta, CPL w oknie 60–90 dni; (b) jasny komunikat dla klienta, że budżet nie pozwala na testy statystyczne.

**Poziom dowodu sekcji 5:** wzory 1–2 i limit resetów — A (Meta) + arytmetyka; wzory 4–5 — B [OBLICZENIE]; wartości w kolumnach "aktywne reklamy", "nowe kreacje", "partia co" oraz proporcje w pkt 7 — **heurystyka C/D** (praktycy DTC: "small spend: 2–3 strong concepts; higher spend: 5–10 concurrent tests"; Meta IG: ≤10 w zestawie, top 5). Do kalibracji na danych klientów KWIATEKmedia.

### 5.3 Kampania testowa vs testowanie w głównej kampanii

| Podejście | Za | Przeciw | Kiedy w systemie |
|---|---|---|---|
| Nowe reklamy w głównym zestawie (partiami) | brak fragmentacji; Meta sama alokuje; zgodne z "combine ad sets" (A) | brak równego podziału — słabo dofinansowane reklamy pozostają nieprzetestowane (B3); każda partia resetuje uczenie (A2) | zawsze przy budżetach < ~10 tys. zł/mies. |
| Creative testing wewnątrz zestawu (≤20% budżetu, 7 dni) | randomizacja, równy wydatek, brak overlapu, powrót do normalnej dystrybucji po teście (A/C) | wymaga Highest Volume; niewielka próba na reklamę przy średnich budżetach; zgodność z konfiguracją Leads do sprawdzenia | ≥ ~10 tys. zł/mies. lub gdy test ma dać ≥15–25 leadów na reklamę |
| Osobna kampania testowa (ABO) | kontrola wydatku na koncept | fragmentacja uczenia, auction overlap (A: 537699989762051), zwycięzcy testów nie zawsze "przenoszą się" (brak danych — sekcja 6), Meta odradza testy nieformalne | tylko duże konta, gdy creative testing jest niedostępne; decyzje A/B przez Experiments |

---

## 6. Sporne / niewiadome

1. **Progi częstotliwości** — Meta nie podaje progu ("1 to 2 per ad set or ... much higher"). Liczby praktyków (2,5–3 itd.) są [WIEDZA/D]. System nie może stosować bezwzględnego progu częstotliwości.
2. **Benchmarki hook/hold rate są sprzeczne** (≥40% "good" u gomarble; 25–30% w innych źródłach; plik 06). Nie wiadomo, jak odnoszą się do lead gen w PL. Stąd użycie percentyli konta.
3. **Minimalny czas testu:** 7 dni (A/B best practices) vs "min. 4 dni" (IG video best practices). System przyjmuje 7.
4. **Narzędzie creative testing:** treści artykułu Help Center nie udało się pobrać. Nie wiadomo, czy wspiera wszystkie konfiguracje Leads/Instant Forms i Advantage+ leads; rozszerzenie do 10 reklam jest niepotwierdzone (Loomer: "Is Meta expanding...?").
5. **Czy dodanie reklamy do zestawu w praktyce szkodzi** przy Andromedzie? Meta nadal nazywa to istotną edycją (A). Praktycy masowo dodają reklamy do istniejących zestawów. Brak danych o koszcie tego resetu.
6. **Przenoszalność zwycięzców** z kampanii testowej / creative testing do głównej kampanii — brak danych publicznych; tylko anegdoty.
7. **Trafność metryk pośrednich:** brak twardych danych, jak silnie hook rate i CTR korelują z CPL, a tym bardziej z CPQL w lead gen. Ryzyko prawa Goodharta (optymalizacja hooka, który przyciąga złych ludzi — węzeł "click-baity"). Hook rate jest narzędziem diagnozy, nie celem.
8. **Znaczenie progu 65% w A/B Meta** — Meta mówi o "chance of similar results if your test was repeated". Metodologia symulacji nie jest ujawniona.
9. **Zmęczenie przy szerokich grupach** — Loomer: rzadko prawdziwy problem; Meta: mechanizm statusów istnieje. Skala zjawiska w lokalnym lead gen PL (małe miasta, wąska geografia!) jest nieznana. Wąska geografia sprzyja **nasyceniu**, co trzeba monitorować first time impression ratio.
10. **Grupowanie podobnych kreacji (Entity ID)** — plik 01: tylko relacje praktyków. Nie wiadomo, czy iteracje I1–I2 "liczą się" dla systemu Meta jako nowe kreacje.
11. **Efekt nowości dla nowych reklam** — brak danych Meta; wiadomo tylko, że faza uczenia jest niestabilna.
12. **Metryki jakości Meta (qualified leads)** są modelowane. Nie wiadomo, jak duży jest błąd przy małych wolumenach.
13. **Dane akademickie o wear-out w social** (Schmidt & Eisend 2015; Chae i in. 2019) — niezweryfikowane w sesji (brak budżetu wyszukiwania). Do sprawdzenia w syntezie.
14. **Benchmarki USA (WordStream/LocaliQ)** — nieprzenośne 1:1 na PL (inne CPM, waluta, rynek). Brak znalezionych benchmarków PL w tej sesji.
15. **Liczby praktyków DTC** (Motion: 50/25/25, 70/30, "up to 200/month", ~40 UGC/mies.) pochodzą z e-commerce o dużych budżetach. Dla lokalnych usług to ekstrapolacja.

---

## 7. Konkretne reguły do systemu (z poziomem dowodu)

**Zbieranie i higiena danych**
- **R1 (A)** Każda ocena zaczyna się od `learning_stage_info` / `delivery_sub_status` i daty ostatniej istotnej edycji. Wyniki liczone są od tej daty. W fazie LEARNING < 7 dni → werdykt "czekaj".
- **R2 (A)** Okna oceny to wyłącznie pełne tygodnie (7/14/28 dni). Zakaz decyzji na danych dziennych i godzinowych oraz na pojedynczych rozbiciach (breakdown effect).
- **R3 (A, fakt narzędziowy)** Rankingów relevance ani statusu "creative fatigue/limited" nie ma w katalogu pól MCP. System prosi o eksport/zrzut z Ads Managera albo pracuje bez nich (oznaczając to w raporcie).
- **R4 (B)** Każda metryka w raporcie ITERATION ENGINE ma próbę i status: "ZA MAŁO DANYCH" / "SYGNAŁ" / "ROZSTRZYGNIĘTE" wg progów P3–P10. Przy CPL zawsze podaje przedział (tabela 3.3).

**Ocena i decyzje**
- **R5 (A)** Sukces ocenia się na poziomie zestawu lub kampanii. Reklama z małym wydatkiem to "NIEPRZETESTOWANA", nie "PRZEGRANA". Nie wyłącza się reklam tylko dlatego, że Meta ich nie dofinansowuje, jeśli zestaw jako całość spełnia cel.
- **R6 (B+C)** Wyłączenie reklamy z zerem leadów: wydatek ≥3 × target CPL, albo ≥2 ×, jeśli jednocześnie hook rate lub CTR są w dolnym kwartylu konta przy wystarczającej próbie.
- **R7 (B)** Wyłączenie drogiej reklamy z leadami: ≥10 leadów i P(CPL > target) ≥90% (Gamma-Poisson) lub dolna granica 80% przedziału CPL > target.
- **R8 (B)** Ogłoszenie "zwycięzcy" między reklamami: P(lepsza) ≥90% przy decyzjach drogich (skalowanie, porzucenie konceptu), ≥75–80% przy tanich (kolejność iteracji). Przy k > 2 reklamach dodatkowo wymagany wyższy próg lub potwierdzenie w kolejnym oknie (FWER).
- **R9 (A+B)** Pytania "czy koncept X jest lepszy od Y", które mają wpływać na strategię, rozstrzyga się narzędziem A/B lub creative testing (randomizacja), z mocą ≥80% i czasem ≥7 dni. Werdykt Meta przy confidence 65–89% system oznacza jako "słaby sygnał".
- **R10 (B)** Prognoza CPL zwycięzcy przy skalowaniu jest korygowana o klątwę zwycięzcy (×1,15–1,3 przy 10–20 leadach, ×1,05 przy ≥50). Pogorszenie w tych granicach nie jest zmęczeniem.

**Zmęczenie kreacji**
- **R11 (D osadzona w A — do kalibracji)** Detektor zmęczenia reklamy (wszystkie warunki naraz): (a) reklama działa ≥14 dni i ma ≥20 leadów w oknie bazowym (pierwsze 14 dni po wyjściu z learning lub najlepsze 14 dni) oraz ≥10 w oknie bieżącym (ostatnie 7–14 dni); (b) frequency reklamy/zestawu wyraźnie rośnie; (c) CTR (link) w oknie bieżącym ≤ ~75% bazowego i/lub CPL bieżący ≥ ~1,5× bazowy, przy P(pogorszenie) ≥80%; (d) wykluczone przyczyny z KROKU 1: brak skoku auction competition change >20%, CPM konta nie rośnie ogólnie, first time impression ratio zestawu nie spada (inaczej diagnoza to "nasycenie grupy"), brak zmian formularza/sezonu. Status Meta "creative limited/fatigue" = niezależne potwierdzenie (A). Progi 75% i 1,5× to heurystyka (Meta używa 2× dla statusu fatigue względem historii konta).
- **R12 (A)** Reakcja na zmęczenie: nie wyłączać oryginału od razu. Dodać partię 2–5 nowych reklam "materially different" (inny obraz/wideo, nie tylko tekst), najpierw poziomy I1–I3 drabiny, przy powtórnym zmęczeniu konceptu I4–I5. Oryginał wyłączyć dopiero, gdy nowe reklamy przejmą wydatek i wynik zestawu się poprawi.
- **R13 (A)** Nie używać tego samego obrazu/wideo równolegle w wielu kampaniach strony bez potrzeby, bo zmęczenie liczy się ze wszystkich ekspozycji strony. Unikać wizualnie niemal identycznych kreacji (creative similarity).
- **R14 (A)** Przy spadku first time impression ratio i wysokim audience reached ratio diagnoza to "nasycenie grupy": poszerzyć grupę/geografię lub dodać kreacje dla nowych person, a nie kolejne warianty tego samego.

**Planowanie i iteracja**
- **R15 (A)** Budżet zestawu: sprawdzić regułę budżet dzienny ≥ 10 × CPA. Jeśli nie jest spełniona, 1 kampania i 1 zestaw, status learning limited zaakceptowany, bez dzielenia budżetu na testy.
- **R16 (A)** Nowe reklamy dodawane partiami (A2): co 3–4 tyg. przy ≤3 tys. zł, co 2 tyg. przy ~5 tys. zł, co 1–2 tyg. przy ≥10 tys. zł.
- **R17 (B+C)** Liczba nowych kreacji na miesiąc wg sekcji 5.2. Przy małych budżetach testować tylko **duże różnice** (koncepty, formaty, kąty), bo małych różnic nie da się wykryć (tabela 3.2).
- **R18 (C, A)** Kolejność działań po diagnozie wg drzewa z sekcji 4: problem formularza lub oferty → zmiana formularza/oferty (nie kreacji); słaby hook → I1; słaby hold → I2; słaby CTR → I5 kąt lub I4 persona; słaba jakość leadów → kwalifikacja w kreacji plus formularz.
- **R19 (C)** Koncept z "sygnałem" (metryki pośrednie w górnej połowie konta, CPL nierozstrzygnięty) dostaje 1–2 rundy iteracji (3–5 wariantów), zanim zostanie porzucony. Koncept "przegrany" (rozstrzygnięty) — nie iterować, unikać podobnych.
- **R20 (C)** Po znalezieniu zwycięzcy stosować proporcje ~50–70% iteracji, ~20–30% nowych person/formatów, ~10–25% nowych konceptów. Zwycięzcę eksploatować 3–5 partiami, potem zmienić koncept.
- **R21 (A)** Mieszać formaty w zestawie (statyka + wideo). Z każdej zwycięskiej statyki zrobić tanią wersję wideo (animacja w pierwszych 3 s, 5–10 s, jedna korzyść, stała plansza z CTA).

**Jakość leadów**
- **R22 (A+B)** Metryka docelowa = CPQL / koszt spotkania, jeśli jest dostępna. Kreacja z wyższym CPL, ale niższym CPQL wygrywa. CPL to metryka pomocnicza.
- **R23 (B+D)** Ocena na najgłębszym etapie lejka z ≥ ~10 zdarzeniami na jednostkę. W przeciwnym razie łączyć reklamy w koncept i wydłużać okno. Każdy lead w arkuszu/CRM musi mieć ad_id i status etapu.
- **R24 (A)** Gdy CRM jest dostępny, integracja CAPI for CRM (wszystkie etapy, lead_id, zdarzenia w ≤1 h, maks. 7 dni) i rozważenie celu conversion leads. Trzeba uwzględnić 1–2 miesiące na wdrożenie i uczenie.
- **R25 (A)** Przy słabej jakości leadów najpierw sprawdzić formularz (pytania wielokrotnego wyboru, higher intent, SMS OTP), zanim zleci się nowe kreacje.

**Komunikacja z klientem**
- **R26 (B)** Każda rekomendacja zawiera: próbę, przedział niepewności, poziom dowodu (A/B/C/D) i datę, kiedy będzie można ją zweryfikować. Przy budżetach, które nie pozwalają na testy statystyczne (5.2), system mówi to wprost.

---

## 8. Lista źródeł z trybem dostępu

### Meta Help Center / dokumentacja Meta — [PEŁNY] (przez Meta Ads MCP `ads_get_help_article`), poziom A
- About the learning phase — https://www.facebook.com/business/help/112167992830700
- Significant edits and learning phase — https://www.facebook.com/business/help/316478108955072
- About learning limited — https://www.facebook.com/business/help/269269737396981
- Cost per optimization event — https://www.facebook.com/business/help/1707952432550214
- Optimization events — https://www.facebook.com/business/help/139628083350822
- Last significant edit — https://www.facebook.com/business/help/942374239243867
- Troubleshoot: you're not receiving enough results — https://www.facebook.com/business/help/284656872650053
- Troubleshoot: your costs are too high — https://www.facebook.com/business/help/2727273724224874
- Troubleshoot: ad set hasn't delivered enough (reguła 10× CPA) — https://www.facebook.com/business/help/666335734044063
- Troubleshoot ad delivery — https://www.facebook.com/business/help/236201204528536
- About ad delivery — https://www.facebook.com/business/help/1000688343301256
- About the breakdown effect — https://www.facebook.com/business/help/770303663944673
- Understand fluctuations in ad performance — https://www.facebook.com/business/help/1364841787225722
- Understand A+ campaign budget reporting (highest volume) — https://www.facebook.com/business/help/258714594633281
- About highest volume — https://www.facebook.com/business/help/721453268045071
- About cost per result goal — https://www.facebook.com/business/help/272336376749096
- About A/B testing — https://www.facebook.com/business/help/1738164643098669
- Create an A/B test in Ads Manager — https://www.facebook.com/business/help/355670925639619
- Tools to create A/B tests — https://www.facebook.com/business/help/1159714227408868
- Best practices for A/B testing — https://www.facebook.com/business/help/290009911394576
- Create an A/B test in Experiments — https://www.facebook.com/business/help/3506622486044209
- Selecting a variable for your A/B test — https://www.facebook.com/business/help/1597318281091985
- Create an A/B test by duplicating an ad set or ad — https://www.facebook.com/business/help/560857351380163
- About confidence in tests and experiments — https://www.facebook.com/business/help/239549606692303
- How winning campaigns are determined (A/B without holdout) — https://www.facebook.com/business/help/166313650471318
- About experiments — https://www.facebook.com/business/help/1915029282150425
- About budget optimization tests — https://www.facebook.com/business/help/299600627522144
- Setup your campaign experiments — https://www.facebook.com/business/help/2157673164314250
- View brand survey test results — https://www.facebook.com/business/help/1313814228748488
- About dynamic creative — https://www.facebook.com/business/help/170372403538781
- Create an ad that uses dynamic creative — https://www.facebook.com/business/help/344106239654869
- About creative fatigue recommendations — https://www.facebook.com/business/help/1346816142327858
- About account insights (creative fatigue, creative similarity) — https://www.facebook.com/business/help/1784925068944145
- About opportunity score — https://www.facebook.com/business/help/804913634782260
- About managing ad volume — https://www.facebook.com/business/help/2720085414702598
- Ad limits per page — https://www.facebook.com/business/help/766697140509126
- Frequency — https://www.facebook.com/business/help/1546570362238584
- Glossary of reservation terms — https://www.facebook.com/business/help/230299314945919
- Understand the reach of your awareness campaign — https://www.facebook.com/business/help/1639908612985580
- First time impression ratio — https://www.facebook.com/business/help/104316936854650
- Audience reached ratio — https://www.facebook.com/business/help/1932319983694913
- Auction competition change — https://www.facebook.com/business/help/2024547657774300
- Understand auction overlap — https://www.facebook.com/business/help/537699989762051
- Campaign auction overlap — https://www.facebook.com/business/help/957407462768373
- Auction overlap rate — https://www.facebook.com/business/help/714172578779451
- About ad relevance diagnostics — https://www.facebook.com/business/help/403110480493160
- How to use ad relevance diagnostics — https://www.facebook.com/business/help/436113280262012
- About engagement rate ranking — https://www.facebook.com/business/help/2351270371824148
- CTR (link click-through rate) — https://www.facebook.com/business/help/877711998984611
- CTR (all) — https://www.facebook.com/business/help/928745330472862
- 3-second video plays — https://www.facebook.com/business/help/743427195703387
- 3-second video plays rate per impressions (BŁĘDNA definicja w HC) — https://www.facebook.com/business/help/1252260652457829
- Cost per 3-second video play — https://www.facebook.com/business/help/800265723338375
- About ThruPlay — https://www.facebook.com/business/help/2051461368219124
- About video ad metrics calculation — https://www.facebook.com/business/help/1868286323447328
- Cost per 15-second ThruPlay — https://www.facebook.com/business/help/1796060333844808
- Cost per lead — https://www.facebook.com/business/help/999694013547805
- Cost per result — https://www.facebook.com/business/help/762109693832964
- Estimated cost per result without edit — https://www.facebook.com/business/help/463778672975386
- View metrics for lead ads with instant forms (qualified leads, CPQL) — https://www.facebook.com/business/help/1544628789462866
- Set up your CRM for qualified leads — https://www.facebook.com/business/help/279369167153556
- Use a partner to connect your CRM for conversion leads — https://www.facebook.com/business/help/317857030149451
- Integrate Zapier with CAPI for CRM — https://www.facebook.com/business/help/848158520256071
- About CRM system integrations for lead ads — https://www.facebook.com/business/help/301355140655035
- Conversions API for CRM for platforms (developers) — https://developers.facebook.com/docs/marketing-api/conversions-api/guides/conversions-api-crm-for-platforms
- Recommended and maximum delay times for events — https://www.facebook.com/business/help/801591810609156
- Best practices to create lead ads — https://www.facebook.com/business/help/435270316658768
- About instant form types — https://www.facebook.com/business/help/252352181957512
- Create a lead ad with instant form in Ads Manager — https://www.facebook.com/business/help/791294492679966
- Create a lead ad with instant form from Business Suite — https://www.facebook.com/business/help/179258984144385
- Ask the right questions on your lead ads — https://www.facebook.com/business/help/1607931762802448
- About prefill questions — https://www.facebook.com/business/help/438193446367413
- Add custom questions — https://www.facebook.com/business/help/774623835981457
- About lead ads — https://www.facebook.com/business/help/1481110642181372
- Supported features of lead ads across platforms — https://www.facebook.com/business/help/588763988207510
- Lead ads sidenav — https://www.facebook.com/business/help/735435806665862
- About Advantage+ leads campaigns — https://www.facebook.com/business/help/992035952809423
- About Advantage+ sales campaigns — https://www.facebook.com/business/help/1362234537597370
- Creative recommendations for Advantage+ app campaigns (2–4 zmiany/mies.) — https://www.facebook.com/business/help/716015512512235
- Best practices for Instagram video ads — https://www.facebook.com/business/help/188534925073536
- Creative best practices for conversion testing — https://www.facebook.com/business/help/565573477186194
- Best practices for aspect ratios — https://www.facebook.com/business/help/103816146375741
- About engagement custom audiences — https://www.facebook.com/business/help/1090330204367211
- Create a lead form engagement custom audience — https://www.facebook.com/business/help/900802126698360
- Create a Facebook Page engagement custom audience — https://www.facebook.com/business/help/221146184973131
- Specifications for breakdowns in ads reporting — https://www.facebook.com/business/help/334565827335725
- About breakdowns, metrics and filtering in ads reporting — https://www.facebook.com/business/help/264160060861852
- Navigate to breakdowns — https://www.facebook.com/business/help/1798966537090251
- Understand creative-level performance in ads reporting — https://www.facebook.com/business/help/243916866413404
- Navigate to Meta ads reporting — https://www.facebook.com/business/help/110569454115567
- What are the advertising levels in Ads Manager — https://www.facebook.com/business/help/621956575422138
- Optimized CPM — https://www.facebook.com/business/help/494633817315490

### Meta Ads MCP — schematy narzędzi i katalog pól — [PEŁNY], poziom A (fakty o narzędziach)
- `ads_get_field_context` (122 pola; brak pól rankingów i statusu fatigue; `learning_stage_info`, `delivery_sub_status`, pola wideo i leadów)
- `ads_experiment_abtest_create_test` (testy L1 kreacji, `budget_percentage` domyślnie 20%, domyślnie 7 dni, KPI `cost_per_action_type:lead`)
- `ads_insights_industry_benchmark`, `ads_insights_performance_trend`, `ads_insights_anomaly_signal`

### Tylko wyszukiwarka — [WYSZUKIWARKA]
- Set Up a Creative Test in Meta Ads Manager (Meta; treść niepobrana) — https://www.facebook.com/business/help/1423851372208214 (A — treść nieznana)
- Jon Loomer — Meta's Creative Testing Tool: Setup, Strategy, and Results — https://www.jonloomer.com/meta-creative-testing/ (C)
- Jon Loomer — Creative Testing Feature for Meta Ads — https://www.jonloomer.com/qvt/creative-testing-feature/ (C)
- Jon Loomer — Is Meta Expanding Creative Testing to 10 Ads? — https://www.jonloomer.com/qvt/meta-expanding-creative-testing-10-ads/ (C/D)
- Jon Loomer — When One Ad Gets All the Budget: Your Options — https://www.jonloomer.com/one-ad-gets-all-the-budget/ (C)
- Jon Loomer — Creative Fatigue: What It Is and How to Prevent It — https://www.jonloomer.com/creative-fatigue-meta-ads/ (C; znalezione przez agenta 05)
- Alvaro Berrios — Meta's NEW Creative Testing Feature — https://alvaroberrios.com/blog/metas-new-creative-testing-feature/ (C/D)
- easyinsights — Meta's Update: A New Way to Test Creatives — https://easyinsights.ai/blog/metas-update-a-new-way-to-test-creatives-from-a-b-to-ai-led-optimization/ (D)
- admanage.ai — Facebook Ads A/B Testing: Complete Guide — https://admanage.ai/blog/facebook-ads-ab-testing (D)
- bir.ch — Meta Creative Testing Framework 2026 — https://bir.ch/blog/meta-ad-creative-testing-framework (D)
- Search Engine Land — Facebook ad costs jump 21% in 2025 — https://searchengineland.com/facebook-ad-costs-jump-beat-google-461690 (C)
- PPC Land — Facebook ad costs jump 21% as lead campaigns struggle — https://ppc.land/facebook-ad-costs-jump-21-as-lead-campaigns-struggle-while-traffic-ads-thrive/ (C)
- LocaliQ — Facebook Advertising Benchmarks — https://localiq.com/blog/facebook-advertising-benchmarks/ (C)
- Pechmann & Stewart (1988) — https://www.tandfonline.com/doi/abs/10.1080/01633392.1988.10504936 ; https://scholars.lmu.edu/en/publications/advertising-repetition-a-critical-review-of-wearin-and-wearout/ ; https://www.researchgate.net/publication/258847350_Advertising_Repetition_A_Critical_Review_of_Wearin_and_Wearout (B)
- Exploring wearin and wearout in web advertising (2010) — https://researchrepository.wvu.edu/context/faculty_publications/article/2174/viewcontent/2010_Exploring_wearin_and_wearout_in_web_advertising_3_1_2010.pdf (B)

### GitHub — [PEŁNY*] (WebFetch github.com; treść streszczona przez model pośredniczący)
- Motion Creative Strategy Bootcamp — index — https://github.com/Motion-Creative/bootcamp/blob/main/references/index.md (C)
- Week 5 (Evan Lee, Analyze) — https://github.com/Motion-Creative/bootcamp/blob/main/references/week-05/tuesday-evan-analyze.md (C)
- Week 3 (creative retro) — https://github.com/Motion-Creative/bootcamp/blob/main/references/week-03/thursday-coaching-creative-retro.md (C)
- Week 6 (iterate / winning stories) — https://github.com/Motion-Creative/bootcamp/blob/main/references/week-06/tuesday-jade-daniel-winning-stories.md (C)
- Week 7 (adapt winners into formats) — https://github.com/Motion-Creative/bootcamp/blob/main/references/week-07/tuesday-sprint-2-adapt.md (C)
- gomarble-ai/ai-ads-agent — meta-creative-analysis SKILL.md — https://github.com/gomarble-ai/ai-ads-agent/blob/main/skills/meta-creative-analysis/SKILL.md (D)

### Wiedza niepotwierdzona w sesji — [WIEDZA] (do weryfikacji w syntezie)
- Cacioppo & Petty (1979), teoria dwuczynnikowa powtórzeń; Schmidt & Eisend (2015), metaanaliza efektywnej częstotliwości, Journal of Advertising; Chae, Bruno & Feinberg (2019), wear-out w display, JMR; Kohavi, Tang & Xu (2020) "Trustworthy Online Controlled Experiments" (efekty nowości/pierwszeństwa, prawo Twymana); progi częstotliwości praktyków; reguła "2–3× CPA bez konwersji → wyłącz" (w sesji potwierdzono wariant Motion "~3× CPA", C); benchmarki hook rate 25–30%.

### Obliczenia — [OBLICZENIE]
- Skrypty `stats.py`, `stats2.py` (scratchpad sesji; Python stdlib: NormalDist, random; seed 42/7). Metody: test z dla dwóch proporcji (pooled/unpooled), log-rate-ratio dla Poissona, przedział Garwooda (przybliżenie Wilson-Hilferty), Monte Carlo 20–40 tys. powtórzeń, Gamma-Poisson z priorem Gamma(1, 0).

---

## Załącznik A — notatki robocze (surowe, chronologicznie; wszystkie zapytania Help Center i pozostałe źródła)


#### Help Center [PEŁNY] — partia 1 (zapytania 1–6)
- Cost per optimization event: "best to evaluate ... after the initial learning phase or since your last significant edit ... we recommend waiting until the ad set generates around 50 optimization events, but some ad sets stabilize earlier." https://www.facebook.com/business/help/1707952432550214
- Optimization events: "we recommend around 50 optimization events, but some ad sets stabilize earlier." https://www.facebook.com/business/help/139628083350822
- Last significant edit: raportuj od ostatniej istotnej edycji; "waiting until your ad set has generated about 50 optimization events since your last significant edit". https://www.facebook.com/business/help/942374239243867
- Troubleshoot "not receiving enough results": "the learning phase usually ends after about 50 optimization events in the week after the ad set's last significant edit. only edit your ad sets if you're having trouble getting enough optimization events."; "if your ad is not receiving enough results but other ads using the same budget are, that's okay ... if you want your ads to deliver equally, try creating an a/b test"; "if frequency is high, or if the delivery status reads creative fatigue ..."; odsyła do ad relevance diagnostics w celu oceny kreacji / post-click / targetowania. https://www.facebook.com/business/help/284656872650053
- Creative fatigue recommendations: "creative fatigue occurs when an audience has seen the same creative too many times"; funkcja TYLKO dla zestawów z JEDNĄ kreacją (bez Advantage+ catalog, dynamic creative, A+ app); przed publikacją ostrzeżenie, jeśli przewidywane zmęczenie w pierwszych 7 dniach; po starcie status "creative limited" (CPR > wcześniejsze reklamy, ale < 2x) i "creative fatigue" (CPR ≥ 2x wcześniejszych); "we consider all recent exposures of the ad's image or video, including those from other campaigns from your page"; rekomendacje: nowa reklama z obrazem/wideo "materially different", "keeping your original ad active instead of pausing ... may maximize results", poszerzenie grupy, Advantage+ creative. https://www.facebook.com/business/help/1346816142327858
- About A/B testing: porównanie 2 wersji strategii (kreacja, tekst, grupa, placement); "ensure nobody sees both"; "we do not recommend testing informally, such as by turning ad sets or campaigns on and off manually ... unreliable test results"; wynik na bazie cost per result albo cost per conversion lift. https://www.facebook.com/business/help/1738164643098669
- Create A/B test in Ads Manager: toolbar → "make a copy of this ad" lub "select two existing ads"; porównanie kampanii albo zestawów. https://www.facebook.com/business/help/355670925639619 ; typy/narzędzia https://www.facebook.com/business/help/1159714227408868
- Best practices A/B: jedna zmienna; hipoteza mierzalna; grupa wystarczająco duża i NIEużywana równolegle w innych kampaniach; "we recommend a minimum of 7-day tests. a/b tests can only be run for a maximum of 30 days"; harmonogram 1–30 dni; dłuższy gdy cykl konwersji >7 dni (np. 10 dni); budżet "that will produce enough results to confidently determine a winning strategy" (bez liczby). https://www.facebook.com/business/help/290009911394576
- Experiments tool: do 5 istniejących kampanii w jednym A/B teście. https://www.facebook.com/business/help/3506622486044209
- Confidence: "for lift tests, a 90 percent or higher confidence percentage represents a statistically reliable result. for a/b tests, a 65 percent or higher confidence percentage represents a winning result."; power ≥80% sugerowany przed testem. https://www.facebook.com/business/help/239549606692303  ← UWAGA: próg 65% to niska poprzeczka (≈ prawdopodobieństwo, że wygrałby przy powtórce), nie p<0,05.
- Jak wyznaczany zwycięzca A/B bez holdoutu: porównanie cost per result; "meta simulates possible outcomes tens of thousands of times to determine how often winning outcomes would have won" (symulacja, de facto podejście bayesowskie/bootstrapowe); zwycięzca może mieć wyższy koszt, gdy test za krótki / za mało wyników. https://www.facebook.com/business/help/166313650471318

#### Help Center [PEŁNY] — partia 2 (zapytania 7–12)
- Significant edits: "any change to targeting; any change to ad creative; any change to optimization event; ADDING A NEW AD TO YOUR AD SET; pausing your ad set for 7 days or longer; changing bid strategy"; budżet/bid/spending limit — zależnie od skali ("$100 to $101 isn't likely ... $100 to $1000 may"); przy Advantage+ campaign budget dodanie nowego zestawu NIE resetuje innych zestawów; edycja na poziomie zestawu nie resetuje innych zestawów. https://www.facebook.com/business/help/316478108955072
- About the learning phase: "ad sets exit the learning phase as soon as they can deliver stably. this usually occurs after about 50 results in the week after the ad set's last significant edit"; "during the learning phase, performance is less stable, so your results aren't necessarily indicative of future performance"; "avoid high ad volumes. when you create many ads and ad sets, the delivery system learns less about each"; "use realistic budgets"; "you shouldn't try to avoid the learning phase completely. testing new creative and marketing strategies is essential for improving your performance over time." https://www.facebook.com/business/help/112167992830700
- Learning limited: "isn't a penalty"; "unlikely to receive about 50 optimization events in the week after your last significant edit"; przyczyny: small audience, low budget, low bid/cost control, high auction overlap, infrequent optimization event, "running too many ads at the same time"; naprawa: łączenie zestawów/kampanii, szersza grupa, wyższy budżet, częstsze zdarzenie optymalizacji. https://www.facebook.com/business/help/269269737396981
- Breakdown effect: "misinterpretation that our system shifts impressions and spending into underperforming ad sets, placements or ads"; "when running multiple ads in 1 ad set, evaluate your results at the ad set level"; system przewiduje rosnący koszt marginalny (przykład: FB Stories CPA $0.35 dzień 1 → $5.30 dzień 10; IG Stories $0.72 → $2.70; wydatki $50 vs $450). Implikacja: średni CPA reklamy z niskim wydatkiem NIE jest dowodem, że byłaby tańsza przy większym wydatku (koszt krańcowy ≠ koszt średni). https://www.facebook.com/business/help/770303663944673
- Fluctuations: "analyze performance over at least a full week"; dzienny budżet może być przekroczony do 75%, max 7x tygodniowo; "the delivery system seeks the highest volume opportunities first. when those lower cost opportunities run out, the system may move on to more expensive options ... you may see costs increase over the schedule"; przy optymalizacji na konwersje CPM "may not be a good indicator of performance". https://www.facebook.com/business/help/1364841787225722
- Ad relevance diagnostics: min. 500 wyświetleń; "aren't inputs into the ad auction"; oceniają przeszłą aukcję w wybranym zakresie dat; "use ... to diagnose underperforming ads – not to optimize ads that are already meeting your advertising objectives"; tabela interpretacji (quality / engagement / conversion): QR↓ → niska jakość; ER↓ → "isn't spurring interest"; CR↓ → "isn't producing conversions. improve the call-to-action of your ad or post-click experience, or target a higher-intent audience"; QR↓ + CR↓ przy ER OK → "click-baity or controversial"; "more impactful to move a ranking from low to average than ... average to above average"; "seek the ideal creative/targeting fit"; "sometimes high performing ads have below average ... and that's ok". https://www.facebook.com/business/help/436113280262012 , https://www.facebook.com/business/help/403110480493160
- Engagement rate ranking: average = 35.–55. percentyl; below average: bottom 35% / 20% / 10%; tylko ostatnie 35 dni; engagement bait nie pomaga. https://www.facebook.com/business/help/2351270371824148
- Frequency: impressions / reach (dane próbkowane); "frequency may average 1 to 2 per ad set or may be much higher"; "if performance begins to drop as your frequency numbers rise, your target audience may be experiencing ad fatigue, and it may be wise to change your ad creative or targeting". Brak liczbowego progu "złej" częstotliwości. https://www.facebook.com/business/help/1546570362238584 ; reservation: domyślny frequency cap 2 wyświetlenia / 7 dni https://www.facebook.com/business/help/230299314945919
- 3-second video plays: liczy 3 s lub 97% długości, jeśli wideo < 3 s; bez powtórek. https://www.facebook.com/business/help/743427195703387 . UWAGA: artykuł "3-second video plays rate per impressions" ma błędną (skopiowaną) definicję "purchases divided by link clicks" — https://www.facebook.com/business/help/1252260652457829 — hook rate liczymy sami: 3-s plays / impressions.

#### Help Center [PEŁNY] — partia 3 (zapytania 13–21)
- ThruPlay: 6 s lub 15 s (albo 97% długości, jeśli krótsze); "full length is considered to be at least 97%". https://www.facebook.com/business/help/2051461368219124 ; metryki wideo: 2-s continuous, 3-s plays, ThruPlays liczone metodą "unique seconds watched" (bez powtórek); video plays at 25/50/75/100% to metryki kamieni milowych (mogą obejmować przewinięcia). https://www.facebook.com/business/help/1868286323447328 ; cost per 15-s ThruPlay https://www.facebook.com/business/help/1796060333844808
- CTR (link) = link clicks / impressions https://www.facebook.com/business/help/877711998984611 ; CTR (all) = clicks (all) / impressions (obejmuje kliknięcia w profil, rozwinięcia, reakcje itd.) https://www.facebook.com/business/help/928745330472862
- Lead ads metrics (conversion leads + CRM przez CAPI): qualified leads, cost per qualified lead, qualified lead rate — "estimated ... partially derived through modeling"; "for a/b testing of campaigns, you can use the cost per lead metric as your key metric". https://www.facebook.com/business/help/1544628789462866
- CRM dla conversion leads: przesyłać WSZYSTKIE etapy lejka, łącznie z etapem surowego leada; lead ID 15–16 cyfr; "during the learning phase, upload crm events for each lead status update". https://www.facebook.com/business/help/317857030149451 ; Zapier CAPI for CRM "optimize your lead ads for higher lead quality instead of lead volume" https://www.facebook.com/business/help/848158520256071 ; integracje CRM (direct/3rd party/custom) https://www.facebook.com/business/help/301355140655035
- Managing ad volume: "when an advertiser runs too many ads at once, each ad delivers less often. this means that fewer ads exit the learning phase ... too many ads can result in worse performance"; "decrease ads per ad set, but maintain diverse creative assets per ad set. one ad can contain multiple (up to 10) creative assets"; testing tekstów → multiple text optimization. https://www.facebook.com/business/help/2720085414702598 ; limity reklam na stronę 250/1000/5000/20000 https://www.facebook.com/business/help/766697140509126
- About experiments: "a/b testing ... compare up to 5 versions ... audience is randomized and split into separate groups so nobody sees more than one version. a winning ad is determined based on the version that has the lowest cost per result"; A/B dostępny dla każdego; conversion lift / brand lift multi-version — tylko z opiekunem, min. 120 000 USD wydatku w 90 dni. https://www.facebook.com/business/help/1915029282150425
- Budget optimization test (A+ campaign budget on vs off) https://www.facebook.com/business/help/299600627522144
- Cost per lead: "statistical modeling may be used to account for some events". https://www.facebook.com/business/help/999694013547805
- Troubleshoot "costs are too high": najpierw upewnić się, że zestaw wyszedł z learning; nie wycinać segmentów/placementów tylko dlatego, że miały wyższe koszty dotąd ("delivery system seeks the lowest cost opportunities first"); "we subsidize relevant ads in the ad auction, so more relevant ads often cost less"; wysoka częstotliwość / status creative fatigue → zarządzanie zmęczeniem; sprawdzić sygnały zdarzeń; auction overlap/konkurencja. https://www.facebook.com/business/help/2727273724224874
- Auction overlap: przy nakładaniu się wybierana jest reklama o najwyższej total value; może blokować wyjście z learning; rozwiązanie: łączenie zestawów, wyłączanie tych learning limited / z najmniejszą liczbą wyników. https://www.facebook.com/business/help/537699989762051 ; auction overlap rate https://www.facebook.com/business/help/714172578779451

#### Help Center [PEŁNY] — partia 4 (zapytania 22–24)
- Dynamic creative: "because results are shown as the aggregate performance across all variations, using dynamic creative as a substitute for split testing is not recommended"; max 10 mediów, do 5 nagłówków/CTA. https://www.facebook.com/business/help/170372403538781 , https://www.facebook.com/business/help/344106239654869
- Highest volume: "doesn't optimize for cpa ... your cpa may fluctuate". https://www.facebook.com/business/help/721453268045071
- A+ campaign budget reporting: nie oceniaj podziału budżetu po średnim koszcie na zestaw; przykład: wyłączenie zestawu A o najwyższym średnim koszcie pogarsza wynik kampanii (12 → 11 zdarzeń za $30), bo koszt KRAŃCOWY zestawu C rośnie szybko. https://www.facebook.com/business/help/258714594633281 — to samo dotyczy reklam w zestawie (koszt średni ≠ krańcowy).
- Artykuł Help Center "Set Up a Creative Test in Meta Ads Manager" istnieje: https://www.facebook.com/business/help/1423851372208214 (URL z WebSearch; MCP go nie zwrócił — treść znana tylko ze streszczeń praktyków) [WYSZUKIWARKA].

#### WebSearch [WYSZUKIWARKA] — partia 1
- Creative testing tool (Meta, 2025): test 2–5 reklam (Loomer: możliwe rozszerzenie do 10) WEWNĄTRZ istniejącego zestawu; budżet dzielony równo między testowane reklamy; każda osoba widzi tylko jedną wersję (bez auction overlap); po teście normalna dystrybucja wraca; wymagana strategia Highest Volume (bez cost cap / bid cap / ROAS goal); na początku tylko budżet dzienny, teraz też lifetime; konfiguracja: liczba reklam, % budżetu na test, liczba dni, metryka porównania; Meta rekomenduje ≤20% budżetu na test; domyślnie 7 dni. Źródła: Jon Loomer "Meta's Creative Testing Tool: Setup, Strategy, and Results" — https://www.jonloomer.com/meta-creative-testing/ ; "Creative Testing Feature for Meta Ads" — https://www.jonloomer.com/qvt/creative-testing-feature/ ; "Is Meta Expanding Creative Testing to 10 Ads?" — https://www.jonloomer.com/qvt/meta-expanding-creative-testing-10-ads/ ; Alvaro Berrios — https://alvaroberrios.com/blog/metas-new-creative-testing-feature/ ; easyinsights — https://easyinsights.ai/blog/metas-update-a-new-way-to-test-creatives-from-a-b-to-ai-led-optimization/ . Loomer: różnice między reklamami mają być ISTOTNE, nie drobne warianty tekstu, bo inaczej wariancja = losowość; "you're not going to get meaningful data from a test if you're spending very little on it".
- Loomer "When One Ad Gets All the Budget: Your Options" (4 opcje; opcja 1: nic nie rób, jeśli wynik zagregowany jest dobry — "Meta chose the ad it's running for a reason ... set your ego aside"). https://www.jonloomer.com/one-ad-gets-all-the-budget/
- Praktycy (admanage.ai, bir.ch itd.): "20–50 conversions per variant for CPA winners, 5,000–10,000 impressions per variant for upper-funnel metrics like thumbstop"; 7 dni min., 10–14 dla konwersji. https://admanage.ai/blog/facebook-ads-ab-testing , https://bir.ch/blog/meta-ad-creative-testing-framework [C/D — heurystyki bez wyliczeń]
- Benchmarki WordStream/LocaliQ 2025 (>1000 kampanii, USA): CPL leadowych $27.66 (+21% r/r), CVR 7.72% (z 8.67%), CTR ruchowych 1.71%, CPC ruchowych $0.70; CPC leadowych $1.92; Google Ads CPL $70.11. Search Engine Land — https://searchengineland.com/facebook-ad-costs-jump-beat-google-461690 ; PPC Land — https://ppc.land/facebook-ad-costs-jump-21-as-lead-campaigns-struggle-while-traffic-ads-thrive/ ; LocaliQ — https://localiq.com/blog/facebook-advertising-benchmarks/
- Pechmann & Stewart (1988) "Advertising Repetition: A Critical Review of Wearin and Wearout", Current Issues and Research in Advertising 11(1-2):285-329: wear-in ≈ pierwsze ~3 ekspozycje, od ~4. ekspozycji znudzenie i negatywne myśli (Two-Stage Cognitive Response Model, odwrócone U). https://www.tandfonline.com/doi/abs/10.1080/01633392.1988.10504936 ; https://scholars.lmu.edu/en/publications/advertising-repetition-a-critical-review-of-wearin-and-wearout/ [B, ale kontekst: TV/print, lab — ekstrapolacja na social ostrożna]

#### Uwaga środowiskowa
- Budżet WebSearch sesji (200 wywołań wspólnych dla wszystkich agentów) wyczerpał się po 7 moich zapytaniach. Dalej: Meta Help Center (MCP), katalog pól Meta Ads MCP, GitHub, własne obliczenia, [WIEDZA] z wyraźnym oznaczeniem. Tezy praktyków / benchmarki, których nie potwierdziłem w tej sesji, są oznaczone [WIEDZA] i wymagają weryfikacji przed użyciem jako "faktów".
- WebFetch jonloomer.com — zablokowany (1 próba).

#### Katalog pól Meta Ads MCP (ads_get_field_context) [PEŁNY] — co system może realnie pobrać
- Dostępne metryki m.in.: impressions, reach, frequency, amount_spent, cpm, ctr (= CTR (all)), website_ctr (= CTR (link)), outbound_clicks_ctr, unique_link_clicks_ctr, link_click, cost_per_link_click, clicks (all), cpc (all), 3_second_video_plays, video_continuous_2_sec_watched_actions (≥50% pikseli w widoku), video_play_actions, video_p25/p50/p75/p95/p100_watched_actions, video_thruplay_watched_actions (15 s lub do końca), video_avg_time_watched_actions, cost_per_thruplay, cost_per_video_view (= cost per 3-s play), lead, onsite_conversion_lead_grouped ("Meta leads" — formularze, Messenger, IG), cost_per_lead, results, cost_per_result, landing_page_view.
- Pola statusu: delivery, delivery_sub_status (LEARNING / FAIL = learning limited), learning_stage_info (status, konwersje, czas ostatniej istotnej edycji, exit reason).
- NIE ZNALEZIONO w katalogu: quality_ranking, engagement_rate_ranking, conversion_rate_ranking, statusu "creative fatigue/limited", liczby otwarć formularza. → System nie może zakładać ich automatycznego pobrania przez to MCP; trzeba je wziąć z Ads Managera ręcznie (eksport/screen) albo z Graph API poza MCP. [PEŁNY – stan katalogu na 2026-09-24]

#### Help Center [PEŁNY] — partia 5 (zapytania 25–31)
- Opportunity score: 0–100, ile rekomendacji zastosowano; rekomendacje "experimentally proven"; "does not reflect your actual or future performance"; "you should not turn off campaigns with a low opportunity score". Rekomendacje dot. creative fatigue pojawiają się w opportunity score. https://www.facebook.com/business/help/804913634782260
- Ads reporting breakdowns: by object / time / delivery / action; "media type" (obraz vs wideo); "statistical modeling may be used in breakdowns". https://www.facebook.com/business/help/264160060861852 , https://www.facebook.com/business/help/334565827335725 , https://www.facebook.com/business/help/1798966537090251
- Creative-level performance (ad creative breakdown w Ads Reporting): wyniki per kreacja (nagłówek, tekst, CTA, obraz/wideo), eksport .csv/.xlsx; "does not include results for dynamic creative ads"; wdrażane stopniowo. https://www.facebook.com/business/help/243916866413404 , https://www.facebook.com/business/help/110569454115567
- Instant form types: More volume (domyślny), Higher intent (dodatkowy ekran przeglądu; "prevent receiving submissions from those people who are only marginally interested"; tylko FB/IG feed mobile), Rich creative. https://www.facebook.com/business/help/252352181957512 ; do 15 pytań własnych, typy pytań (multiple choice, short answer, conditional, appointment request), weryfikacja SMS (OTP). https://www.facebook.com/business/help/791294492679966 , https://www.facebook.com/business/help/774623835981457 ; przykłady pytań kwalifikujących https://www.facebook.com/business/help/1607931762802448 ; prefill https://www.facebook.com/business/help/438193446367413
- Cost per result goal: "works best when your ad set gets at least 50-100 weekly conversions"; "day-to-day costs naturally fluctuate; evaluate performance using weekly averages rather than daily results. wait at least 7 days after any adjustment before re-evaluating." https://www.facebook.com/business/help/272336376749096  ← oficjalne wsparcie reguły "oceniaj tygodniowo, 7 dni po zmianie".

#### Help Center [PEŁNY] — partia 6 (zapytania 32–37)
- Qualified leads / conversion leads: przy celu "qualified leads" zalecane połączenie CRM; "during the learning phase, upload crm events for each lead status update". https://www.facebook.com/business/help/279369167153556 ; CAPI for CRM (developers): integracja partnera 3–7 tyg., onboarding do w pełni zoptymalizowanej kampanii ~1–2 mies., w tym "learning phase ... 2-4 weeks"; lead_id preferowany. https://developers.facebook.com/docs/marketing-api/conversions-api/guides/conversions-api-crm-for-platforms
- Opóźnienia zdarzeń: dla celu Leads zdarzenia z CAPI — zalecane w ciągu 1 h, maks. 7 dni; atrybucja w Ads Managerze — do 7 dni (62 dni z "extend attribution uploads"). https://www.facebook.com/business/help/801591810609156
- Auction competition change: różnica między competitive bid danego dnia a średnią z 3 poprzednich dni; "considered significant if it is over 20%"; competitive bid = najtańszy 1% zwycięskich stawek w przegranych aukcjach. https://www.facebook.com/business/help/2024547657774300  ← narzędzie do odróżnienia "zmiany aukcji" od "zmęczenia kreacji".
- First time impression ratio: % dziennych wyświetleń od osób widzących zestaw pierwszy raz = reached for the first time / impressions; "if your first time impression ratio is dropping significantly along with your ad set's performance, this may mean it's time to broaden your audience or find a new one." https://www.facebook.com/business/help/104316936854650  ← sygnał NASYCENIA GRUPY (a nie zmęczenia konkretnej kreacji).
- Audience reached ratio: % szacowanej potencjalnej grupy już osiągniętej (EAS z 30 dni). https://www.facebook.com/business/help/1932319983694913
- Cost per result: "affected by many factors, such as your auction bid, target audience, optimization type, ad creative and messaging, and schedule"; modelowanie statystyczne. https://www.facebook.com/business/help/762109693832964 ; "estimated cost per result without edit" — tylko orientacyjne, "not an indicator of past or future performance". https://www.facebook.com/business/help/463778672975386
- Account insights (Ads Reporting): creative fatigue (tylko aktywne reklamy; rekomendacja: zduplikować reklamę w zmęczonym zestawie i podmienić obraz/wideo), creative similarity ("images or videos ... too visually identical. this can lead to creative fatigue and increase your cost per result" — tylko reklamy statyczne aktywne w ost. 28 dniach), top-performing creative themes, industry themes. https://www.facebook.com/business/help/1784925068944145

#### Help Center [PEŁNY] — partia 7 (zapytania 38–41)
- Selecting a variable for A/B: creative (obraz, tekst, typ kreacji — na poziomie reklamy), audience, placements, custom; nowicjuszom: jedna zmienna. https://www.facebook.com/business/help/1597318281091985
- A/B przez duplikację zestawu/reklamy: harmonogram 1–30 dni; "estimated power. this shows the likelihood of a statistically significant result based on your test schedule and budget. we recommend running tests with at least 80% estimated power." https://www.facebook.com/business/help/560857351380163  ← Ads Manager sam liczy moc testu — system powinien kazać jej użyć zamiast zgadywać budżet.
- Best practices lead ads: "fewer multiple choice questions results in more form submissions, whereas more multiple choice questions typically results in more quality leads"; "test various instant form lengths: consider running an a/b test where you measure completion rates, cost per lead and cost per conversion"; retargeting osób, które "started your instant form but never finished it"; lookalike na bazie KLIENTÓW, nie osób z formularza; "connect your crm". https://www.facebook.com/business/help/435270316658768
- Advantage+ leads campaigns: wczesne testy (19 testów, XI 2024–I 2025, m.in. usługi profesjonalne, B2B, edukacja, auto, home retail): średnio −14% CPL i −10% CPQL vs A+ off; "improvement of cost per lead with more than 95% confidence, ... cost per quality lead with 83% confidence". https://www.facebook.com/business/help/992035952809423  ← przykład, że nawet Meta raportuje CPQL z niższą pewnością niż CPL (mniej zdarzeń).
- Advantage+ app campaigns (kontekst: aplikacje, nie leady!): "we recommend changing your ad creative 2-4 times per month to sustain performance"; do 50 obrazów/wideo. https://www.facebook.com/business/help/716015512512235  ← jedyna znaleziona oficjalna liczba częstotliwości odświeżania; ekstrapolacja na lead gen = heurystyka.
- Advantage+ sales: −9% cost per conversion, 1 tydz. testu (XII 2024), "statistical simulation framework gave a 90% statistical confidence". https://www.facebook.com/business/help/1362234537597370

#### Help Center [PEŁNY] — partia 8 (zapytania 42–43)
- Best practices for Instagram video ads: marka i kluczowy komunikat w pierwszych 3 s ("early branding increases recall"); hook w pierwszej klatce (ruch / mocny obraz); 6–15 s w feed, <10 s w stories; sound-off (napisy); natywny styl; "test and iterate: run split tests ... keep your top performers as evergreen. replace underperformers regularly"; "A/B TESTING: START WITH UP TO 10 CREATIVES PER AD SET, THEN KEEP THE TOP 5 AS EVERGREEN. RUN TESTS FOR AT LEAST 4 DAYS FOR RELIABLE RESULTS"; "creative variety: mix video and static ads for better performance and to reduce creative fatigue"; monitoruj video completion rate, CTA CTR, konwersje; sound-on w feedzie → 2.25x wyższy CTA CTR. https://www.facebook.com/business/help/188534925073536  ← UWAGA: "4 dni" to minimum Meta dla testu kreacji na Instagramie, sprzeczne z "min. 7 dni" dla A/B testów (290009911394576). System przyjmuje ostrzejsze: 7 dni.
- Creative best practices for conversion testing: "campaigns with both static images and video achieved conversion lift at a 17% higher rate than campaigns with just static images"; proste warianty wideo z jednego zdjęcia: basic / brand / benefit / demo, animacja w pierwszych 3 s, 5–10 s, jedna korzyść, CTA + stała plansza końcowa. https://www.facebook.com/business/help/565573477186194  ← tania iteracja zwycięskiej statyki.
- Aspect ratios: feed 4:5 (FB) / 1:1 (IG), Stories/Reels 9:16; do 10 mediów w reklamie. https://www.facebook.com/business/help/103816146375741
- Engagement custom audiences — w tym "lead form" (otwarcie formularza); można robić retargeting osób, które otworzyły, ale nie wysłały. https://www.facebook.com/business/help/1090330204367211 , https://www.facebook.com/business/help/900802126698360

#### Narzędzia Meta Ads MCP (schematy) [PEŁNY — opis narzędzi]
- ads_experiment_abtest_create_test: testy A/B na poziomie kampanii (L3), zestawu (L2) i KREACJI (L1); min. 2 komórki; "budget_percentage: optional lifetime budget percentage for creative tests. Defaults to 20%"; domyślny czas 7 dni od jutra; primary KPI domyślnie cost_per_result (dla leadów: "cost_per_action_type:lead"); secondary KPIs nie wpływają na zwycięzcę. ← potwierdza 20% budżetu i 7 dni jako domyślne ustawienia testu kreacji.
- ads_insights_anomaly_signal: alerty o odchyleniach — "anomalies indicate areas for deeper analysis, not definitive conclusions".
- ads_insights_performance_trend: trendy CPC, CPM, CPR, ROAS, CTR, CVR, REACH (poziom AD/ADSET), cała dostępna historia.
- ads_insights_industry_benchmark: porównanie zestawu z zagregowanymi benchmarkami podobnych reklamodawców (opcjonalnie wg spend tier i celu optymalizacji, np. LEAD_GENERATION). ← lepsze źródło benchmarków niż blogi z USA.

#### GitHub [PEŁNY, poziom D]
- gomarble-ai/ai-ads-agent, skill meta-creative-analysis (narzędzie komercyjne, heurystyki bez uzasadnienia): hook rate ≥40% "good", 26–39% "average", <25% "poor"; hold rate vs średnia konta z 90 dni (good = średnia +25%); CTR <0,65% "poor"; pauza gdy CPM ≥30% powyżej średniej "Pareto set" + niski ROAS; brak progów minimalnej próby. https://github.com/gomarble-ai/ai-ads-agent/blob/main/skills/meta-creative-analysis/SKILL.md

#### Obliczenia [OBLICZENIE] — skrypt stats.py / stats2.py (scratchpad), wyniki przeniesione do sekcji 3.

#### GitHub — Motion Creative Strategy Bootcamp (transkrypcje zajęć, praktycy; poziom C/D) [PEŁNY*]
(*pełny tekst przez WebFetch github.com, ale streszczony przez model pośredniczący)
- index: lejek "Spend → Thumbstop → Hold → CTR-outbound → Conversion"; diagnostyka: niski thumbstop → hook/format; thumbstop OK, hold słaby → tempo/montaż; hold OK, CTR słaby → oferta/CTA (lub LP); CTR OK, konwersja słaba → LP / dopasowanie produktu, "not creative"; alokacja 50/25/25 (sprawdzone / wariacje / nowe koncepty — E. Philippou, "for aggressive scaling"); 3–5 partii iteracji na zwycięski koncept (V. Videtta); "Explore vs Exploit". https://github.com/Motion-Creative/bootcamp/blob/main/references/index.md
- Week 5 (Evan Lee, "Analyze your ads"): "Use ~3× CPA or ~3× AOV as a statistically relevant spend threshold before judging a creative."; hipoteza → Winner (double down) / Loser (don't iterate, avoid similar swings) / Middling (inconclusive; more time, isolate variables); "You don't always have a creative problem" (np. LP niedopasowana do reklamy); grupować reklamy wg produktu/twórcy/typu hooka/tematu zamiast porównywać pojedyncze reklamy o różnym wydatku. https://github.com/Motion-Creative/bootcamp/blob/main/references/week-05/tuesday-evan-analyze.md
- Week 3 Thu (creative retro): retro MIESIĘCZNE ("explicitly not weekly"); top 10 reklam wg wydatku + miękkie metryki; podział budżetu "~70/30 testing vs. scaling; shift to ~80/20 for new/stale accounts and ~50/50 ... during promos"; "minimum 3–4 distinct concepts across formats and funnel stages for a fair test". https://github.com/Motion-Creative/bootcamp/blob/main/references/week-03/thursday-coaching-creative-retro.md  (UWAGA: kierunek 70/30 — w streszczeniu niejednoznaczne, co jest 70 a co 30)
- Week 6 (Jade Heritage/Calm, Daniel Rivera): "Small spend: 2–3 strong concepts; Higher spend: 5–10 concurrent tests; Scale phase: up to 200/month"; pierwsze 3 reklamy nowego konceptu "were not winners on their own but showed enough signal to validate the concept" → iteracja ~2x obniżyła CAC w miesiąc; macierz iteracji 2×2 (wizual × komunikat). https://github.com/Motion-Creative/bootcamp/blob/main/references/week-06/tuesday-jade-daniel-winning-stories.md
- Week 7 (Viti Videtta, Janae LeVander, Sophia Beauvoir): drabina testowa statyka → krótkie wideo (VO/tekst) → testimonial/high-production; 6 dźwigni mnożenia zwycięzcy; "3–5 batches per winning concept"; Green (zwycięzca → większe zmiany) / Yellow (reklama skalowana → małe zmiany); "Ad Families" (gałęzie wokół zwycięzcy wg person/poziomu pragnienia/świadomości) jako ochrona przed zmęczeniem; po Andromedzie ~5 mocno zróżnicowanych reklam na partię; Caraway ~40 nowych UGC/mies. (60+ w BFCM). https://github.com/Motion-Creative/bootcamp/blob/main/references/week-07/tuesday-sprint-2-adapt.md
- Kontekst: prawie wyłącznie e-commerce DTC z dużymi budżetami → przenoszenie na lokalny lead gen PL = ekstrapolacja.

#### Help Center [PEŁNY] — partia 9 (zapytanie 46)
- About ad delivery: "if you have multiple ads in your ad set (or across your account), we'll show the ad that's most likely to achieve the lowest cost per optimization event for the given person. this means that each of your ads won't necessarily be delivered the same number of times"; "the ad delivery system uses predictions of future performance to determine where to deliver next – not each ad set's past performance". https://www.facebook.com/business/help/1000688343301256  ← reklamy w jednym zestawie trafiają do RÓŻNYCH ludzi → porównanie ich CTR/CPL nie jest eksperymentem losowym (selekcja przez algorytm).
- Troubleshoot "ad set hasn't delivered enough": "A GOOD GENERAL RULE IS THAT YOUR DAILY BUDGET SHOULD BE AT LEAST 10 TIMES THE AVERAGE COST OF YOUR OPTIMIZATION EVENT"; alternatywa: zdarzenie wyżej w lejku. https://www.facebook.com/business/help/666335734044063  ← oficjalna reguła budżetowa: dzienny budżet ≥ 10 × CPA (≈ 70 × CPA/tydz. ≥ 50 zdarzeń/tydz.).
- Troubleshoot ad delivery (drzewo: kampania/zestaw/reklama). https://www.facebook.com/business/help/236201204528536

## Załącznik B — pełne wyniki obliczeń [OBLICZENIE]

> Założenia: patrz sekcja 3. Tabele wygenerowane skryptami stats.py / stats2.py (Python stdlib).

#### A. CTR (link) — wyświetlenia NA RAMIĘ (alfa=0,05 dwustronnie, moc 80%)
| bazowy CTR | wzrost wzgl. | wyświetlenia / ramię | kliknięcia / ramię (ok.) |
|---|---|---|---|
| 0.5% | +20% | 85,862 | 472 |
| 0.5% | +30% | 39,885 | 229 |
| 0.5% | +50% | 15,599 | 97 |
| 1.0% | +20% | 42,693 | 470 |
| 1.0% | +30% | 19,827 | 228 |
| 1.0% | +50% | 7,750 | 97 |
| 1.5% | +20% | 28,304 | 467 |
| 1.5% | +30% | 13,141 | 227 |
| 1.5% | +50% | 5,134 | 96 |
| 2.0% | +20% | 21,109 | 464 |
| 2.0% | +30% | 9,798 | 225 |
| 2.0% | +50% | 3,826 | 96 |

#### A2. To samo przy łagodniejszym progu (alfa=0,10 dwustronnie, moc 80%)
| bazowy CTR | wzrost | wyświetlenia / ramię |
|---|---|---|
| 1.0% | +20% | 33,629 |
| 1.0% | +30% | 15,618 |
| 1.0% | +50% | 6,105 |

#### B. Hook rate (3-s plays / impressions) — wyświetlenia NA RAMIĘ
| bazowy hook rate | wzrost wzgl. | wyświetlenia / ramię |
|---|---|---|
| 15% | +20% | 2,402 |
| 15% | +30% | 1,106 |
| 25% | +20% | 1,251 |
| 25% | +30% | 571 |
| 35% | +20% | 758 |
| 35% | +30% | 342 |

#### B2. Hold rate (ThruPlay / 3-s plays) — 3-s odtworzeń NA RAMIĘ
| bazowy hold rate | wzrost wzgl. | 3-s plays / ramię |
|---|---|---|
| 10% | +20% | 3,841 |
| 10% | +30% | 1,774 |
| 20% | +20% | 1,683 |
| 20% | +30% | 772 |
| 30% | +20% | 963 |
| 30% | +30% | 437 |

#### C. CVR kliknięcie→lead (np. formularz natywny) — kliknięć NA RAMIĘ
| bazowy CVR | wzrost wzgl. | kliknięcia / ramię | leady / ramię (ok.) |
|---|---|---|---|
| 5% | +20% | 8,158 | 449 |
| 5% | +30% | 3,780 | 217 |
| 5% | +50% | 1,471 | 92 |
| 10% | +20% | 3,841 | 423 |
| 10% | +30% | 1,774 | 204 |
| 10% | +50% | 686 | 86 |
| 20% | +20% | 1,683 | 370 |
| 20% | +30% | 772 | 178 |
| 20% | +50% | 294 | 74 |
| 30% | +20% | 963 | 318 |
| 30% | +30% | 437 | 151 |
| 30% | +50% | 163 | 61 |

#### D. CPL przy RÓWNYM wydatku (model Poissona) — leadów NA RAMIĘ
| różnica CPL (gorszy/lepszy) | = lepszy tańszy o | leady w gorszym | leady w lepszym | alfa |
|---|---|---|---|---|
| 1.20x | 17% | 433 | 520 | 0.05 |
| 1.20x | 17% | 249 | 299 | 0.2 |
| 1.25x | 20% | 284 | 355 | 0.05 |
| 1.25x | 20% | 163 | 204 | 0.2 |
| 1.30x | 23% | 202 | 263 | 0.05 |
| 1.30x | 23% | 116 | 151 | 0.2 |
| 1.50x | 33% | 80 | 120 | 0.05 |
| 1.50x | 33% | 46 | 69 | 0.2 |
| 2.00x | 50% | 25 | 50 | 0.05 |
| 2.00x | 50% | 15 | 29 | 0.2 |
| 3.00x | 67% | 9 | 27 | 0.05 |
| 3.00x | 67% | 5 | 15 | 0.2 |

#### E. Niepewność CPL przy n leadach (95% przedział dla stawki Poissona, metoda dokładna Garwood ~ przybliżenie)
| leady (n) | przedział liczby leadów | CPL: od ... do (x obserwowany CPL) |
|---|---|---|
| 3 | 0.6–8.8 | 0.34x – 4.98x |
| 5 | 1.6–11.7 | 0.43x – 3.10x |
| 10 | 4.8–18.4 | 0.54x – 2.09x |
| 20 | 12.2–30.9 | 0.65x – 1.64x |
| 30 | 20.2–42.8 | 0.70x – 1.48x |
| 50 | 37.1–65.9 | 0.76x – 1.35x |
| 100 | 81.4–121.6 | 0.82x – 1.23x |
| 200 | 173.2–229.7 | 0.87x – 1.15x |

#### F. Reguła 'wyłącz po X × docelowy CPL bez leada' — P(0 leadów) przy prawdziwym CPL
| wydane (× target CPL) | prawdziwy CPL = 0,8×T | = T | = 1,5×T | = 2×T | = 3×T |
|---|---|---|---|---|---|
| 1× | 29% | 37% | 51% | 61% | 72% |
| 1.5× | 15% | 22% | 37% | 47% | 61% |
| 2× | 8% | 14% | 26% | 37% | 51% |
| 3× | 2% | 5% | 14% | 22% | 37% |
| 4× | 1% | 2% | 7% | 14% | 26% |

#### G. Wielokrotne porównania: 5 IDENTYCZNYCH reklam (ten sam prawdziwy CPL), równy wydatek
| reklam | oczekiwane leady / reklamę | P(zwycięzca 'tańszy' o ≥23% = 1,3x) | P(≥33% = 1,5x) |
|---|---|---|---|
| 3 | 5 | 82% | 65% |
| 3 | 10 | 66% | 42% |
| 3 | 20 | 47% | 20% |
| 3 | 50 | 18% | 3% |
| 5 | 5 | 93% | 76% |
| 5 | 10 | 80% | 49% |
| 5 | 20 | 57% | 19% |
| 5 | 50 | 19% | 1% |
| 10 | 5 | 99% | 90% |
| 10 | 10 | 95% | 65% |
| 10 | 20 | 77% | 26% |
| 10 | 50 | 27% | 1% |

#### H. Family-wise error: P(co najmniej 1 fałszywy 'zwycięzca') przy k porównaniach, alfa=0,05
| k | FWER | Bonferroni alfa na test |
|---|---|---|
| 1 | 5% | 0.050 |
| 2 | 10% | 0.025 |
| 4 | 19% | 0.013 |
| 5 | 23% | 0.010 |
| 10 | 40% | 0.005 |
| 20 | 64% | 0.003 |

#### I. Regresja do średniej / klątwa zwycięzcy: prawdziwe CPL różne, wybieramy obserwowanego zwycięzcę
| reklam | oczekiwane leady / reklamę (przy średnim CPL) | prawdziwy CPL zwycięzcy / obserwowany (średnio) | P(wybrano naprawdę najlepszą) |
|---|---|---|---|
| 3 | 5 | 1.33x | 53% |
| 3 | 10 | 1.21x | 60% |
| 3 | 20 | 1.12x | 68% |
| 3 | 50 | 1.06x | 77% |
| 3 | 100 | 1.03x | 83% |
| 5 | 5 | 1.45x | 42% |
| 5 | 10 | 1.27x | 50% |
| 5 | 20 | 1.16x | 59% |
| 5 | 50 | 1.07x | 71% |
| 5 | 100 | 1.04x | 78% |

#### J. Bayes (Gamma-Poisson, słaby prior): P(B ma niższy CPL niż A) przy równym wydatku
| leady A | leady B (ten sam wydatek) | obserwowana różnica CPL | P(B naprawdę tańszy) |
|---|---|---|---|
| 4 | 6 | B tańszy o 33% | 73% |
| 8 | 12 | B tańszy o 33% | 81% |
| 10 | 15 | B tańszy o 33% | 84% |
| 20 | 30 | B tańszy o 33% | 92% |
| 40 | 60 | B tańszy o 33% | 98% |
| 5 | 10 | B tańszy o 50% | 90% |
| 10 | 20 | B tańszy o 50% | 97% |
| 3 | 0 | A tańszy | 6% |
| 0 | 3 | B tańszy o 100% | 94% |

#### K. Budżet → leady / tydzień i czy zestaw ma szansę na ~50 zdarzeń / 7 dni
| budżet mies. (zł) | CPL (zł) | leady / mies. | leady / tydz. | ile zestawów po 50/tydz. | budżet tyg. potrzebny na 50 leadów |
|---|---|---|---|---|---|
| 1,500 | 20 | 75 | 17.3 | 0.35 | 1,000 zł |
| 1,500 | 40 | 38 | 8.6 | 0.17 | 2,000 zł |
| 1,500 | 80 | 19 | 4.3 | 0.09 | 4,000 zł |
| 1,500 | 150 | 10 | 2.3 | 0.05 | 7,500 zł |
| 3,000 | 20 | 150 | 34.5 | 0.69 | 1,000 zł |
| 3,000 | 40 | 75 | 17.3 | 0.35 | 2,000 zł |
| 3,000 | 80 | 38 | 8.6 | 0.17 | 4,000 zł |
| 3,000 | 150 | 20 | 4.6 | 0.09 | 7,500 zł |
| 5,000 | 20 | 250 | 57.5 | 1.15 | 1,000 zł |
| 5,000 | 40 | 125 | 28.8 | 0.58 | 2,000 zł |
| 5,000 | 80 | 62 | 14.4 | 0.29 | 4,000 zł |
| 5,000 | 150 | 33 | 7.7 | 0.15 | 7,500 zł |
| 10,000 | 20 | 500 | 115.1 | 2.30 | 1,000 zł |
| 10,000 | 40 | 250 | 57.5 | 1.15 | 2,000 zł |
| 10,000 | 80 | 125 | 28.8 | 0.58 | 4,000 zł |
| 10,000 | 150 | 67 | 15.3 | 0.31 | 7,500 zł |
| 20,000 | 20 | 1000 | 230.1 | 4.60 | 1,000 zł |
| 20,000 | 40 | 500 | 115.1 | 2.30 | 2,000 zł |
| 20,000 | 80 | 250 | 57.5 | 1.15 | 4,000 zł |
| 20,000 | 150 | 133 | 30.7 | 0.61 | 7,500 zł |
| 50,000 | 20 | 2500 | 575.4 | 11.51 | 1,000 zł |
| 50,000 | 40 | 1250 | 287.7 | 5.75 | 2,000 zł |
| 50,000 | 80 | 625 | 143.8 | 2.88 | 4,000 zł |
| 50,000 | 150 | 333 | 76.7 | 1.53 | 7,500 zł |

#### I2. Wrażliwość: większy prawdziwy rozrzut CPL między kreacjami (sd log = 0,5)
| reklam | oczekiwane leady / reklamę | prawdziwy / obserwowany CPL zwycięzcy | P(wybrano najlepszą) |
|---|---|---|---|
| 3 | 5 | 1.24x | 68% |
| 3 | 10 | 1.13x | 75% |
| 3 | 20 | 1.07x | 82% |
| 3 | 50 | 1.03x | 88% |
| 5 | 5 | 1.29x | 61% |
| 5 | 10 | 1.16x | 70% |
| 5 | 20 | 1.08x | 77% |
| 5 | 50 | 1.03x | 85% |

#### L. Ile kreacji da się OCENIĆ NA CPL w miesiącu (próg ~20 leadów/kreację; ~15–25 leadów wykrywa różnicę ≈2x)
| budżet mies. | CPL 40 zł: leady/mies. | kreacji ocenialnych na CPL | CPM 25 zł: wyświetlenia/mies. | kreacji ocenialnych na hook rate (2,5 tys. wyśw.) | na CTR +50% przy CTR 1% (7,75 tys. wyśw.) |
|---|---|---|---|---|---|
| 1,500 zł | 38 | 1.9 | 60,000 | 24 | 8 |
| 3,000 zł | 75 | 3.8 | 120,000 | 48 | 15 |
| 5,000 zł | 125 | 6.2 | 200,000 | 80 | 26 |
| 10,000 zł | 250 | 12.5 | 400,000 | 160 | 52 |
| 20,000 zł | 500 | 25.0 | 800,000 | 320 | 103 |
| 50,000 zł | 1250 | 62.5 | 2,000,000 | 800 | 258 |

#### M. Koszt testu CTR / hook rate przy różnych CPM (zł) — koszt NA RAMIĘ
| metryka i efekt | wyśw./ramię | CPM 15 zł | CPM 25 zł | CPM 40 zł |
|---|---|---|---|---|
| hook rate 25% → +20% | 1,251 | 19 zł | 31 zł | 50 zł |
| hook rate 15% → +20% | 2,402 | 36 zł | 60 zł | 96 zł |
| CTR 1% → +50% | 7,750 | 116 zł | 194 zł | 310 zł |
| CTR 1% → +30% | 19,827 | 297 zł | 496 zł | 793 zł |
| CTR 1% → +20% | 42,693 | 640 zł | 1,067 zł | 1,708 zł |
