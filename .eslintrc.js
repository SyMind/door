module.exports = {
  root: true,
  env: {
    es6: true,
    'react-native/react-native': true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  plugins: [
    'react-native'
  ],
  overrides: [
    {
      files: ['*.js'],
      parser: '@babel/eslint-parser'
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript'
      ],
      rules: {
        '@typescript-eslint/ban-types': 0
      }
    }
  ],
  rules: {
    'react/prop-types': 0,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2
  }
};
