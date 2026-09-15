import type { MetadataRoute } from "next";
import { writing } from "@/content/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://timiagba.tech/";

  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}writing`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...writing.map((post) => ({
      url: `${baseUrl}writing/${post.slug}`,
      lastModified: new Date(`${post.publishedAt}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
