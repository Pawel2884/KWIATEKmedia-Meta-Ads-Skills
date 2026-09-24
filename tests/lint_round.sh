#!/usr/bin/env bash
# Lint całej rundy: tests/lint_round.sh <runda>. Wypisuje liczbę problemów per kategoria i per plik.
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
for f in "$ROOT"/tests/runs/"$1"/*.md; do
  n=$(basename "$f" .md); c=${n##*__}
  b=$(ls "$ROOT"/tests/cases/${c}-*.md "$ROOT"/tests/cases/*/${c}-*.md 2>/dev/null | head -1)
  python3 "$ROOT/tests/lint.py" "$f" --brief "$b" --json | python3 -c "
import json,sys,collections
d=json.load(sys.stdin); c=collections.Counter(i[0] for i in d['issues'])
print('$n', d['fields'], dict(c))"
done
