module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:compat/recommended"
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1, maxBOF: 0 }],
    "arrow-parens": ["error", "always"]
  }
};
