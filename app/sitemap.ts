import type { MetadataRoute } from "next";

export default function sitemap():
  MetadataRoute.Sitemap{
  const baseUrl = "https://timiagba.tech/"
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}writing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}writing/introduction`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }
  ];
}
