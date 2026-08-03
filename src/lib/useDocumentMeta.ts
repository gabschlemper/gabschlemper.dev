import { useEffect } from "react";

const SITE = "Gabriela Schlemper — Engineering Knowledge Base";

function setMeta(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

/** Sets the document title and description for the current screen. */
export function useDocumentMeta(title: string | undefined, description: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE}` : SITE;
    setMeta("description", description);
  }, [title, description]);
}
