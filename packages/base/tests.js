/**
 * Rules applicable to test files.
 *
 * The rules in here are already included in the main config via an override
 * config, but can also be used directly.
 */
module.exports = {
  'extends': '@nighttrax/eslint-config-base',

  'rules': {
    'func-names': 0,
    'no-unused-expressions': 0,
    'no-console': 0
  }
};
