import { flatTokens, type FlatToken } from "@/lib/tokens";

/**
 * Utilidades de contraste WCAG calculadas em build.
 * Resolve tokens semânticos (aliases `var(--...)`) até o valor primitivo
 * (hex/rgb) e calcula a razão de contraste + nível WCAG 2.1.
 */

const byCssVar = new Map<string, FlatToken>();
const byName = new Map<string, FlatToken>();
for (const token of flatTokens) {
  byCssVar.set(token.cssVar, token);
  byName.set(token.name, token);
}

/** Segue a cadeia de alias `var(--x)` até o valor de cor concreto. */
export function resolveColorValue(
  tokenOrName: FlatToken | string,
  depth = 0,
): string | null {
  const token =
    typeof tokenOrName === "string" ? byName.get(tokenOrName) : tokenOrName;
  if (!token || depth > 8) return null;
  const value = token.cssValue?.trim();
  if (!value) return null;
  const match = /^var\((--[^)]+)\)$/.exec(value);
  if (match) {
    const next = byCssVar.get(match[1]!);
    return next ? resolveColorValue(next, depth + 1) : null;
  }
  return value;
}

type RGBA = { r: number; g: number; b: number; a: number };

export function parseColor(input: string | null): RGBA | null {
  if (!input) return null;
  const value = input.trim();
  let match = /^#([0-9a-fA-F]{6})$/.exec(value);
  if (match) {
    const n = parseInt(match[1]!, 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255, a: 1 };
  }
  match = /^#([0-9a-fA-F]{3})$/.exec(value);
  if (match) {
    const h = match[1]!;
    return {
      r: parseInt(h[0]! + h[0]!, 16),
      g: parseInt(h[1]! + h[1]!, 16),
      b: parseInt(h[2]! + h[2]!, 16),
      a: 1,
    };
  }
  match = /^rgba?\(([^)]+)\)$/.exec(value);
  if (match) {
    const parts = match[1]!.split(",").map((x) => parseFloat(x));
    return {
      r: parts[0] ?? 0,
      g: parts[1] ?? 0,
      b: parts[2] ?? 0,
      a: parts[3] == null ? 1 : parts[3],
    };
  }
  return null;
}

/** Achata uma cor com alpha sobre um backdrop opaco. */
function flatten(color: RGBA, backdrop: RGBA): RGBA {
  if (color.a >= 1) return color;
  return {
    r: Math.round(color.r * color.a + backdrop.r * (1 - color.a)),
    g: Math.round(color.g * color.a + backdrop.g * (1 - color.a)),
    b: Math.round(color.b * color.a + backdrop.b * (1 - color.a)),
    a: 1,
  };
}

function channel(v: number): number {
  const c = v / 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function luminance(color: RGBA): number {
  return (
    0.2126 * channel(color.r) +
    0.7152 * channel(color.g) +
    0.0722 * channel(color.b)
  );
}

export function contrastRatio(foreground: RGBA, background: RGBA): number {
  const fg = flatten(foreground, background);
  const L1 = luminance(fg);
  const L2 = luminance(background);
  const hi = Math.max(L1, L2);
  const lo = Math.min(L1, L2);
  return (hi + 0.05) / (lo + 0.05);
}

export type WcagLevel = "AAA" | "AA" | "AA Large" | "Fail";

export function wcagLevel(ratio: number): WcagLevel {
  if (ratio >= 7) return "AAA";
  if (ratio >= 4.5) return "AA";
  if (ratio >= 3) return "AA Large";
  return "Fail";
}

export type ContrastResult = {
  ratio: number;
  ratioLabel: string;
  level: WcagLevel;
  fgValue: string | null;
  bgValue: string | null;
};

/** Calcula o contraste entre dois tokens (por nome). */
export function contrastForPair(
  fgToken: string,
  bgToken: string,
): ContrastResult | null {
  const fgValue = resolveColorValue(fgToken);
  const bgValue = resolveColorValue(bgToken);
  const fg = parseColor(fgValue);
  const bg = parseColor(bgValue);
  if (!fg || !bg) return null;
  const ratio = contrastRatio(fg, bg);
  return {
    ratio,
    ratioLabel: `${ratio.toFixed(2)}:1`,
    level: wcagLevel(ratio),
    fgValue,
    bgValue,
  };
}
