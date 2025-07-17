import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import * as reactHooks from "eslint-plugin-react-hooks";
import { EXTENSIONS, nighttraxTS } from "@nighttrax/eslint-config-ts";

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
      react.configs.flat.recommended,
      react.configs.flat["jsx-runtime"],
      reactHooks.configs["recommended-latest"],
      jsxA11y["flatConfigs"].recommended,

      {
        settings: {
          react: {
            version,
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
          "react/jsx-no-leaked-render": "error",
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
