module.exports = {
  'extends': [
    '@nighttrax/eslint-config-base',
    // This disables all stylistic rules from the above.
    'prettier/@typescript-eslint'
  ].map(require.resolve),

  'parser': '@typescript-eslint/parser',

  'plugins': [
    '@typescript-eslint'
  ],

  'rules': {
    // ESLint doesn't understand interfaces yet and marks them as undefined.
    'no-undef': 0,

    // This is noisy while refactoring.
    '@typescript-eslint/no-unused-vars': 2
  }
};
