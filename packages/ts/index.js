const testOverrides = require('@brudi/eslint-config-base/tests.js');

module.exports = {
  'extends': [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
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
