module.exports = {
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@next/font/google':  require.resolve("./nextFontGoogle"),
    };

    return config;
  },
  stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  // TypeError: (tag.text || "").trim is not a function
  //typescript: { reactDocgen: 'none' },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    }
  },
  features: {
    postcss: false,
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
    disableTelemetry: true,
  },
  previewHead: (head) => (`
    ${head}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;900&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
  `)


/*   previewHead: (head) => (`
  ${head}
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400&display=swap');

  html, body {
    font-family: 'Inter', sans-serif;
  }

  </style>
`),


  previewHead: (head) => (`
    ${head}
    <style>
    @font-face {
      font-family: "Inter";
      font-style: normal;
      font-weight: 100 400;
      font-display: swap;
      src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400&display=swap');
    }

    .Inter {
      font-family: "Inter", serif;
    }
    </style>
  `), */

/*   previewHead: (head) => (`
    ${head}
    <style>
    @font-face {
      font-family: "Playfair_Display";
      font-style: normal;
      font-weight: 400 900;
      font-display: swap;
      src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400&display=swap');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
        U+FEFF, U+FFFD;
    }

    .Playfair_Display {
      font-family: "Playfair_Display", serif;
    }
    </style>
  `), */
};
