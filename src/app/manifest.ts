import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ClientEra — The Unified Commercial OS',
    short_name: 'ClientEra',
    description: 'AI-powered Commercial Operating System for sales teams.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A1120',
    theme_color: '#0A1120',
    icons: [
      {
        src: '/ico.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/ico.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
  }
}
