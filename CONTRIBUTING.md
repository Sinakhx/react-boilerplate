# Contributing to React Boilerplate

Thank you for considering contributing to this project! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and considerate of others when contributing to this project. We aim to foster an inclusive and welcoming community.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/react-boilerplate.git`
3. Install dependencies: `npm install`
4. Set up pre-commit hooks: `npm run init:husky`
5. Create a new branch for your feature: `git checkout -b feature/your-feature-name`

## Development Workflow

1. Make your changes following the project's coding standards
2. Run tests to ensure your changes don't break existing functionality: `npm test`
3. Run linting to ensure code quality: `npm run lint`
4. Format your code: `npm run prettier`
5. Commit your changes using conventional commit format (see below)
6. Push to your fork and submit a pull request

## Commit Message Guidelines

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification. This leads to more readable messages that are easy to follow when looking through the project history and enables automatic versioning and changelog generation.

Each commit message should be structured as follows:

```
<type>(<scope>): <subject>
```

Examples:

```
feat(button): add ripple effect to button component
fix(api): handle network errors in axios interceptors
docs(readme): update installation instructions
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to our CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files

## Pull Request Process

1. Update the README.md or relevant documentation with details of changes if appropriate
2. Make sure all tests pass and linting issues are resolved
3. The PR will be merged once it receives approval from maintainers

## Code Style

- Follow the ESLint and Prettier configurations included in the project
- Use TypeScript for type safety
- Follow the existing project structure and naming conventions
- Write tests for new features and bug fixes

## Testing

- Write unit tests for new functionality
- Ensure all tests pass before submitting a PR
- Consider adding integration tests for complex features

## Documentation

- Update documentation for any changed functionality
- Use JSDoc comments for functions and components
- Keep the README.md up to date

## Questions?

If you have any questions or need help, please open an issue in the repository.

Thank you for contributing to React Boilerplate!
