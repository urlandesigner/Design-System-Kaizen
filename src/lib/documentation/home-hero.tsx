import Image from "next/image";
import Link from "next/link";

import { homeQuickLinks, siteConfig } from "@/config/site";

const resourceLinks = [
  { title: "Figma", href: "/resources/figma" },
  { title: "Storybook", href: "/resources/storybook" },
  { title: "NPM", href: "/resources/npm" },
  { title: "Downloads", href: "/resources/downloads" },
];

const latestUpdates = [
  {
    release: "v1.1.0",
    title: "Documentação editorial de componentes",
    description:
      "Novas páginas de referência com exemplos, critérios de uso, variações e padrões de acessibilidade.",
  },
  {
    release: "v1.0.0",
    title: "Base pública do Kaizen",
    description:
      "Primeira fundação do portal com tokens, navegação, componentes essenciais e rotas de evolução.",
  },
];

export function HomeHero() {
  return (
    <article className="home-page home-hero">
      <div className="home-hero-main">
        <header className="pb-[var(--kz-rhythm-xl)]">
          <p className="hero-eyebrow">{siteConfig.organization} Design System</p>
          <h1 className="hero-title">{siteConfig.name}</h1>
          <p className="hero-lead">{siteConfig.description}</p>
          <p className="mt-5 max-w-[28rem] font-mono text-[0.75rem] leading-relaxed tracking-[-0.01em] text-muted-foreground">
            {siteConfig.tagline}
          </p>
        </header>

        <section aria-labelledby="home-explore-heading">
          <h2 id="home-explore-heading" className="home-section-label">
            Explorar
          </h2>
          <ul className="home-explore-grid">
            {homeQuickLinks.map((link) => (
              <li key={link.href} className="home-explore-card-wrap">
                <Link href={link.href} className="group home-explore-card">
                  <span className="home-explore-card-plate" aria-hidden />
                  <span className="home-explore-card-surface">
                    <span className="home-explore-card-media">
                      <Image
                        src={link.image}
                        alt={link.imageAlt}
                        width={320}
                        height={180}
                        className="home-explore-card-image home-explore-card-image--light"
                      />
                      <Image
                        src={link.imageDark}
                        alt=""
                        width={320}
                        height={180}
                        aria-hidden
                        className="home-explore-card-image home-explore-card-image--dark"
                      />
                    </span>
                    <span className="home-explore-card-body">
                      <span className="home-explore-card-heading">
                        <span className="home-card-title">{link.title}</span>
                        <span aria-hidden className="home-explore-card-arrow">
                          →
                        </span>
                      </span>
                      <span className="home-card-description">{link.description}</span>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="home-manifesto" aria-label="Princípio do Kaizen">
          <p className="home-manifesto-mark" aria-hidden>
            改善
          </p>
          <blockquote className="home-manifesto-quote">
            Kaizen é melhoria contínua. Cada decisão documentada hoje reduz a dúvida de
            amanhã — e transforma escolhas isoladas em um sistema que evolui junto com o
            produto.
          </blockquote>
          <p className="home-manifesto-attribution">
            Princípio que orienta o design system Ybera
          </p>
        </section>

        <section className="home-section" aria-labelledby="home-resources-heading">
          <div className="home-section-heading">
            <p className="home-section-label">Resources</p>
            <h2 id="home-resources-heading" className="home-section-title">
              Ferramentas e materiais.
            </h2>
          </div>
          <ul className="home-card-grid home-card-grid--four">
            {resourceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="home-info-card home-info-card--link">
                  <h3>{item.title}</h3>
                  <span aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="home-section home-section--updates" aria-labelledby="home-updates-heading">
          <div className="home-section-heading">
            <p className="home-section-label">Últimas atualizações</p>
            <h2 id="home-updates-heading" className="home-section-title">
              O que mudou recentemente.
            </h2>
          </div>
          <div className="home-update-board">
            {latestUpdates.map((item) => (
              <article key={item.release} className="home-update-item">
                <span>{item.release}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
            <Link href="/changelog" className="home-update-link">
              Ver changelog completo <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

      </div>
    </article>
  );
}
