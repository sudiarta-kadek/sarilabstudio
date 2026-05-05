// src/content.config.ts
import { defineCollection } from "astro:content";
import { z } from "zod";
// 1. Import glob loader
import { glob } from "astro/loaders";

const apps = defineCollection({
  // 2. Tambahkan loader untuk memantau file JSON di folder apps
  loader: glob({ pattern: "**/*.json", base: "./src/content/apps" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      tagline: z.string(),
      description: z.string(),
      icon: image(),
      status: z.enum(["Tersedia", "Close Testing", "Beta", "Segera Hadir"]),
      tags: z.array(z.string()).optional(),
      category: z.enum([
        "Seni & Budaya",
        "Produktivitas",
        "Bisnis",
        "Keuangan",
      ]),
      techStack: z.array(z.string()),
      rating: z.string().optional(),
      downloads: z.string().optional(),
      year: z.string().optional(),
      features: z.array(
        z.object({
          icon: z.string(),
          title: z.string(),
          desc: z.string(),
        }),
      ),
      links: z
        .array(
          z.object({
            store: z.string(),
            href: z.url(),
            icon: z.enum(["play", "mail", "web"]).default("play"),
          }),
        )
        .optional(),
    }),
});

// ── Collection: Blog (MD / MDX) ───────────────────────────────
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      cover: image().optional(),
      author: z.string().default("SarilabStudio"),
      tags: z.array(z.string()).optional(),
      readTime: z.string().optional(), // contoh: "5"  (dalam menit)
      draft: z.boolean().default(false),
    }),
});

export const collections = { apps, blog };
