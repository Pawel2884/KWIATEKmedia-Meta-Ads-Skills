# 10 — Format pluginu Claude i skilli (Claude Code / Claude Desktop / Cowork / claude.ai) — stan na 2026-09-24

> Plik roboczy (raw) — agent researchowy nr 10. STATUS: GOTOWE.
> Cel: plugin „KWIATEKmedia Meta Ads” (10 skilli) ma się instalować bez problemów w Claude Code, Claude Desktop/Cowork (Windows) i na claude.ai.
> Fragmenty specyfikacji cytowane w oryginale (EN). Wnioski i rekomendacje po polsku.

---

## 0. TL;DR — najważniejsze wymagania

1. **Plugin = katalog z `.claude-plugin/plugin.json`** (jedyne wymagane pole: `name`, kebab-case) + `skills/<nazwa>/SKILL.md`. Wszystkie inne katalogi (skills/, agents/, hooks/) w **korzeniu pluginu**, nie w `.claude-plugin/`.
2. **Marketplace = `.claude-plugin/marketplace.json` w korzeniu repo** (`name`, `owner.name`, `plugins[]` z `name` + `source`). Plugin w tym samym repo: `"source": "./plugins/<plugin>"` (ścieżka względna od korzenia repo, zaczyna się od `./`, bez `..`).
3. **SKILL.md, który ma działać WSZĘDZIE (także jako pojedynczy upload na claude.ai / API)**: frontmatter tylko z pól spec Agent Skills: `name`, `description` (+ opcjonalnie `license`, `compatibility`, `metadata`, `allowed-tools`). Każde inne pole (np. `argument-hint`, `disable-model-invocation`, `when_to_use`) = **twardy błąd uploadu** na claude.ai. W pluginie (Claude Code/Cowork) pola rozszerzone są dozwolone.
4. **Limity**: `name` ≤ 64 znaki, `[a-z0-9-]`, bez `--`, bez myślnika na początku/końcu, = nazwa folderu, bez słów „anthropic”/„claude”; `description` 1–1024 znaki, bez `<` `>`/tagów XML; w Claude Code opis+`when_to_use` ucinany przy 1536 znakach; `compatibility` ≤ 500; body SKILL.md < 500 linii (~< 5000 tokenów); referencje 1 poziom w głąb.
5. **Cowork i claude.ai NIE czytają `~/.claude`** — biorą pluginy/skille z konta claude.ai (**Customize → Plugins / Skills**). Instalacja w CLI ≠ instalacja w Cowork. Pluginy/skille z konta claude.ai synchronizują się do Claude Code w terminalu (v2.1.273+).
6. **Współdzielona wiedza**: w pluginie działa (Anthropic sam używa `../../shared/*.md` i `${CLAUDE_PLUGIN_ROOT}`), ale **pojedynczy skill wgrany jako ZIP na claude.ai musi być samowystarczalny**. Rekomendacja: jedno źródło prawdy `shared/` w repo + skrypt `scripts/build.py`, który kopiuje potrzebne pliki do `skills/<skill>/references/` (kopie commitowane) i buduje ZIP-y. Skrypt przetestowany w tej sesji (sekcja 10).
7. **Testy**: `claude plugin validate . --strict` (marketplace) + `claude plugin validate plugins/<plugin> --strict` + walidacja spec (quick_validate.py / skills-ref) — bo `claude plugin validate` przepuszcza rzeczy, które upload na claude.ai odrzuci (sprawdzone: dwukropek w opisie bez cudzysłowu, BOM). Zachowanie: `claude plugin eval` (v2.1.269+, zużywa limit/API, katalog `evals/<case>/prompt.md` + `graders/*.md`).
8. **Windows**: UTF-8 **bez BOM**, ścieżki z `/`, nazwy plików ASCII, bez symlinków, ZIP nie przez `Compress-Archive` z PowerShell 5.1 (backslashe w ścieżkach), `marketplace add` skrótem `owner/repo` klonuje przez **SSH** — bez klucza SSH użyj pełnego URL `https://…git` albo `CLAUDE_CODE_PLUGIN_PREFER_HTTPS=1`.

---

## 1. Źródła i tryb dostępu

Legenda:
- **[PEŁNY]** — przeczytany pełny tekst strony (pobrany przez `curl` jako surowy Markdown `*.md` z serwera dokumentacji lub HTML→tekst; równoważne pełnemu WebFetch).
- **[WYSZUKIWARKA]** — tylko streszczenie z wyszukiwarki. **W tej sesji brak takich źródeł**: limit WebSearch w sesji był wyczerpany (200/200), wszystkie informacje pochodzą z pełnych tekstów.
- **[TEST]** — własny test lokalny w tej sesji na Claude Code **v2.1.281** (Linux) na prototypie repo w katalogu tymczasowym.
- **Zablokowane**: `agentskills.io` (proxy 403) — spec Agent Skills przeczytany z repo GitHub `agentskills/agentskills` (to samo źródło dokumentu).

### Claude Code docs (code.claude.com)
- [PEŁNY] https://code.claude.com/docs/llms.txt — indeks
- [PEŁNY] https://code.claude.com/docs/en/plugins-reference — schemat plugin.json, ścieżki, zmienne, cache, CLI, wersjonowanie
- [PEŁNY] https://code.claude.com/docs/en/skills — frontmatter, substytucje, wywoływanie, sync z claude.ai, Cowork
- [PEŁNY] https://code.claude.com/docs/en/plugin-marketplaces — marketplace.json, źródła, walidacja, org sync
- [PEŁNY] https://code.claude.com/docs/en/plugin-evals — `claude plugin eval`
- [PEŁNY] https://code.claude.com/docs/en/plugins — tworzenie, `--plugin-dir` (także .zip), `--plugin-url`
- [PEŁNY] https://code.claude.com/docs/en/discover-plugins — instalacja, marketplace add, „Add from claude.ai”
- [PEŁNY] https://code.claude.com/docs/en/desktop — sekcja „Extend Claude Code” (Customize, Cowork, plugin browser)
- [PEŁNY] https://code.claude.com/docs/en/sub-agents — sekcja „Preload skills into subagents”
- [PEŁNY] https://code.claude.com/docs/en/tools-reference — narzędzie `Skill`
- [PEŁNY] https://code.claude.com/docs/en/env-vars — `CLAUDE_CODE_PLUGIN_PREFER_HTTPS`

### claude.com docs (Cowork / Desktop / skills)
- [PEŁNY] https://claude.com/docs/llms.txt — indeks
- [PEŁNY] https://claude.com/docs/cowork/overview
- [PEŁNY] https://claude.com/docs/cowork/guide/plugins — instalacja pluginów w Cowork, limity
- [PEŁNY] https://claude.com/docs/plugins/overview
- [PEŁNY] https://claude.com/docs/plugins/submit
- [PEŁNY] https://claude.com/docs/skills/overview
- [PEŁNY] https://claude.com/docs/skills/how-to — struktura ZIP skilla
- [PEŁNY] https://claude.com/docs/third-party/claude-desktop/extensions — marketplace w Desktop, symlinki, hooki
- [PEŁNY] https://claude.com/docs/government/config/plugins-and-connectors — ścisłe reguły archiwum pluginu (wariant Gov, ale najdokładniejszy opis formatu ZIP)
- [PEŁNY] https://claude.com/docs/government/desktop/skills — `.skill` = ZIP gołego folderu skilla
- [PEŁNY] https://claude.com/docs/government/desktop/plugins — Customize → Plugins → Add → Upload plugin (.zip)

### Help Center (support.claude.com)
- [PEŁNY] https://support.claude.com/en/articles/12512180-using-skills-in-claude (przekierowuje na „Use skills in Claude”, aktualizacja 2026-09-23)
- [PEŁNY] https://support.claude.com/en/articles/12512198-how-to-create-custom-skills (aktualizacja 2026-07-22)
- [PEŁNY] https://support.claude.com/en/articles/13837440-use-plugins-in-claude (aktualizacja 2026-09-23)
- [PEŁNY] https://support.claude.com/en/articles/13837433-manage-plugins-for-your-organization (aktualizacja 2026-09-23)

### Platforma / API (platform.claude.com)
- [PEŁNY] https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices — „Skill authoring best practices”
- [PEŁNY] https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
- [PEŁNY] https://platform.claude.com/docs/en/build-with-claude/skills-guide — limity uploadu przez API

### GitHub
- [PEŁNY] https://raw.githubusercontent.com/anthropics/skills/main/skills/skill-creator/scripts/quick_validate.py
- [PEŁNY] https://raw.githubusercontent.com/anthropics/skills/main/skills/skill-creator/scripts/package_skill.py
- [PEŁNY] https://raw.githubusercontent.com/anthropics/skills/main/skills/skill-creator/SKILL.md
- [PEŁNY] https://raw.githubusercontent.com/anthropics/skills/main/spec/agent-skills-spec.md (tylko odsyłacz: „The spec is now located at https://agentskills.io/specification”)
- [PEŁNY] https://raw.githubusercontent.com/anthropics/skills/main/.claude-plugin/marketplace.json
- [PEŁNY] https://raw.githubusercontent.com/agentskills/agentskills/main/docs/specification.mdx — spec Agent Skills
- [PEŁNY] https://raw.githubusercontent.com/agentskills/agentskills/main/skills-ref/README.md — walidator `skills-ref`
- [PEŁNY] https://github.com/anthropics/knowledge-work-plugins (git clone): `small-business/skills/smb-router/SKILL.md`, `small-business/skills/grow-pipeline/SKILL.md`, `small-business/shared/`, `cowork-plugin-management/skills/create-cowork-plugin/SKILL.md`, `marketing/.claude-plugin/plugin.json`

---

## 2. Gdzie co działa — mapa środowisk (kluczowe dla Pawła)

| Środowisko | Skąd bierze pluginy/skille | Jak zainstalować nasz plugin | Pliki poza folderem skilla | Frontmatter |
|---|---|---|---|---|
| **Claude Code CLI** (terminal) | `~/.claude/…` + marketplace'y + **sync z konta claude.ai** (v2.1.273+, jako `<nazwa>@synced`) | `/plugin marketplace add …` → `/plugin install kwiatekmedia-meta-ads@kwiatekmedia`, lub `--plugin-dir` | Tak: cały katalog pluginu kopiowany do cache; `${CLAUDE_PLUGIN_ROOT}` + ścieżki względne | Wszystkie pola Claude Code |
| **Claude Desktop – zakładka Code** | jak CLI (lokalnie `~/.claude`) | **+** → Plugins → Add plugin (przeglądarka marketplace'ów) | jak CLI | jak CLI |
| **Claude Desktop – Cowork** | **tylko konto claude.ai (Customize)**, NIE `~/.claude` | Customize → Plugins → Add marketplace (GitHub `owner/repo` lub URL) → Install; albo upload pliku pluginu (.zip) | Tak (Anthropic w pluginie small-business używa `../../shared/…`) | pola pluginu Claude Code (Cowork = architektura Claude Code); `!`-komendy wyłączone |
| **claude.ai czat (web) / Desktop Chat** | konto claude.ai | Plugin: Customize → Plugins (wg artykułu z 2026-09-23 pluginy działają też w czacie; hooki i subagenty wyszarzone). Skill: Customize → Skills → „+” → Upload a skill (ZIP) | **Pojedynczy skill (ZIP): tylko własny folder** („skills can't explicitly reference other skills”) | **upload skilla: tylko 6 pól spec** — inne = błąd |
| **API (Skills API)** | upload per workspace | `/v1/skills` | tylko własny folder | spec + `name` bez „anthropic”/„claude” |

Cytaty potwierdzające:
- Cowork: *„You manage connectors, skills, and plugins from **Customize** in the sidebar. Cowork loads the ones enabled for your claude.ai account, synced at session start, and doesn't read the Claude Code CLI's `~/.claude` directory on your machine. To use a skill or plugin that exists only in `~/.claude`, add it in **Customize**.”* (claude.com/docs/cowork/overview)
- Desktop: *„The Cowork tab in the Desktop app sources its skills, plugins, and connectors from this Customize configuration, which syncs through your claude.ai account, not from the CLI's `~/.claude` directory.”* (code.claude.com/docs/en/desktop)
- Pluginy w czacie: *„You can install and use plugins in chat on the web, the Chat tab in Claude Desktop, and Claude Cowork. Plugins enabled for your Claude account also load in Claude Code in your terminal when you sign in with the same account. The skills bundled in a plugin work in all of these places. Hooks and sub-agents run in Cowork and Claude Code, so they appear grayed out in chat.”* (support 13837440, 2026-09-23)
  - ⚠️ Sprzeczność: claude.com/docs/cowork/guide/plugins mówi *„Plugins are available in Cowork and Code. They aren't used in Chat.”* — artykuł Help Center jest świeższy; zweryfikować na koncie Pawła.
- Sync do Claude Code: *„Claude Code loads the plugins enabled for your claude.ai account… downloads each one into `~/.claude/plugins/synced/` and loads it as `<name>@synced`… When an enabled plugin from any other source matches a synced plugin's name, Claude Code loads that plugin and reports the synced copy as not loaded.”* (plugins-reference)
- Dostępność: pluginy — *„available to all paid plans (Pro, Max, Team, Enterprise)”*; skille — Free/Pro/Max/Team/Enterprise, wymagają włączonego „Code execution and file creation” (Settings → Capabilities).

**Wniosek praktyczny:** najprostsza ścieżka dla Pawła = zainstalować plugin **raz na koncie claude.ai (Customize → Plugins → Add marketplace z GitHuba)** → działa w Cowork, w czacie i synchronizuje się do Claude Code w terminalu. Do developmentu w Claude Code: `claude --plugin-dir ./plugins/kwiatekmedia-meta-ads` lub lokalny marketplace.

---

## 3. Specyfikacja `plugin.json` (`.claude-plugin/plugin.json`)

Źródło: plugins-reference [PEŁNY].

> *„The manifest is optional. If omitted, Claude Code auto-discovers components in default locations and derives the plugin name from the directory name.”*
> *„If you include a manifest, `name` is the only required field.”*

### 3.1 Pełny schemat (cytat)
```json
{
  "name": "plugin-name",
  "displayName": "Plugin Name",
  "version": "1.2.0",
  "description": "Brief plugin description",
  "author": { "name": "Author Name", "email": "author@example.com", "url": "https://github.com/author" },
  "homepage": "https://docs.example.com/plugin",
  "repository": "https://github.com/author/plugin",
  "license": "MIT",
  "keywords": ["keyword1", "keyword2"],
  "metadata": { "catalogId": "cat-123", "tier": "pro" },
  "skills": "./custom/skills/",
  "commands": ["./custom/commands/special.md"],
  "agents": ["./custom/agents/reviewer.md"],
  "hooks": "./config/hooks.json",
  "mcpServers": "./mcp-config.json",
  "outputStyles": "./styles/",
  "lspServers": "./.lsp.json",
  "experimental": { "themes": "./themes/", "monitors": "./monitors.json", "evals": "quality/evals" },
  "dependencies": ["helper-lib", { "name": "secrets-vault", "version": "~2.1.0" }]
}
```

### 3.2 Pola
| Pole | Typ | Uwagi (cytaty/streszczenie) |
|---|---|---|
| `name` | string, **wymagane** | *„Unique identifier in kebab-case, with no spaces, control characters, or bidirectional-formatting characters.”* Służy do namespacingu: skill `copy` w pluginie `x` = `/x:copy`. Org/claude.ai: *„Max plugin name length 64 characters. Must use lowercase words separated by hyphens.”* Desktop: ≤128 znaków `[A-Za-z0-9._-]`, start literą/cyfrą — plugin o złej nazwie jest *„silently drop[ped]”*. |
| `$schema` | string | np. `"https://json.schemastore.org/claude-code-plugin-manifest.json"`; ignorowane w runtime. |
| `displayName` | string | Nazwa w UI (może mieć spacje, wielkie litery) — tu: „KWIATEKmedia Meta Ads”. Wpis w marketplace ma pierwszeństwo. |
| `version` | string (semver) | *„Setting this pins the plugin to that version string, so users only receive updates when you bump it”*. Jeśli też w marketplace — *„`plugin.json` wins”*. |
| `description`, `author` (obiekt), `homepage`, `repository`, `license`, `keywords` (array) | | `keywords` jako string = błąd ładowania. |
| `metadata` | object | dowolne dane, Claude Code ich nie czyta. |
| `defaultEnabled` | boolean | domyślnie `true`. |
| `skills` | string\|array | **Dodaje** do domyślnego skanu `skills/` (nie zastępuje). |
| `commands`, `agents`, `workflows`, `outputStyles` | string\|array | **Zastępują** domyślne katalogi. |
| `hooks`, `mcpServers`, `lspServers` | string\|array\|object | własne reguły łączenia. |
| `experimental.evals` | string | katalog evali, gdy nie `evals/`. |
| `userConfig` | object | wartości pytane przy włączaniu (`type`: string/number/boolean/directory/file; `title`, `description` wymagane; `sensitive`, `required`, `default`, `options`…). Niewrażliwe wartości można wstawiać w treść skilli jako `${user_config.KEY}`. |
| `dependencies` | array | inne pluginy z ograniczeniem semver. |

- *„Claude Code ignores top-level fields it does not recognize”* — walidator zgłasza je jako ostrzeżenia; `--strict` zamienia ostrzeżenia w błędy.
- Zły typ znanego pola (np. `keywords` jako string) = **plugin się nie ładuje**.
- Uwaga Org/Gov upload: manifest musi być *„UTF-8 without a byte-order mark”*; w wariancie Gov wymagane `name` **i** `version`. → **Zawsze ustawiaj `version`.**
- Pola `installationPreference` (`required`/`auto_install`/`available`) są czytane przez Claude Desktop tylko dla pluginów z katalogu `org-plugins/` (admin) — nie potrzebujemy.

### 3.3 Struktura katalogów pluginu (cytat, skrót)
```text
enterprise-plugin/
├── .claude-plugin/plugin.json   # tylko manifest w .claude-plugin/
├── skills/<name>/SKILL.md (+ reference.md, scripts/)
├── commands/*.md                # stary format; dla nowych: skills/
├── agents/*.md
├── hooks/hooks.json
├── .mcp.json, .lsp.json, monitors/, output-styles/, themes/, workflows/
├── bin/                         # NIE w pluginach dystrybuowanych przez claude.ai org
├── settings.json                # tylko klucze `agent`, `subagentStatusLine`
├── scripts/
├── LICENSE, CHANGELOG.md
```
- *„All other directories … must be at the plugin root, not inside `.claude-plugin/`.”*
- *„A `CLAUDE.md` file at the plugin root is not loaded as project context.”* → instrukcje dawać w skillach.
- Top-level `bin/`: *„claude.ai rejects a plugin that has one”* (org sync i upload). Nie używamy.

### 3.4 Zasady ścieżek
- *„All paths must be relative to the plugin root and start with `./`”* (wyjątek: `skills` akceptuje też `"."`).
- *„On macOS and Linux, Claude Code also rejects a component path that contains a backslash anywhere in it… Write component paths with forward slashes.”*
- **Path traversal:** *„Claude Code doesn't let a plugin reference files outside its own directory. It rejects a component path that resolves outside the plugin root… such as `../shared-utils`”*; *„Claude Code also doesn't copy files outside the plugin directory into the cache… so when a script inside a copied plugin reads a path above the plugin root, it doesn't find those files either.”* → **wszystko, czego skille potrzebują, musi leżeć WEWNĄTRZ katalogu pluginu.**
- Symlinki: wewnątrz pluginu — zachowane; do innego miejsca w tym samym marketplace — *„dereferenced… copied into the cache”*; poza marketplace — pomijane. Dla `--plugin-dir`/lokalnych ścieżek tylko symlinki wewnątrz pluginu. Na Windows symlink wymaga `mklink /D` z uprawnieniami admina lub Developer Mode → **nie używać symlinków** (git na Windows domyślnie zamienia je w pliki tekstowe).

### 3.5 Zmienne i odwołania do plików
| Zmienna | Znaczenie |
|---|---|
| `${CLAUDE_PLUGIN_ROOT}` | *„Absolute path to the plugin's installation directory”*; w treści skilli i agentów podstawiana *„Anywhere the placeholder appears”*. *„Use this to reference scripts or files bundled anywhere in the plugin, including resources shared between the plugin's skills.”* |
| `${CLAUDE_SKILL_DIR}` | katalog danego SKILL.md (w pluginie: podkatalog skilla, nie root pluginu) |
| `${CLAUDE_PLUGIN_DATA}` | trwały katalog `~/.claude/plugins/data/{id}/` (przeżywa aktualizacje) |
| `${CLAUDE_PROJECT_DIR}` | root projektu |

- *„They aren't present in the environment of commands Claude runs through the Bash tool… In plugin content, write the placeholder instead, and Claude Code substitutes the path inline when it loads the content.”*
- `${CLAUDE_PLUGIN_ROOT}` zmienia się przy aktualizacji (nowy katalog wersji w cache) — nie zapisywać tam stanu.
- **Ważne dla kompatybilności:** w skillu wgranym pojedynczo na claude.ai/API te placeholdery NIE są podstawiane (to rozszerzenia Claude Code). Najbezpieczniej: w SKILL.md używać **ścieżek względnych do własnego folderu** (`references/plik.md`) — działają wszędzie.

### 3.6 Cache, instalacja, wersjonowanie
- Pluginy z marketplace'u są kopiowane do `~/.claude/plugins/cache` (wyjątek: ścieżka względna w marketplace dodanym z lokalnego katalogu — ładowany w miejscu, edycje działają po `/reload-plugins` bez podbijania wersji).
- Stare wersje usuwane ok. 14 dni po aktualizacji.
- Kolejność ustalania wersji: `plugin.json` `version` → wpis w marketplace → SHA commita (github/url/git-subdir/ścieżka względna w marketplace z gita) → sha256 archiwum → `unknown`.
- *„Explicit version … Users get updates only when you bump this field. Pushing new commits without bumping it has no effect, and `/plugin update` reports "already at the latest version".”*
- *„Commit-SHA version — Omit `version` from both `plugin.json` and the marketplace entry — Users get updates whenever the source's resolved commit changes — Best for: Internal or team plugins under active development.”*
- Org GitHub sync (Team/Enterprise): automatyczny sync odpala się, gdy do gałęzi domyślnej zostanie zmergowany PR **z podbiciem wersji pluginu**.
- Rekomendacja: `version` w `plugin.json` (semver) + podbijanie przy każdym wydaniu + `CHANGELOG.md`; opcjonalnie tag: `claude plugin tag plugins/kwiatekmedia-meta-ads --push`.

### 3.7 Sprawdzony minimalny `plugin.json` dla nas [TEST: `claude plugin validate --strict` → „Validation passed”]
```json
{
  "name": "kwiatekmedia-meta-ads",
  "displayName": "KWIATEKmedia Meta Ads",
  "version": "0.1.0",
  "description": "System skilli do kreacji reklam Meta Ads: strategia, statyki, copy, wideo, hooki, audyt, dywersyfikacja, plan kampanii, iteracje.",
  "author": { "name": "Paweł Kwiatek" },
  "repository": "https://github.com/Pawel2884/KWIATEKmedia-Meta-Ads-Skills",
  "license": "UNLICENSED",
  "keywords": ["meta-ads", "facebook-ads", "kreacje", "copywriting", "pl"]
}
```
(Pole `license` — dobrać właściwe; `UNLICENSED` to tylko placeholder.)

---

## 4. Specyfikacja `marketplace.json` (`.claude-plugin/marketplace.json` w korzeniu repo)

Źródło: plugin-marketplaces [PEŁNY].

### 4.1 Pola marketplace'u
| Pole | Wymagane | Uwagi |
|---|---|---|
| `name` | tak | kebab-case; publiczne (`/plugin install x@<name>`). Zarezerwowane m.in.: `claude-code-marketplace`, `claude-code-plugins`, `claude-plugins-official`, `claude-plugins-community`, `claude-community`, `anthropic-marketplace`, `anthropic-plugins`, `agent-skills`, `anthropic-agent-skills`, `knowledge-work-plugins`, … oraz `npm`, `pip`, `uv`, `cargo`, `github`, `gh`; w Desktop też `org`, `org-provisioned`, `unknown`. Desktop wymaga `^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$`. |
| `owner` | tak | obiekt: `name` (wymagane), `email`, `url` |
| `plugins` | tak | tablica wpisów |
| `description`, `version` | nie | (akceptowane też pod `metadata`) |
| `metadata.pluginRoot` | nie | katalog dla „gołych” nazw źródeł (v2.1.239+). **Org sync odrzuca gołe nazwy** → pisać pełne `./plugins/…`. |
| `renames` | nie | mapa stara→nowa nazwa / `null` (migracja użytkowników) |
| `allowCrossMarketplaceDependenciesOn` | nie | |

### 4.2 Wpis pluginu
- Wymagane: `name` (kebab-case), `source` (string lub obiekt).
- Opcjonalne: wszystkie pola z `plugin.json` (`displayName`, `description`, `version`, `author`, `homepage`, `repository`, `license`, `keywords`, `metadata`, `defaultEnabled`, `skills`, `commands`, `agents`, `hooks`, `mcpServers`, `lspServers`) + specyficzne: `category`, `tags`, `strict` (domyślnie `true`), `relevance`, `headers`, `headersHelper`.
- *„For a field you set on the entry, users see the entry's value, even when `plugin.json` sets a different one.”*
- Walidator ostrzega, gdy `version` we wpisie ≠ `version` w `plugin.json` → **wersję trzymać tylko w `plugin.json`**.

### 4.3 Źródła (`source`)
| Typ | Pola | Uwagi |
|---|---|---|
| ścieżka względna `"./plugins/x"` | — | *„Must start with `./`… Claude Code resolves the path relative to the marketplace root, not the `.claude-plugin/` directory”*; bez `..`; tylko `/`. Nie działa, gdy marketplace dodano jako URL do samego pliku `marketplace.json`. |
| `github` | `repo`, `ref?`, `sha?` | |
| `url` | `url`, `ref?`, `sha?` | git URL |
| `git-subdir` | `url`, `path`, `ref?`, `sha?` | |
| `npm` | `package`, `version?`, `registry?` | |
| `archive` | `url` (HTTPS), `sha256?` | ZIP ≤ 256 MiB; `.claude-plugin/` w korzeniu ZIP lub w jednym folderze-opakowaniu; v2.1.224+ |
| `command` | `command`, `timeout?`, `mode?` | |

**Kompatybilność środowisk:**
- Org GitHub-sync (Team/Enterprise): *„Relative paths to plugin folders inside the marketplace repository … are fully supported, and are the simplest option. The github, url, and git-subdir source types are also supported. The npm, archive, and command source types are not supported.”*
- Claude Desktop (marketplace admina): *„Put plugin content directly in the marketplace repository with a relative `source` path. Plugins whose `source` points at a different repository are listed … but are not fetched or auto-installed.”*
- Wariant Gov (upload archiwum marketplace'u): *„A listing entry whose source is the archive root itself, `./`, is not supported”*.
→ **Rekomendacja: plugin w podkatalogu `plugins/kwiatekmedia-meta-ads/`, `"source": "./plugins/kwiatekmedia-meta-ads"`** (NIE `"./"`).

### 4.4 `strict`
- `true` (domyślnie): `plugin.json` jest autorytetem, wpis może dokładać komponenty.
- `false`: wpis marketplace'u definiuje wszystko; jeśli `plugin.json` też deklaruje komponenty → konflikt, plugin się nie ładuje. (Anthropic używa `strict: false` + `"source": "./"` + lista `skills` w repo anthropics/skills — nie kopiować tego wzorca, bo nie działa w części środowisk jw.)

### 4.5 Sprawdzony `marketplace.json` dla nas [TEST: validate passed; `marketplace add ./proto` + `install kwiatekmedia-meta-ads@kwiatekmedia` + `plugin details` OK]
```json
{
  "name": "kwiatekmedia",
  "description": "Pluginy KWIATEKmedia do kreacji reklam Meta Ads",
  "owner": { "name": "Paweł Kwiatek", "url": "https://github.com/Pawel2884" },
  "plugins": [
    {
      "name": "kwiatekmedia-meta-ads",
      "displayName": "KWIATEKmedia Meta Ads",
      "source": "./plugins/kwiatekmedia-meta-ads",
      "description": "System 10 skilli do kreacji reklam Meta Ads (PL)",
      "category": "marketing"
    }
  ]
}
```
Wynik `claude plugin details` [TEST]: *„Skills (2) copy-reklamowe, master-kreacji … Always-on: ~248 tok added to every session”* — koszt „zawsze włączony” to ~100–130 tokenów na skill (opis). Przy 10 skillach ≈ 1,2–1,5 tys. tokenów w każdej sesji.

---

## 5. Specyfikacja `SKILL.md`

### 5.1 Spec Agent Skills (otwarty standard) — cytat [PEŁNY, agentskills/agentskills docs/specification.mdx]
| Field | Required | Constraints |
|---|---|---|
| `name` | Yes | Max 64 characters. Lowercase letters, numbers, and hyphens only. Must not start or end with a hyphen. |
| `description` | Yes | Max 1024 characters. Non-empty. Describes what the skill does and when to use it. |
| `license` | No | License name or reference to a bundled license file. |
| `compatibility` | No | Max 500 characters. Indicates environment requirements… |
| `metadata` | No | Arbitrary key-value mapping (a map from string keys to string values). |
| `allowed-tools` | No | Space-separated string of pre-approved tools the skill may use. (Experimental) |

`name`: *„Must be 1-64 characters… Must not contain consecutive hyphens (`--`)… Must match the parent directory name.”*
Body: *„Keep your main `SKILL.md` under 500 lines.”*; progressive disclosure: metadata ~100 tokenów, *„Instructions (< 5000 tokens recommended)”*, zasoby na żądanie. *„Keep file references one level deep from `SKILL.md`.”* Walidacja: `skills-ref validate ./my-skill`.

Dodatkowo (platform.claude.com best-practices / skills-guide): `name` — *„Cannot contain XML tags; Cannot contain reserved words: "anthropic", "claude"”*; `description` — *„Cannot contain XML tags”*. quick_validate.py: opis nie może zawierać `<` ani `>`.

### 5.2 Upload na claude.ai / Skills API / `package_skill.py` — dozwolone TYLKO pola spec
Z code.claude.com/docs/en/skills:
> *„claude.ai skill uploads, the Skills API, and packaging with `package_skill.py` from anthropics/skills — `name`, `description`, `license`, `compatibility`, `metadata`, `allowed-tools`”*
> *„If you include any field the spec doesn't allow, packaging or upload fails with a hard error instead of ignoring the field:”*
> ```
> Unexpected key(s) in SKILL.md frontmatter: argument-hint. Allowed properties are: allowed-tools, compatibility, description, license, metadata, name
> ```
> *„Claude Code-only body features, such as dynamic context injection, don't function in claude.ai chat or through the API.”*

Walidator Anthropic `quick_validate.py` (dosłownie): `ALLOWED_PROPERTIES = {'name', 'description', 'license', 'allowed-tools', 'metadata', 'compatibility'}`; `name` regex `^[a-z0-9-]+$`, bez `-` na brzegach i `--`, ≤ 64; `description` ≤ 1024, bez `<`/`>`; `compatibility` ≤ 500; parser **PyYAML** (`yaml.safe_load`), frontmatter musi zaczynać się od `---` (plik czytany bez obsługi BOM).

`package_skill.py`: tworzy `<nazwa>.skill` = **ZIP**, w którym ścieżki są względem rodzica folderu skilla (czyli `nazwa/SKILL.md`), pomija `__pycache__`, `node_modules`, `*.pyc`, `.DS_Store` oraz katalog `evals/` w korzeniu skilla. Potwierdzenie z claude.com (Gov): *„A `.skill` file is a zip of the bare skill folder”*.

Limity uploadu: API — *„Total upload size must be under 30 MB (uncompressed)”*, *„Maximum Skills per request: 20”*. Limit rozmiaru ZIP skilla w UI claude.ai — w Help Center tylko „ZIP file exceeds size limits” bez liczby (nieustalone; nasze skille tekstowe będą miały kilkadziesiąt–kilkaset KB).

Typowe błędy uploadu (Help Center): *„ZIP file exceeds size limits; Skill folder name doesn't match the skill name; Missing required skill.md file; Invalid characters in skill name or description”*.

⚠️ Sprzeczności w źródłach:
- Help Center (12512198, 2026-07-22): `name` jako *„human-friendly name … Example: Brand Guidelines”* i `description` *„200 characters maximum”*, pole `dependencies`. claude.com/docs/skills/how-to i spec: `name` tylko `[a-z0-9-]`, = nazwa folderu, opis do 1024. **Bezpieczny wspólny mianownik: `name` kebab-case = folder; `description` ≤ ~200–600 znaków (najważniejsze wyzwalacze na początku); nie używać `dependencies`** (nie ma go na liście dozwolonych pól walidatora).
- platform overview mówi, że skille claude.ai *„do not sync across surfaces”* — nieaktualne wobec sync do Claude Code v2.1.273+ (skills doc + Help Center 2026-09-23).

### 5.3 Frontmatter w Claude Code (w tym skille w pluginie) — pełna tabela [PEŁNY, code.claude.com/docs/en/skills]
*„All fields are optional. Only `description` is recommended… Claude Code ignores a field it doesn't recognize without reporting an error.”* Wartości logiczne: `true/false/yes/no/on/off/1/0`.

| Pole | Opis (skrót cytatu) |
|---|---|
| `name` | *„Display name shown in skill listings. Defaults to the directory name.”* W pluginie ustala ostatni człon komendy: `my-plugin/skills/review/SKILL.md` z `name: fancy` → `/my-plugin:fancy`. |
| `description` | *„…the combined `description` and `when_to_use` text is truncated at 1,536 characters in the skill listing”* (konfigurowalne `skillListingMaxDescChars`). Brak → pierwsza niepusta linia treści. |
| `when_to_use` | dopisywane do opisu, liczy się do 1536. **Nie w spec** (błąd przy uploadzie). |
| `argument-hint` | podpowiedź argumentów w autouzupełnianiu, np. `[brief]`. **Nie w spec.** |
| `arguments` | nazwane argumenty `$nazwa`. **Nie w spec.** |
| `disable-model-invocation` | `true` = tylko użytkownik może wywołać; opis znika z kontekstu; **nie da się go preloadować do subagenta** i Claude go nie wywoła. **Nie w spec.** |
| `user-invocable` | `false` = ukryty z menu `/`, tylko Claude. **Nie w spec.** |
| `allowed-tools` | narzędzia bez pytania o zgodę w turze wywołania. W spec (eksperymentalne). |
| `disallowed-tools` | narzędzia usuwane na czas skilla. |
| `model`, `effort` | model / wysiłek na czas skilla. **Nie w spec.** |
| `context: fork` + `agent` + `background` | uruchom w subagencie (bez historii rozmowy; domyślnie w tle). **Nie w spec.** |
| `hooks`, `paths`, `shell` | hooki, globy aktywacji, bash/powershell dla `!`-komend. |
| `metadata`, `license`, `compatibility` | pola spec; Claude Code je akceptuje, ale nie używa. |

Substytucje w treści (Claude Code): `$ARGUMENTS`, `$ARGUMENTS[N]`, `$N`, `$nazwa`, `${CLAUDE_SESSION_ID}`, `${CLAUDE_EFFORT}`, `${CLAUDE_SKILL_DIR}`, `${CLAUDE_PROJECT_DIR}`, `${CLAUDE_PLUGIN_ROOT}`, `${CLAUDE_PLUGIN_DATA}`.
- *„If you invoke a skill with arguments but no placeholder in the skill's content receives one, Claude Code appends `ARGUMENTS: <your input>` to the end of the skill content”* → **nie trzeba używać `$ARGUMENTS`** (w uploadzie na claude.ai zostałby literalnym tekstem). Lepiej napisać w treści: „Jeśli użytkownik podał brief/argumenty, użyj ich; jeśli nie — zapytaj.”
- `!`-komendy (dynamic context injection): w Cowork zastępowane placeholderem `[shell command execution disabled by policy]`; w claude.ai nie działają → **nie używać**.

Kto może wywołać (cytat tabeli):
| Frontmatter | You can invoke | Claude can invoke | When loaded into context |
|---|---|---|---|
| (default) | Yes | Yes | Description always in context, full skill loads when invoked |
| `disable-model-invocation: true` | Yes | No | Description not in context, full skill loads when you invoke |
| `user-invocable: false` | No | Yes | Description always in context, full skill loads when invoked |

Cykl życia treści skilla: *„the rendered `SKILL.md` content enters the conversation as a single message and stays there across later turns… Claude Code does not re-read the skill file on later turns”*. Po auto-kompaktowaniu: *„keeping the first 5,000 tokens of each. Re-attached skills share a combined budget of 25,000 tokens… older skills can be dropped entirely”* → przy orkiestracji wielu skilli w jednej sesji trzymać SKILL.md zwięzłe, a master powinien w razie potrzeby ponownie wywołać skill.

Budżet listy skilli: *„The budget scales at 1% of the model's context window. When the listing overflows, Claude Code drops descriptions starting with the skills you invoke least”* → najważniejsze słowa-wyzwalacze na **początku** opisu.

### 5.4 Nazwa komendy skilla w pluginie
| Lokalizacja | Źródło nazwy | Przykład |
|---|---|---|
| `plugin/skills/<dir>/SKILL.md` | frontmatter `name` lub nazwa katalogu, z prefiksem pluginu | `/kwiatekmedia-meta-ads:copy-reklamowe` |
| skill z konta claude.ai (sync) | `anthropic-skills:<name>` | `/anthropic-skills:copy-reklamowe` |

*„The bare `/fancy` also invokes the skill unless another command already uses that name.”* Namespace chroni przed kolizjami nazw, ale **nie przed konkurencją opisów**: stare skille Pawła (np. `meta-ads-optymalizacja`, `kampania-lead-meta-pl`) mają zbliżone wyzwalacze — przed testami wyłączyć je w Customize → Skills (zgodnie z decyzją Pawła z WORKLOG: „do usunięcia”).

### 5.5 Pliki pomocnicze
*„Reference supporting files from `SKILL.md` so Claude knows what each file contains and when to load it”*; *„Keep `SKILL.md` under 500 lines. Move detailed reference material to separate files.”* Konwencja katalogów (spec): `scripts/`, `references/`, `assets/`.

---

## 6. Współdzielona wiedza (references) między skillami — co działa gdzie

| Mechanizm | Claude Code (marketplace/`--plugin-dir`) | Cowork (plugin) | claude.ai czat (plugin) | claude.ai: pojedynczy skill ZIP | API |
|---|---|---|---|---|---|
| `references/x.md` w folderze skilla (ścieżka względna) | ✅ | ✅ | ✅ | ✅ | ✅ |
| `../../shared/x.md` (katalog w pluginie) | ✅ (cały plugin kopiowany do cache) | ✅ (wzorzec użyty przez Anthropic w pluginie small-business „Built for Cowork”) | prawdopodobnie ✅ (niezweryfikowane) | ❌ | ❌ |
| `${CLAUDE_PLUGIN_ROOT}/shared/x.md` | ✅ (substytucja w treści skilla) | ✅ (Anthropic: `${CLAUDE_PLUGIN_ROOT}/skills/dashboard.html` w pluginie productivity) | niezweryfikowane | ❌ (literalny tekst) | ❌ |
| `../../../shared` poza pluginem (np. root repo) | ❌ (*„doesn't copy files outside the plugin directory into the cache”*) | ❌ | ❌ | ❌ | ❌ |
| symlink | ⚠️ tylko w obrębie pluginu/marketplace; Windows problematyczny | ⚠️ | ? | ❌ | ❌ |

Precedens Anthropic (knowledge-work-plugins, `small-business`): katalog `small-business/shared/` (np. `voice-profile.md`, `untrusted-content.md`) i odwołania w SKILL.md: *„Read [the shared voice profile](../../shared/voice-profile.md). Every skill writing in the owner's name reads the same file, so a correction made once holds everywhere.”* Również odwołania między skillami: `../social-content-engine/reference/shopify-assets.md`.

Help Center (pojedyncze skille): *„Skills can build on each other: While skills can't explicitly reference other skills, Claude can use multiple skills together automatically.”*

**Rekomendacja (jasno):** claude.ai przy uploadzie pojedynczego skilla wymaga **samowystarczalnego folderu**. Dlatego:
1. Źródło prawdy wiedzy wspólnej: `shared/` w **korzeniu repo** (poza pluginem — nie trafia do paczki podwójnie).
2. `shared/mapa.json` — które pliki trafiają do których skilli.
3. `scripts/build.py` kopiuje je do `plugins/kwiatekmedia-meta-ads/skills/<skill>/references/<plik>.md` z nagłówkiem „WYGENEROWANE — nie edytuj”, a kopie są **commitowane** (dzięki temu instalacja z GitHuba działa bez żadnego kroku budowania).
4. SKILL.md odwołuje się wyłącznie do `references/<plik>.md` (ścieżka względna, jeden poziom).
5. `build.py --check` w CI/przed commitem wykrywa nieaktualne kopie.
Koszt: duplikacja tekstu w repo (bez kosztu tokenów — pliki czytane na żądanie). Zysk: identyczne zachowanie w Claude Code, Cowork, czacie, pojedynczym uploadzie i API.

---

## 7. Skill wywołujący inny skill i skill „master” (orkiestrator)

### 7.1 Co mówią źródła
- Narzędzie `Skill`: *„Executes a skill within the main conversation”* (tools-reference). Claude wywołuje skille tym narzędziem; wejście zawiera pole `"skill"` z nazwą, także z przestrzenią nazw (`plugin-name:skill-name`) — por. regex grader'a z plugin-evals: `'"skill"\s*:\s*"(?:[\w-]+:)?your-skill-name"'`.
- Skill z `disable-model-invocation: true` **nie może** być wywołany przez Claude (*„If Claude tries anyway, Claude Code blocks the call”*) ani preloadowany do subagenta → **skille podrzędne NIE mogą mieć tej flagi**, jeśli master ma je uruchamiać.
- Subagent z polem `skills:` — *„The full content of each listed skill is injected into the subagent's context at startup… the subagent can still discover and invoke project, user, and plugin skills through the Skill tool.”* (Agenci w pluginie działają tylko w Claude Code/Cowork; w czacie wyszarzone.)
- `context: fork` — skill jako zadanie dla subagenta; *„The subagent doesn't see your conversation history, so the skill's instructions have to stand on their own”*; domyślnie w tle. Nie w spec (strip przy uploadzie) → zachowanie różni się między środowiskami; w v1 nie używać.
- Help Center: *„While skills can't explicitly reference other skills, Claude can use multiple skills together automatically.”* (dotyczy pojedynczych skilli na claude.ai).
- Stack w Claude Code: `/skill-a /skill-b argumenty` ładuje kilka skilli naraz (do 6).

### 7.2 Wzorzec Anthropic (knowledge-work-plugins/small-business)
- **Router** `smb-router`: tabela „Owner says something like… → Route to `skill-name`”, zasady: *„Pick the single best match, not a list of options”*, *„Never do the work yourself. You route.”*, *„Never skip confirmation before triggering anything.”*
- **Łańcuch** `grow-pipeline`: *„Chains lead-finder, outreach-composer, and crm-autopilot … with an owner approval at every handoff.”* Każdy krok: *„Trigger the `lead-finder` skill workflow, carrying Step 1's context in as targeting input.”* + sekcje **In / Out / Gate**. *„Each skill keeps its own gates, and this command does not loosen any of them.”*
- Plik `shared/chain-seams.md`: błędy powstają na „szwach” między skillami (np. przekazanie liczby z innego „uniwersum”) — łańcuch musi definiować kontrakt danych między krokami.

### 7.3 Rekomendowany projekt skilla `master-kreacji` (lub podobna nazwa)
1. Frontmatter tylko `name` + `description` (+ w pluginie ewentualnie `argument-hint`, usuwany przez build dla ZIP-a). Opis w 3. osobie, z wyzwalaczami typu „pakiet kreacji”, „od briefu do reklam”, „nie wiem od czego zacząć”.
2. Body = krótka **tabela routingu** (intencja → skill) + **pipeline** z krokami In/Out/Gate, np.: brief → `strateg-kreacji` → `hooki` → `copy-reklamowe` / `statyczne-reklamy` / `scenariusze-wideo` → `dywersyfikacja` → `audytor` → `planer-kampanii`; osobno `iteracje` po danych.
3. Instrukcja uruchamiania kroku z łańcuchem awaryjnym (działa w każdym środowisku):
   - „Uruchom skill `copy-reklamowe` narzędziem Skill (w pluginie pełna nazwa `kwiatekmedia-meta-ads:copy-reklamowe`).”
   - „Jeśli nie możesz go uruchomić, przeczytaj `../copy-reklamowe/SKILL.md` i wykonaj jego instrukcje.” (działa w pluginie: Claude Code/Cowork)
   - „Jeśli pliku nie ma (skill wgrany pojedynczo), poproś użytkownika o włączenie skilla `copy-reklamowe` w Customize → Skills.”
4. **Wspólny kontrakt danych** („brief kreatywny”, format wyjścia każdego kroku) w `shared/` → kopiowany do `references/` każdego skilla, żeby wyjście jednego skilla było wejściem następnego.
5. Bramki: potwierdzenie użytkownika przed kolejnym krokiem (zgodnie z wzorcem Anthropic).
6. Nie ustawiać `disable-model-invocation` na skillach podrzędnych; `user-invocable` zostawić domyślne (użytkownik też może wywołać każdy krok osobno).
7. Test w evalach: grader `tool_order` (master przed skillem podrzędnym) — sekcja 11.

---

## 8. Instalacja — instrukcje dla każdego środowiska

### 8.1 Claude Code (terminal / Desktop Code tab)
```shell
/plugin marketplace add Pawel2884/KWIATEKmedia-Meta-Ads-Skills
/plugin install kwiatekmedia-meta-ads@kwiatekmedia
```
- ⚠️ *„GitHub `owner/repo` shorthand sources clone over SSH by default; set `CLAUDE_CODE_PLUGIN_PREFER_HTTPS=1` to clone them over HTTPS instead.”* Na Windows bez klucza SSH: `/plugin marketplace add https://github.com/Pawel2884/KWIATEKmedia-Meta-Ads-Skills.git` (URL z `https://`).
- Jedną komendą (v2.1.275+): `/plugin install kwiatekmedia-meta-ads --marketplace Pawel2884/KWIATEKmedia-Meta-Ads-Skills`.
- Aktualizacja: `/plugin marketplace update kwiatekmedia`, potem `/plugin update kwiatekmedia-meta-ads@kwiatekmedia`; po instalacji ewentualnie `/reload-plugins`.
- Auto-update dla marketplace'ów stron trzecich domyślnie **wyłączony**.
- Repo prywatne: działa z git credential helper (np. `gh auth login` + `gh auth setup-git`).
- Desktop Code tab: **+** → Plugins → Add plugin (przeglądarka pokazuje skonfigurowane marketplace'y).
- Dev: `claude --plugin-dir ./plugins/kwiatekmedia-meta-ads` (akceptuje też `.zip` [TEST: ZIP z `.claude-plugin/` w korzeniu załadował się jako `kwiatekmedia-meta-ads@inline`]); `/reload-plugins` po zmianach.

### 8.2 Cowork (Claude Desktop)
Z claude.com/docs/cowork/guide/plugins:
> *„Open **Customize** in the sidebar, then **Plugins**… Select **Browse plugins**… To install from a file instead, select the upload option on the Plugins page and select the plugin package.”*
> *„On the Plugins page, select **Add marketplace** and enter the repository's URL. Cowork accepts the standard `https://github.com/owner/repo` form and the `owner/repo` shorthand for GitHub.”* *„Click **Update** on a marketplace to pull the latest plugins from its repository.”*
> Help Center: *„In Cowork, open the "Cowork" tab first, then open Customize.”*; *„In the Personal plugins section, click the "+" button, then select "Add marketplace"… Add from a repository: Sync a marketplace from a GitHub repository or git URL.”*; *„On Claude Desktop and in Cowork, plugins you add yourself are saved locally to your computer.”*

Limity Cowork (cytat tabeli): Plugin package size (uncompressed) **200 MB**; Files per plugin package **5,000**; Marketplace repository archive **512 MB**; Plugins per marketplace **500**; Marketplaces you can add **25**. Podgląd plików w przeglądarce skilla do 1 MB.

Plik do uploadu: ZIP pluginu z `.claude-plugin/plugin.json` w korzeniu (lub w jednym folderze-opakowaniu). Skill Anthropic `create-cowork-plugin` pakuje tak: `cd /path/to/plugin-dir && zip -r /tmp/plugin-name.plugin . -x "*.DS_Store"` — **`.plugin` = ZIP zawartości katalogu pluginu**, wyświetlany w czacie Cowork jako podgląd z przyciskiem akceptacji. Upload w Customize dokumentowany jako `.zip` → budować oba (identyczne bajty).

### 8.3 claude.ai (web) i Chat w Desktop
- Plugin: Customize → Plugins → Browse / „+” → Add marketplace (GitHub) lub upload własnego pliku pluginu.
- Pojedynczy skill (Help Center 12512180): *„Package your skill folder as a ZIP file. Navigate to Customize > Skills. To add custom skills, click the "+" button, then "+ Create skill." Select "Upload a skill." Upload a ZIP file containing your skill folder.”*
- Struktura ZIP skilla (claude.com/docs/skills/how-to):
  ```
  my-skill.zip
  └── my-skill/
      ├── SKILL.md
      └── scripts/
  ```
  *„Incorrect structure: my-skill.zip ├── SKILL.md # files directly in ZIP root”*
- Wymaganie: Settings → Capabilities → „Code execution and file creation” włączone.
- Nagrywanie skilla (Record a skill) — *„isn't available in chat, on Windows”* (nie dotyczy nas).

### 8.4 Team/Enterprise (gdyby Paweł miał organizację)
- Org marketplace: upload ZIP < **50 MB**, ≤ 100 pluginów (manual) / ≤ 500 (GitHub sync), repo **prywatne lub internal** (publiczne niedozwolone dla org), źródła: ścieżki względne/github/url/git-subdir. Nazwa pluginu ≤ 64 znaki kebab-case.
- *„Plugins set to "Installed by default" or "Required" also install in Claude Code for users who sign in with their Claude account.”*

### 8.5 Wymogi pliku ZIP (najostrzejszy wspólny mianownik — z opisu Gov + Desktop)
- Ścieżki w ZIP z `/`: *„Windows PowerShell 5.1's `Compress-Archive` can write backslash paths, which the upload rejects”* (OK: Eksplorator „Compress to ZIP”, 7-Zip, `tar.exe`, PowerShell 7, Python `zipfile`).
- Tekst UTF-8 **bez BOM**; nazwy plików/folderów **ASCII**; brak plików zaczynających się od kropki poza `.claude-plugin/` i `.mcp.json` (`.github/`, `.gitattributes` poza paczką pluginu — dlatego plugin w podkatalogu repo, a ZIP budujemy z katalogu pluginu).
- Najwyżej jeden folder-opakowanie.

---

## 9. Rekomendowana struktura repozytorium

```text
KWIATEKmedia-Meta-Ads-Skills/                 # repo = marketplace "kwiatekmedia"
├── .claude-plugin/
│   └── marketplace.json                      # source: ./plugins/kwiatekmedia-meta-ads
├── plugins/
│   └── kwiatekmedia-meta-ads/                # = paczka pluginu (to trafia do ZIP-a)
│       ├── .claude-plugin/plugin.json        # name, displayName, version, description…
│       ├── README.md
│       ├── CHANGELOG.md
│       ├── skills/
│       │   ├── master-kreacji/SKILL.md
│       │   ├── strateg-kreacji/
│       │   │   ├── SKILL.md                  # < 500 linii, frontmatter: name + description
│       │   │   └── references/
│       │   │       ├── <wlasne-pliki>.md
│       │   │       └── <kopie-z-shared>.md   # WYGENEROWANE przez build.py
│       │   ├── statyczne-reklamy/ …  copy-reklamowe/ …  scenariusze-wideo/ …  hooki/ …
│       │   └── audytor/ …  dywersyfikacja/ …  planer-kampanii/ …  iteracje/ …
│       └── evals/                            # claude plugin eval (results/ w .gitignore)
│           ├── copy-trigger-fotowoltaika/{prompt.md, graders/*.md}
│           └── …
├── shared/                                   # ŹRÓDŁO PRAWDY wiedzy wspólnej (nie w paczce)
│   ├── mapa.json                             # {"copy-reklamowe": ["zasady-copy-pl.md", …], …}
│   └── *.md
├── scripts/build.py                          # sync shared → references, walidacja, ZIP-y
├── dist/                                     # (gitignore) wynik build: ZIP-y do uploadu
├── research/ …
├── README.md                                 # instrukcje instalacji dla 3 środowisk
├── .gitattributes                            # * text=auto eol=lf
└── .gitignore                                # dist/  **/evals/results/
```

Konwencje:
- Nazwy skilli: `[a-z0-9-]`, ASCII (bez ą/ę/ł), ≤ 64, bez „claude”/„anthropic”, folder = `name`. Rozważyć spójny wzorzec (best practices: *„Consider using gerund form”* — po polsku: rzeczowniki/czynności, byle spójnie).
- Nazwa pluginu dłuższa = dłuższa komenda (`/kwiatekmedia-meta-ads:copy-reklamowe`); goła `/copy-reklamowe` też działa, jeśli nie koliduje. Ewentualnie krótsza `name` (np. `kwiatek-ads`) + `displayName: "KWIATEKmedia Meta Ads"` — decyzja Pawła; **nazwy nie zmieniać po publikacji** (w razie potrzeby `renames`).
- `.gitattributes` z `eol=lf` — spójne końce linii (CRLF sam w sobie nie psuje walidatorów [TEST], ale ujednolica diffy i ZIP-y).

Dystrybucja (co podać Pawłowi):
| Środowisko | Jak |
|---|---|
| Claude Code | `/plugin marketplace add https://github.com/Pawel2884/KWIATEKmedia-Meta-Ads-Skills.git` → `/plugin install kwiatekmedia-meta-ads@kwiatekmedia` |
| Cowork / claude.ai (zalecane) | Customize → Plugins → „+” → Add marketplace → `Pawel2884/KWIATEKmedia-Meta-Ads-Skills` → Install (repo musi być dostępne dla konta; dla repo prywatnego potrzebny dostęp GitHub) |
| Cowork / claude.ai (offline) | Customize → Plugins → upload `dist/kwiatekmedia-meta-ads.zip` (lub `.plugin`) |
| claude.ai – pojedyncze skille (fallback, np. brak pluginów w planie/czacie) | Customize → Skills → „+” → Upload a skill → `dist/skills/<skill>.zip` (każdy osobno; wtedy NIE instalować równolegle pluginu, żeby nie dublować skilli) |

---

## 10. Skrypt `scripts/build.py` — przetestowany prototyp [TEST]

Test w tej sesji: `build.py --check` wykrył nieaktualne kopie (exit 1) → `build.py` zsynchronizował i zbudował `dist/kwiatekmedia-meta-ads.zip`, `.plugin`, `dist/skills/*.zip` → `--check` OK → rozpakowane ZIP-y skilli przeszły `quick_validate.py` Anthropic („Skill is valid!”, także skill, który w pluginie miał `argument-hint` — pole zostało usunięte) → `claude plugin validate` marketplace i pluginu: „Validation passed”.

```python
#!/usr/bin/env python3
"""Build: kopiuje shared/ do skills/*/references/, waliduje, pakuje ZIP-y.
Uzycie: python scripts/build.py [--check]"""
import json, re, sys, zipfile
from pathlib import Path
import yaml  # pip install pyyaml

ROOT = Path(__file__).resolve().parent.parent
PLUGIN = ROOT / "plugins" / "kwiatekmedia-meta-ads"
SHARED, DIST = ROOT / "shared", ROOT / "dist"
SPEC_KEYS = {"name", "description", "license", "compatibility", "metadata", "allowed-tools"}
HEADER = "<!-- WYGENEROWANE z shared/{} przez scripts/build.py - NIE EDYTUJ TUTAJ -->\n"
EXCLUDE = {"evals", "__pycache__", ".DS_Store"}

def split_fm(text):
    m = re.match(r"^---\n(.*?)\n---\n?(.*)$", text, re.S)
    if not m: raise ValueError("brak frontmattera")
    return yaml.safe_load(m.group(1)), m.group(2)

def check_skill(d, errors):
    raw = (d / "SKILL.md").read_bytes()
    if raw.startswith(b"\xef\xbb\xbf"): errors.append(f"{d.name}: BOM w SKILL.md")
    fm, body = split_fm(raw.decode("utf-8").replace("\r\n", "\n"))
    name, desc = fm.get("name", ""), str(fm.get("description", ""))
    if name != d.name: errors.append(f"{d.name}: name != nazwa folderu")
    if not re.fullmatch(r"[a-z0-9]+(-[a-z0-9]+)*", name) or len(name) > 64: errors.append(f"{d.name}: zla nazwa")
    if not desc or len(desc) > 1024 or "<" in desc or ">" in desc: errors.append(f"{d.name}: description pusty/>1024/<>")
    if len(body.splitlines()) > 500: errors.append(f"{d.name}: SKILL.md > 500 linii")
    for p in d.rglob("*"):
        if not p.name.isascii(): errors.append(f"{d.name}: nie-ASCII nazwa pliku {p.name}")
    return fm, body

def sync_shared(check, errors):
    mapa = json.loads((SHARED / "mapa.json").read_text("utf-8"))
    for skill, files in mapa.items():
        for f in files:
            want = HEADER.format(f) + (SHARED / f).read_text("utf-8")
            dst = PLUGIN / "skills" / skill / "references" / f
            if check:
                if not dst.exists() or dst.read_text("utf-8") != want: errors.append(f"{skill}: nieaktualna kopia {f}")
            else:
                dst.parent.mkdir(parents=True, exist_ok=True); dst.write_text(want, "utf-8", newline="\n")

def zip_dir(src, out, prefix="", override=None):
    with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:
        for p in sorted(src.rglob("*")):
            rel = p.relative_to(src)
            if p.is_dir() or EXCLUDE & set(rel.parts): continue
            arc = prefix + rel.as_posix()                      # zawsze "/" w ZIP
            data = override.get(rel.as_posix()) if override else None
            z.writestr(arc, data) if data is not None else z.write(p, arc)

def main():
    check, errors = "--check" in sys.argv, []
    sync_shared(check, errors)
    skills = sorted(p for p in (PLUGIN / "skills").iterdir() if (p / "SKILL.md").exists())
    parsed = {d.name: check_skill(d, errors) for d in skills}
    if errors: print("\n".join("BLAD: " + e for e in errors)); sys.exit(1)
    if check: print("OK"); return
    (DIST / "skills").mkdir(parents=True, exist_ok=True)
    zip_dir(PLUGIN, DIST / "kwiatekmedia-meta-ads.zip")          # Customize > Plugins (upload)
    (DIST / "kwiatekmedia-meta-ads.plugin").write_bytes((DIST / "kwiatekmedia-meta-ads.zip").read_bytes())
    for d in skills:                                              # Customize > Skills (upload)
        fm, body = parsed[d.name]
        fm = {k: v for k, v in fm.items() if k in SPEC_KEYS}     # tylko pola spec Agent Skills
        skill_md = "---\n" + yaml.safe_dump(fm, allow_unicode=True, sort_keys=False, width=10**6) + "---\n" + body
        zip_dir(d, DIST / "skills" / f"{d.name}.zip", prefix=f"{d.name}/", override={"SKILL.md": skill_md})
    print("Zbudowano:", *sorted(str(p.relative_to(ROOT)) for p in DIST.rglob("*.zip")), sep="\n  ")

main()
```
Uwagi: `yaml.safe_dump` przepisze frontmatter w poprawnym YAML (np. doda cudzysłowy tam, gdzie trzeba) — to dodatkowo chroni ZIP-y skilli przed błędem parsowania PyYAML. Evale (`evals/`) są wykluczone z ZIP-ów.

---

## 11. Testowanie

### 11.1 `claude plugin validate` — co sprawdza, a czego NIE [PEŁNY + TEST]
- `claude plugin validate .` z korzenia repo → sprawdza `marketplace.json` (schemat, duplikaty nazw, `..` w ścieżkach, ostrzeżenia nazw niezgodnych z Desktop/claude.ai) i `plugin.json` każdego wpisu z lokalnym źródłem. *„From a marketplace directory, Claude Code doesn't open the plugins' skill, agent, command, or hook files.”*
- `claude plugin validate ./plugins/kwiatekmedia-meta-ads` → `plugin.json`, `hooks/hooks.json`, frontmatter skilli/agentów/komend w domyślnych katalogach.
- `--strict` = ostrzeżenia jako błędy; `--json` = raport JSON; kody wyjścia 0/1/2.
- [TEST] Wykrywa: YAML, który się **w ogóle** nie parsuje (np. niezamknięty cudzysłów): *„YAML frontmatter failed to parse… At runtime this skill loads with empty metadata (all frontmatter fields silently dropped).”*
- [TEST] **NIE wykrywa** (a upload/quick_validate odrzuci):
  - `description: Audytor kreacji: sprawdza reklamy.` (niezacytowany dwukropek) — Claude Code akceptuje, **PyYAML: „mapping values are not allowed here”** → w opisach z dwukropkami używać cudzysłowów lub `description: >`.
  - SKILL.md zapisany z **BOM** — Claude Code: passed; quick_validate: *„No YAML frontmatter found”*.
  - pola spoza spec (`argument-hint` itd.) — w pluginie poprawne, w uploadzie błąd.
- Dlatego w checkliście: `claude plugin validate . --strict` + `claude plugin validate plugins/kwiatekmedia-meta-ads --strict` + `python scripts/build.py --check` (+ opcjonalnie `quick_validate.py` / `skills-ref validate` na rozpakowanych ZIP-ach z `dist/skills/`).
- Inne przydatne: `claude plugin details kwiatekmedia-meta-ads@kwiatekmedia` (inwentarz + koszt tokenów), `claude --debug` (ładowanie pluginów), `/plugin` → zakładka Errors.

### 11.2 `claude plugin eval` [PEŁNY: plugin-evals]
**Wymagania:** Claude Code **v2.1.269+**; plugin z manifestem; *„The same authentication and model provider your normal Claude Code sessions use. Eval runs, judge-scored graders, and `claude plugin eval init` call the model with your credentials, so they count against your plan's usage limits or your API bill.”* → **klucz API nie jest wymagany** (wystarczy subskrypcja), w CI — `ANTHROPIC_API_KEY`.

**Jak działa:** każdy case uruchamiany domyślnie **3×** w izolowanej sesji `claude -p` z tylko tym pluginem + 3× bez pluginu (baseline) → kolumny `WITH`, `W/OUT`, `Δ`. Izolacja: *„Nothing personal or project-level loads”* (brak ustawień, MCP użytkownika, pamięci, innych skilli) → **Meta Ads MCP Pawła nie będzie dostępny w evalach**; skille muszą mieć ścieżkę bez MCP (wklejone dane/CSV). Każdy run startuje w pustym katalogu; *„The Artifact tool is off.”*; agent nie widzi plików evali.

**Układ:**
```text
plugins/kwiatekmedia-meta-ads/evals/
├── <case>/
│   ├── prompt.md          # frontmatter: pola case'u; body: prompt
│   ├── graders/<nazwa>.md # jeden grader na plik
│   └── case.yaml          # opcjonalnie: context.* (scaffold_script, history_file, add_dirs)
├── mocks/<server>/<tool>.md   # tylko dla serwerów MCP zadeklarowanych w pluginie
└── results/<timestamp>/{aggregate-result.json, report.html}   # do .gitignore
```

**`prompt.md` — pola** (nieznany klucz = błąd): `schema_version` ("1.1"), `name`, `description`, `tags`, `plugins` (np. `["../.."]`), `runs` (1–50, dom. 3), `expected_outcome`, `model`, `max_turns` (dom. 10, ≤200), `timeout_seconds` (dom. 300, ≤3600), `allowed_tools` (dom. `[]`; read-only: Read, Glob, Grep, NotebookRead, Skill, Agent, TodoWrite, Task*), `append_system_prompt`, `env` (tylko `EVAL_*`).

**Typy graderów:** `regex` (`pattern`, `flags`, `match: not_contains | "count:N"`, `target`), `tool_used` (`tool`, `input_match`, `min`, `max`), `tool_order` (`before`, `after`), `file_exists` (`path`, `exists`), `llm` (rubryka w body; 2 z 3 głosów PASS; `focus`), `baseline` (`baseline_file`, `criteria`). Wspólne: `type`, `weight` (dom. 1), `arm` (`with-only` | `both`). `target`/`focus`: `last_message` (dom.), `trace`, `files`, `{ source: file, path: … }`, `mock_calls`. Brak graderów z własnym kodem.
- W trybie dwóch ramion `tool_used` z `tool: Skill` jest tylko wskaźnikiem (nie liczy się do wyniku) — chyba że `arm: both`.

**Przykładowe case'y dla naszego pluginu:**

`evals/copy-trigger-fotowoltaika/prompt.md`
```markdown
---
description: Naturalna prośba o teksty reklam powinna uruchomić copy-reklamowe
tags: [trigger, copy]
max_turns: 15
timeout_seconds: 600
allowed_tools: [Read, Glob, Grep, Skill]
---

Prowadzę firmę montującą fotowoltaikę pod Rzeszowem. Napisz 3 warianty tekstu głównego i nagłówka do reklamy na Facebooku z formularzem kontaktowym. Grupa: właściciele domów 35–60 lat.
```
`evals/copy-trigger-fotowoltaika/graders/skill-fired.md`
```markdown
---
type: tool_used
tool: Skill
input_match: '"skill"\s*:\s*"(?:[\w-]+:)?copy-reklamowe"'
---
```
`evals/copy-trigger-fotowoltaika/graders/jakosc.md`
```markdown
---
type: llm
---

PASS jeśli odpowiedź jest po polsku i zawiera 3 wyraźnie różne warianty tekstu głównego (różne kąty/motywacje, nie przeredagowania) oraz nagłówek do każdego, bez obietnic gwarantowanych oszczędności.
FAIL jeśli wariantów jest mniej niż 3, są niemal identyczne, tekst jest po angielsku albo obiecuje gwarantowany zysk.
```
`evals/copy-trigger-fotowoltaika/graders/bez-slopu.md`
```markdown
---
type: regex
pattern: "w dzisiejszym dynamicznym|odkryj moc|rewolucyjn"
flags: i
match: not_contains
---
```
`evals/nie-uruchamia-przy-niezwiazanym/prompt.md` + grader (skill NIE może się odpalić — `arm: both`):
```markdown
---
type: tool_used
tool: Skill
input_match: '"skill"\s*:\s*"(?:kwiatekmedia-meta-ads:)?(?:master-kreacji|copy-reklamowe|hooki|audytor)"'
min: 0
max: 0
arm: both
---
```
`evals/master-orkiestruje/graders/kolejnosc.md`
```markdown
---
type: tool_order
before: { tool: Skill, input_match: 'master-kreacji' }
after: { tool: Skill, input_match: 'strateg-kreacji' }
---
```

**Uruchomienie:**
```bash
cd plugins/kwiatekmedia-meta-ads
claude plugin eval init                     # wywiad: Claude sam proponuje case'y i gradery
claude plugin eval init --bare nazwa-case   # pusty szablon [TEST: tworzy prompt.md + graders/criteria.md]
claude plugin eval .                        # cała suita (3 runy × 2 ramiona na case)
claude plugin eval . --case copy-* --runs 1 --ablation none   # tania iteracja
claude plugin eval . --trust-plugin --json results.json --threshold 0.8 --no-publish --max-cost-usd 20   # CI
```
Raport: tabela `CASE WITH W/OUT Δ RUNS COST NOTES`, `report.html` (samodzielny) w `evals/results/<timestamp>/`; przy logowaniu subskrypcją publikowany jako prywatny artifact (`--no-publish` = lokalnie). Kody: 0 OK, 1 case poniżej progu/błąd, 2 częściowy (limit kosztu/autoryzacja), 130/143 przerwany. Domyślny próg `--threshold 1.0` — ustawić realny (np. 0.8). Koszt orientacyjny: case ≈ 6 runów agenta + wywołania sędziego (przykład z dokumentacji: 1 case = $0.41).
Windows: bez przyznawania Bash evale działają natywnie; *„Native Windows has no backend, so run shell-granting suites under WSL2”*.

### 11.3 Inne formaty evali (nie mylić)
- skill-creator (`/plugin install skill-creator@claude-plugins-official`): `evals/evals.json` w folderze skilla: `{"skill_name": "...", "evals": [{"id": 1, "prompt": "...", "expected_output": "...", "files": []}]}` + asercje, benchmark with/without, optymalizacja opisu (wymaga `claude -p`). *„The two formats aren't interchangeable.”*
- Best practices (platform): struktura `{"skills": [...], "query": "...", "files": [...], "expected_behavior": [...]}` — *„There is not currently a built-in way to run these evaluations.”*

---

## 12. Kluczowe zasady autorskie (Skill authoring best practices — platform.claude.com) [PEŁNY]

- *„Concise is key… Default assumption: Claude is already very smart. Only add context Claude doesn't already have.”*
- Stopnie swobody: wysoka (heurystyki), średnia (szablon/pseudokod), niska (dokładny skrypt) — dopasować do kruchości zadania.
- Opis: *„Always write in third person. The description is injected into the system prompt”*; *„Be specific and include key terms. Include both what the Skill does and specific triggers/contexts for when to use it.”* skill-creator: opisy trochę „pushy”, bo *„Claude has a tendency to "undertrigger" skills”*; wszystkie „kiedy używać” w opisie, nie w body. *„Claude only consults skills for tasks it can't easily handle on its own”* → testowe prompty muszą być merytoryczne.
- *„Keep SKILL.md body under 500 lines”*; *„Keep references one level deep from SKILL.md”* (zagnieżdżone odwołania → Claude czyta częściowo, np. `head -100`); pliki referencyjne > 100 linii z **spisem treści** na górze.
- Workflow z checklistą do skopiowania + pętle walidacji („draft → sprawdź wg checklisty → popraw → powtórz”).
- Bez informacji zależnych od czasu (sekcja „Old patterns”); spójna terminologia; szablony i przykłady wejście/wyjście.
- *„Build evaluations first”* — min. 3 scenariusze, baseline bez skilla; iteracja Claude A (autor) / Claude B (tester); testy na Haiku/Sonnet/Opus.
- Anti-patterns: ścieżki Windows (`\`), zbyt wiele opcji bez domyślnej.
- MCP: pełne nazwy narzędzi `ServerName:tool_name`.
- Checklista: opis konkretny z wyzwalaczami; body < 500 linii; referencje 1 poziom; brak treści zależnych od czasu; spójne terminy; konkretne przykłady; ≥ 3 ewaluacje; test na realnych scenariuszach.

---

## 13. Pułapki i checklista przed wydaniem

- [ ] `plugin.json`: `name` kebab-case, `version` ustawione i podbite, UTF-8 bez BOM.
- [ ] `marketplace.json`: `source: "./plugins/kwiatekmedia-meta-ads"`, bez `version` we wpisie (lub zgodna), nazwa marketplace'u niezarezerwowana.
- [ ] Każdy SKILL.md: frontmatter zaczyna się w 1. linii od `---`; `name` = folder; opis 3. osoba, wyzwalacze na początku, ≤ 1024 znaków, bez `<>`, **w cudzysłowie lub `>`, jeśli zawiera `: `**; body < 500 linii.
- [ ] Brak `disable-model-invocation: true` w skillach, które master ma wywoływać.
- [ ] Brak `!`-komend, brak zależności od `$ARGUMENTS` i `${CLAUDE_PLUGIN_ROOT}` w treści (ścieżki względne `references/…`).
- [ ] Wiedza wspólna skopiowana (`build.py --check` OK); nazwy plików ASCII; brak symlinków; brak top-level `bin/`.
- [ ] `claude plugin validate . --strict` i `claude plugin validate plugins/kwiatekmedia-meta-ads --strict` → passed.
- [ ] ZIP-y zbudowane skryptem (nie `Compress-Archive` z PS 5.1); ZIP skilla ma folder skilla w korzeniu; ZIP pluginu ma `.claude-plugin/` w korzeniu.
- [ ] Evale: ≥ 3 case'y na skill kluczowy + case negatywny + case orkiestracji; `evals/results/` w `.gitignore`.
- [ ] Stare skille Pawła wyłączone w Customize → Skills przed testami (konkurencja opisów).
- [ ] Nie instalować równocześnie pluginu i tych samych skilli jako pojedynczych uploadów (duplikaty).
- [ ] Windows + Claude Code: `marketplace add` przez `https://…git` lub `CLAUDE_CODE_PLUGIN_PREFER_HTTPS=1`.

---

## 14. Sprzeczności / niezweryfikowane

1. **Pluginy w czacie claude.ai**: Help Center 13837440 (2026-09-23) — tak (skille działają, hooki/subagenty wyszarzone); claude.com/docs/cowork/guide/plugins — „They aren't used in Chat.” → zweryfikować na koncie Pawła.
2. **Limit `description`**: spec/API/claude.com/quick_validate — 1024; Help Center 12512198 — 200 znaków (prawdopodobnie przestarzałe); Claude Code listing — 1536 (opis + `when_to_use`).
3. **`name`**: Help Center — „human-friendly” (np. „Brand Guidelines”); pozostałe źródła — kebab-case = folder. Stosować kebab-case.
4. **Pole `dependencies`** we frontmatterze (claude.com how-to, Help Center) vs lista dozwolonych pól walidatora (6 pól, bez `dependencies`) → nie używać.
5. **`../../shared` w czacie claude.ai (plugin)** — działa w Claude Code i (wg wzorca Anthropic) w Cowork; w czacie niezweryfikowane → stąd rekomendacja kopii w `references/`.
6. **Limit rozmiaru ZIP skilla w UI claude.ai** — liczba nieopublikowana w przeczytanych źródłach (API: 30 MB).
7. **Upload `.plugin` vs `.zip` w Customize → Plugins** — dokumentacja mówi o „plugin package”/`.zip`; `.plugin` generuje skill Anthropic do instalacji z podglądu w czacie Cowork → budować oba.
8. Platform overview: „Custom Skills do not sync across surfaces” — nieaktualne względem sync claude.ai → Claude Code (v2.1.273+).
