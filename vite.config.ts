import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve:{
    alias:{
      '@': resolve(__dirname, './src'),
      '#': resolve(__dirname, './public'),
      '@a': resolve(__dirname, './src/assets'),
      '@v': resolve(__dirname, './src/view'),
      '@c': resolve(__dirname, './src/components')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "./src/assets/less/main.less";'
      }
    }
  },
})
