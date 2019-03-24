/**
 * Rules for linting a TS lib.
 */
module.exports = {
  'extends': [
    '@nighttrax/eslint-config'
  ].map(require.resolve),

  'parser': '@typescript-eslint/parser',

  'plugins': [
    '@typescript-eslint'
  ],

  'rules': {
    // ESLint doesn't understand interfaces yet and marks them as undefined.
    'no-undef': 0,

    '@typescript-eslint/no-unused-vars': 2
  }
};
