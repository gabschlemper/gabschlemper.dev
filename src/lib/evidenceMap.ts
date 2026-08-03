import { capabilities, cases, companies, technologies } from "../data/knowledge-base";
import { techSlug } from "./slug";

export interface MapNode {
  key: string;
  label: string;
  x: number;
  y: number;
  w: number;
  to: string;
}

export interface MapEdge {
  a: string;
  b: string;
  d: string;
}

export interface MapColumn {
  x: number;
  label: string;
}

export interface EvidenceMap {
  height: number;
  columns: MapColumn[];
  nodes: MapNode[];
  edges: MapEdge[];
  /** Node keys adjacent to the given key, including the key itself. */
  neighbours: (key: string) => Set<string>;
}

const NODE_HALF_HEIGHT = 13;

/** Approximate rendered width of a mono label at 11px. */
function labelWidth(text: string): number {
  return Math.round(text.length * 6.7) + 22;
}

export function buildEvidenceMap(): EvidenceMap {
  const usedCapabilities = capabilities.filter((capability) =>
    cases.some((study) => study.capabilities.includes(capability.name)),
  );

  const usedTechNames = new Set<string>();
  for (const study of cases) {
    for (const tech of study.technologies) usedTechNames.add(tech);
  }
  const usedTechnologies = technologies.filter((tech) => usedTechNames.has(tech.name));

  const height =
    Math.max(usedCapabilities.length, cases.length, usedTechnologies.length) * 47 + 100;

  const columnY = (count: number, index: number): number => {
    const pad = 76;
    if (count <= 1) return height / 2 - NODE_HALF_HEIGHT;
    const spacing = Math.min(60, (height - 2 * pad) / (count - 1));
    return (
      height / 2 - (spacing * (count - 1)) / 2 + index * spacing - NODE_HALF_HEIGHT
    );
  };

  const nodes: MapNode[] = [];
  const byKey = new Map<string, MapNode>();
  const adjacency = new Map<string, Set<string>>();

  const addNode = (key: string, label: string, x: number, y: number, w: number, to: string) => {
    const node: MapNode = { key, label, x, y, w, to };
    nodes.push(node);
    byKey.set(key, node);
    adjacency.set(key, new Set());
  };

  usedCapabilities.forEach((capability, i) => {
    const w = labelWidth(capability.name);
    // Capability column is right-aligned against x=258.
    addNode(
      `cap:${capability.name}`,
      capability.name,
      258 - w,
      columnY(usedCapabilities.length, i),
      w,
      `/capabilities/${capability.id}`,
    );
  });

  cases.forEach((study, i) => {
    const label =
      study.title.length > 36 ? `${study.title.slice(0, 35)}…` : study.title;
    addNode(
      `case:${study.id}`,
      label,
      330,
      columnY(cases.length, i),
      labelWidth(label),
      `/cases/${study.id}`,
    );
  });

  companies.forEach((company, i) => {
    addNode(
      `co:${company.id}`,
      company.name,
      700,
      columnY(companies.length, i),
      labelWidth(company.name),
      `/companies/${company.id}`,
    );
  });

  usedTechnologies.forEach((tech, i) => {
    addNode(
      `tech:${tech.name}`,
      tech.name,
      880,
      columnY(usedTechnologies.length, i),
      labelWidth(tech.name),
      `/technologies/${techSlug(tech.name)}`,
    );
  });

  const edges: MapEdge[] = [];

  const addEdge = (a: string, b: string) => {
    const from = byKey.get(a);
    const to = byKey.get(b);
    if (!from || !to) return;
    adjacency.get(a)?.add(b);
    adjacency.get(b)?.add(a);

    const x1 = from.x + from.w;
    const y1 = from.y + NODE_HALF_HEIGHT;
    const x2 = to.x;
    const y2 = to.y + NODE_HALF_HEIGHT;
    const mid = (x1 + x2) / 2;
    edges.push({
      a,
      b,
      d: `M${x1} ${y1} C${mid} ${y1}, ${mid} ${y2}, ${x2} ${y2}`,
    });
  };

  for (const study of cases) {
    for (const capability of study.capabilities) {
      addEdge(`cap:${capability}`, `case:${study.id}`);
    }
    const company = companies.find((c) => c.name === study.company);
    if (company) addEdge(`case:${study.id}`, `co:${company.id}`);
  }

  for (const company of companies) {
    for (const tech of company.technologies) {
      if (usedTechNames.has(tech)) addEdge(`co:${company.id}`, `tech:${tech}`);
    }
  }

  return {
    height,
    columns: [
      { x: 30, label: "capabilities" },
      { x: 330, label: "case studies" },
      { x: 700, label: "companies" },
      { x: 880, label: "technologies" },
    ],
    nodes,
    edges,
    neighbours: (key) => new Set([key, ...(adjacency.get(key) ?? [])]),
  };
}
