# Kwiatek CRM — film sprzedażowy (Remotion)

Dwie osobno skomponowane wersje 60 s, 30 fps, H.264:

- `out/Kwiatek_CRM_9x16.mp4` (1080×1920), kompozycja `KwiatekCRM-9x16`
- `out/Kwiatek_CRM_16x9.mp4` (1920×1080), kompozycja `KwiatekCRM-16x9`

Film jest bez lektora i muzyki. Tekst lektora i instrukcja dodania: `LEKTOR.md`.

## Uruchomienie

```bash
npm i
npm run dev          # Remotion Studio
npm run render:all   # oba MP4 do out/
```

`remotion.config.ts` wskazuje lokalne Chromium headless shell (środowisko bez pobierania Chrome). Na innej maszynie usuń `Config.setBrowserExecutable(...)`, a Remotion pobierze własną przeglądarkę.

## Struktura

- `public/zrzuty/` oryginalne zrzuty CRM (bez zmian), `public/fonts/` Inter (OFL)
- `src/shots.ts` metadane zrzutów i maski kwot w pikselach źródłowych
- `src/components/Shot.tsx` kamera: kadr, zoom, przesunięcie, maski i podświetlenia w jednym kontenerze (maski poruszają się ze zrzutem)
- `src/scenes/` 9 scen; każda ma osobne kadry dla układu `v` (pion) i `h` (poziom)
- `src/Video.tsx` montaż (`TransitionSeries`, przenikania 12 klatek), `src/Root.tsx` rejestracja kompozycji

## Rzetelność

- Wszystkie kwoty zakryte maskami, nie zmieniane na inne liczby. Oryginalne pliki nietknięte.
- Oznaczenie „Dane demonstracyjne” w każdej scenie, CTA z dopiskiem o danych fikcyjnych.
- Brak symulowanych kliknięć, brak wyników analizy AI, brak kampanii SMS i wyników liczbowych.
