import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimizaciones para mejorar el rendimiento
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          i18n: ['react-i18next', 'i18next'],
          ui: ['mdb-react-ui-kit']
        }
      }
    },
    // Compresión y minificación
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Elimina console.log en producción
        drop_debugger: true
      }
    }
  },
  // Optimización de imágenes
  assetsInclude: ['**/*.webp', '**/*.avif'],
  // Preload de recursos críticos
  experimental: {
    renderBuiltUrl(filename) {
      return filename
    }
  }
})
