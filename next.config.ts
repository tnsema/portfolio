import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },

  // GitHub Pages repo site: https://tnsema.github.io/portfolio/
  basePath: "/portfolio",
  assetPrefix: "/portfolio",

  // Recommended for GitHub Pages routing
  trailingSlash: true,
};

export default nextConfig;
