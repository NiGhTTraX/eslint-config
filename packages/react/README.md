## Install

```sh
npm i @nighttrax/eslint-config-react

# https://github.com/eslint/eslint/issues/3458
npm i eslint-plugin-react eslint-plugin-jsx-a11y
```


## Use

This config is meant to be applied on top of one of the other base configs.

```js
module.exports = {
  'root': true,
  'extends': [
    '@nighttrax/eslint-config-js',
    '@nighttrax/eslint-config-react'
  ]
};
```
