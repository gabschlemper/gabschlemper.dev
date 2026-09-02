---
version: 1
slug: "src-index-css"
primary_target: "src/index.css"
related_targets: ["src/pages","src/components","src/index.html"]
---

## Scope

Whole site redesign (all routes), Persuade mode. Replaces the "field notebook" visual world entirely; content, routes, data model, and the auto-generated `knowledge-base.ts` pipeline are unchanged.

## Brief

Audience: recruiters and hiring managers, scanning for fit then verifying one or two claims before/around a screen. Job: verify specific claims (achievements, technologies, capabilities) via real evidence, fast. Proof: 3 companies, 10 case studies, 18 capabilities, 27 technologies — real content already in `knowledge-base.ts`. Constraints: dark-mode-first default preserved; content pipeline is read-only; nothing gimmicky or playful; nothing that slows scanning.

## Direction contract

THESIS: every capability is a claim, every case study a dependent claim, every technology a cited reference — the portfolio as a filed patent, not a project grid and not a motion-heavy dev-portfolio flex.

OWN-WORLD: near-black desk ground (#14120d); cream document panels lit like paper under a lamp (#f2e9d8); ink #201c14; one committed stamp-red accent (#b23a2e) for claim numbers, status, and citation ties — Committed color strategy, one saturated color carrying the load-bearing role. Source Serif 4 sets claim prose; JetBrains Mono numbers every claim, date, and reference. Independent claims (companies) sit at the margin; dependent claims (case studies) indent beneath "the system of claim N, wherein…"; inline citation marks [1][2] drop to a reference list of technologies at each claim's foot. Raised by Signal Bench: counts/metadata render as calibrated instrument readouts, not soft stat cards. Raised by Leather Reading Shelf: one authored filing-stamp texture marks completed claims, the system's only physical touch.

STORY: a hiring manager opens the filed cover page, scans independent claims (companies) for fit, follows one claim's dependents (case studies) and citations (technologies) to verify a specific achievement, and leaves able to cite exactly what she built and why.

FIRST VIEWPORT: cover — name, headline, one-line claim thesis, a calibrated readout panel (3 companies · 10 case studies · 18 capabilities · 27 technologies) in mono numerals — then straight into claim 1 (first company) with its dependent claims visible on scroll.

FORM: assigned direction, index 7 of the grounded list ("patent claims & prior art citation network"), seed key 725792a8, locked by the user on the decision page over The Standing Record (pick, ADR/RFC) and six catalog challengers (Signal Bench held identification but lost clarity — competitive; five declined: Scroller Queue, Guide Map, Leather Reading Shelf, Iridescent Edge, Multiplane Dawn).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved decisions

Exact page-by-page claim/dependent-claim mapping for each route (Home, Companies, Cases, Capabilities, Technologies, Profile, Journey, Principles, Evidence Map) is decided during build, inheriting this contract.
