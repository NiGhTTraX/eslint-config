/**
 * Rules for linting a JS lib.
 */
module.exports = {
  'parser': 'babel-eslint',

  'extends': [
    '@nighttrax/eslint-config-base'
  ].map(require.resolve),
};
