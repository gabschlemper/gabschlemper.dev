import { useEffect, useMemo, useState } from "react";

const DURATION_MS = 750;

/** Splits "4+" into 4 and "+", or "~200k" into 200 and "k" (prefix "~"). */
function parse(value: string): { prefix: string; target: number; suffix: string } | null {
  const match = /^(\D*)(\d+)(.*)$/.exec(value);
  if (!match) return null;
  return { prefix: match[1], target: Number(match[2]), suffix: match[3] };
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true
  );
}

/**
 * Counts a numeric stat up to its final value once its group scrolls into
 * view. Renders the finished value when not animating — during prerender, on
 * reduced-motion, and for anything that is not "digits with decoration" — so
 * the number in the static HTML is always the real one.
 */
export default function CountUp({ value, run }: { value: string; run: boolean }) {
  const parsed = useMemo(() => parse(value), [value]);
  const [shown, setShown] = useState<number | null>(null);

  useEffect(() => {
    if (!run || !parsed || prefersReducedMotion()) return;

    const { target } = parsed;
    let frame = 0;
    let start: number | null = null;

    const tick = (now: number) => {
      start ??= now;
      const t = Math.min(1, (now - start) / DURATION_MS);
      // easeOutCubic: fast arrival, soft landing — reads as settling, not sliding.
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    setShown(0);
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, parsed]);

  if (!parsed || shown === null) return <>{value}</>;

  return (
    <>
      {parsed.prefix}
      {shown}
      {parsed.suffix}
    </>
  );
}
