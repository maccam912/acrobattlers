import { defineConfig } from 'vite';

export default defineConfig({
  root: './client',
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '@': './src',
    },
  },
});