import {
  flatTokens,
  tokenMeta,
  tokens,
  type FlatToken,
} from "@tokens/generated/tokens";

export { flatTokens, tokenMeta, tokens, type FlatToken };

export { figmaNameToCssVar } from "@tokens/lib/naming";

export function getTokensByCategory(
  category: FlatToken["category"],
  options?: {
    collection?: FlatToken["collection"];
    namePrefix?: string;
  },
) {
  return flatTokens.filter((token) => {
    if (token.category !== category) return false;
    if (options?.collection && token.collection !== options.collection) {
      return false;
    }
    if (options?.namePrefix && !token.name.startsWith(options.namePrefix)) {
      return false;
    }
    return true;
  });
}
