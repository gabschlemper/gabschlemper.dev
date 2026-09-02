import { Link } from "react-router-dom";
import { cases, companies } from "../data/knowledge-base";

export default function Cases() {
  // Source order: highest-seniority case studies first, per
  // scripts/generate-portfolio.mjs in professional-knowledge-base. "Featured"
  // (has a hand-drawn diagram) is shown as a badge only, not a sort key.

  return (
    <div className="screen">
      <h1 className="display" style={{ margin: "0 0 10px" }}>
        Case Studies
      </h1>
      <div className="docket">
        <span>{cases.length} dependent claims filed</span>
      </div>
      <p className="lede">
        Context, constraints, alternatives, decision, trade-offs. Never just the
        output.
      </p>

      <div className="stack" style={{ gap: 12, marginTop: 28 }}>
        {cases.map((study) => {
          const company = companies.find((entry) => entry.name === study.company);
          const claimNum = company ? companies.indexOf(company) + 1 : null;
          const depNum =
            company && claimNum ? company.caseIds.indexOf(study.id) + 1 : null;

          return (
            <Link className="card-link" to={`/cases/${study.id}`} key={study.id}>
              <div
                className={`case-card${study.featured ? " case-card--featured" : ""}`}
              >
                <div className="card-meta">
                  {claimNum && depNum && (
                    <span className="claim-tag claim-tag--outline">
                      claim {claimNum}.{depNum}
                    </span>
                  )}
                  <span className="accent">{study.company}</span>
                  <span>{study.category}</span>
                  <span className="push">
                    {study.featured
                      ? `★ featured · ${study.readingTime}`
                      : study.readingTime}
                  </span>
                </div>
                <div className="case-title">{study.title}</div>
                <div className="case-summary">{study.summary}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
