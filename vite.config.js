import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
  },
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'src/pages/login/index.html'),
        findid: resolve(__dirname, 'src/pages/findId/index.html'),
        findpwd: resolve(__dirname, 'src/pages/findPwd/index.html'),
        register: resolve(__dirname, 'src/pages/register/index.html'),
        header: resolve(__dirname, 'src/layouts/header/index.html'),
        footer: resolve(__dirname, 'src/layouts/footer/index.html'),
        main: resolve(__dirname, 'src/pages/main/index.html'),
        modal: resolve(__dirname, 'src/layouts/modal/index.html'),
        search: resolve(__dirname, 'src/pages/search/index.html'),
      },
    },
  },
});
