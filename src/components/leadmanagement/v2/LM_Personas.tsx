'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Megaphone, Headphones, MapPin, LayoutDashboard, Check } from 'lucide-react'

const PERSONAS = [
  {
    id: 'marketing',
    Icon: Megaphone,
    role: 'Marketing Manager',
    tagline: 'Own the full lead lifecycle.',
    desc: 'Own the full lead lifecycle — from campaign creation to MQL handoff. See what happens to every lead after it leaves your queue. Use rejection feedback from sales to sharpen your scoring model.',
    features: ['Pipeline attribution — live, always accurate', 'MQL rejection feedback for scoring calibration', 'Campaign-to-revenue traceability', 'Lead lifecycle visibility after handoff'],
    color: 'var(--gold)',
    bg: 'rgba(196,154,60,.06)',
    border: 'rgba(196,154,60,.2)',
  },
  {
    id: 'sdr',
    Icon: Headphones,
    role: 'SDR / Inside Sales Rep',
    tagline: 'Arrive at every lead already briefed.',
    desc: 'The AI-generated qualification brief surfaces fit assessment, intent signals, and suggested opening questions before you make the first call. Your job is the conversation — not the research.',
    features: ['AI qualification brief on every MQL', 'Intent signals surfaced before first call', 'Enriched company and contact data', 'Suggested opening questions from AI'],
    color: '#3470F0',
    bg: 'rgba(52,112,240,.06)',
    border: 'rgba(52,112,240,.2)',
  },
  {
    id: 'field',
    Icon: MapPin,
    role: 'Field Sales Rep',
    tagline: 'Map your territory. Spot every opportunity.',
    desc: 'Map your territory, spot prospect markers, and get alerted when a key contact at a prospect changes role or company. Every lead you own is enriched daily.',
    features: ['Territory prospecting map by geography', 'Career event alerts on your contacts', 'Daily enrichment brief before visits', 'Competitor displacement tracking'],
    color: 'var(--green)',
    bg: 'rgba(24,184,122,.06)',
    border: 'rgba(24,184,122,.2)',
  },
  {
    id: 'manager',
    Icon: LayoutDashboard,
    role: 'Sales Manager',
    tagline: 'See the health of the handoff queue — live.',
    desc: 'See the health of the handoff queue across your team. Spot unclaimed MQLs before they go cold. Track lead-to-pipeline conversion rates by rep in real time.',
    features: ['Handoff queue health — live', 'Unclaimed MQL alerts with SLA tracking', 'Per-rep conversion rate tracking', 'Rejection pattern analysis by rep'],
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,.06)',
    border: 'rgba(139,92,246,.2)',
  },
]

/* ─────────────────────────────────────────────────────────
   SUB-COMPONENTS
   ───────────────────────────────────────────────────────── */

function PersonaDetail({ persona, isMobile }: { persona: any, isMobile?: boolean }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? 24 : 40, alignItems: 'center',
      background: '#fff', border: `1.5px solid ${persona.border}`,
      borderRadius: isMobile ? 16 : 20, padding: isMobile ? '24px 20px' : '36px 32px',
      boxShadow: '0 8px 36px rgba(0,0,0,.07)',
      marginTop: isMobile ? 12 : 0,
      marginBottom: isMobile ? 40 : 0,
      width: '100%'
    }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, background: persona.bg, border: `1px solid ${persona.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: persona.color }}>
            <persona.Icon size={24} strokeWidth={2} />
          </div>
          <div>
            <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: persona.color }}>{persona.role}</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 400, color: 'var(--ink)' }}>{persona.tagline}</div>
          </div>
        </div>
        <p style={{ fontSize: 14, color: 'var(--ink3)', lineHeight: 1.72, marginBottom: 0 }}>{persona.desc}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {persona.features.map((f: string, i: number) => (
          <motion.div
            key={f}
            initial={isMobile ? { opacity: 1 } : { opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * .08 }}
            style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '10px 14px', borderRadius: 10,
              background: 'rgba(0,0,0,.025)', border: '1px solid rgba(0,0,0,.06)',
              transition: 'all .2s', cursor: 'default',
            }}
          >
            <div className="lm-persona-chk" style={{ background: persona.bg, border: `1px solid ${persona.border}`, color: persona.color }}>
              <Check size={11} strokeWidth={3} />
            </div>
            <span style={{ fontSize: 13, color: 'var(--ink)', fontWeight: 500 }}>{f}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function LM_Personas() {
  const [active, setActive] = useState('sdr')
  const current = PERSONAS.find(p => p.id === active) || PERSONAS[1]

  return (
    <section id="personas" style={{ background: '#f8f8f6' }}>
      <style>{`
        .lm-persona-tab {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 18px; border-radius: 12px;
          border: 1.5px solid transparent;
          cursor: pointer; transition: all .3s; flex: 1;
        }
        .lm-persona-tab:hover:not(.lm-persona-active) {
          background: rgba(0,0,0,.04); border-color: rgba(0,0,0,.08);
        }
        .lm-persona-active { box-shadow: 0 6px 22px rgba(0,0,0,.1); }
        .lm-persona-icon {
          width: 36px; height: 36px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: transform .3s;
        }
        .lm-persona-tab:hover .lm-persona-icon { transform: scale(1.1) rotate(-5deg); }
        .lm-persona-chk {
          width: 18px; height: 18px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        
        .lm-personas-desktop { display: block; }
        .lm-personas-mobile { display: none; }

        @media (max-width: 640px) { .lm-persona-tabs { flex-wrap: wrap !important; } .lm-persona-tab { min-width: 45%; } }
        @media (max-width: 900px) { 
           .lm-personas-desktop { display: none; }
           .lm-personas-mobile { display: flex; flex-direction: column; gap: 0; }
        }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 48px' }}>
          <div className="eyebrow eyebrow-dark" style={{ justifyContent: 'center' }}>
            <span className="ey-line" />Commercial Team Personas
          </div>
          <h2 className="h2 h2-ink" style={{ textAlign: 'center' }}>
            Built for Every Role in the<br /><em>Commercial Team.</em>
          </h2>
          <p className="lead lead-ink" style={{ margin: '0 auto', textAlign: 'center' }}>
            Each commercial role gets the intelligence they need — without noise from data that isn't theirs.
          </p>
        </div>

        {/* ── Desktop View ── */}
        <div className="lm-personas-desktop">
          <div className="reveal lm-persona-tabs" style={{ display: 'flex', gap: 10, marginBottom: 28, transitionDelay: '.1s' }}>
            {PERSONAS.map(p => (
              <div
                key={p.id}
                className={`lm-persona-tab ${active === p.id ? 'lm-persona-active' : ''}`}
                style={{
                  background: active === p.id ? p.bg : 'transparent',
                  borderColor: active === p.id ? p.border : 'transparent',
                }}
                onClick={() => setActive(p.id)}
              >
                <div className="lm-persona-icon" style={{ background: p.bg, border: `1px solid ${p.border}`, color: p.color }}>
                  <p.Icon size={18} strokeWidth={2} />
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: active === p.id ? p.color : 'var(--ink2)' }}>{p.role}</div>
                  <div style={{ fontSize: 10, color: 'var(--ink3)' }}>{p.tagline}</div>
                </div>
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: .35 }}
            >
              <PersonaDetail persona={current} isMobile={false} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Mobile View ── */}
        <div className="lm-personas-mobile reveal">
            {PERSONAS.map(p => (
              <div key={p.id}>
                 <div
                    className="lm-persona-tab lm-persona-active"
                    style={{
                      background: p.bg,
                      borderColor: p.border,
                      pointerEvents: 'none',
                      marginBottom: 0,
                      borderRadius: '12px 12px 0 0',
                      boxShadow: 'none'
                    }}
                  >
                    <div className="lm-persona-icon" style={{ background: p.bg, border: `1px solid ${p.border}`, color: p.color }}>
                      <p.Icon size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: p.color }}>{p.role}</div>
                      <div style={{ fontSize: 10, color: 'var(--ink3)' }}>{p.tagline}</div>
                    </div>
                  </div>
                  <PersonaDetail persona={p} isMobile={true} />
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
