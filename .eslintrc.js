module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
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
      },
    },
    linkComponents: ['Link'],
  },
  root: true,
  overrides: [
    {
      files: ['**/*.{js,ts,tsx}'],
      rules: {
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'import/no-anonymous-default-export': 'off',
        semi: ['error', 'always'],
        quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'react/prop-types': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
        'newline-after-var': ['error', 'always'],
        'no-duplicate-imports': 'error',
        'newline-before-return': 'error',
        'comma-dangle': ['error', 'always-multiline'],
      },
    },
  ],
};
