import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',   // Vercel expects your build output here
  },
  server: {
    port: 3000,       // Local dev server port
    open: true        // Auto-open browser on npm run dev
  }
});
