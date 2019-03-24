module.exports = {
  'extends': [
    'eslint-config-airbnb/rules/react',
  ].map(require.resolve),

  'rules': {
    'react/destructuring-assignment': 0,
    'react/jsx-one-expression-per-line': 0,
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
        '/^(_)?render.+$/', // any auxiliary render methods
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
    }]
  }
};
