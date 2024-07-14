import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/contactbook/',  // Replace 'repository-name' with your actual repository name
  plugins: [vue()],
})
