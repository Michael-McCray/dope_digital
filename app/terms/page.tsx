import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TermsOfService from '@/components/TermsOfService'

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Dope Digital - Read our terms and conditions for using our services.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <TermsOfService />
      <Footer />
    </main>
  )
}

