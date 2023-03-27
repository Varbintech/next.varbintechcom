/**
 * @type {import('next').NextConfig}
 **/

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

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    minimumCacheTTL: 60,
  },

  headers,
};

module.exports = nextConfig;
