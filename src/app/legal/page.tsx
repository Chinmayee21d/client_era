import type { Metadata } from 'next'
import { getSiteUrl } from '@/lib/site'
import { LEGAL_DOCS } from '@/lib/legal-docs'
import LegalHeader from '@/components/sections/LegalHeader'

const siteUrl = getSiteUrl()

const orderedDocs = [
  LEGAL_DOCS.privacy,
  LEGAL_DOCS.terms,
  LEGAL_DOCS.cookies,
]

export const metadata: Metadata = {
  title: 'Legal Center | Client Era',
  description: 'Master legal index for Client Era policies, notices, and compliance documents.',
  alternates: { canonical: `${siteUrl}/legal` },
  openGraph: {
    title: 'Legal Center | Client Era',
    description: 'Master legal index for Client Era policies, notices, and compliance documents.',
    url: `${siteUrl}/legal`,
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function LegalIndexPage() {
  return (
    <main style={{ 
      background: 'var(--navy)', 
      minHeight: '100vh', 
      color: 'var(--text)',
      fontFamily: 'var(--font-sans)'
    }}>
      <LegalHeader />
      <div style={{ 
        maxWidth: 800, 
        margin: '0 auto', 
        padding: '64px 24px' 
      }}>
        <article>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: 16 }}>
            <span style={{ width: 18, height: 1, background: 'var(--gold)' }} />
            Policies & Compliance
          </div>
          <h1 className="h2 h2-white" style={{ marginBottom: 24 }}>Legal Center</h1>
          <p className="lead" style={{ color: 'var(--text2)', marginBottom: 48, fontSize: 18 }}>
            This page is the master index of Client Era's legal and compliance documents regarding our platform operations.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {orderedDocs.map((doc) => (
              <a key={doc.slug} href={`/legal/${doc.slug}`} className="lc-card" style={{
                display: 'block',
                padding: '24px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16,
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>{doc.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text3)', margin: 0, lineHeight: 1.5 }}>{doc.description}</p>
              </a>
            ))}
          </div>

          <style>{`
            .lc-card:hover {
              background: rgba(196,154,60,0.08) !important;
              border-color: var(--gold) !important;
            }
          `}</style>
        </article>
      </div>
    </main>
  )
}
