import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/madere-2026/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['apple-touch-icon.png'],
      manifest: {
        name: 'Madère 2026 · Mathieu & Melvin',
        short_name: 'Madère 2026',
        description: 'Compagnon de voyage Madère 30 mai → 6 juin 2026',
        lang: 'fr',
        start_url: '/madere-2026/',
        scope: '/madere-2026/',
        display: 'standalone',
        background_color: '#0c1115',
        theme_color: '#0c1115',
        orientation: 'portrait',
        icons: [
          { src: '/madere-2026/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/madere-2026/pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: '/madere-2026/pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.host.includes('tile.openstreetmap.org'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'osm-tiles',
              expiration: { maxEntries: 800, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
    }),
  ],
})
