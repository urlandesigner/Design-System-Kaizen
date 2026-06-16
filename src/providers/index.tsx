"use client";

import type { ReactNode } from "react";

import { CopyFeedbackProvider } from "@/components/copy-feedback-provider";
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
        <CopyFeedbackProvider />
        <NavigationProvider
          defaultExpandedSections={{
            foundations: false,
            components: true,
            patterns: false,
            templates: false,
            accessibility: false,
          }}
        >
          {children}
        </NavigationProvider>
      </KaizenThemeProvider>
    </ThemeProvider>
  );
}
