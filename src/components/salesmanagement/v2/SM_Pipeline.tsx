'use client'

import { motion } from 'framer-motion'
import { Filter, AlertCircle, TrendingUp, ArrowRight } from 'lucide-react'

const FEATURES = [
  {
    icon: Filter,
    title: 'Funnel Visualisation',
    desc: 'See deal value aggregated at every stage — from Lead to Won. One view, all reps, no spreadsheets.',
  },
  {
    icon: AlertCircle,
    title: 'AI Stalled Deal Detection',
    desc: 'Deals that haven\'t moved in X days get flagged automatically. No stall goes unnoticed, no revenue slips silently.',
  },
  {
    icon: TrendingUp,
    title: 'Conversion Benchmarking',
    desc: 'Compare individual rep win rates (Quote-to-PO). Spot who needs coaching and who\'s your hidden star.',
  },
]

const STAGES = [
  { label: 'Lead', value: '₹28.4Cr', count: 142, width: '100%', color: 'var(--blue)', bg: 'rgba(52,112,240,.12)' },
  { label: 'Qualified', value: '₹18.2Cr', count: 86, width: '72%', color: 'var(--gold)', bg: 'rgba(196,154,60,.12)' },
  { label: 'Quote Sent', value: '₹12.6Cr', count: 52, width: '50%', color: '#F5A623', bg: 'rgba(245,166,35,.12)' },
  { label: 'Negotiation', value: '₹8.1Cr', count: 31, width: '35%', color: 'var(--green)', bg: 'rgba(24,184,122,.12)' },
  { label: 'Won', value: '₹4.8Cr', count: 18, width: '20%', color: '#18B87A', bg: 'rgba(24,184,122,.18)' },
]

const WIN_RATES = [
  { name: 'Arjun S.', rate: 42, color: 'var(--green)' },
  { name: 'Priya M.', rate: 38, color: 'var(--gold)' },
  { name: 'Raj K.', rate: 28, color: 'var(--blue)' },
  { name: 'Dev T.', rate: 15, color: 'var(--red)' },
]

export default function SM_Pipeline() {
  return (
    <section className="section-dark">
      <style>{`
        .sm-pipe-feat {
          display: flex; gap: 14px; align-items: flex-start;
          padding: 16px 18px; border-radius: 14px;
          border: 1px solid transparent;
          transition: all .28s; cursor: default;
        }
        .sm-pipe-feat:hover {
          background: var(--surface);
          border-color: var(--border);
          transform: translateX(6px);
        }
        .sm-pipe-icon {
          width: 40px; height: 40px; border-radius: 11px;
          background: var(--gold-bg);
          border: 1px solid rgba(196,154,60,.2);
          display: flex; align-items: center; justify-content: center;
          color: var(--gold); flex-shrink: 0;
          transition: transform .3s;
        }
        .sm-pipe-feat:hover .sm-pipe-icon { transform: scale(1.1) rotate(-4deg); }
        .sm-funnel-stage {
          display: flex; align-items: center; gap: 12px;
          padding: 10px 14px; border-radius: 10px;
          transition: all .2s; cursor: default;
        }
        .sm-funnel-stage:hover {
          background: rgba(255,255,255,.04);
          transform: translateX(4px);
        }

        .sm-pipe-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 48px;
          align-items: center;
          transition-delay: .15s;
        }
        @media (max-width: 1024px) {
          .sm-pipe-grid {
            display: flex;
            flex-direction: column;
            gap: 32px;
          }
          .sm-funnel-stage { gap: 8px; padding: 8px 10px; }
          .sm-funnel-stage > :first-child { width: 50px !important; }
        }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div className="eyebrow"><span className="ey-line" />Pipeline Oversight</div>
          <h2 className="h2">
            Every deal. Every stage.<br /><em>Every rep.</em>
          </h2>
          <p className="lead">
            The pipeline is the lifeblood of your business. Get a God&apos;s-eye view of all deals across all reps, with AI that surfaces stalls before it&apos;s too late.
          </p>
        </div>

        <div className="reveal sm-pipe-grid">
          {/* LEFT — Pipeline dashboard */}
          <div className="sm-pipe-dashboard">
            <div style={{
              background: 'rgba(13,28,52,.88)',
              backdropFilter: 'blur(22px)',
              border: '1px solid var(--border2)',
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,.4)',
            }}>
              <div className="ce-card-titlebar">
                <span className="ce-wdot ce-wd-r" /><span className="ce-wdot ce-wd-y" /><span className="ce-wdot ce-wd-g" />
                <span className="ce-card-lbl">Pipeline Funnel — All Regions</span>
              </div>

              <div style={{ padding: '16px 18px' }}>
                {/* Funnel stages */}
                <div style={{ marginBottom: 16 }}>
                  {STAGES.map((s, i) => (
                    <motion.div
                      key={s.label}
                      className="sm-funnel-stage"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * .1 }}
                    >
                      <div style={{ width: 60, fontSize: 10, color: 'var(--text3)', fontWeight: 600 }}>{s.label}</div>
                      <div style={{ flex: 1, position: 'relative', height: 24 }}>
                        <motion.div
                          style={{
                            height: '100%',
                            borderRadius: 6,
                            background: s.bg,
                            border: `1px solid ${s.color}30`,
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: 10,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: s.width }}
                          viewport={{ once: true }}
                          transition={{ delay: i * .1 + .2, duration: .6 }}
                        >
                          <span style={{ fontSize: 10, fontWeight: 700, color: s.color, whiteSpace: 'nowrap' }}>{s.value}</span>
                        </motion.div>
                      </div>
                      <div style={{ fontSize: 9, color: 'var(--text3)', width: 30, textAlign: 'right' }}>{s.count}</div>
                    </motion.div>
                  ))}
                </div>

                {/* AI alert */}
                <div style={{
                  padding: '10px 14px',
                  background: 'rgba(196,154,60,.06)',
                  border: '1px solid rgba(196,154,60,.18)',
                  borderRadius: 10,
                  marginBottom: 14,
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <AlertCircle size={14} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                  <span style={{ fontSize: 10, color: 'var(--gold)', fontWeight: 500 }}>
                    AI detected 4 deals stalled &gt;14 days in Negotiation stage
                  </span>
                  <ArrowRight size={12} style={{ color: 'var(--gold)', marginLeft: 'auto', flexShrink: 0 }} />
                </div>

                {/* Win rate bars */}
                <div style={{ fontSize: 8, fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 8 }}>
                  Quote-to-PO Win Rate
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  {WIN_RATES.map(r => (
                    <div key={r.name} style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ fontSize: 10, color: 'var(--text3)', marginBottom: 4 }}>{r.name}</div>
                      <div style={{
                        height: 6, borderRadius: 3,
                        background: 'rgba(255,255,255,.06)',
                        overflow: 'hidden',
                      }}>
                        <motion.div
                          style={{ height: '100%', borderRadius: 3, background: r.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${r.rate}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: .7, delay: .3 }}
                        />
                      </div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: r.color, marginTop: 3 }}>{r.rate}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Features */}
          <div className="sm-pipe-features">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                className="sm-pipe-feat"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .1 }}
              >
                <div className="sm-pipe-icon">
                  <f.icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--text2)', lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
