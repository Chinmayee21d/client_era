'use client'

export default function Hero() {
  return (
    <section className="ce-hero">
      {/* Background canvas */}
      <div className="ce-hero-canvas">
        <div className="ce-hero-bg" />
        <div className="ce-hero-grid" />
        <div className="ce-hero-orb1" />
        <div className="ce-hero-orb2" />
        {/* Sweep lines */}
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
        minHeight: '90vh',
        paddingTop: '100px',
        paddingBottom: '0',
        zIndex: 10
      }}>
        {/* LEFT — copy */}
        <div className="ce-hero-left" style={{ padding: 0, alignSelf: 'center' }}>
          <div className="ce-hero-eyebrow">
            <span className="ey-line" />
            AI-Powered Commercial Operating System
          </div>

          <h1 className="ce-hero-h1">
            One System.<br />
            <em>Every Deal.</em><br />
            Zero Gaps.
          </h1>

          <p className="ce-hero-sub">
            ClientEra unifies Marketing, Sales, Operations, and Customer Service into a single AI intelligence layer — from the first campaign touch to the final payment, one timeline, one truth.
          </p>

          <div className="ce-hero-ctas">
            <button 
              onClick={() => window.dispatchEvent(new Event('open-enquiry-modal'))}
              className="btn-hero-gold"
              style={{ cursor: 'pointer', border: 'none' }}
            >
              Book a Demo →
            </button>
            <a href="#solution" className="btn-hero-outline">▶ See how it works</a>
          </div>
        </div>

        {/* RIGHT — floating dashboard */}
        <div className="ce-hero-right" style={{ minHeight: '700px', alignSelf: 'center' }}>
          {/* Main dashboard card */}
          <div className="ce-hcard ce-hcard-dashboard" style={{ right: '0%', top: '15%', width: '110%' }}>
            <div className="ce-card-titlebar">
              <span className="ce-wdot ce-wd-r" /><span className="ce-wdot ce-wd-y" /><span className="ce-wdot ce-wd-g" />
              <span className="ce-card-lbl">app.clientera.io / dashboard</span>
            </div>
            <div className="ce-card-body">
              <p style={{ fontSize: 12, color: 'var(--text2)', marginBottom: 12 }}>
                Good morning, <strong style={{ color: 'var(--text)' }}>Arjun</strong> — here's your day
              </p>
              <div className="ce-kpi-row">
                <div className="ce-kpi">
                  <div className="ce-kpi-lbl">Pipeline</div>
                  <div className="ce-kpi-val" style={{ color: 'var(--gold)' }}>₹4.2Cr</div>
                  <div className="ce-kpi-change ce-kpi-up">↑ 12% vs last mo.</div>
                </div>
                <div className="ce-kpi">
                  <div className="ce-kpi-lbl">Won MTD</div>
                  <div className="ce-kpi-val" style={{ color: 'var(--green)' }}>₹1.8Cr</div>
                  <div className="ce-kpi-change ce-kpi-up">↑ 94% of target</div>
                </div>
                <div className="ce-kpi">
                  <div className="ce-kpi-lbl">At Risk</div>
                  <div className="ce-kpi-val" style={{ color: 'var(--red)' }}>3</div>
                  <div className="ce-kpi-change ce-kpi-down">↓ Needs action</div>
                </div>
              </div>
              <div style={{ fontSize: 9, fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 9 }}>Active Deals</div>
              {[
                { initials: 'RV', bg: 'rgba(196,154,60,.15)', col: 'var(--gold)', name: 'Reliance Ventures', stage: 'Proposal Sent · Follow-up today', amt: '₹42L', amtCol: 'var(--green)' },
                { initials: 'TM', bg: 'rgba(224,56,79,.15)', col: 'var(--red)', name: 'Tata Metals Ltd', stage: 'SOR Review · Invoice #402 overdue', amt: '₹28L', amtCol: 'var(--red)' },
                { initials: 'IN', bg: 'rgba(52,112,240,.15)', col: 'var(--blue)', name: 'Infosys Networks', stage: 'Negotiation · MQL brief ready', amt: '₹61L', amtCol: 'var(--gold)' },
              ].map(d => (
                <div className="ce-deal-row" key={d.name}>
                  <div className="ce-av" style={{ background: d.bg, color: d.col }}>{d.initials}</div>
                  <div style={{ flex: 1 }}>
                    <div className="ce-deal-name">{d.name}</div>
                    <div className="ce-deal-stage">{d.stage}</div>
                  </div>
                  <div className="ce-deal-amount" style={{ color: d.amtCol }}>{d.amt}</div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Digest floating card */}
          <div className="ce-hcard ce-hcard-digest" style={{ right: '65%', top: '65%' }}>
            <div className="ce-card-titlebar">
              <span className="ce-wdot ce-wd-r" /><span className="ce-wdot ce-wd-y" /><span className="ce-wdot ce-wd-g" />
              <span className="ce-card-lbl">AI Digest · 8:00 AM</span>
            </div>
            <div className="ce-digest-card">
              <div className="ce-digest-lbl">
                <span className="ce-live-dot" />
                Morning Intelligence
              </div>
              <div className="ce-digest-text">
                3 deals at risk today. 2 invoices for Reliance overdue (₹28L). Bottleneck detected in Ops Review — avg 4.2 days vs 1.5d SLA.
              </div>
            </div>
          </div>

          {/* Alert card */}
          <div className="ce-hcard ce-hcard-alert" style={{ right: '-5%', top: '70%' }}>
            <div className="ce-card-titlebar">
              <span className="ce-wdot ce-wd-r" /><span className="ce-wdot ce-wd-y" /><span className="ce-wdot ce-wd-g" />
              <span className="ce-card-lbl">Smart Alerts</span>
            </div>
            <div className="ce-alert-card">
              <div className="ce-alert-lbl">Ambient AI · Live</div>
              {[
                { col: 'var(--gold)', txt: 'Lead score 92 — Infosys ready for handoff' },
                { col: 'var(--red)', txt: 'Order anomaly: 340% above avg, flagged' },
                { col: 'var(--green)', txt: 'SOR-0892 auto-drafted from 10 prior orders' },
              ].map((a, i) => (
                <div key={i} className="ce-alert-item">
                  <div className="ce-alert-dot" style={{ background: a.col }} />
                  {a.txt}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar — spans full width */}
      <div className="ce-hero-stats-bar">
        {[
          { num: '360°', lbl: 'Client Timeline' },
          { num: '0', lbl: 'Manual Re-Entry' },
          { num: '4', lbl: 'Modules Unified' },
          { num: 'BYOK', lbl: 'AI Key Control' },
          { num: '∞', lbl: 'Audit Trail' },
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