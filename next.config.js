/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Add your config options here */
  reactStrictMode: true,
  swcMinify: true,

  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during builds
  },
};

module.exports = nextConfig;