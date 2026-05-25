#!/usr/bin/env node
/** Build de produção — usa só `.next`, nunca apaga `.next-dev`. */
import { spawnSync } from "node:child_process";
import { join } from "node:path";

const root = process.cwd();

const tokens = spawnSync("npm", ["run", "tokens:build"], {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, NODE_ENV: "development" },
});

if (tokens.status !== 0) process.exit(tokens.status ?? 1);

const nextBin = join(root, "node_modules", ".bin", "next");
const build = spawnSync(nextBin, ["build"], {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, NODE_ENV: "production" },
});

process.exit(build.status ?? 0);
