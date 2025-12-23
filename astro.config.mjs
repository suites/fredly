// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://fredly.dev',
  integrations: [
    mdx({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }),
    sitemap(),
    partytown({
      config: { forward: ['dataLayer.push'] },
    }),
  ],
  trailingSlash: 'always',
});
