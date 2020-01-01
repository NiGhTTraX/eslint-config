module.exports = {
  'files': [
    '**/tests/**/*.js',
    '**/tests/**/*.jsx',
    '**/tests/**/*.ts',
    '**/tests/**/*.tsx'
  ],
  'rules': {
    'func-names': 0,
    'no-unused-expressions': 0,
    'no-console': 0,
    'no-empty-function': 0,

    // TODO: figure out how to lint these files for extra dev deps
    'import/no-extraneous-dependencies': 0
  }
};
