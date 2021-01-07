module.exports = {
  files: [
    "**/tests/**/*.js",
    "**/tests/**/*.jsx",
    "**/tests/**/*.ts",
    "**/tests/**/*.tsx",
    "**/*.test.ts",
    "**/*.spec.ts",
    "**/*.test.tsx",
    "**/*.spec.tsx",
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
