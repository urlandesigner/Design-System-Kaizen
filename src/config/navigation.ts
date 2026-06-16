import type { NavItem, NavSection } from "@/types/navigation";

export const sidebarPrimaryLinks: NavItem[] = [
  { title: "Home", href: "/" },
];

export const mainNavigation: NavSection[] = [
  {
    title: "Get Started",
    items: [
      { title: "O que é o Kaizen", href: "/get-started/what-is-kaizen" },
      { title: "Como começar", href: "/get-started/quick-start" },
      { title: "Fluxo Design → Desenvolvimento", href: "/get-started/design-to-dev" },
      { title: "Como contribuir", href: "/get-started/contributing" },
    ],
  },
  {
    title: "Foundations",
    items: [
      { title: "Overview", href: "/foundations" },
      { title: "Colors", href: "/foundations/colors" },
      { title: "Typography", href: "/foundations/typography" },
      { title: "Spacing", href: "/foundations/spacing" },
      { title: "Icons", href: "/foundations/icons" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Overview", href: "/components" },
      { title: "Accordion", href: "/components/accordion" },
      { title: "Alert", href: "/components/alert" },
      { title: "Badge", href: "/components/badge" },
      { title: "Bottom Navigation", href: "/components/bottom-navigation" },
      { title: "Button", href: "/components/button" },
      { title: "Checkbox", href: "/components/checkbox" },
      { title: "Header", href: "/components/header" },
      { title: "Input", href: "/components/input" },
      { title: "Metric Card", href: "/components/metric-card" },
      { title: "Radio", href: "/components/radio" },
      { title: "Sheet", href: "/components/sheet" },
      { title: "Tables", href: "/components/tables" },
    ],
  },
  {
    title: "Patterns",
    items: [
      { title: "Overview", href: "/patterns" },
      { title: "Forms", href: "/patterns/forms" },
      { title: "Filters", href: "/patterns/filters" },
      { title: "Empty States", href: "/patterns/empty-state" },
      { title: "Error States", href: "/patterns/error-states" },
      { title: "Loading States", href: "/patterns/loading-states" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Figma", href: "/resources/figma" },
      { title: "Storybook", href: "/resources/storybook" },
      { title: "NPM", href: "/resources/npm" },
      { title: "Downloads", href: "/resources/downloads" },
    ],
  },
  {
    title: "What's New",
    items: [
      { title: "Changelog", href: "/changelog" },
      { title: "Releases", href: "/releases" },
    ],
  },
  {
    title: "News",
    items: [
      { title: "Artigos", href: "/news/articles" },
      { title: "Cultura", href: "/news/culture" },
      { title: "Evolução do Design System", href: "/news/evolution" },
    ],
  },
  {
    title: "About",
    items: [
      { title: "Missão", href: "/about/mission" },
      { title: "Princípios", href: "/about/principles" },
      { title: "Roadmap", href: "/about/roadmap" },
    ],
  },
];

/** @deprecated Navegação movida para a sidebar. Mantido para referência. */
export const topNavigation = [
  { title: "Home", href: "/" },
  { title: "Get Started", href: "/get-started/what-is-kaizen" },
  { title: "Foundations", href: "/foundations" },
  { title: "Components", href: "/components" },
  { title: "Patterns", href: "/patterns" },
  { title: "Resources", href: "/resources/figma" },
  { title: "What's New", href: "/changelog" },
  { title: "About", href: "/about/mission" },
] as const;
