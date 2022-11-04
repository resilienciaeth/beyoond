
/** @type {import('next').NextConfig} */

const {i18n} = require('./next-i18next.config');

module.exports={
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  i18n,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {fs: false};
    return config;
  },
};