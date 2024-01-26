import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import { resolve } from 'path';
import { glob } from 'glob';
import vue from '@vitejs/plugin-vue';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

let entrypoints = glob.sync('src/*.html');

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    manifest: true,
    emptyOutDir: true,
    outDir: '../build',
    rollupOptions: {
      input: [
          ...entrypoints,
        'src/js/build.js'
      ],
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',

        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/\.(woff|woff2|eot|ttf)$/.test(name ?? '')){
            return 'assets/fonts/[name]-[hash][extname]';
          }
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    assetsInlineLimit: 0
  },
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
    // ref: https://www.npmjs.com/package/vite-plugin-image-optimizer
    ViteImageOptimizer({
      /* pass your config */
    }),
  ],
  resolve: {
    alias: {
      // ref: https://jasonwatmore.com/vue-3-vite-add-path-alias-to-src-in-vite-config
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        /**
         * Подключение стилей для всего проекта
         */
        additionalData: `
          @import "@/scss/global/_vars.scss";
          @import "@/scss/global/_mixins.scss";
          @import "@/scss/global/_typography.scss";
         `
      }
    }
  },
});