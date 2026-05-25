"use client";

import { cn } from "@/lib/utils";

export type PreviewTabId = "preview" | "code" | "anatomy";

export type PreviewTab = {
  id: PreviewTabId;
  label: string;
};

export const PREVIEW_TABS: PreviewTab[] = [
  { id: "preview", label: "Preview" },
  { id: "code", label: "Code" },
  { id: "anatomy", label: "Anatomy" },
];

export type PreviewTabsProps = {
  tabs: PreviewTab[];
  activeTab: PreviewTabId;
  onTabChange: (tab: PreviewTabId) => void;
  panelIdPrefix?: string;
};

export function showcaseTabId(prefix: string, tabId: PreviewTabId) {
  return `${prefix}-tab-${tabId}`;
}

export function showcasePanelId(prefix: string, tabId: PreviewTabId) {
  return `${prefix}-panel-${tabId}`;
}

export function PreviewTabs({
  tabs,
  activeTab,
  onTabChange,
  panelIdPrefix = "doc-showcase",
}: PreviewTabsProps) {
  return (
    <div className="doc-showcase-toolbar" role="tablist" aria-label="Modos de visualização">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          id={showcaseTabId(panelIdPrefix, tab.id)}
          aria-selected={activeTab === tab.id}
          aria-controls={showcasePanelId(panelIdPrefix, tab.id)}
          className={cn(
            "doc-showcase-tab",
            activeTab === tab.id && "doc-showcase-tab--active",
          )}
          tabIndex={activeTab === tab.id ? 0 : -1}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
