module.exports = {
  'extends': [
    '@nighttrax/eslint-config-base',
    '@nighttrax/eslint-config-react'
  ].map(require.resolve),
};
