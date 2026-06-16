import type { Metadata } from "next";

import { StandardPage } from "@/lib/documentation/primitives/standard-page";
import { Callout } from "@/lib/documentation/editorial/callout";
import { BulletList } from "@/lib/documentation/editorial/bullet-list";
import { AccessibilityChecklist } from "@/lib/documentation/primitives/accessibility-checklist";

export const metadata: Metadata = {
  title: "Navegação por teclado",
  description:
    "Toda funcionalidade do Kaizen deve ser operável por teclado, com ordem de tabulação lógica e teclas previsíveis.",
};

export default function Page() {
  return (
    <StandardPage>
      <header className="doc-page-header pb-12">
        <p className="doc-eyebrow">Accessibility</p>
        <h1 className="doc-title mt-4">Navegação por teclado</h1>
        <p className="doc-description">
          Muitas pessoas não usam mouse — por deficiência motora, por usarem
          leitor de tela, ou por preferência. O critério 2.1.1 exige que toda
          ação possível com o mouse também seja possível com o teclado.
        </p>
      </header>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Tudo operável pelo teclado
      </h2>
      <p className="doc-body">
        Qualquer fluxo — preencher um formulário, abrir um menu, navegar uma
        tabela, finalizar uma compra no Club — precisa ser concluído usando
        apenas o teclado. Use sempre elementos nativos (
        <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code>,{" "}
        <code>&lt;input&gt;</code>), que já são focáveis e respondem às teclas
        esperadas. Elementos genéricos como <code>&lt;div&gt;</code> com{" "}
        <code>onClick</code> não recebem foco nem teclado por padrão.
      </p>

      <Callout variant="warning" title="Evite o tabindex positivo">
        Nunca use <code>tabindex</code> com valor maior que zero — isso quebra a
        ordem natural de tabulação e cria confusão. Use apenas{" "}
        <code>tabindex=&quot;0&quot;</code> (entra na ordem) ou{" "}
        <code>tabindex=&quot;-1&quot;</code> (focável só por código).
      </Callout>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Ordem de tabulação lógica
      </h2>
      <p className="doc-body">
        A ordem do foco deve seguir a leitura visual da página (geralmente cima
        para baixo, esquerda para direita) e refletir a estrutura do conteúdo,
        atendendo ao critério 2.4.3. A ordem é definida pela ordem dos elementos
        no DOM — então a marcação deve corresponder à ordem visual, evitando
        reordenações apenas com CSS que confundam o usuário.
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Teclas esperadas
      </h2>
      <p className="doc-body">
        Os componentes do Kaizen seguem os padrões do WAI-ARIA Authoring
        Practices. As convenções principais:
      </p>
      <BulletList
        items={[
          "Tab / Shift+Tab: avança e retrocede entre elementos interativos.",
          "Enter: ativa links e botões; envia formulários.",
          "Espaço: ativa botões; marca/desmarca checkboxes; rola a página quando o foco não está num controle.",
          "Esc: fecha modais, popovers, menus e dropdowns, devolvendo o foco ao gatilho.",
          "Setas: navegam dentro de um mesmo componente composto — itens de menu, opções de radio, abas, linhas de lista.",
          "Home / End: vão ao primeiro e ao último item em listas e menus longos.",
        ]}
      />

      <Callout variant="tip" title="Foco gerenciado em widgets compostos">
        Em menus, abas e listas, o componente usa um único ponto de entrada na
        tabulação e move o foco internamente com as setas (padrão de roving
        tabindex). O usuário entra no widget com Tab e navega as opções com as
        setas — não com Tab a cada item.
      </Callout>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Evite armadilhas de foco
      </h2>
      <p className="doc-body">
        Uma armadilha de foco (keyboard trap) acontece quando o foco entra numa
        região e não consegue mais sair pelo teclado — uma violação direta do
        critério 2.1.2. A exceção intencional são os modais: enquanto um diálogo
        está aberto, o foco deve ficar contido nele (focus trap), e ao fechar (
        <code>Esc</code> ou confirmação) o foco retorna ao elemento que o abriu.
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Skip links
      </h2>
      <p className="doc-body">
        Páginas com navegação extensa devem oferecer um link &quot;Pular para o
        conteúdo&quot; como primeiro elemento focável. Ele fica oculto até
        receber foco e permite que usuários de teclado e leitor de tela ignorem
        blocos repetidos de navegação (critério 2.4.1), indo direto ao{" "}
        <code>&lt;main&gt;</code>.
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Checklist de teclado
      </h2>
      <AccessibilityChecklist
        items={[
          "Todo o fluxo pode ser concluído usando apenas o teclado.",
          "Elementos interativos usam tags nativas (button, a, input) e são focáveis.",
          "A ordem de tabulação segue a ordem visual e lógica do conteúdo.",
          "Enter, Espaço, Esc e setas se comportam conforme o padrão WAI-ARIA.",
          "Não existem armadilhas de foco fora de modais intencionais.",
          "Ao fechar um modal, o foco retorna ao gatilho que o abriu.",
          "Há um skip link para o conteúdo principal quando a navegação é extensa.",
        ]}
      />
    </StandardPage>
  );
}
