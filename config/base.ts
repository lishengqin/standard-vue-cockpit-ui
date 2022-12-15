/* 启动 */
import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue';
import path from 'path';
export default defineConfig({
  plugins: [vueJsx(), vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@packages': path.resolve(__dirname, '../packages'),
    },
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    // jsxInject: "import {h} from 'vue';",
  },
  server: {
    host: '0.0.0.0',
    hmr: true,
  },
});
