import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_TITLE, SITE_URL, resolveMeta } from "./meta";

function setMetaByName(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setMetaByProperty(property: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(href: string) {
  let tag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

const JSONLD_ID = "route-jsonld";

function setRouteJsonLd(json: object | null) {
  let tag = document.getElementById(JSONLD_ID) as HTMLScriptElement | null;
  if (!json) {
    tag?.remove();
    return;
  }
  if (!tag) {
    tag = document.createElement("script");
    tag.id = JSONLD_ID;
    tag.type = "application/ld+json";
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(json);
}

/** Applies the route's resolved SEO metadata to <head> after each navigation. */
export function useRouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = resolveMeta(pathname);
    const fullTitle = meta.title ? `${meta.title} · ${SITE_NAME}` : SITE_TITLE;
    const canonicalUrl = `${SITE_URL}${meta.path === "/" ? "" : meta.path}`;

    document.title = fullTitle;
    setMetaByName("description", meta.description);
    setMetaByProperty("og:title", fullTitle);
    setMetaByProperty("og:description", meta.description);
    setMetaByProperty("og:url", canonicalUrl);
    setMetaByProperty(
      "og:type",
      meta.entityType === "Article" ? "article" : meta.entityType === "ProfilePage" ? "profile" : "website",
    );
    setMetaByName("twitter:title", fullTitle);
    setMetaByName("twitter:description", meta.description);
    setCanonical(canonicalUrl);

    if (meta.notFound) {
      setMetaByName("robots", "noindex, follow");
      setRouteJsonLd(null);
      return;
    }
    setMetaByName("robots", "index, follow");

    const breadcrumbList =
      meta.breadcrumbs.length > 0
        ? {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              ...meta.breadcrumbs.map((crumb, i) => ({
                "@type": "ListItem",
                position: i + 2,
                name: crumb.name,
                item: `${SITE_URL}${crumb.path}`,
              })),
            ],
          }
        : null;

    if (meta.entityType === "Article" && meta.article) {
      setRouteJsonLd({
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: meta.article.headline,
        description: meta.description,
        keywords: meta.article.keywords.join(", "),
        about: meta.article.about,
        image: DEFAULT_OG_IMAGE,
        author: { "@type": "Person", name: "Gabriela Schlemper", url: SITE_URL },
        publisher: { "@type": "Person", name: "Gabriela Schlemper", url: SITE_URL },
        mainEntityOfPage: canonicalUrl,
        ...(breadcrumbList ? { breadcrumb: breadcrumbList } : {}),
      });
    } else if (breadcrumbList) {
      setRouteJsonLd({ "@context": "https://schema.org", ...breadcrumbList });
    } else {
      setRouteJsonLd(null);
    }
  }, [pathname]);
}
