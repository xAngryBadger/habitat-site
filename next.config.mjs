/** @type {import('next').NextConfig} */
const isPages = process.env.GITHUB_ACTIONS === "true";
const nextConfig = {
  output: "export",
  ...(isPages ? { basePath: "/habitat-site", assetPrefix: "/habitat-site/" } : {}),
};
export default nextConfig;
