'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Target, BarChart3, TrendingUp, Zap,
  ChevronRight, CheckCircle2, AlertCircle,
  Calendar, Activity
} from 'lucide-react';

const DISTRIBUTORS = [
  { name: 'Apex Distributors Ltd', region: 'West Maharashtra', target: 2000000, actual: 1460000, sku: 'Industrial Cleaners', skuTarget: 600000, skuActual: 498000 },
  { name: 'Metro Traders', region: 'Mumbai City', target: 1500000, actual: 975000, sku: 'Surface Coatings', skuTarget: 450000, skuActual: 216000 },
  { name: 'North Region Hub', region: 'Pune District', target: 2500000, actual: 2125000, sku: 'Safety Equipment', skuTarget: 800000, skuActual: 720000 },
  { name: 'Southern Depot Co', region: 'Nashik', target: 1800000, actual: 810000, sku: 'Lab Chemicals', skuTarget: 500000, skuActual: 175000 },
];

function AnimatedBar({ target, actual, color, delay = 0 }: { target: number; actual: number; color: string; delay?: number }) {
  const pct = Math.round((actual / target) * 100);
  const status = pct >= 80 ? 'on-track' : pct >= 50 ? 'at-risk' : 'behind';
  const barColor = status === 'on-track' ? 'var(--green)' : status === 'at-risk' ? '#F5A623' : '#FF5F57';

  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, alignItems: 'center' }}>
        <span style={{ fontSize: 9, fontWeight: 700, color: 'rgba(11,22,40,.4)', textTransform: 'uppercase' }}>Performance</span>
        <span style={{
          fontSize: 9, fontWeight: 700,
          color: barColor,
          background: `${barColor}14`,
          padding: '2px 8px', borderRadius: 100,
        }}>{pct}%</span>
      </div>
      <div style={{ height: 6, background: 'rgba(255,255,255,.08)', borderRadius: 100, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(pct, 100)}%` }}
          transition={{ duration: 1.2, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: '100%', background: barColor, borderRadius: 100 }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
        <span style={{ fontSize: 9, color: 'rgba(11,22,40,.5)', fontWeight: 500 }}>₹{(actual / 100000).toFixed(1)}L Actual</span>
        <span style={{ fontSize: 9, color: 'rgba(11,22,40,.3)' }}>Target: ₹{(target / 100000).toFixed(0)}L</span>
      </div>
    </div>
  );
}

export default function S6_Targets() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const d = DISTRIBUTORS[selected];
  const pct = Math.round((d.actual / d.target) * 100);
  const daysLeft = 9;
  const runRate = (d.actual / (30 - daysLeft));
  const projected = d.actual + (runRate * daysLeft);
  const projPct = Math.round((projected / d.target) * 100);

  return (
    <section ref={sectionRef} style={{
      background: 'var(--cream)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle,rgba(11,22,40,.03) 1px,transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 'min(96vw,1280px)',
        margin: '0 auto',
        padding: '100px clamp(24px,4.8vw,84px)',
        position: 'relative',
      }}>
        {/* Balanced Row Layout with Matching Heights */}
        <div className="s6-targets-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px',
          alignItems: 'stretch',
        }}>
          {/* Left Column: Context & Feature Stack */}
          <div className="s6-feature-stack" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 11,
              fontWeight: 500,
              color: 'var(--green)',
              textTransform: 'uppercase',
              letterSpacing: '2.5px',
              marginBottom: 16,
            }}>
              <span style={{ width: 18, height: 1, background: 'var(--green)', display: 'block' }} />
              Targets & KPIs
            </div>
            <h2 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'var(--std-h2-size)',
              fontWeight: 400,
              lineHeight: 1.06,
              letterSpacing: '-1.2px',
              color: 'var(--ink)',
              marginBottom: 16,
            }}>
              Your distributors always know <em style={{ color: 'var(--green)', fontStyle: 'italic', fontWeight: 300 }}>where they stand.</em>
            </h2>
            <p style={{ fontSize: 'var(--std-intro-size)', color: 'var(--ink3)', lineHeight: 1.5, fontWeight: 300, marginBottom: 24, maxWidth: '90%' }}>
              Sales Managers set revenue and volume targets per distributor. Attainment updates automatically from confirmed invoices.
            </p>

            {/* Individual Feature Cards - Stretched to fill height */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              flex: 1 // Match vertical height
            }}>
              {[
                { icon: <Target size={18} />, title: 'Multi-level targeting', desc: 'Revenue, volume, and SKU-specific goals.' },
                { icon: <BarChart3 size={18} />, title: 'Real-time attainment', desc: 'Every invoice updates the attainment counter.' },
                { icon: <Zap size={18} />, title: 'Incentive scheme tiers', desc: 'Configure bonus thresholds in a few clicks.' },
                { icon: <TrendingUp size={18} />, title: 'Shortfall visibility', desc: 'Projected attainment based on current rate.' },
              ].map((item, i) => (
                <div key={i} style={{
                  flex: 1,
                  background: '#fff',
                  border: '1px solid rgba(11,22,40,.06)',
                  borderRadius: 16,
                  padding: '16px 20px',
                  boxShadow: '0 4px 12px rgba(11,22,40,.02)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  transition: 'transform .2s'
                }}>
                  <span style={{
                    width: 34, height: 34, borderRadius: 10,
                    background: 'rgba(24,184,122,.1)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', color: 'var(--green)', flexShrink: 0
                  }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>{item.title}</div>
                    <div style={{ fontSize: 11, color: 'var(--ink3)', lineHeight: 1.4, fontWeight: 300 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dashboard Card - Matching Heights */}
          <div className="s6-dashboard-column" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{
              background: 'var(--navy)',
              border: '1px solid rgba(255,255,255,.08)',
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 32px 64px rgba(0,0,0,.4)',
              flex: 1, // Stretch to match feature stack
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Card Header */}
              <div style={{
                background: 'rgba(255,255,255,.03)',
                borderBottom: '1px solid rgba(255,255,255,.08)',
                padding: '16px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--text2)', letterSpacing: 1.5, textTransform: 'uppercase' }}>Consolidated Dashboard</span>
                <div style={{ display: 'flex', gap: 6 }}>
                  {['JAN 2025', 'Q1 2025'].map((p, i) => (
                    <span key={i} style={{
                      fontSize: 9, padding: '4px 12px', borderRadius: 100, cursor: 'pointer',
                      background: i === 0 ? 'rgba(196,154,60,.15)' : 'rgba(255,255,255,.05)',
                      color: i === 0 ? 'var(--gold)' : 'var(--text3)',
                      border: `1px solid ${i === 0 ? 'rgba(196,154,60,.3)' : 'transparent'}`,
                      fontWeight: 700,
                    }}>{p}</span>
                  ))}
                </div>
              </div>

              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
                  {DISTRIBUTORS.map((dItem, i) => {
                    const dPct = Math.round((dItem.actual / dItem.target) * 100);
                    const dCol = dPct >= 80 ? 'var(--green)' : dPct >= 50 ? 'var(--gold)' : '#FF5F57';
                    return (
                      <div
                        key={i}
                        onClick={() => setSelected(i)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 12,
                          padding: '10px 14px',
                          background: selected === i ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.01)',
                          border: `1px solid ${selected === i ? 'rgba(196,154,60,.2)' : 'rgba(255,255,255,.05)'}`,
                          borderRadius: 12,
                          cursor: 'pointer',
                          transition: 'all .2s'
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text)' }}>{dItem.name}</div>
                          <div style={{ height: 3, background: 'rgba(255,255,255,.05)', borderRadius: 100, marginTop: 4, overflow: 'hidden' }}>
                            <div style={{ width: `${dPct}%`, height: '100%', background: dCol }} />
                          </div>
                        </div>
                        <div style={{ fontSize: 9, fontWeight: 800, color: dCol }}>{dPct}%</div>
                      </div>
                    );
                  })}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selected}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      borderRadius: 16,
                      padding: '24px 20px',
                      marginTop: 'auto'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{d.name}</div>
                        <div style={{ fontSize: 9, color: 'var(--text3)', marginTop: 4 }}>{d.region} · Jan 2025</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: 24, fontWeight: 300, color: 'var(--gold)', fontFamily: "'Fraunces', serif" }}>{pct}%</div>
                        <div style={{ fontSize: 8, color: 'var(--text3)', fontWeight: 600 }}>ATTAINMENT</div>
                      </div>
                    </div>

                    <AnimatedBar target={d.target} actual={d.actual} color="var(--gold)" />

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginTop: 12 }}>
                      {[
                        { l: 'Run Rate/Day', v: `₹${(runRate / 1000).toFixed(0)}K` },
                        { l: 'Projected', v: `${projPct}%` },
                        { l: 'Days Left', v: `${daysLeft}` }
                      ].map((m, i) => (
                        <div key={i} style={{ padding: '10px 4px', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: 8, textAlign: 'center' }}>
                          <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--text)' }}>{m.v}</div>
                          <div style={{ fontSize: 7, color: 'var(--text3)', textTransform: 'uppercase', marginTop: 4, fontWeight: 700 }}>{m.l}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 900px) {
          .s6-targets-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .s6-feature-stack {
            order: 1 !important;
          }
          .s6-dashboard-column {
            order: 2 !important;
          }
        }
      `}</style>
    </section>
  );
}
