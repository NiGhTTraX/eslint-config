/**
 * Rules for linting a JSX app.
 */
module.exports = {
  'extends': [
    '@nighttrax/eslint-config/js',
    '@nighttrax/eslint-config/react'
  ].map(require.resolve),
};
