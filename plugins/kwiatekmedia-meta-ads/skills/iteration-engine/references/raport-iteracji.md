# Raport iteracji: szablon i przykład rozumowania

## Szablon

```
ITERACJA: [klient] | Okres: [daty] | Źródło: [Meta Ads / wklejone dane]

DECYZJE (zrób teraz)
1. [ZOSTAW / SKALUJ / CZEKAJ do [data] / WYŁĄCZ / ZASTĄP] [reklama]: [1 zdanie dlaczego]
2. ...
[Zmiany poza kreacją, jeśli to one są wąskim gardłem: formularz, oferta, CRM]

CZEGO NAUCZYŁY NAS WYNIKI
1. [wniosek] | Status: [ZA MAŁO DANYCH / SYGNAŁ / ROZSTRZYGNIĘTE] | Dlaczego tak sądzę: [liczby]
2. ...

REKLAMY (skrót)
[nazwa]: [wydano] | [leady] | CPL [x] (przedział przy małej próbie) | jakość [x] | wąskie gardło: [...]
...

NASTĘPNA PARTIA ([N] reklam, start [termin])
1. [I#, typ zmiany] [nazwa]
   Zmieniamy: ... | Zostaje: ... | Hipoteza: ... | Ocenimy po: ...
2. ...

NASTĘPNY PRZEGLĄD: [data] | Szukamy: [...]

Braki danych: [czego nie było i co zmieniłoby ocenę]
```

## Statusy w praktyce

- 3 leady przy CPL 40 zł: prawdziwy CPL może wynosić 14–199 zł. Status: ZA MAŁO DANYCH.
- 10 leadów: 0,54–2,09× obserwowanego. Status: SYGNAŁ.
- 50 leadów: 0,76–1,35×. Status: zwykle ROZSTRZYGNIĘTE dla różnic ok. 50% i więcej.

## Przykład rozumowania (skrót, dane fikcyjne, branża spoza zestawów testowych)

Dane: szkoła językowa, 14 dni, budżet 60 zł dziennie, 4 reklamy.
- A „Grupa do 6 osób, po 18:00” (statyka): 420 zł, 9 leadów, CPL 47 zł, 4 zapisy na lekcję próbną.
- B „Lekcja próbna bez opłat” (statyka): 310 zł, 12 leadów, CPL 26 zł, 1 zapis.
- C lektor mówi o metodzie (wideo 30 s): 90 zł, 1 lead, hook rate 31% (2900 wyświetleń).
- D opinia kursantki (statyka): 20 zł, 0 leadów.

Rozumowanie:
- B ma najniższy CPL, ale 1 zapis na 12 leadów; A: 4 na 9. Jakość wskazuje na A mimo wyższego CPL. Próba mała (SYGNAŁ), ale kierunek spójny z mechanizmem: „bez opłat” przyciąga łowców darmowych rzeczy.
- C: 90 zł to ok. 2× docelowego CPL; hook rate dobry na tle konta. Status: ZA MAŁO DANYCH dla CPL. Decyzja: CZEKAJ.
- D: 20 zł wydatku. Nieprzetestowana, nie przegrana. Meta nie dała jej budżetu (predykcja). Decyzja: zostaw w zestawie albo sprawdź ją w następnej partii jako wideo z tą samą kursantką.
- Decyzje: ZOSTAW A, B zostaw na razie, ale w następnej partii zastąp kątem kwalifikującym (cena i warunek), C CZEKAJ do wydania ok. 150 zł, D zostaw.
- Następna partia: I3 format dla A (wideo z lektorem 15 s: „grupa do 6 osób”), I5 nowy kąt „ile kosztuje miesiąc nauki i co w tym jest” (cena jako filtr), I4 segment rodzice nastolatków (jeśli oferta obejmuje młodzież).

## Częste pułapki

- Ocena po 2–3 dniach.
- Wyłączanie reklam, które nie dostały budżetu.
- Wybór „zwycięzcy” po najniższym CPL bez danych o jakości.
- Poprawianie tekstu działającej reklamy (reset uczenia).
- Nowe warianty tego samego kąta, gdy problemem jest nasycenie grupy lub formularz.
- Obwinianie „algorytmu”, gdy CPM konta rośnie sezonowo.
