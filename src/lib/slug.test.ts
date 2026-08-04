import { describe, expect, it } from "vitest";
import { slugify, techNameFromSlug, techSlug } from "./slug";
import { technologies } from "../data/knowledge-base";

describe("slugify", () => {
  it("lowercases and hyphenates plain names", () => {
    expect(slugify("React")).toBe("react");
    expect(slugify("Vue 3")).toBe("vue-3");
  });

  it("spells out characters that cannot survive a URL segment", () => {
    expect(slugify("C#")).toBe("csharp");
    expect(slugify(".NET")).toBe("net");
    expect(slugify("HTML/CSS")).toBe("html-css");
  });

  it("trims leading and trailing hyphens", () => {
    expect(slugify(".NET")).not.toMatch(/^-|-$/);
  });
});

describe("techSlug / techNameFromSlug round-trip", () => {
  it("resolves every technology's slug back to its exact name", () => {
    for (const tech of technologies) {
      expect(techNameFromSlug(techSlug(tech.name))).toBe(tech.name);
    }
  });

  it("produces no slug collisions across the technology list", () => {
    const slugs = technologies.map((tech) => techSlug(tech.name));
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
