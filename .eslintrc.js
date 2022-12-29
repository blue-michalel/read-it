module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended" // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  rules: {
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        objects: "always",
        imports: "never",
        exports: "never",
        functions: "ignore"
      }
    ],
    "no-console": "off",
    "no-alert": "error",
    "linebreak-style": ["warn", "unix"],
    semi: ["warn", "always"],
    "no-unused-vars": "warn",
    "max-classes-per-file": ["error", 1]
  }
};
