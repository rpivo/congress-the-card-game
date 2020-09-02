module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:all",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "array-bracket-newline": 0,
    "array-element-newline": 0,
    "arrow-body-style": 0,
    "arrow-parens": 0,
    "capitalized-comments": 0,
    "class-methods-use-this": 0,
    "comma-dangle": ["error", "always-multiline"],
    "consistent-return": 0,
    curly: 0,
    "dot-location": 0,
    "dot-notation": 0,
    "function-call-argument-newline": 0,
    "function-paren-newline": 0,
    "global-require": 0,
    "id-length": 0,
    "implicit-arrow-linebreak": 0,
    "indent": ["error", 2, { SwitchCase: 1 }],
    "init-declarations": 0,
    "jsx-quotes": 0,
    "lines-between-class-members": 0,
    "max-len": ["error", { code: 100 }],
    "max-lines": 0,
    "max-lines-per-function": 0,
    "max-params": 0,
    "max-statements": 0,
    "multiline-comment-style": 0,
    "multiline-ternary": 0,
    "newline-per-chained-call": 0,
    "no-bitwise": 0,
    "no-confusing-arrow": 0,
    "no-console": 0,
    "no-extra-parens": 0,
    "no-inline-comments": 0,
    "no-magic-numbers": 0,
    "no-negated-condition": 0,
    "no-nested-ternary": 0,
    "no-param-reassign": 0,
    "no-plusplus": 0,
    "no-process-env": 0,
    "no-ternary": 0,
    "no-undefined": 0,
    "no-underscore-dangle": 0,
    "no-warning-comments": 0,
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": 0,
    "one-var": 0,
    "padded-blocks": 0,
    "prefer-named-capture-group": 0,
    "quote-props": 0,
    "quotes": 0,
    "require-atomic-updates": 0,
    "require-unicode-regexp": 0,
    "sort-imports": 0,
    "space-before-function-paren": 0,
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};
