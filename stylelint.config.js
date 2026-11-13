module.exports = {
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  extends: ['stylelint-config-standard-scss'],
  rules: {
    // Tailwind directives and at-rules
    'scss/at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['apply', 'screen', 'tailwind'] }
    ],
    // Existing class names are not kebab-case
    'selector-class-pattern': null
  }
}
