import pluginJs from "@eslint/js";
import tsEslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import * as pluginImportX from "eslint-plugin-import-x";
import * as tsParser from "@typescript-eslint/parser";

const EXTENSIONS = "{js,mjs,cjs,ts,cts,mts,jsx,tsx}";

/**
 * @param {import('typescript-eslint').InfiniteDepthConfigWithExtends[]} configs
 */
export const nighttraxTS = (...configs) =>
  tsEslint.config([
    { ignores: ["**/dist/"] },
    {
      files: [`**/*.${EXTENSIONS}`],
      languageOptions: { parser: tsParser },
    },

    pluginJs.configs.recommended,
    tsEslint.configs.recommended,
    eslintPluginPrettierRecommended,
    pluginImportX.flatConfigs.recommended,
    pluginImportX.flatConfigs.typescript,

    {
      rules: {
        "arrow-body-style": ["error", "as-needed"],
        "object-shorthand": "error",
        curly: ["error", "all"],
        "padding-line-between-statements": [
          "error",
          { blankLine: "always", prev: "*", next: "return" },
          { blankLine: "always", prev: "*", next: "block-like" },
          { blankLine: "always", prev: "*", next: "if" },
          { blankLine: "always", prev: "*", next: "export" },
          { blankLine: "always", prev: "*", next: "const" },
          { blankLine: "any", prev: "const", next: "const" },
          { blankLine: "never", prev: "import", next: "import" },
        ],
      },
    },

    {
      rules: {
        // TypeScript should report incorrect imports.
        "import-x/no-named-as-default-member": "off",
        "import-x/namespace": "off",
        "import-x/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: [
              `**/webpack.config.${EXTENSIONS}`,
              `**/rollup.config.${EXTENSIONS}`,
              `**/vite.config.${EXTENSIONS}`,
              `**/vitest.config.${EXTENSIONS}`,
              `**/.storybook/main.${EXTENSIONS}`,
              `**/.storybook/preview.${EXTENSIONS}`,
              `**/eslint.config.${EXTENSIONS}`,
              `**/*.{spec,test}.${EXTENSIONS}`,
              "**/tests/**",
            ],
          },
        ],
      },
    },

    {
      rules: {
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            caughtErrors: "none",
            ignoreRestSiblings: true,
          },
        ],
      },
    },

    ...configs,
  ]);
