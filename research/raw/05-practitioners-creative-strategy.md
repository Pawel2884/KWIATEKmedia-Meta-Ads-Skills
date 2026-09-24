# 05 — Praktycy: strategia kreacji, dywersyfikacja po Andromedzie, taksonomia formatów, testowanie (research surowy)

> Agent researchowy: obszar 05. Data: 2026-09-24. Status: W TOKU (zapis przyrostowy).
> Legenda trybu dostępu: [PEŁNY] = pełna treść przeczytana w sesji; [WYSZUKIWARKA] = tylko streszczenie/fragment z WebSearch; [WIEDZA] = wiedza modelu niepotwierdzona w sesji.
> Poziomy dowodu: A = źródło pierwotne (Meta); B = badania / duże zbiory danych z jawną metodą; C = mocna obserwacja praktyków z przykładami; D = hipoteza/opinia.

## 1. Zakres i metoda
(uzupełniane na końcu)

## 2. Kluczowe ustalenia
(uzupełniane przyrostowo)

### 2.1 Wolumen kreacji a liczba "winnerów" — Motion Creative Benchmarks 2026
**Teza:** Konta, które wypuszczają więcej kreacji, znajdują więcej reklam, na które Meta alokuje budżet ("winnerów"), przy podobnym budżecie; tylko ~4–9% kreacji staje się winnerami.
**Poziom:** B (duży zbiór, jawna definicja) — ALE z ważnym zastrzeżeniem metodycznym: "winner" = kreacja, która wydała ≥10× medianę wydatku kreacji w koncie i ≥500 USD. To miara *alokacji budżetu przez Meta*, nie rentowności/CPL/jakości leada. Korelacja wolumen↔winnerzy nie dowodzi przyczynowości (większe zespoły, lepsze procesy).
**Kto/źródła:**
- [WYSZUKIWARKA] Motion — Creative Benchmarks 2026 — https://motionapp.com/library/research/creative-benchmarks-2026/
- [WYSZUKIWARKA] Motion — Methodology and definitions — https://motionapp.com/library/research/creative-benchmarks-2026/methodology
- [WYSZUKIWARKA] Motion — Weekly creative testing volume by industry vertical and spend tier — https://motionapp.com/library/research/creative-benchmarks-2026/testing-by-vertical
- [WYSZUKIWARKA] Foxwell Digital — Motion Creative Benchmarks 2026: 8 Key Takeaways — https://www.foxwelldigital.com/blog/motion-creative-benchmarks-2026-8-key-takeaways
- [WYSZUKIWARKA] Sepia — Motion's Creative Benchmarks 2026: Ad Volume by Spend Tier — https://sepia-lab.com/en/blog/ad-creative-volume-benchmarks
**Dane:** 6 015 kont, 578 750 kreacji, 1,29 mld USD wydatku Meta, okno 1.09.2025–1.01.2026 (obejmuje BFCM — sezonowe zniekształcenie). Hit rate: ~4% (najmniejsze konta) → ~8–9% (enterprise); ~50–53% kreacji "przegrywa", 38–46% "środek". Średni tygodniowy wolumen nowych kreacji: 2,80 (<10k USD/mies.) → 18,85 (>1M USD). Tier "Large": średnio 11,24 reklamy/tydz. → 1,75 winnera/mies.; top-performerzy ~31/tydz. → 5,99 winnera/mies. Udział wydatku skoncentrowany na winnerach: 23% (Micro) → 64% (Enterprise). Wertykale o niższym wolumenie na poziomie Enterprise: Automotive, Finance, Travel, **Professional Services: ~10–16 kreacji/tydz.** Foxwell: "There's no universal testing volume that's 'best' for all advertisers."
**Implikacja dla systemu:** System powinien planować *pipeline* kreacji (stały rytm nowych konceptów) skalowany do budżetu klienta; dla typowego polskiego klienta lead-gen (budżet z tieru Micro/Small) realistyczne jest ~2–5 nowych kreacji tygodniowo, a nie 30. Nie wolno przenosić liczby "winnerów" Motion jako miary sukcesu w lead-gen — w lead-gen winner = niski koszt *kwalifikowanego* leada (CPQL), a nie wysoki udział w wydatku.

### 2.2 Formaty (asset type) — tekst-first i UGC dają najwięcej winnerów na jednostkę produkcji
**Teza:** Reklamy "text-only" i "product image + text" mają najwyższy hit rate; high-production jest w środku stawki.
**Poziom:** B (Motion, duży zbiór; tagowanie własne Motion — metoda tagowania nie w pełni jawna w streszczeniu; zdominowane przez e-commerce/DTC).
**Kto/źródła:** [WYSZUKIWARKA] Motion — Top asset types on Meta in 2026 — https://motionapp.com/library/research/creative-benchmarks-2026/top-asset-types
**Dane:** hit rate: text-only 11,60%; product image + text 8,75%; lifestyle-product image 7,59%; UGC 7,56%; high production niżej (zakres ogółem ~4–12%). Interpretacja Motion: "text-forward and UGC assets produce more winners per unit of creative output because they can be iterated faster and more cheaply."
**Implikacja:** Dla lead-gen/usług: statyka z mocnym nagłówkiem (tekst jako główny nośnik obietnicy) to najtańszy sposób testowania *kątów* przed inwestycją w wideo. System powinien domyślnie proponować "text-forward static" jako format testu kąta.

### 2.3 Formaty wizualne — ranking hit rate (Motion 2026)
**Teza:** Najwyższy hit rate mają formaty: Offer-First Banner, Demo, Testimonial, Headline, Montage, Before & After, Listicle, Split Screen, Us vs Them, Unboxing; dalej Feature/Benefit Point, Cinematic B-Roll, Grid Swap, Screen Recording, Problem Agitation, Review, How-To, POV, Behind the Scene, Founder, Statistic, Influencer Endorsement, Collage, Static-to-Video Hybrid, Expert Explained (rozrzut tylko ~5–10%).
**Poziom:** B (ale małe różnice między formatami — ranking nie jest silnym sygnałem; zależy od wertykalu).
**Kto/źródła:** [WYSZUKIWARKA] Motion — Top visual formats on Meta in 2026 — https://motionapp.com/library/research/creative-benchmarks-2026/top-visual-formats ; [WYSZUKIWARKA] Motion — Visual formats by vertical — https://motionapp.com/library/research/creative-benchmarks-2026/visual-formats-by-vertical ; [WYSZUKIWARKA] Motion — Visual Ad Formats library — https://motionapp.com/library/formats/
**Dane (wertykale "credibility-forward": finanse, usługi profesjonalne):** top wg hit rate: Stitch, Reaction video, Unboxing, Celebrity, Founder, Letter, Stop motion, Influencer endorsement, POV, Transformation; top wg "spend use ratio" (udział w wydatku / udział w użyciu): Social post mockup, Letter, Celebrity, Case study, Offer-first banner, Behind the scene, UGC overlay, Founder, Transformation, Billboard.
**Implikacja:** Dla usług/lead-gen szczególnie warte testu: "Letter" (list od właściciela), "Founder", "Case study", "Social post mockup" (screenshot posta), "Offer-first banner", "Behind the scene", "Transformation". Różnice w hit rate między formatami są niewielkie → format jest osią dywersyfikacji, a nie "magicznym" wyborem.

### 2.4 Meta (A): "za dużo reklam może pogorszyć wyniki" + "mniej reklam, ale zróżnicowane assety"
**Teza:** Meta oficjalnie zaleca ograniczanie liczby aktywnych reklam przy utrzymaniu *różnorodności assetów* w reklamie/zestawie; nowa kreacja przy zmęczeniu ma być "materially different".
**Poziom:** A (Meta Business Help Center, pełny tekst przez Meta Ads MCP).
**Kto/źródła:**
- [PEŁNY] Meta — About managing ad volume — https://www.facebook.com/business/help/2720085414702598
- [PEŁNY] Meta — About creative fatigue recommendations in Meta Ads Manager — https://www.facebook.com/business/help/1346816142327858
- [PEŁNY] Meta — About the flexible ad format — https://www.facebook.com/business/help/835561738423867 ; About flexible media — https://www.facebook.com/business/help/1126725172362626
**Cytaty:**
- "when an advertiser runs too many ads at once, each ad delivers less often. this means that fewer ads exit the learning phase, and more budget is spent before the delivery system can optimize performance. in other words, too many ads can result in worse performance."
- "decrease ads per ad set, but maintain diverse creative assets per ad set. one ad can contain multiple (up to 10) creative assets."
- "if testing multiple text variants, use multiple text optimization. one ad with multiple text optimization is usually more effective than multiple ads without multiple text optimization"
- Creative fatigue: status "creative limited" gdy koszt wyniku > wcześniejsze reklamy ale < 2×; "creative fatigue" gdy ≥ 2×. "we consider all recent exposures of the ad's image or video, including those from other campaigns from your page." Rekomendacja: "create a new ad with a new image or video that is **materially different** from the original creative. note: keeping your original ad active instead of pausing or turning it off may maximize results."
- Flexible ad format: do 10 obrazów/wideo w jednej reklamie; wg artykułu dostępny przy celach traffic, engagement, sales, app promotion (w tym tekście **nie wymieniono celu Leads**). Flexible media dla Leads: "all conversion locations except website and instant forms, and website and calls".
**Implikacja:** Meta *sama* stoi po stronie "mniej reklam, więcej realnej różnorodności". Zmęczenie liczone jest po *obrazie/wideo* (także z innych kampanii strony) — więc zmiana samego tekstu nie resetuje zmęczenia. System: przy zmęczeniu → nowy materiał wizualny "materially different", nie podmiana nagłówka. Dla lead-gen na formularzach sprawdzać dostępność flexible/Advantage+ creative (część funkcji niedostępna dla Instant Forms) — temat dla agenta 02.

### 2.5 "Entity ID" / grupowanie podobnych reklam — popularna teza praktyków, słabo udokumentowana źródłowo
**Teza (praktyków):** Andromeda grupuje wizualnie/semantycznie podobne reklamy w jeden "Entity ID"; 50 wariantów tego samego pomysłu = 1 "los" w aukcji. Heurystyka adsuploader/Webtopia: nowa kreacja musi różnić się w co najmniej 2 z 3: przekaz / egzekucja wizualna / format.
**Poziom:** C/D. Mechanizm grupowania jest spójny z ogólnym kierunkiem Meta (A: "materially different", "diverse creative assets"), ALE termin "Entity ID" i progi liczbowe (np. "similarity score >60% = supresja", "<40% indeks" wg 303 London) pochodzą z blogów/SEO i nie znalazłem ich w źródłach Meta. Jon Loomer ostrzega przed dezinformacją o Andromedzie: Andromeda to *tylko* etap retrievalu ("Andromeda is simply ad retrieval and nothing more").
**Kto/źródła:**
- [WYSZUKIWARKA] adsuploader — Meta Andromeda Explained: Entity IDs vs Creative Volume — https://adsuploader.com/blog/meta-andromeda (cytat: "If you have 50 ads but they are all clustered into 1 Entity ID, you only have one ticket to the Stage 2 auction.")
- [WYSZUKIWARKA] Webtopia — Entity IDs, Andromeda and the New Era of Creative Led Targeting on Meta — https://www.webtopia.co/blog/entity-ids-andromeda-and-the-new-era-of-creative-led-targeting-on-meta
- [WYSZUKIWARKA] Atria — Andromeda Meta Ads: The Creative Strategy Guide for 2026 — https://www.tryatria.com/blog/andromeda-meta-ads
- [WYSZUKIWARKA] Recharm — Meta's Andromeda Needs Creative Diversity — https://www.recharm.com/blog/what-is-andromeda-and-creative-similarity
- [WYSZUKIWARKA] Segwise — Meta Andromeda Update 2026: Creative Strategy Playbook — https://segwise.ai/blog/meta-andromeda-update-creative-strategy-2026 (progi 60%/40% — traktować jako niezweryfikowane)
- [WYSZUKIWARKA] admetrics — Meta Creative Fatigue and Similarity Score: Complete Guide — https://www.admetrics.io/en/post/meta-creative-fatigue-and-similarity-score-complete-guide ; LinkedIn Erin Corn — "Meta is rolling out 3 new metrics" (Creative Fatigue, Creative Similarity, Top Creative Themes) — https://www.linkedin.com/posts/erin-corn_meta-is-rolling-out-3-new-metrics-and-we-activity-7389014944371019777-Gzz9 (C — relacja praktyka o nowych metrykach w Ads Manager, jesień 2025; nie potwierdziłem w Help Center)
- [WYSZUKIWARKA] Jon Loomer — The Truth About Meta Andromeda and Ad Retrieval — https://www.jonloomer.com/meta-andromeda-ad-retrieval/ ; Avoid Meta Andromeda Misinformation — https://www.jonloomer.com/qvt/meta-andromeda-misinformation/
**Implikacja:** System może używać heurystyki "2 z 3 osi" jako praktycznej reguły odróżniania konceptu od wariantu (C), ale nie powinien obiecywać klientowi mechaniki "Entity ID" ani progów procentowych jako faktu Meta. Język w systemie: "Meta traktuje bardzo podobne reklamy jako mało wnoszące (A: 'materially different'); praktycy opisują to jako grupowanie w 'Entity ID' (C/D)".

### 2.6 Jon Loomer: czym jest (i nie jest) dywersyfikacja kreacji
**Teza:** Dywersyfikacja ≠ "więcej reklam". To wyraźne różnice wizualne, różne formaty (statyka, wideo, karuzela), wyraźnie różne teksty, budowanie reklam dla *różnych ludzi i kontekstów*; mikrotesty (kolor, przycisk CTA, jedno słowo) "no longer good enough". Jakość nadal krytyczna.
**Poziom:** C (bardzo doświadczony praktyk/edukator; spójny z A).
**Kto/źródła:** [WYSZUKIWARKA] Jon Loomer — What Creative Diversification Actually Means — https://www.jonloomer.com/qvt/creative-diversification/ ; Meta Andromeda and Creative Diversification: 7 Examples Explained — https://www.jonloomer.com/meta-andromeda-creative-diversification/ ; 3. What is Creative Diversification? — https://www.jonloomer.com/andromeda-3/ ; podcast "Creative Diversification Is the New Targeting" — https://pubcast.jonloomer.com/creative-diversification-is-the-new-targeting/ ; TikTok "How many ads is too many? Until recently, Meta suggested no more than six ads in an ad set. But due to Andromeda, the old rule book is out the window." — https://www.tiktok.com/@jonloomer/video/7545893351409683742 ; Creative Fatigue: What It Is and How to Prevent It — https://www.jonloomer.com/creative-fatigue-meta-ads/
**Dane/cytat (ze streszczeń):** "Creative diversification means building ads for different people and contexts, not just different versions of the same idea." "testing the smallest changes like CTA buttons, a single word, or a color is no longer good enough." Loomer: dwa bardzo podobne obrazy "are unlikely to make a meaningful impact"; zmęczenie kreacji "rarely the true problem today unless you've restricted your audience or limited variations" (streszczenie wyszukiwarki).
**Implikacja:** Zmiana koloru/zdjęcia w tym samym układzie/nagłówka = wariant (iteracja), nie nowa kreacja. System musi to egzekwować (patrz §6).

### 2.7 Oficjalny komunikat Meta o dywersyfikacji (Andromeda)
**Teza:** Meta wiąże Andromedę z potrzebą "meaningful variety" kreacji; im bardziej różnorodny zestaw, tym więcej okazji dopasowania komunikatu do osoby.
**Poziom:** A (komunikat Meta), ale treść znana tylko ze streszczeń.
**Kto/źródła:** [WYSZUKIWARKA] Meta for Business — The Creative Advantage: Unlocking the Power of Diversification with Meta Andromeda — https://www.facebook.com/business/news/the-creative-advantage-unlocking-the-power-of-diversification-with-meta-andromeda
**Dane (streszczenie):** kreatywna dywersyfikacja = "giving the ad system more creative options to choose from—different visuals, copy, formats, calls to action"; "the more meaningful variety provided the more opportunities Andromeda has to connect the right message with the right person". UWAGA: liczby krążące przy tym temacie ("20+ nowych reklam/mies. = +65% ROAS", "fatigue po 2–3 tyg. zamiast 6+") pojawiają się na blogach bez źródła pierwotnego → D, nie używać jako faktów.
**Implikacja:** Oś "różne osoby/konteksty/komunikaty" ma oparcie w A; konkretne liczby wolumenu — już nie.

### 2.8 Barry Hott — "Make Ugly Ads" / natywność
**Teza:** Reklama wygrywa, gdy nie wygląda jak reklama w pierwszej klatce; "native" ≠ UGC — to styl treści, który ma ogromny zasięg organiczny w danej grupie (np. nagrania z kamerki samochodowej, klipy newsowe, podcasty, monitoring, tutoriale). "Brzydka" reklama nadal potrzebuje mocnego konceptu, hooka, struktury i przekazu sprzedażowego.
**Poziom:** C (duże doświadczenie — "nearly $1B in Meta ads since 2008"; przykłady anegdotyczne, np. Lone Ranch Water: ~10 reklam, lepsze były mniej dopracowane, ~30% wzrost "action intent" — metoda niejawna).
**Kto/źródła:** [WYSZUKIWARKA] Hott Growth — Ugly ads don't mean bad ads: Try these expert tips for high-intent ads — https://www.hottgrowth.com/post/ugly-ads-dont-mean-bad-ads-try-these-expert-tips-for-high-intent-ads ; [WYSZUKIWARKA] Motion Library — Barry Hott — https://motionapp.com/library/expert/barry-hott/ ; [WYSZUKIWARKA] Motion — How to Make AI Native Ads Look Human (Barry Hott Method) — https://motionapp.com/library/talk/how-to-make-ai-native-ads-look-human-barry-hott-method/ ; [WYSZUKIWARKA] Andrew Faris Podcast — Ugly Ads Work. Trust Barry Hott (And Me). — https://podcasts.apple.com/ca/podcast/ugly-ads-work-trust-barry-hott-and-me/id1646694096?i=1000648058000 ; [WYSZUKIWARKA] Practical Ecommerce — https://www.practicalecommerce.com/ugly-ads-perform-best-marketer-says
**Cytaty/obserwacje:** "Heavy branding immediately in the first frame of the ad is a dead giveaway, including a logo, customized fonts, and strong brand colors" (streszczenie hashtagpaid/hottgrowth). Studiuj to, co ma "broad, broad views" (nie Vogue, nie reklamy konkurencji) i kopiuj *format*; "what looks native today will feel stale in six months."
**Implikacja:** System powinien mieć oś "styl natywny" z listą formatów organicznych (screenshot posta, notatka, nagranie telefonem, klip "z podcastu", wiadomość) i regułę: logo/kolory marki NIE dominują w pierwszej klatce/na pierwszy rzut oka. Uwaga (spór z agentem 03): badania "ad gist" pokazują, że ludzie rozpoznają reklamę w <100 ms — natywność działa tylko, gdy jest wiarygodna.

### 2.9 Dara Denney — iteracje "płacą rachunki", "big swings" dają skok
**Teza:** Iteracje zwycięzców są konieczne, ale nie da się "wyiterować" do wielkiej reklamy; trzeba regularnie wprowadzać zupełnie nowe pomysły ("big swings"). Ostrzeżenie: nadmierne podążanie za "learningami" z danych prowadzi do tego, że wszystkie kreacje wyglądają tak samo.
**Poziom:** C/D (opinia uznanej praktyczki; brak danych ilościowych w źródłach).
**Kto/źródła:** [WYSZUKIWARKA] Motion Library — Dara Denney — https://motionapp.com/library/expert/dara-denney/ ; [WYSZUKIWARKA] LinkedIn — The 10 Best Iterations to Scale Meta Ads Creative — https://www.linkedin.com/posts/daradenney_the-10-best-iterations-to-scale-meta-ads-activity-7265401447251337216-nZPY ; [WYSZUKIWARKA] X — https://x.com/DenneyDara/status/1905619697699037269 ; LinkedIn — Meta Ads Creative Hack: Make Ugly Ads With Barry Hott — https://www.linkedin.com/posts/daradenney_meta-ads-creative-hack-make-ugly-ads-with-activity-7142923930847100928-Nrbc
**Implikacja:** Portfel kreacji powinien mieć stały udział "big swings" (nowe koncepty spoza dotychczasowych learningów), nie tylko iteracje.

### 2.10 P.D.A. (Persona–Desire–Awareness/Angle) — Pilothouse i inni
**Teza:** Systematyczne kombinacje persona × pragnienie × poziom świadomości (lub kąt) generują koncepty zajmujące różne "klastry" w systemie retrievalu.
**Poziom:** C/D (framework ideacyjny; liczby typu "30% r/r wzrost CTR" i "+22% ROAS z Advantage+ creative" podawane bez metody → D).
**Kto/źródła:** [WYSZUKIWARKA] Pilothouse — The P.D.A. Framework Deep Dive: How to Generate Conceptual Diversity That Andromeda Actually Rewards — https://www.pilothouse.co/post/the-p-d-a-framework-deep-dive-how-to-generate-conceptual-diversity-that-andromeda-actually-rewards ; [WYSZUKIWARKA] Pilothouse — Meta Creative Testing Framework: The 3-3-3 Approach to Finding Winners — https://www.pilothouse.co/post/meta-creative-testing-framework-the-3-3-3-approach-to-finding-winners ; [WYSZUKIWARKA] Envisionit — Meta's Andromeda is Changing Advertising Forever — https://envisionitagency.com/blog/why-metas-andromeda-update-has-us-completely-rethinking-creative-testing/ ; [WYSZUKIWARKA] Medium (Y. Varghese) — How to Plan Creative Angles That Win After Meta's Andromeda Update — https://medium.com/@yeldhov1993/how-to-plan-creative-angles-that-win-after-metas-andromeda-update-9a43746fa43b
**Dane:** Dwa warianty nazewnictwa: (1) Persona / Desire / **Awareness** (problem-/solution-/product-aware); (2) Pilothouse: Persona / Desire / **Angle** ("communication approach, creative tone, or narrative structure"). Przykład kombinatoryki: 5 person × 4 pragnienia × 6 kątów = 120 możliwych konceptów; z tego 8–12 konceptualnie różnych do testu. "Most high-performing accounts now run 8-20 conceptually distinct creatives per ad set"; odświeżanie co 1–3 tyg. (C/D — deklaracja agencji).
**Implikacja:** To dobry szkielet generatora pomysłów w systemie, ale trzeba dodać osie, których P.D.A. nie ma: mechanizm/dowód/obietnica/format/hook/styl wizualny (patrz §3).

## 3. Frameworki

## 4. Taksonomia formatów

## 5. Spory i mity

## 6. Reguły do systemu

## 7. Lista źródeł
