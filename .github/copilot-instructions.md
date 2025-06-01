# Acrobattlers - GitHub Copilot Instructions

This document provides GitHub Copilot with context about this codebase and instructions for common development tasks.

## Codebase Overview

This project is a SvelteKit application with the following technology stack:

- **SvelteKit** (v5.x): Modern web application framework based on Svelte
- **Vite** (v6.x): Fast bundler and development server 
- **Vitest** (v3.x): Testing framework compatible with Vite
- **Deno** (v1.x): JavaScript/TypeScript runtime used for tasks and build scripts
- **TypeScript**: Strongly-typed programming language that builds on JavaScript
- **ESLint** (v9.x): JavaScript and TypeScript linter
- **Prettier**: Code formatter for consistent code style

## Project Structure

- `/src`: Main source code 
  - `/lib`: Shared components and utilities
  - `/routes`: SvelteKit routes (pages)
- `/static`: Static assets (images, fonts, etc.)
- `.github`: GitHub specific files (workflows, templates)
- Development configuration: `vite.config.ts`, `svelte.config.js`, `tsconfig.json`, etc.

## Common Commands

### Development

To start the development server:

```bash
# Using npm
npm run dev

# Using Deno
deno task dev
```

This will start the development server at http://localhost:5173 (or another available port if 5173 is in use).

### Testing

Run all tests:

```bash
# Using npm
npm run test

# Using Deno
deno task test
```

Run tests in watch mode (useful during development):

```bash
# Using npm
npm run test:unit

# Using Deno
deno test --allow-all --watch
```

### Code Quality

Format code using Prettier:

```bash
# Using npm
npm run format

# Using Deno
deno task fmt
```

Lint code using ESLint:

```bash
# Using npm
npm run lint

# Using Deno
deno task lint
```

Check types using TypeScript and SvelteKit sync:

```bash
npm run check
```

### Building for Production

Build the application for production:

```bash
# Using npm
npm run build

# Using Deno
deno task build
```

Preview the production build locally:

```bash
npm run preview
```

### Git Hooks Setup

This project uses Git hooks to ensure code quality. Set them up with:

```bash
deno task setup-hooks
```

## CI/CD

GitHub Actions are used for Continuous Integration and Deployment with workflows for:
- Running tests
- Checking linting
- Verifying formatting
- Building the application

## Development Patterns and Best Practices

- Use TypeScript for type safety
- Create unit tests for new functionality
- Format and lint code before committing
- Follow SvelteKit conventions for routing and component structure
- Keep components focused on a single responsibility
- Use Svelte stores for state management when needed
