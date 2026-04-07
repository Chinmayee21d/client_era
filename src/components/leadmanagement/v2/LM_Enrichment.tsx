'use client'

import { motion } from 'framer-motion'
import { Building2, Newspaper, UserCheck, Bell, ShieldCheck } from 'lucide-react'

const FEATURES = [
  { Icon: Building2, title: 'Company Intelligence', desc: 'Description, industry, headcount, funding rounds, revenue estimates, technology stack, and recent news — automatically surfaced on every lead record.' },
  { Icon: Newspaper, title: 'News & Signals', desc: 'Any news mentioning the company in the last 30 days. Executive changes. Product launches. Expansion announcements — under "What\'s Happening" on every lead.' },
  { Icon: UserCheck, title: 'Contact-Level Enrichment', desc: 'Current role and company verified against LinkedIn. Job title changes, employment changes, and publicly visible professional activity.' },
  { Icon: Bell, title: 'Career Event Alerts', desc: '"Priya Sharma was promoted to VP Procurement at Reliance." Reps are notified the moment a key contact changes role or company.' },
]

const ENRICHMENT_PREVIEW = [
  { label: 'Company', value: 'Reliance Industries Ltd', refreshed: '2h ago', provider: 'Clearbit' },
  { label: 'Headcount', value: '2,36,000+', refreshed: '1d ago', provider: 'Apollo' },
  { label: 'Revenue Est.', value: '$106B', refreshed: '1d ago', provider: 'ZoomInfo' },
  { label: 'Tech Stack', value: 'SAP, Salesforce, AWS', refreshed: '3d ago', provider: 'Clearbit' },
  { label: 'Recent News', value: 'Acquired Karkinos Healthcare', refreshed: '6h ago', provider: 'NewsAPI' },
]

export default function LM_Enrichment() {
  return (
    <section id="enrichment" style={{ background: 'var(--navy)' }}>
      <style>{`
        .lm-enr-feat {
          display: flex; gap: 14px; align-items: flex-start;
          padding: 16px 18px; border-radius: 14px;
          border: 1px solid transparent; transition: all .28s; cursor: default;
        }
        .lm-enr-feat:hover {
          background: rgba(255,255,255,.04);
          border-color: rgba(255,255,255,.07);
          transform: translateX(6px);
        }
        .lm-enr-feat-icon {
          width: 40px; height: 40px; border-radius: 11px;
          background: rgba(52,112,240,.1); border: 1px solid rgba(52,112,240,.2);
          display: flex; align-items: center; justify-content: center;
          color: var(--blue); flex-shrink: 0; transition: transform .3s;
        }
        .lm-enr-feat:hover .lm-enr-feat-icon { transform: scale(1.1) rotate(-4deg); }
        .lm-enr-row {
          display: grid; grid-template-columns: 1fr 1fr auto;
          gap: 10px; align-items: center;
          padding: 9px 14px; border-radius: 8px; transition: background .2s;
        }
        .lm-enr-row:hover { background: rgba(255,255,255,.04); }
        @media (max-width: 900px) { .lm-enr-cols { grid-template-columns: 1fr !important; } }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div className="eyebrow"><span className="ey-line" />Feature 3 — External Data Enrichment</div>
          <h2 className="h2">
            Your Rep Should Never<br /><em>Need to Google a Lead.</em>
          </h2>
          <p className="lead">
            For every lead in ClientEra, a background enrichment job runs daily — pulling intelligence from best-in-class providers and surfacing it on the lead record and pre-visit brief. The moment a lead enters the system, it starts getting smarter.
          </p>
        </div>

        <div className="reveal lm-enr-cols" style={{
          display: 'grid', gridTemplateColumns: '1fr 1.15fr',
          gap: 48, alignItems: 'start', transitionDelay: '.15s',
        }}>
          {/* LEFT — Feature list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                className="lm-enr-feat"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .1 }}
              >
                <div className="lm-enr-feat-icon">
                  <f.Icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--text2)', lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — Enrichment record preview */}
          <div style={{
            background: 'rgba(13,28,52,.88)', backdropFilter: 'blur(22px)',
            border: '1px solid var(--border2)', borderRadius: 16, overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,.4)',
          }}>
            <div className="ce-card-titlebar">
              <span className="ce-wdot ce-wd-r" /><span className="ce-wdot ce-wd-y" /><span className="ce-wdot ce-wd-g" />
              <span className="ce-card-lbl">Lead Enrichment Record — Priya Sharma</span>
            </div>
            <div style={{ padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(196,154,60,.15)', border: '1px solid rgba(196,154,60,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: 'var(--gold)' }}>PS</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>Priya Sharma</div>
                  <div style={{ fontSize: 10, color: 'var(--text3)' }}>VP Procurement · Reliance Industries</div>
                </div>
                <div style={{ marginLeft: 'auto', fontSize: 9, fontWeight: 700, padding: '3px 8px', borderRadius: 100, background: 'rgba(24,184,122,.12)', border: '1px solid rgba(24,184,122,.25)', color: 'var(--green)' }}>Score 91</div>
              </div>

              <div style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.2, color: 'var(--text3)', marginBottom: 6, display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: 10, padding: '0 14px', borderBottom: '1px solid var(--border)', paddingBottom: 6 }}>
                <span>Field</span><span>Value</span><span>Provider</span>
              </div>

              {ENRICHMENT_PREVIEW.map((e, i) => (
                <motion.div
                  key={e.label}
                  className="lm-enr-row"
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * .08 }}
                >
                  <div style={{ fontSize: 11, color: 'var(--text3)', fontWeight: 500 }}>{e.label}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text)' }}>{e.value}</div>
                  <div style={{ fontSize: 9, color: 'var(--text3)', textAlign: 'right', whiteSpace: 'nowrap' }}>{e.provider} · {e.refreshed}</div>
                </motion.div>
              ))}

              <div style={{ marginTop: 14, padding: '10px 14px', background: 'rgba(139,92,246,.06)', border: '1px solid rgba(139,92,246,.2)', borderRadius: 10, display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <Bell size={13} style={{ color: '#8B5CF6', flexShrink: 0, marginTop: 1 }} />
                <span style={{ fontSize: 10, color: '#c4b5fd', lineHeight: 1.5 }}>
                  <strong style={{ color: '#fff' }}>Career Alert:</strong> Priya Sharma promoted to VP Procurement — 3 days ago.
                </span>
              </div>

              <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
                <ShieldCheck size={11} style={{ color: 'var(--green)' }} />
                <span style={{ fontSize: 9, color: 'var(--text3)' }}>All providers under DPA · GDPR & DPDP compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
