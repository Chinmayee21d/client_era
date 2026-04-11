import type { Metadata } from 'next'
import Navbar from '@/components/sections/Nav'
import Footer from '@/components/sections/Footer'
import ScrollReveal from '@/components/providers/ScrollReveal'

import SM_Hero from '@/components/salesmanagement/v2/SM_Hero'
import SM_Problem from '@/components/salesmanagement/v2/SM_Problem'
import SM_Lifecycle from '@/components/salesmanagement/v2/SM_Lifecycle'
import SM_Dashboard from '@/components/salesmanagement/v2/SM_Dashboard'
import SM_LiveOps from '@/components/salesmanagement/v2/SM_LiveOps'
import SM_Hierarchy from '@/components/salesmanagement/v2/SM_Hierarchy'
import SM_Pipeline from '@/components/salesmanagement/v2/SM_Pipeline'
import SM_KPI from '@/components/salesmanagement/v2/SM_KPI'
import SM_Personas from '@/components/salesmanagement/v2/SM_Personas'
import SM_Approvals from '@/components/salesmanagement/v2/SM_Approvals'
import SM_Coaching from '@/components/salesmanagement/v2/SM_Coaching'
import SM_Analytics from '@/components/salesmanagement/v2/SM_Analytics'
import SM_Insights from '@/components/salesmanagement/v2/SM_Insights'
import SM_BoardMode from '@/components/salesmanagement/v2/SM_BoardMode'
import SM_CTA from '@/components/salesmanagement/v2/SM_CTA'

export const metadata: Metadata = {
  title: 'ClientEra | Sales Performance Management',
  description: 'Master your commercial relationship with AI-powered sales performance management. Real-time dashboards, hierarchy visibility, and automated coaching.',
}

export default function SalesManagementPage() {
  return (
    <main>
      <ScrollReveal />
      <Navbar />
      <SM_Hero />        {/* 1 — Dark Navy (Hero) */}
      <SM_Problem />     {/* 2 — Dark Navy */}
      <SM_Lifecycle />   {/* 3 — Cream */}
      <SM_Dashboard />   {/* 4 — Dark Navy (Animated Dashboard Tour) */}
      <SM_LiveOps />     {/* 4 — Dark Navy */}
      <SM_Hierarchy />   {/* 5 — Cream */}
      <SM_Pipeline />    {/* 6 — Dark Navy */}
      <SM_KPI />         {/* 7 — Cream */}
      <SM_Personas />    {/* 8 — Dark Navy */}
      <SM_Approvals />   {/* 9 — Cream */}
      <SM_Coaching />    {/* 10 — Dark Navy */}
      <SM_Analytics />   {/* 11 — Cream */}
      <SM_Insights />    {/* 12 — Dark Navy (AI Insights) */}
      <SM_BoardMode />   {/* 13 — Dark Navy */}
      <SM_CTA />         {/* 13 — Cream */}
      <Footer />
    </main>
  )
}
