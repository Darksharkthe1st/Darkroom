# Darkroom — theme & design document

## Concept

Darkroom is a darkroom. You bring your raw film — your commit history, unprocessed and technical — and the app develops it into something human. The resume isn't built, it isn't generated. It's developed. The user is the photographer who did the work. Darkroom is the chemistry that makes it visible.

Every design decision derives from this metaphor. If it can't be justified by the darkroom, it doesn't belong in the app.

---

## Vocabulary

Nothing in Darkroom uses generic software words. Every noun is earned.

| Generic term | Darkroom term |
|---|---|
| Repositories | Rolls |
| Commits | Frames |
| Low-signal commits | Unexposed frames |
| AI processing | Developing |
| Confirmed bullet | Developed / sharp |
| Rejected bullet | Cut |
| Edit a bullet | Retake |
| Resume in progress | Contact sheet |
| Final resume | The print |
| Export PDF | Print & dry |
| Onboarding | Load your rolls |
| Settings | Darkroom settings |
| Session / workspace | The darkroom |
| Connected repos | Loaded rolls |
| Disconnected / empty | No roll loaded |

These are non-negotiable. They are the metaphor made structural.

---

## Color

The palette is chemically derived. It doesn't feel designed — it feels like a room.

### Base tones

| Role | Hex | Rationale |
|---|---|---|
| App background | `#0d0d0d` | Darkroom at night — warm black, not blue-black |
| Surface / panels | `#111111` | Chemical-soaked walls |
| Raised card | `#1a1512` | Photographic paper, unexposed |
| Border default | `#252525` | Film edge, faint |
| Border subtle | `#1e1e1e` | Almost invisible seam |

### Accent

| Role | Hex | Rationale |
|---|---|---|
| Primary accent | `#E07B39` | 35mm film canister orange — also git's brand color. Let users discover this themselves. |
| Accent hover | `#C96B2A` | Deeper amber, pressed state |

### Text

| Role | Hex | Rationale |
|---|---|---|
| Primary text | `#c8b89a` | Warm cream — photographic paper tone |
| Secondary text | `#888880` | Faded annotation |
| Tertiary / muted | `#5a4a35` | Deep amber-brown, like a partially developed image |
| Developing state text | `#3a2d1a` | Mid-process — not yet visible |

### State colors

| State | Palette | Notes |
|---|---|---|
| Unexposed | Near-black, `#2a2a2a` text | Flat, quiet, no interaction afforded |
| Developing | Amber-brown band `#3a2d1a` → `#5a4a35` | Warm and obscured, like an emerging image |
| Developed | Cream `#c8b89a`, orange left-border | Sharp, clear, actionable |
| Cut | Dimmed + diagonal strike line | Visible in strip but clearly discarded |

### Semantic

Use sparingly. Film metaphor takes precedence — only use these for true system states.

- Success / kept: `#3FB950` (film-safe green — also the "safe" color in a darkroom)
- Destructive / cut: `#DA3630`

---

## Typography

The app speaks in two voices. The split is intentional and load-bearing.

### Monospace — the raw negative

Used for: commit SHAs, frame numbers, file stats, timestamps, repo names, all UI chrome labels, the `developing...` state, badge text.

Recommended font: JetBrains Mono, or any neutral monospace. This is data — unprocessed, technical, exact.

Frame numbers follow real film edge code format: `A · 001`, `A · 002`. The roll letter prefix (A, B, C) maps to the repo. This is not labeled anywhere. Developers will recognize it.

### Serif — the developed image

Used for: generated resume bullets, the polaroid caption, the printed resume output.

Recommended font: Playfair Display for headings, Georgia or similar for body. This is the human layer — warm, meant to be read aloud, meant to impress a recruiter.

The transition from monospace commit message → serif resume bullet is the moment of development. It should feel like a shift in register, not just a style change.

### Scale

| Element | Size | Weight | Typeface |
|---|---|---|---|
| Wordmark | 14px | 500 | Mono, tracked 0.12em |
| Section labels | 10px | 400 | Mono, uppercase, tracked 0.1em |
| Frame numbers | 9px | 400 | Mono, vertical, tracked 0.08em |
| Commit messages | 12px | 400 | Mono |
| SHAs / stats | 10–11px | 400 | Mono |
| Developed bullets | 13px | 400 | Serif |
| Polaroid caption name | 14px | 500 | Serif |
| Resume body | 11pt | 400 | Serif |
| Resume heading | 18pt | 500 | Serif |

---

## Frame states

Every commit is a frame. Every frame lives in exactly one of four states. Each state has a complete visual treatment — nothing is borrowed from another state.

### Unexposed

The commit had no signal worth developing. Typo fixes, readme edits, version bumps.

- Background: `#111` (matches app surface — it disappears into it)
- Commit message: `#3a3a3a` (near-invisible)
- Badge: `no exposure` in mono, `#2d2d2d` text, `#222` border
- No action buttons
- No hover state
- Sprocket holes on this frame are slightly more spaced — the film skipped

### Developing

The AI is processing the frame. The image is emerging but not yet readable.

- Background: `#0f0c09`
- All text in developing palette (`#3a2d1a` → `#5a4a35`)
- Bullet area shows `· · · processing · · ·` in mono, pulsing at 1.5s intervals
- Left-border on bullet card: `#3a2d1a` (not orange — not developed yet)
- No action buttons until development completes
- On completion: text values resolve, colors shift to developed palette, left-border shifts to `#E07B39`

### Developed

The frame is sharp. The bullet is ready.

- Background: `#111`
- Commit message: `#c8b89a`
- Generated bullet: serif, `#d4c4a8`, with `#E07B39` left-border
- Label above bullet: `developed` in mono, `#555`
- Action buttons: `keep`, `cut`, `retake`
- Diff stats visible: `+N` in green, `−N` in red, `N files` in muted

### Cut

The user rejected this bullet. The frame stays in the strip but is marked clearly.

- Diagonal line across the full frame in `#2a2a2a` (like a grease pencil mark on physical film)
- All text at 40% opacity
- Badge: `cut` in mono
- One action: `restore` in small muted type

---

## The film strip

The strip is the primary UI surface. It is a vertical list of frames, but it should feel like a physical object.

### Sprocket holes

Rows of small rectangles (`12×8px`, `rx:2`, border `#222`, no fill) run along the top and bottom of the strip area. They are structural, not decorative — they imply sequence, direction, and physicality.

Spacing: consistent at `margin-right: 6px`. Slightly imperfect implementations (1px variance in spacing) are encouraged in production to feel physical rather than digital. For the prototype, consistent spacing is fine.

### Roll tabs

Repos are "rolls." They appear as small pills at the bottom of the strip (`api-gateway`, `auth-service`, etc.). The active roll is highlighted in orange. Inactive rolls are muted. The count of loaded rolls appears in mono to the right: `4 rolls loaded`.

### Frame numbering

Frames are numbered `[ROLL_LETTER] · [FRAME_NUMBER]`, displayed vertically in the left gutter of each frame. Roll A = first repo connected, B = second, etc. Frame numbers are sequential within a roll, counting only non-trivial commits. Unexposed frames still get numbers but use dimmed styling.

---

## The polaroid

The polaroid lives in the right panel and is the emotional center of the app. It is the resume-in-progress, made tangible.

### Structure

A physical polaroid has a square image area and a wider white border at the bottom for writing. Darkroom's polaroid mirrors this exactly:

- Image area: `140px` tall, `#0d0b09` background, where the profile silhouette develops
- Bottom caption area: white-ish (`#1a1512`), padded, where name and title live

### Development progress

The image area starts black. As bullets are added and kept, the image develops from bottom to top — the silhouette of the user's profile illustration becomes visible gradually. At 0 bullets: solid black. At 50%: lower half visible, upper half still dark. At 100%: fully sharp.

This is implemented as an overlay div that shrinks from the top as progress increases. Simple, effective, physical.

The chemical wash level — a 2px bar in `#E07B39` at the very bottom of the image area — shows the overall progress percentage.

### Caption area

Name in serif, `#c8b89a`. Role and year in mono, `#5a4a35`. These feel handwritten even in a digital font — use a slightly generous letter-spacing.

Below a thin rule: bullet tally per repo. Each repo gets a row with five dot indicators (filled dots = bullets kept from that roll). This is the contact sheet reference — you can see at a glance which rolls contributed to the final print.

### The print button

The primary CTA. Label: `develop & print`. In the accent orange border, dark background. On click: a single frame of full-white flash (80ms) before the export dialog. This is the enlarger lamp firing. It is the only full-screen animation in the app.

---

## Empty states

### No rolls loaded

The first screen a new user sees. A large, centered empty film frame with a camera icon and a missing-roll indicator inside. Label: `no roll loaded` in mono. Below: a button — `load your first roll →`.

No onboarding copy. No bullet points listing features. The metaphor communicates everything.

### Roll loaded, no frames developed yet

The strip shows the roll's commits as unexposed frames — all `#111`, all dim. The polaroid image area is fully black. The message in the polaroid caption: `nothing developed yet`. The strip label reads the commit count: `142 frames · 0 developed`.

This is not an error state. It is the beginning of the process.

### All frames cut or unexposed

If a user has cut or rejected every frame from a roll: a single frame in the strip reads `all frames cut` in muted mono. A small `reload roll` link lets them restore.

---

## The printed resume

The film theme lives in the tool. The output belongs to the user.

When the PDF is generated, it looks nothing like the darkroom. It is:

- Background: warm cream `#faf6f0`
- Body: serif, 11pt, dark warm text `#1a1208`
- Generous margins, clean hierarchy
- Header: name in serif 24pt, role and contact in mono 9pt below

The only film reference: a very faint strip of sprocket holes running horizontally along the top margin — tiny, `#e8e0d4`, barely visible. A detail that rewards close reading. Remove it if the client wants clean.

The footer reads: `developed with Darkroom` in 8pt mono, `#c8b89a`. Optional, toggleable.

---

## Sound design

Three sounds. No more.

### 1. The splice click

Trigger: frame marked `keep`.
Character: short mechanical click, like a film splicer locking. 60–80ms. Quiet.
Feeling: satisfying, precise, physical.

### 2. The developer hiss

Trigger: AI begins processing a new frame (developing state starts).
Character: soft chemical agitation sound — liquid being rocked in a tray. Fades in and out over ~1 second.
Frequency: once per session maximum. After first occurrence, processing is silent.
Feeling: you're in a darkroom, something is happening, it takes time.

### 3. The enlarger flash

Trigger: "Print & dry" is clicked.
Character: a brief electrical pop or shutter sound, paired with the white flash frame.
Feeling: the payoff. Final. Physical. Like something real was made.

All sounds are opt-in via darkroom settings. Default: on.

---

## Motion

Animations are brief and purposeful. Film metaphor justifies motion — the rest of the app is still.

| Event | Animation | Duration |
|---|---|---|
| Frame develops (completes) | Text and colors resolve, left-border shifts to orange | 300ms ease-out |
| Bullet marked `keep` | Dot fills in the polaroid tally | 150ms |
| Polaroid image progress | Overlay height shrinks upward | 400ms ease-out |
| Print & dry click | Full-screen white flash | 80ms, then fade 120ms |
| New roll loaded | Strip frames slide in from the right, staggered 30ms each | 30ms stagger |
| Frame marked `cut` | Diagonal line draws across the frame | 200ms |

Nothing bounces. Nothing spins. Nothing loops. If it moves, it's because something in the darkroom moved.

---

## What this is not

To keep the theme honest, here is an explicit list of what Darkroom should never look like:

- No gradients on UI surfaces (gradients are for the developed image in the polaroid only)
- No glows, neon, or bloom effects
- No sans-serif in resume bullet output
- No blue accent anywhere (blue is cold, blue is a monitor, blue is not a darkroom)
- No light mode as an afterthought — if a light mode is ever built, it should feel like a print studio in daylight, not a dark app with inverted colors
- No generic "AI" language — never say "generating," always say "developing"
- No progress spinners — the developing animation is the only loading state

---

## Open questions for later

- Light mode: print studio in daylight — warm whites, ink blacks, the orange accent carries over. Worth building eventually.
- Mobile: a darkroom on a phone. The strip becomes vertical scroll, the polaroid pins to the bottom as a drawer. The sprocket holes become a border along the left edge only.
- Onboarding animation: the very first roll being loaded — a film canister icon tipping over and the strip unspooling. One-time, skippable.
- Sound pack expansion: a mechanical typewriter sound for bullet text appearing character-by-character in retake mode.
