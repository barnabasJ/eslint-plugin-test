module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier", "lodash-tree-shakeable-import"],
  rules: {
    "prettier/prettier": ["error"],
    "lodash-tree-shakeable-import/no-lodash-named-imports": ["error"],
  },
};