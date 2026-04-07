import type { Metadata } from 'next'
import Navbar   from '@/components/sections/Nav'
import Footer   from '@/components/sections/Footer'
import ScrollReveal from '@/components/providers/ScrollReveal'

import LM_Hero          from '@/components/leadmanagement/v2/LM_Hero'
import LM_Problem       from '@/components/leadmanagement/v2/LM_Problem'
import LM_Approach      from '@/components/leadmanagement/v2/LM_Approach'
import LM_Prospecting   from '@/components/leadmanagement/v2/LM_Prospecting'
import LM_Capture       from '@/components/leadmanagement/v2/LM_Capture'
import LM_Enrichment    from '@/components/leadmanagement/v2/LM_Enrichment'
import LM_Scoring       from '@/components/leadmanagement/v2/LM_Scoring'
import LM_Qualification from '@/components/leadmanagement/v2/LM_Qualification'
import LM_Handoff       from '@/components/leadmanagement/v2/LM_Handoff'
import LM_Conversion    from '@/components/leadmanagement/v2/LM_Conversion'
import LM_Nurture       from '@/components/leadmanagement/v2/LM_Nurture'
import LM_Analytics     from '@/components/leadmanagement/v2/LM_Analytics'
import LM_CTA           from '@/components/leadmanagement/v2/LM_CTA'

export const metadata: Metadata = {
  title: 'ClientEra | Lead Management & Prospecting',
  description: 'Streamline your commercial relationship from the first conversation. Automated lead capture, enrichment, and qualification powered by ClientEra AI.',
}

export default function LeadManagementPage() {
  return (
    <main>
      <ScrollReveal />
      <Navbar />

      {/*  1 — Dark Navy  ·  Hero — animated pipeline timeline + floating dashboard */}
      <LM_Hero />

      {/*  2 — Cream      ·  The Problem — 3 flip cards (visibility, context, scoring) */}
      <LM_Problem />

      {/*  3 — Cream      ·  The Approach — One Entity One Timeline flow diagram */}
      <LM_Approach />

      {/*  4 — Dark Navy  ·  Feature 1 — Prospecting Tools (territory map mock) */}
      <LM_Prospecting />

      {/*  5 — Cream      ·  Feature 2 — Lead Capture & Attribution (6 sources + live feed) */}
      <LM_Capture />

      {/*  6 — Dark Navy  ·  Feature 3 — External Data Enrichment (enrichment record mock) */}
      <LM_Enrichment />

      {/*  7 — Cream      ·  Feature 4 — AI-Assisted Lead Scoring (score board mock) */}
      <LM_Scoring />

      {/*  8 — Dark Navy  ·  Feature 5 — Automated Lead Qualification (interactive rule tabs) */}
      <LM_Qualification />

      {/*  9 — Cream      ·  Feature 6 — MQL Handoff to Sales (5-step flow + handoff card) */}
      <LM_Handoff />

      {/* 10 — Dark Navy  ·  Feature 7 — Lead Conversion (conversion preview mock) */}
      <LM_Conversion />

      {/* 11 — Cream      ·  Feature 8 — Lead Nurture & Segmentation (sequence step tracker) */}
      <LM_Nurture />

      {/* 12 — Dark Navy  ·  Feature 9 — Lead Attribution & Analytics (funnel + rejection chart) */}
      <LM_Analytics />

      {/* 14 — Dark Navy  ·  Final CTA — primary/secondary CTAs + cross-page links */}
      <LM_CTA />

      <Footer />
    </main>
  )
}
