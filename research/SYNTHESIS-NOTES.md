# Notatki syntezy (robocze, dla ciągłości pracy)

## Z 01 (delivery/Andromeda) — kluczowe do systemu
- A: aukcja = bid + estimated action rates + ad quality (bez wzoru). Clickbait/withholding info/sensational/engagement bait obniżają ad quality; powtarzane słabe reklamy obniżają konkurencyjność strony/domeny.
- A: relevance diagnostics nie są wejściem do aukcji; od 500 wyśw.; produkty wymagające namysłu mają niższy CR ranking (ok).
- A: learning ~50 wyników/tydz.; dodanie reklamy i każda zmiana kreacji = istotna edycja (reset). Ocena min. pełny tydzień. "20% budżetu" to nie Meta.
- A: nierówny podział budżetu celowy (predykcje); reklama bez wydatków ≠ przetestowana; do równego testu A/B test. Oceniać na poziomie zestawu (breakdown effect).
- A: auction overlap — do aukcji wchodzi 1 reklama reklamodawcy (tłumaczy "z 28 reklam wydają 3" bez Entity ID).
- A: statusy Creative limited (<2× CPR historyczny) / Creative fatigue (≥2×); zmęczenie liczone per obraz/wideo, także w innych kampaniach strony. Zalecenie: nowy obraz/wideo "materially different", starą zostaw jeśli dowozi; wyłącz te bez wyników.
- A: creative similarity w Account Insights: obrazy/wideo "too visually identical" → zmęczenie, wyższy CPR; tylko statyczne, 28 dni; bez progów.
- A: managing ad volume: za dużo reklam = gorzej; mniej reklam, więcej różnorodnych zasobów w reklamie (do 10). Limity: 50 reklam/zestaw, 250/strona (<100k USD).
- A(pośr.): Andromeda = retrieval (dziesiątki mln → kilka tys.), ranking = GEM, Lattice = konsolidacja modeli. Help Center nie ma artykułu o Andromedzie.
- A(pośr.): Meta "Demystifying Creative Diversification": "focus has shifted from niche targeting to creative diversification as the best lever to find the most relevant audiences"; wymiary: koncepty/kąty (problem/rozwiązanie, ból, opinie, demo) + formaty.
- D: Entity ID, progi similarity 60/40/70%, "10–50 kreacji", "Andromeda = update 2025".
- A: Advantage+ leads −14% CPL (ufność >95%), −10% koszt leada kwalif. (ufność 83%, 19 testów). Advantage+ audience meta-analiza 469 testów. Placements −11,7% CPA.
- A: Flexible format: do 10 mediów, nie wymienia leads. Dynamic creative działa w leads (wyniki zagregowane). Multi-text: teksty mieszane między polami, raport łączny → każdy wariant samodzielny i spójny. Generator tekstów Meta nie obsługuje PL.
- A: Advantage+ creative enhancements mogą zmieniać tekst/obraz (overlays, enhance media text GenAI) → checklista wyłączeń przed publikacją.
- A: od IV 2026 optymalizacja pod qualified leads wymaga CAPI (nowe kampanie); CAPI for CRM −21% koszt leada jakościowego (567 reklamodawców). Higher intent form: ekran przeglądu, tylko FB/IG Feed mobile.
- A: A/B test min. 7 dni, jedna zmienna; nie testować włączaniem/wyłączaniem.
- Reguły R1–R18 w pliku 01 sekcja 4 (użyć w PRINCIPLES).
- Performance 5 (Blueprint, A pośr.): uproszczenie, automatyzacja, dywersyfikacja kreacji, CAPI, walidacja (lift).

## Z 03 (uwaga/mobile/wizual) — kluczowe
- B: Pieters/Wedel/Batra 2010: feature complexity (szum: detale, kolory, faktury) szkodzi uwadze na markę i postawie; design complexity (ciekawa kompozycja) pomaga. → zero ozdobników, ale kompozycja może być ciekawa.
- B: Pieters & Wedel 2004: obraz łapie uwagę niezależnie od rozmiaru; tekst proporcjonalnie do powierzchni; marka przekazuje uwagę. → mniej słów, większa czcionka.
- B: ad gist <100 ms (Pieters & Wedel 2012); upfront ads wygrywają przy krótkiej i długiej ekspozycji; mystery przegrywa krótko; false front szkodzi po dłuższej (Elsen i in. 2016). Meta: quality below + CR below = "click-baity". → domyślnie UPFRONT.
- A: 1,7 s średnio na treść w mobile feed (FB IQ 2016) — średnia, nie próg. 47%/74% wartości <3 s/<10 s (Nielsen/FB 2015) — efekt wolumenu. Nelson-Field: 2,5 s aktywnej uwagi, 1,5 s z wyrazistymi zasobami (B/C).
- A: Meta: marka i kluczowy komunikat w 3 s; ruch/mocny obraz w 1. klatce; jeden komunikat; feed <15 s, Stories <10 s; primary text 1–3 linie; zalecane limity 125/40/25 zn.; brak limitu tekstu na obrazie (20% zniesione); "native feel"; "avoid overly photoshopped"; "single point of focus"; "crop tightly"; dla leads/sales "focus on products"; mobile shots > studio dla recall i intencji.
- A: strefy: Stories ~14% góra, ~20% dół wolne; Reels z disclaimerem dolne 40% wolne; tekst w środku kadru; 4:5 feed; 98% trzyma telefon pionowo.
- B: NN/g: czytane 20–28% słów; trudny tekst gorzej na mobile; banner blindness (natywny wygląd = więcej uwagi).
- B: spojrzenie osoby na produkt/tekst kieruje uwagę (Sajjacholapunt & Ball 2014).
- WCAG kontrast ≥4.5:1; wyprowadzenie: nagłówek ≥80 px na kanwie 1080, żaden tekst <45 px (D).
- Obalone: "85% bez dźwięku" (wydawcy 2016); Meta: Reels ~80% z dźwiękiem; napisy +12% czasu oglądania (FB); sound-off first, sound-on bonus. "Goldfish 8 s" obalone.
- B(WIEDZA): presenter's paradox, 3 claims optimum (Shu & Carlson 2014), dilution effect → max 3 wsparcia w primary, 1 na grafice.
- ELM: minimalizm dotyczy grafiki; argumenty do primary text i formularza przy drogich ofertach.
- Reguły R1–R32 w pliku 03 sekcja 4 (MUSI/POWINNO/TEST). Graphic: nagłówek 3–7 słów, ≤12 słów łącznie (flaga >15).

## Z 04 (perswazja/zaufanie/pamięć) — kluczowe
- B: wiarygodność = ekspertyza + trustworthiness; najmocniej u zimnych/sceptycznych (Pornpitakpan 2004).
- B/C: oceny 4,0–4,7 optymalne, ~5,0 podejrzane; pierwsze opinie największy skok (Spiegel 2017, obserwacyjne).
- B: przekaz dwustronny (1 ograniczenie na 3–4 twierdzenia) ↑ wiarygodność, za dużo negatywów szkodzi (Eisend); + filtruje leady.
- A/B: PKM (Friestad & Wright 1994): rozpoznany trik → dyskontowanie przekazu i gorsza ocena firmy; oznaczenie sponsorowane ↓ wiarygodność (Eisend 2020).
- B: historia + liczba najlepsze (Zebregs 2015, Freling 2020): statystyka→przekonania, narracja→intencja.
- B: ciekawość krzywoliniowa wobec konkretności (8 977 testów nagłówków, Aubin Le Quéré & Matias); nagłówki streszczające często wygrywają (Scacco & Muddiman 2020); clickbait ↓ wiarygodność (Molyneux & Coddington). → "konkret + mała luka", nigdy pusta luka; luka o problemie, który rozwiązuje oferta.
- B: loss vs gain framing ~0 różnicy (O'Keefe & Jensen); loss aversion λ≈1,96 średnio, kontekstowa → nie dogmat "strata lepsza".
- B: fear appeals d=0,29, tylko z efficacy (rozwiązanie + łatwy krok) (Tannenbaum 2015; Witte & Allen 2000).
- A: Langer 1978 "bo" pusty działa tylko przy małej prośbie → lead to duża prośba → prawdziwy powód.
- Obalone/słabe: Zeigarnik (Ghibellini & Meier 2025, ratio ≈0,99; Owsiankina — wznawianie — tak); identifiable victim (replikacja ηp²=.000); concreteness=truth (dz≈0,1); precyzyjne ceny brak wpływu na intencję (Escher 2026).
- C: Schwartz — heurystyka, brak testów; odpowiedniki CLT/ELM. Stosować jako narzędzie doboru otwarcia.
- Prawo: fałszywa pilność zakazana (UCPD zał. I pkt 7; upnpr art. 7 pkt 7 — do potwierdzenia w 07).
- Checklista zaufania 10 pytań (sekcja 4.9 pliku 04) → do CREATIVE AUDITOR.
- Reguły R1–R35 w pliku 04 sekcja 4.

## Z 02 (Meta kreacja/placementy/lead ads/polityki) — kluczowe
- A: limity zalecane: primary 125 widocznych (1–3 linie), headline 40, description 25 (lead spec: 30) — description może się nie wyświetlić → tylko treści nieistotne. IG Stories primary <100 zn. URL w stopce FB Feed brak od 03.2026.
- A: Meta miesza teksty między polami (optimize text per person, dynamic creative) → każdy tekst modułowy, bez "jak wyżej", disclaimer nie rozbity.
- A: Meta przykłady skutecznych opcji tekstu: cena, dane liczbowe, cytat opinii, pytanie, doświadczenie, cechy.
- A: dual-track audio; auto-napisy Meta TYLKO po angielsku → PL napisy wypalone albo SRT pl_PL (przypięte do wideo). 2,25× CTA CTR sound-on (korelacja).
- A: Meta (IG video BP): do 10 kreacji na zestaw, top 5 evergreen, test ≥4 dni, mieszać wideo i statyki.
- A: Advantage+ creative: text improvements (genAI, domyślnie ON), enhance media text, add overlays, enhance CTA (dopisuje "x% off"), image generation, music AI; część wyłączana tylko w advanced preview; "test new optimizations" w ustawieniach konta. → checklista OFF w branżach regulowanych.
- A: genAI Meta niedostępne dla finansów/zdrowia/HEC/SIEP; text generation tylko EN/PT/ES.
- A: "AI info" label dla genAI Meta; SIEP zakazane w UE; AI Act art. 50 od 2.08.2026 (WIEDZA).
- A: Flexible format/media nie dla Instant Forms → dywersyfikacja na poziomie reklam (3–6 konceptów).
- A: Formularze: More volume / Higher intent (tylko FB/IG Feed mobile) / Rich creative (więcej kontekstu, "potentially increase lead quality"). Intro ≤60 zn. nagłówek, punkty ≤80; Rich: nagł. ≤45, korzyści ≤57; zakończenie nagł./CTA ≤60; pytania max 15; formularza nie da się edytować po publikacji.
- A: "fewer multiple choice questions → more submissions; more multiple choice → more quality leads"; "clearly communicate why people should fill out your form"; ad scheduling gdy zespół gotowy; lookalike z klientów nie leadów.
- A: conditional logic "close form" filtruje nie-leady (↑CPL). OTP weryfikacja telefonu (może być domyślnie).
- A: zakazane pytania w formularzu: dochód, zadłużenie, upadłość, zdolność kredytowa, zdrowie, ubezpieczenia, karalność, poglądy...; kontakt tylko przez prefill.
- A: CAPI for CRM — etapy z neutralnymi nazwami; pełna optymalizacja 1–2 mies.
- A: Messaging w UE: część funkcji/metryk niedostępna → weryfikować. Call ads z harmonogramem +25,4%.
- A: Personal attributes: zakaz twierdzenia/sugerowania cech I PYTAŃ o nie (zdrowie, wiek, sytuacja finansowa, rodzina, karalność...). "Ty" OK, "Ty + cecha" nie. Przykłady Meta: "are you bankrupt? our firm has solutions" = naruszenie.
- A: Health & wellness: zakaz negatywnej autopercepcji, zbliżeń na fałdki, obietnic wyniku w czasie bez kwalifikatora; before/after tylko 18+ (kosmetyka, med. estetyczna).
- A: SAC w PL: nieruchomości, praca, kredyty → brak wieku/płci/kodów/lookalike → kreacja przejmuje targetowanie, bez dyskryminacji.
- A: sensational, profanity (także maskowane), clickbait, engagement bait, fałszywe elementy UI, celebrity-bait zakazane/karane; "improper grammar or punctuation" w checkliście Meta.
- Spec tabela i checklista zgodności: plik 02 sekcje 4.1–4.5 (użyć w specyfikacje-meta.md i zgodnosc.md). Strefy 9:16 wg najostrzejszego: góra 14%, dół 35% (40% z disclaimerem), boki 6%.

## Z 10 (format pluginu) — decyzje architektoniczne
- Repo = marketplace "kwiatekmedia" (.claude-plugin/marketplace.json, source "./plugins/kwiatekmedia-meta-ads", nie "./").
- Plugin: plugins/kwiatekmedia-meta-ads/.claude-plugin/plugin.json (name, displayName, version, description, author, repository, keywords); wersja tylko w plugin.json.
- SKILL.md frontmatter: TYLKO name + description (+license/compatibility/metadata/allowed-tools) — inne pola = błąd uploadu na claude.ai. name kebab-case = folder, ASCII, ≤64, bez "claude"/"anthropic". description ≤1024, bez <>, 3. osoba, wyzwalacze na początku, w cudzysłowie/`>` jeśli ma ": ". Body <500 linii; referencje 1 poziom; plik ref >100 linii → spis treści.
- Wiedza wspólna: shared/ w korzeniu repo (źródło prawdy) + shared/mapa.json → scripts/build.py kopiuje do skills/<skill>/references/ (kopie commitowane, nagłówek WYGENEROWANE). SKILL.md odwołuje się tylko do references/<plik>.md.
- Nie używać $ARGUMENTS, ${CLAUDE_PLUGIN_ROOT}, !-komend. Pisać: "jeśli użytkownik podał brief — użyj; jeśli nie — zapytaj".
- Master: tabela routingu + pipeline In/Out/Gate; uruchom skill narzędziem Skill (pełna nazwa kwiatekmedia-meta-ads:<skill>); fallback: przeczytaj ../<skill>/SKILL.md; fallback 2: poproś o włączenie skilla. Skille podrzędne BEZ disable-model-invocation. Wspólny kontrakt danych (karta oferty, format wyjścia).
- Po auto-kompaktowaniu skille przycinane do 5000 tokenów każdy → SKILL.md zwięzłe.
- Budowa ZIP: dist/kwiatekmedia-meta-ads.zip (+ .plugin), dist/skills/<skill>.zip (folder skilla w korzeniu ZIP, frontmatter tylko pola spec). Python zipfile ("/"), UTF-8 bez BOM, ASCII nazwy plików.
- Walidacja: claude plugin validate . --strict; claude plugin validate plugins/kwiatekmedia-meta-ads --strict; build.py --check.
- Evale: plugins/kwiatekmedia-meta-ads/evals/<case>/prompt.md + graders/*.md (regex, tool_used, tool_order, llm). Wyniki evals/results/ w .gitignore. Izolacja: brak MCP użytkownika.
- Instalacja: Cowork/claude.ai: Customize → Plugins → + → Add marketplace → Pawel2884/KWIATEKmedia-Meta-Ads-Skills; lub upload ZIP. Claude Code: /plugin marketplace add https://github.com/Pawel2884/KWIATEKmedia-Meta-Ads-Skills.git → /plugin install kwiatekmedia-meta-ads@kwiatekmedia.
- Ostrzeżenie: stare skille Pawła mają podobne wyzwalacze — wyłączyć przed użyciem (Paweł i tak chce je usunąć).

## Z 06 (wideo/hooki) — kluczowe (pełne szablony: plik 06 sekcje 3–4, reguły RV01–RV40 sekcja 6)
- Hook = 3 zgodne kanały: wizual 0–1 s + tekst 3–7 słów + pierwsze zdanie audio ≤1 s. Brak powitań na starcie.
- 16 typów hooków H1–H16 (upfront, call-out po roli/miejscu, pytanie tematyczne, liczba/wynik, problem, kontrariańska teza, "nie rób X", demo, przed/po, dowód na start, historia/pętla, porównanie, pattern interrupt, oferta na start, talking head, ASMR-słabe). Dowody: upfront B; reszta C/D; kierunek efektu cech nagłówka niestabilny (Banerjee & Urminsky) → 3–5 hooków RÓŻNYCH TYPÓW na jedno ciało.
- Google ABCD Detector (A): zmiana ujęcia <3 s, twarz do kamery 0–2 s, mowa 0–3 s, napisy zsynchronizowane, obiekt ≥60% kadru, marka w 5 s "see and say".
- Szablony: S15 (domyślny lead ads), S30 PAS+D, TST testimonial, EXP talking head "3 błędy/powody/pytania", DEMO, BAB, FND founder, UGC, MICRO 5–10 s animowana statyka (Meta: 1–2 elementy w ruchu w 3 s; tani test kątów), LONG 60–180 s (B2B/wysoki koszt/retargeting), BUMPER 6 s.
- Tempo mowy PL ≈2–2,5 słowa/s → 15 s ≤35 słów, 30 s ≤70, 60 s ≤140 (D).
- Dwie kolumny scenariusza: TEKST NA EKRANIE (sam niesie logikę) + AUDIO. Napisy PL wypalone lub SRT.
- Marka zintegrowana i pulsująca (nie plansza z logo na starcie).
- Prawo: fałszywe opinie zakazane (UPNPR art. 7 pkt 25–26); aktor jako klient → oznaczenie (FTC jako wzorzec); współpraca z twórcą oznaczona "Reklama"/"Współpraca reklamowa"; zakaz awatarów AI udających klientów/ekspertów (AI Act art. 50 od 2.08.2026).
- Metryki: hook rate = 3-s plays/impressions; hold = ThruPlay/3-s plays; progi branżowe C/D; decyzje po CPL/CPQL. Drzewko: niski hook rate → nowe 0–3 s; dobry hook, słaby hold → środek; dobry hold, niski CTR → oferta/CTA; wysoki CTR, słaba jakość → hook przyciąga niewłaściwych.
- TikTok (A, korelacja): 21–34 s +280% konwersji; tekstowy CTA +152%; VO > ASMR.

## Z 11 (Biblioteka Reklam PL, ~1770 reklam, ~400 reklamodawców; tylko nagłówki) — kluczowe (C/D)
- Najczęstsze błędy: pusty/domyślny nagłówek (50–70% w medycynie/estetyce/terapii), etykieta zamiast hooka, przymiotniki bez dowodu (kompleksowy/profesjonalny/nowoczesny/rzetelny/wiodący), fałszywa pilność ("🛑 Dziś zapisało się N osób!" — 5 firm, stała liczba), CTA jako nagłówek, Title Case/CAPS/Unicode bold/literówki, obietnice zdrowotne, wiele usług w jednej reklamie, szablony AI ("X, który Y", "To nie X. To Y.", "Twój nowy…").
- Polski slop w reklamach to częściej przymiotniki i konstrukcje niż "Odkryj".
- Long-runnery (~20, finanse/prawo): krótkie nagłówki 3–7 słów, pytanie kwalifikujące z progiem, oferta bez ryzyka; zwycięski komunikat zostaje, kreacje się zmieniają. UWAGA: część long-runnerów ("Masz długi powyżej 25 000 zł?", "Komornik zajął Ci wynagrodzenie?") łamie politykę Meta personal attributes (Meta przykład "are you bankrupt?") — długie działanie ≠ zgodność. System: kwalifikuj progiem w formie 3. osoby/sytuacji ("Długi powyżej 25 000 zł? Jak działa upadłość konsumencka" też ryzykowne) → bezpieczniej: "Upadłość konsumencka przy zadłużeniu od 25 000 zł: jak wygląda krok po kroku".
- Przejedzone w niszach: "Bezpłatna analiza/wycena" jako cały nagłówek, "Odzyskaj pieniądze", "Sprawdź, czy należy Ci się…", "Ostatnia szansa/Tylko dziś", "Szukamy N osób z [miasto]", "Przeczytaj to, jeśli…".
- Agencje lead gen PL: "klienci/umowy, nie leady" + wyłączność regionalna = standard → KWIATEKmedia potrzebuje innego wyróżnika (konkretny case + przejrzysty proces).
- Najlepsi (MSEnergy, Mediator CRN, Modern Wages, aboutmedica) testują różne kąty; słabsi kopiują ten sam nagłówek 5–20×.
- Reguły R1–R20 w pliku 11 sekcja 4 (nagłówek nigdy pusty; 5 typów nagłówka; lokalność; zakaz liczników; Omnibus; 1 problem = 1 reklama; emoji ≤1 funkcyjne; tryb informacyjny w medycynie; moduł analizy konkurencji).

## Z 08 (testy/zmęczenie/iteracje) — kluczowe (tabele prób: plik 08 sekcja 3; drzewo: sekcja 4; planowanie: sekcja 5; reguły R1–R26: sekcja 7)
- A: budżet dzienny ≥10× CPA, by mieć szansę wyjść z learning; poniżej: 1 kampania, 1 zestaw, learning limited zaakceptowany.
- A: reklama z małym wydatkiem = NIEPRZETESTOWANA, nie przegrana. Meta A/B uznaje zwycięzcę od 65% (słaby sygnał). Creative testing tool: do 5 reklam, ~20% budżetu, 7 dni.
- A: statusy creative limited/fatigue działają tylko w zestawach z 1 kreacją (wg artykułu). Rozróżnianie: first time impression ratio ↓ + audience reached ratio ↑ = nasycenie grupy; auction competition change >20% = zmiana aukcji.
- B (obliczenia): CPL przy 10 leadach: prawdziwy 0,54–2,09× obserwowanego; 20 leadów 0,65–1,64; 50 leadów 0,76–1,35. Potwierdzenie różnicy CPL 20–30%: ~150–350 leadów/wariant. 5 identycznych reklam po 10 leadów → 80% szans na pozornego zwycięzcę ≥23% tańszego (klątwa zwycięzcy).
- Progi: P7 werdykt CPL reklamy ≥10 leadów (poniżej ZA MAŁO DANYCH); P9 wyłączenie z 0 leadów po ≥3× target CPL (ryzyko ~5%), ≥2× przy słabym CTR/hook (ryzyko ~14%); hook rate ≥1,5–2,5 tys. wyśw.; CTR ≥8 tys. wyśw.; relevance ≥500 wyśw.; okna tygodniowe.
- Drabina iteracji: I1 hook → I2 wykonanie → I3 format → I4 persona → I5 kąt/koncept → I6 oferta/formularz.
- Planowanie wg budżetu (CPL 40 zł): 1500 zł → 1 zestaw, 2–3 reklamy, 2–4 nowe/mies., partia co 3–4 tyg.; 3000 → 3–4 reklamy, 3–5 nowe, co 2–3 tyg.; 5000 → 3–5, 4–6, co 2 tyg.; 10000 → 4–6, 6–10, co 1–2 tyg., okazjonalne creative testing; 20000 → 5–8, 10–20, co tydzień; 50000 → 2–5 zestawów, 6–10, 20–40/mies. Przy małych budżetach testować tylko duże różnice (koncepty).
- Po zwycięzcy: ~50–70% iteracji, ~20–30% nowe persony/formaty, ~10–25% nowe koncepty (C, Motion).
- Metryka docelowa CPQL / koszt spotkania; formularz często lepszą dźwignią niż kreacja.
- Detektor zmęczenia R11 (D osadzone w A): ≥14 dni, ≥20 leadów bazowo, ≥10 bieżąco, frequency rośnie, CTR ≤75% bazowego lub CPL ≥1,5× bazowego, wykluczone nasycenie/aukcja/formularz.
