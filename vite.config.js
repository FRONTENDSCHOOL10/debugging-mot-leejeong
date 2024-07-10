import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'src/pages/login/index.html'),
        findid: resolve(__dirname, 'src/pages/findId/index.html'),
        landing: resolve(__dirname, 'src/pages/landing/index.html'),
        footer: resolve(__dirname, 'src/layouts/footer/index.html'),
        mainPage: resolve(__dirname, 'src/pages/main/index.html'),
      },
    },
  },
});
