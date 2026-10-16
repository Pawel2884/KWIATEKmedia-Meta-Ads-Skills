import { continueRender, delayRender, staticFile } from "remotion";

const weights: Array<[number, string]> = [
  [400, "Inter-Regular.otf"],
  [500, "Inter-Medium.otf"],
  [600, "Inter-SemiBold.otf"],
  [700, "Inter-Bold.otf"],
  [800, "Inter-ExtraBold.otf"],
];

let loaded = false;

export const loadFonts = () => {
  if (loaded || typeof document === "undefined") return;
  loaded = true;
  const handle = delayRender("Ładowanie fontu Inter");
  Promise.all(
    weights.map(([weight, file]) => {
      const face = new FontFace(
        "Inter Local",
        `url(${staticFile(`fonts/${file}`)})`,
        { weight: String(weight) },
      );
      return face.load().then((f) => document.fonts.add(f));
    }),
  )
    .then(() => continueRender(handle))
    .catch((e) => {
      console.error(e);
      continueRender(handle);
    });
};
