import type { Metadata } from "next";

import { StandardPage } from "@/lib/documentation/primitives/standard-page";
import { Callout } from "@/lib/documentation/editorial/callout";
import { BulletList } from "@/lib/documentation/editorial/bullet-list";
import { DoDont } from "@/lib/documentation/editorial/do-dont";

export const metadata: Metadata = {
  title: "Voz e tom",
  description:
    "A diferença entre voz e tom no Kaizen — a voz constante da Ybera (próxima, direta, confiante, sem jargão) e como o tom se adapta a sucesso, erro e onboarding.",
};

function ExampleCopy({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md bg-slate-50 px-3 py-2">
      <span className="text-[0.875rem] text-foreground">{children}</span>
    </div>
  );
}

const toneByContext: { context: string; tone: string; example: string }[] = [
  {
    context: "Sucesso",
    tone: "Leve e breve — confirma e sai do caminho.",
    example: "Pedido confirmado! Você vai receber o código de rastreio por e-mail.",
  },
  {
    context: "Erro",
    tone: "Calmo e prestativo — nunca culpa a pessoa.",
    example: "Não foi possível salvar. Verifique sua conexão e tente novamente.",
  },
  {
    context: "Onboarding",
    tone: "Acolhedor e encorajador — guia o primeiro passo.",
    example: "Vamos começar. Em três passos sua loja estará pronta para vender.",
  },
  {
    context: "Confirmação destrutiva",
    tone: "Sério e claro — explica o impacto sem dramatizar.",
    example: "Excluir esta coleção remove os 12 produtos vinculados. Essa ação não pode ser desfeita.",
  },
  {
    context: "Estado vazio",
    tone: "Convidativo — mostra o que fazer primeiro.",
    example: "Nenhum produto ainda. Adicione o primeiro para começar a vender.",
  },
  {
    context: "Espera / carregamento",
    tone: "Tranquilizador e honesto sobre o tempo.",
    example: "Estamos processando seu pagamento. Isso leva só alguns segundos.",
  },
];

export default function Page() {
  return (
    <StandardPage>
      <header className="doc-page-header pb-12">
        <p className="doc-eyebrow">Content</p>
        <h1 className="doc-title mt-4">Voz e tom</h1>
        <p className="doc-description">
          A voz da Ybera é constante: ela define quem somos em qualquer texto. O
          tom muda conforme a situação da pessoa — comemoramos um sucesso de um
          jeito e acolhemos um erro de outro.
        </p>
      </header>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Voz não é tom
      </h2>
      <p className="doc-body">
        <strong>Voz</strong> é a nossa personalidade — não muda. Está presente
        numa mensagem de boas-vindas e numa mensagem de erro. <strong>Tom</strong>{" "}
        é como essa personalidade se ajusta ao contexto: o mesmo jeito de falar
        soa mais leve numa confirmação e mais cuidadoso num alerta. Pense na voz
        como quem você é e no tom como o seu humor naquele momento.
      </p>

      <Callout variant="info" title="Uma voz, muitos tons">
        Se a voz mudasse a cada tela, o produto pareceria escrito por pessoas
        diferentes. O tom, sim, deve mudar — mas sempre dentro da mesma voz.
      </Callout>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        A voz da Ybera
      </h2>
      <p className="doc-body">
        Em qualquer contexto, a voz da Ybera é:
      </p>
      <BulletList
        items={[
          "Próxima — falamos com a pessoa, não para um público genérico. Usamos \"você\".",
          "Direta — vamos ao ponto, sem rodeios nem formalidade desnecessária.",
          "Confiante — afirmamos com segurança, sem soar arrogantes nem hesitantes.",
          "Sem jargão — evitamos termos técnicos e corporativos; explicamos como uma pessoa explicaria.",
        ]}
      />

      <DoDont
        doItems={[
          {
            label: "Próxima e direta",
            description: "Fala com a pessoa, em primeira pessoa, sem formalidade.",
            example: (
              <ExampleCopy>Pronto! Sua loja já está no ar.</ExampleCopy>
            ),
          },
          {
            label: "Confiante sem ser dura",
            description: "Afirma com segurança e ainda oferece ajuda.",
            example: (
              <ExampleCopy>
                Recomendamos ativar o frete grátis acima de R$ 150 — costuma
                aumentar o ticket médio.
              </ExampleCopy>
            ),
          },
        ]}
        dontItems={[
          {
            label: "Distante e burocrática",
            description: "Linguagem corporativa que afasta a pessoa.",
            example: (
              <ExampleCopy>
                A configuração do estabelecimento comercial foi efetivada com
                êxito.
              </ExampleCopy>
            ),
          },
          {
            label: "Cheia de jargão",
            description: "Termos técnicos que o usuário não precisa conhecer.",
            example: (
              <ExampleCopy>
                Provisionamento do tenant concluído. Endpoint disponível.
              </ExampleCopy>
            ),
          },
        ]}
      />

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Como o tom muda por contexto
      </h2>
      <p className="doc-body">
        O estado emocional da pessoa muda conforme a situação. No sucesso, ela
        está satisfeita — seja breve. No erro, pode estar frustrada — seja calmo
        e prestativo. No onboarding, está conhecendo o produto — seja acolhedor.
        A voz é a mesma; o tom se ajusta.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-[var(--kz-line-subtle)]">
              <th className="py-2 pr-4 text-[0.7rem] uppercase tracking-[0.08em] text-muted-foreground">
                Contexto
              </th>
              <th className="py-2 pr-4 text-[0.7rem] uppercase tracking-[0.08em] text-muted-foreground">
                Tom
              </th>
              <th className="py-2 text-[0.7rem] uppercase tracking-[0.08em] text-muted-foreground">
                Exemplo
              </th>
            </tr>
          </thead>
          <tbody>
            {toneByContext.map((row) => (
              <tr
                key={row.context}
                className="border-b border-[var(--kz-line-subtle)] align-top"
              >
                <td className="py-3 pr-4 text-[0.875rem] font-medium text-foreground">
                  {row.context}
                </td>
                <td className="py-3 pr-4 text-[0.875rem] text-muted-foreground">
                  {row.tone}
                </td>
                <td className="py-3 text-[0.875rem] text-foreground">
                  {row.example}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Tom em situações sensíveis
      </h2>
      <p className="doc-body">
        Em erros, cobranças e ações destrutivas, o tom importa ainda mais. Nunca
        culpe a pessoa, não dramatize e não esconda o que aconteceu. Seja honesto,
        calmo e mostre a saída.
      </p>

      <DoDont
        doItems={[
          {
            label: "Acolhe no erro",
            description: "Reconhece o problema e oferece o próximo passo.",
            example: (
              <ExampleCopy>
                Algo deu errado ao processar o pagamento. Confira os dados do
                cartão e tente de novo.
              </ExampleCopy>
            ),
          },
          {
            label: "Comemora sem exagero",
            description: "Celebra o sucesso de forma leve e breve.",
            example: <ExampleCopy>Tudo certo! Seu produto foi publicado.</ExampleCopy>,
          },
        ]}
        dontItems={[
          {
            label: "Culpa a pessoa",
            description: "Coloca a responsabilidade no usuário e soa acusatório.",
            example: (
              <ExampleCopy>
                Você preencheu os dados do cartão incorretamente.
              </ExampleCopy>
            ),
          },
          {
            label: "Exagera no sucesso",
            description: "Entusiasmo forçado que soa artificial.",
            example: (
              <ExampleCopy>
                Uhuul!!! Você é incrível!!! Seu produto está no ar!!! 🎉🎉🎉
              </ExampleCopy>
            ),
          },
        ]}
      />

      <Callout variant="tip" title="Leia imaginando o estado da pessoa">
        Antes de finalizar um texto, pergunte: como a pessoa se sente ao ler
        isto? Frustrada num erro? Aliviada num sucesso? Ajuste o tom para
        encontrar a pessoa onde ela está.
      </Callout>
    </StandardPage>
  );
}
