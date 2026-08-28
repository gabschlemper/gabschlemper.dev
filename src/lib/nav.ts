export interface NavLink {
  label: string;
  to: string;
}

export interface NavGroup {
  label: string;
  links: NavLink[];
}

/**
 * The design export shipped Journey, Principles and Evidence Map as finished
 * screens but never linked them from the sidebar, leaving them reachable only
 * by typing a URL. They are listed here so every document has a route in.
 */
export const navGroups: NavGroup[] = [
  {
    label: "overview",
    links: [
      { label: "Home", to: "/" },
      { label: "Profile", to: "/profile" },
      { label: "Career Journey", to: "/journey" },
    ],
  },
  {
    label: "evidence",
    links: [
      { label: "Companies", to: "/companies" },
      { label: "Case Studies", to: "/cases" },
      { label: "Capabilities", to: "/capabilities" },
      { label: "Technologies", to: "/technologies" },
      { label: "Principles", to: "/principles" },
      { label: "Evidence Map", to: "/map" },
    ],
  },
];
