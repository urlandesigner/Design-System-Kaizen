import Link from "next/link";

import type { DocBreadcrumbItem } from "@/types/documentation";

type DocBreadcrumbProps = {
  items: DocBreadcrumbItem[];
};

export function DocBreadcrumb({ items }: DocBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="doc-breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`}>
              {index > 0 ? (
                <span className="doc-breadcrumb-separator" aria-hidden>
                  /
                </span>
              ) : null}
              {item.href && !isLast ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
