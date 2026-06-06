# Handoff: Darkroom

## Overview
**Darkroom** turns a developer's commit history into a résumé. Each commit is treated as a frame of film; meaningful commits are "developed" into achievement bullets, curated (keep / cut / retake), and compiled into a printed résumé. This bundle is the design reference for building the app for real.

## About the Design Files
The files here are **design references created in HTML** — prototypes that show the intended look, layout, and behavior. They are **not production code to copy directly**.

The task is to **recreate these designs in the target codebase's environment** (React, Vue, Svelte, etc.) using its established components, state patterns, and styling approach. If no codebase exists yet, pick the most appropriate framework for the project and implement the designs there. Treat the HTML/CSS as the source of truth for visual values (colors, type, spacing, states) rather than as files to ship.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, component states, and interactions are all specified. Recreate the UI pixel-accurately using the codebase's own primitives. Exact tokens and measurements are in `design.html` and below.

## Screens / Views
There is one primary screen, composed of three regions inside a fixed `1360 × 880` frame.

### 1. Top bar — `height 52px`
- **Purpose:** Identity + global nav.
- **Layout:** Flex row, `space-between`, padding `0 22px`, `border-bottom: 1px var(--border-sub)`, background `rgba(15,10,6,.6)`.
- **Components:** Wordmark `DARK` + accent `ROOM` (14px, `.12em` tracking). Nav: three uppercase 10px labels (`the darkroom`, `the print`, `darkroom settings`), `--t2`, gap 26px.

### 2. Film strip column — `flex: 1`
The scrolling list of commits, divided from the panel by `border-right: 1px var(--border-sub)`. Top to bottom:
- **Canister rail** (repo switcher) — padding `18px 30px 16px`, gap `20px`, items aligned to **top**. See Components.
- **Strip head** — padding `14px 30px 12px`. Left: `film strip — <repo>` (10px uppercase, `--t2`). Right: `142 frames · 9 developed` (10px, `--t3`).
- **Sprocket holes** — a full-width row of `12 × 8` rounded rects (`border: 1px var(--border)`, radius 2, gap 6). Repeated above and below the frame list.
- **Frames** — vertically scrolling list of commit frames (see Components). Independent scroll; rail/head/sprockets stay fixed.

### 3. Résumé panel — `flex: 0 0 372px`
- **Purpose:** Shows the résumé "print" compiled from kept frames.
- **Layout:** Column, padding `30px 36px 32px`, background `linear-gradient(160deg,#120c08,#0a0705)`.
- **Components, top to bottom:**
  - Title `résumé snapshot` (10px uppercase `--t2`) + subtitle (9px `--t3`).
  - **Résumé polaroid** — the print (see Components).
  - **Meta readout** — three rows (`frames kept 9 of 142`, `canisters 4 loaded`, `last developed A · 014`), 10px, separated from the polaroid by a `1px var(--border)` rule.
  - **`develop & print`** primary button, pinned to bottom via `margin-top: auto`.

## Components

### Film canister (repository toggle)
- Body `46 × 78`, radius 7. Default: dark metal gradient `linear-gradient(90deg,#1c150e,#2c2117 40%,#1c150e)`, `border: 1px #2c2117`, inset shadow. A small lid (`::before`) and a striped film-leader band (`::after`, repeating-linear-gradient).
- **Active (mounted roll):** body `linear-gradient(90deg,#3a2410,#E07B39 45%,#3a2410)`, glow `0 0 22px rgba(224,123,57,.5)`.
- Below the canister: a roll letter (A–D, 9px) then the repo name (8px), both centered. Active tints letter → `--accent`, name → `--accent-soft`.
- **Important:** the letter and repo name sit **below** the canister body (stacked column), not inside it.

### Film frame (commit) — four states via class on `.frame`
Row = `30px` vertical gutter (frame number, `writing-mode: vertical-rl`, 9px `--t3`) + content row with `border-bottom: 1px var(--border-sub)`, padding `16px 0 16px 18px`.
- Commit line: SHA (10px `--t3`) + message (12px `--t1`) + right-aligned diff stats (`+` green `--green`, `−` red `--red`, files `--t2`).
- **`.developed`** — `developed` label (10px), then serif **bullet** (Playfair 13px, `#e2d2b4`, `border-left: 2px var(--accent)`, padding-left 14px), then actions `keep` / `cut` / `retake`.
- **`.developing`** — row tinted `rgba(224,123,57,.05)`; pulsing placeholder `· · · developing · · ·` (`--accent-soft`, left rule `--dev`). Pulse: opacity `.35 ↔ .85`, 1.5s ease-in-out infinite.
- **`.unexposed`** — trivial commit; muted (`#46382a`), `no exposure` badge, no bullet.
- **`.cut`** — opacity `.45`, rotated strike line across the row, `restore` control.

### Résumé polaroid (the print)
Outside-in:
1. **White print paper** `#ECE6D6`, padding `13px 13px 0` (classic polaroid — deeper bottom border holds the caption), radius 2, drop shadow.
2. **Black image mat** `#0A0705`, padding `13px` (the "big black edge").
3. **Résumé page image** at native ratio `610 / 791` (`object-fit: cover`, `object-position: top center`). In the prototype this is `resume.png`; in production swap for a live render/thumbnail of the generated résumé.
4. A 2px amber **wash** line at the image's bottom-left (developing mark).
- Caption in the bottom border: serif name `#1f1408` (19px), then mono role + amber `#b5641f` progress on one line (`software engineer · 2026 · 62% developed`).

### Buttons
- **Primary (`develop & print`):** `border: 1px var(--accent)`, text `--accent-soft`, background `linear-gradient(#1d130b,#160f09)`, glow `0 0 22px rgba(224,123,57,.14)`, 12px `.1em` lowercase, radius 3. Hover deepens glow.
- **Inline frame actions:** borderless lowercase text — `keep` green, `cut` red, `retake` amber. Color-only hover.

## Interactions & Behavior
| Trigger | Behavior |
|---|---|
| Click canister | Set active (amber glow), update strip header to repo name, load that repo's frames. *Prototype stubs this with a class toggle + label update — wire to real repo data.* |
| `keep` | Include the frame's bullet on the print; increment "frames kept". |
| `cut` | Remove bullet from print; frame → `.cut` (struck), offer `restore`. |
| `retake` | Regenerate the bullet (re-run develop → brief `.developing`). |
| `develop & print` | Compile all kept frames into the résumé document / printable output. |
| Developing pulse | Opacity `.35 ↔ .85`, 1.5s ease-in-out, infinite, placeholder only. |

Respect `prefers-reduced-motion` (drop the pulse to a static state). The frame list scrolls independently of the rail, head, and sprockets.

## State Management
- `activeRepo` (canister) → drives the frame list.
- Per-frame `state`: `developed | developing | unexposed | cut` (+ `kept` flag on developed).
- Derived: `framesKept`, `totalFrames`, `lastDeveloped`, `developedPercent` (shown in panel + polaroid caption).
- Data needs: list of repos; per-repo commits (SHA, message, diff stats); generated bullet text per commit; trivial-commit detection → `unexposed`.

## Design Tokens
```css
--bg:#0A0705;  --surface:#0F0A06;  --card:#1A1512;
--border:#2A2017;  --border-sub:#1C140D;
--accent:#E07B39;  --accent-soft:#F3AD6F;  --accent-hover:#C96B2A;  --dev:#3C2E1C;
--t1:#CDBB9A;  --t2:#8C8072;  --t3:#5F4F39;
--green:#3FB950;  --red:#DA3630;
--mono:'JetBrains Mono', ui-monospace, monospace;   /* UI, commits, labels, buttons */
--serif:'Playfair Display', Georgia, serif;          /* résumé bullets, names, headings */
```
Signature lighting (app + panel backgrounds):
```css
background:
  radial-gradient(80% 65% at 28% 16%, rgba(224,123,57,.16), transparent 58%),
  linear-gradient(160deg, #1a1009, #0d0805 58%, #070504);
```
Radii: 2 (paper/badges), 3 (buttons), 7 (canister). Hairline borders everywhere; the only "color" is the amber accent + diff green/red.

## Assets
- `resume.png` — sample résumé page rendered into the polaroid. Placeholder for a live document thumbnail. The only raster asset; everything else is CSS.
- Fonts: **Playfair Display** + **JetBrains Mono** via Google Fonts.

## Files
- `darkroom-reference.html` — the full interactive design (all states, working canister toggle). Primary visual reference.
- `design.html` — the design pack: tokens, type, layout, and live component recreations at exact values. Open it for copy-ready CSS values.
- `resume.png` — sample print image.
- `README.md` — this document.
