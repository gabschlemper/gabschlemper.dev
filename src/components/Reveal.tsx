import type { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "../lib/useReveal";

interface RevealProps {
  /**
   * Either normal children, or a function that receives the visibility flag —
   * for children that animate something JS-driven (a counter) rather than
   * something CSS can express on its own.
   */
  children: ReactNode | ((visible: boolean) => ReactNode);
  /** "children" staggers the direct children; "self" animates this element. */
  mode?: "children" | "self";
  /** Rendered tag. Replaces the container it wraps, so no extra DOM node. */
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

/**
 * Wraps an existing layout container — it renders *as* that container rather
 * than nesting inside one, so grid and flex parents are untouched. The
 * entrance animation itself lives in CSS, keyed off `data-reveal`.
 */
export default function Reveal({
  children,
  mode = "children",
  as: Tag = "div",
  className,
  style,
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={className}
      style={style}
      data-reveal={visible ? "in" : "out"}
      data-reveal-mode={mode}
    >
      {typeof children === "function" ? children(visible) : children}
    </Tag>
  );
}
