import tseslint from '@typescript-eslint/eslint-plugin'
import eslintParser from '@typescript-eslint/parser'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import yamlPlugin from 'eslint-plugin-yml'
import globals from 'globals'
import path from 'path'
import yamlParser from 'yaml-eslint-parser'

export default [
    {
        ignores: [
            'node_modules/**',
            'build/**',
            'dist/**',
            'coverage/**',
            '.storybook/**',
            'storybook-static/**',
            '*.config.js',
            '*.config.ts',
            'vite.config.*',
            'vitest.config.*',
            'tailwind.config.*',
            'postcss.config.*',
            '.eslintrc.*',
            '.gitignore',
            'package*.json',
            'tsconfig*.json',
            'README.md',
            '.husky/**',
            '__mocks__/**',
            'public/**'
        ]
    },
    {
        // Base configuration for all files
        files: ['src/**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2024,
                ...globals.node
            },
            parser: eslintParser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: path.resolve('./'),
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        plugins: {
            '@typescript-eslint': tseslint,
            react: eslintPluginReact,
            'react-hooks': eslintPluginReactHooks,
            'jsx-a11y': eslintPluginJsxA11y,
            import: eslintPluginImport
        },
        rules: {
            // TypeScript specific rules
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { argsIgnorePattern: '^_' }
            ],
            '@typescript-eslint/no-non-null-assertion': 'warn',

            // React 19+
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/jsx-props-no-spreading': 'off',

            // React Hooks
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // Accessibility
            'jsx-a11y/alt-text': 'error',
            'jsx-a11y/aria-props': 'error',
            'jsx-a11y/aria-role': 'error',

            // Import
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',

            // General code style rules - relaxed
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-debugger': 'warn',
            'no-nested-ternary': 'warn',
            'no-param-reassign': 'off',
            'prefer-const': 'warn'
        }
    },

    // Test files configuration
    {
        files: [
            'src/**/*.test.{ts,tsx}',
            'src/**/*.spec.{ts,tsx}',
            'src/**/tests/**/*'
        ],
        languageOptions: {
            globals: globals.vitest
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            'no-console': 'off'
        }
    },
    {
        files: ['**/*.{yaml,yml}'],
        languageOptions: {
            parser: yamlParser
        },
        plugins: {
            yml: yamlPlugin
        },
        rules: {
            'yml/no-empty-document': 'error',
            'yml/no-empty-mapping-value': 'warn',
            'yml/no-empty-key': 'error',
            'yml/no-empty-sequence-entry': 'error',
            'yml/no-multiple-empty-lines': 'warn',
            'yml/no-irregular-whitespace': 'error',
            'yml/require-string-key': 'error',
            // Let Prettier handle the following rules
            'yml/plain-scalar': 'off',
            'yml/quotes': 'off',
            'yml/sort-keys': 'off',
            'yml/key-spacing': 'off',
            'yml/block-mapping': 'off',
            'yml/indent': 'off'
        }
    }
]
