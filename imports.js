module.exports = {
  'extends': [
    require.resolve('eslint-config-airbnb-base/rules/imports'),
    'plugin:import/errors'
  ],

  'rules': {
    // TODO: https://github.com/benmosher/eslint-plugin-import/issues/414
    'import/extensions': 0
  }
};
