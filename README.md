## Install

```sh
npm install --save-dev @nighttrax/eslint-config \
      babel-eslint \
      eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

Unfortunately, until
[eslint/eslint#3458](https://github.com/eslint/eslint/issues/3458) is resolved,
plugins need to be installed manually.


## Use

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
