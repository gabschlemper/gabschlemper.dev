import { Link, useParams } from "react-router-dom";
import { useKnowledgeBase, useLocale, useStrings } from "../lib/useKnowledgeBase";
import { withLocale } from "../lib/locale";
import { techSlug } from "../lib/slug";
import NotFound from "./NotFound";

export default function CompanyDetail() {
  const { id } = useParams();
  const { cases, companies } = useKnowledgeBase();
  const locale = useLocale();
  const t = useStrings();
  const loc = (path: string) => withLocale(path, locale);
  const company = companies.find((entry) => entry.id === id);

  if (!company) return <NotFound />;

  const claimNum = companies.findIndex((entry) => entry.id === company.id) + 1;

  const companyCases = company.caseIds
    .map((caseId) => cases.find((study) => study.id === caseId))
    .filter((study): study is NonNullable<typeof study> => Boolean(study));

  return (
    <div className="screen">
      <div className="breadcrumb">
        <Link to={loc("/companies")}>{t.companyDetail.breadcrumb}</Link>
        <span>/</span>
        <span>{company.name}</span>
      </div>

      <div className="card company-header">
        <div className="docket" style={{ margin: "0 0 12px" }}>
          <span className="claim-tag">{t.companyDetail.claim(claimNum)}</span>
          <span className="claim-tag claim-tag--outline">{t.companyDetail.independent}</span>
        </div>
        <h1 className="display display--detail">{company.name}</h1>
        <div className="fact-grid">
          <div className="fact-key">{t.companyDetail.role}</div>
          <div className="fact-key">{t.companyDetail.period}</div>
          <div className="fact-key">{t.companyDetail.domain}</div>
          <div className="fact-val">{company.role}</div>
          <div className="fact-val">{company.period}</div>
          <div className="fact-val">{company.domain}</div>
        </div>
        <div className="company-summary">{company.summary}</div>
      </div>

      <div className="section-label" style={{ marginTop: 44 }}>
        {t.companyDetail.overview}
      </div>
      {company.overview.map((para) => (
        <p className="prose" key={para}>
          {para}
        </p>
      ))}

      <div className="section-label" style={{ marginTop: 40 }}>
        {t.companyDetail.businessDomain}
      </div>
      {company.businessDomain.map((para) => (
        <p className="prose" key={para}>
          {para}
        </p>
      ))}

      <div className="two-col" style={{ marginTop: 40 }}>
        <div>
          <div className="eyebrow">{t.companyDetail.responsibilities}</div>
          <ul className="dash-list">
            {company.responsibilities.map((item) => (
              <li key={item}>
                <span className="marker">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="eyebrow">{t.companyDetail.achievements}</div>
          <ul className="dash-list">
            {company.achievements.map((item) => (
              <li key={item}>
                <span className="marker marker--plus">+</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section-label" style={{ marginTop: 40 }}>
        {t.companyDetail.referencesCited}
      </div>
      <div className="chip-row">
        {company.technologies.map((tech) => (
          <Link
            className="chip chip--link"
            to={loc(`/technologies/${techSlug(tech)}`)}
            key={tech}
          >
            {tech}
          </Link>
        ))}
      </div>

      {companyCases.length > 0 && (
        <>
          <div className="section-label" style={{ marginTop: 40 }}>
            {t.companyDetail.dependentClaims(companyCases.length, claimNum)}
          </div>
          <div className="stack" style={{ gap: 10, marginTop: 14 }}>
            {companyCases.map((study, i) => (
              <Link className="card-link" to={loc(`/cases/${study.id}`)} key={study.id}>
                <div className="mini-card">
                  <div className="mini-meta">
                    <span className="claim-tag claim-tag--outline">
                      {t.companyDetail.claimDep(claimNum, i + 1)}
                    </span>
                    <span>{study.category}</span>
                    <span style={{ marginLeft: "auto" }}>{study.readingTime}</span>
                  </div>
                  <div className="mini-title">{study.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      <div className="section-label" style={{ marginTop: 40 }}>
        {t.companyDetail.lessonsLearned}
      </div>
      <div className="stack" style={{ gap: 10, marginTop: 14 }}>
        {company.lessons.map((lesson) => (
          <div className="lesson" key={lesson}>
            {lesson}
          </div>
        ))}
      </div>
    </div>
  );
}
