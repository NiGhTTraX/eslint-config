import react from "@eslint-react/eslint-plugin";
import eslintReactKit from "@eslint-react/kit";
import { EXTENSIONS, nighttraxTS } from "@nighttrax/eslint-config-ts";
import reactYouMightNotNeedAnEffect from "eslint-plugin-react-you-might-not-need-an-effect";
import { functionComponentDefinition } from "./rules/function-component-definition.mjs";

/**
 * @param {import('typescript-eslint').InfiniteDepthConfigWithExtends[]} [configs]
 *
 * @param {object} opts
 * @param {string[]} [opts.ignores] A list of globs that will be ignored.
 * @param {string[]} [opts.devDeps] A list of globs that will be matched for
 *   the `import-x/no-extraneous-dependencies` rule's `devDependencies` option.
 * @param {string} [opts.version] React version, defaults to "detect".
 */
export const nighttraxReact = (
  configs = [],
  { devDeps = [], ignores: ignores = [], version = "detect" } = {},
) =>
  nighttraxTS(
    [
      react.configs["strict-type-checked"],
      eslintReactKit().use(functionComponentDefinition).getConfig(),

      {
        plugins: {
          "@no-effect": reactYouMightNotNeedAnEffect,
        },
        settings: {
          "react-x": {
            version,
          },
        },
        rules: {
          "@stylistic/jsx-curly-brace-presence": "error",
          "@stylistic/jsx-shorthand-boolean": "error",
          "@stylistic/jsx-shorthand-fragment": "error",

          "@no-effect/no-pass-live-state-to-parent": "error",
          "@no-effect/no-event-handler": "error",
        },
      },

      ...configs,
    ],
    {
      ignores,
      devDeps: [
        `**/.storybook/main.${EXTENSIONS}`,
        `**/.storybook/preview.${EXTENSIONS}`,
        `**/*.stories.${EXTENSIONS}`,
        `metro.config.${EXTENSIONS}`,
        `app.config.${EXTENSIONS}`,

        ...devDeps,
      ],
    },
  );
