module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  plugins: [
    'react-refresh',
    "react",
    "@typescript-eslint",
    "eslint-plugin-import-helpers",
    "prettier"
  ],
  
  
}
