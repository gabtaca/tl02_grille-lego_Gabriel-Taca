// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
  },
  server: {
    port: 8040,
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @import "tailwindcss/base"
          @import "tailwindcss/components"
          @import "tailwindcss/utilities"
          @import "../css/style.css"
        `, 
      },
    },
  },
});