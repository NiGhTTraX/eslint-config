# brudi Toolbox ESLint config

brudi Toolbox `.

Base [Eslint shareable config](https://eslint.org/docs/developer-guide/shareable-configs) of brudi

[![NPM](https://img.shields.io/npm/v/@brudi/eslint-config-brudi.svg)](https://www.npmjs.com/package/@brudi/eslint-config-brudi)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fbrudi%2Feslint-config-brudi.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fbrudi%2Feslint-config-brudi?ref=badge_shield)

## Installation

Install the package with

`yarn add -D @brudi/eslint-config`

or

`npm install --save-dev @brudi/eslint-config`


## eslint Setup

Now add the config to either the `package.json`:

```json
{
  "eslintConfig": {
    "extends": ["@brudi"]
  }
}
```

or to the `.eslintrc` or `.eslintrc.js`:

```js
module.exports = {
  extends: ["@brudi"],
};
```

### React preset
```js
module.exports = {
  extends: ["@brudi/eslint-config-react"],
};

```
### Typescript preset

```js
module.exports = {
  extends: ["@brudi/eslint-config-ts"],
};
```

### Typescript + React preset
```js
module.exports = {
  extends: ["@brudi/eslint-config-tsx"],
};
```

## ESLint and Prettier

- works together with prettier, thanks to [eslint-plugin-prettier](prettier.io/docs/en/eslint.html#use-eslint-to-run-prettier)
- the ESLint rules are based on the great work of [airbnb's eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
  - they also have a smaller more compact one: [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- made for React environment but can be used on a eg. node-server environment as well)
- handles jest for tests as well
- `env`: Browser and Node environment
- `globals`: added some related jest variables
- `parser`: usage of babel (used babel-eslint parser)

Note: you can still overwrite the `env`, `globals` and `parser` in your local
`.eslintrc.js`.

## License
© brudi, 2019. Licensed under an
[Apache-2](https://github.com/brudi/brudi-hui/blob/master/LICENSE) license.





