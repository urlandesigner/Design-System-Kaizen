import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { HomeHero } from "@/lib/documentation/home-hero";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
};

export default function HomePage() {
  return <HomeHero />;
}
