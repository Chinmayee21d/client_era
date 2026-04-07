'use client'

import { motion } from 'framer-motion'
import { Check, Minus } from 'lucide-react'

const FEATURES = [
  { name: 'Lead capture & web-to-lead forms', starter: true, growth: true, enterprise: true },
  { name: 'MQL handoff workflow', starter: true, growth: true, enterprise: true },
  { name: 'External enrichment (Clearbit, Apollo, ZoomInfo)', starter: true, growth: true, enterprise: true },
  { name: 'AI-assisted lead scoring', starter: 'BYOK', growth: true, enterprise: true },
  { name: 'LinkedIn Sales Navigator integration', starter: false, growth: true, enterprise: true },
  { name: 'Custom nurture sequences', starter: false, growth: true, enterprise: true },
  { name: 'Territory prospecting map', starter: false, growth: true, enterprise: true },
  { name: 'Platform AI keys (no BYOK needed)', starter: false, growth: true, enterprise: true },
  { name: 'Predictive analytics & white-glove onboarding', starter: false, growth: false, enterprise: true },
]

type CellValue = boolean | string

function Cell({ val }: { val: CellValue }) {
  if (val === true) return <Check size={16} strokeWidth={2.5} style={{ color: '#18B87A' }} />
  if (val === false) return <Minus size={14} strokeWidth={2} style={{ color: 'rgba(255,255,255,.2)' }} />
  return <span style={{ fontSize: 9, fontWeight: 700, color: 'var(--gold)', background: 'rgba(196,154,60,.1)', border: '1px solid rgba(196,154,60,.25)', padding: '2px 8px', borderRadius: 100 }}>{val}</span>
}

const TIERS = [
  { name: 'Starter', color: 'var(--text3)', accent: 'rgba(255,255,255,.05)' },
  { name: 'Growth', color: 'var(--gold)', accent: 'rgba(196,154,60,.06)' },
  { name: 'Enterprise', color: '#4ade80', accent: 'rgba(24,184,122,.06)' },
]

export default function LM_Pricing() {
  return (
    <section id="pricing" style={{ background: 'var(--navy)' }}>
      <style>{`
        .lm-price-table {
          width: 100%; border-collapse: separate; border-spacing: 0;
          border: 1px solid var(--border2); border-radius: 18px; overflow: hidden;
        }
        .lm-price-table th {
          padding: 20px 18px; font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1.5px;
          background: rgba(255,255,255,.03);
          border-bottom: 1px solid var(--border2); text-align: left;
        }
        .lm-price-table td {
          padding: 0; font-size: 13px; color: var(--text2);
          border-bottom: 1px solid rgba(255,255,255,.04); vertical-align: middle;
        }
        .lm-price-td-inner { padding: 13px 18px; }
        .lm-price-table tr:last-child td { border-bottom: none; }
        .lm-price-table tbody tr { transition: background .2s; }
        .lm-price-table tbody tr:hover td .lm-price-td-inner { background: rgba(255,255,255,.025); }
        .lm-pt-cell { text-align: center; }
        @media (max-width: 768px) {
          .lm-price-table, .lm-price-table thead, .lm-price-table tbody, .lm-price-table th, .lm-price-table td, .lm-price-table tr { display: block; }
          .lm-price-table thead tr { display: none; }
          .lm-price-table td { padding: 0; border-bottom: none; }
          .lm-price-td-inner { text-align: left !important; }
          .lm-price-table tr { border-bottom: 1px solid var(--border2); }
        }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 56px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="ey-line" />Pricing Tier Relevance
          </div>
          <h2 className="h2" style={{ textAlign: 'center' }}>
            Available Across<br /><em>All Plans.</em>
          </h2>
          <p className="lead" style={{ margin: '0 auto', textAlign: 'center' }}>
            Core lead management is included from Starter. Advanced prospecting, nurture, and AI features unlock as you grow.
          </p>
        </div>

        <motion.div
          className="reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .1 }}
          style={{ transitionDelay: '.1s' }}
        >
          <table className="lm-price-table">
            <thead>
              <tr>
                <th style={{ color: 'var(--text2)', width: '46%' }}>Feature</th>
                {TIERS.map(t => (
                  <th key={t.name} style={{ color: t.color, background: t.accent, width: '18%', textAlign: 'center' }}>{t.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((f) => (
                <tr key={f.name}>
                  <td><div className="lm-price-td-inner">{f.name}</div></td>
                  <td className="lm-pt-cell"><div className="lm-price-td-inner lm-pt-cell"><Cell val={f.starter} /></div></td>
                  <td className="lm-pt-cell"><div className="lm-price-td-inner lm-pt-cell"><Cell val={f.growth} /></div></td>
                  <td className="lm-pt-cell"><div className="lm-price-td-inner lm-pt-cell"><Cell val={f.enterprise} /></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="reveal" style={{ marginTop: 20, fontSize: 11, color: 'var(--text3)', textAlign: 'center', transitionDelay: '.2s' }}>
          BYOK = Bring Your Own Key (OpenAI, Anthropic, or Gemini). Platform-provided AI keys are included from Growth tier.
        </div>
      </div>
    </section>
  )
}
