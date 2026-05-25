"use client";

import { useState } from "react";

import { AccordionCell } from "@/components/ui/accordion";
import { DEFAULT_ACCORDION_COPY } from "@/lib/documentation/configs/accordion/shared";
import { cn } from "@/lib/utils";

const ITEMS = [
  { id: "payment", label: "Formas de pagamento" },
  { id: "guests", label: "Dados dos hóspedes" },
  { id: "extras", label: "Serviços extras" },
] as const;

export function AccordionInteractivePreview() {
  const [openId, setOpenId] = useState<string | null>("guests");

  return (
    <div className="accordion-playground-stack accordion-playground-stack--interactive">
      {ITEMS.map((item, index) => {
        const isOpen = openId === item.id;
        const isLast = index === ITEMS.length - 1;
        return (
          <button
            key={item.id}
            type="button"
            className="accordion-interactive-trigger w-full border-0 bg-transparent p-0 text-left"
            onClick={() => setOpenId(isOpen ? null : item.id)}
            aria-expanded={isOpen}
          >
            <AccordionCell
              state={isOpen ? "selected" : "enabled"}
              label={item.label}
              copy={DEFAULT_ACCORDION_COPY}
              divider={!isLast}
              className="pointer-events-none max-w-none"
            />
          </button>
        );
      })}
    </div>
  );
}
