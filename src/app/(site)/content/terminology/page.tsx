import type { Metadata } from "next";

import { StandardPage } from "@/lib/documentation/primitives/standard-page";
import { Callout } from "@/lib/documentation/editorial/callout";
import { BulletList } from "@/lib/documentation/editorial/bullet-list";
import { DoDont } from "@/lib/documentation/editorial/do-dont";

export const metadata: Metadata = {
  title: "Terminologia",
  description:
    "O glossário de termos do Kaizen — quais palavras usar e quais evitar nos produtos Ybera, além de regras de capitalização (sentence case) e formatação de números e datas.",
};

function ExampleCopy({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md bg-slate-50 px-3 py-2">
      <span className="text-[0.875rem] text-foreground">{children}</span>
    </div>
  );
}

const glossary: { use: string; avoid: string; context: string }[] = [
  {
    use: "Entrar",
    avoid: "Login / Logar",
    context: "Ação de acessar a conta. \"Entrar\" no botão; \"Sair\" para o oposto.",
  },
  {
    use: "Sair",
    avoid: "Logout / Deslogar",
    context: "Encerrar a sessão. Par natural de \"Entrar\".",
  },
  {
    use: "Excluir",
    avoid: "Deletar / Apagar",
    context: "Remover algo de forma permanente, como um produto ou conta.",
  },
  {
    use: "Salvar",
    avoid: "Gravar / Guardar",
    context: "Persistir alterações de um formulário ou edição.",
  },
  {
    use: "Editar",
    avoid: "Alterar / Modificar",
    context: "Abrir um item para mudar seus dados.",
  },
  {
    use: "Cancelar",
    avoid: "Voltar atrás / Desistir",
    context: "Fechar uma ação sem aplicar mudanças.",
  },
  {
    use: "E-mail",
    avoid: "Email / Correio eletrônico",
    context: "Sempre com hífen. Use em rótulos de campo e mensagens.",
  },
  {
    use: "Senha",
    avoid: "Password",
    context: "Campo de autenticação. Nunca use o termo em inglês.",
  },
  {
    use: "Carrinho",
    avoid: "Cesta / Sacola",
    context: "Onde os produtos ficam antes da compra.",
  },
  {
    use: "Finalizar compra",
    avoid: "Checkout / Fechar pedido",
    context: "Ação de concluir a compra e ir para o pagamento.",
  },
  {
    use: "Pedido",
    avoid: "Order / Compra",
    context: "Uma compra registrada. \"Meus pedidos\" para o histórico.",
  },
  {
    use: "Configurações",
    avoid: "Ajustes / Preferências / Settings",
    context: "Área de ajustes da conta ou da loja.",
  },
];

export default function Page() {
  return (
    <StandardPage>
      <header className="doc-page-header pb-12">
        <p className="doc-eyebrow">Content</p>
        <h1 className="doc-title mt-4">Terminologia</h1>
        <p className="doc-description">
          Usar a mesma palavra para a mesma coisa, em todo lugar, faz o produto
          parecer coeso e confiável. Este glossário define os termos oficiais do
          Kaizen e como formatar texto, números e datas.
        </p>
      </header>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Por que consistência de termos importa
      </h2>
      <p className="doc-body">
        Quando uma tela diz &quot;Excluir&quot; e outra diz &quot;Apagar&quot;, a
        pessoa pode achar que são ações diferentes. Variar o vocabulário aumenta a
        carga cognitiva e abala a confiança. Um termo único por conceito torna a
        interface previsível: a pessoa aprende uma vez e reconhece em qualquer
        lugar.
      </p>

      <Callout variant="info" title="Um conceito, uma palavra">
        Escolha um termo para cada conceito e use sempre o mesmo. Sinônimos podem
        enriquecer um texto literário, mas em uma interface eles confundem.
      </Callout>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Glossário
      </h2>
      <p className="doc-body">
        Use os termos da coluna &quot;Use&quot; e evite os equivalentes da coluna
        &quot;Evite&quot; em rótulos, botões e mensagens dos produtos Ybera.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-[var(--kz-line-subtle)]">
              <th className="py-2 pr-4 text-[0.7rem] uppercase tracking-[0.08em] text-muted-foreground">
                Use
              </th>
              <th className="py-2 pr-4 text-[0.7rem] uppercase tracking-[0.08em] text-muted-foreground">
                Evite
              </th>
              <th className="py-2 text-[0.7rem] uppercase tracking-[0.08em] text-muted-foreground">
                Contexto
              </th>
            </tr>
          </thead>
          <tbody>
            {glossary.map((row) => (
              <tr
                key={row.use}
                className="border-b border-[var(--kz-line-subtle)] align-top"
              >
                <td className="py-3 pr-4 text-[0.875rem] font-medium text-foreground">
                  {row.use}
                </td>
                <td className="py-3 pr-4 text-[0.875rem] text-muted-foreground line-through">
                  {row.avoid}
                </td>
                <td className="py-3 text-[0.875rem] text-muted-foreground">
                  {row.context}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Capitalização: sentence case
      </h2>
      <p className="doc-body">
        O Kaizen usa <strong>sentence case</strong> em tudo — títulos, botões,
        rótulos e menus. Só a primeira letra da frase é maiúscula, além de nomes
        próprios. Evite Title Case (cada palavra com inicial maiúscula) e
        CAIXA-ALTA, que dificultam a leitura.
      </p>
      <DoDont
        doItems={[
          {
            label: "Sentence case",
            description: "Apenas a primeira letra e nomes próprios em maiúscula.",
            example: <ExampleCopy>Adicionar novo produto</ExampleCopy>,
          },
        ]}
        dontItems={[
          {
            label: "Title case e caixa-alta",
            description: "Cada palavra capitalizada ou texto todo em maiúsculas.",
            example: <ExampleCopy>Adicionar Novo Produto / SALVAR</ExampleCopy>,
          },
        ]}
      />

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Números e datas
      </h2>
      <p className="doc-body">
        Siga as convenções brasileiras de formatação para que valores e datas
        sejam lidos sem esforço.
      </p>
      <BulletList
        items={[
          "Moeda: use o real com cifrão e espaço — R$ 1.499,90. Ponto separa milhar, vírgula separa centavos.",
          "Datas curtas: dd/mm/aaaa — 16/06/2026.",
          "Datas por extenso: 16 de junho de 2026, com o mês em minúscula.",
          "Horas: formato de 24 horas — 14h30 ou 14:30, sem AM/PM.",
          "Porcentagem: número junto ao símbolo — 20%, não 20 %.",
          "Números grandes: use ponto como separador de milhar — 12.500 produtos.",
        ]}
      />

      <DoDont
        doItems={[
          {
            label: "Formato brasileiro",
            description: "Moeda, data e porcentagem no padrão pt-BR.",
            example: (
              <ExampleCopy>R$ 1.499,90 · 16/06/2026 · 20% de desconto</ExampleCopy>
            ),
          },
        ]}
        dontItems={[
          {
            label: "Formato estrangeiro ou misto",
            description: "Padrões em inglês ou separadores trocados.",
            example: (
              <ExampleCopy>$1,499.90 · 06/16/2026 · 20 % off</ExampleCopy>
            ),
          },
        ]}
      />

      <Callout variant="tip" title="Na dúvida, consulte o glossário">
        Antes de inventar um termo novo, verifique se já existe um equivalente
        aqui. Se faltar algo importante, proponha a inclusão em vez de criar uma
        variação isolada em uma única tela.
      </Callout>
    </StandardPage>
  );
}
