// Content ported from the Engineering Knowledge Base design export.
// Source of truth for the prose lives in the professional-knowledge-base repo
// (companies/*.md, case-studies/*.md, profile/, learning/).

export interface Stat { label: string; value: string }
export interface EvolutionStep { year: string; label: string; detail: string }

export interface Profile {
  name: string
  headline: string
  oneLiner: string
  about: string[]
  philosophy: string[]
  evolution: EvolutionStep[]
  howIThink: string[]
  strengths: string[]
  interests: string[]
  preferredProblems: string[]
  quote: string
}

export interface Company {
  id: string
  name: string
  role: string
  period: string
  domain: string
  phase: string
  summary: string
  overview: string[]
  businessDomain: string[]
  responsibilities: string[]
  achievements: string[]
  technologies: string[]
  capabilities: string[]
  caseIds: string[]
  lessons: string[]
}

export interface CaseSection {
  id: string
  title: string
  paras?: string[]
  bullets?: string[]
}

export interface CaseStudy {
  id: string
  featured: boolean
  title: string
  company: string
  category: string
  summary: string
  capabilities: string[]
  technologies: string[]
  impact: string[]
  difficulty: string
  ownership: string
  customerFacing: string
  readingTime: string
  sections: CaseSection[]
}

export interface Capability { id: string; name: string; desc: string }
export interface Technology { name: string; usage: string }

export interface Principle {
  id: string
  text: string
  explanation: string
  origin: string
  /** null when the principle has no single originating case study. */
  caseId: string | null
  applied: string
}

export const profile: Profile = {
  "name": "Gabriela Schlemper",
  "headline": "Software Engineer focused on building scalable systems through thoughtful engineering decisions.",
  "oneLiner": "I document engineering decisions instead of listing technologies.",
  "about": [
    "I'm a software engineer whose career has evolved from implementing frontend interfaces to designing distributed systems. I don't optimize for the number of technologies I know — I optimize for understanding why systems are built the way they are.",
    "I enjoy problems involving architecture, distributed systems, developer experience and frontend engineering."
  ],
  "philosophy": [
    "Good engineering is mostly about decisions, not code. I treat every system as a set of claims that must stay true over time — about ownership, consistency, who is allowed to compute what. When those claims are implicit, systems drift; when explicit, they stay correct.",
    "This knowledge base is written the way I believe engineering should be documented: context, constraints, alternatives, decision, trade-offs. Never just the output."
  ],
  "evolution": [
    {
      "year": "2022",
      "label": "Learning professional software development",
      "detail": "Freelance work under an experienced engineer. Git, code review, delivery discipline."
    },
    {
      "year": "2023",
      "label": "Building production frontend applications",
      "detail": "Frontend Intern at AQTech. Vue, real users, real constraints."
    },
    {
      "year": "2024",
      "label": "Building frontend systems",
      "detail": "Design System, component architecture, standards the team adopted voluntarily."
    },
    {
      "year": "2025",
      "label": "Designing distributed systems",
      "detail": "Dynamox. Cross-service consistency, event-driven architecture, ownership."
    },
    {
      "year": "Today",
      "label": "Platform engineering, architecture and AI-assisted development",
      "detail": "Interested in the systems that make other engineers faster and safer."
    }
  ],
  "howIThink": [
    "Start from invariants. Before designing, I write down what must never be false — then choose the architecture that makes violations impossible rather than unlikely.",
    "Prefer boring correctness. A provably correct system beats a clever one, even when the clever one is faster to build.",
    "Make adoption the easiest path. Standards, design systems and processes only survive when following them is less work than ignoring them.",
    "Decisions are documents. If a decision isn't written down with its alternatives, the team will re-litigate it in six months."
  ],
  "strengths": [
    "Cross-service consistency and data ownership design",
    "Turning implicit team knowledge into explicit standards",
    "Component architecture and design systems",
    "Written technical communication",
    "End-to-end ownership: proposal → implementation → adoption"
  ],
  "interests": [
    "Distributed Systems",
    "Software Architecture",
    "Developer Experience",
    "AI-assisted Engineering",
    "Platform Engineering",
    "Technical Leadership",
    "Engineering Documentation",
    "Knowledge Management"
  ],
  "preferredProblems": [
    "Systems where multiple services disagree about the same fact",
    "Teams that ship fast but can't explain why things are built the way they are",
    "Frontend codebases that need architecture, not more components",
    "Workflows where AI can assist without removing human judgment"
  ],
  "quote": "The goal isn't to collect technologies. The goal is to understand how to make good engineering decisions."
}

export const stats: Stat[] = [
  {
    "label": "Career Years",
    "value": "4+"
  },
  {
    "label": "Companies",
    "value": "3"
  },
  {
    "label": "Case Studies",
    "value": "10"
  },
  {
    "label": "Architecture Decisions",
    "value": "5+"
  },
  {
    "label": "Promotion",
    "value": "Jr → Mid in ~11mo"
  }
]

export const companies: Company[] = [
  {
    "id": "freelance",
    "name": "Freelance",
    "role": "Frontend Developer",
    "period": "2022",
    "domain": "Client web applications",
    "phase": "Learning professional software development",
    "summary": "Implemented frontend features inside existing applications while working under an experienced software engineer.",
    "overview": [
      "My entry point into professional software. I worked inside existing codebases owned by real clients, under the review of an experienced engineer who treated every pull request as a teaching moment.",
      "The value of this period wasn't the features shipped — it was internalizing how professional engineering teams actually operate: version control discipline, code review culture, and the difference between code that works and code that can be maintained."
    ],
    "businessDomain": [
      "Small client web applications: marketing sites, dashboards, internal tools. Low individual stakes, high learning density."
    ],
    "responsibilities": [
      "Implementing frontend features inside existing applications",
      "Responding to code review and iterating until mergeable",
      "Reproducing and fixing UI bugs reported by clients"
    ],
    "achievements": [
      "Learned Git, branching and professional delivery workflow from zero",
      "Internalized code review as a learning tool — a principle I still hold",
      "Shipped production features within weeks of starting"
    ],
    "technologies": [
      "JavaScript",
      "Git",
      "HTML/CSS"
    ],
    "capabilities": [
      "Frontend Engineering",
      "Communication"
    ],
    "caseIds": [],
    "lessons": [
      "Code review is one of the fastest learning tools in software engineering.",
      "Reading existing code well is a more valuable skill than writing new code fast."
    ]
  },
  {
    "id": "aqtech",
    "name": "AQTech",
    "role": "Frontend Intern → Frontend Reference",
    "period": "2023 – 2025",
    "domain": "Predictive maintenance for wind farms",
    "phase": "Learning frontend engineering",
    "summary": "Joined as Frontend Intern. Became the frontend reference after a few months. Created the company's first Design System.",
    "overview": [
      "AQTech builds predictive maintenance software for wind farms: engineers monitor turbine health through sensor data, and the frontend is how they see, filter and act on that data.",
      "I joined as an intern in a team with no frontend standards. Within months I became the person others asked frontend questions to — not by seniority, but by writing things down. I proposed and built the company's first Design System, and the standards I introduced remained after I left."
    ],
    "businessDomain": [
      "Wind farm operators lose money whenever a turbine fails unexpectedly. AQTech's platform ingests vibration and sensor data to predict failures before they happen.",
      "The frontend problem: dense engineering data — spectra, trends, asset hierarchies — that must stay legible to maintenance engineers under time pressure."
    ],
    "responsibilities": [
      "Building the platform frontend (Vue 2 → Vue 3 migration)",
      "Designing the company's first Design System",
      "Defining frontend standards: components, state, accessibility",
      "Data visualization for sensor data (ECharts)"
    ],
    "achievements": [
      "Became the team's frontend reference within months of joining as intern",
      "Created the first Design System — adopted voluntarily",
      "Introduced engineering standards that outlived my tenure"
    ],
    "technologies": [
      "Vue 2",
      "Vue 3",
      "Nuxt",
      "Vuex",
      "Pinia",
      "TypeScript",
      "Vuetify",
      "Tailwind",
      "Axios",
      "ECharts",
      ".NET",
      "C#"
    ],
    "capabilities": [
      "Frontend Engineering",
      "Design Systems",
      "Component Architecture",
      "Developer Experience",
      "Accessibility",
      "UX",
      "Communication"
    ],
    "caseIds": [
      "design-system",
      "tree-selector",
      "flaky-e2e"
    ],
    "lessons": [
      "A Design System succeeds only when adoption becomes the easiest path.",
      "The best engineering standards are adopted voluntarily.",
      "A dependency is a long-term liability, not a shortcut."
    ]
  },
  {
    "id": "dynamox",
    "name": "Dynamox",
    "role": "Junior → Mid-level Software Engineer",
    "period": "2025 – Present",
    "domain": "Industrial inspection & condition monitoring",
    "phase": "Learning distributed systems and software architecture",
    "summary": "Promoted to Mid-level in ~11 months. Became the team's reference for cross-service synchronization. Work spans frontend, backend and infrastructure.",
    "overview": [
      "Dynamox builds condition-monitoring and industrial inspection products: sensors on physical machines, event pipelines carrying their data, and software that turns it into inspection routes and decisions.",
      "I joined as a Junior and was promoted to Mid-level after roughly eleven months. My focus shifted from features to architecture: I became the team's reference for cross-service synchronization — the person consulted whenever two services need to agree about the same fact."
    ],
    "businessDomain": [
      "Industrial customers run inspection routes across thousands of physical assets. Data flows through an event-driven architecture (Kafka) into multiple services, each with its own view of the world.",
      "The core engineering tension: derived, customer-facing data must stay consistent across services that fail, retry and deploy independently."
    ],
    "responsibilities": [
      "Cross-service data synchronization and ownership boundaries",
      "Backend services in NestJS/Fastify over Kafka and PostgreSQL",
      "Frontend features in React; infra in Terraform and Kubernetes",
      "Observability and AI-assisted workflows (Sentry, Vertex AI)"
    ],
    "achievements": [
      "Promoted Junior → Mid-level in ~11 months",
      "Redesigned a cross-service metric to a single computation path",
      "Became team reference for cross-service synchronization",
      "Founded an analytics service after an OLTP vs OLAP evaluation"
    ],
    "technologies": [
      "React",
      "NestJS",
      "Fastify",
      "Kafka",
      "PostgreSQL",
      "Prisma",
      "Terraform",
      "BigQuery",
      "Python",
      "Vertex AI",
      "Kubernetes",
      "Sentry"
    ],
    "capabilities": [
      "Distributed Systems",
      "Backend Engineering",
      "Frontend Engineering",
      "System Design",
      "Architecture",
      "Observability",
      "Reliability",
      "Ownership",
      "Technical Leadership"
    ],
    "caseIds": [
      "single-computation-path",
      "workspace-sync",
      "analytics-service",
      "prod-data-correction",
      "asset-tree-search",
      "error-observability",
      "ai-route-generation"
    ],
    "lessons": [
      "Eventually consistent derived data should have exactly one computation path.",
      "If a value can always be recomputed from source, favor recomputation over synchronization.",
      "Consistency debates end when ownership is explicit."
    ]
  }
]

export const cases: CaseStudy[] = [
  {
    "id": "single-computation-path",
    "featured": true,
    "title": "Designing a single computation path for a cross-service metric",
    "company": "Dynamox",
    "category": "Distributed Systems",
    "summary": "Two services independently calculated the same customer-facing metric, causing inconsistent data. I redesigned the architecture so only one service owned the calculation while every other service simply signaled stale data.",
    "capabilities": [
      "Distributed Systems",
      "Architecture",
      "Ownership",
      "Communication"
    ],
    "technologies": [
      "NestJS",
      "Kafka",
      "PostgreSQL"
    ],
    "impact": [
      "Removed race conditions",
      "Simplified architecture",
      "Improved customer trust"
    ],
    "difficulty": "High",
    "ownership": "End-to-end",
    "customerFacing": "Yes",
    "readingTime": "7 min",
    "sections": [
      {
        "id": "context",
        "title": "Context",
        "paras": [
          "Dynamox's platform derives a completion metric for industrial inspection routes: how much of a route has been inspected, per asset, per customer. The metric is customer-facing — it appears on dashboards operators use to plan work.",
          "The underlying facts live in events. Inspections, edits and deletions flow through Kafka into multiple services, each maintaining its own projection of the data."
        ]
      },
      {
        "id": "problem",
        "title": "Problem",
        "paras": [
          "Two services computed the metric independently, each from its own projection. Under normal conditions they agreed. Under retries, out-of-order delivery or partial failures, they diverged — and customers saw two different numbers for the same route depending on which screen they opened.",
          "Each divergence became a support ticket, a manual reconciliation, and a small withdrawal from customer trust. The team had built a reconciliation job to patch differences, which treated the symptom and added a third component that could disagree."
        ]
      },
      {
        "id": "constraints",
        "title": "Constraints",
        "bullets": [
          "At-least-once delivery: every consumer must tolerate duplicates and reordering.",
          "No distributed transactions — services deploy and fail independently.",
          "Zero downtime: the metric is in daily operational use.",
          "Historical data had to be backfilled to a consistent state.",
          "The two computing services were owned by different people; any fix had to survive team boundaries."
        ]
      },
      {
        "id": "alternatives",
        "title": "Alternatives Considered",
        "bullets": [
          "Keep both computations, improve the reconciliation job. Rejected: reconciliation of two independent computations is unbounded work — every new edge case reappears twice.",
          "Extract the calculation into a shared library. Rejected: identical code over non-identical projections still diverges. The bug was in the data, not the formula.",
          "Compute on read at the API gateway. Rejected: pushed latency onto every dashboard load and still required a consistent source projection.",
          "Single owner service; all others emit staleness signals. Chosen."
        ]
      },
      {
        "id": "decision",
        "title": "Decision",
        "paras": [
          "Exactly one service owns the metric. It is the only code path in the company allowed to compute it.",
          "Every other service that touches underlying data stops computing anything. Instead it emits a lightweight 'stale' signal — 'route X may have changed'. The owner recomputes the metric from the source of truth, idempotently, whenever a signal arrives.",
          "This is where a personal principle crystallized: eventually consistent derived data should have exactly one computation path. And its corollary: if a value can always be recomputed from source, favor recomputation over synchronization."
        ]
      },
      {
        "id": "tradeoffs",
        "title": "Trade-offs",
        "bullets": [
          "Recomputation costs more than incremental updates. Accepted: the computation is cheap relative to the cost of divergence, and signals are debounced.",
          "A staleness window exists between signal and recomputation. Accepted: seconds of staleness with guaranteed convergence beats instant values that can be permanently wrong.",
          "The owner service becomes a critical path. Mitigated: idempotent consumers, dead-letter queue, and alerting on signal lag."
        ]
      },
      {
        "id": "implementation",
        "title": "Implementation",
        "paras": [
          "Staleness signals travel over a dedicated Kafka topic keyed by route, so recomputations for the same route serialize naturally. The owner consumes with idempotent handlers — recomputing twice is safe by construction, so retries need no special handling.",
          "A backfill script recomputed every historical metric from source, migrating the system to a consistent baseline before the new path went live. The old computation in the second service was deleted, not disabled — leaving it dormant invited resurrection."
        ]
      },
      {
        "id": "impact",
        "title": "Impact",
        "bullets": [
          "Inconsistency tickets for the metric dropped to zero after rollout.",
          "The reconciliation job was deleted — an entire class of maintenance removed.",
          "Race conditions became structurally impossible rather than merely unlikely.",
          "The pattern was reused for other derived data; I became the team's reference for cross-service synchronization."
        ]
      },
      {
        "id": "lessons",
        "title": "Lessons Learned",
        "paras": [
          "Consistency debates end when ownership is explicit. Most of the design work was not technical — it was getting agreement on the sentence 'only this service computes this value'.",
          "Deleting code is part of the architecture. The migration wasn't done until the second computation path physically ceased to exist."
        ]
      },
      {
        "id": "evidence",
        "title": "Evidence",
        "paras": [
          "This document is the primary evidence for the capabilities it claims: Distributed Systems (event-driven consistency design), Architecture (ownership boundaries), Ownership (proposal through backfill through deletion), Communication (the decision survived because it was written down and agreed across two service owners)."
        ]
      }
    ]
  },
  {
    "id": "design-system",
    "featured": true,
    "title": "Introducing a Design System where none existed",
    "company": "AQTech",
    "category": "Frontend Engineering",
    "summary": "Identified the absence of frontend standards, proposed a Design System, built it from scratch and taught the team how to adopt it.",
    "capabilities": [
      "Frontend Engineering",
      "Design Systems",
      "Technical Leadership",
      "Developer Experience"
    ],
    "technologies": [
      "Vue 3",
      "Vuetify",
      "TypeScript"
    ],
    "impact": [
      "Standardized frontend development",
      "Reduced duplicated components",
      "Became frontend reference"
    ],
    "difficulty": "Medium",
    "ownership": "Initiated & led",
    "customerFacing": "Indirect",
    "readingTime": "6 min",
    "sections": [
      {
        "id": "context",
        "title": "Context",
        "paras": [
          "AQTech's frontend had grown feature by feature. Each developer solved UI problems locally: three date pickers, four button variants, inconsistent spacing, no shared vocabulary between design and code.",
          "I was an intern. Nobody asked for a Design System — the cost was invisible because it was paid in small increments on every feature."
        ]
      },
      {
        "id": "problem",
        "title": "Problem",
        "paras": [
          "Duplication was the visible symptom; the real problem was decision fatigue. Every feature required re-deciding paddings, colors, error states and component APIs. Reviews argued about pixels instead of logic. Onboarding meant absorbing folklore."
        ]
      },
      {
        "id": "constraints",
        "title": "Constraints",
        "bullets": [
          "No dedicated time — the system had to be built alongside feature work.",
          "No designer ownership: the source of truth had to live in code.",
          "Vuetify was already in the stack; the system had to wrap it, not fight it.",
          "As an intern, I had no authority to mandate anything. Adoption had to be voluntary."
        ]
      },
      {
        "id": "alternatives",
        "title": "Alternatives Considered",
        "bullets": [
          "Adopt Vuetify defaults everywhere. Rejected: defaults didn't encode our domain patterns (dense engineering data, asset hierarchies) — that gap was where the duplication grew.",
          "A written style guide without code. Rejected: documentation that requires discipline loses to deadlines.",
          "A component library wrapping Vuetify with our tokens, patterns and docs. Chosen."
        ]
      },
      {
        "id": "decision",
        "title": "Decision",
        "paras": [
          "Build the Design System as the path of least resistance: importing the system component had to be strictly less work than writing a local one.",
          "Every component shipped with usage docs and copy-pasteable examples. I migrated the highest-traffic screens myself first, so the system proved itself before anyone was asked to adopt it."
        ]
      },
      {
        "id": "tradeoffs",
        "title": "Trade-offs",
        "bullets": [
          "Wrapping Vuetify meant inheriting its constraints and upgrade cycle. Accepted for velocity.",
          "Building alongside feature work meant slow, incremental coverage. Accepted — it forced the system to grow from real needs instead of speculation.",
          "Voluntary adoption is slower than mandate. Accepted — and it's why the standards survived after I left."
        ]
      },
      {
        "id": "implementation",
        "title": "Implementation",
        "paras": [
          "TypeScript component library on Vue 3 wrapping Vuetify: design tokens, form patterns, data-density presets and accessibility defaults baked in. Documentation lived beside the code and every component page answered 'when do I use this instead of X'.",
          "Adoption strategy: migrate loud screens first, pair with each developer on their first use, and treat every 'the system can't do X' as a bug in the system, not the developer."
        ]
      },
      {
        "id": "impact",
        "title": "Impact",
        "bullets": [
          "Frontend development standardized; duplicated components stopped appearing in review.",
          "New features started from composition rather than construction.",
          "I became the team's frontend reference — the standards remained after I left.",
          "The experience produced a durable principle: a Design System succeeds only when adoption becomes the easiest path."
        ]
      },
      {
        "id": "lessons",
        "title": "Lessons Learned",
        "paras": [
          "Authority is not a prerequisite for standards — evidence is. Migrating real screens before asking for adoption converted skeptics better than any argument.",
          "The best engineering standards are adopted voluntarily; the system must out-compete the alternative on effort, not on principle."
        ]
      },
      {
        "id": "evidence",
        "title": "Evidence",
        "paras": [
          "Capabilities claimed and demonstrated: Design Systems (built one from zero), Technical Leadership (adoption without authority), Developer Experience (adoption-as-product mindset), Frontend Engineering (the components themselves)."
        ]
      }
    ]
  },
  {
    "id": "tree-selector",
    "featured": true,
    "title": "Building a hierarchical selector instead of taking a dependency",
    "company": "AQTech",
    "category": "Frontend Architecture",
    "summary": "Needed a tree selector the UI library didn't provide. Chose to build a reusable abstraction instead of introducing another dependency.",
    "capabilities": [
      "Architecture",
      "Frontend Engineering",
      "Component Architecture"
    ],
    "technologies": [
      "Vue 3",
      "TypeScript",
      "Vuetify"
    ],
    "impact": [
      "Reusable abstraction adopted across the app",
      "Zero new dependencies",
      "Full control over performance and UX"
    ],
    "difficulty": "Medium",
    "ownership": "End-to-end",
    "customerFacing": "Yes",
    "readingTime": "5 min",
    "sections": [
      {
        "id": "context",
        "title": "Context",
        "paras": [
          "Wind farm data is hierarchical: farm → turbine → component → sensor. Nearly every screen needed users to select nodes from this hierarchy — sometimes one, sometimes thousands via cascading selection.",
          "Vuetify offered no tree selector matching our needs."
        ]
      },
      {
        "id": "problem",
        "title": "Problem",
        "paras": [
          "The obvious move was npm install. But the candidates each failed somewhere: no cascading tri-state selection, poor performance past a few thousand nodes, styling that fought our Design System, or an API that couldn't express our async-loading hierarchy."
        ]
      },
      {
        "id": "constraints",
        "title": "Constraints",
        "bullets": [
          "Hierarchies with thousands of nodes, loaded lazily by level.",
          "Tri-state cascading selection (checking a farm checks its turbines).",
          "Had to compose with the Design System's tokens and form patterns.",
          "Long-term maintenance falls on a small team — every dependency is a liability someone inherits."
        ]
      },
      {
        "id": "alternatives",
        "title": "Alternatives Considered",
        "bullets": [
          "Adopt a third-party tree component and patch the gaps. Rejected: the gaps were in core behavior (selection semantics, async loading), exactly where patching a foreign codebase is most expensive.",
          "Flatten the UX to avoid trees entirely. Rejected: the hierarchy is the domain; hiding it made selection slower for users.",
          "Build a reusable tree-selector abstraction in-house. Chosen."
        ]
      },
      {
        "id": "decision",
        "title": "Decision",
        "paras": [
          "Build it — but as an abstraction, not a one-off. The component separated tree state (expansion, tri-state selection, async loading) from rendering, so future screens could reuse the logic with different visuals.",
          "The dependency calculus: a library saves weeks now and costs indefinitely; owned code costs weeks now and stays exactly as capable as we need. For a component this central to the domain, ownership won."
        ]
      },
      {
        "id": "tradeoffs",
        "title": "Trade-offs",
        "bullets": [
          "We own the bugs. Accepted: bugs in core UX are cheaper to fix in code we understand.",
          "No community fixes or upgrades for free. Accepted: the component's scope is stable — the domain hierarchy doesn't churn.",
          "Higher upfront cost. Accepted; it amortized within months across screens."
        ]
      },
      {
        "id": "implementation",
        "title": "Implementation",
        "paras": [
          "TypeScript + Vue 3 composition API. Selection state as a pure module with exhaustive unit tests (tri-state cascades are edge-case factories); virtualized rendering for large hierarchies; async node loading with optimistic expansion.",
          "Shipped through the Design System with docs and examples, so 'need a tree?' had exactly one answer."
        ]
      },
      {
        "id": "impact",
        "title": "Impact",
        "bullets": [
          "Adopted across the application wherever hierarchies appear.",
          "Zero new runtime dependencies.",
          "Selection performance stayed flat as customer hierarchies grew."
        ]
      },
      {
        "id": "lessons",
        "title": "Lessons Learned",
        "paras": [
          "A dependency is a long-term liability, not a shortcut. The evaluation isn't 'can it do this today' but 'who pays when it can't do what we need in a year'.",
          "Build-vs-buy is really own-vs-rent: the closer a component is to the heart of the domain, the stronger the case for owning it."
        ]
      },
      {
        "id": "evidence",
        "title": "Evidence",
        "paras": [
          "Capabilities demonstrated: Architecture (dependency calculus, abstraction boundaries), Component Architecture (state/render separation), Frontend Engineering (virtualization, async loading, testing)."
        ]
      }
    ]
  },
  {
    "id": "workspace-sync",
    "featured": false,
    "title": "Synchronizing workspace edits across services",
    "company": "Dynamox",
    "category": "Distributed Systems",
    "summary": "Designed a synchronization strategy across multiple backend services while preserving consistency.",
    "capabilities": [
      "Distributed Systems",
      "System Design",
      "Backend Engineering"
    ],
    "technologies": [
      "NestJS",
      "Kafka",
      "PostgreSQL"
    ],
    "impact": [
      "Consistent workspace state across services"
    ],
    "difficulty": "High",
    "ownership": "Design & implementation",
    "customerFacing": "Yes",
    "readingTime": "2 min",
    "sections": [
      {
        "id": "context",
        "title": "Context",
        "paras": [
          "Workspace edits (renames, moves, deletions of inspection entities) originate in one service but affect projections held by several others."
        ]
      },
      {
        "id": "decision",
        "title": "Decision",
        "paras": [
          "Defined explicit ownership per entity type and an event contract for propagating edits, with idempotent consumers and ordering guaranteed per-entity via Kafka partitioning keys. Consumers converge on the owner's state rather than negotiating."
        ]
      },
      {
        "id": "impact",
        "title": "Impact",
        "paras": [
          "Workspace state stays consistent across services under retries and concurrent edits. The ownership-and-signals pattern from the metric redesign generalized here — evidence it was a principle, not a one-off."
        ]
      }
    ]
  },
  {
    "id": "flaky-e2e",
    "featured": false,
    "title": "Making a flaky E2E suite deterministic",
    "company": "AQTech",
    "category": "Quality Engineering",
    "summary": "Investigated intermittent failures and redesigned the testing strategy to make CI reliable again.",
    "capabilities": [
      "Testing",
      "Reliability",
      "Frontend Engineering"
    ],
    "technologies": [
      "Vue 3",
      "TypeScript"
    ],
    "impact": [
      "CI trusted again",
      "Red builds meant real bugs"
    ],
    "difficulty": "Medium",
    "ownership": "Investigation & redesign",
    "customerFacing": "No",
    "readingTime": "2 min",
    "sections": [
      {
        "id": "context",
        "title": "Context",
        "paras": [
          "The E2E suite failed intermittently. The team had learned to click 'retry' — which meant the suite no longer communicated anything."
        ]
      },
      {
        "id": "decision",
        "title": "Decision",
        "paras": [
          "Categorized a month of failures: nearly all traced to time-dependent waits and shared test state. Replaced sleeps with condition-based waits, isolated test data per run, and moved genuinely-flaky integration concerns down the pyramid into deterministic component tests."
        ]
      },
      {
        "id": "impact",
        "title": "Impact",
        "paras": [
          "A red build became information again. The deeper lesson: a test suite's value is its trustworthiness, not its coverage."
        ]
      }
    ]
  },
  {
    "id": "analytics-service",
    "featured": false,
    "title": "Founding an analytics service",
    "company": "Dynamox",
    "category": "Architecture",
    "summary": "Designed a new reporting service and evaluated OLTP vs OLAP trade-offs before implementation.",
    "capabilities": [
      "Architecture",
      "System Design",
      "Backend Engineering"
    ],
    "technologies": [
      "BigQuery",
      "PostgreSQL",
      "NestJS",
      "Terraform"
    ],
    "impact": [
      "Reporting isolated from transactional load"
    ],
    "difficulty": "High",
    "ownership": "Founded",
    "customerFacing": "Yes",
    "readingTime": "2 min",
    "sections": [
      {
        "id": "context",
        "title": "Context",
        "paras": [
          "Customer reporting queries were growing heavy enough to threaten the transactional databases serving live operations."
        ]
      },
      {
        "id": "decision",
        "title": "Decision",
        "paras": [
          "Evaluated OLTP-with-replicas vs a dedicated OLAP path. Chose a separate analytics service over BigQuery, fed by the existing event stream — accepting eventual consistency in reports in exchange for isolating analytical load and unlocking queries Postgres couldn't serve."
        ]
      },
      {
        "id": "impact",
        "title": "Impact",
        "paras": [
          "Reporting scaled independently of operations. Wrote the evaluation as a decision document; it became the template for later architecture decisions on the team."
        ]
      }
    ]
  },
  {
    "id": "prod-data-correction",
    "featured": false,
    "title": "Safe production data correction",
    "company": "Dynamox",
    "category": "Operations",
    "summary": "Created a reversible strategy for correcting production data safely without downtime.",
    "capabilities": [
      "Reliability",
      "Ownership",
      "Backend Engineering"
    ],
    "technologies": [
      "PostgreSQL",
      "Prisma"
    ],
    "impact": [
      "Zero-downtime corrections, fully reversible"
    ],
    "difficulty": "Medium",
    "ownership": "End-to-end",
    "customerFacing": "Indirect",
    "readingTime": "2 min",
    "sections": [
      {
        "id": "context",
        "title": "Context",
        "paras": [
          "A data defect had written incorrect values into production records in active daily use. Fixing them in place risked making things worse invisibly."
        ]
      },
      {
        "id": "decision",
        "title": "Decision",
        "paras": [
          "Every correction ran as a three-phase script: snapshot affected rows, apply the correction idempotently, and keep an executable reverse migration. Dry-run output was reviewed before anything touched production."
        ]
      },
      {
        "id": "impact",
        "title": "Impact",
        "paras": [
          "Corrections shipped without downtime and with a guaranteed undo path. The scripts became the team's standard for production data changes."
        ]
      }
    ]
  },
  {
    "id": "asset-tree-search",
    "featured": false,
    "title": "Asset tree search and prefetch",
    "company": "Dynamox",
    "category": "Full Stack",
    "summary": "Designed and implemented an optimized search experience for large industrial asset trees.",
    "capabilities": [
      "Frontend Engineering",
      "Backend Engineering",
      "System Design"
    ],
    "technologies": [
      "React",
      "Fastify",
      "PostgreSQL"
    ],
    "impact": [
      "Search across thousands of assets feels instant"
    ],
    "difficulty": "Medium",
    "ownership": "End-to-end",
    "customerFacing": "Yes",
    "readingTime": "2 min",
    "sections": [
      {
        "id": "context",
        "title": "Context",
        "paras": [
          "Industrial customers navigate asset trees with thousands of nodes. Finding one asset by scrolling and expanding was the slowest interaction in the product."
        ]
      },
      {
        "id": "decision",
        "title": "Decision",
        "paras": [
          "Server-side search returning matches with their ancestor paths, so the tree can open directly to a result; plus predictive prefetch of likely-next levels based on expansion patterns. The tree renders only what's visible."
        ]
      },
      {
        "id": "impact",
        "title": "Impact",
        "paras": [
          "Asset lookup went from a scrolling exercise to a search interaction. A full-stack case: the fix required touching query design, API shape and rendering together."
        ]
      }
    ]
  },
  {
    "id": "error-observability",
    "featured": false,
    "title": "Introducing error observability",
    "company": "Dynamox",
    "category": "Platform Engineering",
    "summary": "Introduced error monitoring and observability practices that became part of the team's workflow.",
    "capabilities": [
      "Observability",
      "Reliability",
      "Technical Leadership"
    ],
    "technologies": [
      "Sentry",
      "React",
      "NestJS"
    ],
    "impact": [
      "Errors found before customers report them"
    ],
    "difficulty": "Medium",
    "ownership": "Initiated & led",
    "customerFacing": "Indirect",
    "readingTime": "2 min",
    "sections": [
      {
        "id": "context",
        "title": "Context",
        "paras": [
          "Errors reached the team mainly through customer reports — the most expensive possible monitoring system."
        ]
      },
      {
        "id": "decision",
        "title": "Decision",
        "paras": [
          "Instrumented frontend and backend with Sentry, but treated tooling as the easy half: defined triage ownership, release tagging and an alert budget so signals stayed actionable instead of becoming noise."
        ]
      },
      {
        "id": "impact",
        "title": "Impact",
        "paras": [
          "The team began fixing errors before customers noticed them. Observability review became part of the regular workflow — a practice, not a dashboard."
        ]
      }
    ]
  },
  {
    "id": "ai-route-generation",
    "featured": false,
    "title": "Human-in-the-loop AI route generation",
    "company": "Dynamox",
    "category": "AI Engineering",
    "summary": "Designed an AI-assisted workflow for bulk route creation while keeping engineers in control.",
    "capabilities": [
      "AI Engineering",
      "Product Thinking",
      "System Design"
    ],
    "technologies": [
      "Vertex AI",
      "Python",
      "React"
    ],
    "impact": [
      "Bulk creation minutes instead of hours, human judgment preserved"
    ],
    "difficulty": "Medium",
    "ownership": "Design & implementation",
    "customerFacing": "Yes",
    "readingTime": "2 min",
    "sections": [
      {
        "id": "context",
        "title": "Context",
        "paras": [
          "Creating inspection routes in bulk was hours of repetitive manual configuration — structured enough for AI to draft, consequential enough that a wrong route costs real field time."
        ]
      },
      {
        "id": "decision",
        "title": "Decision",
        "paras": [
          "AI drafts, humans commit. Vertex AI generates candidate routes from asset structure and history; the UI presents them as reviewable diffs that an engineer edits and approves. Nothing reaches production without explicit human acceptance."
        ]
      },
      {
        "id": "impact",
        "title": "Impact",
        "paras": [
          "Bulk creation dropped from hours to minutes with no autonomy handed to the model. The design conviction: AI should compress the mechanical part of a workflow and leave the judgment where it belongs."
        ]
      }
    ]
  }
]

export const capabilities: Capability[] = [
  {
    "id": "distributed-systems",
    "name": "Distributed Systems",
    "desc": "Designing systems where independent services stay consistent about shared facts."
  },
  {
    "id": "system-design",
    "name": "System Design",
    "desc": "Shaping services, contracts and data flows before code exists."
  },
  {
    "id": "frontend-engineering",
    "name": "Frontend Engineering",
    "desc": "Production interfaces: architecture, performance, accessibility."
  },
  {
    "id": "backend-engineering",
    "name": "Backend Engineering",
    "desc": "Services, APIs, event consumers and the data they own."
  },
  {
    "id": "architecture",
    "name": "Architecture",
    "desc": "Ownership boundaries, dependency calculus, decisions that age well."
  },
  {
    "id": "technical-leadership",
    "name": "Technical Leadership",
    "desc": "Standards adopted voluntarily; becoming the reference others consult."
  },
  {
    "id": "ownership",
    "name": "Ownership",
    "desc": "Proposal → implementation → adoption → deletion of the old path."
  },
  {
    "id": "developer-experience",
    "name": "Developer Experience",
    "desc": "Making the correct path the easiest path for other engineers."
  },
  {
    "id": "design-systems",
    "name": "Design Systems",
    "desc": "Component systems that out-compete local solutions on effort."
  },
  {
    "id": "component-architecture",
    "name": "Component Architecture",
    "desc": "Separating state from rendering; abstractions that get reused."
  },
  {
    "id": "testing",
    "name": "Testing",
    "desc": "Suites that stay trustworthy — a red build must mean something."
  },
  {
    "id": "reliability",
    "name": "Reliability",
    "desc": "Idempotency, reversibility, and designing for failure as the default."
  },
  {
    "id": "observability",
    "name": "Observability",
    "desc": "Finding errors before customers do; alerts that stay actionable."
  },
  {
    "id": "accessibility",
    "name": "Accessibility",
    "desc": "Defaults baked into components, not retrofitted per screen."
  },
  {
    "id": "communication",
    "name": "Communication",
    "desc": "Decisions written down with alternatives; documents that end debates."
  },
  {
    "id": "ai-engineering",
    "name": "AI Engineering",
    "desc": "AI compresses mechanical work; humans keep the judgment."
  },
  {
    "id": "product-thinking",
    "name": "Product Thinking",
    "desc": "Engineering choices evaluated by their effect on the user's workflow."
  },
  {
    "id": "ux",
    "name": "UX",
    "desc": "Dense engineering data kept legible under time pressure."
  }
]

export const technologies: Technology[] = [
  {
    "name": "React",
    "usage": "Primary frontend stack at Dynamox — dashboards, reviewable AI diffs, asset tree UIs."
  },
  {
    "name": "Vue 2",
    "usage": "AQTech's legacy stack; maintained while planning the migration path."
  },
  {
    "name": "Vue 3",
    "usage": "Led the migration at AQTech; foundation of the Design System and tree selector."
  },
  {
    "name": "TypeScript",
    "usage": "Default language across both frontends and NestJS services. Types as documentation."
  },
  {
    "name": "JavaScript",
    "usage": "Where it all started — freelance frontend work under review."
  },
  {
    "name": "NestJS",
    "usage": "Backend services at Dynamox, including the metric owner service and its Kafka consumers."
  },
  {
    "name": "Fastify",
    "usage": "Lighter-weight services and the asset-tree search API."
  },
  {
    "name": "Kafka",
    "usage": "The event backbone: staleness signals, partition-keyed ordering, idempotent consumption."
  },
  {
    "name": "PostgreSQL",
    "usage": "Source-of-truth stores; also where I learned reversible production data correction."
  },
  {
    "name": "Prisma",
    "usage": "ORM for Postgres services; migration discipline for schema changes."
  },
  {
    "name": "Nuxt",
    "usage": "AQTech application framework on Vue."
  },
  {
    "name": "Vuex",
    "usage": "State management in the Vue 2 era at AQTech."
  },
  {
    "name": "Pinia",
    "usage": "Replaced Vuex during the Vue 3 migration."
  },
  {
    "name": "Vuetify",
    "usage": "The base the Design System wrapped — and the library whose missing tree selector I built."
  },
  {
    "name": "Tailwind",
    "usage": "Utility styling in newer AQTech surfaces."
  },
  {
    "name": "Axios",
    "usage": "HTTP layer patterns at AQTech: interceptors, error normalization."
  },
  {
    "name": "ECharts",
    "usage": "Vibration spectra and sensor trend visualization for wind turbine data."
  },
  {
    "name": ".NET",
    "usage": "AQTech's backend; enough fluency to trace a bug end-to-end."
  },
  {
    "name": "C#",
    "usage": "Backend contributions and API contract work at AQTech."
  },
  {
    "name": "Terraform",
    "usage": "Infrastructure as code at Dynamox, including analytics service provisioning."
  },
  {
    "name": "BigQuery",
    "usage": "The OLAP side of the analytics service decision."
  },
  {
    "name": "Python",
    "usage": "Data and AI tooling around Vertex AI workflows."
  },
  {
    "name": "Vertex AI",
    "usage": "Candidate generation for the human-in-the-loop route creation workflow."
  },
  {
    "name": "Kubernetes",
    "usage": "Deployment platform for Dynamox services."
  },
  {
    "name": "Sentry",
    "usage": "The tooling half of the error observability practice."
  },
  {
    "name": "Git",
    "usage": "Learned professionally in freelance work; branching and review discipline ever since."
  },
  {
    "name": "HTML/CSS",
    "usage": "Freelance-era foundations."
  }
]

export const principles: Principle[] = [
  {
    "id": "p1",
    "text": "Eventually consistent derived data should have exactly one computation path.",
    "explanation": "When two code paths can produce the same derived value, they eventually disagree — retries, reordering and partial failures guarantee it. Consistency isn't achieved by synchronizing computations; it's achieved by making all but one of them impossible.",
    "origin": "Born from debugging a customer-facing metric that two services computed independently at Dynamox.",
    "caseId": "single-computation-path",
    "applied": "Reapplied in workspace synchronization design: one owner per entity type, everyone else converges."
  },
  {
    "id": "p2",
    "text": "A Design System succeeds only when adoption becomes the easiest path.",
    "explanation": "Standards don't fail because they're wrong; they fail because ignoring them is less work. A design system must out-compete local solutions on effort — importing the component must beat writing one.",
    "origin": "Building AQTech's first Design System as an intern with no authority to mandate anything.",
    "caseId": "design-system",
    "applied": "Same logic drove observability adoption at Dynamox: triage ownership designed to be lighter than ignoring errors."
  },
  {
    "id": "p3",
    "text": "Prefer provably correct systems over clever systems.",
    "explanation": "A design whose correctness follows from structure (idempotency, single ownership, reversibility) needs no vigilance. A clever design that's correct under assumptions decays as the assumptions do.",
    "origin": "Contrasting the reconciliation-job approach (clever, leaky) with the single-owner redesign (boring, airtight).",
    "caseId": "single-computation-path",
    "applied": "Production data corrections: three-phase reversible scripts instead of careful one-off UPDATEs."
  },
  {
    "id": "p4",
    "text": "A dependency is a long-term liability, not a shortcut.",
    "explanation": "A library saves weeks now and costs indefinitely: upgrades, gaps in core behavior, someone else's roadmap. The closer a component is to the heart of your domain, the stronger the case for owning it.",
    "origin": "Evaluating tree-selector libraries at AQTech and finding every candidate failed in core behavior.",
    "caseId": "tree-selector",
    "applied": "Same calculus shaped the analytics service: own the query path, rent the storage engine."
  },
  {
    "id": "p5",
    "text": "If a value can always be recomputed from source, favor recomputation over synchronization.",
    "explanation": "Synchronization means maintaining agreement between copies forever. Recomputation means deriving truth from source on demand. The second is slower per operation and dramatically cheaper per year.",
    "origin": "The staleness-signal design: services signal 'this may have changed' instead of shipping computed values around.",
    "caseId": "single-computation-path",
    "applied": "Guides every caching and projection decision I make since."
  },
  {
    "id": "p6",
    "text": "The best engineering standards are adopted voluntarily.",
    "explanation": "A mandated standard is followed while someone watches. A standard that wins on merit — proven on real screens, cheaper to follow than to skip — survives its author leaving. Mine did.",
    "origin": "The AQTech Design System's standards remaining in use after I left the company.",
    "caseId": "design-system",
    "applied": "How I introduce every practice since: evidence first, adoption second, mandate never."
  },
  {
    "id": "p7",
    "text": "Code review is one of the fastest learning tools in software engineering.",
    "explanation": "Review compresses years of someone else's judgment into comments on your actual work. Reading review feedback seriously — and later, giving it seriously — is the highest-density learning loop I know.",
    "origin": "Freelance work under an experienced engineer who treated every PR as a teaching moment.",
    "caseId": null,
    "applied": "As the frontend reference at AQTech, review became how I taught the Design System."
  },
  {
    "id": "p8",
    "text": "Documentation should communicate decisions, not just implementation.",
    "explanation": "Implementation docs answer 'what is this'. Decision docs answer 'why is it this and not the alternative' — the only question that matters six months later. Context, constraints, alternatives, trade-offs.",
    "origin": "Writing the OLTP vs OLAP evaluation as a document and watching it end debates before they started.",
    "caseId": "analytics-service",
    "applied": "This entire knowledge base is the principle applied to a career."
  }
]
