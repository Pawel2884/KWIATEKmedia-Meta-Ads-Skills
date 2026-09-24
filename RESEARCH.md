# RESEARCH — podsumowanie badań systemu KWIATEKmedia Meta Ads

Stan wiedzy: 24 września 2026. Szczegółowe notatki (ok. 850 KB) i pełne listy źródeł: `research/raw/01–12`. Lista wykorzystanych źródeł: `SOURCES.md`. Zasady systemu wyprowadzone z tych wniosków: `PRINCIPLES.md`.

## Spis treści
1. Metoda, kanały i ograniczenia
2. Najważniejsze wnioski w 15 punktach
3. Odpowiedzi na pytania badawcze
4. Andromeda: co wiadomo, a czego nie
5. Specyfika polska
6. Mity i sprostowania
7. Luki i rzeczy do ręcznej weryfikacji
8. Gdzie wnioski trafiły w systemie

---

## 1. Metoda, kanały i ograniczenia

**Organizacja.** 11 równoległych agentów badawczych, każdy z jednym obszarem (dostarczanie reklam i Andromeda; oficjalne wytyczne kreatywne i lead ads Meta; uwaga i percepcja mobile; psychologia perswazji; praktycy i strategia kreacji; wideo i hooki; lead gen i polskie prawo; testowanie, zmęczenie i iteracje; język polski, AI slop i prompty graficzne; format pluginu Claude; Biblioteka Reklam w Polsce), plus 12. sesja weryfikacyjna, która sprawdziła 31 twierdzeń oznaczonych wcześniej jako niepotwierdzone.

**Kanały i tryby dostępu (uczciwie):**
| Kanał | Co dał | Tryb |
|---|---|---|
| Meta Business Help Center przez Meta Ads MCP | ok. 250 pełnych artykułów Meta (aukcja, uczenie, zmęczenie, Advantage+, formularze, polityki, specyfikacje) | [PEŁNY] |
| Biblioteka Reklam Meta przez MCP | ok. 1770 reklam ok. 400 reklamodawców z Polski (tylko nagłówki, bez Primary Text) | [PEŁNY] |
| GitHub i dokumentacja Claude | pełne teksty: dokumentacja pluginów, transkrypcje bootcampu Motion 2026, kopie aktów prawnych, kod Google ABCD Detector, WCAG, słowniki anty-slop | [PEŁNY] |
| Wyszukiwarka (WebSearch) | streszczenia i fragmenty stron: badania naukowe, raporty branżowe, blogi praktyków, polskie źródła prawne | [WYSZUKIWARKA] |
| Wiedza modelu | tylko tam, gdzie oznaczono; w dokumentach systemu nie jest podawana jako fakt | [WIEDZA] |

**Ograniczenia:**
- Środowisko blokowało pełne pobieranie większości stron (facebook.com, engineering.fb.com, uczelnie, blogi, Reddit). Dlatego badania naukowe, blogi inżynierskie Meta (Andromeda, GEM) i materiały praktyków znamy z abstraktów i streszczeń wyszukiwarki, nie z pełnych tekstów. Liczby z tych źródeł są oznaczone i przed publikacją dla klientów warto je sprawdzić w oryginale.
- Wspólny limit 200 wyszukiwań na sesję wyczerpał się w trakcie pracy agentów. Luki zamknęła osobna sesja weryfikacyjna (31 punktów).
- Biblioteka Reklam zwraca tylko nagłówki, więc analiza polskich reklam dotyczy nagłówków i ofert, nie pełnych tekstów.
- Brak polskich danych rynkowych z metodologią (CPL, CTR). W systemie nie ma „benchmarków CPL dla Polski”.

**Hierarchia dowodów:** A = Meta lub inne źródło pierwotne (akt prawny, dokumentacja); B = badania recenzowane, meta-analizy, duże zbiory danych; C = mocna obserwacja praktyków z przykładami; D = hipoteza lub opinia. Popularność opinii nie była traktowana jako dowód.

**Saturacja:** w obszarach Meta Help Center (aukcja, uczenie, zmęczenie, Advantage+, formularze, polityki) kolejne zapytania zwracały te same artykuły. W obszarze praktyków i polskich źródeł saturacji nie osiągnięto (limit wyszukiwań). Luki opisuje sekcja 7.

---

## 2. Najważniejsze wnioski w 15 punktach

1. **Kreacja wpływa na aukcję i na to, kto zobaczy reklamę** (A). Meta: przewidywane akcje i jakość reklamy decydują obok stawki; dywersyfikacja kreacji to „najlepsza dźwignia” znajdowania odbiorców.
2. **Clickbait jest karany dwa razy** (A/B): Meta obniża ocenę jakości za ukrywanie informacji i sensację, a badania pokazują, że „zagadki” i fałszywe fronty przegrywają lub szkodzą zaufaniu.
3. **Pierwsza sekunda decyduje o zrozumieniu** (A/B): reklamę rozpoznaje się w < 100 ms, treść w mobilnym feedzie dostaje średnio ok. 1,7 s, Meta zaleca markę i komunikat w 3 s.
4. **Mniej tekstu na grafice, większa czcionka** (A/B): tekst przyciąga uwagę proporcjonalnie do powierzchni; limitu 20% nie ma od 2020, ale Meta dalej zaleca mało tekstu i jeden komunikat.
5. **Szum wizualny szkodzi, ciekawa kompozycja pomaga** (B): ozdobniki i nadmiar detali obniżają uwagę na markę.
6. **Natywny wygląd działa lepiej niż „reklamowy”** (A/B), ale komunikat musi być jasny od razu.
7. **Zaufanie to konkret, dowód i szczerość** (B): wiarygodność źródła, prawdziwe oceny 4,0–4,7, historia plus liczba, jedno uczciwe ograniczenie. Rozpoznana manipulacja obniża ocenę firmy.
8. **Różnorodność to różne koncepty, nie warianty** (A kierunek): Meta zaleca kreacje „materially different”, pokazuje wskaźnik podobieństwa wizualnego i łączy go ze zmęczeniem i kosztem.
9. **Mniej reklam naraz** (A): za dużo reklam pogarsza uczenie; ok. 50 zdarzeń tygodniowo do wyjścia z fazy uczenia; nowa reklama resetuje uczenie zestawu.
10. **Małe budżety nie wykryją małych różnic** (B, obliczenia): różnica CPL 20–30% wymaga ok. 150–350 leadów na wariant; przy 10 leadach prawdziwy CPL to 0,54–2,09× obserwowanego.
11. **Jakość leadów zależy od kreacji, formularza i sygnału z CRM** (A): więcej pytań wielokrotnego wyboru = lepsza jakość; optymalizacja pod leady kwalifikowane z CRM obniża koszt leada jakościowego o 21% (dane Meta); od IV 2026 wymaga Conversions API.
12. **Polityka cech osobistych jest ostrzejsza, niż wygląda rynek** (A): zakazane są też pytania („Masz długi?”). Część długo działających polskich reklam ją łamie.
13. **Polskie prawo ogranicza całe branże** (A): fizjoterapia i podmioty lecznicze tylko informują (art. 14 u.d.l.), prawnicy w reżimie informacji, kredyt z RRSO, promocje z najniższą ceną z 30 dni, fałszywa pilność i fałszywe opinie zakazane, AI Act art. 50 od 2.08.2026.
14. **O Andromedzie wiadomo mało i konkretnie** (A pośrednio): to etap wyboru kandydatów, nie cały algorytm. „Entity ID”, progi podobieństwa i „10–50 kreacji” to mity bez potwierdzenia Meta.
15. **Polski AI slop to głównie język urzędowy i kalki** (C): „kompleksowy”, „kluczowy”, „w dobie”, „realizacja”, „dedykowany”, konstrukcja „to nie X, to Y”. Ujawnienie, że reklama powstała z AI, obniża zaufanie (B/C).

---

## 3. Odpowiedzi na pytania badawcze

### Co naprawdę zatrzymuje scroll?
- Obraz przyciąga pierwsze spojrzenie niezależnie od rozmiaru; tekst proporcjonalnie do powierzchni (B: Pieters i Wedel 2004).
- Jeden wyraźny punkt skupienia, ruch w pierwszej klatce, twarz lub efekt usługi (A: Meta; A: Google ABCD).
- Zaskoczenie i szybki wzrost pozytywnej emocji koncentrują uwagę i utrzymują oglądanie (B: Teixeira, Wedel, Pieters 2012).
- Natywny wygląd: elementy wyglądające jak baner są omijane wzrokiem (B: Nielsen Norman Group), reklamy „wtapiające się” działają lepiej (A: Meta).
- Rozpoznawalna, typowa scena kategorii wygrywa w krótkiej ekspozycji (B: „ad gist”).
- Ale zatrzymanie to nie cel: hook, który zatrzymuje wszystkich ciekawskich, obniża jakość leadów (D, spójne z B o clickbaicie).

### Jaką rolę pełnią pierwsze 1–3 sekundy?
- Większość ludzi ogląda krótko: do 47% wartości kampanii wideo (metryki marki) tworzą osoby oglądające poniżej 3 s (A/B: Facebook i Nielsen 2015). To efekt wolumenu, nie dowód, że krótko wystarczy.
- Meta: marka i kluczowy komunikat w pierwszych 3 s, ruch lub mocny obraz w pierwszej klatce (A).
- TikTok: ponad 63% reklam z najwyższym CTR pokazuje komunikat lub produkt w 3 s (A, korelacja).
- Google ABCD: twarz i mowa w pierwszych sekundach, zmiana ujęcia przed 3 s, produkt w 5 s; reklamy spełniające zasady mają do +30% krótkoterminowego prawdopodobieństwa sprzedaży (B: Kantar).

### Jak powinien wyglądać dobry hook?
- Trzy zadania: zatrzymać właściwą osobę, od razu powiedzieć, czego dotyczy reklama, połączyć się z resztą reklamy (C).
- „Upfront” plus mała luka: temat jasny, niedopowiedziane jak, ile, dlaczego (B: ciekawość krzywoliniowa, 8977 testów nagłówków; nagłówki streszczające często wygrywają).
- W wideo trzy zgodne warstwy: obraz, tekst 3–7 słów, pierwsze zdanie audio (A).
- Kierunek efektu cech nagłówka (pytanie, liczba, negatywność) jest niestabilny (B: Banerjee i Urminsky, archiwum Upworthy), dlatego system generuje hooki różnych typów i zakłada test.
- Bez pytań o cechy odbiorcy (A: polityka Meta).

### Jak szybko odbiorca powinien zrozumieć ofertę?
- W 1 sekundę: co to jest i co z tego ma. Po 3 sekundach wideo albo pierwszej linii tekstu: dla kogo, jaki problem, co dalej (A/B).
- Pierwsza linia Primary Text: Meta pokazuje ok. 125 znaków; polski tekst jest o 15–25% dłuższy od angielskiego, więc hook i oferta w ok. 90–110 znakach (A + pomiar własny B/C).

### Jak użytkownik czyta reklamę na telefonie?
- Skanuje: na stronach czyta 20–28% słów, zaczyna od lewej górnej części, wybiera najmniejszy wysiłek (B: NN/g).
- Trudny tekst rozumie gorzej i wolniej na telefonie, prosty tak samo dobrze (B).
- 98% trzyma telefon pionowo (A: Meta). Feed ma bardziej aktywny tryb oglądania niż Reels (A).

### Jak ilość tekstu wpływa na reklamę?
- Limitu 20% nie ma od września 2020 (A: Meta), ale Meta zaleca mało tekstu, jeden komunikat, primary text w 1–3 liniach (A).
- Więcej słów przy tej samej powierzchni = mniejsza czcionka = mniej uwagi na słowo (B). Reguła systemu: nagłówek 3–7 słów, całość do ok. 12 słów (D, wyprowadzenie z A/B).
- Dodawanie słabszych argumentów obniża ocenę całości (B: presenter's paradox), powyżej 3 twierdzeń rośnie sceptycyzm (B: Shu i Carlson 2014).

### Jak ograniczać wizualne rozpraszacze?
- Złożoność „cech” (detale, kolory, faktury) szkodzi uwadze na markę; złożoność „projektu” (ciekawy układ) pomaga (B: Pieters, Wedel, Batra 2010).
- Meta: jeden punkt skupienia, ciasny kadr, bez zbędnych naklejek (A).
- Przypadkowe napisy na obiektach: w generatorach obrazów usuwa się je, nie wstawiając obiektów przyciągających napisy albo opisując je jako puste, plus linia wykluczeń (A: dokumentacja OpenAI, Google, Midjourney).

### Kiedy minimalizm działa, a kiedy potrzeba więcej informacji?
- Minimalizm dotyczy grafiki (zatrzymanie i jeden komunikat). Przy wysokim zaangażowaniu decydują argumenty (B: ELM, Petty, Cacioppo, Schumann 1983), więc przy drogich i ryzykownych decyzjach argumenty idą do Primary Text, formularza i strony.
- Jeden komunikat może być bardzo konkretny („Wymiana dachu od 180 zł/m²”).

### Jak budować zaufanie?
- Kto mówi i dlaczego mu wierzyć: kompetencja plus szczerość; najsilniej działa u zimnych, sceptycznych odbiorców (B: Pornpitakpan 2004).
- Przekaz dwustronny (jedno ograniczenie) podnosi wiarygodność, za dużo negatywów szkodzi (B: Eisend).
- Rozpoznany trik perswazyjny sprawia, że ludzie dyskontują przekaz i gorzej oceniają firmę (A/B: Friestad i Wright 1994).
- Twarz prawdziwej osoby z firmy; w usługach talent jest częścią dowodu (C).

### Jak używać proof?
- Hierarchia: weryfikowalne fakty, potem opinia z imieniem i wynikiem, na końcu deklaracje (B/D).
- Historia plus liczba: statystyka zmienia przekonania, historia intencję (B: Zebregs 2015, Freling 2020).
- Opinie: 5 opinii vs 0 to +270% prawdopodobieństwa zakupu, oceny 4,0–4,7 sprzedają najlepiej, 5,0 budzi podejrzenia (B/C: Spiegel 2017, dane obserwacyjne).
- Normy społeczne: efekt realny, ale umiarkowany; lokalny i podobny dowód działa lepiej (B: Goldstein, Cialdini, Griskevicius 2008: +26% dla normy ogólnej, dodatkowo ok. +15% dla lokalnej).

### Jak używać liczb?
- Naturalna precyzja z kontekstem („w 11 dni roboczych”); sztuczna precyzja szkodzi u ekspertów (B).
- Rabat powyżej 100 jednostek kwotą, poniżej procentem (C: „rule of 100”).
- Końcówki cen to kosmetyka (B: brak wpływu na intencję zakupu).
- Każda liczba od klienta, z typowością wyniku (A: prawo).

### Jak używać konkretów?
- Konkret poprawia zrozumienie i samokwalifikację. Teza „konkretny język brzmi prawdziwiej” słabo się replikuje (B), więc konkret nie jest „trikiem prawdy”.
- Przejrzystość kosztów zwiększyła sprzedaż o 44% w eksperymencie terenowym (B: Mohan, Buell, John 2020, e-commerce).

### Jak używać ciekawości bez clickbaitu?
- Konkret plus mała luka; luka dotyczy problemu, który rozwiązuje oferta; obietnica spełniona na pierwszym ekranie formularza (B).
- Clickbait obniża wiarygodność (B) i ocenę jakości w aukcji (A).
- Efekt Zeigarnik („otwarta pętla zapada w pamięć”) się nie replikuje (B: meta-analiza 2025). Replikuje się skłonność do dokończenia zaczętego zadania.

### Jak komunikować problem, korzyść i mechanizm?
- Ramka straty nie jest z definicji lepsza od ramki zysku: różnice w meta-analizach praktycznie zerowe (B: O'Keefe i Jensen); awersja do strat średnio ok. 2, ale silnie kontekstowa (B).
- Strach działa (d = 0,29) tylko z konkretnym rozwiązaniem i łatwym krokiem (B: Tannenbaum 2015; Witte i Allen 2000).
- Mechanizm i prawdziwe „bo…”: przy dużych prośbach (zostawienie danych) działa tylko prawdziwy powód (A: Langer 1978).

### Jak tworzyć CTA?
- CTA mówi, co się stanie: kto, kiedy, ile trwa, czy zobowiązuje (B/D).
- Kontakt w ciągu godziny: ok. 7× większa szansa kwalifikacji leada (B: HBR 2011). Statystyka „78% kupuje od pierwszego” nie ma źródła.
- Harmonogram emisji w godzinach, gdy ktoś oddzwania (A: Meta; +25,4% konwersji z połączeń w teście Meta).

### Jak reklamy powinny różnić się od siebie? Co oznacza prawdziwa różnorodność?
- Meta: dywersyfikacja to unikalne zestawy kreacji dla różnych person lub zastosowań, nie drobne poprawki (B, artykuł znany ze streszczeń); przy zmęczeniu kreacja „materially different” (A).
- System: 8 osi rdzeniowych (segment, moment, problem lub pragnienie, obietnica, mechanizm, świadomość, dowód, kąt); nowy koncept = różnica w co najmniej 2 osiach (C/D, heurystyka łącząca frameworki praktyków: P.D.A., 3-częściowa dywersyfikacja Farisa, „Ad Families”, „2 z 3”).
- Portfel formatów: co najmniej 2–3 kontenery (A: Meta zaleca mieszanie wideo i statyk).

### Czy zmiana zdjęcia, koloru albo nagłówka daje Meta istotnie nowy materiał?
- Meta mierzy podobieństwo wizualne („too visually identical”) dla statyk i wiąże je ze zmęczeniem i wyższym kosztem (A). Zmęczenie liczy per obraz lub wideo (A).
- Warianty tekstu w jednej reklamie Meta miesza i raportuje łącznie (A); nie wiadomo, czy tekst zwiększa „różnorodność” w oczach systemu (niewiadoma).
- Wniosek: zmiana koloru lub nagłówka to mikro-wariant. Może pomóc w optymalizacji w obrębie reklamy, ale nie jest nowym kierunkiem (A kierunek, C reguła).

### Jak tworzyć różne kąty komunikacji?
- Biblioteka 18 kątów (problem, rezultat, mechanizm, dowód liczbowy, historia klienta, ekspert, proces, obiekcja, porównanie, cena, moment, kwalifikacja, błąd przed decyzją, lokalność, kulisy, odwrócenie ryzyka, edukacja, założyciel) z warunkami użycia (C).
- Źródła kątów: język prawdziwych klientów, obiekcje z rozmów sprzedażowych, luki w komunikacji konkurencji (C).

### Jak wykorzystywać poziomy świadomości?
- Poziomy Schwartza to heurystyka praktyków bez bezpośrednich badań (C); najbliższe naukowe odpowiedniki to ELM i teoria poziomów konstruktu (B). Używamy ich do doboru otwarcia; zestaw obejmuje co najmniej 2 poziomy.
- W B2B tylko ok. 5% firm jest „w rynku” w danym kwartale (B: Dawes, Ehrenberg-Bass).

### Jak tworzyć reklamy przypominające naturalne treści?
- Zdjęcia z telefonu lepsze od studyjnych dla zapamiętania i intencji, studyjne dla świadomości marki (A: Meta).
- „Barbell”: natywne lo-fi albo jawna oferta, unikać „ładnego środka” (C); dane Motion 2026: reklamy tekstowe i UGC mają wyższy odsetek „winnerów” niż wysoka produkcja (B-, e-commerce, winner = wydatek).
- Natywność nie może oznaczać udawania: reklama jest i tak rozpoznawana w < 100 ms (B), a podszywanie się pod treści redakcyjne lub prywatne wpisy jest zakazane (A: prawo, polityki).

### Jak tworzyć UGC?
- Prawdziwe doświadczenie twórcy lub klienta, nagranie telefonem, pierwsze słowo w 0,3 s (C/A).
- Twórca opłacony: oznaczenie dwupoziomowe (rekomendacje UOKiK 2022, A soft law); twórca nie udaje klienta (A: UoPNPR art. 7 pkt 22, 26).
- Awatary AI udające klientów: zakazane w systemie (A: AI Act art. 50 od 2.08.2026; zakaz fałszywych opinii). Ujawnienie AI obniża zaufanie (B/C).

### Jak tworzyć talking head?
- Twarz w ciasnym kadrze, mowa od razu, teza zamiast powitania, zmiany planu co 1,5–3 s (A: Google ABCD; TikTok).
- Talent z realnym związkiem z problemem (C: case z bootcampu Motion: ta sama treść, pielęgniarka 25 s vs aktorka 9 s średniego oglądania).

### Jak tworzyć reklamy problem–rozwiązanie, oparte na dowodzie, demonstracyjne, storytelling?
- Problem–rozwiązanie: problem zawsze z rozwiązaniem i łatwym krokiem (B); szablon 15 s i 25–35 s.
- Dowód: prawdziwe liczby, oceny, historie klientów, uprawnienia (B/A).
- Demonstracja: produkt lub usługa w działaniu od pierwszych sekund (A: Meta, Google).
- Storytelling: transport narracyjny wzmacnia postawy i intencje (B: van Laer i in. 2014, 132 efekty z 76 artykułów); historia prawdziwa, bohater podobny do odbiorcy, rozwiązanie przed połową filmu.

### Jak tworzyć statyczne reklamy lead generation?
- Jeden komunikat, konkret, co najmniej 2 z 4 filtrów kwalifikacji (dla kogo, gdzie, ile, co dalej) (A kierunek, C reguła).
- 14 przepisów układu (nagłówek, konkrety, natywne zdjęcie, opinia, liczba, porównanie, przed i po, proces, twarz marki, notatka, pytanie i odpowiedź, cena, produkt, lista) (C).
- Nagłówek pod grafiką nigdy pusty ani etykieta (C: 50–70% polskich reklam medycznych i estetycznych marnuje to pole).

### Jak budować zestaw kreacji przy różnych budżetach?
- Liczba reklam naraz zależy od wolumenu zdarzeń (A: faza uczenia, zalecenie mniejszej liczby reklam). Tabela systemu: od 2–3 reklam przy 1500 zł do 6–10 przy 50 000 zł miesięcznie (C/D, do kalibracji).
- Nowe reklamy partiami, bo każda resetuje uczenie (A). Przy małym budżecie testuje się duże różnice (B).

### Jak oceniać zmęczenie kreacji?
- Statusy Meta: „Creative limited” i „Creative fatigue” (koszt wyniku ≥ 2× wcześniejszych reklam) (A).
- Odróżnienie od nasycenia grupy (spada odsetek pierwszych wyświetleń) i zmiany aukcji (skok konkurencji > 20%) (A).
- Reakcja: nowa reklama „materially different”, stara zostaje, dopóki nowa nie przejmie (A).
- Powtórzenia: odwrócone U dla postawy, zapamiętanie rośnie do ok. 8 ekspozycji (B: Schmidt i Eisend 2015). Meta nie podaje progu frequency.

### Jak na podstawie wyników decydować o nowej kreacji?
- Najpierw higiena danych i próba, potem poziom problemu (rynek, grupa, formularz, reklama), potem lejek reklamy (A/B/C).
- Drabina iteracji: hook → wykonanie → format → segment → nowy kąt → oferta lub formularz (C, zgodne z A).
- Progi: werdykt CPL od ok. 10 leadów; wyłączenie z 0 leadów po ok. 3× docelowego CPL (ryzyko błędu ok. 5%); zwycięzca z ok. 90% pewności przy drogich decyzjach (B, obliczenia).

### Jak Meta interpretuje treść reklamy i komu ją pokazuje?
- Oficjalnie: aukcja łączy stawkę, przewidywane akcje i jakość; system pokazuje reklamę tej osobie, u której przewiduje najniższy koszt wyniku (A).
- Meta mówi o dywersyfikacji kreacji jako głównej dźwigni docierania do właściwych odbiorców i o modelach rozumiejących treść reklam (A pośrednio, 2025–2026).
- Mechanizm „algorytm czyta obraz i przypisuje personę” nie jest opisany przez Meta (C/D). Praktyczny wniosek: kreacja powinna sama wskazywać, dla kogo jest.

---

## 4. Andromeda: co wiadomo, a czego nie

**Wiadomo (A, źródła pierwotne Meta, część znana ze streszczeń):**
- Andromeda (blog inżynierski Meta, 2.12.2024) to silnik wyboru kandydatów (retrieval): z dziesiątek milionów reklam wybiera kilka tysięcy do rankingu, w milisekundach.
- Meta raportowała +6% recall, +8% jakości reklam w testowanych segmentach, 10 000× większą złożoność modeli retrieval. To metryki wewnętrzne, nie CPL reklamodawcy.
- Powód budowy: liczba aktywnych wariantów reklam (Advantage+, generatywne AI) „w miliardach”.
- W 2025 Meta połączyła retrieval i wczesny ranking w Andromedzie (+14% jakości reklam na Facebooku wg earnings Q3 2025) i rozszerzyła ją na Facebook Reels.
- O zwycięzcy decyduje ranking (GEM, model ogłoszony 11.2025) i aukcja. Lattice konsoliduje modele.
- W Meta Business Help Center nie ma artykułu o Andromedzie. Dla reklamodawców Meta mówi o dywersyfikacji kreacji, podobieństwie kreacji, zmęczeniu i wolumenie reklam.

**Nie wiadomo:**
- jak retrieval traktuje wiele podobnych reklam jednego reklamodawcy,
- jaką miarą liczone jest podobieństwo i czy liczy się tekst,
- optymalna liczba reklam w zestawie,
- jak nowa reklama dostaje budżet na start,
- czy Andromeda działa tak samo we wszystkich celach i krajach (w tym formularze i Polska),
- co liczby Meta znaczą dla pojedynczego konta.

**Mity (D):** „Entity ID” jako publiczny mechanizm; progi podobieństwa 60/40/70%; „potrzebujesz 10–50 kreacji”; „Andromeda to update z 2025, który zmienił wyniki”; „Andromeda wybiera zwycięzcę aukcji”. Objaw „z 28 reklam wydają 3” tłumaczą udokumentowane mechanizmy: predykcyjny rozdział budżetu i to, że do aukcji wchodzi tylko jedna reklama reklamodawcy (A).

---

## 5. Specyfika polska

**Język (A/B/C):** zapis CLDR („12 500 zł”, „2500 zł”, „20%”, „„…””); formy neutralne płciowo (tryb rozkazujący, czas teraźniejszy); „Ty” domyślnie, „Państwo” w prawie, medycynie, finansach premium; polski slop to język urzędowy, kalki z angielskiego, puste przymiotniki; polski tekst dłuższy od angielskiego o ok. 14% w zdaniach i ok. 28% w krótkich etykietach (pomiar własny na 3777 parach tłumaczeń). Jasnopis (SWPS) i Pracownia Prostej Polszczyzny (UWr) to różne ośrodki; zasady prostego języka zbieżne z ISO 24495-1.

**Prawo (A, przegląd, nie porada):** UoPNPR art. 5 i 7 (fałszywa pilność, „gratis”, certyfikaty, opinie, twórcy udający klientów, prawa ustawowe jako wyróżnik); ustawa o informowaniu o cenach (najniższa cena z 30 dni); UZNK art. 16 (reklama porównawcza); kredyt konsumencki (RRSO, reprezentatywny przykład); ustawa o działalności leczniczej art. 14 (także fizjoterapeuci od 31.10.2019: tylko informowanie); nowy Kodeks Etyki Lekarskiej od 1.01.2025 dopuszcza informowanie; ustawa o wyrobach medycznych (ostrzeżenie, zakaz personelu medycznego prezentującego wyrób); KERP art. 31 i ZZEA § 23 (prawnicy); RODO i zgody marketingowe; AI Act art. 50 od 2.08.2026. Status 09.2026: CCD2 niewdrożona w Polsce (projekt wycofany 22.05.2026), dyrektywa 2024/825 (twierdzenia ekologiczne) stosowana od 27.09.2026, polski projekt UC111 w toku.

**Meta w Polsce (A):** Special Ad Category obowiązkowa dla nieruchomości, pracy i kredytu; reklamy o kwestiach społecznych i polityce zakazane w UE; część funkcji kampanii na wiadomości niedostępna w Europie; generator tekstów Meta nie obsługuje polskiego; automatyczne napisy tylko po angielsku.

**Rynek (B–D):** Facebook ok. 25 mln kont reklamowych (NapoleonCat, 12.2025) i ok. 24,9 mln realnych użytkowników (Gemius/PBI 2024), różne metodologie. Brak wiarygodnych benchmarków CPL w Polsce (tylko blogi bez metodologii).

**Biblioteka Reklam PL (C/D, ok. 1770 reklam):** puste lub domyślne nagłówki (50–70% w medycynie i estetyce), etykiety zamiast hooków, przymiotniki bez dowodu, fałszywa pilność („Dziś zapisało się N osób” u 5 firm ze stałą liczbą), przejedzone „bezpłatna analiza” i „odzyskaj pieniądze”. Agencje lead gen masowo mówią „klienci, nie leady”, więc to już nie wyróżnik. Najlepsi reklamodawcy testują różne kąty, słabsi kopiują ten sam nagłówek 5–20 razy.

---

## 6. Mity i sprostowania

| Popularne twierdzenie | Stan |
|---|---|
| „85% ogląda wideo bez dźwięku” | Dane wydawców z 2016 r.; Meta: Reels ok. 80% z dźwiękiem. Projektuj pod oba tryby. |
| „Masz 1,7 sekundy” jako próg | To średni czas na dowolną treść w feedzie (2016), nie próg skuteczności. |
| „47% wartości w 3 s = krótko wystarczy” | Efekt wolumenu i metryki marki; na osobę dłuższe oglądanie daje więcej. |
| „Reguła 20% tekstu” | Zniesiona w 2020; zostaje sens percepcyjny. |
| „Straty ważą 2× więcej” | Średnio ok. 2, ale silnie kontekstowe; ramka straty nie jest z definicji lepsza. |
| „Otwarta pętla zapada w pamięć (Zeigarnik)” | Nie replikuje się. |
| „Jedna twarz przekonuje bardziej niż statystyka” | Efekt identyfikowalnej ofiary słaby w replikacjach. |
| „Konkretny język brzmi prawdziwiej” | Efekt bardzo mały w replikacji. |
| „Ceny kończące się na 9 sprzedają” | Brak wpływu na intencję zakupu w badaniu prerejestrowanym. |
| „Entity ID / progi podobieństwa / 10–50 kreacji” | Brak potwierdzenia Meta. |
| „Zmiana budżetu o 20% resetuje uczenie” | Uproszczenie; Meta mówi o skali zmiany. |
| „Frequency powyżej 3 = wyłącz” | Meta nie podaje progu. |
| „UGC zawsze wygrywa” | Meta: telefon lepszy dla zapamiętania i intencji, studio dla świadomości marki. |
| „Polskie znaki psują generatory obrazów” | Problem w dużej mierze rozwiązany w topowych modelach 2026 (C), ale długie napisy nadal ryzykowne. |
| „78% kupuje od pierwszej firmy, która odpowie” | Brak źródła. |
| „Uwaga krótsza niż złotej rybki” | Obalone. |

---

## 7. Luki i rzeczy do ręcznej weryfikacji

1. Pełne teksty: blog Meta o Andromedzie, blog o GEM, artykuł „Demystifying Creative Diversification”, transkrypcje earnings calls (znane ze streszczeń).
2. Wielkość efektu „cena w reklamie → jakość leadów” w usługach (brak badań; do testu A/B z metryką CPQL).
3. Optymalna długość wideo dla formularzy w polskich usługach (do testu).
4. Czy grafiki z zewnętrznych generatorów dostają automatyczną etykietę „AI info” w zwykłych reklamach.
5. Aktualne brzmienie polskich przepisów wdrażających CCD2 i dyrektywę 2024/825, gdy zostaną uchwalone.
6. Zakres ustawy o wyrobach medycznych dla reklam zabiegów (sporny).
7. Polskie dane rynkowe (CPL, CTR) z metodologią: najlepszym źródłem będą własne dane KWIATEKmedia i narzędzie porównawcze Meta.
8. Kalibracja heurystyk systemu (liczba reklam wg budżetu, detektor zmęczenia) na danych kont klientów.

---

## 8. Gdzie wnioski trafiły w systemie

| Wniosek | Plik systemu |
|---|---|
| Zasady ogólne | `PRINCIPLES.md`, `shared/zasady-kwiatekmedia.md` |
| Aukcja, uczenie, zmęczenie, Andromeda | `shared/wiedza-meta.md` |
| Uwaga, tekst, grafika, prompty | `shared/grafika-i-prompty.md` |
| Specyfikacje i formularze | `shared/specyfikacje-meta.md` |
| Zaufanie, dowód, liczby, CTA | `shared/dowody-i-zaufanie.md` |
| Kąty, DNA, różnorodność, świadomość | `shared/katy-i-roznorodnosc.md` |
| Hooki | `shared/hooki.md` |
| Formaty | `shared/formaty.md` |
| Lead gen, oferta, formularz | `shared/lead-gen-jakosc.md` |
| Język polski i anty-slop | `shared/jezyk-pl-anty-slop.md` |
| Polityki i prawo | `shared/zgodnosc.md` |
| Metryki, próby, iteracje | `shared/metryki-i-decyzje.md` |
| Wideo | `skills/video-ad-script/references/szablony-wideo.md` |
