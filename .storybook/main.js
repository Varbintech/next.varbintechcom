module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next',
  ],
  typescript: { reactDocgen: 'none' },
  features: {
    postcss: false,
  },
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@next/font/google': require.resolve('./nextFontGoogle'),
      'next/head': require.resolve('../node_modules/next/head'),
      'next/script': require.resolve('../node_modules/next/script'),
    };

    return config;
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
    disableTelemetry: true,
  },
};
