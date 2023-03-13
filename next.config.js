const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    basePath: phase === PHASE_DEVELOPMENT_SERVER ? '' : '/next.varbintechcom',
  };
};

module.exports = nextConfig;
