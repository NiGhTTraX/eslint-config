const testOverrides = require('@nighttrax/eslint-config-base/tests.js');

module.exports = {
  'extends': [
    '@nighttrax/eslint-config-base',
    // This disables all stylistic rules from the above.
    'prettier/@typescript-eslint'
  ],

  'parser': '@typescript-eslint/parser',

  'plugins': [
    '@typescript-eslint'
  ],

  'settings': {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      'typescript': {},
    }
  },

  'rules': {
    // ESLint doesn't understand interfaces yet and marks them as undefined.
    'no-undef': 0,

    // This is noisy while refactoring.
    '@typescript-eslint/no-unused-vars': 2,

    // Allow `constructor(private foo: number) {}`
    'no-useless-constructor': 0,
    'no-empty-function': ['error', {
      'allow': ['constructors']
    }]
  },

  'overrides': [{
    'files': testOverrides.files,
    'rules': {
      // Re-apply this override because we've customized the error above.
      'no-empty-function': 0
    }
  }]
};
