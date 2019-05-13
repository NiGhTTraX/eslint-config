const { rules: testRules } = require('./tests.js');

module.exports = {
  'root': true,

  'extends': [
    'eslint-config-airbnb-base/rules/best-practices',
    'eslint-config-airbnb-base/rules/errors',
    'eslint-config-airbnb-base/rules/node',
    'eslint-config-airbnb-base/rules/style',
    'eslint-config-airbnb-base/rules/variables',
    'eslint-config-airbnb-base/rules/es6'
  ].map(require.resolve),

  'env': {
    'browser': true
  },

  'rules': {
    // Overwrite the airbnb one to force CallExpression arguments to be indented
    // like the first one.
    'indent': ['error', 2, {
      'SwitchCase': 1,
      'VariableDeclarator': 1,
      'outerIIFEBody': 1,
      'FunctionDeclaration': {
        'parameters': 1,
        'body': 1
      },
      'FunctionExpression': {
        'parameters': 1,
        'body': 1
      },
      'CallExpression': {
        'arguments': 'first'
      }
    }],
    'space-before-function-paren': 0,
    'comma-dangle': [2, 'never'],
    'one-var': 0,
    'one-var-declaration-per-line': 0,
    'prefer-arrow-callback': 0,
    'arrow-parens': [2, 'as-needed'],
    'strict': 0,
    'no-use-before-define': [2, {'functions': false}],
    'no-underscore-dangle': 0,
    'function-paren-newline': [2, 'consistent'],
    'object-curly-newline': [2, {'consistent': true }],
    'no-plusplus': 0,
  },

  'overrides': [{
    'files': [
        '**/tests/**/*.js',
        '**/tests/**/*.jsx',
        '**/tests/**/*.ts',
        '**/tests/**/*.tsx'
    ],
    'rules': testRules
  }]
};
