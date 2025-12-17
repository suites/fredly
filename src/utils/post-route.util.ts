import type { CollectionEntry } from 'astro:content';
import { deriveBlogSlugFromId } from '@/utils/post-slug.util';

/**
 * MDX frontmatter slug or derived slug를 참조하여 실제 링크로 사용할 슬러그 값을 반환합니다.
 */
export function getPostRouteSlug(entry: CollectionEntry<'blog'>): string {
  if ('slug' in entry.data && entry.data.slug) {
    return entry.data.slug.trim();
  }
  return deriveBlogSlugFromId(entry.id);
}

