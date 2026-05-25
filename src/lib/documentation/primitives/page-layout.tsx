/**
 * Layout de shell do site (sidebar global + header + área main).
 *
 * Implementação: `SiteShell` em `src/app/(site)/site-shell.tsx`.
 * Mantido fora de `lib/` para evitar dependência invertida app → lib.
 *
 * Uso: envolver páginas no layout `(site)` do Next.js.
 */

export type PageLayoutProps = {
  children: React.ReactNode;
};
