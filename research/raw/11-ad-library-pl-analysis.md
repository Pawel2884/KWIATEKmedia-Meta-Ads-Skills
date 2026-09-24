# 11 — Analiza reklam z Biblioteki Reklam Meta (Polska) w 5 grupach biznesów (research surowy)

> Agent researchowy: obszar 11. Data: 2026-09-24. Status: W TOKU (zapis przyrostowy).
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
- Znalezione reklamy "długo działające" (aktywne ≥ 2 miesiące): ok. 15 reklam u 8 reklamodawców (głównie grupa 5 i basen/deweloper). Próba jest mała — wnioski o "long-runnerach" mają poziom C/D.

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
- ZELEN Klinika Kosmetologii (Luboń), 21–23.09: "🩷 Szukamy 7 Kobiet z Lubonia na radiofrekwencję mikroigłową — 690 zł zamiast 990 zł!" — lokalny call-out + cena. Uwaga: ta sama "7 kobiet" jest odtwarzana w nowych reklamach co dzień (21, 22, 23.09), więc limit wygląda na stały element szablonu, nie realny stan (C). Cena przekreślona wymaga informacji o najniższej cenie z 30 dni [PLIK 07, L4].
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
