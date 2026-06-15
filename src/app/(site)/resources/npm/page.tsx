import type { Metadata } from "next";
import Link from "next/link";

import { CopyInlineButton } from "@/components/copy-inline-button";
import { siteConfig } from "@/config/site";
import { StandardPage } from "@/lib/documentation/primitives/standard-page";

const registryVerifiedAt = "11 jun 2026";
const installCommand = "npm install @ybera/kaizen";
const repositoryUrl = "https://github.com/urlandesigner/Design-System-Kaizen";
const issuesUrl = `${repositoryUrl}/issues`;
const releasesUrl = `${repositoryUrl}/releases`;

const technicalDocs = [
  {
    title: "Como começar",
    href: "/get-started/quick-start",
    description: "Primeiros passos para consumir o sistema no fluxo de produto.",
  },
  {
    title: "Design → Desenvolvimento",
    href: "/get-started/design-to-dev",
    description: "Guia de handoff entre Figma, tokens e implementação.",
  },
  {
    title: "Foundations",
    href: "/foundations",
    description: "Base de tokens, escalas e decisões visuais do Kaizen.",
  },
  {
    title: "Storybook",
    href: "/resources/storybook",
    description: "Superfície ideal para testes interativos e futura automação de docs.",
  },
] as const;

const repositoryLinks = [
  {
    title: "Repositório principal",
    href: repositoryUrl,
    description: "Código-fonte do portal, componentes e documentação do Kaizen.",
  },
  {
    title: "Issues",
    href: issuesUrl,
    description: "Acompanhamento de bugs, sugestões e melhorias do sistema.",
  },
  {
    title: "Releases",
    href: releasesUrl,
    description: "Base para versionamento, notas de entrega e governança de publicação.",
  },
] as const;

const automationModules = [
  {
    title: "Registry status",
    description: "Espaço reservado para dist-tags, latest, next e integridade de pacote.",
    status: "Preparado para integrar",
  },
  {
    title: "CI de publicação",
    description: "Slot para pipeline, origem da release e validações antes do publish.",
    status: "Estrutura pronta",
  },
  {
    title: "Observabilidade",
    description: "Área para downloads, adoção por produto e telemetria do pacote.",
    status: "Em breve",
  },
] as const;

export const metadata: Metadata = {
  title: "NPM",
  description: "Integração de desenvolvimento e distribuição do Kaizen via NPM.",
};

export default function NpmResourcePage() {
  return (
    <StandardPage className="resource-page">
      <header className="doc-page-header resource-page-header">
        <p className="doc-eyebrow">Resources · Development</p>
        <h1 className="doc-title mt-4">Integração para desenvolvimento</h1>
        <p className="doc-description">
          Área institucional para distribuição do Kaizen, consumo técnico e futura
          automação de publicação. Hoje o pacote oficial ainda não está publicado
          no NPM, mas a superfície já está pronta para esse fluxo.
        </p>
      </header>

      <section className="resource-hero-panel" aria-labelledby="npm-status-heading">
        <div className="resource-hero-copy">
          <span className="resource-status-badge resource-status-badge--pending">
            Publicação pendente
          </span>
          <h2 id="npm-status-heading" className="resource-panel-title">
            O Kaizen ainda não possui pacote oficial público no registro do NPM.
          </h2>
          <p className="resource-panel-copy">
            A consulta ao registro foi verificada em {registryVerifiedAt}. Enquanto a
            publicação não acontece, esta página centraliza o comando esperado, os
            repositórios e a documentação técnica necessária para preparar a adoção.
          </p>
        </div>

        <div className="resource-stat-grid">
          <div className="resource-stat-card">
            <span>Instalação via NPM</span>
            <strong>Em preparação</strong>
            <small>O nome do pacote oficial ainda não está publicado.</small>
          </div>
          <div className="resource-stat-card">
            <span>Versão atual publicada</span>
            <strong>Indisponível</strong>
            <small>Sem release oficial no registry até {registryVerifiedAt}.</small>
          </div>
          <div className="resource-stat-card">
            <span>Última atualização</span>
            <strong>Indisponível</strong>
            <small>Será preenchido automaticamente após o primeiro publish.</small>
          </div>
          <div className="resource-stat-card">
            <span>Versão interna do sistema</span>
            <strong>v{siteConfig.version}</strong>
            <small>Referência atual do portal e da documentação Kaizen.</small>
          </div>
        </div>
      </section>

      <section className="resource-section" aria-labelledby="npm-install-heading">
        <div className="resource-section-heading">
          <p className="home-section-label">Instalação</p>
          <h2 id="npm-install-heading" className="resource-section-title">
            Comando preparado para o fluxo oficial de consumo.
          </h2>
        </div>

        <div className="resource-command-card">
          <div>
            <span className="resource-command-label">Comando de instalação</span>
            <code>{installCommand}</code>
            <p>
              Este comando representa o ponto de entrada previsto para a distribuição
              do Kaizen assim que o pacote oficial for publicado.
            </p>
          </div>
          <CopyInlineButton value={installCommand} />
        </div>
      </section>

      <section className="resource-section" aria-labelledby="npm-repositories-heading">
        <div className="resource-section-heading">
          <p className="home-section-label">Repositórios</p>
          <h2 id="npm-repositories-heading" className="resource-section-title">
            Links para código, issues e governança de release.
          </h2>
        </div>

        <div className="resource-link-grid">
          {repositoryLinks.map((link) => (
            <article key={link.href} className="resource-link-card">
              <div>
                <strong>{link.title}</strong>
                <p>{link.description}</p>
              </div>
              <div className="resource-link-actions">
                <span>{link.href}</span>
                <div className="resource-link-actions-row">
                  <a href={link.href} target="_blank" rel="noreferrer">
                    Abrir
                  </a>
                  <CopyInlineButton value={link.href} variant="ghost" label="Link" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="resource-section" aria-labelledby="npm-docs-heading">
        <div className="resource-section-heading">
          <p className="home-section-label">Documentação técnica</p>
          <h2 id="npm-docs-heading" className="resource-section-title">
            Superfícies que apoiam integração, handoff e implementação.
          </h2>
        </div>

        <div className="resource-link-grid">
          {technicalDocs.map((link) => (
            <article key={link.href} className="resource-link-card">
              <div>
                <strong>{link.title}</strong>
                <p>{link.description}</p>
              </div>
              <div className="resource-link-actions">
                <span>{link.href}</span>
                <div className="resource-link-actions-row">
                  <Link href={link.href}>Abrir</Link>
                  <CopyInlineButton value={link.href} variant="ghost" label="Link" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="resource-section" aria-labelledby="npm-automation-heading">
        <div className="resource-section-heading">
          <p className="home-section-label">Automation-ready</p>
          <h2 id="npm-automation-heading" className="resource-section-title">
            Estrutura visual preparada para integrações automatizadas.
          </h2>
        </div>

        <div className="resource-automation-grid">
          {automationModules.map((module) => (
            <article key={module.title} className="resource-automation-card">
              <div className="resource-automation-topline">
                <strong>{module.title}</strong>
                <span>{module.status}</span>
              </div>
              <p>{module.description}</p>
            </article>
          ))}
        </div>
      </section>
    </StandardPage>
  );
}
