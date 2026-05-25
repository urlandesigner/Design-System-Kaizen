"use client";

import {
  defaultKaizenTheme,
  kaizenThemes,
  type KaizenThemeId,
} from "@/config/kaizen-themes";
import { useKaizenThemeOptional } from "@/providers/kaizen-theme-provider";
import { cn } from "@/lib/utils";

type KaizenThemeSwitcherProps = {
  className?: string;
  size?: "sm" | "md";
  variant?: "default" | "segmented";
  value?: KaizenThemeId;
  onChange?: (theme: KaizenThemeId) => void;
};

export function KaizenThemeSwitcher({
  className,
  size = "md",
  variant = "default",
  value,
  onChange,
}: KaizenThemeSwitcherProps) {
  const global = useKaizenThemeOptional();
  const theme = value ?? global?.theme ?? defaultKaizenTheme;
  const setTheme = onChange ?? global?.setTheme;

  return (
    <div
      className={cn(
        "kaizen-theme-switcher",
        `kaizen-theme-switcher--${size}`,
        variant === "segmented" && "kaizen-theme-switcher--segmented",
        className,
      )}
      role="group"
      aria-label="Tema do Design System"
    >
      {kaizenThemes.map((item) => (
        <button
          key={item.id}
          type="button"
          aria-pressed={theme === item.id}
          disabled={!setTheme}
          onClick={() => setTheme?.(item.id)}
          className={cn(
            "kaizen-theme-switcher-btn",
            theme === item.id && "kaizen-theme-switcher-btn--active",
          )}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
