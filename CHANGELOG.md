# CHANGELOG

## 1.0.0 (2026-09-24)

Pierwsza pełna wersja systemu.

### Research
- 11 obszarów researchu (dostarczanie reklam i Andromeda, kreacje i placementy Meta, uwaga i mobile, perswazja i zaufanie, praktycy, wideo i hooki, lead gen i polskie prawo, testy i zmęczenie kreacji, copy PL i prompty graficzne, format pluginów Claude, Biblioteka Reklam Meta w Polsce).
- Weryfikacja 31 twierdzeń, które pochodziły z wiedzy modelu (osobna sesja z wyszukiwarką). Twierdzenia obalone usunięte lub poprawione.
- RESEARCH.md, PRINCIPLES.md (42 zasady), SOURCES.md (888 źródeł z trybem dostępu).

### System
- Plugin `kwiatekmedia-meta-ads` z 10 skillami i marketplace `kwiatekmedia`.
- Wspólna wiedza w `shared/` (15 plików), kopiowana do `references/` każdego skilla przez `scripts/build.py`, więc każdy skill działa także jako osobna paczka.
- Paczki w `dist/`: cały plugin (.zip, .plugin) i 10 pojedynczych skilli.

### Testy i poprawki
- Runda R1: 30 uruchomień (10 skilli × 3 przypadki z 6 różnych biznesów), niezależny krytyk, lint maszynowy.
- Poprawki po R1 (szczegóły w TESTS.md):
  - wierność dowodów: ta sama jednostka i okres, bez zaokrąglania w górę, bez dopisanych szczegółów historii klienta, bez uzasadnień „bo…” i porównań kosztów, których klient nie podał, bez twierdzeń o rynku bez danych;
  - każda reklama odpowiada na 5 pytań odbiorcy, w tym „co zyskam”;
  - nazwa nieznanej firmy nie jest hookiem ani pierwszym słowem tekstu; hooki informacyjne w zdrowiu i prawie, ale konkretne;
  - pierwsza klatka i ujęcia bez ekranów, dokumentów, kalendarzy, wykresów i ikon;
  - odpowiedź bez wstępu i bez form męskich w 1. osobie, formy neutralne także w formularzu;
  - formularz: każde kryterium celu klienta ma pytanie i zamknięcie, bez pytań o etap długu lub diagnozę;
  - limity: opis do 30 znaków, akapity 1–2 zdania;
  - audytor: 🔴 gdy poprawka to w praktyce nowa reklama, szara strefa prawa jako ISTOTNE z dopiskiem, bez przykładowych liczb w poprawkach, bez pochwał na siłę;
  - przycisk „Zarezerwuj” przy umawianiu rozmowy, demo i audytu.
- Runda R2 (15 uruchomień, w tym skille nieprzetestowane w R1: planer, silnik iteracji na 3 zestawach danych, master). Poprawki po R2:
  - reguła formatu (bez wstępu, bez pauz i półpauz) wpisana do każdego SKILL.md, bo reguła w plikach wiedzy nie wystarczała;
  - wspólna mapa przycisków CTA; planer z modułem zgodności; formularz w zdrowiu bez pytań o dolegliwość; produkty niemedyczne bez obietnic zdrowotnych;
  - silnik iteracji: zgodność w decyzjach niezależnie od wyników, werdykt o kącie dopiero po 2 wykonaniach;
  - audytor: poprawiona wersja tylko z faktami klienta; master: karty w formacie skilli, różny tekst w reklamach.
- Runda R3 (9 uruchomień): zero wstępów i form męskich, poprawki wierności (przedmiot dowodu, „od roku”), audytor sprawdza poprawioną wersję listą własnych blokerów, najwyżej jedna statyka typograficzna w zestawie.
- Runda R4 (5 uruchomień) na uporczywych punktach.
- Evale `claude plugin eval` (5 przypadków) do testów regresji po przyszłych zmianach.
