## Intro

My ESLint config for TS projects. It uses https://www.npmjs.com/package/@rushstack/eslint-patch to bundle all necessary plugins.


## Install

```sh
npm i @nighttrax/eslint-config-ts
```


## Use

```js
module.exports = {
  'root': true,
  'extends': [
    '@nighttrax/eslint-config-ts',
  ]
};
```
