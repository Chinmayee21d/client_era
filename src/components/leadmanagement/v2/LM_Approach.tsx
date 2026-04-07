'use client'

import { Sprout, Target, Building2, FileText, Handshake, CheckSquare, Receipt, RefreshCcw } from 'lucide-react'

const FLOW_STAGES = [
  { label: 'Unqualified Lead', Icon: Sprout, color: '#56728F' },
  { label: 'Qualified Lead', Icon: Target, color: '#3470F0' },
  { label: 'Account: Prospect', Icon: Building2, color: '#8B5CF6' },
  { label: 'RfQ / Quote', Icon: FileText, color: '#C49A3C' },
  { label: 'Deal in Pipeline', Icon: Handshake, color: '#18B87A' },
  { label: 'SO Created: Client', Icon: CheckSquare, color: '#22C55E' },
  { label: 'Invoice', Icon: Receipt, color: '#F59E0B' },
  { label: 'Repeat', Icon: RefreshCcw, color: '#C49A3C' },
]

export default function LM_Approach() {
  return (
    <section id="approach" className="section-light">
      <style>{`
        .lm-flow-stage {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          position: relative;
        }
        .lm-flow-icon {
          width: 52px; height: 52px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          border: 1.5px solid;
          background: rgba(255,255,255,0.6);
          transition: transform .3s; cursor: default;
          box-shadow: 0 4px 14px rgba(0,0,0,0.08);
          backdrop-filter: blur(4px);
        }
        .lm-flow-stage:hover .lm-flow-icon { transform: translateY(-5px) scale(1.08); }
        .lm-flow-label {
          font-size: 10px; font-weight: 600; text-align: center;
          text-transform: uppercase; letter-spacing: 1px;
          max-width: 70px; line-height: 1.3;
        }
        .lm-flow-arrow {
          width: 28px; flex-shrink: 0; align-self: flex-start; margin-top: 18px;
          color: var(--ink3); font-size: 14px; text-align: center;
        }
        .lm-blockquote {
          border-left: 2px solid var(--ink3);
          padding-left: 24px; margin-top: 48px;
          font-family: 'Fraunces', serif; font-size: 20px;
          font-style: italic; color: var(--ink2); line-height: 1.55;
          font-weight: 300;
        }
        .lm-flow-wrap {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .lm-flow-wrap::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 700px) {
          .lm-flow-wrap { 
            flex-wrap: nowrap !important; 
            justify-content: flex-start !important; 
            overflow-x: auto !important;
            padding: 24px 16px !important;
            gap: 4px !important;
          }
          .lm-flow-arrow { display: block !important; margin-top: 18px !important; }
          .lm-approach-cards { grid-template-columns: 1fr !important; }
          .lm-flow-stage { min-width: 78px; }
        }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 740, marginBottom: 56 }}>
          <div className="eyebrow eyebrow-dark">
            <span className="ey-line" />The ClientEra Approach
          </div>
          <h2 className="h2 h2-ink">
            One Entity. One Timeline.<br /><em>Zero Re-entry.</em>
          </h2>
          <p className="lead lead-ink">
            In ClientEra, a Lead and an Account are the same entity at different lifecycle stages. When a lead converts, nothing is rebuilt and nothing is lost. The campaign touch, the form fill, the enrichment data, the sales notes — all of it travels forward on a single, unbroken timeline.
          </p>
        </div>

        {/* Horizontal Flow Diagram */}
        <div className="reveal lm-flow-wrap" style={{
          display: 'flex', alignItems: 'flex-start', gap: 0,
          padding: '32px', borderRadius: 20,
          background: 'rgba(255,255,255,0.65)',
          border: '1px solid rgba(0,0,0,0.07)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
          overflowX: 'auto',
          transitionDelay: '.12s',
        }}>
          {FLOW_STAGES.map((s, i) => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'flex-start', flex: i < FLOW_STAGES.length - 1 ? '1' : 'none', minWidth: 72 }}>
              <div className="lm-flow-stage">
                <div className="lm-flow-icon" style={{ borderColor: s.color + '50', color: s.color }}>
                  <s.Icon size={20} strokeWidth={1.8} />
                </div>
                <span className="lm-flow-label" style={{ color: s.color }}>{s.label}</span>
              </div>
              {i < FLOW_STAGES.length - 1 && (
                <div className="lm-flow-arrow">→</div>
              )}
            </div>
          ))}
        </div>

        {/* Callout Card */}
        <div className="reveal approach-cards" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 32, marginTop: 40, transitionDelay: '.2s',
        }}>
          <div style={{
            padding: '28px 32px', borderRadius: 16,
            background: 'rgba(10,20,40,0.05)',
            border: '1px solid rgba(10,20,40,0.10)',
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: 'var(--ink3)', marginBottom: 10 }}>Old systems</div>
            <p style={{ fontSize: 15, color: 'var(--ink3)', lineHeight: 1.65, margin: 0 }}>
              Record what happened — then require someone to manually copy data between tools at every stage transition.
            </p>
          </div>
          <div style={{
            padding: '28px 32px', borderRadius: 16,
            background: 'rgba(52,112,240,0.06)',
            border: '1.5px solid rgba(52,112,240,0.2)',
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#0A2D80', marginBottom: 10 }}>ClientEra</div>
            <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.65, margin: 0 }}>
              Decides what should happen next — and executes it automatically on one unbroken entity record.
            </p>
          </div>
        </div>

        <blockquote className="lm-blockquote reveal" style={{ transitionDelay: '.28s' }}>
          "Old systems record what happened. ClientEra decides what should happen next — and executes it."
        </blockquote>
      </div>
    </section>
  )
}
