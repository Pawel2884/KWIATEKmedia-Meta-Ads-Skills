#!/usr/bin/env bash
# Emits a single bash script that recreates src/ and tools/ inside the Higgsfield sandbox.
set -e
cd "$(dirname "$0")/.."
echo 'set -e; cd /home/user/promo; mkdir -p src tools public/assets public/fonts'
for f in src/*.ts src/*.tsx tools/make_music.py tools/stills.mjs tools/render.sh tsconfig.json; do
  echo "cat > $f <<'__EOF_$$'"
  cat "$f"
  echo "__EOF_$$"
done
