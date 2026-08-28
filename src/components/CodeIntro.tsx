import type { ReactNode } from "react";
import { config } from "../config";
import { profile, stats } from "../data/knowledge-base";

/** Syntax spans. Deliberately few: strings carry the content, the rest is scaffolding. */
const K = ({ children }: { children: ReactNode }) => <span className="tok-kw">{children}</span>;
const S = ({ children }: { children: ReactNode }) => <span className="tok-str">{children}</span>;
const P = ({ children }: { children: ReactNode }) => <span className="tok-punc">{children}</span>;
const C = ({ children }: { children: ReactNode }) => <span className="tok-com">{children}</span>;
const I = ({ children }: { children: ReactNode }) => <span className="tok-id">{children}</span>;

interface Spec {
  indent?: number;
  content?: ReactNode;
}

function Line({ indent = 0, content }: Spec) {
  const style = { "--indent": indent } as React.CSSProperties;
  return (
    <div className="code-line" style={style}>
      <span className="code-body">{content}</span>
    </div>
  );
}

/**
 * The home introduction, written as the function it describes. Everything
 * here is real text in the DOM — the name is still an h1, the facts are
 * still readable strings — a reader just sees them dressed as source.
 */
export default function CodeIntro() {
  const careerYears = stats.find((stat) => stat.label === "Career Years")?.value;

  const specs: Spec[] = [
    { content: (<><K>function</K> <I>whoIs</I><P>() {"{"}</P></>) },
    {
      indent: 1,
      content: (
        <>
          <K>const</K> name <P>=</P> <span className="tok-str">&quot;</span>
          <h1 className="code-name">{profile.name}</h1>
          <span className="tok-str">&quot;</span>
        </>
      ),
    },
    {
      indent: 1,
      content: (<><K>const</K> role <P>=</P> <S>&quot;Software Engineer&quot;</S></>),
    },
    {
      indent: 1,
      // The comment carries the phrase in full on purpose: "sponsorship = false"
      // is legible to a human but useless to a crawler or an AI asked whether she
      // needs sponsorship, and that phrasing is the one fact recruiters filter on.
      content: (
        <>
          <K>const</K> sponsorship <P>=</P> <K>false</K>{" "}
          <C>// no visa or sponsorship needed anywhere in the EU</C>
        </>
      ),
    },
    {
      indent: 1,
      content: (
        <>
          <K>const</K> workModes <P>=</P> <P>[</P>
          <S>&quot;remote&quot;</S>
          <P>,</P> <S>&quot;on-site&quot;</S>
          <P>]</P>
        </>
      ),
    },
    ...(careerYears
      ? [
          {
            indent: 1,
            content: (
              <>
                <K>const</K> experience <P>=</P> <S>&quot;{careerYears} years&quot;</S>
              </>
            ),
          },
        ]
      : []),
    ...(config.openToWork
      ? [
          {
            indent: 1,
            content: (
              <>
                <K>const</K> openToOffers <P>=</P> <K>true</K>
              </>
            ),
          },
        ]
      : []),

    {},

    // Broad domains rather than the narrower "frontend engineering / developer
    // experience" pairing: these are the terms international postings are
    // written in, and each is backed by case studies — architecture and system
    // design, distributed systems, and both frontend and backend engineering.
    { indent: 1, content: <C>// {profile.oneLiner}</C> },
    { indent: 1, content: (<><K>const</K> focus <P>= [</P></>) },
    { indent: 2, content: (<><S>&quot;software architecture&quot;</S><P>,</P></>) },
    { indent: 2, content: (<><S>&quot;distributed systems&quot;</S><P>,</P></>) },
    { indent: 2, content: (<><S>&quot;full-stack engineering&quot;</S><P>,</P></>) },
    { indent: 1, content: <P>]</P> },

    {},

    {
      indent: 1,
      content: (
        <>
          <K>return</K> <P>{"{"}</P> name<P>,</P> role<P>,</P> based<P>,</P> focus{" "}
          <P>{"}"}</P>
        </>
      ),
    },
    {
      content: (
        <>
          <P>{"}"}</P>
          <span className="code-caret" aria-hidden="true" />
        </>
      ),
    },
  ];

  return (
    <div className="code-intro">
      <div className="code-intro-head">
        <span className="code-intro-file">gabriela-schlemper.ts</span>
        <span className="code-intro-lang">typescript</span>
      </div>

      <div className="code-intro-body">
        {specs.map((spec, i) => (
          <Line key={i} indent={spec.indent} content={spec.content} />
        ))}
      </div>
    </div>
  );
}
