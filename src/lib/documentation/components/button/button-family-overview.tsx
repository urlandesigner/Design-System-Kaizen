import Link from "next/link";

import { Button } from "@/components/ui/button";
import { DocPage } from "@/lib/documentation/editorial/doc-page";
import { DocSection } from "@/lib/documentation/editorial/doc-section";
import { ButtonFilledTypesPreview } from "@/lib/documentation/editorial/button-doc-previews";
import {
  CopyIcon,
  ExternalLinkIcon,
  PlusIcon,
} from "@/lib/documentation/configs/button/shared";

const familyMembers = [
  {
    id: "filled",
    title: "Filled",
    href: "/components/button/filled",
    role: "Ação primária",
    description: "Ação primária com maior peso visual.",
    preview: <ButtonFilledTypesPreview />,
  },
  {
    id: "ghost",
    title: "Ghost",
    href: "/components/button/ghost",
    role: "Secundária",
    description: "Ação secundária discreta.",
    preview: (
      <Button variant="ghost" iconLeft={<PlusIcon />} iconRight={<PlusIcon />}>
        Button label
      </Button>
    ),
  },
  {
    id: "link",
    title: "Link",
    href: "/components/button/link",
    role: "Inline",
    description: "Ação inline contextual.",
    preview: (
      <button
        type="button"
        className="inline-flex items-center gap-[var(--space-kz-200)] text-[length:calc(var(--text-kz-16)+var(--space-kz-50))] font-semibold text-[var(--color-theme-text-action-default-dark)] underline"
      >
        Button label
        <span className="inline-flex size-[var(--space-kz-500)] [&_svg]:size-full">
          <ExternalLinkIcon />
        </span>
      </button>
    ),
  },
  {
    id: "copy",
    title: "Copy",
    href: "/components/button/copy",
    role: "Utilitária",
    description: "Ação utilitária de cópia.",
    preview: (
      <button
        type="button"
        className="group inline-flex items-center gap-[var(--space-kz-200)] text-[length:calc(var(--text-kz-16)+var(--space-kz-50))] font-semibold text-[var(--color-theme-text-ghost-enabled-dark)]"
      >
        Button label
        <span className="inline-flex size-[var(--space-kz-500)] opacity-0 transition-opacity group-hover:opacity-100 [&_svg]:size-full">
          <CopyIcon />
        </span>
      </button>
    ),
  },
] as const;

const terminology = [
  {
    term: "Component type",
    value: "Filled, Ghost, Link e Copy.",
  },
  {
    term: "Variant",
    value: "Estilo visual interno do componente.",
  },
  {
    term: "State",
    value: "Estado interativo do botão.",
  },
] as const;

const usageRows = [
  {
    component: "Filled",
    href: "/components/button/filled",
    useWhen: "CTA principal, confirmação, ações destrutivas",
    avoidWhen: "Ações discretas ou links inline",
  },
  {
    component: "Ghost",
    href: "/components/button/ghost",
    useWhen: "Secundária, cancelar, voltar",
    avoidWhen: "Única ação primária do fluxo",
  },
  {
    component: "Link",
    href: "/components/button/link",
    useWhen: "Ver mais, abrir externo em contexto de texto",
    avoidWhen: "Submit ou CTA principal",
  },
  {
    component: "Copy",
    href: "/components/button/copy",
    useWhen: "Copiar ID, código ou valor",
    avoidWhen: "Navegação ou confirmação de fluxo",
  },
] as const;

const overviewToc = [
  { id: "componentes", title: "Componentes" },
  { id: "terminologia", title: "Terminologia" },
  { id: "quando-usar", title: "Quando usar" },
];

const COMPONENT_TYPES_SUMMARY =
  "Filled para ações principais, Ghost para ações secundárias, Link para ações inline e Copy para copiar valores.";

const HERO_DESCRIPTION =
  "Família de ações do Kaizen. Filled, Ghost, Link e Copy possuem comportamentos distintos.";

export function ButtonFamilyOverview() {
  return (
    <DocPage
      breadcrumb={[
        { label: "Components", href: "/components" },
        { label: "Button" },
      ]}
      title="Button"
      description={HERO_DESCRIPTION}
      toc={overviewToc}
    >
      <div className="button-overview">
        <DocSection
          id="componentes"
          title="Component types"
          description={COMPONENT_TYPES_SUMMARY}
          featured
        >
          <div className="button-family-grid">
            {familyMembers.map((member) => (
              <article key={member.id} className="button-family-card">
                <header className="button-family-card-header">
                  <span className="button-family-card-role">{member.role}</span>
                  <h3 className="button-family-card-title">
                    <Link href={member.href}>{member.title}</Link>
                  </h3>
                  <p className="button-family-card-description">{member.description}</p>
                </header>
                <div className="button-family-card-body">
                  <div className="button-family-card-preview">
                    {member.preview}
                  </div>
                  <Link href={member.href} className="button-family-card-link group">
                    Ver documentação
                    <span aria-hidden className="button-family-card-link-arrow">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </DocSection>

        <DocSection id="terminologia" title="Terminologia">
          <div className="button-overview-term-grid" role="list">
            {terminology.map((item) => (
              <div key={item.term} className="button-overview-term-card" role="listitem">
                <p className="button-overview-term-label">{item.term}</p>
                <p className="button-overview-term-value">{item.value}</p>
              </div>
            ))}
          </div>
        </DocSection>

        <DocSection
          id="quando-usar"
          title="Quando usar"
          description="Guia rápido por contexto."
        >
          <div className="button-overview-compare overflow-x-auto">
            <table className="button-overview-compare-table">
              <thead>
                <tr>
                  <th scope="col">Componente</th>
                  <th scope="col">Use quando</th>
                  <th scope="col">Evite quando</th>
                </tr>
              </thead>
              <tbody>
                {usageRows.map((row) => (
                  <tr key={row.component}>
                    <th scope="row">
                      <Link href={row.href} className="button-overview-compare-link">
                        {row.component}
                      </Link>
                    </th>
                    <td>{row.useWhen}</td>
                    <td className="text-muted-foreground">{row.avoidWhen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DocSection>
      </div>
    </DocPage>
  );
}
