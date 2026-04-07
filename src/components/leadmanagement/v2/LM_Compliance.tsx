'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Lock, FileSearch, Users } from 'lucide-react'

const CERTS = ['SOC 2 Type II', 'ISO 27001', 'GDPR', 'India DPDP 2023']

const GUARANTEES = [
  {
    Icon: ShieldCheck,
    title: 'GDPR & DPDP Compliant from Day One',
    desc: 'All enrichment data compliant with GDPR and India\'s DPDP Act 2023 from day one. Contact erasure requests purge enrichment data along with all other personal data — automatically.',
    color: 'var(--green)', bg: 'rgba(24,184,122,.08)', border: 'rgba(24,184,122,.22)',
  },
  {
    Icon: Lock,
    title: 'Immutable Audit Trail',
    desc: 'Every lead action, field edit, and status change is immutably recorded in an append-only audit trail. Records cannot be edited, altered, or deleted by anyone — not even system super-admins.',
    color: 'var(--gold)', bg: 'rgba(196,154,60,.08)', border: 'rgba(196,154,60,.22)',
  },
  {
    Icon: FileSearch,
    title: 'Data Processing Agreements',
    desc: 'All enrichment providers — Clearbit, Apollo, ZoomInfo, NewsAPI — operate under Data Processing Agreements. Every data source is contractually bound to your privacy obligations.',
    color: '#3470F0', bg: 'rgba(52,112,240,.08)', border: 'rgba(52,112,240,.22)',
  },
  {
    Icon: Users,
    title: 'Role-Based Access Controls',
    desc: 'Granular visibility controls per user, per team, and per territory. Sharing policies govern which colleague\'s accounts and prospect markers are visible to each rep.',
    color: '#8B5CF6', bg: 'rgba(139,92,246,.08)', border: 'rgba(139,92,246,.22)',
  },
]

export default function LM_Compliance() {
  return (
    <section id="compliance" style={{ background: '#f8f8f6' }}>
      <style>{`
        .lm-comp-card {
          background: #fff; border: 1.5px solid rgba(0,0,0,.06);
          border-radius: 18px; padding: 28px 24px;
          display: flex; gap: 18px; align-items: flex-start;
          transition: all .3s cubic-bezier(.175,.885,.32,1.275); cursor: default;
        }
        .lm-comp-card:hover { transform: translateY(-5px); box-shadow: 0 20px 48px rgba(0,0,0,.09); }
        .lm-comp-icon {
          width: 46px; height: 46px; border-radius: 13px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: transform .3s;
        }
        .lm-comp-card:hover .lm-comp-icon { transform: scale(1.1) rotate(-5deg); }
        .lm-cert-badge {
          display: inline-flex; align-items: center;
          font-size: 11px; font-weight: 700; padding: 6px 16px; border-radius: 100px;
          background: rgba(10,20,40,.06); border: 1px solid rgba(10,20,40,.12);
          color: var(--ink2); margin: 4px; letter-spacing: .3px;
        }
        @media (max-width: 900px) { .lm-comp-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
          <div className="eyebrow eyebrow-dark" style={{ justifyContent: 'center' }}>
            <span className="ey-line" />Compliance &amp; Security
          </div>
          <h2 className="h2 h2-ink" style={{ textAlign: 'center' }}>
            Enterprise-Grade Trust —<br /><em>From Day One.</em>
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '24px 0 0' }}>
            {CERTS.map(c => (
              <span key={c} className="lm-cert-badge">
                <ShieldCheck size={12} style={{ marginRight: 6, color: 'var(--green)' }} strokeWidth={2} />
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal lm-comp-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 18, transitionDelay: '.1s',
        }}>
          {GUARANTEES.map((g, i) => (
            <motion.div
              key={g.title}
              className="lm-comp-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .1 }}
            >
              <div className="lm-comp-icon" style={{ background: g.bg, border: `1px solid ${g.border}`, color: g.color }}>
                <g.Icon size={22} strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 400, color: 'var(--ink)', marginBottom: 10 }}>
                  {g.title}
                </div>
                <p style={{ fontSize: 13, color: 'var(--ink3)', lineHeight: 1.7, margin: 0 }}>{g.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
