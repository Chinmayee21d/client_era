'use client'

import { Target, Star } from 'lucide-react'

export default function LM_Hero() {

  return (
    <section id="hero" className="ce-hero" style={{ display: 'block', minHeight: '92vh' }}>
      <style>{`
        .lm-ai-badge {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 3px 8px; border-radius: 20px;
          background: rgba(196,154,60,0.12); border: 1px solid rgba(196,154,60,0.3);
          font-size: 9px; font-weight: 700; color: var(--gold);
          text-transform: uppercase; letter-spacing: 1px;
        }
        .lm-live-dot {
          width: 7px; height: 7px; border-radius: 50%; background: #22C55E;
          box-shadow: 0 0 8px #22C55E; animation: pulse 2s infinite;
        }
        .lm-lead-row {
          display: flex; align-items: center; gap: 12px;
          padding: 10px 14px; border-radius: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          transition: all .2s; cursor: default;
        }
        .lm-lead-row:hover { background: rgba(255,255,255,0.06); transform: translateX(3px); }
        @media (max-width: 900px) {
          .ce-hero { min-height: auto !important; padding-bottom: 0 !important; }
          .lm-hero-right-panel { display: none !important; }
          .lm-hero-grid-inner { 
            grid-template-columns: 1fr !important; 
            padding-top: 60px !important; 
            text-align: center !important; 
          }
          .ce-hero-left { align-items: center !important; }
          .ce-hero-sub { margin-left: auto !important; margin-right: auto !important; }
          
          .ce-hero-stats-bar { 
            mask-image: linear-gradient(to right, transparent, black 15% , black 85%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 15% , black 85%, transparent);
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            backdrop-filter: blur(14px);
            background: rgba(255,255,255,.032);
          }
          .ce-hsb-item { 
            flex: 0 0 160px; 
            scroll-snap-align: center;
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
        }
        @media (max-width: 500px) {
          .ce-hero-h1 { font-size: clamp(34px, 10vw, 44px) !important; }
          .ce-hsb-item { flex: 0 0 140px; }
        }
      `}</style>

      {/* Background canvas */}
      <div className="ce-hero-canvas">
        <div className="ce-hero-bg" />
        <div className="ce-hero-grid" />
        <div className="ce-hero-orb1" />
        <div className="ce-hero-orb2" style={{ background: 'rgba(196,154,60,.10)' }} />
        {[
          { top: '20%', width: '38%', left: '-4%', delay: '-3s', dur: '9s' },
          { top: '38%', width: '45%', left: '8%' , delay: '-6s', dur: '11s' },
          { top: '55%', width: '32%', left: '-6%', delay: '-1s', dur: '8s' },
          { top: '70%', width: '40%', left: '4%' , delay: '-8s', dur: '12s' },
        ].map((l, i) => (
          <div key={i} className="ce-data-line" style={{ top: l.top, width: l.width, left: l.left, animationDelay: l.delay, animationDuration: l.dur }} />
        ))}
      </div>

      <div className="wrap lm-hero-grid-inner" style={{
        position: 'relative', zIndex: 10,
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)',
        gap: '4vw', minHeight: '86vh', paddingTop: 88,
        alignItems: 'center',
      }}>
        {/* LEFT — Copy */}
        <div className="ce-hero-left" style={{ padding: 0 }}>
          <div className="ce-hero-eyebrow">
            <span className="ey-line" />
            Lead Management Portal
          </div>

          <h1 className="ce-hero-h1" style={{ maxWidth: 660, lineHeight: 1.12 }}>
            Capture, Nurture, and<br />
            <em>Close</em> Every Lead.
          </h1>

          <p className="ce-hero-sub" style={{ maxWidth: 580 }}>
            ClientEra automatically scores, intelligently routes, and seamlessly hands off prospects to your sales team — ensuring you never lose context, or a deal.
          </p>

          <div className="ce-hero-ctas">
            <a href="#cta" className="btn-hero-gold">See It In Action →</a>
            <a href="#prospecting" className="btn-hero-outline">↓ Explore Features</a>
          </div>
        </div>

        {/* RIGHT — Lead Intelligence Dashboard */}
        <div className="lm-hero-right-panel" style={{
          position: 'relative', height: 640, alignSelf: 'center',
        }}>
          <style>{`
            .lm-glass {
              position: absolute;
              background: rgba(12, 22, 44, 0.72);
              backdrop-filter: blur(24px);
              -webkit-backdrop-filter: blur(24px);
              border: 1px solid rgba(255,255,255,0.09);
              border-radius: 18px;
              box-shadow: 0 28px 56px rgba(0,0,0,0.44), inset 0 1px 0 rgba(255,255,255,0.08);
              overflow: hidden;
            }
            .lm-main-card {
              width: 110%; right: -5%; top: 5%; z-index: 3;
              animation: float-main 11s ease-in-out infinite;
            }
            .lm-bubble {
              position: absolute;
              background: rgba(12,22,44,0.88);
              backdrop-filter: blur(24px);
              -webkit-backdrop-filter: blur(24px);
              border: 1px solid rgba(255,255,255,0.13);
              border-radius: 22px;
              box-shadow: 0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15);
              padding: 16px 20px;
              display: flex; align-items: center; gap: 14px;
              z-index: 5;
            }
            .lm-b1 { right: 62%; top: 62%; width: 270px; border-bottom-right-radius: 6px; animation: float-b1 8s ease-in-out infinite reverse; }
            .lm-b2 { right: -8%; top: 70%; width: 290px; border-bottom-left-radius: 6px; animation: float-b2 10s ease-in-out infinite 1.5s; }
            @keyframes float-main { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
            @keyframes float-b1  { 0%,100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-8px) rotate(1deg); } }
            @keyframes float-b2  { 0%,100% { transform: translateY(0) rotate(1deg); } 50% { transform: translateY(9px) rotate(-.5deg); } }
            .lm-card-header {
              display: flex; align-items: center; gap: 8px;
              padding: 13px 18px;
              background: rgba(0,0,0,0.28);
              border-bottom: 1px solid rgba(255,255,255,0.05);
            }
            .lm-dots { display: flex; gap: 6px; }
            .lm-dot { width: 9px; height: 9px; border-radius: 50%; }
            .lm-dot.r { background: #E0384F; box-shadow: 0 0 7px rgba(224,56,79,.4); }
            .lm-dot.y { background: #F5A623; box-shadow: 0 0 7px rgba(245,166,35,.4); }
            .lm-dot.g { background: #22C55E; box-shadow: 0 0 7px rgba(34,197,94,.4); }
            .lm-card-title { font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.38); letter-spacing: .5px; margin-left: 8px; }
          `}</style>

          {/* Main Dashboard Card */}
          <div className="lm-glass lm-main-card">
            <div className="lm-card-header">
              <div className="lm-dots">
                <div className="lm-dot r" /><div className="lm-dot y" /><div className="lm-dot g" />
              </div>
              <div className="lm-card-title">app.clientera.io / lead-management</div>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, color: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.04)', padding: '4px 10px', borderRadius: 20 }}>
                <span className="lm-live-dot" />Live
              </div>
            </div>
            <div style={{ padding: '18px 20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 18 }}>
                {[
                  { label: 'Total Leads', val: '2,841', delta: '+12%', color: 'var(--gold)' },
                  { label: 'MQLs Today', val: '47', delta: '+8', color: '#4ade80' },
                  { label: 'In Handoff', val: '23', delta: 'Queue', color: '#818cf8' },
                  { label: 'Avg. Score', val: '72', delta: 'of 100', color: '#38bdf8' },
                ].map(k => (
                  <div key={k.label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 12, padding: '12px 14px' }}>
                    <div style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--text3)', marginBottom: 6 }}>{k.label}</div>
                    <div style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 400, color: k.color, lineHeight: 1 }}>{k.val}</div>
                    <div style={{ fontSize: 10, color: 'var(--text3)', marginTop: 4 }}>{k.delta}</div>
                  </div>
                ))}
              </div>

              {/* Lead rows */}
              <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.2, color: 'var(--text3)', marginBottom: 10 }}>Recent MQLs</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  { name: 'Priya Sharma', co: 'Reliance Industries', score: 91, status: 'Handoff Ready', color: '#4ade80', badge: 'AI' },
                  { name: 'Rahul Mehta', co: 'Tata Consultancy', score: 84, status: 'In Queue', color: '#818cf8', badge: 'AI' },
                  { name: 'Anita Roy', co: 'Bajaj Finance', score: 76, status: 'Nurture', color: '#fbbf24', badge: null },
                ].map(l => (
                  <div key={l.name} className="lm-lead-row">
                    <div style={{ width: 30, height: 30, borderRadius: 8, background: 'rgba(196,154,60,0.15)', border: '1px solid rgba(196,154,60,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: 'var(--gold)', flexShrink: 0 }}>
                      {l.name.charAt(0)}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>{l.name}</span>
                        {l.badge && <span className="lm-ai-badge">AI</span>}
                      </div>
                      <div style={{ fontSize: 10, color: 'var(--text3)' }}>{l.co}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: "'Fraunces', serif", fontSize: 16, color: l.color, lineHeight: 1 }}>{l.score}</div>
                      <div style={{ fontSize: 9, color: 'var(--text3)' }}>{l.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enrichment Bubble */}
          <div className="lm-bubble lm-b1">
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,rgba(52,112,240,.2),rgba(52,112,240,.05))', border: '1px solid rgba(52,112,240,.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#818cf8' }}>
              <Target size={18} strokeWidth={1.8} />
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', letterSpacing: .5, marginBottom: 4 }}>Enrichment Complete</div>
              <div style={{ fontSize: 12, color: '#e2e8f0', lineHeight: 1.4 }}>
                <strong style={{ color: '#fff' }}>Priya Sharma</strong> promoted to VP Procurement at Reliance.
              </div>
            </div>
          </div>

          {/* Score Alert Bubble */}
          <div className="lm-bubble lm-b2">
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,rgba(196,154,60,.2),rgba(196,154,60,.05))', border: '1px solid rgba(196,154,60,.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--gold)' }}>
              <Star size={18} strokeWidth={1.8} />
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: .5, marginBottom: 4 }}>MQL Threshold Crossed</div>
              <div style={{ fontSize: 12, color: '#e2e8f0', lineHeight: 1.4 }}>
                Lead score <strong style={{ color: '#fff' }}>91/100</strong> — entering <span style={{ color: '#4ade80' }}>handoff queue</span>.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="ce-hero-stats-bar" style={{
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
          { num: '9', lbl: 'Feature Modules' },
          { num: 'AI', lbl: 'Lead Scoring' },
          { num: '6+', lbl: 'Capture Channels' },
          { num: 'Zero', lbl: 'Re-entry on Convert' },
          { num: '100%', lbl: 'Audit Trail' },
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
