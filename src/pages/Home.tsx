import { Fragment } from "react";
import { Link } from "react-router-dom";
import { config, contactLinks } from "../config";
import { cases, companies, profile, stats } from "../data/knowledge-base";
import { useDocumentMeta } from "../lib/useDocumentMeta";

export default function Home() {
  useDocumentMeta(undefined, profile.headline);

  const featured = cases.filter((study) => study.featured);
  const links = contactLinks();

  return (
    <div className="screen screen--wide">
      <div className="eyebrow">index / readme</div>
      <h1 className="display display--hero">{profile.name}</h1>

      <div className="hero-tags">
        <span className="hero-role">software engineer</span>
        <span className="hero-sub">distributed systems · frontend · Dynamox</span>
        {config.openToWork && (
          <span className="badge-open">open to opportunities</span>
        )}
      </div>

      {links.length > 0 && (
        <div className="contact-row">
          {links.map((link) => (
            <a
              key={link.label}
              className="contact-link"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <p className="hero-oneliner">{profile.oneLiner}</p>
      <p className="hero-evidence">
        Every experience in this repository answers one question:{" "}
        <strong>“What evidence does this give about the engineer I am?”</strong>
      </p>

      <div className="section-label">career journey</div>
      <div className="journey-strip">
        {companies.map((company, i) => (
          <Fragment key={company.id}>
            {i > 0 && <div className="journey-arrow">→</div>}
            <Link className="card-link" to={`/companies/${company.id}`}>
              <div className="journey-card">
                <div className="journey-card-period">{company.period}</div>
                <div className="journey-card-name">{company.name}</div>
                <div className="journey-card-phase">{company.phase}</div>
              </div>
            </Link>
          </Fragment>
        ))}
      </div>

      <div className="section-head">
        <div className="eyebrow">highlighted case studies</div>
        <Link className="section-more" to="/cases">
          all {cases.length} →
        </Link>
      </div>
      <div className="stack" style={{ gap: 12, marginTop: 16 }}>
        {featured.map((study) => (
          <Link className="card-link" to={`/cases/${study.id}`} key={study.id}>
            <div className="featured-card">
              <div className="card-meta">
                <span className="accent">{study.company}</span>
                <span>{study.category}</span>
                <span className="push">{study.readingTime}</span>
              </div>
              <div className="featured-title">{study.title}</div>
              <div className="featured-summary">{study.summary}</div>
              <div className="featured-impact">
                impact: <span>{study.impact.join(" · ")}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {config.showStats && (
        <>
          <div className="section-label">repository statistics</div>
          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="quote">“{profile.quote}”</div>
    </div>
  );
}
