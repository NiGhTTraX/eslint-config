const testOverrides = require("./tests.js");

module.exports = {
  root: true,

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

  env: {
    browser: true,
  },

  plugins: ["prettier", "import"],

  rules: {
    "prettier/prettier": "error",

    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: false,
      },
    ],

    "one-var": "off",
    "one-var-declaration-per-line": "off",
    "prefer-arrow-callback": "off",
    strict: "off",
    "no-use-before-define": ["off", { functions: false }],
    "no-underscore-dangle": "off",
    "no-plusplus": "off",
  },

  overrides: [testOverrides],
};
