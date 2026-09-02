# Product

<!-- impeccable:product-schema 1 -->

## Platform

* [ ] web

## Stack

Vite + React 18 + TypeScript (strict), react-router-dom (real URLs per document), plain CSS with custom properties (no utility framework). Prerendered static build deployed on Vercel.

## Users

Primary audience is recruiters and hiring managers evaluating Gabriela Schlemper for engineering roles. They arrive to quickly scan for fit, then dig into one or two case studies to verify specific claims before a screen or interview. Secondary readers (technical interviewers/peers doing deeper vetting) use the same content but are not the design priority.

## Product Purpose

A portfolio built as a documentation repository rather than a landing page: every claim it makes links to the case study that proves it. Success means a recruiter or hiring manager can verify a specific claim (a technology, an achievement, a capability) by following real evidence, not by taking her word for it.

## Positioning

The mechanism a competing portfolio could not truthfully copy: the site is an evidence graph. Four cross-referenced entity types — companies, case studies (context → constraints → alternatives → decision → trade-offs), capabilities, and technologies — plus an Evidence Map page that renders the whole graph so any claim traces back to its source. This is not a features list or a logo grid; it's a traceable argument.

## Operating Context

Content is authored upstream in a private repository (`professional-knowledge-base`: `companies/*.md`, `case-studies/*.md`, `profile/`) and synced into `src/data/knowledge-base.ts` by a generator script. That file is auto-generated and must not be hand-edited — only the presentation layer (components, styles, layout) is in scope for redesign work. Routes are per-document (companies, case studies, capabilities, technologies, profile, journey, principles, Evidence Map) so every document is independently shareable and deep-linkable.

## Capabilities and Constraints

- 3 companies, 10 case studies, 18 capabilities, 27 technologies — real content, not placeholder.
- Case studies can include hand-authored architecture diagrams (`CaseDiagramSpec`), text-derived rather than decorative.
- Command palette (⌘K) search across all documents.
- Dark/light theme, persisted to localStorage.
- Content structure, routes, and cross-referencing are fixed by the data model in `knowledge-base.ts` — a redesign changes presentation, not information architecture.

## Brand Commitments

Name: Gabriela Schlemper. Tagline: "I document engineering decisions instead of listing technologies." Revision line convention in the sidebar ("rev. YYYY.MM — written, not generated") signals the site itself is hand-crafted, consistent with its own thesis about evidence over claims.

## Evidence on Hand

All case study, company, capability, and technology content is real and sourced from the private knowledge-base repo — nothing here is placeholder or to be fabricated. CV available at `/cv/Gabriela-Schlemper-CV.pdf`.

## Product Principles

- Every claim traces to evidence — never let a redesign turn a proof point into an unsupported assertion.
- Recruiters and hiring managers scan first, verify second — the design must support fast scanning into deep individual documents, not just deep reading.
- The site's own craft is part of the pitch: since it argues "I document decisions instead of listing technologies," the execution has to visibly earn that claim.
- Structure and content are fixed (auto-generated pipeline); only the visual world and presentation are open for this redesign.

## Accessibility & Inclusion

No explicit standard was established; existing implementation shows deliberate AA contrast handling for small label text (see legacy `--text3` comments). Preserve at least that bar; no additional requirement given.
