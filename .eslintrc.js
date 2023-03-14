module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
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
