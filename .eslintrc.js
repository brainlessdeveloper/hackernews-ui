// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'no-constant-condition': [2, { checkLoops: false }],
    'comma-dangle': [1, 'always-multiline'],
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/order': [2, { 'newlines-between': 'always', 'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'] }],
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    'key-spacing': [1, { mode: 'strict' }],
    'max-len': [1, 100],
    'no-console': 2,
    'no-multi-spaces': 1,
    'object-curly-spacing': [1, 'always'],
    'semi': [2, 'never'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
