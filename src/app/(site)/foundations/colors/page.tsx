import type { Metadata } from "next";

import {
  ColorDoDont,
  ColorNamingCallout,
  ContrastMatrix,
  SemanticUsageTable,
} from "@/lib/documentation/foundations/color-guidance";
import {
  TokenFoundationLayout,
  TokenGroupedTables,
  TokenSection,
} from "@/lib/documentation/foundations/token-docs";
import { getTokensByCategory } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Colors",
  description: "Tokens de cor primitivos e semânticos exportados do Figma.",
};

const SEMANTIC_USAGE = [
  {
    token: "color-theme/background/primary",
    uso: "Fundo base da aplicação, atrás de todas as superfícies.",
  },
  {
    token: "color-theme/surface/primary",
    uso: "Superfície de cards, painéis e campos sobre o fundo.",
  },
  {
    token: "color-theme/surface/secondary",
    uso: "Segunda camada de superfície — agrupamentos e seções aninhadas.",
  },
  {
    token: "color-theme/surface/tertiary",
    uso: "Terceira camada — realces sutis e estados de hover de áreas.",
  },
  {
    token: "color-theme/surface/brand",
    uso: "Blocos e destaques de marca. Combine com texto *-light.",
  },
  {
    token: "color-theme/text/primary-dark",
    uso: "Texto principal sobre superfícies claras (títulos e corpo).",
  },
  {
    token: "color-theme/text/secondary-dark",
    uso: "Texto de apoio, descrições e legendas.",
  },
  {
    token: "color-theme/text/tertiary-dark",
    uso: "Texto terciário, placeholders e dados de menor ênfase.",
  },
  {
    token: "color-theme/text/primary-light",
    uso: "Texto sobre superfícies escuras ou de marca.",
  },
  {
    token: "color-theme/border/primary",
    uso: "Divisórias e contornos padrão entre superfícies.",
  },
  {
    token: "color-theme/border/input/error",
    uso: "Contorno de campos de formulário em estado de erro.",
  },
];

const LIGHT_SURFACES = [
  { token: "color-theme/surface/primary", label: "Primary" },
  { token: "color-theme/surface/secondary", label: "Secondary" },
  { token: "color-theme/surface/tertiary", label: "Tertiary" },
  { token: "color-theme/background/primary", label: "Background" },
];

const DARK_TEXTS = [
  { token: "color-theme/text/primary-dark", label: "Texto primário" },
  { token: "color-theme/text/secondary-dark", label: "Texto secundário" },
  { token: "color-theme/text/tertiary-dark", label: "Texto terciário" },
  { token: "color-theme/text/input/placeholder", label: "Placeholder" },
];

const DARK_SURFACES = [
  { token: "color-theme/surface/brand", label: "Brand" },
  { token: "color-theme/surface/action/enabled-dark", label: "Action" },
  { token: "color-theme/surface/neutral", label: "Neutral" },
];

const LIGHT_TEXTS = [
  { token: "color-theme/text/primary-light", label: "Texto primário" },
  { token: "color-theme/text/secondary-light", label: "Texto secundário" },
  { token: "color-theme/text/tertiary-light", label: "Texto terciário" },
];

export default function ColorsFoundationPage() {
  const primitives = getTokensByCategory("color", {
    collection: "primitive",
    namePrefix: "color-kz/",
  });
  const semantic = getTokensByCategory("color", {
    collection: "semantic",
    namePrefix: "color-theme/",
  });

  return (
    <TokenFoundationLayout
      title="Colors"
      description="Paleta primitiva e tokens semânticos, agrupados por família e ordenados por escala."
      count={primitives.length + semantic.length}
    >
      <TokenSection title="Quando usar (semântica)">
        <p className="doc-body max-w-[44rem] text-muted-foreground">
          Na interface, consuma sempre os tokens semânticos{" "}
          <code>color-theme/*</code> — eles carregam a intenção (superfície,
          texto, borda) e se adaptam a tema e contexto. As primitivas{" "}
          <code>color-kz/*</code> são a fonte que alimenta as semânticas.
        </p>
        <div className="mt-4">
          <ColorNamingCallout />
        </div>
        <SemanticUsageTable rows={SEMANTIC_USAGE} />
      </TokenSection>

      <TokenSection title="Acessibilidade · Matriz de contraste (WCAG 2.1)">
        <p className="doc-body max-w-[44rem] text-muted-foreground">
          Contrastes calculados sobre o tema padrão. Texto normal exige{" "}
          <strong>AA ≥ 4.5:1</strong>; texto grande (≥ 24px ou ≥ 19px bold),{" "}
          <strong>AA Large ≥ 3:1</strong>; <strong>AAA ≥ 7:1</strong> é a meta
          recomendada para corpo de texto.
        </p>
        <h3 className="mt-6 text-[0.9375rem] font-medium tracking-[-0.01em] text-foreground">
          Texto sobre superfícies claras
        </h3>
        <ContrastMatrix
          caption="Contraste de texto escuro sobre superfícies claras"
          texts={DARK_TEXTS}
          surfaces={LIGHT_SURFACES}
        />
        <h3 className="mt-8 text-[0.9375rem] font-medium tracking-[-0.01em] text-foreground">
          Texto sobre superfícies escuras
        </h3>
        <ContrastMatrix
          caption="Contraste de texto claro sobre superfícies escuras e de marca"
          texts={LIGHT_TEXTS}
          surfaces={DARK_SURFACES}
        />
      </TokenSection>

      <TokenSection title="Diretrizes de uso">
        <ColorDoDont />
      </TokenSection>

      <TokenSection title="Primitives · color-kz">
        <TokenGroupedTables tokens={primitives} showPreview="color" />
      </TokenSection>
      <TokenSection title="Semantic · color-theme">
        <TokenGroupedTables tokens={semantic} showPreview="color" />
      </TokenSection>
    </TokenFoundationLayout>
  );
}
