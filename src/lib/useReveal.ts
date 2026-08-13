import { useEffect, useRef, useState } from "react";

/**
 * Reports when an element has scrolled into view, so CSS can play a one-shot
 * entrance animation on it.
 *
 * Two deliberate choices:
 *
 * - The observer disconnects on the first hit. Reveals never replay, so
 *   scrolling back up a page does not re-animate content the reader has
 *   already seen.
 * - `visible` starts false, which means the returned attribute renders as
 *   "out" during prerender. The pre-reveal *hidden* state in CSS is gated on
 *   `html[data-js="1"]` (set by an inline script in index.html), so the static
 *   HTML that crawlers and no-JS readers get stays fully visible.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      // No observer (old browser, jsdom): show immediately rather than never.
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        setVisible(true);
        observer.disconnect();
      },
      // Fires a little before the element is fully on screen, so the animation
      // is already running by the time it is comfortably in view.
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}
