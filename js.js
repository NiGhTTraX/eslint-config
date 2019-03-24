/**
 * Rules for linting a JS lib.
 */
module.exports = {
  'parser': 'babel-eslint',

  'extends': [
    '@nighttrax/eslint-config
  ].map(require.resolve)
};
