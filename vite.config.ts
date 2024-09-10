import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd())

  // console.log('环境变量:', env);

  return {
    plugins: [
      react(),
      visualizer()
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      },
    },
    base: env.VITE_BASE_DIR,
    build: {
      outDir: 'docs',
    }
  }

})
