import type { Metadata } from "next";

import { StandardPage } from "@/lib/documentation/primitives/standard-page";
import { Callout } from "@/lib/documentation/editorial/callout";
import { BulletList } from "@/lib/documentation/editorial/bullet-list";
import { AccessibilityChecklist } from "@/lib/documentation/primitives/accessibility-checklist";

export const metadata: Metadata = {
  title: "Acessibilidade",
  description:
    "O compromisso de acessibilidade do Kaizen, a meta de conformidade WCAG 2.1 AA e os princípios POUR aplicados aos produtos Ybera.",
};

const subPages: { href: string; title: string; description: string }[] = [
  {
    href: "/accessibility/contrast",
    title: "Contraste de cor",
    description:
      "Razões mínimas de contraste para texto, ícones e componentes de interface.",
  },
  {
    href: "/accessibility/keyboard-navigation",
    title: "Navegação por teclado",
    description:
      "Operabilidade completa via teclado, ordem de tabulação e teclas esperadas.",
  },
  {
    href: "/accessibility/focus-states",
    title: "Estados de foco",
    description:
      "Foco sempre visível, uso de :focus-visible e anéis de foco com contraste suficiente.",
  },
  {
    href: "/accessibility/screen-readers",
    title: "Leitores de tela",
    description:
      "HTML semântico, landmarks, rótulos, textos alternativos e regiões dinâmicas.",
  },
  {
    href: "/accessibility/touch-targets",
    title: "Alvos de toque",
    description:
      "Tamanho mínimo de alvos interativos e espaçamento entre eles.",
  },
  {
    href: "/accessibility/aria",
    title: "ARIA",
    description:
      "Quando (e quando não) usar ARIA, roles, states e properties sem quebrar a semântica nativa.",
  },
];

export default function Page() {
  return (
    <StandardPage>
      <header className="doc-page-header pb-12">
        <p className="doc-eyebrow">Accessibility</p>
        <h1 className="doc-title mt-4">Visão geral</h1>
        <p className="doc-description">
          Acessibilidade não é uma camada opcional do Kaizen — é um requisito de
          qualidade. Todo componente, padrão e fluxo entregue com o Design
          System precisa ser utilizável por pessoas com deficiências visuais,
          motoras, auditivas e cognitivas.
        </p>
      </header>

      <p className="doc-body">
        O Kaizen adota a <strong>WCAG 2.1 nível AA</strong> como meta mínima de
        conformidade para todos os produtos Ybera (Escritório, Club e Group). O
        nível AA equilibra impacto real para o usuário e viabilidade de
        implementação, e é a referência usada na maioria das legislações de
        acessibilidade digital. Critérios de nível AAA são tratados como
        recomendação, não obrigação.
      </p>

      <Callout variant="info" title="Por que AA">
        O nível A sozinho deixa lacunas críticas (por exemplo, contraste de
        texto). O nível AAA, por outro lado, raramente é alcançável em produtos
        inteiros. AA é o ponto onde a interface é genuinamente utilizável pela
        maior parte das pessoas sem comprometer o roadmap.
      </Callout>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Os princípios POUR
      </h2>
      <p className="doc-body">
        A WCAG se organiza em quatro princípios — Perceptível, Operável,
        Compreensível e Robusto (POUR). Eles funcionam como uma lente para
        avaliar qualquer interface antes de medir critérios isolados.
      </p>

      <h3 className="mt-8 mb-2 text-[1rem] font-medium text-foreground">
        Perceptível
      </h3>
      <p className="doc-body text-muted-foreground">
        A informação precisa estar disponível por mais de um sentido. Em
        produtos Ybera isso significa: contraste adequado entre texto e fundo,
        legendas e textos alternativos em mídia, e nunca depender apenas de cor
        para comunicar estado (erro, sucesso, seleção).
      </p>

      <h3 className="mt-8 mb-2 text-[1rem] font-medium text-foreground">
        Operável
      </h3>
      <p className="doc-body text-muted-foreground">
        Toda funcionalidade precisa ser acessível por teclado, sem armadilhas de
        foco. Modais, menus, tabelas e o checkout do Club devem responder a Tab,
        Enter, Espaço, Esc e setas de forma previsível. Animações não podem
        causar desconforto e nada deve depender de gestos complexos.
      </p>

      <h3 className="mt-8 mb-2 text-[1rem] font-medium text-foreground">
        Compreensível
      </h3>
      <p className="doc-body text-muted-foreground">
        A interface deve se comportar de maneira consistente e previsível.
        Mensagens de erro precisam explicar o que aconteceu e como corrigir,
        rótulos devem ser claros e a linguagem objetiva. Componentes equivalentes
        se comportam da mesma forma em todos os produtos.
      </p>

      <h3 className="mt-8 mb-2 text-[1rem] font-medium text-foreground">
        Robusto
      </h3>
      <p className="doc-body text-muted-foreground">
        O markup deve ser válido e semântico para funcionar com a maior
        variedade possível de tecnologias assistivas — leitores de tela,
        ampliadores e navegação por voz. Preferimos sempre o elemento HTML nativo
        correto antes de recorrer a ARIA.
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Checklist antes de entregar
      </h2>
      <p className="doc-body">
        Use esta lista como portão de qualidade antes de marcar qualquer entrega
        como concluída. Se algum item falhar, a entrega ainda não está pronta.
      </p>
      <AccessibilityChecklist
        items={[
          "Todo o fluxo pode ser concluído usando apenas o teclado, sem armadilhas de foco.",
          "O foco é visível em todos os elementos interativos e segue uma ordem lógica.",
          "Texto normal atinge contraste de 4.5:1 e texto grande 3:1 contra o fundo.",
          "Nenhuma informação é transmitida apenas por cor (use ícone, texto ou padrão também).",
          "Imagens informativas têm texto alternativo; imagens decorativas são ocultadas para a tecnologia assistiva.",
          "Campos de formulário têm rótulos associados e erros descritos em texto.",
          "Alvos de toque têm pelo menos 44×44px (ou 24×24px com espaçamento adequado).",
          "A página tem landmarks (header, nav, main, footer) e hierarquia de títulos correta.",
          "Conteúdo dinâmico relevante é anunciado via aria-live quando apropriado.",
          "ARIA só foi usado onde o HTML nativo não resolvia o problema.",
        ]}
      />

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Aprofunde por tópico
      </h2>
      <p className="doc-body">
        Cada área abaixo detalha critérios, exemplos e padrões de implementação
        específicos.
      </p>
      <ul className="doc-list">
        {subPages.map((page) => (
          <li key={page.href}>
            <a href={page.href} className="font-medium text-foreground underline underline-offset-4">
              {page.title}
            </a>
            <span className="text-muted-foreground"> — {page.description}</span>
          </li>
        ))}
      </ul>

      <Callout variant="tip" title="Responsabilidade compartilhada">
        Os componentes do Kaizen já chegam acessíveis por padrão, mas a
        acessibilidade final depende de como você os compõe. Estrutura de página,
        rótulos, ordem de leitura e conteúdo são responsabilidade de quem monta a
        tela.
      </Callout>

      <BulletList
        items={[
          "WCAG 2.1 AA é o piso, não o teto — busque AAA onde for viável.",
          "Acessibilidade é validada durante o design e a implementação, não só no final.",
          "Em caso de dúvida, teste com teclado e com um leitor de tela real.",
        ]}
      />
    </StandardPage>
  );
}
