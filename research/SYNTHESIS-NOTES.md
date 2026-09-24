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
