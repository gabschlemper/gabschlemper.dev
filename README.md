# gabschlemper.dev — Engineering Knowledge Base

A portfolio built as a documentation repository rather than a landing page. Every
claim it makes links to the case study that proves it.

> I document engineering decisions instead of listing technologies.

## Concept

The site is an evidence graph. Four entity types cross-reference each other:

| Entity           | Count | Role                                                        |
| ---------------- | ----- | ----------------------------------------------------------- |
| **Companies**    | 3     | Where the work happened                                      |
| **Case studies** | 10    | Context → constraints → alternatives → decision → trade-offs |
| **Capabilities** | 18    | Claims, each backed by the documents that prove it           |
| **Technologies** | 27    | How each was actually used, not a logo grid                  |

Plus a profile, a career journey, 8 engineering principles with origin stories, and
an **Evidence Map** that renders the whole graph so any claim can be traced back to
its source.

## Stack

- **Vite** + **React 18** + **TypeScript** (strict)
- **react-router-dom** — real URLs, so every document is shareable
- Plain CSS with custom properties — no utility framework
- Fonts: Special Elite (display), Courier Prime (body), JetBrains Mono (metadata)

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:8080
```

Other scripts:

```bash
pnpm build            # production build
pnpm typecheck        # tsc --noEmit
pnpm lint             # eslint
pnpm generate-sitemap # regenerate public/sitemap.xml from the route data
```

## Project structure

```
src/
├── data/
│   └── knowledge-base.ts   # all content — the single source of truth
├── lib/
│   ├── evidenceMap.ts      # graph layout for the Evidence Map
│   ├── nav.ts              # sidebar structure
│   ├── search.ts           # ⌘K search index
│   ├── slug.ts             # technology name → URL slug
│   ├── useDocumentMeta.ts  # per-route title and description
│   └── useTheme.ts         # dark/light, persisted to localStorage
├── components/
│   ├── CommandPalette.tsx  # ⌘K
│   └── Sidebar.tsx
├── pages/                  # one component per screen
├── config.ts               # contact links, accent, feature flags
└── index.css               # design tokens and all component styles
```

## Editing content

All prose lives in `src/data/knowledge-base.ts`, typed against the interfaces at the
top of that file. Adding a case study means appending one object to `cases` — the
capability pages, technology pages, search index, sitemap and Evidence Map all pick
it up automatically from the cross-references.

The upstream source for this content is the
[professional-knowledge-base](https://github.com/gabschlemper) repository
(`companies/*.md`, `case-studies/*.md`, `profile/`).

## Design

The visual design was authored in Claude Design and ported to React by hand. The
original export is kept at `design/Engineering Knowledge Base.html` for reference —
it is not part of the build.

## Deployment

Static build, deployed on Vercel. The SPA needs a catch-all rewrite to `index.html`
so deep links like `/cases/single-computation-path` resolve on hard refresh.
