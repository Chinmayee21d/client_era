'use client'

import { motion } from 'framer-motion'
import { Monitor, Calendar, Download } from 'lucide-react'

const KPI_COLS = [
  { label: 'Pipeline', value: '₹12.8Cr', change: '+18%', changeCol: 'var(--green)', icon: '📊' },
  { label: 'Won MTD', value: '₹4.8Cr', change: '60% of target', changeCol: 'var(--gold)', icon: '🏆' },
  { label: 'Win Rate', value: '34%', change: '+4pp', changeCol: 'var(--green)', icon: '📈' },
  { label: 'Forecast Conf.', value: '82%', change: 'High', changeCol: 'var(--blue)', icon: '🎯' },
]

const CALLOUTS = [
  {
    icon: Calendar,
    num: '01',
    title: 'Scheduled Digests',
    desc: 'Weekly performance PDF delivered to your inbox every Monday at 8 AM. Zero prep required.',
  },
  {
    icon: Download,
    num: '02',
    title: 'On-Demand Export',
    desc: 'Export any filtered view to CSV or Excel for custom analysis. Your data, your way.',
  },
  {
    icon: Monitor,
    num: '03',
    title: 'Zero Operational Noise',
    desc: 'Board Mode strips out operational detail, showing only KPIs and revenue for stakeholder consumption.',
  },
]

export default function SM_BoardMode() {
  return (
    <section style={{ background: 'var(--navy2)', position: 'relative', overflow: 'hidden' }}>
      {/* Cinematic background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 30%, rgba(196,154,60,.05) 0%, transparent 60%)',
      }} />

      <style>{`
        .sm-board-callout {
          display: flex; gap: 16px; align-items: flex-start;
          padding: 18px 20px; border-radius: 14px;
          border: 1px solid var(--border);
          background: var(--surface);
          transition: all .28s; cursor: default;
        }
        .sm-board-callout:hover {
          border-color: var(--border2);
          background: var(--surface2);
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0,0,0,.2);
        }
        .sm-board-num {
          font-family: 'Fraunces', serif;
          font-size: 24px; font-weight: 400;
          color: var(--gold); opacity: .5;
          line-height: 1; flex-shrink: 0;
          width: 36px;
        }
        .sm-board-preview-container {
          transition-delay: .1s;
          margin-bottom: 40px;
        }
        .sm-board-preview {
          background: rgba(13,28,52,.92);
          backdrop-filter: blur(22px);
          border: 1px solid rgba(196,154,60,.25);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 0 32px rgba(196,154,60,.08), 0 32px 80px rgba(0,0,0,.4);
          max-width: 820px;
          margin: 0 auto;
        }
        .sm-board-title { font-size: 10px; color: var(--text3); margin-left: 8px; }
        .sm-board-badge {
          font-size: 8px; font-weight: 700; padding: 3px 10px; border-radius: 100px;
          background: rgba(196,154,60,.12); color: var(--gold);
          text-transform: uppercase; letter-spacing: 1px;
        }
        .sm-board-content { padding: 28px 28px; }
        .sm-board-revenue {
          font-family: 'Fraunces', serif;
          font-size: 56px; font-weight: 400;
          color: var(--text);
          letter-spacing: -2px;
          line-height: 1;
        }
        .sm-board-stat { font-size: 12px; color: var(--green); font-weight: 500; margin-top: 6px; }
        .sm-board-progress-bg {
          max-width: 400px; margin: 16px auto 0;
          height: 10px; border-radius: 5px;
          background: rgba(255,255,255,.06);
          overflow: hidden;
        }
        .sm-board-progress-fill {
          height: 100%; border-radius: 5px;
          background: linear-gradient(90deg, var(--gold), var(--green));
        }
        .sm-board-kpis { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .sm-board-kpi-card {
          background: rgba(255,255,255,.035);
          border: 1px solid var(--border);
          border-radius: 12px; padding: 16px 14px;
          text-align: center;
        }
        .sm-board-kpi-label { font-size: 8px; color: var(--text3); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
        .sm-board-kpi-value { font-family: 'Fraunces', serif; font-size: 22px; color: var(--text); margin-bottom: 3px; }
        .sm-board-callouts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; transition-delay: .25s; }

        @media (max-width: 1024px) {
          .sm-board-kpis { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .sm-board-callouts { grid-template-columns: 1fr; gap: 12px; }
          .sm-board-revenue { font-size: 42px; }
          .sm-board-content { padding: 20px 16px; }
        }
      `}</style>

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48, maxWidth: 600, margin: '0 auto 48px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="ey-line" />Board-Ready Reporting
          </div>
          <h2 className="h2" style={{ textAlign: 'center' }}>
            One click to the<br /><em>boardroom.</em>
          </h2>
          <p className="lead" style={{ margin: '0 auto', textAlign: 'center' }}>
            Your directors and board members don&apos;t need operational noise. Board Mode gives them a clean, graphical summary — revenue, progress, KPIs — nothing else.
          </p>
        </div>

        {/* Board Mode preview */}
        <div className="reveal sm-board-preview-container">
          <div className="sm-board-preview">
            {/* Title bar */}
            <div style={{
              padding: '14px 20px',
              borderBottom: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="ce-wdot ce-wd-r" /><span className="ce-wdot ce-wd-y" /><span className="ce-wdot ce-wd-g" />
                <span className="sm-board-title">Board Summary · Q1 2026</span>
              </div>
              <div className="sm-board-badge">
                Board Mode
              </div>
            </div>

            <div className="sm-board-content">
              {/* Big revenue number */}
              <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <div style={{ fontSize: 10, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8 }}>
                  Total Revenue — Q1 2026
                </div>
                <motion.div
                  className="sm-board-revenue"
                  initial={{ opacity: 0, scale: .9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: .5 }}
                >
                  ₹4.8<span style={{ fontSize: '0.5em', color: 'var(--gold)' }}>Cr</span>
                </motion.div>
                <div className="sm-board-stat">
                  ↑ 18% vs Q4 2025 · 60% of Q1 target achieved
                </div>

                {/* Progress bar */}
                <div className="sm-board-progress-bg">
                  <motion.div
                    className="sm-board-progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: '60%' }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .3 }}
                  />
                </div>
                <div style={{ fontSize: 9, color: 'var(--text3)', marginTop: 6 }}>₹4.8Cr / ₹8.0Cr target</div>
              </div>

              {/* KPI columns */}
              <div className="sm-board-kpis">
                {KPI_COLS.map((k, i) => (
                  <motion.div
                    key={k.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * .1 + .3 }}
                    className="sm-board-kpi-card"
                  >
                    <div style={{ fontSize: 18, marginBottom: 6 }}>{k.icon}</div>
                    <div className="sm-board-kpi-label">{k.label}</div>
                    <div className="sm-board-kpi-value">{k.value}</div>
                    <div style={{ fontSize: 10, color: k.changeCol, fontWeight: 500 }}>{k.change}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Callouts */}
        <div className="reveal sm-board-callouts">
          {CALLOUTS.map((c, i) => (
            <motion.div
              key={c.num}
              className="sm-board-callout"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .1 }}
            >
              <div className="sm-board-num">{c.num}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>{c.title}</div>
                <div style={{ fontSize: 12.5, color: 'var(--text2)', lineHeight: 1.6 }}>{c.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
