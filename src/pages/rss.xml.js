import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getPostRouteSlug } from '../utils/post-route.util';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => {
      const slug = getPostRouteSlug(post);
      const date = post.data.date || post.data.pubDate;

      return {
        title: post.data.title,
        description: post.data.description || '',
        pubDate: date,
        link: `/${slug}/`,
      };
    }),
  });
}
