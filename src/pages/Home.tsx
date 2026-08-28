import { Fragment } from "react";
import { Link } from "react-router-dom";
import CodeIntro from "../components/CodeIntro";
import CountUp from "../components/CountUp";
import Reveal from "../components/Reveal";
import { config, contactLinks } from "../config";
import { cases, companies, profile, stats } from "../data/knowledge-base";

export default function Home() {
  const featured = cases.filter((study) => study.featured);
  const links = contactLinks();

  return (
    <div className="screen screen--wide">
      <div className="eyebrow">index / readme</div>

      {/* Carries the h1 and the role/location/sponsorship facts, so the old
          hero-tags and availability-line would only have repeated them. */}
      <CodeIntro />

      <div className="code-pin-foot">
        {config.openToWork && (
          <span className="badge-open">open to opportunities</span>
        )}

        {/* Buttons rather than identifiers folded into the code: source
            styling does not read as clickable. */}
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

      <p className="hero-evidence">
        Every experience in this repository answers one question:{" "}
        <strong>“What evidence does this give about the engineer I am?”</strong>
      </p>
      <span className="margin-note margin-note--block">
        ↳ also: I will actually read your email
      </span>

      <div className="section-label">career journey</div>
      <Reveal className="journey-strip">
        {companies.map((company, i) => (
          <Fragment key={company.id}>
            {i > 0 && <div className="journey-arrow">←</div>}
            <Link className="card-link" to={`/companies/${company.id}`}>
              <div className="journey-card">
                <div className="journey-card-period">{company.period}</div>
                <div className="journey-card-name">{company.name}</div>
                <div className="journey-card-phase">{company.phase}</div>
              </div>
            </Link>
          </Fragment>
        ))}
      </Reveal>

      <div className="section-head">
        <div className="eyebrow">highlighted case studies</div>
        <Link className="section-more" to="/cases">
          all {cases.length} →
        </Link>
      </div>
      <Reveal className="stack" style={{ gap: 12, marginTop: 16 }}>
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
      </Reveal>

      {config.showStats && (
        <>
          <div className="section-head">
            <div className="section-label" style={{ marginTop: 0 }}>
              repository statistics
            </div>
            <span className="margin-note">counted by hand, no LLM involved</span>
          </div>
          <Reveal className="stats-grid">
            {(visible) =>
              stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <div className="stat-value">
                    <CountUp value={stat.value} run={visible} />
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))
            }
          </Reveal>
        </>
      )}

      <div className="quote">“{profile.quote}”</div>
    </div>
  );
}
