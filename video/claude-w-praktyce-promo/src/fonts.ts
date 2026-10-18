import {continueRender, delayRender, staticFile} from 'remotion';

let loaded = false;
export const ensureFont = () => {
  if (loaded || typeof document === 'undefined') return;
  loaded = true;
  const handle = delayRender('Loading Montserrat');
  const face = new FontFace('Montserrat', `url(${staticFile('fonts/Montserrat-ExtraBold.ttf')})`, {
    weight: '800',
    style: 'normal',
  });
  face
    .load()
    .then((f) => {
      (document as any).fonts.add(f);
      continueRender(handle);
    })
    .catch((e) => {
      console.error('font load failed', e);
      continueRender(handle);
    });
};
