import { InputField, type InputFieldState, type InputFieldType } from "@/components/ui/input";
import {
  CopyIcon,
  inputStateLabels,
  inputTypeLabels,
  PlusIcon,
  SearchIcon,
} from "@/lib/documentation/configs/input/shared";
import { cn } from "@/lib/utils";

const FIGMA_STATES: InputFieldState[] = [
  "enabled",
  "selected",
  "filled",
  "error",
  "disabled",
];

const FIGMA_TYPES: InputFieldType[] = ["basic", "text", "icon", "copy", "search"];

const iconProps = {
  iconLeft: <PlusIcon />,
  iconRight: <PlusIcon />,
  showIconLeft: true,
  showIconRight: true,
};

const actionIcons = {
  copy: <CopyIcon />,
  search: <SearchIcon />,
};

/** Estados do Type=Basic — matriz Figma $input-field. */
export function InputBasicStatePreview() {
  return (
    <div className="input-figma-states input-figma-states--doc">
      {FIGMA_STATES.map((state) => (
        <div key={state} className="input-figma-state-cell">
          <span className="input-figma-state-label">{inputStateLabels[state]}</span>
          <InputField type="basic" state={state} />
        </div>
      ))}
    </div>
  );
}

/** Types em State=Enabled — Figma. */
export function InputTypesPreview() {
  return (
    <div className="input-types-preview">
      {FIGMA_TYPES.map((type) => (
        <div key={type} className="input-type-preview-cell">
          <span className="input-figma-state-label">{inputTypeLabels[type]}</span>
          <InputField
            type={type}
            state="enabled"
            {...(type === "icon" ? iconProps : {})}
            {...(type === "copy" ? { iconRight: actionIcons.copy } : {})}
            {...(type === "search" ? { iconRight: actionIcons.search } : {})}
          />
        </div>
      ))}
    </div>
  );
}

/** Playground principal — Type=Text com afixos (caso composto mais rico). */
export function InputPlaygroundPreview() {
  return (
    <div className="input-playground-stack">
      <InputField type="text" state="enabled" prefix="R$" suffix=",00" />
      <InputField
        type="text"
        state="filled"
        value="1.250,00"
        prefix="R$"
        suffix=",00"
      />
      <InputField type="search" state="enabled" iconRight={<SearchIcon />} placeholder="Buscar…" />
    </div>
  );
}

/** Grade compacta Type × State (subset para variants). */
export function InputStateMatrixPreview({ type = "basic" }: { type?: InputFieldType }) {
  return (
    <div className="input-state-matrix">
      {FIGMA_STATES.map((state) => (
        <InputField
          key={state}
          type={type}
          state={state}
          className={cn(state === "selected" && "ring-2 ring-[var(--color-theme-border-input-selected)] ring-offset-2")}
          {...(type === "icon" ? iconProps : {})}
          {...(type === "copy" ? { iconRight: actionIcons.copy } : {})}
          {...(type === "search" ? { iconRight: actionIcons.search } : {})}
        />
      ))}
    </div>
  );
}

/** Anatomy visual — Type=Text, State=Filled. */
export function InputAnatomyVisual() {
  return (
    <div className="input-anatomy-visual">
      <InputField
        type="text"
        state="filled"
        value="Value"
        prefix="Prefixo"
        suffix="Sufixo"
        className="input-anatomy-field"
      />
    </div>
  );
}
