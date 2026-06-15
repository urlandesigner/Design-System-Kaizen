"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { DocsSection } from "@/lib/documentation/primitives/docs-section";

type ComponentFeedbackProps = {
  componentName: string;
};

type FeedbackVote = "yes" | "no" | null;

const feedbackActions = [
  {
    title: "Sugestão",
    kind: "suggestion",
    description: "Compartilhe oportunidades de clareza, exemplos ou conteúdo que faltou.",
  },
  {
    title: "Reportar problema",
    kind: "bug",
    description: "Aponte erro de documentação, inconsistência visual ou comportamento incorreto.",
  },
  {
    title: "Solicitar melhoria",
    kind: "improvement",
    description: "Peça evolução de uso, acessibilidade, implementação ou cobertura do componente.",
  },
] as const;

export function ComponentFeedback({ componentName }: ComponentFeedbackProps) {
  const pathname = usePathname();
  const [vote, setVote] = useState<FeedbackVote>(null);

  return (
    <DocsSection
      id="feedback"
      title="Feedback"
      description={`Ajude a evoluir a documentação de ${componentName} com contexto real de uso.`}
    >
      <div className="component-feedback-panel">
        <div className="component-feedback-shell">
          <div className="component-feedback-intro">
            <span className="component-feedback-kicker">Feedback contextual</span>
            <h3 className="component-feedback-question">Este componente foi útil?</h3>
            <p className="component-feedback-copy">
              Sua resposta ajuda a priorizar clareza, cobertura e próximos ajustes da
              documentação do Kaizen.
            </p>
          </div>

          <div className="component-feedback-votes" role="group" aria-label="Avaliação rápida">
            <button
              type="button"
              className={`component-feedback-vote${
                vote === "yes" ? " component-feedback-vote--active" : ""
              }`}
              aria-pressed={vote === "yes"}
              onClick={() => setVote("yes")}
            >
              <span aria-hidden>👍</span>
              Sim
            </button>
            <button
              type="button"
              className={`component-feedback-vote${
                vote === "no" ? " component-feedback-vote--active" : ""
              }`}
              aria-pressed={vote === "no"}
              onClick={() => setVote("no")}
            >
              <span aria-hidden>👎</span>
              Não
            </button>
          </div>

          <p className="component-feedback-status" aria-live="polite">
            {vote === "yes"
              ? `Ótimo. Se quiser, registre o que funcionou bem em ${componentName}.`
              : vote === "no"
                ? `Obrigado pelo sinal. Use os atalhos abaixo para indicar o que precisa melhorar em ${componentName}.`
                : `As ações abaixo já levam o contexto de ${componentName} e da rota atual.`}
          </p>
        </div>

        <div className="component-feedback-actions">
          {feedbackActions.map((action) => (
            <a
              key={action.kind}
              href={buildFeedbackUrl(action.kind, componentName, pathname)}
              target="_blank"
              rel="noreferrer"
              className="component-feedback-action"
            >
              <strong>{action.title}</strong>
              <p>{action.description}</p>
              <span>{pathname}</span>
            </a>
          ))}
        </div>
      </div>
    </DocsSection>
  );
}

function buildFeedbackUrl(
  kind: (typeof feedbackActions)[number]["kind"],
  componentName: string,
  pathname: string,
) {
  const titleMap = {
    suggestion: `[Docs] Sugestão sobre ${componentName}`,
    bug: `[Docs] Problema em ${componentName}`,
    improvement: `[Docs] Melhoria para ${componentName}`,
  } as const;

  const labelMap = {
    suggestion: "documentation,feedback",
    bug: "bug,documentation",
    improvement: "enhancement,documentation",
  } as const;

  const promptMap = {
    suggestion: "Qual sugestão melhoraria esta página ou o uso do componente?",
    bug: "Qual problema você encontrou nesta documentação ou no exemplo exibido?",
    improvement: "Que melhoria aumentaria a qualidade ou a adoção deste componente?",
  } as const;

  const body = [
    `Componente: ${componentName}`,
    `Rota: ${pathname}`,
    `Categoria: documentação de componentes`,
    "",
    promptMap[kind],
    "",
    "Contexto adicional:",
  ].join("\n");

  const params = new URLSearchParams({
    title: titleMap[kind],
    labels: labelMap[kind],
    body,
  });

  return `${siteConfig.issueTrackerUrl}?${params.toString()}`;
}
