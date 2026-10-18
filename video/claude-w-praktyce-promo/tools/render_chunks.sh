#!/usr/bin/env bash
# Renders the Promo in frame chunks (each fits a 15 minute sandbox window), then stitches
# the chunks losslessly and muxes the music. Usage: tools/render_chunks.sh <chunkIndex> or "stitch".
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p out/chunks
TOTAL=1800
SIZE=${CHUNK_SIZE:-450}
if [ "$1" = "stitch" ]; then
  : > out/chunks/list.txt
  for f in $(ls out/chunks/part_*.mp4 | sort); do echo "file '$(pwd)/$f'" >> out/chunks/list.txt; done
  ffmpeg -nostdin -v error -y -f concat -safe 0 -i out/chunks/list.txt -c copy out/chunks/video_only.mp4
  # music with the same fade envelope as in the composition (0.9 gain, fade-in 20 frames, fade-out 40 frames)
  ffmpeg -nostdin -v error -y -i out/chunks/video_only.mp4 -i public/assets/music.wav \
    -filter_complex "[1:a]volume=0.9,afade=t=in:st=0:d=0.667,afade=t=out:st=58.667:d=1.333,atrim=0:60[a]" \
    -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -shortest -movflags +faststart out/claude-w-praktyce-promo-4x5.mp4
  exit 0
fi
i=$1
START=$((i*SIZE)); END=$(( (i+1)*SIZE - 1 )); [ $END -ge $TOTAL ] && END=$((TOTAL-1))
npx remotion render src/index.ts Promo "out/chunks/part_$(printf %02d $i).mp4" \
  --frames="$START-$END" --codec=h264 --crf=18 --muted \
  --concurrency="${REMOTION_CONCURRENCY:-2}" --log=verbose 2>&1 | grep -vE "^Rendered [0-9]+/" || true
ffprobe -v error -count_frames -select_streams v:0 -show_entries stream=nb_read_frames -of csv=p=0 "out/chunks/part_$(printf %02d $i).mp4"
