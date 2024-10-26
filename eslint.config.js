import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";
import testingLibrary from "@testing-library/eslint-plugin";
import jestDom from "eslint-plugin-jest-dom";
import tailwindcss from "eslint-plugin-tailwindcss";
import vitest from "eslint-plugin-vitest";
import checkFile from "eslint-plugin-check-file";

export default [
  {
    ignores: [
      "node_modules/*",
      "public/mockServiceWorker.js",
      "generators/*",
      "dist",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    env: {
      node: true,
      es6: true,
    },
    plugins: {
      "check-file": checkFile,
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
      react: reactPlugin,
      "jsx-a11y": jsxA11y,
      prettier: prettier,
      "@typescript-eslint": typescriptEslint,
      "testing-library": testingLibrary,
      "jest-dom": jestDom,
      tailwindcss: tailwindcss,
      vitest: vitest,
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        typescript: {},
      },
    },
    extends: [
      js.configs.recommended,
      "eslint:recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:prettier/recommended",
      "plugin:testing-library/react",
      "plugin:jest-dom/recommended",
      "plugin:tailwindcss/recommended",
      "plugin:vitest/legacy-recommended",
    ],
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            {
              target: "./src/features/auth",
              from: "./src/features",
              except: ["./auth"],
            },
            {
              target: "./src/features/comments",
              from: "./src/features",
              except: ["./comments"],
            },
            {
              target: "./src/features/discussions",
              from: "./src/features",
              except: ["./discussions"],
            },
            {
              target: "./src/features/teams",
              from: "./src/features",
              except: ["./teams"],
            },
            {
              target: "./src/features/users",
              from: "./src/features",
              except: ["./users"],
            },
            {
              target: "./src/features",
              from: "./src/app",
            },
            {
              target: [
                "./src/components",
                "./src/hooks",
                "./src/lib",
                "./src/types",
                "./src/utils",
              ],
              from: ["./src/features", "./src/app"],
            },
          ],
        },
      ],
      "import/no-cycle": "error",
      "linebreak-style": ["error", "unix"],
      "react/prop-types": "off",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/default": "off",
      "import/no-named-as-default-member": "off",
      "import/no-named-as-default": "off",
      "react/react-in-jsx-scope": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "prettier/prettier": ["error", {}, { usePrettierrc: true }],
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/*.{ts,tsx}": "KEBAB_CASE",
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
    },
  },
  {
    plugins: { "check-file": checkFile },
    files: ["src/**/!(__tests__)/*"],
    rules: {
      "check-file/folder-naming-convention": [
        "error",
        {
          "**/*": "KEBAB_CASE",
        },
      ],
    },
  },
];
