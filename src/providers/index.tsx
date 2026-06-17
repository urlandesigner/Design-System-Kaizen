"use client";

import type { ReactNode } from "react";

import { KaizenThemeProvider } from "@/providers/kaizen-theme-provider";
import { NavigationProvider } from "@/providers/navigation-provider";
import { ThemeProvider } from "@/providers/theme-provider";

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <KaizenThemeProvider>
      <NavigationProvider>{children}</NavigationProvider>
      </KaizenThemeProvider>
    </ThemeProvider>
  );
}
