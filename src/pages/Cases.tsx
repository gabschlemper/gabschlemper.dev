import { Link } from "react-router-dom";
import { useKnowledgeBase, useLocale, useStrings } from "../lib/useKnowledgeBase";
import { withLocale } from "../lib/locale";

export default function Cases() {
  // Source order: highest-seniority case studies first, per
  // scripts/generate-portfolio.mjs in professional-knowledge-base. "Featured"
  // (has a hand-drawn diagram) is shown as a badge only, not a sort key.
  const { cases } = useKnowledgeBase();
  const locale = useLocale();
  const t = useStrings();
  const loc = (path: string) => withLocale(path, locale);

  return (
    <div className="screen">
      <h1 className="display" style={{ margin: "0 0 10px" }}>
        {t.cases.title}
      </h1>
      <div className="docket">
        <span>{t.cases.docket(cases.length)}</span>
      </div>
      <p className="lede">{t.cases.lede}</p>

      <div className="stack" style={{ gap: 12, marginTop: 28 }}>
        {cases.map((study) => (
          <Link className="card-link" to={loc(`/cases/${study.id}`)} key={study.id}>
            <div
              className={`case-card${study.featured ? " case-card--featured" : ""}`}
            >
              <div className="card-meta">
                <span className="accent">{study.company}</span>
                <span>{study.category}</span>
                <span className="push">
                  {study.featured ? t.cases.featured(study.readingTime) : study.readingTime}
                </span>
              </div>
              <div className="case-title">{study.title}</div>
              <div className="case-summary">{study.summary}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
