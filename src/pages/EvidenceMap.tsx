import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { buildEvidenceMap } from "../lib/evidenceMap";
import { useReveal } from "../lib/useReveal";

export default function EvidenceMapPage() {
  const navigate = useNavigate();
  const [focus, setFocus] = useState<string | null>(null);
  const map = useMemo(() => buildEvidenceMap(), []);
  const { ref, visible } = useReveal<HTMLDivElement>();

  const active = focus ? map.neighbours(focus) : null;

  return (
    <div className="screen screen--map">
      <h1 className="display" style={{ margin: "0 0 10px" }}>
        Evidence Map
      </h1>
      <div className="docket">
        <span>citation network — why each claim holds</span>
      </div>
      <p className="lede" style={{ maxWidth: 680 }}>
        Capabilities connect to the case studies that prove them, the companies
        where they happened, and the technologies involved. Tap or hover a node
        to trace a claim; open it to read the document.
      </p>

      <div className="map-hint">the graph is wider than the screen — drag it sideways →</div>

      <div className="map-frame" ref={ref} data-reveal={visible ? "in" : "out"}>
        <div className="map-stage" style={{ height: map.height }}>
          <svg
            className="map-svg"
            width={1080}
            height={map.height}
            aria-hidden="true"
          >
            {map.edges.map((edge) => {
              const hot = focus === edge.a || focus === edge.b;
              return (
                <path
                  className="map-edge"
                  key={`${edge.a}->${edge.b}`}
                  d={edge.d}
                  pathLength={1}
                  fill="none"
                  stroke={hot ? "var(--accent)" : "var(--text3)"}
                  strokeWidth={hot ? 1.4 : 1.1}
                  opacity={focus ? (hot ? 0.9 : 0.06) : 0.7}
                />
              );
            })}
          </svg>

          {map.columns.map((column) => (
            <div className="map-col" style={{ left: column.x }} key={column.label}>
              {column.label}
            </div>
          ))}

          {map.nodes.map((node) => {
            const on = !active || active.has(node.key);
            const isFocus = focus === node.key;
            return (
              <button
                type="button"
                className="map-node"
                key={node.key}
                style={{
                  left: node.x,
                  top: node.y,
                  width: node.w,
                  opacity: on ? 1 : 0.16,
                  borderColor: isFocus
                    ? "var(--accent)"
                    : focus && on
                      ? "var(--text3)"
                      : "var(--border2)",
                  color: on ? "var(--text)" : "var(--text2)",
                }}
                onMouseEnter={() => setFocus(node.key)}
                onMouseLeave={() => setFocus(null)}
                onFocus={() => setFocus(node.key)}
                onBlur={() => setFocus(null)}
                onClick={() => navigate(node.to)}
              >
                {node.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
