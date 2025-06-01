# Acrobattlers

A SvelteKit application built with Deno, Vite, and Vitest.

## Development Setup

### Prerequisites

- [Deno](https://deno.land/#installation) - Make sure you have Deno installed.

### Setup

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   cd acrobattlers
   ```

2. Set up Git hooks:
   ```bash
   deno task setup-hooks
   ```

3. Start the development server:
   ```bash
   deno task dev
   ```

## Available Tasks

- **Development Server**: `deno task dev`
- **Build for Production**: `deno task build`
- **Run Tests**: `deno task test`
- **Format Code**: `deno task fmt`
- **Lint Code**: `deno task lint`

## CI/CD

This project uses GitHub Actions for CI/CD with the following workflows:
- **Test**: Runs the test suite
- **Lint**: Checks code for linting issues
- **Format**: Ensures code is properly formatted
- **Build**: Builds the application and checks types

## Pre-commit Hooks

Pre-commit hooks are set up to run formatting, linting, type checking, and tests before committing code. To configure the hooks, run:

```bash
deno task setup-hooks
```
