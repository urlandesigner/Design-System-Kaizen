import type { Metadata } from "next";

import { StandardPage } from "@/lib/documentation/primitives/standard-page";
import { Callout } from "@/lib/documentation/editorial/callout";
import { BulletList } from "@/lib/documentation/editorial/bullet-list";
import { DoDont } from "@/lib/documentation/editorial/do-dont";

export const metadata: Metadata = {
  title: "Mensagens de erro",
  description:
    "Como escrever mensagens de erro no Kaizen — a anatomia de um bom erro (o que aconteceu, por quê e como resolver), sem culpar o usuário nem usar jargão técnico.",
};

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
        <h1 className="doc-title mt-4">Mensagens de erro</h1>
        <p className="doc-description">
          Um erro é um momento de frustração. Uma boa mensagem transforma esse
          momento em um caminho de saída — ela explica o que houve e mostra,
          claramente, como resolver.
        </p>
      </header>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        A anatomia de um bom erro
      </h2>
      <p className="doc-body">
        Toda mensagem de erro deveria responder, na ordem, a três perguntas que a
        pessoa tem na cabeça naquele instante:
      </p>
      <BulletList
        items={[
          "O que aconteceu? — descreva o problema em linguagem simples.",
          "Por que aconteceu? — quando ajudar, dê o motivo provável.",
          "Como resolver? — aponte a ação concreta para sair do problema.",
        ]}
      />
      <p className="doc-body text-muted-foreground">
        Nem todo erro precisa das três partes, mas a terceira — como resolver —
        quase nunca pode faltar. Uma mensagem que só descreve o problema deixa a
        pessoa travada.
      </p>

      <Callout variant="tip" title="Exemplo das três partes juntas">
        &quot;Não foi possível salvar o produto (o que). O nome já existe na sua
        loja (por quê). Escolha outro nome e tente novamente (como resolver).&quot;
      </Callout>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Seja específico
      </h2>
      <p className="doc-body">
        Erros genéricos não ajudam ninguém. Diga exatamente o que falhou e, se
        possível, qual campo ou item precisa de atenção.
      </p>
      <DoDont
        doItems={[
          {
            label: "Específico e acionável",
            description: "Diz o que falhou e o que fazer para corrigir.",
            example: (
              <ExampleCopy>
                Não foi possível salvar. Verifique sua conexão e tente novamente.
              </ExampleCopy>
            ),
          },
        ]}
        dontItems={[
          {
            label: "Código cru",
            description: "Mostra um erro técnico que não diz nada à pessoa.",
            example: <ExampleCopy>Erro 500</ExampleCopy>,
          },
        ]}
      />

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Não culpe o usuário
      </h2>
      <p className="doc-body">
        Mesmo quando a pessoa digitou algo errado, o tom não deve acusar. Foque no
        que precisa ser ajustado, não em quem errou.
      </p>
      <DoDont
        doItems={[
          {
            label: "Foca na solução",
            description: "Indica o ajuste necessário sem apontar o dedo.",
            example: (
              <ExampleCopy>
                Esse e-mail não parece válido. Confira e tente de novo.
              </ExampleCopy>
            ),
          },
        ]}
        dontItems={[
          {
            label: "Acusa a pessoa",
            description: "Coloca a culpa no usuário e aumenta a frustração.",
            example: (
              <ExampleCopy>Você digitou um e-mail inválido.</ExampleCopy>
            ),
          },
        ]}
      />

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Sem jargão técnico
      </h2>
      <p className="doc-body">
        Códigos de status, nomes de exceções e termos de back-end não significam
        nada para quem usa o produto. Traduza para o que importa para a pessoa.
      </p>
      <DoDont
        doItems={[
          {
            label: "Linguagem humana",
            description: "Explica o problema sem termos técnicos.",
            example: (
              <ExampleCopy>
                Sua sessão expirou. Entre novamente para continuar.
              </ExampleCopy>
            ),
          },
        ]}
        dontItems={[
          {
            label: "Termos de sistema",
            description: "Jargão que só faz sentido para quem programou.",
            example: (
              <ExampleCopy>
                TokenExpiredException: JWT inválido ou expirado.
              </ExampleCopy>
            ),
          },
        ]}
      />

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Pares de antes e depois
      </h2>
      <DoDont
        doItems={[
          {
            label: "Pagamento recusado",
            description: "Diz o motivo provável e o próximo passo.",
            example: (
              <ExampleCopy>
                Não conseguimos concluir a cobrança. Confira os dados do cartão
                ou tente outro meio de pagamento.
              </ExampleCopy>
            ),
          },
          {
            label: "Campo obrigatório",
            description: "Aponta o campo exato que falta preencher.",
            example: (
              <ExampleCopy>Informe um CEP para calcular o frete.</ExampleCopy>
            ),
          },
          {
            label: "Upload muito grande",
            description: "Diz o limite e como se adequar a ele.",
            example: (
              <ExampleCopy>
                A imagem passa de 5 MB. Envie um arquivo menor.
              </ExampleCopy>
            ),
          },
        ]}
        dontItems={[
          {
            label: "Erro genérico",
            description: "Não diz o motivo nem o que fazer.",
            example: <ExampleCopy>Algo deu errado.</ExampleCopy>,
          },
          {
            label: "Mensagem do sistema",
            description: "Expõe uma falha de validação interna.",
            example: <ExampleCopy>Validation failed: field required.</ExampleCopy>,
          },
          {
            label: "Limite sem contexto",
            description: "Cita uma regra sem explicar o que fazer.",
            example: <ExampleCopy>Tamanho de arquivo excedido.</ExampleCopy>,
          },
        ]}
      />

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Boas práticas
      </h2>
      <BulletList
        variant="checklist"
        items={[
          "Sempre ofereça um próximo passo concreto, mesmo que seja \"tente novamente\".",
          "Coloque a mensagem perto de onde o erro ocorreu, não só num aviso global.",
          "Use linguagem simples — nada de códigos, exceções ou termos de back-end.",
          "Não culpe a pessoa; foque no que precisa ser ajustado.",
          "Seja específico sobre o que falhou e, quando possível, sobre o motivo.",
          "Mantenha a mensagem curta: uma ou duas frases bastam na maioria dos casos.",
          "Para erros raros e técnicos, ofereça um caminho de suporte ou um código de referência discreto.",
        ]}
      />

      <Callout variant="warning" title="Cuidado com o erro global genérico">
        Mensagens como &quot;Ocorreu um erro inesperado&quot; devem ser o último
        recurso. Antes de cair nelas, verifique se dá para identificar o problema
        real e dar uma orientação útil.
      </Callout>
    </StandardPage>
  );
}
