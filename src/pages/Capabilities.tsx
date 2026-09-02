import { Link } from "react-router-dom";
import { capabilities, cases, companies } from "../data/knowledge-base";

export default function Capabilities() {
  return (
    <div className="screen screen--wide">
      <h1 className="display" style={{ margin: "0 0 10px" }}>
        Capabilities
      </h1>
      <div className="docket">
        <span>{capabilities.length} claim elements, cited across every claim</span>
      </div>
      <p className="lede">
        Not technologies — capabilities. Each one links to the documents that
        prove it.
      </p>

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
              to={`/capabilities/${capability.id}`}
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
                  {provingCases.length} case studies · {provingCompanies.length}{" "}
                  companies
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
