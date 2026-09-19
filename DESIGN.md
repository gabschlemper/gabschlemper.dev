---
name: Gabriela Schlemper — The Filed Claim
description: A portfolio recast as a filed patent — companies as independent claims, case studies as dependent claims, technologies as cited references.
colors:
  desk-ground: "#0b0b0f"
  desk-panel: "#131318"
  desk-border: "#2a2a33"
  desk-border-strong: "#3c3c48"
  desk-card: "#1b1b22"
  desk-text: "#e9e9ee"
  desk-text-secondary: "#a3a3b0"
  desk-text-tertiary: "#82828f"
  paper: "#16161d"
  paper-card: "#1f1f28"
  paper-border: "#2f2f3a"
  paper-border-strong: "#454552"
  ink: "#eeeef3"
  ink-secondary: "#a7a7b4"
  ink-tertiary: "#868693"
  electric-indigo: "#8a7ef2"
  electric-indigo-fill: "#5145d8"
  electric-indigo-ink: "#f5f4ff"
  selection: "rgba(138, 126, 242, 0.22)"
  signal-magenta: "#ef5da8"
  registry-amber: "#f2b84b"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "normal"
  headline:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "normal"
  title:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "17.5px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  exhibit: "3px"
  control: "4px"
  overlay: "6px"
  pill: "50%"
spacing:
  xs: "6px"
  sm: "10px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  xxl: "56px"
components:
  card:
    backgroundColor: "{colors.paper-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.exhibit}"
    padding: "20px 24px"
  card-hover:
    backgroundColor: "{colors.paper-card}"
    rounded: "{rounded.exhibit}"
  claim-tag:
    backgroundColor: "{colors.electric-indigo-fill}"
    textColor: "{colors.electric-indigo-ink}"
    typography: "{typography.label}"
    rounded: "3px"
    padding: "2px 7px"
  claim-tag-outline:
    backgroundColor: "transparent"
    textColor: "{colors.electric-indigo}"
    typography: "{typography.label}"
    padding: "1px 6px"
  nav-link-active:
    backgroundColor: "{colors.electric-indigo-fill}"
    textColor: "{colors.electric-indigo-ink}"
    rounded: "3px"
    padding: "7px 10px"
  stamp:
    textColor: "{colors.signal-magenta}"
    typography: "{typography.label}"
  readout-value:
    textColor: "{colors.registry-amber}"
    typography: "{typography.label}"
  contact-link:
    backgroundColor: "{colors.desk-card}"
    textColor: "{colors.desk-text}"
    rounded: "{rounded.exhibit}"
    padding: "6px 14px"
---

# Design System: Gabriela Schlemper — The Filed Claim

## Overview

**Creative North Star: "The Filed Claim"**

The site is a patent filing, not a project grid or a motion-heavy dev-portfolio flex. A near-black graphite desk (`#0b0b0f`) carries the site chrome — sidebar, command palette, scrollbar — as fixed desk furniture that never changes with the document open on it. Every route renders inside `.screen`, a single sheet of document paper that sits *on* that desk, lifted by a soft compound shadow rather than a hard drop-shadow or a light/dark contrast switch. The neutrals run cool graphite, not sepia or aged parchment: a modern registry rather than a stack of yellowed paper — the desk stays the darkest surface in the room; the paper is one step lighter, so it still visibly reads as the lit thing, without the system reaching for daylight-white or for warmth. The light theme (`data-theme="light"`) is a genuinely separate, bright variant reserved for the explicit toggle, not a blend of the two dark surfaces.

Companies are independent claims, case studies are dependent claims ("the system of claim N, wherein…"), capabilities are claim elements, technologies are numbered cited references. This structural vocabulary is expressed through small mono badges (`claim-tag`), inline citation numerals, and a foot-of-document reference list — never through rewritten prose. Three committed inks carry that structure: electric indigo signs claim numbers, links, and active state; magenta marks the one authored stamp; amber engraves the readout and citation numerals. Nothing else on the page is colored. Type does the rest of the hierarchy work: Source Serif 4 for every claim/prose face at every size, JetBrains Mono for every number, date, label, and piece of document chrome. No third face, no system UI font, ever appears.

The one authored physical touch is the stamp mark on the cover — a hand-drawn two-ring checkmark SVG, "approved for contact" — and it is deliberately singular: the system does not multiply stamps, textures, or decorative flourishes elsewhere. Depth is conveyed by layered shadow and the desk/paper token split, never by neobrutalist hard-offset shadows, glyph icons, or a system display face standing in for the serif.

**Key Characteristics:**
- Three committed inks, each a distinct filing tool, not a "brand palette": electric indigo signs (claim numbers, links, active nav, focus), magenta marks the one authored stamp, amber engraves the instrument register (readouts, citation numerals). Nothing else on the page is colored.
- Two-family type system only: Source Serif 4 for reading, JetBrains Mono for every number and label. No third face.
- The paper document visibly lifts off the dark desk via a compound ambient shadow, not a light/dark surface switch.
- A recurring claim/citation vocabulary (`claim-tag`, `citation-list`, `docket`) stands in for a features list — structure is argued, not decorated.
- Counts render as a ruled instrument readout (ticked scale + index marks), never as soft stat-card tiles.

## Colors

A two-surface, three-ink system: a near-black graphite desk holds fixed chrome; a slightly lighter graphite paper holds every document; three committed inks — signing indigo, signal magenta, registry amber — split the structural signal that a single accent used to carry alone. All values below are the shipped dark theme, the default and primary reading surface; the light theme composes its own tones for each role rather than inverting these (see each entry).

### Primary — Electric Indigo (signing ink)
- **Text/link tone** (`#8a7ef2` dark / `#4f46e5` light): claim-number outline badges, inline links, citation-tie links, focus rings, the ⌘K caret, margin notes, selection highlight (`rgba(138, 126, 242, 0.22)` dark / `rgba(79, 70, 229, 0.16)` light). Tuned to read clearly as text/borders directly on desk, paper, *and* paper-card (4.9–5.9:1 across all three in dark).
- **Fill tone** (`--accent-fill`: `#5145d8` dark / same `#4f46e5` light): the background of solid badges and active state — `claim-tag`, the active nav link. Dark theme needs a second, deeper indigo here: a single flat indigo can't be light enough to read on near-black *and* dark enough for white text on top of it at once, so the fill sits one step darker than the text/link tone, paired with `--accent-ink` (`#f5f4ff`). Light theme's indigo already clears both directions, so fill and text share one value there.
- Never used decoratively; always a link, an active/selected state, or a focus indicator.

### Secondary — Signal Magenta (the one authored stamp)
- **`#ef5da8`** dark / **`#c2185b`** light: the cover's "open to opportunities" stamp — the mark's ring, checkmark stroke, and label — only. Not a second link color, not a status palette; it stays confined to this one singular, hand-authored mark, the same restraint the stamp itself always had.

### Tertiary — Registry Amber (the instrument register)
- **`#f2b84b`** dark / **`#8f6207`** light: the ruled readout (`.stat-value`, its index tick) and the citation numerals (`.citation-num`) in the References Cited list — the two places numbers are measured or catalogued rather than signed or linked. Gives the "instrument panel" and "engraved reference plate" reading its own register, distinct from a clickable link.

### Neutral — Desk (chrome: sidebar, command palette, gutters)
- **Desk Ground** (`#0b0b0f`): page background outside the document; the darkest surface in the system.
- **Desk Panel** (`#131318`): sidebar and command-palette-adjacent chrome.
- **Desk Card** (`#1b1b22`): raised chrome surfaces (search trigger, skip link, contact chips) that sit directly on the desk, not on paper.
- **Desk Border / Border Strong** (`#2a2a33` / `#3c3c48`): hairline dividers and hover-state borders on desk chrome.
- **Desk Text / Secondary / Tertiary** (`#e9e9ee` / `#a3a3b0` / `#82828f`): body, secondary, and small-label text on the desk. Tertiary is verified ~5.2:1 on desk ground — comfortably past the AA floor for the 10–11.5px mono labels that use it.

### Neutral — Paper (every document surface, i.e. everything inside `.screen`)
- **Paper** (`#16161d`): the document background — one step lighter than desk ground, the visible "lit" surface.
- **Paper Card** (`#1f1f28`): exhibit/card surfaces inside a document (cards, chips, pills, code panels).
- **Paper Border / Border Strong** (`#2f2f3a` / `#454552`): hairline rules between document sections and hover-state card borders.
- **Ink / Ink Secondary / Ink Tertiary** (`#eeeef3` / `#a7a7b4` / `#868693`): body, secondary, and small-label text on paper. Ink Tertiary is verified ~5.0:1 on paper — AA for small mono labels.

### Named Rules
**The Three Inks Rule.** Every saturated color in the system is one of exactly three, each a real filing tool with one job: electric indigo signs (links, active state, focus, claim numbers), signal magenta marks the one authored stamp, registry amber engraves the instrument register (readouts, citation numerals). No color is ever used outside its assigned role, no fourth ink is introduced, and magenta never spreads past the singular stamp mark into a general second accent.

**The Paper-Lifts-Off-Desk Rule.** Depth between chrome and document is conveyed by token split (desk vs. paper, one step lighter) plus a compound ambient shadow on `.screen` — never by a light/dark theme switch. Both surfaces stay dark graphite in the default theme; only the explicit light-theme toggle is genuinely bright.

## Typography

**Display/Body Font:** Source Serif 4 (with Georgia, serif fallback)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, monospace fallback)

**Character:** One serif carries every size of reading prose, from the 40px cover title down to 13px inline text — weight (400/600/700) and size do the hierarchy work rather than a second display face, "the way a real filing would." JetBrains Mono is reserved entirely for numbers, dates, structural labels, and document chrome (nav, docket lines, claim tags, citation numerals) — it never appears as reading prose.

### Hierarchy
- **Display** (700, 40px, 1.12 line-height): `.cover-title`, the Home screen's applicant name — the largest text in the system.
- **Headline** (600, 32px): `.display`, the standard page-title face used across detail screens; `.display--detail` steps to 30px, `.display--case` to 29px/1.25 for case-study titles.
- **Title** (700, 17–19px): `.featured-title`, `.entry-name`, `.case-section-title` (19px) — card and section headings.
- **Body** (400, 17px, 1.7 line-height): `.prose`, `.lede`, `.case-lede` — the reading column, capped at 620–640px measure.
- **Label** (500, 10–11.5px, 0.06–0.16em tracking, uppercase): `.eyebrow`, `.docket`, `.nav-group-label`, `.case-fact-key` — mono, always uppercase, always tracked wide.

### Named Rules
**The One-Family Rule.** Source Serif 4 sets every size of reading prose in the system, from the 40px cover title to 13px card copy. No second serif, no sans, no system UI face is ever introduced for "just this one heading."

**The Docket-Not-Kicker Rule.** Page-level headings get a `.docket` metadata line — availability, dates, mono facts — placed *after* the heading, never a small caption sitting above it. The one exception, `.eyebrow` standing in as a section's only heading (Home's "highlighted case studies," Company/Profile's "responsibilities"/"achievements"/"strengths"), is deliberately weighted to match `.section-label` (700, 13.5px) rather than left as a lightweight caption — it reads as the heading itself, not a kicker announcing one below it.

## Layout

Two-region shell: a 264px sticky desk sidebar (nav, search trigger, theme toggle) plus a flexed `.main` that renders one `.screen` per route. `.screen` is centered, capped at 820px (`.screen`, standard documents), 880px (`.screen--wide`, Home), 1100px (`.screen--case`, a 2-column `1fr / 236px` grid for case studies with a sticky right-hand table-of-contents/facts aside), or 1200px (`.screen--map`, the Evidence Map). Screen padding is `60px 48px 88px` at desktop.

Below 1040px the case-study aside drops below the content (grid collapses to one column, aside goes static). Below 900px the sidebar collapses into a 56px sticky top bar with an overlay panel for nav/search/theme, rather than reflowing above the content — preserving scroll position when a reader opens navigation mid-document. Below 700px the command palette becomes full-height rather than a centered card, to stay clear of the on-screen keyboard. Below 560px, display sizes step down (`.cover-title` to 30px, `.display` to 25px) and screen padding tightens to `32px 20px 64px`.

Spacing runs a tight, mostly-even scale: 6/8/10/12/14/16/18/20/24/28/40/48/52/56/88px, reused directly as gap and padding values rather than drawn from a named token scale in code — commonly 8–24px within a component, 40–56px between page sections.

## Elevation & Depth

Hybrid: flat, hairline-bordered surfaces (`.card`, `.chip`, `.pill`, `.tag`) throughout the document, plus one structural shadow that carries the entire "paper on a desk" concept — `.screen`'s compound box-shadow — and a small number of situational shadows for genuinely floating elements (command palette, mobile nav overlay, the cover photo print). Nothing uses a hard-offset/neobrutalist shadow; every shadow is soft and ambient, diffused rather than cast at a fixed angle.

### Shadow Vocabulary
- **Document lift** (`box-shadow: 0 1px 0 rgba(0,0,0,0.35), 0 32px 64px -28px rgba(0,0,0,0.55), 0 0 0 1px var(--paper-border)`): the one shadow that does the system's central conceptual work — every `.screen` variant, marking the document as a physical sheet raised off the desk. Removed entirely on mobile (`box-shadow: none`), where the screen fills the viewport edge-to-edge.
- **Floating overlay** (`box-shadow: 0 24px 64px rgba(0,0,0,0.45)`): the command palette, the one element that floats above both desk and document.
- **Print shadow** (`box-shadow: 0 10px 24px rgba(33,26,16,0.28)`): the cover photo frame only — paired with a 1.1° rotation, a print set slightly askew on the page. This is a one-off Home-screen touch, not a general card treatment.
- **Panel overlay** (`box-shadow: 0 18px 40px rgba(0,0,0,0.3)`): the mobile sidebar's dropped nav panel.

### Named Rules
**The Soft-Shadow-Only Rule.** Every shadow in the system is diffuse and ambient (large blur, negative spread, low opacity). No hard-offset or neobrutalist shadow exists anywhere in the build; that vocabulary belongs to a different world and is not part of this one.

## Shapes

Corners run a narrow three-step scale by role, never by whim: **3px** ("exhibit" radius) for anything cut from the same stock as a document — cards, chips, tags, pills that sit inside `.screen` (`.card`, `.case-card`, `.chip`, `.tag`, `.diagram-frame`, `.map-frame`). **4px** ("control" radius) for standalone interactive controls that live on desk chrome or float above it — `.search-trigger`, `.theme-toggle`, `.pill`, `.skip-link`, `.contact-link`. **6px** for the one true overlay, the command palette. Timeline dots are the only fully round (`border-radius: 50%`) shape in the system. Borders are hairline (1px, occasionally 1.5–1.2px) throughout; there is no double-border or thick-stroke treatment anywhere.

## Components

### Cards / Exhibits
- **Corner Style:** 3px, uniformly.
- **Background:** `.card` on paper (`--card`, resolved to `--paper-card` inside `.screen`).
- **Border:** 1px hairline, `--border` at rest, `--border2` on hover.
- **Shadow Strategy:** none at rest; `.card-link` hover adds only a 2px upward `translateY`, no added shadow — cards are "exhibits cut from the same paper stock," never a second, heavier surface floating above the document.
- **Internal Padding:** varies by density: 14–18px for compact list items (`.mini-card`, `.think-item`), 18–22px for standard cards (`.cap-card`), 20–26px for featured/entry cards (`.entry-card`, `.featured-card`).

### Claim Chrome (signature component)
The recurring structural device that stands in for a features list. `.claim-tag` is a solid badge (mono, uppercase, 10px, `2px 7px` padding) filled with `--accent-fill` and set in `--accent-ink`, marking a claim number; `.claim-tag--outline` is the same badge inverted (`--accent` text, 1px `--accent` border, transparent fill) for a secondary/citing reference. `.citation-list` sits at the foot of a claim as a numbered "References Cited" block — each `.citation-item` pairs an amber (`--accent3`) `.citation-num` with the cited technology, its link text turning signing-indigo only on hover. `.docket` is the mono metadata line every page-level heading gets instead of a kicker. Used only as small badges and reference marks; never as rewritten prose, and never for anything the content model doesn't actually support (a company that isn't a claim, a technology that isn't cited).

### Readout (signature component)
Repository counts (`.stats-grid`) render as a calibrated instrument panel, not stat-card tiles: a repeating-gradient ruled tick baseline runs the full width, and each `.stat` drops an amber (`--accent3`) index mark (a short vertical tick) to it in place of a card border. Values (`.stat-value`) are mono, bold, tabular-nums, amber; labels are small tracked mono caps. The amber register — not signing-indigo — is what marks this as measured/catalogued rather than linked. Counts animate via `CountUp`, which settles the last ~30% of the value on scroll-into-view rather than climbing from zero — deliberately, so a static/prerendered capture never shows a false "0."

### Stamp (signature component, singular)
The one authored, hand-drawn mark in the system: a two-ring circle with a checkmark path, SVG, rendered once on the Home cover ("open to opportunities"), set in signal magenta (`--accent2`) — its own ink, never reused elsewhere. Never a photo, never a filter effect, never repeated elsewhere as a general badge style — the code itself documents this as "the one authored mark in the system."

### Navigation
- **Style:** desk-panel background, sticky full-height 264px column at desktop; nav items are flat mono/serif-mixed text links (14.5px, `.nav-link`) in tracked-caps groups (`.nav-group-label`, 10px mono, 0.16em tracking).
- **Active state:** solid `--accent-fill` background, `--accent-ink` text (`aria-current="page"`) — the one place in the sidebar the accent appears as a background fill.
- **Hover:** text lightens (`--text2` → `--text`), no background change.
- **Mobile:** collapses to a 56px sticky top bar with brand + search/menu actions; the nav list appears as an absolutely-positioned overlay panel below the bar, never pushing content down.

### Inputs / Search
- **Style:** `.search-trigger` and `.palette-input` — 1px bordered (`.search-trigger`) or borderless (`.palette-input`, sits in a bordered parent), desk-card background, mono type, 4–6px radius.
- **Focus:** `:focus-visible` gets a 2px solid accent outline with 2px offset, system-wide — no glow or inset treatment.

## Do's and Don'ts

### Do:
- **Do** keep the three inks to their assigned roles: electric indigo (`#8a7ef2`/`#5145d8` fill dark, `#4f46e5` light) for links/active-state/focus, signal magenta (`#ef5da8` dark / `#c2185b` light) for the stamp only, registry amber (`#f2b84b` dark / `#8f6207` light) for readouts and citation numerals. No fourth ink, no role-swapping.
- **Do** set every size of reading prose in Source Serif 4 and every number/label/chrome element in JetBrains Mono; do not introduce a third face for emphasis.
- **Do** use the 3px / 4px / 6px radius split by role (document exhibit / standalone control / floating overlay), not an arbitrary radius per component.
- **Do** convey depth on `.screen` via the compound ambient "document lift" shadow, and remove it entirely at mobile widths where the screen goes edge-to-edge.
- **Do** render repository counts as a ruled instrument readout (ticked baseline + index mark + tabular mono numerals), not as soft stat-card tiles.
- **Do** give every page-level heading a `.docket` metadata line placed after it, in place of a kicker placed above it.

### Don't:
- **Don't** introduce a hard-offset or neobrutalist drop-shadow anywhere; every shadow in this system is soft and ambient.
- **Don't** treat `--paper`/`--paper-card` and `--bg`/`--panel` as interchangeable: the document surface is always one step lighter than the desk that holds it, never the same token, never inverted.
- **Don't** multiply the stamp mark or any hand-authored texture into a general decorative device; it is a singular, one-time authored touch on the Home cover.
- **Don't** let signal magenta spread past the stamp, or registry amber past the readout/citation numerals, into a general second or third link color — each ink stays confined to its one assigned role.
- **Don't** reach for sepia, cream, or any warm parchment tone for the neutrals — this world is cool graphite, a modern registry, not aged paper.
- **Don't** use `.eyebrow` as a caption sitting above a separate, bigger heading (a kicker). Its only sanctioned use is standing in as a section's own heading, weighted to match `.section-label`.
- **Don't** use a glyph icon font or system display face; icons that exist (the stamp mark) are hand-drawn inline SVG, and every face is Source Serif 4 or JetBrains Mono.
