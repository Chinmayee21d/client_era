'use client'
import { useEffect, useRef } from 'react'
import { Target, TrendingDown, DollarSign } from 'lucide-react'

export default function CS_ContextIntelligence() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
      },
      { threshold: 0.1 }
    )
    const s = sectionRef.current
    if (!s) return
    s.querySelectorAll('.csci-reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <style>{`
        /* ── CS CONTEXT INTELLIGENCE — LIGHT ── */
        .csci-section { background: var(--cream); }
        .csci-wrap {
          max-width: min(96vw, 1200px);
          margin: 0 auto;
          padding: 72px clamp(20px, 4vw, 72px);
        }

        .csci-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .csci-layout-rev {
          grid-template-columns: 1fr 1fr;
          direction: rtl;
        }
        .csci-layout-rev > * { direction: ltr; }

        .csci-text-col {}
        .csci-eyebrow-dark {
          display: inline-flex; align-items: center; gap: 9px;
          font-size: 11px; font-weight: 600;
          color: var(--ink3); text-transform: uppercase;
          letter-spacing: 2.5px; margin-bottom: 18px;
        }
        .csci-ey-line { width: 20px; height: 1px; background: var(--ink3); }
        .csci-h2 {
          font-family: 'Fraunces', serif;
          font-size: clamp(28px, 3vw, 46px);
          font-weight: 400; line-height: 1.1;
          letter-spacing: -1px; color: var(--ink);
          margin-bottom: 16px;
        }
        .csci-h2 em { font-style: italic; color: #0A2D80; font-weight: 300; }
        .csci-lead {
          font-size: clamp(15px, 1.1vw, 18px);
          color: var(--ink3); line-height: 1.7;
          font-weight: 300; margin-bottom: 28px;
        }
        .csci-feat-list {
          display: flex; flex-direction: column; gap: 14px;
        }
        .csci-feat-item {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 14px 16px;
          background: white; border: 1px solid #e8e4de;
          border-radius: 10px;
          transition: all .2s;
        }
        .csci-feat-item:hover {
          border-color: #c8c0b4;
          transform: translateX(4px);
          box-shadow: 0 4px 16px rgba(0,0,0,.06);
        }
        .csci-fi-icon {
          width: 38px; height: 38px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          background: linear-gradient(135deg, #f0ece6, #faf8f4);
          border: 1px solid #e0dcd4;
          color: var(--gold);
        }
        .csci-fi-title {
          font-size: 13.5px; font-weight: 700;
          color: var(--ink); margin-bottom: 3px;
        }
        .csci-fi-desc {
          font-size: 12.5px; color: var(--ink3);
          line-height: 1.55;
        }

        /* mock client intelligence card */
        .csci-card-col {}
        .csci-mock-card {
          background: var(--navy);
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,.1);
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(11,22,40,.25), 0 0 0 1px rgba(255,255,255,.03);
        }
        .csci-mock-titlebar {
          height: 34px;
          background: rgba(255,255,255,.035);
          border-bottom: 1px solid rgba(255,255,255,.07);
          display: flex; align-items: center;
          gap: 5px; padding: 0 14px;
        }
        .csci-mock-dot { width: 8px; height: 8px; border-radius: 50%; }
        .csci-mock-body { padding: 20px; }

        /* client header */
        .csci-client-header {
          display: flex; align-items: center;
          gap: 12px; margin-bottom: 18px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255,255,255,.07);
        }
        .csci-client-av {
          width: 44px; height: 44px; border-radius: 11px;
          background: linear-gradient(135deg, #C49A3C, #8B6A20);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; font-weight: 800; color: white;
          flex-shrink: 0;
        }
        .csci-client-name { font-size: 14px; font-weight: 700; color: var(--text); }
        .csci-client-sub { font-size: 11px; color: var(--text3); margin-top: 2px; }
        .csci-client-badge {
          margin-left: auto; padding: 4px 10px; border-radius: 100px;
          font-size: 9px; font-weight: 700;
          background: rgba(224,56,79,.12); color: #E0384F;
          border: 1px solid rgba(224,56,79,.25);
          flex-shrink: 0;
        }

        /* brief sections */
        .csci-brief-section { margin-bottom: 14px; }
        .csci-brief-lbl {
          font-size: 9px; font-weight: 700;
          color: var(--gold); text-transform: uppercase;
          letter-spacing: 1.5px; margin-bottom: 8px;
        }
        .csci-brief-row {
          display: flex; justify-content: space-between;
          align-items: center; padding: 6px 0;
          border-bottom: 1px solid rgba(255,255,255,.04);
          font-size: 11px;
        }
        .csci-brief-row:last-child { border-bottom: none; }
        .csci-brief-key { color: var(--text3); }
        .csci-brief-val { color: var(--text); font-weight: 600; }

        /* open ticket alert inside card */
        .csci-ticket-alert {
          padding: 10px 12px;
          background: rgba(224,56,79,.08);
          border: 1px solid rgba(224,56,79,.2);
          border-radius: 8px;
          margin-top: 10px;
        }
        .csci-ta-head {
          font-size: 9px; font-weight: 700;
          color: #E0384F; text-transform: uppercase;
          letter-spacing: 1px; margin-bottom: 6px;
          display: flex; align-items: center; gap: 5px;
        }
        .csci-ta-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #E0384F; animation: csciPulse 1.5s infinite;
        }
        .csci-ta-item {
          font-size: 10px; color: rgba(238,242,255,.75);
          padding: 3px 0; border-bottom: 1px solid rgba(224,56,79,.1);
        }
        .csci-ta-item:last-child { border-bottom: none; }

        /* CSAT trend inside card */
        .csci-csat-row {
          display: flex; gap: 6px; margin-top: 10px;
          align-items: flex-end;
        }
        .csci-csat-bar {
          flex: 1; border-radius: 3px 3px 0 0;
          min-height: 8px; transition: all .2s;
        }
        .csci-csat-label { font-size: 8px; color: var(--text3); text-align: center; margin-top: 4px; }
        .csci-csat-block { flex: 1; }

        @keyframes csciPulse { 0%,100% { opacity:1; } 50% { opacity:.3; } }

        /* reveal */
        .csci-reveal {
          opacity: 0; transform: translateY(22px);
          transition: opacity .7s ease, transform .7s cubic-bezier(.16,1,.3,1);
        }
        .csci-reveal.visible { opacity: 1; transform: none; }
        .csci-reveal-d1 { transition-delay: .1s; }
        .csci-reveal-d2 { transition-delay: .2s; }

        .csci-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #d8d3ca, transparent);
          margin: 72px 0;
        }

        @media (max-width: 900px) {
          .csci-layout, .csci-layout-rev {
            grid-template-columns: 1.1fr 0.9fr;
            direction: ltr;
            gap: 16px;
          }
          .csci-layout-rev > * { direction: ltr; }
          .csci-card-col { order: 0; }
          .csci-wrap { padding: 40px 16px; }
          .csci-divider { margin: 32px 0; }
        }
        @media (max-width: 480px) {
           .csci-h2 { font-size: 20px !important; margin-bottom: 10px !important; }
           .csci-lead { font-size: 13px !important; margin-bottom: 16px !important; }
           .csci-feat-item { padding: 10px 12px !important; gap: 8px !important; }
           .csci-fi-title { font-size: 11px !important; }
           .csci-fi-desc { font-size: 10px !important; }
           .csci-fi-icon { width: 28px !important; height: 28px !important; font-size: 14px !important; }
           
           .csci-mock-body { padding: 12px !important; }
           .csci-client-header { gap: 8px !important; margin-bottom: 12px !important; padding-bottom: 12px !important; }
           .csci-client-av { width: 32px !important; height: 32px !important; font-size: 12px !important; }
           .csci-client-name { font-size: 11px !important; }
           .csci-client-badge { font-size: 8px !important; padding: 2px 6px !important; }
           .csci-brief-lbl { font-size: 8px !important; }
           .csci-brief-row { font-size: 9px !important; padding: 4px 0 !important; }
           .csci-ticket-alert { padding: 8px !important; }
           .csci-ta-head { font-size: 8px !important; }
           .csci-ta-item { font-size: 8.5px !important; }
           .csci-csat-bar { height: 30px !important; }
        }
      `}</style>

      <section className="csci-section" ref={sectionRef} id="context">
        <div className="csci-wrap">

          {/* BLOCK 1 — Pre-visit brief */}
          <div className="csci-layout">
            <div className="csci-text-col csci-reveal csci-reveal-d1">
              <div className="csci-eyebrow-dark"><div className="csci-ey-line"></div>Client Intelligence</div>
              <h2 className="csci-h2">Your reps know<br />before they go.<br /><em>Always.</em></h2>
              <p className="csci-lead">
                Before every field visit or Zoom call, reps get a 15-minute brief that includes open tickets, declining CSAT trends, overdue invoices, and the last three visit notes — assembled automatically from the same platform.
              </p>
              <div className="csci-feat-list">
                {[
                  { icon: Target, title: 'Open Ticket Visibility', desc: 'Every open issue on the account surfaces in the pre-visit brief and the rep\'s daily co-pilot.' },
                  { icon: TrendingDown, title: 'CSAT Trend Warning', desc: 'If satisfaction scores have declined over the last three interactions, the rep sees it as a flag before they walk in.' },
                  { icon: DollarSign, title: 'Commercial Context', desc: 'Overdue invoices, pending SORs, and last payment date — all visible alongside the ticket history.' },
                ].map((f, i) => (
                  <div key={i} className="csci-feat-item">
                    <div className="csci-fi-icon">
                      <f.icon size={16} strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="csci-fi-title">{f.title}</div>
                      <div className="csci-fi-desc">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mock client intelligence card */}
            <div className="csci-card-col csci-reveal csci-reveal-d2">
              <div className="csci-mock-card">
                <div className="csci-mock-titlebar">
                  <div className="csci-mock-dot" style={{ background: '#FF5F57' }}></div>
                  <div className="csci-mock-dot" style={{ background: '#FFBD2E' }}></div>
                  <div className="csci-mock-dot" style={{ background: '#28C840' }}></div>
                  <span style={{ fontSize: '9.5px', color: 'var(--text3)', marginLeft: 'auto' }}>Pre-Visit Brief · 15 min</span>
                </div>
                <div className="csci-mock-body">
                  <div className="csci-client-header">
                    <div className="csci-client-av">RS</div>
                    <div>
                      <div className="csci-client-name">Reliance Retail Ltd.</div>
                      <div className="csci-client-sub">Visit scheduled · 10:30 AM today</div>
                    </div>
                    <div className="csci-client-badge">⚠ 2 Open Issues</div>
                  </div>

                  <div className="csci-brief-section">
                    <div className="csci-brief-lbl">Commercial Status</div>
                    {[
                      { k: 'Last Order', v: 'SO-891 · ₹48L' },
                      { k: 'Outstanding Invoice', v: '₹12.4L · 14 days overdue', red: true },
                      { k: 'Last Payment', v: '22 Mar 2026' },
                    ].map(r => (
                      <div key={r.k} className="csci-brief-row">
                        <span className="csci-brief-key">{r.k}</span>
                        <span className="csci-brief-val" style={r.red ? { color: '#E0384F' } : {}}>{r.v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="csci-ticket-alert">
                    <div className="csci-ta-head">
                      <div className="csci-ta-dot"></div>
                      Open Support Tickets
                    </div>
                    <div className="csci-ta-item">TK-2041 · Delivery shortfall PO #4821 (Critical)</div>
                    <div className="csci-ta-item">TK-2038 · Invoice discrepancy SO-891 (In Progress)</div>
                  </div>

                  <div className="csci-brief-section" style={{ marginTop: '14px' }}>
                    <div className="csci-brief-lbl">CSAT Trend (Last 5)</div>
                    <div className="csci-csat-row">
                      {[
                        { score: 4.8, color: '#18B87A', label: 'Jan' },
                        { score: 4.6, color: '#18B87A', label: 'Feb' },
                        { score: 4.1, color: '#F5A623', label: 'Mar' },
                        { score: 3.8, color: '#F5A623', label: 'Apr' },
                        { score: 3.2, color: '#E0384F', label: 'May' },
                      ].map((c, i) => (
                        <div key={i} className="csci-csat-block">
                          <div
                            className="csci-csat-bar"
                            style={{ height: `${c.score * 10}px`, background: c.color, opacity: .8 }}
                          ></div>
                          <div className="csci-csat-label">{c.label}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ fontSize: '10px', color: '#E0384F', marginTop: '6px', fontWeight: 600 }}>
                      ↘ Declining trend — flag for discussion
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}