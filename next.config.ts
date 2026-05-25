import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const isProdOutput =
  process.env.npm_lifecycle_event === "build" ||
  process.env.npm_lifecycle_event === "start" ||
  process.argv.some((arg) => arg === "build" || arg === "start");

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  /** Dev → `.next-dev` | build/start → `.next` (funciona com IDE, npm e agent). */
  distDir: isProdOutput ? ".next" : ".next-dev",
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
