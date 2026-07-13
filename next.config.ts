import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

// Bundle analyzer: enable with ANALYZE=true (npm run build with the env var).
const shouldAnalyze = process.env.ANALYZE === "true";
const withBundleAnalyzer = shouldAnalyze
  ? require("@next/bundle-analyzer")({ enabled: true })
  : (c: NextConfig) => c;

// Pin the Turbopack workspace root to THIS project directory. There is a stray
// `package-lock.json` further up the tree (C:\Users\chlih\package-lock.json) which
// causes Next to incorrectly infer the workspace root as the user home folder. That
// in turn makes Tailwind v4's automatic content detection scan the wrong root and
// emit ZERO `md:` responsive variants (the real cause of the duplicated
// qualification items and the broken desktop layout).
const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: "export", // Fully static export → served from CDN edge, zero server compute.
  images: {
    // Static export cannot use the server optimizer; we ship pre-optimized
    // AVIF/WebP (see scripts/optimize-images.mjs) and let next/images handle
    // responsive srcset from those static files.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: projectRoot,
  },
};

export default withBundleAnalyzer(nextConfig);
