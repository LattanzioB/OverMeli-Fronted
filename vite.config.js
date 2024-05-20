import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: process.env.PORT || 8090,
    strict: true
  },
  server: {
   port: process.env.PORT || 8090,
   strictPort: true,
   host: true,
   //origin: "http://0.0.0.0:8080",
   origin: `http://localhost:${process.env.PORT || 8090}`,
  }
})
