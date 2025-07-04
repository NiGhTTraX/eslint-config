import globals from "globals";
import tsEslint from "typescript-eslint";
import * as tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import * as reactHooks from "eslint-plugin-react-hooks";
import { nighttraxTS } from "@nighttrax/eslint-config-ts";

export const nighttraxReact = tsEslint.config([
  nighttraxTS,

  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser, parser: tsParser },
  },

  pluginReact.configs.flat.all,
  reactHooks.configs["recommended-latest"],

  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
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

      // Autofocus is said to disorient users with cognitive disabilities.
      // However, the same spec
      // (https://w3c.github.io/html/sec-forms.html#autofocusing-a-form-control-the-autofocus-attribute)
      // says that user agents should provide a way to disable autofocus behavior.
      "jsx-a11y/no-autofocus": "off",
    },
  },
]);
