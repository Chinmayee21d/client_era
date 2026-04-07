'use client'

import { motion } from 'framer-motion'
import { GitBranch, Lock, ShieldCheck } from 'lucide-react'

const FEATURES = [
  {
    icon: GitBranch,
    title: 'Flexible Hierarchy Builder',
    desc: 'Define N-levels with custom labels. Associate → Lead → Manager → Director → VP — your terminology, your structure.',
  },
  {
    icon: Lock,
    title: 'Granular RBAC',
    desc: 'Modular permissions across Activity, Pipeline, People, Commercial, and Admin modules. Set approval thresholds per role.',
  },
  {
    icon: ShieldCheck,
    title: 'Scope Isolation',
    desc: 'Visibility flows downward only. Managers see their team, never sibling teams. Total data privacy by territory.',
  },
]

const LEVELS = [
  { title: 'Director / CEO', sub: 'Full visibility · All regions', color: 'var(--gold)', bg: 'rgba(196,154,60,.1)', border: 'rgba(196,154,60,.35)', w: '100%' },
  { title: 'Regional Director', sub: 'Cross-team analytics · Resource allocation', color: 'var(--blue)', bg: 'rgba(52,112,240,.1)', border: 'rgba(52,112,240,.3)', w: '82%' },
  { title: 'Sales Manager', sub: 'Pipeline oversight · Approval authority', color: 'var(--green)', bg: 'rgba(24,184,122,.1)', border: 'rgba(24,184,122,.3)', w: '64%' },
  { title: 'Team Lead', sub: 'Daily activity monitoring · Coaching', color: '#F5A623', bg: 'rgba(245,166,35,.1)', border: 'rgba(245,166,35,.3)', w: '46%' },
  { title: 'Sales Rep', sub: 'Field execution · Client management', color: 'var(--text3)', bg: 'rgba(255,255,255,.04)', border: 'var(--border2)', w: '32%' },
]

export default function SM_Hierarchy() {
  return (
    <section className="section-light">
      <style>{`
        .sm-hier-feat {
          display: flex; gap: 14px; align-items: flex-start;
          padding: 16px 18px; border-radius: 14px;
          border: 1px solid transparent;
          transition: all .28s; cursor: default;
        }
        .sm-hier-feat:hover {
          background: #fff;
          border-color: rgba(0,0,0,.06);
          transform: translateX(6px);
        }
        .sm-hier-icon {
          width: 40px; height: 40px; border-radius: 11px;
          background: rgba(10,45,128,.06);
          border: 1px solid rgba(10,45,128,.12);
          display: flex; align-items: center; justify-content: center;
          color: #0A2D80; flex-shrink: 0;
          transition: transform .3s;
        }
        .sm-hier-feat:hover .sm-hier-icon { transform: scale(1.1) rotate(-4deg); }
        .sm-level-bar {
          padding: 14px 18px; border-radius: 12px;
          border: 1.5px solid; display: flex;
          align-items: center; gap: 12px;
          transition: all .25s; cursor: default;
        }
        .sm-level-bar:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,.08);
        }

        .sm-hier-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 52px;
          align-items: center;
          transition-delay: .15s;
        }
        @media (max-width: 1024px) {
          .sm-hier-grid {
            display: flex;
            flex-direction: column;
            gap: 32px;
          }
          .sm-hier-visual { order: -1; }
          .sm-hier-visual > div { padding: 24px 20px; }
          .sm-level-bar { width: 100% !important; padding: 12px 14px; }
        }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div className="eyebrow eyebrow-dark"><span className="ey-line" />Role-Based Access</div>
          <h2 className="h2 h2-ink">
            Every manager sees exactly<br />
            what they need. <em>Nothing more.</em>
          </h2>
          <p className="lead lead-ink">
            ClientEra doesn&apos;t impose a fixed structure. Each company builds their own commercial skeleton with customizable levels, labels, and granular permissions.
          </p>
        </div>

        <div className="reveal sm-hier-grid">
          {/* LEFT — Hierarchy tree visual */}
          <div className="sm-hier-visual">
            <div style={{
              background: 'var(--navy)',
              borderRadius: 18,
              padding: '32px 28px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Subtle grid bg */}
              <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none', opacity: .03,
                backgroundImage: 'radial-gradient(circle, #fff .5px, transparent .5px)',
                backgroundSize: '20px 20px',
              }} />

              <div style={{
                fontSize: 9, fontWeight: 700, color: 'var(--gold)',
                textTransform: 'uppercase', letterSpacing: 1.5,
                marginBottom: 20, position: 'relative',
              }}>
                Organizational Hierarchy
              </div>

              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
                {LEVELS.map((lvl, i) => (
                  <motion.div
                    key={lvl.title}
                    className="sm-level-bar"
                    style={{
                      width: lvl.w,
                      background: lvl.bg,
                      borderColor: lvl.border,
                    }}
                    initial={{ opacity: 0, y: 12, scale: .95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * .1 }}
                  >
                    <div style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: lvl.color, flexShrink: 0,
                    }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)' }}>{lvl.title}</div>
                      <div style={{ fontSize: 10, color: 'var(--text3)' }}>{lvl.sub}</div>
                    </div>
                    {i < 2 && (
                      <div style={{
                        fontSize: 7, fontWeight: 700, padding: '2px 7px',
                        borderRadius: 100, background: 'rgba(196,154,60,.12)',
                        color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: .8,
                      }}>RBAC</div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Feature callouts */}
          <div className="sm-hier-features">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                className="sm-hier-feat"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .1 }}
              >
                <div className="sm-hier-icon">
                  <f.icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--ink3)', lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
