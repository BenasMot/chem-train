/** @type {import('next').NextConfig} */
const repo = "chem-train";
const nextConfig = {
  assetPrefix: `/${repo}/`,
  basePath: `/${repo}`,
  reactStrictMode: true,
};

module.exports = nextConfig;
