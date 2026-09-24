# Poprawki po R2: stosować po zakończeniu rundy R2 (z katalogu głównego repo)
import sys, glob
def rep(path, old, new, allow_missing=False):
    s=open(path).read()
    if old not in s:
        if allow_missing: return False
        print("BRAK", path, old[:70]); sys.exit(1)
    open(path,'w').write(s.replace(old,new,1)); return True

# 1. Linia formatu we wszystkich SKILL.md: bez wstępu, bez pauz i półpauz
OLD="Pisz zwykłym markdownem, bez bloków kodu i bez pauz (—) w całej odpowiedzi. Szablon poniżej pokazuje układ, nie jest blokiem do skopiowania."
NEW=("Pisz zwykłym markdownem, bez bloków kodu, bez pauz i półpauz (—, –) między słowami (półpauza tylko w zakresach liczb, np. 5–100). "
     "Pierwsza linia odpowiedzi to pierwsza linia szablonu: bez zdania wstępu („Przygotowałem…”, „Przeczytałem…”, „Oto…”) i bez form rodzajowych o sobie („zrobiłem”, „założyłem”; pisz bezosobowo). "
     "Szablon poniżej pokazuje układ, nie jest blokiem do skopiowania.")
n=0
for f in glob.glob('plugins/kwiatekmedia-meta-ads/skills/*/SKILL.md'):
    if rep(f, OLD, NEW, allow_missing=True): n+=1
print("format line:", n)

# 2. CTA we wspólnej specyfikacji
rep('shared/specyfikacje-meta.md',
    "| Przycisk CTA | lista Meta | dopasuj do tego, co się stanie (Zarejestruj się, Uzyskaj wycenę, Zarezerwuj, Wyślij wiadomość, Zadzwoń, Kup teraz, Dowiedz się więcej) |",
    "| Przycisk CTA | lista Meta | dopasuj do tego, co się stanie: umówienie rozmowy, demo, audytu, wizyty → Zarezerwuj (albo Wyślij zgłoszenie); wycena → Uzyskaj wycenę; wiadomość → Wyślij wiadomość; telefon → Zadzwoń; zakup → Kup teraz; zapis na wydarzenie lub listę → Zarejestruj się; treść → Dowiedz się więcej |")

# 3. Grafika: bez narysowanych przycisków
rep('shared/grafika-i-prompty.md',
    "dekoracyjnych linii i strzałek „wzrostu”, wykresów bez danych, konfetti.",
    "dekoracyjnych linii i strzałek „wzrostu”, wykresów bez danych, konfetti, narysowanych przycisków („Umów termin”, „Kup teraz”) i innych fałszywych elementów interfejsu. Przycisk jest pod reklamą.")

# 4. Audytor: zasady poprawionej wersji w SKILL.md
rep('plugins/kwiatekmedia-meta-ads/skills/creative-auditor/SKILL.md',
    "6. Jeśli werdykt to 🟡 lub 🔴: oddaj **poprawioną wersję** gotową do użycia (tekst na grafice, Primary Text, nagłówek, opis, zmiany w obrazie).",
    "6. Jeśli werdykt to 🟡 lub 🔴: oddaj **poprawioną wersję** gotową do użycia (tekst na grafice, Primary Text, nagłówek, opis, przycisk, zmiany w obrazie). Tylko fakty z reklamy i od klienta: zakresu usługi („technik sprawdzi dotacje”), liczb, czasu kontaktu i numeru telefonu nie wymyślasz, wstawiasz `[UZUPEŁNIJ: …]`. Bez przykładowych liczb („np. 340 opinii”). Bez narysowanych przycisków na grafice. Przycisk z listy Meta, zgodny z tym, co się stanie (umówienie audytu, rozmowy, wizyty: „Zarezerwuj”). Poprawiona wersja przechodzi te same zasady co każda reklama: pierwsze słowa należą do odbiorcy, bez szablonowych otwarć („Zastanawiasz się…”, „Czy wiesz…”), opis do 30 znaków.")
rep('plugins/kwiatekmedia-meta-ads/skills/creative-auditor/SKILL.md',
    "Nie wystawiasz punktów ani ocen w skali. Nie ma danych, które uzasadniałyby taką skalę.",
    "Nie wystawiasz punktów ani ocen w skali. Nie ma danych, które uzasadniałyby taką skalę.\n\nSekcję bez uwag (np. brak DROBNYCH) pomijasz, nie zostawiasz pustego nagłówka. „Co jest dobre i zostaje” tylko wtedy, gdy są prawdziwe mocne strony.")
print("ok")

# 5. Dywersyfikacja: oznaczenia kierunków i formy neutralne w nazwach
p='plugins/kwiatekmedia-meta-ads/skills/creative-diversification/SKILL.md'
s=open(p).read()
marker="## Format odpowiedzi"
assert marker in s
s=s.replace(marker, "## Oznaczenia i język\n\n- Kierunki numeruj „Kierunek 1, 2…”. Kody K1–K18 są zarezerwowane dla kątów, H1–H16 dla hooków, S i V dla formatów. W sekcji POKRYCIE pisz numery kierunków, nie kody kątów.\n- Nazwy kierunków i hooki to potencjalne teksty reklam: formy neutralne płciowo („Reklamy prowadzone samodzielnie”, nie „Sam ogarniasz reklamy”).\n- Obraz: najwyżej 2 zdjęcia w kadrze, bez kolaży.\n\n"+marker,1)
open(p,'w').write(s)
print("div ok")

# 6. Planer dostaje zgodnosc.md i hooki; zasady zgodności konceptów
import json
m=json.load(open('shared/mapa.json'))
for f in ['zgodnosc.md','dowody-i-zaufanie.md']:
    if f not in m['campaign-creative-planner']: m['campaign-creative-planner'].append(f)
json.dump(m, open('shared/mapa.json','w'), ensure_ascii=False, indent=1)
p='plugins/kwiatekmedia-meta-ads/skills/campaign-creative-planner/SKILL.md'
s=open(p).read()
marker="## Format odpowiedzi"
assert marker in s
s=s.replace(marker,"## Zgodność konceptów i formularza\n\nKoncepty w planie to zapowiedź reklam, więc obowiązują je te same zasady (`references/zgodnosc.md`). Przy flagach ZDROWIE i PRAWO: bez kąta „rezultat” i obietnic efektu, bez opinii i ocen pacjentów lub klientów w kreacji, bez porównań (także z NFZ, sądem, innymi kancelariami). Formularz bez pytań o dolegliwość, diagnozę, zabieg ani etap problemu finansowego. Fakty tylko z briefu: nie mieszaj terminu wizyty z czasem oddzwonienia.\n\n"+marker,1)
open(p,'w').write(s)

# 7. Zdrowie: pytania formularza bez dolegliwości
p='shared/zgodnosc.md'
s=open(p).read()
old="- Formularz: bez pytań o diagnozy i stan zdrowia. Pytaj o usługę („czego dotyczy wizyta: kręgosłup, uraz sportowy, rehabilitacja po zabiegu”), preferowany termin i porę kontaktu."
assert old in s
s=s.replace(old,"- Formularz: bez pytań o diagnozy, dolegliwości, części ciała, zabiegi i stan zdrowia (Meta zakazuje pytań o informacje zdrowotne; wybór „rehabilitacja po zabiegu” też je ujawnia). Pytaj o: pierwsza wizyta czy kontynuacja, preferowany termin (w tym tygodniu, w ciągu 2 tygodni, później), porę kontaktu, preferowaną formę kontaktu.",1)
open(p,'w').write(s)
print("planer+zdrowie ok")

# 8. Iteracje: zgodność niezależnie od wyników
p='plugins/kwiatekmedia-meta-ads/skills/iteration-engine/SKILL.md'
s=open(p).read()
old="- Nie tłumacz spadków „algorytmem” ani „Andromedą” bez danych."
assert old in s
s=s.replace(old, old+"\n- Sprawdź zgodność każdej reklamy z danych (np. opinie pacjentów w reklamie gabinetu, pytanie o cechę odbiorcy, cena przekreślona bez 30 dni). Naruszenie zgłaszasz w DECYZJACH niezależnie od wyników: to ryzyko konta, nie kwestia CPL.\n- Zapis: „3×”, nie „3x”.",1)
open(p,'w').write(s)
print("iter ok")

# 9. Produkty niemedyczne bez obietnic zdrowotnych
p='shared/zgodnosc.md'
s=open(p).read()
old="**WYROB-MEDYCZNY**"
assert old in s
s=s.replace(old,"**Produkty niemedyczne z korzyścią dla ciała (krzesła, materace, obuwie, suplementy)**\n- Bez obietnic efektu zdrowotnego („bez bólu pleców”, „leczy”, „koniec z bólem kręgosłupa”): to twierdzenie zdrowotne bez dowodu (UoPNPR) i ryzyko polityki Meta. Mów o funkcji i sytuacji: „podparcie lędźwi regulowane pod wzrost”, „na 8 godzin przy biurku”.\n\n"+old,1)
open(p,'w').write(s)
print("produkty ok")

# 10. Iteracje: kąt vs wykonanie
p='plugins/kwiatekmedia-meta-ads/skills/iteration-engine/SKILL.md'
s=open(p).read()
old="- Działającej reklamy nie edytujesz. Nowa wersja to nowa reklama w partii."
assert old in s
s=s.replace(old, old+"\n- Z jednej reklamy wnioskujesz o tej reklamie (wykonaniu), nie o całym kącie. Werdykt o kącie („ten kąt nie działa w tej kategorii”) dopiero po co najmniej 2 różnych wykonaniach. Słaba pierwsza wersja kąta to kandydat do I1–I3, nie dowód, że kąt jest zły.",1)
open(p,'w').write(s)
print("kat ok")
