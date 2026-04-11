'use client'
import { useState, useEffect, useRef } from 'react'
import {
  Smile, Frown, TrendingUp, Clock,
  BarChart3, Globe, Award, ShieldAlert
} from 'lucide-react'

/* 
  ── CS SATISFACTION & OPS METRICS ──
  Replaces the duplicate AI content in S5 with high-fidelity performance visualization.
*/

const METRICS = [
  { label: 'Avg. Resolution Time', value: '42m', trend: '+12%', color: 'var(--green)' },
  { label: 'First Response SLA', value: '99.4%', trend: 'Steady', color: 'var(--blue)' },
  { label: 'Customer Satisfaction (CSAT)', value: '4.8/5', trend: '↑', color: 'var(--gold)' },
  { label: 'AI Prediction Accuracy', value: '94%', trend: '+4%', color: 'var(--green)' }
]

const REGIONS = [
  { name: 'North America', score: 98, status: 'Healthy' },
  { name: 'Europe', score: 92, status: 'Satisfactory' },
  { name: 'Asia-Pacific', score: 86, status: 'Attention' },
  { name: 'Latin America', score: 94, status: 'Healthy' }
]

export default function CS_SatisfactionMetrics() {
  const [counts, setCounts] = useState([0, 0, 0, 0])
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Simple count animation
          const targetValues = [42, 99, 4.8, 94]
          let currentValues = [0, 0, 0, 0]
          const interval = setInterval(() => {
            currentValues = currentValues.map((v, i) => Math.min(v + targetValues[i] / 20, targetValues[i]))
            setCounts([...currentValues])
            if (currentValues.every((v, i) => v >= targetValues[i])) clearInterval(interval)
          }, 30)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="cs-metrics-section section-mid" ref={sectionRef} id="satisfaction">
      <style>{`
        .cs-metrics-section { padding: 100px 0; color: white; position: relative; overflow: hidden; }
        .cs-metrics-wrap { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
        
        .cs-metrics-header { text-align: center; max-width: 700px; margin: 0 auto 64px; }
        .cs-metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 48px;
        }
        
        .cs-m-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; padding: 20px 18px;
          text-align: center; transition: all 0.3s;
        }
        .cs-m-card:hover { transform: translateY(-5px); border-color: var(--gold); background: rgba(196,154,60,0.05); }
        .cs-m-label { font-size: 11px; font-weight: 700; color: var(--text3); text-transform: uppercase; letter-spacing: 2.5px; margin-bottom: 10px; }
        .cs-m-value { font-family: 'Fraunces', serif; font-size: 36px; color: white; margin-bottom: 6px; }
        .cs-m-trend { font-size: 12px; font-weight: 600; }

        .cs-ops-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 24px;
        }
        .cs-ops-panel {
          background: var(--surface);
          border: 1.5px solid rgba(255,255,255,0.08);
          border-radius: 24px; padding: clamp(16px, 3vw, 32px);
          overflow: hidden;
          min-width: 0;
        }
        
        .cs-region-row { display: flex; align-items: center; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .cs-region-row:last-child { border: none; }
        .cs-region-bar-wrap { flex: 1; margin: 0 24px; height: 6px; background: rgba(255,255,255,0.05); border-radius: 3px; position: relative; overflow: hidden; }
        .cs-region-bar { height: 100%; transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1); }

        .cs-alert-toast {
          background: rgba(224,56,79,0.1); border: 1px solid rgba(224,56,79,0.3); border-radius: 12px;
          padding: 16px; margin-top: 24px; display: flex; align-items: center; gap: 12px;
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }

        @media (max-width: 1024px) {
          .cs-metrics-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .cs-ops-grid { grid-template-columns: 1fr; gap: 32px; }
        }
        @media (max-width: 768px) {
          .cs-metrics-wrap { padding: 0 24px; }
          .cs-metrics-header { margin-bottom: 40px; }
          .cs-ops-panel { padding: 24px; }
        }
        @media (max-width: 480px) {
          .cs-metrics-grid { grid-template-columns: 1fr; gap: 16px; }
          .cs-m-value { font-size: 32px; }
          .cs-region-row { padding: 12px 0; }
          .cs-region-bar-wrap { margin: 0 12px; }
        }
      `}</style>

      <div className="cs-metrics-wrap">
        <div className="cs-metrics-header reveal">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="ey-line" /> Performance & Satisfaction
          </div>
          <h2 className="h2" style={{ color: 'white' }}>
            Metrics that drive<br /><em>Strategic Decisions.</em>
          </h2>
          <p className="lead" style={{ margin: '0 auto', color: 'var(--text2)' }}>
            We don't just track emojis. ClientEra correlates support satisfaction with commercial risk, surfacing accounts that need immediate leadership attention.
          </p>
        </div>

        <div className="cs-metrics-grid reveal">
          {METRICS.map((m, i) => (
            <div key={m.label} className="cs-m-card">
              <div className="cs-m-label">{m.label}</div>
              <div className="cs-m-value">
                {i === 2 ? counts[i].toFixed(1) : Math.round(counts[i])}{m.value.replace(/[0-9.]/g, '')}
              </div>
              <div className="cs-m-trend" style={{ color: m.color }}>{m.trend}</div>
            </div>
          ))}
        </div>

        <div className="cs-ops-grid reveal">
          <div className="cs-ops-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h3 style={{ fontSize: 18, color: 'white', fontWeight: 600 }}>Regional Global Health</h3>
              <div style={{ display: 'flex', gap: 12, fontSize: 11, color: 'var(--text3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--green)' }} /> Healthy</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--gold)' }} /> Attention</div>
              </div>
            </div>
            {REGIONS.map(r => (
              <div key={r.name} className="cs-region-row">
                <div style={{ width: 140, fontSize: 13, fontWeight: 500, color: 'var(--text2)' }}>{r.name}</div>
                <div className="cs-region-bar-wrap">
                  <div
                    className="cs-region-bar"
                    style={{
                      width: isVisible ? `${r.score}%` : '0%',
                      background: r.score > 90 ? 'var(--green)' : 'var(--gold)'
                    }}
                  />
                </div>
                <div style={{ width: 40, textAlign: 'right', fontSize: 13, fontWeight: 700, color: r.score > 90 ? 'var(--green)' : 'var(--gold)' }}>{r.score}%</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="cs-ops-panel" style={{ flex: 1, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <ShieldAlert size={20} color="var(--red)" />
                <h3 style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>Predictive Risk Warning</h3>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: 12, padding: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.6 }}>
                  AI detected <strong>declining sentiment</strong> in 3 high-value accounts (Reliance, Tata Steel, Bharti).
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
                  <TrendingUp size={14} color="var(--red)" />
                  <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--red)' }}>High Churn Probability: 42%</span>
                </div>
              </div>
            </div>
            <div className="cs-ops-panel" style={{ flex: 1, padding: 24, background: 'rgba(196,154,60,0.05)', borderColor: 'rgba(196,154,60,0.15)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <Award size={20} color="var(--gold)" />
                <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--gold)' }}>Top Performing Region</h3>
              </div>
              <div style={{ fontSize: 24, fontFamily: 'Fraunces', color: 'white', marginBottom: 4 }}>North America</div>
              <div style={{ fontSize: 12, color: 'var(--text3)' }}>Maintaining 98% resolution in &lt;1 hour.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}