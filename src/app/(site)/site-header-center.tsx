"use client";

import { usePathname } from "next/navigation";

import { HeaderKaizenTheme } from "@/app/(site)/header-kaizen-theme";

function isComponentDocPath(pathname: string) {
  return pathname.startsWith("/components/") && pathname !== "/components";
}

export function SiteHeaderCenter() {
  const pathname = usePathname();

  if (!isComponentDocPath(pathname)) {
    return null;
  }

  return (
    <div className="site-header-center">
      <HeaderKaizenTheme />
    </div>
  );
}
