const path = require('path')
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.js'),
      name: 'VueMzcProductPicture',
      fileName: (format) => `vue-mzc-product-picture.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'style.css')
            return 'vue-mzc-product-picture.css';
          return assetInfo.name;
        },
      },
    },
  },
  plugins: [
    createVuePlugin(),
  ]
})
