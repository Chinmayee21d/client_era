'use client'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Clock, Users, RefreshCw, Zap } from 'lucide-react'

const CHAIN = [
  { label: 'Marketing Lead', col: '#f87171', bg: 'rgba(239,68,68,0.05)', border: 'rgba(239,68,68,0.2)' },
  { label: 'SOR', col: '#fbbf24', bg: 'rgba(245,158,11,0.05)', border: 'rgba(245,158,11,0.2)' },
  { label: 'Sales Order', col: 'var(--gold)', bg: 'var(--gold-bg)', border: 'rgba(196,154,60,0.2)' },
  { label: 'Invoice', col: 'var(--green)', bg: 'var(--green-bg)', border: 'rgba(24,184,122,0.2)' },
]

const WF_CARDS = [
  { 
    icon: RefreshCw,
    title: 'Entity Cascade', 
    desc: 'The same data entity evolves automatically through the pipeline. No copy-paste, no re-entry, no errors at handoffs between teams.' 
  },
  { 
    icon: Users,
    title: 'Three-Tier Assignment', 
    desc: 'Work queues to an eligible pool simultaneously. First to claim removes it for everyone, eliminating bottlenecks entirely.' 
  },
  { 
    icon: Clock,
    title: 'Rework Mechanic', 
    desc: 'Approvers Send Back to specific prior steps for corrections — never a terminal rejection that kills momentum or requires restarting.' 
  },
]

export default function WorkflowEngine() {
  return (
    <section className="section-dark" id="workflow">
      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div className="eyebrow"><span className="ey-line" />Fulfillment Engine</div>
          <h2 className="h2">The <em>entity cascade.</em></h2>
          <p className="lead">
            No manual re-entry. The exact same data entity evolves automatically through the pipeline from Lead to Invoice.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 64, alignItems: 'center' }}>
          
          {/* LEFT: Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {WF_CARDS.map((c, i) => (
              <motion.div 
                key={c.title}
                className="reveal"
                style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
                whileHover={{ x: 6 }}
              >
                <div style={{ display: 'flex', gap: 16, padding: '16px 20px', borderRadius: 16, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text2)', flexShrink: 0 }}>
                    <c.icon size={18} strokeWidth={2.2} />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{c.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.5 }}>{c.desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: INTERACTIVE FLOW VISUAL */}
          <div className="reveal" style={{ transitionDelay: '.2s' }}>
            <div style={{ 
              background: 'rgba(12, 24, 40, 0.4)', 
              backdropFilter: 'blur(16px)',
              border: '1px solid var(--border2)', 
              borderRadius: 32, 
              padding: '48px 40px',
              boxShadow: '0 30px 80px rgba(0,0,0,0.2)',
              position: 'relative',
              overflow: 'hidden',
              marginTop: 10
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 32, textAlign: 'center' }}>
                Live Workflow Monitoring
              </div>

              {/* The Cascade Visual */}
              <div style={{ position: 'relative', padding: '0 20px' }}>
                {CHAIN.map((n, i) => (
                  <div key={n.label} style={{ position: 'relative', marginBottom: i < CHAIN.length - 1 ? 40 : 0 }}>
                    <div style={{ 
                      display: 'flex', alignItems: 'center', gap: 16, padding: '12px 18px', 
                      background: 'rgba(255,255,255,0.03)', border: `1px solid ${n.border}`, borderRadius: 14,
                      position: 'relative', zIndex: 2
                    }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: n.col, boxShadow: `0 0 10px ${n.col}` }} />
                      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{n.label}</div>
                      <div style={{ marginLeft: 'auto', fontSize: 10, color: 'var(--text2)', background: 'rgba(255,255,255,0.06)', padding: '2px 8px', borderRadius: 100, border: '1px solid var(--border)' }}>
                        Processing
                      </div>
                    </div>

                    {/* Connecting line and particle */}
                    {i < CHAIN.length - 1 && (
                      <div style={{ position: 'absolute', left: 23, top: '100%', height: 40, width: 2, background: 'rgba(255,255,255,0.05)' }}>
                        <motion.div 
                          animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.4, ease: 'linear' }}
                          style={{ position: 'absolute', left: -2, width: 6, height: 6, borderRadius: '50%', background: n.col, boxShadow: `0 0 8px ${n.col}` }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Floating Status Badge */}
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                style={{ 
                  marginTop: 40, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: 'white', padding: '16px 20px', borderRadius: 16, 
                  display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(196,154,60,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <Zap size={16} color="var(--gold)" />
                </div>
                <div>
                   <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', color: 'var(--text3)' }}>Current Status</div>
                   <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>Entity Handoff: Lead → SOR</div>
                </div>
                <div style={{ marginLeft: 'auto', width: 8, height: 8, borderRadius: '50%', background: 'var(--green)', boxShadow: '0 0 10px var(--green)' }} />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}