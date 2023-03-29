module.exports = async () => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      loader: 'custom',
      domains: ['res.cloudinary.com'],
      loaderFile: './utils/loader-cloudinary.ts',
    },
  };

  return nextConfig;
};
