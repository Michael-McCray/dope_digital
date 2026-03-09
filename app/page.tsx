import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

// Lazy-load below-the-fold sections so the hero becomes interactive sooner
const Services = dynamic(() => import('@/components/Services'))
const About = dynamic(() => import('@/components/About'))
const Contact = dynamic(() => import('@/components/Contact'))
const Footer = dynamic(() => import('@/components/Footer'))

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
