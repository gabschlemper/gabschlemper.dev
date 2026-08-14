import type { CSSProperties, ReactNode } from "react";
import { config } from "../config";
import { profile, stats } from "../data/knowledge-base";

/** Syntax spans. Deliberately few: strings carry the content, the rest is scaffolding. */
const K = ({ children }: { children: ReactNode }) => <span className="tok-kw">{children}</span>;
const S = ({ children }: { children: ReactNode }) => <span className="tok-str">{children}</span>;
const P = ({ children }: { children: ReactNode }) => <span className="tok-punc">{children}</span>;
const C = ({ children }: { children: ReactNode }) => <span className="tok-com">{children}</span>;
const I = ({ children }: { children: ReactNode }) => <span className="tok-id">{children}</span>;

/**
 * Reveal schedules. Each hidden line gets a window, and the windows are derived
 * from how many hidden lines there actually are rather than written out by hand
 * — the count changes with config.openToWork and with any edit to the function
 * body, and hand-numbered ranges silently overflow their timeline when it grows.
 *
 * PIN — progress through the pinned section, as a percentage of it. The last
 * line finishes before the end so the function is readable for a beat before
 * the page releases.
 *
 * FLOW — the fallback when nothing is pinned (short viewport, no scroll-driven
 * timelines, reduced motion): absolute page scroll, in vh.
 */
const PIN_SPAN_PCT = 22;
const PIN_LAST_END_PCT = 88;

const FLOW_START_VH = 3;
const FLOW_SPAN_VH = 13;
const FLOW_LAST_END_VH = 95;

/** Even spacing such that the final window closes exactly on `lastEnd`. */
function step(count: number, span: number, start: number, lastEnd: number): number {
  if (count <= 1) return 0;
  return (lastEnd - span - start) / (count - 1);
}

interface LineProps {
  /** Omitted for the blank lines that separate the function's sections. */
  children?: ReactNode;
  /** Indent level, one step per two spaces of source. */
  indent?: number;
  /** Position in the hidden tail. Undefined means visible from the start. */
  seq?: number;
  /** How many hidden lines there are in total. */
  total?: number;
}

function Line({ children, indent = 0, seq, total = 1 }: LineProps) {
  const style: CSSProperties & Record<string, string | number> = {
    "--indent": indent,
  };

  if (seq !== undefined) {
    const pinStep = step(total, PIN_SPAN_PCT, 0, PIN_LAST_END_PCT);
    const pinFrom = seq * pinStep;
    style["--pin-from"] = `${pinFrom.toFixed(2)}%`;
    style["--pin-to"] = `${(pinFrom + PIN_SPAN_PCT).toFixed(2)}%`;

    const flowStep = step(total, FLOW_SPAN_VH, FLOW_START_VH, FLOW_LAST_END_VH);
    const flowFrom = FLOW_START_VH + seq * flowStep;
    style["--flow-from"] = `${flowFrom.toFixed(2)}vh`;
    style["--flow-to"] = `${(flowFrom + FLOW_SPAN_VH).toFixed(2)}vh`;
  }

  return (
    <div
      className="code-line"
      data-tail={seq !== undefined ? "" : undefined}
      style={style}
    >
      <span className="code-body">{children}</span>
    </div>
  );
}

interface Spec {
  indent?: number;
  /** True for the lines that start hidden and sharpen as the reader scrolls. */
  hidden?: boolean;
  content?: ReactNode;
}

/**
 * The home introduction, written as the function it describes.
 *
 * Everything here is real text in the DOM — the name is still an h1, the facts
 * are still readable strings — so the prerendered HTML that crawlers and AI
 * readers consume loses nothing by being styled as source, including the lines
 * that start visually hidden.
 */
export default function CodeIntro() {
  /**
   * Read from the stats block rather than restated here, so this number cannot
   * drift away from the one shown further down the same page. The line is
   * dropped entirely if the stat is ever renamed or removed — better a shorter
   * function than a stale claim about years of experience.
   */
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
      hidden: true,
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
      hidden: true,
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
            hidden: true,
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
            hidden: true,
            content: (
              <>
                <K>const</K> openToOffers <P>=</P> <K>true</K>
              </>
            ),
          },
        ]
      : []),

    { hidden: true },

    // Broad domains rather than the narrower "frontend engineering / developer
    // experience" pairing: these are the terms international postings are
    // written in, and each is backed by case studies — architecture and system
    // design, distributed systems, and both frontend and backend engineering.
    { indent: 1, hidden: true, content: <C>// {profile.oneLiner}</C> },
    { indent: 1, hidden: true, content: (<><K>const</K> focus <P>= [</P></>) },
    { indent: 2, hidden: true, content: (<><S>&quot;software architecture&quot;</S><P>,</P></>) },
    { indent: 2, hidden: true, content: (<><S>&quot;distributed systems&quot;</S><P>,</P></>) },
    { indent: 2, hidden: true, content: (<><S>&quot;full-stack engineering&quot;</S><P>,</P></>) },
    { indent: 1, hidden: true, content: <P>]</P> },

    { hidden: true },

    {
      indent: 1,
      hidden: true,
      content: (
        <>
          <K>return</K> <P>{"{"}</P> name<P>,</P> role<P>,</P> based<P>,</P> focus{" "}
          <P>{"}"}</P>
        </>
      ),
    },
    {
      hidden: true,
      content: (
        <>
          <P>{"}"}</P>
          <span className="code-caret" aria-hidden="true" />
        </>
      ),
    },
  ];

  const total = specs.filter((spec) => spec.hidden).length;
  let seq = 0;

  return (
    <div className="code-intro">
      <div className="code-intro-head">
        <span className="code-intro-file">gabriela-schlemper.ts</span>
        <span className="code-intro-lang">typescript</span>
      </div>

      <div className="code-intro-body">
        {specs.map((spec, i) => (
          <Line
            key={i}
            indent={spec.indent}
            seq={spec.hidden ? seq++ : undefined}
            total={total}
          >
            {spec.content}
          </Line>
        ))}
      </div>
    </div>
  );
}
