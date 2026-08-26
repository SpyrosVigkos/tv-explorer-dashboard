module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  plugins: ["@typescript-eslint"],
  // `vue-eslint-parser` handles .vue files and delegates <script> blocks to the
  // parser matching their `lang`. Inlined from @vue/eslint-config-typescript,
  // which has no release supporting both eslintrc and eslint-plugin-vue 10.
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: {
      js: "espree",
      cjs: "espree",
      mjs: "espree",
      ts: "@typescript-eslint/parser",
      tsx: "@typescript-eslint/parser",
    },
    ecmaVersion: 2020,
    sourceType: "module",
    extraFileExtensions: [".vue"],
  },
  extends: [
    "plugin:vue/recommended",
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".mjs", ".cjs", ".ts", ".tsx", ".vue"],
      },
    },
  },
  rules: {
    // `avoidEscape` keeps this rule from fighting Prettier on strings
    // that themselves contain double quotes
    quotes: ["error", "double", { avoidEscape: true }],
    "vue/no-unused-vars": "error",
    // Pre-existing single-word components; the rule still guards new ones
    "vue/multi-word-component-names": [
      "error",
      { ignores: ["Footer", "Header", "Logo", "Watchlist"] },
    ],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    // TypeScript resolves these extensions itself
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    // Tests and build config are not shipped, so devDependencies are fine there
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.config.{js,cjs,ts}",
          "**/.eslintrc.cjs",
          "src/tests/**",
          "**/*.spec.ts",
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.vue"],
      rules: {
        // Superseded by their @typescript-eslint equivalents
        "no-unused-vars": "off",
        "no-undef": "off",
      },
    },
  ],
};
