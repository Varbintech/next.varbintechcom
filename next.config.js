// const { PHASE_EXPORT } = require('next/constants');

const nextPWA = require('next-pwa');

module.exports = async (_phase, { defaultConfig: _ }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const withPWA = nextPWA({
    dest: 'public',
  });

  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      minimumCacheTTL: 60,
      unoptimized: true,
    },
  };

  return withPWA(nextConfig);
};
