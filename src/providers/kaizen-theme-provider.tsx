"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  defaultKaizenTheme,
  isKaizenThemeId,
  kaizenThemes,
  type KaizenThemeId,
} from "@/config/kaizen-themes";

type KaizenThemeContextValue = {
  theme: KaizenThemeId;
  setTheme: (theme: KaizenThemeId) => void;
  themes: typeof kaizenThemes;
};

const KaizenThemeContext = createContext<KaizenThemeContextValue | null>(null);

const STORAGE_KEY = "kaizen-doc-theme";

type KaizenThemeProviderProps = {
  children: ReactNode;
  /** Quando false, não altera data-theme no document (ex.: preview isolado). */
  applyToDocument?: boolean;
  defaultTheme?: KaizenThemeId;
};

export function KaizenThemeProvider({
  children,
  applyToDocument = true,
  defaultTheme = defaultKaizenTheme,
}: KaizenThemeProviderProps) {
  const [theme, setThemeState] = useState<KaizenThemeId>(defaultTheme);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && isKaizenThemeId(stored)) {
      setThemeState(stored);
    }
  }, []);

  const setTheme = useCallback((next: KaizenThemeId) => {
    setThemeState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  useEffect(() => {
    if (!applyToDocument) return;
    document.documentElement.dataset.theme = theme;
  }, [applyToDocument, theme]);

  const value = useMemo(
    () => ({ theme, setTheme, themes: kaizenThemes }),
    [theme, setTheme],
  );

  return (
    <KaizenThemeContext.Provider value={value}>{children}</KaizenThemeContext.Provider>
  );
}

export function useKaizenTheme(): KaizenThemeContextValue {
  const context = useContext(KaizenThemeContext);
  if (!context) {
    throw new Error("useKaizenTheme must be used within KaizenThemeProvider");
  }
  return context;
}

export function useKaizenThemeOptional(): KaizenThemeContextValue | null {
  return useContext(KaizenThemeContext);
}
