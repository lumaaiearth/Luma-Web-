import { defineCollection, z } from 'astro:content';

const journal = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.enum(['de', 'en']),
    title: z.string(),
    description: z.string(),
    date: z.string(), // ISO, z. B. 2026-07-10
    cover: z.enum(['hero', 'greenroof', 'facade', 'macro', 'arborist', 'aerial', 'planting']),
    category: z.string(),
    readingMin: z.number(),
    sources: z.array(z.object({ label: z.string(), url: z.string() })).optional(),
  }),
});

export const collections = { journal };
