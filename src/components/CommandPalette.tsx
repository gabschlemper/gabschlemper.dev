import { useEffect, useMemo, useRef, useState } from "react";
import { search } from "../lib/search";
import { useKnowledgeBase, useStrings } from "../lib/useKnowledgeBase";
import type { Locale } from "../lib/locale";

interface Props {
  onClose: () => void;
  onNavigate: (to: string) => void;
  locale: Locale;
}

export default function CommandPalette({ onClose, onNavigate, locale }: Props) {
  const kb = useKnowledgeBase();
  const t = useStrings();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => search(query, kb, t, locale), [query, kb, t, locale]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelected((i) => Math.min(i + 1, Math.max(0, results.length - 1)));
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelected((i) => Math.max(i - 1, 0));
      } else if (event.key === "Enter") {
        event.preventDefault();
        const result = results[selected];
        if (result) onNavigate(result.to);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [results, selected, onClose, onNavigate]);

  return (
    <div
      className="palette-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="palette"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={t.palette.dialogLabel}
      >
        <div className="palette-head">
          <input
            ref={inputRef}
            className="palette-input"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelected(0);
            }}
            placeholder={t.palette.placeholder}
            aria-label={t.palette.searchLabel}
          />

          {/* Narrow screens open this as a full-height sheet, which leaves no
              overlay to tap and no Escape key — so the way out has to be on
              screen. Hidden above 700px, where both exist. */}
          <button
            type="button"
            className="palette-close"
            onClick={onClose}
            aria-label={t.palette.closeAria}
          >
            {t.palette.close}
          </button>
        </div>

        <div className="palette-results">
          {results.map((result, i) => (
            <button
              type="button"
              key={`${result.kind}:${result.to}`}
              className="palette-row"
              data-selected={i === selected}
              onMouseEnter={() => setSelected(i)}
              onClick={() => onNavigate(result.to)}
            >
              <span className="palette-kind">{t.palette.kind[result.kind]}</span>
              <span className="palette-title">{result.title}</span>
              <span className="palette-sub">{result.sub}</span>
            </button>
          ))}
          {results.length === 0 && (
            <div className="palette-empty">{t.palette.empty}</div>
          )}
        </div>

        <div className="palette-foot">
          <span>{t.palette.navigate}</span>
          <span>{t.palette.open}</span>
          <span>{t.palette.escClose}</span>
        </div>
      </div>
    </div>
  );
}
