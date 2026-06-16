"use client";

import { useMemo, useState } from "react";

import { CopyInlineButton } from "@/components/copy-inline-button";
import { AnatomyBlock } from "@/lib/documentation/editorial/anatomy-block";
import {
  PREVIEW_TABS,
  PreviewTabs,
  showcasePanelId,
  showcaseTabId,
  type PreviewTabId,
} from "@/lib/documentation/primitives/preview-tabs";
import type {
  AnatomyNoteConfig,
  AnatomyPartConfig,
} from "@/lib/documentation/types/component-doc";
import { cn } from "@/lib/utils";

const SHOWCASE_ID = "doc-showcase";

export type DocShowcaseProps = {
  children: React.ReactNode;
  align?: "start" | "center";
  code?: string;
  anatomy?: {
    parts: AnatomyPartConfig[];
    notes: AnatomyNoteConfig[];
  };
};

export function DocShowcase({
  children,
  align = "center",
  code,
  anatomy,
}: DocShowcaseProps) {
  const [activeTab, setActiveTab] = useState<PreviewTabId>("preview");

  const availableTabs = useMemo(
    () =>
      PREVIEW_TABS.filter((tab) => {
        if (tab.id === "code") return Boolean(code);
        if (tab.id === "anatomy") return Boolean(anatomy);
        return true;
      }),
    [anatomy, code],
  );

  const resolvedTab = availableTabs.some((tab) => tab.id === activeTab)
    ? activeTab
    : "preview";

  return (
    <figure className="doc-showcase">
      <PreviewTabs
        tabs={availableTabs}
        activeTab={resolvedTab}
        onTabChange={setActiveTab}
        panelIdPrefix={SHOWCASE_ID}
      />

      {resolvedTab === "preview" ? (
        <div
          id={showcasePanelId(SHOWCASE_ID, "preview")}
          role="tabpanel"
          aria-labelledby={showcaseTabId(SHOWCASE_ID, "preview")}
          className={cn(
            "doc-showcase-stage",
            align === "center" && "doc-showcase-stage--center",
          )}
        >
          <div className="doc-showcase-content">{children}</div>
        </div>
      ) : null}

      {resolvedTab === "code" && code ? (
        <div
          id={showcasePanelId(SHOWCASE_ID, "code")}
          role="tabpanel"
          aria-labelledby={showcaseTabId(SHOWCASE_ID, "code")}
          className="doc-showcase-code"
        >
          <div className="doc-showcase-code-toolbar">
            <CopyInlineButton value={code} variant="ghost" />
          </div>
          <pre className="doc-showcase-code-pre">
            <code>{code}</code>
          </pre>
        </div>
      ) : null}

      {resolvedTab === "anatomy" && anatomy ? (
        <div
          id={showcasePanelId(SHOWCASE_ID, "anatomy")}
          role="tabpanel"
          aria-labelledby={showcaseTabId(SHOWCASE_ID, "anatomy")}
          className="doc-showcase-anatomy"
        >
          <AnatomyBlock parts={anatomy.parts} notes={anatomy.notes} />
        </div>
      ) : null}
    </figure>
  );
}
