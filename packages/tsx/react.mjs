import globals from "globals";
import tsEslint from "typescript-eslint";
import * as tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import * as reactHooks from "eslint-plugin-react-hooks";
import { nighttraxTS } from "@nighttrax/eslint-config-ts";

export const nighttraxReact = tsEslint.config([
  nighttraxTS,

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
      "react/display-name": "off",
      "react/prefer-read-only-props": "off",
      "react/function-component-definition": "off",
      "react/no-multi-comp": "off",
      "react/jsx-filename-extension": "off",
      "react/jsx-max-depth": "off",
      "react/jsx-no-bind": "off",
      "react/require-default-props": "off",
      "react/jsx-sort-props": "off",
      "react/jsx-no-literals": "off", // TODO: enable for translations
      "react/destructuring-assignment": "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-handler-names": "off",
      "react/no-unused-prop-types": "off",
      "react/forbid-component-props": "off",
      "react/hook-use-state": "off",
    },
  },
]);
