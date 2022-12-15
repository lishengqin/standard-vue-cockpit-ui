/* 打包 */
import { defineConfig } from "vite"
import baseConfig from "./base"
import path from "path"
import dts from 'vite-plugin-dts'
export default defineConfig({
  ...baseConfig,
  logLevel: "error",
  build: {
    lib: {
      entry: path.resolve(__dirname, "../packages/index.ts"),
      name: `${process.env.npm_package_name}`,
      formats: ["es", "cjs", "umd"],
      fileName: (format: string) => `${format}/index.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        dir: 'lib',
        globals: {
          vue: 'vue'
        }
      }
    },
  },
  optimizeDeps: {
    include: ["vue"]
  },
  plugins: [
    //@ts-ignore
    ...baseConfig.plugins,
    dts()
  ]

})