import Link from 'next/link'

const faqs = [
  {
    q: 'What makes Client Era different from generic CRM systems?',
    a: 'Client Era is purpose-built for the B2B supply chain. Unlike generic CRMs (like Salesforce or HubSpot), our platform features native order workflows, proforma invoice management, dispatch planning, and localized distributor targets built directly into the system out of the box.',
  },
  {
    q: 'How long does implementation take?',
    a: 'Most organizations complete their pilot rollout in 2 to 4 weeks. Because Client Era utilizes a predefined logical data schema for Sales Operations, setup is accelerated compared to open-ended implementations.',
  },
  {
    q: 'Can distributors place orders from their mobile phones?',
    a: 'Yes. The Distributor Portal is fully responsive and supports mobile devices, allowing external partners to submit SORs, check fulfillment statuses, and upload payment receipts directly from the field without a native app download.',
  },
  {
    q: 'Does it integrate with our existing ERP (e.g., SAP, Oracle)?',
    a: 'Yes. Client Era is designed to sit on top of your existing ERP. We provide secure APIs and batch CSV mechanisms to push confirmed Dispatch Plans to the ERP and pull ERP shipping statuses back to the Dispatcher Terminal.',
  },
  {
    q: 'What kind of security and compliance do you offer?',
    a: 'We use enterprise-grade encryption for data in transit and at rest, enforce strict role-based access control (RBAC), and maintain comprehensive audit trails for every state change (e.g., pricing approvals, manifest dispatches). We align with GDPR and DPDP Act standards for corporate data.',
  },
  {
    q: 'Do you charge per distributor seat?',
    a: 'No. We understand that scale is critical in distributor networks. Licensing is based on your internal operational volume or internal seats, allowing infinite external distributor logins to maximize portal adoption.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
}

export default function FAQ() {
  return (
    <section id="faq" style={{ 
      background: 'var(--navy)', 
      padding: 'clamp(60px, 8vw, 120px) 24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style>{`
        .faq-item {
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 24px 0;
        }
        .faq-item:first-of-type {
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .faq-q {
          font-size: clamp(16px, 1.5vw, 20px);
          font-weight: 600;
          color: var(--text);
          cursor: pointer;
          list-style: none; /* Hide default arrow */
          position: relative;
          padding-right: 30px;
        }
        .faq-q::-webkit-details-marker {
          display: none;
        }
        .faq-q::after {
          content: '+';
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          font-size: 24px;
          color: var(--gold);
          font-weight: 300;
          transition: transform 0.3s;
        }
        details[open] .faq-q::after {
          content: '−';
        }
        .faq-a {
          padding-top: 16px;
          font-size: 15px;
          line-height: 1.6;
          color: var(--text3);
          max-width: 800px;
        }
      `}</style>
      
      {/* Background Glow */}
      <div style={{
          position: 'absolute', top: -100, right: -100,
          width: 600, height: 600, background: 'radial-gradient(ellipse,rgba(196,154,60,.08) 0%,transparent 70%)',
          pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: 880, margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{ marginBottom: 56 }}>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: 16 }}>
            <span style={{ width: 18, height: 1, background: 'var(--gold)' }} />
            Frequently Asked Questions
          </div>
          <h2 className="h2 h2-white" style={{ marginBottom: 16 }}>
            Answers to your <em style={{ color: 'var(--gold)', fontStyle: 'italic', fontWeight: 300 }}>questions.</em>
          </h2>
          <p className="lead" style={{ color: 'var(--text2)' }}>
            Common questions about Client Era's platform, implementation, and features.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item">
              <summary className="faq-q">{item.q}</summary>
              <p className="faq-a">{item.a}</p>
            </details>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </div>
    </section>
  )
}
