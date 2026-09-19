import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { config } from "../config";
import { navGroups } from "../lib/nav";
import { otherLocale, withLocale } from "../lib/locale";
import { useLocale, useStrings } from "../lib/useKnowledgeBase";
import type { Theme } from "../lib/useTheme";

interface Props {
  theme: Theme;
  onToggleTheme: () => void;
  onOpenPalette: () => void;
}

export default function Sidebar({ theme, onToggleTheme, onOpenPalette }: Props) {
  const { pathname } = useLocation();
  const locale = useLocale();
  const t = useStrings();
  const groups = navGroups(t, locale);
  const other = otherLocale(locale);

  /**
   * Narrow screens collapse the whole column into a 56px bar, so the nav lives
   * behind this toggle. Desktop ignores it entirely — the panel is always laid
   * out there, and no rule reads [data-open] above 900px.
   */
  const [open, setOpen] = useState(false);

  // Arriving anywhere new dismisses the panel. Tapping the link for the page
  // you are already on does not change pathname, hence the explicit close on
  // the nav below as well.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Tap-anywhere-to-dismiss. Sits below the sidebar's stacking context, so
          the open panel still paints over it. */}
      {open && (
        <div
          className="sidebar-scrim"
          onClick={() => setOpen(false)}
          role="presentation"
        />
      )}

      <aside className="sidebar" data-open={open}>
        <div className="sidebar-bar">
          <Link
            className="sidebar-brand"
            to={withLocale("/", locale)}
            aria-label="Gabriela Schlemper — home"
          >
            <div className="sidebar-brand-title">Gabriela Schlemper</div>
            <div className="sidebar-brand-sub">{t.sidebar.brandSub}</div>
          </Link>

          {/* Mobile only. The ⌘K hint below is unreachable on a phone, so search
              needs a real, thumb-sized control in the bar. */}
          <div className="sidebar-bar-actions">
            <button type="button" className="bar-btn" onClick={onOpenPalette}>
              {t.sidebar.search}
            </button>
            <button
              type="button"
              className="bar-btn"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="site-nav"
            >
              {open ? t.sidebar.close : t.sidebar.menu}
            </button>
          </div>
        </div>

        <div className="sidebar-panel" id="site-nav">
          <button type="button" className="search-trigger" onClick={onOpenPalette}>
            <span>{t.sidebar.searchTrigger}</span>
            <span className="kbd">⌘K</span>
          </button>

          <nav className="nav" aria-label={t.sidebar.documentsLabel} onClick={() => setOpen(false)}>
            {groups.map((group) => (
              <div className="nav-group" key={group.label}>
                <div className="nav-group-label">{group.label}</div>
                {group.links.map((link) => (
                  <NavLink key={link.to} to={link.to} end className="nav-link">
                    {link.label}
                  </NavLink>
                ))}
              </div>
            ))}
          </nav>

          <div className="sidebar-foot">
            <Link className="locale-toggle" to={withLocale(pathname, other)} lang={other}>
              {other === "pt" ? "PT-BR" : "EN"}
            </Link>
            <button
              type="button"
              className="theme-toggle"
              onClick={onToggleTheme}
              aria-label={t.sidebar.switchToTheme(theme === "dark" ? "light" : "dark")}
            >
              <span>{t.sidebar.theme}</span>
              <strong>{theme === "dark" ? t.sidebar.themeDark : t.sidebar.themeLight}</strong>
            </button>
            <div className="sidebar-rev">{config.revision}</div>
          </div>
        </div>
      </aside>
    </>
  );
}
