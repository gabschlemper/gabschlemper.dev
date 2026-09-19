import { Fragment } from "react";
import { Link } from "react-router-dom";
import CountUp from "../components/CountUp";
import Reveal from "../components/Reveal";
import { config, contactLinks } from "../config";
import { useKnowledgeBase, useLocale, useStrings } from "../lib/useKnowledgeBase";
import { withLocale } from "../lib/locale";

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
  const { cases, companies, profile, stats } = useKnowledgeBase();
  const locale = useLocale();
  const t = useStrings();
  const loc = (path: string) => withLocale(path, locale);
  const featured = cases.filter((study) => study.featured);
  const links = contactLinks(t);
  // Index 0 by generator convention (see knowledge-base.ts) rather than a
  // label match — the label itself is translated per locale, so matching
  // English text here would silently break on /pt/.
  const careerYears = stats[0]?.value;

  return (
    <div className="screen screen--wide">
      <div className="cover-grid">
        <div>
          <h1 className="cover-title">{profile.name}</h1>
          <div className="docket">
            <span>
              {t.home.availability}
              {careerYears ? t.home.yearsExperience(careerYears) : ""}
            </span>
          </div>

          <p className="cover-abstract">
            <strong>{t.home.abstractLabel}</strong>
            {profile.headline}
          </p>
          <p className="cover-lede">{profile.oneLiner}</p>

          <div className="contact-row">
            {config.openToWork && (
              <span className="stamp">
                <StampMark />
                {t.contact.openToOpportunities}
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
          <div className="cover-photo-caption">{t.home.figCaption}</div>
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
        {t.home.heroEvidenceLead} <strong>{t.home.heroEvidenceStrong}</strong>{" "}
        <span className="hero-evidence-aside">{t.home.heroEvidenceAside}</span>
      </p>

      <div className="section-label">{t.home.careerJourney(companies.length)}</div>
      <Reveal className="journey-strip">
        {companies.map((company, i) => (
          <Fragment key={company.id}>
            {i > 0 && <div className="journey-arrow">←</div>}
            <Link className="card-link" to={loc(`/companies/${company.id}`)}>
              <div className="journey-card">
                <div className="journey-card-period">{company.period}</div>
                <div className="journey-card-name">{company.name}</div>
                <div className="journey-card-phase">{company.phase}</div>
              </div>
            </Link>
          </Fragment>
        ))}
      </Reveal>

      {/* Deliberately flat, not grouped by company: the home screen surveys
          the whole roster (via the journey strip above) cross-cut with the
          strongest evidence regardless of which company it's from — nesting
          every company's full case list here would read as that company's
          page twice and cost the fast scan the brief asked for. */}
      <div className="section-head">
        <div className="eyebrow">{t.home.highlightedCaseStudies}</div>
        <Link className="section-more" to={loc("/cases")}>
          {t.home.all(cases.length)}
        </Link>
      </div>
      <Reveal className="stack" style={{ gap: 12, marginTop: 16 }}>
        {featured.map((study) => (
          <Link className="card-link" to={loc(`/cases/${study.id}`)} key={study.id}>
            <div className="featured-card">
              <div className="card-meta">
                <span className="accent">{study.company}</span>
                <span>{study.category}</span>
                <span className="push">{study.readingTime}</span>
              </div>
              <div className="featured-title">{study.title}</div>
              <div className="featured-summary">{study.summary}</div>
              <div className="featured-impact">
                {t.home.impact} <span>{study.impact.join(" · ")}</span>
              </div>
            </div>
          </Link>
        ))}
      </Reveal>
    </div>
  );
}
