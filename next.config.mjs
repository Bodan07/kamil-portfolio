/** @type {import('next').NextConfig} */
const repoName = "kamil-portfolio";
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProduction ? `/${repoName}` : undefined,
  assetPrefix: isProduction ? `/${repoName}/` : undefined,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
