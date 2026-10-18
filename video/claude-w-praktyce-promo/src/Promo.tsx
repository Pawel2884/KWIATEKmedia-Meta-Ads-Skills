import React from 'react';
import {AbsoluteFill, Audio, Sequence, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {ClipBox} from './Clip';
import {Caption, Tag} from './Caption';
import {AuthorScene, Chips, EndCard, Flash, NumbersScene} from './Scenes';
import {ensureFont} from './fonts';
import {C} from './theme';

export const FPS = 30;

// Scene plan (frames). Every Higgsfield clip is 5.04 s, so clip scenes are exactly 150 frames.
const S = [
  {id: 'hook', len: 150},
  {id: 'problem', len: 150},
  {id: 'peek', len: 120},
  {id: 'turn', len: 150},
  {id: 'dance', len: 150},
  {id: 'solution', len: 150},
  {id: 'numbers', len: 210},
  {id: 'hammock', len: 150},
  {id: 'author', len: 180},
  {id: 'thumbs', len: 120},
  {id: 'wink', len: 150},
  {id: 'end', len: 120},
] as const;
const start = (id: (typeof S)[number]['id']) => {
  let f = 0;
  for (const s of S) {
    if (s.id === id) return f;
    f += s.len;
  }
  return f;
};
const len = (id: (typeof S)[number]['id']) => S.find((s) => s.id === id)!.len;
export const PROMO_DURATION = S.reduce((a, s) => a + s.len, 0);

const Scene: React.FC<{id: (typeof S)[number]['id']; children: React.ReactNode}> = ({id, children}) => (
  <Sequence name={id} from={start(id)} durationInFrames={len(id)} premountFor={15}>
    {children}
  </Sequence>
);

export const Promo: React.FC = () => {
  ensureFont();
  const frame = useCurrentFrame();
  const musicVol = interpolate(frame, [0, 20, PROMO_DURATION - 40, PROMO_DURATION], [0, 0.9, 0.9, 0], {extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{backgroundColor: C.navy}}>
      <Audio src={staticFile('assets/music.wav')} volume={musicVol} />

      <Scene id="hook">
        <ClipBox src="assets/v101_hook.mp4" kind="video" top={40} />
        <Tag text="Kurs online · po polsku" at={4} />
        <Caption at={2} until={62} y={960} lines={[{text: 'STOP.', size: 150, accent: true}]} />
        <Caption at={64} y={930} lines={[{text: 'Ile godzin w tygodniu', size: 66}, {text: 'robisz to samo?', size: 66, accent: true}]} />
      </Scene>

      <Scene id="problem">
        <ClipBox src="assets/v201_desk.mp4" kind="video" top={40} />
        <Flash at={0} />
        <Caption at={0} until={72} y={960} lines={[{text: 'Poniedziałek rano.', size: 60}, {text: 'Raport z pięciu miejsc.', size: 60, accent: true}]} />
        <Caption at={74} y={930} lines={[{text: 'Oferta od zera.', size: 60}, {text: 'Te same maile', size: 60}, {text: 'po raz setny.', size: 60, accent: true}]} />
      </Scene>

      <Scene id="peek">
        <ClipBox src="assets/s7_peek.png" kind="image" top={40} zoom={[1, 1.12]} />
        <Caption at={0} y={900} lines={[{text: 'A gdyby ta robota', size: 64}, {text: 'robiła się sama,', size: 64, accent: true}, {text: 'a Ty tylko sprawdzasz?', size: 64}]} />
      </Scene>

      <Scene id="turn">
        <ClipBox src="assets/v202_coffee.mp4" kind="video" top={40} />
        <Flash at={0} />
        <Caption at={0} until={70} y={940} lines={[{text: 'Oddaj powtarzalną pracę', size: 60}, {text: 'Claude.', size: 90, accent: true}]} />
        <Caption at={72} y={960} lines={[{text: 'Ty wyznaczasz zadanie.', size: 60}, {text: 'Claude je robi.', size: 60, accent: true}]} />
      </Scene>

      <Scene id="dance">
        <ClipBox src="assets/v102_dance.mp4" kind="video" top={40} />
        <Tag text="Efekt" at={2} />
        <Caption at={4} y={930} lines={[{text: 'Odzyskujesz', size: 66}, {text: 'kilkadziesiąt godzin', size: 66, accent: true}, {text: 'tygodniowo.', size: 66}]} />
      </Scene>

      <Scene id="solution">
        <ClipBox src="assets/v203_cards.mp4" kind="video" top={40} />
        <Flash at={0} />
        <Caption at={0} y={70} align="left" lines={[{text: 'Nauczysz Claude:', size: 54, accent: true}]} />
        <Chips at={12} items={['pamiętać Twoją firmę', 'robić raport w poniedziałek o 8:00', 'pisać szkice odpowiedzi do klientów', 'robić oferty według Twojego wzoru', 'zbierać faktury w jeden folder']} />
      </Scene>

      <Scene id="numbers">
        <NumbersScene />
      </Scene>

      <Scene id="hammock">
        <ClipBox src="assets/v204_hammock.mp4" kind="video" top={40} />
        <Flash at={0} />
        <Caption at={0} until={76} y={930} lines={[{text: 'Z tym czasem zrobisz,', size: 62}, {text: 'co chcesz.', size: 62, accent: true}]} />
        <Caption at={78} y={940} lines={[{text: 'Klienci. Rodzina.', size: 62}, {text: 'Albo nic.', size: 62, accent: true}]} />
      </Scene>

      <Scene id="author">
        <AuthorScene />
        <Caption at={6} y={720} lines={[{text: 'Paweł Kwiatek', size: 56}, {text: 'KWIATEKmedia', size: 40}]} />
        <Caption at={40} y={880} lines={[{text: 'Miesiąc pracy', size: 56}, {text: 'zamknięty w jednym kursie.', size: 56, accent: true}]} />
        <Caption at={100} y={1060} lines={[{text: 'Moja agencja działa dokładnie', size: 42}, {text: 'na tym, czego uczę.', size: 42}]} />
      </Scene>

      <Scene id="thumbs">
        <ClipBox src="assets/s5_thumbs.png" kind="image" top={40} zoom={[1, 1.1]} />
        <Caption at={0} y={920} lines={[{text: '14 dni na zwrot.', size: 60, accent: true}, {text: 'Faktura VAT.', size: 60}, {text: 'Dostęp na zawsze.', size: 60}]} />
      </Scene>

      <Scene id="wink">
        <ClipBox src="assets/v206_wink.mp4" kind="video" top={40} />
        <Flash at={0} />
        <Caption at={0} y={930} lines={[{text: 'Kliknij', size: 70, accent: true}, {text: 'i zacznij dziś.', size: 70}]} />
        <Caption at={60} y={1110} lines={[{text: 'Link w poście i w przycisku poniżej', size: 36}]} />
      </Scene>

      <Scene id="end">
        <EndCard />
      </Scene>
    </AbsoluteFill>
  );
};
