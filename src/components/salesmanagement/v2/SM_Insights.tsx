'use client'

import { Lightbulb, BrainCircuit, TrendingUp, BellRing, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const FEATURES = [
  {
    icon: BrainCircuit,
    title: 'AI Deal Signals',
    desc: 'Machine-learning models surface deals that are stalling, accelerating, or at risk — before you notice it yourself.',
  },
  {
    icon: TrendingUp,
    title: 'Trend Detection',
    desc: 'Automatic identification of patterns across territories — rising competitors, shifting buyer behaviour, and seasonal spikes.',
  },
  {
    icon: BellRing,
    title: 'Smart Alert Digest',
    desc: 'A single morning briefing with the 5 things that need your attention today. No noise, no digging, just signal.',
  },
  {
    icon: Sparkles,
    title: 'Coaching Recommendations',
    desc: 'AI-generated coaching nudges based on rep activity patterns — who needs help, what to focus on, and when to intervene.',
  },
]

const INSIGHTS = [
  {
    type: 'warning',
    icon: '⚠️',
    title: 'Deal Stall Risk — Vertex Corp',
    detail: 'No activity for 11 days. Historically, deals with 10+ day gaps close at 18% vs. 62%.',
    action: 'Nudge Arjun S.',
    color: '#F5A623',
    bg: 'rgba(245,166,35,.08)',
    border: 'rgba(245,166,35,.2)',
  },
  {
    type: 'positive',
    icon: '🚀',
    title: 'Accelerating — BluePeak Technologies',
    detail: 'Champion engaged 3 stakeholders in 48hrs. Win probability jumped from 34% → 68%.',
    action: 'Fast-track proposal',
    color: 'var(--green)',
    bg: 'rgba(24,184,122,.08)',
    border: 'rgba(24,184,122,.2)',
  },
  {
    type: 'coaching',
    icon: '💡',
    title: 'Coaching Signal — Priya M.',
    detail: 'Discovery call-to-demo ratio is 4:1 vs. team avg 2:1. Qualification may be too loose.',
    action: 'Schedule 1-on-1',
    color: 'var(--blue)',
    bg: 'rgba(52,112,240,.08)',
    border: 'rgba(52,112,240,.2)',
  },
  {
    type: 'trend',
    icon: '📊',
    title: 'Territory Trend — South Region',
    detail: 'Average deal size up 22% QoQ. 3 new enterprise logos entered pipeline this month.',
    action: 'Allocate resources',
    color: 'var(--gold)',
    bg: 'rgba(196,154,60,.08)',
    border: 'rgba(196,154,60,.2)',
  },
]

const SCORES = [
  { label: 'Insights Today', val: '12', col: 'var(--text)' },
  { label: 'Action Needed', val: '4', col: '#F5A623' },
  { label: 'Positive Signals', val: '7', col: 'var(--green)' },
]

export default function SM_Insights() {
  return (
    <section className="section-dark">
      <style>{`
        .sm-ins-feat {
          display: flex; gap: 14px; align-items: flex-start;
          padding: 16px 18px; border-radius: 14px;
          border: 1px solid transparent;
          transition: all .28s cubic-bezier(.22,1,.36,1);
          cursor: default;
        }
        .sm-ins-feat:hover {
          background: var(--surface);
          border-color: var(--border);
          transform: translateX(6px);
        }
        .sm-ins-icon {
          width: 40px; height: 40px; border-radius: 11px;
          background: rgba(52,112,240,.1);
          border: 1px solid rgba(52,112,240,.2);
          display: flex; align-items: center; justify-content: center;
          color: var(--blue); flex-shrink: 0;
          transition: transform .3s;
        }
        .sm-ins-feat:hover .sm-ins-icon { transform: scale(1.1) rotate(-4deg); }
        .sm-ins-row {
          padding: 12px 14px;
          border-radius: 10px;
          transition: all .25s;
          cursor: default;
        }
        .sm-ins-row:hover { transform: translateX(4px); }
        .sm-ins-action {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 9px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 1px; padding: 3px 10px;
          border-radius: 100; cursor: pointer;
          transition: all .2s;
        }
        .sm-ins-action:hover { filter: brightness(1.2); transform: scale(1.05); }
        .sm-ins-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 48px;
          align-items: center;
          transition-delay: .15s;
        }
        @media (max-width: 1024px) {
          .sm-ins-grid {
            display: flex;
            flex-direction: column-reverse;
            gap: 32px;
          }
        }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div className="eyebrow">
            <span className="ey-line" />
            <Lightbulb size={12} strokeWidth={2.5} style={{ marginRight: 6 }} />
            Strategic Insights
          </div>
          <h2 className="h2">
            Intelligence that<br /><em>finds you.</em>
          </h2>
          <p className="lead">
            Stop hunting for information. ClientEra's AI engine continuously analyses your pipeline, team activity, and market signals — surfacing actionable insights before they become urgent problems.
          </p>
        </div>

        <div className="reveal sm-ins-grid">
          {/* LEFT — Features */}
          <div className="sm-ins-features">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                className="sm-ins-feat"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .1 }}
              >
                <div className="sm-ins-icon">
                  <f.icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--text2)', lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — Insight Feed Dashboard */}
          <div className="sm-ins-dashboard">
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
                <span className="ce-card-lbl">AI Insight Feed — Today</span>
              </div>

              <div style={{ padding: '14px 16px' }}>
                {/* Score bar */}
                <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
                  {SCORES.map(s => (
                    <div key={s.label} style={{
                      flex: 1,
                      background: 'rgba(255,255,255,.035)',
                      border: '1px solid var(--border)',
                      borderRadius: 8,
                      padding: '8px 10px',
                      textAlign: 'center',
                    }}>
                      <div style={{ fontSize: 8, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 3 }}>{s.label}</div>
                      <div style={{ fontFamily: "'Fraunces', serif", fontSize: 18, color: s.col }}>{s.val}</div>
                    </div>
                  ))}
                </div>

                {/* Insight rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {INSIGHTS.map((ins, i) => (
                    <motion.div
                      key={ins.title}
                      className="sm-ins-row"
                      style={{
                        background: ins.bg,
                        border: `1px solid ${ins.border}`,
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * .1 }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <span style={{ fontSize: 16, lineHeight: 1, flexShrink: 0, marginTop: 1 }}>{ins.icon}</span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 11, fontWeight: 700, color: ins.color, marginBottom: 3 }}>
                            {ins.title}
                          </div>
                          <div style={{ fontSize: 10, color: 'var(--text2)', lineHeight: 1.5, marginBottom: 8 }}>
                            {ins.detail}
                          </div>
                          <div
                            className="sm-ins-action"
                            style={{
                              background: ins.bg,
                              border: `1px solid ${ins.border}`,
                              color: ins.color,
                            }}
                          >
                            <Sparkles size={8} />
                            {ins.action}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer summary */}
                <div style={{
                  marginTop: 10,
                  padding: '8px 12px',
                  background: 'rgba(52,112,240,.06)',
                  border: '1px solid rgba(52,112,240,.15)',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}>
                  <BrainCircuit size={14} style={{ color: 'var(--blue)', flexShrink: 0 }} />
                  <span style={{ fontSize: 10, color: 'var(--blue)', fontWeight: 500 }}>
                    AI confidence: 94% — Model retrained 2h ago with latest pipeline data
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
