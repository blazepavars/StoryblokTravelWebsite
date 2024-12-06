/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during builds
  },

  experimental: {
    appDir: true, // Ensure the App Router is enabled
  },
};

module.exports = nextConfig;