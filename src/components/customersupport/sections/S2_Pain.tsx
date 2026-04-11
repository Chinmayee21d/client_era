'use client'
import { useEffect, useRef } from 'react'
import { 
  Link2Off, Timer, Bot, TrendingDown
} from 'lucide-react'

export default function CS_Problem() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )
    const section = sectionRef.current
    if (!section) return
    section.querySelectorAll('.cs-reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const problems = [
    {
      icon: Link2Off,
      title: 'Support is Siloed From Sales',
      desc: 'Your rep walks into a client meeting blind — a critical delivery complaint was raised three days ago but they had no idea. The ticket lived in Zendesk. The deal lived in the CRM. Never the twain shall meet.',
      color: 'var(--red)',
      bg: 'rgba(224,56,79,.06)',
      border: 'rgba(224,56,79,.15)',
    },
    {
      icon: Timer,
      title: 'SLAs Tracked in Spreadsheets',
      desc: 'No real-time SLA engine. Someone manually updates a Google Sheet every morning. By the time a breach is noticed, the client has already escalated to senior leadership or LinkedIn.',
      color: 'var(--gold)',
      bg: 'rgba(196,154,60,.06)',
      border: 'rgba(196,154,60,.15)',
    },
    {
      icon: Bot,
      title: 'AI Bolted On, Not Built In',
      desc: 'Your chatbot can\'t see order history. It can\'t see unpaid invoices. It answers generic questions while your rep has to manually pull context from four different browser tabs.',
      color: 'var(--blue)',
      bg: 'rgba(52,112,240,.06)',
      border: 'rgba(52,112,240,.15)',
    },
    {
      icon: TrendingDown,
      title: 'Declining CSAT Goes Unnoticed',
      desc: 'A strategic account\'s satisfaction score drops from 4.8 to 3.2 over three months. No alert fires. No rep is notified. The churn signal was there — but buried in a dashboard no one checks.',
      color: '#F5A623',
      bg: 'rgba(245,166,35,.06)',
      border: 'rgba(245,166,35,.15)',
    },
  ]

  return (
    <>
      <style>{`
        .cs-problem-section {
          background: #fcfbf9;
          position: relative;
          overflow: hidden;
          padding-top: 0;
        }
        .cs-problem-wrap {
          max-width: min(96vw, 1200px);
          margin: 0 auto;
          padding: 80px clamp(20px, 4vw, 72px) 80px;
        }
        .cs-problem-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          padding: 8px 0;
        }
        .cs-problem-card {
          background: #fff;
          border-radius: 18px;
          padding: 28px;
          border: 1px solid #e8e4de;
          box-shadow: 0 4px 18px rgba(11, 22, 40, 0.03);
          transition: all .35s cubic-bezier(.16,1,.3,1);
          cursor: default;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .cs-problem-card::before {
          content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 3px;
          background: var(--card-color); transform: translateY(-100%); transition: transform .3s;
        }
        .cs-problem-card:hover::before { transform: translateY(0); }
        .cs-problem-card:hover {
          transform: translateY(-8px);
          border-color: var(--card-border);
          box-shadow: 0 28px 60px rgba(11,22,40,.12);
        }
        .cs-prob-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 14px;
          display: flex; align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          border: 1px solid;
          transition: transform .3s;
          background: var(--card-bg);
          border-color: var(--card-border);
          color: var(--card-color);
        }
        .cs-problem-card:hover .cs-prob-icon-wrap {
          transform: scale(1.1) rotate(-3deg);
        }
        .cs-prob-title {
          font-size: 17px; font-weight: 600;
          color: var(--navy); margin-bottom: 12px;
          font-family: 'Fraunces', serif;
          line-height: 1.3;
        }
        .cs-prob-desc {
          font-size: 13.5px; color: var(--ink3);
          line-height: 1.65; font-weight: 300;
          flex: 1;
        }

        /* stats highlight strip */
        .cs-prob-strip {
          margin-top: 60px;
          padding: 32px;
          background: #f8f8f6;
          border: 1px solid #e8e4de;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .cs-ps-icon { color: var(--red); flex-shrink: 0; }
        .cs-ps-text { font-size: 15px; color: var(--navy); font-weight: 500; line-height: 1.5; }
        .cs-ps-text strong { color: var(--red); }

        .cs-reveal {
          opacity: 0; transform: translateY(30px);
          transition: opacity .8s ease, transform .8s cubic-bezier(.16,1,.3,1);
        }
        .cs-reveal.visible { opacity: 1; transform: none; }
        .cs-reveal-d1 { transition-delay: .1s; }
        .cs-reveal-d2 { transition-delay: .2s; }
        .cs-reveal-d3 { transition-delay: .3s; }
        .cs-reveal-d4 { transition-delay: .4s; }

        @media (max-width: 900px) {
          .cs-problem-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .cs-problem-card { padding: 24px; }
          .cs-prob-strip { flex-direction: column; text-align: center; }
        }
        @media (max-width: 480px) {
           .cs-problem-grid { grid-template-columns: 1fr; gap: 12px; }
           .cs-problem-card { padding: 20px; }
           .cs-prob-title { font-size: 15px; }
           .cs-prob-desc { font-size: 12px; }
        }
      `}</style>

      <section className="cs-problem-section" ref={sectionRef} id="problem">
        <div className="cs-problem-wrap">
          <div className="reveal cs-reveal" style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto 80px' }}>
            <div className="eyebrow eyebrow-dark" style={{ justifyContent: 'center' }}>
              <span className="ey-line" />The Critical Gap
            </div>
            <h2 className="h2 h2-ink">
              Support is an afterthought.<br />
              <em>It costs you clients.</em>
            </h2>
            <p className="lead lead-ink" style={{ margin: '0 auto' }}>
              Most companies handle post-sale issues in a disconnected system, creating a "Black Hole" where customer dissatisfaction grows in silence until it's too late to save the account.
            </p>
          </div>

          <div className="cs-problem-grid">
            {problems.map((p, i) => (
              <div
                key={i}
                className={`cs-problem-card cs-reveal cs-reveal-d${i + 1}`}
                style={{
                  '--card-color': p.color,
                  '--card-bg': p.bg,
                  '--card-border': p.border
                } as any}
              >
                <div className="cs-prob-icon-wrap">
                  <p.icon size={24} strokeWidth={2.2} />
                </div>
                <div className="cs-prob-title">{p.title}</div>
                <div className="cs-prob-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
