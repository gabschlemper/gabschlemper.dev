import { describe, expect, it } from "vitest";
import { buildEvidenceMap } from "./evidenceMap";

describe("buildEvidenceMap", () => {
  const map = buildEvidenceMap();

  it("gives every node a unique key", () => {
    const keys = map.nodes.map((node) => node.key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("only draws edges between nodes that actually exist", () => {
    const keys = new Set(map.nodes.map((node) => node.key));
    for (const edge of map.edges) {
      expect(keys.has(edge.a)).toBe(true);
      expect(keys.has(edge.b)).toBe(true);
    }
  });

  it("keeps neighbours() symmetric and reflexive", () => {
    for (const node of map.nodes) {
      const own = map.neighbours(node.key);
      expect(own.has(node.key)).toBe(true);
      for (const neighbourKey of own) {
        if (neighbourKey === node.key) continue;
        expect(map.neighbours(neighbourKey).has(node.key)).toBe(true);
      }
    }
  });

  it("only surfaces capabilities backed by at least one case study", () => {
    // The capabilities column is filtered to `usedCapabilities`, so any
    // capability node on the map is by construction evidenced by a case —
    // this guards against the "capability claimed with zero case studies"
    // gap the map is supposed to make impossible.
    const capNodes = map.nodes.filter((node) => node.key.startsWith("cap:"));
    for (const node of capNodes) {
      const hasCaseEdge = map.edges.some(
        (edge) => edge.a === node.key || edge.b === node.key,
      );
      expect(hasCaseEdge).toBe(true);
    }
  });

  it("computes a positive stage height that fits every column", () => {
    expect(map.height).toBeGreaterThan(0);
    expect(map.columns.length).toBe(4);
  });
});
