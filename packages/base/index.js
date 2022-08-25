const testOverrides = require("./tests.js");

module.exports = {
  extends: [
    "eslint-config-airbnb-base/rules/best-practices",
    "eslint-config-airbnb-base/rules/errors",
    "eslint-config-airbnb-base/rules/node",
    "eslint-config-airbnb-base/rules/style",
    "eslint-config-airbnb-base/rules/variables",
    "eslint-config-airbnb-base/rules/es6",
  ]
    .map(require.resolve)
    .concat([
      // This disables all stylistic rules from the above.
      "prettier",
    ]),

  plugins: ["prettier", "import", "@typescript-eslint"],

  parser: "@typescript-eslint/parser",

  settings: {
    "import/resolver": {
      // use <root>/tsconfig.json
      typescript: {},
    },
  },

  rules: {
    "prettier/prettier": "error",

    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: testOverrides.files,
      },
    ],

    "one-var": "off",
    "one-var-declaration-per-line": "off",
    "prefer-arrow-callback": "off",
    strict: "off",
    "no-use-before-define": ["off", { functions: false }],
    "no-underscore-dangle": "off",
    "no-plusplus": "off",

    // Enforce curly braces even for one liners.
    curly: ["error", "all"],

    // ESLint doesn't understand interfaces yet and marks them as undefined.
    "no-undef": "off",

    // These core rules don't work well on TS code, use the ones from the plugin instead.
    "no-unused-vars": "off",
    "no-shadow": "off",
    "no-redeclare": "off",

    // This is noisy while refactoring.
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        // Allow `let { ignored, ...rest} = foo`.
        ignoreRestSiblings: true,
      },
    ],

    // Allow `constructor(private foo: number) {}`
    "no-useless-constructor": "off",
    "no-empty-function": [
      "error",
      {
        allow: ["constructors"],
      },
    ],

    // TS will take care of this, and the rule disallows the following _valid_ pattern:
    // function(foo = 'bar', baz?: number) {}
    "default-param-last": "off",

    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: "block-like" },
      { blankLine: "always", prev: "*", next: "if" },
      { blankLine: "always", prev: "*", next: "export" },
    ],
  },

  overrides: [testOverrides],
};
