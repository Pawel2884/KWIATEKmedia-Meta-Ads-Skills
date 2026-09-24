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
