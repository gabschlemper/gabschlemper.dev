import { Link } from "react-router-dom";
import { useKnowledgeBase, useLocale, useStrings } from "../lib/useKnowledgeBase";
import { withLocale } from "../lib/locale";

export default function Companies() {
  const { companies } = useKnowledgeBase();
  const locale = useLocale();
  const t = useStrings();

  return (
    <div className="screen">
      <h1 className="display" style={{ margin: "0 0 10px" }}>
        {t.companies.title}
      </h1>
      <div className="docket">
        <span>{t.companies.docket(companies.length)}</span>
      </div>

      <div className="stack" style={{ gap: 14, marginTop: 28 }}>
        {companies.map((company, i) => (
          <Link
            className="card-link"
            to={withLocale(`/companies/${company.id}`, locale)}
            key={company.id}
          >
            <div className="entry-card">
              <div className="entry-head">
                <span className="claim-tag">{t.companies.claim(i + 1)}</span>
                <span className="entry-name">{company.name}</span>
                <span className="entry-period">{company.period}</span>
                <span className="entry-meta">
                  {t.companies.caseStudiesAnd(company.caseIds.length, company.technologies.length)}
                </span>
              </div>
              <div className="entry-role">{company.role}</div>
              <div className="entry-summary">{company.summary}</div>
              <div className="entry-phase">{t.companies.phase(company.phase)}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
