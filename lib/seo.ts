import type { Metadata } from "next";

export const siteUrl = "https://portfolio.thosem.com";
export const siteName = "Thobile Sema | Portfolio";
export const defaultDescription = "Portfolio of Thobile Sema, showcasing software engineering, cloud computing, cybersecurity, and IT projects.";
export const defaultKeywords = ["Thobile Sema", "Thobile portfolio", "software engineer", "cloud computing", "cybersecurity", "IT professional", "South Africa"];

type PageSeo = { title: string; description: string; path: string; keywords?: string[]; image?: string; type?: "website" | "article"; noIndex?: boolean };

export function pageMetadata({ title, description, path, keywords = [], image = "/project-card-cover.png", type = "website", noIndex = false }: PageSeo): Metadata {
  return {
    title, description, keywords: [...defaultKeywords, ...keywords], alternates: { canonical: path },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: { type, url: new URL(path, siteUrl).toString(), title: `${title} | Thobile Sema`, description, siteName, locale: "en_ZA", images: [{ url: image, width: 1200, height: 630, alt: `${title} — Thobile Sema portfolio` }] },
    twitter: { card: "summary_large_image", title: `${title} | Thobile Sema`, description, images: [image] },
  };
}
