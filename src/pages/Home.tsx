import { Fragment } from "react";
import { Link } from "react-router-dom";
import CountUp from "../components/CountUp";
import Reveal from "../components/Reveal";
import { config, contactLinks } from "../config";
import { cases, companies, profile, stats } from "../data/knowledge-base";

/** The one authored mark in the system: a two-ring, checked stamp — "approved
 * for contact" — drawn as three simple paths, not a photo or a filter. */
function StampMark() {
  return (
    <svg className="stamp-mark" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9.2" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="5.8" strokeWidth="1" />
      <path d="M7.4 12.4l2.8 2.8 6.4-6.6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  const featured = cases.filter((study) => study.featured);
  const links = contactLinks();
  const careerYears = stats.find((stat) => stat.label === "Career Years")?.value;

  return (
    <div className="screen screen--wide">
      <div className="cover-grid">
        <div>
          <h1 className="cover-title">{profile.name}</h1>
          <div className="docket">
            <span>
              {config.availability}
              {careerYears ? ` · ${careerYears} years experience` : ""}
            </span>
          </div>

          <p className="cover-abstract">
            <strong>Abstract</strong>
            {profile.headline}
          </p>
          <p className="cover-lede">{profile.oneLiner}</p>

          <div className="contact-row">
            {config.openToWork && (
              <span className="stamp">
                <StampMark />
                open to opportunities
              </span>
            )}
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
        </div>

        {/* Affixed like a filing's inventor photo, captioned the way a patent
            figure is: "FIG. 1", not a bio-page headshot. */}
        <div className="cover-photo">
          <div className="cover-photo-frame">
            <img
              className="cover-photo-img"
              src="/images/profile-512.webp"
              alt="Gabriela Schlemper"
              width={512}
              height={512}
            />
          </div>
          <div className="cover-photo-caption">FIG. 1 — applicant</div>
        </div>
      </div>

      {config.showStats && (
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
      )}

      <p className="hero-evidence">
        Every experience in this repository answers one question:{" "}
        <strong>“What evidence does this give about the engineer I am?”</strong>
      </p>
      <span className="margin-note margin-note--block">
        ↳ also: I will actually read your email
      </span>

      <div className="section-label">career journey — claims 1–{companies.length}</div>
      <Reveal className="journey-strip">
        {companies.map((company, i) => (
          <Fragment key={company.id}>
            {i > 0 && <div className="journey-arrow">←</div>}
            <Link className="card-link" to={`/companies/${company.id}`}>
              <div className="journey-card">
                <div className="journey-card-period">
                  <span className="claim-tag claim-tag--outline">claim {i + 1}</span>{" "}
                  {company.period}
                </div>
                <div className="journey-card-name">{company.name}</div>
                <div className="journey-card-phase">{company.phase}</div>
              </div>
            </Link>
          </Fragment>
        ))}
      </Reveal>

      {/* Deliberately flat, not literally "claim 1's dependents": the home
          screen surveys the whole docket (all N claims, via the tagged
          journey strip above) cross-cut with the strongest evidence
          regardless of which claim it cites — nesting every claim's full
          dependent list here would read as claim 1's page twice and cost
          the fast scan the brief asked for. Each card still carries its own
          claim.dependent tag, so the citation is never lost, just not
          grouped by claim on this one overview screen. */}
      <div className="section-head">
        <div className="eyebrow">highlighted case studies</div>
        <Link className="section-more" to="/cases">
          all {cases.length} →
        </Link>
      </div>
      <Reveal className="stack" style={{ gap: 12, marginTop: 16 }}>
        {featured.map((study) => {
          const company = companies.find((entry) => entry.name === study.company);
          const claimNum = company ? companies.indexOf(company) + 1 : null;
          const depNum =
            company && claimNum ? company.caseIds.indexOf(study.id) + 1 : null;

          return (
            <Link className="card-link" to={`/cases/${study.id}`} key={study.id}>
              <div className="featured-card">
                <div className="card-meta">
                  {claimNum && depNum && (
                    <span className="claim-tag claim-tag--outline">
                      claim {claimNum}.{depNum}
                    </span>
                  )}
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
          );
        })}
      </Reveal>

      <div className="quote">“{profile.quote}”</div>
    </div>
  );
}
