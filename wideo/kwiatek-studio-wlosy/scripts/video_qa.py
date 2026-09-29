"""QA helper: contact sheets, metadata and loudness for a rendered MP4.

Usage: python3 scripts/video_qa.py out/preview.mp4 planning/qa
Uses the ffmpeg/ffprobe bundled with Remotion (npx remotion ffmpeg) + Pillow.
"""
import json
import re
import shutil
import subprocess
import sys
from pathlib import Path

from PIL import Image

src, out = Path(sys.argv[1]), Path(sys.argv[2] if len(sys.argv) > 2 else 'planning/qa')
out.mkdir(parents=True, exist_ok=True)
FF = ['npx', 'remotion', 'ffmpeg', '-hide_banner', '-v', 'error']
FP = ['npx', 'remotion', 'ffprobe', '-v', 'error']


def frames(rate, dur, name):
    d = out / f'_{name}'
    shutil.rmtree(d, ignore_errors=True)
    d.mkdir()
    args = FF + ['-i', str(src)] + (['-t', str(dur)] if dur else []) + ['-r', str(rate), '-vf', 'scale=270:-2', str(d / '%04d.jpg')]
    subprocess.run(args, check=True)
    return sorted(d.glob('*.jpg')), d


def sheet(paths, cols, dest, label_every=None, rate=1):
    ims = [Image.open(p) for p in paths]
    w, h = ims[0].size
    rows = (len(ims) + cols - 1) // cols
    s = Image.new('RGB', (w * cols, h * rows), 'white')
    for i, im in enumerate(ims):
        s.paste(im, ((i % cols) * w, (i // cols) * h))
    s.save(dest, quality=88)


meta = subprocess.run(FP + ['-show_entries', 'format=duration:stream=codec_name,width,height,r_frame_rate,sample_rate,channels', '-of', 'default=nw=1', str(src)], capture_output=True, text=True).stdout
(out / 'metadata.txt').write_text(meta)

hook, d1 = frames(10, 3, 'hook')
sheet(hook, 6, out / 'hook_contact_sheet.jpg')
full, d2 = frames(1, None, 'full')
sheet(full, 7, out / 'contact_sheet_1fps.jpg')
shutil.rmtree(d1)
shutil.rmtree(d2)

r = subprocess.run(FF[:-2] + ['-v', 'info', '-i', str(src), '-af', 'loudnorm=I=-14:TP=-1:print_format=json', '-f', 'null', '-'], capture_output=True, text=True)
m = re.search(r'\{[^{}]*"input_i"[^{}]*\}', r.stderr, re.S)
loud = json.loads(m.group(0)) if m else {}
txt = f"integrated LUFS: {loud.get('input_i')}\ntrue peak dBTP: {loud.get('input_tp')}\nLRA: {loud.get('input_lra')}\n"
(out / 'loudness.txt').write_text(txt)
print(meta + txt)
