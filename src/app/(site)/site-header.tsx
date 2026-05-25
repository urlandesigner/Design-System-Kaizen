import { HeaderActions } from "@/app/(site)/header-actions";
import { SiteBrand } from "@/app/(site)/site-brand";
import { SiteHeaderCenter } from "@/app/(site)/site-header-center";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <SiteBrand />
        <SiteHeaderCenter />
        <HeaderActions />
      </div>
    </header>
  );
}
