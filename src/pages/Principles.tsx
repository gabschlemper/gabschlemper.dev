import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cases, principles } from "../data/knowledge-base";
import { useDocumentMeta } from "../lib/useDocumentMeta";

export default function Principles() {
  const navigate = useNavigate();
  const { hash } = useLocation();
  const [open, setOpen] = useState<string | null>(null);

  useDocumentMeta(
    "Engineering Principles",
    "Each principle has an origin story and at least one place it was applied again.",
  );

  // Deep links from the command palette open the matching principle.
  useEffect(() => {
    const id = hash.replace(/^#/, "");
    if (!id) return;
    if (principles.some((principle) => principle.id === id)) setOpen(id);
  }, [hash]);

  return (
    <div className="screen">
      <div className="eyebrow">principles / earned, not adopted</div>
      <h1 className="display">Engineering Principles</h1>
      <p className="lede">
        Each principle has an origin story and at least one place it was applied
        again. Open one.
      </p>

      <div className="stack" style={{ gap: 12, marginTop: 28 }}>
        {principles.map((principle, i) => {
          const isOpen = open === principle.id;
          const related = principle.caseId
            ? cases.find((study) => study.id === principle.caseId)
            : undefined;

          return (
            <div className="principle" key={principle.id} id={principle.id}>
              <button
                type="button"
                className="principle-toggle"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : principle.id)}
              >
                <span className="principle-num">P{i + 1}</span>
                <span className="principle-text">{principle.text}</span>
                <span className="principle-chev">{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && (
                <div className="principle-body">
                  <div>
                    <div className="principle-key">explanation</div>
                    <div className="principle-explanation">
                      {principle.explanation}
                    </div>
                  </div>
                  <div>
                    <div className="principle-key">origin</div>
                    <div className="principle-origin">{principle.origin}</div>
                  </div>
                  {related && (
                    <div>
                      <div className="principle-key">related case study</div>
                      <button
                        type="button"
                        className="principle-case"
                        onClick={() => navigate(`/cases/${related.id}`)}
                      >
                        {related.title} →
                      </button>
                    </div>
                  )}
                  <div>
                    <div className="principle-key">where i applied it again</div>
                    <div className="principle-origin">{principle.applied}</div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
