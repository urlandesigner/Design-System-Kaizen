"use client";

import { SidebarNavItem } from "@/lib/documentation/editorial/sidebar-nav-item";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/navigation";

type SidebarGroupProps = {
  title: string;
  sectionId: string;
  items: NavItem[];
  pathname: string;
  isExpanded: boolean;
  isSectionActive: boolean;
  onToggle: () => void;
  showDivider?: boolean;
};

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className={cn(
        "size-3 shrink-0 text-muted-foreground/70 transition-transform duration-150",
        expanded && "rotate-180",
      )}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SidebarGroup({
  title,
  items,
  pathname,
  isExpanded,
  isSectionActive,
  onToggle,
  showDivider = false,
}: SidebarGroupProps) {
  return (
    <li className={cn(showDivider && "sidebar-group sidebar-group--divider")}>
      <button
        type="button"
        aria-expanded={isExpanded}
        onClick={onToggle}
        className={cn(
          "sidebar-section-trigger",
          isSectionActive && "sidebar-section-trigger--active",
        )}
      >
        <span>{title}</span>
        <ChevronIcon expanded={isExpanded} />
      </button>
      <div className="sidebar-group-panel" data-state={isExpanded ? "open" : "closed"}>
        <ul className="sidebar-group-items">
          {items.map((item) => (
            <SidebarNavItem key={item.href ?? item.title} item={item} pathname={pathname} />
          ))}
        </ul>
      </div>
    </li>
  );
}
