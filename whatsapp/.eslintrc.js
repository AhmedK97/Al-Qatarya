module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
     sourceType: 'CommonJS',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
     'plugin:@typescript-eslint/recommended',
     'plugin:prettier/recommended',
     'plugin:prettier/recommended'
  ],
  globals: {
     Atomics: 'readonly',
     SharedArrayBuffer: 'readonly',
  },
  root: true,
  env: {
     node: true,
     jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
     '@typescript-eslint/interface-name-prefix': 'off',
     '@typescript-eslint/explicit-function-return-type': 'off',
     '@typescript-eslint/explicit-module-boundary-types': 'off',
     '@typescript-eslint/no-explicit-any': 'off',
     '@typescript-eslint/no-empty-function': 'off',
     '@typescript-eslint/no-non-null-assertion': 'off',
     '@typescript-eslint/no-unused-vars': 'off',
     '@typescript-eslint/ban-types': [
        'error',
        {
           extendDefaults: true,
           types: {
              '{}': false,
              Object: false,
           },
        },
     ],
     'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};