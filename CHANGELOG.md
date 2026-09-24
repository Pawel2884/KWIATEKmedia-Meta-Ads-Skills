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
- Runda R2 na 15 przypadkach (w tym skille nieprzetestowane w R1 z powodu limitu sesji).
