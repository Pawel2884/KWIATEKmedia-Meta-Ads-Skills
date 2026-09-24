# 03 — Uwaga, percepcja wizualna i zachowania mobile (research surowy)

> Agent researchowy: obszar 03. Data: 2026-09-24. Status: ZAKOŃCZONY (saturacja ograniczona wyczerpaniem wspólnego budżetu wyszukiwań — patrz 1 i 5.4).
> Legenda trybu dostępu: [PEŁNY] = pełna treść przeczytana w sesji; [WYSZUKIWARKA] = tylko streszczenie/fragment z WebSearch; [WIEDZA] = wiedza modelu niepotwierdzona w sesji.
> Poziomy dowodu: A = źródło pierwotne (Meta, autorzy badania); B = peer-review / duże zbiory danych; C = mocna obserwacja praktyków; D = hipoteza/opinia.

## 1. Zakres i metoda

**Pytanie:** co naprawdę zatrzymuje scroll na telefonie, jaka jest rola pierwszych 1–3 sekund, ile tekstu zmieści się w przelotnym spojrzeniu, co rozprasza, kiedy minimalizm wygrywa, a kiedy potrzeba więcej informacji — i jak przełożyć to na reguły systemu kreacji Meta Ads dla lead gen (PL).

**Obszary:** (1) stopping power i złożoność wizualna (Pieters, Wedel, Batra, Elsen, Teixeira); (2) ekonomia uwagi (Meta/Facebook IQ, Nielsen, Amplified/Nelson-Field, Lumen, Google/Kantar ABCD, TikTok); (3) czytanie na telefonie (NN/g, WCAG); (4) twarze i spojrzenie, saliency; (5) ilość tekstu na grafice (reguła 20%, involvement/ELM); (6) płynność przetwarzania i "jeden komunikat"; (7) dźwięk.

**Metoda i narzędzia:**
- ~33 zapytania WebSearch (precyzyjne: autor + rok + tytuł + "findings"), potem wspólny budżet sesji (200 zapytań dla wszystkich agentów) został wyczerpany.
- 12 wywołań Meta Ads MCP `ads_get_help_article` → 19 pełnych artykułów Meta Business Help Center / Instagram Help [PEŁNY].
- 1 pełny odczyt przez GitHub (W3C WCAG) [PEŁNY].
- WebFetch zablokowany dla wszystkich domen naukowych/branżowych, które próbowano (5 prób, 1 na domenę).
- Dla badań peer-review mamy streszczenia/abstrakty (tryb [WYSZUKIWARKA]) — liczby i cytaty pochodzą z abstraktów i omówień, nie z pełnych tekstów. Pozycje z pamięci modelu oznaczono [WIEDZA] i nie należy cytować ich liczb bez weryfikacji.

**Ogólne ograniczenia dowodów:** większość badań akademickich o uwadze dotyczy reklam prasowych/TV w laboratorium (ekstrapolacja na feed mobilny); dane platform (Meta, TikTok, Google) są pierwotne, ale bez pełnej metodologii i obciążone interesem; firmy "attention metrics" mają interes komercyjny. Kierunki wniosków są jednak spójne między źródłami niezależnymi (akademia) i platformowymi — to podnosi zaufanie do reguł z sekcji 4.

**Najkrótsze podsumowanie:** w feedzie mobilnym masz średnio ~1,7 s (U8). W tym czasie działa obraz (pierwsza fiksacja), a z tekstu przeczytane zostanie ~3–6 słów (U2, U15, R6). Wygrywa kreacja "upfront" — od razu wiadomo co i dla kogo (U3, U5) — z jednym punktem skupienia, bez szumu wizualnego (U1), z jednym komunikatem (U24, U28), dużym kontrastowym tekstem (U18), zrozumiała bez dźwięku, ale wzbogacona dźwiękiem w Reels (U29–U31). Minimalizm dotyczy grafiki; argumenty dla produktów wysokiego zaangażowania idą do tekstu reklamy i formularza (U26).

## 2. Kluczowe ustalenia

### 2.1 Stopping power i złożoność wizualna (Pieters, Wedel i in.)

**U1. Złożoność "cech" (feature complexity) szkodzi, złożoność "projektu" (design complexity) pomaga** | Poziom: **B** (peer-review, Journal of Marketing, eye-tracking 249 reklam prasowych)
- Źródła: [WYSZUKIWARKA] Pieters, Wedel & Batra (2010), "The Stopping Power of Advertising: Measures and Effects of Visual Complexity", *Journal of Marketing* 74(5), 48–60 — https://journals.sagepub.com/doi/abs/10.1509/jmkg.74.5.048 ; https://research.tilburguniversity.edu/en/publications/the-stopping-power-of-advertising-measures-and-effects-of-visual-/ ; streszczenie praktyka: https://blog.mswresearch.com/tag/stopping-power/
- Dane/cytat: "Advertisements are visually complex when they contain dense perceptual features ('feature complexity') and/or when they have an elaborate creative design ('design complexity')." — "feature complexity hurts attention to the brand and attitude toward the ad, whereas design complexity helps attention to both the pictorial and the advertisement." Feature complexity = więcej szczegółów i zmienności w kolorze, luminancji i krawędziach ("visually cluttered"). Design complexity = kreatywny, nieregularny, asymetryczny układ obiektów/kształtów (ciekawa kompozycja).
- Ograniczenia: reklamy prasowe (magazyny), laboratorium eye-tracking, nie feed mobilny; pomiar feature complexity oparty o rozmiar pliku JPEG (kompresja) — dobra aproksymacja "szumu".
- **Implikacja:** rozróżniać "szum" od "ciekawej kompozycji". Kreacja może być ciekawa (nietypowy kadr, kontrast skali, jeden zaskakujący obiekt), ale NIE może być zagracona drobnymi elementami, teksturami, wieloma kolorami, ikonkami, ramkami, naklejkami. Prosta, czysta powierzchnia + jeden mocny obiekt ≠ nuda. To bezpośrednio potwierdza zasadę Pawła "zero ozdobników" — ozdobniki zwiększają feature complexity, która szkodzi uwadze na markę.

**U2. Obraz przyciąga uwagę niezależnie od rozmiaru; tekst — proporcjonalnie do rozmiaru; marka najlepiej "przekazuje" uwagę dalej** | Poziom: **B** (1363 reklamy prasowe, eye-tracking, >3600 konsumentów)
- Źródła: [WYSZUKIWARKA] Pieters & Wedel (2004), "Attention Capture and Transfer in Advertising: Brand, Pictorial, and Text-Size Effects", *Journal of Marketing* 68(2), 36–50 — https://journals.sagepub.com/doi/10.1509/jmkg.68.2.36.27794 ; https://www.researchgate.net/publication/228599518_Attention_Capture_and_Transfer_in_Advertising_Brand_Pictorial_and_Text-Size_Effects
- Dane/cytat: "The pictorial is superior in capturing attention, independent of its size. In contrast, the text element best captures attention in direct proportion to its surface size. The brand element most effectively transfers attention to the other elements." "only increments in the text element's surface size produce a net gain in attention to the advertisement as a whole."
- [WIEDZA] W tym badaniu średni czas uwagi na całą reklamę w czasopiśmie był rzędu ~1,7–2 s (niepotwierdzone w sesji — nie cytować liczby bez weryfikacji).
- Ograniczenia: prasa, czytelnik kartkujący magazyn; na telefonie powierzchnia jest ~10x mniejsza, więc "tekst proporcjonalnie do powierzchni" oznacza: mały tekst = praktycznie zero uwagi.
- **Implikacja:** (a) obraz jest głównym "haczykiem" — nie trzeba go powiększać na siłę, ale musi być; (b) tekst działa tylko, gdy jest DUŻY — lepiej 5 słów dużą czcionką niż 25 słów małą; (c) marka (logo/nazwa) pełni funkcję "przekaźnika", nie haczyka — ma być widoczna, ale nie musi dominować.

**U3. "Ad gist": w < 100 ms ludzie wiedzą, że to reklama i (jeśli jest typowa) czego dotyczy** | Poziom: **B** (Marketing Science, eksperymenty z tachistoskopową ekspozycją)
- Źródła: [WYSZUKIWARKA] Pieters & Wedel (2012), "Ad Gist: Ad Communication in a Single Eye Fixation", *Marketing Science* 31(1), 59–73 — https://pubsonline.informs.org/doi/abs/10.1287/mksc.1110.0673?journalCode=mksc ; https://www.researchgate.net/publication/254781121_Ad_Gist_Ad_Communication_in_a_Single_Eye_Fixation
- Dane/cytat: konsumenci "already know at maximum levels of accuracy and with high degree of certainty whether something is an ad or is editorial material after an exposure of less than 100 milliseconds and—if the ad is typical—which product is being advertised." "because of their better gist performance, typical ads rather than atypical ones raise immediate interest after very brief exposures."
- **Implikacja:** pierwsze wrażenie (jedna fiksacja oka) decyduje, czy odbiorca "wie, o co chodzi". Typowa, natychmiast rozpoznawalna scena kategorii (np. dach z panelami PV, uśmiechnięta osoba w nowej kuchni, zęby u dentysty) wygrywa w bardzo krótkiej ekspozycji z "kreatywną zagadką". Uwaga: fakt, że reklama jest rozpoznawana jako reklama w <100 ms, oznacza też, że udawanie "nie-reklamy" (native/UGC) działa tylko, jeśli naprawdę wygląda jak treść organiczna.

**U4. Kolor jako "bufor": pomaga rozpoznać reklamę, gdy ekspozycja jest krótka i rozmyta (np. w ruchu scrolla)** | Poziom: **B**
- Źródła: [WYSZUKIWARKA] Wedel & Pieters (2015), "The Buffer Effect: The Role of Color When Advertising Exposures Are Brief and Blurred", *Marketing Science* 34(1), 134–143 — https://pubsonline.informs.org/doi/abs/10.1287/mksc.2014.0882 ; komunikat INFORMS: https://www.informs.org/News-Room/INFORMS-Releases/News-Releases/Ads-Communicate-Their-Message-in-as-Little-as-a-Tenth-of-a-Second-Helped-by-Color ; https://www.sciencedaily.com/releases/2014/12/141210131344.htm
- Dane/cytat: kolor jest "only a secondary determinant" rozpoznania; główną informację niosą kształty i tekstury, ale kolor pomaga, gdy obraz jest zdegradowany (rozmycie, bardzo szybka ekspozycja). Konsumenci "glance at a majority of ads only very briefly, for less than a second".
- **Implikacja:** najpierw czytelny kształt/sylwetka głównego obiektu (test: czy rozpoznasz produkt na rozmytej miniaturze?), potem kolor jako wsparcie. Stały, charakterystyczny kolor marki/klienta pomaga rozpoznawalności w scrollu.

**U5. "Thin slices": reklamy "od razu wiadomo co" wygrywają przy krótkiej ekspozycji; "zagadki" przegrywają** | Poziom: **B** (3 eksperymenty, w tym 1 terenowy; ekspozycje 100 ms – 30 s)
- Źródła: [WYSZUKIWARKA] Elsen, Pieters & Wedel (2016), "Thin Slice Impressions: How Advertising Evaluation Depends on Exposure Duration", *Journal of Marketing Research* 53(4) — https://journals.sagepub.com/doi/10.1509/jmr.13.0398 ; ScienceDaily "In today's advertising environment, cleverness can backfire" — https://www.sciencedaily.com/releases/2016/03/160314101710.htm
- Dane/cytat: "Upfront ads, which instantly convey what they promote, are evaluated positively after both brief and longer exposure durations." "Mystery ads, which suspend conveying what they promote, are evaluated negatively after brief but positively after longer exposure durations." "False front ads ... are evaluated positively after brief exposures but negatively after longer exposure durations." Rada autorów (za ScienceDaily): przy bannerach "stick to the basics: the product and the brand".
- **Implikacja (kluczowa dla systemu):** domyślny typ kreacji = "UPFRONT" (od pierwszej klatki wiadomo, co i dla kogo). "Mystery" (zagadka, suspens) tylko w wideo z mocnym hookiem, gdzie zakładamy dłuższe oglądanie — i to jako test, nie domyślny wybór. "False front" (clickbait, udawanie czegoś innego) — ryzykowny: działa w ułamku sekundy, szkodzi po dłuższym obejrzeniu (i generuje słabe leady).
- Wsparcie platformowe [PEŁNY] Meta, "How to use ad relevance diagnostics" — https://www.facebook.com/business/help/436113280262012 : kombinacja "quality ranking below average + engagement average or above + conversion below average" jest opisana wprost: "this ad is click-baity or controversial. adjust your ad to more clearly represent the product or service you are advertising." — czyli system Meta sam karze "false front" niższym rankingiem jakości (Poziom A).

**U6. Emocje (radość, zaskoczenie) zatrzymują widza w wideo; marka wpleciona tak, by nie przerwać emocji** | Poziom: **B** (eksperyment, rozpoznawanie ekspresji twarzy + eye-tracking + rejestr "zappingu", wideo internetowe)
- Źródła: [WYSZUKIWARKA] Teixeira, Wedel & Pieters (2012), "Emotion-Induced Engagement in Internet Video Advertisements", *Journal of Marketing Research* 49(2), 144–159 — https://journals.sagepub.com/doi/10.1509/jmr.10.0207 ; https://www.hbs.edu/faculty/Pages/item.aspx?num=40850
- Dane/cytat: "Surprise and joy effectively concentrate attention and retain viewers... the level rather than the velocity of surprise affects attention concentration most, whereas the velocity rather than the level of joy affects viewer retention most." [WIEDZA — do potwierdzenia] W artykule autorzy raportują, że silna/prominentna obecność marki może obniżać zaangażowanie emocjonalne i zwiększać porzucanie — stąd rekomendacja łączenia marki z momentem emocjonalnym zamiast "wrzucania logo" na siłę.
- **Implikacja:** w wideo: szybki wzrost pozytywnej emocji (zmiana "przed → po", uśmiech, ulga) utrzymuje oglądanie; zaskoczenie koncentruje uwagę. Marka/produkt ma być częścią tej sceny, nie planszą-przerywnikiem.

**U7. "Pulsowanie" marki (kilka krótkich pojawień) zmniejsza porzucanie reklamy vs jedno długie; centralne duże logo zwiększa porzucanie** | Poziom: **B** (TV, 31 reklam, ~2000 uczestników, eye-tracking + zapping)
- Źródła: [WYSZUKIWARKA] Teixeira, Wedel & Pieters (2010), "Moment-to-Moment Optimal Branding in TV Commercials: Preventing Avoidance by Pulsing", *Marketing Science* 29(5), 783–804 — https://pubsonline.informs.org/doi/10.1287/mksc.1100.0567 ; https://ideas.repec.org/a/inm/ormksc/v29y2010i5p783-804.html
- Dane/cytat: "pulsing brand presence—while keeping total brand exposure constant—decreases commercial avoidance significantly." "central on-screen brand positions, but not brand size, further promote commercial avoidance." Rozproszenie uwagi (attention dispersion) silnie przewiduje porzucanie.
- Ograniczenia: TV (2010), nie feed mobilny — ale mechanizm (reklama "za bardzo reklamą" → ucieczka) jest spójny z nowszymi danymi o skip w social.
- **Implikacja:** w wideo: marka krótko i kilka razy (np. produkt/logo w 1. sekundzie w rogu lub w scenie, potem powrót), nie długa plansza z logo na środku na starcie. Zgodne z Google ABCD ("brand in first 5 s", ale niekoniecznie jako logo).

### 2.2 Ekonomia uwagi w feedzie: sekundy, pamięć, pierwsze 3 sekundy

**U8. W mobilnym feedzie człowiek poświęca treści średnio ~1,7 s (desktop 2,5 s); zapamiętanie jest mierzalne już po 0,25 s** | Poziom: **A** (dane własne Meta/Facebook IQ, 2016; metodologia niepubliczna) + niezależne badanie Fors Marsh Group (zlecone przez Facebooka)
- Źródła: [WYSZUKIWARKA] Facebook IQ, "Capturing Attention in Feed: The Science Behind Effective Video Creative" (2016) — https://www.facebook.com/iq/articles/capturing-attention-feed-video-creative (strona wymaga logowania; treść potwierdzona przez omówienia) ; Marketing Dive — https://www.marketingdive.com/news/facebook-why-mobile-video-ads-must-work-fast/446217/
- Dane: "people spend an average of 1.7 seconds with any piece of mobile content" vs 2.5 s na desktopie; "people can recall mobile news feed content at a statistically significant rate after only 0.25 seconds of exposure" (Fors Marsh Group). Według omówienia młodsi użytkownicy przyswajają przekaz szybciej niż starsi.
- Ograniczenia: 1,7 s to średnia dla KAŻDEJ treści, nie tylko reklam; "statystycznie istotne przypomnienie" po 0,25 s ≠ skuteczna perswazja. Nelson-Field krytykuje: 1,7 s "barely works" (patrz U10).
- **Implikacja:** projektujemy pod ~1–2 sekundy. W tym czasie odbiorca ma zrozumieć: CO to jest + DLA KOGO/JAKA KORZYŚĆ. Wszystko inne jest bonusem dla tych, którzy się zatrzymali.

**U9. Nawet krótkie obejrzenia wideo dają efekt: do 47% wartości kampanii z osób oglądających < 3 s, do 74% < 10 s** | Poziom: **A/B** (Nielsen Brand Effect, 173 badania z grupą testową i kontrolną, zlecone przez Facebooka, 2015)
- Źródła: [WYSZUKIWARKA] MarTech/Marketing Land, "Even Brief Video Views Drive Brand Lift, Facebook-Nielsen Study Finds" — https://martech.org/even-brief-video-views-drive-brand-lift-facebook-nielsen-study-finds/ ; Marketing Dive — https://www.marketingdive.com/news/brand-lift-happens-in-less-than-1-second-of-video-study-finds/377333/
- Dane/cytat: "People who watched under three seconds of a video ad created up to 47 percent of the total campaign value, and people who watched for fewer than 10 seconds created up to 74%, depending on the metric." Lift dla oglądających ≤3 s: 47% (ad recall), 32% (awareness), 44% (purchase intent) — jako udział w całkowitym lifcie. "Lift was significantly higher for people who stuck with the video longer."
- Ograniczenia (ważne!): (1) tylko kampanie z dodatnim liftem (selection bias); (2) duży "udział w wartości" krótkich obejrzeń wynika głównie z tego, że WIĘKSZOŚĆ ludzi ogląda krótko (wolumen), a nie z tego, że krótkie obejrzenie jest równie skuteczne; na osobę dłuższe oglądanie daje więcej; (3) metryki marki (recall, awareness), nie leady; (4) badanie zlecone przez Facebooka.
- **Implikacja:** najważniejsza treść (marka/produkt + główna korzyść) MUSI być w pierwszych 3 sekundach, bo tam jest większość odbiorców. Reszta wideo pogłębia efekt u mniejszości, która została.

**U10. Próg ~2,5 s aktywnej uwagi dla śladu pamięciowego; 85% reklam cyfrowych go nie osiąga; z wyrazistymi zasobami marki efekt już od ~1,5 s** | Poziom: **B/C** (duże komercyjne zbiory danych Amplified Intelligence: eye/face-tracking na urządzeniach uczestników + wybory marek; metodologia własnościowa, publikacje w formie książek/raportów, nie peer-review czasopism)
- Źródła: [WYSZUKIWARKA] Nelson-Field, *The Attention Economy and How Media Works: Simple Truths for Marketers* (Palgrave/Springer, 2020) — https://link.springer.com/book/10.1007/978-981-15-1540-8 ; Mi3 (2020) "'Fools errand' and the billion dollar question: Is 1.7 seconds enough exposure for ads to work?" — https://www.mi-3.com.au/13-08-2020/fools-errand-and-billion-dollar-question-17-seconds-enough-exposure-ads-work-no-its ; VCCP Media × Nelson-Field/Amplified, "Hacking the Attention Economy" (2025) — https://www.vccp.com/uk/news/2025/may/hacking-the-attention-economy-vccp-media-and-dr-karen-nelson-field-reveal-1-5-second-formula-for-effective-digital-advertising ; https://www.amplified.co/insight/vccp-research-amplified-distinctive-assets ; WARC — https://www.warc.com/content/feed/distinctive-assets-supercharge-low-attention-media-knf--vccp-media-report-finds/en-GB/10604
- Dane: "2.5 seconds of active attention is the threshold that starts to make a difference to the length of time a brand stays in a person's memory"; "85% of digital ads receive less than 2.5 seconds of attention"; z wyrazistymi zasobami marki "memory benefits start appearing as early as 1.5 seconds"; "well-branded assets were 2.5x more effective at driving outcomes than weak ones". Z książki (za omówieniem): Facebook ma wysoki odsetek oglądania pasywnego (94% vs 40% TV); STAS: TV 144, Facebook 118, YouTube 116; ~50% "czasu na ekranie" bez żadnej uwagi. Optymalizacja pod uwagę vs viewability: "6X greater likelihood of brand choice" (AdNews/Advertising Week — [WYSZUKIWARKA], poziom C).
- Ograniczenia: próg 2,5 s to wartość średnia dla marek konsumenckich (FMCG), nie dla lead generation; metodologia niezależnie niezweryfikowana; interes komercyjny (Amplified sprzedaje pomiar uwagi).
- **Implikacja:** (a) większość wyświetleń to "przelotne spojrzenie" — kreacja ma działać w 1–1,5 s dzięki natychmiast rozpoznawalnym elementom (twarz właściciela/eksperta, charakterystyczny kolor, stały układ, produkt); (b) dla lokalnych firm bez rozpoznawalnej marki "zasobem wyrazistym" może być powtarzalny styl klienta (ten sam kolor tła, ta sama osoba, ten sam format nagłówka) — budować to konsekwentnie.

**U11. Tylko ~30% "widocznych" reklam jest faktycznie oglądanych; emocjonalne ("prawopółkulowe") reklamy dostają więcej uwagi w feedach mobilnych** | Poziom: **C** (Lumen Research — komercyjne panele eye-tracking; brak pełnej metodologii w sesji)
- Źródła: [WYSZUKIWARKA] Lumen Research, "Eyes on the feed" — https://lumen-research.com/white-papers/facebook-attention-leaderboard/ ; blog Lumen — https://lumen-research.com/blog/attention-technology-ads/ ; Lumen/PwC review (2023) — https://2871934.fs1.hubspotusercontent-na1.net/hubfs/2871934/Lumen%20_%20PwC%20Attention%20Methodology%20&%20Case%20Study%20Review%202023.pdf
- Dane: "only 30% of viewable ads are actually seen"; "'right brained', emotive ads get more attention than their 'left brained' competitors when they appear in YouTube or Facebook feeds on mobile phones".
- **Implikacja:** "widoczność" nie jest uwagą. Kreacja musi aktywnie wygrać spojrzenie (emocja, człowiek, kontrast), a nie tylko "być w feedzie".

**U12. Meta (oficjalnie): marka i kluczowy komunikat w pierwszych 3 sekundach; hook w pierwszej klatce; jeden komunikat; krótko (feed < 15 s, stories < 10 s)** | Poziom: **A** (Meta Business Help Center — rekomendacje platformy oparte na ich badaniach; bez publikacji danych źródłowych)
- Źródła: [PEŁNY] Meta, "Best practices for Instagram video ads" — https://www.facebook.com/business/help/188534925073536 ; [PEŁNY] "Creative best practices for Stories" — https://www.facebook.com/business/help/304846896685564 ; [PEŁNY] "About video ads" — https://www.facebook.com/business/help/1381779698788633 ; [PEŁNY] "Best practices for ads that use dynamic creative" — https://www.facebook.com/business/help/257326614846024
- Cytaty: "showcase your brand early: feature your brand and key message within the first 3 seconds. early branding increases recall and drives better results." "hook viewers quickly: use motion or a compelling visual in the first frame to capture attention. people scroll quickly, so every moment counts." "keep it concise: shorter videos (6–15 seconds) are more effective, especially in feed and stories." "feed video ads ... shorter videos (under 15 seconds) tend to perform best in feed. stories ads perform best under 10 seconds." "deliver a single message. convey a clear, simple message that makes people take action" (About video ads). "put the most captivating elements of your video in the first few seconds: showcase your brand identity right away so people see and remember it, then bookend with your brand at the end." Stories: "ads with the best performance tend to put their key messages at the beginning of the ad"; "use multiple scenes: ads that have short, concise scenes tend to perform better than long slow scenes"; "provide key info early: many users interact before the video ends."
- Dodatkowo: "active mindset in feed: users are more likely to watch longer and engage more deeply with video ads in feed than in reels" — tzn. feed ≠ Reels pod względem trybu oglądania.
- **Implikacja:** reguła systemu: sekunda 0–1 = hook wizualny + temat; sekunda 0–3 = produkt/marka + główna korzyść (także jako tekst na ekranie); zakończenie = marka/CTA ponownie ("bookend").

**U13. Google/Kantar ABCD: reklamy spełniające zasady mają do +30% krótkoterminowego prawdopodobieństwa sprzedaży i +17% długoterminowego wkładu marki** | Poziom: **B** (Kantar, analiza >11 000 reklam/180 cech + bazy Ipsos/Nielsen; badanie zlecone przez Google; YouTube, nie Meta)
- Źródła: [WYSZUKIWARKA] Think with Google, "YouTube ABCDs" — https://business.google.com/en-all/think/future-of-marketing/youtube-video-ad-creative/ ; Kantar, "Validating Google's ABCD framework..." — https://www.kantar.com/north-america/industries/technology-and-telecoms/validating-googles-abcd-framework-with-the-power-of-artificial-intelligence ; playbook PDF — https://www.thinkwithgoogle.com/_qs/documents/8472/ABCD_Complete_V7b_HR_1.pdf ; ppc.land — https://ppc.land/mastering-youtube-advertising-with-the-abcd-framework/
- Dane: "as much as a 30% lift in short-term sales likelihood and a 17% lift in long-term brand contribution" (Google/Kantar, 2021). Attention: "tight framing on the subject and aim for 2+ shots in the first 5 seconds"; Branding: "introduce your brand or product in the first 5 seconds" (niekoniecznie logo — produkt w użyciu, kolory, postać, dźwięk); "If people appear in your video, open with them on screen".
- Ograniczenia: YouTube (in-stream, często z dźwiękiem, pomijalne po 5 s) — okno 5 s; w feedzie Meta okno jest krótsze (1,7 s średnio), więc zasady należy "ścisnąć" do ~1–3 s. Korelacja (predykcja modelu Kantar), nie eksperyment.
- **Implikacja:** ciasny kadr (twarz/produkt wypełnia kadr), szybki montaż na starcie, człowiek od pierwszej klatki, produkt/marka wcześnie — spójne z Meta.

**U14. TikTok: >63% filmów z najwyższym CTR pokazuje kluczowy komunikat/produkt w pierwszych 3 sekundach** | Poziom: **A/C** (dane platformy, ale znane tylko z drugiej ręki; korelacja, efekt "przeżywalności")
- Źródła: [WYSZUKIWARKA] TikTok for Business, "9 Creative Tips to drive performance" (PDF) — https://ads.tiktok.com/business/library/Auction_Ads_Creative_Tips.pdf ; TikTok Creative Center — https://ads.tiktok.com/business/creativecenter/quicktok/online/Power_Creative_Elements/pc/en
- Dane: "Over 63% of all videos with the highest click-through rate (CTR) highlight their key message or product within the first 3 seconds." Też: ">93% of top-performing videos use audio" (drugorzędne omówienia).
- **Implikacja:** zbieżne z Meta i Nielsen — "od razu do rzeczy". Uwaga: to korelacja z CTR, nie z jakością leada.

### 2.3 Czytanie na telefonie: skanowanie, rozumienie, banner blindness, czytelność

**U15. Ludzie czytają mało: na typowej stronie max ~28% słów, realnie ~20%; skanują (wzorzec F), gdy tekst nie ma sygnałów** | Poziom: **B** (NN/g — badania eye-tracking i logów przeglądarek; seria od 2006, weryfikacja 2017 także na mobile)
- Źródła: [WYSZUKIWARKA] Nielsen Norman Group, "How Little Do Users Read?" (2008) — https://www.nngroup.com/articles/how-little-do-users-read/ ; "F-Shaped Pattern of Reading on the Web: Misunderstood, But Still Relevant (Even on Mobile)" (2017) — https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/ ; "Text Scanning Patterns: Eyetracking Evidence" — https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/
- Dane/cytat: "On the average Web page, users have time to read at most 28% of the words during an average visit; 20% is more likely." (25 użytkowników, średnio 593 słowa na odsłonę). F-pattern "alive and well ... both on desktop and on mobile"; w braku sygnałów użytkownik wybiera "the path of minimum effort" i fiksuje się blisko początku (lewy górny róg). Długie bloki tekstu czytane tylko przy silnej motywacji.
- Ograniczenia: strony www, nie reklamy w feedzie (w reklamie odsetek czytanych słów jest zapewne jeszcze niższy — hipoteza D).
- **Implikacja:** w grafice/nagłówku liczą się 2–3 pierwsze słowa (to one są czytane). Najważniejsze słowo na początku. Primary text: pierwsza linia musi nieść sens sama w sobie (potwierdza Meta: "primary text should span 1-3 lines at most").

**U16. Na małym ekranie trudny tekst rozumie się gorzej/wolniej; prosty — równie dobrze jak na komputerze** | Poziom: **B**, z **niespójnością** między badaniami
- Źródła: [WYSZUKIWARKA] NN/g, "Mobile Content Is Twice as Difficult" (2011; test Cloze, badanie Singh i in., Univ. of Alberta) — https://www.nngroup.com/articles/mobile-content-is-twice-as-difficult-2011/ ; NN/g, "Reading Content on Mobile Devices" (2016, N=276) — https://www.nngroup.com/articles/mobile-content/ ; Readers First (omówienie) — https://www.readersfirst.org/news/2016/12/13/another-study-reading-comprehension-on-the-small-screen
- Dane: 2011: przy ekranie wielkości iPhone'a wynik rozumienia złożonej treści = 48% wyniku desktopowego ("roughly twice as hard to understand complicated content"). 2016: dla krótkich, prostych tekstów brak praktycznej różnicy; przy trudnym tekście czytanie na mobile wolniejsze.
- **Implikacja:** na telefonie wygrywa prosty język, krótkie zdania, słowa potoczne (potwierdza zasadę Pawła "prosty język"). Żargon i złożone zdania kosztują podwójnie.

**U17. "Ślepota banerowa": użytkownicy omijają wzrokiem elementy wyglądające jak reklama — także na mobile; im bardziej element wygląda natywnie, tym więcej uwagi** | Poziom: **B** (NN/g eye-tracking, 1998→2018)
- Źródła: [WYSZUKIWARKA] NN/g, "Banner Blindness Revisited: Users Dodge Ads on Mobile and Desktop" (2018) — https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/ ; "Banner Blindness: The Original Eyetracking Research" — https://www.nngroup.com/articles/banner-blindness-original-eyetracking/
- Dane/cytat: "people tend to ignore design elements that signal advertisements"; "The more an ad looks like a native site component, the more users will look at it." Użytkownicy uczą się ignorować nawet reklamy o nietypowym wyglądzie, jeśli stoją w typowym "miejscu reklamowym". [WYSZUKIWARKA, poziom C] Nielsen (neuro-eye-tracking): 53% więcej uwagi dla reklam natywnych niż banerów.
- Zbieżne z Meta [PEŁNY] (https://www.facebook.com/business/help/188534925073536): "native feel: ads that blend in with organic content perform better. avoid overly 'ad-like' creative; instead, use authentic, platform-native styles."
- **Implikacja:** unikać "sygnałów banera": ramek, gwiazdek "PROMOCJA!!!", wielu przycisków, stockowych kolaży, logotypu wielkości połowy kadru. Kreacja powinna wyglądać jak dobry post/zdjęcie z telefonu, a komunikat nieść jednym krótkim nagłówkiem. Ale: nie "false front" (U5) — od razu musi być jasne, czego dotyczy.

**U18. Czytelność: kontrast i rozmiar czcionki mają twarde minima** | Poziom: **A** (standard WCAG 2.x, W3C) + **D** (przeliczenie na kanwę reklamy — wyprowadzenie własne)
- Źródła: [PEŁNY] W3C WCAG, "Understanding SC 1.4.3 Contrast (Minimum)" — https://github.com/w3c/wcag/blob/main/understanding/20/contrast-minimum.html ; [PEŁNY] Meta, "About text overlays and the safe zone" — https://www.facebook.com/business/help/980593475366490 ; [PEŁNY] Meta, "Best practices for image ads" — https://www.facebook.com/business/help/388369961318508
- Dane/cytat: WCAG: kontrast min. 4.5:1 dla zwykłego tekstu, 3:1 dla dużego ("18 point text or 14 point bold text", ok. 24 px / 18,5 px CSS); uzasadnienie: "visual acuity of 20/40 is associated with a contrast sensitivity loss of roughly 1.5" — typowa ostrość wzroku osób ok. 80 r.ż. Meta: "use a modern, clean font in a large enough type size and a contrasting hue"; "don't obstruct the visuals".
- [WIEDZA] Wytyczne platform: Apple HIG — domyślny tekst body 17 pt, minimum 11 pt; Material Design — body 14–16 sp; Lighthouse ("legible font sizes") — min. 12 px. Typowy telefon ma ~360–430 punktów szerokości logicznej.
- Wyprowadzenie (D): grafika 1080 px szerokości wyświetlana na pełną szerokość ekranu ~390 pt → 1 pt ≈ 2,8 px kanwy. Tekst "duży" wg WCAG (24 px CSS) ≈ 65–70 px na kanwie 1080; body 16–17 pt ≈ 45–48 px. W feedzie reklama bywa wyświetlana mniejsza (podgląd, miniatura, scroll w ruchu), więc bezpiecznie: **nagłówek ≥ 80–100 px wysokości znaku na kanwie 1080 px, żaden tekst < 45 px**. Kontrast tekstu do tła ≥ 4.5:1 (najlepiej ≥ 7:1).
- **Implikacja:** automatyczny check w systemie: rozmiar fontu i kontrast; "test miniatury" — pomniejsz grafikę do ~25–30% (jak w szybkim scrollu) i sprawdź, czy nagłówek jest czytelny.

**U19. Strefy bezpieczne i układ pionowy** | Poziom: **A** (Meta, oficjalne specyfikacje)
- Źródła: [PEŁNY] Meta, "About text overlays and the safe zone for ads on Facebook and Instagram" — https://www.facebook.com/business/help/980593475366490 ; [PEŁNY] "Creative best practices for Stories" — https://www.facebook.com/business/help/304846896685564 ; [PEŁNY] "Best practices for Instagram video ads" — https://www.facebook.com/business/help/188534925073536 ; [PEŁNY] "Best practices for image ads" — https://www.facebook.com/business/help/388369961318508
- Dane/cytat: 9:16 (Stories, Reels, feed, in-stream reels): "keep the edges (top, bottom and sides) free of key creative elements, text and logos"; przy disclaimerach w Reels "leave the bottom 40% of your ad free"; Stories: "leave roughly 14% of the top and 20% of the bottom of your creative free"; "98% of users hold their phones vertically"; "vertical 4:5 is recommended for single-image ads" w feedzie FB; Reels/Stories: "text in the middle of the screen is most effective".
- **Implikacja:** szablony systemu: 4:5 (feed) i 9:16 (Stories/Reels) z zaznaczoną strefą bezpieczną; tekst główny w środkowej części kadru.

### 2.4 Twarze, spojrzenie, saliency (kolor, kontrast, ruch), ludzie vs produkt

**U20. Twarz z odwróconym wzrokiem (patrzącym na produkt/tekst) zwiększa uwagę na reklamę, tekst i produkt oraz pamięć** | Poziom: **B** (eksperyment eye-tracking, Frontiers in Psychology, banery www; próba niewielka — laboratorium)
- Źródła: [WYSZUKIWARKA] Sajjacholapunt & Ball (2014), "The influence of banner advertisements on attention and memory: human faces with averted gaze can enhance advertising effectiveness", *Frontiers in Psychology* 5:166 — https://www.frontiersin.org/articles/10.3389/fpsyg.2014.00166/text ; https://pubmed.ncbi.nlm.nih.gov/24624104/
- Dane/cytat: "the condition involving faces with averted gaze increased attention to the banner overall, as well as to the advertising text and product" — w porównaniu z brakiem twarzy i z twarzą patrzącą na widza; efekt przełożył się na lepszą pamięć informacji reklamowej.
- Uzupełnienie: [WYSZUKIWARKA] James Breeze (eye-tracking, n=106; "baby ad") — gdy dziecko patrzy na tekst, tekst dostaje wyraźnie więcej uwagi niż gdy patrzy w obiektyw — https://www.neurosciencemarketing.com/blog/articles/baby-heat-maps.htm — Poziom **C** (branżowe, nie peer-review). [WYSZUKIWARKA] Palcu i in. (2017), "Judgments at Gaze Value: Gaze Cuing in Banner Advertisements..." — https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5454066/ (treść niesprawdzona w sesji — [WIEDZA]: gaze cueing zwiększa uwagę na produkt; wpływ na oceny produktu słabszy/niejednoznaczny).
- **Implikacja:** jeśli w kreacji jest człowiek i ważny jest tekst/produkt → osoba patrzy NA produkt/nagłówek (spojrzenie jako strzałka). Jeśli celem jest kontakt/zaufanie (np. właściciel firmy mówi do kamery w wideo) → spojrzenie w obiektyw. Świadomy wybór, nie przypadek.

**U21. Twarze przyciągają uwagę i zaangażowanie w social; ale mogą "wysysać" uwagę z marki (efekt wampira)** | Poziom: **B** — [WIEDZA], niepotwierdzone w sesji (limit wyszukiwań)
- Źródła [WIEDZA]: Bakhshi, Shamma & Gilbert (2014), "Faces Engage Us: Photos with Faces Attract More Likes and Comments on Instagram", CHI 2014 — ok. 1,1 mln zdjęć; zdjęcia z twarzami ~38% więcej polubień i ~32% więcej komentarzy (liczby z pamięci — zweryfikować przed cytowaniem). Erfgen, Zenker & Sattler (2015), "The vampire effect: When do celebrity endorsers harm brand recall?", *IJRM* 32(2) — silny endorser może obniżać zapamiętanie marki. Hutton & Nolte (2011), *Applied Cognitive Psychology* — gaze cues w reklamach prasowych kierują uwagę na produkt.
- Zbieżne z Meta [PEŁNY] (https://www.facebook.com/business/help/388369961318508): "show people using your product or service: this helps people visualize themselves doing so. it can be effective to show people similar to those you're targeting in realistic settings."
- **Implikacja:** człowiek w kadrze = domyślny "magnes", ale twarz nie może zasłaniać/przyćmić tego, co sprzedajemy. Najlepiej: człowiek + produkt/efekt w jednej scenie (osoba używa usługi / cieszy się efektem), podobny do grupy docelowej.

**U22. Ludzie vs produkt zależą od celu; zdjęcia "z telefonu" vs studyjne** | Poziom: **A** (Meta Help Center; na podstawie "several research studies", bez danych)
- Źródła: [PEŁNY] Meta, "Creative best practices for Stories" — https://www.facebook.com/business/help/304846896685564
- Cytat: "if you use the awareness objective, focus your ad on people. if you use the engagement, leads or sales objective, focus on products." "mobile shots tend to outperform studio shots for ad recall and intent, while studio shots tend to drive higher brand awareness."
- **Implikacja:** dla lead gen (cel: leady) — na pierwszym planie oferta/efekt/produkt (np. gotowa łazienka, panele na dachu, uśmiech po zabiegu), człowiek jako kontekst. Autentyczne zdjęcia z telefonu są dobrym domyślnym wyborem dla intencji.

**U23. Saliency: ruch, kontrast, pojedynczy punkt skupienia, ciasny kadr** | Poziom: **A** (Meta) + **B** ([WIEDZA] psychologia percepcji)
- Źródła: [PEŁNY] Meta, "Best practices for image ads" — https://www.facebook.com/business/help/388369961318508 ("focus on your message: keep the attention of your audience by cropping tightly around the important part of the image"; "avoid overly photoshopped images"); [PEŁNY] "Best practices for ads that use dynamic creative" — https://www.facebook.com/business/help/257326614846024 ("draw attention to your image: create ads with a single point of focus"; "make images more noticeable with movement: add time-lapse, looping and animation"); [PEŁNY] "Best practices to make your ad more engaging" — https://www.facebook.com/business/help/370852930116232 ("ads with movement can stand out in feed"); [PEŁNY] Stories ("enhance with motion: ads that use motion tend to perform better"; "avoid unnecessary stickers ... can also draw attention away from the product"); [PEŁNY] Instagram image ads — https://www.facebook.com/business/help/109732209367483 ("keep a strong focal point ... using clear and straightforward images").
- Sygnał pośredni [PEŁNY] Meta, "About Advantage+ creative" — https://www.facebook.com/business/help/297506218282224 : automatyczne ulepszenia Meta obejmują "the brightness and contrast of your image can be adjusted if it may improve ad performance" oraz "video effects ... higher contrast ratios and more vibrant colors" — algorytm Meta sam podbija jasność/kontrast, bo to (wg Meta) poprawia wyniki (Poziom A, bez danych liczbowych).
- [WIEDZA] Podstawy: model saliency Itti & Koch (1998/2001) — kontrast koloru, luminancji, orientacji i ruchu przyciąga wzrok "bottom-up"; efekt "pop-out" (Treisman & Gelade 1980) — jeden element różny od tła jest wykrywany natychmiast; efekt izolacji von Restorff (1933) — wyróżniony element lepiej zapamiętany. Zaskoczenie koncentruje uwagę (Teixeira i in. 2012, U6).
- **Implikacja:** jeden element "wyskakujący" (kontrastem/kolorem) — nie pięć. Im więcej elementów konkuruje o saliency, tym bardziej rośnie feature complexity (U1) i spada uwaga na markę. "Pattern interrupt" w praktyce = coś, co w danym feedzie wygląda inaczej (kolor tła, nietypowy kadr, ruch w 1. klatce, zaskakujący obiekt) — to hipoteza praktyków (C/D) wsparta ogólnie przez saliency i efekt zaskoczenia (B).

### 2.5 Ilość tekstu na grafice: reguła 20%, gęstość tekstu, kiedy więcej informacji

**U24. Reguła 20% tekstu nie obowiązuje — Meta oficjalnie: brak limitu tekstu, narzędzie Text Overlay wycofane; ale zalecenia nadal: mało tekstu, duży, jeden komunikat** | Poziom: **A**
- Źródła: [PEŁNY] Meta, "Best practices for image ads" — https://www.facebook.com/business/help/388369961318508 ; [PEŁNY] "About text overlays and the safe zone" — https://www.facebook.com/business/help/980593475366490 ; [PEŁNY] "Creative best practices for text in ads" — https://www.facebook.com/business/help/223409425500940 ; [PEŁNY] "Best practices for ads that use dynamic creative" — https://www.facebook.com/business/help/257326614846024
- Cytaty: "note: there is no longer a limit on the amount of text that can exist in your ad image. the text overlay tool is no longer available." — "people scan feed quickly, particularly on mobile devices" — "don't communicate too many messages because ads usually only have one call to action." — "communicating what you want people to do at a glance is the most important goal of your ad." — "keep ad copy short: primary text should span 1-3 lines at most." — limity rekomendowane: primary text 125 znaków, nagłówek 40, opis 25. — "avoid text on top of images: use the text, headline and link description fields instead" (artykuł o dynamic creative) vs "land takeaways with text overlays ... use text to emphasize key messages, but keep your focus on one point" (Stories).
- Historia [WIEDZA]: ok. 2013 Facebook odrzucał reklamy z tekstem > 20% powierzchni (siatka 5×5; max 5 pól z tekstem); ok. 2016 zastąpione oceną "OK / Low / Medium / High" ograniczającą zasięg zamiast odrzucenia; we wrześniu 2020 zasada zniesiona, przy czym Facebook dalej komunikował, że obrazy z mniejszą ilością tekstu zwykle działają lepiej. (Daty z pamięci — do potwierdzenia w innym agencie/źródle.)
- Sprzeczność w dokumentacji Meta (jawna): jeden artykuł "avoid text on top of images", inne zalecają nakładki tekstowe (duże, kontrastowe, jeden punkt). Rozstrzygnięcie dla systemu: tekst na grafice TAK, ale jako krótki nagłówek (1 myśl), nie jako blok informacji; szczegóły → pola tekstowe reklamy / formularz.
- **Implikacja:** limit tekstu dziś nie jest techniczny, tylko percepcyjny. Pieters & Wedel (U2): tekst "łapie" uwagę proporcjonalnie do powierzchni → więcej słów przy tej samej powierzchni = mniejsza czcionka = mniej uwagi na słowo. Stąd reguła ilości słów (sekcja 4).

**U25. Gęstość tekstu a CTR/uwaga — brak rzetelnych publicznych badań; dostępne są głównie dane Meta (jakościowe) i praktyków** | Poziom: **C/D**
- Źródła: brak twardych danych znalezionych w sesji (budżet wyszukiwań wyczerpany na etapie ~35 zapytań). Pośrednio: Pieters & Wedel 2004 (U2), Pieters i in. 2010 (U1), NN/g (U15), Meta (U24).
- **Niewiadoma:** ile dokładnie słów na grafice optymalizuje CTR/CPL w polskich kampaniach lead gen — do testowania A/B w systemie (np. wariant 3–5 słów vs 8–12 słów vs "bez tekstu").

**U26. Kiedy minimalizm nie wystarcza: zaangażowanie (involvement) i ELM — przy wysokim zaangażowaniu decydują argumenty, przy niskim — sygnały peryferyjne** | Poziom: **B** — [WIEDZA], klasyka niepotwierdzona w sesji
- Źródła [WIEDZA]: Petty, Cacioppo & Schumann (1983), "Central and Peripheral Routes to Advertising Effectiveness: The Moderating Role of Involvement", *Journal of Consumer Research* 10(2), 135–146 — przy wysokim zaangażowaniu siła argumentów silnie wpływała na postawy, przy niskim większy wpływ miały sygnały peryferyjne (np. atrakcyjny/znany endorser). Model ELM (Petty & Cacioppo 1986).
- Ograniczenia: ELM krytykowany za trudność w rozdzieleniu tras i słabą falsyfikowalność (np. Kitchen i in. 2014, *European Journal of Marketing* — [WIEDZA]); badania laboratoryjne, studenci.
- **Implikacja (ważna dla lead gen):** produkty drogie/ryzykowne (fotowoltaika, pompy ciepła, implanty, nieruchomości, kredyty, remonty) = wysokie zaangażowanie → odbiorca, który się zatrzymał, potrzebuje KONKRETÓW (cena od, gwarancja, czas realizacji, liczby, dowody). ALE: grafika służy do zatrzymania i jednego komunikatu (odbiorca w feedzie jest początkowo nisko zaangażowany); argumenty idą do primary text (rozwijany), nagłówka, formularza (intro), landing page. Czyli: minimalizm NA OBRAZIE ≠ minimalizm w CAŁEJ reklamie. Jeden komunikat może być bardzo konkretny i liczbowy ("Panele 10 kW od 29 900 zł" — jeden komunikat, ale konkretny).

### 2.6 Płynność przetwarzania, obciążenie poznawcze, jeden komunikat

**U27. Płynność przetwarzania (processing fluency): co łatwo przetworzyć, oceniamy jako prawdziwsze, ładniejsze, bardziej znajome i łatwiejsze do zrobienia** | Poziom: **B** — [WIEDZA], niepotwierdzone w sesji
- Źródła [WIEDZA]: Alter & Oppenheimer (2009), "Uniting the Tribes of Fluency to Form a Metacognitive Nation", *Personality and Social Psychology Review* 13(3), 219–235 (przegląd); Reber, Schwarz & Winkielman (2004), "Processing Fluency and Aesthetic Pleasure: Is Beauty in the Perceiver's Processing Experience?", *PSPR* 8(4), 364–382; Reber & Schwarz (1999), *Consciousness and Cognition* — zdania w lepiej widocznym kontraście kolorystycznym oceniane częściej jako prawdziwe; Song & Schwarz (2008), "If It's Hard to Read, It's Hard to Do", *Psychological Science* 19(10) — instrukcja ćwiczeń w trudnym foncie → zadanie oceniane jako dłuższe/trudniejsze i mniejsza chęć jego wykonania.
- Kontr-dowody / ograniczenia: "desirable difficulty" — Diemand-Yauman, Oppenheimer & Vaughan (2011) sugerowali lepsze zapamiętanie przy trudnym foncie; efekty disfluency słabo się replikują (np. Meyer i in. 2015, *Journal of Experimental Psychology: General* — seria badań bez efektu disfluency w CRT) — [WIEDZA]. Efekty płynności są zwykle małe–umiarkowane i zależne od kontekstu.
- **Implikacja:** czytelny, prosty font; wysoki kontrast; proste słowa; znane sformułowania → komunikat wydaje się prawdziwszy i "łatwiejszy do zrobienia" (np. "Wycena w 24 h" w dużym, czytelnym foncie odbierana jako łatwiejszy krok). Unikać fontów ozdobnych/script, tekstu na zdjęciu bez podkładu, efektów 3D.

**U28. Jeden komunikat > kilka: dodanie słabszych argumentów może OBNIŻYĆ ocenę całości; optymalnie ok. 3 twierdzeń, powyżej rośnie sceptycyzm** | Poziom: **B** — [WIEDZA], niepotwierdzone w sesji (limit wyszukiwań)
- Źródła [WIEDZA]: Weaver, Garcia & Schwarz (2012), "The Presenter's Paradox", *Journal of Consumer Research* 39(3), 445–460 — prezentujący sądzą, że dodanie umiarkowanie pozytywnej informacji pomoże, a odbiorcy uśredniają → pakiet oceniany gorzej; Shu & Carlson (2014), "When Three Charms but Four Alarms: Identifying the Optimal Number of Claims in Persuasion Settings", *Journal of Marketing* 78(1), 127–139 — przy znanej intencji perswazyjnej 3 twierdzenia optymalne, 4+ budzą sceptycyzm; Meyvis & Janiszewski (2002), *JCR* 28(4) — nieistotne informacje o produkcie osłabiają wiarę w jego główną korzyść (efekt rozcieńczenia; por. Nisbett, Zukier & Lemley 1981 "dilution effect").
- Zbieżne z Meta [PEŁNY]: "don't communicate too many messages because ads usually only have one call to action"; "deliver a single message"; "use text to emphasize key messages, but keep your focus on one point".
- [WIEDZA] Pojemność pamięci roboczej ~4 elementy (Cowan 2001) — przy ekspozycji 1–2 s realnie przetwarzany jest 1 komunikat.
- Ograniczenie: "single-minded proposition" jako reguła agencyjna nie ma jednego rozstrzygającego eksperymentu w social; dowody są pośrednie (efekt rozcieńczenia/uśredniania + ograniczona uwaga + wytyczne Meta).
- **Implikacja:** na grafice JEDNA obietnica. W primary text maks. 3 wsparcia (np. 3 punkty), nie 7. Każdy dodatkowy "bonus" musi być silniejszy od średniej, inaczej osłabia przekaz.

### 2.7 Dźwięk: "85% bez dźwięku" vs Reels jako sound-on

**U29. "85% wideo na Facebooku oglądane bez dźwięku" — to dane wydawców z 2016 r. o autoplay w feedzie, nie oficjalna statystyka Meta** | Poziom: **C** (samodeklaracje wydawców; nieaktualne)
- Źródła: [WYSZUKIWARKA] Digiday (17.05.2016), "85 percent of Facebook video is watched without sound" — https://digiday.com/media/silent-world-facebook-video/ ; Nieman Lab — https://www.niemanlab.org/reading/publishers-say-85-percent-of-facebook-video-is-watched-without-sound/ ; krytyka — https://st4.ca/blog/85-really-facebook-without-sound
- Dane: LittleThings i Mic (~150 mln odsłon/mies.) ~85% bez dźwięku; PopSugar 50–80%; MEC: 85–90% dla wideo brandowych klientów, przy czym wewnętrzne testy nie pokazały różnicy w brand lift i intencji zakupu sound-on vs off. Facebook nigdy oficjalnie nie potwierdził 85%.
- **Implikacja:** nie powtarzać "85%" jako faktu. Prawdziwe jest tylko: w feedzie wideo startuje wyciszone i część ludzi nigdy nie włącza dźwięku.

**U30. Napisy pomagają: +12% czasu oglądania (Facebook 2016); 41% reklam wideo bez dźwięku niezrozumiałych; 69% ogląda bez dźwięku w miejscach publicznych; 80% chętniej obejrzy do końca z napisami** | Poziom: **A/C** (dane wewnętrzne Facebooka — [WYSZUKIWARKA]; ankieta Verizon Media/Publicis 2019, N=5 616 dorosłych USA — deklaracje)
- Źródła: [WYSZUKIWARKA] Social Media Today — https://www.socialmediatoday.com/social-business/facebook-adds-automated-captions-video-ads-offers-tips-improve-video-performance ; 3Play Media — https://www.3playmedia.com/blog/captions-increase-viewership-for-facebook-video-ads/ ; Forbes (2019) — https://www.forbes.com/sites/tjmccue/2019/07/31/verizon-media-says-69-percent-of-consumers-watching-video-with-sound-off/ ; https://www.3playmedia.com/blog/verizon-media-and-publicis-media-find-viewers-want-captions/
- Cytaty: "Internal tests show that captioned video ads increase video view time by an average of 12%." "41% of videos are incomprehensible without sound or captions". 80% reagowało negatywnie na głośny autoplay (FB 2016). Verizon/Publicis: "69 percent of people watch videos without sound in public places", "80% ... more likely to watch an entire video when captioning is available".
- **Implikacja:** każde wideo musi być zrozumiałe bez dźwięku (napisy + tekst na ekranie z kluczowym komunikatem).

**U31. Ale dźwięk działa: Reels ~80% oglądane z dźwiękiem; sound-on w feedzie = 2,25× wyższy CTR przycisku CTA; Reels 9:16 z audio i w strefie bezpiecznej = −34,5% kosztu wyniku vs obrazy w Reels** | Poziom: **A** (Meta; dane wewnętrzne, metodologia częściowo opisana)
- Źródła: [PEŁNY] Meta, "Best practices for Instagram video ads" — https://www.facebook.com/business/help/188534925073536 ("design for sound-off: most users watch with sound off, so ensure your message is clear visually ... however, adding music or voiceover can enhance engagement"; "sound-on boosts results: feed video ads perform significantly better when watched with sound on (2.25x higher cta ctr)"); [PEŁNY] "Creative best practices for Stories" — https://www.facebook.com/business/help/304846896685564 ("the majority of stories with voice-over or music tend to drive better results compared to ads without any sound"); [PEŁNY] Instagram Help, "Create Instagram Reels ads" — https://help.instagram.com/546362593027755 ("we recommend that your video ad creative includes music or sound to better fit the reels placement"); [WYSZUKIWARKA] Instagram for Business (post) — "80% of people view Reels with sound on" — https://www.facebook.com/instagramforbusiness/posts/80-of-people-view-reels-with-sound-on-try-one-of-these-5-great-songs-on-metas-fr/758319112755506/ ; [WYSZUKIWARKA] Meta for Business, Reels ads — https://www.facebook.com/business/ads/facebook-instagram-reels-ads (15 split testów, e-commerce/retail/CPG: Reels 9:16 + audio + safe zone → 34,5% niższy koszt wyniku niż obrazy w Reels).
- Ograniczenie: "2,25× CTR" to korelacja (osoby, które same włączają dźwięk, są bardziej zaangażowane — selekcja), nie efekt przyczynowy dźwięku.
- **Implikacja:** "sound-off first, sound-on bonus": obraz + napisy niosą cały komunikat; dźwięk (lektor, muzyka, naturalna mowa) dodaje efekt, szczególnie w Reels/Stories. Dla Reels — zawsze warstwa audio.

## 3. Sporne / obalone / niewiadome

| # | Twierdzenie popularne | Status | Uzasadnienie |
|---|---|---|---|
| S1 | "85% ludzi ogląda wideo bez dźwięku" | **Nieaktualne / nieoficjalne** | Dane 2–3 wydawców z 2016 (Digiday), dotyczą autoplay w feedzie FB; Facebook nigdy nie potwierdził. Dziś Meta: Reels ~80% sound-on; w feedzie nadal "most users watch with sound off" (Meta Help, bez liczby). Prawidłowo: "w feedzie wideo startuje wyciszone; w Reels większość ma dźwięk". (U29–U31) |
| S2 | "Masz 1,7 sekundy" jako twardy próg | **Nadinterpretacja** | 1,7 s to średni czas na DOWOLNĄ treść w mobilnym feedzie (FB IQ 2016), nie próg skuteczności. Nelson-Field: 1,7 s "barely works", pamięć od ~2,5 s (od ~1,5 s z wyrazistymi zasobami marki). (U8, U10) |
| S3 | "47% wartości kampanii w pierwszych 3 s" = krótkie obejrzenie jest równie dobre | **Błędna interpretacja** | Udział wynika z wolumenu (większość ogląda krótko) + selekcja tylko kampanii z dodatnim liftem; na osobę lift rośnie z czasem oglądania. Wniosek poprawny: kluczowy przekaz w 3 s, bo tam jest większość ludzi. (U9) |
| S4 | "Reguła 20% tekstu" | **Obalona formalnie (brak limitu)**, sens percepcyjny zostaje | Meta Help: "there is no longer a limit on the amount of text". Historia (2013–2020) — [WIEDZA]. Mniej tekstu nadal zalecane (jeden komunikat, duża czcionka). (U24) |
| S5 | "Uwaga ludzi jest krótsza niż złotej rybki (8 s)" | **Obalone** [WIEDZA] | Liczba z raportu Microsoft Canada (2015) cytującego Statistic Brain bez badania źródłowego; szeroko zdementowana (m.in. BBC "More or Less"). NIE używać. |
| S6 | "F-pattern — projektuj pod literę F" | **Nieporozumienie** | NN/g: F to zachowanie przy SŁABYM projekcie (brak sygnałów), nie szablon. Wniosek: dawaj sygnały (duży nagłówek, najważniejsze słowo pierwsze). (U15) |
| S7 | Wyniki Pieters/Wedel (prasa, TV) przenoszą się 1:1 na feed mobilny | **Ekstrapolacja** | Większość badań to reklamy prasowe/TV w laboratorium; Elsen i in. 2016 miało 1 badanie terenowe. Mechanizmy (uwaga wzrokowa, gist) są uniwersalne, ale wielkości efektów w feedzie mogą się różnić. Kierunek zgodny z danymi Meta/Nielsen/TikTok. |
| S8 | "Twarz zawsze pomaga" | **Warunkowe** | Twarze przyciągają (Bakhshi i in. 2014 — [WIEDZA]), ale mogą odciągać uwagę od marki ("vampire effect", Erfgen i in. 2015 — [WIEDZA]). Kierunek spojrzenia ma znaczenie (Sajjacholapunt & Ball 2014). Meta: dla leadów/sprzedaży "focus on products". (U20–U22) |
| S9 | "Trudniejszy font = lepsza pamięć (desirable difficulty)" | **Słabo replikowane** [WIEDZA] | Efekty disfluency w dużych replikacjach (np. Meyer i in. 2015) nie potwierdzone; w reklamie przeważają korzyści płynności. (U27) |
| S10 | "Hook ciekawości/zagadka zawsze najlepszy" | **Sporne** | Elsen i in. 2016: "mystery ads" przegrywają przy krótkiej ekspozycji, wygrywają przy długiej. Praktycy (Reels/TikTok) chwalą curiosity hooks — to może działać w wideo, jeśli KATEGORIA/temat jest jasny od 1. klatki (częściowy upfront). Do testów. (U5) |
| S11 | "Marka na początku" vs "marka odstrasza" | **Pozorna sprzeczność** | Meta/Google: marka/produkt w 3–5 s (recall). Teixeira i in. 2010: centralna, nachalna marka zwiększa porzucanie; pulsowanie zmniejsza. Rozwiązanie: marka wcześnie, ale zintegrowana (produkt w scenie, mały znak), powtarzana krótko, nie wielka plansza z logo. (U7, U12, U13) |
| S12 | "Natywny wygląd" vs "reklama i tak jest rozpoznana w 100 ms" | **Napięcie** | Pieters & Wedel 2012: reklamę rozpoznaje się jako reklamę w <100 ms; NN/g/Meta: wygląd natywny dostaje więcej uwagi. Rozwiązanie: estetyka natywna (autentyczne zdjęcie, brak "sygnałów banera"), ale komunikat jasny od razu (bez false front). |
| S13 | Czytanie na mobile: "2× trudniej" (2011) vs "bez różnicy" (2016) | **Niespójne** | Różnice metod i czasu (większe ekrany, oswojenie). Wspólny wniosek: prosty tekst — OK; złożony — wolniej/gorzej. (U16) |
| S14 | Dane firm od "attention metrics" (Amplified, Lumen) | **Ostrożnie** | Duże zbiory, ale metodologia własnościowa i interes komercyjny (sprzedają pomiar). Traktować jako B/C, nie jako prawo. (U10, U11) |
| S15 | "2,25× wyższy CTR z dźwiękiem" = dźwięk powoduje wzrost | **Korelacja** | Osoby włączające dźwięk to bardziej zaangażowani widzowie (selekcja). Wniosek: dodawać audio jako bonus, ale komunikat nie może od niego zależeć. (U31) |
| S16 | "Scrollujemy 300 stóp (ok. 90 m) dziennie" | **Niezweryfikowane w sesji** [WIEDZA] | Przypisywane Facebook IQ (ok. 2016). Nie cytować bez potwierdzenia. |

**Niewiadome (do testów w systemie):**
- N1. Optymalna liczba słów na grafice dla polskich kampanii lead gen (brak publicznych badań; U25).
- N2. Twarz vs sam produkt/efekt w konkretnych branżach usług lokalnych (PL).
- N3. Wpływ "curiosity hook" vs "upfront" na JAKOŚĆ leadów (nie CTR/CPL) — brak danych.
- N4. Czy grafiki "brzydkie/z telefonu" (lo-fi) biją dopracowane w lead gen PL — dane Meta dla Stories sugerują przewagę "mobile shots" w recall/intencji (U22), ale nie dla leadów.
- N5. Polski tekst jest dłuższy (dłuższe słowa, fleksja) — prawdopodobnie wolniej czytany niż angielski przy tej samej liczbie słów; brak danych w sesji.

## 4. Konkretne reguły do systemu kreacji (z uzasadnieniem i poziomem dowodu)

> Konwencja: MUSI = twarda reguła (walidator odrzuca), POWINNO = domyślne ustawienie (można złamać świadomie, z uzasadnieniem), TEST = hipoteza do A/B.

### 4.1 Pierwsza sekunda (grafika i pierwsza klatka wideo)
- **R1. MUSI — "Test 1 sekundy":** po 1 s oglądania odbiorca umie powiedzieć (a) co to jest (kategoria/produkt/usługa) i (b) co z tego ma (jedna korzyść/oferta). Uzasadnienie: gist w <100 ms, 1,7 s średnio w feedzie, większość wartości wideo z <3 s, upfront > mystery przy krótkiej ekspozycji. Dowód: **A/B** (U3, U5, U8, U9, U12).
- **R2. MUSI — typ kreacji UPFRONT domyślnie.** "Mystery" tylko w wideo i tylko gdy kategoria jest jasna od 1. klatki (TEST). "False front" (clickbait, obietnica niezgodna z ofertą) — zakazany (gorsze oceny po dłuższej ekspozycji + Meta obniża quality ranking za "click-baity"). Dowód: **B + A** (U5).
- **R3. MUSI — jeden punkt skupienia (focal point)** — jeden dominujący obiekt/scena, ciasny kadr wokół tego, co ważne. Dowód: **A** (Meta: "single point of focus", "cropping tightly") + **B** (U1, U23).
- **R4. POWINNO — typowa, rozpoznawalna scena kategorii** (kształt obiektu czytelny nawet w rozmyciu/miniaturze); kolor wspiera rozpoznanie, nie zastępuje kształtu. Dowód: **B** (U3, U4).

### 4.2 Tekst na grafice — ile i jak
- **R5. MUSI — jeden komunikat na grafice** (jedna obietnica, max jedno CTA). Dowód: **A** (Meta: "don't communicate too many messages", "single message", "keep your focus on one point") + **B** (U28: presenter's paradox, 3 charms/4 alarms — [WIEDZA]).
- **R6. POWINNO — liczba słów na grafice statycznej:** nagłówek **3–7 słów** (idealnie ≤ 6); całość tekstu na grafice **≤ 12 słów** (nagłówek + ewentualnie 1 krótka linia wsparcia 2–5 słów lub cena/liczba + marka). Flaga ostrzegawcza > 15 słów; > 20 słów = odrzucenie (chyba że format "tekst jako obraz", np. cytat opinii — świadomy wyjątek).
  - Uzasadnienie (wyprowadzenie, **D** oparte na **A/B**): średni czas na treść w mobilnym feedzie ~1,7 s (U8); obraz przyciąga pierwszą fiksację (U2), więc na tekst zostaje < 1 s–1,5 s; tempo cichego czytania dorosłych ≈ 238 słów/min ≈ 4 słowa/s (Brysbaert 2019, *Journal of Memory and Language* — [WIEDZA], dane dla angielskiego; polski prawdopodobnie wolniej, N5) → realnie 3–6 słów przeczytanych w "przelocie". Ludzie czytają 20–28% tekstu nawet na stronach (U15). Tekst przyciąga uwagę proporcjonalnie do powierzchni (U2) — mniej słów = większa czcionka = więcej uwagi.
- **R7. MUSI — rozmiar i kontrast:** na kanwie o szerokości 1080 px: nagłówek ≥ ~80 px wysokości fontu (cel 90–120 px), żaden tekst < ~45 px; kontrast tekst/tło ≥ 4.5:1 (cel ≥ 7:1); tekst na jednolitym tle/podkładzie, nie bezpośrednio na zdjęciu o zmiennej jasności. Dowód: **A** (WCAG 1.4.3; Meta: "large enough type size and a contrasting hue") + **D** (przeliczenie na piksele, U18).
- **R8. MUSI — max 1 krój pisma (2 grubości), max 3 poziomy hierarchii** (nagłówek > wsparcie > marka/CTA); font bezszeryfowy, prosty (bez script/dekoracyjnych/3D). Dowód: **B** (płynność, U27 — [WIEDZA]) + **A** (Meta: "modern, clean font").
- **R9. POWINNO — najważniejsze słowo na początku nagłówka** (pierwsze 2–3 słowa niosą sens). Dowód: **B** (U15 F-pattern / minimum effort).
- **R10. POWINNO — prosty język:** słowa potoczne, krótkie zdania, bez żargonu; liczby cyframi ("24 h", "od 29 900 zł"). Dowód: **B** (U16 mobile comprehension, U27 fluency).

### 4.3 Ozdobniki, układ, "sygnały banera"
- **R11. MUSI — zero ozdobników:** bez naklejek/stickerów, emoji-grafik, gwiazdek "PROMOCJA", ramek, wielu ikon, faktur, gradientów "dla ozdoby", kolaży z >2 zdjęć (do wielu zdjęć → karuzela). Max 2–3 kolory + 1 kolor akcentu. Dowód: **B** (U1 feature complexity szkodzi uwadze na markę i postawie) + **A** (Meta Stories: "avoid unnecessary stickers ... clutter"; image ads: "to show multiple images ... carousel").
- **R12. POWINNO — "ciekawa kompozycja" dozwolona:** nietypowy kadr, kontrast skali, jeden zaskakujący element (design complexity pomaga). Nie mylić z "zagraceniem". Dowód: **B** (U1).
- **R13. POWINNO — wygląd natywny, nie banerowy:** autentyczne zdjęcie (np. z telefonu), bez przesadnego retuszu ("avoid overly photoshopped images"); logo małe, w stałym miejscu. Dowód: **A** (Meta: "native feel", "avoid overly ad-like creative") + **B** (U17).
- **R14. MUSI — strefy bezpieczne:** 9:16 — brzegi wolne od tekstu/logo (Stories: ~14% góry, ~20% dołu; Reels z disclaimerem: dolne 40% wolne); 4:5 feed — dolny i boczne brzegi wolne; kluczowy tekst w środkowej części kadru. Dowód: **A** (U19).
- **R15. POWINNO — formaty:** feed 4:5, Stories/Reels 9:16; nie 16:9 na mobile. Dowód: **A** (Meta: "98% of users hold their phones vertically", "vertical 4:5 is recommended").

### 4.4 Ludzie, twarze, spojrzenie
- **R16. POWINNO — człowiek w kadrze, gdy to naturalne** (osoba podobna do grupy docelowej, w realnym otoczeniu, używa usługi/cieszy się efektem). Dowód: **A** (Meta: "show people using your product ... similar to those you're targeting") + **B** (U21 — [WIEDZA]).
- **R17. POWINNO — kierunek spojrzenia świadomie:** grafika z nagłówkiem/produktem → osoba patrzy na produkt/nagłówek; wideo "twarzą do kamery" (właściciel, ekspert, UGC) → spojrzenie w obiektyw. Dowód: **B** (U20).
- **R18. MUSI (dla celu Leady) — oferta/efekt na pierwszym planie**, człowiek jako kontekst; twarz nie może przykryć tego, co sprzedajemy. Dowód: **A** (Meta Stories: dla leads/sales "focus on products") + **B** (vampire effect — [WIEDZA]).

### 4.5 Wideo: oś czasu
- **R19. MUSI — 0–1 s:** ruch lub twarz/emocja w pierwszej klatce + temat w tekście ekranowym (3–6 słów). Dowód: **A** (Meta: "use motion or a compelling visual in the first frame") + **B** (U6, U13).
- **R20. MUSI — 0–3 s:** produkt/usługa + marka (zintegrowana, np. produkt w scenie / mały znak) + główna korzyść. Dowód: **A** (Meta: "brand and key message within the first 3 seconds"; TikTok 63%; Nielsen 47%) (U9, U12, U14).
- **R21. POWINNO — marka "pulsuje":** kilka krótkich pojawień zamiast długiej, centralnej planszy z logo na początku; zakończenie = marka + CTA ("bookend"). Dowód: **B** (U7) + **A** (Meta "bookend with your brand at the end").
- **R22. POWINNO — tempo:** krótkie sceny, 2+ ujęcia w pierwszych ~3–5 s; długość feed 6–15 s, Stories < 10 s (Reels może dłużej, jeśli trzyma retencję). Dowód: **A** (Meta, Google ABCD) (U12, U13).
- **R23. POWINNO — emocja:** szybki wzrost pozytywnej emocji (ulga, radość, "przed → po") lub zaskoczenie w pierwszych sekundach. Dowód: **B** (U6) + **C** (U11 Lumen).

### 4.6 Dźwięk
- **R24. MUSI — sound-off first:** kluczowy komunikat w obrazie i tekście ekranowym; napisy do całej mowy (duże, kontrastowe, w strefie bezpiecznej). Dowód: **A** (Meta: "design for sound-off", "add subtitles") + **A/C** (U30).
- **R25. POWINNO — sound-on bonus:** lektor/naturalna mowa/muzyka; w Reels zawsze warstwa audio. Dowód: **A** (U31).
- **R26. MUSI — nie cytować "85% bez dźwięku"** jako faktu w materiałach dla klientów. Dowód: (U29, S1).

### 4.7 Minimalizm vs informacja (lead gen, produkty drogie/ryzykowne)
- **R27. MUSI — minimalizm dotyczy GRAFIKI, nie całej reklamy:** grafika = zatrzymanie + 1 komunikat; argumenty (max 3) → primary text; szczegóły → formularz/landing. Dowód: **B** (U26 ELM — [WIEDZA], U28) + **A** (Meta: primary text 1–3 linie, 125 znaków widocznych).
- **R28. POWINNO — przy wysokim zaangażowaniu komunikat na grafice ma być KONKRETNY** (liczba, cena "od", termin, gwarancja), nie ogólnik ("Najlepsza jakość"). Jeden komunikat może być konkretny. Dowód: **B** (U26) + **D** (hipoteza — N1/N3 do testów).
- **R29. POWINNO — primary text:** pierwsza linia = sens całości (widoczna przed "Zobacz więcej"); nagłówek ≤ 40 znaków; max 3 wsparcia. Dowód: **A** (Meta limity) + **B** (U15, U28).

### 4.8 Spójność i rozpoznawalność
- **R30. POWINNO — "zasoby wyróżniające" klienta:** stały kolor tła/akcentu, ta sama osoba (np. właściciel), stały układ nagłówka — powtarzane między kreacjami, by skrócić czas rozpoznania (efekt od ~1,5 s zamiast ~2,5 s). Dowód: **B/C** (U10).

### 4.9 Kontrola jakości (checklista walidatora)
- **R31. MUSI — QA "na telefonie" przed publikacją:** (1) podgląd w Ads Managerze na mobile; (2) test miniatury: zmniejsz do 25–30% — nagłówek nadal czytelny?; (3) test 1 s: pokaż komuś na 1 s — "co to i dla kogo?"; (4) test wyciszenia (wideo); (5) policz słowa na grafice; (6) sprawdź kontrast (≥ 4.5:1); (7) sprawdź strefy bezpieczne; (8) policz elementy konkurujące o uwagę (cel: 1 dominujący + nagłówek + mały znak marki). Dowód: synteza **A/B** + **C/D** (procedura praktyczna).
- **R32. TEST — rzeczy niewiadome testować, nie zgadywać:** warianty liczby słów (≤ 5 vs 8–12 vs brak tekstu), twarz vs produkt, upfront vs curiosity hook, lo-fi vs dopracowane — oceniać po CPL i JAKOŚCI leadów, nie tylko CTR. Dowód: (N1–N4).

## 5. Lista źródeł z trybem dostępu

### 5.1 Źródła przeczytane w całości [PEŁNY]
Meta Business Help Center (przez Meta Ads MCP `ads_get_help_article`, pełne teksty):
1. About text overlays and the safe zone for ads on Facebook and Instagram — https://www.facebook.com/business/help/980593475366490
2. Best practices for image ads — https://www.facebook.com/business/help/388369961318508
3. About image ads across Meta technologies — https://www.facebook.com/business/help/217010726413426
4. Best practices for Instagram video ads — https://www.facebook.com/business/help/188534925073536
5. Creative best practices for Stories — https://www.facebook.com/business/help/304846896685564
6. About video ads — https://www.facebook.com/business/help/1381779698788633
7. Best practices for ads that use dynamic creative — https://www.facebook.com/business/help/257326614846024
8. Creative best practices for text in ads — https://www.facebook.com/business/help/223409425500940
9. Best practices to make your ad more engaging — https://www.facebook.com/business/help/370852930116232
10. Best practices for cost-effective ad creative — https://www.facebook.com/business/help/1991663177718491
11. Best practices for Instagram image ads — https://www.facebook.com/business/help/109732209367483
12. About Advantage+ creative — https://www.facebook.com/business/help/297506218282224
13. Enable text improvements — https://www.facebook.com/business/help/620917123959992
14. How to use ad relevance diagnostics — https://www.facebook.com/business/help/436113280262012
15. Add captions to your video ad — https://www.facebook.com/business/help/1675722002698686
16. Design requirements for Instagram feed ads — https://www.facebook.com/business/help/430958953753149
17. Create Instagram Reels ads in Meta Ads Manager — https://help.instagram.com/546362593027755
18. How to add music to ads using Ads Manager — https://help.instagram.com/759279452000505
19. About ads on Reels (Facebook) — https://www.facebook.com/business/help/437348354643456
Inne:
20. W3C WCAG, Understanding SC 1.4.3 Contrast (Minimum) (GitHub w3c/wcag) — https://github.com/w3c/wcag/blob/main/understanding/20/contrast-minimum.html

### 5.2 Źródła znane ze streszczeń wyszukiwarki [WYSZUKIWARKA]
Badania naukowe (peer-review):
21. Pieters, Wedel & Batra (2010), The Stopping Power of Advertising, *J. of Marketing* 74(5) — https://journals.sagepub.com/doi/abs/10.1509/jmkg.74.5.048 ; https://research.tilburguniversity.edu/en/publications/the-stopping-power-of-advertising-measures-and-effects-of-visual-/
22. Pieters & Wedel (2004), Attention Capture and Transfer in Advertising, *J. of Marketing* 68(2) — https://journals.sagepub.com/doi/10.1509/jmkg.68.2.36.27794
23. Pieters & Wedel (2012), Ad Gist: Ad Communication in a Single Eye Fixation, *Marketing Science* 31(1) — https://pubsonline.informs.org/doi/abs/10.1287/mksc.1110.0673?journalCode=mksc
24. Wedel & Pieters (2015), The Buffer Effect, *Marketing Science* 34(1) — https://pubsonline.informs.org/doi/abs/10.1287/mksc.2014.0882 ; INFORMS press — https://www.informs.org/News-Room/INFORMS-Releases/News-Releases/Ads-Communicate-Their-Message-in-as-Little-as-a-Tenth-of-a-Second-Helped-by-Color
25. Elsen, Pieters & Wedel (2016), Thin Slice Impressions, *J. of Marketing Research* — https://journals.sagepub.com/doi/10.1509/jmr.13.0398 ; ScienceDaily — https://www.sciencedaily.com/releases/2016/03/160314101710.htm
26. Teixeira, Wedel & Pieters (2012), Emotion-Induced Engagement in Internet Video Advertisements, *JMR* 49(2) — https://journals.sagepub.com/doi/10.1509/jmr.10.0207
27. Teixeira, Wedel & Pieters (2010), Moment-to-Moment Optimal Branding in TV Commercials, *Marketing Science* 29(5) — https://pubsonline.informs.org/doi/10.1287/mksc.1100.0567
28. Sajjacholapunt & Ball (2014), human faces with averted gaze..., *Frontiers in Psychology* 5:166 — https://www.frontiersin.org/articles/10.3389/fpsyg.2014.00166/text
29. Palcu i in. (2017), Judgments at Gaze Value — https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5454066/ (tylko tytuł/URL; treść niesprawdzona)
Badania platform / branżowe:
30. Facebook IQ (2016), Capturing Attention in Feed — https://www.facebook.com/iq/articles/capturing-attention-feed-video-creative ; Marketing Dive — https://www.marketingdive.com/news/facebook-why-mobile-video-ads-must-work-fast/446217/
31. Facebook/Nielsen (2015), brief video views brand lift — https://martech.org/even-brief-video-views-drive-brand-lift-facebook-nielsen-study-finds/ ; https://www.marketingdive.com/news/brand-lift-happens-in-less-than-1-second-of-video-study-finds/377333/
32. Nelson-Field (2020), The Attention Economy and How Media Works — https://link.springer.com/book/10.1007/978-981-15-1540-8
33. Mi3 (2020), Is 1.7 seconds enough — https://www.mi-3.com.au/13-08-2020/fools-errand-and-billion-dollar-question-17-seconds-enough-exposure-ads-work-no-its
34. VCCP Media × Amplified (2025), Hacking the Attention Economy — https://www.vccp.com/uk/news/2025/may/hacking-the-attention-economy-vccp-media-and-dr-karen-nelson-field-reveal-1-5-second-formula-for-effective-digital-advertising ; https://www.amplified.co/insight/vccp-research-amplified-distinctive-assets ; WARC — https://www.warc.com/content/feed/distinctive-assets-supercharge-low-attention-media-knf--vccp-media-report-finds/en-GB/10604
35. AdNews / Advertising Week (attention vs viewability 6×) — https://www.adnews.com.au/news/why-s-this-new-metric-getting-so-much-attention ; https://advertisingweek.com/the-art-of-in-feed-optimisation-as-part-of-the-attention-revolution/
36. Lumen Research, Eyes on the feed — https://lumen-research.com/white-papers/facebook-attention-leaderboard/ ; https://lumen-research.com/blog/attention-technology-ads/
37. Google/Kantar ABCD — https://business.google.com/en-all/think/future-of-marketing/youtube-video-ad-creative/ ; https://www.kantar.com/north-america/industries/technology-and-telecoms/validating-googles-abcd-framework-with-the-power-of-artificial-intelligence ; https://www.thinkwithgoogle.com/_qs/documents/8472/ABCD_Complete_V7b_HR_1.pdf ; https://ppc.land/mastering-youtube-advertising-with-the-abcd-framework/
38. TikTok for Business, 9 Creative Tips — https://ads.tiktok.com/business/library/Auction_Ads_Creative_Tips.pdf
39. NN/g, How Little Do Users Read? — https://www.nngroup.com/articles/how-little-do-users-read/
40. NN/g, F-Shaped Pattern... Still Relevant (Even on Mobile) — https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/
41. NN/g, Mobile Content Is Twice as Difficult (2011) — https://www.nngroup.com/articles/mobile-content-is-twice-as-difficult-2011/
42. NN/g, Reading Content on Mobile Devices (2016) — https://www.nngroup.com/articles/mobile-content/
43. NN/g, Banner Blindness Revisited (2018) — https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/
44. Neuromarketing (J. Breeze, baby gaze) — https://www.neurosciencemarketing.com/blog/articles/baby-heat-maps.htm
45. Digiday (2016), 85% without sound — https://digiday.com/media/silent-world-facebook-video/ ; krytyka — https://st4.ca/blog/85-really-facebook-without-sound
46. Facebook 2016 captions +12% — https://www.socialmediatoday.com/social-business/facebook-adds-automated-captions-video-ads-offers-tips-improve-video-performance ; https://www.3playmedia.com/blog/captions-increase-viewership-for-facebook-video-ads/
47. Verizon Media/Publicis (2019) — https://www.forbes.com/sites/tjmccue/2019/07/31/verizon-media-says-69-percent-of-consumers-watching-video-with-sound-off/
48. Instagram for Business, 80% Reels sound on — https://www.facebook.com/instagramforbusiness/posts/80-of-people-view-reels-with-sound-on-try-one-of-these-5-great-songs-on-metas-fr/758319112755506/ ; Meta Reels ads (34,5%) — https://www.facebook.com/business/ads/facebook-instagram-reels-ads

### 5.3 Wiedza modelu, niepotwierdzona w sesji [WIEDZA] (zweryfikować przed cytowaniem liczb)
49. Bakhshi, Shamma & Gilbert (2014), Faces Engage Us, CHI.
50. Erfgen, Zenker & Sattler (2015), The vampire effect, *IJRM* 32(2).
51. Hutton & Nolte (2011), gaze cues in print ads, *Applied Cognitive Psychology*.
52. Petty, Cacioppo & Schumann (1983), Central and Peripheral Routes..., *JCR* 10(2).
53. Alter & Oppenheimer (2009), *PSPR* 13(3); Reber, Schwarz & Winkielman (2004), *PSPR* 8(4); Reber & Schwarz (1999); Song & Schwarz (2008), *Psych. Science* 19(10).
54. Meyer i in. (2015), replikacje disfluency, *JEP: General*; Diemand-Yauman i in. (2011).
55. Weaver, Garcia & Schwarz (2012), The Presenter's Paradox, *JCR* 39(3); Shu & Carlson (2014), When Three Charms but Four Alarms, *J. of Marketing* 78(1); Meyvis & Janiszewski (2002), *JCR* 28(4); Nisbett, Zukier & Lemley (1981) dilution effect.
56. Cowan (2001), pojemność pamięci roboczej ~4 elementy, *BBS*.
57. Brysbaert (2019), How many words do we read per minute?, *Journal of Memory and Language* 109 (≈238 słów/min, angielski, tekst niebeletrystyczny).
58. Itti & Koch (1998/2001) saliency; Treisman & Gelade (1980); von Restorff (1933).
59. Historia reguły 20% tekstu (2013 → 2016 → zniesienie 2020).
60. Apple HIG / Material Design / Lighthouse — minimalne rozmiary fontów.
61. Microsoft Canada (2015) "8 sekund / złota rybka" — obalone.

### 5.4 Próby nieudane (dla przejrzystości)
- WebFetch zablokowany (EGRESS_BLOCKED): economicsofattention.com (PDF Teixeira 2012), tilburguniversity.edu (PDF Pieters & Wedel 2004), lumen-research.com, ads.tiktok.com (PDF 9 Creative Tips), support.google.com (ABCD).
- Wspólny budżet WebSearch dla sesji (200 zapytań na wszystkich agentów) wyczerpał się po ok. 33 zapytaniach tego agenta — dalsze potwierdzenia (Bakhshi 2014, Palcu 2017, historia reguły 20%, presenter's paradox, Brysbaert 2019) nie były możliwe; oznaczone [WIEDZA].
