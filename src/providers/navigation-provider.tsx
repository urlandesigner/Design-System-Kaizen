"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type NavigationContextValue = {
  expandedSections: Record<string, boolean>;
  toggleSection: (sectionId: string) => void;
  setSectionExpanded: (sectionId: string, expanded: boolean) => void;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

type NavigationProviderProps = {
  children: ReactNode;
  defaultExpandedSections?: Record<string, boolean>;
};

export function NavigationProvider({
  children,
  defaultExpandedSections = {},
}: NavigationProviderProps) {
  const [expandedSections, setExpandedSections] = useState(
    defaultExpandedSections,
  );

  const toggleSection = useCallback((sectionId: string) => {
    setExpandedSections((current) =>
      current[sectionId] ? { [sectionId]: false } : { [sectionId]: true },
    );
  }, []);

  const setSectionExpanded = useCallback(
    (sectionId: string, expanded: boolean) => {
      setExpandedSections((current) =>
        expanded ? { [sectionId]: true } : { ...current, [sectionId]: false },
      );
    },
    [],
  );

  const value = useMemo(
    () => ({
      expandedSections,
      toggleSection,
      setSectionExpanded,
    }),
    [expandedSections, toggleSection, setSectionExpanded],
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }

  return context;
}
