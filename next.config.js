/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [],
  },
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
