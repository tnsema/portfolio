import type { MetadataRoute } from "next";
import { getProjects } from "@/api/api";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();
  const lastModified = new Date();
  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/certificates/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...projects.map((project: any) => ({ url: `${siteUrl}/projects/${project.slug}/`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
