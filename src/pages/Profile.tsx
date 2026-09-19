import { useKnowledgeBase, useStrings } from "../lib/useKnowledgeBase";

export default function Profile() {
  const { profile } = useKnowledgeBase();
  const t = useStrings();

  return (
    <div className="screen">
      <h1 className="display" style={{ margin: "0 0 10px" }}>
        {t.profile.title}
      </h1>
      <div className="docket">
        <span>{t.profile.docket}</span>
      </div>
      <p className="lede">{t.profile.lede}</p>
      <span className="margin-note margin-note--block">{t.profile.marginNote}</span>

      {profile.about.map((para) => (
        <p className="prose" key={para}>
          {para}
        </p>
      ))}

      <div className="section-label">{t.profile.engineeringPhilosophy}</div>
      {profile.philosophy.map((para) => (
        <p className="prose" key={para}>
          {para}
        </p>
      ))}

      <div className="section-label">{t.profile.careerEvolution}</div>
      <div className="timeline">
        {profile.evolution.map((step) => (
          <div className="timeline-row" key={step.year + step.label}>
            <span className="timeline-dot" />
            <div className="timeline-year">{step.year}</div>
            <div>
              <div className="timeline-label">{step.label}</div>
              <div className="timeline-detail">{step.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-label">{t.profile.howIThink}</div>
      <div className="think-list">
        {profile.howIThink.map((item) => (
          <div className="think-item" key={item}>
            {item}
          </div>
        ))}
      </div>

      <div className="two-col">
        <div>
          <div className="eyebrow">{t.profile.strengths}</div>
          <ul className="dash-list">
            {profile.strengths.map((item) => (
              <li key={item}>
                <span className="marker">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="eyebrow">{t.profile.preferredProblems}</div>
          <ul className="dash-list">
            {profile.preferredProblems.map((item) => (
              <li key={item}>
                <span className="marker">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section-label">{t.profile.currentlyInto}</div>
      <div className="chip-row">
        {profile.interests.map((interest) => (
          <span className="chip" key={interest}>
            {interest}
          </span>
        ))}
      </div>

      <div className="quote">“{profile.quote}”</div>
    </div>
  );
}
