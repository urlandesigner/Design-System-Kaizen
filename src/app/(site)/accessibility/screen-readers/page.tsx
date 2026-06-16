import type { Metadata } from "next";

import { StandardPage } from "@/lib/documentation/primitives/standard-page";
import { Callout } from "@/lib/documentation/editorial/callout";
import { BulletList } from "@/lib/documentation/editorial/bullet-list";
import { AccessibilityChecklist } from "@/lib/documentation/primitives/accessibility-checklist";

export const metadata: Metadata = {
  title: "Leitores de tela",
  description:
    "HTML semântico, landmarks, rótulos, textos alternativos e regiões dinâmicas para uma boa experiência com tecnologia assistiva.",
};

export default function Page() {
  return (
    <StandardPage>
      <header className="doc-page-header pb-12">
        <p className="doc-eyebrow">Accessibility</p>
        <h1 className="doc-title mt-4">Leitores de tela</h1>
        <p className="doc-description">
          Leitores de tela convertem a interface em fala ou braile. A qualidade
          dessa experiência depende quase inteiramente de quão semântico e bem
          rotulado é o markup que entregamos.
        </p>
      </header>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        HTML semântico primeiro
      </h2>
      <p className="doc-body">
        A regra de ouro: use o elemento HTML certo para cada propósito. Um{" "}
        <code>&lt;button&gt;</code> já é anunciado como botão, é focável e
        responde a Enter e Espaço — um <code>&lt;div&gt;</code> estilizado não é
        nada disso. Títulos (<code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code>),
        listas, tabelas e formulários nativos carregam significado que o leitor
        de tela usa para orientar o usuário.
      </p>

      <Callout variant="tip" title="Hierarquia de títulos">
        Mantenha uma estrutura de títulos coerente: um único{" "}
        <code>&lt;h1&gt;</code> por página e sem pular níveis (não vá de{" "}
        <code>&lt;h2&gt;</code> direto para <code>&lt;h4&gt;</code>). Usuários de
        leitor de tela navegam pulando entre títulos — uma hierarquia quebrada
        desorienta.
      </Callout>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Landmarks
      </h2>
      <p className="doc-body">
        Estruture a página com landmarks nativos — <code>&lt;header&gt;</code>,{" "}
        <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>,{" "}
        <code>&lt;aside&gt;</code> e <code>&lt;footer&gt;</code>. Eles permitem
        que o usuário salte diretamente para regiões inteiras. Use apenas um{" "}
        <code>&lt;main&gt;</code> por página e diferencie navegações repetidas
        com <code>aria-label</code> (ex.: &quot;Navegação principal&quot; e
        &quot;Navegação de rodapé&quot;).
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Rótulos
      </h2>
      <p className="doc-body">
        Todo controle precisa de um nome acessível. A ordem de preferência:
      </p>
      <BulletList
        items={[
          "Use <label> associado por for/id para campos de formulário — é o método mais robusto.",
          "Use aria-label quando não houver texto visível (ex.: um botão só com ícone).",
          "Use aria-labelledby para referenciar um texto visível já presente na tela.",
          "Evite placeholder como rótulo: ele some ao digitar e costuma ter baixo contraste.",
        ]}
      />

      <Callout variant="warning" title="Botões de ícone precisam de nome">
        Um botão que mostra apenas um ícone (fechar, buscar, menu) é anunciado
        como &quot;botão&quot; sem mais nada. Sempre adicione{" "}
        <code>aria-label</code> descrevendo a ação, e marque o ícone decorativo
        com <code>aria-hidden=&quot;true&quot;</code>.
      </Callout>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Textos alternativos
      </h2>
      <p className="doc-body">
        Imagens que transmitem informação precisam de <code>alt</code> descrevendo
        seu conteúdo ou função (critério 1.1.1). O texto deve comunicar o que a
        imagem significa no contexto, não apenas descrevê-la literalmente.
        Imagens puramente decorativas devem ter <code>alt=&quot;&quot;</code>{" "}
        (vazio) para que o leitor de tela as ignore.
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Conteúdo dinâmico com aria-live
      </h2>
      <p className="doc-body">
        Mudanças que acontecem sem recarregar a página — uma mensagem de
        sucesso, um contador de resultados, um toast — não são percebidas
        automaticamente por leitores de tela. Use uma região{" "}
        <code>aria-live</code> para anunciá-las: <code>polite</code> para
        atualizações não urgentes (aguarda uma pausa na fala) e{" "}
        <code>assertive</code> apenas para alertas críticos que interrompem o
        usuário.
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Esconda o decorativo
      </h2>
      <p className="doc-body">
        Ícones decorativos, divisores e elementos puramente visuais devem receber{" "}
        <code>aria-hidden=&quot;true&quot;</code> para não poluir a leitura.
        Atenção: nunca aplique <code>aria-hidden</code> a um elemento focável ou
        que contenha um — isso cria um controle &quot;fantasma&quot; alcançável
        por teclado mas invisível ao leitor de tela.
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Checklist de leitores de tela
      </h2>
      <AccessibilityChecklist
        items={[
          "A página usa landmarks (header, nav, main, footer) e um único <main>.",
          "A hierarquia de títulos é coerente, sem pular níveis.",
          "Todo campo de formulário tem um rótulo associado.",
          "Botões só de ícone têm aria-label e o ícone é aria-hidden.",
          "Imagens informativas têm alt descritivo; decorativas têm alt vazio.",
          "Atualizações dinâmicas relevantes são anunciadas via aria-live.",
          "Elementos decorativos são ocultados com aria-hidden, sem esconder controles focáveis.",
          "O conteúdo foi validado com um leitor de tela real (NVDA, VoiceOver ou TalkBack).",
        ]}
      />
    </StandardPage>
  );
}
