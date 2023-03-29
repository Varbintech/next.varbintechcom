module.exports = async () => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      minimumCacheTTL: 60,
      unoptimized: true,
    },
  };

  return nextConfig;
};
