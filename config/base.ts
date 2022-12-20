/* 启动 */
import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import MarkDown from "vite-plugin-md"
export default defineConfig({
  plugins: [vueJsx(), vue({ include: [/\.vue$/, /\.md$/], }), MarkDown(),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@packages': path.resolve(__dirname, '../packages'),
    },
    // 导入时想要省略的扩展名列表
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
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
