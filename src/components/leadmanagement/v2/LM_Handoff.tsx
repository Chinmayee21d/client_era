'use client'

import { motion } from 'framer-motion'
import { ArrowRight, AlertCircle, UserCheck } from 'lucide-react'

const STEPS = [
  { n: 1, text: 'Lead reaches MQL score threshold, or Marketing manually promotes it' },
  { n: 2, text: 'Lead enters the SDR queue or directly into Inside Sales / Field Sales queue' },
  { n: 3, text: 'The receiving rep is notified with a full context brief: source, score, engagement history, enrichment, and Marketing\'s handoff notes' },
  { n: 4, text: 'Marketing sees when the lead was picked up, by whom, and what happened next' },
  { n: 5, text: 'If unclaimed beyond a configurable SLA, both Marketing and the sales manager are notified automatically' },
]

const HANDOFF_ITEMS = [
  { label: 'Lead', value: 'Rahul Mehta — Tata Consulting', sub: 'Score: 84 · Source: Web Form · Campaign: Enterprise Q1' },
  { label: 'Handoff Notes', value: 'Interested in Q2 expansion budget. Mentioned evaluating 3 CRM solutions.', sub: 'Marketing · Sneha Verma · 10 min ago' },
  { label: 'Assigned To', value: 'Aryan Shah — Inside Sales', sub: 'Notified via email + in-app · 2 min ago' },
]

export default function LM_Handoff() {
  return (
    <section id="handoff" style={{ background: '#f8f8f6', paddingTop: 100, paddingBottom: 100 }}>
      <style>{`
        .lm-hf-step {
          display: flex; gap: 24px; align-items: flex-start;
          padding-bottom: 32px; position: relative;
        }
        .lm-hf-step:last-child { padding-bottom: 0; }
        .lm-hf-step:not(:last-child)::after {
          content: '';
          position: absolute; left: 21px; top: 50px; bottom: 10px;
          width: 2px; background: rgba(0,0,0,0.04);
        }
        .lm-hf-num {
          width: 44px; height: 44px; border-radius: 14px;
          background: #fff; border: 1.5px solid rgba(0,0,0,.06);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0; z-index: 1;
          font-family: 'Fraunces', serif; font-size: 18px; font-weight: 500; color: var(--navy);
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          transition: all 0.3s ease;
        }
        .lm-hf-step:hover .lm-hf-num {
          border-color: var(--gold);
          color: var(--gold);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(196,154,60,0.15);
        }
        .lm-handoff-field {
          padding: 14px 16px; border-radius: 12px;
          background: #fdfdfd; border: 1px solid rgba(0,0,0,.04);
          margin-bottom: 12px; transition: all 0.2s ease;
        }
        .lm-handoff-field:hover {
          background: #fff;
          border-color: var(--gold);
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }
        .lm-data-bar {
          height: 4px; border-radius: 2px; background: rgba(0,0,0,0.05);
          overflow: hidden; margin-top: 8px; position: relative;
        }
        .lm-data-fill {
          position: absolute; left: 0; top: 0; height: 100%;
          background: var(--gold); border-radius: 2px;
        }
        @media (max-width: 900px) { .lm-hf-cols { grid-template-columns: 1fr !important; gap: 60px !important; } }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 64 }}>
          <div className="eyebrow eyebrow-dark"><span className="ey-line" />Feature 6 — MQL Handoff to Sales</div>
          <h2 className="h2 h2-ink">
            The Cleanest Handoff<br /><em>in the Business.</em>
          </h2>
          <p className="lead lead-ink">
            When a lead reaches MQL status, the handoff is a structured, documented process — not a Slack message or a forwarded email. Marketing retains full visibility on every lead they send to sales.
          </p>
        </div>

        <div className="reveal lm-hf-cols" style={{
          display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
          gap: 80, alignItems: 'start', transitionDelay: '.15s',
        }}>
          {/* LEFT — 5 Steps Timeline */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: 'var(--ink3)', marginBottom: 32 }}>
              Standard Operating Procedure
            </div>
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                className="lm-hf-step"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="lm-hf-num">{s.n}</div>
                <div style={{ paddingTop: 6 }}>
                   <p style={{ fontSize: 15, color: 'var(--navy)', fontWeight: 600, marginBottom: 8, margin: 0 }}>Step {s.n}</p>
                   <p style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.7, margin: 0 }}>{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — Handoff Context & Feedback */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            
            {/* Handoff card */}
            <div style={{
              background: '#fff', border: '1px solid rgba(0,0,0,.05)',
              borderRadius: 24, overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,.04)',
            }}>
              <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(0,0,0,.06)', display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(45,91,227,0.02)' }}>
                <UserCheck size={18} style={{ color: 'var(--navy)' }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: 2 }}>MQL Handoff Brief</span>
                <span style={{ marginLeft: 'auto', fontSize: 10, padding: '4px 12px', borderRadius: 100, background: 'rgba(24,184,122,.1)', color: 'var(--green)', fontWeight: 700 }}>Priority: High</span>
              </div>
              <div style={{ padding: '24px' }}>
                {HANDOFF_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="lm-handoff-field"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * .1 }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.2, color: 'var(--gold)' }}>{item.label}</div>
                      {item.label === 'Lead' && <div style={{ fontSize: 10, color: 'var(--ink3)' }}>Engagement: 84%</div>}
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--navy)', marginBottom: 4 }}>{item.value}</div>
                    <div style={{ fontSize: 11, color: 'var(--ink3)', lineHeight: 1.5 }}>{item.sub}</div>
                    
                    {item.label === 'Lead' && (
                      <div className="lm-data-bar">
                        <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: '84%' }}
                           transition={{ duration: 1, delay: 0.5 }}
                           className="lm-data-fill" 
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
