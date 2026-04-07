import Nav from '@/components/sections/Nav'
import FAQ from '@/components/sections/FAQ'
import type { Metadata } from 'next'
import { getSiteUrl } from '@/lib/site'

import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Client Era',
  description: 'Answers to common questions about Client Era, our B2B distributor platform, implementation, and features.',
  alternates: { canonical: `${getSiteUrl()}/faq` },
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
