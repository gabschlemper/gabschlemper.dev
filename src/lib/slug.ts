import { technologies } from "../data/knowledge-base";

/**
 * Technology names contain characters that do not survive a URL path segment
 * ("HTML/CSS", "C#", ".NET"), so detail routes address them by slug.
 */
export function slugify(name: string): string {
  return name
    .replace(/#/g, "sharp")
    .replace(/\+/g, "plus")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const bySlug = new Map<string, string>();
for (const tech of technologies) {
  bySlug.set(slugify(tech.name), tech.name);
}

export function techNameFromSlug(slug: string): string | undefined {
  return bySlug.get(slug);
}

export function techSlug(name: string): string {
  return slugify(name);
}
