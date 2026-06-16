"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { SiteFooter } from "@/app/(site)/site-footer";
import { SiteHeader } from "@/app/(site)/site-header";
import { SidebarGroup } from "@/lib/documentation/editorial/sidebar-group";
import {
  mainNavigation,
  sidebarPrimaryLinks,
} from "@/config/navigation";
import { isSidebarNavActive, navItemMatchesPath } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/providers/navigation-provider";

type SiteShellProps = {
  children: React.ReactNode;
};

function toSectionId(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const { expandedSections, toggleSection, setSectionExpanded } =
    useNavigation();

  useEffect(() => {
    for (const section of mainNavigation) {
      const sectionId = toSectionId(section.title);
      const isInSection = section.items.some((item) =>
        navItemMatchesPath(pathname, item),
      );

      if (isInSection) {
        setSectionExpanded(sectionId, true);
      }
    }
  }, [pathname, setSectionExpanded]);

  return (
    <div className="site-shell">
      <SiteHeader />

      <div className="site-shell-body">
        <aside className="site-sidebar">
          <nav aria-label="Documentação" className="site-sidebar-nav">
            <ul className="sidebar-primary-links">
              {sidebarPrimaryLinks.map((item) => {
                if (!item.href) return null;
                const isActive = isSidebarNavActive(pathname, item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "sidebar-link sidebar-link--primary",
                        isActive && "sidebar-link--active",
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="sidebar-groups">
              {mainNavigation.map((section, index) => {
                const sectionId = toSectionId(section.title);
                const isExpanded = expandedSections[sectionId] ?? false;
                const sectionActive = section.items.some((item) =>
                  navItemMatchesPath(pathname, item),
                );

                return (
                  <SidebarGroup
                    key={section.title}
                    title={section.title}
                    sectionId={sectionId}
                    items={section.items}
                    pathname={pathname}
                    isExpanded={isExpanded}
                    isSectionActive={sectionActive}
                    showDivider={index > 0}
                    onToggle={() => toggleSection(sectionId)}
                  />
                );
              })}
            </ul>
          </nav>
        </aside>

        <main className="site-main">
          <div className="site-main-inner site-main-inner--doc">
            {children}
            <SiteFooter />
          </div>
        </main>
      </div>
    </div>
  );
}
