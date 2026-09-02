import { Link, useParams } from "react-router-dom";
import { capabilities, cases, companies } from "../data/knowledge-base";
import NotFound from "./NotFound";

export default function CapabilityDetail() {
  const { id } = useParams();
  const capability = capabilities.find((entry) => entry.id === id);

  if (!capability) return <NotFound />;

  const provingCases = cases.filter((study) =>
    study.capabilities.includes(capability.name),
  );
  const provingCompanies = companies.filter((company) =>
    company.capabilities.includes(capability.name),
  );

  return (
    <div className="screen">
      <div className="breadcrumb">
        <Link to="/capabilities">capabilities</Link>
        <span>/</span>
        <span>{capability.name}</span>
      </div>

      <h1 className="display display--detail">{capability.name}</h1>
      <div className="docket" style={{ margin: "0 0 12px" }}>
        <span className="claim-tag claim-tag--outline">claim element</span>
      </div>
      <p className="lede" style={{ maxWidth: 620 }}>
        {capability.desc}
      </p>
      <div className="entry-period" style={{ marginTop: 20 }}>
        cited in: {provingCases.length} proving documents ·{" "}
        {provingCompanies.length} companies
      </div>

      {provingCases.length > 0 && (
        <>
          <div className="section-label" style={{ marginTop: 32 }}>
            proving documents
          </div>
          <div className="stack" style={{ gap: 10, marginTop: 14 }}>
            {provingCases.map((study) => (
              <Link className="card-link" to={`/cases/${study.id}`} key={study.id}>
                <div className="mini-card">
                  <div className="mini-meta">
                    <span style={{ color: "var(--accent)" }}>{study.company}</span>
                    <span>{study.category}</span>
                  </div>
                  <div className="mini-title">{study.title}</div>
                  <div className="mini-summary">{study.summary}</div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      {provingCompanies.length > 0 && (
        <>
          <div className="section-label" style={{ marginTop: 36 }}>
            exercised at
          </div>
          <div className="pill-row">
            {provingCompanies.map((company) => (
              <Link className="pill" to={`/companies/${company.id}`} key={company.id}>
                <span className="pill-name">{company.name}</span>
                <span className="pill-period">{company.period}</span>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
