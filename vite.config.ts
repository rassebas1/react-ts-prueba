import { defineConfig, HttpProxy } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      
      // string shorthand
      '/foo': 'http://localhost:4567',
      // with options
      '/api': {
        target: 'https://api.clashofclans.com/v1/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
    
  }
})
