module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser:  'vue-eslint-parser',
  parserOptions: {
    'parser': '@typescript-eslint/parser',
  },
  extends: [
    'standard'
  ],
  plugins: ["@typescript-eslint/eslint-plugin"],
  rules: {}
}

