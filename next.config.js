const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextPWA = require('next-pwa');

const { withSentryConfig } = require('@sentry/nextjs');

module.exports = async (phase, { defaultConfig: _dc }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const withPWA = nextPWA({
    disable: phase === PHASE_DEVELOPMENT_SERVER,
    dest: 'public',
    publicExcludes: ['!_headers'],
  });

  const pageExtensionsWIP =
    phase === PHASE_DEVELOPMENT_SERVER ? ['page-wip.tsx', 'page-wip.ts', 'api-wip.ts'] : [];

  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      minimumCacheTTL: 60,
      unoptimized: true,
    },
    pageExtensions: ['page.tsx', 'page.ts', 'api.ts', ...pageExtensionsWIP],
  };

  return withPWA(nextConfig);
};

const moduleExports = {
  sentry: {
    hideSourceMaps: true,
  },
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports);
