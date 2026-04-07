'use client'
import { motion } from 'framer-motion'
import { Check, X, ShieldAlert, Zap, Layers, BarChart3, Radio } from 'lucide-react'

/* 
  ── COMPARISON: LEGACY VS CLIENTERA ──
  A high-fidelity comparison surface with glassmorphism, 
  interactive row highlights, and performance-driven indicators.
*/

const COMPARISON = [
  { 
    dim: 'Customer Context', 
    legacy: 'Isolated ticket snapshots', 
    clientera: 'Unified 360° Commercial Timeline',
    icon: Layers
  },
  { 
    dim: 'Agent Empowerment', 
    legacy: 'Blind troubleshooting', 
    clientera: 'Real-time Sales & Deal Visibility',
    icon: Zap
  },
  { 
    dim: 'Account Health', 
    legacy: 'Static CSAT collections', 
    clientera: 'Predictive Churn Risk Indicators',
    icon: ShieldAlert
  },
  { 
    dim: 'Commercial Link', 
    legacy: 'Manual CRM updates', 
    clientera: 'Native Billing & ERP Integration',
    icon: Radio
  },
  { 
    dim: 'Strategic AI', 
    legacy: 'Generic support chatbots', 
    clientera: 'Deep-Silo Context Retrieval',
    icon: BarChart3
  }
]

export default function S8_Comparison() {
  return (
    <section id="comparison" className="cs-comp-section section-dark">
      <style>{`
        .cs-comp-section { padding: 80px 0; background: var(--navy); color: white; position: relative; overflow: hidden; }
        .cs-comp-wrap { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
        
        .cs-comp-header { text-align: center; max-width: 800px; margin: 0 auto 64px; }
        
        .cs-table-surface {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.5);
          backdrop-filter: blur(10px);
        }

        .cs-table-head {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          background: rgba(255,255,255,0.04);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .cs-head-cell { padding: 24px 32px; font-size: 11px; font-weight: 700; color: var(--text3); text-transform: uppercase; letter-spacing: 2px; }
        .cs-head-gold { color: var(--gold); border-left: 1px solid rgba(196,154,60,0.2); background: rgba(196,154,60,0.06); }

        .cs-table-row {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .cs-table-row:hover { background: rgba(255,255,255,0.02); transform: scale(1.005); z-index: 10; }
        .cs-table-row:last-child { border: none; }

        .cs-cell { padding: 24px 32px; display: flex; align-items: center; gap: 16px; font-size: 15px; }
        .cs-dim-cell { font-weight: 600; color: white; border-right: 1px solid rgba(255,255,255,0.04); }
        .cs-legacy-cell { color: var(--text3); font-style: italic; opacity: 0.8; }
        .cs-success-cell {
          color: white; font-weight: 500;
          background: rgba(196,154,60,0.02);
          border-left: 1px solid rgba(196,154,60,0.15);
          box-shadow: inset 0 0 40px rgba(196,154,60,0.02);
        }

        @media (max-width: 1024px) {
          .cs-table-head, .cs-table-row { grid-template-columns: 1fr 1.5fr 1.5fr; }
        }
        @media (max-width: 768px) {
          .cs-table-head { display: none; }
          .cs-table-row { grid-template-columns: 1fr; gap: 0; padding: 20px; border-bottom: 2px solid rgba(255,255,255,0.08); }
          .cs-cell { padding: 12px 0; border: none !important; }
          .cs-success-cell { background: none; }
        }
      `}</style>

      <div className="cs-comp-wrap">
        <div className="cs-comp-header reveal">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="ey-line" /> The Competitive Edge
          </div>
          <h2 className="h2" style={{ color: 'white' }}>
            Legacy Systems vs.<br /><em>ClientEra Success.</em>
          </h2>
          <p className="lead" style={{ margin: '0 auto', color: 'var(--text2)' }}>
            Old tools track what happened. ClientEra calculates what your team should do next — and ensures no commercial context is lost in the silos of support.
          </p>
        </div>

        <div className="cs-table-surface reveal">
          <div className="cs-table-head">
            <div className="cs-head-cell">Dimension</div>
            <div className="cs-head-cell">Legacy SaaS</div>
            <div className="cs-head-cell cs-head-gold">ClientEra Support</div>
          </div>

          {COMPARISON.map((row, i) => (
            <div key={row.dim} className="cs-table-row">
              <div className="cs-cell cs-dim-cell">
                <row.icon size={18} color="var(--gold)" />
                {row.dim}
              </div>
              <div className="cs-cell cs-legacy-cell">
                <X size={14} color="var(--red)" /> {row.legacy}
              </div>
              <div className="cs-cell cs-success-cell">
                <Check size={16} color="var(--gold)" /> {row.clientera}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
