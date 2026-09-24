# 02 — Oficjalne wytyczne Meta: kreacja, placementy, Lead Ads, polityki

Agent researchowy 02 · projekt „KWIATEKmedia Meta Ads” · stan wiedzy na 2026-09-24

---

## 1. Zakres i metoda

**Zakres:** (1) wytyczne kreatywne Meta i specyfikacje placementów (Feed, Stories, Reels, WhatsApp Status, karuzela), limity tekstu, strefy bezpieczne, tekst na grafikach, napisy, dźwięk, długość wideo, twórcy, Advantage+ creative; (2) badania Meta (Facebook IQ / Foresight / Marketing Science); (3) Lead Ads / Instant Forms, optymalizacja pod jakość (conversion/qualified leads, Conversions API for CRM), kampanie na wiadomości i połączenia; (4) polityki reklamowe wpływające na kreację, ze szczególnym uwzględnieniem Polski/UE.

**Metoda i tryby dostępu:**

| Kanał | Liczba zapytań | Tryb | Uwagi |
|---|---|---|---|
| Meta Business Help Center przez `ads_get_help_article` (Meta Ads MCP) | ok. 60 zapytań, ok. 110 różnych artykułów | **[PEŁNY]** | Źródło pierwotne (poziom A). Pełne teksty artykułów, stan na wrzesień 2026 (artykuły zawierają zmiany z 2025–2026, np. marzec 2026 i kwiecień/sierpień 2026). |
| WebSearch | **tylko 4** | **[WYSZUKIWARKA]** | Limit wyszukiwań **dla całej sesji** (200/200) wyczerpali inni agenci po moich 4 zapytaniach. Dlatego badania Facebook IQ (0,25 s, 47%/74%, 1,7 s / 2,5 s) znam tylko ze streszczeń wyszukiwarki albo z wiedzy własnej. |
| Wiedza własna modelu | — | **[WIEDZA]** | Oznaczana wprost, nie traktować jako potwierdzonej. |
| WebFetch | 0 | — | facebook.com zablokowany. Nie próbowałem innych domen, bo źródła pierwotne dostarczył MCP. |

**Hierarchia dowodów:** A = Meta albo inne źródło pierwotne (artykuł Help Center, dokumentacja). **Uwaga:** liczby o skuteczności („21% niższy koszt…”) pochodzą z testów Meta na reklamodawcach Meta. Oznaczam je jako **A (deklaracja Meta)**. Że Meta tak twierdzi, jest pewne. Że ten efekt pojawi się u konkretnego klienta w PL, już nie. B = badania / duże zbiory danych (np. Facebook+Nielsen znane z drugiej ręki). C = obserwacje praktyków. D = hipoteza.

**Najważniejsza zmiana względem powszechnej wiedzy praktyków:** kilka zasad, które krążą w branży, jest dziś **nieaktualnych albo niepełnych**:
- reguła 20% tekstu,
- „opis 30 znaków”,
- „IG feed = 1:1”,
- „Advantage+ creative to tylko opcja”,
- „Qualified leads bez CRM”.

Szczegóły są w sekcji 2.

---

## 2. Kluczowe ustalenia

Format: **Teza** | Poziom | Źródła [tryb] | Dane/cytat | Implikacja dla systemu kreacji

### 2A. Specyfikacje, proporcje, placementy

**A1. Nie ma już limitu tekstu na grafice. Narzędzie „text overlay” wycofano.** | A | [PEŁNY] Best practices for image ads — https://www.facebook.com/business/help/388369961318508
- Cytat: *„there is no longer a limit on the amount of text that can exist in your ad image. the text overlay tool is no longer available.”*
- Ten sam artykuł zaleca: *„if you want to add text to an image it shouldn't obstruct the visuals. use a modern, clean font in a large enough type size and a contrasting hue.”*
- Kontekst historyczny [WIEDZA]: reguła 20% (siatka 5×5) była twardym limitem do ok. 2018. Potem system obniżał zasięg reklam z dużą ilością tekstu. Narzędzie wycofano ok. września 2020. Z tego okresu pochodzi popularna (niezweryfikowana w tej sesji) teza „mniej tekstu = tańsze wyświetlenia”.
- **Implikacja:** nie blokować grafik z tekstem. Oceniać je jakościowo: czytelność na telefonie, kontrast, jeden komunikat, brak zasłaniania kluczowego obrazu, strefa bezpieczna. Grafika „tekstowa” (np. pytanie kwalifikujące albo lista warunków) jest dozwolona. O jej skuteczności decyduje test, nie reguła.

**A2. Feed: Meta rekomenduje 4:5 dla Facebook Feed (obrazy i wideo). Dla IG Feed Help Center jest niespójny (1:1 albo 4:5).** | A (ze sprzecznością) | [PEŁNY] Best practices for aspect ratios — https://www.facebook.com/business/help/103816146375741 ; Aspect ratios supported by placements — https://www.facebook.com/business/help/682655495435254 ; Design requirements for Instagram feed ads — https://www.facebook.com/business/help/430958953753149
- Cytat 103816146375741: *„vertical 4:5 is recommended for single-image ads to be delivered to the ad placement facebook feed. 1:1 is recommended for single-image ads to be delivered to instagram feed.”*
- Cytat 430958953753149: *„instagram feed supports image media ratios from landscape (1.91:1) to vertical (9:16), however taller media may be automatically cropped to the recommended aspect ratio of 4:5.”*
- 682655495435254: FB Feed *„the 4:5 aspect ratio is recommended… on the computer version of facebook feed, the video will be shown with a 1:1 aspect ratio”*. Lista obsługiwanych proporcji obejmuje już **2:3**.
- IG video best practices: *„as of late 2024, tall video ads (>4:5) in feed are no longer cropped and now match the organic video format, with headers overlaid on top. for tall videos, use the reels safe zone”* — https://www.facebook.com/business/help/188534925073536
- **Implikacja:** domyślny zestaw to **4:5 (feed) + 9:16 (Stories/Reels/Status)**, opcjonalnie 1:1. Kluczowe elementy 4:5 trzymać w środkowym kwadracie 1:1, bo desktop i część wariantów tnie do 1:1. Wideo 9:16 w feedzie IG podlega strefie bezpiecznej Reels.

**A3. Stories/Reels/Status: 9:16, zalecana rozdzielczość 1080×1920. Minimalne piksele wg Help Center są niskie.** | A | [PEŁNY] Design requirements for Instagram Stories ads — https://www.facebook.com/business/help/2222978001316177 ; Recommended minimum image pixel requirements — https://www.facebook.com/business/help/469767027114079
- Stories: *„recommended resolution: 1080 x 1920… minimum: 600 x 1067”*. Obrazy w Stories wyświetlają się domyślnie 5 s. Wideo do 60 min, plik do 4 GB, obraz do 30 MB.
- Minimum: FB Feed 1:1 1080×1080, **4:5 1440×1800**; Stories/Reels 1080×1080 (minimum!); WhatsApp Status 500×320.
- **Implikacja:** eksport master 9:16 w 1080×1920 (lub 1440×2560), 4:5 w 1080×1350 (lead ads spec) albo 1440×1800 (min. dla FB feed wg nowszego artykułu). Kolory RGB, nie CMYK (https://www.facebook.com/business/help/418015731022150).

**A4. Strefy bezpieczne. Meta w Help Center podaje dziś opis jakościowy plus dwie liczby. Procenty 14/35/6 znam tylko z wyszukiwarki.** | A (jakościowo) / B–C (liczby 14/35/6) | [PEŁNY] About text overlays and the safe zone — https://www.facebook.com/business/help/980593475366490 ; Creative best practices for stories — https://www.facebook.com/business/help/304846896685564 ; [WYSZUKIWARKA] behaviour.digital „Meta Reels Safe Zone 14% Top 35% Bottom 6% Sides: The 2026 Official Guide” — https://behaviour.digital/post/meta-reels-safe-zone-14-top-35-bottom-6-sides-the-2026-official-guide ; https://blog.adnabu.com/meta-ads/meta-safe-zones/ ; https://billo.app/blog/meta-ads-safe-zones/ ; https://www.1clickreport.com/blog/meta-ads-creative-safe-zones-2026-guide
- HC 980593475366490: *„for ads with a 9:16 aspect ratio in stories, reels, feed and facebook in-stream reels, keep the edges (top, bottom and sides) free of key creative elements, text and logos. for instagram feed ads using non-9:16 aspect ratios (such as 1:1 or 4:5) keep the bottom and side edges free…”*
- Ten sam artykuł: *„on devices with screens that are taller than the 9:16 aspect ratio, we may either zoom the creative… (which can crop areas outside the safe zone)”* oraz *„if you're including disclaimers on your reels ads, you should leave the bottom 40% of your ad free from text, logos and other key creative elements.”*
- W Ads Managerze jest przełącznik „safe zone guardrail” (żółta nakładka).
- HC 304846896685564 (Stories, naklejka CTA): *„leave roughly 14% of the top and 20% of the bottom of your creative free from text, logos and other key creative elements to prevent the sticker from covering them.”*
- Wyszukiwarka (blogi, nie Meta): *„Meta consolidated Facebook Stories, Facebook Reels, Instagram Stories, and Instagram Reels into a single 9:16 safe zone in March 2026… 14% at the top (about 270 pixels), 6% on each side (about 65 pixels), and up to 35% at the bottom (about 672 pixels).”* Nie widziałem tego w źródle Meta.
- **Implikacja:** reguła systemowa dla 9:16 (1080×1920): **góra 14% (~270 px), dół 35% (~670 px), boki 6% (~65 px) wolne od tekstu, logo i twarzy/produktu**. Przy disclaimerze prawnym na Reels dół 40%. To wariant najbardziej konserwatywny, zgodny z oboma źródłami. Tekst kluczowy umieszczać w środku ekranu (patrz A5).

**A5. Tekst na Reels/Stories działa najlepiej w środku ekranu. Jeden komunikat, jeden punkt.** | A | [PEŁNY] Best practices for Instagram video ads — https://www.facebook.com/business/help/188534925073536 ; Creative best practices for stories — https://www.facebook.com/business/help/304846896685564
- *„use bold, clear text overlays: especially for reels and stories, where text in the middle of the screen is most effective.”*
- *„pair text with focal point: ads that include centrally located text… at a specific focal point can be helpful in driving conversion metrics.”*
- *„use text to emphasize key messages, but keep your focus on one point.”*
- Overlay best practices (980593475366490): *„don't communicate too many messages because ads usually only have one call to action.”*
- **Implikacja:** szablon 9:16 = hook/teza w środkowej 1/3, maks. 1 myśl na ekran/scenę, kontrast i duża czcionka.

**A6. Długość wideo: Meta dopuszcza długie formaty, ale zaleca krótkie (feed <15 s, Stories <10 s, 6–15 s). Dla Lead Ads specyfikacja mówi „do 15 s”.** | A | [PEŁNY] https://www.facebook.com/business/help/188534925073536 ; Design specifications for lead ads — https://www.facebook.com/business/help/908491205873167 ; Video length specifications — https://www.facebook.com/business/help/817989058548892 ; IG Reels ads — https://help.instagram.com/546362593027755
- *„shorter videos (under 15 seconds) tend to perform best in feed. stories ads perform best under 10 seconds.”*
- *„keep it concise: shorter videos (6–15 seconds) are more effective, especially in feed and stories.”*
- ALE: *„for some objectives, longer videos (up to 60 seconds) may be appropriate, but monitor drop-off rates.”*
- Lead ads: *„length: up to 15 seconds… the recommended video length is a best practice to encourage people to view the entire video… people are more likely to watch a shorter video than a longer one.”*
- Maksima techniczne: FB Feed 241 min, FB Stories 1–120 s, IG Feed/Stories 60 min, IG Reels ads do 15 min, in-stream mobile 5 s–10 min. Stories: wideo ≥10 s może zostać automatycznie pocięte na karty (https://www.facebook.com/business/help/348328642954708).
- **Implikacja:** portfel długości: 6–15 s (zatrzymanie i jedna obietnica) plus 30–60 s (wyjaśnienie oferty dla leadów „rozumiejących ofertę”, zgodnie z celem biznesowym KWIATEKmedia). Że dłuższe wideo poprawia jakość leada, to **hipoteza D**. Do testu z mierzeniem jakości w CRM, nie CPL.

**A7. Karuzela: 2–10 kart (IG Stories maks. 3). Meta domyślnie zmienia kolejność kart.** | A | [PEŁNY] Design specifications for carousel ads — https://www.facebook.com/business/help/1114358518575630 ; Show best-performing cards first — https://www.facebook.com/business/help/120435098301466
- 1:1 (1080×1080), 9:16. 4:5 w karuzeli tylko dla katalogu. Wideo w karuzeli: zalecane 15 s. Tekst 125, nagłówek 40, opis linku 25.
- *„the highlight carousel card toggle is on by default. if you turn it off, your carousel cards will show in the order that you have arranged them.”*
- **Implikacja:** karuzela narracyjna (krok 1→2→3, „jak to działa”) **wymaga wyłączenia** „highlight carousel card”. W przeciwnym razie każda karta musi działać samodzielnie.

**A8. Autoplay wymaga widoczności pikseli: IG Feed 25%, FB Feed/Reels 50%, Stories/WA Status 100%.** | A | [PEŁNY] Video ad playing specifications by placement — https://www.facebook.com/business/help/2013114112289197
- Od marca 2026 placement FB Feed obejmuje też kartę „Friends”.
- **Implikacja:** w feedzie pierwsza klatka jest widziana częściowo i często statycznie. Pierwsza klatka / miniatura musi działać jak statyczna reklama (teza i obraz), a nie jak czarna plansza lub logo-intro.

**A9. Od marca 2026 reklamy single media w FB Feed nie pokazują URL w stopce. Etykieta „Sponsored” zmieniła się na „Ad”.** | A | [PEŁNY] https://www.facebook.com/business/help/388369961318508 ; https://www.facebook.com/business/help/152143699744690
- **Implikacja:** nie polegać na domenie w stopce jako sygnale zaufania. Marka lub logo w kreacji mają większe znaczenie.

**A10. Reels: fullscreen pionowo, z dźwiękiem, bez licencjonowanej muzyki, bez „recyklingu” z innych aplikacji.** | A | [PEŁNY] Create Instagram Reels ads — https://help.instagram.com/546362593027755 ; Tips and best practices for Facebook Reels — https://www.facebook.com/business/help/1708053352711643 ; About ads on reels — https://www.facebook.com/business/help/437348354643456
- *„we recommend that your video ad creative includes music or sound to better fit the reels placement… your instagram reels cannot use licensed music. instead, use original audio or royalty-free music, like what's available in sound collection… shouldn't contain face and camera effects, gifs or product tags.”*
- Organiczne Reels: unikać materiałów rozmytych, ze znakami wodnymi innych aplikacji, z ramką, poziomych.
- Od listopada 2025 znikają „post-loop ads on reels”. Na FB od czerwca 2025 każde wideo to Reel.
- **Implikacja:** żadnych watermarków TikTok/CapCut, żadnych ramek, audio z Sound Collection albo własne (głos).

**A11. Stories: szybkość, wiele krótkich scen, ruch, marka lub kluczowy komunikat na początku, dźwięk. Nagrania telefonem mają wyższy ad recall i intencję niż studio.** | A (deklaracja Meta „based on the results of several research studies”) | [PEŁNY] https://www.facebook.com/business/help/304846896685564
- *„mobile shots tend to outperform studio shots for ad recall and intent, while studio shots tend to drive higher brand awareness.”*
- *„ads that have short, concise scenes tend to perform better than long slow scenes.”*
- *„ads that use motion tend to perform better.”*
- *„if you use the awareness objective, focus your ad on people. if you use the engagement, leads or sales objective, focus on products.”*
- Unikać zbędnych naklejek, emoji, GIF-ów.
- **Implikacja:** dla lead gen format „nagrane telefonem, ekspert/właściciel mówi do kamery” ma poparcie Meta (intencja). Studio zostawić do budowania marki.

### 2B. Copy: limity znaków, ucinanie, „See more”

**B1. Zalecane długości: primary text 125, headline 40, description 25 znaków (w starszym artykule o lead ads: 30). Tekst może być ucięty jeszcze wcześniej.** | A (sprzeczność 25 vs 30) | [PEŁNY] Creative best practices for text in ads — https://www.facebook.com/business/help/223409425500940 ; Design specifications for lead ads — https://www.facebook.com/business/help/908491205873167 ; Carousel specs — https://www.facebook.com/business/help/1114358518575630
- *„the recommended text length for most placements is 125 characters for the primary text field, 40 characters for the headline field and 25 characters for the description field. however, your text may be further truncated across various placements and devices.”*
- *„keep ad copy short: primary text should span 1-3 lines at most.”*
- *„communicating what you want people to do at a glance is the most important goal of your ad.”*
- Lead ads spec: *„primary text: 125 characters, headline: 40 characters, description: 30 characters… the recommended text length refers to how many characters of ad copy may be displayed on smaller screens.”*
- IG: caption do 63 000 znaków (dolny arkusz po tapnięciu). URL-e w tekście IG nie są klikalne. W kolekcji na IG Feed wyświetla się tylko primary text.
- IG Stories: *„if you'd prefer that your primary text is shown on a single card, make sure your primary text is less than 100 characters”* (https://www.facebook.com/business/help/679041123045316)
- **Implikacja:** wiedza, że ~125 znaków to widoczna część przed „…więcej”, to nie jest limit długości. Dłuższy primary text jest dozwolony. Wymóg systemu: **pierwsze ~125 znaków musi samodzielnie przenosić hook, ofertę i kwalifikację („dla kogo”)**, bo reszta jest ukryta. Headline ≤40, description ≤25 (bezpieczniej), a description tylko na treści nieistotne (patrz B2).

**B2. Description może się nie wyświetlić. Meta zaleca umieszczać w nim tylko treści nieistotne.** | A | [PEŁNY] Create an ad with text generation — https://www.facebook.com/business/help/497610041230617
- *„your description should contain only nonessential information.”*
- Przy celach awareness / reach / 2-sec video views na FB Feed (mobile) stopka wideo (headline, CTA) się nie wyświetla (https://www.facebook.com/business/help/418015731022150).
- **Implikacja:** nigdy nie umieszczać w description warunków oferty, ceny ani disclaimera.

**B3. Meta może mieszać i przestawiać teksty między polami.** | A | [PEŁNY] Troubleshoot ad rendering — https://www.facebook.com/business/help/418015731022150 ; About dynamic creative — https://www.facebook.com/business/help/170372403538781 ; Text generation — https://www.facebook.com/business/help/180641596861873
- *„optimize text per person… text that you provide may appear in any location of your ad and may appear with any other text you've provided.”*
- Dynamic creative („optimize creative for each person”): *„swapping text between fields, such as primary text and headline.”*
- *„make sure that the combinations of your primary text, headline and description will work together and don't contradict each other.”*
- **Implikacja:** każdy wariant tekstu musi być **modułowy**: sensowny sam i w dowolnej kombinacji. Żadnych odwołań typu „jak wyżej” albo „kliknij poniżej”. Disclaimer nie może być rozbity między pola.

**B4. Przykłady „efektywnych opcji tekstu” wg Meta: cena, dane liczbowe, cytat z opinii, pytanie, doświadczenie, cechy.** | A (poradnik, nie badanie) | [PEŁNY] https://www.facebook.com/business/help/180641596861873
- Przykłady Meta: *„all-inclusive services available for just $19.99!”*, *„80% of new customers save money by calling us!”*, *„"literally the best pizza in seattle." —recent customer”*, *„want a free set of dumbbells?”*
- **Implikacja:** biblioteka kątów copy może się na tym opierać. Pytania są dozwolone, **o ile nie dotyczą cech osobistych** (patrz I1).

### 2C. Wideo: dźwięk, napisy, hook, marka

**C1. Projektować tak, żeby działało bez dźwięku, ale dźwięk (głos/muzyka) zwiększa wyniki. Meta przytacza 2,25× wyższy CTA CTR przy oglądaniu z dźwiękiem w feedzie.** | A (deklaracja Meta, bez metodologii) | [PEŁNY] Best practices for Instagram video ads — https://www.facebook.com/business/help/188534925073536 ; Creative best practices for stories — https://www.facebook.com/business/help/304846896685564 ; Stories templates — https://www.facebook.com/business/help/449517262468597
- *„design for sound-off: most users watch with sound off, so ensure your message is clear visually. use subtitles, supers, and strong visuals. however, adding music or voiceover can enhance engagement for those who do listen.”*
- *„sound-on boosts results: feed video ads perform significantly better when watched with sound on (2.25x higher cta ctr).”*
- Stories: *„the majority of stories with voice-over or music tend to drive better results compared to ads without any sound.”*
- Stories templates: *„many people watch stories with their sound on.”*
- **Sprzeczność:** „most users watch with sound off” vs „many people watch stories with their sound on” (patrz sekcja 3).
- **Implikacja:** standard „dual-track”: komplet napisów i supers (sound-off) **plus** głos lub muzyka (sound-on). Nigdy tylko jedno.

**C2. Automatyczne napisy w Ads Managerze działają tylko po angielsku. Polskie napisy trzeba wgrać jako .srt albo wypalić w wideo.** | A | [PEŁNY] Add captions to your video ad — https://www.facebook.com/business/help/1675722002698686 ; Auto-generated subtitles on Facebook reels — https://www.facebook.com/business/help/593107135335436
- *„automated captions are only available in english and can only be used on facebook and instagram.”*
- Plik SRT: `filename.pl_PL.srt`. Napisy są przypięte do **wideo**, nie do reklamy, czyli zmiana dotyczy wszystkich reklam z tym wideo.
- Organiczne auto-napisy na FB Reels nie obsługują polskiego.
- **Implikacja:** w PL napisy muszą być częścią produkcji (burned-in, w strefie bezpiecznej) albo przygotowanym SRT. System generujący scenariusze wideo powinien od razu produkować tekst napisów.

**C3. Marka i kluczowy komunikat w ciągu pierwszych 3 s. Hook w pierwszej klatce. Kluczowa informacja wcześnie.** | A | [PEŁNY] https://www.facebook.com/business/help/188534925073536 ; https://www.facebook.com/business/help/304846896685564
- *„showcase your brand early: feature your brand and key message within the first 3 seconds. early branding increases recall and drives better results.”*
- *„hook viewers quickly: use motion or a compelling visual in the first frame.”*
- *„provide key info early: many users interact before the video ends.”*
- **Implikacja:** struktura: 0–1 s hook wizualny, 0–3 s teza/problem i marka (np. logo w rogu w strefie bezpiecznej albo osoba marki), CTA i oferta wcześnie, powtórzone na końcu.

**C4. Badania Facebook IQ o uwadze w feedzie (0,25 s; 1,7 s vs 2,5 s; 47% / 74% wartości w 3 / 10 s). Liczby są szeroko cytowane, ale nie przeczytałem źródła pierwotnego.** | B (liczby z drugiej ręki, 2016) | [WYSZUKIWARKA] Facebook IQ „Capturing Attention in Feed: The Science Behind Effective Video Creative” — https://www.facebook.com/business/news/insights/capturing-attention-feed-video-creative ; „Stand out in feed: Optimising video creative on mobile” — https://en-gb.facebook.com/business/news/insights/stand-out-in-feed-optimizing-video-creative-on-mobile ; Social Media Today „Facebook Releases New Report on Maximizing the Potential of Your Video Assets” — https://www.socialmediatoday.com/social-business/facebook-releases-new-report-maximizing-potential-your-video-assets ; https://www.yansmedia.com/blog/facebook-video-statistics ; https://mediakix.com/blog/facebook-video-statistics-everyone-needs-know/ ; https://www.socialchamp.com/blog/facebook-stats/ ; Adweek — https://www.adweek.com/brand-marketing/how-brands-can-still-win-over-customers-as-attention-spans-decrease-on-social/
- Streszczenie wyszukiwarki: *„Facebook found with Nielsen that up to 47% of the value in a video campaign is delivered in the first three seconds, while up to 74% of the value is delivered in the first 10 seconds.”*
- *„Facebook users spend an average of 1.7 seconds with any piece of mobile content… compared to 2.5 seconds on desktop.”*
- (Nielsen) *„38 percent of brand recall, 23 percent of brand awareness and 25 percent of purchase intent is driven by video impressions shorter than two seconds.”*
- 0,25 s (ludzie przypominają sobie treść z mobilnego feedu po 0,25 s ekspozycji): **[WIEDZA]**, nie potwierdziłem tego w tej sesji (wyszukiwarka nie zwróciła fragmentu z tą liczbą).
- Kontrargumenty [WIEDZA]: to badania z 2016 r., głównie o **marce** (recall/awareness), nie o konwersji i jakości leada. „Wartość” mierzono metrykami brand lift. Środowisko (Reels, dźwięk) zmieniło się od tego czasu.
- **Implikacja:** uzasadniają zasadę „pierwsze 1–3 s niosą większość efektu brandowego”. Dla jakości leada nie wynika z nich, że krótszy znaczy lepszy.

**C5. Wideo stanowi „prawie połowę wyświetleń reklam i >60% czasu” na IG. 98% osób trzyma telefon pionowo. Reklamy wyglądające natywnie działają lepiej.** | A (deklaracja Meta) | [PEŁNY] https://www.facebook.com/business/help/188534925073536
- *„build for mobile: 98% of users hold their phones vertically.”*
- *„native feel: ads that blend in with organic content perform better. avoid overly "ad-like" creative.”*
- *„users are more likely to watch longer and engage more deeply with video ads in feed than in reels.”*
- **Implikacja:** pion jako domyślny format. Estetyka natywna (UGC, telefon, mówiąca osoba). Dłuższe wyjaśnienia raczej w feedzie niż w Reels.

**C6. Testowanie wg Meta: do 10 kreacji na zestaw, 5 najlepszych zostaje jako evergreen, test ≥4 dni, łączyć wideo i statyki.** | A (poradnik) | [PEŁNY] https://www.facebook.com/business/help/188534925073536 ; Managing ad volume — https://www.facebook.com/business/help/2720085414702598 ; Ad limits per page — https://www.facebook.com/business/help/766697140509126
- *„start with up to 10 creatives per ad set, then keep the top 5 as evergreen. run tests for at least 4 days… mix video and static ads for better performance and to reduce creative fatigue.”*
- *„too many ads can result in worse performance… decrease ads per ad set, but maintain diverse creative assets per ad set. one ad can contain multiple (up to 10) creative assets.”*
- Limit reklam na stronę: 250 (strony z wydatkami <100 tys. USD / mies.).
- **Implikacja:** zestaw testowy to ≤10 reklam, zróżnicowanych koncepcyjnie (nie 10 wariantów tego samego).

**C7. Zmęczenie kreacji: Meta sama oznacza „creative limited” i „creative fatigue”. Nowa kreacja ma być „materially different”.** | A | [PEŁNY] About creative fatigue recommendations — https://www.facebook.com/business/help/1346816142327858
- Status „creative limited”: koszt/wynik wyższy niż w przeszłości, ale <2×. „Creative fatigue”: ≥2×.
- *„we consider all recent exposures of the ad's image or video, including those from other campaigns from your page.”*
- Rekomendacja: *„create a new ad with a new image or video that is materially different from the original creative… keeping your original ad active instead of pausing… may maximize results.”*
- **Implikacja:** iteracje muszą zmieniać obraz/wideo w istotny sposób (inny kąt, osoba, format, scena), nie tylko kolor czy nagłówek. To samo wideo w innej kampanii też się „zużywa”.

**C8. Diagnostyka trafności: jakość, zaangażowanie, konwersja. Kombinacja „jakość niska + konwersja niska + zaangażowanie OK” = „click-baity or controversial”.** | A | [PEŁNY] How to use ad relevance diagnostics — https://www.facebook.com/business/help/436113280262012 ; About engagement rate ranking — https://www.facebook.com/business/help/2351270371824148 ; About ad relevance diagnostics — https://www.facebook.com/business/help/403110480493160
- *„this ad is click-baity or controversial. adjust your ad to more clearly represent the product or service you are advertising.”*
- *„engagement-baiting (for example, asking for likes, comments and so on) will not improve your ad's performance.”*
- *„ads that are more relevant cost less and see more results.”* Diagnostyka dostępna od 500 wyświetleń, nie jest wejściem do aukcji.
- **Implikacja:** moduł audytu kreacji może mapować kombinacje rankingów na diagnozy (tabela Meta). Wysoki CTR przy niskiej jakości to sygnał ostrzegawczy (clickbait), a nie sukces.

### 2D. Advantage+ creative, generatywne AI, etykiety AI, twórcy

**D1. Advantage+ creative potrafi zmieniać tekst i obraz. Część ulepszeń jest WŁĄCZONA DOMYŚLNIE, a niektóre wyłącza się tylko w „advanced preview”.** | A | [PEŁNY] About Advantage+ creative — https://www.facebook.com/business/help/297506218282224 ; Turn off Advantage+ creative enhancements — https://www.facebook.com/business/help/1082295769403815 ; Text improvements — https://www.facebook.com/business/help/620917123959992
- *„the media and text you upload may be adjusted to help improve ad performance while maintaining the core message of your campaign.”*
- *„some enhancements can only be turned off in advanced preview, and won't be visible in the ad creative.”*
- **Text improvements** (genAI, domyślnie ON): *„keywords and phrases will be taken from your original ad copy and displayed directly or adjusted to fit better on or around your ad creative, such as text overlays, footers, prominent headlines.”* Opcja „use AI to identify promotional phrases”.
- **Enhance media text** (genAI): *„create alternative text overlays for your image ad… by rephrasing your original message.”* Działa w FB/IG Feed, Reels, IG Stories.
- **Add overlays**, **image generation** (także *„generated text and logo overlays”*), **add animation** (2 s w pętli do 8 s, tylko IG Reels; nie dla obrazów z dużą ilością tekstu, ludźmi, >4 obiektami, logo), **music** (w tym generowana przez AI), **video effects**, **enhance CTA** (dopisuje np. „x% off”), **flexible media** (obraz 9:16 może trafić do feedu; wykrywa ucięcia na obrazach, *„we aren't currently able to detect if objects or text have been cropped out of videos”*).
- „Test new optimizations” w ustawieniach konta: *„test enhancements may be applied to eligible campaigns regardless of if you're opted into advantage+ creative at the ad level”* (https://www.facebook.com/business/help/223409425500940 ; https://www.facebook.com/business/help/418015731022150).
- W raportach nie ma rozbicia na warianty: *„there will not be a breakdown by format or ad creative variation. we recommend using split testing”* (https://help.instagram.com/759279452000505).
- **Ryzyka dla KWIATEKmedia:**
  1. AI może przeformułować tekst na obietnicę sprzeczną z polityką zdrowia/finansów albo z prawem (UOKiK).
  2. Może usunąć lub przesunąć disclaimer.
  3. Może dodać „promocję”, której nie ma.
  4. Może zmienić kolejność kart karuzeli.
  5. Nie ma danych na poziomie wariantu.
- **Implikacja (reguła):** checklista publikacji: przejrzeć *wszystkie* enhancements, także w advanced preview i w ustawieniach konta („test new optimizations”). Dla branż regulowanych (zdrowie, finanse, nieruchomości) i ofert z disclaimerem domyślnie **OFF**: text improvements, enhance media text, enhance CTA/promotions, add overlays, image generation. Testować je świadomie w A/B.

**D2. Generatywne AI Meta nie jest w pełni dostępne dla finansów, zdrowia/pharma, HEC i SIEP ani w niektórych krajach. Text generation działa tylko po angielsku, portugalsku i hiszpańsku.** | A | [PEŁNY] About text generation — https://www.facebook.com/business/help/180641596861873 ; https://www.facebook.com/business/help/620917123959992
- *„text variations with and without personas are currently available when primary text inputs are in english, portuguese and spanish.”*
- *„certain industry verticals such as financial services and pharma/health and ads for housing, employment or financial services/credit (hec), social issues, elections, or politics (seip), along with certain countries, may not have immediate access to all generative ai features.”*
- **Implikacja:** dla polskojęzycznych kampanii nie zakładać, że Meta wygeneruje warianty tekstu. Warianty copy musi produkować nasz system.

**D3. Etykieta „AI info”: reklamy stworzone lub istotnie zmienione narzędziami genAI Meta mogą dostać etykietę przy etykiecie „Ad” albo w „About this ad”. Dla SIEP ujawnienie jest obowiązkowe. Reklamy SIEP są w UE zakazane.** | A | [PEŁNY] Generate image variations — https://www.facebook.com/business/help/1684513971952814 ; Add animation — https://www.facebook.com/business/help/1766652437485798 ; About media created or edited with AI — https://www.facebook.com/business/help/1486382031937045
- *„ad images created or materially edited with certain meta generative ai creative features… may include ai info on the about this ad screen in the three-dot menu of an ad or have an ai info label next to the ad label.”*
- SIEP: obowiązek ujawnienia fotorealistycznych treści AI (realna osoba mówiąca coś, czego nie powiedziała; nieistniejąca realistyczna osoba lub zdarzenie). Automatyczna detekcja narzędzi AI firm trzecich. *„you cannot request removal of automated detected labels.”*
- *„ads about social issues, elections or politics are not allowed to run in the european union.”*
- Czego nie ustaliłem: czy reklamy spoza SIEP z obrazami AI firm trzecich (Midjourney, Higgsfield itd.) dostają automatycznie „AI info” (patrz sekcja 3).
- **Implikacja:**
  1. Zakładać, że fotorealistyczne AI (ludzie, „klienci”, „przed/po”) może zostać oznaczone i obniżyć zaufanie.
  2. Nigdy nie przedstawiać wygenerowanych osób jako prawdziwych klientów ani ekspertów (patrz też I8: zmyślone opinie).
  3. [WIEDZA, do weryfikacji prawnej] Od 2 sierpnia 2026 w UE stosuje się obowiązki przejrzystości z art. 50 AI Act, m.in. oznaczanie deepfake'ów.

**D4. Partnership ads (dawniej branded content ads): reklama z konta twórcy i marki w nagłówku, „signals from both accounts for improved ranking and incremental performance”.** | A (deklaracja jakościowa, bez liczb w HC) | [PEŁNY] About partnership ads — https://help.instagram.com/292748974937716
- *„partner with creators to create more authentic and engaging content that results in more performant ads.”* Twórcy mogą oddawać *„videos or text-only testimonials”*.
- Liczbowe deklaracje Meta o partnership ads (np. niższy CPA) są mi znane tylko jako [WIEDZA]. Nie potwierdziłem ich w tej sesji.
- **Implikacja:** w lead genie lokalnym (usługi, B2C) „twórca” to często klient, ekspert lub lokalna osoba. Warto mieć w portfelu kąt „partnership / testimonial” jako hipotezę (poziom C/D) i testować go.

**D5. Flexible format (do 10 mediów, system dobiera format) dla celu Leads jest ograniczony. Wg HC dotyczy traffic/engagement/sales/app promotion.** | A | [PEŁNY] About the flexible ad format — https://www.facebook.com/business/help/835561738423867 ; About flexible media — https://www.facebook.com/business/help/1126725172362626 ; Aspect ratio best practices — https://www.facebook.com/business/help/103816146375741
- Aspect ratio best practices: *„meta ads manager allows you to upload up to 10 images or videos for a single ad”* („media customization”, może być niedostępne).
- Flexible media dla Leads: *„all conversion locations except website and instant forms, and website and calls”*.
- **Implikacja:** w kampaniach Instant Forms dywersyfikację robić **na poziomie reklam** (3–6 różnych koncepcji), nie licząc na flexible format.

### 2E. Lead Ads / Instant Forms

**E1. Trzy typy formularzy: More volume (domyślny), Higher intent (inline info „firma może się skontaktować” + ekran weryfikacji danych), Rich creative (kolory, obrazy, dodatkowy tekst, obowiązkowe intro).** | A | [PEŁNY] About instant form types — https://www.facebook.com/business/help/252352181957512 ; About lead ads with instant form — https://www.facebook.com/business/help/761812391313386
- Higher intent: *„these features help you receive more intentional submissions and prevent receiving submissions from those people who are only marginally interested… if follow-up or further qualification is required on each lead submitted, using a higher intent instant form may make more sense.”*
- **Ograniczenie:** *„a higher intent instant form will only be delivered to facebook feed and instagram feed on mobile devices. it will not appear on desktop computers.”* (brak Stories/Reels!)
- Rich creative: *„provide more context about your business or service… and potentially increase lead quality.”*
- Wysyłka formularza działa tylko w aplikacjach FB/IG (nie w przeglądarce mobilnej). Na IG lead ads są tylko w aplikacji mobilnej (https://www.facebook.com/business/help/588763988207510 ; https://www.facebook.com/business/help/563690893827148).
- **Implikacja:** domyślnie dla celu „jakość, nie tani lead”: **Higher intent** (świadomy, że zawęża placementy do feedów) albo **Rich creative** (więcej kontekstu). Porównanie w A/B przy tej samej kreacji. Rich creative pozwala umieścić „jak to działa”, opinie i zachęty (E3). To wzmacnia „rozumienie oferty”.

**E2. Struktura formularza i limity: intro (opcjonalne), pytania (min. 1, maks. 15), polityka prywatności (wymagana), zakończenie (60 znaków nagłówka i CTA). Po publikacji formularza nie da się go edytować.** | A | [PEŁNY] Add custom questions — https://www.facebook.com/business/help/774623835981457 ; Add an intro section — https://www.facebook.com/business/help/1664458123767694 ; Add a message for leads — https://www.facebook.com/business/help/314132612401196 ; Create instant form in Business Suite — https://www.facebook.com/business/help/179258984144385 ; Privacy policies — https://www.facebook.com/business/help/1247534515288168 ; Custom disclaimer — https://www.facebook.com/business/help/1550411888622740
- Intro (More volume/Higher intent): nagłówek ≤60 znaków, opis jako akapit albo lista (≤80 znaków na punkt), obraz tła.
- Intro Rich creative: nagłówek ≤45, opis 81, 1–3 korzyści po ≤57 znaków, sekcje „How it works” (kroki), „Products” (karuzela), „Social proof” (imię recenzenta i cytat), „Incentives” (+ disclaimer).
- Typy pytań: multiple choice (*„we recommend using ranges”*), short answer (walidacja min./maks. długości), conditional answer (CSV), store locator, appointment request.
- Zakończenie („message for leads”): nagłówek ≤60, CTA ≤60. CTA: strona www (+ kod promo), view file (PDF/JPG/PNG ≤10 MB), call business, book time (kalendarz/partner), chat on WhatsApp (może włączyć się automatycznie przy podpiętym WA).
- Custom disclaimer ze zgodami (checkboxy wymagane lub opcjonalne). Nie da się go dodać do działającego formularza, trzeba go zduplikować. Privacy policy nie może być linkiem do PDF.
- *„after you publish an instant form, you won't be able to edit it.”*
- **Implikacja:** system generuje formularz jako **komplet copy**: intro z konkretnym „co dostaniesz i co się stanie po wysłaniu” oraz kto zadzwoni i kiedy, pytania kwalifikujące w formie przedziałów, ekran zakończenia z następnym krokiem (np. „Zadzwonimy w ciągu 24 h z numeru…”, „Umów termin”, „Pobierz cennik”). Zmiany w formularzu oznaczają nowy formularz (wersjonowanie).

**E3. Oficjalne best practices Meta: mniej pytań to więcej leadów, więcej pytań wielokrotnego wyboru to lepsza jakość. Testować długość formularza pod koszt konwersji, nie tylko CPL.** | A | [PEŁNY] Best practices to create lead ads — https://www.facebook.com/business/help/435270316658768
- *„fewer multiple choice questions results in more form submissions, whereas more multiple choice questions typically results in more quality leads.”*
- *„limit the number of short answer questions… try using multiple choice questions to collect similar information.”*
- *„consider running an a/b test where you measure completion rates, cost per lead and cost per conversion against the length of the form.”*
- *„clearly communicate why people should fill out your form.”*
- *„use ad scheduling… to ensure that your team will be ready to respond to leads.”*
- Lookalike: *„we recommend using an audience based on existing customers rather than those who have submitted a form.”*
- Retargeting osób, które otworzyły formularz i go nie wysłały (engagement custom audience).
- **Implikacja:** Meta **sama** potwierdza trade-off wolumen vs jakość. Zgodnie z celem KWIATEKmedia domyślnie 2–4 pytania wielokrotnego wyboru kwalifikujące (termin, zakres, lokalizacja lub dostępność, budżet w przedziałach — patrz ryzyko w I3), 0–1 pytanie otwarte. Sukces mierzyć kosztem **zakwalifikowanego** leada i sprzedaży z CRM.

**E4. Logika warunkowa pozwala odfiltrować nie-leady („close form”) jeszcze przed wysłaniem. Meta ostrzega, że podnosi CPL.** | A | [PEŁNY] Use conditional logic in instant forms to qualify your leads — https://www.facebook.com/business/help/3373123166040766 ; Conditional answers — https://www.facebook.com/business/help/154286325106161
- *„filter out leads that don't meet your criteria and direct different categories of leads to specific landing pages.”*
- *„the use of conditional logic may increase your cost per lead.”*
- *„only the people who answer with a response determined to be a lead will be able to submit the form… you won't receive the information for anyone who responds with an answer that closes the form.”*
- Każda odpowiedź ma krok: przejdź do pytania / wyślij formularz (własny ekran końcowy) / zamknij formularz (ekran dla „nie-leada”). Wymagany co najmniej jeden „submit” i jeden „close”.
- **Implikacja:** twarde dyskwalifikatory (np. poza obszarem usług, brak własności nieruchomości, termin „nie planuję”) obsługiwać przez **close form** z uprzejmym ekranem (np. poradnik PDF). To bezpośrednio realizuje cel „mniej, ale lepszych leadów”. Wyższy CPL jest tu oczekiwany i trzeba to zakomunikować klientowi.

**E5. Weryfikacja telefonu kodem OTP (WhatsApp/SMS) odfiltrowuje boty i fałszywe numery. Może być włączona domyślnie. Ogranicza dostarczanie do FB/IG mobile.** | A | [PEŁNY] Enable the SMS verification feature — https://www.facebook.com/business/help/898260175547909
- *„helps improve your lead quality by filtering out fake leads such as spam bots and bad actors.”* Numer stacjonarny nie przejdzie weryfikacji. Ponowna weryfikacja tego samego numeru nie jest wymagana przez 90 dni. Kolumna `phone_number_verified`.
- *„this feature may be enabled by default for eligible advertisers.”* *„can only be delivered to facebook and instagram ad placements on mobile devices.”* *„may affect the number of generated leads and the cost per lead.”*
- **Implikacja:** włączać domyślnie dla usług z kontaktem telefonicznym. Jeśli klient przyjmuje leady z numerów stacjonarnych (B2B), wyłączyć.

**E6. „Pytania zabronione” w formularzu: finanse (dochód, zdolność kredytowa, zadłużenie, upadłość), zdrowie, ubezpieczenia, karalność, poglądy, orientacja, związki zawodowe, identyfikatory, a także custom questions dublujące pola prefill.** | A | [PEŁNY] Questions prohibited on your instant form — https://www.facebook.com/business/help/219356599612120
- *„financial information including, but not limited to, credit or debit card numbers, bank account numbers, routing numbers, credit score, net worth, income, bankruptcy status and debt status”*
- *„health information including, but not limited to, current or previous physical or mental ailments either directly or within the family, medical treatments or side effects experienced from medication, or information about medical conditions or disabilities”*
- *„insurance information including… insurance company name, plan details, usage or policy numbers”*
- *„the same or substantially similar information to the questions available in the prefill questions field”*
- *„if your instant form includes any questions that are found to violate the advertising standards, your lead ad will not run.”*
- **Implikacja (krytyczna dla kwalifikacji):** nie pytać wprost „Jaki masz dochód?”, „Czy masz kredyt/długi?”, „Jaką masz chorobę?”, „Czy masz BIK?”. Zamiast tego pytać o **zamiar, zakres, termin, preferencje usługi** („Jaki zakres prac Cię interesuje?”, „Kiedy chcesz rozpocząć?”). Kwalifikację wrażliwą przenieść na rozmowę telefoniczną (po zgodzie) albo na stronę www z właściwą podstawą prawną (RODO). Pola kontaktowe tylko przez prefill, nie przez custom question.

**E7. Pola prefill (imię, e-mail, telefon, numer WhatsApp, adres, kod pocztowy, dane pracy, dane demograficzne) wypełniają się automatycznie z profilu. Użytkownik może je edytować.** | A | [PEŁNY] About prefill questions — https://www.facebook.com/business/help/438193446367413
- **Implikacja [D, hipoteza praktyków]:** automatyczne wypełnianie ułatwia wysłanie formularza „odruchem”. To jeden z mechanizmów niskiej jakości leadów, stąd E1/E3/E4/E5 jako przeciwwagi.

**E8. Optymalizacja pod jakość: od kwietnia 2026 cel „maximize number of qualified leads” (dawniej conversion leads) jest niedostępny dla NOWYCH kampanii bez integracji Conversions API. Istniejące kampanie od sierpnia 2026.** | A | [PEŁNY] About performance goals for lead ads — https://www.facebook.com/business/help/782657799338685 ; How to create a lead ad — https://www.facebook.com/business/help/375478503258484
- *„beginning april 2026, the qualified leads performance goal is no longer available for new campaign creation without conversions api integration. existing campaigns will be impacted beginning august 2026.”*
- Deklaracja Meta: *„lead ads that use conversions api for crm integration and the performance goal maximize number of qualified leads for instant forms saw 21% lower cost per quality leads compared to lead ads that used maximize number of leads”* (A/B z kontrolą budżetu, 567 reklamodawców, 13–27.01.2025, globalnie). Dla formularzy www: **9,5%** niżej (69 reklamodawców, 21.08–14.09.2025).
- Opcja bez CRM (w części kont): Instant forms + „meta source” + zdarzenia follow-up „leads with WhatsApp conversations”: *„your ad will also use whatsapp conversation signals to optimize delivery to reach people who are more likely to engage with your business through whatsapp, not just fill out the form.”*
- **Implikacja (strategiczna):** żeby Meta optymalizowała pod ludzi, którzy zostają klientami, **trzeba odsyłać z CRM etapy lejka** (CAPI for CRM). Bez tego algorytm optymalizuje pod „wysłanie formularza”, czyli pod tani lead. To argument sprzedażowy i wdrożeniowy dla KWIATEKmedia (arkusz/CRM → Make/Zapier → CAPI).

**E9. CAPI for CRM: wysyłać wszystkie etapy lejka, łącznie z „raw lead”, z lead_id (15–16 cyfr). Do pełnej optymalizacji mija ok. 1–2 miesiące. Nazwy etapów nie mogą zawierać informacji wrażliwych.** | A | [PEŁNY] Use a partner to connect your CRM — https://www.facebook.com/business/help/317857030149451 ; Zapier CAPI for CRM — https://www.facebook.com/business/help/848158520256071 ; Conversions API for CRM for platforms — https://developers.facebook.com/docs/marketing-api/conversions-api/guides/conversions-api-crm-for-platforms ; About prohibited information — https://www.facebook.com/business/help/361948878201809 ; Qualified leads metric — https://www.facebook.com/business/help/344136647998618
- *„make sure you send all the stages in your sales funnel, including the raw lead stage… during the learning phase, upload crm events for each lead status update.”*
- Dokumentacja dla partnerów: po integracji podłączenie CRM trwa 1–2 dni, konfiguracja lejka <1 dzień, learning phase 2–4 tygodnie, łącznie *„~1-2 months”*. *„advertisers may run conversions leads performance campaigns during the learning period, but will not benefit from the full performance lift until it is complete.”*
- Prohibited information: *„the names you choose and criteria you establish for your events, conversions, and custom audiences must not reflect, imply, or be based on any prohibited information”*. Przykłady to m.in. zdrowie, zdolność kredytowa, *„loan approvals, denials, or pre-qualifications”*, zadłużenie.
- **Implikacja:** etapy nazywać neutralnie (np. `lead_skontaktowany`, `lead_zakwalifikowany`, `spotkanie`, `sprzedaz`), nigdy `kredyt_odrzucony` ani `pacjent_cukrzyca`.

**E10. Advantage+ leads campaign: Meta deklaruje 14% niższy CPL i 10% niższy koszt zakwalifikowanego leada. Pewność dla kosztu zakwalifikowanego leada wynosi tylko 83%.** | A (deklaracja Meta; słaba statystycznie dla jakości) | [PEŁNY] About Advantage+ leads campaigns — https://www.facebook.com/business/help/992035952809423
- *„19 tests… november 2024 to january 2025… the improvement of cost per lead with more than 95% confidence, the improvement of cost per quality lead with 83% confidence.”*
- **Implikacja:** poprawa CPL jest dobrze udokumentowana, poprawa jakości słabo. System nie powinien obiecywać, że automatyzacja poprawi jakość leadów. Jakość zależy od kreacji, formularza i sygnału z CRM.

### 2F. Alternatywy: wiadomości (WhatsApp/Messenger/IG), połączenia, strona www

**F1. Kampanie na wiadomości z celem „leads through messaging” mają wg Meta 24–31% niższy CPL niż optymalizacja pod rozmowy. W Europie część funkcji i metryk messagingu jest jednak niedostępna.** | A (deklaracja Meta; zastrzeżenie dla UE) | [PEŁNY] About maximizing number of leads using ads that click to message — https://www.facebook.com/business/help/575610661605746 ; Messaging features unavailable in Europe and Japan — https://www.facebook.com/business/help/574941489951914 ; Create ads that click to WhatsApp — https://www.facebook.com/business/help/447934475640650
- Messenger −31% CPL (113 tys. reklamodawców, 09.2024), IG Direct −28% (19 tys., 01–02.2025), WhatsApp −24% (116 tys. kampanii / 43 tys. reklamodawców, 11.2024), Messenger+IG +24% leadów i −29% CPL (111 tys. kampanii, 09.2025).
- Wymogi: WhatsApp potrzebuje ≥10 zdarzeń lead/purchase w 30 dni (etykiety w WA Business w ciągu 7 dni od kliknięcia), IG ≥5 zdarzeń lead.
- UE: *„due to privacy rules in europe and japan, some messaging campaign features may be unavailable for ads delivered to and from europe… ads from advertisers based in europe… page's phone number country code is in europe.”* Metryki, na które to wpływa: *„leads”*, *„messaging conversations started”*, *„on-facebook leads”*, *„appointments scheduled”*.
- WhatsApp Flows („collect info with a form in WhatsApp”) może nie być dostępne.
- **Implikacja:** dla klientów w PL kampanie CTM (click-to-message) traktować jako **opcję do weryfikacji na koncie**, a nie gwarantowaną alternatywę z pełnym raportowaniem. Wartość jakościowa (rozmowa, pytania kwalifikujące w czacie) pozostaje. Po stronie Meta mogą jednak brakować danych do optymalizacji.

**F2. Połączenia: reklamy „call” optymalizują pod 60-sekundowe połączenia (cel Leads). Harmonogram w godzinach pracy daje +25,4% konwersji z połączeń (test Meta).** | A (deklaracja Meta) | [PEŁNY] About lead ads with calling — https://www.facebook.com/business/help/378168646496279 ; Supported objectives for call ads — https://www.facebook.com/business/help/4107704079279896
- *„call ads that were scheduled to run only during business hours delivered 25.4% more call conversions than call ads that didn't”* (08–14.09.2025).
- Metryki są częściowo modelowane. Dla kampanii sprzed 20.06.2025 poza US/AU/BR/CA/MX/IL były niedostępne.
- Placementy (mobile): FB Feed, Marketplace, Reels, Stories, IG Feed, IG Stories.
- **Implikacja:** dla usług „pilnych” (serwis, awaria) warto rozważyć call ads z harmonogramem. Kreacja musi wtedy komunikować „zadzwoń teraz / kto odbierze”.

**F3. Formularz na stronie www (cel Leads → Website) optymalizuje przez Pixel i CAPI. Można równolegle prowadzić Instant Forms, CTM i połączenia.** | A | [PEŁNY] Create a lead ad with website form — https://www.facebook.com/business/help/983639606486840 ; Performance goals — https://www.facebook.com/business/help/782657799338685
- Cel „qualified leads” dla formularzy www: Meta deklaruje −9,5% kosztu zakwalifikowanego leada (69 reklamodawców).
- Jakość landing page wpływa na aukcję. Sygnały: *„landing page bounce rate”*, *„landing page dwell time”* (https://www.facebook.com/business/help/1767120243598011).
- **Implikacja:** strona www to naturalny filtr (tarcie, więcej informacji). Instant Form to niskie tarcie. Wybór zależy od tego, czy klient ma dobrą stronę i Pixel/CAPI. System powinien zadać to pytanie w briefie.

### 2G. Polityki wpływające na kreację (ze szczególnym uwzględnieniem PL/UE)

**G1. Personal attributes: nie wolno twierdzić ani sugerować, że odbiorca ma daną cechę. Obejmuje to też PYTANIA o te cechy. „Ty/Twój” jest dozwolone, jeśli nie łączy się z zakazaną cechą.** | A | [PEŁNY] About Meta's privacy violations and personal attributes policy — https://www.facebook.com/business/help/2557868957763449
- Lista: rasa, etniczność, kolor skóry, pochodzenie narodowe, religia, **wiek**, płeć, orientacja, tożsamość płciowa, **sytuacja rodzinna**, niepełnosprawność, stan medyczny lub genetyczny, **zdrowie fizyczne lub psychiczne**, **trudna sytuacja finansowa**, głosowanie, związki zawodowe, **karalność**, imię.
- *„we also don't allow ads that assert or imply personal attributes in alternative ways. for example, we don't allow ads that ask questions about personal attributes. note that you can use the words "you" or "your" as long as your ad doesn't mention any prohibited personal attributes.”*
- Przykłady naruszeń: *„are you disabled? we can help!”*, *„have you been diagnosed with cancer?”*, *„if you are tired of dealing with depression…”*, *„are you bankrupt? our firm has solutions.”*, *„criminal record holding you back?”*, *„…people like you who just turned 62”*.
- Meta dodaje argument skutecznościowy: *„when an ad asserts or implies personal information… it can lead to negative experiences and lower ad engagement (for example, fewer clicks, views and conversions).”*
- **Implikacja:** „Czy masz nadwagę?”, „Masz długi?”, „Po 50-tce bolą Cię stawy?”, „Jesteś rozwiedziony?”, „Samotna mama?” to naruszenia. Przeformułowania: mówić o **usłudze / problemie w 3. osobie / korzyści**, np. „Program redukcji masy ciała z dietetykiem”, „Konsolidacja zobowiązań — jak działa”, „Rehabilitacja stawów — umów konsultację”. Wiek odbiorcy nie może padać w komunikacie jako założenie („masz 60+”). Ofertę można natomiast opisać jako „dla seniorów” [interpretacja C: przykład Meta dopuszcza „including seniors”].

**G2. Zdrowie i wellness: zakaz negatywnej autopercepcji, zbliżeń na „fałdkę tłuszczu”, określeń deprecjonujących wygląd, obietnic konkretnego wyniku w określonym czasie bez zastrzeżeń oraz leczenia chorób nieuleczalnych. Before/after dozwolone tylko dla 18+ i nie w każdym kontekście.** | A | [PEŁNY] About Meta's health and wellness advertising policy — https://www.facebook.com/business/help/2489235377779939 ; About Meta advertising standards — https://www.facebook.com/business/help/488043719226449
- Zakazy: *„depict a close up on a specific body area with pinched fat”*; *„claim that results can be achieved solely by use of wearable products”*; *„statements of inferiority about physical appearance (i.e., terms, descriptions or questions that are negative and attack an individual's appearance, specific body parts or hygiene)”*; *„employ clickbait tactics in a health, weight loss or weight gain context, such as sensational language with exaggerated or extreme claims, or promises of specific outcomes within a set timeframe without disclaimers or qualifiers”*; cure claims dla: cukrzycy, opryszczki, tarczycy, łuszczycy, eboli, raka, autyzmu, Alzheimera, Parkinsona, ALS, HIV (zarządzanie objawami dozwolone).
- Tylko 18+: suplementy i usługi odchudzające (*„the ad can demonstrate… the impact of use or a clear indication of the time it takes to achieve noticeable results”*), zabiegi medycyny estetycznej (lista, np. wypełniacze, laser, peelingi) oraz *„general cosmetic products, procedures or surgeries that depict before and after transformations”*.
- Standardy ogólne: *„ads that generate a negative self perception or imply unrealistic or unexpected results.”*
- **Implikacja:** before/after dla medycyny estetycznej i kosmetyki jest dozwolone przy targetowaniu 18+, ale bez tekstu atakującego wygląd („pozbądź się brzydkich zmarszczek”). Zmiana w czasie („efekt po 8 tygodniach”) tylko z kwalifikatorem („efekty indywidualne”). **Uwaga PL [WIEDZA, do weryfikacji]:** polskie przepisy (np. reklama podmiotów leczniczych i zawodów medycznych, oświadczenia zdrowotne suplementów wg rozporządzenia UE 1924/2006, praktyki rynkowe wg UOKiK) mogą być surowsze niż polityka Meta.

**G3. Ograniczenia danych dla kategorii „zdrowie”: Meta może kategoryzować źródła danych i blokować zdarzenia środka i dołu lejka.** | A (mechanizm) / [WIEDZA] (zakres 2025) | [PEŁNY] Understand data sharing restrictions based on data source categories — https://www.facebook.com/business/help/511197658391698 ; About prohibited information — https://www.facebook.com/business/help/361948878201809
- *„restriction on certain standard events: restricts the sharing of specific mid and lower funnel events… full restrictions: fully restrict the sharing of all events in specific regions or all regions.”* Custom events są blokowane do czasu przeglądu. Meta sugeruje wtedy cele awareness, engagement lub traffic.
- [WIEDZA, niepotwierdzone w tej sesji]: od początku 2025 Meta objęła takimi ograniczeniami część reklamodawców z kategorii zdrowie i wellness (pierwotnie głównie USA). Zakres dla UE/PL nieustalony.
- **Implikacja:** dla klientów medycznych i wellness sprawdzić w Events Manager kategorię źródła danych. Jeśli zdarzenia z www są ograniczone, **Instant Forms** (zdarzenie na Meta) mogą być praktyczniejsze niż formularz www. Wymaga to weryfikacji na koncie.

**G4. Special Ad Categories: w POLSCE obowiązkowe dla ogłoszeń mieszkaniowych, rekrutacyjnych i kredytowych. Ogranicza to targetowanie (brak wieku i płci, kodów pocztowych, lookalike'ów, wykluczeń).** | A | [PEŁNY] About ads for housing — https://www.facebook.com/business/help/1198401317374558 ; About ads for employment — https://www.facebook.com/business/help/1537759006681893 ; About ads for housing, employment or financial products and services — https://www.facebook.com/business/help/399587795372584 ; About audiences for HEC campaigns — https://www.facebook.com/business/help/2220749868045706 ; Financial products and services — https://www.facebook.com/business/help/567423788405762
- Housing i employment: SAC wymagane, gdy *„your target audience is in the united states, canada or certain parts of europe”*. **Poland jest na liście.**
- Credit: *„you're running ads for credit opportunities in the us, canada or certain parts of europe”*. Poland jest na liście. Szeroka kategoria „financial products and services” (bankowość, ubezpieczenia, inwestycje, BNPL) jest obowiązkowa w USA. Dla Europy dotyczy części kredytowej.
- Housing obejmuje m.in. *„sale, rental or temporary housing listings… mortgage… real estate and house hunting services… aggregator services”*, **nie obejmuje** hoteli ani porad. Employment obejmuje m.in. pracę, staże, *„professional certification programs”*, targi pracy. Credit obejmuje m.in. karty kredytowe, *„loans, including auto, mortgage, personal or business loans”*, *„long-term financing”*, windykację, konsolidację.
- Ograniczenia odbiorców (m.in. PL): *„age, gender, zip code or postal code, audience exclusion targeting, lookalike audiences, saved audiences and some interests are limited or unavailable”*. Wiek zablokowany na 18–65+ (*„advertisers running credit ads in europe can select a different age range”*), wszystkie płcie, brak wykluczania lokalizacji, promień wokół miasta rozszerzany, *„advantage+ lookalike is unavailable”*.
- Wybór SAC nie wydłuża przeglądu. Brak SAC przy objętej reklamie oznacza odrzucenie.
- **Implikacja (kluczowa dla agencji leadowej w PL: deweloperzy, rekrutacja, kredyty, finansowanie):** **kreacja przejmuje funkcję targetowania.** Komunikat musi sam wybierać odbiorcę (lokalizacja inwestycji, typ mieszkania, przedział cenowy, wymagania stanowiska) i jednocześnie nie może dyskryminować (np. „szukamy młodych”, „tylko dla kobiet”). Warto też dodać filtr w formularzu (E4).

**G5. Ogłoszenia o kwestiach społecznych, wyborach i polityce (SIEP) są w UE niedozwolone.** | A | [PEŁNY] https://www.facebook.com/business/help/1486382031937045 ; How SIEP ads are reviewed — https://www.facebook.com/business/help/313752069181919
- *„ads about social issues, elections or politics are not allowed to run in the european union.”*
- Reklama usługi zwykle nie jest SIEP (*„ads primarily selling a product or promoting a service may not require authorizations”*). Kreacja z retoryką adwokacką (np. „rząd musi…”, „zmieńmy prawo”, klimat, imigracja, zdrowie publiczne jako debata) może jednak zostać sklasyfikowana jako SIEP i zablokowana.
- **Implikacja:** unikać w copy apeli politycznych i debat, nawet jako hooka (np. „Ceny prądu to wina rządu — załóż fotowoltaikę”). Lepiej: „Rachunki za prąd wzrosły? Sprawdź, ile da fotowoltaika”. Taki hook jest bezpieczniejszy, ale uwaga na G1 (nie „Masz za wysokie rachunki?” w kontekście trudnej sytuacji finansowej; ocena C).

**G6. Treści szokujące i sensacyjne, wulgaryzmy (także maskowane), clickbait i engagement bait: część jest zakazana, a reszta obniża „ad quality” i podnosi koszty w aukcji.** | A | [PEŁNY] Sensational content — https://www.facebook.com/business/help/304110064285796 ; Profanity — https://www.facebook.com/business/help/1246599319516044 ; Best practices to improve ad quality — https://www.facebook.com/business/help/1767120243598011 ; Clickbait — https://www.facebook.com/business/help/503640323442584 ; Engagement bait — https://www.facebook.com/business/help/259911614709806
- Sensational: *„we don't allow… the use of shocking or scary tactics to grab people's attention”* (m.in. *„graphic details of hygiene or grooming, such as pimple popping”*, *„visible distress from an accident or medical procedure”*, broń wycelowana w widza).
- Profanity: *„even when it's obscure, misspelled or vague, such as when using symbols or emojis”* (np. „$hit”, „f*!%ing”).
- Ad quality: niska jakość to *„withholding information”*, *„sensationalized language: includes using exaggerated headlines or commanding a reaction… that creates an unexpected experience when people click”*, *„engagement bait”*. Skutek: *„the ad quality component of an ad's total value may be relatively low”*. Przy powtórzeniach: *„our system may associate their page, domain, ad account… as lower-quality, making ads… less competitive in auctions. that means it will cost more.”* Sygnały: ukrycie reklamy, zgłoszenie, *„hide ad due to repetition”*, bounce rate, czas na stronie.
- **Implikacja:** hooki typu „Nie uwierzysz, co…”, „Ten jeden trik…”, „Skomentuj TAK” są zakazane w systemie. Hook ma być **mocny, ale uczciwy**: nazywa problem i ustawia oczekiwania, jak w radzie Meta: *„post headlines and body text content that set appropriate expectations”*.

**G7. Obietnice i przedstawienie oferty: reklama ma trafnie przedstawiać produkt. Zakazane są m.in. mylące twierdzenia, nierealne oczekiwania, fałszywe elementy interfejsu i celebrity-bait.** | A | [PEŁNY] Advertising policy basics checklist — https://www.facebook.com/business/help/757209948405699 ; Troubleshoot a rejected ad — https://www.facebook.com/business/help/1210227555661027
- *„accurately represent your company, product, service or brand”*; *„make potentially misleading claims or set unrealistic expectations”*; *„contain images that portray non-existent functionality (for example, a "play" button that doesn't play actual content)”*; *„include improper grammar or punctuation”*; *„celebrity-bait scams”*.
- Odrzucone reklamy: edycja lub usunięcie *„will not remove the violation from your account”*. Powtarzające się naruszenia prowadzą do ograniczeń konta.
- **Implikacja:** zakaz fałszywych przycisków i fałszywych „powiadomień” na grafikach, gwarancji wyniku bez podstaw i wizerunku znanych osób bez zgody. Poprawna polszczyzna i interpunkcja to wymóg (checklista Meta wymienia „improper grammar or punctuation”).

**G8. Przegląd reklam jest głównie automatyczny (zwykle <24 h). Każda zmiana kreacji, tekstu, linku, targetowania lub optymalizacji uruchamia ponowny przegląd.** | A | [PEŁNY] About ads in review — https://www.facebook.com/business/help/204798856225114
- *„we may consider an advertiser's historical compliance… when deciding whether a given ad warrants further review.”*
- **Implikacja:** historia naruszeń konta klienta ma znaczenie. Checklista zgodności **przed** publikacją chroni konto, nie tylko pojedynczą reklamę.

---

## 3. Sporne / niewiadome

| # | Kwestia | Co mówią źródła | Stan | Jak system ma to obsłużyć |
|---|---|---|---|---|
| S1 | **Dokładne procenty strefy bezpiecznej 9:16** | HC: opis jakościowy; Stories 14% góra / 20% dół (naklejka CTA); Reels z disclaimerem 40% dół. Blogi: „oficjalne” 14/35/6 od marca 2026 | Nie potwierdziłem 14/35/6 w źródle Meta (tylko [WYSZUKIWARKA]) | Stosować wariant **najostrzejszy**: 14% góra, 35% dół (40% przy disclaimerze), 6% boki |
| S2 | **IG Feed: 1:1 czy 4:5** | 103816146375741: 1:1 dla single image IG feed; 430958953753149: „recommended aspect ratio of 4:5” | Sprzeczność w HC | Master 4:5 z kluczową treścią w środkowym 1:1; opcjonalny wariant 1:1 w asset customization |
| S3 | **Description 25 czy 30 znaków** | Text best practices i karuzela: 25; lead ads spec: 30 | Sprzeczność (starszy vs nowszy artykuł) | ≤25 znaków i tylko treści nieistotne |
| S4 | **Sound-off czy sound-on** | „most users watch with sound off” (IG video BP) vs „many people watch stories with their sound on” i „2.25x higher CTA CTR” przy sound-on | Oba prawdziwe w różnych kontekstach | Dual-track: napisy + głos/muzyka |
| S5 | **Długość wideo dla leadów wysokiej jakości** | Meta: lead ads „up to 15 seconds”, feed <15 s; ale „longer videos (up to 60 seconds) may be appropriate”; w feedzie ludzie oglądają dłużej niż w Reels | Brak danych Meta o jakości leada vs długości | Hipoteza D: wideo 30–90 s „wyjaśniające” obniża liczbę leadów, ale podnosi ich jakość. Testować z metryką z CRM |
| S6 | **Badania Facebook IQ (0,25 s; 47% / 74%; 1,7 / 2,5 s)** | Znane z drugiej ręki; artykuł źródłowy istnieje (URL z wyszukiwarki) | Nie przeczytałem oryginału; dane z 2016 r., głównie wskaźniki brandowe | Używać tylko jako uzasadnienia „front-loadingu”, nie jako twardej reguły konwersyjnej |
| S7 | **Etykieta „AI info” dla reklam spoza SIEP z obrazami AI firm trzecich** | HC potwierdza: etykieta dla genAI Meta; automatyczna detekcja narzędzi zewnętrznych opisana tylko dla SIEP | Nieustalone | Założenie ostrożnościowe: fotorealistyczne AI może zostać oznaczone; nie udawać prawdziwych osób. Dodatkowo AI Act art. 50 [WIEDZA] |
| S8 | **Qualified leads bez CAPI** | 782657799338685: od 04.2026 niedostępne dla nowych kampanii bez CAPI; 375478503258484: „set up and integrate your crm **or choose to connect to a meta source**” (np. WhatsApp) | Niejasne, czy „meta source” wystarcza po 04.2026 | Sprawdzić na koncie; strategicznie wdrażać CAPI for CRM |
| S9 | **Kampanie CTM (WhatsApp/Messenger) w PL** | HC: część funkcji, metryk i celów niedostępna dla reklam do/z Europy i reklamodawców z Europy | Zakres dla konkretnego konta nieznany | Weryfikować dostępność celu „leads through messaging” i raportowania na koncie klienta przed rekomendacją |
| S10 | **Ograniczenia danych dla zdrowia/wellness w UE** | HC opisuje mechanizm (kategorie źródeł danych); zakres 2025 znam z [WIEDZA] | Nieustalone dla PL | Audyt Events Manager u klientów medycznych |
| S11 | **Czy „tekst na grafice” wciąż szkodzi** | HC: brak limitu, narzędzie usunięte; zalecenie „nie zasłaniać wizualu” | Brak aktualnych danych Meta o karze za tekst | Traktować jako kwestię czytelności i jakości, testować |
| S12 | **Pytanie o budżet w formularzu** | Zakazane: dochód, majątek, długi, zdolność kredytowa. Budżet projektu nie jest wymieniony | Interpretacja (C) | Dozwolone jako **przedział budżetu na usługę** („Jaki budżet planujesz na…?”), nigdy jako dochód czy zdolność. W kategorii credit/finanse unikać |
| S13 | **Partnership ads: liczby skuteczności** | HC: tylko deklaracja jakościowa | Liczby [WIEDZA] niepotwierdzone | Nie cytować liczb klientom bez źródła |
| S14 | **Higher intent vs More volume: dane** | HC opisuje mechanizm, bez liczb | Brak twardych danych Meta | Test A/B, metryka: % leadów zakwalifikowanych w CRM |
| S15 | **Advantage+ creative w PL** | Text generation nie obsługuje PL; inne ulepszenia (text improvements, enhance media text) mogą działać | Nie wiadomo, które ulepszenia działają na polskim tekście | Zawsze sprawdzić advanced preview; w branżach regulowanych domyślnie OFF |

---

## 4. Konkretne reguły do systemu

### 4.1 Tabela specyfikacji (master assets)

| Placement / format | Proporcje (zalecane) | Rozdzielczość eksportu | Strefa bezpieczna (tekst, logo, twarz, produkt) | Uwagi | Poziom |
|---|---|---|---|---|---|
| FB Feed (obraz/wideo) | **4:5** (także 1:1) | 1080×1350 (min. wg HC 1440×1800 dla 4:5) | Kluczowe elementy w środkowym kwadracie 1:1 (desktop pokazuje wideo 1:1); dolny pasek wolny | Od 03.2026 bez URL w stopce | A |
| IG Feed (obraz) | **4:5** lub 1:1 | 1080×1350 / 1080×1080 | Wolne dolne i boczne krawędzie | Wyższe niż 4:5 obrazy są przycinane do 4:5 | A (sprzeczność S2) |
| IG Feed (wideo 9:16) | 9:16 | 1080×1920 | Jak Reels | Od końca 2024 wysokie wideo nie jest przycinane | A |
| Stories FB/IG | **9:16** | 1080×1920 (min. 600×1067) | **Góra 14%, dół 20% (naklejka CTA)**, dla bezpieczeństwa dół 35% | Obraz wyświetla się 5 s; wideo ≥10 s może być dzielone na karty; primary text <100 znaków, żeby uniknąć karuzelowania | A / B |
| Reels FB/IG | **9:16** | 1080×1920 | **Góra 14% (~270 px), dół 35% (~670 px), boki 6% (~65 px)**; z disclaimerem dół **40%** | Dźwięk zalecany; bez licencjonowanej muzyki; bez watermarków; IG Reels ads do 15 min | A (40%) / B (14/35/6) |
| WhatsApp Status | 9:16 | 1080×1920 (min. 500×320) | Jak Stories | 100% pikseli widocznych dla autoplay | A |
| Karuzela | 1:1 (lub 9:16) | 1080×1080 | — | 2–10 kart (IG Stories 3); **wyłącz „highlight carousel card” przy narracji** | A |
| Lead Ads (kreacja) | 1:1, 4:5 (wideo 4:5) | 1080×1080 / 1080×1350 | jw. | Wideo: rekomendacja „do 15 s” | A |
| Pliki | JPG/PNG (RGB), MP4/MOV H.264 | obraz ≤30 MB, wideo ≤4 GB | — | Nie CMYK | A |

### 4.2 Limity tekstu (copy)

| Pole | Rekomendacja Meta | Reguła systemu | Poziom |
|---|---|---|---|
| Primary text | 125 znaków widocznych (1–3 linie) | Pierwsze **≤125 znaków** zawiera hook, ofertę i „dla kogo”. Dalsza część dozwolona (wyjaśnienie oferty), ale samodzielna. IG Stories: <100 znaków | A |
| Headline | 40 | **≤40**, konkretna korzyść lub oferta; sensowna w oderwaniu od reszty | A |
| Description | 25 (lub 30) | **≤25**, tylko treść nieistotna (może się nie wyświetlić) | A |
| Display URL | ~25 znaków | Nie polegać na URL (brak w stopce FB Feed od 03.2026) | A |
| Instant Form: intro headline | ≤60 (Rich creative ≤45) | Obietnica i co się stanie po wysłaniu | A |
| Instant Form: punkty intro | ≤80 / punkt (Rich: korzyści ≤57, opis 81) | 3 punkty: co, dla kogo, następny krok | A |
| Instant Form: ekran końcowy | Nagłówek ≤60, CTA ≤60 | Konkretny następny krok i termin kontaktu | A |
| Pytania w formularzu | Maks. 15 | 2–4 pytania wielokrotnego wyboru z przedziałami, 0–1 otwarte | A (limit) / A (trade-off) |

### 4.3 Reguły kreacji (z uzasadnieniem)

1. **Mobile-first, pion domyślnie.** Każda koncepcja powstaje w 9:16 i 4:5 (plus opcjonalnie 1:1). *Uzasadnienie:* 98% trzyma telefon pionowo; 9:16 zalecane dla Stories, Reels i Status; 4:5 dla FB Feed. **A**
2. **Pierwsza klatka = samodzielna reklama.** Teza i obraz czytelne bez ruchu i dźwięku (autoplay w IG Feed od 25% widoczności). **A**
3. **Hook w 0–1 s, marka i kluczowy komunikat w ≤3 s, oferta i CTA wcześnie i ponownie na końcu.** *Uzasadnienie:* Meta HC; Facebook IQ/Nielsen 47% wartości w 3 s (B). **A/B**
4. **Dual-track audio:** wypalone polskie napisy lub SRT `pl_PL` plus głos lub muzyka (Sound Collection albo własna). Auto-napisy Meta nie działają po polsku. **A**
5. **Tekst na ekranie:** jedna myśl na scenę, duża bezszeryfowa czcionka, kontrast, w środkowej części kadru, w strefie bezpiecznej (4.1). **A**
6. **Natywny wygląd:** nagranie telefonem, prawdziwa osoba (właściciel, ekspert, klient), bez watermarków i ramek. Studio tylko do celów brandowych. *Uzasadnienie:* „mobile shots tend to outperform studio shots for ad recall and intent”; „native feel… perform better”. **A (deklaracja)**
7. **Portfel długości:** 6–15 s (zatrzymanie) plus 30–60 s (zrozumienie oferty). Jakość mierzyć w CRM. **A (krótkie) + D (długie dla jakości)**
8. **Różnorodność „materially different”:** iteracja zmienia obraz lub wideo, a nie tylko tekst. ≤10 reklam na zestaw, zróżnicowanych koncepcyjnie; łączyć wideo i statyki. **A**
9. **Uczciwy hook zamiast clickbaitu:** nazwać problem lub ofertę i ustawić oczekiwania. Zakaz „nie uwierzysz…”, „kliknij, żeby zobaczyć…”, engagement bait. *Uzasadnienie:* niższy komponent jakości, wyższe koszty, ryzyko dla konta. **A**
10. **Modułowe copy:** każdy tekst ma sens sam i w dowolnej kombinacji z innymi (Meta miesza pola). **A**
11. **Kreacja jako targetowanie** (szczególnie w SAC i broad targeting): w pierwszych sekundach i pierwszych 125 znakach nazwać, dla kogo jest oferta, bez przypisywania odbiorcy cech osobistych (np. „Dla właścicieli domów jednorodzinnych w powiecie X”, a nie „Masz dom i za wysokie rachunki?”). **A (polityka) + C (praktyka)**
12. **Advantage+ creative: świadoma decyzja, nie domyślna.** Checklista przeglądu enhancements (także w advanced preview i w „test new optimizations” w ustawieniach konta). W branżach regulowanych i przy disclaimerach generatywne ulepszenia tekstu i overlayów domyślnie OFF. **A**
13. **Karuzela narracyjna:** wyłączyć „highlight carousel card”. **A**
14. **Poprawna polszczyzna:** błędy gramatyczne i interpunkcyjne to element checklisty Meta. **A**

### 4.4 Reguły Lead Ads (pod cel „jakość, nie tani lead”)

1. **Typ formularza:** domyślnie Higher intent albo Rich creative. More volume tylko świadomie (np. top-of-funnel, lead magnet). Pamiętać, że Higher intent = tylko FB/IG Feed mobile. **A**
2. **Intro zawsze wypełnione:** co dostanie, dla kogo, kto i kiedy się odezwie, ewentualnie orientacyjna cena lub widełki. *Uzasadnienie:* „clearly communicate why people should fill out your form”; Rich creative „potentially increase lead quality”. **A**
3. **Pytania kwalifikujące:** 2–4 pytania wielokrotnego wyboru (termin, zakres, lokalizacja, przedział budżetu usługi). *Uzasadnienie:* „more multiple choice questions typically results in more quality leads”. **A**
4. **Twarde dyskwalifikatory przez conditional logic → „close form”** z pomocnym ekranem (np. poradnik). Klientowi komunikować, że CPL wzrośnie. **A**
5. **Weryfikacja telefonu (OTP)** domyślnie ON dla usług z kontaktem telefonicznym (poza B2B ze stacjonarnymi numerami). **A**
6. **Zakazane pytania (E6):** zero pytań o dochód, długi, zdolność kredytową, zdrowie, ubezpieczenia, karalność. Kontakt tylko przez prefill. **A**
7. **Ekran końcowy = następny krok:** kalendarz („book time”), telefon, WhatsApp, plik. Konkretny termin kontaktu. **A**
8. **Harmonogram reklam w godzinach, gdy zespół oddzwania** (Meta zaleca dla leadów i połączeń; +25,4% konwersji z połączeń w godzinach pracy). **A (deklaracja)**
9. **Sygnał jakości do Meta:** CAPI for CRM z pełnym lejkiem i neutralnymi nazwami etapów. Cel „qualified leads” (od 04.2026 wymaga CAPI dla nowych kampanii). Oczekiwany czas do pełnej optymalizacji: 1–2 miesiące. **A**
10. **Retargeting „otworzył, nie wysłał”** i lookalike z **klientów**, nie z leadów. **A**
11. **Wersjonowanie formularzy:** opublikowanego formularza nie da się edytować, więc nazewnictwo `KLIENT_oferta_typ_vN_data`. **A**

### 4.5 Checklista zgodności z polityką (przed publikacją) — PL/UE

**Kategoria i targetowanie**
- [ ] Czy oferta dotyczy **nieruchomości / pracy / kredytu lub finansowania**? Jeśli tak → Special Ad Category (PL jest na liście); kreacja bez dyskryminujących sformułowań (wiek, płeć, rodzina, pochodzenie). **A**
- [ ] Czy treść dotyka **polityki / kwestii społecznych** (debata, apel o zmianę prawa)? Reklamy SIEP są w UE niedozwolone, więc przeformułować na komunikat produktowy. **A**
- [ ] Zdrowie, estetyka, odchudzanie, suplementy, seksualność, alkohol, hazard, krypto → targetowanie 18+ i sprawdzenie zasad szczegółowych. **A**

**Copy i grafika — cechy osobiste (G1)**
- [ ] Brak zdań i pytań sugerujących, że odbiorca ma cechę: chorobę, nadwagę, niepełnosprawność, długi lub upadłość, wiek, rozwód lub samotne rodzicielstwo, religię, orientację, karalność. „Ty” jest OK, „Ty + cecha” nie. **A**
- [ ] Test przeformułowania: czy zdanie da się zamienić na opis usługi lub korzyści w 3. osobie? **A (rada Meta: „focus your ad on the benefits”)**

**Zdrowie i wygląd (G2)**
- [ ] Brak zbliżeń na „fałdki” i ciała w ujęciu wstydzącym; brak słów deprecjonujących wygląd. **A**
- [ ] Before/after tylko dla kosmetyki i medycyny estetycznej, 18+, bez tekstu atakującego wygląd; efekty w czasie z kwalifikatorem („efekty indywidualne”). **A**
- [ ] Brak obietnic wyleczenia chorób z listy (cukrzyca, rak, łuszczyca…); zarządzanie objawami dozwolone. **A**
- [ ] [WIEDZA] Sprawdzić polskie przepisy: reklama usług medycznych i zawodów medycznych, oświadczenia zdrowotne suplementów (UE 1924/2006), UOKiK. **do weryfikacji prawnej**

**Obietnice, jakość, uczciwość (G6–G7)**
- [ ] Brak gwarancji wyniku bez podstaw („100% skuteczności”, „zarobisz X zł”), brak nierealnych oczekiwań. **A**
- [ ] Brak clickbaitu (ukrywanie informacji, sensacja), engagement bait („skomentuj…”) i treści szokujących. **A**
- [ ] Brak fałszywych elementów UI (przycisk play, „nowa wiadomość”, pasek powiadomień). **A**
- [ ] Brak wulgaryzmów, także maskowanych symbolami. **A**
- [ ] Brak wizerunku znanych osób bez zgody (celebrity-bait). **A**
- [ ] Poprawna gramatyka i interpunkcja. **A**
- [ ] Landing page (jeśli jest) działa, bez pop-upów, zgodny z reklamą. **A**

**AI i autentyczność (D3)**
- [ ] Wygenerowane osoby i sceny nie są przedstawiane jako prawdziwi klienci, eksperci czy realizacje; opinie są prawdziwe i udokumentowane. **A (polityka „accurately represent”) + [WIEDZA] AI Act art. 50 / UOKiK**
- [ ] Świadomość, że genAI Meta może nadać etykietę „AI info”. **A**

**Formularz (E6)**
- [ ] Brak zakazanych pytań (finanse osobiste, zdrowie, ubezpieczenia, karalność, poglądy, orientacja, związki zawodowe, identyfikatory, loginy, data urodzenia dziecka); dane kontaktowe tylko przez prefill. **A**
- [ ] Polityka prywatności (URL, nie PDF); zgody RODO jako custom disclaimer z checkboxami, jeśli potrzebne. **A (+ RODO [WIEDZA])**

**Advantage+ creative (D1)**
- [ ] Przejrzane wszystkie enhancements (ad creative **i** advanced preview **i** ustawienia konta → „test new optimizations”); w branżach regulowanych genAI tekstu i overlayów OFF. **A**

**Dane (E9)**
- [ ] Nazwy zdarzeń CRM, konwersji niestandardowych i grup odbiorców bez informacji wrażliwych; parametry UTM bez danych osobowych. **A**

---

## 5. Lista źródeł z trybem dostępu

### Meta Business Help Center / Instagram Help / Meta for Developers — [PEŁNY] (przez Meta Ads MCP `ads_get_help_article`)

**Kreacja, placementy, specyfikacje**
- About text overlays and the safe zone for ads on Facebook and Instagram — https://www.facebook.com/business/help/980593475366490
- About ads on reels — https://www.facebook.com/business/help/437348354643456
- Design requirements for Instagram Stories ads — https://www.facebook.com/business/help/2222978001316177
- Adjust background colors for stories ads — https://www.facebook.com/business/help/266481863999300
- Create Instagram Stories ads in Meta Ads Manager — https://www.facebook.com/business/help/1639197963055851
- Recommended minimum image pixel requirements across placements — https://www.facebook.com/business/help/469767027114079
- Design requirements for Instagram feed ads — https://www.facebook.com/business/help/430958953753149
- Best practices for aspect ratios — https://www.facebook.com/business/help/103816146375741
- Aspect ratios supported by placements — https://www.facebook.com/business/help/682655495435254
- Best practices for Instagram video ads — https://www.facebook.com/business/help/188534925073536
- Add captions to your video ad — https://www.facebook.com/business/help/1675722002698686
- About auto-generated subtitles on Facebook reels — https://www.facebook.com/business/help/593107135335436
- Video ad playing specifications by placement — https://www.facebook.com/business/help/2013114112289197
- Video length specifications across placements — https://www.facebook.com/business/help/817989058548892
- Best practices for image ads — https://www.facebook.com/business/help/388369961318508
- About image ads across Meta technologies — https://www.facebook.com/business/help/217010726413426
- Best practices for Instagram image ads — https://www.facebook.com/business/help/109732209367483
- Creative best practices for text in ads — https://www.facebook.com/business/help/223409425500940
- About destination links in your ad — https://www.facebook.com/business/help/152143699744690
- Design specifications for collection ads — https://www.facebook.com/business/help/1449762585066179
- Design specifications for carousel ads — https://www.facebook.com/business/help/1114358518575630
- Show the best-performing cards first in a carousel ad — https://www.facebook.com/business/help/120435098301466
- Creative best practices for stories — https://www.facebook.com/business/help/304846896685564
- Create ads in stories on Facebook, Messenger and Instagram — https://www.facebook.com/business/help/190599608272281
- Use stories templates — https://www.facebook.com/business/help/449517262468597
- About creative optimizations for Instagram stories ads — https://www.facebook.com/business/help/348328642954708
- Opt out of automatic Instagram stories ads creative optimizations — https://www.facebook.com/business/help/679041123045316
- Opt out of automatic Instagram feed ads creative optimizations — https://www.facebook.com/business/help/429723408538832
- Creative tools for customizing placements — https://www.facebook.com/business/help/1295976920753603
- Available ad placements and ad formats by ad objectives — https://www.facebook.com/business/help/279271845888065
- Create Instagram Reels ads in Meta Ads Manager — https://help.instagram.com/546362593027755
- How to add music to ads using Ads Manager — https://help.instagram.com/759279452000505
- Tips and best practices for Facebook reels — https://www.facebook.com/business/help/1708053352711643
- Use sound collection for reels on Facebook — https://www.facebook.com/business/help/880459498798521
- Best practices for cost-effective ad creative — https://www.facebook.com/business/help/1991663177718491
- Best practices to make your ad more engaging — https://www.facebook.com/business/help/370852930116232
- Use a GIF in your video ad — https://www.facebook.com/business/help/1006874066021923
- Troubleshoot ad rendering incorrectly issues — https://www.facebook.com/business/help/418015731022150
- About advertising settings and ad account settings — https://www.facebook.com/business/help/410559398627376

**Advantage+ creative, AI, twórcy, dywersyfikacja**
- About Advantage+ creative — https://www.facebook.com/business/help/297506218282224
- Turn off Advantage+ creative enhancements — https://www.facebook.com/business/help/1082295769403815
- Enable text improvements — https://www.facebook.com/business/help/620917123959992
- About text generation — https://www.facebook.com/business/help/180641596861873
- Create an ad with text generation — https://www.facebook.com/business/help/497610041230617
- Generate image variations — https://www.facebook.com/business/help/1684513971952814
- Add animation to an image — https://www.facebook.com/business/help/1766652437485798
- About media created or edited with AI (SIEP) — https://www.facebook.com/business/help/1486382031937045
- About branding for your ads — https://www.facebook.com/business/help/1749703022274336
- How to add branding to your ads — https://www.facebook.com/business/help/1814872845933588
- About flexible media — https://www.facebook.com/business/help/1126725172362626
- About the flexible ad format — https://www.facebook.com/business/help/835561738423867
- Create a flexible ad — https://www.facebook.com/business/help/1207773513713945
- About dynamic creative — https://www.facebook.com/business/help/170372403538781
- About creative fatigue recommendations — https://www.facebook.com/business/help/1346816142327858
- About managing ad volume — https://www.facebook.com/business/help/2720085414702598
- Ad limits per page — https://www.facebook.com/business/help/766697140509126
- Understand creative-level performance in Meta ads reporting — https://www.facebook.com/business/help/243916866413404
- About partnership ads — https://help.instagram.com/292748974937716
- Measure partnership ad performance — https://help.instagram.com/441419756683855
- How to use ad relevance diagnostics — https://www.facebook.com/business/help/436113280262012
- About engagement rate ranking — https://www.facebook.com/business/help/2351270371824148
- About ad relevance diagnostics — https://www.facebook.com/business/help/403110480493160
- About learning limited — https://www.facebook.com/business/help/269269737396981
- Cost per optimization event — https://www.facebook.com/business/help/1707952432550214

**Lead Ads / Instant Forms / CRM / wiadomości / połączenia**
- About instant form types — https://www.facebook.com/business/help/252352181957512
- About lead ads with instant form — https://www.facebook.com/business/help/761812391313386
- Supported features of lead ads across platforms and devices — https://www.facebook.com/business/help/588763988207510
- About lead ads — https://www.facebook.com/business/help/1481110642181372
- How to create a lead ad for Instagram — https://www.facebook.com/business/help/563690893827148
- How to create a lead ad using Meta Ads Manager — https://www.facebook.com/business/help/375478503258484
- Create an instant form from Meta Business Suite — https://www.facebook.com/business/help/179258984144385
- Design specifications for lead ads with instant form — https://www.facebook.com/business/help/908491205873167
- Best practices to create lead ads — https://www.facebook.com/business/help/435270316658768
- Ask the right questions on your instant form — https://www.facebook.com/business/help/1607931762802448
- Questions prohibited on your instant form — https://www.facebook.com/business/help/219356599612120
- About prefill questions — https://www.facebook.com/business/help/438193446367413
- Add custom questions — https://www.facebook.com/business/help/774623835981457
- Add conditional answers — https://www.facebook.com/business/help/154286325106161
- Use conditional logic to qualify your leads — https://www.facebook.com/business/help/3373123166040766
- Add an intro section — https://www.facebook.com/business/help/1664458123767694
- Add a message for leads (ending) — https://www.facebook.com/business/help/314132612401196
- Add a custom disclaimer — https://www.facebook.com/business/help/1550411888622740
- About privacy policies for lead ads — https://www.facebook.com/business/help/1247534515288168
- Enable the SMS verification feature — https://www.facebook.com/business/help/898260175547909
- About performance goals for lead ads (qualified leads, 04/2026, 21%, 9.5%) — https://www.facebook.com/business/help/782657799338685
- Requirements to use maximize value of conversions — https://www.facebook.com/business/help/571188993373447
- About Advantage+ leads campaigns — https://www.facebook.com/business/help/992035952809423
- About CRM system integrations for lead ads — https://www.facebook.com/business/help/301355140655035
- Use a partner to connect your CRM for conversion leads — https://www.facebook.com/business/help/317857030149451
- Integrate Zapier with Conversions API for CRM — https://www.facebook.com/business/help/848158520256071
- Set up your CRM for qualified leads — https://www.facebook.com/business/help/279369167153556
- Qualified leads (metric) — https://www.facebook.com/business/help/344136647998618
- Cost per qualified lead — https://www.facebook.com/business/help/294374640173607
- Conversions API for CRM for platforms (Meta for Developers) — https://developers.facebook.com/docs/marketing-api/conversions-api/guides/conversions-api-crm-for-platforms
- Create a lead ad with website form — https://www.facebook.com/business/help/983639606486840
- Lead generation in Messenger with third-party apps — https://www.facebook.com/business/help/641772747298691
- About ads that click to message — https://www.facebook.com/business/help/1816962591668838
- About maximizing number of leads using ads that click to message — https://www.facebook.com/business/help/575610661605746
- Messaging features unavailable due to privacy rules in Europe and Japan — https://www.facebook.com/business/help/574941489951914
- Create ads that click to WhatsApp — https://www.facebook.com/business/help/447934475640650
- Terms of use and security FAQ for lead generation in Messenger — https://www.facebook.com/business/help/342457653322253
- About lead ads with calling — https://www.facebook.com/business/help/378168646496279
- Supported objectives and placements for call ads — https://www.facebook.com/business/help/4107704079279896

**Polityki**
- Privacy violations and personal attributes policy — https://www.facebook.com/business/help/2557868957763449
- About Meta advertising standards — https://www.facebook.com/business/help/488043719226449
- Discriminatory practices policy — https://www.facebook.com/business/help/136164207100893
- Health and wellness policy — https://www.facebook.com/business/help/2489235377779939
- Ads for housing, employment or financial products and services — https://www.facebook.com/business/help/399587795372584
- About ads for housing — https://www.facebook.com/business/help/1198401317374558
- About ads for employment — https://www.facebook.com/business/help/1537759006681893
- About ads for financial products and services — https://www.facebook.com/business/help/567423788405762
- About audiences for HEC campaigns — https://www.facebook.com/business/help/2220749868045706
- Sensational content policy — https://www.facebook.com/business/help/304110064285796
- Profanity policy — https://www.facebook.com/business/help/1246599319516044
- Drugs and pharmaceuticals policy — https://www.facebook.com/business/help/432240224665596
- Online gambling and games policy — https://www.facebook.com/business/help/345214789920228
- Drug and alcohol addiction treatment policy — https://www.facebook.com/business/help/383110896305204
- Advertising policy basics checklist — https://www.facebook.com/business/help/757209948405699
- Best practices to improve ad quality and performance — https://www.facebook.com/business/help/1767120243598011
- How to avoid posting clickbait — https://www.facebook.com/business/help/503640323442584
- How to avoid posting engagement bait — https://www.facebook.com/business/help/259911614709806
- About ads in review — https://www.facebook.com/business/help/204798856225114
- How to troubleshoot a rejected ad — https://www.facebook.com/business/help/1210227555661027
- How SIEP ads are reviewed — https://www.facebook.com/business/help/313752069181919
- Data sharing restrictions based on data source categories — https://www.facebook.com/business/help/511197658391698
- About prohibited information — https://www.facebook.com/business/help/361948878201809
- Policy sidenav (lista polityk) — https://www.facebook.com/business/help/434838534925385

### Wyniki wyszukiwarki — [WYSZUKIWARKA] (tylko tytuł i streszczenie; 4 zapytania, potem wyczerpany limit sesji)
- Facebook IQ — Capturing Attention in Feed: The Science Behind Effective Video Creative — https://www.facebook.com/business/news/insights/capturing-attention-feed-video-creative
- Facebook IQ — Stand out in feed: Optimising video creative on mobile — https://en-gb.facebook.com/business/news/insights/stand-out-in-feed-optimizing-video-creative-on-mobile
- Facebook IQ — TV and Mobile: A Facebook IQ Study — https://www.facebook.com/business/news/insights/mobile-and-tv-between-the-screens
- Social Media Today — Facebook Releases New Report on Maximizing the Potential of Your Video Assets — https://www.socialmediatoday.com/social-business/facebook-releases-new-report-maximizing-potential-your-video-assets
- TechCrunch — Facebook Lures Video Creators With Minutes Watched And 10-Second View Metrics (2016) — https://techcrunch.com/2016/02/18/facebook-video-metrics
- Yans Media — 33 Facebook Video Statistics — https://www.yansmedia.com/blog/facebook-video-statistics
- Mediakix — Facebook Video Statistics — https://mediakix.com/blog/facebook-video-statistics-everyone-needs-know/
- Social Champ — 80+ Facebook Stats 2026 — https://www.socialchamp.com/blog/facebook-stats/
- Adweek — How Brands Can Still Win Over Customers as Attention Spans Decrease on Social — https://www.adweek.com/brand-marketing/how-brands-can-still-win-over-customers-as-attention-spans-decrease-on-social/
- Tobii — Facebook advertising research with eye tracking — https://www.tobii.com/resource-center/customer-stories/tv-advertising-research-for-facebook
- behaviour.digital — Meta Reels Safe Zone 14% Top 35% Bottom 6% Sides: The 2026 Official Guide — https://behaviour.digital/post/meta-reels-safe-zone-14-top-35-bottom-6-sides-the-2026-official-guide
- AdNabu — Meta Safe Zones for Ads: The Complete 2026 Guide — https://blog.adnabu.com/meta-ads/meta-safe-zones/
- Billo — Meta Ads Safe Zones: A Guide to the 2026 Unified Creative Updates — https://billo.app/blog/meta-ads-safe-zones/
- 1ClickReport — Meta Ads Safe Zones 2026: Pixel Specs + Free Template — https://www.1clickreport.com/blog/meta-ads-creative-safe-zones-2026-guide
- First Pier — Instagram Ad Safe Zones (2026) — https://www.firstpier.com/resources/instagram-ad-safe-zones
- AdsUploader — Meta Ads Safe Zones: The Complete Guide — https://adsuploader.com/blog/meta-ads-safe-zones

### Wiedza własna modelu — [WIEDZA] (niepotwierdzone w tej sesji)
- Historia reguły 20% tekstu (siatka, wycofanie narzędzia ok. 2020).
- Facebook IQ 2016: przypominanie treści z mobilnego feedu po 0,25 s ekspozycji.
- Zakres ograniczeń danych health & wellness z 2025 r. (pierwotnie USA).
- AI Act art. 50 (obowiązki przejrzystości, m.in. deepfake) stosowany od 2 sierpnia 2026.
- Polskie i unijne przepisy sektorowe (reklama usług medycznych, oświadczenia zdrowotne 1924/2006, UOKiK, RODO).
- Liczbowe deklaracje Meta o skuteczności partnership ads.
