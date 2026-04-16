import Nav from '@/components/sections/Nav'
import FAQ from '@/components/sections/FAQ'
import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site'

import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers to common questions about ClientEra, our B2B distributor platform, implementation, and features.',
  alternates: { canonical: `${SITE_URL}/faq` },
}

export default function FAQPage() {
    return (
        <div style={{ backgroundColor: 'var(--navy)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Nav />
            <main style={{ flex: 1, paddingTop: 80 }}>
                <FAQ />
            </main>
            <Footer />
        </div>
    )
}
