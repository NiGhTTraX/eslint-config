## Intro

This config contains rules specific to TS React projects. It's meant to be used together with [eslint-config-ts](../ts), and is included in [eslint-config-tsx](../tsx).


## Install

```sh
npm i eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
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
