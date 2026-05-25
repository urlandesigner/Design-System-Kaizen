import { Checkbox, type CheckboxMode, type CheckboxState } from "@/components/ui/checkbox";
import {
  checkboxModeLabels,
  checkboxStateLabels,
} from "@/lib/documentation/configs/checkbox/shared";
import { cn } from "@/lib/utils";

const FIGMA_STATES: CheckboxState[] = [
  "enabled",
  "hovered",
  "selected",
  "indeterminate",
  "disabled",
];

const FIGMA_MODES: CheckboxMode[] = ["dark", "light"];

/** Estados — Mode=Dark (Figma $checkbox). */
export function CheckboxDarkStatePreview() {
  return (
    <div className="checkbox-figma-states checkbox-figma-states--doc">
      {FIGMA_STATES.map((state) => (
        <div key={state} className="checkbox-figma-state-cell">
          <span className="checkbox-figma-state-label">{checkboxStateLabels[state]}</span>
          <Checkbox mode="dark" state={state} />
        </div>
      ))}
    </div>
  );
}

/** Estados — Mode=Light em superfície escura. */
export function CheckboxLightStatePreview() {
  return (
    <div className="checkbox-preview-surface checkbox-preview-surface--inverse">
      <div className="checkbox-figma-states checkbox-figma-states--doc">
        {FIGMA_STATES.map((state) => (
          <div key={state} className="checkbox-figma-state-cell checkbox-figma-state-cell--inverse">
            <span className="checkbox-figma-state-label checkbox-figma-state-label--inverse">
              {checkboxStateLabels[state]}
            </span>
            <Checkbox mode="light" state={state} />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Mode × State — matriz resumida. */
export function CheckboxModeMatrixPreview() {
  return (
    <div className="checkbox-mode-matrix">
      {FIGMA_MODES.map((mode) => (
        <div key={mode} className="checkbox-mode-row">
          <span className="checkbox-mode-row-label">{checkboxModeLabels[mode]}</span>
          <div
            className={cn(
              "checkbox-figma-states checkbox-figma-states--doc checkbox-figma-states--inline",
              mode === "light" &&
                "checkbox-preview-surface checkbox-preview-surface--inverse checkbox-preview-surface--inline",
            )}
          >
            {FIGMA_STATES.map((state) => (
              <Checkbox key={`${mode}-${state}`} mode={mode} state={state} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Playground — Enabled, Selected, Indeterminated. */
export function CheckboxPlaygroundPreview() {
  return (
    <div className="checkbox-playground-stack">
      <Checkbox mode="dark" state="enabled" label="Aceito os termos" />
      <Checkbox mode="dark" state="selected" label="Notificações por e-mail" />
      <Checkbox mode="dark" state="indeterminate" label="Selecionar todos" />
    </div>
  );
}

/** Anatomy — State=Selected, Mode=Dark. */
export function CheckboxAnatomyVisual() {
  return (
    <div className="checkbox-anatomy-visual">
      <Checkbox mode="dark" state="selected" label="Label" className="checkbox-anatomy-control" />
    </div>
  );
}

/** Sem label — checkboxLabel=false. */
export function CheckboxWithoutLabelPreview() {
  return (
    <div className="checkbox-figma-states checkbox-figma-states--doc checkbox-figma-states--compact">
      <Checkbox mode="dark" state="enabled" showLabel={false} />
      <Checkbox mode="dark" state="selected" showLabel={false} />
      <Checkbox mode="dark" state="disabled" showLabel={false} />
    </div>
  );
}
