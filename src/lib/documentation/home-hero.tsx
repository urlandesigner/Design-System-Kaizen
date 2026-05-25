import Image from "next/image";
import Link from "next/link";

import { homeQuickLinks, siteConfig } from "@/config/site";
import { StandardPage } from "@/lib/documentation/primitives/standard-page";

export function HomeHero() {
  return (
    <StandardPage className="home-hero">
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
      </div>
    </StandardPage>
  );
}
