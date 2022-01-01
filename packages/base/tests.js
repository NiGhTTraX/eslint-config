module.exports = {
  files: [
    "**/tests/**/*.{ts,tsx}",
    "**/*.(spec|test).{ts,tsx}",
    "**/setupTests.ts",
    "**/jest.config.{js,ts}",
  ],
  rules: {
    "func-names": "off",
    "no-unused-expressions": "off",
    "no-console": "off",
    "no-empty-function": "off",

    // TODO: figure out how to lint these files for extra dev deps
    "import/no-extraneous-dependencies": "off",
  },
};
