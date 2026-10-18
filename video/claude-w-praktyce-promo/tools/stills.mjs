// Renders a handful of frames of the Promo composition to PNG for visual QA.
// Usage: node tools/stills.mjs out/stills 10 200 400 ...
import {bundle} from '@remotion/bundler';
import {renderStill, selectComposition} from '@remotion/renderer';
import path from 'node:path';
import fs from 'node:fs';

const [outDir, ...frameArgs] = process.argv.slice(2);
const frames = frameArgs.map(Number);
fs.mkdirSync(outDir, {recursive: true});
const serveUrl = await bundle({entryPoint: path.resolve('src/index.ts'), publicDir: path.resolve('public')});
const composition = await selectComposition({serveUrl, id: 'Promo'});
for (const f of frames) {
  const output = path.join(outDir, `f${String(f).padStart(4, '0')}.png`);
  await renderStill({composition, serveUrl, output, frame: f, imageFormat: 'png'});
  console.log('still', f, output);
}
