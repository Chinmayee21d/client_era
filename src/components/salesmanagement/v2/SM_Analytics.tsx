'use client'

import { motion } from 'framer-motion'
import { TrendingUp, PieChart } from 'lucide-react'

const FORECAST_DATA = [
  { label: 'Committed', value: 4.8, max: 8, color: 'var(--green)', bg: 'rgba(24,184,122,.15)' },
  { label: 'Best Case', value: 6.2, max: 8, color: 'var(--gold)', bg: 'rgba(196,154,60,.15)' },
  { label: 'Upside', value: 7.8, max: 8, color: 'var(--blue)', bg: 'rgba(52,112,240,.15)' },
]

const LOSS_REASONS = [
  { reason: 'Price too high', pct: 38, color: 'var(--red)' },
  { reason: 'Competitor won', pct: 28, color: '#F5A623' },
  { reason: 'Timing', pct: 22, color: 'var(--blue)' },
  { reason: 'No decision', pct: 12, color: 'var(--text3)' },
]



export default function SM_Analytics() {
  return (
    <section className="section-light">
      <style>{`
        .sm-an-card {
          background: #fff;
          border: 1.5px solid rgba(0,0,0,.06);
          border-radius: 16px;
          padding: 22px 20px;
          transition: all .3s; cursor: default;
        }
        .sm-an-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(0,0,0,.08);
        }
        .sm-an-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          transition-delay: .15s;
        }
        @media (max-width: 1024px) {
          .sm-an-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48, maxWidth: 620, margin: '0 auto 48px' }}>
          <div className="eyebrow eyebrow-dark" style={{ justifyContent: 'center' }}>
            <span className="ey-line" />Analytics &amp; Forecasting
          </div>
          <h2 className="h2 h2-ink" style={{ textAlign: 'center' }}>
            Intelligence beyond<br /><em>operations.</em>
          </h2>
          <p className="lead lead-ink" style={{ margin: '0 auto', textAlign: 'center' }}>
            Revenue forecasting and win/loss analysis. Move from reactive reporting to proactive strategy.
          </p>
        </div>

        <div className="reveal sm-an-grid">
          {/* Revenue Forecast */}
          <div className="sm-an-card">
            <div className="sm-an-header" style={{ color: 'var(--green)', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <TrendingUp size={16} />Revenue Forecast — Q1 2026
            </div>
            <div style={{ fontSize: 10, color: 'var(--ink3)', marginBottom: 4 }}>Target: ₹8.0 Cr</div>
            {FORECAST_DATA.map((d, i) => (
              <div key={d.label} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink2)' }}>{d.label}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: d.color }}>₹{d.value}Cr</span>
                </div>
                <div style={{ height: 10, borderRadius: 5, background: 'rgba(0,0,0,.04)', overflow: 'hidden' }}>
                  <motion.div
                    style={{ height: '100%', borderRadius: 5, background: d.bg, border: `1px solid ${d.color}30` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(d.value / d.max) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: .7, delay: i * .15 }}
                  />
                </div>
              </div>
            ))}
            <div style={{
              marginTop: 8, padding: '8px 12px',
              background: 'rgba(24,184,122,.06)',
              border: '1px solid rgba(24,184,122,.15)',
              borderRadius: 8, fontSize: 10, color: 'var(--green)', fontWeight: 500,
            }}>
              Weighted forecast: ₹5.9Cr (74% of target)
            </div>
          </div>

          {/* Win/Loss Analysis */}
          <div className="sm-an-card">
            <div className="sm-an-header" style={{ color: 'var(--red)', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <PieChart size={16} />Win/Loss — Why We Lose
            </div>
            {LOSS_REASONS.map((r, i) => (
              <div key={r.reason} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 12, color: 'var(--ink2)' }}>{r.reason}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: r.color }}>{r.pct}%</span>
                </div>
                <div style={{ height: 8, borderRadius: 4, background: 'rgba(0,0,0,.04)', overflow: 'hidden' }}>
                  <motion.div
                    style={{ height: '100%', borderRadius: 4, background: `${r.color}30`, border: `1px solid ${r.color}25` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${r.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: .6, delay: i * .1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}
