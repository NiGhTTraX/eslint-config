require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["@nighttrax/eslint-config-ts", "@nighttrax/eslint-config-react"],

  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
};
