import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Esto permite que se exponga la IP en la red
    port: 5173, // Puedes cambiarlo si lo necesitas
  }
})
