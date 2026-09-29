import {FPS} from './theme';

const s = (sec: number) => Math.round(sec * FPS);

// Scene boundaries (frames). Scenes overlap by OVERLAP for soft handoffs.
export const OVERLAP = 6;
export const SCENES = {
  hook: {from: 0, dur: s(2.6)},
  wait: {from: s(2.6), dur: s(2.8)},
  keratin: {from: s(5.4), dur: s(3.4)},
  choice: {from: s(8.8), dur: s(3.0)},
  price: {from: s(11.8), dur: s(3.2)},
  chat: {from: s(15.0), dur: s(3.4)},
  end: {from: s(18.4), dur: s(2.6)},
};
export const TOTAL = s(21.0);
