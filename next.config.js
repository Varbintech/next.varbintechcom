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
      /* unoptimized: true, */
      remotePatterns: [
        {
          protocol: 'https',
          hostname: `${process.env.API_BASE_URL}/**`,
          port: '',
        },
      ],
    },
    pageExtensions: ['page.tsx', 'page.ts', 'api.ts', ...pageExtensionsWIP],
    sentry: {
      hideSourceMaps: true,
    },
    webpack: (config, { isServer }) => {
      if (isServer) {
        require('./utils/generate-sitemap');
      }

      return config;
    },
  };

  return withPWA(
    withSentryConfig(nextConfig, {
      // For all available options, see:
      // https://github.com/getsentry/sentry-webpack-plugin#options

      // Suppresses source map uploading logs during build
      silent: true,
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
    }),
  );
};
