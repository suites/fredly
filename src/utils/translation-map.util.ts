import type { CollectionEntry } from 'astro:content';
import { getPostRouteSlug } from '@/utils/post-route.util';

export type BlogEntry = CollectionEntry<'blog'>;
export type BlogLocale = 'ko' | 'en';

export function getPostLocale(post: BlogEntry): BlogLocale {
  return post.data.locale || (post.id.includes('-en/') ? 'en' : 'ko');
}

function getPostGroupKey(post: BlogEntry): string {
  const translationKey = post.data.translationKey?.trim();
  return translationKey || `slug:${getPostRouteSlug(post)}`;
}

export function buildTranslationMap(posts: BlogEntry[]): Map<string, Partial<Record<BlogLocale, BlogEntry>>> {
  const map = new Map<string, Partial<Record<BlogLocale, BlogEntry>>>();

  for (const post of posts) {
    const key = getPostGroupKey(post);
    const locale = getPostLocale(post);
    const current = map.get(key) || {};
    current[locale] = post;
    map.set(key, current);
  }

  return map;
}

/**
 * targetLocale 기준으로 번역 우선 포스트 목록을 만듭니다.
 * - en 요청: en 우선, 없으면 ko fallback
 * - ko 요청: ko 우선, 없으면 en fallback
 */
export function getLocalizedPostList(posts: BlogEntry[], targetLocale: BlogLocale): BlogEntry[] {
  const translationMap = buildTranslationMap(posts);

  return [...translationMap.values()]
    .map((entry) => {
      if (targetLocale === 'en') return entry.en || entry.ko;
      return entry.ko || entry.en;
    })
    .filter((post): post is BlogEntry => Boolean(post));
}
