import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useKnowledgeBase, useLocale, useStrings } from "../lib/useKnowledgeBase";
import { withLocale } from "../lib/locale";

export default function Principles() {
  const { cases, principles } = useKnowledgeBase();
  const locale = useLocale();
  const t = useStrings();
  const loc = (path: string) => withLocale(path, locale);
  const { hash } = useLocation();
  const [open, setOpen] = useState<string | null>(null);

  // Deep links from the command palette open the matching principle.
  useEffect(() => {
    const id = hash.replace(/^#/, "");
    if (!id) return;
    if (principles.some((principle) => principle.id === id)) setOpen(id);
  }, [hash, principles]);

  return (
    <div className="screen">
      <h1 className="display" style={{ margin: "0 0 10px" }}>
        {t.principles.title}
      </h1>
      <div className="docket">
        <span>{t.principles.docket}</span>
      </div>
      <p className="lede">{t.principles.lede}</p>

      <div className="stack" style={{ gap: 12, marginTop: 28 }}>
        {principles.map((principle, i) => {
          const isOpen = open === principle.id;
          const related = principle.caseId
            ? cases.find((study) => study.id === principle.caseId)
            : undefined;

          return (
            <details
              className="principle"
              key={principle.id}
              id={principle.id}
              open={isOpen}
              onToggle={(event) =>
                setOpen(event.currentTarget.open ? principle.id : null)
              }
            >
              <summary className="principle-toggle" aria-expanded={isOpen}>
                <span className="principle-num">P{i + 1}</span>
                <span className="principle-text">{principle.text}</span>
                <span className="principle-chev">{isOpen ? "−" : "+"}</span>
              </summary>

              <div className="principle-body">
                <div>
                  <div className="principle-key">{t.principles.explanation}</div>
                  <div className="principle-explanation">
                    {principle.explanation}
                  </div>
                </div>
                <div>
                  <div className="principle-key">{t.principles.origin}</div>
                  <div className="principle-origin">{principle.origin}</div>
                </div>
                {related && (
                  <div>
                    <div className="principle-key">{t.principles.relatedCaseStudy}</div>
                    <Link className="principle-case" to={loc(`/cases/${related.id}`)}>
                      {related.title} →
                    </Link>
                  </div>
                )}
                <div>
                  <div className="principle-key">{t.principles.whereAppliedAgain}</div>
                  <div className="principle-origin">{principle.applied}</div>
                </div>
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
