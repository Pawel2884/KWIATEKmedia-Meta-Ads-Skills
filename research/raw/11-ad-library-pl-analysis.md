# 11 — Analiza reklam z Biblioteki Reklam Meta (Polska) w 5 grupach biznesów (research surowy)

> Agent researchowy: obszar 11. Data: 2026-09-24. Status: ZAKOŃCZONY.
> Legenda źródeł: [PEŁNY] = dane zwrócone w tej sesji przez narzędzie `mcp__Meta_Ads__ads_library_search` (Meta Ad Library API); [WYSZUKIWARKA] = streszczenia z WebSearch (w tym pliku: BRAK, patrz 1.1); [WIEDZA] = wiedza modelu niepotwierdzona w sesji; [PLIK xx] = odwołanie do innego pliku researchu w `research/raw/`.
> Poziomy dowodu: A = źródło pierwotne; B = badania / duże zbiory; C = obserwacja rynku / praktycy z przykładami (np. reklama długo aktywna, wzorzec powtarzany przez wielu reklamodawców); D = opinia/hipoteza.
> ZASTRZEŻENIE: długość działania reklamy i powtarzalność wzorca to SYGNAŁ (C/D), nie dowód skuteczności. Nie znamy wydatków, CPL, CTR ani wyników żadnej z reklam. Reklama może działać długo, bo nikt jej nie wyłączył.
> Wszystkie daty = `ad_creation_time` (UTC) przeliczone z uniksowego znacznika czasu. Każdą cytowaną reklamę można sprawdzić pod adresem `https://www.facebook.com/ads/library/?id=<ID>` (ID w tabeli 5.3).

## 1. Metoda

### 1.1 Narzędzie, co zwraca i czego NIE zwraca
- Narzędzie `ads_library_search` DZIAŁA (konto reklamowe aktywne). Parametry: `countries=["PL"]`, `ad_active_status="ACTIVE"` (1 zapytanie `ALL`), `limit` 25–50, stały `client_conversation_id`.
- Zwracane pola: `page_name`, `ad_creative_link_title` (NAGŁÓWEK / link title — pole pod kreacją), `ad_creation_time`, `ad_delivery_start_time`, `ad_snapshot_url`, `currency`.
- **Brak treści głównej (Primary Text / `ad_creative_bodies`)**, brak CTA, brak opisu, brak obrazu/wideo, brak zasięgu i wydatków. Dlatego analiza "hooków" opiera się na NAGŁÓWKACH. Część reklamodawców używa nagłówka jako hooka ("❌ Znudzony obecną księgową?"), część jako etykiety ("Biuro Rachunkowe") albo zostawia puste. Przy reklamach dynamicznych (DCO / Advantage+ creative) pole zawiera kilka wariantów nagłówka oddzielonych " | " — to cenne, bo widać, jakie KĄTY reklamodawca testuje równolegle.
- Wnioski o długości, akapitach, emoji i CTA w Primary Text: **NIE DA SIĘ ich wyciągnąć z tych danych**. Poniżej opisuję wyłącznie nagłówki (długość, emoji, wielkie litery, konstrukcja). To istotne ograniczenie tego pliku.
- `ad_snapshot_url` (facebook.com/ads/library) jest zablokowany przez proxy sieciowe sesji (WebFetch: EGRESS_BLOCKED) — nie da się doczytać treści głównej ani kreacji.
- **WebSearch niedostępny** — limit wyszukiwań sesji (200/200) został wyczerpany przez wcześniejsze agenty. W tym pliku nie ma więc danych [WYSZUKIWARKA]; tam, gdzie potrzebny kontekst prawny lub językowy, odsyłam do plików 07 i 09.
- Sortowanie: wyniki są zwracane od najnowszych (utworzonych w ostatnich 1–3 dniach). Przy popularnych frazach starsze aktywne reklamy są niewidoczne. Obejście: (a) frazy o małej liczbie wyników ("frankowicze" 51, "basen ogrodowy" 40, "doradca kredytowy" 87) pokazują starsze reklamy; (b) 5 zapytań po `page_ids` konkretnych reklamodawców pokazuje ich pełny zestaw aktywnych reklam, w tym sprzed kilku miesięcy.
- Dopasowanie frazy jest luźne (tekst, nazwa strony, wszystkie języki). Szum był duży przy: "program do faktur" (aplikacje z powieściami), "montaż klimatyzacji" / "remont łazienki" / "klimatyzacja" (dropshipping odzieży, DramaBox, ogłoszenia aut), "implanty zębów" (sklep z płaszczami). Szum pominąłem w analizie, ale jest odnotowany w tabeli 5.1.

### 1.2 Zakres
- 39 wyszukiwań po frazach + 5 wyszukiwań po `page_ids` = **44 wywołania** narzędzia.
- Przejrzano **ok. 1 770 rekordów reklam** (z powtórzeniami między zapytaniami i wieloma kopiami tej samej reklamy). Szacunkowo ok. 400 unikalnych reklamodawców i ok. 500 unikalnych nagłówków (liczone ręcznie, przybliżone).
- Znalezione reklamy "długo działające" (aktywne ≥ 2 miesiące): ok. 20 reklam u ok. 10 reklamodawców (głównie grupa 5, do tego basen ogrodowy, reklamy katalogowe Empik i szkoła biznesu). Próba jest mała — wnioski o "long-runnerach" mają poziom C/D.

### 1.3 Jak czytać udziały procentowe
Udziały typu "~60% bez nagłówka" to ręczne zliczenie w próbce 30–40 reklam z jednego zapytania (po odrzuceniu szumu). Służą do pokazania skali zjawiska, nie są statystyką rynku.

## 2. Wnioski per grupa

### 2.1 Grupa 1 — B2B (księgowość, leasing, CRM, szkolenia, rekrutacja, PV dla firm)
**Próba [PEŁNY]:** "księgowość dla firm" (187 aktywnych), "biuro rachunkowe" (ALL, 16 705), "leasing" (3 897), "CRM" (2 024), "szkolenia dla firm" (608), "rekrutacja pracowników" (185), "fotowoltaika dla firm" (72), "program do faktur" (szum) + page_ids Zebra Rachunkowa / Bips / Modern Wages.

**Dominujące wzorce nagłówków**
- **Etykieta kategorii / nazwa firmy** — najczęstszy typ w księgowości: PG Partner Gospodarczy "Księgowość dla firm" i "Biuro rachunkowe dla Twojej firmy" (9 kopii, 23.09), AgresTax "Biuro Rachunkowe", PTM "Rzetelna Księgowość dla Firm." (4 kopie), nazwa strony jako nagłówek (Bilans Plus, PITu PITu, MSKiP). Ok. 1/3 reklam biur rachunkowych w próbce nie mówi nic poza "jesteśmy biurem rachunkowym".
- **Pytanie call-out do niezadowolonego z obecnego dostawcy** — Zebra Rachunkowa "❌ Znudzony obecną księgową?" (10 kopii, 23.09), M&B "🛑 Szukasz księgowego?".
- **Szybkość / prosta wycena** — Bips "Wycena w 60 sekund – Dopasuj abonament księgowy" (22.09); Luwo LED "Wyceń swój ekran w 2 minuty!".
- **Konkret oferty liczbą** — Olimp Capital "Leasing auta dla firm od 10% wpłaty" (8 kopii, 23.09); Toyota Chodzeń "Modele Toyoty w leasingu 103,9%"; Solo Energy "…PV dla firm od 90 000 zł" (18.09).
- **Wynik klienta (case)** — Grupa Progres "Jak obniżyliśmy absencję u klienta FMCG o 56,5%?" (17.09); DobrzeTworze "Biuro rachunkowe: 5 umów rocznie → 5 miesięcznie | Warsztat: >189 zapytań z pustego profilu" (23.09); Wingrow "✅ Pozyskuj 5-10 dodatkowych umów miesięcznie".
- **Lead magnet treściowy** — webinar (Elte-s ERP "Zapisz się na webinar", Hillway), e-book (Ideo "Jak mierzyć efektywność e-learningu? Pobierz e-book"), przewodnik (BizProcess.AI "👉 Pobierz przewodnik"), bezpłatne szkolenie (Concordia Design "Bezpłatne szkolenie" x5), pilotaż (Selleo "Pilotaż AI w L&D w 6 tygodni").
- **Dofinansowanie** — 4prosafety "Szkolenia dla firm z możliwością dofinansowania" (x4), Wsparcie Dotacyjne, Fundusze Europejskie "Dotacja do 10 mln zł na przetwórstwo".

**Dobre przykłady (sygnał C, bez danych o wynikach)**
- Modern Wages (skup biur rachunkowych), 23.09, 7 kątów naraz: "Budowałeś ją 20 lat. Jak ją po prostu sprzedać?", "I znowu zbliża się 20.", "Biuro może działać dalej. Bez Ciebie.", "Kolejny pracownik nie zdejmie z Ciebie odpowiedzialności.", "Nie musisz dziś decydować o sprzedaży." — język insidera (20. dzień miesiąca = termin rozliczeń ZUS/US, znany każdemu księgowemu), emocja właściciela, zdejmowanie presji zamiast sztucznej pilności. Najlepszy przykład B2B w próbce.
- Salesbook (CRM), 23.09: "Oferta i umowa jeszcze na spotkaniu", "Podpis SMS na spotkaniu", "Sprzedaż energii bez arkuszy" — wynik/scena z dnia handlowca zamiast opisu funkcji. Kontrast z tym samym reklamodawcą: "Kompletna platforma sprzedaży" (ogólnik).
- KRX WORK (rekrutacja), 18.09: "Potrzebujesz ludzi? My pytamy tylko: na kiedy." — głos marki + implikowana obietnica szybkości.
- I know IT (szkolenia cyber), 23.09: "Na koniec szkolenia zaczyna się cyberatak." — hook-historia / ciekawość.
- Solo Energy (PV dla firm), 18.09: "Masz już taryfę i zużycie? My to liczymy 📊 PV dla firm od 90 000 zł." — kwalifikacja (kto ma dane) + próg ceny odstraszający niedopasowanych.

**Złe przykłady**
- Greysoft (program dla firm), 23.09: "Dla Firm Usługowy i Handlowych. Testuj system bez ryzka." — dwie literówki w nagłówku, Title Case.
- Wsparcie Dotacyjne, 23.09: "Rozwiń swoją firmę i z dofinasowaniem!" — literówka + zepsuta składnia.
- PTM Księgowość "Rzetelna Księgowość dla Firm." / PG "Biuro rachunkowe dla Twojej firmy" — przymiotnik bez dowodu, wymienny z każdym konkurentem.
- Salesbook "Kompletna platforma sprzedaży", MG Grupa Bemo "Poznaj ofertę" (x8) — nic nie mówią.
- VeloBank placówka partnerska, ABC Active Business Consulting, MR JOB: nagłówek "www.fb.com" / "fb.me" — pole nagłówka zostawione domyślnie.

**Oferta / lead magnet:** wycena (w sekundach/minutach), bezpłatna konsultacja, webinar, e-book/przewodnik, szkolenie próbne, pilotaż. Kalkulator pojawia się rzadko (SprawdzLeasing "Kalkulator leasingu – oblicz ratę…").

**Luki i okazje**
- Księgowość: prawie wszyscy mówią "biuro rachunkowe dla firm". Nikt w próbce nie mówił o: cenie abonamentu od X zł, czasie odpowiedzi księgowej, branży, w której się specjalizują (wyjątek: Zebra "✅ Dla dużych spółek z o.o.", Kancelaria Podatkowa Zielińska "Księgowość w KGW"), przejęciu dokumentów od poprzedniego biura. **Okazja: nisza + konkret + scena z życia przedsiębiorcy** (wzór Modern Wages).
- Leasing: tylko 2 z ok. 10 reklamodawców podało konkret (10% wpłaty, 103,9%). Reszta "Poznaj ofertę".
- B2B ogólnie: dowód w liczbach pojawia się głównie u AGENCJI (DobrzeTworze, Wingrow, Grupa Progres), rzadko u samych firm usługowych.

### 2.2 Grupa 2 — Usługi lokalne (stomatolog, fizjoterapia, salon kosmetyczny, okna, klimatyzacja, remont, szkoła językowa)
**Próba [PEŁNY]:** "stomatolog" (398), "implanty zębów" (952, dużo szumu), "fizjoterapia" (2 667), "salon kosmetyczny" (553), "okna PCV" (264), "szkoła językowa" (1 029), "klimatyzacja" / "montaż klimatyzacji" / "remont łazienki" (głównie szum) + page_ids aboutmedica / Karla Dent / ZELEN.

**Dominujące wzorce nagłówków**
- **Brak nagłówka** — najbardziej charakterystyczna cecha grupy. Stomatolog: ok. 25 z 40 reklam (~60%) bez nagłówka, z "instagram.com" albo z zassanym meta-tytułem Instagrama (DentalCare Spokojna: "… • Instagram photos and videos"). Salony i butiki podobnie. To wskazuje na promowane posty / reklamy "wiadomości" i "połączeń", gdzie nagłówek nie jest ustawiany. [PEŁNY] obserwacja, interpretacja D.
- **Rabat / cena** — Magicznie Beauty Kraków "Odbierz Rabat 👉" (x8), Karla Dent "Higienizacja i przegląd - 250 zł" (22.09), Yasumi Zduńska Wola "Kriolipoliza - 2 głowice w cenie 350 zł❗", Okna.todom.pl "-40% na okna PCV" (x7, 21.09).
- **Geo call-out** — Szkoła Espero "📍 Kędzierzyn-Koźle" (x6), Dentysta Artysta "Warszawa: proteza na implantach", Piękne Ciało "Depilacja laserowa w Opolu – pierwszy zabieg + konsultacja", Fizjo ON "Fizjoterapia w Elblągu", ZELEN "Szukamy 7 Kobiet z Lubonia…".
- **Problem / sytuacja** — Bogmar "Stare okna dają Ci się we znaki?" i "Budujesz dom? Okna nie powinny opóźniać budowy" (18.09), aboutmedica "Prześpij wizytę u dentysty" (strach przed dentystą), "Napraw odprysk w 1 wizytę", Dental Corner "4 czy 6 implantów? Wrocław" (dylemat przed decyzją).
- **Niski próg pierwszego kroku** — The Palms "✅ Sprawdź swój poziom" (test językowy), La Estrella "Bezpłatna lekcja próbna", Early Stage "Lekcje pokazowe…", Physio Gym Academy "✅ Odbierz zaproszenie na konsultację 👉" (x12).
- **Ograniczona liczba miejsc** — SAYES "Liczba miejsc ograniczona", Leonardo School "🚨 Ostatnie miejsca na lekcje j. angielskiego!", "Zablokuj miejsce w grupie już teraz! 🔥" (sezon zapisów wrzesień — tu pilność może być realna).

**Dobre przykłady (C)**
- aboutmedica (stomatologia), 17–23.09: osobna reklama na każdy problem — "Prześpij wizytę u dentysty", "Napraw odprysk w 1 wizytę", "Wędzidełko u niemowląt", "Czy implant jest dla Ciebie?", "Nowy uśmiech bez szlifowania". Jeden problem = jeden nagłówek = jedna grupa odbiorców.
- Karla Dent, 22.09: "Higienizacja i przegląd - 250 zł" — cena i zakres, zero przymiotników. Pasuje też do trybu "informacji, nie reklamy" dla podmiotów leczniczych [PLIK 07, L6].
- Bogmar (okna), 18.09: "Budujesz dom? Okna nie powinny opóźniać budowy" — trafia w realny lęk inwestora (terminy ekip), nie w "jakość okien".
- Dental Corner, 23.09: "4 czy 6 implantów? Wrocław" — odpowiada na pytanie, które pacjent zadaje przed wyceną.
- LingoDesk (B2B dla szkół językowych), 23.09: "Twoja szkoła przerosła Excela?" — moment bólu właściciela.

**Złe przykłady**
- Dentima, 23.09: "Odzyskaj Brakujące Zęby"; Dental Corner "Skuteczne Leczenie Bezzębia: Wrocław" — angielski Title Case w polskim tekście.
- Exclusive Dental Studio, 23.09 (DCO): "Brak jednego zęba? Jak najszybciej zgłoś się do naszej kliniki. Nawet jeden ubytek prowadzi do przesuwania się sąsiednich zębów i zaniku kości." — dobra edukacja, ale nagłówek-akapit (za długi na pole nagłówka) i "Zabieg jest bezbolesny, szybki i precyzyjny" = obietnica efektu w usłudze medycznej [PLIK 07, L5/L6 — ryzyko].
- ST NAIL ART, 22.09: "ST NAILS ART( WOLA ) - Warszawa - Zarezerwuj Wizytę Online - Ceny, opinie, zdjęcia" — zassany tytuł strony Booksy.
- Atelier Urody Creative "Twój nowy ulubiony salon manicure ♥️" (x5), Kalime "Sprawdź ofertę", Glamour Day Spa "Sprawdź PROMOCJE 🍁🍂" — brak konkretu.
- Serena (fizjo/e-com, EUR): "Prawda, którą ortopedzi przed Tobą ukrywają!" i "PRAWDZIWA PRZYCZYNA TWOJEJ RWY KULSZOWEJ (IGNOROWANA PRZEZ WIĘKSZOŚĆ LEKARZY)" — spisek + caps lock; w zdrowiu wysokie ryzyko odrzucenia przez Meta i zarzutu wprowadzania w błąd.
- Service Life-C ">>>" (okna), Śliw-Plast — nazwa strony jako nagłówek.

**Oferta / lead magnet:** rabat procentowy, cena zabiegu, pierwsza wizyta/konsultacja, test poziomu, lekcja próbna, "zadzwoń po wycenę". Rzadko: gwarancja, termin realizacji, kalkulator.

**Luki i okazje**
- Stomatologia i estetyka: większość gabinetów marnuje nagłówek. **Okazja: nagłówek = konkretna usługa + cena od / czas / miasto** (wzór Karla Dent, aboutmedica).
- Okna, klimatyzacja, remonty: w próbce prawie nie ma zdjęć/liczb realizacji w nagłówkach, terminów montażu ani gwarancji. Nikt nie pisze "montaż w X dni" ani "N montaży w [mieście] w tym roku". **Okazja: termin + lokalny dowód.**
- Szkoły językowe: dominuje "zapisy / ostatnie miejsca". Nikt nie obiecuje mierzalnego wyniku (poziom po semestrze, zdany egzamin). **Okazja: wynik ucznia + test poziomu jako lead magnet.**
- Klimatyzacja: w polskich lokalnych reklamach w próbce prawie brak treści w nagłówkach; widać za to konta arbitrażowe (USD) z nagłówkiem "CO WARTO WIEDZIEĆ O KLIMATYZACJI Z MONTAŻEM 2026" (Flash Savings, 23.09). Lokalny instalator z konkretem ma tu mało konkurencji na poziomie tekstu (D).

### 2.3 Grupa 3 — Droższe usługi lead gen (pompa ciepła, PV, dom modułowy, mieszkania, basen, kurs programowania, medycyna estetyczna)
**Próba [PEŁNY]:** "pompa ciepła" (1 551), "fotowoltaika" (1 705), "dom modułowy" (240), "mieszkania na sprzedaż" (1 580), "basen ogrodowy" (40 — widać starsze), "kurs programowania" (310), "medycyna estetyczna" (1 761) + page_ids Sun Home / SM Project / Sol Voltage / Centrum Ubezpieczeń.

**Dominujące wzorce nagłówków**
- **Szablon "🛑 Dziś zapisało się N osób!"** — najbardziej rzucający się w oczy wzorzec w OZE. Sun Home "🛑Dziś zapisało się 37 osób!" (utworzone 18.09, 20.09 i 23.09), SM Project "🛑Dziś zgłosiło się 30 osób!" (10.09), Sol Voltage "🛑Dziś zapisały się 22 osoby!" (dziesiątki kopii tworzonych 22.09 i 23.09), AstroEnergy "🛑 Dziś zgłosiło się 37 osób!" (23.09) oraz w ubezpieczeniach Centrum Ubezpieczeń "🔴 DZIŚ ZAPISAŁO SIĘ 25 OSÓB" (22.09). Pięciu reklamodawców, dwie branże, ten sam szablon, a liczba "dziś" nie zmienia się przez kolejne dni. [PEŁNY] fakt; interpretacja: szablon jednej agencji/kursu i statyczna, nieprawdziwa liczba (C). Ryzyko prawne: wprowadzająca w błąd informacja o popycie [PLIK 07, L1 — do weryfikacji].
- **Dotacja / dofinansowanie** — "DOTACJA 2026 DLA CIEBIE" (Fotowoltaika Zachodniopomorskie, caps), Maciej Potocki OZE "Dofinansowanie 2026", OZE EKO "Nawet do 200 000 zł na fotowoltaikę z magazynem energii", Centrum Dofinansowań "Odbierz audyt na nasz koszt".
- **Rachunek / oszczędność** — MSEnergy "3 200 zł rocznie. Tyle średnio oszczędza nasz klient.", M-Instalacje "Niższe rachunki? Zacznij od bezpłatnej wyceny!", Energia Zysku "Sprawdź, czy magazyn energii Ci się opłaca".
- **Prezentacja / dzień otwarty (nieruchomości, domy modułowe)** — Inveho "Umów Prezentację na żywo - Dom w cenie mieszkania w Krakowie 👉", MB Estates "Umów prezentację gotowego domu ✨", DM Homes "Zobacz na żywo", Comet Modular "Dzień otwarty domu Tamija 115m2", Osiedle H9 "Dzień Otwarty 26 września", Hauseo "Zobacz dom modułowy od środka".
- **Szybkość realizacji** — Grochowski Construction "Twój dom zmontujemy w 1–3 dni" (23.09), TaskHome "Twój dom w zaledwie 3 miesiące!".
- **Termin / limit (kursy)** — Giganci Programowania "Tylko do 30 września" (x10, wiele stron franczyzowych), KursyAutomatyki / iAutomatyka "Kup do 21:00 👉72% taniej", "Limit 300 osób", "Odbierz bonusy przed limitem 300 miejsc" (22.09).
- **Medycyna estetyczna** — jak stomatologia: ~60% reklam (24/40) bez nagłówka / z "instagram.com" / z tytułem Booksy. Kliniki, które piszą nagłówek, idą w problem sezonowy lub cenę.

**Dobre przykłady (C)**
- MSEnergy (PV / pompy ciepła), 23.09 — ok. 10 wariantów nagłówka utworzonych w tej samej chwili (test kątów): "Minus 20 na zewnątrz. Plus 21 w środku. Pompa ciepła daje radę." (obiekcja "czy pompa grzeje zimą" jako scena), "Wieczór. Panele już nie pracują. Magazyn dopiero zaczyna." (scena), "3 200 zł rocznie. Tyle średnio oszczędza nasz klient." (liczba + dowód), "Setki instalacji w regionie. Twoja może być następna." (lokalny dowód). Rzadki w próbce przykład, gdzie każdy wariant to inny kąt, a nie parafraza.
- Ultra Volta, 23.09: "Fotowoltaika nie obniżyła rachunków firmy?" — celuje w rozczarowanych posiadaczy PV (kontrarian). Luka, w którą nikt inny nie wchodził.
- Argali Development, 23.09 (DCO): "Domy w Wilanowie od 2,94 mln zł | Kameralnie – tylko 10 domów | Przestronne wnętrza 207 m² | Prywatny ogród do 608 m²" — cena od, skala, metraże: filtr dla niedopasowanych.
- Clinica Fiorente (Radom), 23.09: "Plan leczenia wysłany na Twojego maila" (lead magnet: spersonalizowany plan), "Rumień i naczynka - jesień to ten czas!" (sezonowość), "Pomożemy Ci wybrać metodę na przebarwienia".
- ZELEN Klinika Kosmetologii (Luboń), 22–23.09: "🩷 Szukamy 7 Kobiet z Lubonia na radiofrekwencję mikroigłową — 690 zł zamiast 990 zł!" — lokalny call-out + cena. Uwaga: ta sama "7 kobiet" pojawia się w kolejnych partiach nowych reklam (22.09 i dwukrotnie 23.09), więc limit wygląda na stały element szablonu, nie realny stan (C). Cena przekreślona wymaga informacji o najniższej cenie z 30 dni [PLIK 07, L4].
- KLIKA (kurs), 23.09: "Kurs, którego koszt zwraca się z nadwyżką, już po pierwszym zleceniu." — ROI zamiast "nauczysz się".
- Neptun Baseny Ogrodowe: "Inwestycja, która przyciąga gości.🛎️ | Zainwestuj w basen ogrodowy 💧" — utworzona 21.07.2026 i nadal aktywna (~2 mies.); kąt B2B (agroturystyka/wynajem), a nie "relaks w ogrodzie". Sygnał C.

**Złe przykłady**
- Szablon "🛑 Dziś zapisało się N osób!" (j.w.) — przejedzony i najpewniej nieprawdziwy.
- Komfoterm, 23.09: "Bezpieczne, Komfortowe i Ekonomiczne Ogrzewanie" — trzy przymiotniki, Title Case.
- Energia Twojej Generacji, 23.09: "Kliknij tutaj!"; Seabreeze Świnoujście "Nie zwlekaj!"; DM Homes "Zobacz na żywo" (x7, bez przedmiotu).
- Warszawa Modelki (implantologia), 23.09: "Nowoczesna implantologia", "Komfort i bezpieczeństwo w implantologii", "Odzyskaj uśmiech - implantologia na najwyższym poziomie" — ogólniki; w tym samym zestawie dobry konkret "Implanty podczas szkoleń - 26-27.09" (tańszy zabieg jako pacjent szkoleniowy, data).
- Clinica Fiorente "Kompleksowy Plan Leczenia w Radomiu" — "kompleksowy" + Title Case obok dobrych wariantów tej samej kliniki.
- DOMY przyszłości, 23.09: "𝗗𝗡𝗜 𝗢𝗧𝗪𝗔𝗥𝗧𝗘 DOM LONG 𝗣𝗢𝗗 𝗦𝗞𝗜𝗘𝗥𝗡𝗜𝗘𝗪𝗜𝗖𝗔𝗠𝗜." — pogrubienie znakami Unicode (czytniki ekranu tego nie czytają, wygląda jak spam).
- Inpro S.A., 23.09: "INPRO S.A. wiodący deweloper w Gdańsku - w sprzedaży nowe mieszkania" — samochwała "wiodący" bez dowodu.
- Imperial Capital: "Deweloper Kraków – nowe mieszkania od dewelopera | Imperial Capital" — tytuł SEO wklejony jako nagłówek.
- Konta arbitrażowe (USD): LearnUp Center "CO WARTO WIEDZIEĆ O FOTOWOLTAICE Z MAGAZYNEM 2026" — ten sam szablon co "…O KLIMATYZACJI Z MONTAŻEM 2026" (Flash Savings). To konkurencja o uwagę tych samych odbiorców, z formatem "artykułu poradnikowego".

**Oferta / lead magnet:** bezpłatna wycena, audyt energetyczny "na nasz koszt", kalkulator/sprawdzenie opłacalności magazynu, prezentacja/dzień otwarty, konsultacja, plan leczenia mailem, darmowy kurs próbny (Kodland "Darmowy kurs tworzenia gier w Roblox!"), webinar.

**Luki i okazje**
- PV / pompy ciepła: rynek jest zdominowany przez "dotację" i "dziś zapisało się". Mało kto odpowiada na obiekcje (pompa w mrozie, PV bez oszczędności, serwis), a te, które to robią (MSEnergy, Ultra Volta), wyróżniają się. **Okazja: nagłówek = obiekcja albo scena + liczba z realizacji.**
- Domy modułowe: prawie brak ceny w nagłówkach (wyjątek deweloperzy: Argali, Szetyński "Od 830 tys. zł"). **Okazja: cena od + czas + "na Twojej działce".**
- Medycyna estetyczna: większość milczy w nagłówku. **Okazja: problem sezonowy + zakres zabiegu + cena**, w granicach prawa dla podmiotów leczniczych [PLIK 07, L5/L6].
- Kursy: dominuje sztuczny termin ("Kup do 21:00", "Tylko do 30 września"). Wynik po kursie (zlecenie, pierwsza praca) jest rzadki — KLIKA wyróżnia się.

### 2.4 Grupa 4 — E-commerce / produkty (darmowa dostawa, promocje, materac, suplement, odzież, kosmetyki naturalne)
**Próba [PEŁNY]:** "darmowa dostawa" (20 076), "promocja -30%" (6 579), "materac" (2 737), "suplement diety" (3 684), "kosmetyki naturalne" (1 375), "odzież damska" (681).

**Dominujące wzorce nagłówków**
- **Rabat / promocja w nagłówku** — Zolmed.pl "Tylko dziś -50% + Darmowa Dostawa 👉" (x4, 23.09), Gadget Planet (EUR) "Promocja jesienna: 60% rabatu" (x11), Męski Taniec "🔥 Pakiety do 70% TANIEJ!", Defentor "-35% tylko teraz 🐁", Orientana "Do -30% na pielęgnację włosów" i "Mgiełki Orientana 1+1 -50%", Labify "Gut Shield na jelita 2+1 GRATIS!", Authletic "🔥 Kup 2, odbierz 1 gratis".
- **Logistyka jako hook** — TakiLook "Darmowy Paczkomat!", Pinjole (USD) "🚚 Płatność przy odbiorze ✅ Darmowa dostawa" (wzorzec dropshippingu COD).
- **Konstrukcja "[Rzeczownik], który/które [cecha]"** — Rose Anna (EUR) "Sztruks, który nie przegrzewa", "Elastyczne, ruszają się z Tobą"; Niho "Biustonosz, który wspiera postawę 😍"; Marta Kraków Moda (EUR) "Ciepło, które wygląda elegancko ✨" (x10); Ozonee "🔥 Styl, który przyciąga spojrzenia". Działa, gdy cecha jest fizyczna i sprawdzalna ("nie przegrzewa"); jest pusta, gdy abstrakcyjna ("przyciąga spojrzenia").
- **Katalog (DPA)** — nagłówek = lista nazw produktów (Royal Fashion, Ozonee, Meble MWM, Empik, Amazon.pl). Nie do oceny jako copy.
- **Butiki odzieżowe** — ok. połowa reklam bez nagłówka (boosty postów, transmisje LIVE).
- **Suplementy: call-out wiekiem / sytuacją** — Orzax "Przespana noc po pięćdziesiątce", "Wsparcie prostaty po pięćdziesiątce", "Dla męża. Dla taty."
- **Quiz doboru** — Anatomia Snu "Jaki materac jest dla Ciebie? Sprawdź w 60 sekund", Polemika "Wybierz swój poziom odnowy".
- **Historia / advertorial** — Tullio.pl "Dzień 14: Stałam w drzwiach i płakałam ze wzruszenia. On naprawdę śpi! 🌙" (23.09), Vitalora Poland (EUR) "Hemoroidy wracały przez 16 lat. Aż do teraz", Karolina Gandziarska "To, co zobaczyłam, odebrało mi mowę", oraz szablon "Przeczytaj to, jeśli…" u trzech różnych stron (Mela Lucky, CasaPiuma, Tulika — ten sam produkt/temat rozejścia mięśni po porodzie, 23.09).

**Dobre przykłady (C)**
- Spectrum Herbs, 23.09: "10 kropli rano, 3,15 zł dziennie" — rytuał + cena dzienna (kotwica ceny). W tym samym zestawie "Melatonina pomaga skrócić czas zasypiania" — sformułowanie w stylu dopuszczonego oświadczenia zdrowotnego [WIEDZA: lista oświadczeń UE; do weryfikacji].
- ilabu.pl, 23.09: "Kolagen bez cukru i bez smaku" — wyróżnik produktu wobec konkurencji w jednym zdaniu.
- Rose Anna: "Sztruks, który nie przegrzewa" — obiekcja wobec kategorii zamieniona w cechę.
- Anatomia Snu: quiz "w 60 sekund" — niski próg + personalizacja.
- Orzax: call-out wiekiem ("po pięćdziesiątce") zamiast ogólnego "zadbaj o zdrowie".
- Polemika, 23.09: "Twój przewodnik po retinalu", "Krem BB w 4 odcieniach", "Męska pielęgnacja w dwóch prostych krokach" — edukacja i konkret produktu.

**Złe przykłady**
- Men's Doctor (waluta PKR), 23.09: "✅ 386% gwarantowany rezultat! 👉" + nagłówki w kilkunastu językach "tylko dziś" — absurdalna obietnica, sygnał oszustwa.
- Nutrilaben (waluta INR): "Oferta 0 PLN – tylko dziś"; Ruvbklo8 (USD): "🔥 Krem do pielęgnacji ran z nanokomórkami -50%!"; Good-Looking xip1 (USD): "Zniżka 80%." — typowe dla kont-wydmuszek.
- Strona "𝐛𝐢𝐞𝐝𝐫𝐨𝐧𝐤𝐚 𝐒𝐤𝐥𝐞𝐩" (EUR, 24.09): "🚚 Darmowa dostawa" — nazwa znanej sieci pisana znakami Unicode = sygnał podszywania się.
- BellMedi (EUR): "NAJWIĘKSZA PROMOCJA ROKU WRESZCIE JEST TUTAJ" — caps + superlatyw.
- Clushabu Dagluckfrong (USD): "✨ Odkryj kolekcję wyjątkowych smaków! 🍓🍉🥭" — "Odkryj" + "wyjątkowych" = AI slop.
- Zolmed "Tylko dziś -50%" — jeśli ta sama "tylko dziś" leci wiele dni, to fałszywa pilność [PLIK 07, L1]; Ad Library pokazuje 4 kopie z 23.09 (brak danych o wcześniejszych dniach).
- Szablon "Przeczytaj to, jeśli…" u 3 stron naraz — przejedzony w swojej niszy.
- Kilka sklepów z polsko brzmiącą nazwą rozlicza się w EUR/USD (Marta Kraków Moda, Rose Anna, Veraze PL, Home & Marker PL) — hipoteza (D): zagraniczni sprzedawcy z "lokalną" personą. Polski sklep może się wyróżnić prawdziwym, sprawdzalnym pochodzeniem (magazyn w PL, zwrot w PL).

**Oferta:** rabat %, 2+1 / 1+1, darmowa dostawa/Paczkomat, płatność przy odbiorze, prezent do zamówienia (Crystallove "Prezent do zamówień już od 1 zł 🎁"), kod influencera (Boostyfoods "KOD RABATOWY -15% MIRA").

**Luki i okazje**
- Rabat to domyślny hook — różnicuje najsłabiej. Wyróżniają się: konkretna cecha produktu, cena dzienna, quiz doboru, call-out sytuacją.
- Dowód społeczny w nagłówkach e-com jest rzadki (brak "N opinii 4,8/5" w próbce PL; ma go tylko turecka klinika). **Okazja: prawdziwa liczba opinii / klientów.**

### 2.5 Grupa 5 — Oferty wymagające zaufania (kancelaria, frankowicze, upadłość, odszkodowania, ubezpieczenia, doradca kredytowy, klinika, terapia, inwestycje)
**Próba [PEŁNY]:** "kancelaria" (3 979), "frankowicze" (51 — widać reklamy od maja), "upadłość konsumencka" (537), "odszkodowanie" (942), "ubezpieczenie na życie" (678), "doradca kredytowy" (87), "psychoterapia" (733), "inwestycje" (6 136), "klinika" (4 098) + page_ids Fundacja FAIR / ProBanking / Życie bez kredytu / Mediator CRN / Oddłużeniowa Kancelaria / Renvia.

**Dominujące wzorce nagłówków**
- **"Bezpłatna analiza" jako cała oferta** — frankowicze/SKD: Hantke&Piskor "Bezpłatna analiza Twojej umowy kredytowej" (11.08), Zwrotomatik "Skorzystaj z bezpłatnej analizy umowy" (05.08), Mędrecki Wilk "Bezpłatna analiza sytuacji" (03.08), Fundacja FAIR "Uzyskaj bezpłatną analizę 👉🏻" (od 29.06, odnawiane), ProBanking "Uzyskaj bezpłatną analizę 👉" (15.09); odszkodowania: Arbiter S.A. "Bezpłatna analiza" (x9), Pomoc Powypadkowa "Bezpłatna analiza". Kilkunastu reklamodawców, ta sama obietnica.
- **"Odzyskaj pieniądze"** — strona "Odzyskaj Pieniądze z Kredytu Walutowego" (19.08, 25.08, 17.09), FAIR "Odzyskaj pieniądze ✅" (29.05, 22.06), LEXNORD "Sankcja Kredytu Darmowego (SKD) - Odzyskaj Pieniądze" (31.07), ProBanking "Kredyt w EURO? Odzyskaj swoje pieniądze!", BeWa LexGroup "Zdobądź odszkodowanie | Odzyskaj swoje pieniądze".
- **Pytanie kwalifikujące progiem** — Oddłużeniowa Kancelaria "Masz długi powyżej 25 000 zł?" (15.07 i ponownie 23.09), Renvia "Masz 30 000 zł lub więcej długów?" (30.07), Omega "Masz kredyt walutowy?" (03.08), ProBanking "Odpowiedziałeś 3x TAK? Bezpłatnie sprawdź swoją umowę kredytową." (15.09), Salomon "[DARMOWY QUIZ] Sprawdź czy możesz usunąć długi." (22.09).
- **Sytuacja / objaw** (upadłość) — Mediator CRN "Windykatorzy dzwonią codziennie? Upadłość wstrzymuje windykację. | Komornik zajął Ci wynagrodzenie? Jest legalny sposób, żeby to zatrzymać. | Nie otwierasz już listów poleconych? Rozumiemy. Ale dług sam nie zniknie." (21.09), Renvia "Codziennie odbierasz takie wiadomości?", Walerjańczyk "Masz długi i komornika?".
- **Dowód liczbą / wyrokiem** — Franki Kancelaria "Kredyt w euro? Zwrot średnio 111 tys." (11.09), Pledziewicz "Zobacz przykładowe wyroki!" (15.09), Mediator CRN "Ponad 50 wynegocjowanych ugód z bankami", "Prowadzimy ludzi przez upadłość od 2017 roku", TDF "Doradca TDF porówna 26 banków ➡️" (16.09), Restartis "Czy słup na działce to pieniądze? | Do 90 000 zł za słup".
- **Lead magnet treściowy** — KNF Team "Darmowy PDF 👉" (x8), Anyst (USD) "Do pobrania i przeczytania za darmo." (x11), Oppenheim "Upadłość konsumencka: 5 mitów!", Pledziewicz "Bezpłatny webinar online".
- **Terapia / psychoterapia** — ~70% reklam (22/31 po odjęciu szumu) bez realnego nagłówka (puste, "www.fb.com", tytuł Instagrama, nazwa strony, "Medfile").

**Reklamy długo działające [PEŁNY, sygnał C]**
| Reklamodawca | Nagłówek | Utworzona | Aktywna ok. |
|---|---|---|---|
| Oddłużeniowa Kancelaria | "{{product.name}}" (reklama katalogowa/dynamiczna — token podmieniany przy emisji [WIEDZA]) | 22.01.2026 | ~8 mies. |
| Fundacja FAIR | "Wciąż nie wierzysz, że da się wygrać? 🤔 \| ⏰ Ostatnia szansa na walkę z bankiem!" | 20.05.2026 | ~4 mies. |
| Fundacja FAIR | "Czy Twój bank jest na liście?" | 27.05.2026 | ~4 mies. |
| ProBanking | (pusty nagłówek) | 29.05.2026 | ~4 mies. |
| Fundacja FAIR | "Odzyskaj pieniądze ✅" | 29.05 i 22.06.2026 | ~3–4 mies. |
| Życie bez kredytu | "Zamów Analizę Umowy Kredytu WBOR ➡️" | 16.06.2026 | ~3 mies. |
| Krakowska Szkoła Biznesu UEK | "Inwestycje deweloperskie" | 21.06.2026 | ~3 mies. |
| Fundacja FAIR | "Uzyskaj bezpłatną analizę 👉🏻" (ten sam nagłówek w nowych reklamach 29.06, 09.07, 17.07, 21–22.09) | od 29.06.2026 | ~3 mies. |
| Oddłużeniowa Kancelaria | "Masz długi powyżej 25 000 zł?" (+ nowe kopie 23.09) | 15.07.2026 | ~2,5 mies. |
| Fundacja FAIR | "Obniż ratę nawet o 50% 💰" (x5) | 16.07.2026 | ~2,5 mies. |
| Renvia | "Masz 30 000 zł lub więcej długów?" | 30.07.2026 | ~2 mies. |
| LEXNORD | "Sankcja Kredytu Darmowego (SKD) - Odzyskaj Pieniądze" | 31.07.2026 | ~2 mies. |
| Omega Kancelarie Prawne | "Masz kredyt walutowy?" (x4) | 03.08.2026 | ~1,5 mies. |

Wspólne cechy long-runnerów (C/D): krótki nagłówek; pytanie kwalifikujące ("Masz…?", "Czy Twój bank…?") albo prosta obietnica korzyści ("Odzyskaj pieniądze", "Obniż ratę nawet o 50%"); oferta bez ryzyka (bezpłatna analiza); próg kwotowy odsiewający małe sprawy. Uwaga: FAIR prowadzi "⏰ Ostatnią szansę na walkę z bankiem!" od 4 miesięcy — długie działanie NIE znaczy, że komunikat jest uczciwy.

**Dobre przykłady (C)**
- Mediator CRN (upadłość / frankowicze / SKD), 07–21.09 — każdy zestaw DCO to jeden kąt: (1) objaw ("Komornik zajął Ci wynagrodzenie?…"), (2) proces ("Krok 1: bezpłatna analiza. | Krok 2: składamy wniosek. | Krok 3: umorzenie długów."), (3) cena ("Ile kosztuje upadłość? Powiemy wprost - i rozłożymy na raty.", "Bez ukrytych kosztów - pełną cenę poznajesz na starcie."), (4) wstyd ("Wstyd? Strach? Nie jesteś w tym sam.", "Myślisz „zawiodłem”? Posłuchaj, zanim tak siebie osądzisz."), (5) lęk przed syndykiem ("Boisz się syndyka? Większość obaw bierze się z niewiedzy."), (6) sytuacje frankowe ("Sprzedajesz mieszkanie, a kredyt walutowy blokuje hipotekę? Jest sposób.", "Ugoda na stole? Druga opinia przed podpisem nic nie kosztuje."), (7) success fee ("Płacisz głównie wtedy, gdy wygramy Twoją sprawę…"). Najpełniejsza mapa obiekcji w całej próbce. Minus: sporo zdań w konstrukcji "To nie X. To Y." (patrz 3.3).
- Oddłużeniowa Kancelaria / Renvia — próg kwotowy w pytaniu (25 000 zł / 30 000 zł) — działa jako filtr i jest utrzymywany miesiącami.
- Helpfind (16.09): "Spłacany czy spłacony - sprawdź umowę" — rozbraja obiekcję "już spłaciłem, to mnie nie dotyczy".
- Franki Kancelaria (11.09): "Kredyt w euro? Zwrot średnio 111 tys." — call-out + liczba.
- Piotr od Ubezpieczeń (22.09): "Co, jeśli kierowca umrze za granicą?" — konkretny scenariusz dla firm transportowych zamiast "zadbaj o bezpieczeństwo bliskich".
- Kamil Góra – Fundacje (23.09): "Fundacja rodzinna, spółka czy testament? Sprawdź." — nagłówek-dylemat.
- Ośrodek ISTDP (psychoterapia, 23.09): "Najpierw rozmowa o grupie" — niski, bezpieczny pierwszy krok.

**Złe przykłady**
- Ochrona Życia i Finansów: "Zadbaj o finansowe bezpieczeństwo swoje i bliskich" (x3); Doradca Kredytowy 24: "✅ Atrakcyjny Kredyt Online" (x4); Nieco Więcej: "Upadłość konsumencka z profesjonalnym wsparciem"; Konteksty: "Zaufany ośrodek - KONTEKSTY" (zaufanie deklarowane, nie pokazane).
- Pomoc Poszkodowanym Online (USD): "Kliknij „Dowiedz się więcej”" — nagłówek opisuje przycisk.
- Rynowiecka: "Odszkodowanie Majątkowe? Uzyskaj Więcej" — Title Case.
- BeWa LexGroup: "Słup na działce? | Kredyt CHF? | Kredyt EUR? | SKD? | Zdobądź odszkodowanie" — pięć usług w jednej reklamie, zero specjalizacji.
- PointBlank Answers / Bold Report / Press Track (USD, 3 strony, ten sam tekst): "Poznaj kroki związane z roszczeniem o odszkodowanie po szczepieniu przeciw COVID-19" — sieć stron arbitrażowych.
- Centrum Ubezpieczeń "🔴 DZIŚ ZAPISAŁO SIĘ 25 OSÓB" — szablon fałszywego dowodu społecznego przeniesiony z OZE do ubezpieczeń.

**Luki i okazje**
- Frankowicze/SKD: "bezpłatna analiza" + "odzyskaj pieniądze" to towar — ma go prawie każdy. Wyróżniają się tylko: liczba ("średnio 111 tys."), dowód (wyroki, liczba ugód, rok startu), rozbrojenie obiekcji (spłacony kredyt, ugoda na stole), cena/success fee. **Okazja: nagłówek z dowodem albo obiekcją, "bezpłatna analiza" dopiero w tekście/CTA.**
- Cena w usługach prawnych: tylko Mediator CRN mówi o cenie wprost. **Okazja o dużej sile (D): "Ile to kosztuje? Mówimy na starcie."**
- Terapia: większość milczy. **Okazja: "pierwszy krok" + dla kogo + forma (online/stacjonarnie) + termin oczekiwania.**
- Ubezpieczenia: dominują ogólniki o "bezpieczeństwie bliskich". Wyróżniają się scenariusze (kierowca za granicą), cena od (InBest "Polisa od 57 zł !"), zwrot składek (Elżbieta Mainka "💰 Składki mogą wrócić. Sprawdź!").

## 3. Wnioski przekrojowe

### 3.1 Najczęstsze błędy polskich reklam (w kolejności od najczęstszych w próbce)
1. **Zmarnowane pole nagłówka** — pusty nagłówek, domena ("www.fb.com", "fb.me", "instagram.com"), nazwa strony, zassany meta-tytuł (Instagram, Booksy, Medfile, tytuł SEO). Skala (ręczne liczenie): stomatologia ~60%, medycyna estetyczna ~60%, psychoterapia ~70%, butiki odzieżowe ~50%; w lead gen / prawie / B2B ~15–25%. Uwaga: przy boostach postów i reklamach "wiadomości" nagłówek bywa niewidoczny w części umiejscowień — ale tam, gdzie się wyświetla, jest to stracone miejsce na hook (C/D).
2. **Etykieta zamiast hooka** — "Biuro rachunkowe dla Twojej firmy", "Księgowość dla firm", "Fizjoterapia w Elblągu" (ta ostatnia przynajmniej z geo), "Kurs języka angielskiego online", "Ubezpieczenie na życie". Mówi, CZYM firma jest, a nie co odbiorca z tego ma.
3. **Ogólnikowe przymiotniki bez dowodu** — "Rzetelna Księgowość", "profesjonalnym wsparciem", "Profesjonalna sprzedaż mieszkania lub domu", "Nowoczesna implantologia", "na najwyższym poziomie", "wiodący deweloper", "Zaufany ośrodek", "Atrakcyjny Kredyt Online", "Bezpieczne, Komfortowe i Ekonomiczne Ogrzewanie", "Kompleksowy Plan Leczenia", "Kompletna platforma sprzedaży".
4. **Fałszywa / nieweryfikowalna pilność i dowód społeczny** — "🛑 Dziś zapisało się N osób!" (5 reklamodawców, liczba stała przez kilka dni), "⏰ Ostatnia szansa…" aktywna 4 miesiące (FAIR), "Tylko dziś -50%", "Kup do 21:00 👉72% taniej", "Szukamy 7 Kobiet…" odtwarzane w kolejnych partiach, "Liczba miejsc ograniczona". Ryzyko prawne [PLIK 07, L1] i utrata wiarygodności (D).
5. **CTA jako nagłówek** — "Kliknij tutaj!", "Kliknij 👉", "Kliknij „Dowiedz się więcej”", "Sprawdź ofertę", "Poznaj ofertę", "Wypełnij formularz", "Nie zwlekaj!", "Napisz do nas!", "Zobacz na żywo". Przycisk CTA już to robi; nagłówek powinien dać powód.
6. **Forma niepolska / nieczytelna** — angielski Title Case ("Odzyskaj Brakujące Zęby", "Odszkodowanie Majątkowe? Uzyskaj Więcej", "Zamów Analizę Umowy Kredytu WBOR"), caps lock ("NAJWIĘKSZA PROMOCJA ROKU WRESZCIE JEST TUTAJ", "DOTACJA 2026 DLA CIEBIE", "NOWOCZESNA LASEROTERAPIA"), pogrubienie znakami Unicode ("𝗗𝗡𝗜 𝗢𝗧𝗪𝗔𝗥𝗧𝗘…"), literówki ("Usługowy", "ryzka", "dofinasowaniem"), zły przekład maszynowy ("Ostatnie trzy dni kampanii brandingowej, przegap!" — Dalalecca-mall), spacja przed wykrzyknikiem ("Polisa od 57 zł !").
7. **Przesadne lub ryzykowne obietnice w zdrowiu** — "386% gwarantowany rezultat", "Prawda, którą ortopedzi przed Tobą ukrywają!", "Zabieg jest bezbolesny, szybki i precyzyjny", "Natychmiastowy efekt", "Krem… z nanokomórkami", "Delikatny ucisk, który usypia w 15 minut". [PLIK 07, L5/L6 + polityki Meta — ryzyko odrzucenia].
8. **Wiele usług w jednej reklamie** — BeWa LexGroup (5 spraw w nagłówku), MDM Fotowoltaika (lista modeli paneli jako nagłówek).
9. **AI slop / szablonowe konstrukcje** — "Odkryj kolekcję wyjątkowych smaków!", "Twój nowy ulubiony salon manicure", "Twój nowy rytuał z marką…", "Spokój, który zaskakuje 🌿", "Styl, który przyciąga spojrzenia", seria "To nie X. To Y." (patrz 3.3). Słowo "Odkryj" jest w nagłówkach PL rzadkie (3 przypadki na ~500 unikalnych) — polski slop w reklamach to częściej przymiotniki "kompleksowy / profesjonalny / nowoczesny / rzetelny" i konstrukcje "X, który Y" niż "Odkryj".

### 3.2 Co wyróżnia reklamy długo działające (C/D, mała próba ~20 reklam)
- **Krótkie, jednoznaczne nagłówki** (3–7 słów): "Masz długi powyżej 25 000 zł?", "Czy Twój bank jest na liście?", "Odzyskaj pieniądze ✅", "Obniż ratę nawet o 50% 💰", "Masz kredyt walutowy?".
- **Pytanie kwalifikujące z progiem lub warunkiem** — odbiorca w 1 sekundę wie, czy go to dotyczy; niedopasowani odpadają przed formularzem.
- **Oferta bez ryzyka dla klienta** (bezpłatna analiza umowy) — przy wysokiej stawce (zwrot dziesiątek tysięcy zł) prosta obietnica wystarcza; w tanich usługach to za mało.
- **Zwycięski komunikat zostaje, kreacje się zmieniają** — Fundacja FAIR tworzy nowe reklamy z tym samym nagłówkiem "Uzyskaj bezpłatną analizę 👉🏻" co 1–3 tygodnie (29.06 → 09.07 → 17.07 → 21–22.09); Oddłużeniowa Kancelaria odtworzyła "Masz długi powyżej 25 000 zł?" po 2 miesiącach. Sygnał (C), że komunikat się broni, a zmęczenie dotyczy kreacji.
- **Format katalogowy u usługodawcy** — Oddłużeniowa Kancelaria ma reklamę z tokenem `{{product.name}}` aktywną od 22.01.2026 (~8 mies.). Hipoteza (D): katalog "usług/produktów" (np. różne rodzaje długów/spraw) w formacie Advantage+ catalog działa też w lead gen.
- Reklamy katalogowe e-com też "siedzą" długo: Empik (baseny ogrodowe, lista produktów w nagłówku) utworzone 26–29.06.2026 i nadal aktywne (~3 mies.) — to raczej cecha formatu niż dowód jakości tekstu (D).
- Większość long-runnerów pochodzi z grupy 5 (finanse/prawo), gdzie stawka dla klienta jest wysoka, a lejek długi. W e-com i usługach lokalnych próba nie pokazała starszych reklam (sortowanie + duża liczba reklam) — brak wniosków dla tych grup.

### 3.3 Przejedzone hooki (wszyscy ich używają — system powinien je ograniczać)
| Wzorzec | Gdzie widziany [PEŁNY] | Dlaczego unikać |
|---|---|---|
| "🛑 Dziś zapisało się N osób!" | Sun Home, SM Project, Sol Voltage, AstroEnergy, Centrum Ubezpieczeń | szablon 5 firm; liczba stała przez dni = fałsz; ryzyko UoPNPR |
| "Bezpłatna analiza / konsultacja / wycena" jako CAŁY nagłówek | ~15 reklamodawców (frankowicze, odszkodowania, doradcy, domy modułowe, stomatologia) | oferta-towar, nie różnicuje; lepiej w CTA/tekście |
| "Odzyskaj (swoje) pieniądze" | FAIR, ProBanking, LEXNORD, BeWa, "Odzyskaj Pieniądze z Kredytu Walutowego" | cała nisza frankowa mówi to samo |
| "Sprawdź, czy należy Ci się…" / "Sprawdź możliwość…" | Specjaliści od Świadczeń, Kamiński i Wróbel, Eko-Sept, Fotowoltaika Zachodniopomorskie | generyczny start bez korzyści |
| "Ostatnia szansa / Tylko dziś / Tylko do…" | FAIR (od maja), Zolmed, Giganci Programowania (x10), KursyAutomatyki, Defentor, Live Spain | wszędzie, często nieprawdziwe; wiarygodne tylko z realną datą |
| "Szukamy N [osób] z [miasto]…" | ZELEN (odtwarzane w kolejnych partiach 22–23.09) | stały "limit" = sztuczny; lokalny call-out można zachować bez fałszywego limitu |
| "Przeczytaj to, jeśli…" | Mela Lucky, CasaPiuma, Tulika (ten sam dzień, ta sama nisza) | szablon advertorialu e-com, wyczerpany w niszy |
| "[Rzeczownik], który/które [abstrakcja]" | "Spokój, który zaskakuje", "Styl, który przyciąga spojrzenia", "Uśmiech, który dodaje pewności", "Ciepło, które wygląda elegancko", "Kurs, który dopasowuje się do Ciebie" | brzmi jak szablon/AI; OK tylko z fizyczną, sprawdzalną cechą ("Sztruks, który nie przegrzewa") |
| "To nie X. To Y." / "X, nie Y" | Mediator CRN ("To nie poddanie się. To odzyskanie kontroli…", "Dług to nie wyrok. To sytuacja…"), agencje ("Klient gotowy do podpisu, nie lead", "50 klientów miesięcznie, nie kontaktów", "Podpisane umowy, nie paczki leadów") | najsilniejszy znany sygnał tekstu AI [PLIK 09, humanizer #1]; w agencjach lead gen to już standard pozycjonowania |
| "Twój nowy…" / "Twój [rzeczownik]" | "Twój nowy ulubiony salon manicure", "Twój nowy rytuał…", "Twój Lexus czeka.", "Twój wymarzony drugi dom", "…Twoja droga do domu" | pusty zaimek zamiast konkretu |
| "Odbierz rabat 👉" / "Sprawdź PROMOCJE" / "Poznaj ofertę" | Magicznie Beauty (x8), Glamour Day Spa, MG Bemo (x8), Kalime | brak treści |
| "Nowoczesny / profesjonalny / kompleksowy / rzetelny / najwyższy poziom / wiodący" | patrz 3.1 pkt 3 | każdy może to powiedzieć o sobie |

### 3.4 Obserwacje techniczne i rynkowe
- **Masowe kopie i DCO**: wielu reklamodawców uruchamia 5–15 kopii tej samej reklamy z tym samym nagłówkiem (PG Partner Gospodarczy x9, Physio Gym x12, Sol Voltage x20+, Koh Samui x11). Część pokazuje w polu nagłówka 5–10 wariantów rozdzielonych " | " (DCO/Advantage+ creative). Najlepsi (MSEnergy, Mediator CRN, Clinica Fiorente, Modern Wages) testują RÓŻNE KĄTY; słabsi powtarzają ten sam tekst lub jego parafrazy (DM Homes "Zobacz na żywo" x7). (C)
- **Konta w obcej walucie z polskimi nagłówkami** (USD/EUR/INR/PKR/TRY): arbitraż leadów ("CO WARTO WIEDZIEĆ O… 2026"), dropshipping COD, tureckie kliniki ("📍 Klinika stomatologiczna premium w Stambule w Turcji" — 3 kliniki, identyczny szablon), podejrzane oferty zdrowotne. Konkurują o uwagę tych samych odbiorców, co polskie firmy lokalne. (C)
- **Reklamy w językach mniejszości** (RU/UA: "Ипотека в Польше", beauty/CRM) — segment imigrancki jest obsługiwany osobnymi stronami; okazja dla klientów obsługujących cudzoziemców (D).
- **Sezonowość widoczna w danych** (koniec września): zapisy do szkół ("nowy rok szkolny 2026/2027"), "jesień to czas na naczynka", "Promocja jesienna", "Ochrona przed mrozem", "30 kontaktów mies. na zimę". (C)

### 3.5 Jak reklamują się agencje lead gen w Polsce (konkurencja KWIATEKmedia) [PEŁNY, C]
- Lemon Agency Polska (18.09): "Przestań dzwonić jako czwarty", "Fala spraw kredytowych. Kto podpisze?", "Klient gotowy do podpisu, nie lead 💎", "50 klientów miesięcznie, nie kontaktów", "Max 2 kancelarie w regionie. Koniec." oraz dla instalatorów "30 kontaktów mies. na zimę – w umowie", "Klienci na montaż przez 12 miesięcy".
- Rafał Sobieszyński – Sosky (22.09): "Podpisane umowy, nie paczki leadów". Mango Agency: "📣 Podpisuj więcej umów!". Adroas: "Leady kwalifikowane dla Twojej branży". Maluga Marketing (nieruchomości): "Chcesz sprzedawać szybciej lokale? 1.6 MLN sprzedaży w 12 dni 👉". DobrzeTworze: "Biuro rachunkowe: 5 umów rocznie → 5 miesięcznie". Traffic Trends: "Zamień wyszukiwania w wizyty 🚀".
- Wniosek (D): pozycjonowanie "umowy/klienci, NIE leady" + wyłączność regionalna + liczba w umowie to już standard w niszy. KWIATEKmedia wyróżni się raczej konkretnym, sprawdzalnym case'em (branża + liczby + okres) i przejrzystością procesu niż kolejnym "nie leady, tylko klienci".

## 4. Implikacje dla systemu (reguły z poziomem dowodu)
Poziom dotyczy obserwacji rynkowej z tego pliku; tam, gdzie reguła opiera się też na prawie, wskazuję plik 07.

**Nagłówek (pole pod kreacją)**
- **R1 (C).** Nigdy nie zostawiaj nagłówka pustego ani domyślnego. Walidator odrzuca: pusty, domenę, "www.fb.com"/"fb.me"/"instagram.com", nazwę strony, tytuł SEO/Booksy/Instagram. Podstawa: 50–70% reklam lokalnych i medycznych w próbce marnuje to pole.
- **R2 (C).** Nagłówek niesie jeden z 5 typów: (a) pytanie kwalifikujące z progiem/warunkiem ("Masz długi powyżej 25 000 zł?"), (b) konkret oferty z liczbą (cena od, % wpłaty, czas realizacji: "Leasing auta dla firm od 10% wpłaty", "Higienizacja i przegląd - 250 zł", "Twój dom zmontujemy w 1–3 dni"), (c) sytuacja/objaw z życia odbiorcy ("Komornik zajął Ci wynagrodzenie?", "Budujesz dom? Okna nie powinny opóźniać budowy"), (d) obiekcja zamieniona w scenę ("Minus 20 na zewnątrz. Plus 21 w środku."), (e) dowód liczbą ("Zwrot średnio 111 tys.", "3 200 zł rocznie. Tyle średnio oszczędza nasz klient."). Etykieta kategorii i CTA-jako-nagłówek są odrzucane.
- **R3 (C/D).** Długość nagłówka: 3–9 słów. Long-runnery w próbce miały 3–7 słów. Nagłówki-akapity (Exclusive Dental Studio) i listy produktów są odrzucane.
- **R4 (C).** Lokalny biznes: miasto/dzielnica w nagłówku lub w pierwszym zdaniu ("Fotowoltaika Gliwice – Darmowa Wycena", "Warszawa: proteza na implantach", "Dom z ogrodem 3 km od Piotrkowa").

**Pilność, dowód społeczny, liczby**
- **R5 (C + prawo [PLIK 07, L1]).** Zakaz szablonu "Dziś zapisało się N osób" i każdego licznika/limitu, którego klient nie potwierdzi datą lub stanem. "Ostatnia szansa", "Tylko dziś", "Tylko do…", "Szukamy N osób" — tylko z realnym terminem/limitem w briefie i datą końca kampanii. System zapisuje datę wygaśnięcia i blokuje ten sam komunikat po terminie. Podstawa: 5 reklamodawców z identycznym szablonem i stałą liczbą; FAIR z "ostatnią szansą" od 4 miesięcy.
- **R6 (C).** Każda liczba w reklamie (średni zwrot, oszczędność, liczba ugód, lata działania, liczba banków) wymaga źródła od klienta zapisanego w briefie. Bez źródła: nie używać.
- **R7 (A dla prawa [PLIK 07, L4], C obserwacja).** Cena przekreślona / "X zł zamiast Y zł" / "-40%" → system pyta o najniższą cenę z 30 dni przed obniżką (Omnibus) albo zmienia komunikat na cenę bez przekreślenia.

**Oferta i lead magnet**
- **R8 (C).** "Bezpłatna analiza/konsultacja/wycena" nie może być jedynym wyróżnikiem nagłówka w niszach, gdzie ma ją każdy (frankowicze, odszkodowania, PV, doradztwo kredytowe). Przenieś ją do CTA/tekstu; w nagłówku postaw dowód, obiekcję albo próg kwalifikacji.
- **R9 (C).** Preferowane lead magnety o niskim progu i osobistej wartości: quiz/test ("Jaki materac jest dla Ciebie? Sprawdź w 60 sekund", "✅ Sprawdź swój poziom", "Odpowiedziałeś 3x TAK?…"), spersonalizowany plan mailem ("Plan leczenia wysłany na Twojego maila"), wycena w X sekund/minut, "pierwszy krok" bez zobowiązań ("Najpierw rozmowa o grupie").
- **R10 (D).** W usługach o wysokiej stawce (prawo, finanse, budowa) dodaj wariant z odpowiedzią na pytanie o cenę ("Ile to kosztuje? Mówimy na starcie." / raty / success fee). W próbce robi to jeden reklamodawca na kilkadziesiąt — luka.

**Kąty i warianty**
- **R11 (C).** Przy generowaniu 5–10 wariantów każdy wariant = inny kąt (problem, obiekcja, dowód, proces, cena, emocja, scena), nie parafraza. Wzór: MSEnergy, Mediator CRN, Modern Wages, aboutmedica. System wykrywa parafrazy (ten sam kąt innymi słowami) i je odrzuca.
- **R12 (C).** Jeden problem = jedna reklama (aboutmedica: osobno "odprysk", "wędzidełko", "sedacja", "implant"). Zakaz "5 usług w jednej reklamie" (BeWa LexGroup).
- **R13 (C/D).** Gdy komunikat działa, odświeżaj kreację i zostaw nagłówek (wzór FAIR / Oddłużeniowa Kancelaria). W raportach optymalizacyjnych rozróżniaj zmęczenie kreacji i zmęczenie komunikatu.

**Język i forma (lint)**
- **R14 (C).** Zakaz: angielski Title Case w polskim tekście, caps lock w całym nagłówku, pogrubienie znakami Unicode, spacja przed "!/?", literówki (walidacja pisowni), zdania-kalki z tłumacza.
- **R15 (C + [PLIK 09]).** Lista ograniczeń stylu (ostrzeżenie, nie twardy zakaz): "To nie X. To Y." / "X, nie Y" (max 1 na zestaw), "[Rzeczownik], który [abstrakcja]" bez fizycznej cechy, "Twój nowy…", "Odkryj", "kompleksowy", "profesjonalny", "nowoczesny", "rzetelny", "na najwyższym poziomie", "wiodący", "wyjątkowy", "Sprawdź ofertę", "Poznaj ofertę", "Kliknij tutaj", "Nie zwlekaj".
- **R16 (C).** Emoji w nagłówku: najwyżej 1, funkcyjne (📍 lokalizacja, ✅ kwalifikacja, 🩷 grupa docelowa). Seria emoji + caps ("🔥…🔥", "🛑", "🔴") kojarzy się z szablonami sprzedażowymi z próbki. (D co do wpływu na wynik)

**Branże wrażliwe**
- **R17 (C + [PLIK 07, L5/L6]).** Stomatologia, medycyna estetyczna, terapia: tryb informacyjny — usługa, dla kogo, przebieg, cena od, miasto, jak się umówić. Zakaz obietnic efektu ("bezbolesny", "natychmiastowy efekt", "gwarantowany rezultat"), superlatyw i "spiskowych" hooków ("Prawda, którą lekarze ukrywają").
- **R18 (C).** Suplementy: tylko oświadczenia zdrowotne w dopuszczonym brzmieniu (wzorzec ostrożny: "Melatonina pomaga skrócić czas zasypiania"); preferuj konkret produktu ("bez cukru i bez smaku", "10 kropli rano, 3,15 zł dziennie") zamiast obietnic.

**Analiza konkurencji (moduł research systemu)**
- **R19 (C).** Moduł analizy Biblioteki Reklam musi: (a) szukać po frazie ORAZ po `page_ids` konkurentów (tylko tak widać starsze reklamy); (b) filtrować szum po walucie i języku (USD/EUR/INR/PKR przy polskiej frazie = często arbitraż/dropshipping); (c) grupować kopie po identycznym nagłówku; (d) oznaczać reklamy aktywne ≥ 60 dni jako "sygnał C", nigdy jako "sprawdzone"; (e) raportować przejedzone wzorce w niszy (np. "5 z 8 konkurentów mówi X") i proponować kąt, którego nikt nie używa.
- **R20 (D).** Przy pozycjonowaniu samej KWIATEKmedia: nie używać "klienci/umowy, nie leady" ani "wyłączność w regionie" jako głównego hooka — to już standard agencji (Lemon Agency, Sosky). Lepszy kierunek: konkretny case z liczbami + przejrzysty proces.

## 5. Lista wyszukiwań i źródeł

### 5.1 Wyszukiwania po frazach [PEŁNY] — `countries=["PL"]`, data 24.09.2026
| # | Fraza | Status | Limit | Est. aktywnych (API) | Grupa | Szum / uwagi |
|---|---|---|---|---|---|---|
| 1 | księgowość dla firm | ACTIVE | 25 | 187 | 1 | 1 spam ("Hello \| Hello…") |
| 2 | biuro rachunkowe | ALL | 50 | 16 705 | 1 | wszystkie utworzone 21–24.09 mimo ALL |
| 3 | leasing | ACTIVE | 40 | 3 897 | 1 | salony aut, DramaBox |
| 4 | program do faktur | ACTIVE | 40 | 22 887 | 1 | ~100% szum (aplikacje z powieściami) |
| 5 | CRM | ACTIVE | 40 | 2 024 | 1 | reklamy RU/UA |
| 6 | szkolenia dla firm | ACTIVE | 40 | 608 | 1 | — |
| 7 | rekrutacja pracowników | ACTIVE | 40 | 185 | 1 | głównie oferty pracy |
| 8 | fotowoltaika dla firm | ACTIVE | 40 | 72 | 1/3 | — |
| 9 | stomatolog | ACTIVE | 40 | 398 | 2 | — |
| 10 | implanty zębów | ACTIVE | 40 | 952 | 2 | dużo szumu (płaszcze, dropshipping) |
| 11 | fizjoterapia | ACTIVE | 40 | 2 667 | 2 | e-com advertoriale, spam |
| 12 | salon kosmetyczny | ACTIVE | 40 | 553 | 2 | — |
| 13 | montaż klimatyzacji | ACTIVE | 40 | 601 | 2 | ~100% szum |
| 14 | remont łazienki | ACTIVE | 40 | 425 | 2 | ~95% szum (DramaBox, ogłoszenia) |
| 15 | klimatyzacja | ACTIVE | 40 | 3 410 | 2 | ~80% szum (ogłoszenia aut) |
| 16 | okna PCV | ACTIVE | 40 | 264 | 2 | — |
| 17 | szkoła językowa | ACTIVE | 40 | 1 029 | 2 | — |
| 18 | pompa ciepła | ACTIVE | 50 | 1 551 | 3 | deweloperzy |
| 19 | fotowoltaika | ACTIVE | 50 | 1 705 | 3 | — |
| 20 | dom modułowy | ACTIVE | 40 | 240 | 3 | meble |
| 21 | mieszkania na sprzedaż | ACTIVE | 40 | 1 580 | 3 | — |
| 22 | basen ogrodowy | ACTIVE | 30 | 40 | 3 | widoczne reklamy od 26.06 |
| 23 | kurs programowania | ACTIVE | 40 | 310 | 3 | — |
| 24 | medycyna estetyczna | ACTIVE | 40 | 1 761 | 3 | — |
| 25 | darmowa dostawa | ACTIVE | 40 | 20 076 | 4 | — |
| 26 | materac | ACTIVE | 40 | 2 737 | 4 | — |
| 27 | promocja -30% | ACTIVE | 40 | 6 579 | 4 | — |
| 28 | suplement diety | ACTIVE | 40 | 3 684 | 4 | — |
| 29 | kosmetyki naturalne | ACTIVE | 40 | 1 375 | 4 | targi, eventy |
| 30 | odzież damska | ACTIVE | 40 | 681 | 4 | — |
| 31 | kancelaria | ACTIVE | 40 | 3 979 | 5 | tłumaczenia, księgowość |
| 32 | frankowicze | ACTIVE | 40 | 51 | 5 | widoczne reklamy od 20.05 |
| 33 | upadłość konsumencka | ACTIVE | 40 | 537 | 5 | agencje marketingowe |
| 34 | odszkodowanie | ACTIVE | 40 | 942 | 5 | sieć arbitrażowa (USD) |
| 35 | ubezpieczenie na życie | ACTIVE | 40 | 678 | 5 | oferty pracy |
| 36 | doradca kredytowy | ACTIVE | 40 | 87 | 5 | deweloperzy |
| 37 | psychoterapia | ACTIVE | 40 | 733 | 5 | ~25% szum |
| 38 | inwestycje | ACTIVE | 40 | 6 136 | 5 | kosmetyki, DramaBox |
| 39 | klinika | ACTIVE | 40 | 4 098 | 5 | tureckie kliniki |

### 5.2 Wyszukiwania po `page_ids` [PEŁNY] (pełny zestaw aktywnych reklam wybranych stron)
| # | Strony (page_id) | Zwrócono / est. | Po co |
|---|---|---|---|
| 40 | Fundacja FAIR (101578561563357), ProBanking (303285340142237), Życie bez kredytu (1539542349398872) | 50 / 62 | long-runnery frankowe (od 20.05) |
| 41 | Zebra Rachunkowa (103011972549226), Bips (101500231377736), Modern Wages (984817101392539) | 23 / 23 | B2B — brak starszych reklam |
| 42 | Mediator CRN (1912441149042623), Oddłużeniowa Kancelaria (879285238612458), Renvia (912191348650091) | 29 / 29 | long-runnery upadłościowe (od 22.01) |
| 43 | Sun Home (116039323131002), SM Project (100530154634248), Centrum Ubezpieczeń (1444502785403506), Sol Voltage (104258324788772) | 50 / 251 | weryfikacja szablonu "Dziś zapisało się N osób" |
| 44 | aboutmedica (653050204555692), Karla Dent (240618166291045), ZELEN (266707823667841) | 50 / 64 | kąty lokalnych klinik, "Szukamy 7 kobiet" |

Łącznie: 44 wywołania, ok. 1 770 rekordów (z powtórzeniami).

### 5.3 ID cytowanych reklam (do weryfikacji: https://www.facebook.com/ads/library/?id=ID) [PEŁNY]
| Reklamodawca | Nagłówek (skrót) | Utworzona | ID |
|---|---|---|---|
| Modern Wages | "Budowałeś ją 20 lat…" | 23.09.2026 | 1441085881203339 |
| Modern Wages | "I znowu zbliża się 20." | 23.09.2026 | 1068472649133002 |
| Zebra Rachunkowa | "❌ Znudzony obecną księgową?" | 23.09.2026 | 1038396252571857 |
| Bips Biuro Rachunkowe | "Wycena w 60 sekund…" | 22.09.2026 | 1074974858779192 |
| Greysoft | "…Usługowy… bez ryzka." | 23.09.2026 | 2363111700887413 |
| Olimp Capital Group | "Leasing auta dla firm od 10% wpłaty" | 23.09.2026 | 2409709949556453 |
| Salesbook | "Oferta i umowa jeszcze na spotkaniu" | 23.09.2026 | 1795654288447385 |
| KRX WORK | "Potrzebujesz ludzi? My pytamy tylko: na kiedy." | 18.09.2026 | 1096403826115811 |
| I know IT | "Na koniec szkolenia zaczyna się cyberatak." | 23.09.2026 | 2713198282460102 |
| Grupa Progres | "Jak obniżyliśmy absencję… o 56,5%?" | 17.09.2026 | 29391580687097404 |
| Solo Energy | "Masz już taryfę i zużycie?… od 90 000 zł" | 18.09.2026 | 1589050919580882 |
| Sun Home | "🛑Dziś zapisało się 37 osób!" | 18.09 / 20.09 / 23.09.2026 | 1087255933668638 / 2525223877988897 / 1584736489781014 |
| Sol Voltage | "🛑Dziś zapisały się 22 osoby!" | 22.09 / 23.09.2026 | 1131728139453793 / 1553975913198981 |
| Centrum Ubezpieczeń | "🔴 DZIŚ ZAPISAŁO SIĘ 25 OSÓB" | 22.09.2026 | 1101796109168252 |
| MSEnergy | "Minus 20 na zewnątrz. Plus 21 w środku…" | 23.09.2026 | 2631038014018232 |
| MSEnergy | "3 200 zł rocznie…" | 23.09.2026 | 2955877281426196 |
| Ultra Volta | "Fotowoltaika nie obniżyła rachunków firmy?" | 23.09.2026 | 2180544636232165 |
| LearnUp Center | "CO WARTO WIEDZIEĆ O FOTOWOLTAICE…" | 23.09.2026 | 1403158167945283 |
| Argali Development | "Domy w Wilanowie od 2,94 mln zł…" | 23.09.2026 | 1103307955535209 |
| Grochowski Construction | "Twój dom zmontujemy w 1–3 dni" | 23.09.2026 | 1414067977544057 |
| Neptun Baseny Ogrodowe | "Inwestycja, która przyciąga gości…" | 21.07.2026 | 1037042438871293 |
| KLIKA | "Kurs, którego koszt zwraca się…" | 23.09.2026 | 2628038277713545 |
| KursyAutomatyki.pl | "Kup do 21:00 👉72% taniej" | 22.09.2026 | 1443381091257536 |
| Clinica Fiorente | "Plan leczenia wysłany na Twojego maila" | 23.09.2026 | 28615214048108176 |
| Clinica Fiorente | "Kompleksowy Plan Leczenia w Radomiu" | 23.09.2026 | 1241205891504651 |
| Warszawa Modelki Med. Est. | "Implanty podczas szkoleń - 26-27.09" | 23.09.2026 | 4390673684478590 |
| ZELEN Klinika Kosmetologii | "🩷 Szukamy 7 Kobiet z Lubonia…" | 23.09.2026 | 4889612391273200 |
| Karla Dent | "Higienizacja i przegląd - 250 zł" | 22.09.2026 | 1684572376628622 |
| aboutmedica | "Prześpij wizytę u dentysty" | 23.09.2026 | 1101493512342204 |
| Dental Corner | "4 czy 6 implantów? Wrocław" | 23.09.2026 | 2003224660385037 |
| Dentima | "Odzyskaj Brakujące Zęby" | 23.09.2026 | 1390199499949103 |
| Exclusive Dental Studio | "Brak jednego zęba?…" | 23.09.2026 | 1629734041835392 |
| Bogmar | "Budujesz dom? Okna nie powinny opóźniać budowy" | 18.09.2026 | 2173635053509162 |
| Okna.todom.pl | "-40% na okna PCV" | 21.09.2026 | 4600580026832220 |
| LingoDesk | "Twoja szkoła przerosła Excela?" | 23.09.2026 | 1978244616206587 |
| Serena | "Prawda, którą ortopedzi przed Tobą ukrywają!" | 23.09.2026 | 1050144511348058 |
| Dalalecca-mall | "…kampanii brandingowej, przegap!" | 23.09.2026 | 2370225797118532 |
| Tullio.pl | "Dzień 14: Stałam w drzwiach i płakałam…" | 23.09.2026 | 28262833623416642 |
| Spectrum Herbs | "10 kropli rano, 3,15 zł dziennie" | 23.09.2026 | 1853607352472739 |
| ilabu.pl | "Kolagen bez cukru i bez smaku" | 23.09.2026 | 1103976291990702 |
| Rose Anna | "Sztruks, który nie przegrzewa" | 23.09.2026 | 1926236385001791 |
| Anatomia Snu | "Jaki materac jest dla Ciebie?…" | 23.09.2026 | 1448175013841386 |
| Men's Doctor | "✅ 386% gwarantowany rezultat! 👉" | 23.09.2026 | 1630584658726112 |
| 𝐛𝐢𝐞𝐝𝐫𝐨𝐧𝐤𝐚 𝐒𝐤𝐥𝐞𝐩 | "🚚 Darmowa dostawa" | 24.09.2026 | 1066691729606905 |
| Zolmed.pl | "Tylko dziś -50% + Darmowa Dostawa 👉" | 23.09.2026 | 2212894312775643 |
| Fundacja FAIR | "⏰ Ostatnia szansa na walkę z bankiem!" | 20.05.2026 | 918390304585268 |
| Fundacja FAIR | "Czy Twój bank jest na liście?" | 27.05.2026 | 2407859019712508 |
| Fundacja FAIR | "Obniż ratę nawet o 50% 💰" | 16.07.2026 | 1736907701096667 |
| Fundacja FAIR | "Uzyskaj bezpłatną analizę 👉🏻" | 29.06.2026 | 1734223950942598 |
| ProBanking | (pusty) | 29.05.2026 | 967575242828246 |
| ProBanking | "Odpowiedziałeś 3x TAK?…" | 15.09.2026 | 1608364370790114 |
| Życie bez kredytu | "Zamów Analizę Umowy Kredytu WBOR ➡️" | 16.06.2026 | 1019455583889316 |
| Oddłużeniowa Kancelaria | "Masz długi powyżej 25 000 zł?" | 15.07.2026 | 1044298298143439 |
| Oddłużeniowa Kancelaria | "{{product.name}}" | 22.01.2026 | 2155238965280779 |
| Renvia | "Masz 30 000 zł lub więcej długów?" | 30.07.2026 | 1022627167053688 |
| Mediator CRN | "Windykatorzy dzwonią codziennie?…" | 21.09.2026 | 3417043085352392 |
| Mediator CRN | "Pełna obsługa w cenie - wygodne raty…" | 21.09.2026 | 2621687418340314 |
| Mediator CRN | "Wstyd? Strach? Nie jesteś w tym sam…" | 21.09.2026 | 1110480011494245 |
| Franki Kancelaria | "Kredyt w euro? Zwrot średnio 111 tys." | 11.09.2026 | 1069068295713129 |
| Helpfind Odszkodowania | "Spłacany czy spłacony - sprawdź umowę" | 16.09.2026 | 2236990230176207 |
| Pledziewicz Kancelaria | "Zobacz przykładowe wyroki!" | 15.09.2026 | 2251746992282789 |
| Arbiter S.A. | "Bezpłatna analiza" | 23.09.2026 | 4459615407613684 |
| BeWa LexGroup | "Słup na działce? \| Kredyt CHF? \| …" | 23.09.2026 | 1071091392479903 |
| Piotr od Ubezpieczeń | "Co, jeśli kierowca umrze za granicą?" | 22.09.2026 | 1094464976787810 |
| TDF Kredyty Ubezpieczenia | "Doradca TDF porówna 26 banków ➡️" | 16.09.2026 | 1790627465312975 |
| Pomoc Poszkodowanym Online | "Kliknij „Dowiedz się więcej”" | 23.09.2026 | 28290573010593088 |
| Ośrodek ISTDP | "Najpierw rozmowa o grupie" | 23.09.2026 | 2835636540148047 |
| Krakowska Szkoła Biznesu UEK | "Inwestycje deweloperskie" | 21.06.2026 | 1344136067049993 |
| Lemon Agency Polska | "Max 2 kancelarie w regionie. Koniec." | 18.09.2026 | 1440094081377085 |
| Rafał Sobieszyński - Sosky | "Podpisane umowy, nie paczki leadów" | 22.09.2026 | 1081366394828123 |

### 5.4 Pozostałe źródła
- Meta Ad Library API przez MCP (`mcp__Meta_Ads__ads_library_search`) — jedyne źródło danych o reklamach w tym pliku [PEŁNY].
- [PLIK 07] `research/raw/07-leadgen-quality-pl-law.md` — L1 (UoPNPR, czarna lista: fałszywa ograniczona dostępność), L4 (Omnibus, najniższa cena z 30 dni), L5 (reklama wyrobów medycznych), L6 (podmioty lecznicze: informacja, nie reklama). Przywołane jako kontekst prawny, nie jako nowe ustalenie.
- [PLIK 09] `research/raw/09-copy-pl-aislop-image-prompts.md` — wzorce tekstu AI (m.in. "nie X, tylko Y" jako najsilniejszy sygnał).
- WebSearch: niewykonany (limit sesji 200/200 wyczerpany). WebFetch snapshotów facebook.com: zablokowany (EGRESS_BLOCKED).
