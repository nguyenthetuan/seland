module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'react-native/react-native': true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import', 'react', 'react-native', 'simple-import-sort'],
  rules: {
    'import/first': 2,
    'import/newline-after-import': 2,
    'import/no-duplicates': 2,
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'react/forbid-prop-types': [
      2,
      {
        forbid: [],
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-props-no-spreading': [
      2,
      {
        custom: 'ignore',
      },
    ],
    'react-native/no-inline-styles': 2,
    'react-native/no-unused-styles': 2,
    'react-native/sort-styles': 2,
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
  },
};
