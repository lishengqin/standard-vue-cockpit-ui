import baseConfig from './base';
import { defineConfig } from "vite";

export default defineConfig({
  ...baseConfig,
  build: {
    outDir: 'docs',
    assetsInlineLimit: 0
  },
})