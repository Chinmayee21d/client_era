'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, BarChart3, Compass } from 'lucide-react'

const LOOPS = [
  {
    id: 'tactical',
    icon: Zap,
    freq: 'DAILY',
    name: 'The Tactical Loop',
    headline: 'React to what\'s happening right now',
    color: 'var(--gold)',
    bgColor: 'rgba(196,154,60,.08)',
    borderColor: 'rgba(196,154,60,.25)',
    activities: [
      'Monitor live check-ins and GPS-verified visits',
      'Resolve immediate blocks — approvals, reassignments',
      'Flag missed visits and unstarted days',
      'Track real-time meeting and call activity',
    ],
  },
  {
    id: 'operational',
    icon: BarChart3,
    freq: 'WEEKLY · MONTHLY',
    name: 'The Operational Loop',
    headline: 'Steer the ship with data, not gut feel',
    color: 'var(--green)',
    bgColor: 'rgba(24,184,122,.08)',
    borderColor: 'rgba(24,184,122,.25)',
    activities: [
      'Review pipeline progression and forecast accuracy',
      'Analyze KPI attainment — team vs. individual',
      'Calibrate targets and adjust territory focus',
      'Run coaching sessions with data-backed evidence',
    ],
  },
  {
    id: 'strategic',
    icon: Compass,
    freq: 'QUARTERLY · ANNUAL',
    name: 'The Strategic Loop',
    headline: 'Shape the future of your organisation',
    color: 'var(--blue)',
    bgColor: 'rgba(52,112,240,.08)',
    borderColor: 'rgba(52,112,240,.25)',
    activities: [
      'Structure organizational hierarchy and reporting lines',
      'Define long-term revenue and growth targets',
      'Identify market shifts and competitor threats',
      'Generate board-ready strategic reports',
    ],
  },
]

export default function SM_Lifecycle() {
  const [active, setActive] = useState('tactical')
  const current = LOOPS.find(l => l.id === active) || LOOPS[0]

  return (
    <section style={{ background: 'var(--navy)' }} id="sm-lifecycle">
      <style>{`
        .sm-loop-tab {
          display: flex; align-items: center; gap: 12px;
          padding: 18px 22px; border-radius: 14px;
          border: 1.5px solid transparent;
          background: var(--surface); cursor: pointer;
          transition: all .3s cubic-bezier(.22,1,.36,1);
        }
        .sm-loop-tab:hover:not(.sm-loop-active) {
          border-color: rgba(255,255,255,.08);
          transform: translateX(4px);
        }
        .sm-loop-active {
          background: var(--surface2);
          box-shadow: 0 8px 32px rgba(0,0,0,.2);
        }
        .sm-loop-icon {
          width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: transform .3s;
        }
        .sm-loop-tab:hover .sm-loop-icon { transform: scale(1.1) rotate(-4deg); }
        .sm-loop-freq {
          font-size: 9px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1.5px;
          margin-bottom: 3px;
        }
        .sm-loop-name {
          font-family: 'Fraunces', serif;
          font-size: 16px; font-weight: 400;
          color: var(--text); margin-bottom: 2px;
        }
        .sm-activity-item {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 14px; border-radius: 10px;
          font-size: 13.5px; color: var(--text2);
          transition: all .2s;
          margin-bottom: 8px;
        }
        .sm-activity-item:hover {
          background: rgba(255,255,255,0.03);
          transform: translateX(4px);
        }
        .sm-act-dot {
          width: 7px; height: 7px; border-radius: 50%;
          flex-shrink: 0;
        }
        .sm-lifecycle-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
          transition-delay: .15s;
        }
        .sm-detail-card {
          background: var(--surface);
          border-radius: 18px;
          border: 1.5px solid var(--border);
          border-top: 4px solid;
          padding: 28px 26px;
          box-shadow: 0 8px 40px rgba(0,0,0,.3);
        }
        .sm-detail-header {
          display: flex; alignItems: center; gap: 10px;
          marginBottom: 20px; paddingBottom: 16px;
          borderBottom: 1px solid var(--border);
        }
        .sm-mobile-detail { display: none; }
        
        @media (max-width: 1024px) {
          .sm-lifecycle-grid { grid-template-columns: 1fr; gap: 24px; }
          .sm-desktop-detail { display: none; }
          .sm-mobile-detail { display: block; }
          .sm-detail-card { padding: 20px; }
          .sm-detail-header-mobile {
            display: flex; align-items: center; gap: 10px;
            margin-bottom: 16px; padding-bottom: 12px;
            border-bottom: 1px solid var(--border);
          }
        }
        @media (max-width: 480px) {
          .sm-loop-tab { padding: 14px 16px; }
          .sm-loop-icon { width: 36px; height: 36px; }
          .sm-loop-name { font-size: 15px; }
        }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div className="eyebrow"><span className="ey-line" />How It Works</div>
          <h2 className="h2">
            Management has three rhythms.<br />
            <em>We built for all of them.</em>
          </h2>
          <p className="lead">
            Great sales leadership isn&apos;t just daily firefighting. It&apos;s a balance of tactical reaction, operational steering, and strategic vision. ClientEra serves all three.
          </p>
        </div>

        <div className="reveal sm-lifecycle-grid">
          {/* Loop tabs */}
          <div className="sm-loop-tabs-container" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {LOOPS.map(loop => (
              <div key={loop.id}>
                <div
                  className={`sm-loop-tab ${active === loop.id ? 'sm-loop-active' : ''}`}
                  onClick={() => setActive(loop.id)}
                  style={{
                    borderColor: active === loop.id ? loop.borderColor : 'transparent',
                  }}
                >
                  <div
                    className="sm-loop-icon"
                    style={{
                      background: loop.bgColor,
                      border: `1px solid ${loop.borderColor}`,
                      color: loop.color,
                    }}
                  >
                    <loop.icon size={22} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="sm-loop-freq" style={{ color: loop.color }}>{loop.freq}</div>
                    <div className="sm-loop-name">{loop.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--text3)' }}>{loop.headline}</div>
                  </div>
                </div>

                {/* Mobile Detail Panel (appears below card) */}
                <div className="sm-mobile-detail">
                  {active === loop.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="sm-detail-card" style={{ borderTopColor: current.borderColor, marginTop: 12 }}>
                        <div className="sm-detail-header-mobile">
                          <div style={{
                            width: 32, height: 32, borderRadius: 8,
                            background: current.bgColor,
                            border: `1px solid ${current.borderColor}`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: current.color,
                          }}>
                            <current.icon size={16} strokeWidth={2} />
                          </div>
                          <div>
                            <div style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: current.color }}>{current.freq}</div>
                            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 400, color: 'var(--text)' }}>{current.name}</div>
                          </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                          {current.activities.map((act, i) => (
                            <div key={act} className="sm-activity-item">
                              <div className="sm-act-dot" style={{ background: current.color }} />
                              {act}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Detail Panel */}
          <div className="sm-desktop-detail">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: .3 }}
                className="sm-detail-card"
                style={{ borderTopColor: current.borderColor }}
              >
                <div className="sm-detail-header">
                  <div style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: current.bgColor,
                    border: `1px solid ${current.borderColor}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: current.color,
                  }}>
                    <current.icon size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: current.color }}>{current.freq}</div>
                    <div style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 400, color: 'var(--text)' }}>{current.name}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {current.activities.map((act, i) => (
                    <motion.div
                      key={act}
                      className="sm-activity-item"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * .08 }}
                    >
                      <div className="sm-act-dot" style={{ background: current.color }} />
                      {act}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
