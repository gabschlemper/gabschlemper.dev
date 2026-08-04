import { describe, expect, it } from "vitest";
import { search, searchIndex } from "./search";
import { cases } from "../data/knowledge-base";

describe("search index", () => {
  it("indexes every case, capability, technology and principle", () => {
    const index = searchIndex();
    const kinds = new Set(index.map((entry) => entry.kind));
    expect(kinds).toEqual(
      new Set(["company", "case", "capability", "tech", "principle", "page"]),
    );
  });
});

describe("search()", () => {
  it("returns pages and only featured cases for an empty query", () => {
    const results = search("");
    const caseResults = results.filter((entry) => entry.kind === "case");
    const featuredIds = new Set(cases.filter((c) => c.featured).map((c) => c.id));

    expect(results.length).toBeLessThanOrEqual(8);
    for (const entry of caseResults) {
      expect(featuredIds.has(entry.to.split("/").pop() ?? "")).toBe(true);
    }
  });

  it("matches case-insensitively against title and haystack", () => {
    const results = search("KAFKA");
    expect(results.length).toBeGreaterThan(0);
    expect(
      results.every((entry) =>
        `${entry.haystack} ${entry.title}`.toLowerCase().includes("kafka"),
      ),
    ).toBe(true);
  });

  it("caps results at 10 for a non-empty query", () => {
    // A single common letter matches almost every entry in the index.
    const results = search("e");
    expect(results.length).toBeLessThanOrEqual(10);
  });

  it("returns nothing for a query that matches no entry", () => {
    expect(search("zzzznonexistentzzzz")).toHaveLength(0);
  });
});
