import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // For custom domains, always use root base '/'
  base: '/',
  plugins: [react()],
})
