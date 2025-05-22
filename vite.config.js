import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // 使用者頁面要設成 '/'
  plugins: [react()],
})
