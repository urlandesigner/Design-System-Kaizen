import { Badge, type BadgeSize, type BadgeType } from "@/components/ui/badge";
import {
  badgeSizeLabels,
  badgeTypeLabels,
  FIGMA_BADGE_TYPES,
} from "@/lib/documentation/configs/badge/shared";

/** Type × Size=Default — matriz Figma $badge. */
export function BadgeTypeDefaultPreview() {
  return (
    <div className="badge-figma-grid badge-figma-grid--doc">
      {FIGMA_BADGE_TYPES.map((type) => (
        <div key={type} className="badge-figma-cell">
          <span className="badge-figma-cell-label">{badgeTypeLabels[type]}</span>
          <Badge type={type} size="default" />
        </div>
      ))}
    </div>
  );
}

/** Type × Size=Compact. */
export function BadgeTypeCompactPreview() {
  return (
    <div className="badge-figma-grid badge-figma-grid--doc">
      {FIGMA_BADGE_TYPES.map((type) => (
        <div key={type} className="badge-figma-cell">
          <span className="badge-figma-cell-label">{badgeTypeLabels[type]}</span>
          <Badge type={type} size="compact" />
        </div>
      ))}
    </div>
  );
}

/** Size — Brand. */
export function BadgeSizePreview({ type = "brand" }: { type?: BadgeType }) {
  return (
    <div className="badge-size-preview">
      {(["default", "compact"] as BadgeSize[]).map((size) => (
        <div key={size} className="badge-figma-cell">
          <span className="badge-figma-cell-label">{badgeSizeLabels[size]}</span>
          <Badge type={type} size={size} />
        </div>
      ))}
    </div>
  );
}

/** Sem leftIcon. */
export function BadgeWithoutLeftIconPreview() {
  return (
    <div className="badge-inline-preview">
      <Badge type="green" leftIcon={false} value="Confirmado" />
      <Badge type="amber" leftIcon={false} value="Pendente" />
    </div>
  );
}

/** Sem closeButton. */
export function BadgeWithoutClosePreview() {
  return (
    <div className="badge-inline-preview">
      <Badge type="blue" closeButton={false} value="Novo" />
      <Badge type="purple" closeButton={false} value="Beta" />
    </div>
  );
}

/** Playground — tipos semânticos. */
export function BadgePlaygroundPreview() {
  return (
    <div className="badge-playground-stack">
      <Badge type="brand" value="Premium" />
      <Badge type="green" value="Ativo" />
      <Badge type="red" value="Cancelado" />
      <Badge type="amber" value="Aguardando" />
    </div>
  );
}

/** Anatomy — Type=Brand, Size=Default. */
export function BadgeAnatomyVisual() {
  return (
    <div className="badge-anatomy-visual">
      <Badge type="brand" size="default" value="Value" className="badge-anatomy-control" />
    </div>
  );
}
