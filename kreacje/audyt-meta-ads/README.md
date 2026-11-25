# Statyki: bezpłatny audyt Meta Ads (KWIATEKmedia)

5 kreacji, każda w 2 formatach: 4:5 (1080×1350, feed) i 9:16 (1080×1920, Stories/Reels, tekst w strefie bezpiecznej: góra 280 px i dół 680 px wolne).
Pliki: `png/`. Podgląd zbiorczy: `podglad.png`. Ponowne generowanie: `node kreacje/audyt-meta-ads/render.js`.

| Nr | Plik | Hook | Rozwinięcie | CTA | Paleta |
|---|---|---|---|---|---|
| 01 | 01-agencja-statystyki | 8 | 6 | 5 | grafit #0B0F1A + limonka #C6FF3D |
| 02 | 02-leady-bez-sprzedazy | 4 | 5 | 3 | żółty #FFD60A + czarny #111111 |
| 03 | 03-placisz-agencji | 2 | 3 | 1 | pomarańcz #FF5A1F + czarny, CTA białe |
| 04 | 04-koszty-rosna | 6 | 2 | 4 | złamana biel #F4F1EA + czerwień #D7261E |
| 05 | 05-samodzielnie-bledy | 7 | 4 | 2 | niebieski #1F35FF + żółty #FFE14D |

Uwagi do tekstów na grafice:
- 02: lejek „Reklama → Lead → Rozmowa → Umowa” wizualizuje rozwinięcie 5 („od wyświetlenia reklamy do podpisania umowy”).
- 05: rozwinięcie 4 podane jako lista („Sprawdzę Twoje: kreacje, formularze, ustawienia kampanii, jakość pozyskiwanych leadów”).
- Pozostałe teksty dosłownie z briefu.

Każda kreacja to inny kąt (agencja, lejek sprzedaży, budżet u agencji, rosnące koszty, samodzielne prowadzenie), więc nadają się do jednego zestawu reklam w teście.

## 06: kreacja ze zdjęciem (konsultacja)

Pliki: `png/06-zdjecie-konsultacja_4x5.png`, `png/06-zdjecie-konsultacja_9x16.png`. Generator: `node kreacje/audyt-meta-ads/render-foto.js` (zdjęcie: `zdjecia/pawel.png`).

- Na grafice: hook 10 + CTA 7. CTA 10 („Dowiedz się, co możesz poprawić”) powtarzałoby końcówkę hooka, a CTA 7 pasuje do spotkania z rozwinięcia 10.
- Rozwinięcie 10 jest w tekście reklamy, bo na grafice zasłoniłoby twarz.
- 4:5: tekst na górze, zdjęcie poniżej, CTA na dole. 9:16: twarz u góry, tekst i CTA w środkowym pasie (do 1240 px), dolne 35% wolne.
- Tło #1B1B20 dobrane do ściany na zdjęciu, krawędzie zdjęcia wtopione w tło.

Tekst reklamy (Primary Text):
Zanim wydasz kolejne pieniądze na Meta Ads, sprawdź, co możesz poprawić.

Podczas indywidualnego spotkania przeanalizujemy Twoje reklamy i ustalimy, co warto zmienić.

Umów bezpłatną konsultację reklamową.

Nagłówek: Bezpłatna konsultacja reklamowa

## Wersja „pro” (główny obraz zamiast ozdobników)

Folder `png-pro/`, podgląd `podglad-pro.png`, generator `node render-pro.js`.
Każda kreacja ma mockup, który pokazuje problem z hooka (zasada praktyków: kąt i główny obraz decydują o wyniku, ozdobniki nic nie wnoszą):
- 01: karta „Raport agencji” (Zasięg ↑, Kliknięcia ↑, Leady ↑) obok „Twoja sprzedaż: bez zmian”.
- 02: lejek Leady → Rozmowy → Umowy, przy umowach czerwony pasek i „?”.
- 03: rachunek: obsługa opłacona ✓, budżet wydany ✓, nowi klienci ?.
- 04: wykres: koszt reklam rośnie, sprzedaż płaska (poglądowy, bez liczb).
- 05: karta audytu z 4 obszarami „do sprawdzenia”.
- 06: zdjęcie właściciela (bez zmian).
Rozwinięcia są w Primary Text. Wersja z okręgami (`decor.js`) odrzucona.
