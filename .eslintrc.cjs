module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:storybook/recommended',
    'plugin:jsdoc/recommended-typescript',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'react',
    'react-hooks',
    'jsx-a11y',
    'jsdoc',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-children-prop': 'off',
    'jsdoc/check-tag-names': [
      'warn',
      {
        typed: true,
        definedTags: ['component'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: [
          './tsconfig.json',
          './tsconfig.base.json',
          './tsconfig.node.json',
        ],
      },
      node: true,
    },
    'jsx-a11y': {
      polymorphicPropName: 'as',
    },
  },
};
