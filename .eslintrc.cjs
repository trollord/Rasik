module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/default-param-last': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-unsafe-optional-chaining': 'off',
    'no-nested-ternary': 'off',
  },
};
