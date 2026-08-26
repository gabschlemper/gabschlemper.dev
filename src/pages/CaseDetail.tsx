import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CaseDiagram from "../components/CaseDiagram";
import { capabilities, cases, companies } from "../data/knowledge-base";
import { techSlug } from "../lib/slug";
import NotFound from "./NotFound";

export default function CaseDetail() {
  const { id } = useParams();
  const study = cases.find((entry) => entry.id === id);

  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!study) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);

        let current = "";
        document.querySelectorAll<HTMLElement>("[data-sec]").forEach((el) => {
          if (el.getBoundingClientRect().top < 150) {
            current = el.dataset.sec ?? "";
          }
        });
        setActiveSection(current);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [study]);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(timer);
  }, [copied]);

  if (!study) return <NotFound />;

  const company = companies.find((entry) => entry.name === study.company);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(`sec-${sectionId}`);
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 70,
      behavior: "smooth",
    });
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
    } catch {
      /* clipboard blocked — leave the label unchanged */
    }
  };

  const facts: Array<[string, string]> = [
    ["category", study.category],
    ["difficulty", study.difficulty],
    ["ownership", study.ownership],
    ["customer facing", study.customerFacing],
    ["reading time", study.readingTime],
  ];

  return (
    <>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>

      <div className="screen screen--case">
        <article>
          <div className="breadcrumb">
            <Link to="/cases">case-studies</Link>
            <span>/</span>
            <span>{study.id}</span>
          </div>

          <h1 className="display display--case">{study.title}</h1>
          <p className="case-lede">{study.summary}</p>

          {study.sections.map((section, i) => (
            <section
              className="case-section"
              id={`sec-${section.id}`}
              data-sec={section.id}
              key={section.id}
            >
              <div className="case-section-head">
                <span className="case-section-num">
                  {i < 9 ? `0${i + 1}` : String(i + 1)}
                </span>
                <h2 className="case-section-title">{section.title}</h2>
              </div>
              {section.paras?.map((para) => (
                <p className="case-para" key={para}>
                  {para}
                </p>
              ))}
              {section.bullets?.map((bullet) => (
                <div className="case-bullet" key={bullet}>
                  <span className="marker">—</span>
                  <span style={{ textWrap: "pretty" }}>{bullet}</span>
                </div>
              ))}
              {section.diagram && <CaseDiagram spec={section.diagram} />}
            </section>
          ))}
        </article>

        <aside className="case-aside">
          <div className="card case-facts">
            {facts.map(([key, value]) => (
              <div key={key}>
                <div className="case-fact-key">{key}</div>
                <div className="case-fact-val">{value}</div>
              </div>
            ))}

            <div>
              <div className="case-fact-key">company</div>
              {company ? (
                <Link className="case-fact-link" to={`/companies/${company.id}`}>
                  {study.company}
                </Link>
              ) : (
                <div className="case-fact-val">{study.company}</div>
              )}
            </div>

            <div>
              <div className="case-fact-key">capabilities</div>
              <div className="tag-row">
                {study.capabilities.map((name) => {
                  const capability = capabilities.find((c) => c.name === name);
                  return capability ? (
                    <Link
                      className="tag"
                      to={`/capabilities/${capability.id}`}
                      key={name}
                    >
                      {name}
                    </Link>
                  ) : (
                    <span className="tag" key={name}>
                      {name}
                    </span>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="case-fact-key">technologies</div>
              <div className="tag-row">
                {study.technologies.map((tech) => (
                  <Link className="tag" to={`/technologies/${techSlug(tech)}`} key={tech}>
                    {tech}
                  </Link>
                ))}
              </div>
            </div>

            <button type="button" className="copy-link" onClick={copyLink}>
              {copied ? "✓ link copied" : "copy link"}
            </button>
          </div>

          {/* Single-column below 1040px puts this after the whole article,
              where a jump-to-section list is 200 lines too late to be useful —
              the reading-progress bar covers that job on mobile instead. */}
          <div className="case-toc">
            <div className="toc-label">on this page</div>
            <div className="toc">
              {study.sections.map((section) => (
                <button
                  type="button"
                  key={section.id}
                  data-active={activeSection === section.id}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
