#!/usr/bin/env bash
# Pre-renders blurred, darkened 4:5 backgrounds for every clip/still used by ClipBox.
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p public/assets/blur
for f in public/assets/v*.mp4; do
  b=$(basename "${f%.mp4}")
  ffmpeg -nostdin -v error -y -i "$f" -vf "scale=270:270,gblur=sigma=14,eq=brightness=-0.22:saturation=1.3,scale=540:676:flags=bicubic" -an -c:v libx264 -preset veryfast -crf 24 -pix_fmt yuv420p "public/assets/blur/$b.mp4"
done
for f in public/assets/s5_thumbs.png public/assets/s7_peek.png; do
  b=$(basename "${f%.png}")
  convert "$f" -resize 270x270 -blur 0x14 -modulate 55,130 -resize 540x676! -quality 85 "public/assets/blur/$b.jpg"
done
ls -la public/assets/blur
