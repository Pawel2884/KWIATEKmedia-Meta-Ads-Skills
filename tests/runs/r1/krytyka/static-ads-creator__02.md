# Ocena wyniku skilla static-ads-creator

## 1. Zrozumiałość w 2 sekundy
OK. Każda statyka ma jeden nagłówek + max 2 linie wsparcia, hierarchia jasna (nagłówek → dla kogo/cena → logo). Statyka 3 z ceną „180 zł” jako pierwszym elementem to dobry hook kwalifikujący.

## 2. Jeden główny komunikat
OK. Brak ozdobników, każda statyka ma jedno zdanie „Główny komunikat” i grafika go nie rozmywa dodatkowymi elementami.

## 3. Język
OK, z jednym zastrzeżeniem kosmetycznym. Teksty są rzeczowe, krótkie zdania, brak sloganów. Formy neutralne zachowane tam, gdzie to ważne („pracujących przy biurku”, „Skontaktuj się”). „Zespół tworzy 3 fizjoterapeutów” to standardowy rodzaj męskoosobowy dla nieznanej płci zespołu — nie traktuję jako błąd.

PROBLEM (drobny): „plan terapii dopasowany do sytuacji pacjenta” (statyka 2, Primary Text) — brzmi jak doklejony frazes marketingowy, którego nie ma w briefie.

## 4. Wierność faktom
Prawie OK, jedno dopowiedzenie.
- PROBLEM: „plan terapii dopasowany do sytuacji pacjenta” — brief mówi tylko „plan terapii”, słowo „dopasowany” to dodana obietnica personalizacji, niepotwierdzona w briefie.
- Reszta liczb (180 zł, 60 min, 3 dni robocze, ul. Hetmańska, 3 fizjoterapeutów, 60 min badanie+plan) — zgodna z briefem, bez zmyśleń jednostek czy zakresów.

## 5. Różnorodność strategiczna
PROBLEM. Trzy kąty (kwalifikacja/biurko, proces, cena) różnią się mechanizmem i formatem (S2/S8/S12), to realna różnorodność. Ale:
- Brief wymienia trzy grupy pacjentów: bóle kręgosłupa (biurko), urazy sportowe, rehabilitacja pooperacyjna. Tylko pierwsza grupa dostaje własną, dedykowaną statykę „dla kogo”. Urazy sportowe i rehabilitacja pooperacyjna są zepchnięte do wspólnej reklamy cenowej (statyka 3) jako dodatek, a nie osobny kąt kwalifikacyjny — to brakujący, oczywisty kierunek (pacjent po operacji ortopedycznej to często ciepły lead ze skierowaniem, wysoka gotowość zakupowa, a nie dostaje własnego „K12”).
- Wszystkie trzy statyki mają identyczny layout wizualny (to samo tło #F4F1EC, ten sam akcent #2F6F5E, ten sam układ nagłówek-góra/zdjęcie-dół, ten sam font). Różnorodność jest więc głównie tekstowa, nie wizualna — utrudni to odczytanie w teście, czy wynik zależy od kąta czy od kreacji.

## 6. Jakość leadów
OK. Cena podana wprost (pre-kwalifikacja), konkretny „dla kogo” w statyce 1, jasny proces w statyce 2 — to filtruje przypadkowych klikaczy, nie przyciąga tanich ciekawskich.

## 7. Zgodność
Częściowo OK, jeden istotny problem.
- OK: poprawnie zidentyfikowano ustawę o działalności leczniczej (art. 14) i ton informacyjny zamiast sprzedażowego; świadomie pominięto opinie Google w reklamie; brak superlatywów, brak obietnic efektu, brak „promocji”/przekreślonych cen.
- PROBLEM (ryzyko): headline „Fizjoterapia kręgosłupa lędźwiowego i szyjnego” + zdjęcie zabiegu na karku w statyce 1, oraz sekcja „[SUBJECT] physiotherapist's hands performing manual therapy on a seated client's neck” — połączenie nazwania dolegliwości z obrazem osoby poddawanej zabiegowi na tę dolegliwość jest w strefie ryzyka polityki Meta o cechach osobistych (sugerowanie stanu zdrowia odbiorcy). Framing trzecioosobowy („Gabinet zajmuje się…”, nie „Czy Ty masz ból?”) obniża ryzyko, ale nie eliminuje go całkowicie — moduł Zdrowie bywa flagowany mimo poprawnej gramatyki, głównie przez samo zestawienie tekst+obraz. Warto to przetestować z rezerwowym wariantem grafiki bez zdjęcia karku (np. sam gabinet) na wypadek odrzucenia.

## 8. Praktyczność
OK z zastrzeżeniem. Format czytelny na telefonie, długości tekstów rozsądne, wersje 4:5 i 9:16 przemyślane. Brakujący numer budynku i link do formularza są jawnie zaznaczone jako „do uzupełnienia” — czyli wynik nie jest w 100% gotowy do wdrożenia bez tego uzupełnienia (to nie wina skilla, ale ogranicza natychmiastową wdrażalność).

## 9. Specyfika skilla (static-ads-creator)
OK. Każdy prompt graficzny zawiera scenę, postać, emocję, kompozycję, hook wizualny, krój/rozmiar/kolor czcionki, pozycję tekstu i cel psychologiczny — zgodnie z wymogiem. Prompty graficzne dobrze wymuszają realizm i brak tekstu/logo w generowanym obrazie.

---

**WERDYKT: DOBRE Z POPRAWKAMI**

**TOP 3 problemy wg wpływu na wynik biznesowy:**
1. Brak dedykowanej statyki dla pacjentów po zabiegach ortopedycznych/urazach sportowych — to prawdopodobnie najcieplejszy segment (skierowania, ból ostry, gotowość do zapłacenia), a dostał tylko rolę dodatku w reklamie cenowej zamiast własnego kąta kwalifikacyjnego.
2. Ryzyko zgodności Meta przy statyce 1 (nazwanie dolegliwości + zdjęcie zabiegu na tę dolegliwość) — realna szansa na odrzucenie reklamy lub ograniczenie konta, warto mieć wariant zapasowy.
3. Wizualna jednolitość wszystkich trzech kreacji (ten sam layout/paleta/font) utrudni odczytanie wyników testu A/B/C — nie będzie wiadomo, czy różnice w CTR/CPL wynikają z kąta komunikatu czy z samej grafiki.

**Systemowość:** Punkty 2 i 3 wyglądają na systemowe — szablon kolorystyczno-layoutowy (#F4F1EC/#2F6F5E/Inter Bold/nagłówek-góra) i sposób radzenia sobie z modułem Zdrowie to reguły skilla powtórzone we wszystkich trzech statykach, więc pojawią się w każdym kolejnym briefie z tej branży, dopóki skill ich nie zróżnicuje. Punkt 1 (brakujący kąt dla rehabilitacji pooperacyjnej) to jednorazowy błąd doboru kątów przy tym konkretnym briefie, ale wynika z tego samego mechanizmu, który nie wymusza „jeden kąt = jedna grupa docelowa z briefu” — więc też może się powtarzać.
