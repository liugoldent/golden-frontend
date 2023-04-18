/** @type {import('next').NextConfig} */
// const withPlugins = require("next-compose-plugins");
// const optimizedImages = require("next-optimized-images");
// const images = require("next-images");

// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
require('dotenv').config();
const withPlugins = require("next-compose-plugins");
const images = require("next-images");
const nextConfig = withPlugins([[images, {}]], {
  webpack: (config) => {
    config.resolve.modules.push(__dirname);
    return config;
  },
  env: {
    API_BASE_URL: process.env.API_URL,
  },
});

module.exports = nextConfig

