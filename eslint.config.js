import globals from 'globals'
import tseslint from 'typescript-eslint'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginStorybook from 'eslint-plugin-storybook'

export default tseslint.config(
    {
        // Base configuration for all files
        files: ['**/*.{js,jsx,ts,tsx}'],
        ignores: ['node_modules/**', 'build/**', 'dist/**', 'coverage/**'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2024,
                ...globals.node
            },
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.json',
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
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
            'prefer-const': 'warn',
            'prettier/prettier': 'warn'
        }
    },

    // Storybook specific configuration
    {
        files: ['**/*.stories.{ts,tsx}', '.storybook/**/*'],
        plugins: {
            storybook: eslintPluginStorybook
        },
        rules: {
            'storybook/hierarchy-separator': 'warn',
            'storybook/default-exports': 'warn',
            'import/no-default-export': 'off'
        }
    },

    // Test files configuration
    {
        files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}', '**/tests/**/*'],
        languageOptions: {
            globals: globals.vitest
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            'no-console': 'off'
        }
    }
)
