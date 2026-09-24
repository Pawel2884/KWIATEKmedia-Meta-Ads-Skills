#!/usr/bin/env bash
# Uruchamia macierz testów: każdy skill na kilku przypadkach, w prawdziwej sesji Claude z załadowanym pluginem.
# Użycie: tests/run_matrix.sh <nazwa_rundy> [równoległość] [filtr_skilla]
# Wyniki: tests/runs/<runda>/<skill>__<przypadek>.md
set -u
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ROUND="${1:?podaj nazwę rundy, np. r1}"
PAR="${2:-4}"
FILTER="${3:-}"
OUT="$ROOT/tests/runs/$ROUND"
PLUGIN="$ROOT/plugins/kwiatekmedia-meta-ads"
C="$ROOT/tests/cases"
mkdir -p "$OUT"

# skill|przypadek|plik_wejścia|dopisek do promptu
MATRIX=$(cat <<EOF
meta-creative-strategist|01|$C/01-b2b-flota.md|
meta-creative-strategist|03|$C/03-droga-pompy-ciepla.md|
meta-creative-strategist|05|$C/05-zaufanie-upadlosc.md|
static-ads-creator|02|$C/02-lokalna-fizjoterapia.md|Zrób 3 różne statyki.
static-ads-creator|04|$C/04-ecommerce-krzeslo.md|Zrób 3 różne statyki.
static-ads-creator|06|$C/06-agencja-kwiatekmedia.md|Zrób 2 różne statyki.
meta-ad-copy|01|$C/01-b2b-flota.md|Napisz teksty do 3 reklam o różnych kątach i teksty formularza.
meta-ad-copy|03|$C/03-droga-pompy-ciepla.md|Napisz teksty do 3 reklam o różnych kątach i teksty formularza.
meta-ad-copy|05|$C/05-zaufanie-upadlosc.md|Napisz teksty do 2 reklam i teksty formularza.
video-ad-script|02|$C/02-lokalna-fizjoterapia.md|Scenariusz wideo 15-20 s z fizjoterapeutą.
video-ad-script|04|$C/04-ecommerce-krzeslo.md|Dwa scenariusze: krótki 15 s i dłuższy 30-40 s.
video-ad-script|03|$C/03-droga-pompy-ciepla.md|Scenariusz talking head z właścicielem, 30-45 s.
hook-generator|06|$C/06-agencja-kwiatekmedia.md|
hook-generator|01|$C/01-b2b-flota.md|
hook-generator|05|$C/05-zaufanie-upadlosc.md|
creative-auditor|a1|$C/audyt/a1-slaba-pompy.md|
creative-auditor|a2|$C/audyt/a2-dobra-fizjo.md|
creative-auditor|a3|$C/audyt/a3-przeladowana-krzeslo.md|
creative-diversification|03|$C/03-droga-pompy-ciepla.md|
creative-diversification|04|$C/04-ecommerce-krzeslo.md|
creative-diversification|06|$C/06-agencja-kwiatekmedia.md|
campaign-creative-planner|01|$C/01-b2b-flota.md|
campaign-creative-planner|02|$C/02-lokalna-fizjoterapia.md|
campaign-creative-planner|04|$C/04-ecommerce-krzeslo.md|
iteration-engine|w1|$C/wyniki/w1-za-malo-danych.md|
iteration-engine|w2|$C/wyniki/w2-jasne-sygnaly.md|
iteration-engine|w3|$C/wyniki/w3-zmeczenie.md|
meta-ads-master|02|$C/02-lokalna-fizjoterapia.md|Przygotuj cały pakiet kampanii.
meta-ads-master|05|$C/05-zaufanie-upadlosc.md|Przygotuj cały pakiet kampanii.
meta-ads-master|01|$C/01-b2b-flota.md|Przygotuj cały pakiet kampanii.
EOF
)

run_one() {
  IFS='|' read -r skill case file extra <<< "$1"
  out="$OUT/${skill}__${case}.md"
  [ -s "$out" ] && { echo "skip $skill $case"; return; }
  brief="$(cat "$file")"
  prompt="/kwiatekmedia-meta-ads:${skill} ${extra}

${brief}"
  start=$(date +%s)
  ( cd "$(mktemp -d)" && timeout 2400 claude -p "$prompt" \
      --plugin-dir "$PLUGIN" \
      --allowedTools "Read Glob Grep Skill" \
      --disallowedTools "WebSearch WebFetch" > "$out.tmp" 2>&1 )
  mv "$out.tmp" "$out"
  echo "done $skill $case in $(( $(date +%s) - start ))s ($(wc -c < "$out") B)"
}
export -f run_one
export OUT PLUGIN

echo "$MATRIX" | grep -v '^$' | grep -E -- "${FILTER}" | tr '\n' '\0' | xargs -0 -P "$PAR" -I{} bash -c 'run_one "$@"' _ {}
echo "ROUND $ROUND FINISHED"
