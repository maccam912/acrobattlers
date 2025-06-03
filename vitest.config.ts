import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/**/*.test.ts'],
    watch: false, // Don't watch for changes, just run once
    reporter: ['verbose'], // Show detailed test results
  },
});
