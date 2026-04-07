'use client'

import { EyeOff, SplitSquareVertical, Shuffle } from 'lucide-react'

const PAINS = [
  {
    id: 'visibility',
    Icon: EyeOff,
    headline: '"You handed off a lead to sales two weeks ago. You have no idea if they called."',
    desc: 'Marketing loses sight of every lead the moment it enters the sales queue. There is no way to know if it was picked up, ignored, or mishandled — until it\'s too late.',
    stat: '67%',
    statLabel: 'of MQLs never get a follow-up',
  },
  {
    id: 'context',
    Icon: SplitSquareVertical,
    headline: '"The rep opened the deal with zero background. The prospect had been engaged for three months."',
    desc: 'When a lead becomes a deal, all context — campaigns touched, content downloaded, forms filled — lives in a different tool. Reps start from scratch every time.',
    stat: '3–5',
    statLabel: 'tools needed to reconstruct context',
  },
  {
    id: 'scoring',
    Icon: Shuffle,
    headline: '"We call everyone. Half are not ready. The other half became deals at a competitor."',
    desc: 'Most teams rely on gut feel or rigid manual rules to decide who is ready. High-fit leads get ignored. Low-intent leads waste sales time. Neither outcome is acceptable.',
    stat: '±40%',
    statLabel: 'typical forecast variance from gut feel',
  },
]

export default function LM_Problem() {
  return (
    <section id="problem" style={{ background: '#f8f8f6' }}>
      <style>{`
        .lm-prob-card {
          position: relative;
          background-color: #fff;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          perspective: 1000px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 8px 24px rgba(0,0,0,.06);
          transition: all .6s cubic-bezier(.175,.885,.32,1.275);
          height: 300px;
          cursor: default;
        }
        .lm-prob-card:hover {
          transform: scale(1.04);
          box-shadow: 0 20px 48px rgba(0,0,0,.12);
          border-color: rgba(224,56,79,.25);
          z-index: 10;
        }
        .lm-prob-front {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center; padding: 28px 24px;
          gap: 16px; transition: all .6s cubic-bezier(.175,.885,.32,1.275);
          width: 100%; height: 100%;
        }
        .lm-prob-card:hover .lm-prob-front { transform: scale(0); opacity: 0; }
        .lm-prob-icon {
          width: 52px; height: 52px; border-radius: 12px;
          background: rgba(224,56,79,.06);
          border: 1px solid rgba(224,56,79,.15);
          display: flex; align-items: center; justify-content: center;
          color: #E0384F; flex-shrink: 0;
        }
        .lm-prob-back {
          position: absolute; top: 0; left: 0;
          width: 100%; height: 100%; padding: 28px 24px;
          box-sizing: border-box; background-color: #fff;
          transform: rotateX(-90deg); transform-origin: bottom;
          transition: all .6s cubic-bezier(.175,.885,.32,1.275);
          display: flex; flex-direction: column; justify-content: space-between;
        }
        .lm-prob-card:hover .lm-prob-back { transform: rotateX(0deg); }
        .lm-prob-stat {
          font-family: 'Fraunces', serif; font-size: 28px;
          font-weight: 400; color: #E0384F; line-height: 1; margin-bottom: 4px;
        }
        .lm-prob-statlbl {
          font-size: 9px; color: #64748b;
          text-transform: uppercase; letter-spacing: 1.2px;
        }
        @media (max-width: 900px) { .lm-prob-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) { .lm-prob-card { height: auto !important; min-height: 220px; } }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64, maxWidth: 640, margin: '0 auto 64px' }}>
          <div className="eyebrow eyebrow-dark" style={{ justifyContent: 'center' }}>
            <span className="ey-line" />The Cost of Managing Blind
          </div>
          <h2 className="h2 h2-ink" style={{ textAlign: 'center' }}>
            Sound <em>familiar?</em>
          </h2>
          <p className="lead lead-ink" style={{ margin: '0 auto', textAlign: 'center' }}>
            Every marketing and sales leader has felt this pain. Three structural failures that cost pipeline every single month.
          </p>
        </div>

        <div className="reveal lm-prob-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
          transitionDelay: '.15s',
        }}>
          {PAINS.map((p) => (
            <div key={p.id} className="lm-prob-card">
              <div className="lm-prob-front">
                <div className="lm-prob-icon">
                  <p.Icon size={26} strokeWidth={2} />
                </div>
                <div style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: 16, fontWeight: 500,
                  color: 'var(--ink)', lineHeight: 1.35,
                }}>
                  {p.headline}
                </div>
              </div>
              <div className="lm-prob-back">
                <div style={{ fontSize: 13, color: 'var(--ink3)', lineHeight: 1.65 }}>{p.desc}</div>
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: 16, display: 'flex', flexDirection: 'column' }}>
                  <div className="lm-prob-stat">{p.stat}</div>
                  <div className="lm-prob-statlbl">{p.statLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
