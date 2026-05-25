import { mainNavigation } from "@/config/navigation";
import type { NavItem } from "@/types/navigation";

export function flattenNavItems(items: NavItem[]): NavItem[] {
  return items.flatMap((item) =>
    item.items ? [...flattenNavItems(item.items)] : [item],
  );
}

export function navItemMatchesPath(pathname: string, item: NavItem): boolean {
  if (item.href) {
    if (pathname === item.href) return true;
    if (item.href !== "/" && pathname.startsWith(`${item.href}/`)) return true;
  }
  return item.items?.some((child) => navItemMatchesPath(pathname, child)) ?? false;
}

export function getAllDocRoutes(): string[] {
  const routes = mainNavigation.flatMap((section) =>
    flattenNavItems(section.items)
      .map((item) => item.href)
      .filter((href): href is string => Boolean(href)),
  );

  return Array.from(new Set(routes));
}

export function isActiveNavItem(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Ativa o hub da família quando o usuário está em páginas filhas (ex.: /components/button/filled). */
export function isSidebarNavActive(pathname: string, href: string): boolean {
  if (pathname === href) return true;
  if (href !== "/" && pathname.startsWith(`${href}/`)) return true;
  return false;
}

export function isTopbarNavActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  if (pathname === href) {
    return true;
  }

  const sectionRoots = [
    "/foundations",
    "/components",
    "/patterns",
    "/templates",
    "/accessibility",
    "/changelog",
  ] as const;

  if (sectionRoots.includes(href as (typeof sectionRoots)[number])) {
    return pathname.startsWith(`${href}/`);
  }

  return false;
}
