# Migration Guide

This guide helps you migrate from previous versions of the React Boilerplate to the 2026 version.

## Upgrading from Pre-2026 Versions

### Dependencies

1. **Update Node.js and npm**
    - Node.js >= 18.0.0
    - npm >= 9.0.0

2. **Update package.json**
    - Replace your dependencies section with the updated versions from the latest package.json
    - Key updates:
        - React 19
        - TypeScript 5.9
        - Vite 7
        - ESLint 9
        - TanStack Query 5
        - React Router 7

3. **Install new dependencies**
    ```bash
    npm install
    ```

### Configuration Files

1. **TypeScript Configuration**
    - Update your tsconfig.json to use the new ES2024 features
    - Add verbatimModuleSyntax and other modern TypeScript options

2. **ESLint Configuration**
    - Replace your .eslintrc with the new eslint.config.js flat configuration
    - This requires ESLint 9+

3. **Vite Configuration**
    - Update your vite.config.ts for Vite 7 compatibility

4. **Testing Configuration**
    - Add vitest.config.ts for improved testing setup

### Code Changes

1. **React Components**
    - Update components to use modern React patterns
    - Replace class components with functional components and hooks
    - Use memo for performance optimization where appropriate

2. **API and Data Fetching**
    - Update to TanStack Query 5 patterns
    - Use the improved error handling utilities

3. **Testing**
    - Update tests to use the latest Testing Library patterns
    - Use the new test utilities in src/config/tests/

### Breaking Changes to Watch For

1. **React 19 Changes**
    - Check for deprecated lifecycle methods
    - Review use of context API for any changes

2. **TypeScript 5.9 Changes**
    - Stricter type checking may reveal previously undetected issues
    - verbatimModuleSyntax requires type imports to use the 'type' keyword

3. **ESLint 9 Flat Config**
    - Rules may be applied differently than in previous versions
    - Custom plugins need to be imported directly

4. **Vite 7 Changes**
    - Different handling of environment variables
    - Updated plugin API

## Step-by-Step Migration Process

1. **Backup your project**

    ```bash
    git checkout -b migration-to-2026
    ```

2. **Update dependencies**
    - Update package.json
    - Run `npm install`

3. **Update configuration files**
    - tsconfig.json
    - eslint.config.js (replacing .eslintrc)
    - vite.config.ts

4. **Fix TypeScript and ESLint errors**

    ```bash
    npm run typecheck
    npm run lint
    ```

5. **Update components and hooks**
    - Modernize React patterns
    - Update API calls to use TanStack Query

6. **Run tests and fix failures**

    ```bash
    npm test
    ```

7. **Test the application**
    ```bash
    npm run dev
    ```

## Need Help?

If you encounter issues during migration, please:

1. Check the React, TypeScript, and Vite documentation for specific migration guides
2. Open an issue in the repository with details about your problem
3. Consider contributing your migration solutions back to this guide
