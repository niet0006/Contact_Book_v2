import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Contact_Book_v2/',  // Replace 'repository-name' with your actual repository name
  plugins: [vue()],
})
