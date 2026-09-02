import { Link } from "react-router-dom";
import { companies, profile } from "../data/knowledge-base";

export default function Journey() {
  return (
    <div className="screen">
      <h1 className="display" style={{ margin: "0 0 10px" }}>
        The story of becoming more capable
      </h1>
      <div className="docket">
        <span>prosecution history — each stage a further amendment</span>
      </div>
      <p className="lede">
        Each stage is defined by what I was learning, not where I was sitting.
      </p>

      <div className="timeline timeline--journey">
        {profile.evolution.map((step, i) => (
          <div
            className="timeline-row"
            key={step.year + step.label}
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <span className="timeline-dot" />
            <div className="timeline-year">{step.year}</div>
            <div>
              <div className="timeline-label">{step.label}</div>
              <div className="timeline-detail">{step.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-label">where it happened</div>
      <div className="stack" style={{ gap: 12, marginTop: 16 }}>
        {companies.map((company) => (
          <Link className="card-link" to={`/companies/${company.id}`} key={company.id}>
            <div style={{ padding: "20px 24px" }}>
              <div className="entry-head">
                <span className="entry-name" style={{ fontSize: 16 }}>
                  {company.name}
                </span>
                <span className="entry-period">{company.period}</span>
                <span
                  className="entry-period entry-meta"
                  style={{ color: "var(--accent)" }}
                >
                  {company.role}
                </span>
              </div>
              <div className="entry-summary" style={{ marginTop: 8 }}>
                {company.phase} — {company.summary}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
