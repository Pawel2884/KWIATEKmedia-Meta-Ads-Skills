#!/usr/bin/env bash
# Final render: 1080x1350 (4:5), 30 fps, H.264 + AAC. Run from the project root.
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p out
npx remotion render src/index.ts Promo out/claude-w-praktyce-promo-4x5.mp4 \
  --codec=h264 --crf=18 --audio-codec=aac --audio-bitrate=192k \
  --concurrency="${REMOTION_CONCURRENCY:-2}" --log=info
ffprobe -v error -show_entries format=duration:stream=codec_name,width,height,r_frame_rate -of default=nw=1 out/claude-w-praktyce-promo-4x5.mp4
