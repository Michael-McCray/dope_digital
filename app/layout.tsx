import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Dope Digital - Premium Development Services',
    template: '%s | Dope Digital',
  },
  description: 'Professional development shop specializing in modern web applications, mobile apps, and digital solutions. Transform your business with cutting-edge technology.',
  keywords: [
    'web development',
    'mobile apps',
    'software development',
    'digital solutions',
    'web design',
    'app development',
    'e-commerce development',
    'cloud solutions',
    'UI/UX design',
    'Next.js development',
    'React development',
    'custom software',
  ],
  authors: [{ name: 'Dope Digital' }],
  creator: 'Dope Digital',
  publisher: 'Dope Digital',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://dopedigital.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dopedigital.com',
    title: 'Dope Digital - Premium Development Services',
    description: 'Professional development shop specializing in modern web applications, mobile apps, and digital solutions.',
    siteName: 'Dope Digital',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dope Digital - Premium Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dope Digital - Premium Development Services',
    description: 'Professional development shop specializing in modern web applications, mobile apps, and digital solutions.',
    images: ['/og-image.png'],
    creator: '@dopedigital',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.svg',
        color: '#0ea5e9',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

