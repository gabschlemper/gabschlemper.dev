import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { buildEvidenceMap } from "../lib/evidenceMap";
import { useDocumentMeta } from "../lib/useDocumentMeta";

export default function EvidenceMapPage() {
  const navigate = useNavigate();
  const [focus, setFocus] = useState<string | null>(null);
  const map = useMemo(() => buildEvidenceMap(), []);

  useDocumentMeta(
    "Evidence Map",
    "Capabilities connect to the case studies that prove them, the companies where they happened, and the technologies involved.",
  );

  const active = focus ? map.neighbours(focus) : null;

  return (
    <div className="screen screen--map">
      <div className="eyebrow">evidence map / why each claim holds</div>
      <h1 className="display">Evidence Map</h1>
      <p className="lede" style={{ maxWidth: 680 }}>
        Capabilities connect to the case studies that prove them, the companies
        where they happened, and the technologies involved. Hover to trace a
        claim. Click any node to open its document.
      </p>

      <div className="map-frame">
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
                  fill="none"
                  stroke={hot ? "var(--accent)" : "var(--border2)"}
                  strokeWidth={1.1}
                  opacity={focus ? (hot ? 0.9 : 0.06) : 0.5}
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
