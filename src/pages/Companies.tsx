import { Link } from "react-router-dom";
import { companies } from "../data/knowledge-base";
import { useDocumentMeta } from "../lib/useDocumentMeta";

export default function Companies() {
  useDocumentMeta("Companies", "Where the engineering happened, and what each phase taught.");

  return (
    <div className="screen">
      <div className="eyebrow">companies / {companies.length} entries</div>
      <h1 className="display" style={{ margin: "14px 0 28px" }}>
        Companies
      </h1>

      <div className="stack" style={{ gap: 14 }}>
        {companies.map((company) => (
          <Link className="card-link" to={`/companies/${company.id}`} key={company.id}>
            <div className="entry-card">
              <div className="entry-head">
                <span className="entry-name">{company.name}</span>
                <span className="entry-period">{company.period}</span>
                <span className="entry-meta">
                  {company.caseIds.length} case studies ·{" "}
                  {company.technologies.length} technologies
                </span>
              </div>
              <div className="entry-role">{company.role}</div>
              <div className="entry-summary">{company.summary}</div>
              <div className="entry-phase">phase: {company.phase.toLowerCase()}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
