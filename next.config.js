// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = (_phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    reactStrictMode: true,
    swcMinify: true,
  };
};

module.exports = nextConfig;
