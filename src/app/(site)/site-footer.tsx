import Link from "next/link";

import { siteConfig } from "@/config/site";

const footerNavigation = [
  { title: "Get Started", href: "/get-started" },
  { title: "Foundations", href: "/foundations" },
  { title: "Components", href: "/components" },
  { title: "Patterns", href: "/patterns" },
  { title: "Templates", href: "/templates" },
  { title: "Content", href: "/content" },
  { title: "Accessibility", href: "/accessibility" },
  { title: "Changelog", href: "/changelog" },
] as const;

const footerResources = [
  { title: "Figma", href: "/resources/figma" },
  { title: "Storybook", href: "/resources/storybook" },
  { title: "NPM", href: "/resources/npm" },
] as const;

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" aria-labelledby="site-footer-heading">
      <div className="site-footer-main">
        <div className="site-footer-brand">
          <p className="site-footer-kicker">Governança do sistema</p>
          <h2 id="site-footer-heading">Kaizen Design System</h2>
          <p>
            Plataforma institucional para documentar decisões, orientar adoção e
            tornar a evolução do design system Ybera mais clara, rastreável e confiável.
          </p>
        </div>

        <div className="site-footer-nav-grid">
          <nav aria-label="Navegação institucional do Kaizen" className="site-footer-nav-group">
            <h3>Explorar</h3>
            <ul>
              {footerNavigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Recursos do Kaizen" className="site-footer-nav-group">
            <h3>Recursos</h3>
            <ul>
              {footerResources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer-nav-group site-footer-nav-group--meta">
            <h3>Sistema</h3>
            <ul>
              <li>
                <span>Versão atual</span>
                <strong>v{siteConfig.version}</strong>
              </li>
              <li>
                <span>Origem</span>
                <a href={siteConfig.repositoryUrl} target="_blank" rel="noreferrer">
                  Repositório oficial
                </a>
              </li>
              <li>
                <span>Feedback</span>
                <a href={siteConfig.issueTrackerUrl} target="_blank" rel="noreferrer">
                  Sugerir ou reportar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>© {currentYear} Ybera. Kaizen Design System.</p>
        <p>{siteConfig.tagline}</p>
      </div>
    </footer>
  );
}
