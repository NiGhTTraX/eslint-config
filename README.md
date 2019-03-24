## Install

```sh
npm i @nighttrax/eslint-config

# Or equivalent.
npm i babel-eslint

# These are optional and are required by their respective configs.
npm i \
    eslint-plugin-import \
    eslint-plugin-jsx-a11y \
    eslint-plugin-react \
    @typescript-eslint/eslint-plugin
```

Unfortunately, until
[eslint/eslint#3458](https://github.com/eslint/eslint/issues/3458) is resolved,
plugins need to be installed manually.


## Use

```js
// .eslintrc.js
module.exports = {
  'extends': [
    '@nighttrax/eslint-config/jsx',
  ].map(require.resolve)
};
```

or more granular

```js
// .eslintrc.js
module.exports = {
  'extends': [
    '@nighttrax/eslint-config',
    '@nighttrax/eslint-config/react',
    '@nighttrax/eslint-config/react-a11y',
    '@nighttrax/eslint-config/imports'
  ].map(require.resolve)
};
```
