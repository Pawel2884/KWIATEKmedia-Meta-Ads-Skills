# KWIATEKmedia Meta Ads

Wersja 1.0.0 (24 września 2026).

System 10 skilli Claude do tworzenia reklam Meta Ads (Facebook, Instagram) po polsku. Od krótkiego opisu oferty do gotowego pakietu: strategia, plan kreacji, naprawdę różne koncepty, statyki z promptami graficznymi, scenariusze wideo, copy, hooki, teksty formularza, audyt i kolejne partie na podstawie wyników.

Cel systemu: nie tanie leady, tylko ludzie, którzy rozumieją ofertę i mogą zostać klientami.

## Szybki start

Po instalacji wpisz w Claude (Cowork, czat albo Claude Code) jedno z poniższych. Wystarczy kilka zdań o ofercie.

- „Zrób całą kampanię dla gabinetu fizjoterapii w Rzeszowie. Wizyta 60 min, 180 zł, termin w 3 dni, 4,9 w Google z 212 opinii. Budżet 1500 zł.”
- „Zrób 3 różne statyki dla…” / „Napisz teksty do 3 reklam i formularz dla…”
- „Oceń tę reklamę: [wklej tekst i opis grafiki]”
- „Oto wyniki z 14 dni: [tabela]. Co wyłączyć i jakie nowe reklamy zrobić?”

Claude sam wybierze właściwy skill. Możesz też wywołać skill wprost: `/kwiatekmedia-meta-ads:meta-ads-master` (Claude Code) albo napisać „użyj skilla static-ads-creator”.

Skille pytają tylko o to, co zmienia wynik (najwyżej 3 pytania, każde z domyślną odpowiedzią). Brakujące dowody oznaczają `[UZUPEŁNIJ: …]` zamiast je wymyślać.

## Skille

| Skill | Kiedy | Co oddaje |
|---|---|---|
| `meta-ads-master` | nowy klient, „cała kampania”, nie wiesz, od czego zacząć | kompletny pakiet: karta oferty, plan, koncepty, statyki, wideo, copy, formularz, checklista publikacji |
| `meta-creative-strategist` | strategia, kąty, „co komunikować” | karta oferty, odbiorcy, obiekcje, ranking kątów, 3–8 konceptów, rekomendacja oferty i formularza |
| `campaign-creative-planner` | „ile reklam”, plan testów przy budżecie | struktura kampanii, liczba reklam w partii i w rezerwie, kalendarz partii, jak oceniać |
| `creative-diversification` | „reklamy są za podobne”, nowe kierunki | zestaw kierunków różniących się pomysłem, kątem, problemem, formatem, poziomem świadomości |
| `static-ads-creator` | grafiki, statyki, prompty do grafik | dosłowny tekst na grafice, hierarchia, obraz, kompozycja, typografia (krój, rozmiar, kolor, położenie), cel psychologiczny, prompt do generatora, copy |
| `meta-ad-copy` | teksty reklam, formularz | Primary Text, nagłówki, opis, przycisk, teksty formularza błyskawicznego |
| `video-ad-script` | rolki, UGC, talking head, demo | scenariusz sekunda po sekundzie, 3–5 hooków, napisy do wypalenia, lista ujęć, wskazówki nagrania, copy |
| `hook-generator` | pierwsze zdania, nagłówki na grafikę, otwarcia wideo | 6–8 hooków różnych typów w wersji na grafikę, Primary Text i wideo |
| `creative-auditor` | „oceń tę reklamę”, przed publikacją | odpowiedź na 3 pytania (czy spełni cel, czy wdrażać, czy zmieniać), werdykt ✅ / 🟡 / 🔴, poprawiona wersja; bez arbitralnej oceny punktowej |
| `iteration-engine` | wyniki kampanii, „co wyłączyć”, zmęczenie kreacji | status próby (za mało danych / sygnał / rozstrzygnięte), decyzje per reklama, następna partia kreacji |

## Instalacja

### Cowork, czat na claude.ai, Claude Desktop (zalecane)

1. Customize (pasek boczny) → Plugins → Add marketplace.
2. Wpisz `Pawel2884/KWIATEKmedia-Meta-Ads-Skills` (albo pełny adres repozytorium) i zainstaluj plugin `kwiatekmedia-meta-ads`.
3. Alternatywa bez GitHuba: Customize → Plugins → Add → Upload plugin i wybierz `dist/kwiatekmedia-meta-ads.zip`.

Plugin zainstalowany na koncie claude.ai działa w Cowork, w czacie i synchronizuje się do Claude Code po zalogowaniu na to samo konto. Wymagany plan płatny i włączone „Code execution and file creation” (Settings → Capabilities).

### Claude Code (terminal)

```
/plugin marketplace add https://github.com/Pawel2884/KWIATEKmedia-Meta-Ads-Skills.git
/plugin install kwiatekmedia-meta-ads@kwiatekmedia
```

Pełny adres `https://…git` omija klonowanie przez SSH (przydatne na Windows bez klucza SSH).

### Pojedyncze skille

Każdy skill jest też osobną paczką w `dist/skills/<nazwa>.zip` (Customize → Skills → „+” → Upload a skill). Każda paczka zawiera komplet potrzebnej wiedzy. Master bez pozostałych skilli wykona kroki sam i powie, który skill warto doinstalować.

### Stare skille

Przed użyciem wyłącz stare skille o podobnych wyzwalaczach (np. `kampania-lead-meta-pl`, `meta-ads-optymalizacja`). Inaczej Claude może wybrać stary skill zamiast nowego.

## Na czym to stoi

- `RESEARCH.md`: wnioski z researchu z poziomami dowodu A (Meta, prawo, źródło pierwotne), B (badania, duże dane), C (praktycy), D (hipoteza). Co wiadomo o Andromedzie, a co jest mitem.
- `PRINCIPLES.md`: 42 zasady systemu z uzasadnieniem.
- `SOURCES.md`: 888 źródeł z trybem dostępu (pełny tekst, wyszukiwarka, cytat).
- `TESTS.md`: jak system był testowany (4 rundy, 49 udanych uruchomień na 6 różnych biznesach), co znalazł krytyk i co poprawiono.
- `CHANGELOG.md`: historia wersji.

Najważniejsze zasady w skrócie:
1. Jeden komunikat na reklamę. Grafika czytelna na telefonie w 1 sekundę, do ok. 12 słów.
2. Każda reklama odpowiada: co to, czy dla mnie, jaki problem, co zyskam, co dalej.
3. Zero zmyśleń. Dowód wiernie (ta sama jednostka, okres, źródło). Braki jako `[UZUPEŁNIJ]`.
4. Kwalifikacja w reklamie i formularzu (dla kogo, gdzie, ile, co dalej). Celem jest klient, nie CPL.
5. Różnorodność w pomyśle, kącie, problemie, formacie i poziomie świadomości, nie w kolorze tła.
6. Prosty polski bez AI slop i języka korporacyjnego. Formy neutralne płciowo.
7. Zgodność: polityka cech osobistych Meta, zawody medyczne i prawnicze tylko informacja, Omnibus, greenwashing, dotacje, kredyt.
8. Decyzje na danych: werdykt po pełnym tygodniu i ok. 10 leadach na reklamę. Mała próba to „za mało danych”, nie „przegrana”.

## Struktura repozytorium

```
.claude-plugin/marketplace.json      marketplace "kwiatekmedia"
plugins/kwiatekmedia-meta-ads/       plugin (10 skilli, każdy z własnym references/)
shared/                              jedno źródło wiedzy wspólnej (kopiowane do references/)
scripts/build.py                     synchronizacja shared → references, walidacja, paczki dist/
dist/                                gotowe paczki: plugin .zip, pojedyncze skille .zip
research/raw/                        surowe raporty researchu (12 plików)
tests/                               przypadki testowe, wyniki rund, lint, krytyk
```

## Jak zmieniać wiedzę

1. Edytuj plik w `shared/` (nie w `references/` skilli, bo tam są kopie).
2. Uruchom `python3 scripts/build.py`. Skrypt skopiuje wiedzę do skilli, sprawdzi format i zbuduje paczki w `dist/`.
3. Sprawdź: `claude plugin validate . --strict`.
4. Szybka regresja: `cd plugins/kwiatekmedia-meta-ads && claude plugin eval . --runs 1` (5 przypadków w `evals/`).
5. Pełny test: `tests/run_matrix.sh <runda> 3 '<filtr>'`, potem `tests/lint_round.sh <runda>`. Uwaga: każde uruchomienie zużywa limit konta Claude.

## Ograniczenia

- Skille nie znają wyników Twoich kont, dopóki nie wkleisz danych albo nie podłączysz Meta Ads (wtedy iteration-engine pobiera je sam).
- Wiedza o platformie Meta jest aktualna na wrzesień 2026. Prawo (CCD2, dyrektywa 2024/825) jest w trakcie wdrażania w Polsce: skille oznaczają takie miejsca `ZGODNOŚĆ: do sprawdzenia`.
- Skill nie zastępuje prawnika klienta w branżach regulowanych.
