import baseConfig from './base';
import { defineConfig } from "vite";

export default defineConfig({
  ...baseConfig,
  base: '/standard-vue-cockpit-ui',
  build: {
    outDir: 'docs',
    assetsInlineLimit: 0
  },
})