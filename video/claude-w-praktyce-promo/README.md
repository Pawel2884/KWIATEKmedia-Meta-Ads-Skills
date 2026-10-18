# Rolka promo: Claude w praktyce 2.0 (4:5, 60 s)

Reklama wideo kursu https://claudewpraktyce20.kwiatekmedia.pl/ zmontowana w Remotion.
Bez lektora. Komunikat niosą duże polskie napisy, muzyka w tle jest syntezowana proceduralnie (bez licencji do opłacenia).

## Jak powstała

1. Higgsfield AI Influencer (tier „total”, celowo dziwna, nienaturalna postać) jako bohater zatrzymujący scroll.
2. Higgsfield GPT Image 2 (jakość low, 1k): 8 scen z tym samym bohaterem + tło sieci neuronowej + okładka.
3. Higgsfield Kling 3.0 (std, 1:1, 5 s, bez dźwięku): 7 klipów image to video.
4. Zdjęcie kursu (pudełko), logo i zdjęcie autora pobrane ze strony kursu.
5. Montaż w Remotion: `src/Promo.tsx` (plan scen), `src/Caption.tsx` (napisy), `src/Scenes.tsx` (liczby, autor, plansza końcowa), `src/Clip.tsx` (klip 1:1 na rozmytym tle, nic nie jest ucięte).
6. Muzyka: `tools/make_music.py` (112 BPM, napięcie 0–18 s, riser, pewny groove 18–50 s, wyciszenie na CTA). Pomiar: ok. -14 LUFS, szczyt -1,4 dB.

## Render

Materiały z Higgsfield (`public/assets/*.mp4`, `*.png`) nie są w repo. Lista plików, których oczekuje kompozycja:
`v101_hook.mp4 v102_dance.mp4 v201_desk.mp4 v202_coffee.mp4 v203_cards.mp4 v204_hammock.mp4 v206_wink.mp4 s5_thumbs.png s7_peek.png bg_network.png kurs-pudelko.webp kurs-logo.webp kurs-pawel.jpg music.wav` oraz `public/fonts/Montserrat-ExtraBold.ttf`.

```bash
npm install
python3 tools/make_music.py public/assets/music.wav
bash tools/render.sh        # out/claude-w-praktyce-promo-4x5.mp4, 1080x1350, 30 fps, H.264 + AAC
node tools/stills.mjs out/stills 40 400 1200   # klatki kontrolne
```

Finalny render odbył się w sandboxie Higgsfield (ta sesja chmurowa nie ma dostępu sieciowego do CDN Higgsfield), a gotowy plik został wgrany do biblioteki mediów Higgsfield użytkownika.

## Teksty na ekranie (kolejność)

STOP. / Ile godzin w tygodniu robisz to samo? / Poniedziałek rano. Raport z pięciu miejsc. / Oferta od zera. Te same maile po raz setny. / A gdyby ta robota robiła się sama, a Ty tylko sprawdzasz? / Oddaj powtarzalną pracę Claude. / Ty wyznaczasz zadanie. Claude je robi. / Odzyskujesz kilkadziesiąt godzin tygodniowo. / Nauczysz Claude: pamiętać Twoją firmę, robić raport w poniedziałek o 8:00, pisać szkice odpowiedzi do klientów, robić oferty według Twojego wzoru, zbierać faktury w jeden folder / W środku dostajesz: 12 kroków, 74 lekcje z zadaniem, 130+ gotowych wzorów, bez programowania, dostęp na zawsze, certyfikat / Z tym czasem zrobisz, co chcesz. Klienci. Rodzina. Albo nic. / Paweł Kwiatek, KWIATEKmedia. Miesiąc pracy zamknięty w jednym kursie. Moja agencja działa dokładnie na tym, czego uczę. / 14 dni na zwrot. Faktura VAT. Dostęp na zawsze. / Kliknij i zacznij dziś. / Claude w praktyce 2.0, Kupuję kurs i zaczynam, claudewpraktyce20.kwiatekmedia.pl

Bez ceny w wideo (zgodnie z zasadą: cena to kontekst wewnętrzny).

## Wynik (18.10.2026)

- Plik: `claude-w-praktyce-promo-4x5.mp4`, 1080x1350, 30 fps, 1800 klatek, 60,0 s, H.264 (crf 18) + AAC 192 kb/s, 39,6 MB, md5 `9116368e383081f8afa044c0938940e9`.
- Lokalizacja: biblioteka mediów Higgsfield (media_id `9bb1529b-6d05-4ca8-895c-fa5063a123a6`), URL pobrania:
  https://d2ol7oe51mr4n9.cloudfront.net/user_32yhsDYuxebF2rAIGxl02sCOoO8/9bb1529b-6d05-4ca8-895c-fa5063a123a6.mp4
- Okładka (awatar z tabletem, 3:4): media_id `d665ca5a-d678-408d-9fb8-52181fffcc34`.
- Sprawdzenia: ffprobe (liczba klatek, czas, strumienie), pełne dekodowanie bez błędów, arkusz kontrolny 12 klatek, głośność muzyki ok. -14 LUFS.
- Render: Remotion w sandboxie Higgsfield, 4 części po 450 klatek (`tools/render_chunks.sh`), sklejone bezstratnie, muzyka domiksowana z tą samą kopertą głośności co w kompozycji.
- Kredyty Higgsfield: zużyte 49,37 z 49,41 (awatar 1,125; 9 grafik po 0,5; 7 klipów Kling po 6,25).
