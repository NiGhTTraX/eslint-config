## Install

```sh
npm i @nighttrax/eslint-config-tsx

# https://github.com/eslint/eslint/issues/3458
npm i eslint-plugin-react eslint-plugin-jsx-a11y \
    @typescript-eslint/eslint-plugin
```


## Use

```js
module.exports = {
  'root': true,
  'extends': [
    '@nighttrax/eslint-config-tsx',
  ]
};
```
