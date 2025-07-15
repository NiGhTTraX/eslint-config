import globals from "globals";
import tsEslint from "typescript-eslint";
import * as tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import * as reactHooks from "eslint-plugin-react-hooks";
import { nighttraxTS } from "@nighttrax/eslint-config-ts";

/**
 * @param {import('typescript-eslint').InfiniteDepthConfigWithExtends[]} configs
 */
export const nighttraxReact = (...configs) =>
  tsEslint.config([
    nighttraxTS(),

    {
      files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
      languageOptions: { globals: globals.browser, parser: tsParser },
    },

    react.configs.flat.recommended,
    react.configs.flat["jsx-runtime"],
    reactHooks.configs["recommended-latest"],
    jsxA11y.flatConfigs.recommended,

    {
      settings: {
        react: {
          version: "detect",
        },
      },
      rules: {
        // This usually warns for memoized or forwardRef-ed components, which is fine.
        "react/display-name": "off",
        "react/function-component-definition": [
          "error",
          {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function",
          },
        ],
        "react/jsx-handler-names": [
          "error",
          {
            eventHandlerPrefix: "on",
            eventHandlerPropPrefix: "on",
          },
        ],
        "react/jsx-no-leaked-render": "error",
      },
    },

    ...configs,
  ]);
