module.exports = {
  files: [
    "**/tests/**/*.ts",
    "**/tests/**/*.tsx",
    "**/*.test.ts",
    "**/*.spec.ts",
    "**/*.test.tsx",
    "**/*.spec.tsx",
    "**/*.stories.tsx",
    "**/*.factory.ts",
    "**/setupTests.ts",
    "**/jest.config.js",
    "**/jest.config.ts",
  ],
  rules: {
    "func-names": "off",
    "no-unused-expressions": "off",
    "no-console": "off",
    "no-empty-function": "off",
    "class-methods-use-this": "off",
  },
};
