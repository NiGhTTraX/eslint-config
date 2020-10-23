## Install

```sh
npm i @brudi/eslint-config-react
```


## Use

This config is meant to be applied on top of one of the other base configs.

```js
module.exports = {
  'root': true,
  'extends': [
    '@brudi/eslint-config-ts',
    '@brudi/eslint-config-react'
  ]
};
```
