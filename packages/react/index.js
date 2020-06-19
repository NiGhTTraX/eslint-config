module.exports = {
  'extends': [
    'eslint-config-airbnb/rules/react',
  ].map(require.resolve).concat([
    // This disables all stylistic rules from the above.
    'prettier/react'
  ]),

  'rules': {
    // Prefer types.
    'react/prop-types': 'off',
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': ['error',
      { 'extensions': ['.tsx', '.jsx']
    }],
    'react/prefer-stateless-function': 0,
    'react/jsx-no-bind': 0,
    'react/sort-comp': [2, {
      order: [
        'displayName',
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
