'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Map, Crosshair, Link2, ArrowRight } from 'lucide-react'

const FEATURES = [
  {
    Icon: Map,
    title: 'Territory Prospecting Map',
    desc: 'A live geographic map of your territory — accounts colour-coded by status, colleagues\' accounts per sharing policy, and prospect markers for companies not yet in the platform.',
  },
  {
    Icon: Crosshair,
    title: 'Competitor Displacement Tracking',
    desc: 'Accounts flagged as using a competitor are marked for prospecting. See the competitor, last noted date, and the displacement strategy — fed directly into your morning brief.',
  },
  {
    Icon: Link2,
    title: 'LinkedIn Sales Navigator Integration',
    desc: 'Search LinkedIn Sales Navigator from within ClientEra. Save any profile as a lead in one click. Data is pre-populated via the enrichment engine. Saved searches sync automatically.',
    badge: 'Growth & Enterprise',
  },
]

const PROSPECT_ROWS = [
  { name: 'Zeta Systems Pvt Ltd', industry: 'Manufacturing', status: 'Prospect', chance: 82, color: '#18B87A' },
  { name: 'BlueSky Logistics', industry: 'Logistics', status: 'Competitor Account', chance: 61, color: '#F5A623' },
  { name: 'Apex Pharma Ltd', industry: 'Pharma', status: 'Uncontacted', chance: 74, color: '#3470F0' },
  { name: 'Meridian Foods', industry: 'FMCG', status: 'Prospect', chance: 55, color: '#C49A3C' },
]

/* ─────────────────────────────────────────────────────────
   SUB-COMPONENTS
   ───────────────────────────────────────────────────────── */

function ProspectMap({ isMobile }: { isMobile?: boolean }) {
  return (
    <div style={{
      background: 'rgba(13,28,52,.88)',
      backdropFilter: 'blur(22px)',
      border: '1px solid var(--border2)',
      borderRadius: isMobile ? 20 : 16, overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,.4)',
      marginTop: isMobile ? 12 : 0,
      marginBottom: isMobile ? 32 : 0,
    }}>
      <div className="ce-card-titlebar">
        <span className="ce-wdot ce-wd-r" /><span className="ce-wdot ce-wd-y" /><span className="ce-wdot ce-wd-g" />
        <span className="ce-card-lbl">Territory Prospect Map — West Region</span>
      </div>
      <div style={{ padding: '16px 18px' }}>
        <div style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.2, color: 'var(--text3)', marginBottom: 10 }}>
          Prospect accounts in territory
        </div>
        {PROSPECT_ROWS.map((r, i) => (
          <motion.div key={r.name} className="lm-pros-row">
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: r.color, flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.name}</div>
              <div style={{ fontSize: 10, color: 'var(--text3)' }}>{r.industry}</div>
            </div>
            <div style={{ fontSize: 10, color: 'var(--text3)', marginRight: 10, whiteSpace: 'nowrap' }}>{r.status}</div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: r.color }}>{r.chance}%</div>
              <div style={{ fontSize: 8, color: 'var(--text3)' }}>fit</div>
            </div>
          </motion.div>
        ))}
        <div style={{ marginTop: 14, padding: '10px 14px', background: 'rgba(196,154,60,.06)', border: '1px solid rgba(196,154,60,.18)', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', animation: 'pulse 2s infinite', flexShrink: 0 }} />
          <span style={{ fontSize: 10, color: 'var(--gold)', fontWeight: 500 }}>4 new prospects found this week</span>
          <ArrowRight size={12} style={{ color: 'var(--gold)', marginLeft: 'auto', flexShrink: 0 }} />
        </div>
      </div>
    </div>
  )
}

export default function LM_Prospecting() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section id="prospecting" style={{ background: 'var(--navy)' }}>
      <style>{`
        .lm-pros-feat {
          display: flex; gap: 14px; align-items: flex-start;
          padding: 16px 18px; border-radius: 14px;
          border: 1px solid transparent;
          transition: all .28s; cursor: default;
        }
        .lm-pros-feat:hover { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.07); transform: translateX(6px); }
        .lm-pros-icon {
          width: 40px; height: 40px; border-radius: 11px;
          background: var(--gold-bg); border: 1px solid rgba(196,154,60,.2);
          display: flex; align-items: center; justify-content: center;
          color: var(--gold); flex-shrink: 0;
        }
        .lm-pros-row {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 14px; border-radius: 10px;
        }
        .lm-pros-badge {
          display: inline-flex; font-size: 9px; font-weight: 700;
          padding: 2px 8px; border-radius: 100px; text-transform: uppercase;
          letter-spacing: .5px; background: rgba(196,154,60,.12);
          border: 1px solid rgba(196,154,60,.3); color: var(--gold);
          margin-top: 6px;
        }

        .lm-pros-desktop { display: grid; grid-template-columns: 1.15fr 1fr; gap: 80px; alignItems: center; }
        .lm-pros-mobile { display: none; }

        @media (max-width: 900px) { 
          .lm-pros-desktop { display: none; }
          .lm-pros-mobile { display: flex; flex-direction: column; gap: 0; }
        }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div className="eyebrow"><span className="ey-line" />Feature 1 — Prospecting Tools</div>
          <h2 className="h2">Find the Leads Your<br /><em>Competitors Miss.</em></h2>
          <p className="lead">ClientEra gives reps tools to identify, map, and prioritise prospects.</p>
        </div>

        {/* ── Desktop View ── */}
        <div className="reveal lm-pros-desktop" style={{ transitionDelay: '.15s' }}>
          <ProspectMap />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {FEATURES.map((f, i) => (
              <motion.div key={f.title} className="lm-pros-feat" initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * .1 }}>
                <div className="lm-pros-icon"><f.Icon size={20} strokeWidth={2} /></div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--text2)', lineHeight: 1.6 }}>{f.desc}</div>
                  {f.badge && <div className="lm-pros-badge">{f.badge}</div>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Mobile View ── */}
        <div className="lm-pros-mobile reveal">
          {/* Feature Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="lm-pros-feat"
                style={{
                  background: activeFeature === i ? 'rgba(255,255,255,.08)' : 'rgba(255,255,255,.04)',
                  borderColor: activeFeature === i ? 'rgba(196,154,60,.3)' : 'rgba(255,255,255,.07)',
                  cursor: 'pointer'
                }}
                onClick={() => setActiveFeature(i)}
              >
                <div className="lm-pros-icon"><f.Icon size={20} strokeWidth={2} /></div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: activeFeature === i ? 'var(--gold)' : 'var(--text)', marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--text2)', lineHeight: 1.6 }}>{f.desc}</div>
                  {f.badge && <div className="lm-pros-badge">{f.badge}</div>}
                </div>
              </div>
            ))}
          </div>
          {/* Dashboard */}
          <ProspectMap isMobile={true} />
        </div>
      </div>
    </section>
  )
}
