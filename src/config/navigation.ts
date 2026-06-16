import type { NavItem, NavSection } from "@/types/navigation";

export const sidebarPrimaryLinks: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Changelog", href: "/changelog" },
];

export const mainNavigation: NavSection[] = [
  {
    title: "Get Started",
    items: [
      { title: "Visão geral", href: "/get-started" },
      { title: "Instalação", href: "/get-started/installation" },
      { title: "Design → Dev", href: "/get-started/design-to-dev" },
      { title: "Contribuição", href: "/get-started/contributing" },
    ],
  },
  {
    title: "Foundations",
    items: [
      { title: "Visão geral", href: "/foundations" },
      { title: "Colors", href: "/foundations/colors" },
      { title: "Typography", href: "/foundations/typography" },
      { title: "Spacing", href: "/foundations/spacing" },
      { title: "Border", href: "/foundations/border" },
      { title: "Radius", href: "/foundations/radius" },
      { title: "Elevation", href: "/foundations/elevation" },
      { title: "Icons", href: "/foundations/icons" },
      { title: "Grid", href: "/foundations/grid" },
      { title: "Motion", href: "/foundations/motion" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Accordion", href: "/components/accordion" },
      { title: "Badge", href: "/components/badge" },
      { title: "Button", href: "/components/button" },
      { title: "Checkbox", href: "/components/checkbox" },
      { title: "Input", href: "/components/input" },
      { title: "Radio", href: "/components/radio" },
    ],
  },
  {
    title: "Content",
    items: [
      { title: "Visão geral", href: "/content" },
      { title: "Voice & Tone", href: "/content/voice-tone" },
      { title: "Mensagens de erro", href: "/content/error-messages" },
      { title: "Terminologia", href: "/content/terminology" },
    ],
  },
  {
    title: "Patterns",
    items: [
      { title: "Visão geral", href: "/patterns" },
      { title: "Checkout", href: "/patterns/checkout" },
      { title: "Dashboard", href: "/patterns/dashboard" },
      { title: "Empty State", href: "/patterns/empty-state" },
      { title: "Filters", href: "/patterns/filters" },
      { title: "Success Flow", href: "/patterns/success-flow" },
      { title: "Success State", href: "/patterns/success-state" },
      { title: "Notifications", href: "/patterns/notifications" },
    ],
  },
  {
    title: "Templates",
    items: [
      { title: "Visão geral", href: "/templates" },
      { title: "App Screen", href: "/templates/app-screen" },
      { title: "Hero Dashboard", href: "/templates/hero-dashboard" },
      { title: "Checkout Screen", href: "/templates/checkout-screen" },
      { title: "Success Screen", href: "/templates/success-screen" },
      { title: "Authentication", href: "/templates/authentication" },
    ],
  },
  {
    title: "Accessibility",
    items: [
      { title: "Visão geral", href: "/accessibility" },
      { title: "Contraste", href: "/accessibility/contrast" },
      { title: "Keyboard navigation", href: "/accessibility/keyboard-navigation" },
      { title: "Focus states", href: "/accessibility/focus-states" },
      { title: "Screen readers", href: "/accessibility/screen-readers" },
      { title: "Touch targets", href: "/accessibility/touch-targets" },
      { title: "ARIA", href: "/accessibility/aria" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Visão geral", href: "/resources" },
      { title: "Figma", href: "/resources/figma" },
      { title: "Storybook", href: "/resources/storybook" },
      { title: "NPM", href: "/resources/npm" },
    ],
  },
  {
    title: "Governança",
    items: [
      { title: "Visão geral", href: "/governance" },
      { title: "Roadmap", href: "/governance/roadmap" },
    ],
  },
];

/** @deprecated Navegação movida para a sidebar. Mantido para referência. */
export const topNavigation = [
  { title: "Home", href: "/" },
  { title: "Foundations", href: "/foundations" },
  { title: "Components", href: "/components" },
  { title: "Patterns", href: "/patterns" },
  { title: "Templates", href: "/templates" },
  { title: "Accessibility", href: "/accessibility" },
  { title: "Changelog", href: "/changelog" },
] as const;
