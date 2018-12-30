/**
 * Rules for linting a JSX app.
 */
module.exports = {
  'extends': [
    '@nighttrax/eslint-config',
    '@nighttrax/eslint-config/react'
  ].map(require.resolve),
};
