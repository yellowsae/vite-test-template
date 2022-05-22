import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入path
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // 配置别名
  resolve: {
    alias: {
      "@": resolve(__dirname, "src/"),
      "@c": resolve(__dirname, "src/components"),
    },
    // 省略后缀
    extensions: ['.js', '.jsx', '.ts']
  }
})
