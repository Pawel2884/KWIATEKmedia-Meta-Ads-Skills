# Kwiatek CRM — tekst lektora (60 s)

Ton: konkretny, spokojny, pewny. Bez reklamowej intonacji. Pauzy dopasowane do scen.

| Czas | Scena | Tekst |
|---|---|---|
| 0–4 s | Hook | Klient czeka. Pamiętasz, na co? |
| 4–10 s | Panel dnia | W Kwiatek CRM zaczynasz dzień od konkretnych zadań. |
| 10–24 s | Kolejka telefonów, karta kontaktu | Widzisz, do kogo zadzwonić, co ustaliliście i jaki jest następny krok. |
| 24–38 s | Tablica sprzedaży, kalendarz | Szanse sprzedaży masz w jednym procesie. Telefony i spotkania w kalendarzu. |
| 38–46 s | Opieka | A po sprzedaży nadal pamiętasz o kontakcie, odnowieniach i sprawach wymagających reakcji. |
| 46–53 s | Zamknięcie dnia | Na koniec dnia sprawdzasz, co zostało do zrobienia. |
| 53–60 s | CTA | Przetestuj Kwiatek CRM za darmo. Wejdź na crm.kwiatekmedia.pl i wybierz Demo. |

## Status nagrania

Lektor nie został dołączony do wyrenderowanych plików. Próba w ElevenLabs (głos „Konrad W. – Warm & Steady Narrator v2”, model eleven_multilingual_v2) wygenerowała tylko pierwszy segment; pozostałe sześć odrzucono: konto ma 13 kredytów z limitu 10 000 i wymaga płatnej subskrypcji. Film jest zrozumiały bez dźwięku.

## Jak dodać lektora później

1. Nagrać segmenty jako `public/lektor/01.mp3` … `07.mp3`.
2. W `src/Video.tsx` dodać `<Audio src={staticFile("lektor/01.mp3")} />` w `<Sequence from={...}>` na początku odpowiedniej sceny (klatki startowe: 0, 120, 300, 720, 1140, 1380, 1590).
3. Wyrenderować ponownie: `npm run render:all`.
