import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://www.dopedigital.dev'
const siteTitle = 'Dope Digital – Premium Development Services'
const siteDescription =
  'We craft exceptional digital experiences through cutting-edge web applications, mobile apps, and innovative software solutions.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    'web development',
    'mobile app development',
    'cloud solutions',
    'UI/UX design',
    'e-commerce development',
    'Next.js',
    'React',
    'TypeScript',
    'software consulting',
  ],
  authors: [{ name: 'Dope Digital', url: siteUrl }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: 'Dope Digital',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dope Digital – Premium Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og-image.png'],
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Dope Digital',
  description: siteDescription,
  url: siteUrl,
  telephone: '+16463094008',
  email: 'dopedigitalstudio@gmail.com',
  openingHours: 'Mo-Fr 09:00-22:00',
  priceRange: '$$$',
  serviceType: [
    'Web Development',
    'Mobile App Development',
    'Cloud Solutions',
    'UI/UX Design',
    'E-Commerce Development',
    'Technology Consulting',
  ],
  sameAs: [],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
