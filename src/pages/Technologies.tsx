import { Link } from "react-router-dom";
import { companies, technologies } from "../data/knowledge-base";
import { techSlug } from "../lib/slug";

export default function Technologies() {
  return (
    <div className="screen screen--wide">
      <div className="eyebrow">technologies / how, not just what</div>
      <h1 className="display">Technologies</h1>
      <p className="lede">Every entry documents how I used it — not a logo grid.</p>

      <div className="grid-2 grid-2--tight">
        {technologies.map((tech) => {
          const usedAt = companies.filter((company) =>
            company.technologies.includes(tech.name),
          );

          return (
            <Link
              className="card-link"
              to={`/technologies/${techSlug(tech.name)}`}
              key={tech.name}
            >
              <div className="tech-card">
                <div className="cap-head">
                  <span className="tech-name">{tech.name}</span>
                  <span className="tech-meta">
                    {usedAt.length > 0
                      ? usedAt.map((company) => company.name).join(" · ")
                      : "freelance"}
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
