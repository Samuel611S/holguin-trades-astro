import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional().default(false),
  }),
});

const policy = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastUpdated: z.date(),
    category: z.string(),
  }),
});

const strategy = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastUpdated: z.date(),
    riskLevel: z.enum(['low', 'medium', 'high']),
    category: z.string(),
  }),
});

const faqs = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    category: z.string(),
    order: z.number(),
    featured: z.boolean().optional().default(false),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    program: z.string(),
    rating: z.number().min(1).max(5),
    date: z.date(),
    verified: z.boolean().optional().default(false),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  blog,
  policy,
  strategy,
  faqs,
  testimonials,
};