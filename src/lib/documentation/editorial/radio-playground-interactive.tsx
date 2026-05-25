"use client";

import { useState } from "react";

import { Radio } from "@/components/ui/radio";
import { cn } from "@/lib/utils";

const OPTIONS = [
  { id: "credit", label: "Cartão de crédito" },
  { id: "pix", label: "PIX" },
  { id: "boleto", label: "Boleto" },
] as const;

export function RadioInteractivePreview() {
  const [selected, setSelected] = useState<string>("credit");

  return (
    <fieldset className="radio-playground-stack radio-playground-stack--interactive">
      <legend className="sr-only">Forma de pagamento</legend>
      {OPTIONS.map((option) => {
        const isSelected = selected === option.id;
        return (
          <label
            key={option.id}
            className={cn(
              "radio-interactive-option flex cursor-pointer items-center rounded-lg px-2 py-1 transition-colors",
              "hover:bg-surface-raised/60",
            )}
          >
            <input
              type="radio"
              name="payment-method"
              value={option.id}
              checked={isSelected}
              onChange={() => setSelected(option.id)}
              className="sr-only"
            />
            <Radio
              mode="dark"
              state={isSelected ? "selected" : "enabled"}
              label={option.label}
              className="pointer-events-none"
            />
          </label>
        );
      })}
    </fieldset>
  );
}
