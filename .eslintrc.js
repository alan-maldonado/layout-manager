// http://eslint.org/docs/user-guide/configuring

module.exports = {
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    'vue/max-attributes-per-line': [2, {
      singleline: 3,
      multiline: {
        max: 3,
        allowFirstLine: true
      }
    }],
    'vue/no-side-effects-in-computed-properties': 0 // Known issue
  }
}
