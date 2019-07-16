module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: [
    'vue',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'prettier/prettier': ["error", {
      "semi": false,
      'trailingComma': "es5"
    }],
    "no-console": "off",
    "vue/html-closing-bracket-newline": [2, {"multiline": "never"}],
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/attributes-order': 'off',
    'vue/require-prop-types': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
}
