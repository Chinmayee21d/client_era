import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  themeColor: '#0A1120',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.clientera'), // Update this to production URL later
  title: 'ClientEra — The Unified Commercial OS',
  description:
    'ClientEra is an AI-powered Commercial Operating System for sales teams. From first conversation to final payment — manage leads, visits, pipeline, quotes, and customer service in one unified platform.',
  keywords: [
    'CRM',
    'sales software',
    'field sales',
    'commercial OS',
    'AI sales platform',
    'pipeline management',
    'sales intelligence',
  ],
  authors: [{ name: 'ClientEra' }],
  creator: 'ClientEra',
  openGraph: {
    type: 'website',
    siteName: 'ClientEra',
    title: 'ClientEra — The Unified Commercial OS',
    description:
      'One platform for your entire commercial relationship — from the first conversation to the last payment.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'ClientEra Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClientEra — The Unified Commercial OS',
    description:
      'One platform for your entire commercial relationship — from the first conversation to the last payment.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
}

import CookieConsentBanner from '@/components/compliance/CookieConsentBanner'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300;1,9..144,400&family=Geist:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  )
}
