module.exports = {
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/recommended",
    /** @see https://github.com/prettier/eslint-config-prettier#installation */
    "prettier/standard",
    "prettier/react",
    "plugin:prettier/recommended",
    "react-app",
  ],
  parser: "babel-eslint",
  plugins: [
    // CI で warn も検知可能にするため、全て error にする
    "only-error",
    "sort-keys-fix",
  ],
  rules: {
    "import/no-default-export": "error",
    "no-param-reassign": "error",
    "no-var": "error",
    "object-shorthand": "error",

    // prettier
    "prettier/prettier": [
      "error",
      {
        semi: false,
      },
    ],

    "react/jsx-boolean-value": "error",
    "react/jsx-filename-extension": "error",
    // jsx pragma に @emotion/core#jsx を使っている場合、Short Syntax 使えないため
    "react/jsx-fragments": ["error", "element"],
    "react/jsx-sort-props": "error",
    "react/no-access-state-in-setstate": "error",
    "react/no-array-index-key": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-unsafe": ["error", { checkAliases: true }],
    "react/prefer-stateless-function": "error",
    "react/prop-types": "off",
    "react/self-closing-comp": [
      "error",
      {
        // empty な html が必要なケースはほとんどないため
        html: false,
      },
    ],
    "react/void-dom-elements-no-children": "error",
    "require-await": "error",
    "sort-keys-fix/sort-keys-fix": "error",
  },
}
