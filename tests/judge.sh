#!/usr/bin/env bash
# Niezależny krytyk: osobna sesja Claude bez pluginu ocenia każdy wynik rundy według tests/rubryka-krytyka.md.
# Użycie: tests/judge.sh <runda> [równoległość]
# Wyniki: tests/runs/<runda>/krytyka/<skill>__<przypadek>.md
set -u
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ROUND="${1:?podaj nazwę rundy}"
PAR="${2:-4}"
DIR="$ROOT/tests/runs/$ROUND"
mkdir -p "$DIR/krytyka"
export ROOT DIR

judge_one() {
  f="$1"; name="$(basename "$f" .md)"; skill="${name%%__*}"; case="${name##*__}"
  out="$DIR/krytyka/$name.md"
  [ -s "$out" ] && return
  brief="$(ls "$ROOT"/tests/cases/${case}-*.md "$ROOT"/tests/cases/*/${case}-*.md 2>/dev/null | head -1)"
  prompt="$(cat "$ROOT/tests/rubryka-krytyka.md")

SKILL: $skill

BRIEF:
$(cat "$brief")

WYNIK SKILLA:
$(cat "$f")"
  ( cd "$(mktemp -d)" && timeout 1200 claude -p "$prompt" --disallowedTools "WebSearch WebFetch Bash Read Write Edit Glob Grep Skill Agent" > "$out.tmp" 2>&1 )
  mv "$out.tmp" "$out"
  echo "judged $name"
}
export -f judge_one
ls "$DIR"/*.md | tr '\n' '\0' | xargs -0 -P "$PAR" -I{} bash -c 'judge_one "$@"' _ {}
echo "JUDGE $ROUND FINISHED"
