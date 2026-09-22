import type { NextConfig } from "next";

// Set by the GitHub Actions workflow (.github/workflows/deploy.yml) when
// building for GitHub Pages, which serves this repo at
// https://saffan19.github.io/wedding_invite/ — a subpath, not the domain
// root. Local `npm run dev` / `npm run build` leave this unset, so the app
// still runs at "/" for normal development.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/wedding_invite" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
