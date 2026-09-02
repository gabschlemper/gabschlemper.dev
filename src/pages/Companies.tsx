import { Link } from "react-router-dom";
import { companies } from "../data/knowledge-base";

export default function Companies() {
  return (
    <div className="screen">
      <h1 className="display" style={{ margin: "0 0 10px" }}>
        Companies
      </h1>
      <div className="docket">
        <span>{companies.length} independent claims filed</span>
      </div>

      <div className="stack" style={{ gap: 14, marginTop: 28 }}>
        {companies.map((company, i) => (
          <Link className="card-link" to={`/companies/${company.id}`} key={company.id}>
            <div className="entry-card">
              <div className="entry-head">
                <span className="claim-tag">claim {i + 1}</span>
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
