export function deriveBlogSlugFromId(id: string): string {
  const withoutExtension = id.replace(/\.mdx?$/, '');
  const trimmedIndex = withoutExtension.replace(/\/index$/, '');
  const normalized = trimmedIndex.replace(/\//g, '-');
  return normalized || id.replace(/\//g, '-');
}

