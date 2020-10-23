module.exports = {
  'extends': [
    '@brudi/eslint-config-ts',
    '@brudi/eslint-config-react'
  ],
  rules: {
    indent: 0,
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
      },
    ],
    // TODO: enable @typescript-eslint/ban-types rule
    '@typescript-eslint/ban-types': 'off',
    // TODO: enable no-namespace rule
    '@typescript-eslint/no-namespace': 'off',
    'no-console': [
      2,
      {
        allow: ['warn', 'error'],
      },
    ],
  },
};
