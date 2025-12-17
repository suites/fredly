export function deriveBlogSlugFromId(id: string): string {
  const withoutExtension = id.replace(/\.mdx?$/, '');
  const trimmedIndex = withoutExtension.replace(/\/index$/, '');
  const segments = trimmedIndex.split('/').filter(Boolean);
  const targetSegment = segments.pop() ?? trimmedIndex;
  return targetSegment.replace(/\//g, '-');
}

