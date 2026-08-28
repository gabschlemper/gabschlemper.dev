import { profile } from "../data/knowledge-base";

export default function Profile() {
  return (
    <div className="screen">
      <div className="eyebrow">profile / technical identity</div>
      <h1 className="display">Who I am</h1>
      <p className="lede">
        Not a biography — a technical identity. What follows is how I work,
        evidenced elsewhere in this repository.
      </p>
      <span className="margin-note margin-note--block">
        ↳ mostly opinions about who's allowed to own what
      </span>

      {profile.about.map((para) => (
        <p className="prose" key={para}>
          {para}
        </p>
      ))}

      <div className="section-label">engineering philosophy</div>
      {profile.philosophy.map((para) => (
        <p className="prose" key={para}>
          {para}
        </p>
      ))}

      <div className="section-label">career evolution</div>
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

      <div className="section-label">how i think</div>
      <div className="think-list">
        {profile.howIThink.map((item) => (
          <div className="think-item" key={item}>
            {item}
          </div>
        ))}
      </div>

      <div className="two-col">
        <div>
          <div className="eyebrow">strengths</div>
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
          <div className="eyebrow">preferred problems</div>
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

      <div className="section-label">currently into</div>
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
