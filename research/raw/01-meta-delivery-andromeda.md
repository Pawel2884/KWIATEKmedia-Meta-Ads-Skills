# 01 — System dostarczania reklam Meta, Andromeda, Advantage+, dywersyfikacja kreacji

> Research surowy (raw) dla systemu „KWIATEKmedia Meta Ads”. Data: 2026-09-24. Autor: agent researchowy (obszar 01).
> Cel: oddzielić to, co Meta **oficjalnie** potwierdziła, od tego, co praktycy twierdzą o systemie dostarczania reklam, Andromedzie i dywersyfikacji kreacji. Wnioski mają przełożyć się na reguły systemu kreacji, którego celem są leady rozumiejące ofertę, a nie najtańsze leady.

---

## 1. Zakres i metoda

**Kanały i liczba zapytań**

| Kanał | Liczba | Tryb dostępu | Uwagi |
|---|---|---|---|
| Meta Business Help Center przez MCP (`ads_get_help_article`) | 41 zapytań, ok. 65 różnych artykułów | [PEŁNY] | Pełne teksty artykułów w wersji angielskiej, stan na 2026-09-24. Źródło pierwotne (poziom A). |
| WebSearch | 30 zapytań | [WYSZUKIWARKA] | Budżet wyszukiwań sesji (200, wspólny dla wszystkich agentów) wyczerpał się po moim 30. zapytaniu. Znam tylko streszczenia i fragmenty. |
| WebFetch | 4 próby | 1× [PEŁNY] | github.com zadziałał. Zablokowane: s21.q4cdn.com (transkrypcje Meta IR), arxiv.org (artykuł o Lattice), cdn.arstechnica.net (transkrypcja Q1 2025). |
| Wiedza własna modelu | — | [WIEDZA] | Używana tylko tam, gdzie tak to oznaczyłem. Nie traktuję jej jako dowodu. |

**Czego nie przeczytałem w całości (ważne ograniczenie):** blogów inżynierskich Meta (Andromeda 12/2024, GEM 11/2025, GEM Training 08/2026), bloga o Lattice, transkrypcji earnings calls ani artykułu Meta „Demystifying Creative Diversification”. Znam je tylko ze streszczeń wyszukiwarki. Liczby z tych źródeł to twierdzenia Meta (poziom A co do *faktu, że Meta to powiedziała*), ale ich brzmienie i kontekst trzeba zweryfikować, zanim trafią do materiałów dla klientów. Oznaczam je „A (pośrednio)”.

**Hierarchia dowodów:** A = Meta lub inne źródło pierwotne · B = badania recenzowane lub duże zbiory danych · C = mocna obserwacja praktyków z przykładami · D = hipoteza lub opinia.

**Saturacja:** Help Center osiągnął saturację w obszarach aukcji, learning phase, wolumenu reklam, zmęczenia kreacji i Advantage+. Kolejne zapytania zwracały te same artykuły. W wątku Andromedy (bloga i earnings) saturacji nie osiągnąłem przez limit wyszukiwań. Luki opisuję w sekcji 3.

---

## 2. Kluczowe ustalenia

### 2.1 Aukcja i jakość reklamy

**A1. Aukcję wygrywa reklama o najwyższej „total value” (stawka + przewidywane współczynniki akcji + jakość reklamy), z zastrzeżeniem ceny minimalnej. Trafniejsza reklama może wygrać z wyższą stawką.**
- Poziom: **A**
- Źródła: [PEŁNY] About ad auctions — https://www.facebook.com/business/help/430291176997542 ; [PEŁNY] Ad auction — https://www.facebook.com/business/help/163066663757985
- Cytat: „the winner of the auction is the ad with the highest total value, subject to a price floor… The total value is a combination of 3 major factors: bid… estimated action rates… ad quality… together, estimated action rates and ad quality measure ad relevance… an ad that's more relevant to a person could win an auction against ads with higher bids.” Meta dodaje, że może stosować „auction adjustments” (m.in. dla jakości, testów produktów, prawa), ale „will not cause us to charge you more than your bid”.
- Uwaga: popularny wzór „bid × estimated action rates + ad quality” pochodzi ze starszych wersji dokumentacji [WIEDZA]. Obecny tekst mówi tylko o „combination”, bez wzoru.
- Implikacja: kreacja wpływa na aukcję dwoma **oficjalnie potwierdzonymi** kanałami. Pierwszy to przewidywane prawdopodobieństwo akcji u danej osoby. Drugi to jakość reklamy. System kreacji powinien optymalizować oba jednocześnie, a nie tylko CTR.

**A2. Jakość reklamy mierzą konkretne sygnały: ukrycia, zgłoszenia, „ukryj z powodu powtarzania”, współczynnik odrzuceń i czas na stronie docelowej. Obniżają ją też atrybuty niskiej jakości.**
- Poziom: **A**
- Źródła: [PEŁNY] Best practices to improve ad quality and performance — https://www.facebook.com/business/help/1767120243598011 ; [PEŁNY] About ad quality — https://www.facebook.com/business/help/423781975167984 ; [PEŁNY] About quality ranking — https://www.facebook.com/business/help/303639570334185
- Sygnały: „hide ad; hide all ads from this advertiser; hide ad due to repetition; report ad; landing page bounce rate; landing page dwell time”.
- Atrybuty niskiej jakości treści: **withholding information** („ads that withhold information in order to entice someone to click”), **sensationalized language** (przesadzone nagłówki i wymuszanie reakcji), **engagement bait**. Atrybuty strony: brak oryginalnej treści, pop-upy lub interstitiale, mylące doświadczenia.
- Cytat o „reputacji podmiotu”: „if advertisers repeatedly post policy violating or low-quality ads, our system may associate their page, domain, ad account or other associated entities as lower-quality, making ads created from these entities less competitive in auctions”.
- Implikacja: hooki typu „nie uwierzysz…” albo ukrywanie ceny czy warunków, żeby wymusić klik, są **oficjalnie** karane w aukcji. Przyciągają też osoby, które nie rozumieją oferty, więc są podwójnie sprzeczne z celem biznesowym. Słaba kreacja szkodzi też kolejnym reklamom tej samej strony lub domeny. Ma to znaczenie dla agencji prowadzącej stronę klienta latami.

**A3. Ad relevance diagnostics (quality, engagement rate, conversion rate ranking) służą do diagnozy i NIE są wejściem do aukcji.**
- Poziom: **A**
- Źródła: [PEŁNY] About ad relevance diagnostics — https://www.facebook.com/business/help/403110480493160 ; [PEŁNY] How to use… — https://www.facebook.com/business/help/436113280262012 ; [PEŁNY] Engagement rate ranking — https://www.facebook.com/business/help/2351270371824148 ; [PEŁNY] Conversion rate ranking — https://www.facebook.com/business/help/617529305373441
- Dane:
  - dostępne od 500 wyświetleń;
  - obejmują tylko ostatnie 35 dni;
  - „average” to 35.–55. percentyl, „below average” to dolne 35% / 20% / 10%;
  - nie działają dla dynamic creative ani dla optymalizacji pod value lub custom conversions;
  - „ad relevance diagnostics aren't inputs into the ad auction”;
  - „Sometimes high performing ads have below average ad relevance diagnostics rankings and that's ok”;
  - „it's more impactful to move a ranking from low to average than… from average to above average”;
  - „seek the ideal creative/targeting fit”.
- Tabela interpretacji (skrót):

| Quality | Engagement | Conversion | Diagnoza Meta |
|---|---|---|---|
| niski | ok | niski | „click-baity or controversial” |
| ok | ok | niski | „isn't producing conversions” — popraw CTA lub stronę docelową, albo dotrzyj do odbiorców o wyższej intencji |
| ok | niski | ok | „isn't spurring interest” |

- Conversion rate ranking: „high-price or high-consideration products… should expect lower conversion rate rankings”.
- Implikacja: moduł audytu powinien czytać kombinacje rankingów, a nie pojedyncze wartości. Kreacja kwalifikująca (np. z ceną „od X zł”) może mieć niższy conversion rate ranking, a mimo to dawać lepszych klientów. Meta wprost pisze, że niższy ranking u produktów wymagających namysłu jest normalny.

**A4. Meta może korygować wyniki aukcji na podstawie danych o reklamodawcy i koncie.**
- Poziom: **A**
- Źródło: [PEŁNY] https://www.facebook.com/business/help/430291176997542 (cytat w A1).
- Implikacja: nie ma „czystej” aukcji. Część zmienności wyników jest poza kontrolą kreacji.

### 2.2 Faza uczenia, istotne edycje, learning limited

**L1. Zestaw reklam wychodzi z fazy uczenia po około 50 wynikach w tygodniu od ostatniej istotnej edycji.**
- Poziom: **A**
- Źródła: [PEŁNY] About the learning phase — https://www.facebook.com/business/help/112167992830700 ; [PEŁNY] Best practices for Meta ads delivery — https://www.facebook.com/business/help/950694752295474
- Dane: „this usually occurs after about 50 results in the week after the ad set's last significant edit”. Dla Shops ads próg wynosi 17 zakupów na stronie i 5 przez Meta. Meta zaleca też realistyczny budżet i unikanie częstych zmian budżetu.
- Implikacja: przy CPL rzędu 50–150 zł zestaw musi wydawać ok. 2,5–7,5 tys. zł tygodniowo, żeby wyjść z learningu. Większość kont MŚP w Polsce działa więc stale w learning lub learning limited. Mnożenie zestawów i reklam pogarsza sytuację.

**L2. Dodanie nowej reklamy do zestawu i każda zmiana kreacji to „istotna edycja”, która wprowadza zestaw ponownie w fazę uczenia.**
- Poziom: **A**
- Źródło: [PEŁNY] Significant edits and learning phase — https://www.facebook.com/business/help/316478108955072
- Lista istotnych edycji:
  - każda zmiana targetowania;
  - „any change to ad creative”;
  - zmiana zdarzenia optymalizacji;
  - „adding a new ad to your ad set”;
  - pauza trwająca co najmniej 7 dni;
  - zmiana strategii stawek.
- Zależnie od skali: budżet, bid cap lub cel kosztowy, limit wydatków. Przykład Meta: zmiana budżetu ze $100 na $101 raczej nie resetuje fazy uczenia, ze $100 na $1000 może ją zresetować.
- Przy campaign budget (CBO): dodanie nowego zestawu nie resetuje pozostałych zestawów, a edycja jednego zestawu nie resetuje innych.
- Uwaga: popularna „zasada 20% zmiany budżetu” **nie występuje** w przeczytanych artykułach Meta. Meta mówi tylko o „magnitude of the change” (zasada 20% to C/D).
- Implikacja dla systemu: nowe kreacje wprowadzać **partiami**, a nie pojedynczo co 2 dni. Nie poprawiać tekstu działającej reklamy, tylko tworzyć nową. Rytm odświeżania kreacji musi być zsynchronizowany z budżetem (patrz R3).

**L3. „Learning limited” to nie kara, tylko sygnał, że konfiguracja nie da około 50 zdarzeń tygodniowo. Jedną z oficjalnych przyczyn jest zbyt wiele reklam naraz.**
- Poziom: **A**
- Źródło: [PEŁNY] About learning limited — https://www.facebook.com/business/help/269269737396981
- Cytat: „generally, an ad set becomes learning limited when… limited by small audience size, low budget, low bid or cost control, high auction overlap, an infrequent optimization event, or other issues such as running too many ads at the same time.”
- Zalecenia Meta: łączyć zestawy i kampanie, poszerzyć grupę odbiorców, podnieść budżet lub stawkę, zmienić zdarzenie na częstsze.

**L4. Ocena wyników: minimum pełny tydzień. Budżet dzienny może być przekroczony o 75% w danym dniu, ale nie więcej niż 7× budżet dzienny w tygodniu.**
- Poziom: **A**
- Źródło: [PEŁNY] Understand fluctuations in ad performance — https://www.facebook.com/business/help/1364841787225722
- Cytat: „analyze performance over at least a full week”. Także: „the delivery system seeks the highest volume opportunities first. When those lower cost opportunities run out, the system may move on to more expensive options”, czyli koszty naturalnie rosną w trakcie kampanii.
- Implikacja: moduł iteracji nie powinien wydawać werdyktów o kreacji na podstawie 1–3 dni danych.

### 2.3 Dlaczego jedna reklama w zestawie dostaje większość budżetu

**D1. System celowo nie rozdziela budżetu równo między reklamy. Pokazuje reklamę, która według przewidywań da najniższy koszt zdarzenia u danej osoby, i opiera się na predykcjach przyszłości, a nie na przeszłym CPA.**
- Poziom: **A**
- Źródła: [PEŁNY] About ad delivery — https://www.facebook.com/business/help/1000688343301256 ; [PEŁNY] Troubleshoot: not receiving enough results — https://www.facebook.com/business/help/284656872650053
- Cytaty: „we'll show the ad that's most likely to achieve the lowest cost per optimization event for the given person. This means that each of your ads won't necessarily be delivered the same number of times… the ad delivery system uses predictions of future performance… not each ad set's past performance.” oraz „if your ad is not receiving enough results but other ads using the same budget are, that's okay… If you want your ads to deliver equally, try creating an A/B test.”
- Implikacja: reklama bez wydatków nie została „przetestowana”, tylko **odrzucona predykcyjnie**, zanim zebrała dane. Nie można z tego wnioskować, że koncept jest zły. Jeśli koncept jest strategicznie ważny (np. kwalifikujący), testujemy go w A/B teście albo w osobnym zestawie.

**D2. „Breakdown effect”: przesuwanie budżetu do elementu z wyższym średnim CPA bywa trafne, bo system prognozuje krańcowe koszty.**
- Poziom: **A**
- Źródło: [PEŁNY] About the breakdown effect — https://www.facebook.com/business/help/770303663944673
- Dane z przykładu Meta: FB Stories miało dzień 1 CPA $0,35, a IG Stories $0,72. Na koniec FB Stories kosztowało $1,10 przy wydatku $50, IG Stories $1,46 przy wydatku $450. Mimo to decyzja maksymalizowała łączną liczbę wyników.
- Zalecenie Meta: „when running multiple ads in 1 ad set, evaluate your results at the ad set level”.
- Implikacja: w audycie nie wyłączamy automatycznie „drogiej” reklamy, która dostaje najwięcej budżetu, dopóki zestaw jako całość realizuje cel. Wyjątek: cel jakościowy (leady kwalifikowane), którego Meta nie widzi. Wtedy decyduje jakość leadów z CRM, a nie CPL z Ads Managera.

**D3. Auction overlap: gdy kilka reklam tego samego reklamodawcy kwalifikuje się do jednej aukcji, wchodzi tylko ta o najwyższej total value. Nakładanie się odbiorców lub zasobów ogranicza dostarczanie.**
- Poziom: **A**
- Źródła: [PEŁNY] Understand auction overlap — https://www.facebook.com/business/help/537699989762051 ; [PEŁNY] Campaign auction overlap — https://www.facebook.com/business/help/957407462768373
- Cytat: „when 2 or more ads from the same advertiser enter the same ad auction, we choose the ad with the highest total value to compete… auction overlap can lead to limited delivery when ads from the same advertiser share the same audience or assets.” Działa to także między kontami reklamowymi, które system uznaje za tego samego reklamodawcę.
- Implikacja: to **oficjalny**, znany mechanizm, który tłumaczy sporą część tego, co praktycy przypisują „Entity ID”. Wiele podobnych reklam tego samego reklamodawcy do tych samych ludzi nie daje „więcej losów na loterii”, bo do aukcji i tak wchodzi jedna. Nie trzeba do tego hipotezy o grupowaniu w retrieval.

**D4. Opportunity score: rekomendacje są „experimentally proven”, ale wysoki wynik nie oznacza wydajności.**
- Poziom: **A**
- Źródło: [PEŁNY] About opportunity score — https://www.facebook.com/business/help/804913634782260
- Dane: przykład Meta — naprawa fragmentacji odbiorców to +35 pkt, Advantage+ placements to +5 pkt. „you should not turn off campaigns with a low opportunity score”.

### 2.4 Zmęczenie i podobieństwo kreacji — co Ads Manager faktycznie pokazuje

**F1. Ads Manager ma oficjalne statusy „Creative limited” i „Creative fatigue”. Ich progi opierają się na koszcie wyniku względem wcześniejszych reklam reklamodawcy i na ekspozycjach tego samego obrazu lub wideo, także z innych kampanii strony.**
- Poziom: **A**
- Źródło: [PEŁNY] About creative fatigue recommendations — https://www.facebook.com/business/help/1346816142327858
- Progi:
  - „creative limited”: CPR wyższy niż w reklamach z przeszłości, ale poniżej 2×;
  - „creative fatigue”: CPR ≥ 2× wyższy.
- Cytat: „we consider all recent exposures of the ad's image or video, including those from other campaigns from your page”.
- Ostrzeżenie przed publikacją pojawia się, jeśli system przewiduje zmęczenie w pierwszych 7 dniach.
- Zalecenia Meta:
  - „create a new ad with a new image or video that is **materially different** from the original creative”;
  - „keeping your original ad active instead of pausing or turning it off may maximize results”;
  - poszerzenie grupy odbiorców;
  - Advantage+ creative (według tego artykułu tylko dla celów traffic i sales z miejscem docelowym „website”).
- Zastrzeżenie w artykule: „this feature is only available for ad sets with one creative” (z wyjątkami). Niejasne, czy dotyczy samych rekomendacji, czy także statusu (patrz sekcja 3).
- Implikacja: zmęczenie liczy się na poziomie **mediów** (obraz lub wideo), a nie reklamy. Ten sam obraz w pięciu kampaniach męczy się szybciej. Odświeżenie ma dotyczyć warstwy wizualnej, nie tylko tekstu.

**F2. Meta oficjalnie pokazuje „creative similarity” w Account Insights. Opisuje ją jako obrazy lub wideo „too visually identical”, które mogą prowadzić do zmęczenia i wyższego kosztu wyniku. Nie wspomina o grupowaniu ani o wykluczaniu z aukcji.**
- Poziom: **A** (co do istnienia wskaźnika i jego opisu)
- Źródło: [PEŁNY] About account insights in Meta Ads Reporting — https://www.facebook.com/business/help/1784925068944145
- Cytat: „creative similarity occurs when the images or videos in your ads appear too visually identical. this can lead to creative fatigue and increase your cost per result. to combat creative similarity, we recommend creating new ads with unique creative. note: creative similarity insights are based on **static ads** active in the last 28 days and do not include advantage+ catalog ads.” W tym samym miejscu są „top-performing creative themes” i „industry themes”.
- Implikacja: Meta **potwierdza**, że wizualne podobieństwo kreacji szkodzi wynikom. Uzasadnia to przez zmęczenie i koszt, nie przez mechanizm retrieval. Wskaźnik obejmuje tylko reklamy statyczne. Meta nie publikuje progu (np. „60%”) ani metody pomiaru.

**F3. Rekomendacje Meta dotyczące zmęczenia zawierają dwie reguły, które na pierwszy rzut oka wyglądają na sprzeczne.**
- Poziom: **A**
- Źródła: [PEŁNY] https://www.facebook.com/business/help/950694752295474 („turn off ads that aren't delivering. advertisers are often more efficient when they turn off ads that aren't producing outcomes”) oraz [PEŁNY] https://www.facebook.com/business/help/1346816142327858 („keeping your original ad active… may maximize results”).
- Interpretacja: reklamy, które nie dostarczają wyników, wyłączać. Zmęczoną reklamę, która nadal dowozi, zostawić obok nowej.

### 2.5 Andromeda, GEM, Lattice — co Meta POTWIERDZIŁA

**M1. Andromeda to silnik *retrieval*, czyli pierwszy etap dostarczania. Z dziesiątek milionów kandydatów wybiera „kilka tysięcy” reklam, które przechodzą do rankingu i aukcji. Nie jest to algorytm rankingowy ani „nowy algorytm Meta” jako całość.**
- Poziom: **A (pośrednio)**
- Źródła: [WYSZUKIWARKA] Meta Andromeda: Supercharging Advantage+ automation with the next-gen personalized ads retrieval engine (Engineering at Meta, 2024-12-02) — https://engineering.fb.com/2024/12/02/production-engineering/meta-andromeda-advantage-automation-next-gen-personalized-ads-retrieval-engine/ ; [WYSZUKIWARKA] Earnings Q4 2024 (29.01.2025) — https://www.fool.com/earnings/call-transcripts/2025/01/29/meta-platforms-meta-q4-2024-earnings-call-transcri/
- Dane (według streszczeń bloga i transkrypcji):
  - +6% recall systemu retrieval;
  - +8% ads quality „on selected segments”, a na earnings: „8% increase in the quality of ads… on objectives tested”;
  - 10 000× większa złożoność modeli retrieval;
  - ponad 3× więcej zapytań na sekundę (QPS) przy inferencji;
  - ponad 100× szybsza ekstrakcja cech;
  - hierarchiczny indeks reklam trenowany wspólnie z modelem;
  - sprzęt: NVIDIA Grace Hopper i MTIA.
- Cytat z earnings (Susan Li): „10,000x increase in the complexity of models used for ads retrieval, which is the part of the ranking process where tens of millions of ads are narrowed down to the few thousand considered for showing someone”.
- Implikacja: Andromeda decyduje, czy reklama w ogóle ma szansę trafić do rankingu dla danej osoby. **Nie** jest to jawny „filtr podobieństwa”. Meta nie opisała publicznie, jak retrieval traktuje wiele podobnych reklam jednego reklamodawcy.

**M2. Meta uzasadniła budowę Andromedy rosnącą liczbą kreacji w systemie, którą napędzają Advantage+ i generatywne AI.**
- Poziom: **A (pośrednio)**
- Źródło: [WYSZUKIWARKA] blog Andromeda (jw.)
- Treść (streszczenie): „the continued positive momentum of Meta's Advantage+ suite increases the number of eligible ads through automation, and with generative AI tools for creating and optimizing ad creative, the number of ads creatives in Meta's recommendation systems is expected to grow significantly.”
- W streszczeniu wyszukiwarki blog wymienia też **22% wzrost ROAS** przy Advantage+. Kontekst tej liczby jest niejasny i wymaga weryfikacji.
- Implikacja: Andromeda została zbudowana, żeby **obsłużyć** więcej kreacji, w tym warianty generowane automatycznie. Z samego bloga nie wynika jednak, że „więcej reklam = lepsze wyniki reklamodawcy”.

**M3. Meta oficjalnie wiąże dywersyfikację kreacji z odnajdywaniem odbiorców.**
- Poziom: **A (pośrednio)** co do cytatu. Szczegóły artykułu są nieznane.
- Źródło: [WYSZUKIWARKA] Demystifying Creative Diversification (Meta for Business) — https://www.facebook.com/business/news/demystifying-creative-diversification ; cytowane u Jona Loomera — https://www.jonloomer.com/meta-andromeda/
- Cytat przypisywany Meta: „With the rise of AI-enabled advertising tools, the focus has shifted from niche targeting to creative diversification as the best lever to find the most relevant audiences.” Według streszczeń artykuł łączy Andromedę z potrzebą różnorodnych kreacji („Andromeda works behind the scenes to power more complex models… to pick the right creative”). Wymiary dywersyfikacji według streszczeń: koncepty i kąty (problem/rozwiązanie, punkty bólu, opinie klientów, demo produktu) oraz formaty (krótkie wideo, długie wideo, statyka, karuzela).
- Wzmocnienie w Help Center [PEŁNY]:
  - Advantage+ sales campaigns: „provide a wide variety of diverse creative assets to help increase relevance and maximize performance” — https://www.facebook.com/business/help/1362234537597370
  - managing ad volume: „decrease ads per ad set, but maintain diverse creative assets per ad set” — https://www.facebook.com/business/help/2720085414702598
- Implikacja: dywersyfikacja jest **oficjalną** rekomendacją Meta (A). Dotyczy **różnorodności treści**, a nie liczby reklam.

**M4. Q3 2025: Meta połączyła modele retrieval i wczesnego rankingu w jeden model Andromedy (+14% ads quality na powierzchniach Facebooka). W Q2 2025 rozszerzyła Andromedę na Facebook Reels.**
- Poziom: **A (pośrednio)**
- Źródła: [WYSZUKIWARKA] Earnings Q3 2025 — https://www.fool.com/earnings/call-transcripts/2025/10/29/meta-platforms-meta-q3-2025-earnings-call-transcript/ ; [WYSZUKIWARKA] Earnings Q2 2025 — https://equibles.com/stocks/meta/calls/2025-q2
- Implikacja: „Andromeda” to rozwijany komponent, a nie jednorazowa „aktualizacja” z konkretną datą.

**M5. GEM (Generative Ads Recommendation Model) to model fundamentowy etapu *rankingu*, ogłoszony w blogu z 10.11.2025. Wyniki: +5% konwersji na Instagramie i +3% na Facebook Feed (Q2 2025).**
- Poziom: **A (pośrednio)**
- Źródła: [WYSZUKIWARKA] Meta's Generative Ads Model (GEM)… — https://engineering.fb.com/2025/11/10/ml-applications/metas-generative-ads-model-gem-the-central-brain-accelerating-ads-recommendation-ai-innovation/ ; [WYSZUKIWARKA] https://x.com/Meta_Engineers/status/1987929289401176230 ; [WYSZUKIWARKA] InfoQ — https://www.infoq.com/news/2025/12/meta-gem-ads-model/ ; [WYSZUKIWARKA] GEM Training (2026-08-03) — https://engineering.fb.com/2026/08/03/ml-applications/training-gem-at-llm-scale-meta-ads-recommendation-foundation-model/
- Niejasność: na earnings Q2 2025 wzrosty ~5% (IG) i ~3% (FB Feed i Reels) przypisano łącznie Andromedzie, GEM i Lattice. W blogu GEM te same liczby przypisano samemu GEM.
- Q4 2025: GEM wraz z sequence learning dał +3,5% kliknięć na FB i ponad 1% konwersji na IG. Liczba GPU do trenowania GEM została podwojona.
- Implikacja: o tym, która z pobranych reklam wygra dla danej osoby, decyduje ranking (GEM), nie Andromeda. Mity typu „Andromeda wybiera zwycięzcę” są nieprecyzyjne.

**M6. Lattice to architektura, która konsoliduje wiele mniejszych modeli (per cel i per powierzchnia) w większe modele uczące się przekrojowo.**
- Poziom: **A (pośrednio)** — źródło pierwotne Meta. Preprint arXiv, nie peer review.
- Źródła: [WYSZUKIWARKA] New AI advancements drive Meta's ads system performance and efficiency — https://ai.meta.com/blog/ai-ads-performance-efficiency-meta-lattice/ ; [WYSZUKIWARKA] Meta Lattice (arXiv 2512.09200) — https://arxiv.org/html/2512.09200 ; [WYSZUKIWARKA] https://greghal.no/en/blog/meta-ads-algorithm-2026-complete-guide/
- Dane (streszczenia): transfer wiedzy między powierzchniami IG (Feed, Stories, Reels) i celami (kliknięcia, wyświetlenia wideo, konwersje); ok. 4% więcej konwersji na FB Feed i Reels (Q2 2025, wg streszczenia); Q1 2026: Lattice i GEM dały ponad 6% wyższy współczynnik konwersji dla optymalizacji pod landing page view.
- Implikacja: sygnały z jednego celu lub powierzchni mogą wpływać na inne. To dodatkowy argument za spójnym kontem zamiast rozdrobnionego.

**M7. Zaplecze naukowe: Meta opublikowała recenzowaną pracę o „generative recommenders” (HSTU), czyli skalowaniu modeli sekwencyjnych zachowań użytkownika w systemie wdrożonym na skalę miliardów użytkowników.**
- Poziom: **B** co do samej pracy (ICML 2024). Związek HSTU z GEM lub systemem reklam: **D**, bo w tej sesji go nie potwierdziłem.
- Źródło: [PEŁNY] facebookresearch/generative-recommenders — https://github.com/facebookresearch/generative-recommenders
- Dane: „Actions Speak Louder than Words: Trillion-Parameter Sequential Transducers for Generative Recommendations” (ICML 2024); „scaling law for the first-time in deployed, billion-user scale recommendation systems”; HSTU-large: +15,5% HR@10 i +18,1% NDCG@10 na MovieLens-1M. Repozytorium nie wspomina o reklamach.
- Implikacja: kierunek jest jasny. System przewiduje kolejne zaangażowanie na podstawie **sekwencji zachowań** osoby, więc dopasowanie treści kreacji do kontekstu i historii odbiorcy ma coraz większą wagę. To uzasadnia strategię opartą na personach i motywacjach (C), ale nie daje konkretnych reguł.

**M8. W Meta Business Help Center nie ma artykułu o Andromedzie.**
- Poziom: **A**, jako wynik negatywny z zastrzeżeniem.
- Metoda: zapytanie „Andromeda” w narzędziu Help Center zwróciło niepowiązane artykuły (Reservation, post-purchase support, Facebook Analytics).
- Implikacja: w materiałach dla reklamodawców Meta mówi o „creative diversification”, „creative similarity”, „ad volume” i Advantage+, a nie o Andromedzie. Wszystkie „zasady Andromedy” krążące w branży to interpretacje praktyków.

**M9. Chronologia wypowiedzi z earnings calls (tylko to, co przeszło przez wyszukiwarkę)**

| Kwartał (data rozmowy) | Twierdzenie Meta (Susan Li / Zuckerberg) | Źródło [tryb] |
|---|---|---|
| Q4 2024 (29.01.2025) | Andromeda (z NVIDIA): 10 000× złożoność retrieval, +8% jakości reklam w testowanych celach; Advantage+ Shopping > 20 mld USD run rate, +70% r/r | fool.com, s21.q4cdn.com [WYSZUKIWARKA] |
| Q1 2025 (IV 2025) | +30% reklamodawców korzystających z narzędzi AI do kreacji kw/kw; GEM wprowadzony do rankingu | equibles / seekingalpha [WYSZUKIWARKA] |
| Q2 2025 (30.07.2025) | Andromeda + GEM + Lattice → ok. +5% konwersji IG, +3% FB Feed/Reels; Andromeda na FB Reels | equibles, sergeycyw [WYSZUKIWARKA] |
| Q3 2025 (29.10.2025) | Połączenie retrieval i early-stage ranking w Andromedzie → +14% ads quality na FB; run rate narzędzi automatycznych > 60 mld USD | fool.com [WYSZUKIWARKA] |
| Q4 2025 (28.01.2026) | GEM + sequence learning → +3,5% kliknięć FB, > 1% konwersji IG; 2× GPU do trenowania GEM | fool.com, prepared remarks [WYSZUKIWARKA] |
| Q1 2026 (29.04.2026) | > 8 mln reklamodawców z ≥ 1 narzędziem GenAI (wg streszczenia „z 4 mln”, punkt odniesienia czasowego niepewny); generowanie wideo → > 3% wyższy CR w testach; Lattice + GEM → +6% CR (LPV); adaptive ranking → +1,6% CR | ppc.land, fool.com [WYSZUKIWARKA] |
| Q2 2026 (VII 2026) | „Meta Generative Recommender” (LLM rozumujący o treści reklamy i preferencjach); > 9 mln małych firm z narzędziem GenAI; liczby „+8,3% kliknięć / +15,7% konwersji na FB” — **NIEZWERYFIKOWANE** | yahoo finance, adsuploader [WYSZUKIWARKA] |

- Poziom: **A (pośrednio)**. Wszystkie wartości to metryki wewnętrzne Meta (ads quality, recall, conversions), a nie CPL konkretnego reklamodawcy. Firma przedstawia je inwestorom, co tworzy bodziec do pokazywania wyników w korzystnym świetle.

### 2.6 Twierdzenia praktyków o Andromedzie — weryfikacja

**P1. „Entity ID: podobne kreacje są grupowane pod jednym identyfikatorem i traktowane jak jedna reklama (jeden los w aukcji)”.**
- Poziom: **D**. Brak potwierdzenia Meta. Mechanizm jest wiarygodny, ale nieudokumentowany.
- Źródła: [WYSZUKIWARKA] https://adsuploader.com/blog/meta-andromeda ; https://trywilow.com/blog/creative-entity-ids-meta-andromeda ; https://www.artifexdigital.co/blog/understanding-metas-entity-id-why-your-28-ads-might-actually-be-3 ; https://www.dataally.ai/blog/metas-creative-entity-id-why-creative-diversification-is-essential ; https://www.webtopia.co/blog/entity-ids-andromeda-and-the-new-era-of-creative-led-targeting-on-meta ; https://ppcblogpro.com/how-andromeda-detects-and-punishes-ad-duplication/
- Co ustaliłem:
  - (a) Blogi praktyków cytują przedstawiciela Meta: „For the Entity ID… this is actually an internal-only metric, so we don't have any external-facing resources at this time”. To relacja z drugiej ręki, bez linku do Meta.
  - (b) Help Center nie zna pojęcia „Entity ID”.
  - (c) Oficjalny opis creative similarity (F2) mówi o zmęczeniu i koszcie, **nie** o grupowaniu w retrieval.
  - (d) Ten sam objaw, czyli „z 28 reklam wydają tylko 3”, wyjaśniają udokumentowane mechanizmy: D1 (predykcyjny wybór reklamy), D3 (tylko jedna reklama reklamodawcy w aukcji) i managing ad volume.
- Wniosek: system nie powinien przedstawiać Entity ID jako faktu. Może go podać jako hipotezę praktyków (D), a praktyczną rekomendację (różnicować koncepty) oprzeć na źródłach poziomu A.

**P2. „Creative Similarity Score powyżej 60% uruchamia tłumienie w retrieval; trzymaj poniżej 40%” / „70% kreacji musi być wizualnie inne”.**
- Poziom: **D** (liczby bez źródła)
- Źródła: [WYSZUKIWARKA] streszczenie wyników (m.in. https://confect.io/tactics/meta-andromeda-2026 , https://theoptimizer.io/blog/how-to-test-ad-creatives-on-meta-after-the-andromeda-update-2026-playbook , https://www.303.london/blog/complete-guide-to-creative-diversity-for-meta-andromeda — przypisanie konkretnej liczby do konkretnej strony niepewne); „70%” — https://www.excitemedia.com.au/blog/meta-creative-diversification/
- Kontrargument: Meta nie publikuje progu ani skali wskaźnika creative similarity. Wskaźnik obejmuje tylko reklamy statyczne z ostatnich 28 dni (F2).
- Wniosek: progi procentowe odrzucić jako pseudoprecyzję. Zamiast nich stosować kryterium jakościowe „materially different” (A).

**P3. „Andromeda karze podobne kreacje”.**
- Poziom: słaba wersja („podobne kreacje pogarszają wyniki przez zmęczenie i koszt”) — **A** (F2). Mocna wersja („kara lub filtr w retrieval”) — **D**.

**P4. „Potrzeba 10–50 kreacji / im więcej reklam, tym lepiej”.**
- Poziom: **D**. Oficjalne źródła mówią raczej coś przeciwnego.
- Źródła Meta [PEŁNY]:
  - „avoid high ad volumes. when you create many ads and ad sets, the delivery system learns less about each ad” — https://www.facebook.com/business/help/112167992830700
  - „too many ads can result in worse performance… decrease ads per ad set, but maintain diverse creative assets per ad set. one ad can contain multiple (up to 10) creative assets” — https://www.facebook.com/business/help/2720085414702598
  - „running too many ads at the same time” jako przyczyna learning limited — https://www.facebook.com/business/help/269269737396981
- Limity twarde [PEŁNY]: 50 reklam na zestaw — https://www.facebook.com/business/help/652738434773716 ; 250 aktywnych reklam na stronę przy wydatkach < 100 tys. USD w najlepszym miesiącu — https://www.facebook.com/business/help/766697140509126
- Praktycy [WYSZUKIWARKA]: według Jona Loomera wcześniej zalecano do 6 reklam w zestawie („prior recommended ad limit of six”), a dziś wielu reklamodawców używa 10–20 i więcej, ale „more isn't necessarily better… they also need to represent a more diverse group of creative” — https://www.jonloomer.com/meta-andromeda/ , https://www.tiktok.com/@jonloomer/video/7545893351409683742. Excite Media: „3–5 genuinely different creatives is usually enough” dla małych firm (C/D).
- Wniosek: liczbę konceptów wyznacza **budżet i zdolność zebrania sygnału**, a nie moda. Różnorodność zapewniać przede wszystkim wieloma zasobami w jednej reklamie i niewieloma, ale naprawdę różnymi konceptami.

**P5. „Kreacja to nowe targetowanie; algorytm czyta kreację i sam decyduje, kto ją zobaczy”.**
- Poziom: kierunkowo **A** (M3; Advantage+ audience oparty na sugestiach, X4). Opis mechanistyczny („algorytm czyta obraz, tekst i dźwięk i przypisuje personę”) — **C/D**.
- Źródła: [PEŁNY] https://www.facebook.com/business/help/273363992030035 ; [WYSZUKIWARKA] wzmianka o Meta Generative Recommender (Q2 2026).
- Wniosek: projektować kreacje tak, żeby **same kwalifikowały odbiorcę** (kto, jaki problem, jaka cena lub warunek). To zgodne z celem „leady rozumiejące ofertę”.

**P6. „Andromeda to aktualizacja z 2025 r., która zmieniła wyniki kont (np. »pełne wdrożenie w październiku 2025«)”.**
- Poziom: **D**
- Źródła: [WYSZUKIWARKA] Jon Loomer: „Andromeda is not an algorithm, targeting shift, or the reason your results changed” — https://www.jonloomer.com/qvt/meta-andromeda-misinformation/ , https://www.jonloomer.com/andromeda-2/ , https://www.jonloomer.com/meta-andromeda-ad-retrieval/. Meta opisała Andromedę w grudniu 2024 i rozwija ją stopniowo (M4). Nie znalazłem oficjalnej „daty wdrożenia” dla reklamodawców.
- Wniosek: nie tłumaczyć klientowi spadków wyników „Andromedą” bez danych.

**P7. „Andromeda wybiera ok. 1000 kandydatów w < 300 ms”.**
- Poziom: **D** co do liczb. Meta mówi o „kilku tysiącach” (M1).

### 2.7 Advantage+ i narzędzia kreatywne (stan Help Center na 09/2026)

**X1. Advantage+ campaign experience jest domyślna dla celów sales, app promotion i leads. „Advantage+ off” pojawia się po zawężeniu budżetu, odbiorców lub placementów.**
- Poziom: **A**
- Źródła: [PEŁNY] https://www.facebook.com/business/help/1292656978738967 ; [PEŁNY] What turns Advantage+ on/off — https://www.facebook.com/business/help/906206294602874 ; [PEŁNY] audience — https://www.facebook.com/business/help/25941857932125812
- Dane:
  - Advantage+ off: kilka zestawów bez campaign budget; odznaczenie „use as suggestion”; wykluczenie placementów lub urządzeń.
  - Advantage+ nadal on: podniesienie minimalnego wieku do 25, wykluczenie custom audience, kontrole na poziomie konta.

**X2. Advantage+ leads campaigns: 14% niższy CPL (ufność > 95%) i 10% niższy koszt leada kwalifikowanego (ufność tylko 83%). Dane z 19 testów, XI 2024 – I 2025.**
- Poziom: **A** (źródło Meta). Dowód dla jakości leadów jest słaby (83%, 19 testów, różne branże).
- Źródło: [PEŁNY] About Advantage+ leads campaigns — https://www.facebook.com/business/help/992035952809423
- Cytat o kreacji: „removes the need to run many campaigns with varying targeting and ad creatives”. Obsługuje instant form, formularz na stronie, połączenia i click-to-message.
- Implikacja: domyślnie używać Advantage+ leads, ale efekt na **jakość** sprawdzić A/B testem na własnym CRM.

**X3. Advantage+ sales campaigns: 9% lepszy koszt konwersji (1-tygodniowy test od 3.12.2024, ufność 90%). Rekomendacja: „a wide variety of diverse creative assets”.**
- Poziom: **A** — https://www.facebook.com/business/help/1362234537597370 [PEŁNY]

**X4. Advantage+ audience: meta-analiza 469 testów A/B (01.2023–08.2024) wykazała niższy koszt wyniku — 14,8% dla awareness, 9,7% dla traffic, engagement i leads, 7,2% dla sales i app.**
- Poziom: **A** (duży zbiór danych, ale raportowany przez Meta i niezweryfikowany niezależnie)
- Źródła: [PEŁNY] https://www.facebook.com/business/help/273363992030035 ; [PEŁNY] https://www.facebook.com/business/help/793748385630490 ; [PEŁNY] Advantage+ custom audience — https://www.facebook.com/business/help/414975413946182
- Meta zaleca testy A/B z Advantage+ audience „for almost all campaign types, except retargeting”. Sygnały: wcześniejsze konwersje, dane pixela, interakcje z poprzednimi reklamami.

**X5. Advantage+ placements: 11,7% niższy CPA (eksperymenty z kontrolą budżetu na 147 tys. kampanii, 30.08–7.09.2025).**
- Poziom: **A** — https://www.facebook.com/business/help/196554084569964 [PEŁNY]. Alternatywa według Meta: co najmniej 6 ręcznie wybranych placementów — https://www.facebook.com/business/help/950694752295474
- Implikacja dla kreacji: przygotowywać zasoby 9:16, 4:5 i 1:1 (asset customization). Inaczej system przytnie lub dopasuje obraz sam.

**X6. Flexible ad format: do 10 obrazów lub wideo w jednej reklamie; system sam wybiera format (single, video, carousel) dla osoby i placementu.**
- Poziom: **A** — https://www.facebook.com/business/help/835561738423867 [PEŁNY]
- Dane: dostępny dla celów traffic, engagement, sales i app promotion. Artykuł **nie wymienia leads**. Niedostępność może dotyczyć części kont („this feature may not be available to you”). Uwaga: flexible media to inna funkcja (jeden zasób na więcej placementów) — https://www.facebook.com/business/help/1126725172362626

**X7. Dynamic creative nadal działa w celu leads, a jego wyniki są zagregowane. Meta: nie zastępuje split testów.**
- Poziom: **A**
- Źródła: [PEŁNY] https://www.facebook.com/business/help/170372403538781 ; [PEŁNY] https://www.facebook.com/business/help/344106239654869
- Dane:
  - od VI 2024 niedostępne dla nowych zestawów w sales i app promotion;
  - max 10 mediów, do 5 nagłówków i do 5 CTA;
  - „because results are shown as the aggregate performance across all variations, using dynamic creative as a substitute for split testing is not recommended”;
  - od III 2026 reklamy single media na FB Feed nie pokazują URL w stopce.

**X8. Warianty tekstu (multiple text options / optimize text per person) optymalizują się per wyświetlenie, ale raportowanie ich nie rozdziela. Teksty mogą być miksowane i przestawiane między polami.**
- Poziom: **A**
- Źródła: [PEŁNY] Text generation — https://www.facebook.com/business/help/180641596861873 ; [PEŁNY] https://www.facebook.com/business/help/497610041230617 ; [PEŁNY] Troubleshoot ad rendering — https://www.facebook.com/business/help/418015731022150 ; [PEŁNY] managing ad volume — https://www.facebook.com/business/help/2720085414702598
- Cytaty:
  - „one ad with multiple text optimization is usually more effective than multiple ads without multiple text optimization”;
  - „since reporting is based on a single ad, you won't see performance details for specific text variations”;
  - „text that you provide may appear in any location of your ad and may appear with any other text you've provided”;
  - „make sure that the combinations of your primary text, headline and description will work together and don't contradict each other”.
- Generator tekstów Meta (do 5 wariantów) przyjmuje tylko tekst w **EN, PT i ES**. Dla polskiego tekstu wejściowego jest prawdopodobnie niedostępny.
- Implikacja dla systemu copy: każdy wariant tekstu musi być **samodzielny i zgodny z każdym innym** (tą samą ofertą, ceną i warunkami). Jeśli chcemy wiedzieć, który **kąt** działa, różne kąty idą do **osobnych reklam**, a nie jako opcje tekstu jednej reklamy.

**X9. Advantage+ creative (w tym funkcje GenAI) może zmieniać media i tekst. Część ulepszeń jest włączona domyślnie.**
- Poziom: **A**
- Źródła: [PEŁNY] About Advantage+ creative — https://www.facebook.com/business/help/297506218282224 ; [PEŁNY] Turn off enhancements — https://www.facebook.com/business/help/1082295769403815 ; [PEŁNY] Image generation — https://www.facebook.com/business/help/1684513971952814 ; [PEŁNY] Add animation — https://www.facebook.com/business/help/1766652437485798 ; [PEŁNY] API standard enhancements — https://developers.facebook.com/docs/marketing-api/advantage-catalog-ads/standard-enhancements
- Dane:
  - „the media and text you upload may be adjusted to help improve ad performance while maintaining the core message”;
  - dostępne funkcje: add overlays, enhance media text (GenAI przepisuje nakładkę tekstową), music (w tym AI), video effects, image generation, add animation (2 s w pętli do 8 s, tylko IG Reels), enhance CTA, flexible media;
  - branże regulowane (finanse, zdrowie, HEC, polityka) i część krajów mogą nie mieć dostępu do GenAI;
  - Meta może testować „new optimizations” na kampaniach, z opcją opt-out w ustawieniach konta (https://www.facebook.com/business/help/418015731022150).
- Implikacja: moduł „checklista publikacji” musi sprawdzać, które ulepszenia są włączone. GenAI może zmienić przekaz kwalifikujący (np. usunąć cenę z nakładki) albo wygenerować obietnicę niezgodną z ofertą.

**X10. Performance 5 to oficjalny framework Meta (ścieżka Blueprint): uproszczenie konta, automatyzacja (Advantage+), dywersyfikacja kreacji, jakość danych (CAPI) i walidacja wyników (Conversion Lift).**
- Poziom: **A (pośrednio)** co do istnienia frameworku. Liczby są znane tylko ze stron partnerów.
- Źródła: [WYSZUKIWARKA] Performance 5 (Blueprint) — https://www.facebookblueprint.com/student/path/253157-performance-5 ; https://smk.co/meta-reveals-new-performance-five-optimisation-best-practices/ ; https://tigerpistol.com/metas-performance-5-framework-the-impact-of-simplifying-your-account-structure/
- Liczby przypisywane Meta (niezweryfikowane):
  - mniej niż 20% wydatków w learning → do 68% niższy koszt zakupu;
  - dywersyfikacja kreacji → 32% bardziej efektywne wyniki direct response i 9% zasięgu inkrementalnego;
  - Pixel + CAPI → 13% lepszy CPR;
  - konsolidacja 69 reklam do 15 → 41% więcej zakupów przy 1,2× ROAS.
- Implikacja: nawet framework Meta łączy **dywersyfikację** z **konsolidacją** (mniej reklam). „Dużo reklam” i „różnorodne reklamy” to dwie różne rzeczy.

### 2.8 Lead generation — jak system dostarczania rozumie „jakość”

**G1. System optymalizuje pod zdarzenie, które mu wskażemy. Przy optymalizacji pod leady szuka osób, które najchętniej wyślą formularz. Leady kwalifikowane wymagają sygnału z CRM, a od IV 2026 dla nowych kampanii Conversions API.**
- Poziom: **A**
- Źródło: [PEŁNY] About performance goals for lead ads — https://www.facebook.com/business/help/782657799338685
- Dane:
  - „beginning april 2026, the qualified leads performance goal is no longer available for new campaign creation without conversions api integration. existing campaigns will be impacted beginning august 2026”;
  - CAPI for CRM z optymalizacją pod qualified leads dało 21% niższy koszt leada jakościowego (test A/B z kontrolą budżetu, 567 reklamodawców, 13–27.01.2025);
  - formularze na stronie: 9,5% niższy koszt (69 reklamodawców, VIII–IX 2025);
  - opcja optymalizacji pod leady z rozmów WhatsApp.
- Implikacja (kluczowa dla celu biznesowego): kreacja może **kwalifikować**, ale system i tak dostarcza reklamy osobom, które najchętniej wykonują zdarzenie optymalizacji. Bez sygnału jakości z CRM system nie „wie”, że chodzi o klientów. System kreacji powinien to wprost komunikować w audycie jako warunek konieczny, niezależny od kreacji.

**G2. Typ formularza „higher intent” dodaje ekran przeglądu danych i kontekst o kontakcie zwrotnym. Meta opisuje go jako sposób na mniej przypadkowych zgłoszeń.**
- Poziom: **A** co do opisu funkcji. Meta nie podaje wielkości efektu.
- Źródła: [PEŁNY] About instant form types — https://www.facebook.com/business/help/252352181957512 ; [PEŁNY] https://www.facebook.com/business/help/791294492679966
- Dane: „prevent receiving submissions from those people who are only marginally interested”. Higher intent działa tylko na FB i IG Feed na urządzeniach mobilnych. Rich creative pozwala dodać kontekst i obrazy do formularza.

**G3. Meta zaleca testy A/B i odradza „testowanie nieformalne” (włączanie i wyłączanie zestawów).**
- Poziom: **A**
- Źródła: [PEŁNY] About A/B testing — https://www.facebook.com/business/help/1738164643098669 ; [PEŁNY] Best practices — https://www.facebook.com/business/help/290009911394576 ; [PEŁNY] Results — https://www.facebook.com/business/help/1376548572415613
- Dane: test trwa od 1 do 30 dni, zalecane minimum to 7 dni. Jedna zmienna na test. Odbiorcy nie mogą być używani w innych kampaniach w tym czasie. Cytat: „we do not recommend testing informally, such as by turning ad sets or campaigns on and off manually”.

---

## 3. Co jest sporne, obalone lub niewiadome

### 3.1 Obalone lub niepoparte (praktycy podają jako fakt, Meta tego nie potwierdza)

| Twierdzenie | Status | Uzasadnienie |
|---|---|---|
| „Entity ID grupuje podobne reklamy w jeden los” | **Niepotwierdzone (D)** | Brak w dokumentacji Meta. Jedyny ślad to relacja z drugiej ręki o „internal-only metric”. Objaw tłumaczą udokumentowane D1 i D3. |
| „Similarity > 60% = tłumienie; < 40% bezpiecznie; 70% różnicy” | **Pseudoprecyzja (D)** | Meta nie publikuje skali ani progu. Wskaźnik obejmuje tylko reklamy statyczne. |
| „Potrzebujesz 10–50 kreacji / więcej reklam = lepiej” | **Sprzeczne z dokumentacją Meta (D)** | Meta pisze, że za dużo reklam pogarsza uczenie, i zaleca mniej reklam z większą liczbą zasobów w każdej. |
| „Andromeda = nowy algorytm, który zmienił wyniki w 2025” | **Mylące (D)** | Andromeda to etap retrieval rozwijany od 2024 r. Ranking to GEM i Lattice. |
| „Andromeda wybiera zwycięzcę aukcji” | **Błędne (A przeciw)** | Retrieval ≠ ranking ≠ aukcja (M1, M5). |
| „Zmiana budżetu > 20% resetuje learning” | **Uproszczenie (C/D)** | Meta: zależy od skali zmiany, bez konkretnego progu. |
| „Relevance diagnostics wpływają na aukcję” | **Obalone (A)** | „aren't inputs into the ad auction”. |

### 3.2 Czego o Andromedzie (i systemie) NIE wiadomo

1. **Jak retrieval traktuje wiele podobnych reklam jednego reklamodawcy.** Nie wiadomo, czy je deduplikuje, klastruje, czy ogranicza do jednego kandydata. Meta tego nie opisała. Wiadomo tylko o deduplikacji na etapie aukcji (D3).
2. **Jaką miarą Meta liczy „creative similarity”.** Nie wiadomo, czy to embedding wizualny, perceptual hash czy coś innego, jaki jest próg i czy tekst lub audio też się liczą. Help Center mówi tylko o obrazach i wideo i ogranicza wskaźnik do reklam statycznych.
3. **Czy różnice tekstu lub copy zwiększają „różnorodność” widzianą przez retrieval.** Brak danych. Oficjalne wskaźniki podobieństwa i zmęczenia dotyczą mediów wizualnych.
4. **Optymalna liczba reklam lub konceptów w zestawie.** Meta nie podaje liczby, tylko limity (50 na zestaw, 250 na stronę dla małych) i kierunek (mniej reklam, więcej zasobów w reklamie).
5. **Jak nowa reklama dostaje budżet eksploracyjny (cold start) w retrieval i rankingu.** Niewiadome. Wiadomo tylko, że reklama bez wydatków nie oznacza złej reklamy (D1).
6. **Jak historia strony, konta i domeny wpływa na retrieval.** Meta potwierdza tylko negatywny wpływ powtarzanych reklam niskiej jakości na podmiot (A2). Pozytywnej „reputacji kreatywnej” nie potwierdza.
7. **Czy Andromeda działa tak samo we wszystkich celach (w tym leads i instant forms), placementach i krajach (Polska).** Meta raportuje wzrosty na „selected segments” i „objectives tested”. Wdrażała Andromedę stopniowo (FB Reels w Q2 2025). Pokrycie per cel nie jest publiczne.
8. **Co oznaczają liczby Meta dla pojedynczego reklamodawcy.** +6% recall, +8% i +14% ads quality to wewnętrzne metryki systemu, a nie CPL. Nikt ich niezależnie nie zweryfikował.
9. **Jak warianty GenAI (Advantage+ creative, image generation) są traktowane względem osobnych reklam.** Nie wiadomo, czy retrieval widzi je jako jeden obiekt, czy jako wielu kandydatów.
10. **Czy status „creative fatigue” działa w zestawach z wieloma reklamami.** Artykuł mówi, że funkcja jest „only available for ad sets with one creative”. Nie jest jasne, czy dotyczy to tylko rekomendacji, czy także statusu w kolumnie Delivery.
11. **Szczegóły „Meta Generative Recommender” (Q2 2026) i związek HSTU z GEM.** Znam je tylko z wtórnych streszczeń lub z własnej wiedzy.
12. **Wizja pełnej automatyzacji reklam** (Zuckerberg: reklamodawca podaje cel i budżet, a Meta tworzy kreację, targetowanie i pomiar; doniesienia prasowe z 2025 r. o automatyzacji do końca 2026 r.). To [WIEDZA], niepotwierdzona w tej sesji. Nie cytować bez weryfikacji.
13. **Pełne teksty blogów Andromeda i GEM, artykułu „Demystifying Creative Diversification” i transkrypcji earnings.** Nieprzeczytane z powodu blokad sieci. Brzmienie cytatów i kontekst liczb (np. „22% ROAS”) wymagają weryfikacji przed publikacją.

### 3.3 Kontrargumenty wobec „dywersyfikacji za wszelką cenę”

- Meta równolegle zaleca **konsolidację** i ostrzega przed nadmiarem reklam (A). Dywersyfikacja bez budżetu na zebranie sygnału rozprasza uczenie.
- Wyniki dynamic creative i multi-text są zagregowane. Różnorodność wewnątrz jednej reklamy **nie daje wiedzy**, który kąt działa (A, X7 i X8). Trzeba zdecydować, czy celem jest wydajność (wszystko w jednej reklamie), czy nauka (osobne reklamy lub A/B test).
- Meta raportuje tylko średnie efekty (np. Advantage+ leads: jakość leadów przy ufności zaledwie 83%). Dla konkretnego konta w Polsce efekt może być zerowy lub ujemny.

---

## 4. Konkretne reguły do systemu

| # | Reguła | Uzasadnienie | Poziom |
|---|---|---|---|
| R1 | **Różnorodność = różne koncepty, nie mikrowarianty.** Każdy nowy koncept musi różnić się co najmniej jednym wymiarem strategicznym (persona lub problem, motywacja, etap świadomości, typ dowodu, format) **oraz** warstwą wizualną („materially different”). Zmiana koloru tła, nagłówka lub CTA to wariant, a nie nowy koncept. | F1, F2, M3 (Meta), X10 | A (zasada); C (taksonomia wymiarów) |
| R2 | **Mikrowarianty tekstu i zasobów w jednej reklamie** (do 10 mediów lub flexible, do 5 tekstów, multi-text), **koncepty w osobnych reklamach.** Tak system optymalizuje wydajność, a my nadal widzimy, który koncept działa. | managing ad volume, X7, X8 | A |
| R3 | **Nowe kreacje dodawać partiami**, nie pojedynczo. Każde dodanie reklamy lub zmiana kreacji resetuje learning zestawu. Domyślny rytm: jedna partia co 1–2 tygodnie, po ocenie pełnego tygodnia. Działającej reklamy nie edytować, tylko dodać nową. | L2, L4 | A (mechanizm); D (konkretny rytm) |
| R4 | **Liczba aktywnych konceptów zależy od budżetu.** Heurystyka: zestaw ma zebrać ok. 50 zdarzeń tygodniowo, więc przy tygodniowym budżecie B i CPL C górny limit równoległych konceptów to ≈ max(2, B / (C × 10)). Typowo 3–6 konceptów na zestaw w kontach MŚP. Nigdy blisko 50 reklam na zestaw ani 250 na stronę. | L1, L3, P4, limity | A (progi i limity); D (formuła) |
| R5 | **Oceniać wyniki na poziomie zestawu lub kampanii, nie reklamy.** Reklama bez wydatków = „przegrała predykcję”, nie „przegrała test”. Strategicznie ważny koncept testować A/B testem (min. 7 dni, jedna zmienna), a nie włączaniem i wyłączaniem. | D1, D2, G3 | A |
| R6 | **Zakaz clickbaitu w copy i na grafice:** nie ukrywać kluczowej informacji, żeby wymusić klik, nie używać sensacyjnego języka ani engagement bait. Obietnica z reklamy musi się zgadzać ze stroną lub formularzem. | A2 (sygnały: ukrycia, zgłoszenia, bounce, dwell) | A |
| R7 | **Kreacja ma kwalifikować** (dla kogo, jaki problem, orientacyjna cena lub warunek, co stanie się po wysłaniu formularza). Niższy conversion rate ranking przy lepszej jakości leadów jest akceptowalny. | A3 (Meta: produkty wymagające namysłu mają niższy CR ranking), G1, cel biznesowy | A (akceptowalność niższego rankingu); C/D (efekt na jakość leadów) |
| R8 | **Diagnostyka relevance:** czytać kombinację trzech rankingów, tylko przy ≥ 500 wyświetleniach, tylko dla reklam, które nie realizują celu. Nie optymalizować „pod ranking”. | A3 | A |
| R9 | **Monitoring zmęczenia:** reagować na status „Creative limited” lub „Creative fatigue” i na creative similarity w Account Insights. Reakcja: nowy obraz lub wideo „materially different”, starą reklamę zostawić, jeśli nadal dowozi. Reklamy bez wyników wyłączać. Zmęczenie liczyć per obraz lub wideo w całej stronie, nie per reklama. | F1–F3 | A |
| R10 | **Nie powielać tych samych mediów w wielu zestawach i kampaniach do podobnych odbiorców** (auction overlap, zmęczenie per zasób). Konsolidować zestawy. Breakdowns zamiast fragmentacji odbiorców. | D3, F1, combine ad sets | A |
| R11 | **Każdy wariant tekstu musi być samodzielny i spójny z pozostałymi** (ta sama oferta, cena, warunki), bo system miesza teksty i pola. Generator tekstów Meta nie przyjmuje polskiego tekstu, więc warianty PL tworzy nasz system. | X8 | A |
| R12 | **Checklista GenAI przed publikacją:** sprawdzić włączone Advantage+ creative enhancements (overlays, enhance media text, music, animation, image generation). Wyłączyć te, które mogą zmienić lub usunąć informację kwalifikującą albo stworzyć obietnicę niezgodną z ofertą. Rozważyć opt-out z „test new optimizations” dla klientów wrażliwych. | X9 | A |
| R13 | **Przygotować zasoby w 9:16, 4:5 i 1:1** z ważnymi elementami w bezpiecznej strefie. Domyślnie Advantage+ placements. | X5, X6, flexible media | A |
| R14 | **Sygnał jakości przed kreacją:** jeśli klient ma CRM, rekomendować CAPI for CRM i optymalizację pod qualified leads (od IV 2026 wymagane dla nowych kampanii), formularz „higher intent” przy usługach wymagających kontaktu. Bez tego żadna kreacja nie zmieni celu optymalizacji systemu. | G1, G2 | A |
| R15 | **Advantage+ leads domyślnie, ale z weryfikacją jakości:** włączyć, a efekt na jakość leadów sprawdzać A/B testem z danymi z CRM. Dowód Meta dla jakości jest słaby (83% ufności). | X2, X4 | A (dane Meta); D (efekt dla danego klienta) |
| R16 | **Ocena w oknach tygodniowych**, z uwzględnieniem wahań budżetu dziennego do +75% i rosnącego CPA w trakcie kampanii. Werdykt o kreacji najwcześniej po 7 dniach i ok. 50 zdarzeniach albo zgodnie z progiem statystycznym modułu testów. | L1, L4 | A (okna); D (dokładny próg) |
| R17 | **Higiena epistemiczna:** system nie może pisać „Andromeda wymaga X” ani „Entity ID powoduje Y” jako faktu. Takie twierdzenia oznacza jako hipotezy praktyków (D) i opiera rekomendacje na mechanizmach udokumentowanych (A): ad volume, creative similarity/fatigue, auction overlap, learning phase. | sekcja 3 | reguła metodyczna |
| R18 | **Nie tłumaczyć klientowi spadków „algorytmem”** bez danych. Najpierw sprawdzić learning, zmęczenie, overlap, sygnał konwersji i sezonowość, potem ewentualnie zmiany platformy. | P6, L3, F1, D3 | A/C |

---

## 5. Lista źródeł

### 5.1 Meta Business Help Center / Meta for Developers — [PEŁNY] (przez MCP `ads_get_help_article`, 2026-09-24)

Aukcja, jakość, diagnostyka
- [PEŁNY] About ad auctions — https://www.facebook.com/business/help/430291176997542
- [PEŁNY] Ad auction (glossary) — https://www.facebook.com/business/help/163066663757985
- [PEŁNY] About ad relevance diagnostics — https://www.facebook.com/business/help/403110480493160
- [PEŁNY] How to use ad relevance diagnostics — https://www.facebook.com/business/help/436113280262012
- [PEŁNY] About quality ranking — https://www.facebook.com/business/help/303639570334185
- [PEŁNY] About engagement rate ranking — https://www.facebook.com/business/help/2351270371824148
- [PEŁNY] About conversion rate ranking — https://www.facebook.com/business/help/617529305373441
- [PEŁNY] Best practices to improve ad quality and performance — https://www.facebook.com/business/help/1767120243598011
- [PEŁNY] About ad quality — https://www.facebook.com/business/help/423781975167984

Dostarczanie, learning, budżet
- [PEŁNY] About ad delivery — https://www.facebook.com/business/help/1000688343301256
- [PEŁNY] About the learning phase — https://www.facebook.com/business/help/112167992830700
- [PEŁNY] Significant edits and learning phase — https://www.facebook.com/business/help/316478108955072
- [PEŁNY] About learning limited — https://www.facebook.com/business/help/269269737396981
- [PEŁNY] About the breakdown effect — https://www.facebook.com/business/help/770303663944673
- [PEŁNY] Understand fluctuations in ad performance — https://www.facebook.com/business/help/1364841787225722
- [PEŁNY] Troubleshoot ad delivery — https://www.facebook.com/business/help/236201204528536
- [PEŁNY] Troubleshoot: not receiving enough results — https://www.facebook.com/business/help/284656872650053
- [PEŁNY] Best practices for Meta ads delivery — https://www.facebook.com/business/help/950694752295474
- [PEŁNY] Best practices to potentially reduce cost per result — https://www.facebook.com/business/help/321695409726523
- [PEŁNY] Cost per result exceeding bid cap / goal — https://www.facebook.com/business/help/867416745088574
- [PEŁNY] Understand auction overlap — https://www.facebook.com/business/help/537699989762051
- [PEŁNY] Campaign auction overlap — https://www.facebook.com/business/help/957407462768373
- [PEŁNY] Combine ad sets and campaigns (audience fragmentation) — https://www.facebook.com/business/help/2419480091640105
- [PEŁNY] How we combine ad sets with automated rules — https://www.facebook.com/business/help/380468733452428
- [PEŁNY] About opportunity score — https://www.facebook.com/business/help/804913634782260

Wolumen reklam, zmęczenie, podobieństwo
- [PEŁNY] About managing ad volume — https://www.facebook.com/business/help/2720085414702598
- [PEŁNY] Ad limits per page — https://www.facebook.com/business/help/766697140509126
- [PEŁNY] Campaign, ad set and ad limits per ad account — https://www.facebook.com/business/help/652738434773716
- [PEŁNY] About creative fatigue recommendations — https://www.facebook.com/business/help/1346816142327858
- [PEŁNY] About account insights (creative fatigue, creative similarity, themes) — https://www.facebook.com/business/help/1784925068944145
- [PEŁNY] Understand creative-level performance — https://www.facebook.com/business/help/243916866413404

Testy
- [PEŁNY] About A/B testing — https://www.facebook.com/business/help/1738164643098669
- [PEŁNY] Best practices for A/B testing — https://www.facebook.com/business/help/290009911394576
- [PEŁNY] Viewing A/B test results — https://www.facebook.com/business/help/1376548572415613
- [PEŁNY] About budget optimization tests — https://www.facebook.com/business/help/299600627522144
- [PEŁNY] Setup campaign experiments — https://www.facebook.com/business/help/2157673164314250
- [PEŁNY] Ad performance (Advertiser Success Center) — https://www.facebook.com/550486893511830

Advantage+
- [PEŁNY] About the Advantage+ campaign experience — https://www.facebook.com/business/help/1292656978738967
- [PEŁNY] What turns Advantage+ on and off — https://www.facebook.com/business/help/906206294602874
- [PEŁNY] Choose audience settings in Advantage+ campaigns — https://www.facebook.com/business/help/25941857932125812
- [PEŁNY] About Advantage+ leads campaigns — https://www.facebook.com/business/help/992035952809423
- [PEŁNY] About Advantage+ sales campaigns — https://www.facebook.com/business/help/1362234537597370
- [PEŁNY] About Advantage+ app campaigns — https://www.facebook.com/business/help/309994246788275
- [PEŁNY] About Advantage+ audience — https://www.facebook.com/business/help/273363992030035
- [PEŁNY] Create a campaign using Advantage+ audience — https://www.facebook.com/business/help/793748385630490
- [PEŁNY] Use Advantage+ custom audience — https://www.facebook.com/business/help/414975413946182
- [PEŁNY] About Advantage+ placements — https://www.facebook.com/business/help/196554084569964

Kreacja, formaty, GenAI
- [PEŁNY] About Advantage+ creative — https://www.facebook.com/business/help/297506218282224
- [PEŁNY] Advantage+ creative for ads from your Facebook page — https://www.facebook.com/business/help/1176714013185487
- [PEŁNY] Turn off Advantage+ creative enhancements — https://www.facebook.com/business/help/1082295769403815
- [PEŁNY] Troubleshoot ad rendering (optimize text per person, test new optimizations) — https://www.facebook.com/business/help/418015731022150
- [PEŁNY] About the flexible ad format — https://www.facebook.com/business/help/835561738423867
- [PEŁNY] About flexible media — https://www.facebook.com/business/help/1126725172362626
- [PEŁNY] About ad formats available on Instagram — https://www.facebook.com/business/help/877053729032543
- [PEŁNY] About dynamic creative — https://www.facebook.com/business/help/170372403538781
- [PEŁNY] Create an ad that uses dynamic creative — https://www.facebook.com/business/help/344106239654869
- [PEŁNY] About text generation — https://www.facebook.com/business/help/180641596861873
- [PEŁNY] Create an ad with text generation — https://www.facebook.com/business/help/497610041230617
- [PEŁNY] Generate image variations — https://www.facebook.com/business/help/1684513971952814
- [PEŁNY] Add animation to an image — https://www.facebook.com/business/help/1766652437485798
- [PEŁNY] Standard enhancements (Marketing API) — https://developers.facebook.com/docs/marketing-api/advantage-catalog-ads/standard-enhancements
- [PEŁNY] Advantage+ creative (Marketing API) — https://developers.facebook.com/docs/marketing-api/creative/advantage-creative

Lead ads
- [PEŁNY] About performance goals for lead ads — https://www.facebook.com/business/help/782657799338685
- [PEŁNY] About instant form types — https://www.facebook.com/business/help/252352181957512
- [PEŁNY] Create a lead ad with instant form — https://www.facebook.com/business/help/791294492679966

Wynik negatywny (zapytanie „Andromeda” — brak artykułu o Andromedzie)
- [PEŁNY] About reservation — https://www.facebook.com/business/help/251123081984768 (zwrócony zamiast artykułu o Andromedzie)

### 5.2 Źródła pierwotne Meta znane tylko ze streszczeń — [WYSZUKIWARKA]
- Meta Andromeda: Supercharging Advantage+ automation with the next-gen personalized ads retrieval engine (2024-12-02) — https://engineering.fb.com/2024/12/02/production-engineering/meta-andromeda-advantage-automation-next-gen-personalized-ads-retrieval-engine/
- Meta's Generative Ads Model (GEM) (2025-11-10) — https://engineering.fb.com/2025/11/10/ml-applications/metas-generative-ads-model-gem-the-central-brain-accelerating-ads-recommendation-ai-innovation/
- GEM Training: How Meta Doubled the Efficiency… (2026-08-03) — https://engineering.fb.com/2026/08/03/ml-applications/training-gem-at-llm-scale-meta-ads-recommendation-foundation-model/
- Engineering at Meta na X (GEM) — https://x.com/Meta_Engineers/status/1987929289401176230
- New AI advancements drive Meta's ads system performance and efficiency (Lattice) — https://ai.meta.com/blog/ai-ads-performance-efficiency-meta-lattice/
- Meta Lattice: Model Space Redesign… (arXiv 2512.09200) — https://arxiv.org/html/2512.09200 (WebFetch zablokowany)
- AI Innovation in Meta's Ads Ranking Driving Advertiser Performance (Meta for Business) — https://www.facebook.com/business/news/ai-innovation-in-metas-ads-ranking-driving-advertiser-performance
- Demystifying Creative Diversification (Meta for Business) — https://www.facebook.com/business/news/demystifying-creative-diversification
- Performance 5 (Meta Blueprint) — https://www.facebookblueprint.com/student/path/253157-performance-5
- Earnings Q4 2024 — https://www.fool.com/earnings/call-transcripts/2025/01/29/meta-platforms-meta-q4-2024-earnings-call-transcri/ ; https://s21.q4cdn.com/399680738/files/doc_financials/2024/q4/META-Q4-2024-Earnings-Call-Transcript.pdf (WebFetch zablokowany)
- Earnings Q1 2025 — https://s21.q4cdn.com/399680738/files/doc_financials/2025/q1/Transcripts/META-Q1-2025-Earnings-Call-Transcript-1.pdf ; https://equibles.com/stocks/meta/calls/2025-q1
- Earnings Q2 2025 — https://equibles.com/stocks/meta/calls/2025-q2 ; https://s21.q4cdn.com/399680738/files/doc_financials/2025/q2/META-Q2-2025-Earnings-Call-Transcript.pdf ; https://sergeycyw.substack.com/p/meta-q2-2025-earnings-analysis
- Earnings Q3 2025 — https://www.fool.com/earnings/call-transcripts/2025/10/29/meta-platforms-meta-q3-2025-earnings-call-transcript/
- Earnings Q4 2025 — https://www.fool.com/earnings/call-transcripts/2026/01/28/meta-meta-q4-2025-earnings-call-transcript/ ; https://s21.q4cdn.com/399680738/files/doc_financials/2025/q4/META-Q4-2025-Prepared-Remarks.pdf
- Earnings Q1 2026 — https://www.fool.com/earnings/call-transcripts/2026/04/29/meta-meta-q1-2026-earnings-call-transcript/ ; https://ppc.land/meta-q1-2026-56-3b-revenue-as-ai-tools-double-advertiser-adoption/
- Earnings Q2 2026 — https://s21.q4cdn.com/399680738/files/doc_financials/2026/q2/META-Q2-2026-Earnings-Call-Transcript.pdf ; https://finance.yahoo.com/quote/META/earnings/META-Q2-2026-earnings_call-657318.html ; https://adsuploader.com/blog/meta-earnings-for-advertisers

### 5.3 Źródła naukowe
- [PEŁNY] facebookresearch/generative-recommenders (HSTU, ICML 2024) — https://github.com/facebookresearch/generative-recommenders

### 5.4 Praktycy i media branżowe — [WYSZUKIWARKA]
- Jon Loomer — Meta Andromeda: What It Means for Your Ad Strategy — https://www.jonloomer.com/meta-andromeda/
- Jon Loomer — The Truth About Meta Andromeda and Ad Retrieval — https://www.jonloomer.com/meta-andromeda-ad-retrieval/
- Jon Loomer — Avoid Meta Andromeda Misinformation — https://www.jonloomer.com/qvt/meta-andromeda-misinformation/
- Jon Loomer — 2. What Andromeda Isn't — https://www.jonloomer.com/andromeda-2/
- Jon Loomer — 3. What is Creative Diversification? — https://www.jonloomer.com/andromeda-3/
- Jon Loomer — Meta Andromeda and Creative Diversification: 7 Examples — https://www.jonloomer.com/meta-andromeda-creative-diversification/
- Jon Loomer (TikTok) — How many ads is too many? — https://www.tiktok.com/@jonloomer/video/7545893351409683742
- adsuploader — Meta Andromeda Explained: Entity IDs vs Creative Volume — https://adsuploader.com/blog/meta-andromeda
- Wilow — Why More Ads Keep Failing: Meta Entity ID Problem — https://trywilow.com/blog/creative-entity-ids-meta-andromeda
- Artifex Digital — Understanding Meta's Entity ID — https://www.artifexdigital.co/blog/understanding-metas-entity-id-why-your-28-ads-might-actually-be-3
- DataAlly — Meta's Creative Entity ID — https://www.dataally.ai/blog/metas-creative-entity-id-why-creative-diversification-is-essential
- DataAlly — Meta's New Metrics and Why the Creative Similarity Score Matters — https://www.dataally.ai/blog/metas-new-metrics-and-why-the-creative-similarity-score-matters
- Webtopia — Entity IDs, Andromeda and… — https://www.webtopia.co/blog/entity-ids-andromeda-and-the-new-era-of-creative-led-targeting-on-meta
- PPC Blog Pro — Creative Similarity Penalties — https://ppcblogpro.com/how-andromeda-detects-and-punishes-ad-duplication/
- Recharm — Meta's Andromeda Needs Creative Diversity — https://www.recharm.com/blog/what-is-andromeda-and-creative-similarity
- nikhil.pro — Why Meta Only Spends on a Few of Your Ads — https://nikhil.pro/meta-ads-creative-similarity-explained/
- Admetrics — Meta Creative Fatigue and Similarity Score — https://www.admetrics.io/en/post/meta-creative-fatigue-and-similarity-score-complete-guide
- Admetrics — Meta Andromeda: What It Is — https://www.admetrics.io/en/post/meta-andromeda-ads-retrieval-explained
- Admove — How Meta Andromeda Works — https://www.admove.ai/blog/meta-andromeda-guide
- Confect — Meta Andromeda 2026 — https://confect.io/tactics/meta-andromeda-2026
- TheOptimizer — How to Test Ad Creatives After Andromeda — https://theoptimizer.io/blog/how-to-test-ad-creatives-on-meta-after-the-andromeda-update-2026-playbook
- 303 London — Complete Guide to Creative Diversity — https://www.303.london/blog/complete-guide-to-creative-diversity-for-meta-andromeda
- Excite Media — What does Meta mean by creative diversification? — https://www.excitemedia.com.au/blog/meta-creative-diversification/
- greghal.no — How Meta's Ads Algorithm Works in 2026 — https://greghal.no/en/blog/meta-ads-algorithm-2026-complete-guide/
- Atria — Meta Andromeda Update — https://www.tryatria.com/blog/meta-andromeda-update
- Medium (Ewan Mak) — Meta Ads Strategy 2026 — https://medium.com/@tentenco/meta-ads-strategy-2026-why-andromeda-gem-and-ios-26-broke-the-old-playbook-78cba1ad4820
- Dataslayer — Meta Ads Updates Nov 2025: GEM — https://www.dataslayer.ai/blog/meta-ads-updates-november-2025-gem-ai-model-boosts-conversions-5
- InfoQ — Meta Details GEM Ads Model — https://www.infoq.com/news/2025/12/meta-gem-ads-model/
- SMK — Meta Reveals New "Performance Five" — https://smk.co/meta-reveals-new-performance-five-optimisation-best-practices/
- Tiger Pistol — Meta's Performance 5 Framework — https://tigerpistol.com/metas-performance-5-framework-the-impact-of-simplifying-your-account-structure/
- Jetfuel — Meta Algorithm Changes 2026 — https://jetfuel.agency/metas-2026-algorithm-update-what-andromeda-changed-and-how-to-adapt-your-ads/

### 5.5 [WIEDZA] (niepotwierdzone w tej sesji)
- Starszy wzór aukcji „bid × estimated action rates + ad quality” (wcześniejsze wersje dokumentacji Meta).
- Wypowiedzi Zuckerberga z 2025 r. o pełnej automatyzacji tworzenia reklam oraz doniesienia prasowe o automatyzacji do końca 2026 r.
- Związek architektury HSTU (generative recommenders) z GEM.
