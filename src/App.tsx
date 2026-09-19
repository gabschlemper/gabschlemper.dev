import { Suspense, useCallback, useEffect, useState } from "react";
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
import { useRouteMeta } from "./lib/useRouteMeta";
import { useLocale, useStrings } from "./lib/useKnowledgeBase";

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

/**
 * Every real route, in its canonical (English, unprefixed) shape. Mirrored
 * under /pt/* below by the same table — one place to add a route, never two
 * lists to keep in sync.
 */
const ROUTES: Array<{ path: string; element: JSX.Element }> = [
  { path: "/", element: <Home /> },
  { path: "/profile", element: <Profile /> },
  { path: "/journey", element: <Journey /> },
  { path: "/companies", element: <Companies /> },
  { path: "/companies/:id", element: <CompanyDetail /> },
  { path: "/cases", element: <Cases /> },
  { path: "/cases/:id", element: <CaseDetail /> },
  { path: "/capabilities", element: <Capabilities /> },
  { path: "/capabilities/:id", element: <CapabilityDetail /> },
  { path: "/technologies", element: <Technologies /> },
  { path: "/technologies/:slug", element: <TechnologyDetail /> },
  { path: "/principles", element: <Principles /> },
  { path: "/map", element: <EvidenceMapPage /> },
];

export function Shell() {
  const { theme, toggle } = useTheme();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const locale = useLocale();
  const t = useStrings();

  useRouteMeta();

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
        {t.misc.skipToContent}
      </a>

      {/* pt-BR's data chunk loads on demand (see src/data/knowledgeBase.ts) —
          anything under here that calls useKnowledgeBase() only ever
          suspends on a /pt/* route, and only until that chunk resolves
          (typically instant, and always resolved by the time a page has
          rendered enough for the command palette to be reachable). English
          never suspends. */}
      <Suspense fallback={null}>
        <Sidebar
          theme={theme}
          onToggleTheme={toggle}
          onOpenPalette={() => setPaletteOpen(true)}
        />

        <main className="main" id="content">
          <ScrollToTop />
          <Routes>
            {ROUTES.map(({ path, element }) => (
              <Route key={`en:${path}`} path={path} element={element} />
            ))}
            {ROUTES.map(({ path, element }) => (
              <Route
                key={`pt:${path}`}
                path={path === "/" ? "/pt" : `/pt${path}`}
                element={element}
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {paletteOpen && (
          <CommandPalette
            onClose={() => setPaletteOpen(false)}
            onNavigate={go}
            locale={locale}
          />
        )}
      </Suspense>
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
