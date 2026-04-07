'use client';

import { useEffect, useRef, useState } from 'react';

const FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
    title: 'SOR Approval Workflow',
    desc: 'Multi-step internal approval — Sales Manager review, operations pricing, proforma creation, and distributor acceptance — in one structured flow.',
    highlights: ['Credit limit check', 'SOR recall mechanism', 'Privileged field edit'],
    color: 'var(--gold)',
    colorRgb: '196,154,60',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: 'Proforma Invoice Engine',
    desc: 'Structured Proforma with confirmed pricing, freight, GST, and payment terms. SM approval loop until correct, then one-click distributor acceptance.',
    highlights: ['Approval loop', 'SM return to ops', 'Auto distributor notify'],
    color: '#F5A623',
    colorRgb: '245,165,35',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'ETA & Dispatch Tracking',
    desc: 'Logistics Planner sets ETA, builds the Dispatch Plan, and Dispatcher confirms shipment details. ASN is auto-generated with courier, vehicle and AWB.',
    highlights: ['Dispatch Plan view', 'ASN generation', 'Real-time ETA'],
    color: 'var(--blue)',
    colorRgb: '52,112,240',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Targets & Incentive Schemes',
    desc: 'Sales Manager configures revenue, volume, and SKU-level targets per distributor. Attainment updates in real-time from confirmed invoices.',
    highlights: ['SKU-level targets', 'Shortfall tracking', 'Incentive tiers'],
    color: 'var(--green)',
    colorRgb: '24,184,122',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: 'Claims Management',
    desc: 'Distributors submit claims with evidence. Internal team reviews, processes, and resolves with full SLA enforcement and audit trail per claim.',
    highlights: ['SLA enforcement', 'Evidence upload', 'Resolution tracking'],
    color: '#9C40F0',
    colorRgb: '156,64,240',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Reports & Audit Trail',
    desc: 'Four structured reports — User Logins, Web Orders, Claims Details, Target vs Actual — plus a complete permanent audit trail of every action on every entity.',
    highlights: ['4 report types', 'Scheduled delivery', 'Full audit log'],
    color: 'var(--text2)',
    colorRgb: '143,163,192',
  },
];

export default function S5_Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{
      background: 'var(--navy2)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top accent */}
      <div style={{
        position: 'absolute',
        top: -200,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 800,
        height: 600,
        background: 'radial-gradient(ellipse,rgba(196,154,60,.04) 0%,transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 'min(96vw,1280px)',
        margin: '0 auto',
        padding: '80px clamp(24px,4.8vw,84px)',
        position: 'relative',
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          maxWidth: 620,
          margin: '0 auto 52px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(22px)',
          transition: 'opacity .7s, transform .7s',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 11,
            fontWeight: 500,
            color: 'var(--gold)',
            textTransform: 'uppercase',
            letterSpacing: '2.5px',
            marginBottom: 16,
            justifyContent: 'center',
          }}>
            <span style={{ width: 18, height: 1, background: 'var(--gold)', display: 'block' }} />
            Platform Capabilities
            <span style={{ width: 18, height: 1, background: 'var(--gold)', display: 'block' }} />
          </div>
          <h2 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'var(--std-h2-size)',
            fontWeight: 400,
            lineHeight: 1.06,
            letterSpacing: '-1.2px',
            color: 'var(--text)',
            marginBottom: 16,
          }}>
            Built for <em style={{ color: 'var(--gold)', fontStyle: 'italic', fontWeight: 300 }}>every scenario</em> in distributor ops.
          </h2>
          <p style={{ fontSize: 'var(--std-intro-size)', color: 'var(--text2)', lineHeight: 1.65, fontWeight: 300 }}>
            Six core modules that cover the complete commercial relationship — from the first SOR to the last audit entry.
          </p>
        </div>

        {/* Feature grid */}
        <div className="s5-feature-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: 18,
        }}>
          {FEATURES.map((f, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: 'var(--navy)',
                border: `1px solid ${hovered === i ? `rgba(${f.colorRgb},.25)` : 'rgba(255,255,255,.04)'}`,
                borderRadius: 20,
                padding: '28px 26px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
                transition: 'all .35s ease',
                transform: hovered === i ? 'translateY(-4px)' : 'none',
                boxShadow: hovered === i ? `0 20px 56px rgba(0,0,0,.35), 0 0 40px rgba(${f.colorRgb},.06)` : 'none',
                opacity: visible ? 1 : 0,
                transitionDelay: visible ? `${i * 0.06}s` : '0s',
              }}
            >
              {/* Hover glow */}
              <div style={{
                position: 'absolute',
                top: -50,
                right: -50,
                width: 160,
                height: 160,
                borderRadius: '50%',
                background: `rgba(${f.colorRgb},.25)`,
                filter: 'blur(44px)',
                opacity: hovered === i ? 1 : 0,
                transition: 'opacity .4s',
                pointerEvents: 'none',
              }} />

              {/* Top shimmer */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 1,
                background: hovered === i
                  ? `linear-gradient(90deg,transparent,rgba(${f.colorRgb},.5),transparent)`
                  : 'linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent)',
                transition: 'background .3s',
              }} />

              {/* Icon */}
              <div style={{
                width: 46,
                height: 46,
                borderRadius: 12,
                background: `rgba(${f.colorRgb},.12)`,
                border: `1px solid rgba(${f.colorRgb},.22)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 18,
                color: f.color,
                transition: 'transform .3s',
                transform: hovered === i ? 'scale(1.08) rotate(-3deg)' : 'none',
              }}>
                {f.icon}
              </div>

              <h3 style={{
                fontFamily: "'Fraunces', serif",
                fontSize: 'clamp(17px,1.2vw,21px)',
                fontWeight: 400,
                color: 'var(--text)',
                marginBottom: 10,
                letterSpacing: '-.2px',
              }}>{f.title}</h3>

              <p style={{
                fontSize: 'clamp(13px,.85vw,15px)',
                lineHeight: 1.66,
                color: hovered === i ? 'rgba(255,255,255,.72)' : 'rgba(255,255,255,.48)',
                transition: 'color .3s',
                marginBottom: 16,
              }}>{f.desc}</p>

              {/* Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {f.highlights.map((h, hi) => (
                  <div key={hi} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 7,
                    fontSize: 11.5,
                    color: 'var(--text3)',
                    transition: 'color .2s',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={f.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {h}
                  </div>
                ))}
              </div>

              {/* Arrow */}
              <div style={{
                position: 'absolute',
                bottom: 22,
                right: 22,
                color: 'rgba(255,255,255,.15)',
                opacity: hovered === i ? 1 : 0,
                transform: hovered === i ? 'translate(0,0)' : 'translate(-4px,4px)',
                transition: 'all .3s',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    <style jsx>{`
      @media (max-width: 900px) {
        .s5-feature-grid {
          display: flex !important;
          flex-direction: row !important;
          overflow-x: auto !important;
          scroll-snap-type: x mandatory !important;
          gap: 16px !important;
          padding-bottom: 20px !important;
          padding-left: 2px !important;
          padding-right: 2px !important;
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
        .s5-feature-grid::-webkit-scrollbar {
          display: none !important;
        }
        .s5-feature-grid > div {
          flex: 0 0 calc(75vw - 24px) !important;
          scroll-snap-align: center !important;
        }
      }
    `}</style>
    </section>
  );
}
