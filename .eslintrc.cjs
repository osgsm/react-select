module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'standard-with-typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'prettier',
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
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },
  ],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jest', 'jsx-a11y', 'react', 'react-hooks'],
  ignorePatterns: ['.*.*js', '*.config.*js'],
  rules: {
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': ['error'],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowNullableObject: true,
      },
    ],
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        types: 'always',
      },
    ],
    'import/extensions': [
      'error',
      {
        ignorePackages: true,
        pattern: {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'object',
          'index',
        ],
        pathGroups: [
          {
            pattern: '{react,react-dom/**}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '{[A-Z]*,**/[A-Z]*}',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: './**.module.css',
            group: 'index',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'react/display-name': 'off',
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
    {
      files: [
        'src/**/__tests__/**/*.{js,jsx,ts,tsx}',
        'src/**/*.{test,spec}.{js,jsx,ts,tsx}',
      ],
      env: {
        'jest/globals': true,
      },
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      plugins: ['jest'],
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
