import { Link, useParams } from "react-router-dom";
import { useKnowledgeBase, useLocale, useStrings } from "../lib/useKnowledgeBase";
import { withLocale } from "../lib/locale";
import { techNameFromSlug } from "../lib/slug";
import NotFound from "./NotFound";

export default function TechnologyDetail() {
  const { slug } = useParams();
  const { cases, companies, technologies } = useKnowledgeBase();
  const locale = useLocale();
  const t = useStrings();
  const loc = (path: string) => withLocale(path, locale);
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
        <Link to={loc("/technologies")}>{t.technologyDetail.breadcrumb}</Link>
        <span>/</span>
        <span>{tech.name}</span>
      </div>

      <h1 className="display display--detail">{tech.name}</h1>

      <div className="section-label" style={{ marginTop: 12 }}>
        {t.technologyDetail.howIUsedIt}
      </div>
      <p className="prose" style={{ maxWidth: 640 }}>
        {tech.usage}
      </p>

      {usedAt.length > 0 && (
        <>
          <div className="section-label" style={{ marginTop: 32 }}>
            {t.technologyDetail.companies}
          </div>
          <div className="pill-row">
            {usedAt.map((company) => (
              <Link className="pill" to={loc(`/companies/${company.id}`)} key={company.id}>
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
            {t.technologyDetail.appearsIn}
          </div>
          <div className="stack" style={{ gap: 10, marginTop: 14 }}>
            {appearsIn.map((study) => (
              <Link className="card-link" to={loc(`/cases/${study.id}`)} key={study.id}>
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
