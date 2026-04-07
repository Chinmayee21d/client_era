'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Settings2, BarChart, ChevronRight, Check } from 'lucide-react';
import { useState } from 'react';

/* ─────────────────────────────────────────────────────────
   SUB-COMPONENTS
   ───────────────────────────────────────────────────────── */

function MockupView({ activeTab, setActiveTab, isMobile }: {
  activeTab: 'sku' | 'label' | 'volume',
  setActiveTab: (t: 'sku' | 'label' | 'volume') => void,
  isMobile?: boolean
}) {
  return (
    <div style={{
      background: 'var(--ink)',
      borderRadius: isMobile ? 24 : 32,
      padding: isMobile ? 20 : 32,
      boxShadow: '0 32px 64px rgba(11,22,40,0.15)',
      border: '1px solid rgba(196,154,60,0.2)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      marginTop: isMobile ? 12 : 0,
      marginBottom: isMobile ? 40 : 0,
      width: '100%',
    }}>
      {/* Mockup Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 4 }}>Configuration</div>
          <div style={{ fontSize: isMobile ? 16 : 20, color: '#fff', fontWeight: 600 }}>Target Settings</div>
        </div>
        {!isMobile && <div style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: 8, fontSize: 12, color: '#fff' }}>Draft V.02</div>}
      </div>

      {/* Control Panel Tabs */}
      <div style={{ display: 'flex', background: 'rgba(0,0,0,0.2)', padding: 3, borderRadius: 12, marginBottom: 16 }}>
        {(['sku', 'label', 'volume'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1, padding: '8px 0', fontSize: 11, fontWeight: 600, border: 'none',
              background: activeTab === tab ? 'var(--gold)' : 'transparent',
              color: activeTab === tab ? 'var(--ink)' : 'rgba(255,255,255,0.5)',
              borderRadius: 8, cursor: 'pointer', transition: 'all 0.3s ease', textTransform: 'capitalize'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          {activeTab === 'sku' && (
            <motion.div key="sku" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '10px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: 13, color: '#fff' }}>Radial All-Season</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div style={{ padding: '10px', background: 'rgba(255,255,255,.03)', borderRadius: 10 }}><div style={{ fontSize: 12, color: '#fff' }}>850 Units</div></div>
                <div style={{ padding: '10px', background: 'rgba(196,154,60,.1)', borderRadius: 10, color: 'var(--gold)' }}>Level 04</div>
              </div>
            </motion.div>
          )}
          {activeTab === 'label' && (
            <motion.div key="label" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[{ f: 'Attainment', t: 'Lifting' }, { f: 'Shortfall', t: 'Gap' }].map((it, idx) => (
                <div key={idx} style={{ background: 'rgba(255,255,255,.03)', padding: '8px 12px', borderRadius: 8, display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,.4)' }}>{it.f}</span>
                  <span style={{ fontSize: 12, color: '#fff', fontWeight: 600 }}>{it.t}</span>
                </div>
              ))}
            </motion.div>
          )}
          {activeTab === 'volume' && (
            <motion.div key="volume" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div style={{ height: 60, display: 'flex', alignItems: 'flex-end', gap: 6, marginBottom: 12 }}>
                {[3, 6, 4, 9, 5].map((h, i) => <div key={i} style={{ flex: 1, background: i === 3 ? 'var(--gold)' : 'rgba(255,255,255,.1)', height: `${h * 10}%`, borderRadius: 2 }} />)}
              </div>
              <div style={{ fontSize: 18, color: '#fff', fontWeight: 700 }}>₹2.4Cr <span style={{ fontSize: 11, color: 'var(--gold)' }}>92%</span></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function KPIEngine() {
  const [activeTab, setActiveTab] = useState<'sku' | 'label' | 'volume'>('sku');

  return (
    <section className="reveal" style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden', padding: '120px 0' }}>
      <style>{`
        .kpi-grid { display: grid; grid-template-columns: minmax(300px, 1fr) 1.2fr; gap: 0 80px; align-items: start; }
        .kpi-mobile { display: none; }
        @media (max-width: 900px) {
          .kpi-grid { display: none; }
          .kpi-mobile { display: flex; flex-direction: column; gap: 0; }
        }
      `}</style>

      {/* Background Ornaments */}
      <div style={{ position: 'absolute', top: '20%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(196,154,60,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 4vw' }}>
        <div style={{ marginBottom: 56 }}>
          <div className="eyebrow eyebrow-dark"><div className="ey-line" />Precision Performance</div>
          <h2 className="h2 h2-ink">Performance Controlled <br /><em style={{ color: 'var(--gold)', fontStyle: 'italic', fontWeight: 500 }}>at the atom level.</em></h2>
        </div>

        {/* ── Desktop View ── */}
        <div className="kpi-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div style={{ display: 'flex', gap: 20 }}>
              <div style={{ color: 'var(--gold)' }}><Layers size={24} /></div>
              <div><h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>SKU-Level Precision</h3><p style={{ fontSize: 15, color: 'var(--ink3)', fontWeight: 300 }}>Set granular targets for individual product lines.</p></div>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <div style={{ color: 'var(--gold)' }}><Settings2 size={24} /></div>
              <div><h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>Universal Label Overrides</h3><p style={{ fontSize: 15, color: 'var(--ink3)', fontWeight: 300 }}>Match the platform to your internal terminology.</p></div>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <div style={{ color: 'var(--gold)' }}><BarChart size={24} /></div>
              <div><h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>Dynamic Forecast Engine</h3><p style={{ fontSize: 15, color: 'var(--ink3)', fontWeight: 300 }}>Real-time attainment tracking with automated shortfall calculation.</p></div>
            </div>
          </div>
          <MockupView activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* ── Mobile View ── */}
        <div className="kpi-mobile">
            {[
              { id: 'sku', t: 'SKU-Level Precision', d: 'Set granular targets for individual product lines.', icon: Layers },
              { id: 'label', t: 'Universal Label Overrides', d: 'Match the platform to your internal terminology.', icon: Settings2 },
              { id: 'volume', t: 'Dynamic Forecast Engine', d: 'Real-time attainment tracking.', icon: BarChart },
            ].map((f) => (
              <div key={f.id}>
                <div style={{ display: 'flex', gap: 16, padding: '20px', background: 'var(--ink)', borderRadius: '20px 20px 0 0', border: '1px solid rgba(196,154,60,.2)', borderBottom: 'none' }}>
                  <div style={{ color: 'var(--gold)' }}><f.icon size={20} /></div>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{f.t}</h3>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,.6)', margin: 0 }}>{f.d}</p>
                  </div>
                </div>
                <MockupView activeTab={f.id as any} setActiveTab={() => {}} isMobile={true} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
