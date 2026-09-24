# 11 — Analiza reklam z Biblioteki Reklam Meta (Polska) w 5 grupach biznesów (research surowy)

> Agent researchowy: obszar 11. Data: 2026-09-24. Status: W TOKU (zapis przyrostowy).
> Legenda źródeł: [PEŁNY] = dane zwrócone przez narzędzie `ads_library_search` (Meta Ad Library API) w tej sesji; [WYSZUKIWARKA] = streszczenia/fragmenty z WebSearch; [WIEDZA] = wiedza modelu niepotwierdzona w sesji.
> Poziomy dowodu: A = źródło pierwotne; B = badania / duże zbiory; C = praktycy z przykładami / obserwacja rynku (np. reklama długo aktywna); D = opinia/hipoteza.
> ZASTRZEŻENIE: długość działania reklamy i powtarzalność wzorca to SYGNAŁ (C/D), nie dowód skuteczności. Nie znamy wydatków, CPL ani wyników żadnej z reklam.

## 1. Metoda
(uzupełniane przyrostowo)

### 1.1 Co zwraca narzędzie (ustalone na starcie)
- Narzędzie `mcp__Meta_Ads__ads_library_search` DZIAŁA (konto reklamowe aktywne).
- Zwracane pola: `page_name`, `ad_creative_link_title` (NAGŁÓWEK / link title — nie Primary Text!), `ad_creation_time`, `ad_delivery_start_time`, `ad_snapshot_url`, `currency`. **Brak pola z treścią główną (Primary Text / ad_creative_bodies)**, brak CTA, brak opisu, brak kreacji, brak zasięgu/wydatków.
- Wyniki są sortowane od najnowszych (utworzonych w ostatnich 1–3 dniach) — przy frazach ogólnych nie widać starych reklam. Obejście: zapytania po `page_ids` konkretnych reklamodawców (gdy strona ma < 50 aktywnych reklam, widać też reklamy starsze).
- `ad_snapshot_url` (facebook.com/ads/library) jest zablokowany przez proxy sieciowe sesji (EGRESS_BLOCKED) — nie da się doczytać treści głównej ani kreacji.
- Konsekwencja: analiza hooków opiera się na NAGŁÓWKACH (link title), które część reklamodawców wykorzystuje jako hook ("❌ Znudzony obecną księgową?"), a część jako etykietę ("Biuro rachunkowe"). Treść główną uzupełniam z WebSearch [WYSZUKIWARKA], gdzie to możliwe.
- Wyszukiwanie po frazie dopasowuje też nazwę strony i tekst reklamy (np. "biuro rachunkowe" zwraca reklamy agencji SM dla biur rachunkowych i klub sportowy).

## 2. Wnioski per grupa
(zapis przyrostowy)

## 3. Wnioski przekrojowe
(uzupełniane na końcu)

## 4. Implikacje dla systemu
(uzupełniane na końcu)

## 5. Lista wyszukiwań i źródeł
| # | Fraza | Status | Limit | Est. total | Uwagi |
|---|---|---|---|---|---|
| 1 | księgowość dla firm | ACTIVE | 25 | 187 | wszystkie utworzone 21–23.09.2026 |
| 2 | biuro rachunkowe | ALL | 50 | 16 705 | wszystkie utworzone 21–24.09.2026 |
