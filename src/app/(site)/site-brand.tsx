import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

export function SiteBrand() {
  return (
    <Link href="/" className="site-brand">
      <Image
        src="/images/logo.svg"
        alt={siteConfig.name}
        width={86}
        height={32}
        priority
        className="site-brand-logo"
      />
    </Link>
  );
}
