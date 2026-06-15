export const siteConfig = {
  name: "Kaizen",
  tagline: "Melhoria contínua para produtos Ybera",
  description:
    "Portal oficial do Design System da Ybera — documentação, componentes, tokens e padrões para designers e desenvolvedores.",
  organization: "Ybera",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  repositoryUrl: "https://github.com/urlandesigner/Design-System-Kaizen",
  issueTrackerUrl: "https://github.com/urlandesigner/Design-System-Kaizen/issues/new",
  locale: "pt-BR",
  version: "0.1",
} as const;

export const homeQuickLinks = [
  {
    title: "Foundations",
    description: "Cores, tipografia, espaçamento e tokens visuais.",
    href: "/foundations",
    image: "/images/home/foundations.svg",
    imageDark: "/images/home/foundations-dark.svg",
    imageAlt: "Ilustração de paleta de cores e escala tipográfica",
  },
  {
    title: "Components",
    description: "Biblioteca documentada de interface.",
    href: "/components",
    image: "/images/home/components.svg",
    imageDark: "/images/home/components-dark.svg",
    imageAlt: "Ilustração de botão, campo e controles de interface",
  },
  {
    title: "Patterns",
    description: "Combinações reutilizáveis entre produtos.",
    href: "/patterns",
    image: "/images/home/patterns.svg",
    imageDark: "/images/home/patterns-dark.svg",
    imageAlt: "Ilustração de blocos de layout e composição de tela",
  },
  {
    title: "Accessibility",
    description: "Diretrizes para interfaces inclusivas.",
    href: "/accessibility",
    image: "/images/home/accessibility.svg",
    imageDark: "/images/home/accessibility-dark.svg",
    imageAlt: "Ilustração de contraste e foco em interfaces acessíveis",
  },
] as const;
