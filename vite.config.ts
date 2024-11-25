import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html',
    },
  },
=======
>>>>>>> c9b6ef7 (first commit)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
