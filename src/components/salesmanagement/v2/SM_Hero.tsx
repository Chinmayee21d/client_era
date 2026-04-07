'use client'

import { useEffect, useRef } from 'react'

export default function SM_Hero() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate stat numbers on mount
    const els = statsRef.current?.querySelectorAll('[data-count]')
    els?.forEach((el) => {
      const target = el.getAttribute('data-count') || ''
      if (!isNaN(Number(target))) {
        let current = 0
        const end = Number(target)
        const step = Math.max(1, Math.floor(end / 40))
        const timer = setInterval(() => {
          current = Math.min(current + step, end)
          el.textContent = String(current)
          if (current >= end) clearInterval(timer)
        }, 30)
      }
    })
  }, [])

  return (
    <section className="ce-hero" style={{ display: 'block' }}>
      <style>{`
        @media (max-width: 900px) {
          .ce-hero { min-height: auto !important; padding-bottom: 0 !important; }
          .ce-hero-right { display: none !important; }
          .wrap { 
            grid-template-columns: 1fr !important; 
            padding-top: 60px !important; 
            text-align: center !important; 
          }
          .ce-hero-left { align-items: center !important; }
          .ce-hero-sub { margin-left: auto !important; margin-right: auto !important; }
          
          .ce-hero-stats-bar { 
            mask-image: linear-gradient(to right, transparent, black 15% , black 85%, transparent) !important;
            -webkit-mask-image: linear-gradient(to right, transparent, black 15% , black 85%, transparent) !important;
          }
        }

        .ce-hero-stats-bar { 
          position: relative; z-index: 10;
          display: flex; align-items: stretch;
          background: rgba(255,255,255,.032);
          border-top: 1px solid rgba(255,255,255,.07);
          backdrop-filter: blur(14px);
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .ce-hero-stats-bar::-webkit-scrollbar { display: none; }

        .ce-hsb-item { 
          flex: 1; 
          min-width: 160px;
          scroll-snap-align: center;
          text-align: center;
          padding: 16px;
          border-right: 1px solid rgba(255,255,255,.07);
          position: relative;
          overflow: hidden;
          transition: background .3s;
        }
        .ce-hsb-item::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(196,154,60,.09) 0%, transparent 68%);
          opacity: 0; transition: opacity .35s;
        }
        .ce-hsb-item:hover::before { opacity: 1; }
        
        .ce-hsb-num {
          font-family: 'Fraunces', serif;
          font-size: clamp(22px, 2vw, 34px);
          color: var(--text); letter-spacing: -1px;
          line-height: 1; margin-bottom: 5px;
          position: relative; z-index: 1;
        }
        .ce-hsb-lbl {
          font-size: 9.5px;
          color: rgba(255,255,255,.36);
          letter-spacing: 1.5px;
          text-transform: uppercase; font-weight: 500;
          position: relative; z-index: 1;
        }

        @media (max-width: 500px) {
          .ce-hero-h1 { font-size: clamp(34px, 10vw, 44px) !important; }
          .ce-hsb-item { min-width: 140px; }
        }
      `}</style>

      {/* ── Background canvas ── */}
      <div className="ce-hero-canvas">
        <div className="ce-hero-bg" />
        <div className="ce-hero-grid" />
        <div className="ce-hero-orb1" />
        <div className="ce-hero-orb2" />
        {[
          { top: '18%', width: '40%', left: '-5%', delay: '-2.0s', dur: '9s' },
          { top: '33%', width: '35%', left: '10%', delay: '-5.5s', dur: '11s' },
          { top: '50%', width: '50%', left: '-8%', delay: '-1.2s', dur: '8s' },
          { top: '63%', width: '36%', left: '5%', delay: '-7.0s', dur: '10s' },
          { top: '78%', width: '42%', left: '-3%', delay: '-3.8s', dur: '12s' },
        ].map((l, i) => (
          <div key={i} className="ce-data-line" style={{ top: l.top, width: l.width, left: l.left, animationDelay: l.delay, animationDuration: l.dur }} />
        ))}
      </div>


      <div className="wrap" style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)',
        gap: '4vw',
        minHeight: '85vh',
        paddingTop: '80px',
        zIndex: 10
      }}>
        {/* LEFT — Copy */}
        <div className="ce-hero-left" style={{ padding: 0, alignSelf: 'center' }}>
          <div className="ce-hero-eyebrow">
            <span className="ey-line" />
            Sales Management &amp; Leadership Portal
          </div>

          <h1 className="ce-hero-h1">
            Your team is in the field.<br />
            <em>You see everything.</em>
          </h1>

          <p className="ce-hero-sub">
            Stop managing from spreadsheets and WhatsApp groups. ClientEra gives every sales leader — from Team Lead to Director — real-time visibility, intelligent forecasting, and automated operational control.
          </p>

          <div className="ce-hero-ctas">
            <a href="#sm-cta" className="btn-hero-gold">Request a Demo →</a>
            <a href="#sm-lifecycle" className="btn-hero-outline">▶ Explore Platform</a>
          </div>
        </div>

        {/* RIGHT — Mission Control Floating Dashboard */}
        <div className="ce-hero-right" style={{ height: '700px', alignSelf: 'center', position: 'relative' }}>

          <style>{`
            .hero-glass-card {
              position: absolute;
              background: rgba(13, 22, 40, 0.65);
              backdrop-filter: blur(24px);
              -webkit-backdrop-filter: blur(24px);
              border: 1px solid rgba(255, 255, 255, 0.08);
              border-radius: 16px;
              box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.1);
              overflow: hidden;
            }
            .hgc-main {
              right: -5%; top: 12%; width: 110%; z-index: 3;
              animation: float-main 12s ease-in-out infinite;
            }

            .hgc-bubble {
              position: absolute;
              background: rgba(13, 22, 40, 0.85);
              backdrop-filter: blur(24px);
              -webkit-backdrop-filter: blur(24px);
              border: 1px solid rgba(255, 255, 255, 0.12);
              border-radius: 24px;
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.15);
              padding: 16px 20px;
              display: flex;
              align-items: center;
              gap: 14px;
              z-index: 5;
            }
            .hgc-bubble-1 {
              right: 65%; top: 60%; width: 300px;
              border-bottom-right-radius: 6px; /* Tail pointing to dashboard */
              animation: float-b1 8s ease-in-out infinite reverse;
            }
            .hgc-bubble-2 {
              right: -12%; top: 68%; width: 330px;
              border-bottom-left-radius: 6px; /* Tail pointing to dashboard */
              animation: float-b2 10s ease-in-out infinite 1s;
            }

            @keyframes float-main { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
            @keyframes float-b1 { 0%, 100% { transform: translateY(0px) rotate(-1deg); } 50% { transform: translateY(-8px) rotate(1deg); } }
            @keyframes float-b2 { 0%, 100% { transform: translateY(0px) rotate(1deg); } 50% { transform: translateY(10px) rotate(-0.5deg); } }

            .hgc-header {
              display: flex; align-items: center; gap: 8px;
              padding: 14px 20px;
              background: rgba(0,0,0,0.3);
              border-bottom: 1px solid rgba(255,255,255,0.05);
            }
            .hgc-dots { display: flex; gap: 6px; }
            .hgc-dot { width: 10px; height: 10px; border-radius: 50%; }
            .hgc-dot.r { background: #E0384F; box-shadow: 0 0 8px rgba(224,56,79,0.4); }
            .hgc-dot.y { background: #F5A623; box-shadow: 0 0 8px rgba(245,166,35,0.4); }
            .hgc-dot.g { background: #22C55E; box-shadow: 0 0 8px rgba(34,197,94,0.4); }
            .hgc-title { font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.4); letter-spacing: 0.5px; margin-left: 8px; }

            .hgc-kpi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 20px; }
            .hgc-kpi-box { 
              background: rgba(255,255,255,0.03); 
              border: 1px solid rgba(255,255,255,0.04); 
              border-radius: 12px; padding: 16px; 
              display: flex; flex-direction: column; gap: 4px;
            }
            .hgc-kpi-label { font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: var(--text3); }
            .hgc-kpi-val { font-size: 28px; font-weight: 400; font-family: 'Fraunces', serif; }
            .hgc-badge { display: inline-flex; align-items: center; gap: 4px; padding: 4px 8px; border-radius: 6px; font-size: 10px; font-weight: 600; width: fit-content; margin-top: 4px; }
            .hgc-rep-card { background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.05); padding: 12px; border-radius: 10px; text-align: left; display: flex; align-items: center; gap: 12px; transition: all 0.2s;}
            .hgc-rep-card:hover { background: rgba(255,255,255,0.03); border-color: rgba(255,255,255,0.1); }
            .hgc-rep-avatar { width: 36px; height: 36px; border-radius: 8px; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0; }
          `}</style>

          {/* Main dashboard: Live Operations */}
          <div className="hero-glass-card hgc-main">
            <div className="hgc-header">
              <div className="hgc-dots">
                <div className="hgc-dot r" /><div className="hgc-dot y" /><div className="hgc-dot g" />
              </div>
              <div className="hgc-title">app.clientera.io / mission-control</div>
            </div>

            <div style={{ padding: '0 4px 8px' }}>
              <div style={{ padding: '24px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ fontSize: 14, color: 'var(--text2)', margin: 0 }}>
                  Good morning, <strong style={{ color: '#fff', fontWeight: 600 }}>Vikram</strong> — your team at a glance
                </p>
                <div style={{ fontSize: 11, background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: 100, color: 'var(--text3)', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 6, height: 6, background: '#22C55E', borderRadius: '50%', boxShadow: '0 0 8px #22C55E', animation: 'pulse 2s infinite' }} />
                  Live Sync
                </div>
              </div>

              <div className="hgc-kpi-grid">
                <div className="hgc-kpi-box">
                  <div className="hgc-kpi-label">Team Pipeline</div>
                  <div className="hgc-kpi-val" style={{ color: 'var(--gold)' }}>₹12.8Cr</div>
                  <div className="hgc-badge" style={{ background: 'rgba(34,197,94,0.1)', color: '#4ade80' }}>↑ 18% vs last mo.</div>
                </div>
                <div className="hgc-kpi-box">
                  <div className="hgc-kpi-label">Reps Active</div>
                  <div className="hgc-kpi-val" style={{ color: '#4ade80' }}>14<span style={{ fontSize: 16, color: 'var(--text3)' }}>/16</span></div>
                  <div className="hgc-badge" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text2)' }}>📍 GPS verified</div>
                </div>
                <div className="hgc-kpi-box" style={{ background: 'linear-gradient(135deg, rgba(224,56,79,0.05), rgba(255,255,255,0.02))', borderColor: 'rgba(224,56,79,0.15)' }}>
                  <div className="hgc-kpi-label" style={{ color: '#f87171' }}>Approvals Queue</div>
                  <div className="hgc-kpi-val" style={{ color: '#f87171' }}>7</div>
                  <div className="hgc-badge" style={{ background: 'rgba(224,56,79,0.15)', color: '#f87171' }}>⚠ 3 urgent</div>
                </div>
              </div>

              {/* Rep activity grid */}
              <div style={{ padding: '0 20px 24px' }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 14 }}>
                  Field Team Status
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
                  {[
                    { name: 'Arjun S.', status: 'Reliance HQ', color: '#4ade80', initial: 'AS' },
                    { name: 'Priya M.', status: 'Tata Steel', color: '#4ade80', initial: 'PM' },
                    { name: 'Raj K.', status: 'In Transit', color: '#fbbf24', initial: 'RK' },
                    { name: 'Dev T.', status: 'Not started', color: '#f87171', initial: 'DT' },
                  ].map(r => (
                    <div key={r.name} className="hgc-rep-card">
                      <div className="hgc-rep-avatar" style={{ border: `1px solid ${r.color}50`, color: r.color }}>{r.initial}</div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: '#f8fafc', marginBottom: 4 }}>{r.name}</div>
                        <div style={{ fontSize: 11, color: 'var(--text3)', display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: r.color }} /> {r.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AI insight floating Bubble 1 */}
          <div className="hgc-bubble hgc-bubble-1">
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #1e293b, #0f172a)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative' }}>
              <span style={{ fontSize: 14 }}>🤖</span>
              <div style={{ width: 12, height: 12, background: '#fbbf24', borderRadius: '50%', border: '2px solid rgba(13,22,40,1)', position: 'absolute', bottom: -2, right: -2 }} />
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 4 }}>Insight Alert</div>
              <div style={{ fontSize: 13, color: '#e2e8f0', lineHeight: 1.4 }}>
                <strong style={{ color: '#fff' }}>Dev T.</strong> hasn&apos;t logged a visit. 3 scheduled meetings at risk.
              </div>
            </div>
          </div>

          {/* Approval pending Bubble 2 */}
          <div className="hgc-bubble hgc-bubble-2">
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(224,56,79,0.2), rgba(224,56,79,0.05))', border: '1px solid rgba(224,56,79,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#f87171' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#f87171', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 4 }}>Requires Approval</div>
              <div style={{ fontSize: 13, color: '#e2e8f0', lineHeight: 1.4 }}>
                Quote <strong>#891</strong> for ₹18L requests a <span style={{ color: 'var(--gold)' }}>22% discount</span>.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Stats bar */}
      <div className="ce-hero-stats-bar" ref={statsRef} style={{
         position: 'relative', zIndex: 10,
         display: 'flex', alignItems: 'stretch',
         background: 'rgba(255,255,255,.032)',
         borderTop: '1px solid rgba(255,255,255,.07)',
         backdropFilter: 'blur(14px)',
         overflowX: 'auto', scrollbarWidth: 'none',
         msOverflowStyle: 'none'
      }}>
        <style>{`.ce-hero-stats-bar::-webkit-scrollbar { display: none; }`}</style>
        {[
          { num: '4', lbl: 'Management Levels' },
          { num: 'Live', lbl: 'GPS Tracking' },
          { num: '360°', lbl: 'Pipeline Visibility' },
          { num: 'Auto', lbl: 'Approval Engine' },
          { num: '1-Click', lbl: 'Board Reports' },
        ].map(s => (
          <div className="ce-hsb-item" key={s.lbl}>
            <div className="ce-hsb-num">{s.num}</div>
            <div className="ce-hsb-lbl">{s.lbl}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
