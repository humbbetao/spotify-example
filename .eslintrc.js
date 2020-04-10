module.exports = {
  parser: 'babel-eslint',
  plugins: ['jest', 'react', 'cypress'],
  env: {
    jest: true,
    browser: true,
    es6: true,
  },
}
