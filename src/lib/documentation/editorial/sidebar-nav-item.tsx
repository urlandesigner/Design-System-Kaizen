"use client";

import Link from "next/link";

import { isSidebarNavActive } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/navigation";

type SidebarNavItemProps = {
  item: NavItem;
  pathname: string;
  depth?: number;
};

export function SidebarNavItem({ item, pathname, depth = 0 }: SidebarNavItemProps) {
  if (item.items?.length) {
    return (
      <li className={cn(depth > 0 && "sidebar-nav-nested-group")}>
        <span
          className={cn(
            "sidebar-link sidebar-link--group",
            depth > 0 && "sidebar-link--nested-group",
          )}
        >
          {item.title}
        </span>
        <ul className={cn("sidebar-nested-items", depth === 0 && "sidebar-nested-items--button")}>
          {item.items.map((child) => (
            <SidebarNavItem key={child.href ?? child.title} item={child} pathname={pathname} depth={depth + 1} />
          ))}
        </ul>
      </li>
    );
  }

  if (!item.href) return null;

  const isOverview = item.title === "Overview";
  const isActive = isOverview ? pathname === item.href : isSidebarNavActive(pathname, item.href);

  return (
    <li>
      <Link
        href={item.href}
        aria-current={isActive ? "page" : undefined}
        className={cn(
          "sidebar-link",
          depth > 0 && "sidebar-link--nested",
          isActive && "sidebar-link--active",
        )}
      >
        {item.title}
      </Link>
    </li>
  );
}
