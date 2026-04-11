'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sliders, Clock, Eye, Check } from 'lucide-react'

const RULES = [
  {
    id: 'linkedin',
    icon: Eye,
    label: 'LinkedIn Import',
    rule: 'Always requires human review',
    outcome: 'Manual',
    outcomeCol: '#F5A623',
    bg: 'rgba(245,166,35,.06)',
    border: 'rgba(245,166,35,.2)',
    color: '#F5A623',
    detail: 'LinkedIn profiles require a human to verify intent before entering the pipeline. A qualification task is assigned to the lead owner with a 48-hour SLA.',
  },
  {
    id: 'webform',
    icon: Sliders,
    label: 'Web Form — Known Domain',
    rule: 'Auto-qualifies immediately',
    outcome: 'Auto',
    outcomeCol: '#18B87A',
    bg: 'rgba(24,184,122,.06)',
    border: 'rgba(24,184,122,.2)',
    color: '#18B87A',
    detail: 'If the email domain matches a known company in your database, the lead is auto-qualified with source tracking and enters the pipeline immediately.',
  },
  {
    id: 'revenue',
    icon: Clock,
    label: 'Revenue > Threshold',
    rule: 'Requires manager sign-off',
    outcome: 'Escalate',
    outcomeCol: '#8B5CF6',
    bg: 'rgba(139,92,246,.06)',
    border: 'rgba(139,92,246,.2)',
    color: '#8B5CF6',
    detail: 'Leads with estimated revenue above your enterprise threshold are routed to manager review before entering the pipeline. Both owner and manager are notified.',
  },
  {
    id: 'default',
    icon: Check,
    label: 'Default — No Action Taken',
    rule: 'Auto-qualifies after 24 hours',
    outcome: 'Timed',
    outcomeCol: '#3470F0',
    bg: 'rgba(52,112,240,.06)',
    border: 'rgba(52,112,240,.2)',
    color: '#3470F0',
    detail: 'If no one acts on an unqualified lead within 24 hours, it auto-qualifies according to default policy. Both owner and manager are notified at the 12-hour mark.',
  },
]

/* ─────────────────────────────────────────────────────────
   SUB-COMPONENTS
   ───────────────────────────────────────────────────────── */

function RuleDetail({ rule, isMobile }: { rule: any, isMobile?: boolean }) {
  return (
    <div style={{
      background: 'var(--surface)', borderRadius: isMobile ? 16 : 18,
      border: `1.5px solid ${rule.border}`,
      padding: isMobile ? '22px 20px' : '28px 26px',
      boxShadow: '0 8px 40px rgba(0,0,0,.3)',
      marginTop: isMobile ? 8 : 0,
      marginBottom: isMobile ? 24 : 0,
      width: '100%'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid var(--border)' }}>
        <div style={{ width: 38, height: 38, borderRadius: 10, background: rule.bg, border: `1px solid ${rule.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: rule.color }}>
          <rule.icon size={20} strokeWidth={2} />
        </div>
        <div>
          <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: rule.color }}>{rule.outcome} Qualification</div>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 400, color: 'var(--text)' }}>{rule.label}</div>
        </div>
      </div>
      <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.72, marginBottom: 20 }}>{rule.detail}</p>
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '14px 16px' }}>
        <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.2, color: 'var(--text3)', marginBottom: 10 }}>Qualification Queue</div>
        <p style={{ fontSize: 12.5, color: 'var(--text2)', lineHeight: 1.65, margin: 0 }}>
          Unqualified leads surface in a visible queue for the lead's owner and their manager — no lead goes unnoticed.
        </p>
      </div>
    </div>
  )
}

export default function LM_Qualification() {
  const [active, setActive] = useState('webform')
  const [activeMobile, setActiveMobile] = useState(0)
  const current = RULES.find(r => r.id === active) || RULES[1]

  return (
    <section id="qualification" style={{ background: 'var(--navy)' }}>
      <style>{`
        .lm-qual-tab {
          display: flex; align-items: center; gap: 10px;
          padding: 14px 18px; border-radius: 12px;
          border: 1.5px solid transparent;
          cursor: pointer; transition: all .3s;
        }
        .lm-qual-tab:hover:not(.lm-qual-active) {
          background: var(--surface); border-color: var(--border);
        }
        .lm-qual-active { background: var(--surface2); box-shadow: 0 8px 32px rgba(0,0,0,.2); }
        .lm-qual-tab-icon {
          width: 36px; height: 36px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: transform .3s;
        }
        .lm-qual-tab:hover .lm-qual-tab-icon { transform: scale(1.1) rotate(-4deg); }
        .lm-qual-outcome {
          display: inline-flex; font-size: 9px; font-weight: 700;
          padding: 2px 8px; border-radius: 100px; text-transform: uppercase; letter-spacing: .5px;
          margin-left: auto; flex-shrink: 0;
        }

        .lm-qual-desktop { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; alignItems: start; }
        .lm-qual-mobile { display: none; }

        @media (max-width: 900px) { 
          .lm-qual-desktop { display: none; }
          .lm-qual-mobile { display: flex; flex-direction: column; gap: 0; }
        }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div className="eyebrow"><span className="ey-line" />Feature 5 — Automated Lead Qualification</div>
          <h2 className="h2">
            Qualification That Fits <em>Your Rules</em> —<br />Not Ours.
          </h2>
          <p className="lead">
            Whether a lead needs human review before entering the pipeline is fully configurable per tenant, per source channel, and per criteria rule. Set the policy once — the system enforces it every time.
          </p>
        </div>

        {/* ── Desktop View ── */}
        <div className="reveal lm-qual-desktop" style={{ transitionDelay: '.15s' }}>
          {/* LEFT — Rule selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {RULES.map(rule => (
              <div
                key={rule.id}
                className={`lm-qual-tab ${active === rule.id ? 'lm-qual-active' : ''}`}
                style={{ borderColor: active === rule.id ? rule.border : 'transparent' }}
                onClick={() => setActive(rule.id)}
              >
                <div className="lm-qual-tab-icon" style={{ background: rule.bg, border: `1px solid ${rule.border}`, color: rule.color }}>
                  <rule.icon size={18} strokeWidth={2} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: active === rule.id ? rule.color : 'var(--text2)' }}>{rule.label}</div>
                  <div style={{ fontSize: 11, color: 'var(--text3)' }}>{rule.rule}</div>
                </div>
                <span className="lm-qual-outcome" style={{ background: rule.bg, border: `1px solid ${rule.border}`, color: rule.color }}>
                  {rule.outcome}
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT — Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: .3 }}
            >
              <RuleDetail rule={current} isMobile={false} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Mobile View ── */}
        <div className="lm-qual-mobile reveal">
          {/* Rule Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
            {RULES.map((rule, i) => (
              <div
                key={rule.id}
                className="lm-qual-tab"
                style={{
                  borderColor: activeMobile === i ? rule.border : 'transparent',
                  background: activeMobile === i ? 'var(--surface2)' : 'var(--surface)',
                  cursor: 'pointer'
                }}
                onClick={() => setActiveMobile(i)}
              >
                <div className="lm-qual-tab-icon" style={{ background: rule.bg, border: `1px solid ${rule.border}`, color: rule.color }}>
                  <rule.icon size={18} strokeWidth={2} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: activeMobile === i ? rule.color : 'var(--text2)' }}>{rule.label}</div>
                  <div style={{ fontSize: 11, color: 'var(--text3)' }}>{rule.rule}</div>
                </div>
                <span className="lm-qual-outcome" style={{ background: rule.bg, border: `1px solid ${rule.border}`, color: rule.color }}>
                  {rule.outcome}
                </span>
              </div>
            ))}
          </div>
          {/* Dashboard */}
          <RuleDetail rule={RULES[activeMobile]} isMobile={true} />
        </div>
      </div>
    </section>
  )
}
