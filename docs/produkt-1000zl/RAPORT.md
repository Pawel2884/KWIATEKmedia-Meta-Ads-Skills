# Produkt cyfrowy za ~1000 zł dla KWIATEKmedia: research i rekomendacja

Data: 28 września 2026
Cel: znaleźć produkt, który z mocnymi dowodami może kupić minimum 100 osób po ok. 1000 zł (ok. 100 000 zł przychodu), bez rosnącego kosztu i pracy na każdą sprzedaż.

Oznaczenia:
- **[FAKT]**: z researchu, ze źródłem.
- **[HIPOTEZA]**: mój wniosek albo szacunek do sprawdzenia w walidacji.

Ograniczenia researchu (uczciwie): pobieranie pełnych stron było blokowane przez proxy dla większości domen, więc dane pochodzą z wyników wyszukiwarki (streszczenia stron ze źródłami) i z Anthropic Economic Index (MCP). Nie miałem bezpośredniego dostępu do Reddita, TikToka ani Google Trends. Wszędzie, gdzie liczba pochodzi od sprzedawcy albo z bloga, traktuję ją jako sygnał, a nie pewnik.

---

## WERDYKT W 30 SEKUND

**Buduj: „System 5 Minut”. To gotowy system obsługi leadów z Meta Ads, od kliknięcia do sprzedaży.**

Co robi:
1. Lead z formularza Meta dostaje SMS w mniej niż 60 sekund.
2. Ty dostajesz alert „dzwoń teraz”.
3. Jeśli nikt nie oddzwoni, system sam prowadzi 7-dniowy follow-up.
4. Każdy lead ma status w arkuszu.
5. Meta dostaje z powrotem informację, który lead kupił (Conversions API dla CRM).
6. Na końcu widzisz prawdziwy koszt sprzedaży z każdej reklamy.
7. Warstwa AI w Claude co tydzień czyta arkusz i mówi, które reklamy przynoszą klientów, a nie tylko leady.

Dlaczego ten pomysł, a nie inny:
1. **Najmocniejszy dowód „PAIN + MONEY”.** Odpowiedź w 5 minut daje 21× większą szansę na zakwalifikowanie leada, a tylko 7% firm odpowiada tak szybko [FAKT, źródła niżej]. Firmy już płacą za kawałki tego problemu: agencji 1000–1500 zł/mies., SaaS do synchronizacji leadów, CRM, callback, AI settery za 97–397 USD/mies.
2. **Meta tego nie zautomatyzuje.** Meta do końca 2026 automatyzuje kreację, targetowanie i budżet. Tego, co dzieje się z leadem po wysłaniu formularza, nie automatyzuje. Twój produkt nie traci wartości przez automatyzację Meta, tylko na niej zyskuje.
3. **Koszt po Twojej stronie ≈ 0 zł na klienta.** Klient działa na własnym Make (od ok. 40 zł/mies.), własnym Google Sheets i własnej bramce SMS (ok. 0,08–0,17 zł/SMS). Ty nie płacisz za żadne API.
4. **Masz to w dużej części zbudowane.** Scenariusze Make u klientów (arkusze leadów, lead integrity, formularze przez API) i system 10 skilli Meta Ads w tym repo.
5. **Da się to pokazać w 20 sekund:** telefon wypełnia formularz, 8 sekund później przychodzi SMS, w arkuszu pojawia się wiersz, a w Menedżerze zdarzeń Meta widać „sprzedaż”.

Cena: **997 zł netto** (ok. 1226 zł brutto). Pierwsze 10 osób: **597 zł netto** w zamian za wdrożenie na żywo i case study. Licencja agencyjna (nieograniczona liczba klientów): **1997 zł netto**.

Zanim zbudujesz pełną wersję, zrób 14-dniową przedsprzedaż (szczegóły w punkcie 19). Kryterium: minimum 10 przedsprzedaży. Jeśli nie wyjdzie, wariantem zapasowym jest pomysł nr 3 (Agencja Leadowa w Pudełku).

---

## ETAP 1. PROBLEMY (bez produktów)

### 1.1 Leady są, sprzedaży nie ma: szybkość i follow-up
- [FAKT] Kontakt w pierwszych 5 minutach daje 21× większą szansę na zakwalifikowanie leada niż po 30 minutach (badanie MIT/InsideSales). Szansa na nawiązanie kontaktu jest 100× większa. Konwersja jest ok. 8× wyższa. Średni czas odpowiedzi w B2B to 42 godziny, a tylko 7% firm odpowiada w 5 minut. Źródła: [aimdoc.ai](https://aimdoc.ai/blog/speed-to-lead-and-why-it-matters), [Chili Piper](https://www.chilipiper.com/article/speed-to-lead-statistics), [caseyresponse.com](https://caseyresponse.com/blog/lead-response-time-statistics).
- [FAKT] Według analizy HBR (15 000 leadów) szansa na kwalifikację spada o 400%, gdy czas odpowiedzi rośnie z 5 do 10 minut. Źródło: [aimdoc.ai](https://aimdoc.ai/blog/speed-to-lead-and-why-it-matters).
- [FAKT] W ankiecie (800 handlowców, 500 firm) powody braku follow-upu to: za dużo leadów, leady wystygły, brak procesu. Wąskim gardłem nie jest popyt, tylko szybkość i konsekwencja follow-upu. Źródło: [Prospeo, 2026](https://prospeo.io/s/leads-for-small-business).

### 1.2 Słaba jakość leadów z formularzy Meta
- [FAKT] W audytach formularzy Meta z 2026 r. 40% leadów nie pamięta, że wysłało formularz, a kolejne 30% podaje numer, który trzy razy z rzędu kończy się pocztą głosową. Prawdziwy koszt zakwalifikowanej rozmowy jest ok. 10× wyższy niż raportowany CPL. Formularz „Higher Intent” z jednym pytaniem otwartym obcina wolumen o ok. 30%, ale podnosi odsetek zakwalifikowanych z 30% do 65–70%. Źródło: [growwithsakib.com](https://growwithsakib.com/meta-lead-ads/).
- [FAKT, PL] Numery telefonów z profili Meta bywają nieaktualne. Jakość poprawia tarcie w formularzu i szybki kontakt, najlepiej przez integrację z CRM. Źródła: [Artur Jabłoński](https://arturjablonski.com/blog/jak-generowac-leady-na-facebooku/), [BlueMint](https://blue-mint.pl/facebook-lead-ads-jak-zwiekszyc-jakosc-leadow-z-formularzy/).
- [FAKT] Boty potrafią wysyłać formularze. Rozwiązaniem jest pętla zwrotna: CAPI plus optymalizacja pod jakość leada i mierzenie kosztu zakwalifikowanego leada zamiast CPL. Źródło: [Aurelius Media](https://www.aureliusmedia.co/blog/meta-ads-bad-quality-leads).

### 1.3 Meta nie wie, kto kupił (brak sygnału zwrotnego)
- [FAKT] Conversions API dla CRM obniża koszt jakościowego leada średnio o 16%. W połączeniu z celem „conversion leads” według testów Meta o ok. 19%. Źródła: [Zapier/Meta](https://zapier.com/blog/meta-guide-to-better-lead-quality/), [Meta for Developers](https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration), [Involve Digital](https://www.involvedigital.com/insights/meta-ads-b2b-lead-generation-strategy).
- [FAKT] Warunki Meta do optymalizacji pod conversion leads: min. 200 leadów/mies., aktualizacja CRM co najmniej codziennie, etap docelowy osiągany przez 1–40% leadów w ciągu 28 dni. Mniejsze konta i tak powinny wysyłać etapy do raportów i grup odbiorców. Źródło: [Involve Digital](https://www.involvedigital.com/insights/meta-ads-b2b-lead-generation-strategy).
- [FAKT, PL] Polskie agencje i firmy sprzedają wdrożenia CAPI i CRM API jako usługę (np. [adsfox META CRM API](https://adsfox.pl/meta-crm-api/), [Double Digital](https://double-digital.pl/blog/meta-conversions-api-capi/), [KC Mobile](https://kcmobile.pl/baza-wiedzy/facebook-ads/conversions-api-facebook-konfiguracja/)). To jest płatny problem, nie tylko ciekawostka.

### 1.4 Meta automatyzuje kampanie, ale przepala budżety
- [FAKT] Meta ogłosiła pełną automatyzację tworzenia reklam (kreacje, targetowanie, budżet) do końca 2026. Akcje agencji spadły w dniu ogłoszenia. Źródła: [Campaign Asia](https://www.campaignasia.com/article/meta-aims-to-fully-automate-ad-creation-with-ai-by-2026/cpzmsbgbq5e3xzp4nq0o99vel0), [Marketing Brew](https://www.marketingbrew.com/stories/2026/04/07/meta-ai-ad-creation).
- [FAKT] Advantage+ był krytykowany za przepalanie dziennych budżetów w kilka godzin i CPM wyższe 3–4×. Część agencji przestała go używać. Źródło: [eMarketer](https://www.emarketer.com/content/meta-faces-backlash-automated-ad-system-drains-budgets-with-little-payoff).
- [HIPOTEZA] Wartość przesuwa się z „ustawiania kampanii” na: ofertę, wkład kreatywny, obsługę leada i sygnał jakości wysyłany do Meta. Produkt powinien stać tam, gdzie Meta nie wchodzi.

### 1.5 AI: wszyscy „używają”, mało kto płaci i wdraża
- [FAKT] 76–89% małych firm w USA deklaruje używanie AI, ale tylko ok. 17,7% faktycznie zapłaciło za narzędzie AI. Mediana rocznych wydatków to 2200 USD. 52% traktuje AI jako wsparcie ludzi, tylko 8% jako zastępstwo. Źródła: [Business.com](https://www.business.com/articles/ai-usage-smb-workplace-study/), [Propane Insider](https://propaneinsider.com/newsletter/3437), [FactoryJet](https://factoryjet.com/blog/ai-adoption-us-small-businesses-2026).
- [FAKT] Polska: Anthropic Usage Index = 1,33, czyli udział Polski w użyciu Claude jest o 33% wyższy niż wynikałoby z liczby ludności w wieku produkcyjnym (średnia globalna = 1,0). To 52. miejsce na 121 krajów. Najczęstszy temat to tworzenie treści i copywriting (20%). Zadania sprzedażowe są 1,17× częstsze niż średnia. Źródło: [Anthropic Economic Index](https://www.anthropic.com/economic-index) (okres 05.2026).

### 1.6 Mikrofirmy w PL: marketing robi właściciel, budżety są małe
- [FAKT] W Polsce działa 2,875 mln aktywnych firm, 95,9% to mikrofirmy. Reklamuje się 62% z nich. Facebook to pierwszy wybór przy płatnej promocji (50%). W 2/3 firm marketing robi sam właściciel i oczekuje szybkiego zwrotu. Najczęstszy miesięczny budżet online: do 500 zł (21%) i 501–1000 zł (16%). 41% działa bez ustalonego budżetu. Źródła: [faktura.pl/GUS](https://portal.faktura.pl/biznes/biznes-pod-lupa/liczba-firm-w-polsce-2026-mikrofirmy-dane-gus/), [NFG/IMAS](https://nfg.pl/blog/marketingowy-survival-jak-najmniejsze-firmy-w-pol), [GazetaPrawna](https://serwisy.gazetaprawna.pl/msp/artykuly/10580297,najmniejsze-firmy-w-polsce-walcza-o-klientow-co-piata-wydaje-500-zl-m.html).
- **Wniosek [HIPOTEZA]:** firma z budżetem 500 zł/mies. nie kupi produktu za 1000 zł. Grupa docelowa to firmy wydające **min. 2000–3000 zł/mies. na reklamy leadowe** oraz freelancerzy i agencje, dla których produkt zarabia pieniądze.

---

## ETAP 2. SYGNAŁY PIENIĘDZY

| Problem | Czy ludzie już płacą? | Ile płacą [FAKT] | Rozwiązanie daje pieniądze czy czas? |
|---|---|---|---|
| Szybki kontakt z leadem i follow-up | Tak: software, settery, callback | AI settery 97–397 USD/mies. ([Solvea](https://solvea.cx/blog/how-much-does-an-ai-appointment-setter-cost), [CloseBot](https://github.com/satimj884/closebot-speed-lead)), człowiek-setter 2–4 tys. USD/mies., CallPage 45–187 zł/mies. ([CallPage](https://www.callpage.io/pricing)) | Pieniądze (więcej sprzedaży z tych samych leadów) |
| Leady z Meta do CRM | Tak | LeadsBridge 22–1549 USD/mies. ([leadsync.me](https://leadsync.me/blog/leadsbridge-alternatives/)), Livespace 69–259 zł/mies./os., Pipedrive od 41 EUR ([znajdzcrm.pl](https://znajdzcrm.pl/pipedrive-cennik/)) | Czas i porządek |
| CAPI / sygnał jakości do Meta | Tak: wdrożenia agencyjne i platformy | adsfox i agencje w PL (wycena indywidualna); efekt −16…−19% kosztu jakościowego leada | Pieniądze (niższy koszt klienta) |
| Prowadzenie Meta Ads | Tak, masowo | Agencje w PL: 500–1900 zł/mies. (typowo 1000–1500) + 7–20% budżetu; średnio 2650 zł ([intense.com.pl](https://intense.com.pl/meta-ads-cennik/), [KC Mobile](https://kcmobile.pl/cennik/facebook-ads/)) | Pieniądze |
| Analiza kampanii i kreacji | Tak (SaaS) | Madgicx od 29–99 USD/mies., Motion ok. 250 USD/mies., Atria od 129 USD, Foreplay 49–459 USD ([Atria](https://www.tryatria.com/blog/best-motion-alternatives-for-meta-ad-creatives), [adlibrary](https://adlibrary.com/posts/motion-vs-foreplay)) | Czas i pieniądze |
| Reaktywacja starej bazy | Tak (agencje za granicą) | Agencje sprzedają to jako usługę, często z wynagrodzeniem za wynik; reaktywowane leady konwertują 10–25% vs 3–8% zimnych ([AudienceIntent](https://www.audienceintent.ai/insights/your-dead-leads-are-worth-millions/), [RocketLauncher](https://rocketlauncher.ai/use-cases/sell-database-reactivation-as-a-service)) | Pieniądze, szybko (7–14 dni) |
| Opinie Google | Tak (za granicą drogo) | Podium 399–698 USD/mies., Birdeye 299–449 USD/lokalizację ([Contractor ToolStack](https://contractortoolstack.com/compare/podium-vs-birdeye/)) | Pieniądze (pośrednio) |
| Recepcja / telefon | Tak | Voiceboty PL 499–1900 zł/mies. + wdrożenie do 2990 zł ([odbierze.ai](https://odbierze.ai/cennik), [Smart Asystenci](https://smart-asystenci.pl/ile-kosztuje-voicebot)) | Czas i pieniądze |
| Nauka AI w firmie | Tak, drogo | BPAI 2999 zł (1500+ uczestników łącznie), warsztat firmowy od 10 000 zł/dzień, szkolenia od 2900 zł netto ([BPAI](https://businessprogramme.ai/), [MKM Labs](https://mkmlabs.pl/szkolenia-ai-dla-firm/)) | Wiedza (nie wynik) |

**Najważniejsza obserwacja:** najwięcej pieniędzy płynie za wynik po drodze od leada do sprzedaży: szybkość, follow-up, CRM, sygnał do Meta. To obszar, w którym klient może policzyć zwrot w złotówkach.

---

## ETAP 3. KONKURENCJA (24 produkty)

| # | Produkt | Co sprzedaje / komu | Cena [FAKT] | Obietnica | Słabość / luka | Wiedza techniczna | Polski odpowiednik |
|---|---|---|---|---|---|---|---|
| 1 | GoHighLevel „Digital Marketing Snapshot” | gotowy system CRM, automatyzacje dla agencji | 997 USD jednorazowo + abonament GHL ([źródło](https://digitalmarketingsnapshotforghl.com/)) | agencja gotowa od razu | wymaga GHL (97–497 USD/mies.), po angielsku | średnia | brak |
| 2 | Snapshot Vault | wszystkie snapshoty GHL | 997 USD (reg. 1997) ([źródło](https://snapshotvault.com/)) | skrót dla agencji | jak wyżej | średnia | brak |
| 3 | Snapshoty branżowe GHL (roofing, home services) | system leadów dla niszy | 297 / 497 / 997 USD ([Contractor ToolStack](https://contractortoolstack.com/guides/gohighlevel-roofing-snapshots-buyers-guide/)) | gotowy lejek i follow-up dla branży | ekosystem GHL, USA | średnia | brak |
| 4 | Notion „Business OS” (Gumroad) | system operacyjny firmy w Notion | 997 USD ([Notion/Gumroad](https://www.notion.com/templates/buisness-os)) | porządek w firmie | brak dowodu sprzedaży, „ładny”, a nie „zarabiający” | niska | brak |
| 5 | HeyParker: Claude Code i Codex dla growth marketerów | kohorta dla marketerów | 2000 USD, 600+ uczestników (edycja poprzednia), teraz za darmo ([źródło](https://course.heyparker.ai/)) | system growth z AI | przeszła do darmowej: rynek edukacji AI tanieje | średnia–wysoka | brak |
| 6 | Maven: Claude Cowork dla marketerów | warsztat | 290 USD ([Maven](https://maven.com/tata-maytesyan/claude-cowork-workshop-for-marketers)) | praktyka Cowork | wiedza, nie system | niska | częściowo |
| 7 | Claude Protocol | 501 skilli | 3,99 USD/szt. lub 99 USD za wszystkie ([źródło](https://www.claudeprotocol.com/blog/where-to-buy-claude-skills)) | skill do wszystkiego | commodity | niska | brak |
| 8 | KissMySkills | skille, agenci | 4–32 USD, pakiety do 99 USD ([źródło](https://kissmyskills.com/blogs/news/how-much-do-claude-skills-cost)) | jw. | jw. | niska | brak |
| 9 | Solo Operator’s Claude Stack (Cadence Standard) | stack skilli dla solo | 99 GBP ([źródło](https://cadencestandard.com/blog/top-10-claude-skill-packs-for-solo-operators-in-2026/)) | jw. | jw. | niska | brak |
| 10 | Darmowe skille Meta Ads (Adspirer, HeyOz, Ryze, skillsdirectory) | skille do Meta Ads | 0 zł ([Adspirer](https://www.adspirer.com/skills), [HeyOz](https://heyoz.com/blogs/10-claude-code-skills-meta-ads)) | analiza i kreacje w Claude | darmowe = obniżają wartość samych skilli | niska–średnia | brak |
| 11 | Anthropic knowledge-work-plugins (marketing, sprzedaż) | oficjalne pluginy Cowork | 0 zł ([GitHub](https://github.com/anthropics/knowledge-work-plugins)) | marketing i sprzedaż w Cowork | ogólne, po angielsku, bez Meta lead gen | niska | brak |
| 12 | polish-agent-skills (GitHub) | 15 skilli PL: marketing, SEO, sprzedaż | 0 zł ([GitHub](https://github.com/DariuszCiesielski/polish-agent-skills)) | polskie formuły copy | ogólne | niska | to jest PL |
| 13 | Skille AI dla prawników (Kantorowski × Głąb) | 6 skilli Claude, polskie prawo | jednorazowo, bez abonamentu (cena na stronie) ([źródło](https://skills.kancelariakantorowski.pl/)) | narzędzie produkcyjne dla kancelarii | nisza | niska | **dowód, że w PL sprzedaje się płatne branżowe skille** |
| 14 | Madgicx | AI do Meta Ads | 29–99+ USD/mies. ([Superscale](https://superscale.ai/alternatives/madgicx/pricing)) | automatyczna optymalizacja | Trustpilot ok. 3,1/5 (ok. 4000 opinii), skargi na billing i brak zwrotów ([Trustpilot](https://www.trustpilot.com/review/madgicx.com)) | średnia | brak |
| 15 | AdCreative.ai | generator kreacji | ok. 339 USD/rok (skargi) ([Trustpilot](https://www.trustpilot.com/review/adcreative.ai)) | kreacje w minutę | generyczne kreacje, skargi na anulowanie | niska | brak |
| 16 | Foreplay | swipe file, briefy | 49–459 USD/mies. ([adlibrary](https://adlibrary.com/posts/motion-vs-foreplay)) | organizacja inspiracji | nie mierzy wyniku | niska | brak |
| 17 | Motion | analityka kreacji | ok. 250 USD/mies. | które kreacje działają | drogie dla SMB | niska | brak |
| 18 | Atria | analiza i generacja kreacji | od 129 USD/mies. ([Atria](https://www.tryatria.com/)) | zwycięskie reklamy | abonament | niska | brak |
| 19 | LeadsBridge | lead ads do CRM, audiences | 22–1549 USD/mies. ([leadsync.me](https://leadsync.me/blog/leadsbridge-alternatives/)) | leady w CRM w czasie rzeczywistym | drogie; bez follow-upu PL i SMS | średnia | brak |
| 20 | Zapier (szablony Meta CAPI dla CRM) | integracje | abonament Zapier ([Zapier](https://zapier.com/l/meta-conversions-api-crm)) | CAPI bez dewelopera | polling 1–15 min opóźnienia, klient sam składa system | średnia | brak |
| 21 | CloseBot / Setter AI / Appointwise | AI setter SMS/WhatsApp | 53–397 USD/mies. ([Setter AI](https://www.trysetter.com/)) | odpowiedź w 10 s, umawianie | koszt API i abonament, USA, ryzyko komunikacji AI po polsku | niska | brak (PL voiceboty drogie) |
| 22 | CallPage (PL) | callback ze strony w 28 s | 45–187 zł/mies. ([źródło](https://www.callpage.io/pricing)) | szybki kontakt ze strony | nie obsługuje formularzy Meta ani follow-upu | niska | to jest PL |
| 23 | adsfox (PL) | platforma i CRM z CAPI do Meta, Google, TikTok | wycena indywidualna ([adsfox](https://adsfox.pl/meta-crm-api/)) | optymalizacja pod jakość leada | abonament i usługa, dla większych graczy | niska dla klienta | to jest PL |
| 24 | Business Programme AI (PL) | 11-miesięczny program AI w biznesie | 2999 zł, 1500+ uczestników ([BPAI](https://businessprogramme.ai/), [recenzja](https://mickeys.pl/recenzja-business-programme-ai/)) | kompetencje AI | wiedza, nie system; 170 h nauki | niska | to jest PL |

Dodatkowo, dla kalibracji rynku PL:
- Artur Jabłoński: kursy reklam online 500–1000 zł netto, kurs z konsultacją konta 3050–5050 zł netto, 22 000+ przeszkolonych osób ([arturjablonski.com](https://arturjablonski.com/)).
- AI Expert Academy: 2999 zł za 90 dni mentoringu 1:1 ([ranking](https://aiexpert-academy.pl/blog/najlepsze-kursy-ai-polska-2026.html)).

### Luki, które widać w danych
1. **„Za granicą jest rynek, w PL prawie nikt”:** gotowe systemy leadowe („snapshoty”) po 997 USD. W PL nie znalazłem odpowiednika gotowego systemu „lead z Meta → SMS → follow-up → statusy → CAPI → koszt sprzedaży” sprzedawanego jednorazowo po polsku.
2. **„SaaS za 300–1000 zł/mies. vs 70–80% efektu jednorazowo”:** LeadsBridge, AI settery i CRM razem kosztują kilkaset do kilku tysięcy złotych miesięcznie. System na Make, Sheets i SMS daje rdzeń efektu za ok. 80–130 zł/mies. kosztów klienta plus jednorazową opłatę.
3. **„Agencje biorą kilka tysięcy miesięcznie za coś, co można zamienić w produkt”:** wdrożenie CAPI dla CRM i obsługa leadów to usługa agencyjna (adsfox, agencje CAPI). Rdzeń da się spakować w blueprint.
4. **Skille Claude same w sobie tanieją do zera** (darmowe biblioteki, oficjalne pluginy Anthropic, marketplace skilli po 4–29 USD). Paczka skilli jako główny produkt za 1000 zł to słaba pozycja. Skille jako warstwa AI na systemie, który daje wynik, to mocna pozycja.

---

## ETAP 4. DLACZEGO KTOŚ ZAPŁACI 1000 ZŁ (filtr)

Test dla każdego kierunku (szczegóły przy finalistach):

| Pytanie | Co musi być prawdą |
|---|---|
| Dlaczego nie zrobi sam w ChatGPT? | Produkt jest działającą integracją (dane, zdarzenia, SMS, API Meta), a nie tekstem. ChatGPT opisze, ale nie dostarczy przetestowanych scenariuszy z obsługą błędów, deduplikacją, normalizacją numerów, haszowaniem danych do CAPI i polskimi szablonami. |
| Dlaczego nie kurs za 99 zł? | Kurs daje wiedzę. Tu klient ma działający system po 90 minutach. |
| Dlaczego nie darmowy szablon? | Darmowe są pojedyncze klocki („lead do arkusza”). Wartość jest w całości: 6 połączonych modułów, polskie teksty, formularze z pytaniami kwalifikującymi, pętla CAPI, raport kosztu sprzedaży, AI. |
| Dlaczego nie SaaS? | SaaS to abonament rosnący z wolumenem i zwykle po angielsku. Tu klient płaci raz, dane są u niego, koszty bieżące to kilkadziesiąt złotych. |
| Efekt policzalny? | Tak: czas reakcji (min), odsetek skontaktowanych, koszt sprzedaży z reklamy, liczba sprzedaży z tych samych leadów. |
| Wynik czy wiedza? | Wynik: system działa po instalacji. |

Każdy pomysł, który nie przechodzi tego filtra, odpada w etapie 5.

---

## ETAP 5. 30 KONCEPCJI I BRUTALNA SELEKCJA

| # | Koncepcja | Werdykt | Powód |
|---|---|---|---|
| 1 | **System 5 Minut** (obsługa leadów Meta: SMS, alert, follow-up, statusy, CAPI, koszt sprzedaży, AI) | ✅ FINALISTA | najmocniejsze PAIN + MONEY, koszt ≈ 0, Twoje kompetencje |
| 2 | **AI Specjalista Meta Ads w Claude** (skille + oficjalny MCP Meta + playbooki) | ✅ FINALISTA | masz gotowe 10 skilli, naturalny upsell z kursu Claude |
| 3 | **Agencja Leadowa w Pudełku** (system dla freelancerów i agencji Meta Ads) | ✅ FINALISTA | motyw „zarabiam”, snapshoty po 997 USD jako dowód |
| 4 | **Reaktywacja Bazy** (DBR: stare leady → rozmowy w 14 dni) | ✅ FINALISTA | szybki wynik, ale ryzyko prawne w PL |
| 5 | **System Opinii Google** (prośby o opinię po usłudze, SMS, monitoring) | ✅ FINALISTA | drogi SaaS za granicą, prosty system |
| 6 | 300 promptów Claude dla firm | ❌ | zbiór promptów, wart 50–100 zł, darmowe odpowiedniki |
| 7 | „Claude w praktyce 2” (zaawansowany kurs) | ❌ | ogólny kurs AI; Twoja kotwica cenowa to 79 zł |
| 8 | Ebook „Meta Ads 2026” | ❌ | ebook, łatwy do skopiowania |
| 9 | Voicebot recepcja AI | ❌ | koszt API za minutę po Twojej stronie albo skomplikowany setup klienta, dużo supportu |
| 10 | Chatbot AI na Messengera i stronę | ❌ | hosting i koszt API, Meta ma natywne automaty |
| 11 | Generator kreacji (własny SaaS) | ❌ | budowa SaaS przed sprzedażą, koszt API, Meta robi to samo w Advantage+ |
| 12 | Biblioteka 300 szablonów reklam PL | ❌ | łatwa do skopiowania, wartość 100–200 zł |
| 13 | Kalkulator CAC/ROI w Sheets | ❌ osobno | wart 100–200 zł; wchodzi jako moduł do #1 |
| 14 | „Claude OS” dla mikrofirmy (maile, oferty, dokumenty) | ❌ | darmowe pluginy Anthropic, rozmyty efekt, trudno wycenić |
| 15 | Asystent KSeF i faktur z AI | ❌ | programy księgowe to pokrywają, poza Twoją marką |
| 16 | Asystent ofert B2B (oferta + follow-up ofert) | ❌ | słabsze dowody płacenia, wąski efekt |
| 17 | Maszyna contentu social media 30 dni | ❌ | zatłoczone, mało bolesne, wartość ok. 200 zł |
| 18 | AI dla pośredników nieruchomości | ❌ | nisza bez Twojej wiarygodności branżowej |
| 19 | AI dla gabinetów (rezerwacje) | ❌ | Booksy i ZnanyLekarz dominują |
| 20 | Model scoringu leadów AI | ❌ | wymaga dużego wolumenu, abstrakcyjny efekt |
| 21 | Szablon CRM w Notion dla agencji | ❌ | tanie odpowiedniki, „ładne”, a nie „zarabiające” |
| 22 | Audyt konta Meta w 15 minut (skill + MCP) | ❌ osobno | wart 97–297 zł; tripwire lub bonus do #1/#2 |
| 23 | 50 formularzy błyskawicznych wg branż | ❌ osobno | wchodzi jako moduł do #1 |
| 24 | Mentoring „Pierwszy klient w 30 dni” | ❌ | 1:1, praca rośnie z każdym klientem |
| 25 | Płatna społeczność AI dla przedsiębiorców | ❌ | wymaga stałej produkcji treści, cena 49–99 zł/mies. |
| 26 | Pakiet 50 scenariuszy Make „dla każdej firmy” | ❌ | ogólne, darmowe szablony Make, brak konkretnego wyniku |
| 27 | Pakiet reklam UGC z awatarami AI | ❌ | koszty generacji, ryzyko polityk Meta, jakość |
| 28 | Raport konkurencji z Biblioteki Reklam (skill) | ❌ osobno | wart 100–300 zł; bonus |
| 29 | Skrypty rozmów z leadem (szkolenie handlowców) | ❌ osobno | wiedza; wchodzi do #1 |
| 30 | Licencja white-label systemu leadowego dla agencji | ❌ osobno | nie osobny produkt, tylko wyższy pakiet #1/#3 |
| 31 | Płatny newsletter „AI radar” | ❌ | niska cena, praca co tydzień |

---

## ETAP 6. EKONOMIA FINALISTÓW

Wspólne założenia:
- Prowizja płatności: Stripe przy BLIK/P24 ok. 1,9% + 1 zł ([Easytools/Stripe](https://overclock.pl/recenzja-easytools-ile-kosztuje-sprzedaz-kursow-online-opinie-cennik-co-to-test/)), P24 1,2–1,9% + 0,25 zł ([KC Mobile](https://kcmobile.pl/baza-wiedzy/ecommerce/ile-kosztuje-przelewy24-dla-sklepu-online/)).
- Platforma sprzedaży i kursów (Publigo, Easytools itp.): ok. 100 zł/mies. stałego kosztu [HIPOTEZA].
- Czas supportu wyceniam na 200 zł/h [HIPOTEZA].
- API i infrastruktura po Twojej stronie: 0 zł we wszystkich finalistach, bo klient korzysta z własnego Make, Google, SMS i Claude.
- CAC z reklam (zimny ruch, webinar lub lead magnet → sprzedaż): 250–500 zł [HIPOTEZA do walidacji]. Z Twojej bazy i poleceń: ok. 0 zł.

### Koszt dostarczenia jednemu klientowi (bez reklam)

| Finalista | Prowizja (997 / 1197 / 1497) | Support śr. | Koszt supportu | Razem na klienta (przy 997) | Marża brutto przed reklamą |
|---|---|---|---|---|---|
| 1. System 5 Minut | 20 / 24 / 29 zł | 40 min (instalacja grupowa + mail) | 133 zł | ok. 153 zł | ok. 85% |
| 2. AI Specjalista Meta w Claude | 20 / 24 / 29 zł | 20 min | 67 zł | ok. 87 zł | ok. 91% |
| 3. Agencja Leadowa w Pudełku | 20 / 24 / 29 zł | 45 min | 150 zł | ok. 170 zł | ok. 83% |
| 4. Reaktywacja Bazy | 20 / 24 / 29 zł | 45 min | 150 zł | ok. 170 zł (+ konsultacja prawna jednorazowo 1000–1500 zł) | ok. 83% |
| 5. System Opinii Google | 20 / 24 / 29 zł | 30 min | 100 zł | ok. 120 zł | ok. 88% |

### Skala (System 5 Minut, cena 997 zł netto, CAC 350 zł dla połowy klientów z reklam)

| Klienci | Przychód | Prowizje | Support (h) | Koszt supportu | Reklama | Platforma i aktualizacje (rocznie) | Zysk operacyjny |
|---|---|---|---|---|---|---|---|
| 10 | 9 970 zł | 200 zł | 7 h | 1 330 zł | 1 750 zł | 1 200 + 2 000 zł | ok. 3 500 zł |
| 100 | 99 700 zł | 2 000 zł | 67 h | 13 300 zł | 17 500 zł | 1 200 + 6 000 zł | ok. 59 700 zł |
| 1000 | 997 000 zł | 20 000 zł | 667 h | 133 000 zł | 175 000 zł | 1 200 + 24 000 zł | ok. 644 000 zł |

Wnioski:
- Przy **1000 klientów** model działa finansowo, ale **667 h supportu to pół etatu**. Potrzebne są: baza FAQ, cotygodniowe grupowe spotkanie instalacyjne i asystent lub VA. Produkt nie przestaje być atrakcyjny, ale wymaga procesu. Kodu i API nie trzeba skalować.
- Stały koszt, którego nie widać w cenie: **aktualizacje przy zmianach API Meta i Make** (1–3 razy w roku). Założyłem na to 2–24 tys. zł rocznie.
- Finaliści 2 i 5 mają najniższy support, ale słabsze dowody popytu przy cenie 1000 zł (niżej).

---

## ETAP 7. TEST „100 KLIENTÓW”

| Pytanie | 1. System 5 Minut | 2. AI Specjalista Meta | 3. Agencja w Pudełku | 4. Reaktywacja | 5. Opinie Google |
|---|---|---|---|---|---|
| Kilka tysięcy potencjalnych klientów w PL? | Tak [HIPOTEZA]: firmy z budżetem na lead ads 2k+ zł/mies. (usługi, OZE, remonty, nieruchomości, kliniki, szkoły, finanse, B2B) plus agencje | Tak, ale o niskiej zdolności płacenia (mikrofirmy do 500 zł/mies.) | Tysiące freelancerów i małych agencji [HIPOTEZA] | Tak (firmy z bazą 500+ kontaktów) | Tak (lokalne usługi) |
| 100 kupujących realne? | Tak: 100 z ok. 10–30 tys. to 0,3–1% | Średnio: cena 1000 zł kłóci się z darmowymi skillami | Tak, przy mocnym case study | Średnio: bariera prawna | Średnio: PL płaci mniej za opinie |
| Gdzie dotrzeć? | Meta Ads (administratorzy stron, branże usługowe), grupy FB marketerów, LinkedIn, Twoi klienci i ich sieć, baza 100+ kursantów, partnerstwa z edukatorami Make | baza kursantów Claude, YouTube, FB | grupy freelancerów i SMM, LinkedIn, TikTok | branże z bazami | lokalne grupy biznesowe |
| Hook | „Twój lead czeka 6 h na telefon. Konkurencja dzwoni po 5 minutach.” | „Specjalista Meta Ads w Twoim Claude” | „Obsługuj 5 klientów leadowych w 1 dzień w tygodniu” | „Masz 800 starych leadów. To pieniądze.” | „Więcej opinii bez proszenia” |
| Wizualne demo przed → po? | **Tak, bardzo mocne** (SMS w 8 s, arkusz, zdarzenie w Meta) | Tak (czat z Claude) | Tak | Tak | Tak |
| Wartość zrozumiała w 10 s? | **Tak** | Średnio | Tak | Tak | Tak |
| Potencjał Meta Ads | Wysoki | Średni | Wysoki | Średni | Średni |

---

## ETAP 8. WYKORZYSTANIE 100+ KLIENTÓW KURSU „CLAUDE W PRAKTYCE”

- Co już umieją: rozmawiać z Claude, pisać prompty, pewnie projekty i skille.
- Czego nadal nie mają: **systemu, który działa bez nich**: podłączonych danych, automatyzacji, wyniku w pieniądzach.
- Naturalny następny etap to przejście od „Claude pomaga mi pisać” do „Claude i automatyzacja pracują na moją sprzedaż”.
- [HIPOTEZA] Nie wiesz, kim są ci kursanci (właściciele firm? marketerzy? freelancerzy?). To decyduje, czy główną ofertą dla nich jest System 5 Minut (firma z leadami), czy licencja agencyjna (freelancer). **Pierwszy krok walidacji to ankieta do nich (3 pytania, punkt 22).**
- Upsell z 79 zł do 997 zł jest realny tylko wtedy, gdy produkt ma warstwę Claude (dlatego System 5 Minut ma moduł AI) i oferta dla kursantów ma sensowny próg: cena kursanta 797 zł netto albo 79 zł z kursu odliczone od ceny.

---

## ETAP 9. RYNEK META ADS: CO POTWIERDZONE, CO ODRZUCONE

**Potwierdzone (mocne dowody):**
- Jakość leadów i brak szybkiego kontaktu to główny ból lead gen (1.1, 1.2).
- CAPI dla CRM daje mierzalny spadek kosztu jakościowego leada, ale małe firmy tego nie wdrażają, bo to technicznie trudne (1.3).
- Firmy płacą agencjom 1000–1500 zł/mies., a narzędziom kilkaset złotych miesięcznie (2).
- Oficjalny MCP Meta Ads (od 29.04.2026, 29 narzędzi, dostępny w każdym planie Claude) pozwala Claude czytać wyniki, diagnozować Pixel i CAPI oraz tworzyć kampanie ([pasqualepillitteri.it](https://pasqualepillitteri.it/en/news/1707/official-meta-ads-mcp-claude-29-tools-2026), [ferrerponseti.com](https://ferrerponseti.com/en/blog/official-meta-ads-mcp-claude/)). To obniża barierę warstwy AI w produkcie do zera kosztów po Twojej stronie.

**Odrzucone lub osłabione:**
- „Tworzenie reklam” i „ustawianie kampanii” jako główny produkt: Meta to automatyzuje, a darmowych skilli do kreacji jest mnóstwo.
- „Tańsze leady” jako obietnica: to prowadzi do gorszej jakości. Obietnica musi dotyczyć **sprzedaży z leadów**.

---

## ETAP 10. AI: HYPE vs REALNA WARTOŚĆ

| Hype (dużo szumu, mało płacących) | Realna wartość (ludzie płacą) |
|---|---|
| „AI employee” zastępujący pracownika (tylko 8% firm tak postrzega AI) | Szybka odpowiedź na leada (AI settery 97–397 USD/mies.) |
| Autonomiczni agenci „zrób wszystko” | Raportowanie i analiza kampanii (najszybszy zwrot; agencje raportują 10–15 h/tydz. oszczędności, [Metaflow](https://metaflow.life/blog/claude-skills-for-meta-ads), [Stormy AI](https://stormy.ai/blog/meta-ads-automation-claude-code-2026)) |
| Paczki promptów („rynek 100 promptów jest martwy”, [Trustly AI](https://trustly-ai.com/blog/best-practices-selling-ai-prompt-packs-gumroad-2026)) | Reaktywacja baz i follow-up (wynik w 7–14 dni) |
| Ogólne kursy AI (rynek tanieje: HeyParker z 2000 USD do 0) | Branżowe, produkcyjne skille (np. prawnicy w PL) |
| Voiceboty „dla każdego” (drogie w PL: 499–1900 zł/mies.) | Integracje dające dane i sygnał (CAPI, CRM) |

Dodatkowo:
- [FAKT] Claude Marketplace ruszył 23.09.2026 (2000+ konektorów i pluginów, 0% prowizji). Pluginy są w każdym płatnym planie ([Claude](https://claude.com/blog/claude-marketplace), [gHacks](https://www.ghacks.net/2026/09/27/anthropic-launches-claude-marketplace-with-more-than-2000-connectors-and-plugins/)). To nowy kanał dystrybucji, ale też sygnał, że pluginy ogólne będą darmowe.
- [FAKT] Claude Cowork kosztuje w PL ok. 90 zł/mies. (plan Pro) ([homodigital.pl](https://homodigital.pl/claude-cowork-czy-warto-placic-90-zl-miesiac-za-pogromce-chatbotow/)).

---

# FINAŁ: 5 NAJLEPSZYCH

## 1. System 5 Minut

**CO TO JEST:** Gotowy system obsługi leadów z Meta Ads: formularz kwalifikujący, SMS w mniej niż 60 s, alert dla właściciela, 7-dniowy follow-up, statusy w arkuszu, zwrot sygnału „sprzedaż” do Meta (CAPI dla CRM), raport kosztu sprzedaży z każdej reklamy, tygodniowy analityk AI w Claude.

**DLA KOGO:** Firmy usługowe wydające min. 2000 zł/mies. na reklamy leadowe (OZE, pompy ciepła, remonty, okna, nieruchomości, kliniki, szkoły, finanse, B2B) oraz freelancerzy i agencje prowadzące lead ads (licencja agencyjna).

**PROBLEM:** Leady stygną, bo nikt nie dzwoni od razu. Połowa „nie pamięta formularza”. Nikt nie wie, która reklama przynosi sprzedaż, a Meta optymalizuje pod ciekawskich, a nie pod kupujących.

**CO KLIENT DOSTAJE:** 2 blueprinty Make (rdzeń i follow-up plus CAPI), szablon arkusza „Tablica Leadów” z dashboardem, 12 szablonów formularzy wg branż, 14 szablonów SMS i maili PL, skrypt pierwszej rozmowy, pakiet skilli Claude (Analityk Leadów, Pisarz Follow-upów, Audyt Konta przez MCP), wideo instalacji w 90 minut, 4 grupowe spotkania instalacyjne.

**EFEKT:** Czas reakcji spada z godzin do mniej niż 1 minuty. Kontaktujesz więcej leadów z tego samego budżetu, widzisz koszt sprzedaży per reklama, a Meta dostaje sygnał jakości.

**DLACZEGO ZAPŁACI 1000+ ZŁ:** [HIPOTEZA z liczbami] Firma z 100 leadami/mies. przy CPL 60 zł wydaje 6000 zł. Wzrost domknięć z 5% do 7% to +2 sprzedaże miesięcznie. Przy 2000 zł marży na sprzedaży daje to +4000 zł miesięcznie. Produkt zwraca się w pierwszym miesiącu. Alternatywy: agencja 1000–1500 zł/mies. (i tak nie obsługuje leadów po formularzu), SaaS kilkaset złotych miesięcznie.

**DLACZEGO NIE ZROBI TEGO SAM W CHATGPT:** To integracja z obsługą błędów, deduplikacją, normalizacją numerów +48, haszowaniem SHA-256 do CAPI, logiką statusów i harmonogramem follow-upu. ChatGPT opisze kroki, ale właściciel firmy nie złoży i nie przetestuje tego w 90 minut.

**JAK DZIAŁA TECHNICZNIE:**
- Meta Lead Ads, moduł „Watch leads” w Make.
- Scenariusz 1 (rdzeń): normalizacja danych, zapis do Google Sheets, SMS do leada (SMSAPI przez HTTP), alert do właściciela (SMS lub e-mail z linkiem „zadzwoń”), e-mail potwierdzający.
- Scenariusz 2 (harmonogram co 15 min): follow-up wg statusu i czasu (+2 h SMS, D1 e-mail, D3 SMS, D7 ostatnia wiadomość) oraz wysyłka zdarzeń statusów (lead_id, action_source system_generated) do Meta Conversions API.
- Arkusz: statusy (Nowy, Kontakt, Umówiony, Oferta, Sprzedaż, Odpad + powód), dashboard z importem wydatków per reklama.
- Claude (Pro klienta): skille czytają arkusz przez konektor Google Drive albo z CSV. Meta MCP służy do audytu.
- Całość mieści się w 2 aktywnych scenariuszach. Wymaga płatnego planu Make, bo darmowy ma 1000 kredytów i 2 scenariusze ([cennik Make](https://latenode.com/blog/make-com-pricing)).

**KOSZT PO MOJEJ STRONIE:** 0 zł API. Ok. 153 zł na klienta (prowizja + support). Aktualizacje 2–6 tys. zł/rok.

**CENA:** 997 zł netto (start 597 zł dla 10 osób), licencja agencyjna 1997 zł netto.

**JAK SPRZEDAWAĆ:** Demo wideo 30 s w reklamie, webinar lub nagrany pokaz 25 min, sprzedaż na landingu, oferta dla kursantów Claude, polecenia od Twoich klientów agencyjnych.

**DOWODY Z RESEARCHU:** speed-to-lead (21×, 7% firm, 42 h), jakość formularzy (40%/30%), CAPI (−16…−19%), płatne alternatywy (LeadsBridge, settery, CallPage, agencje), snapshoty GHL po 997 USD jednorazowo (etapy 1–3).

**KONKURENCJA:** GHL i snapshoty (USA, abonament), LeadsBridge, Zapier, adsfox (PL, abonament i usługa), CRM (Livespace, Pipedrive), natywne Centrum leadów Meta (darmowe, ale bez SMS, follow-upu i raportu kosztu sprzedaży).

**RYZYKA:**
- Instalacja u nietechnicznego właściciela. Mitygacja: spotkania grupowe i upsell „instalacja za Ciebie”.
- Zmiany API Meta lub Make. Mitygacja: aktualizacje w cenie przez 12 miesięcy.
- RODO i zgody na kontakt. Mitygacja: gotowe klauzule do formularza, kontakt tylko w odpowiedzi na prośbę z formularza, jednorazowa konsultacja prawna.
- Firmy z małym wolumenem (poniżej 200 leadów) nie włączą optymalizacji pod conversion leads. Mitygacja: komunikować „mierzenie i sprzedaż” jako główną wartość, CAPI jako bonus do skalowania.
- Meta może dodać natywne SMS lub follow-up. Prawdopodobnie tylko w WhatsApp/Messenger; SMS i Twój raport zostają.

**MVP W 7 DNI:** Opisane w punkcie 18.

---

## 2. AI Specjalista Meta Ads w Claude

**CO TO JEST:** Plugin i paczka skilli (Twoje 10 skilli KWIATEKmedia) + oficjalny MCP Meta + playbooki „co tydzień” (audyt, iteracje, nowe kreacje, raport).

**DLA KOGO:** Właściciele firm prowadzący Meta Ads sami, marketerzy in-house, kursanci Claude.

**PROBLEM:** Nie mają specjalisty, a agencja jest za droga. Nie wiedzą, co wyłączyć i jakie reklamy zrobić dalej.

**CO KLIENT DOSTAJE:** Plugin z 10 skillami, instrukcję podłączenia MCP, 8 playbooków tygodniowych, bibliotekę przykładów PL, 4 nagrania.

**EFEKT:** Strategia, kreacje, copy i decyzje optymalizacyjne w 1–2 h tygodniowo.

**DLACZEGO ZAPŁACI 1000+ ZŁ:** Słabo. Darmowe skille Meta Ads i oficjalne pluginy Anthropic zaniżają postrzeganą wartość. Realny pułap to 297–497 zł [HIPOTEZA].

**DLACZEGO NIE ZROBI SAM:** Jakość, polski język i metodologia to prawdziwa przewaga, ale klientowi trudno ją odróżnić od darmowych skilli przed zakupem.

**JAK DZIAŁA TECHNICZNIE:** Plik .plugin / .skill (masz go w `dist/`), konektor MCP Meta w Claude klienta.

**KOSZT PO MOJEJ STRONIE:** Ok. 87 zł na klienta.

**CENA:** 497 zł (jako produkt), albo bonus do #1.

**JAK SPRZEDAWAĆ:** Do bazy kursantów, webinar.

**DOWODY:** oficjalny MCP (IV 2026), HeyParker 600+ × 2000 USD (ale teraz za darmo), polskie płatne skille branżowe (Kantorowski).

**KONKURENCJA:** Adspirer, HeyOz, Ryze (za darmo), knowledge-work-plugins (za darmo), marketplace skilli po 4–29 USD.

**RYZYKA:** Commodity. Meta automatyzuje kreację. Trudno pokazać wynik.

**MVP W 7 DNI:** Już istnieje (v1.0.0 w repo). Potrzebne są tylko landing i nagrania.

---

## 3. Agencja Leadowa w Pudełku

**CO TO JEST:** Kompletny system dla freelancera lub małej agencji prowadzącej lead ads: System 5 Minut z licencją na klientów + skille kreacji + szablon oferty (masz skill oferty leadowej) + cennik, umowa, onboarding, raport miesięczny, checklisty.

**DLA KOGO:** Freelancerzy Meta Ads, SMM-owcy dokładający lead gen, małe agencje (1–5 osób).

**PROBLEM:** Za dużo pracy ręcznej na klienta. Brak twardego wyniku („sprzedaż”, nie „leady”), więc klienci odchodzą.

**CO KLIENT DOSTAJE:** Wszystko z #1 (licencja nielimitowana) + pakiet agencyjny: oferta, cennik, umowa, onboarding klienta, raport, skille.

**EFEKT:** Obsługa klienta leadowego w 2–3 h/mies. zamiast 8–10 h. Wyższa retencja, bo klient widzi koszt sprzedaży.

**DLACZEGO ZAPŁACI 1000+ ZŁ:** Jeden klient to 1000–1500 zł/mies. dla agencji ([intense.com.pl](https://intense.com.pl/meta-ads-cennik/)). Produkt zwraca się po jednym kliencie lub jednym uratowanym kliencie. Snapshoty dla agencji sprzedają się po 997 USD.

**DLACZEGO NIE ZROBI SAM:** Mógłby, ale to tygodnie budowy i testów. Kupuje gotowe i sprawdzone u klientów.

**KOSZT PO MOJEJ STRONIE:** Ok. 170 zł na klienta.

**CENA:** 1997 zł netto.

**JAK SPRZEDAWAĆ:** Grupy freelancerów, LinkedIn, webinar „Jak obsługiwać 5 klientów leadowych w 1 dzień”.

**DOWODY:** snapshoty GHL 297–997 USD, AAA Hub 333 800+ członków i akcelerator 5000–7150 USD ([Skool](https://www.skool.com/learn-ai)).

**KONKURENCJA:** GHL (USA), kursy Meta Ads dla freelancerów w PL (wiedza, nie system).

**RYZYKA:** Mniejsza pula w PL. Tworzysz konkurencję dla KWIATEKmedia (akceptowalne). Obietnice „zarobku” wymagają ostrożności w reklamie.

**MVP W 7 DNI:** #1 + paczka dokumentów agencyjnych (2 dni).

---

## 4. Reaktywacja Bazy

**CO TO JEST:** Kampania reaktywacyjna starych leadów i klientów: segmentacja w arkuszu, sekwencja SMS/e-mail PL, skill Claude do odpowiadania na wiadomości, scenariusz Make.

**DLA KOGO:** Firmy z bazą 500+ kontaktów (OZE, kliniki, szkoły, auto, nieruchomości).

**PROBLEM:** Zapłacili za leady, które nigdy nie kupiły.

**EFEKT:** Rozmowy i sprzedaże w 7–14 dni bez budżetu reklamowego.

**DLACZEGO 1000+ ZŁ:** Reaktywowane leady konwertują 10–25% ([AudienceIntent](https://www.audienceintent.ai/insights/your-dead-leads-are-worth-millions/)). Za granicą agencje sprzedają to jako usługę za wynik.

**KOSZT PO MOJEJ STRONIE:** Ok. 170 zł + jednorazowa opinia prawna.

**CENA:** 997 zł.

**RYZYKA (kluczowe):** W PL komunikacja marketingowa SMS i e-mail wymaga uprzedniej zgody (Prawo komunikacji elektronicznej, RODO). Stare bazy często jej nie mają. Ryzyko kar i reputacji jest realne. **Dlatego nie jako główny produkt**, tylko jako moduł „reaktywacja leadów z ważną zgodą” w #1.

**MVP W 7 DNI:** Scenariusz + skrypty (3 dni).

---

## 5. System Opinii Google

**CO TO JEST:** Automatyczna prośba o opinię po usłudze (SMS/e-mail), przypomnienie, monitoring nowych opinii, skill Claude do odpowiadania na opinie.

**DLA KOGO:** Lokalne usługi.

**EFEKT:** Więcej opinii, szybsze odpowiedzi.

**DLACZEGO 1000+ ZŁ:** Za granicą Podium i Birdeye kosztują 299–698 USD/mies. W PL skłonność do płacenia za opinie jest niższa, a „Wizytówka Google” to nie Twoja marka [HIPOTEZA].

**KOSZT PO MOJEJ STRONIE:** Ok. 120 zł.

**CENA:** 497–697 zł realnie.

**RYZYKA:** Zasady Google (zakaz „review gating”), niższa cena, słabe dopasowanie do Twojej marki.

**MVP W 7 DNI:** 3 dni.

---

# WYBÓR: SYSTEM 5 MINUT

Ranking według dowodów (1–5, im więcej, tym lepiej):

| Kryterium | 1. System 5 Minut | 2. AI Specjalista | 3. Agencja w Pudełku | 4. Reaktywacja | 5. Opinie |
|---|---|---|---|---|---|
| Ból (dowody) | 5 | 3 | 4 | 4 | 3 |
| Ludzie już płacą | 5 | 2 | 4 | 4 | 3 (PL) |
| Twoje aktywa i wiarygodność | 5 | 5 | 5 | 3 | 2 |
| Odporność na Meta i darmowe AI | 4 | 2 | 3 | 4 | 4 |
| Niski support na klienta | 3 | 5 | 3 | 3 | 4 |
| Zrozumiały w 10 s i demo | 5 | 3 | 4 | 4 | 4 |
| Ryzyko prawne (5 = niskie) | 4 | 5 | 4 | 2 | 4 |
| **Suma** | **31** | 25 | 27 | 24 | 24 |

## 1. Nazwa produktu
**System 5 Minut: obsługa leadów z Meta Ads od kliknięcia do sprzedaży**

## 2. Obietnica (jedno zdanie)
**Każdy lead z Facebooka i Instagrama dostaje odpowiedź w mniej niż minutę, żaden nie ginie bez follow-upu, a Ty widzisz, które reklamy przynoszą sprzedaż, a nie tylko formularze.**

## 3. Grupa docelowa
- Główna: właściciele i menedżerowie firm usługowych (5–50 osób), które wydają 2000–20 000 zł/mies. na Meta Lead Ads i sprzedają telefonicznie lub na spotkaniu. Branże: OZE i pompy ciepła, okna i drzwi, remonty i wykończenia, nieruchomości i deweloperzy, kliniki i medycyna estetyczna, szkoły i kursy, finanse, B2B usługi.
- Druga: freelancerzy i agencje lead ads (licencja agencyjna).
- Trzecia: kursanci „Claude w praktyce”, którzy prowadzą firmę z leadami.

## 4. Problem
„Płacę za leady, a sprzedaży nie ma.” Przyczyny:
1. Kontakt po godzinach albo dniach.
2. Brak follow-upu po nieodebranym telefonie.
3. Formularz bez kwalifikacji, więc zapisują się przypadkowe osoby.
4. Leady żyją w mailach i Excelu bez statusów.
5. Meta optymalizuje pod najtańszy formularz, bo nie wie, kto kupił.
6. Nikt nie liczy kosztu sprzedaży z konkretnej reklamy.

## 5. Mechanizm rozwiązania: „Pętla 5 Minut”
1. **Filtruj.** Formularz o wyższej intencji z pytaniem kwalifikującym i klauzulą zgody.
2. **Reaguj.** SMS do leada w mniej niż 60 s i alert „dzwoń teraz” do Ciebie.
3. **Dociskaj.** Automatyczny follow-up przez 7 dni, dopóki status się nie zmieni.
4. **Oznaczaj.** Jeden klik statusu w arkuszu.
5. **Ucz Meta.** Statusy wracają do Meta przez CAPI, więc algorytm uczy się, kto kupuje.
6. **Licz.** Koszt kontaktu, spotkania i sprzedaży z każdej reklamy.
7. **Decyduj z AI.** Co poniedziałek Claude czyta arkusz i mówi, co wyłączyć, co skalować i jaką reklamę zrobić dalej.

## 6. Kompletna zawartość
1. Blueprint Make nr 1 „Reakcja” (lead → arkusz → SMS → alert → e-mail).
2. Blueprint Make nr 2 „Follow-up i Sygnał” (harmonogram follow-upu i CAPI statusów do Meta).
3. Szablon Google Sheets „Tablica Leadów”: statusy, powody odpadu, dashboard (leady, % kontaktu, spotkania, sprzedaże, koszt sprzedaży per reklama i kampania), import wydatków.
4. 12 szablonów formularzy błyskawicznych wg branż (pytania kwalifikujące, ekran końcowy, klauzula zgody).
5. 14 szablonów SMS i e-mail PL (reakcja, nieodebrane, przypomnienie o spotkaniu, ostatnia wiadomość).
6. Skrypt pierwszej rozmowy (90 s) i lista pytań kwalifikujących.
7. Pakiet Claude: skill „Analityk Leadów” (raport tygodniowy), skill „Pisarz Follow-upów”, skill „Audyt Konta” (przez oficjalny MCP Meta).
8. Kurs instalacji: 8 krótkich wideo (razem ok. 90 min) + checklista „działa / nie działa”.
9. Instrukcja CAPI dla CRM: jak utworzyć zbiór danych CRM w Menedżerze zdarzeń, kiedy przełączyć optymalizację na conversion leads.
10. Klauzule RODO do formularza i polityki (wzór, do weryfikacji przez prawnika klienta).

## 7. Struktura produktu
- Moduł 0: Start (15 min): czego potrzebujesz, konta, koszty bieżące.
- Moduł 1: Formularz, który filtruje.
- Moduł 2: Reakcja w 60 s (instalacja blueprintu 1).
- Moduł 3: Tablica Leadów i statusy.
- Moduł 4: Follow-up 7 dni (blueprint 2).
- Moduł 5: Sygnał dla Meta (CAPI).
- Moduł 6: Koszt sprzedaży per reklama.
- Moduł 7: Analityk AI w Claude (skille + MCP).
- Bonusy.

## 8. Sposób dostarczenia
Platforma kursowa (Publigo lub Easytools) z nagraniami i plikami: blueprinty .json, link „utwórz kopię” do arkusza, .skill/.plugin, PDF. Przez 30 dni cotygodniowe grupowe „Instalujemy razem” (Zoom, 60 min). Support mailowy 30 dni. Aktualizacje przez 12 miesięcy.

## 9. Narzędzia klienta
- Konto Meta Business z formularzami (jest).
- Make: Core ok. 10,59 USD/mies. (ok. 40–45 zł).
- Konto Google.
- SMSAPI lub inna bramka: prepaid od 49 zł, 0,11–0,17 zł/SMS ([SMSAPI](https://www.smsapi.pl/cennik)), tańsze bramki od ok. 0,075 zł ([SENDLY](https://sendly.link/pl/cennik/)).
- Opcjonalnie Claude Pro (ok. 90 zł/mies.) dla warstwy AI.

Koszt bieżący klienta: ok. 80–140 zł/mies. (przykład: 100 leadów × 4 SMS × 0,12 zł = 48 zł SMS + Make 45 zł).

## 10. Koszt utrzymania (Twój)
- 0 zł API i infrastruktury per klient.
- Platforma ok. 100 zł/mies.
- Support ok. 40 min na klienta (spada z czasem dzięki FAQ).
- Aktualizacje 1–3 razy w roku (2–6 tys. zł wartości Twojego czasu).
- Jednorazowo: konsultacja prawna klauzul (ok. 1000–1500 zł) [HIPOTEZA].

## 11. Cena
- **997 zł netto** (ok. 1226 zł brutto): cena standardowa.
- **597 zł netto**: pierwsze 10 osób (beta, w zamian za case study i nagranie opinii).
- **797 zł netto**: kursanci „Claude w praktyce” (stała zniżka lojalnościowa).
- **1997 zł netto**: licencja agencyjna (nieograniczona liczba klientów).

Dlaczego nie 1197 lub 1497 zł: grupa docelowa porównuje produkt z miesięczną opłatą agencji (1000–1500 zł). Kotwica „mniej niż jeden miesiąc agencji, a działa latami” jest najmocniejsza przy 997 zł. Podwyżkę do 1197 zł zrób po 30 sprzedażach i 5 case studies z liczbami.

## 12. Oferta podstawowa
„System 5 Minut: wszystko z punktu 6, instalacja w 90 minut, 4 spotkania »Instalujemy razem«, 30 dni wsparcia, 12 miesięcy aktualizacji. 997 zł netto jednorazowo. Bez abonamentu u mnie.”

## 13. Bonusy (każdy rozwiązuje obiekcję)
1. **Pakiet Kreacji KWIATEKmedia (10 skilli Claude)**. Obiekcja: „a skąd leady?”. Wartość: przewaga, którą już masz.
2. **Audyt konta Meta w 15 minut (skill + MCP)**. Obiekcja: „nie wiem, czy moje kampanie są OK”.
3. **Moduł „Reaktywacja leadów ze zgodą”**. Obiekcja: „mam stare leady”; szybki pierwszy wynik.
4. **Kalkulator „Ile tracisz na wolnej reakcji”**. Obiekcja: „czy to się opłaci?”; to też narzędzie sprzedażowe dla agencji.

## 14. Gwarancja
**„Gwarancja uruchomienia”:** jeśli w 14 dni, idąc za instrukcją i biorąc udział w spotkaniu instalacyjnym, nie uruchomisz systemu (lead → SMS w mniej niż 60 s → wiersz w arkuszu), zwracam 100%.

Gwarancja na wynik sprzedażowy nie ma sensu, bo zależy od sprzedaży klienta. Gwarancja uruchomienia zdejmuje główną obiekcję („nie ogarnę technicznie”) i jest pod Twoją kontrolą.

## 15. Landing page w zarysie
1. **Nagłówek:** „Twój lead z Facebooka czeka 6 godzin na telefon. Konkurencja dzwoni po 5 minutach.”
2. **Podtytuł:** „System 5 Minut: SMS do leada w mniej niż minutę, automatyczny follow-up i raport, które reklamy przynoszą sprzedaż. Instalacja w 90 minut, bez abonamentu.”
3. **Wideo demo (30 s):** formularz → SMS → arkusz → zdarzenie w Meta.
4. **Liczby:** 21× większa szansa na kwalifikację leada przy kontakcie w 5 min; tylko 7% firm tak robi (ze źródłami).
5. **„Znasz to?”:** 5 objawów (nie odbiera, nie pamięta formularza, leady w mailach, nie wiesz, co działa, agencja pokazuje CPL).
6. **Jak działa:** 7 kroków Pętli 5 Minut (grafika).
7. **Co dostajesz:** lista z punktu 6 i wartości.
8. **Rachunek:** kalkulator „100 leadów × CPL × % domknięć”.
9. **Dla kogo / nie dla kogo:** poniżej 30 leadów/mies. nie kupuj.
10. **Case studies** (po becie).
11. **O mnie:** KWIATEKmedia, liczby klientów, kurs Claude 100+ osób.
12. **Oferta i cena:** porównanie z agencją i SaaS.
13. **Gwarancja uruchomienia.**
14. **FAQ:** Make, koszty bieżące, RODO, „nie jestem techniczny”, CAPI poniżej 200 leadów.
15. **CTA.**

## 16. Pięć koncepcji reklam Meta

Każda: format 4:5 (feed) + 9:16 (stories/reels), tekst na grafice po polsku, bez przypadkowych napisów.

**R1. „6 godzin vs 5 minut” (problem, liczba)**
- Scena: biurko właściciela firmy wieczorem, telefon ekranem do góry z powiadomieniem „Nowy lead: Anna K., 14:02”, obok zegar ścienny pokazujący 20:15.
- Postać: mężczyzna 40–45 lat, koszula robocza lub polo, widoczne zmęczenie, patrzy na telefon z grymasem „znowu”.
- Emocje: frustracja, poczucie straconej szansy.
- Kompozycja: telefon w dolnej 1/3 na pierwszym planie, ostry; postać rozmyta w tle po prawej; zegar w lewym górnym rogu.
- Hook (tekst na grafice): „Lead z 14:02. Oddzwaniasz o 20:15.” Pod spodem: „Konkurencja zadzwoniła o 14:07.”
- Czcionka: Inter lub Manrope ExtraBold; nagłówek 88–96 px (przy 1080×1350), podtytuł 44 px Medium.
- Kolor: biały nagłówek na ciemnym gradiencie (#0F172A → przezroczysty), „14:07” w kolorze #22C55E.
- Położenie tekstu: górne 30% kadru, wyrównanie do lewej, margines 64 px.
- Cel psychologiczny: awersja do straty; odbiorca rozpoznaje własną sytuację i czuje koszt zwłoki.

**R2. Demo przed → po (wideo 20 s, ekran telefonu)**
- Scena: split screen. Lewa połowa: formularz Meta wysyłany na telefonie. Prawa połowa: drugi telefon, na którym po 8 s przychodzi SMS „Dzień dobry Pani Anno, dziękuję za zapytanie…”, potem arkusz z nowym wierszem.
- Postać: tylko dłonie (kobieta 30+, neutralny manicure) i ekrany.
- Emocje: zaskoczenie („już?”), ulga.
- Kompozycja: licznik sekund na środku (00:00 → 00:08), duży.
- Hook: „8 sekund. Tyle czekał ten lead na odpowiedź.”
- Czcionka: Inter Bold 72 px, licznik JetBrains Mono Bold 140 px.
- Kolor: czarny tekst na białym, licznik #2563EB.
- Położenie tekstu: hook na górze (0–3 s), licznik w centrum, CTA na dole w ostatnich 3 s.
- Cel psychologiczny: dowód przez demonstrację; widzi mechanizm, więc wierzy bez obietnic.

**R3. „Meta nie wie, kto od Ciebie kupił” (teza wbrew intuicji)**
- Scena: minimalistyczna grafika: po lewej ikona formularza z napisem „Lead”, po prawej ikona uścisku dłoni „Sprzedaż”, między nimi przerwana linia z nożyczkami.
- Postać: brak (grafika edukacyjna), styl flat, dużo światła.
- Emocje: olśnienie („aha, dlatego mam słabe leady”).
- Kompozycja: pozioma oś przez środek kadru; tekst nad osią.
- Hook: „Meta optymalizuje pod formularze. Nie pod Twoich klientów.” Pod osią: „Wyślij jej sygnał sprzedaży. Resztę zrobi algorytm.”
- Czcionka: Manrope ExtraBold 84 px / Regular 40 px.
- Kolor: granat #1E293B na tle #F8FAFC; przerwana linia i nożyczki #EF4444.
- Położenie tekstu: nagłówek górne 25%, podtekst dolne 20%.
- Cel psychologiczny: nowa przyczyna problemu (zdejmuje winę z odbiorcy), a przez to otwartość na nowe rozwiązanie.

**R4. Rachunek (liczba, dla racjonalnych)**
- Scena: kartka kalkulacji na podkładce: „100 leadów × 60 zł = 6000 zł”, „5% sprzedaży = 5 klientów”, „7% = 7 klientów”, „+2 klientów/mies.”, obok długopis.
- Postać: dłoń przedsiębiorcy (mężczyzna 50 lat, zegarek) zakreśla „+2”.
- Emocje: kalkulacja, chłodna pewność.
- Kompozycja: kartka centralnie, lekko pod kątem, światło dzienne z lewej.
- Hook: „Nie potrzebujesz więcej leadów. Potrzebujesz 2 więcej z tych, które już masz.”
- Czcionka: Inter ExtraBold 80 px; liczby na kartce odręczne (Caveat 56 px).
- Kolor: czarny na kremowym #FFF7ED; „+2” #16A34A.
- Położenie tekstu: nagłówek na górnym pasku 22% (tło białe), kartka poniżej.
- Cel psychologiczny: zakotwiczenie wartości w złotówkach przed ceną; produkt staje się inwestycją.

**R5. Założyciel mówi (talking head 30–45 s)**
- Scena: Paweł przy biurku agencji, w tle monitor z arkuszem leadów i kolorowymi statusami.
- Postać: Paweł, strój casual-biznesowy, spokojny, pewny głos, patrzy w obiektyw.
- Emocje: autorytet praktyka, zero hype’u.
- Kompozycja: plan średni, reguła trójpodziału, monitor po lewej.
- Hook (pierwsze 2 s, napis): „Prowadzę kampanie leadowe dla firm. Najwięcej pieniędzy ginie PO formularzu.”
- Czcionka napisów: Inter Bold 56 px, białe z czarnym obrysem 4 px.
- Kolor: słowa kluczowe podświetlone #FACC15.
- Położenie tekstu: napisy w środkowej-dolnej 1/3 (bezpieczna strefa reels).
- Cel psychologiczny: autorytet i wiarygodność (ekspert z praktyki mówi, gdzie jest problem), przejście z „kupię reklamę” na „naprawię obsługę”.

## 17. Demo produktu
- **Wideo 30 s** (do reklam i na landing, bez dźwięku): telefon wysyła formularz testowy → licznik 00:08 → SMS przychodzi → wiersz w arkuszu → status „Sprzedaż” → Menedżer zdarzeń Meta pokazuje zdarzenie → dashboard z kosztem sprzedaży per reklama.
- **Demo 12 min** (webinar lub nagranie): to samo z komentarzem + raport Analityka Leadów w Claude.
- **Demo na żywo** w spotkaniach sprzedażowych z agencjami.

## 18. Plan MVP (7 dni)
- **Dzień 1:** Wybierz 2 istniejące scenariusze Make od klientów. Zanonimizuj je i ujednolić do wersji „szablon”: zmienne na górze, obsługa błędów, normalizacja numerów +48, deduplikacja.
- **Dzień 2:** Scenariusz follow-upu (harmonogram 15 min) + CAPI (HTTP do Conversions API: event_name = status, action_source = system_generated, lead_id, haszowane dane). Testy na koncie testowym.
- **Dzień 3:** Arkusz „Tablica Leadów” + dashboard + import wydatków (ręczny CSV w MVP; automatyczny w v2).
- **Dzień 4:** Skille Claude: Analityk Leadów i Pisarz Follow-upów (adaptacja Twojego `iteration-engine`) + teksty SMS, e-mail i formularze.
- **Dzień 5:** Nagranie instalacji (surowe, telefonem lub ekranem, 60–90 min) + checklista.
- **Dzień 6:** Test instalacji przez osobę nietechniczną (klient lub znajomy). Mierz czas i miejsca, w których się zacina. Poprawki.
- **Dzień 7:** Landing (wersja 1), wideo demo 30 s, płatność, e-mail do kursantów.

## 19. Walidacja PRZED pełną budową
Buduj dopiero po sprzedaży.
1. **Dni 1–2:** Ankieta do 100+ kursantów Claude (3 pytania): „Czy prowadzisz firmę lub klientów z leadami z Meta?”, „Ile leadów miesięcznie?”, „Co się dzieje z leadem w pierwszej godzinie?”. Wynik mówi, czy baza to firmy, czy freelancerzy.
2. **Dni 1–3:** 15 rozmów po 15 min: 5 Twoich klientów lub byłych klientów, 5 kursantów z leadami, 5 firm z sieci. Pytania o obecny czas reakcji, % skontaktowanych i „ile zapłaciłbyś za…”. Na końcu każdej rozmowy pokaż demo i zaproponuj przedsprzedaż 597 zł netto.
3. **Dni 3–14:** Landing z demo i przyciskiem „Kupuję w cenie beta 597 zł netto, start X”. Ruch: e-mail do bazy, posty na LinkedIn i FB, 1 kampania Meta za 1500 zł (R1 + R2) na landing.
4. **Kryteria decyzji po 14 dniach:**
   - **10+ przedsprzedaży:** buduj pełną wersję, termin startu 21 dni.
   - **5–9:** popyt jest, komunikat do poprawy. Testuj hooki R3/R4 i ofertę agencyjną jeszcze 14 dni.
   - **Poniżej 5 przy ponad 300 wizytach i 15 rozmowach:** zwróć pieniądze i przejdź na wariant zapasowy (Agencja Leadowa w Pudełku, jeśli ankieta pokazała głównie freelancerów).
5. **Metryki landingu:** konwersja z wizyty do zakupu co najmniej 1% (zimny ruch) i co najmniej 5% (baza) [HIPOTEZA progu].

## 20. Pierwszych 10 klientów
1. **Twoi obecni klienci agencji** (masz już scenariusze Make z arkuszami leadów u kilku z nich): część już ma elementy systemu. Zaproponuj pełną wersję z instalacją 1:1 za 597 zł albo w pakiecie z obsługą. Jako referencja: 2–4 klientów.
2. **Kursanci Claude z leadami** (z ankiety): e-mail + prywatna wiadomość z demo. 3–5 klientów.
3. **Sieć:** posty „szukam 10 firm do bety” na LinkedIn i FB z wideo demo. 2–3 klientów.
4. **Warunek bety:** instalacja na żywo w grupie, po 30 dniach liczby (czas reakcji, % kontaktu, sprzedaże) i nagranie opinii.

## 21. Droga do 100 klientów
- **Miesiąc 1 (10):** beta, case studies z liczbami.
- **Miesiące 2–3 (+30):** stała kampania Meta: R2 (demo) i R1 (problem) jako główne. Retargeting z webinarem lub nagranym demo 12 min. Budżet 3–5 tys. zł/mies. Przy CAC 350 zł to ok. 10–15 klientów/mies. [HIPOTEZA].
- **Miesiąc 3:** webinar na żywo co 2 tygodnie („Gdzie giną pieniądze po formularzu”). Cena 997 zł.
- **Miesiące 3–5 (+40):** kanał agencyjny (licencja 1997 zł) + partnerstwa: polscy edukatorzy Make i n8n, bramki SMS (program partnerski), księgowe i doradcy branżowi. Marketplace Claude i Make jako darmowe kanały widoczności dla bonusowych skilli z linkiem do produktu.
- **Miesiące 4–6 (+20):** polecenia (program: 20% prowizji dla polecającego), studia przypadków per branża i reklamy branżowe (OZE, kliniki, nieruchomości).

## 22. Jak wykorzystać 100+ kursantów „Claude w praktyce”
1. **Ankieta** (punkt 19.1): segmentacja na firmy z leadami, freelancerów i resztę.
2. **Dla firm z leadami:** e-mail „Nauczyłeś się Claude. Teraz niech Claude pracuje na Twoją sprzedaż.” Cena kursanta 797 zł netto (beta 597 zł).
3. **Dla freelancerów:** licencja agencyjna 1497 zł netto (zamiast 1997 zł).
4. **Dla reszty:** darmowy mini-produkt „Analityk Leadów” (1 skill + arkusz) jako prezent. Buduje zaufanie i wraca do nich, gdy zaczną reklamy.
5. **Każdy kursant, który kupi:** prośba o opinię wideo po 30 dniach.

## 23. Potencjalny upsell
1. **„Zainstaluj za mnie”:** 990 zł netto (1–2 h Twojej pracy, limit miejsc w miesiącu). Wysoka marża, ale praca rośnie z liczbą klientów, więc limituj.
2. **Licencja agencyjna:** +1000 zł dla kupujących wersję podstawową.
3. **Obsługa kampanii KWIATEKmedia:** kupujący z budżetem powyżej 5 tys. zł/mies. to najlepsi klienci agencji. Produkt kwalifikuje leady dla Twojej agencji. To najwyższa wartość biznesowa całego projektu [HIPOTEZA].
4. **Pakiety branżowe:** formularze, SMS i skrypty dla OZE, klinik, nieruchomości (297 zł każdy).

## 24. Recurring revenue bez psucia modelu jednorazowego
- **„Klub Aktualizacji 5 Minut”:** 49 zł/mies. albo 390 zł/rok, **opcjonalny** po 12 miesiącach aktualizacji w cenie. Zawiera: nowe wersje blueprintów przy zmianach Meta i Make, nowe skille, 1 spotkanie Q&A w miesiącu, nowe pakiety branżowe.
- Zasada: zakupiona wersja działa bezterminowo i bez abonamentu. Klub to wygoda, nie warunek działania. Model jednorazowy zostaje nienaruszony.
- **Licencja agencyjna rozliczana rocznie** (opcjonalnie w przyszłości): 990 zł/rok za aktualizacje i materiały white-label dla agencji.

---

## Podsumowanie decyzji

**Wdrażaj System 5 Minut, ale najpierw zrób 14-dniową przedsprzedaż. Kryterium: min. 10 kupujących po 597 zł netto.**

Dlaczego nie kolejny produkt AI lub skille jako główna oferta: dane pokazują, że skille i prompty tanieją do zera (darmowe biblioteki, oficjalne pluginy Anthropic, marketplace po 4–29 USD), a kursy AI przechodzą na darmowe. Pieniądze płyną za wynik między leadem a sprzedażą. Tam Twoja agencja ma przewagę i gotowe klocki, a Meta tego nie automatyzuje. Claude zostaje w produkcie jako warstwa analizy i decyzji, co daje naturalny most do kursantów.

Wariant zapasowy (tylko jeśli walidacja pokaże, że Twoja baza to głównie freelancerzy): **Agencja Leadowa w Pudełku, 1997 zł netto**. Ten sam rdzeń, inna oferta.
