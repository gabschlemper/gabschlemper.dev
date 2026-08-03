import { Link, useNavigate, useParams } from "react-router-dom";
import { cases, companies } from "../data/knowledge-base";
import { techSlug } from "../lib/slug";
import { useDocumentMeta } from "../lib/useDocumentMeta";
import NotFound from "./NotFound";

export default function CompanyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const company = companies.find((entry) => entry.id === id);

  useDocumentMeta(company?.name, company?.summary ?? "");

  if (!company) return <NotFound />;

  const companyCases = company.caseIds
    .map((caseId) => cases.find((study) => study.id === caseId))
    .filter((study): study is NonNullable<typeof study> => Boolean(study));

  return (
    <div className="screen">
      <div className="breadcrumb">
        <button type="button" onClick={() => navigate("/companies")}>
          companies
        </button>
        <span>/</span>
        <span>{company.name}</span>
      </div>

      <div className="card company-header">
        <h1 className="display display--detail">{company.name}</h1>
        <div className="fact-grid">
          <div className="fact-key">role</div>
          <div className="fact-key">period</div>
          <div className="fact-key">domain</div>
          <div className="fact-val">{company.role}</div>
          <div className="fact-val">{company.period}</div>
          <div className="fact-val">{company.domain}</div>
        </div>
        <div className="company-summary">{company.summary}</div>
      </div>

      <div className="section-label" style={{ marginTop: 44 }}>
        overview
      </div>
      {company.overview.map((para) => (
        <p className="prose" key={para}>
          {para}
        </p>
      ))}

      <div className="section-label" style={{ marginTop: 40 }}>
        business domain
      </div>
      {company.businessDomain.map((para) => (
        <p className="prose" key={para}>
          {para}
        </p>
      ))}

      <div className="two-col" style={{ marginTop: 40 }}>
        <div>
          <div className="eyebrow">responsibilities</div>
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
          <div className="eyebrow">achievements</div>
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
        technologies
      </div>
      <div className="chip-row">
        {company.technologies.map((tech) => (
          <Link className="chip chip--link" to={`/technologies/${techSlug(tech)}`} key={tech}>
            {tech}
          </Link>
        ))}
      </div>

      {companyCases.length > 0 && (
        <>
          <div className="section-label" style={{ marginTop: 40 }}>
            case studies
          </div>
          <div className="stack" style={{ gap: 10, marginTop: 14 }}>
            {companyCases.map((study) => (
              <Link className="card-link" to={`/cases/${study.id}`} key={study.id}>
                <div className="mini-card">
                  <div className="mini-meta">
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
        lessons learned
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
