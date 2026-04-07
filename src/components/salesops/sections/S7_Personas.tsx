'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Package, CheckCircle, FileText, Truck,
  ShieldCheck, AlertCircle, Clock, ArrowRight,
  UserCheck, CreditCard, Receipt, MapPin,
  Download, Eye, Trash2, ArrowLeftRight,
  TrendingUp, Activity, BarChart3,
  FileSpreadsheet, ClipboardCheck,
  MousePointer2, Search, Bell, History
} from 'lucide-react';

const PERSONAS = [
  {
    id: 'dist',
    label: 'Distributor',
    tagline: 'The Partner Portal',
    desc: 'External partners place orders, track fulfilment, and monitor targets through a dedicated, simplified interface.',
    color: 'var(--gold)',
    colorRgb: '196,154,60',
    icon: <Package size={18} />,
    highlights: [
      { x: '20%', y: '30%', label: 'Sales vs. Target Tracker' },
      { x: '80%', y: '40%', label: 'Pending Proforma Acceptance' },
      { x: '50%', y: '85%', label: 'Recent Account Activity' }
    ]
  },
  {
    id: 'sm',
    label: 'Sales Manager',
    tagline: 'Internal Command Centre',
    desc: 'Review SORs, approve Proformas, set targets, and monitor portfolio-wide performance in real time.',
    color: 'var(--blue)',
    colorRgb: '52,112,240',
    icon: <ShieldCheck size={18} />,
    highlights: [
      { x: '15%', y: '40%', label: 'Approval Queue (SOR)' },
      { x: '85%', y: '35%', label: 'Portfolio Risk Analytics' },
      { x: '50%', y: '70%', label: 'Target & Incentive Setup' }
    ]
  },
  {
    id: 'log',
    label: 'Logistics Planner',
    tagline: 'Dispatch Planning',
    desc: 'Finalize pricing on Proformas, manage the Dispatch Plan, and calculate estimated delivery dates (ETA).',
    color: 'var(--green)',
    colorRgb: '24,184,122',
    icon: <History size={18} />,
    highlights: [
      { x: '25%', y: '30%', label: 'Dispatch Plan Table' },
      { x: '75%', y: '45%', label: 'Confirmed Pricing Engine' },
      { x: '50%', y: '85%', label: 'ETA Batch Upload' }
    ]
  },
  {
    id: 'dis',
    label: 'Dispatcher',
    tagline: 'Warehouse Execution',
    desc: 'Confirm physical dispatch, enter AWB tracking, and trigger ASNs to notify the distributor of shipment.',
    color: '#9C40F0',
    colorRgb: '156,64,240',
    icon: <Truck size={18} />,
    highlights: [
      { x: '20%', y: '40%', label: 'Manifest Confirmation' },
      { x: '80%', y: '35%', label: 'Live AWB Terminal' },
      { x: '50%', y: '80%', label: 'ASN Generator' }
    ]
  }
];

// --- Mini Dashboard Components ---

const DistDash = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}>
    {/* Top Row: Quick Metrics */}
    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 12 }}>
      <div style={{ padding: '16px', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12 }}>
        <div style={{ fontSize: 9, color: 'var(--text3)', textTransform: 'uppercase', marginBottom: 12 }}>Actual vs Target (MT)</div>
        <div style={{ height: 60, display: 'flex', alignItems: 'flex-end', gap: 4 }}>
          {[30, 45, 60, 40, 85, 70, 95].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: i * 0.05 }}
              style={{ flex: 1, background: i === 6 ? 'var(--gold)' : 'var(--blue)', opacity: i === 6 ? 1 : 0.4, borderRadius: '2px 2px 0 0' }}
            />
          ))}
        </div>
      </div>
      <div style={{ padding: '16px', background: 'rgba(196,154,60,.05)', border: '1px solid rgba(196,154,60,0.2)', borderRadius: 12, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)' }}>₹1.2M</div>
        <div style={{ fontSize: 9, color: 'var(--gold)', fontWeight: 600 }}>Attainment: 88%</div>
      </div>
    </div>

    {/* Middle Row: Quick Status */}
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
      {[
        { icon: <Receipt size={14} />, label: 'Pend. Acceptance', val: '04' },
        { icon: <Clock size={14} />, label: 'In Fulfilment', val: '12' },
        { icon: <MapPin size={14} />, label: 'Track Delivery', val: '08' },
        { icon: <Bell size={14} />, label: 'Unread Alert', val: '02' }
      ].map((card, i) => (
        <div key={i} style={{ padding: '12px', background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 10, textAlign: 'center' }}>
          <div style={{ color: 'var(--text3)', marginBottom: 6, display: 'flex', justifyContent: 'center' }}>{card.icon}</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{card.val}</div>
          <div style={{ fontSize: 8, color: 'var(--text3)', textTransform: 'uppercase', marginTop: 2 }}>{card.label}</div>
        </div>
      ))}
    </div>

    {/* Bottom: Activity */}
    <div style={{ padding: '12px', background: 'rgba(255,255,255,.03)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ fontSize: 9, color: 'var(--text3)', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
        <Activity size={10} /> Recent Activity
      </div>
      {[
        { event: 'Proforma #8022 Received', time: '2m ago' },
        { event: 'ETA Updated for #SOR-112', time: '1h ago' }
      ].map((ev, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, padding: '4px 0' }}>
          <span style={{ color: 'var(--text2)' }}>{ev.event}</span>
          <span style={{ color: 'var(--text3)' }}>{ev.time}</span>
        </div>
      ))}
    </div>
  </div>
);

const SMDash = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text)' }}>Distributor Portfolio</div>
      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ padding: '4px 10px', background: 'rgba(52,112,240,.1)', color: 'var(--blue)', fontSize: 9, borderRadius: 100, fontWeight: 600 }}>Active: 45</div>
        <div style={{ padding: '4px 10px', background: 'rgba(255,95,87,.1)', color: '#FF5F57', fontSize: 9, borderRadius: 100, fontWeight: 600 }}>Risk: 02</div>
      </div>
    </div>

    <div style={{ flex: 1, background: 'rgba(255,255,255,.02)', borderRadius: 12, border: '1px solid rgba(255,255,255,.05)', overflow: 'hidden' }}>
      <div style={{ padding: '10px 12px', background: 'rgba(255,255,255,.04)', display: 'grid', gridTemplateColumns: 'minmax(0,1.5fr) 1fr 1fr', fontSize: 9, color: 'var(--text3)', fontWeight: 600 }}>
        <span>PENDING APPROVAL</span>
        <span>VALUE</span>
        <span>CREDIT</span>
      </div>
      {[
        { name: 'S.S. Enterprises', val: '₹8.4L', credit: 'Healthy', color: '#28C840' },
        { name: 'Kushal Distributor', val: '₹14.2L', credit: 'High Risk', color: '#FF5F57' },
        { name: 'Global Logistics', val: '₹4.5L', credit: 'Healthy', color: '#28C840' },
        { name: 'Apex Tyres Ltd.', val: '₹2.1L', credit: 'Caution', color: '#FFBD2E' }
      ].map((row, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.5fr) 1fr 1fr', padding: '12px', borderTop: '1px solid rgba(255,255,255,.05)', alignItems: 'center' }}>
          <span style={{ fontSize: 10, color: 'var(--text)', fontWeight: 600 }}>{row.name}</span>
          <span style={{ fontSize: 10, color: 'var(--text2)' }}>{row.val}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: row.color }} />
            <span style={{ fontSize: 9, color: row.color }}>{row.credit}</span>
          </div>
        </div>
      ))}
    </div>

    <div style={{ display: 'flex', gap: 10 }}>
      <button style={{ flex: 1, background: 'var(--blue)', color: '#fff', border: 'none', padding: '10px', borderRadius: 8, fontSize: 10, fontWeight: 700 }}>Approval Queue (14)</button>
      <button style={{ flex: 1, background: 'rgba(255,255,255,.05)', color: 'var(--text2)', border: '1px solid var(--border)', padding: '10px', borderRadius: 8, fontSize: 10, fontWeight: 700 }}>Set Targets</button>
    </div>
  </div>
);

const LogDash = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}>
    <div style={{ padding: '16px', background: 'rgba(18,32,64,.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16 }}>
      <div style={{ fontSize: 10, color: 'var(--text3)', textTransform: 'uppercase', marginBottom: 12 }}>Confirmed Dispatch Plan</div>
      {[
        { ord: '#ERP-991', dest: 'Mumbai', eta: '18 Jan', status: 'Pricing OK' },
        { ord: '#ERP-102', dest: 'Delhi', eta: '20 Jan', status: 'Pending PF' }
      ].map((row, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 60px 80px', gap: 10, padding: '10px 0', borderTop: i > 0 ? '1px solid rgba(255,255,255,.05)' : 'none', alignItems: 'center' }}>
          <span style={{ fontSize: 9, color: 'var(--blue)', fontFamily: 'monospace' }}>{row.ord}</span>
          <span style={{ fontSize: 10, color: 'var(--text)' }}>{row.dest}</span>
          <span style={{ fontSize: 10, color: 'var(--text2)' }}>{row.eta}</span>
          <span style={{ fontSize: 9, color: 'var(--green)', padding: '2px 8px', background: 'rgba(40,200,64,.1)', borderRadius: 100, textAlign: 'center' }}>{row.status}</span>
        </div>
      ))}
    </div>

    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
      <div style={{ padding: '12px', background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.05)', borderRadius: 10 }}>
        <div style={{ fontSize: 9, color: 'var(--text3)', marginBottom: 8 }}>Freight Engine</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ height: 18, background: 'rgba(255,255,255,.04)', borderRadius: 4 }} />
          <div style={{ height: 18, background: 'rgba(255,255,255,.04)', borderRadius: 4 }} />
          <div style={{ fontSize: 9, color: 'var(--blue)', textAlign: 'right', marginTop: 4 }}>+ ₹8,500 Freight Calc</div>
        </div>
      </div>
      <div style={{ padding: '12px', background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.05)', borderRadius: 10 }}>
        <div style={{ fontSize: 9, color: 'var(--text3)', marginBottom: 8 }}>Batch ETA Actions</div>
        <button style={{ width: '100%', padding: '8px', background: 'rgba(255,255,255,.08)', border: 'none', borderRadius: 6, fontSize: 9, color: 'var(--text)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <Download size={12} /> CSV Upload
        </button>
      </div>
    </div>
  </div>
);

const DisDash = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text)' }}>Dispatch Terminal</div>
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#28C840', boxShadow: '0 0 10px #28C840' }} />
    </div>

    <div style={{ padding: '16px', background: 'rgba(0,0,0,.3)', border: '1px solid #333', borderRadius: 12, fontFamily: 'monospace' }}>
      <div style={{ fontSize: 9, color: '#28C840', marginBottom: 12 }}>SYSTEM://MANIFEST_EXECUTION</div>
      {[
        { label: 'REFR', val: 'MH-18-BQ-4509' },
        { label: 'UNIT', val: '1,200 KG' },
        { label: 'DEST', val: 'CHENNAI-DEPO' }
      ].map((line, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, fontSize: 10, marginBottom: 4 }}>
          <span style={{ color: 'rgba(40,200,64,.4)' }}>{line.label} &gt;</span>
          <span style={{ color: '#28C840' }}>{line.val}</span>
        </div>
      ))}
      <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
        <div style={{ padding: '4px 8px', background: 'rgba(40,200,64,.2)', border: '1px solid #28C840', color: '#28C840', fontSize: 9, borderRadius: 4 }}>CONFIRM DISPATCH</div>
        <div style={{ padding: '4px 8px', background: 'rgba(255,255,255,.05)', border: '1px solid #555', color: '#555', fontSize: 9, borderRadius: 4 }}>PRINT ASN</div>
      </div>
    </div>

    <div style={{ flex: 1, padding: '16px', background: 'rgba(255,255,255,.02)', borderRadius: 12, border: '1px solid rgba(255,255,255,.05)' }}>
      <div style={{ fontSize: 9, color: 'var(--text3)', marginBottom: 12 }}>Live AWB Status</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }} />
        <div style={{ flex: 1, height: 2, background: 'rgba(40,200,64,.3)', position: 'relative' }}>
          <motion.div animate={{ left: ['0%', '100%', '0%'] }} transition={{ duration: 3, repeat: Infinity }} style={{ position: 'absolute', top: -2, width: 6, height: 6, borderRadius: '50%', background: '#28C840' }} />
        </div>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,255,255,.1)' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 8, color: 'var(--text3)' }}>
        <span>LOADED</span>
        <span>TRANSIT</span>
        <span>ARRIVAL</span>
      </div>
    </div>
  </div>
);

// --- Main Section Component ---

/* ─────────────────────────────────────────────────────────
   SUB-COMPONENTS
   ───────────────────────────────────────────────────────── */

function DashboardFrame({ persona, activeIndex, isMobile, cursorPos, explainer }: {
  persona: any,
  activeIndex: number,
  isMobile?: boolean,
  cursorPos?: { x: string, y: string },
  explainer?: string
}) {
  return (
    <div style={{
      position: 'relative',
      marginTop: isMobile ? 12 : 0,
      marginBottom: isMobile ? 40 : 0,
      width: '100%',
    }}>
      <div style={{
        background: 'var(--surface)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: isMobile ? 16 : 24,
        overflow: 'hidden',
        boxShadow: '0 42px 100px rgba(0,0,0,.45)',
        padding: '6px',
        aspectRatio: isMobile ? '1 / 1' : '16 / 10',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Fake Window Header */}
        <div style={{
          height: isMobile ? 36 : 48,
          background: 'rgba(255,255,255,.04)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 12px',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', gap: 4 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF5F57' }} />
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFBD2E' }} />
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#28C840' }} />
          </div>
          {!isMobile && (
            <div style={{
              flex: 1, margin: '0 40px', height: 26, background: 'rgba(0,0,0,.3)', borderRadius: 6,
              display: 'flex', alignItems: 'center', padding: '0 12px'
            }}>
              <Search size={10} color="rgba(255,255,255,.2)" />
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,.2)', marginLeft: 8 }}>clientera.com/portal</span>
            </div>
          )}
          <div style={{ fontSize: 9, fontWeight: 700, color: persona.color }}>LIVE</div>
        </div>

        {/* Dashboard Content */}
        <div style={{ flex: 1, padding: isMobile ? '16px' : '24px', position: 'relative', overflow: 'hidden', background: '#090E1A' }}>
          <div style={{ height: '100%', zoom: isMobile ? 0.85 : 1 }}>
            {activeIndex === 0 && <DistDash />}
            {activeIndex === 1 && <SMDash />}
            {activeIndex === 2 && <LogDash />}
            {activeIndex === 3 && <DisDash />}
          </div>

          {/* Guided Cursor Overlay (only for desktop or active mobile) */}
          {!isMobile && cursorPos && (
            <motion.div
              animate={{ left: cursorPos.x, top: cursorPos.y }}
              transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              style={{
                position: 'absolute',
                zIndex: 100,
                pointerEvents: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                alignItems: 'flex-start'
              }}
            >
              <MousePointer2 size={24} color={persona.color} fill={persona.color} style={{ transform: 'rotate(-15deg) drop-shadow(0 2px 4px rgba(0,0,0,.4))' }} />
              <motion.div
                key={explainer}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 10 }}
                style={{
                  background: persona.color,
                  color: 'var(--navy)',
                  padding: '6px 14px',
                  borderRadius: 100,
                  fontSize: 10,
                  fontWeight: 800,
                  whiteSpace: 'nowrap',
                  boxShadow: '0 8px 32px rgba(0,0,0,.3)',
                  textTransform: 'uppercase'
                }}
              >
                {explainer}
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function S7_Personas() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: '20%', y: '30%' });
  const [explainer, setExplainer] = useState('');

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const highlights = PERSONAS[active].highlights;
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % highlights.length;
      setCursorPos({ x: highlights[idx].x, y: highlights[idx].y });
      setExplainer(highlights[idx].label);
    }, 4000);
    setCursorPos({ x: highlights[0].x, y: highlights[0].y });
    setExplainer(highlights[0].label);
    return () => clearInterval(interval);
  }, [active]);

  const p = PERSONAS[active];

  return (
    <section ref={sectionRef} id="live-views" style={{ background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        .s7-grid { display: grid; grid-template-columns: minmax(0,380px) minmax(0,1fr); gap: 64px; align-items: start; }
        .s7-mobile { display: none; }
        @media (max-width: 900px) {
          .s7-grid { display: none; }
          .s7-mobile { display: flex; flex-direction: column; gap: 0; }
        }
      `}</style>

      {/* Background radial glow */}
      <div style={{
        position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)',
        width: 1000, height: 600, background: `radial-gradient(ellipse,rgba(${p.colorRgb},.08) 0%,transparent 70%)`,
        pointerEvents: 'none', transition: 'background .8s',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '100px clamp(24px,4.8vw,80px)', position: 'relative' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
          <div className="eyebrow" style={{ color: 'var(--gold)', justifyContent: 'center', marginBottom: 16 }}>
            <span style={{ width: 18, height: 1, background: 'var(--gold)' }} />
            Live Platform Views
            <span style={{ width: 18, height: 1, background: 'var(--gold)' }} />
          </div>
          <h2 className="h2 h2-white" style={{ marginBottom: 16 }}>
            Experience the system from <em style={{ color: 'var(--gold)', fontStyle: 'italic', fontWeight: 300 }}>all angles.</em>
          </h2>
          <p className="lead" style={{ color: 'var(--text2)', margin: '0 auto', textAlign: 'center' }}>
            Automated walkthroughs of the Distributor Portal and Internal Platform.
          </p>
        </div>

        {/* ── Desktop View ── */}
        <div className="s7-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {PERSONAS.map((persona, i) => (
              <motion.div
                key={persona.id}
                onClick={() => setActive(i)}
                style={{
                  padding: '24px', borderRadius: 20,
                  background: active === i ? `rgba(${persona.colorRgb},.08)` : 'rgba(255,255,255,.02)',
                  border: `1px solid ${active === i ? persona.color : 'rgba(255,255,255,0.05)'}`,
                  cursor: 'pointer', transition: 'all .3s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: active === i ? persona.color : 'rgba(255,255,255,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: active === i ? 'var(--navy)' : 'var(--text2)' }}>{persona.icon}</div>
                  <div>
                    <div style={{ fontSize: 9, fontWeight: 700, color: persona.color, textTransform: 'uppercase', letterSpacing: 1.5 }}>{persona.tagline}</div>
                    <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--text)' }}>{persona.label}</div>
                  </div>
                </div>
                {active === i && (
                  <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} style={{ fontSize: 13, color: 'var(--text3)', lineHeight: 1.6, marginTop: 16, marginBottom: 0, fontWeight: 300 }}>
                    {persona.desc}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
          <DashboardFrame persona={p} activeIndex={active} cursorPos={cursorPos} explainer={explainer} />
        </div>

        {/* ── Mobile View (Tabs) ── */}
        <div className="s7-mobile">
            {/* Horizontal Persona Selector Container */}
            <div style={{
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.5)',
                borderRadius: 24,
                padding: '16px',
                marginBottom: 24,
                boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
                overflow: 'hidden'
            }}>
                <div className="s7-nav-mobile" style={{
                    display: 'flex',
                    flexWrap: 'nowrap', // Explicitly disable wrapping
                    gap: 12,
                    overflowX: 'auto',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    paddingBottom: 4, 
                }}>
                    {PERSONAS.map((persona, i) => (
                        <div 
                            key={persona.id}
                            onClick={() => setActive(i)}
                            style={{
                                padding: '10px 18px',
                                background: active === i ? persona.color : 'transparent',
                                borderRadius: 12,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10,
                                whiteSpace: 'nowrap',
                                cursor: 'pointer',
                                transition: 'all .3s ease',
                                flexShrink: 0
                            }}
                        >
                            {/* Dot Indicator */}
                            <div style={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                background: active === i ? 'rgba(255,255,255,0.8)' : persona.color,
                                boxShadow: active === i ? '0 0 8px rgba(255,255,255,0.5)' : 'none'
                            }} />
                            <span style={{ 
                                fontSize: 13, 
                                fontWeight: 700, 
                                color: active === i ? '#fff' : 'rgba(11,22,40,0.6)' 
                            }}>
                                {persona.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Active Dashboard */}
            <AnimatePresence mode="wait">
                <motion.div 
                    key={active}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                >
                    <div style={{
                        padding: '24px', borderRadius: '20px 20px 0 0',
                        background: `rgba(${p.colorRgb},.08)`,
                        border: `1px solid ${p.color}`, borderBottom: 'none'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                            <div style={{ width: 40, height: 40, borderRadius: 10, background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy)' }}>{p.icon}</div>
                            <div>
                                <div style={{ fontSize: 9, fontWeight: 700, color: p.color, textTransform: 'uppercase', letterSpacing: 1.5 }}>{p.tagline}</div>
                                <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--text)' }}>{p.label}</div>
                            </div>
                        </div>
                        <p style={{ fontSize: 13, color: 'var(--text3)', lineHeight: 1.6, marginTop: 16, marginBottom: 0, fontWeight: 300 }}>
                            {p.desc}
                        </p>
                    </div>
                    <DashboardFrame persona={p} activeIndex={active} isMobile={true} />
                </motion.div>
            </AnimatePresence>
        </div>

        <style jsx>{`
            .s7-nav-mobile::-webkit-scrollbar {
                display: none;
            }
        `}</style>
      </div>
    </section>
  );
}
