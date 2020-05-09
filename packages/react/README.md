## Install

```sh
npm i @nighttrax/eslint-config-react
```


## Use

This config is meant to be applied on top of one of the other base configs.

```js
module.exports = {
  'root': true,
  'extends': [
    '@nighttrax/eslint-config-ts',
    '@nighttrax/eslint-config-react'
  ]
};
```
