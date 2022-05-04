module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: { ecmaVersion: 8, sourceType: 'module' },
  ignorePatterns: ['node_modules/*'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@/features/*/*'],
      },
    ],
    //'linebreak-style': ['error', 'unix'],
    'react/prop-types': 'off',

    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',

    'react/react-in-jsx-scope': 'off',

    'jsx-a11y/anchor-is-valid': 'off',

    'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
  },
  settings: {
    react: { version: 'detect' },
  },
};
