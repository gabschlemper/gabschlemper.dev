import { NavLink, useNavigate } from "react-router-dom";
import { config } from "../config";
import { numberedNavGroups } from "../lib/nav";
import type { Theme } from "../lib/useTheme";

interface Props {
  theme: Theme;
  onToggleTheme: () => void;
  onOpenPalette: () => void;
}

export default function Sidebar({ theme, onToggleTheme, onOpenPalette }: Props) {
  const navigate = useNavigate();
  const groups = numberedNavGroups();

  return (
    <aside className="sidebar">
      <button
        type="button"
        className="sidebar-brand"
        onClick={() => navigate("/")}
        aria-label="Gabriela Schlemper — home"
      >
        <div className="sidebar-brand-title">Gabriela Schlemper</div>
        <div className="sidebar-brand-sub">Engineering Knowledge Base · public docs</div>
      </button>

      <button type="button" className="search-trigger" onClick={onOpenPalette}>
        <span>search…</span>
        <span className="kbd">⌘K</span>
      </button>

      <nav className="nav" aria-label="Documents">
        {groups.map((group) => (
          <div className="nav-group" key={group.label}>
            <div className="nav-group-label">{group.label}</div>
            {group.links.map((link) => (
              <NavLink key={link.to} to={link.to} end className="nav-link">
                <span className="nav-link-num">{link.n}</span>
                <span>{link.label}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-foot">
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          <span>theme</span>
          <strong>{theme === "dark" ? "dark ●" : "light ○"}</strong>
        </button>
        <div className="sidebar-rev">{config.revision}</div>
      </div>
    </aside>
  );
}
