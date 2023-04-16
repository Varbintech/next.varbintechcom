const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextPWA = require('next-pwa');

module.exports = async (phase, { defaultConfig: _dc }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const withPWA = nextPWA({
    disable: phase === PHASE_DEVELOPMENT_SERVER,
    dest: 'public',
    publicExcludes: ['!_headers'],
  });

  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      minimumCacheTTL: 60,
      unoptimized: true,
    },
    pageExtensions: ['page.tsx', 'page.ts', 'api.ts'],
  };

  return withPWA(nextConfig);
};
