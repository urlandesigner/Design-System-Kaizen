import { AccordionCell, type AccordionCellState } from "@/components/ui/accordion";
import { accordionStateLabels } from "@/lib/documentation/configs/accordion/shared";

const FIGMA_STATES: AccordionCellState[] = [
  "enabled",
  "hovered",
  "selected",
  "disabled",
];

export function AccordionStatePreview() {
  return (
    <div className="accordion-figma-states accordion-figma-states--doc">
      {FIGMA_STATES.map((state) => (
        <div key={state} className="accordion-figma-state-cell">
          <span className="accordion-figma-state-label">{accordionStateLabels[state]}</span>
          <AccordionCell state={state} />
        </div>
      ))}
    </div>
  );
}

export function AccordionWithoutDividerPreview() {
  return (
    <div className="accordion-figma-states accordion-figma-states--doc accordion-figma-states--compact">
      <AccordionCell state="enabled" divider={false} />
      <AccordionCell state="selected" divider={false} />
    </div>
  );
}

export function AccordionPlaygroundPreview() {
  return (
    <div className="accordion-playground-stack">
      <AccordionCell state="enabled" label="Política de cancelamento" />
      <AccordionCell
        state="selected"
        label="Detalhes da reserva"
        copy="Horário de check-in às 15h. Documento com foto obrigatório na recepção."
      />
      <AccordionCell state="disabled" label="Indisponível no momento" />
    </div>
  );
}

export function AccordionAnatomyVisual() {
  return (
    <div className="accordion-anatomy-visual">
      <AccordionCell
        state="selected"
        label="Accordion label"
        className="accordion-anatomy-control"
      />
    </div>
  );
}

export function AccordionListPreview() {
  return (
    <div className="accordion-list-preview">
      <AccordionCell state="enabled" label="Pagamento" />
      <AccordionCell state="selected" label="Hóspedes" />
      <AccordionCell state="enabled" label="Extras" divider={false} />
    </div>
  );
}
