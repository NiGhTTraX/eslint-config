module.exports = {
  files: [
    "**/tests/**/*.ts",
    "**/tests/**/*.tsx",
    "**/*.test.ts",
    "**/*.spec.ts",
    "**/*.test.tsx",
    "**/*.spec.tsx",
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

    // TODO: figure out how to lint these files for extra dev deps
    "import/no-extraneous-dependencies": "off",
  },
};
