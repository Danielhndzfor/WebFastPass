import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Rutas absolutas para máxima compatibilidad en Hostinger
  build: {
    // Optimizaciones para mejorar el rendimiento
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          i18n: ['react-i18next', 'i18next'],
          ui: ['mdb-react-ui-kit']
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/\.(css)$/i.test(assetInfo.name)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
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
  assetsInclude: ['**/*.webp', '**/*.avif', '**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg'],
  // Configuración de servidor para desarrollo
  server: {
    host: true,
    port: 3000
  }
})
