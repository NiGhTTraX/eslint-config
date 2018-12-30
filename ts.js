/**
 * Rules for linting a TS lib.
 */
module.exports = {
  'extends': [
    '@nighttrax/eslint-config'
  ].map(require.resolve),

  'parser': 'typescript-eslint-parser',

  'plugins': [
    'typescript'
  ],

  'rules': {
    // ESLint doesn't understand interfaces yet and marks them as undefined.
    'no-undef': 0,

    'typescript/no-unused-vars': 2
  }
};
