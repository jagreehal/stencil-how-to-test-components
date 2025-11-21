const stencilPlugin = require('@stencil-community/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const reactPlugin = require('eslint-plugin-react');

module.exports = [
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@stencil-community': stencilPlugin,
      '@typescript-eslint': tsPlugin,
      'react': reactPlugin
    },
    rules: {
      ...stencilPlugin.configs.recommended.rules
    }
  }
];
