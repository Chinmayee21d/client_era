import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SITE_NAME, SITE_URL } from '@/lib/site'
import { getLegalDocHtml, LEGAL_DOCS } from '@/lib/legal-docs'
import LegalHeader from '@/components/sections/LegalHeader'
import Footer from '@/components/sections/Footer'

type Params = {
  slug: string
}

export async function generateStaticParams() {
  return Object.keys(LEGAL_DOCS).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const resolvedParams = await params;
  const def = LEGAL_DOCS[resolvedParams.slug]
  if (!def) {
    return {}
  }

  const pageUrl = `${SITE_URL}/legal/${def.slug}`

  return {
    title: def.title,
    description: def.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${def.title} | ${SITE_NAME}`,
      description: def.description,
      url: pageUrl,
      type: 'article',
    },
  }
}

export default async function LegalPage({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const def = LEGAL_DOCS[resolvedParams.slug]
  if (!def) {
    notFound()
  }

  const html = await getLegalDocHtml(def)

  return (
    <main style={{ 
      background: 'var(--navy)', 
      minHeight: '100vh', 
      color: 'var(--text)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <LegalHeader />
      <div style={{ 
        flex: 1,
        maxWidth: 860, 
        margin: '0 auto', 
        padding: '64px 24px',
        width: '100%'
      }}>
        <article 
          className="legal-content" 
          dangerouslySetInnerHTML={{ __html: html }} 
        />
      </div>
      <Footer />
    </main>
  )
}
