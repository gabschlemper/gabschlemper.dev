import { Link } from "react-router-dom";
import { useKnowledgeBase, useLocale, useStrings } from "../lib/useKnowledgeBase";
import { withLocale } from "../lib/locale";

export default function Capabilities() {
  const { capabilities, cases, companies } = useKnowledgeBase();
  const locale = useLocale();
  const t = useStrings();
  const loc = (path: string) => withLocale(path, locale);

  return (
    <div className="screen screen--wide">
      <h1 className="display" style={{ margin: "0 0 10px" }}>
        {t.capabilities.title}
      </h1>
      <div className="docket">
        <span>{t.capabilities.docket(capabilities.length)}</span>
      </div>
      <p className="lede">{t.capabilities.lede}</p>

      <div className="grid-2">
        {capabilities.map((capability) => {
          const provingCases = cases.filter((study) =>
            study.capabilities.includes(capability.name),
          );
          const provingCompanies = companies.filter((company) =>
            company.capabilities.includes(capability.name),
          );
          const total = provingCases.length + provingCompanies.length;

          return (
            <Link
              className="card-link"
              to={loc(`/capabilities/${capability.id}`)}
              key={capability.id}
            >
              <div className="cap-card">
                <div className="cap-head">
                  <div className="cap-name">{capability.name}</div>
                  <div className="cap-squares">
                    {Array.from({ length: Math.min(8, total) }, (_, i) => (
                      <span className="cap-square" key={i} />
                    ))}
                  </div>
                </div>
                <div className="cap-desc">{capability.desc}</div>
                <div className="cap-evidence">
                  {t.capabilities.evidence(provingCases.length, provingCompanies.length)}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
