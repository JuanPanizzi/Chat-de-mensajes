import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config();


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/socket.io': {
        target: process.env.VITE_BACKEND_URL ||  'https://chat-de-mensajes.onrender.com/',
        ws: true
      }
    }
  }
})
