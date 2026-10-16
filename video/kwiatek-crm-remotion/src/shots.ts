/**
 * Metadane zrzutów ekranu i maski kwot w układzie pikseli ŹRÓDŁOWYCH.
 * Maski są renderowane wewnątrz tego samego kontenera co obraz, więc
 * poruszają się razem z nim przy zoomie i przesunięciach.
 */
export type Rect = { x: number; y: number; w: number; h: number };

export type ShotDef = {
  file: string;
  w: number;
  h: number;
  masks: Rect[];
};

export const shots = {
  dzisiaj: { file: "zrzuty/crm_01_dzisiaj.jpg", w: 1348, h: 926, masks: [] },
  klienci: { file: "zrzuty/crm_02_klienci.jpg", w: 1348, h: 926, masks: [] },
  kartaFirmy: { file: "zrzuty/crm_03_karta_firmy.jpg", w: 1348, h: 926, masks: [
    { x: 562, y: 676, w: 108, h: 22 },
  ] },
  kartaKontaktu: {
    file: "zrzuty/crm_04_karta_kontaktu.jpg",
    w: 1348,
    h: 926,
    masks: [
      { x: 948, y: 324, w: 86, h: 24 }, // notatka: kwota oferty
      { x: 1008, y: 826, w: 92, h: 22 }, // szansa: wartość roczna
      { x: 562, y: 635, w: 108, h: 22 }, // tło (przyciemnione): wartość roczna
    ],
  },
  tablica: {
    file: "zrzuty/crm_06_tablica_sprzedazy.jpg",
    w: 1348,
    h: 926,
    masks: [
      { x: 272, y: 452, w: 112, h: 20 }, // nagłówek kolumny Nowa
      { x: 818, y: 452, w: 120, h: 20 }, // nagłówek kolumny Rozpoznanie
      { x: 280, y: 562, w: 110, h: 24 }, // karta Forma Medical
      { x: 826, y: 562, w: 110, h: 24 }, // karta Apex Group
      { x: 826, y: 759, w: 110, h: 24 }, // karta Nova Estate
    ],
  },
  opieka: {
    file: "zrzuty/crm_07_opieka.jpg",
    w: 1348,
    h: 926,
    masks: [
      { x: 740, y: 606, w: 92, h: 24 },
      { x: 740, y: 674, w: 92, h: 24 },
      { x: 740, y: 742, w: 92, h: 24 },
    ],
  },
  wspolpraca: {
    file: "zrzuty/crm_08_szczegoly_wspolpracy.jpg",
    w: 1348,
    h: 926,
    masks: [
      { x: 1008, y: 260, w: 84, h: 24 }, // stawka
      { x: 1008, y: 458, w: 84, h: 24 }, // wpłaty
      { x: 1176, y: 876, w: 86, h: 24 }, // historia stawek
    ],
  },
  kalendarz: {
    file: "zrzuty/crm_09_kalendarz.jpg",
    w: 1363,
    h: 936,
    masks: [{ x: 742, y: 433, w: 124, h: 32 }], // notatka czwartek z kwotą
  },
  kolejka: {
    file: "zrzuty/crm_10_kolejka_telefonow.jpg",
    w: 1348,
    h: 926,
    masks: [{ x: 344, y: 732, w: 90, h: 22 }], // druga karta: kwota oferty
  },
  zamkniecie: { file: "zrzuty/crm_13_zamkniecie_dnia.jpg", w: 1363, h: 936, masks: [] },
} satisfies Record<string, ShotDef>;
