module.exports = {
  'extends': [
    '@nighttrax/eslint-config-ts',
    '@nighttrax/eslint-config-react'
  ].map(require.resolve)
};
