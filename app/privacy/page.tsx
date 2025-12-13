import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PrivacyPolicy from '@/components/PrivacyPolicy'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Dope Digital - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </main>
  )
}

