import { cn } from "@/lib/utils";

type DocPlaygroundSceneProps = {
  children: React.ReactNode;
  contextLabel?: string;
  contextValue?: string;
  className?: string;
};

/** Cena compacta para dar contexto ao live preview (playground). */
export function DocPlaygroundScene({
  children,
  contextLabel = "Valor",
  contextValue,
  className,
}: DocPlaygroundSceneProps) {
  return (
    <div className={cn("doc-playground-scene", className)}>
      {contextValue ? (
        <div className="doc-playground-context">
          <span className="doc-playground-context-label">{contextLabel}</span>
          <code className="doc-playground-context-value">{contextValue}</code>
        </div>
      ) : null}
      {children}
    </div>
  );
}
