const { rules: testRules } = require('./tests.js');

module.exports = {
  'root': true,

  'extends': [
    'eslint-config-airbnb-base/rules/best-practices',
    'eslint-config-airbnb-base/rules/errors',
    'eslint-config-airbnb-base/rules/node',
    'eslint-config-airbnb-base/rules/style',
    'eslint-config-airbnb-base/rules/variables',
    'eslint-config-airbnb-base/rules/es6',
  ].map(require.resolve).concat([
    // This disables all stylistic rules from the above.
    'prettier'
  ]),

  'env': {
    'browser': true
  },

  'plugins': ['prettier'],

  'rules': {
    'prettier/prettier': 'error',

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
