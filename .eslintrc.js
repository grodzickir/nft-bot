module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-empty-interface': 'off',
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': ['warn', { allow: ['warn', 'error', 'assert'] }],
    'arrow-parens': 'off',
    'object-curly-spacing': ['warn', 'always'],
  },
};
