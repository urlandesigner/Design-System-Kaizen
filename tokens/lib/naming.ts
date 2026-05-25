/** Figma variable name → CSS custom property (shared by build + app). */
export function figmaNameToCssVar(name: string): string {
  if (name.startsWith("componentStyle/")) {
    const rest = name.slice("componentStyle/".length);
    return `--component-${rest.replace(/\//g, "-")}`;
  }
  return `--${name.replace(/\//g, "-")}`;
}
