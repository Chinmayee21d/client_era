'use client'
import { useEffect } from 'react'

export default function CS_Hero() {
  useEffect(() => {
    // Count-up animations
    document.querySelectorAll<HTMLElement>('.cs-cu').forEach(el => {
      const t = +(el.dataset.t || 0), dur = 1400, t0 = performance.now()
      const tick = (ts: number) => {
        const p = Math.min((ts - t0) / dur, 1)
        el.textContent = String(Math.round((1 - Math.pow(1 - p, 3)) * t))
        if (p < 1) requestAnimationFrame(tick)
      }
      setTimeout(() => requestAnimationFrame(tick), 700)
    })
  }, [])

  return (
    <>
      <style>{`
        /* ── CS HERO ── */
        .cs-hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: var(--navy);
        }
        .cs-hero-grid-wrapper {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
          gap: clamp(32px, 5vw, 64px);
          align-items: center;
          padding-top: clamp(80px, 8vh, 100px);
          padding-bottom: clamp(40px, 6vh, 80px);
          flex: 1;
        }

        /* animated bg canvas */
        .cs-hero-canvas {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 1;
        }
        .cs-hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 30% 55%, rgba(196, 154, 60, .07) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 20%, rgba(52, 112, 240, .05) 0%, transparent 50%),
            radial-gradient(ellipse at 10% 80%, rgba(24,184,122,.04) 0%, transparent 40%);
        }
        .cs-hero-grid {
          position: absolute;
          inset: -60%;
          background-image:
            linear-gradient(rgba(196,154,60,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,154,60,.05) 1px, transparent 1px);
          background-size: 72px 72px;
          animation: csGridShift 60s linear infinite;
        }
        .cs-orb1 {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: rgba(196,154,60,.06);
          bottom: -120px; right: -120px;
          filter: blur(90px);
          animation: csOrbFloat 24s 2s ease-in-out infinite;
        }
        .cs-orb2 {
          position: absolute;
          width: 360px; height: 360px;
          border-radius: 50%;
          background: rgba(52,112,240,.14);
          top: 35%; left: 52%;
          filter: blur(85px);
          animation: csOrbFloat 34s 5s ease-in-out infinite;
        }
        .cs-orb3 {
          position: absolute;
          width: 280px; height: 280px;
          border-radius: 50%;
          background: rgba(24,184,122,.08);
          top: 10%; left: 20%;
          filter: blur(70px);
          animation: csOrbFloat 28s 8s ease-in-out infinite;
        }
        .cs-data-line {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(196,154,60,.45), transparent);
          animation: csDataFlow 9s ease-in-out infinite;
          animation-fill-mode: both;
          opacity: 0;
        }

        .cs-hero-left {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .cs-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: clamp(9px, 2.2vw, 11px);
          font-weight: 500;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: clamp(16px,2.5vw,26px);
          opacity: 0;
          animation: csUp .6s .1s forwards;
        }
        .cs-ey-line { width: 20px; height: 1px; background: var(--gold); }
        .cs-hero-h1 {
          font-family: 'Fraunces', serif;
          font-size: clamp(32px, 4.5vw, 64px);
          line-height: 1.08;
          letter-spacing: clamp(-0.5px, -0.15vw, -1.5px);
          color: var(--text);
          margin-bottom: clamp(12px, 2vw, 20px);
          opacity: 0;
          animation: csUp .65s .2s forwards;
        }
        .cs-hero-h1 em { font-style: italic; color: var(--gold); font-weight: 300; }
        .cs-hero-sub {
          font-size: clamp(15px, 1.2vw, 18px);
          color: var(--text2);
          max-width: min(100%, 500px);
          line-height: 1.72;
          margin-bottom: clamp(24px, 4vw, 36px);
          font-weight: 300;
          opacity: 0;
          animation: csUp .65s .32s forwards;
        }
        .cs-hero-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: clamp(32px, 5vw, 52px);
          opacity: 0;
          animation: csUp .65s .42s forwards;
        }
        .cs-btn-hero-gold {
          font-size: 14.5px; font-weight: 600;
          color: var(--navy); background: var(--gold);
          border: none; border-radius: 10px;
          padding: 13px 28px; cursor: pointer;
          text-decoration: none;
          transition: all .2s;
          display: inline-flex; align-items: center;
          white-space: nowrap;
        }
        .cs-btn-hero-gold:hover {
          background: var(--gold2);
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(196,154,60,.3);
        }
        .cs-btn-hero-outline {
          font-size: 14.5px; font-weight: 400;
          color: var(--text); background: none;
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 10px; padding: 13px 28px;
          cursor: pointer; text-decoration: none;
          display: inline-flex; align-items: center;
          white-space: nowrap; transition: all .2s;
        }
        .cs-btn-hero-outline:hover { border-color: rgba(255,255,255,.28); }

        /* right floating cards */
        .cs-hero-right {
          position: relative;
          height: 90vh;
          z-index: 10;
          opacity: 0;
          animation: csFade .8s .35s forwards;
        }

        /* Ticket card */
        .cs-hcard {
          position: absolute;
          background: rgba(13,28,52,.9);
          backdrop-filter: blur(22px);
          border: 1px solid rgba(255,255,255,.13);
          border-radius: 14px;
          box-shadow: 0 20px 52px rgba(0,0,0,.38), 0 0 0 1px rgba(255,255,255,.03);
        }
        .cs-hcard-main {
          width: clamp(320px, 34vw, 520px);
          top: 15%; right: 0%;
          animation: csFloatA 8s 1s ease-in-out infinite;
          z-index: 14;
        }
        .cs-hcard-sla {
          width: clamp(200px, 18vw, 270px);
          top: 62%; right: calc(38% + 50px);
          animation: csFloatB 7s 2s ease-in-out infinite;
          z-index: 18;
        }
        .cs-hcard-csat {
          width: clamp(160px, 14vw, 220px);
          top: 68%; right: -2%;
          animation: csFloatC 9s 1.5s ease-in-out infinite;
          z-index: 18;
        }

        .cs-card-titlebar {
          height: 30px;
          background: rgba(255,255,255,.035);
          border-bottom: 1px solid rgba(255,255,255,.07);
          display: flex; align-items: center; gap: 5px;
          padding: 0 11px; border-radius: 14px 14px 0 0;
        }
        .cs-wdot { width: 8px; height: 8px; border-radius: 50%; }
        .cs-wd-r { background: #FF5F57; }
        .cs-wd-y { background: #FFBD2E; }
        .cs-wd-g { background: #28C840; }
        .cs-card-lbl { font-size: 9.5px; color: var(--text3); margin: 0 auto; }
        .cs-card-body { padding: 14px 16px; }

        /* ticket rows */
        .cs-ticket-row {
          display: flex; align-items: center; gap: 9px;
          padding: 8px 10px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 9px; margin-bottom: 6px;
        }
        .cs-tk-priority {
          width: 6px; height: 6px;
          border-radius: 50%; flex-shrink: 0;
        }
        .cs-tk-p-critical { background: #E0384F; box-shadow: 0 0 6px rgba(224,56,79,.5); }
        .cs-tk-p-high { background: #F5A623; }
        .cs-tk-p-medium { background: var(--gold); }
        .cs-tk-p-low { background: var(--green); }
        .cs-tk-id { font-size: 9px; color: var(--text3); font-family: monospace; flex-shrink: 0; }
        .cs-tk-subject { font-size: 11px; font-weight: 600; color: var(--text); flex: 1; }
        .cs-tk-account { font-size: 9px; color: var(--text3); margin-top: 1px; }
        .cs-tk-status {
          font-size: 8px; font-weight: 700;
          padding: 2px 7px; border-radius: 100px;
          white-space: nowrap; flex-shrink: 0;
        }
        .cs-tk-open { background: rgba(224,56,79,.12); color: #E0384F; border: 1px solid rgba(224,56,79,.25); }
        .cs-tk-progress { background: rgba(245,166,35,.11); color: #F5A623; border: 1px solid rgba(245,166,35,.25); }
        .cs-tk-pending { background: rgba(52,112,240,.1); color: var(--blue); border: 1px solid rgba(52,112,240,.25); }
        .cs-tk-resolved { background: rgba(24,184,122,.1); color: var(--green); border: 1px solid rgba(24,184,122,.25); }

        /* SLA card */
        .cs-sla-body { padding: 12px 14px; }
        .cs-sla-lbl {
          font-size: 8.5px; font-weight: 700;
          color: var(--gold); text-transform: uppercase;
          letter-spacing: 1.5px; margin-bottom: 10px;
          display: flex; align-items: center; gap: 5px;
        }
        .cs-sla-live-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--red); animation: csPulse 1.5s infinite;
        }
        .cs-sla-row { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
        .cs-sla-bar-wrap { flex: 1; height: 5px; background: rgba(255,255,255,.08); border-radius: 3px; overflow: hidden; }
        .cs-sla-bar-fill { height: 100%; border-radius: 3px; }
        .cs-sla-pct { font-size: 9px; color: var(--text3); width: 28px; text-align: right; }
        .cs-sla-name { font-size: 9px; color: var(--text2); width: 60px; }

        /* CSAT card */
        .cs-csat-body { padding: 12px 14px; }
        .cs-csat-lbl {
          font-size: 8.5px; color: var(--text3);
          text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 8px;
        }
        .cs-csat-score {
          font-family: 'Fraunces', serif;
          font-size: 28px; color: var(--green);
          margin-bottom: 4px; line-height: 1;
        }
        .cs-csat-sub { font-size: 9px; color: var(--text3); margin-bottom: 8px; }
        .cs-csat-stars { display: flex; gap: 3px; }
        .cs-csat-star { color: var(--gold); font-size: 12px; }

        /* stats bar */
        .cs-hero-stats-bar {
          grid-column: 1 / -1;
          position: relative; z-index: 10;
          display: flex; align-items: stretch;
          background: rgba(255,255,255,.032);
          border-top: 1px solid rgba(255,255,255,.07);
          backdrop-filter: blur(14px);
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-snap-type: x mandatory;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .cs-hero-stats-bar::-webkit-scrollbar { display: none; }

        .cs-hsb-item {
          flex: 0 0 160px; text-align: center; padding: 16px;
          border-right: 1px solid rgba(255,255,255,.07);
          position: relative; overflow: hidden;
          transition: background .3s;
          scroll-snap-align: center;
        }
        .cs-hsb-item:last-child { border-right: none; }
        .cs-hsb-item::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(196,154,60,.09) 0%, transparent 68%);
          opacity: 0; transition: opacity .35s;
        }
        .cs-hsb-item:hover::before { opacity: 1; }
        .cs-hsb-num {
          font-family: 'Fraunces', serif;
          font-size: clamp(22px, 2vw, 34px);
          color: var(--text); letter-spacing: -1px;
          line-height: 1; margin-bottom: 5px;
        }
        .cs-hsb-lbl {
          font-size: 9.5px;
          color: rgba(255,255,255,.36);
          letter-spacing: 1.5px;
          text-transform: uppercase; font-weight: 500;
        }

        /* keyframes */
        @keyframes csGridShift { from { transform: translate(0,0); } to { transform: translate(72px,72px); } }
        @keyframes csOrbFloat {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(20px,-30px) scale(1.06); }
          66% { transform: translate(-12px,18px) scale(.97); }
        }
        @keyframes csDataFlow {
          0%,100% { opacity:0; transform: translateX(-200%); }
          50% { opacity:1; transform: translateX(200%); }
        }
        @keyframes csFloatA { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes csFloatB { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-9px); } }
        @keyframes csFloatC { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes csUp { from { opacity:0; transform: translateY(18px); } to { opacity:1; transform: translateY(0); } }
        @keyframes csFade { from { opacity:0; } to { opacity:1; } }
        @keyframes csPulse { 0%,100% { opacity:1; transform: scale(1); } 50% { opacity:.3; transform: scale(1.4); } }

        /* responsive */
        @media (max-width: 900px) {
          .cs-hero { min-height: auto !important; padding-bottom: 0 !important; }
          .cs-hero-grid-wrapper { 
             grid-template-columns: 1fr !important; 
             padding-top: 60px !important; 
             text-align: center !important; 
          }
          .cs-hero-grid-wrapper > div { align-items: center !important; }
          .cs-hero-sub { margin-left: auto !important; margin-right: auto !important; }
          .cs-hero-right { display: none !important; }
          .cs-hero-stats-bar { 
             mask-image: linear-gradient(to right, transparent, black 15% , black 85%, transparent);
          }
          .cs-hsb-item { flex: 0 0 150px; }
        }
        @media (max-width: 500px) {
          .cs-hero-h1 { font-size: clamp(36px, 10vw, 48px); }
          .cs-btn-hero-gold, .cs-btn-hero-outline { white-space: nowrap !important; }
          .cs-hsb-item { flex: 0 0 140px; padding: 12px 8px; }
          .cs-hsb-num { font-size: 24px; }
        }
      `}</style>

      <section className="cs-hero">

        {/* ANIMATED BACKGROUND */}
        <div className="cs-hero-canvas">
          <div className="cs-hero-bg"></div>
          <div className="cs-hero-grid"></div>
          <div className="cs-orb1"></div>
          <div className="cs-orb2"></div>
          <div className="cs-orb3"></div>
          <div className="cs-data-line" style={{ top: '20%', width: '40%', left: '-5%', animationDelay: '-2s', animationDuration: '9s' }}></div>
          <div className="cs-data-line" style={{ top: '42%', width: '35%', left: '8%', animationDelay: '-5s', animationDuration: '11s' }}></div>
          <div className="cs-data-line" style={{ top: '65%', width: '50%', left: '-6%', animationDelay: '-1s', animationDuration: '8s' }}></div>
          <div className="cs-data-line" style={{ top: '82%', width: '38%', left: '12%', animationDelay: '-7s', animationDuration: '10s' }}></div>
        </div>

        {/* CONTENT WRAPPER */}
        <div className="wrap cs-hero-grid-wrapper">
          {/* LEFT CONTENT */}
          <div className="cs-hero-left">
            <div className="cs-hero-eyebrow"><div className="cs-ey-line"></div>Customer Support & Ticketing</div>
            <h1 className="cs-hero-h1">
              Every ticket solved.<br />
              Every client kept.<br />
              <em>Context never lost.</em>
            </h1>
            <p className="cs-hero-sub">
              Native ticketing built into the same platform where deals are closed. Your reps see open issues before every visit. SLAs auto-track. AI drafts the response.
            </p>
            <div className="cs-hero-ctas">
              <a href="#features" className="cs-btn-hero-gold">See it in action</a>
              <a href="#comparison" className="cs-btn-hero-outline">Compare to legacy tools</a>
            </div>
          </div>
  
          {/* RIGHT — FLOATING CARDS */}
          <div className="cs-hero-right">
  
            {/* Main ticket queue card */}
            <div className="cs-hcard cs-hcard-main">
              <div className="cs-card-titlebar">
                <div className="cs-wdot cs-wd-r"></div>
                <div className="cs-wdot cs-wd-y"></div>
                <div className="cs-wdot cs-wd-g"></div>
                <div className="cs-card-lbl">ClientEra — Support Queue</div>
              </div>
              <div className="cs-card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text2)' }}>OPEN TICKETS</span>
                  <span style={{ fontSize: '9px', color: 'var(--gold)', fontWeight: 600 }}>8 active · 2 breaching SLA</span>
                </div>
                {[
                  { id: 'TK-2041', subject: 'Delivery shortfall — PO #4821', account: 'Reliance Retail', priority: 'cs-tk-p-critical', status: 'cs-tk-open', statusLabel: 'Critical' },
                  { id: 'TK-2038', subject: 'Invoice discrepancy on SO-891', account: 'Tata Steel', priority: 'cs-tk-p-high', status: 'cs-tk-progress', statusLabel: 'In Progress' },
                  { id: 'TK-2035', subject: 'Product quality complaint — Batch 7', account: 'Mahindra Logistics', priority: 'cs-tk-p-medium', status: 'cs-tk-pending', statusLabel: 'Pending Client' },
                  { id: 'TK-2031', subject: 'ETA change request for May delivery', account: 'Infosys Procurement', priority: 'cs-tk-p-low', status: 'cs-tk-resolved', statusLabel: 'Resolved' },
                ].map(tk => (
                  <div key={tk.id} className="cs-ticket-row">
                    <div className={`cs-tk-priority ${tk.priority}`}></div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="cs-tk-subject">{tk.subject}</div>
                      <div className="cs-tk-account">{tk.account}</div>
                    </div>
                    <div className="cs-tk-id">{tk.id}</div>
                    <span className={`cs-tk-status ${tk.status}`}>{tk.statusLabel}</span>
                  </div>
                ))}
                {/* AI draft tag */}
                <div style={{ marginTop: '10px', padding: '8px 10px', background: 'rgba(196,154,60,.07)', border: '1px solid rgba(196,154,60,.18)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, animation: 'csPulse 2s infinite' }}></div>
                  <span style={{ fontSize: '10px', color: 'var(--text2)' }}>AI drafted reply for TK-2041 — <span style={{ color: 'var(--gold)', fontWeight: 600 }}>Review & Send</span></span>
                </div>
              </div>
            </div>
  
            {/* SLA card */}
            <div className="cs-hcard cs-hcard-sla">
              <div className="cs-card-titlebar">
                <div className="cs-wdot cs-wd-r"></div>
                <div className="cs-wdot cs-wd-y"></div>
                <div className="cs-wdot cs-wd-g"></div>
                <div className="cs-card-lbl">SLA Tracker</div>
              </div>
              <div className="cs-sla-body">
                <div className="cs-sla-lbl">
                  <div className="cs-sla-live-dot"></div>
                  Live SLA Health
                </div>
                {[
                  { name: 'Critical', pct: 72, color: '#E0384F' },
                  { name: 'High', pct: 88, color: '#F5A623' },
                  { name: 'Medium', pct: 94, color: 'var(--gold)' },
                  { name: 'Low', pct: 98, color: 'var(--green)' },
                ].map(s => (
                  <div key={s.name} className="cs-sla-row">
                    <span className="cs-sla-name">{s.name}</span>
                    <div className="cs-sla-bar-wrap">
                      <div className="cs-sla-bar-fill" style={{ width: `${s.pct}%`, background: s.color }}></div>
                    </div>
                    <span className="cs-sla-pct">{s.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
  
            {/* CSAT card */}
            <div className="cs-hcard cs-hcard-csat">
              <div className="cs-card-titlebar">
                <div className="cs-wdot cs-wd-r"></div>
                <div className="cs-wdot cs-wd-y"></div>
                <div className="cs-wdot cs-wd-g"></div>
                <div className="cs-card-lbl">CSAT</div>
              </div>
              <div className="cs-csat-body">
                <div className="cs-csat-lbl">Satisfaction Score</div>
                <div className="cs-csat-score">4.7</div>
                <div className="cs-csat-sub">↑ +0.3 vs last month</div>
                <div className="cs-csat-stars">
                  {[1, 2, 3, 4, 5].map(i => (
                    <span key={i} className="cs-csat-star">{i <= 4 ? '★' : '☆'}</span>
                  ))}
                </div>
              </div>
            </div>
  
          </div>
        </div>

        {/* STATS BAR */}
        <div className="cs-hero-stats-bar" style={{ marginTop: 'auto' }}>
          <div className="cs-hsb-item">
            <div className="cs-hsb-num"><span className="cs-cu" data-t="94">0</span>%</div>
            <div className="cs-hsb-lbl">SLA Compliance Rate</div>
          </div>
          <div className="cs-hsb-item">
            <div className="cs-hsb-num">&lt;<span className="cs-cu" data-t="4">0</span>h</div>
            <div className="cs-hsb-lbl">Avg First Response</div>
          </div>
          <div className="cs-hsb-item">
            <div className="cs-hsb-num"><span className="cs-cu" data-t="87">0</span>%</div>
            <div className="cs-hsb-lbl">AI-Assisted Resolutions</div>
          </div>
          <div className="cs-hsb-item">
            <div className="cs-hsb-num">4.7</div>
            <div className="cs-hsb-lbl">Avg CSAT Score</div>
          </div>
          <div className="cs-hsb-item">
            <div className="cs-hsb-num">0</div>
            <div className="cs-hsb-lbl">Context Gaps for Reps</div>
          </div>
        </div>

      </section>
    </>
  )
}