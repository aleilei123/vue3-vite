import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 代码统一使用tailwindcss的类进行class编写
import tailwindcss from 'tailwindcss'
// 打包分析插件
import { visualizer } from 'rollup-plugin-visualizer'
// 图片压缩优化
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
// 约定式路由插件
import Pages from 'vite-plugin-pages'
// 约定式layout插件
import Layouts from 'vite-plugin-vue-layouts'
// 自动按需导入element-plus组件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// gzip压缩插件
import compression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    ViteImageOptimizer(),
    Pages({
      dirs: 'src/views', //需要生成路由的文件目录，默认文件夹为pages
      // exclude: ['**/components/*.vue'], //排除components目录下的.vue文件
      extendRoute(route, parent) {
        console.log('route.path-->', route.path)
        //   if (route.path === '/')
        //     return {
        //       ...route,
        //       redirect: '/index'
        //     } //给默认路由加一个redirect，默认为index.vue
      },
      importMode: 'async'
    }),
    Layouts({
      // layoutsDirs: 'src/layouts', // 指定布局文件的目录路径
      // defaultLayout: 'index' // 指定默认布局文件的名称
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    compression({
      filter: /\.(js|css|json|txt|ico|svg)(\?.*)?$/i,
      ext: '.gz',
      algorithm: 'gzip', // 压缩算法
      threshold: 1024 * 4,
      deleteOriginFile: false,
      verbose: true // 是否输出到控制台
    }),
    visualizer({
      // open: true
    })
  ],
  // 配置js/css/img分开文件夹打包
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const extName: string = assetInfo?.name as string
          // 设置不同类型文件的输出路径及命名规则
          if (assetInfo.type === 'asset' && /\.(jpe?g|png|gif|svg)$/i.test(extName)) {
            return 'img/[name].[hash].[ext]' // 图像文件输出路径及命名规则
          }
          if (assetInfo.type === 'asset' && /\.(ttf|woff|woff2|eot)$/i.test(extName)) {
            return 'fonts/[name].[hash].[ext]' // 字体文件输出路径及命名规则
          }
          return '[ext]/[name]-[hash].[ext]' // 其他资源文件输出路径及命名规则
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    hmr: true // 配置自动刷新
  }
})
