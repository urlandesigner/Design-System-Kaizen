"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import type { DocTocItem } from "@/types/documentation";

type TOCProps = {
  items: DocTocItem[];
  label?: string;
};

export function TOC({ items, label = "Nesta página" }: TOCProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 1],
      },
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label={label} className="doc-toc">
      <p className="doc-toc-label">{label}</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              data-active={activeId === item.id}
              className={cn("doc-toc-link")}
              onClick={() => setActiveId(item.id)}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
