import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'docs');
const publicDir = resolve(__dirname, 'public');

export default defineConfig({
  root,
  publicDir,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        landing: resolve(root, 'pages/landing', 'index.html'),
        footer: resolve(__dirname, 'src/pages/findId/index.html'),
      },
    },
  },
});
