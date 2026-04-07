'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, Filter, FileText, BarChart3, 
  ShieldAlert, Clock, Calendar, ChevronRight,
  FileSpreadsheet, FileArchive, CheckCircle2,
  Table as TableIcon
} from 'lucide-react';

const REPORTS = [
  {
    title: 'Web Orders Created',
    desc: 'Real-time record of all SORs with SKU-level details and ERP push status.',
    tag: 'Operational',
    metrics: [
      { label: 'Sync Success', value: '99.8%' },
      { label: 'Daily Vol', value: '₹4.2L' },
      { label: 'ERP Push', value: 'Live' }
    ],
    cols: ['SOR Ref', 'Distributor', 'Date', 'Status', 'Value'],
    rows: [
      ['SOR-0891', 'Apex Distributors', '12 Jan', 'Invoiced', '₹4,82,000'],
      ['SOR-0890', 'Metro Traders', '11 Jan', 'Accepted', '₹2,15,500'],
      ['SOR-0889', 'South Depot', '10 Jan', 'Dispatched', '₹6,30,000'],
      ['SOR-0888', 'North Hub', '9 Jan', 'Confirmed', '₹1,89,000'],
    ],
    statusColors: { 'Invoiced': 'var(--green)', 'Accepted': '#F5A623', 'Dispatched': 'var(--blue)', 'Confirmed': '#F5A623' },
    color: 'var(--blue)',
    icon: <FileText size={18} />,
  },
  {
    title: 'Target vs Actual Sales',
    desc: 'Attainment against configured targets across territories and timeframes.',
    tag: 'Commercial',
    metrics: [
      { label: 'Avg Attain', value: '78%' },
      { label: 'Shortfall', value: '₹12L' },
      { label: 'Region', value: 'All' }
    ],
    cols: ['Distributor', 'Target', 'Actual', 'Attainment', 'Shortfall'],
    rows: [
      ['Apex Distributors', '₹20L', '₹14.6L', '73%', '₹5.4L'],
      ['Metro Traders', '₹15L', '₹9.8L', '65%', '₹5.2L'],
      ['North Region Hub', '₹25L', '₹21.3L', '85%', '₹3.7L'],
      ['South Depot Co', '₹18L', '₹8.1L', '45%', '₹9.9L'],
    ],
    statusColors: { '73%': '#F5A623', '65%': '#F5A623', '85%': 'var(--green)', '45%': '#FF5F57' },
    color: 'var(--gold)',
    icon: <BarChart3 size={18} />,
  },
  {
    title: 'Claims Analysis',
    desc: 'Full claim lifecycle tracking with SLA compliance and resolution metrics.',
    tag: 'Finance',
    metrics: [
      { label: 'SLA Compl', value: '94%' },
      { label: 'Avg Res', value: '4.2d' },
      { label: 'Open', value: '12' }
    ],
    cols: ['Claim Ref', 'Type', 'Distributor', 'Amount', 'Status'],
    rows: [
      ['CLM-0041', 'Short Delivery', 'Apex', '₹48,000', 'Approved'],
      ['CLM-0040', 'Damaged Goods', 'Metro', '₹22,500', 'Pending'],
      ['CLM-0039', 'Pricing Dispute', 'North Hub', '₹15,000', 'Rejected'],
      ['CLM-0038', 'Short Delivery', 'South Depot', '₹31,000', 'Settled'],
    ],
    statusColors: { 'Approved': 'var(--green)', 'Pending': '#F5A623', 'Rejected': '#FF5F57', 'Settled': 'var(--blue)' },
    color: 'var(--green)',
    icon: <ShieldAlert size={18} />,
  },
];

export default function S8_Reports() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeReport, setActiveReport] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const report = REPORTS[activeReport];

  return (
    <section id="reports" ref={sectionRef} style={{
      background: 'var(--cream)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(11,22,40,.04) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        opacity: visible ? 1 : 0,
        transition: 'opacity 1s ease',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 'min(96vw,1280px)',
        margin: '0 auto',
        padding: '100px clamp(24px,4.8vw,84px)',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Section Header (Moved Above) */}
        <div style={{ maxWidth: 720, marginBottom: 60 }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 10,
              fontWeight: 700,
              color: 'var(--green)',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              marginBottom: 16,
            }}
          >
            <div style={{ width: 24, height: 1, background: 'var(--green)' }} />
            Commercial Intelligence
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
              fontWeight: 400,
              lineHeight: 1.04,
              letterSpacing: '-1.5px',
              color: 'var(--ink)',
              marginBottom: 24,
            }}
          >
            Reports that <em style={{ color: 'var(--green)', fontStyle: 'italic', fontWeight: 300 }}>drive decisions.</em>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '17px',
              color: 'var(--ink3)',
              lineHeight: 1.6,
              fontWeight: 300,
              maxWidth: '520px',
            }}
          >
            Access structured audits across orders, sales targets, and financial claims. Export for offline analysis or schedule automated delivery.
          </motion.p>
        </div>

        {/* Interaction Grid: Selectors | Dark Dashboard */}
        <div className="s8-reports-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 'clamp(24px, 4vw, 60px)',
          alignItems: 'stretch',
        }}>
          {/* Left Side: Report Selectors */}
          <div className="s8-selector-column" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}>
            {REPORTS.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={visible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                onClick={() => setActiveReport(i)}
                style={{
                  padding: '24px',
                  borderRadius: 20,
                  background: activeReport === i ? '#fff' : 'rgba(255,255,255,0.4)',
                  border: `1px solid ${activeReport === i ? 'rgba(24,184,122,.2)' : 'rgba(11,22,40,.06)'}`,
                  boxShadow: activeReport === i ? '0 12px 32px rgba(11,22,40,0.06)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                  position: 'relative',
                  overflow: 'hidden',
                }}
                whileHover={{ x: 6, background: '#fff' }}
              >
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  background: activeReport === i ? `${r.color}12` : 'rgba(11,22,40,0.03)',
                  color: activeReport === i ? r.color : 'var(--ink3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                }}>
                  {r.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>{r.title}</span>
                    <span style={{ fontSize: 8, fontWeight: 800, padding: '2px 6px', background: 'rgba(11,22,40,0.03)', borderRadius: 4, textTransform: 'uppercase', letterSpacing: 0.5, color: 'var(--ink3)' }}>{r.tag}</span>
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--ink3)', lineHeight: 1.4, fontWeight: 300, marginBottom: 12 }}>{r.desc}</div>
                  
                  {/* Quick Metrics Bar */}
                  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    {r.metrics.map((m, mi) => (
                      <div key={mi} style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <span style={{ fontSize: 8, fontWeight: 700, color: 'var(--ink3)', textTransform: 'uppercase', letterSpacing: 0.5 }}>{m.label}</span>
                        <span style={{ fontSize: 10, fontWeight: 800, color: activeReport === i ? r.color : 'var(--ink)' }}>{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {activeReport === i && (
                  <motion.div layoutId="activeTag" style={{ color: 'var(--green)' }}>
                    <ChevronRight size={18} />
                  </motion.div>
                )}
              </motion.div>
            ))}

            {/* Integration Note (Stays at bottom of left column) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              style={{
                marginTop: 'auto',
                background: 'rgba(11,22,40,0.02)',
                borderRadius: 16,
                padding: '16px 20px',
                border: '1px solid rgba(11,22,40,0.05)',
                display: 'flex',
                gap: 16,
                alignItems: 'center',
              }}
            >
              <div style={{ color: 'var(--green)' }}><Clock size={16} /></div>
              <p style={{ fontSize: 11, color: 'var(--ink3)', margin: 0, lineHeight: 1.5 }}>
                 Configure reports to be delivered on a daily or weekly cadence.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Dark Command Panel / Table */}
          <div className="s8-panel-column" style={{ display: 'flex', flexDirection: 'column' }}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeReport}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  flex: 1, // Fill available height in the grid row
                  background: 'var(--ink)', // DARK THEME
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 32,
                  boxShadow: '0 40px 80px rgba(0,0,0,0.3)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 560,
                }}
              >
                {/* Dark Panel Header */}
                <div style={{ 
                  padding: '24px 32px',
                  background: 'rgba(255,255,255,0.03)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ color: '#fff' }}>{report.icon}</div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{report.title}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button style={{ 
                      padding: '8px 16px', borderRadius: 10, fontSize: 11, fontWeight: 600,
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff',
                      display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer'
                    }}>
                      <Download size={14} /> Export
                    </button>
                    <button style={{ 
                      padding: '8px 16px', borderRadius: 10, fontSize: 11, fontWeight: 600,
                      background: '#fff', color: 'var(--ink)', border: 'none',
                      display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer'
                    }}>
                      <Calendar size={14} /> Schedule
                    </button>
                  </div>
                </div>

                {/* Sub-Header: Dark Filters */}
                <div style={{
                  padding: '12px 32px',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                    <Filter size={12} color="rgba(255,255,255,0.4)" />
                    {['Jan 2025', 'All Distributors'].map((f, i) => (
                      <span key={i} style={{ fontSize: 9, fontWeight: 600, color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: 4 }}>{f}</span>
                    ))}
                  </div>
                  <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 0.5 }}>Active Scope: All Regions</span>
                </div>

                {/* Data Viewport - Dark Mode */}
                <div style={{ flex: 1, padding: '24px 32px', overflowX: 'auto' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 0, minWidth: '400px' }}>
                    {/* Dark Table Header */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: `repeat(${report.cols.length}, 1fr)`,
                      paddingBottom: 16,
                      borderBottom: '1px solid rgba(255,255,255,0.1)',
                    }}>
                      {report.cols.map((col, i) => (
                        <span key={i} style={{ fontSize: 9, fontWeight: 800, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1 }}>{col}</span>
                      ))}
                    </div>
                    {/* Rows - Dark Mode */}
                    {report.rows.map((row, ri) => (
                      <motion.div
                        key={ri}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + ri * 0.05 }}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: `repeat(${report.cols.length}, 1fr)`,
                          padding: '20px 0',
                          borderBottom: '1px solid rgba(255,255,255,0.05)',
                          alignItems: 'center',
                        }}
                      >
                        {row.map((cell, ci) => {
                          const statusCol = (report.statusColors as any)[cell];
                          return (
                            <span key={ci} style={{
                              fontSize: 12,
                              color: statusCol ? statusCol : ci === 0 ? '#fff' : 'rgba(255,255,255,0.6)',
                              fontWeight: statusCol ? 700 : ci === 0 ? 600 : 300,
                              background: statusCol ? `${statusCol}20` : 'transparent',
                              padding: statusCol ? '4px 10px' : '0',
                              borderRadius: 6,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 6,
                            }}>
                              {statusCol && <span style={{ width: 6, height: 6, borderRadius: '50%', background: statusCol }} />}
                              {cell}
                            </span>
                          );
                        })}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Dark Footer Insight */}
                <div style={{
                  padding: '24px 32px',
                  background: 'rgba(255,255,255,0.02)',
                  borderTop: '1px solid rgba(255,255,255,0.04)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 'auto'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--green)' }} />
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>Live Sync Active: SAP ECC v2.4</span>
                  </div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}>Page 1 of 8</span>
                    <button style={{ background: 'none', border: 'none', padding: 0, color: '#fff', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>Next Insight →</button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 900px) {
          .s8-reports-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .s8-selector-column {
            order: 1 !important;
          }
          .s8-panel-column {
            order: 2 !important;
          }
        }
      `}</style>
    </section>
  );
}


