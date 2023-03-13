const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    reactStrictMode: true,
    swcMinify: true,
    basePath: phase === PHASE_DEVELOPMENT_SERVER ? '' : '/next.varbintechcom',
  };
};

module.exports = nextConfig;
