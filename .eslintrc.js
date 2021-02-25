module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'react-app',
    'react-app/jest',
  ],
  plugins: ['prettier'],
  rules: {
    'jest/valid-title': 'off',
    'prettier/prettier': 'error',
    'no-trailing-spaces': 'error',
    'spaced-comment': ['error', 'always'],
  },
}
