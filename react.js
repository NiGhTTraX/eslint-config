module.exports = {
  'extends': [
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
  ].map(require.resolve),

  'rules': {
    'react/jsx-filename-extension': 0,
    'react/jsx-wrap-multilines': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-max-props-per-line': [2, { when: 'multiline', maximum: 3 }],
    'react/jsx-no-bind': 0,
    // TODO: https://github.com/yannickcr/eslint-plugin-react/issues/1176
    'react/jsx-indent': 0,
    // TODO: https://github.com/yannickcr/eslint-plugin-react/issues/1466
    'react/jsx-closing-tag-location': 0,
    'react/sort-comp': [2, {
      order: [
        'displayName',
        'propTypes',
        'mixins',
        'statics',
        'static-methods',
        'defaultProps',
        'state',
        'constructor',
        'render',
        '/^_render.+$/', // any auxiliary _render methods
        'componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        '/^on[A-Z].+$/', // event handlers
        'everything-else',
        '/^_.+$/' // private methods
      ]
    }],

    // Autofocus is said to dissorient users with cognitive disabilities.
    // However, the same spec
    // (https://w3c.github.io/html/sec-forms.html#autofocusing-a-form-control-the-autofocus-attribute)
    // says that user agents should provide a way to disable autofocus
    // behaviour.
    'jsx-a11y/no-autofocus': 0
  }
};
