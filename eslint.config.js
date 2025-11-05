// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),

  {
    files: ['**/*.{js,jsx,ts,tsx,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    extends: [
      js.configs.recommended,
      'plugin:prettier/recommended', // ✅ đúng
    ],
    rules: {
      'no-unused-vars': [
        'error',
        { vars: 'all', args: 'after-used', varsIgnorePattern: '^[A-Z_]' },
      ],
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.ts', '.js', '.vue', '.json'],
        },
      },
    },
  },
]);
