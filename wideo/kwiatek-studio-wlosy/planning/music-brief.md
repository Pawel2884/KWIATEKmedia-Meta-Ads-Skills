# Music brief

- **Rola:** ciepłe tło premium, które podnosi energię przy cenie i uspokaja przy CTA. Reklama ma działać bez dźwięku – muzyka to wzmocnienie, nie nośnik treści.
- **Styl:** soft pop / chill-house beauty, jasny, kobiecy.
- **Tempo:** 100 BPM (0,6 s na beat).
- **Instrumentacja:** miękkie akordy elektrycznego pianina (Fmaj7 – Am7 – Dm9 – Bbmaj7), subtelny bas sinusowy, miękki kick od 2,6 s, shaker na ósemkach od 5,4 s, dzwonki przy wzroście włosów.
- **Gęstość:** niska–średnia; bez wokali.
- **Krzywa:** 0–2,6 s intro (pad + dzwonki), 2,6 s wejście beatu, 11,8 s lift (pełny beat + wyższe akordy przy cenie), 15 s lekkie zejście (bez shakera) pod czat, 18,4 s rozwiązanie na toniku i wybrzmienie.
- **Zakazane:** radosny korporacyjny ukulele, trap, epicki trailer, lo-fi z trzaskami, cokolwiek agresywnego.
- **SFX (hierarchia):** 1 mocny akcent – cena (miękki „impact” + błysk); średnie – wzrost włosów (shimmer), wysłanie wiadomości (whoosh + pop); drobne – ticki przy wyborze i liczniku.
- **Źródło:** syntetyzowane deterministycznie w `scripts/make_audio.py` (numpy), bo ElevenLabs i biblioteki muzyczne są poza siecią kontenera.
- **Głośność:** cel ok. −14 LUFS integrated, true peak ≤ −1 dBTP.
