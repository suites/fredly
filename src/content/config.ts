import { defineCollection, z } from 'astro:content';

const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
  layout: z.string().optional(),
});

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      // 우리 스타일 필드들
      date: z
        .string()
        .transform((str) => new Date(str))
        .optional(),
      category: z
        .enum(['web', 'network', 'cs', 'algorithm', 'deep-learning', 'infra'])
        .optional(),
      emoji: z.string().optional(),
      slug: z.string().optional(),
      // 기본 템플릿 호환 필드들 (더 유연하게)
      pubDate: z
        .union([z.string(), z.date()])
        .transform((val) => (typeof val === 'string' ? new Date(val) : val))
        .optional(),
      updatedDate: z
        .union([z.string(), z.date()])
        .transform((val) => (typeof val === 'string' ? new Date(val) : val))
        .optional(),
      heroImage: image().optional(),
    }),
});

const pages = defineCollection({
  type: 'content',
  schema: pageSchema,
});

export const collections = {
  blog,
  pages,
};


