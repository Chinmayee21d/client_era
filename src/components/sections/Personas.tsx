'use client'
import { useState, useEffect, useRef } from 'react'

/* ─── Design tokens — mirroring globals.css ─── */
const T = {
  navy: '#0B1628',
  navy2: '#0E1D34',
  navy3: '#122040',
  surface: '#16284A',
  surface2: '#1B3057',
  border: 'rgba(255,255,255,0.07)',
  border2: 'rgba(255,255,255,0.13)',
  text: '#EEF2FF',
  text2: '#8FA3C0',
  text3: '#56728F',
  gold: '#C49A3C',
  gold2: '#DDB84A',
  goldBg: 'rgba(196,154,60,0.10)',
  green: '#18B87A',
  greenBg: 'rgba(24,184,122,0.10)',
  red: '#E0384F',
  redBg: 'rgba(224,56,79,0.09)',
  blue: '#3470F0',
  blueBg: 'rgba(52,112,240,0.10)',
  cream: '#F5F2EC',
  cream2: '#EAE5DB',
  ink: '#0C1828',
  ink2: '#1D2D42',
  ink3: '#3A4E67',
}


/* ─── Marketing Dashboard ─── */
function MarketingDash({ active }: { active: boolean }) {
  const [score, setScore] = useState(0)
  const [barW, setBarW] = useState(0)

  useEffect(() => {
    if (!active) { setScore(0); setBarW(0); return }
    const t1 = setTimeout(() => {
      let n = 0
      const iv = setInterval(() => { n++; setScore(n); if (n >= 92) clearInterval(iv) }, 18)
    }, 400)
    const t2 = setTimeout(() => setBarW(68), 600)
    return () => { clearTimeout(t1); clearTimeout(t2); }
  }, [active])

  return (
    <div style={{ padding: 20, position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* Active Campaign */}
      <div className="ce-pop-element" style={{ background: T.navy3, border: `1px solid ${T.border}`, borderRadius: 12, padding: 16, animationDelay: '0.1s' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: T.text }}>Enterprise Outreach Q2</span>
          <span style={{ background: T.greenBg, color: T.green, fontSize: 10, padding: '4px 10px', borderRadius: 100, fontWeight: 700 }}>LIVE</span>
        </div>
        <div style={{ height: 6, background: T.surface2, borderRadius: 100, marginBottom: 10 }}>
          <div style={{ width: `${barW}%`, height: '100%', background: `linear-gradient(90deg,${T.gold},${T.gold2})`, borderRadius: 100, transition: 'width 1.5s ease-out' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: T.text3 }}>
          <span>1,240 Touches</span><span>64% Engagement</span>
        </div>
      </div>

      {/* Revenue Attribution (New Element) */}
      <div className="ce-pop-element" style={{ background: T.surface, border: `1px solid ${T.border2}`, borderRadius: 12, padding: 14, animationDelay: '0.3s' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: T.text3, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Revenue Attribution</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 40 }}>
          {[30, 60, 45, 90, 70, 100].map((h, i) => (
            <div key={i} style={{ flex: 1, background: i === 5 ? T.gold : T.surface2, height: `${h}%`, borderRadius: '2px 2px 0 0', transition: 'height 1s ease' }} />
          ))}
        </div>
        <div style={{ marginTop: 8, fontSize: 11, color: T.gold }}>+₹1.2Cr Pipeline generated this week</div>
      </div>

      {/* AI Scoring Gate */}
      <div className="ce-pop-element" style={{ background: T.goldBg, border: `1px solid rgba(196,154,60,.25)`, borderRadius: 12, padding: 14, animationDelay: '0.5s' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Fraunces',serif", fontSize: 38, fontWeight: 400, color: T.gold, lineHeight: 1 }}>{score}</div>
            <div style={{ fontSize: 9, color: T.text3, textTransform: 'uppercase' }}>Fit Score</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: T.text, marginBottom: 2 }}>Infosys Ltd.</div>
            <div style={{ fontSize: 11, color: T.text2 }}>MQL Handoff to Sales Triggered 🚀</div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Sales Dashboard ─── */
function SalesDash({ active }: { active: boolean }) {
  const [showBrief, setShowBrief] = useState(false)
  const [checkedItems, setCheckedItems] = useState<string[]>([])

  useEffect(() => {
    if (!active) { setShowBrief(false); setCheckedItems([]); return }
    const t = setTimeout(() => setShowBrief(true), 500)
    const t2 = setTimeout(() => setCheckedItems(['inv']), 1500)
    const t3 = setTimeout(() => setCheckedItems(['inv', 'exp']), 2500)
    return () => { [t, t2, t3].forEach(clearTimeout); }
  }, [active])

  const items = [
    { id: 'inv', col: T.red, t: 'Invoice #402 overdue (₹12L) — collection focus' },
    { id: 'exp', col: T.green, t: 'Q3 expansion opportunity — pitch roadmap' },
    { id: 'prm', col: T.gold, t: 'Contact promoted to Director — congratulate' },
  ]

  return (
    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0' }}>
      <div className="phone-frame ce-pop-element">
        <div className="phone-notch" />
        <div style={{ padding: '40px 16px 20px', height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Status Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div style={{ fontSize: 10, color: T.text3, fontWeight: 700 }}>9:41 AM</div>
            <div style={{ display: 'flex', gap: 4 }}>
              <div style={{ width: 12, height: 6, border: `1px solid ${T.text3}`, borderRadius: 2 }} />
            </div>
          </div>

          {/* GPS Check-in Badge */}
          <div style={{ background: T.greenBg, border: `1px solid ${T.green}44`, borderRadius: 100, padding: '6px 12px', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: T.green, animation: 'pulse 1.2s infinite' }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: T.green, textTransform: 'uppercase' }}>GPS Verified: On-Site</span>
          </div>

          {/* Pre-visit brief */}
          <div style={{
            background: T.goldBg, border: `1px solid rgba(196,154,60,.25)`, borderRadius: 16, padding: 16, marginBottom: 16,
            opacity: showBrief ? 1 : 0, transform: showBrief ? 'translateY(0)' : 'translateY(10px)', transition: 'all .5s ease-out',
          }}>
            <div style={{ fontSize: 10, fontWeight: 800, color: T.gold, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: 10 }}>Client Brief: Reliance</div>
            {items.map(a => (
              <div key={a.id} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: a.col, flexShrink: 0, marginTop: 5 }} />
                <span style={{ fontSize: 12, color: T.text, lineHeight: 1.4, flex: 1 }}>{a.t}</span>
                {checkedItems.includes(a.id) && <span className="ce-pop-element" style={{ fontSize: 12, color: T.green, fontWeight: 800 }}>✓</span>}
              </div>
            ))}
          </div>

          {/* Voice recorder mockup */}
          <div style={{ marginTop: 'auto', background: T.navy2, borderRadius: 16, padding: 14, border: `1px solid ${T.border}` }}>
            <div style={{ fontSize: 10, color: T.text3, marginBottom: 8, textAlign: 'center' }}>Tap to record post-visit notes</div>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: T.red, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(224,56,79,0.3)' }}>
              <div style={{ width: 14, height: 14, borderRadius: 2, background: 'white' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Distributor Dashboard ─── */
function DistributorDash({ active }: { active: boolean }) {
  const [portalStep, setPortalStep] = useState(0)
  const [defectVisible, setDefectVisible] = useState(false)

  useEffect(() => {
    if (!active) { setPortalStep(0); setDefectVisible(false); return }
    const timers = [
      setTimeout(() => setPortalStep(1), 500),
      setTimeout(() => setPortalStep(2), 1100),
      setTimeout(() => setPortalStep(3), 1700),
      setTimeout(() => setDefectVisible(true), 2400),
    ]
    return () => timers.forEach(clearTimeout)
  }, [active])

  const orders = [
    { id: 'ORD-2841', client: 'HUL', qty: 120, status: 'approved', statusCol: T.green },
    { id: 'ORD-2842', client: 'Tata', qty: 340, status: 'flagged', statusCol: T.red },
  ]

  return (
    <div style={{ padding: 20, position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div className="ce-pop-element" style={{ marginBottom: 4 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: T.text3, textTransform: 'uppercase', marginBottom: 10 }}>Active Orders</div>
        {orders.map((o, i) => (
          <div key={o.id} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '10px 14px', background: T.navy3, borderRadius: 10, marginBottom: 8,
            border: `1px solid ${T.border}`,
            opacity: portalStep > i ? 1 : 0.4,
            transition: 'opacity .4s ease',
          }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: T.text }}>{o.id} <span style={{ color: T.text3, fontWeight: 400 }}>· {o.client}</span></div>
            <span style={{ fontSize: 9, padding: '3px 8px', borderRadius: 100, background: `${o.statusCol}22`, color: o.statusCol, fontWeight: 700, textTransform: 'uppercase' }}>
              {o.status}
            </span>
          </div>
        ))}
      </div>

      {/* AI Vision Damage Scan (New) */}
      <div className="ce-pop-element" style={{
        background: T.surface, border: `1px solid ${T.border2}`, borderRadius: 12, padding: 14, animationDelay: '0.6s',
        display: 'flex', gap: 12, alignItems: 'center'
      }}>
        <div style={{ width: 60, height: 60, background: T.navy2, borderRadius: 8, border: `1px solid ${T.red}44`, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '10%', left: '10%', right: '10%', bottom: '10%', border: `1px dashed ${T.red}`, opacity: 0.6 }} />
          <div style={{ position: 'absolute', top: '30%', left: 0, width: '100%', height: 1, background: T.red, animation: 'pulse 1s infinite' }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 10, fontWeight: 800, color: T.red, textTransform: 'uppercase', marginBottom: 4 }}>AI Vision Analysis</div>
          <div style={{ fontSize: 11, color: T.text, fontWeight: 600 }}>Defect detected: Package Crush</div>
          <div style={{ fontSize: 10, color: T.text3 }}>Confidence: 94% · Auto-routing to Claims</div>
        </div>
      </div>
    </div>
  )
}

/* ─── Operations Dashboard ─── */
function OperationsDash({ active }: { active: boolean }) {
  const [flowStep, setFlowStep] = useState(0)

  useEffect(() => {
    if (!active) { setFlowStep(0); return }
    const timers = [
      setTimeout(() => setFlowStep(1), 400),
      setTimeout(() => setFlowStep(2), 1100),
      setTimeout(() => setFlowStep(3), 1800),
      setTimeout(() => setFlowStep(4), 2500),
    ]
    return () => timers.forEach(clearTimeout)
  }, [active])

  const stages = ['Lead', 'SOR', 'Order', 'Invoice']

  return (
    <div style={{ padding: 20, position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Entity Cascade */}
      <div className="ce-pop-element" style={{ background: T.navy3, border: `1px solid ${T.border}`, borderRadius: 14, padding: 18 }}>
        <div style={{ fontSize: 11, color: T.text3, marginBottom: 16, textTransform: 'uppercase', fontWeight: 700 }}>Universal Entity Cascade</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          {stages.map((s, i) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', flex: i < stages.length - 1 ? 1 : 'none' }}>
              <div style={{
                background: flowStep > i ? T.gold : T.surface2,
                borderRadius: 8, padding: '7px 10px', transition: 'all .4s'
              }}>
                <div style={{ fontSize: 10, fontWeight: 800, color: flowStep > i ? T.navy : T.text3 }}>{s}</div>
              </div>
              {i < stages.length - 1 && (
                <div style={{ flex: 1, height: 2, background: flowStep > i + 1 ? T.gold : T.surface2, transition: 'all .4s' }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ASN / Logistics Status (New) */}
      <div className="ce-pop-element" style={{ background: T.surface, border: `1px solid ${T.border2}`, borderRadius: 14, padding: 16, animationDelay: '0.4s' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: T.text }}>Logistics Tracking</span>
          <span style={{ fontSize: 10, color: T.gold }}>ETA: +2.5h</span>
        </div>
        <div style={{ display: 'flex', gap: 8, height: 4, background: T.surface2, borderRadius: 100, overflow: 'hidden' }}>
          <div style={{ width: '75%', background: T.blue, borderRadius: 100 }} />
        </div>
        <div style={{ marginTop: 10, fontSize: 11, color: T.text3 }}>ASN Generated · Out for delivery (Delhi Hub)</div>
      </div>
    </div>
  )
}

/* ─── Management Dashboard ─── */
function ManagementDash({ active }: { active: boolean }) {
  const [digestVisible, setDigestVisible] = useState(false)
  const [barWidths, setBarWidths] = useState([0, 0, 0])

  useEffect(() => {
    if (!active) { setDigestVisible(false); setBarWidths([0, 0, 0]); return }
    const t1 = setTimeout(() => setDigestVisible(true), 400)
    const t2 = setTimeout(() => setBarWidths([100, 95, 88]), 900)
    return () => { [t1, t2].forEach(clearTimeout); }
  }, [active])

  const reps = [
    { name: 'N. Sen', pct: barWidths[0], bg: T.gold, label: '124% ✓' },
    { name: 'A. Gupta', pct: barWidths[1], bg: T.gold2, label: '95%' },
    { name: 'S. Rao', pct: barWidths[2], bg: T.surface2, label: '88%' },
  ]

  return (
    <div style={{ padding: 20, position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', gap: 14 }}>
      {/* Morning AI Digest */}
      <div className="ce-pop-element" style={{
        background: T.goldBg, border: `1px solid rgba(196,154,60,.25)`, borderRadius: 14, padding: 16,
        animationDelay: '0.15s'
      }}>
        <div style={{ fontSize: 10, fontWeight: 800, color: T.gold, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: 8 }}>8:00 AM AI Digest</div>
        <div style={{ fontSize: 12, color: T.text, lineHeight: 1.6, fontWeight: 500 }}>
          3 deals at risk. 2 invoices for Reliance overdue (₹28L).
          <span style={{ color: T.gold }}> Recommendation:</span> Reassign Punjab leads to high-performer N. Sen.
        </div>
      </div>

      {/* Revenue Forecast (New) */}
      <div className="ce-pop-element" style={{ background: T.navy3, border: `1px solid ${T.border}`, borderRadius: 14, padding: 14, animationDelay: '0.4s' }}>
        <div style={{ fontSize: 10, color: T.text3, textTransform: 'uppercase', marginBottom: 10 }}>Monthly Forecast tracking</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ fontSize: 22, color: T.text, fontWeight: 600 }}>₹4.2 Cr</div>
          <div style={{ background: T.greenBg, color: T.green, fontSize: 10, padding: '2px 8px', borderRadius: 4, fontWeight: 700 }}>+12% vs LY</div>
        </div>
      </div>

      {/* Team Leaderboard */}
      <div className="ce-pop-element" style={{ animationDelay: '0.6s' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: T.text3, marginBottom: 12, textTransform: 'uppercase' }}>Top Performers</div>
        {reps.map(r => (
          <div key={r.name} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span style={{ fontSize: 12, width: 54, color: T.text2, flexShrink: 0 }}>{r.name}</span>
            <div style={{ flex: 1, height: 18, background: T.surface2, borderRadius: 100, overflow: 'hidden' }}>
              <div style={{ width: `${r.pct}%`, height: '100%', background: r.bg, transition: 'width 1.2s cubic-bezier(.4,0,.2,1)' }} />
            </div>
            <span style={{ fontSize: 11, color: T.text, width: 34, fontWeight: 600 }}>{r.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Persona data ─── */
const PERSONAS = [
  {
    id: 'marketing',
    tab: 'Marketing',
    tag: 'Marketing Manager',
    title: <>Run campaigns. Score leads.<br /><em style={{ fontStyle: 'italic', color: T.gold, fontWeight: 300 }}>Hand off with full context.</em></>,
    desc: 'Native email, event, and paid digital campaign management with full-funnel attribution — all the way to closed revenue.',
    features: [
      { name: 'AI Lead Scoring Gate', desc: 'Enrichment data automatically calculates Fit + Intent scores without manual rules. Leads ≥92 route to sales autonomously.' },
      { name: 'Autonomous MQL Handoff', desc: 'When MQL threshold is met, the lead routes with an AI-generated qualification brief and suggested opening questions.' },
      { name: 'Full-Funnel Attribution', desc: 'Track revenue back to the originating campaign. See which emails, events, and paid channels actually close deals.' },
      { name: 'Campaign Insight Alerts', desc: 'AI flags campaigns above/below expectations and suggests budget reallocation based on real-time engagement signals.' },
    ],
    DashComp: MarketingDash,
    screenTitle: 'Campaign Dashboard',
  },
  {
    id: 'sales',
    tab: 'Sales',
    tag: 'Field & Desk Sales',
    title: <>Visit smarter.<br /><em style={{ fontStyle: 'italic', color: T.gold, fontWeight: 300 }}>Capture everything.</em></>,
    desc: 'GPS-verified check-ins, voice notes transcribed by Groq Whisper, and a 15-minute pre-visit brief — so every visit counts.',
    features: [
      { name: 'GPS + QR-Verified Check-Ins', desc: 'Invisible location verification. Managers see who visited whom, when — no manual check-in forms required.' },
      { name: 'Voice Notes → Tasks', desc: 'Record a note post-visit. AI transcribes and extracts follow-up tasks automatically, optimised for Indian English.' },
      { name: '15-Min Pre-Visit Brief', desc: 'AI surfaces pending invoices, open tickets, last discussion topics, and suggested talking points before you walk in.' },
      { name: 'One-Click Meeting Starts', desc: 'Zoom/Teams meetings launch directly from the deal record. Transcript auto-attached when the call ends.' },
    ],
    DashComp: SalesDash,
    screenTitle: 'Pre-Visit Brief · Mobile',
  },
  {
    id: 'distributor',
    tab: 'Distributor',
    tag: 'Distributor Portal',
    title: <>Place orders. Raise claims.<br /><em style={{ fontStyle: 'italic', color: T.gold, fontWeight: 300 }}>AI handles the rest.</em></>,
    desc: 'Scoped external access for partners. Place orders, track status, and use AI vision models to classify claim defect categories from uploaded photos — without ever logging into your CRM.',
    features: [
      { name: 'Scoped External Access', desc: 'Partners get a dedicated portal — no access to internal CRM data. Place orders, view status, raise claims independently.' },
      { name: 'AI Vision Defect Classification', desc: 'Upload a photo of damaged goods. AI vision models automatically classify defect category and severity for claim processing.' },
      { name: 'AI Anomaly Detection', desc: 'Orders deviating >40% from the 6-month historical average are automatically flagged before reaching manager approval.' },
      { name: 'Order Status Transparency', desc: 'Real-time order status, invoice visibility, and delivery tracking — all without burdening your internal sales team.' },
    ],
    DashComp: DistributorDash,
    screenTitle: 'Distributor Portal',
  },
  {
    id: 'operations',
    tab: 'Operations',
    tag: 'Operations & Fulfillment',
    title: <>Zero re-entry.<br /><em style={{ fontStyle: 'italic', color: T.gold, fontWeight: 300 }}>One entity, one pipeline.</em></>,
    desc: 'The same data entity evolves automatically from Lead to Invoice. Smart Drafts pre-fill SOR line items. No manual data re-entry, ever.',
    features: [
      { name: 'Entity Cascade', desc: 'No manual data re-entry. The exact same data entity evolves automatically through the pipeline from Lead to Invoice.' },
      { name: 'Smart Drafts', desc: 'AI automatically pre-fills Sales Order Request line items and pricing based on the client\'s last 10 historical orders.' },
      { name: 'Three-Tier Assignment Model', desc: 'Work queues to an eligible pool simultaneously. The first to claim a task removes it from the rest, eliminating bottlenecks.' },
      { name: 'Rework Mechanic', desc: "Approvers can 'Send Back' a deal to a specific prior step for corrections, rather than resorting to a terminal rejection." },
    ],
    DashComp: OperationsDash,
    screenTitle: 'Fulfillment Engine',
  },
  {
    id: 'leadership',
    tab: 'Management',
    tag: 'Executive Management',
    title: <>Real-time visibility.<br /><em style={{ fontStyle: 'italic', color: T.gold, fontWeight: 300 }}>No rep interrogation.</em></>,
    desc: 'Morning AI Digest, workflow bottleneck analysis, and predictive KPI dashboards — all without asking a single rep for an update.',
    features: [
      { name: '8:00 AM Morning AI Digest', desc: 'Raw data turned into a natural-language briefing — at-risk deals, overdue invoices, bottlenecks, and top recommended action.' },
      { name: 'Workflow Bottleneck Analysis', desc: 'AI analyses 90 days of workflow runs to identify exactly which approval steps or users are causing delays.' },
      { name: 'Intelligent Goal Setting', desc: 'Dynamic targets using AND/OR rules by Region, Product, Account. Real-time leaderboards driven by confirmed invoices only.' },
      { name: 'Target Commentary AI', desc: 'One-paragraph AI commentary on current tracking vs target, top underperforming accounts, and projected end-of-period outcome.' },
    ],
    DashComp: ManagementDash,
    screenTitle: 'Executive Dashboard',
  },
]

/* ─── Main export ─── */
export default function Personas() {
  const [active, setActive] = useState('marketing')
  const [animKey, setAnimKey] = useState(0)
  const p = PERSONAS.find(x => x.id === active) || PERSONAS[0]

  function switchTab(id: string) {
    setActive(id)
    setAnimKey(k => k + 1)
  }

  const { DashComp } = p

  return (
    <section style={{ background: T.cream, fontFamily: "'Geist','Inter',sans-serif" }} id="personas">
      <style>{`
        @keyframes panelIn { from { opacity:0; transform:translateY(12px) } to { opacity:1; transform:none } }
        @keyframes popIn { from { opacity:0; transform:scale(0.95); } to { opacity:1; transform:scale(1); } }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.5)} }
        
        .ce-persona-tab { transition: all .2s cubic-bezier(.4,0,.2,1); cursor: pointer; border: none; outline: none; }
        .ce-persona-tab:hover { background: rgba(0,0,0,0.06) !important; transform: translateY(-1px); }
        
        .ce-feat-row { 
          display:flex; 
          gap:12px; 
          padding:16px 18px; 
          border-radius:12px; 
          border:1px solid rgba(0,0,0,0.08); 
          background:white; 
          transition: all .3s cubic-bezier(.22, 1, .36, 1);
        }
        .ce-feat-row:hover { 
          background: white;
          border-color: rgba(196,154,60,.4); 
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
          transform: translateY(-8px);
        }
        
        .ce-feat-name { font-size:14px; font-weight:600; color:${T.ink}; margin-bottom:3px; }
        .ce-feat-desc { font-size:12.5px; color:${T.ink3}; line-height:1.55; }
        
        .ce-pop-element {
          animation: popIn 0.5s cubic-bezier(.34, 1.56, .64, 1) both;
        }

        .phone-frame {
          width: 260px;
          height: 520px;
          background: #0B1628;
          border: 8px solid #1D2D42;
          border-radius: 36px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.4);
        }
        .phone-notch {
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 80px; height: 18px;
          background: #1D2D42;
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
          z-index: 10;
        }
      `}</style>

      <div style={{ maxWidth: 'min(96vw,1200px)', margin: '0 auto', padding: '92px clamp(20px,4vw,72px)' }}>
        {/* Header */}
        <div style={{ marginBottom: 48, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 11, fontWeight: 600, color: T.ink3, textTransform: 'uppercase', letterSpacing: '2.5px', marginBottom: 18 }}>
            <span style={{ width: 20, height: 1, background: 'currentColor', display: 'inline-block' }} />
            Built for Every Role
          </div>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(28px,3.2vw,52px)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-1.2px', marginBottom: 16, color: T.ink }}>
            Maximum output.<br /><em style={{ fontStyle: 'italic', color: '#0A2D80', fontWeight: 300 }}>Minimum input.</em>
          </h2>
          <p style={{ fontSize: 'clamp(15px,1vw,19px)', color: T.ink3, lineHeight: 1.68, maxWidth: 720, margin: '0 auto', fontWeight: 300 }}>
            Each persona gets a purpose-built experience. One platform — five departments — zero friction.
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          gap: 6,
          background: 'rgba(0,0,0,0.04)',
          border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: 14,
          padding: 5,
          marginBottom: 48,
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: 'fit-content',
          margin: '0 auto 48px'
        }}>
          {PERSONAS.map(x => (
            <button
              key={x.id}
              className="ce-persona-tab"
              onClick={() => switchTab(x.id)}
              style={{
                padding: '10px 24px', borderRadius: 10, fontSize: 14, fontWeight: active === x.id ? 600 : 400,
                color: active === x.id ? T.gold : T.ink3,
                background: active === x.id ? 'white' : 'transparent',
                boxShadow: active === x.id ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                display: 'flex', alignItems: 'center', gap: 8,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: active === x.id ? T.gold : T.ink3, display: 'inline-block', flexShrink: 0, transition: 'all .3s' }} />
              {x.tab}
            </button>
          ))}
        </div>

        {/* Panel — equal height two-column */}
        <div key={`${active}-${animKey}`} style={{ animation: 'panelIn .35s ease both' }}>
          {/* Persona Header (Above Grid) */}
          <div style={{ marginBottom: 40, maxWidth: 800 }}>
            <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: T.ink3, background: T.cream2, border: `1px solid rgba(0,0,0,0.1)`, borderRadius: 100, padding: '4px 12px', marginBottom: 12 }}>{p.tag}</span>
            <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(24px,2.5vw,36px)', fontWeight: 400, marginTop: 0, marginBottom: 12, lineHeight: 1.2, letterSpacing: '-.5px', color: T.ink }}>{p.title}</h3>
            <p style={{ fontSize: 15, color: T.ink2, lineHeight: 1.6, margin: 0, maxWidth: 640 }}>{p.desc}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 48, alignItems: 'stretch' }}>
            {/* Left — features */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {p.features.map((f: any) => (
                <div key={f.name} className="ce-feat-row" style={{ flex: 1, display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: T.gold, flexShrink: 0, marginTop: 7 }} />
                  <div>
                    <div className="ce-feat-name">{f.name}</div>
                    <div className="ce-feat-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right — animated dashboard */}
            <div style={{ background: T.surface, border: `1px solid ${T.border2}`, borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,.35)', display: 'flex', flexDirection: 'column' }}>
              {/* Browser chrome */}
              <div style={{ background: T.navy3, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: `1px solid ${T.border}`, flexShrink: 0 }}>
                <div style={{ display: 'flex', gap: 5 }}>
                  {['#FF5F57', '#FFBD2E', '#28C840'].map(c => (
                    <span key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c, display: 'inline-block' }} />
                  ))}
                </div>
                <span style={{ fontSize: 11, color: T.text3, marginLeft: 8 }}>{p.screenTitle}</span>
              </div>
              {/* Dashboard content */}
              <div style={{ flex: 1, position: 'relative', minHeight: 320 }}>
                <DashComp active={active === p.id} key={`dash-${active}-${animKey}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}