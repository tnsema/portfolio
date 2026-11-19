import type { Metadata, Viewport } from "next";
import { Rajdhani, Orbitron } from "next/font/google";
import { defaultDescription, defaultKeywords, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-body", display: "swap" });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "500", "700", "900"], variable: "--font-heading", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: "%s | Thobile Sema" },
  description: defaultDescription,
  keywords: defaultKeywords,
  authors: [{ name: "Thobile Sema", url: "https://thosem.com" }],
  creator: "Thobile Sema",
  publisher: "Thobile Sema",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/favicon/favicon.svg", type: "image/svg+xml" }, { url: "/favicon/favicon-96x96.png", type: "image/png", sizes: "96x96" }],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = { themeColor: "#9C7627" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-ZA" className={`${rajdhani.variable} ${orbitron.variable}`}><body className="antialiased">{children}</body></html>;
}
