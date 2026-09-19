import { Link, useParams } from "react-router-dom";
import { useKnowledgeBase, useLocale, useStrings } from "../lib/useKnowledgeBase";
import { withLocale } from "../lib/locale";
import NotFound from "./NotFound";

export default function CapabilityDetail() {
  const { id } = useParams();
  const { capabilities, cases, companies } = useKnowledgeBase();
  const locale = useLocale();
  const t = useStrings();
  const loc = (path: string) => withLocale(path, locale);
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
        <Link to={loc("/capabilities")}>{t.capabilityDetail.breadcrumb}</Link>
        <span>/</span>
        <span>{capability.name}</span>
      </div>

      <h1 className="display display--detail">{capability.name}</h1>
      <p className="lede" style={{ maxWidth: 620, marginTop: 12 }}>
        {capability.desc}
      </p>
      <div className="entry-period" style={{ marginTop: 20 }}>
        {t.capabilityDetail.citedIn(provingCases.length, provingCompanies.length)}
      </div>

      {provingCases.length > 0 && (
        <>
          <div className="section-label" style={{ marginTop: 32 }}>
            {t.capabilityDetail.provingDocuments}
          </div>
          <div className="stack" style={{ gap: 10, marginTop: 14 }}>
            {provingCases.map((study) => (
              <Link className="card-link" to={loc(`/cases/${study.id}`)} key={study.id}>
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
            {t.capabilityDetail.exercisedAt}
          </div>
          <div className="pill-row">
            {provingCompanies.map((company) => (
              <Link className="pill" to={loc(`/companies/${company.id}`)} key={company.id}>
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
