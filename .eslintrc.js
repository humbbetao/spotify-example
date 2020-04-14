module.exports = {
  parser: 'babel-eslint',
  plugins: ['jest', 'react', 'cypress', 'react-hooks'],
  env: {
    jest: true,
    browser: true,
    es6: true,
  },
  extends: ['plugin:react-hooks/recommended'],
}
