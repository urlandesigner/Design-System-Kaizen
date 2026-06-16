import { Callout } from "@/lib/documentation/editorial/callout";
import { DoDont } from "@/lib/documentation/editorial/do-dont";
import { flatTokens } from "@/lib/tokens";
import { contrastForPair, type WcagLevel } from "@/lib/tokens/contrast";

const cssVarByName = new Map(flatTokens.map((t) => [t.name, t.cssVar]));
function cssVar(name: string): string {
  return cssVarByName.get(name) ?? "--color-kz-neutral-900";
}
function shortName(name: string): string {
  return name.replace(/^color-theme\//, "");
}

const LEVEL_COLOR: Record<WcagLevel, string> = {
  AAA: "#15803d",
  AA: "#15803d",
  "AA Large": "#b45309",
  Fail: "#b91c1c",
};

/* ----------------------------- Contrast matrix ---------------------------- */

type TokenRef = { token: string; label: string };

function ContrastCell({ fg, bg }: { fg: string; bg: string }) {
  const result = contrastForPair(fg, bg);
  if (!result) {
    return <td className="px-3 py-2 text-center text-[0.75rem] text-muted-foreground">—</td>;
  }
  const color = LEVEL_COLOR[result.level];
  return (
    <td className="px-3 py-3 align-top">
      <div className="flex flex-col items-center gap-1.5">
        <div
          className="flex h-11 w-full min-w-[3.5rem] items-center justify-center rounded-md border border-[var(--kz-line-subtle)]"
          style={{ background: `var(${cssVar(bg)})` }}
        >
          <span
            className="text-[0.95rem] font-semibold leading-none"
            style={{ color: `var(${cssVar(fg)})` }}
          >
            Aa
          </span>
        </div>
        <span className="font-mono text-[0.7rem] text-muted-foreground">
          {result.ratioLabel}
        </span>
        <span
          className="rounded-full px-2 py-0.5 text-[0.625rem] font-semibold tracking-[0.04em] uppercase"
          style={{ color, background: `color-mix(in oklab, ${color} 12%, transparent)` }}
        >
          {result.level}
        </span>
      </div>
    </td>
  );
}

export function ContrastMatrix({
  caption,
  texts,
  surfaces,
}: {
  caption: string;
  texts: TokenRef[];
  surfaces: TokenRef[];
}) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            <th className="px-3 py-2 text-[0.7rem] font-medium tracking-[0.08em] text-muted-foreground uppercase">
              Texto \ Superfície
            </th>
            {surfaces.map((s) => (
              <th
                key={s.token}
                className="px-3 py-2 text-center text-[0.7rem] font-medium tracking-[-0.01em] text-foreground"
              >
                <span className="block">{s.label}</span>
                <span className="font-mono text-[0.65rem] font-normal text-muted-foreground">
                  {shortName(s.token)}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {texts.map((t) => (
            <tr key={t.token} className="border-t border-[var(--kz-line-subtle)]">
              <th className="px-3 py-3 text-left align-middle">
                <span className="block text-[0.8125rem] font-medium text-foreground">
                  {t.label}
                </span>
                <span className="font-mono text-[0.65rem] text-muted-foreground">
                  {shortName(t.token)}
                </span>
              </th>
              {surfaces.map((s) => (
                <ContrastCell key={s.token} fg={t.token} bg={s.token} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* --------------------------- Semantic usage table -------------------------- */

type UsageRow = { token: string; uso: string };

function UsageSwatch({ token }: { token: string }) {
  return (
    <span
      className="inline-block size-5 shrink-0 rounded-[6px] border border-[var(--kz-line-subtle)] align-middle"
      style={{ background: `var(${cssVar(token)})` }}
      aria-hidden
    />
  );
}

export function SemanticUsageTable({ rows }: { rows: UsageRow[] }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-[var(--kz-line)]">
            <th className="px-3 py-2 text-[0.7rem] font-medium tracking-[0.08em] text-muted-foreground uppercase">
              Token semântico
            </th>
            <th className="px-3 py-2 text-[0.7rem] font-medium tracking-[0.08em] text-muted-foreground uppercase">
              Quando usar
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.token} className="border-b border-[var(--kz-line-subtle)]">
              <td className="px-3 py-3 align-top">
                <span className="flex items-center gap-2.5">
                  <UsageSwatch token={row.token} />
                  <span className="font-mono text-[0.75rem] text-foreground">
                    {shortName(row.token)}
                  </span>
                </span>
              </td>
              <td className="px-3 py-3 align-top text-[0.8125rem] leading-[1.55] text-muted-foreground">
                {row.uso}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------ Convention note ---------------------------- */

export function ColorNamingCallout() {
  return (
    <Callout variant="warning" title="Convenção -dark / -light">
      Os sufixos <code>-dark</code> e <code>-light</code> descrevem a{" "}
      <strong>cor do token</strong>, não o tema da interface. Tokens{" "}
      <code>*-dark</code> são tons escuros — use sobre{" "}
      <strong>superfícies claras</strong>. Tokens <code>*-light</code> são tons
      claros (ex.: branco) — use sobre <strong>superfícies escuras ou de
      marca</strong>. Inverter os dois resulta em texto ilegível.
    </Callout>
  );
}

/* ------------------------------- Do / Don't -------------------------------- */

function MiniSurface({
  bg,
  fg,
  children,
}: {
  bg: string;
  fg: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex h-20 items-center justify-center rounded-lg border border-[var(--kz-line-subtle)]"
      style={{ background: `var(${cssVar(bg)})` }}
    >
      <span
        className="text-[0.95rem] font-semibold"
        style={{ color: `var(${cssVar(fg)})` }}
      >
        {children}
      </span>
    </div>
  );
}

export function ColorDoDont() {
  return (
    <DoDont
      doItems={[
        {
          label: "Use tokens semânticos na UI",
          description:
            "Aplique color-theme/* (surface, text, border). Eles carregam intenção e adaptam-se a tema e contexto.",
          example: (
            <MiniSurface bg="color-theme/surface/primary" fg="color-theme/text/primary-dark">
              Texto sobre surface
            </MiniSurface>
          ),
        },
        {
          label: "Garanta contraste AA+ em texto",
          description:
            "Texto normal precisa de ao menos 4.5:1. Use text/primary-dark ou secondary-dark sobre superfícies claras.",
          example: (
            <MiniSurface bg="color-theme/surface/primary" fg="color-theme/text/secondary-dark">
              Contraste 8:1 · AAA
            </MiniSurface>
          ),
        },
      ]}
      dontItems={[
        {
          label: "Não use cor clara sobre fundo claro",
          description:
            "text/*-light é branco — sobre surface/primary fica ilegível (1:1). Respeite a convenção -dark/-light.",
          example: (
            <MiniSurface bg="color-theme/surface/primary" fg="color-theme/text/primary-light">
              Ilegível
            </MiniSurface>
          ),
        },
        {
          label: "Não use primitivas direto no produto",
          description:
            "color-kz/* são a fonte das semânticas, não para consumo direto — quebram temas e a intenção do token.",
          example: (
            <MiniSurface bg="color-kz/neutral/900" fg="color-kz/neutral/50">
              color-kz/* cru
            </MiniSurface>
          ),
        },
      ]}
    />
  );
}
