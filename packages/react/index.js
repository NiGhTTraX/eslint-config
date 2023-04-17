module.exports = {
  extends: ["eslint-config-airbnb/rules/react"]
    .map(require.resolve)
    .concat(["plugin:react-hooks/recommended", "plugin:react/recommended"]),

  env: {
    browser: true,
  },

  rules: {
    // Prefer types.
    "react/prop-types": "off",
    // Prefer default arguments.
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/destructuring-assignment": "off",

    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/prefer-stateless-function": "off",
    "react/jsx-no-bind": "off",
    "react/sort-comp": [
      "error",
      {
        order: [
          "displayName",
          "statics",
          "static-methods",
          "defaultProps",
          "state",
          "constructor",
          "render",
          "/^(_)?render.+$/", // any auxiliary render methods
          "componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "componentDidUpdate",
          "componentWillUnmount",
          "/^on[A-Z].+$/", // event handlers
          "everything-else",
          "/^_.+$/", // private methods
        ],
      },
    ],

    // This is breaking a lot of my projects that use const Foo = () => {}. I
    // haven't noticed any name inference problems with that pattern, so I'll
    // leave this off for now.
    "react/function-component-definition": "off",
  },
};
