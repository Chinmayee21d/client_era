'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, SlidersHorizontal, Zap } from 'lucide-react'

const LEADS = [
  { name: 'Priya Sharma', co: 'Reliance Industries', fit: 88, intent: 94, total: 91, status: 'MQL Ready', statusCol: '#18B87A', badge: true },
  { name: 'Rahul Mehta', co: 'Tata Consultancy', fit: 72, intent: 82, total: 77, status: 'In Queue', statusCol: '#818cf8', badge: true },
  { name: 'Anita Roy', co: 'Bajaj Finance', fit: 65, intent: 58, total: 62, status: 'Nurture', statusCol: '#fbbf24', badge: false },
  { name: 'Kiran Das', co: 'Infosys Ltd', fit: 45, intent: 35, total: 40, status: 'Cold', statusCol: 'var(--text3)', badge: false },
]

const FEATURES = [
  { Icon: SlidersHorizontal, title: 'Two-Dimensional Scoring', desc: 'Fit Score (ICP match via enrichment data) + Intent Score (engagement depth and signals) = a single 0–100 score, updated continuously.' },
  { Icon: Zap, title: 'Configurable MQL Threshold', desc: 'Set the score above which a lead automatically enters the handoff queue. Thresholds configurable per channel, industry segment, or campaign.' },
  { Icon: Sparkles, title: 'AI Signal Overlay', desc: 'The AI surfaces leads showing buying intent before they cross your MQL threshold — always advisory, never overrides your configured scoring model.' },
]

/* ─────────────────────────────────────────────────────────
   SUB-COMPONENTS
   ───────────────────────────────────────────────────────── */

function ScoringBoard({ activeFeatureIndex, isMobile }: { activeFeatureIndex?: number, isMobile?: boolean }) {
  return (
    <div style={{
      background: '#fff', border: '1.5px solid rgba(0,0,0,.07)',
      borderRadius: isMobile ? 18 : 18, overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(0,0,0,.06)',
      marginTop: isMobile ? 16 : 0,
      marginBottom: isMobile ? 32 : 0,
    }}>
      <div style={{
        padding: '14px 18px', borderBottom: '1px solid rgba(0,0,0,.06)',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--ink3)', textTransform: 'uppercase', letterSpacing: 1.5 }}>Lead Score Board</span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 14 }}>
          <div style={{ textAlign: 'center' }}><div style={{ fontSize: 9, color: '#2D5BE3', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>FIT</div></div>
          <div style={{ textAlign: 'center' }}><div style={{ fontSize: 9, color: '#18B87A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>INTENT</div></div>
          <div style={{ textAlign: 'center' }}><div style={{ fontSize: 9, color: 'var(--ink)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>SCORE</div></div>
        </div>
      </div>
      <div style={{ padding: '16px 18px' }}>
        {LEADS.map((l, i) => (
          <motion.div key={l.name} className="lm-score-lead-row">
            <div style={{ width: 30, height: 30, borderRadius: 8, background: 'rgba(196,154,60,.12)', border: '1px solid rgba(196,154,60,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: 'var(--gold)', flexShrink: 0 }}>
              {l.name.charAt(0)}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink)' }}>{l.name}</span>
                {l.badge && <span className="lm-ai-pill"><Sparkles size={8} />AI</span>}
              </div>
              <div style={{ fontSize: 10, color: 'var(--ink3)' }}>{l.co}</div>
            </div>
            <div style={{ display: 'flex', gap: 14, marginLeft: 8 }}>
              <div style={{ textAlign: 'center', minWidth: 28 }}><div style={{ fontSize: 12, fontWeight: 700, color: '#2D5BE3' }}>{l.fit}</div></div>
              <div style={{ textAlign: 'center', minWidth: 28 }}><div style={{ fontSize: 12, fontWeight: 700, color: '#18B87A' }}>{l.intent}</div></div>
              <div style={{ textAlign: 'center', minWidth: 36 }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 400, color: l.statusCol, lineHeight: 1 }}>{l.total}</div>
                <div style={{ fontSize: 8, color: 'var(--ink3)' }}>{l.status}</div>
              </div>
            </div>
          </motion.div>
        ))}
        <div style={{ marginTop: 16, padding: '10px 14px', background: 'rgba(196,154,60,.06)', border: '1px solid rgba(196,154,60,.18)', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ fontSize: 10, color: 'var(--gold)', fontWeight: 500, flex: 1 }}>
            MQL Threshold set at <strong>75</strong> — auto-handoff active
          </div>
          <span style={{ fontSize: 9, padding: '2px 8px', borderRadius: 100, background: 'rgba(24,184,122,.1)', border: '1px solid rgba(24,184,122,.25)', color: 'var(--green)', fontWeight: 700 }}>2 MQLs</span>
        </div>
      </div>
    </div>
  )
}

export default function LM_Scoring() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section id="scoring" style={{ background: '#f8f8f6' }}>
      <style>{`
        .lm-score-feat {
          display: flex; gap: 14px; align-items: flex-start;
          padding: 16px 18px; border-radius: 14px;
          border: 1px solid transparent; transition: all .28s; cursor: default;
        }
        .lm-score-feat:hover { background: rgba(0,0,0,.03); border-color: rgba(0,0,0,.07); transform: translateX(6px); }
        .lm-score-feat-icon {
          width: 40px; height: 40px; border-radius: 11px;
          background: rgba(45,91,227,.08); border: 1px solid rgba(45,91,227,.18);
          display: flex; align-items: center; justify-content: center;
          color: #2D5BE3; flex-shrink: 0;
        }
        .lm-score-lead-row {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 14px; border-radius: 10px;
          background: rgba(0,0,0,.025); border: 1px solid rgba(0,0,0,.05);
          margin-bottom: 8px;
        }
        .lm-ai-pill {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 8px; font-weight: 700; padding: 2px 7px; border-radius: 100px;
          background: rgba(196,154,60,.1); border: 1px solid rgba(196,154,60,.25);
          color: var(--gold); text-transform: uppercase; letter-spacing: .8px;
        }

        .lm-scoring-desktop { display: grid; grid-template-columns: 1.1fr 1fr; gap: 80px; alignItems: center; }
        .lm-scoring-mobile { display: none; }

        @media (max-width: 900px) { 
          .lm-scoring-desktop { display: none; }
          .lm-scoring-mobile { display: flex; flex-direction: column; gap: 0; }
        }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div className="eyebrow eyebrow-dark"><span className="ey-line" />Feature 4 — AI-Assisted Lead Scoring</div>
          <h2 className="h2 h2-ink">
            Know Which Leads Are Ready —<br /><em>Before Your Reps Ask.</em>
          </h2>
          <p className="lead lead-ink">
            ClientEra scores every lead on two dimensions, continuously. No manual rules to maintain. One combined 0–100 score, updated in real time.
          </p>
        </div>

        {/* ── Desktop View ── */}
        <div className="reveal lm-scoring-desktop" style={{ transitionDelay: '.15s' }}>
          <ScoringBoard />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {FEATURES.map((f, i) => (
              <motion.div key={f.title} className="lm-score-feat" initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * .1 }}>
                <div className="lm-score-feat-icon"><f.Icon size={20} /></div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--ink3)', lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Mobile View ── */}
        <div className="lm-scoring-mobile reveal">
          {/* Feature Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="lm-score-feat"
                style={{
                  background: activeFeature === i ? 'rgba(0,0,0,.06)' : 'rgba(0,0,0,.03)',
                  borderColor: activeFeature === i ? 'rgba(45,91,227,.25)' : 'rgba(0,0,0,.07)',
                  cursor: 'pointer'
                }}
                onClick={() => setActiveFeature(i)}
              >
                <div className="lm-score-feat-icon"><f.Icon size={20} /></div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: activeFeature === i ? '#2D5BE3' : 'var(--ink)', marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--ink3)', lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Dashboard */}
          <ScoringBoard activeFeatureIndex={activeFeature} isMobile={true} />
        </div>
      </div>
    </section>
  )
}
