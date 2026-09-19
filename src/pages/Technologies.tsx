import { Link } from "react-router-dom";
import { useKnowledgeBase, useLocale, useStrings } from "../lib/useKnowledgeBase";
import { withLocale } from "../lib/locale";
import { techSlug } from "../lib/slug";

export default function Technologies() {
  const { companies, technologies } = useKnowledgeBase();
  const locale = useLocale();
  const t = useStrings();
  const loc = (path: string) => withLocale(path, locale);

  return (
    <div className="screen screen--wide">
      <h1 className="display" style={{ margin: "0 0 10px" }}>
        {t.technologies.title}
      </h1>
      <div className="docket">
        <span>{t.technologies.docket(technologies.length)}</span>
      </div>
      <p className="lede">{t.technologies.lede}</p>

      <div className="grid-2 grid-2--tight">
        {technologies.map((tech) => {
          const usedAt = companies.filter((company) =>
            company.technologies.includes(tech.name),
          );

          return (
            <Link
              className="card-link"
              to={loc(`/technologies/${techSlug(tech.name)}`)}
              key={tech.name}
            >
              <div className="tech-card">
                <div className="cap-head">
                  <span className="tech-name">{tech.name}</span>
                  <span className="tech-meta">
                    {usedAt.length > 0
                      ? usedAt.map((company) => company.name).join(" · ")
                      : t.technologies.freelance}
                  </span>
                </div>
                <div className="tech-usage">{tech.usage}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
