module.exports = {
  'extends': [
    'eslint-config-airbnb/rules/react-a11y',
  ].map(require.resolve),

  'rules': {
    // Autofocus is said to disorient users with cognitive disabilities.
    // However, the same spec
    // (https://w3c.github.io/html/sec-forms.html#autofocusing-a-form-control-the-autofocus-attribute)
    // says that user agents should provide a way to disable autofocus
    // behaviour.
    'jsx-a11y/no-autofocus': 0
  }
};
