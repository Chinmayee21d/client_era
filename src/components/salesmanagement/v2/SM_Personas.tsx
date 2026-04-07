'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, BarChart3, Globe, Building2, Check } from 'lucide-react'

const PERSONAS = [
  {
    id: 'lead',
    icon: Users,
    role: 'Team Lead',
    tagline: 'Tactical excellence, daily',
    desc: 'Responsible for the daily output of a small team (5–10 reps). Ensures activity targets are met and data quality stays high.',
    features: [
      'Real-time visit tracking for your team',
      'Daily activity tally — calls, visits, emails',
      'Exception alerts for missed visits',
      'One-on-one coaching notes on deals',
    ],
    color: '#F5A623',
    bg: 'rgba(245,166,35,.06)',
    border: 'rgba(245,166,35,.2)',
  },
  {
    id: 'manager',
    icon: BarChart3,
    role: 'Sales Manager',
    tagline: 'The operational backbone',
    desc: 'Manages multiple Team Leads or a large regional team. Balances territories, approves quotes, and owns the monthly number.',
    features: [
      'Team-wide pipeline funnel view',
      'Approval queue — quotes, expenses, accounts',
      'Territory balancing and rep reassignment',
      'KPI leaderboards and performance scores',
    ],
    color: 'var(--green)',
    bg: 'rgba(24,184,122,.06)',
    border: 'rgba(24,184,122,.2)',
  },
  {
    id: 'director',
    icon: Globe,
    role: 'Regional Director',
    tagline: 'Cross-team intelligence',
    desc: 'Oversees multiple regions or divisions. Makes resourcing decisions and ensures consistency across diverse teams.',
    features: [
      'Cross-region pipeline benchmarking',
      'Revenue forecasting with confidence bands',
      'Win/loss trend analysis by territory',

    ],
    color: 'var(--blue)',
    bg: 'rgba(52,112,240,.06)',
    border: 'rgba(52,112,240,.2)',
  },
  {
    id: 'owner',
    icon: Building2,
    role: 'Director / Owner',
    tagline: 'The strategic summit',
    desc: 'The top of the hierarchy. Responsible for overall business health, revenue forecasting, and stakeholder reporting.',
    features: [
      'Consolidated pipeline — all regions, one view',
      'Board-ready reports, generated in one click',
      'Run-rate tracker vs. targets',
      'Top risk accounts with declining engagement',
    ],
    color: 'var(--gold)',
    bg: 'rgba(196,154,60,.06)',
    border: 'rgba(196,154,60,.25)',
  },
]

export default function SM_Personas() {
  const [active, setActive] = useState('manager')
  const current = PERSONAS.find(p => p.id === active) || PERSONAS[1]

  return (
    <section className="section-dark">
      <style>{`
        .sm-persona-tab {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 18px; border-radius: 12px;
          border: 1.5px solid transparent;
          cursor: pointer; transition: all .3s;
          flex: 1;
        }
        .sm-persona-tab:hover:not(.sm-persona-active) {
          background: var(--surface);
          border-color: var(--border);
        }
        .sm-persona-active {
          box-shadow: 0 8px 24px rgba(0,0,0,.2);
        }
        .sm-persona-icon {
          width: 38px; height: 38px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: transform .3s;
        }
        .sm-persona-tab:hover .sm-persona-icon { transform: scale(1.1) rotate(-4deg); }
        .sm-chk {
          width: 18px; height: 18px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .sm-persona-tabs-wrap {
          display: flex; gap: 10px;
          margin-bottom: 32px;
          transition-delay: .1s;
        }
        .sm-persona-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          background: var(--surface);
          border-radius: 20px;
          padding: 36px 32px;
          transition: all .3s;
        }
        @media (max-width: 1024px) {
          .sm-persona-tabs-wrap {
            overflow-x: auto;
            padding-bottom: 12px;
            margin-bottom: 20px;
            scrollbar-width: none;
          }
          .sm-persona-tabs-wrap::-webkit-scrollbar { display: none; }
          .sm-persona-tab {
            flex: 0 0 auto;
            min-width: 180px;
          }
          .sm-persona-detail-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 24px 20px;
          }
        }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48, maxWidth: 650, margin: '0 auto 48px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="ey-line" />Built for Every Leader
          </div>
          <h2 className="h2" style={{ textAlign: 'center' }}>
            Your role. Your <em>intelligence.</em>
          </h2>
          <p className="lead" style={{ margin: '0 auto', textAlign: 'center' }}>
            Every level of the organisation gets exactly the data they need — no more, no less. Self-identify with your role and see what ClientEra gives you.
          </p>
        </div>

        {/* Persona tabs */}
        <div className="reveal sm-persona-tabs-wrap">
          {PERSONAS.map(p => (
            <div
              key={p.id}
              className={`sm-persona-tab ${active === p.id ? 'sm-persona-active' : ''}`}
              style={{
                background: active === p.id ? p.bg : 'transparent',
                borderColor: active === p.id ? p.border : 'transparent',
              }}
              onClick={() => setActive(p.id)}
            >
              <div className="sm-persona-icon" style={{ background: p.bg, border: `1px solid ${p.border}`, color: p.color }}>
                <p.icon size={18} strokeWidth={2} />
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: active === p.id ? p.color : 'var(--text2)' }}>{p.role}</div>
                <div style={{ fontSize: 10, color: 'var(--text3)' }}>{p.tagline}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className="reveal visible sm-persona-detail-grid"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: .35 }}
            style={{
              border: `1.5px solid ${current.border}`,
            }}
          >
            {/* Left - info */}
            <div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18,
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: current.bg, border: `1px solid ${current.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: current.color,
                }}>
                  <current.icon size={24} strokeWidth={2} />
                </div>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: current.color }}>{current.role}</div>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 400, color: 'var(--text)' }}>
                    {current.tagline}
                  </div>
                </div>
              </div>
              <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7, marginBottom: 0 }}>
                {current.desc}
              </p>
            </div>

            {/* Right - feature checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {current.features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * .08 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '10px 14px', borderRadius: 10,
                    background: 'rgba(255,255,255,.03)',
                    border: '1px solid var(--border)',
                    transition: 'all .2s',
                    cursor: 'default',
                  }}
                  whileHover={{ x: 4, background: 'rgba(255,255,255,.06)' }}
                >
                  <div className="sm-chk" style={{ background: current.bg, border: `1px solid ${current.border}`, color: current.color }}>
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500 }}>{f}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
