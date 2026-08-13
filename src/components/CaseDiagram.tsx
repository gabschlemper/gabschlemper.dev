import type { CaseDiagramSpec, DiagramNode } from "../data/knowledge-base";
import { useReveal } from "../lib/useReveal";

function nodeLabelClass(variant?: DiagramNode["variant"]): string {
  if (variant === "accent") return "diagram-node-label accent";
  if (variant === "removed") return "diagram-node-label removed";
  return "diagram-node-label";
}

export default function CaseDiagram({ spec }: { spec: CaseDiagramSpec }) {
  const byId = new Map(spec.nodes.map((node) => [node.id, node]));
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      className="diagram-frame"
      ref={ref}
      data-reveal={visible ? "in" : "out"}
    >
      <svg
        viewBox={`0 0 ${spec.width} ${spec.height}`}
        className="diagram-svg"
        role="img"
        aria-label="Architecture diagram illustrating this decision"
      >
        <defs>
          <marker
            id="diagram-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0 0L10 5L0 10z" fill="var(--text3)" />
          </marker>
        </defs>

        {spec.edges.map((edge) => {
          const from = byId.get(edge.from);
          const to = byId.get(edge.to);
          if (!from || !to) return null;
          const x1 = from.x + from.w / 2;
          const y1 = from.y + from.h;
          const x2 = to.x + to.w / 2;
          const y2 = to.y;
          const midY = (y1 + y2) / 2;
          const d = `M${x1} ${y1} C${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;
          return (
            <g key={`${edge.from}->${edge.to}`}>
              <path
                className="diagram-edge-path"
                d={d}
                fill="none"
                stroke="var(--text3)"
                strokeWidth={1.2}
                markerEnd="url(#diagram-arrow)"
                // Normalized length: the draw-in animation dashes every curve
                // with the same values regardless of its real arc length.
                pathLength={1}
              />
              {edge.label && (
                <text
                  x={(x1 + x2) / 2}
                  y={midY - 5}
                  textAnchor="middle"
                  className="diagram-edge-label"
                >
                  {edge.label}
                </text>
              )}
            </g>
          );
        })}

        {spec.nodes.map((node) => {
          const cx = node.x + node.w / 2;
          const lineHeight = 13;
          const blockHeight = (node.lines.length - 1) * lineHeight;
          const startY = node.y + node.h / 2 - blockHeight / 2 + (node.sub ? -6 : 4);
          return (
            <g key={node.id} className="diagram-node">
              <rect
                x={node.x}
                y={node.y}
                width={node.w}
                height={node.h}
                rx={6}
                fill={node.variant === "removed" ? "transparent" : "var(--card)"}
                stroke={node.variant === "accent" ? "var(--accent)" : "var(--border2)"}
                strokeWidth={node.variant === "accent" ? 1.6 : 1.2}
                strokeDasharray={node.variant === "removed" ? "4 3" : undefined}
              />
              <text x={cx} textAnchor="middle" className={nodeLabelClass(node.variant)}>
                {node.lines.map((line, i) => (
                  <tspan key={line} x={cx} y={startY + i * lineHeight}>
                    {line}
                  </tspan>
                ))}
              </text>
              {node.sub && (
                <text
                  x={cx}
                  y={startY + node.lines.length * lineHeight + 2}
                  textAnchor="middle"
                  className="diagram-node-sub"
                >
                  {node.sub}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
