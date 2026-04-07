'use client'

import { motion } from 'framer-motion'
import { Target, Trophy, BarChart3 } from 'lucide-react'

const CARDS = [
  {
    icon: Target,
    title: 'Multi-Dimensional Targets',
    desc: 'Set targets by revenue, volume, activity, or SKU-specific goals. "Sell 100 units of Product X" is a first-class KPI.',
    tags: ['Revenue', 'Volume', 'Activity', 'SKU-Level'],
    color: 'var(--gold)',
    bg: 'rgba(196,154,60,.08)',
    border: 'rgba(196,154,60,.25)',
  },
  {
    icon: Trophy,
    title: 'Interactive Leaderboards',
    desc: 'Foster friendly competition with weighted scores across multiple KPIs. Control which rankings are public vs. manager-only.',
    tags: ['Real-Time', 'Weighted', 'Configurable'],
    color: 'var(--green)',
    bg: 'rgba(24,184,122,.08)',
    border: 'rgba(24,184,122,.25)',
  },
  {
    icon: BarChart3,
    title: 'Coaching Correlation',
    desc: 'Is Rep A making more visits but fewer quotes? Correlate activity to results to coach smarter, not louder.',
    tags: ['Efficiency', 'Data Quality', 'AI-Driven'],
    color: 'var(--blue)',
    bg: 'rgba(52,112,240,.08)',
    border: 'rgba(52,112,240,.25)',
  },
]

export default function SM_KPI() {
  return (
    <section className="section-light">
      <style>{`
        .sm-kpi-card {
          background: #fff;
          border: 1.5px solid rgba(0,0,0,.06);
          border-radius: 18px;
          padding: 28px 24px;
          transition: all .3s cubic-bezier(.22,1,.36,1);
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .sm-kpi-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, currentColor, transparent);
          opacity: 0; transition: opacity .3s;
        }
        .sm-kpi-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(0,0,0,.08);
        }
        .sm-kpi-card:hover::before { opacity: .3; }
        .sm-kpi-icon {
          width: 48px; height: 48px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
          transition: transform .3s;
        }
        .sm-kpi-card:hover .sm-kpi-icon { transform: scale(1.1) rotate(-6deg); }
        .sm-kpi-tag {
          display: inline-block;
          font-size: 9px; font-weight: 700;
          padding: 3px 9px; border-radius: 100px;
          text-transform: uppercase; letter-spacing: .5px;
          margin-right: 5px; margin-top: 5px;
        }
        .sm-kpi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 40px;
          transition-delay: .1s;
        }
        @media (max-width: 1024px) {
          .sm-kpi-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .sm-kpi-card { padding: 22px 20px; }
        }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48, maxWidth: 600, margin: '0 auto 48px' }}>
          <div className="eyebrow eyebrow-dark" style={{ justifyContent: 'center' }}>
            <span className="ey-line" />Target &amp; KPI Engine
          </div>
          <h2 className="h2 h2-ink" style={{ textAlign: 'center' }}>
            Set the bar.<br /><em>Track everything.</em>
          </h2>
          <p className="lead lead-ink" style={{ margin: '0 auto', textAlign: 'center' }}>
            Define what success looks like for every level — from daily call targets to quarterly revenue goals. Then watch your team race toward them in real time.
          </p>
        </div>

        {/* Feature cards */}
        <div className="reveal sm-kpi-grid">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              className="sm-kpi-card"
              style={{ color: c.color }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .1 }}
            >
              <div className="sm-kpi-icon" style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.color }}>
                <c.icon size={24} strokeWidth={2} />
              </div>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 400, color: 'var(--ink)', marginBottom: 8 }}>
                {c.title}
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink3)', lineHeight: 1.6, marginBottom: 14 }}>
                {c.desc}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {c.tags.map(t => (
                  <span key={t} className="sm-kpi-tag" style={{ background: c.bg, color: c.color, border: `1px solid ${c.border}` }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
