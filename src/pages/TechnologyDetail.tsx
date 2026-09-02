import { Link, useParams } from "react-router-dom";
import { cases, companies, technologies } from "../data/knowledge-base";
import { techNameFromSlug } from "../lib/slug";
import NotFound from "./NotFound";

export default function TechnologyDetail() {
  const { slug } = useParams();
  const name = slug ? techNameFromSlug(slug) : undefined;
  const tech = technologies.find((entry) => entry.name === name);

  if (!tech) return <NotFound />;

  const usedAt = companies.filter((company) =>
    company.technologies.includes(tech.name),
  );
  const appearsIn = cases.filter((study) =>
    study.technologies.includes(tech.name),
  );

  return (
    <div className="screen">
      <div className="breadcrumb">
        <Link to="/technologies">technologies</Link>
        <span>/</span>
        <span>{tech.name}</span>
      </div>

      <h1 className="display display--detail">{tech.name}</h1>
      <div className="docket" style={{ margin: "0 0 4px" }}>
        <span className="claim-tag claim-tag--outline">reference cited</span>
      </div>

      <div className="section-label" style={{ marginTop: 24 }}>
        how i used it
      </div>
      <p className="prose" style={{ maxWidth: 640 }}>
        {tech.usage}
      </p>

      {usedAt.length > 0 && (
        <>
          <div className="section-label" style={{ marginTop: 32 }}>
            companies
          </div>
          <div className="pill-row">
            {usedAt.map((company) => (
              <Link className="pill" to={`/companies/${company.id}`} key={company.id}>
                <span className="pill-name">{company.name}</span>
                <span className="pill-period">{company.period}</span>
              </Link>
            ))}
          </div>
        </>
      )}

      {appearsIn.length > 0 && (
        <>
          <div className="section-label" style={{ marginTop: 36 }}>
            appears in
          </div>
          <div className="stack" style={{ gap: 10, marginTop: 14 }}>
            {appearsIn.map((study) => (
              <Link className="card-link" to={`/cases/${study.id}`} key={study.id}>
                <div className="mini-card">
                  <div className="mini-meta">
                    <span style={{ color: "var(--accent)" }}>{study.company}</span>
                    <span>{study.category}</span>
                  </div>
                  <div className="mini-title">{study.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
