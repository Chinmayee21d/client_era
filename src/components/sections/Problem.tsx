'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart3, Users, ClipboardList, Cpu, Activity } from 'lucide-react'

/* ── explicit dark hex — never rely on CSS vars inside the dark card ── */
const D = {
  navy: '#0B1628',
  navy3: '#122040',
  border: 'rgba(255,255,255,0.07)',
  border2: 'rgba(255,255,255,0.13)',
  text3: '#56728F',
  red: '#E0384F',
  white: '#EEF2FF',
}

const PAINS = [
  {
    id: 'marketing',
    icon: BarChart3,
    title: 'Marketing loses lead visibility',
    desc: 'Attribution dies the moment a lead is handed off. No closed-loop insight on which campaigns drive revenue.',
  },
  {
    id: 'sales',
    icon: Users,
    title: 'Sales reps are flying blind',
    desc: 'Reps lack visibility into financial history, supply chain status, or support tickets before client meetings.',
  },
  {
    id: 'leader',
    icon: ClipboardList,
    title: 'Leadership depends on manual lag',
    desc: 'Executives rely on outdated, manual end-of-week reports instead of real-time pipeline and workflow clarity.',
  },
  {
    id: 'ai',
    icon: Cpu,
    title: 'AI is a bolted-on afterthought',
    desc: "Generic chatbots can't access your commercial context, merely answering questions without acting on data.",
  },
]

export default function Problem() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section className="section-light" id="problem">
      <style>{`
        @keyframes dashMove {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -26; }
        }
        @keyframes ripplePulse {
          0%, 100% { transform: scale(1);   opacity: 0.55; }
          50%       { transform: scale(1.6); opacity: 0; }
        }
        .prob-row {
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid transparent;
          transition: background .28s, border-color .28s, transform .28s;
          cursor: default;
        }
        .prob-row:hover {
          background: #fff;
          border-color: rgba(0,0,0,0.06);
          transform: translateX(6px);
        }
        .prob-icon {
          width: 38px; height: 38px; border-radius: 10px;
          background: rgba(0,0,0,0.03);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          transition: background .28s, color .28s;
          color: var(--ink3);
        }
        .prob-row:hover .prob-icon { background: var(--gold-bg); color: var(--gold); }
        .prob-title {
          font-size: 14px; font-weight: 700; margin-bottom: 3px;
          color: var(--ink2); transition: color .2s;
        }
        .prob-row:hover .prob-title { color: var(--ink); }
        .prob-desc { font-size: 13px; color: var(--ink3); line-height: 1.55; }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div className="eyebrow eyebrow-dark"><span className="ey-line" />The Fragmentation Cost</div>
          <h2 className="h2 h2-ink">Your tools don't<br /><em>talk to each other.</em></h2>
          <p className="lead lead-ink">
            Siloed CRM, ERP, and support systems create blind spots at every handoff.
            Your team loses context, your leadership loses visibility.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 64,
          alignItems: 'center',
        }}>

          {/* ── LEFT: List of Pains ── */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {PAINS.map((P) => (
              <div
                key={P.id}
                className="prob-row"
                onMouseEnter={() => setHovered(P.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div className="prob-icon"><P.icon size={18} strokeWidth={2.2} /></div>
                  <div>
                    <div className="prob-title">{P.title}</div>
                    <div className="prob-desc">{P.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ transitionDelay: '.2s', alignSelf: 'center', width: '100%', maxWidth: 500 }}>
            <div style={{
              backgroundColor: D.navy,
              border: `1px solid ${D.border2}`,
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}>

              {/* Chrome bar with 3 dots */}
              <div style={{
                backgroundColor: D.navy3,
                padding: '10px 16px',
                display: 'flex', alignItems: 'center', gap: 8,
                borderBottom: `1px solid ${D.border}`,
              }}>
                <div style={{ display: 'flex', gap: 5 }}>
                  {['#FF5F57', '#FFBD2E', '#28C840'].map(c => (
                    <span key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c, display: 'inline-block' }} />
                  ))}
                </div>
                <span style={{ fontSize: 11, color: D.text3, marginLeft: 8 }}>Fragmentation View</span>
              </div>

              {/* Body */}
              <div style={{
                backgroundColor: D.navy,
                position: 'relative',
                height: 400,
                overflow: 'hidden',
              }}>
                {/* Dot grid */}
                <div style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.05,
                  backgroundImage: 'radial-gradient(circle, #ffffff 0.5px, transparent 0.5px)',
                  backgroundSize: '24px 24px',
                }} />
                {/* Glow */}
                <div style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  background: 'radial-gradient(circle at 50% 40%, rgba(52,112,240,0.1), transparent 70%)',
                }} />

                {/* Connector SVG — Synced to Node Centers */}
                <svg
                  viewBox="0 0 400 400"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Top: CRM to ERP */}
                  <path
                    d="M 110 70 L 290 70"
                    stroke={hovered === 'marketing' || hovered === 'sales' ? D.red : 'rgba(255,255,255,0.1)'}
                    strokeWidth="1.5" strokeDasharray="4,6"
                    style={{ animation: (hovered === 'marketing' || hovered === 'sales') ? 'dashMove 1.2s linear infinite' : 'none', transition: 'stroke .3s' }}
                  />
                  {/* Right: ERP to DESK */}
                  <path
                    d="M 290 70 L 200 280"
                    stroke={hovered === 'sales' || hovered === 'leader' ? D.red : 'rgba(255,255,255,0.1)'}
                    strokeWidth="1.5" strokeDasharray="4,6"
                    style={{ animation: (hovered === 'sales' || hovered === 'leader') ? 'dashMove 1.2s linear infinite' : 'none', transition: 'stroke .3s' }}
                  />
                  {/* Left: DESK to CRM */}
                  <path
                    d="M 110 70 L 200 280"
                    stroke={hovered === 'leader' || hovered === 'marketing' ? D.red : 'rgba(255,255,255,0.1)'}
                    strokeWidth="1.5" strokeDasharray="4,6"
                    style={{ animation: (hovered === 'leader' || hovered === 'marketing') ? 'dashMove 1.2s linear infinite' : 'none', transition: 'stroke .3s' }}
                  />
                </svg>

                {/* Silo nodes — Fixed Pixels for SVG alignment */}
                <div style={{ position: 'absolute', top: 40, left: 66 }}>
                  <SiloNode label="SILOED CRM" active={hovered === 'marketing'}>
                    <BarChart3 size={22} strokeWidth={2} />
                  </SiloNode>
                </div>

                <div style={{ position: 'absolute', top: 40, right: 66 }}>
                  <SiloNode label="SILOED ERP" active={hovered === 'sales'}>
                    <Activity size={22} strokeWidth={2} />
                  </SiloNode>
                </div>

                <div style={{ position: 'absolute', bottom: 90, left: '50%', transform: 'translateX(-50%)' }}>
                  <SiloNode label="SILOED DESK" active={hovered === 'leader'}>
                    <Users size={22} strokeWidth={2} />
                  </SiloNode>
                </div>

                {/* Central user icon */}
                <div style={{
                  position: 'absolute', top: 175, left: '50%',
                  transform: 'translate(-50%,-50%)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                  zIndex: 10,
                }}>
                  <motion.div
                    animate={{ scale: hovered ? 1.07 : 1, rotate: hovered ? [0, -4, 4, 0] : 0 }}
                    transition={{ duration: .35 }}
                    style={{
                      width: 52, height: 52, borderRadius: '50%',
                      backgroundColor: '#ffffff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: D.navy,
                      boxShadow: '0 0 32px rgba(255,255,255,0.16)',
                      position: 'relative',
                    }}
                  >
                    <Users size={26} />
                    {hovered && (
                      <span style={{
                        position: 'absolute', inset: -10, borderRadius: '50%',
                        border: `2px solid ${D.red}`,
                        animation: 'ripplePulse 1.2s ease-out infinite',
                        pointerEvents: 'none',
                      }} />
                    )}
                  </motion.div>

                  <AnimatePresence>
                    {hovered && (
                      <motion.div
                        initial={{ opacity: 0, y: -4, scale: .88 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: .88 }}
                        transition={{ duration: .2 }}
                        style={{
                          backgroundColor: D.red, color: '#fff',
                          fontSize: 9, fontWeight: 800, letterSpacing: 1,
                          textTransform: 'uppercase', padding: '4px 10px',
                          borderRadius: 6, whiteSpace: 'nowrap',
                          boxShadow: '0 6px 20px rgba(224,56,79,0.38)',
                        }}
                      >
                        Data Leakage
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Status bar */}
                <div style={{
                  position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
                  display: 'flex', alignItems: 'center', gap: 10,
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${D.border}`,
                  borderRadius: 100, padding: '6px 16px', whiteSpace: 'nowrap',
                  zIndex: 20
                }}>
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{
                      width: 6, height: 6, borderRadius: '50%',
                      backgroundColor: D.red, display: 'inline-block',
                      boxShadow: `0 0 6px ${D.red}`,
                    }}
                  />
                  <span style={{
                    fontSize: 9, fontWeight: 800, color: D.text3,
                    textTransform: 'uppercase', letterSpacing: 1.2,
                  }}>
                    Architecture Active
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

/* ── Silo node ── */
function SiloNode({
  label, active, children, style,
}: {
  label: string; active: boolean; children: React.ReactNode; style?: React.CSSProperties
}) {
  return (
    <motion.div
      animate={{
        scale: active ? 1.08 : 1,
        borderColor: active ? '#E0384F' : 'rgba(255,255,255,0.08)',
        backgroundColor: active ? 'rgba(224,56,79,0.07)' : 'rgba(255,255,255,0.03)',
      }}
      transition={{ duration: .25 }}
      style={{
        width: 88, padding: '12px 8px', borderRadius: 14,
        border: '1px solid rgba(255,255,255,0.08)',
        backgroundColor: 'rgba(255,255,255,0.03)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7,
        opacity: active ? 1 : 0.82,
        transition: 'opacity .25s',
        ...style,
      }}
    >
      <span style={{ color: active ? '#E0384F' : '#EEF2FF', display: 'flex', transition: 'color .25s' }}>
        {children}
      </span>
      <span style={{
        fontSize: 8, fontWeight: 800, letterSpacing: 1.1,
        textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.3,
        color: active ? '#E0384F' : '#56728F',
        transition: 'color .25s',
      }}>
        {label}
      </span>
    </motion.div>
  )
}