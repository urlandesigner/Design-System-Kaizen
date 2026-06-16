import type { Metadata } from "next";

import { StandardPage } from "@/lib/documentation/primitives/standard-page";
import { Callout } from "@/lib/documentation/editorial/callout";
import { BulletList } from "@/lib/documentation/editorial/bullet-list";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "O que está sendo construído no Kaizen, organizado por horizonte: Agora, Próximo e Depois.",
};

export default function Page() {
  return (
    <StandardPage>
      <header className="doc-page-header pb-12">
        <p className="doc-eyebrow">Governança</p>
        <h1 className="doc-title mt-4">Roadmap público</h1>
        <p className="doc-description">
          Este roadmap mostra para onde o Kaizen está indo, organizado por
          horizonte de prioridade em vez de datas. É um retrato vivo das
          intenções do time — ajuda a alinhar expectativas e a planejar a adoção.
        </p>
      </header>

      <Callout variant="info" title="O roadmap evolui">
        As prioridades abaixo são uma direção, não um compromisso de data.
        Itens podem ser reordenados, agrupados ou repensados à medida que
        aprendemos com o uso. O que já foi entregue está sempre registrado no{" "}
        <a
          href="/changelog"
          className="font-medium underline underline-offset-4"
        >
          changelog
        </a>
        .
      </Callout>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Agora
      </h2>
      <p className="doc-body text-muted-foreground">
        Foco ativo do time. São os trabalhos em andamento que sustentam a base do
        sistema antes de expandi-lo.
      </p>
      <BulletList
        items={[
          "Consolidar as fundações — escala de tokens de cor, tipografia e espaçamento estável e documentada.",
          "Garantir contraste e acessibilidade em todos os componentes já publicados, validando pares de cor e estados de foco.",
          "Busca global com atalho Cmd+K para navegar pela documentação rapidamente.",
          "Padronizar a documentação de cada componente: anatomia, estados, do/don't e diretrizes de uso.",
        ]}
      />

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Próximo
      </h2>
      <p className="doc-body text-muted-foreground">
        Planejado para começar em seguida. Depende, em parte, da consolidação dos
        itens em andamento.
      </p>
      <BulletList
        items={[
          "Expandir a biblioteca de componentes: modal/dialog, tabela de dados, select e tabs.",
          "Adicionar feedback transitório com um componente de toast/notificação.",
          "Documentar padrões compostos que combinam vários componentes (formulários, filtros, listagens).",
          "Publicar diretrizes de conteúdo e voz para textos de interface.",
        ]}
      />

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Depois
      </h2>
      <p className="doc-body text-muted-foreground">
        Horizonte mais distante. Direções que consideramos importantes, mas que
        ainda serão detalhadas.
      </p>
      <BulletList
        items={[
          "Medir adoção do Kaizen nos produtos e usar os dados para priorizar a evolução.",
          "Introduzir tokens de motion para padronizar animações e transições.",
          "Disponibilizar templates de tela prontos para acelerar o início de novos projetos.",
          "Avaliar suporte a temas e personalização por produto sobre a mesma base de tokens.",
        ]}
      />

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        O que já foi entregue
      </h2>
      <p className="doc-body">
        O roadmap olha para frente; o histórico completo de tudo que já foi
        publicado — versões, novos componentes e correções — vive no{" "}
        <a
          href="/changelog"
          className="font-medium underline underline-offset-4"
        >
          changelog
        </a>
        .
      </p>
    </StandardPage>
  );
}
