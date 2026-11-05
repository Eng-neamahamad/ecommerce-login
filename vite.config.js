import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // هذا يضمن أن مسارات الملفات تبدأ من الجذر الصحيح على Vercel
})