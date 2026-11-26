import type { MetadataRoute } from "next";
import { pages } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lisetteclaudiatame.com";
  const legales = new Set([
    "mentions-legales",
    "politique-de-confidentialite",
    "gestion-des-cookies",
    "conditions-d-utilisation",
  ]);

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...Object.keys(pages).map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: legales.has(slug) ? ("yearly" as const) : ("monthly" as const),
      priority: legales.has(slug) ? 0.3 : slug === "contact" ? 0.7 : 0.8,
    })),
  ];
}
