import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site'
import Navbar from '@/components/sections/Nav'
import Footer from '@/components/sections/Footer'
import ScrollReveal from '@/components/providers/ScrollReveal'

// Section components
import S1_Hero from '@/components/customersupport/sections/S1_Hero'
import S2_Pain from '@/components/customersupport/sections/S2_Pain'
import S3_Solution from '@/components/customersupport/sections/S3_Solution'
// Removed S4_Ticketing as its Context Intelligence value is better represented in Persona tabs (S9)
import S5_Satisfaction from '@/components/customersupport/sections/S5_Satisfaction'
import S6_AI from '@/components/customersupport/sections/S6_AI'
// S7_Integration was a duplicate Comparison table. Deleted usage below.
import S8_Comparison from '@/components/customersupport/sections/S8_Comparison'
import S9_Personas from '@/components/customersupport/sections/S9_Personas'
import S11_CTA from '@/components/customersupport/sections/S11_CTA'

export const metadata: Metadata = {
  title: 'Customer Excellence & Support',
  description: 'Deepen your commercial relationship with AI-powered customer support. Context-aware ticketing, sentiment analysis, and seamless handoffs to keep your clients satisfied.',
  alternates: { canonical: `${SITE_URL}/customer-excellence` },
}

export default function CustomerSupportPage() {
  return (
    <main>
      <ScrollReveal />
      <Navbar />

      <S1_Hero />
      <S2_Pain />
      <S3_Solution />
      <S5_Satisfaction />
      <S6_AI />
      <S8_Comparison />
      <S9_Personas />
      <S11_CTA />

      <Footer />
    </main>
  )
}