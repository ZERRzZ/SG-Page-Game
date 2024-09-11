import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd())

  // console.log('环境变量:', env);

  return {
    base: env.VITE_BASE_DIR,
    plugins: [
      react(),
      visualizer(),
      viteCompression({
        verbose: true, // 是否在控制台中输出压缩结果
        disable: false,
        threshold: 10240, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
        algorithm: 'gzip', // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
        ext: '.gz',
        deleteOriginFile: true // 源文件压缩后是否删除(我为了看压缩后的效果，先选择了true)
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      },
    },
    build: {
      outDir: 'docs',
      rollupOptions: {
        output: {
          // // 配置打包文件分类输出
          // chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
          // entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
          // assetFileNames: '[ext]/[name]-[hash].[ext]', // 静态资源文件名称
          // 配置 js 最小拆包
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      }
    }
  }

})
