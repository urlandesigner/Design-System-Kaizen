import { Radio, type RadioMode, type RadioState } from "@/components/ui/radio";
import {
  radioModeLabels,
  radioStateLabels,
} from "@/lib/documentation/configs/radio/shared";
import { cn } from "@/lib/utils";

const FIGMA_STATES: RadioState[] = [
  "enabled",
  "hovered",
  "selected",
  "disabled",
];

const FIGMA_MODES: RadioMode[] = ["dark", "light"];

export function RadioDarkStatePreview() {
  return (
    <div className="radio-figma-states radio-figma-states--doc">
      {FIGMA_STATES.map((state) => (
        <div key={state} className="radio-figma-state-cell">
          <span className="radio-figma-state-label">{radioStateLabels[state]}</span>
          <Radio mode="dark" state={state} />
        </div>
      ))}
    </div>
  );
}

export function RadioLightStatePreview() {
  return (
    <div className="radio-preview-surface radio-preview-surface--inverse">
      <div className="radio-figma-states radio-figma-states--doc">
        {FIGMA_STATES.map((state) => (
          <div key={state} className="radio-figma-state-cell radio-figma-state-cell--inverse">
            <span className="radio-figma-state-label radio-figma-state-label--inverse">
              {radioStateLabels[state]}
            </span>
            <Radio mode="light" state={state} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function RadioModeMatrixPreview() {
  return (
    <div className="radio-mode-matrix">
      {FIGMA_MODES.map((mode) => (
        <div key={mode} className="radio-mode-row">
          <span className="radio-mode-row-label">{radioModeLabels[mode]}</span>
          <div
            className={cn(
              "radio-figma-states radio-figma-states--doc radio-figma-states--inline",
              mode === "light" &&
                "radio-preview-surface radio-preview-surface--inverse radio-preview-surface--inline",
            )}
          >
            {FIGMA_STATES.map((state) => (
              <Radio key={`${mode}-${state}`} mode={mode} state={state} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function RadioPlaygroundPreview() {
  return (
    <div className="radio-playground-stack">
      <Radio mode="dark" state="selected" label="Cartão de crédito" />
      <Radio mode="dark" state="enabled" label="PIX" />
      <Radio mode="dark" state="enabled" label="Boleto" />
    </div>
  );
}

export function RadioAnatomyVisual() {
  return (
    <div className="radio-anatomy-visual">
      <Radio mode="dark" state="selected" label="Label" className="radio-anatomy-control" />
    </div>
  );
}

export function RadioWithoutLabelPreview() {
  return (
    <div className="radio-figma-states radio-figma-states--doc radio-figma-states--compact">
      <Radio mode="dark" state="enabled" showLabel={false} />
      <Radio mode="dark" state="selected" showLabel={false} />
      <Radio mode="dark" state="disabled" showLabel={false} />
    </div>
  );
}
