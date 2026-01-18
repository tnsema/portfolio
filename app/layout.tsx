import type { Metadata } from "next";
import { Rajdhani, Orbitron } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-heading",
  display: "swap",
});

// ✅ Change these to your real values
const SITE_NAME = "Thobile | Portfolio";
const SITE_DESCRIPTION =
  "Thobile’s portfolio — cybersecurity and software engineering projects, skills, and contact.";
const SITE_URL = "https://portfolio.thosem.com";
const SITE_KEYWORDS =
  "Thobile, portfolio, cybersecurity, software engineering, projects, skills, contact";

// Put these files in /public:
// - /public/og.png  (1200x630 recommended)
// - /public/favicon.ico
// - /public/icon.png (512x512 recommended)
// - /public/apple-icon.png (180x180 recommended)
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_NAME,
    template: `%s | Thobile`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS.split(", "),
  authors: [{ name: "Thobile", url: "https://thosem.com" }],
  creator: "Thobile",
  publisher: "Thobile",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Helps Chrome/Android address bar color etc.
  themeColor: "#9C7627",

  // Icons for browsers + mobile
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: "Thobile",
    images: [
      {
        url: "public/favicon/android-chrome-512x512.png",
        width: 1200,
        height: 630,
        alt: "Thobile portfolio preview",
      },
    ],
    locale: "en_ZA",
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["public/favicon/android-chrome-512x512.png"],
    // Optional if you have it:
    // creator: "@yourhandle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Optional: add suppressHydrationWarning if you avoid theme flash later
  return (
    <html lang="en" className={`${rajdhani.variable} ${orbitron.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
