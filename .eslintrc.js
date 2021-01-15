module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'global-require': 'off',
    'no-new': 0, // Intrusive when using Chart.js instances.
    'no-underscore-dangle': 0, // Chart.js uses underscore dangles (_) internally.
    'import/no-unresolved': 0, // False positives regarding imports that use aliases.
    'linebreak-style': 0,
    'indent': 0, // Do not let ESLint to decide how many tabs should be and keep it simple like so- ESlint just checks that tabs are used
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'max-len': 'off',
        'indent': 'off',
        'linebreak-style': 'off',
      },
    },
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
};
