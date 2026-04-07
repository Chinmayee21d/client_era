'use client'

import { Clock, MessageSquareOff, History, AlertCircle, EyeOff, Dices } from 'lucide-react'

const PAINS = [
  {
    id: 'stalled',
    icon: AlertCircle,
    headline: '"You find out a deal stalled 2 weeks after it happened"',
    desc: 'Without live pipeline visibility, managers discover problems only when it\'s too late to intervene. Revenue slips through the cracks silently.',
    stat: '2 weeks',
    statLabel: 'avg. delay in stall detection',
  },
  {
    id: 'visits',
    icon: History,
    headline: '"Your rep\'s visit report arrives Friday. The client left on Tuesday"',
    desc: 'End-of-day or end-of-week reporting means you\'re always managing from the past. Field activity is a black box until it isn\'t.',
    stat: '3 days',
    statLabel: 'avg. reporting lag',
  },
  {
    id: 'whatsapp',
    icon: MessageSquareOff,
    headline: '"Three WhatsApp groups. Zero accountability"',
    desc: 'Critical business decisions live in chat threads. No audit trail, no structured data, no way to measure what matters.',
    stat: '0%',
    statLabel: 'accountability in chat',
  },
  {
    id: 'forecast',
    icon: Dices,
    headline: '"You asked for a forecast. You got a guess"',
    desc: 'Without weighted pipeline data and stage probabilities, forecasting is wishful thinking. Board meetings become uncomfortable.',
    stat: '±40%',
    statLabel: 'typical forecast variance',
  },
]

export default function SM_Problem() {
  return (
    <section id="the-cost-section" style={{ background: '#f8f8f6', paddingBottom: 64, paddingTop: 64 }}>
      {/* 
        The inline styles strictly incorporate the Uiverse.io snippet you provided
        adjusted for the 4-column layout and text-based front side.
      */}
      <style>{`
        .sm-pain-card {
          position: relative;
          background-color: #fff;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          perspective: 1000px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          height: 280px;
          cursor: default;
        }

        .sm-pain-card:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.12);
          border-color: rgba(224,56,79,.25);
          z-index: 10;
        }

        /* Front Side: Icon and Title */
        .card__front {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 24px;
          gap: 16px;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          width: 100%;
          height: 100%;
        }

        .sm-pain-card:hover .card__front {
          transform: scale(0);
          opacity: 0;
        }

        .sm-pain-icon {
          width: 52px; height: 52px; border-radius: 12px;
          background: rgba(224,56,79,.06);
          border: 1px solid rgba(224,56,79,.15);
          display: flex; align-items: center; justify-content: center;
          color: var(--red); 
          flex-shrink: 0;
        }

        /* Back Side: details opened when user hover */
        .card__content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 28px 24px;
          box-sizing: border-box;
          background-color: #fff;
          transform: rotateX(-90deg);
          transform-origin: bottom;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .sm-pain-card:hover .card__content {
          transform: rotateX(0deg);
        }

        .sm-pain-stat {
          font-family: 'Fraunces', serif;
          font-size: 28px; font-weight: 400;
          color: var(--red); line-height: 1;
          margin-bottom: 4px;
        }
        .sm-pain-statlbl {
          font-size: 9px; color: #64748b;
          text-transform: uppercase; letter-spacing: 1.2px;
        }
        .sm-pain-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          transition-delay: .15s;
        }
        @media (max-width: 1024px) {
          .sm-pain-grid { grid-template-columns: repeat(2, 1fr); }
          .sm-pain-card { height: 260px; }
        }
        @media (max-width: 480px) {
          .sm-pain-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .sm-pain-card { height: 240px; }
          .sm-pain-card .sm-pain-icon { width: 40px; height: 40px; }
          .sm-pain-card .card__front { padding: 16px; gap: 12px; }
          .sm-pain-card .card__front div { font-size: 14px !important; }
          .sm-pain-card .card__content { padding: 20px 16px; }
          .sm-pain-card .card__content div { font-size: 11px !important; }
          .sm-pain-card .sm-pain-stat { font-size: 22px !important; }
        }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64, maxWidth: 640, margin: '0 auto 64px' }}>
          <div className="eyebrow eyebrow-dark" style={{ justifyContent: 'center' }}>
            <span className="ey-line" />
            <EyeOff size={12} strokeWidth={2.5} style={{ marginRight: 8 }} />
            The Cost of Managing Blind
          </div>
          <h2 className="h2 h2-ink" style={{ textAlign: 'center' }}>
            Sound <em>familiar?</em>
          </h2>
          <p className="lead lead-ink" style={{ margin: '0 auto', textAlign: 'center' }}>
            Every sales leader has felt this pain. The gap between what's happening in the field and what you can see from your desk costs deals, trust, and revenue every single day.
          </p>
        </div>

        <div className="reveal sm-pain-grid">
          {PAINS.map((p) => (
            <div key={p.id} className="sm-pain-card">

              {/* Front of Card: Icon + Text */}
              <div className="card__front">
                <div className="sm-pain-icon">
                  <p.icon size={26} strokeWidth={2} />
                </div>
                <div style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: 17,
                  fontWeight: 500,
                  color: 'var(--ink)',
                  lineHeight: 1.35,
                }}>
                  {p.headline}
                </div>
              </div>

              {/* Reveal on Hover: The detailed description and metrics */}
              <div className="card__content">
                <div style={{ fontSize: 13, color: 'var(--ink3)', lineHeight: 1.6 }}>
                  {p.desc}
                </div>

                <div style={{
                  borderTop: '1px solid #f1f5f9',
                  paddingTop: 16,
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <div className="sm-pain-stat">{p.stat}</div>
                  <div className="sm-pain-statlbl">{p.statLabel}</div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
