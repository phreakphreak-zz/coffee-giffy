module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'key-spacing': ['warn', { beforeColon: false, }],
    'comma-dangle': ['warn', {
      arrays: 'never',
      objects: 'always',
      imports: 'never',
      exports: 'never',
      functions: 'never',
    }
    ],
    'no-unused-vars': ['warn'],
    'arrow-spacing': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'], }],

  },
};
