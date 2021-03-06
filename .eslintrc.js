module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true
  },
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'jsx-a11y/click-events-have-key-events': 1,
    'jsx-a11y/no-static-element-interactions': 1,
    'no-debugger': 1,
    'no-unused-vars': 1,
    'no-unused-expressions': 1,
    'react/destructuring-assignment': 1,
    'react/prop-types': 0,
    'react/require-default-props': 1,
    'react/static-property-placement': 1,
    'react/prefer-stateless-function': 1,
    'react/jsx-indent': 1,
    'react/jsx-props-no-spreading': 1,
    'react/jsx-one-expression-per-line': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none'
      }
    ]
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};
