import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import compressPlugin from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import {
  createStyleImportPlugin,
  ElementPlusResolve,
} from 'vite-plugin-style-import';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
    compressPlugin({
      verbose: false, // 是否在控制台输出压缩结果
      disable: false, // 是否禁用
      threshold: 10240, // 文件容量大于这个值进行压缩，它将被压缩，单位为b
      algorithm: 'gzip', // 压缩算法 可选 ['gzip','brotliCompress' ,'deflate','deflateRaw']
      ext: '.gz', // 生成的压缩包后缀
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    Components({
      dirs: ['src/components'],
      resolvers: [ElementPlusResolver()],
      // 组件的有效文件扩展名。
      extensions: ['vue'],
      // 允许子目录作为组件的命名空间前缀。
      directoryAsNamespace: false,
      deep: true,
    }),
    createStyleImportPlugin({ resolves: [ElementPlusResolve()] }),
  ],
});
