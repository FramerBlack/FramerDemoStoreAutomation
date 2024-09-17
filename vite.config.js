import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // Set the root to the current directory
  server: {
    host: '0.0.0.0',
  },
  build: {
    outDir: 'dist', // Output directory for the build
  },
  publicDir: 'public', // Directory to serve as static files
});

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '0.0.0.0',
//   }
// })
