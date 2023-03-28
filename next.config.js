// @TODO Doesn't work with GitHub Pages
const headers = async () => {
  return [
    {
      source: '/:all*(svg|jpg|png|webp)',
      locale: false,
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ];
};

module.exports = async (phase, { defaultConfig: _ }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      minimumCacheTTL: 60,
      unoptimized: phase !== process.env.CI,
    },

    headers,
  };

  return nextConfig;
};
