import type { MetadataRoute } from "next";
import { seoServiceSlugs } from "@/entities/service";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://repointingdublin.ie";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = seoServiceSlugs.map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...servicePages,
    { url: `${base}/work`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];
}
