module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: '@typescript-eslint/parser',
  settings: {
    'jsx-a11y': {
      components: {
        Link: 'a',
        LinkContainer: 'a',
      },
    },
    linkComponents: ['Link', 'LinkContainer'],
  },
  root: true,
  overrides: [
    {
      files: ['**/*.{js,ts,tsx}'],
      rules: {
        'no-console': [
          'error',
          {
            allow: ['warn', 'error'],
          },
        ],
        'import/no-anonymous-default-export': 'off',
        semi: ['error', 'always'],
        quotes: [
          'error',
          'single',
          {
            avoidEscape: true,
            allowTemplateLiterals: true,
          },
        ],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'react/prop-types': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],
        'newline-after-var': ['error', 'always'],
        'no-duplicate-imports': 'error',
        'newline-before-return': 'error',
        'comma-dangle': ['error', 'always-multiline'],

        // @TODO: Temporary disabled rules due to old nextjs version
        '@next/next/no-html-link-for-pages': 'off',
        '@next/next/no-page-custom-font': 'off',
        '@next/next/no-before-interactive-script-outside-document': 'off',
        '@next/next/no-styled-jsx-in-document': 'off',
        '@next/next/no-typos': 'off',
        '@next/next/no-duplicate-head': 'off',
        '@next/next/no-head-import-in-document': 'off',
        '@next/next/no-document-import-in-page': 'off',
      },
    },
  ],
};
