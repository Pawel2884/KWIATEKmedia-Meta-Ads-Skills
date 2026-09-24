<!-- WYGENEROWANE z shared/karta-oferty.md przez scripts/build.py. Nie edytuj tutaj, edytuj shared/. -->
# Karta Oferty

Karta Oferty to wspólne wejście dla wszystkich skilli. Budujesz ją z tego, co podał Paweł, i z logicznych wniosków. Każde pole oznacz: `podane`, `wywnioskowane` albo `brak`.

## Spis treści
1. Pola karty
2. Jak wnioskować
3. Flagi branżowe (włączają moduły zgodności)
4. Minimalny zestaw, bez którego nie da się pracować
5. Wzór wypełnionej karty (skrót)

## 1. Pola karty

**Oferta**
- Co to jest (jednym zdaniem, słowami klienta, nie branżowym żargonem)
- Co dokładnie dostaje osoba po zgłoszeniu albo zakupie (wycena, pomiar, konsultacja, produkt)
- Cena, widełki albo „od” (brutto dla konsumentów, netto w B2B)
- Proces po zgłoszeniu: kto się odzywa, jak, w jakim czasie, w jakich godzinach
- Czego firma NIE robi

**Odbiorcy**
- Segmenty (2–4): kto kupuje, w jakiej sytuacji (rola, typ domu, typ firmy, etap życia bez cech wrażliwych)
- Kto NIE jest klientem (antypersona): najczęstsze „złe leady”
- Obszar działania (miasto, promień, województwa, cała Polska)
- Momenty i wyzwalacze: kiedy ktoś zaczyna szukać (rachunek, sezon, awaria, przeprowadzka, nowy przepis, termin)

**Problem i wartość**
- Problemy (językiem klienta, konkretne sytuacje)
- Pragnienia i rezultat (co będzie inaczej po)
- Mechanizm: dlaczego to działa i czym różni się od alternatyw (inna firma, zrób to sam, nic nie robić)
- Obiekcje: cena, czas, ryzyko, zaufanie, „to nie dla mnie”, „później”
- Koszt zaniechania (tylko jeśli da się go uczciwie opisać)

**Dowody (inwentarz)**
- Liczby (z źródłem): realizacje, lata, klienci, oceny z liczbą opinii i platformą
- Opinie (dosłowne cytaty z imieniem i miejscowością, za zgodą)
- Realizacje, zdjęcia, wideo, case study z liczbami
- Uprawnienia, certyfikaty, autoryzacje (tylko posiadane)
- Gwarancje z warunkami
- Twarz marki (właściciel, ekspert, ekipa)

**Kontekst kampanii**
- Cel: leady (formularz), wiadomości, połączenia, sprzedaż w sklepie, ruch
- Budżet (dzienny albo miesięczny)
- Dotychczasowe wyniki i wnioski (co działało, co nie, jakość leadów)
- Definicja dobrego leada (od klienta albo wywnioskowana)
- Zasoby: zdjęcia, wideo, logo, kolory, możliwość nagrania
- Rozpoznawalność marki (nowa, lokalnie znana, znana)
- Forma zwracania się: Ty (domyślnie) albo Państwo (prawo, medycyna, finanse premium, klienci 60+, formalne B2B)
- Konkurencja i typowe komunikaty w branży (jeśli znane)

## 2. Jak wnioskować

Wnioskuj, gdy wniosek jest logiczny i nie wymaga faktów, których nie masz:
- szkoła językowa w Lublinie → obszar: Lublin i okolice, odbiorcy: dorośli z okolicy i rodzice dzieci;
- „klimatyzacja do mieszkań” → segment: właściciele mieszkań, moment: pierwsze upały, remont, przeprowadzka;
- „biuro rachunkowe dla spółek” → decydent: właściciel albo członek zarządu;
- cena podana, proces nie → proces: `brak`, ale nie wymyślaj czasu kontaktu.

Nie wnioskuj liczb, opinii, gwarancji, czasu kontaktu, cen, wyników. To zawsze `[UZUPEŁNIJ: …]`.

## 3. Flagi branżowe

Ustaw flagę, gdy oferta dotyczy danej kategorii. Flaga włącza sekcję w `zgodnosc.md`.

| Flaga | Kiedy |
|---|---|
| ZDROWIE | gabinety, fizjoterapia, stomatologia, medycyna estetyczna, dietetyka, suplementy, psychoterapia |
| WYROB-MEDYCZNY | reklama urządzenia lub preparatu będącego wyrobem medycznym albo zabiegu, który go eksponuje |
| FINANSE-KREDYT | kredyt, raty, leasing konsumencki, pożyczki, konsolidacja, finansowanie zakupu |
| PRAWO | kancelarie, radcy, adwokaci, upadłość, odszkodowania, frankowicze |
| NIERUCHOMOSCI | sprzedaż, wynajem, pośrednictwo, deweloperzy, kredyt hipoteczny |
| PRACA | rekrutacja, oferty pracy, szkolenia certyfikujące zawód |
| OZE-EKO | fotowoltaika, pompy ciepła, termomodernizacja, każde twierdzenie „eko” |
| PROMOCJA-CENOWA | obniżka ceny, przekreślona cena, „-30%” |
| DOTACJE | programy publiczne (np. Czyste Powietrze, Mój Prąd) |
| AI-W-KREACJI | generowane osoby, sceny, głos |
| B2B | odbiorcą jest firma (ceny netto, e-mail firmowy, decydent) |

## 4. Minimalny zestaw

Bez tych trzech informacji nie twórz reklam, tylko zapytaj:
1. Co jest sprzedawane (albo co dostaje osoba po zgłoszeniu).
2. Dla kogo (albo da się to logicznie wywnioskować).
3. Jaka akcja jest celem (formularz, wiadomość, telefon, zakup).

Wszystko inne da się wywnioskować, oznaczyć jako `[UZUPEŁNIJ]` albo przyjąć jako założenie.

## 5. Wzór (skrót)

```
KARTA OFERTY: DachPro, wymiana pokryć dachowych (przykład)
Oferta: wymiana pokrycia dachu z obróbkami i rynnami (podane)
Po zgłoszeniu: oględziny dachu i wycena na piśmie w 3 dni robocze (podane)
Cena: od 180 zł/m² z materiałem (podane)
Segmenty: właściciele domów z dachem starszym niż 25 lat (podane); osoby po zakupie używanego domu (wywnioskowane)
Antypersona: pojedyncze naprawy, dachy płaskie (podane)
Obszar: Lublin i 60 km (podane)
Momenty: przeciek po ulewie, przegląd przed zimą, zakup domu (wywnioskowane)
Mechanizm: własna ekipa, termin startu w umowie, zdjęcia z każdego etapu (podane)
Dowody: 1200 dachów od 2015 (podane); opinie: brak
Flagi: brak
Braki: [UZUPEŁNIJ: opinie klientów], [UZUPEŁNIJ: czas kontaktu po zgłoszeniu]
```
