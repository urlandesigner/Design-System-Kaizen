import type { Metadata } from "next";

import { StandardPage } from "@/lib/documentation/primitives/standard-page";
import { Callout } from "@/lib/documentation/editorial/callout";
import { BulletList } from "@/lib/documentation/editorial/bullet-list";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Governança",
  description:
    "Como o Kaizen é mantido e evoluído: princípios, papéis, ciclo de versionamento e o caminho para propor mudanças.",
};

export default function Page() {
  return (
    <StandardPage>
      <header className="doc-page-header pb-12">
        <p className="doc-eyebrow">Governança</p>
        <h1 className="doc-title mt-4">Visão geral da governança</h1>
        <p className="doc-description">
          Governança é o conjunto de princípios, papéis e processos que mantêm o
          Kaizen coerente ao longo do tempo. Ela define como decisões são
          tomadas, registradas e revisadas — para que o Design System evolua sem
          perder consistência nem confiança.
        </p>
      </header>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Princípios de governança
      </h2>
      <p className="doc-body">
        Toda decisão sobre o Kaizen é orientada por um pequeno conjunto de
        princípios. Eles servem de critério quando há mais de um caminho possível
        e ajudam a manter o sistema previsível para quem o consome.
      </p>
      <BulletList
        items={[
          "Evolução incremental (kaizen): preferimos melhorias pequenas e contínuas a grandes reescritas. Cada mudança deve ser absorvível pelos times sem ruptura.",
          "Decisões documentadas e rastreáveis: nada entra no sistema sem registro. Toda mudança relevante tem origem em uma proposta, uma discussão e um histórico no changelog.",
          "Acessibilidade como critério não-negociável: um componente só é considerado pronto quando atende aos requisitos de acessibilidade do Kaizen — não é um extra opcional.",
          "Tokens como fonte da verdade: cores, espaçamento, tipografia e demais decisões visuais vivem nos tokens. Valores fixos fora dos tokens são tratados como dívida e não como padrão.",
          "Consistência acima de preferência individual: divergências se resolvem em favor do padrão já estabelecido, salvo quando há justificativa explícita para mudá-lo.",
        ]}
      />

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Papéis e responsabilidades
      </h2>
      <p className="doc-body">
        O Kaizen é mantido por um modelo colaborativo: um núcleo cuida da
        coerência do sistema, enquanto qualquer pessoa dos times de produto pode
        contribuir. Os papéis abaixo descrevem responsabilidades, não cargos.
      </p>

      <h3 className="mt-8 mb-2 text-[1rem] font-medium text-foreground">
        Mantenedores (core)
      </h3>
      <p className="doc-body text-muted-foreground">
        Equipe responsável pela saúde do sistema: revisam propostas, garantem
        aderência aos princípios, cuidam dos tokens e fundações, e respondem pela
        publicação de novas versões.
      </p>

      <h3 className="mt-8 mb-2 text-[1rem] font-medium text-foreground">
        Contribuidores
      </h3>
      <p className="doc-body text-muted-foreground">
        Designers e desenvolvedores dos times de produto que propõem novos
        componentes, padrões, correções e melhorias. Toda contribuição passa por
        revisão antes de ser incorporada.
      </p>

      <h3 className="mt-8 mb-2 text-[1rem] font-medium text-foreground">
        Aprovadores
      </h3>
      <p className="doc-body text-muted-foreground">
        Mudanças que afetam fundações, tokens ou a API pública de componentes
        exigem aprovação dos mantenedores. Para mudanças com impacto amplo, a
        decisão é tomada em conjunto e registrada publicamente.
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Ciclo de versionamento
      </h2>
      <p className="doc-body">
        O Kaizen adota{" "}
        <strong>versionamento semântico</strong> (<code>MAJOR.MINOR.PATCH</code>):
        incrementos de PATCH para correções compatíveis, MINOR para novas
        funcionalidades retrocompatíveis e MAJOR para mudanças que quebram a API
        pública. Cada versão publicada é registrada no{" "}
        <a
          href="/changelog"
          className="font-medium underline underline-offset-4"
        >
          changelog
        </a>
        , que é a fonte oficial do histórico de evolução do sistema.
      </p>

      <h3 className="mt-8 mb-2 text-[1rem] font-medium text-foreground">
        Status de maturidade dos componentes
      </h3>
      <p className="doc-body text-muted-foreground">
        Cada componente carrega um status que comunica o quanto sua API e seu
        comportamento já estão estáveis. Esse status orienta a decisão de adotar
        ou aguardar.
      </p>
      <BulletList
        items={[
          "Rascunho: em exploração. API instável, pode mudar ou ser removido sem aviso. Não recomendado para produção.",
          "Beta: utilizável e documentado, mas ainda em validação. Pequenas mudanças de API podem ocorrer com aviso prévio.",
          "Estável: API consolidada, acessibilidade validada e suporte contínuo. Mudanças incompatíveis seguem o ciclo de versão MAJOR.",
          "Descontinuado: mantido temporariamente por compatibilidade, com substituto indicado. Será removido em uma versão futura.",
        ]}
      />

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Como propor mudanças
      </h2>
      <p className="doc-body">
        Qualquer pessoa pode propor uma mudança. O processo de contribuição —
        desde a ideia até a incorporação — está descrito no guia de{" "}
        <a
          href="/get-started/contributing"
          className="font-medium underline underline-offset-4"
        >
          contribuição
        </a>
        . Para reportar um problema ou sugerir algo novo, abra uma issue no
        rastreador do projeto:
      </p>
      <BulletList
        items={[
          "Descreva o problema ou a oportunidade, não apenas a solução desejada.",
          "Aponte o impacto: quais produtos, componentes ou tokens são afetados.",
          "Sempre que possível, inclua exemplos, capturas ou um link de referência.",
        ]}
      />
      <p className="doc-body">
        <a
          href={siteConfig.issueTrackerUrl}
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          Abrir uma nova issue
        </a>
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Suporte e canais
      </h2>
      <p className="doc-body">
        Dúvidas, discussões e o código-fonte do Kaizen ficam centralizados no
        repositório oficial. É ali que a evolução do sistema acontece de forma
        aberta e rastreável.
      </p>
      <p className="doc-body">
        <a
          href={siteConfig.repositoryUrl}
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          Repositório no GitHub
        </a>
      </p>

      <Callout variant="info" title={`Versão atual: ${siteConfig.version}`}>
        O Kaizen está na versão <strong>{siteConfig.version}</strong>. Por estar
        em estágio inicial, fundações e componentes ainda evoluem com frequência
        — acompanhe o{" "}
        <a
          href="/changelog"
          className="font-medium underline underline-offset-4"
        >
          changelog
        </a>{" "}
        e o{" "}
        <a
          href="/governance/roadmap"
          className="font-medium underline underline-offset-4"
        >
          roadmap
        </a>{" "}
        para entender o que já foi entregue e o que vem a seguir.
      </Callout>
    </StandardPage>
  );
}
