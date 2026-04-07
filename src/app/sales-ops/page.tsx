import type { Metadata } from 'next'
import Navbar from '@/components/sections/Nav'
import Footer from '@/components/sections/Footer'
import ScrollReveal from '@/components/providers/ScrollReveal'

import S1_Hero from '@/components/salesops/sections/hero'
import S2_Pain from '@/components/salesops/sections/S2_Pain'
import S3_Workflow from '@/components/salesops/sections/S3_Workflow'
import S4_Dashboard from '@/components/salesops/sections/S4_Dashboard'
import S5_Features from '@/components/salesops/sections/S5_Features'
import S6_Targets from '@/components/salesops/sections/S6_Targets'
import S7_Personas from '@/components/salesops/sections/S7_Personas'
import S8_Reports from '@/components/salesops/sections/S8_Reports'
import S9_CTA from '@/components/salesops/sections/S9_CTA'

export const metadata: Metadata = {
  title: 'ClientEra | Sales Operations & Enablement',
  description: 'Optimize your commercial relationship with advanced sales operations. Intelligent workflows, real-time reporting, and seamless enablement tools.',
}

export default function SalesOpsPage() {
  return (
    <main style={{ background: 'var(--navy)', minHeight: '100vh' }}>
      <ScrollReveal />
      <Navbar />
      
      {/* Sales Ops Section Stack */}
      <S1_Hero />
      <S2_Pain />
      <S3_Workflow />
      <S4_Dashboard />
      <S5_Features />
      <S6_Targets />
      <S7_Personas />
      <S8_Reports />
      <S9_CTA />
      
      <Footer />
    </main>
  )
}
