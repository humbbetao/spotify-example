module.exports = {
  parser: 'babel-eslint',
  plugins: ['jest', 'react'],
  env: {
    jest: true,
    browser: true,
    es6: true,
  },
  extends: ['plugin:react-hooks/recommended'],
}
