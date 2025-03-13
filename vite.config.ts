import path, { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  // console.log('环境变量:', env);

  return {
    base: env.VITE_BASE_DIR,
    plugins: [
      react(),
      visualizer(),
      // 对打包后的文件进一步压缩，注意 nginx 需配置请求头 content-encoding: gzip
      // viteCompression({
      //   verbose: true, // 是否在控制台中输出压缩结果
      //   disable: false,
      //   threshold: 10240, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
      //   algorithm: 'gzip', // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
      //   ext: '.gz',
      //   deleteOriginFile: true // 源文件压缩后是否删除(我为了看压缩后的效果，先选择了true)
      // })
      // svg 雪碧图
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
        symbolId: 'i-[dir]-[name]',
        inject: 'body-first',
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
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
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString()
            }
          },
        },
      },
    },
    // 去掉 console 和 debugger
    // esbuild: {
    //   drop: ['console', 'debugger']
    // }
  }
})
