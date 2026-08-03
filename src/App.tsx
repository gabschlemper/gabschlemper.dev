import { useCallback, useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import CommandPalette from "./components/CommandPalette";
import Sidebar from "./components/Sidebar";
import { useTheme } from "./lib/useTheme";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Journey from "./pages/Journey";
import Companies from "./pages/Companies";
import CompanyDetail from "./pages/CompanyDetail";
import Cases from "./pages/Cases";
import CaseDetail from "./pages/CaseDetail";
import Capabilities from "./pages/Capabilities";
import CapabilityDetail from "./pages/CapabilityDetail";
import Technologies from "./pages/Technologies";
import TechnologyDetail from "./pages/TechnologyDetail";
import Principles from "./pages/Principles";
import EvidenceMapPage from "./pages/EvidenceMap";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Shell() {
  const { theme, toggle } = useTheme();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // A navigation always dismisses the palette.
  useEffect(() => {
    setPaletteOpen(false);
  }, [pathname]);

  const go = useCallback(
    (to: string) => {
      setPaletteOpen(false);
      navigate(to);
    },
    [navigate],
  );

  return (
    <div className="app">
      <a className="skip-link" href="#content">
        skip to content
      </a>

      <Sidebar
        theme={theme}
        onToggleTheme={toggle}
        onOpenPalette={() => setPaletteOpen(true)}
      />

      <main className="main" id="content">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:id" element={<CompanyDetail />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/:id" element={<CaseDetail />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/capabilities/:id" element={<CapabilityDetail />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/technologies/:slug" element={<TechnologyDetail />} />
          <Route path="/principles" element={<Principles />} />
          <Route path="/map" element={<EvidenceMapPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {paletteOpen && (
        <CommandPalette onClose={() => setPaletteOpen(false)} onNavigate={go} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
}
