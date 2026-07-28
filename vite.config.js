import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/personal-portfolio/', // <-- Set to repo name surrounded by slashes
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
  },
});