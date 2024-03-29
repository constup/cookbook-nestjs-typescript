module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'max-len': ['error', {
      'code': 120,
      'comments': 120,
      'ignoreUrls': true,
      'ignoreTemplateLiterals': true,
      'ignoreTrailingComments': true,
      'ignoreRegExpLiterals': true,
      'ignoreComments': true,
      'ignorePattern': "^import.*$", // long import statements
    }],
    "indent": ["error", 4]
  },
};
