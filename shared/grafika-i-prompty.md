# Grafika reklamowa i prompty do generatorów obrazów

## Spis treści
1. Zasady grafiki (telefon najpierw)
2. Hierarchia informacji na grafice
3. Typografia, rozmiar, kontrast
4. Strefy bezpieczne i proporcje
5. Specyfikacja grafiki (co zawsze podajesz)
6. Prompt do generatora: szablon
7. Zabezpieczenia przed artefaktami
8. Tekst w modelu czy w edytorze
9. Parametry modeli
10. Kontrola przed publikacją

## 1. Zasady grafiki

- Jeden punkt skupienia: jeden dominujący obiekt lub scena, ciasny kadr wokół tego, co ważne (A: Meta).
- Przy celu „leady” i „sprzedaż” na pierwszym planie oferta, efekt lub produkt. Człowiek jako kontekst, podobny do odbiorcy, w realnym otoczeniu (A: Meta).
- Zero ozdobników: bez naklejek, ramek, ikon, faktur, gradientów dla ozdoby, kolaży z więcej niż 2 zdjęć, dekoracyjnych linii i strzałek „wzrostu”, wykresów bez danych, konfetti. Najwyżej 2–3 kolory i 1 akcent (B: szum wizualny szkodzi uwadze na markę).
- Ciekawa kompozycja jest dozwolona: nietypowy kadr, kontrast skali, jeden zaskakujący element (B: złożoność projektu pomaga).
- Typowa, rozpoznawalna scena kategorii wygrywa w krótkiej ekspozycji (B). Kształt głównego obiektu czytelny nawet na rozmytej miniaturze.
- Natywnie: zdjęcie z telefonu, naturalne światło, bez przesadnego retuszu (A: „avoid overly photoshopped images”).
- Spojrzenie osoby świadomie: gdy ważny jest produkt lub nagłówek, osoba patrzy na niego. Gdy chodzi o kontakt i zaufanie, patrzy w obiektyw (B).
- Zero napisów na obiektach w kadrze. Każdy ekran, książka, kubek, tablica, szyld, koszulka, opakowanie jest pusty albo go nie ma. W wideo to samo: bez zbliżeń na kartki, plany, kalendarze, ekrany telefonów i dokumenty z czytelną treścią. Jeśli czynność tego wymaga (plan terapii, raport z aplikacji), pokaż ją z daleka albo z boku, a treść daj w napisie na ekranie.
- Brak zdjęć u klienta nie oznacza grafiki z samym tekstem na płaskim tle w każdej statyce. Jeśli oferta opiera się na osobie (agencja, ekspert, gabinet), zaplanuj zdjęcie tej osoby z telefonu i podaj, jak je zrobić.
- Logo małe, w stałym miejscu. Nie plansza z logo.

## 2. Hierarchia informacji

Grafika ma najwyżej 3 poziomy:
1. Nagłówek (3–7 słów): główny komunikat, najważniejsze słowo na początku.
2. Wsparcie (opcjonalnie, 2–5 słów): liczba, cena „od”, termin, miejsce.
3. Marka i ewentualnie krótkie CTA (małe).

Całość tekstu na grafice: do ok. 12 słów. Powyżej 15 słów: ostrzeżenie. Powyżej 20: przepisz. Wyjątek świadomy: format „tekst jako obraz” (cytat opinii, notatka), wtedy tekst musi być duży i krótki w linii.

## 3. Typografia, rozmiar, kontrast

- Jeden krój bezszeryfowy, najwyżej 2 grubości (np. Inter, Montserrat, Poppins, Roboto; bez ozdobnych, pisanych i 3D).
- Na kanwie szerokości 1080 px: nagłówek co najmniej ok. 80 px wysokości (cel 90–120 px), wsparcie ok. 50–70 px, żaden tekst poniżej ok. 45 px.
- Kontrast tekstu do tła co najmniej 4,5:1, najlepiej 7:1. Tekst na jednolitym tle lub podkładzie, nie na zdjęciu o zmiennej jasności.
- Kolor tekstu: ciemny na jasnym albo biały na ciemnym jednolitym polu. Kolor akcentu tylko dla jednego słowa lub liczby.
- Test miniatury: pomniejsz grafikę do 25–30%. Nagłówek nadal czytelny?

Progi pikseli to wyprowadzenie z WCAG i rozmiarów ekranu (D). Kontrast 4,5:1 to standard WCAG (A).

## 4. Strefy bezpieczne i proporcje

- Feed: 4:5, 1080×1350. Kluczowa treść w środkowej części, dolny pasek i boki wolne.
- Stories i Reels: 9:16, 1080×1920. Góra ok. 14% (ok. 270 px) wolna, dół ok. 35% (ok. 670 px) wolny, boki ok. 6% (ok. 65 px). Przy disclaimerze w Reels dolne 40% wolne. Tekst najlepiej w środkowym pasie.
- Przygotowuj koncept w 4:5 i 9:16 (albo zaprojektuj tak, żeby dało się przyciąć bez utraty tekstu).

Źródła: Meta Help Center (A) dla Stories 14%/20% i 40% przy disclaimerze. Wartości 14/35/6 dla Reels z wytycznych praktyków, stosowane jako najostrzejszy wariant (B/C).

## 5. Specyfikacja grafiki (zawsze podajesz)

Dla każdej statyki podajesz w tej kolejności:
1. Format i wymiary (4:5 1080×1350; wersja 9:16).
2. Pełny opis sceny: miejsce, pora, światło, polskie realia.
3. Postać (jeśli jest): wiek w przybliżeniu, wygląd, ubiór bez nadruków, poza, co robi dłońmi, gdzie patrzy.
4. Emocja: jaka i jak widoczna (np. ulga, spokojna pewność).
5. Kompozycja: gdzie jest główny obiekt, gdzie wolne miejsce na tekst, plan (zbliżenie, plan średni).
6. Hook wizualny: co zatrzymuje wzrok w pierwszej sekundzie.
7. Tekst na grafice dosłownie, w cudzysłowie, z podziałem na linie.
8. Czcionka: krój, grubość, wielkość w px dla każdej linii, kolor (HEX), położenie (np. górna 1/3, wyśrodkowany).
9. Kolory tła i akcentu (HEX).
10. Logo: gdzie i jak małe.
11. Psychologiczny cel grafiki: jaką myśl ma wywołać u odbiorcy w 1 sekundę.
12. Czego nie może być (lista wykluczeń).

## 6. Prompt do generatora: szablon

Prompt piszesz po angielsku (dokumentacja i przykłady producentów są w tym języku). Po polsku tylko dosłowny tekst, jeśli wyjątkowo ma być w obrazie. Kolejność bloków: cel, scena, bohater, ludzie, realizm, miejsce na tekst, puste obiekty, wykluczenia (A: zalecenia OpenAI i Google).

[CEL] Photorealistic image for a Facebook/Instagram ad, vertical 4:5. Audience: [kto].
[SCENA] [konkretne miejsce i czas w Polsce, np. a typical Polish apartment block kitchen, late afternoon, soft window light].
[BOHATER] [produkt, efekt albo sytuacja] placed [gdzie w kadrze].
[LUDZIE] (optional, max 1–2) [wiek, zwykły wygląd, ubranie bez nadruków, poza, co robią dłonie, gdzie patrzą], [emocja].
[REALIZM] Real photograph taken on a smartphone, eye level, natural colors, real skin texture, everyday imperfections, unposed. No glamorization, no heavy retouching, no HDR, no cinematic grading.
[MIEJSCE NA TEKST] Keep the [upper third] calm and uncluttered (plain wall / sky) for a headline added later. Keep key elements away from the edges.
[PUSTE OBIEKTY] Every object is blank: [np. laptop lid closed, plain white mug without print, no posters, no signs, no screens, no papers with text, no license plates].
[WYKLUCZENIA] No text, letters, numbers, logos, watermarks or brand names anywhere in the image.

Słowa, których nie używasz (dają „wygląd AI”): cinematic, epic, 8k, ultra detailed, hyperrealistic, masterpiece, flawless, perfect skin, studio lighting, dramatic lighting, glossy, vibrant colors, octane render.
Słowa, które pomagają: real photograph taken on a smartphone, natural daylight, window light, real textures, slight imperfections, natural slightly muted colors, ordinary people not models, unposed.

## 7. Zabezpieczenia przed artefaktami

Przypadkowe napisy (priorytet):
1. Nie wstawiaj do kadru obiektów, które przyciągają napisy (ekrany, książki z grzbietami, tablice, szyldy, witryny, gazety, opakowania, kubki z nadrukiem, koszulki z grafiką, kalendarze, dokumenty, tablice rejestracyjne), chyba że koncept ich wymaga.
2. Jeśli obiekt jest potrzebny, opisz go jako pusty: „laptop screen turned off, plain black glass”, „phone lying face down”, „plain white ceramic mug without any print”, „closed notebook with a plain grey cover”, „whiteboard wiped clean”, „car seen from the side, no license plate visible”.
3. Na końcu jedna linia wykluczeń. W Midjourney tylko parametr `--no text, letters, logo, watermark, signage`.
4. Po wygenerowaniu powiększ do 200% i szukaj pseudo-liter, pseudo-logo, cyfr na zegarach i ekranach. Popraw edycją („Remove all text and logos from the [obiekt]. Change only that. Keep everything else the same.”) albo gumką w edytorze.

Dłonie i anatomia:
5. Najwyżej 1–2 osoby. Proste czynności dłoni: trzyma kubek, ręce w kieszeniach, dłoń oparta o blat. Unikaj splecionych palców, uścisków, trzymania długopisu, liczenia na palcach.
6. Kontrola: liczba palców, zęby, uszy, okulary, cienie, odbicia.

Realia i produkt:
7. Opisz polskie realia (architektura, wnętrza, pogoda, gniazdka, samochody bez tablic). Model domyślnie rysuje realia amerykańskie.
8. Produkt klienta: daj prawdziwe zdjęcie produktu jako obraz referencyjny i edytuj scenę. Nie generuj produktu od zera.
9. Warianty: ten sam obraz referencyjny i polecenie „change only X, keep everything else the same”.

Uczciwość i prawo:
10. Nie generuj osób udających prawdziwych klientów, pacjentów, ekspertów ani zdjęć „przed i po”. Nie pokazuj wygenerowanej realizacji jako realizacji firmy. Wizualizację oznacz jako wizualizację. Fotorealistyczne sceny z ludźmi mogą wymagać oznaczenia (AI Act art. 50 od 2.08.2026; to przegląd, nie porada prawna).
11. Najlepiej: prawdziwe zdjęcia klienta (realizacje, ekipa, właściciel), a generator tylko do tła, scen poglądowych lub konceptów do akceptacji.

## 8. Tekst w modelu czy w edytorze

Domyślnie: grafika z generatora bez tekstu, a tekst nakładasz w Canvie lub Figmie. Powody: w edytorze kontrolujesz krój, rozmiar, kontrast i strefy bezpieczne; na jednym obrazie sprawdzisz 3–5 nagłówków bez zmiany sceny (czysty test); poprawka tekstu nie zmienia obrazu. Polskie znaki (ą, ę, ł, ś, ż, ź, ć, ń, ó) były słabym punktem generatorów; w testach topowych modeli z 2026 r. (Nano Banana 2 i Pro, GPT Image 2) krótkie polskie napisy wychodziły bezbłędnie (C: polskie testy blogowe), ale ryzyko rośnie z długością napisu. Poziom rekomendacji: D oparty na A i C.

Wyjątki (tekst w modelu): szybkie koncepty do akceptacji, napis będący częścią sceny, koncept typograficzny, brak dostępu do edytora. Wtedy: GPT Image 2 (quality high) albo Nano Banana Pro, tekst dosłownie w cudzysłowie, krótki (do ok. 6 słów w linii), opisany opisowo (krój, kolor, miejsce), „render exactly once”, kontrola każdej litery w powiększeniu.

## 9. Parametry modeli

- GPT Image 2 (API): 4:5 jako 1088×1360, potem skaluj do 1080×1350; 9:16 jako 1152×2048. W ChatGPT napisz „vertical 4:5”.
- Nano Banana 2 / Pro (Gemini): aspect_ratio „4:5” albo „9:16”, rozdzielczość 2K. Pro lepszy do tekstu i edycji wieloetapowych.
- Imagen 4: brak 4:5 (3:4 i kadrowanie), 9:16 jest.
- Midjourney v7: `--ar 4:5` albo `--ar 9:16`, `--style raw`, wykluczenia tylko przez `--no`.
- FLUX: opisuj puste obiekty pozytywnie (część wersji nie obsługuje negative prompt).

## 10. Kontrola przed publikacją

1. Podgląd na telefonie w Ads Managerze.
2. Test miniatury (25–30%).
3. Test 1 sekundy: pokaż komuś na sekundę. Co to jest i dla kogo?
4. Policz słowa na grafice.
5. Kontrast co najmniej 4,5:1.
6. Strefy bezpieczne w 9:16.
7. Powiększenie 200%: brak przypadkowych napisów i błędów anatomii.
8. Elementy konkurujące o uwagę: jeden dominujący, nagłówek, mały znak marki.
