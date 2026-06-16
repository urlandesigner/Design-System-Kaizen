import type { Metadata } from "next";

import { StandardPage } from "@/lib/documentation/primitives/standard-page";
import { Callout } from "@/lib/documentation/editorial/callout";
import { BulletList } from "@/lib/documentation/editorial/bullet-list";
import { DoDont } from "@/lib/documentation/editorial/do-dont";

export const metadata: Metadata = {
  title: "Content",
  description:
    "Os princípios de conteúdo do Kaizen — por que o texto faz parte do design system e como escrever de forma clara, concisa, útil, humana e consistente nos produtos Ybera.",
};

const subPages: { href: string; title: string; description: string }[] = [
  {
    href: "/content/voice-tone",
    title: "Voz e tom",
    description:
      "A voz constante da Ybera e como o tom se adapta a cada contexto da interface.",
  },
  {
    href: "/content/error-messages",
    title: "Mensagens de erro",
    description:
      "Como escrever erros que explicam o que aconteceu e mostram o caminho de saída.",
  },
  {
    href: "/content/terminology",
    title: "Terminologia",
    description:
      "O glossário de termos do Kaizen, capitalização e formatação de números e datas.",
  },
];

function ExampleCopy({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md bg-slate-50 px-3 py-2">
      <span className="text-[0.875rem] text-foreground">{children}</span>
    </div>
  );
}

export default function Page() {
  return (
    <StandardPage>
      <header className="doc-page-header pb-12">
        <p className="doc-eyebrow">Content</p>
        <h1 className="doc-title mt-4">Conteúdo</h1>
        <p className="doc-description">
          Palavras são interface. Cada rótulo, mensagem e instrução guia uma
          decisão do usuário — por isso o conteúdo é parte do design system, não
          um detalhe deixado para o fim. Esta seção define como o Kaizen escreve.
        </p>
      </header>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Por que conteúdo faz parte do design system
      </h2>
      <p className="doc-body">
        Um botão bem desenhado com o texto errado ainda é um botão que confunde.
        O conteúdo determina se a pessoa entende o que está acontecendo, sabe o
        que fazer a seguir e confia no produto. Tratar o texto como parte do
        sistema garante que toda a Ybera fale de um jeito só, com a mesma clareza
        que aplicamos a cores, espaçamento e componentes.
      </p>
      <p className="doc-body text-muted-foreground">
        Quando o conteúdo é tratado como parte do design, ele deixa de ser
        improvisado tela a tela e passa a ser previsível, reutilizável e fácil de
        manter — exatamente como qualquer outro token do sistema.
      </p>

      <Callout variant="tip" title="Escreva antes de desenhar">
        Sempre que possível, escreva o conteúdo real antes de finalizar o layout.
        O texto verdadeiro revela problemas que o lorem ipsum esconde — rótulos
        longos demais, instruções que faltam, mensagens que não cabem.
      </Callout>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Os princípios de conteúdo do Kaizen
      </h2>
      <p className="doc-body">
        Cinco princípios orientam toda decisão de escrita no Kaizen. Eles valem
        para um microtexto de um botão tanto quanto para uma tela inteira de
        onboarding.
      </p>

      <h2 className="mt-10 mb-3 text-[1.0625rem] font-semibold tracking-[-0.01em] text-foreground">
        Claro
      </h2>
      <p className="doc-body">
        Diga exatamente o que a pessoa precisa saber, sem ambiguidade. Se há duas
        leituras possíveis, reescreva.
      </p>
      <DoDont
        doItems={[
          {
            label: "Ação inequívoca",
            description: "O texto deixa claro o que vai acontecer ao confirmar.",
            example: <ExampleCopy>Excluir 3 produtos</ExampleCopy>,
          },
        ]}
        dontItems={[
          {
            label: "Ação vaga",
            description: "Não fica claro o que será confirmado nem o impacto.",
            example: <ExampleCopy>Tem certeza?</ExampleCopy>,
          },
        ]}
      />

      <h2 className="mt-10 mb-3 text-[1.0625rem] font-semibold tracking-[-0.01em] text-foreground">
        Conciso
      </h2>
      <p className="doc-body">
        Use o mínimo de palavras necessárias. Corte o que não ajuda a pessoa a
        decidir ou agir.
      </p>
      <DoDont
        doItems={[
          {
            label: "Direto ao ponto",
            description: "Uma frase resolve sem rodeios.",
            example: <ExampleCopy>Suas alterações foram salvas.</ExampleCopy>,
          },
        ]}
        dontItems={[
          {
            label: "Cheio de enrolação",
            description: "Palavras a mais que não acrescentam informação.",
            example: (
              <ExampleCopy>
                Gostaríamos de informar que, neste momento, as suas alterações já
                foram devidamente salvas com sucesso.
              </ExampleCopy>
            ),
          },
        ]}
      />

      <h2 className="mt-10 mb-3 text-[1.0625rem] font-semibold tracking-[-0.01em] text-foreground">
        Útil
      </h2>
      <p className="doc-body">
        Todo texto deve ajudar a pessoa a avançar. Em vez de só descrever um
        problema, mostre o próximo passo.
      </p>
      <DoDont
        doItems={[
          {
            label: "Aponta a saída",
            description: "Diz o que houve e o que fazer em seguida.",
            example: (
              <ExampleCopy>
                Nenhum resultado para &quot;xampu xyz&quot;. Tente outro termo ou
                limpe os filtros.
              </ExampleCopy>
            ),
          },
        ]}
        dontItems={[
          {
            label: "Beco sem saída",
            description: "Informa o problema, mas deixa a pessoa travada.",
            example: <ExampleCopy>Nenhum resultado encontrado.</ExampleCopy>,
          },
        ]}
      />

      <h2 className="mt-10 mb-3 text-[1.0625rem] font-semibold tracking-[-0.01em] text-foreground">
        Humano
      </h2>
      <p className="doc-body">
        Fale como uma pessoa fala. Evite jargão técnico, linguagem robótica e
        tom de máquina.
      </p>
      <DoDont
        doItems={[
          {
            label: "Linguagem natural",
            description: "Soa como alguém ajudando, não como um sistema.",
            example: (
              <ExampleCopy>
                Não encontramos sua conta. Confira o e-mail e tente de novo.
              </ExampleCopy>
            ),
          },
        ]}
        dontItems={[
          {
            label: "Tom de máquina",
            description: "Termos técnicos que ninguém usa no dia a dia.",
            example: (
              <ExampleCopy>
                Falha na autenticação: credencial inválida (auth_error_401).
              </ExampleCopy>
            ),
          },
        ]}
      />

      <h2 className="mt-10 mb-3 text-[1.0625rem] font-semibold tracking-[-0.01em] text-foreground">
        Consistente
      </h2>
      <p className="doc-body">
        Use os mesmos termos para as mesmas coisas, sempre. Variar o vocabulário
        faz a pessoa duvidar se está falando do mesmo recurso.
      </p>
      <DoDont
        doItems={[
          {
            label: "Termo único",
            description: "O mesmo verbo aparece em todos os lugares.",
            example: <ExampleCopy>Excluir conta</ExampleCopy>,
          },
        ]}
        dontItems={[
          {
            label: "Sinônimos espalhados",
            description:
              "Deletar, apagar e remover misturados confundem o usuário.",
            example: <ExampleCopy>Deletar / Apagar / Remover conta</ExampleCopy>,
          },
        ]}
      />

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Aprofunde por tópico
      </h2>
      <p className="doc-body">
        Cada área abaixo detalha diretrizes, exemplos de cópia e padrões de
        escrita específicos.
      </p>
      <ul className="doc-list">
        {subPages.map((page) => (
          <li key={page.href}>
            <a
              href={page.href}
              className="font-medium text-foreground underline underline-offset-4"
            >
              {page.title}
            </a>
            <span className="text-muted-foreground"> — {page.description}</span>
          </li>
        ))}
      </ul>

      <Callout variant="info" title="Conteúdo é responsabilidade de todo mundo">
        Design, produto e engenharia escrevem texto que chega ao usuário. Estes
        princípios existem para que qualquer pessoa do time consiga escrever no
        tom da Ybera, sem depender de um único revisor.
      </Callout>

      <BulletList
        items={[
          "Escreva o conteúdo real cedo — ele molda o design tanto quanto o layout.",
          "Na dúvida entre duas frases, escolha a mais curta e mais clara.",
          "Leia em voz alta: se soa estranho falando, soa estranho na tela.",
        ]}
      />
    </StandardPage>
  );
}
