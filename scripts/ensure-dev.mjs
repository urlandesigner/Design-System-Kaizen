#!/usr/bin/env node
/**
 * Sobe o Next.js do Kaizen na porta PORT (default 3001).
 * Não mexe na porta 3000.
 */
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const port = Number(process.env.PORT) || 3001;
const nextBin = join(root, "node_modules", ".bin", "next");

if (!existsSync(nextBin)) {
  console.error("[kaizen] Rode `npm install` antes de `npm run dev`.\n");
  process.exit(1);
}

console.log(`[kaizen] Iniciando em http://localhost:${port}\n`);

const child = spawn(nextBin, ["dev", "--webpack", "-p", String(port)], {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, NODE_ENV: "development", PORT: String(port) },
});

child.on("error", (err) => {
  console.error("[kaizen] Falha ao iniciar Next.js:", err.message);
  process.exit(1);
});

child.on("exit", (code, signal) => {
  if (signal) {
    console.error(`[kaizen] Encerrado (${signal}).`);
  }
  process.exit(code ?? 0);
});
