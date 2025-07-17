import pluginJs from "@eslint/js";
import * as tsEslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import * as pluginImportX from "eslint-plugin-import-x";
import * as tsParser from "@typescript-eslint/parser";
import stylistic from "@stylistic/eslint-plugin";

export const EXTENSIONS = "{js,mjs,cjs,ts,cts,mts,jsx,tsx}";

/**
 * @param {import('typescript-eslint').InfiniteDepthConfigWithExtends[]} [configs]
 *
 * @param {object} opts
 * @param {string[]} [opts.ignores] A list of globs that will be ignored.
 * @param {string[]} [opts.devDeps] A list of globs that will be matched for
 *   the `import-x/no-extraneous-dependencies` rule's `devDependencies` option.
 */
export const nighttraxTS = (
  configs = [],
  { devDeps = [], ignores = [] } = {},
) =>
  tsEslint.config([
    {
      linterOptions: {
        reportUnusedDisableDirectives: "error",
      },
    },
    { ignores: ["**/dist/", ...ignores] },
    {
      files: [`**/*.${EXTENSIONS}`],
      languageOptions: { parser: tsParser },
    },

    {
      plugins: {
        "@stylistic": stylistic,
      },
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
        "@stylistic/padding-line-between-statements": [
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
        "import-x/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: [
              `**/{webpack,rollup,vite,vitest}.config.${EXTENSIONS}`,
              `**/eslint.config.${EXTENSIONS}`,
              `**/*.{spec,test}.${EXTENSIONS}`,
              "**/tests/**/*",

              ...devDeps,
            ],
          },
        ],
      },
    },

    {
      rules: {
        // This is already turned off for TS files,
        // but leaving it on for JS requires globals, e.g., module.exports,
        // which is not worth the effort.
        "no-undef": "off",
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
