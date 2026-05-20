import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you are deploying to https://<username>.github.io/<repository-name>/
  // baseId: '/<repository-name>',
  // assetPrefix: '/<repository-name>',
};

export default nextConfig;
