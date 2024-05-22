import { defineCollection, reference, z } from "astro:content";

const category = defineCollection({
  type: "data",
  schema: z.object({
    label: z.string(),
    icon: z.string(),
    color: z.string(),
    description: z.string().optional(),
  }),
});

const resource = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    url: z.string(),
    category: reference("category"),
    keywords: z.array(z.string()),
    image: z.string(),
    license: z
      .object({
        name: z.string(),
        url: z.string().optional(),
        note: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = {
  category,
  resource,
};
