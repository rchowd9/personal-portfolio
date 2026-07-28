import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/rchowd9/personal-portfolio', // <-- Replace 'your-repo-name' with your GitHub repo name
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
  },
});