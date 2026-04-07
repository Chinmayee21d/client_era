'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Package, CheckCircle, FileText, Truck, 
  ShieldCheck, AlertCircle, Clock, ArrowRight,
  UserCheck, CreditCard, Receipt, MapPin,
  Download, Eye, Trash2, ArrowLeftRight,
  Search, Filter, Info, ChevronRight,
  TrendingUp, Activity, BarChart3, 
  FileSpreadsheet, ClipboardCheck
} from 'lucide-react';

const LIFECYCLE_STEPS = [
  {
    id: 'sor',
    title: 'Order Placement (SOR)',
    desc: 'Distributors browse their authorised product catalogue and submit Suggested Order Requests with line items, quantities, and notes.',
    tags: ['SOR Portal', 'SKU Auth', 'Recall Available'],
    color: 'var(--gold)',
    icon: <Package size={16} />,
    panelTitle: 'Distributor creates SOR',
    status: { label: 'Order Requested', color: 'var(--gold)' },
  },
  {
    id: 'approval',
    title: 'SOR Review & Approval',
    desc: 'The Sales Manager reviews the SOR — checks credit limit, order history, and SKU authorizations before forwarding to operations.',
    tags: ['Credit Check', 'Risk Analytics', 'SM Approval'],
    color: '#F5A623',
    icon: <ShieldCheck size={16} />,
    panelTitle: 'Sales Manager Review',
    status: { label: 'In Analysis', color: '#F5A623' },
  },
  {
    id: 'proforma',
    title: 'Proforma Invoice',
    desc: 'Operations finalizes pricing, freight, and taxes. The distributor must formally accept the Proforma to push the order to SAP/ERP.',
    tags: ['Tax Breakdown', 'ERP Integration', 'Confirm Order'],
    color: 'var(--blue)',
    icon: <Receipt size={16} />,
    panelTitle: 'Proforma Finalization',
    status: { label: 'Pending Acceptance', color: 'var(--blue)' },
  },
  {
    id: 'dispatch',
    title: 'ETA & Dispatch',
    desc: 'Logistics sets the delivery schedule. Dispatcher confirms vehicle and AWB details. ASN is generated and tracked in real-time.',
    tags: ['ASN Tracking', 'Live Logistics', 'Blue Dart'],
    color: 'var(--green)',
    icon: <Truck size={16} />,
    panelTitle: 'Logistics Command',
    status: { label: 'In Transit', color: 'var(--green)' },
  },
  {
    id: 'invoice',
    title: 'Invoice & Settlement',
    desc: 'The final Tax Invoice is mirrored from the ERP. Revenue is attributed to targets, and payment settlement is verified.',
    tags: ['ERP Invoiced', 'Revenue Credit', 'Settled'],
    color: '#C49A3C',
    icon: <FileText size={16} />,
    panelTitle: 'Final ERP Invoicing',
    status: { label: 'Settled', color: '#C49A3C' },
  },
];

export default function S3_Workflow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const step = LIFECYCLE_STEPS[activeStep];

  // Logic-dense Dashboard Components
  const SORDash = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 16, height: '100%' }}
    >
      {/* Left: Product Explorer Sidebar */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, borderRight: '1px solid rgba(255,255,255,.05)', paddingRight: 16 }}>
        <div style={{ fontSize: 9, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4 }}>SKU Authorization</div>
        {[
          { cat: 'Application', val: 'Industrial' },
          { cat: 'Segment', val: 'Heavy Duty' },
          { cat: 'Category', val: 'Maintenance' }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
            style={{ 
              padding: '10px 12px', 
              background: 'rgba(255,255,255,.03)', 
              borderRadius: 8, 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              border: '1px solid rgba(255,255,255,.03)'
            }}
          >
            <span style={{ fontSize: 10, color: 'var(--text3)' }}>{item.cat}</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--gold)' }}>{item.val}</span>
          </motion.div>
        ))}
        <div style={{ flex: 1 }} />
        <div style={{ padding: '12px', borderRadius: 10, background: 'rgba(196,154,60,.05)', border: '1px dashed var(--gold)' }}>
          <div style={{ fontSize: 10, color: 'var(--gold)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
            <Info size={12} /> Recall Available
          </div>
          <div style={{ fontSize: 9, color: 'rgba(196,154,60,0.7)', marginTop: 4 }}>Editable until Sales Manager opens record</div>
        </div>
      </div>

      {/* Right: Active Cart */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text)' }}>SOR Sumary</div>
          <div style={{ fontSize: 9, color: 'var(--text3)' }}>Ref: #CE-SOR-2024</div>
        </div>
        <div style={{ flex: 1, background: 'rgba(255,255,255,.02)', borderRadius: 12, border: '1px solid rgba(255,255,255,.05)', padding: '4px' }}>
          {[
            { sku: 'IND-9920-A', qty: '800', unit: 'UOM-5L', status: '✓ OK' },
            { sku: 'SEG-1102-B', qty: '1,200', unit: 'MT', status: '✓ OK' },
            { sku: 'HD-801-XP', qty: '450', unit: 'Units', status: '✓ OK' },
            { sku: 'HD-822-XP', qty: '150', unit: 'Units', status: '✓ OK' }
          ].map((row, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              style={{ 
                display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 60px 40px', 
                padding: '10px 12px', gap: 8,
                borderBottom: i < 3 ? '1px solid rgba(255,255,255,.05)' : 'none' 
              }}
            >
              <span style={{ fontSize: 10, color: 'var(--text)', fontWeight: 600 }}>{row.sku}</span>
              <span style={{ fontSize: 10, color: 'var(--text2)', textAlign: 'right' }}>{row.qty} {row.unit}</span>
              <span style={{ fontSize: 9, color: 'var(--green)', textAlign: 'right', fontWeight: 600 }}>{row.status}</span>
            </motion.div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{ flex: 1, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: 8, color: 'var(--text2)', fontSize: 10, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <Trash2 size={12} /> Recall
          </button>
          <button style={{ flex: 1.5, background: 'var(--gold)', border: 'none', padding: '12px', borderRadius: 8, color: 'var(--navy)', fontWeight: 700, fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            Submit Order <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );

  const ReviewDash = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}
    >
      {/* Top: SM Scoreboard */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {[
          { label: 'Credit Health', val: '84%', icon: <CreditCard size={14} />, color: '#28C840' },
          { label: 'Risk Score', val: 'Low', icon: <Activity size={14} />, color: 'var(--blue)' },
          { label: 'Rev Impact', val: '₹4.2M', icon: <TrendingUp size={14} />, color: 'var(--gold)' }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            style={{ 
              padding: '16px 12px', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12,
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6
            }}
          >
            <div style={{ color: stat.color, opacity: 0.8 }}>{stat.icon}</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>{stat.val}</div>
            <div style={{ fontSize: 9, color: 'var(--text3)', textTransform: 'uppercase' }}>{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Main Content: Dual List */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, flex: 1 }}>
        {/* Checklist */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 10, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 4 }}>Approval Checklist</div>
          {[
            { label: 'KYC Verification', done: true },
            { label: 'Limit Authorization', done: true },
            { label: 'SKU Entitlement', done: true },
            { label: 'Margin Validation', done: false }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: 'rgba(255,255,255,.02)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.05)' }}
            >
              {item.done ? <CheckCircle size={14} color="#28C840" /> : <Clock size={14} color="rgba(255,255,255,0.2)" />}
              <span style={{ fontSize: 11, color: item.done ? 'var(--text)' : 'var(--text3)' }}>{item.label}</span>
            </motion.div>
          ))}
        </div>
        {/* Historical Context */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, background: 'rgba(255,255,255,.02)', padding: '16px', borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text2)', display: 'flex', alignItems: 'center', gap: 6 }}>
            <BarChart3 size={12} /> Distributor Trend
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: 4 }}>
            {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
              <motion.div 
                key={i} 
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.6 }}
                style={{ flex: 1, background: i === 6 ? 'var(--gold)' : 'var(--blue)', opacity: i === 6 ? 1 : 0.4, borderRadius: '4px 4px 0 0' }} 
              />
            ))}
          </div>
          <div style={{ fontSize: 9, color: 'var(--text3)', textAlign: 'center' }}>Q1 Attribution Growth Tracker</div>
        </div>
      </div>
    </motion.div>
  );

  const ProformaDash = () => (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 16, height: '100%', alignItems: 'stretch' }}
    >
      {/* Main: Tax Invoice Document */}
      <div style={{ background: 'rgba(18,32,64,.5)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)', padding: '24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,.1)', paddingBottom: 12 }}>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: 14, color: 'var(--text)' }}>Tax Proforma #PF-8022</div>
          <div style={{ fontSize: 10, color: 'var(--gold)', fontWeight: 600 }}>NET PAYABLE: ₹4,82,000.00</div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { label: 'SOR Base Value', val: '₹4,00,000' },
            { label: 'Logistics/Freight', val: '₹8,500' },
            { label: 'Handling Charges', val: '₹2,100' },
            { label: 'IGST @ 18%', val: '₹71,400' }
          ].map((line, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11 }}
            >
              <span style={{ color: 'var(--text3)' }}>{line.label}</span>
              <span style={{ color: 'var(--text)', fontWeight: 600 }}>{line.val}</span>
            </motion.div>
          ))}
        </div>
        <div style={{ padding: '12px', background: 'var(--blue)', borderRadius: 10, textAlign: 'center', color: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <CheckCircle size={18} /> Confirm & Accept
        </div>
      </div>

      {/* Sidebar: Metadata & Terms */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ padding: '16px', background: 'rgba(255,255,255,.03)', borderRadius: 12, border: '1px solid rgba(255,255,255,.05)' }}>
          <div style={{ fontSize: 10, color: 'var(--text3)', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
            <UserCheck size={12} /> Payment Terms
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>Net 45 Days</div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,.3)', marginTop: 4 }}>Unconditional as per Master Agreement</div>
        </div>
        <div style={{ padding: '16px', background: 'rgba(255,255,255,.03)', borderRadius: 12, border: '1px solid rgba(255,255,255,.05)', flex: 1 }}>
          <div style={{ fontSize: 10, color: 'var(--text3)', marginBottom: 12 }}>Proforma Validity</div>
          <div style={{ fontSize: 24, fontFamily: "'Fraunces', serif", color: '#FF5F57' }}>48:22:15</div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,.3)', marginTop: 6, textTransform: 'uppercase', letterSpacing: 1 }}>Auto-expiry countdown</div>
          <div style={{ marginTop: 20, padding: '10px', background: 'rgba(255,255,255,.04)', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            <FileSpreadsheet size={14} color="var(--gold)" />
            <span style={{ fontSize: 10, color: 'var(--text2)' }}>Detailed Ledger</span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const InvoiceDash = () => (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 16, height: '100%' }}
    >
      {/* Left: Final Tax Invoice */}
      <div style={{ background: 'rgba(255,255,255,.03)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)', padding: '24px', display: 'flex', flexDirection: 'column', gap: 16, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: -20, right: -20, opacity: 0.03, zIndex: 0, pointerEvents: 'none' }}><FileText size={140} /></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,.1)', paddingBottom: 12 }}>
          <div style={{ fontSize: 10, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 1 }}>Tax Invoice #INV-2024-082</div>
          <div style={{ fontSize: 10, background: '#28C84020', color: '#28C840', padding: '2px 8px', borderRadius: 4, fontWeight: 700 }}>PAID</div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { label: 'Subtotal', val: '₹4,10,600' },
            { label: 'Taxes (IGST 18%)', val: '₹73,908' },
            { label: 'Round Off', val: '-₹0.08' },
            { label: 'Adjustments', val: 'None' }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11 }}>
              <span style={{ color: 'var(--text3)' }}>{item.label}</span>
              <span style={{ color: 'var(--text2)', fontWeight: 500 }}>{item.val}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,.1)', paddingTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 9, color: 'var(--text3)', textTransform: 'uppercase' }}>Grand Total</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', fontFamily: "'Fraunces', serif" }}>₹4,84,500</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{ flex: 1, height: 36, borderRadius: 8, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', color: 'var(--text2)', fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }} title="Download Invoice">
              <Download size={14} /> Download Invoice
            </button>
            <button style={{ flex: 1, height: 36, borderRadius: 8, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', color: 'var(--text2)', fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }} title="View Ledger">
              <FileSpreadsheet size={14} /> View Ledger
            </button>
          </div>
        </div>
      </div>

      {/* Right: Revenue Attribution Gauge */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ flex: 1, padding: '20px', background: 'rgba(196,154,60,.03)', borderRadius: 16, border: '1px solid rgba(196,154,60,.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 16 }}>
          <div style={{ position: 'relative', width: 100, height: 100 }}>
            <svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
              <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
              <motion.circle 
                initial={{ strokeDasharray: "0, 283" }}
                animate={{ strokeDasharray: "220, 283" }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                cx="50" cy="50" r="45" fill="none" stroke="var(--gold)" strokeWidth="8" strokeLinecap="round" 
              />
            </svg>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 18, fontWeight: 800, color: 'var(--gold)' }}>84%</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 10, color: 'var(--text)', fontWeight: 700, marginBottom: 4 }}>Target Attainment</div>
            <div style={{ fontSize: 9, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 0.5 }}>Monthly Revenue Plan</div>
          </div>
        </div>

        <div style={{ padding: '16px', background: 'rgba(255,255,255,.03)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontSize: 9, color: 'var(--text3)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
            <TrendingUp size={12} color="var(--gold)" /> Commercial Impact
          </div>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>+ ₹4.84L</div>
          <div style={{ fontSize: 9, color: 'var(--text3)', marginTop: 4 }}>Attributed to: [Distributor_ID]</div>
        </div>
      </div>
    </motion.div>
  );

  const DispatchDash = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}
    >
      {/* Shipment Manifest Card */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,0.8fr)', gap: 16 }}>
        <div style={{ padding: '20px', background: 'linear-gradient(135deg, rgba(40,200,64,.08), rgba(40,200,64,.02))', border: '1px solid rgba(40,200,64,.2)', borderRadius: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div>
              <div style={{ fontSize: 10, color: 'var(--text3)', textTransform: 'uppercase', fontWeight: 600 }}>Tracking Reference</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', fontFamily: 'monospace' }}>BD-722188402</div>
            </div>
            <div style={{ width: 44, height: 44, background: '#28C840', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <Truck size={24} />
            </div>
          </div>
          <div style={{ fontSize: 11, color: 'var(--text2)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <MapPin size={14} color="#28C840" />
            Transit Hub: Destination Depot (Nagpur-B)
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ flex: 1, padding: '12px 16px', background: 'rgba(255,255,255,.03)', borderRadius: 12, border: '1px solid rgba(255,255,255,.05)' }}>
            <div style={{ fontSize: 9, color: 'var(--text3)', marginBottom: 4 }}>Vehicle No.</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)' }}>MH-18-BQ-4509</div>
          </div>
          <button style={{ padding: '12px', background: 'rgba(255,255,255,.05)', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--text2)', fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center' }}>
            <Download size={14} /> ASN Dispatch Slip
          </button>
        </div>
      </div>

      {/* Modern Logistics Timeline */}
      <div style={{ flex: 1, position: 'relative', padding: '10px 0' }}>
        <div style={{ fontSize: 10, color: 'var(--text3)', marginBottom: 24, textTransform: 'uppercase', letterSpacing: 1.5 }}>Logistics Command Center</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
          {/* Connector Line */}
          <div style={{ position: 'absolute', top: 12, left: 10, right: 10, height: 2, background: 'rgba(255,255,255,.1)', zIndex: 0 }}>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '75%' }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              style={{ height: '100%', background: '#28C840' }} 
            />
          </div>
          {['Factory', 'Port', 'Transit', 'Depot', 'Delivered'].map((node, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
            >
              <div style={{ 
                width: 24, height: 24, borderRadius: '50%', background: i <= 3 ? '#28C840' : 'var(--navy)', 
                border: `2px solid ${i <= 3 ? '#28C840' : 'rgba(255,255,255,.1)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {i < 3 ? <CheckCircle size={14} color="#fff" strokeWidth={3} /> : i === 3 ? <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff' }} /> : null}
              </div>
              <span style={{ fontSize: 9, fontWeight: 700, color: i <= 3 ? 'var(--text)' : 'var(--text3)' }}>{node}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="workflow" ref={sectionRef} style={{
      background: 'var(--navy)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: 'min(96vw,1280px)',
        margin: '0 auto',
        padding: '80px clamp(24px,4.8vw,84px)',
        position: 'relative',
      }}>
        {/* Header */}
        <div style={{
          maxWidth: 640,
          marginBottom: 56,
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
          }}>
            <span style={{ width: 18, height: 1, background: 'var(--gold)', display: 'block' }} />
            Distributor Lifecycle
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
            From order request to <em style={{ color: 'var(--gold)', fontStyle: 'italic', fontWeight: 300 }}>invoice settled.</em>
          </h2>
          <p style={{ fontSize: 'var(--std-intro-size)', color: 'var(--text2)', lineHeight: 1.65, fontWeight: 300 }}>
            Every step in the fulfilment chain is documented, visible, and actionable — by the right person at the right time.
          </p>
        </div>

        {/* Two-col layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(24px,4vw,64px)',
          alignItems: 'stretch',
        }}>
          {/* Left: Interactive Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {LIFECYCLE_STEPS.map((s, i) => (
              <div
                key={s.id}
                onClick={() => setActiveStep(i)}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                  padding: '22px 0',
                  borderBottom: i < LIFECYCLE_STEPS.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  cursor: 'pointer',
                  position: 'relative',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'none' : 'translateY(16px)',
                  transition: `opacity .6s ${i * 0.1}s, transform .6s ${i * 0.1}s`,
                }}
              >
                {/* Active bar */}
                <div style={{
                  position: 'absolute',
                  left: -20,
                  top: 0,
                  bottom: 0,
                  width: 2,
                  background: s.color,
                  transform: activeStep === i ? 'scaleY(1)' : 'scaleY(0)',
                  transformOrigin: 'top',
                  transition: 'transform .4s cubic-bezier(0.16, 1, 0.3, 1)',
                  borderRadius: 2,
                }} />

                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: activeStep === i ? `${s.color}18` : 'rgba(255,255,255,.04)',
                  border: `1px solid ${activeStep === i ? s.color + '35' : 'rgba(255,255,255,0.08)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all .3s',
                  color: activeStep === i ? s.color : 'var(--text3)',
                }}>
                  {s.icon}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                    <span style={{
                      fontSize: 'var(--std-pair-title-size)',
                      fontWeight: 600,
                      color: activeStep === i ? 'var(--text)' : 'var(--text2)',
                    }}>{s.title}</span>
                  </div>
                  <p style={{
                    fontSize: 'var(--std-pair-desc-size)',
                    color: 'var(--text3)',
                    lineHeight: 1.72,
                    margin: 0,
                    fontWeight: 300,
                  }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: The Dashboard Panel */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            opacity: visible ? 1 : 0,
            transition: 'opacity .7s .3s',
          }}>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 32px 64px rgba(0,0,0,.35)',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}>
              {/* Panel Header */}
              <div style={{
                background: 'rgba(255,255,255,.04)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                padding: '16px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0,
              }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 10, color: 'var(--text3)', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600 }}>{step.panelTitle}</span>
                  <div style={{ height: 12, width: 1, background: 'rgba(255,255,255,.1)' }} />
                  <span style={{ fontSize: 10, fontWeight: 700, color: step.color }}>{step.status.label}</span>
                </div>
              </div>

              {/* High-Density Content Area */}
              <div style={{ padding: '32px', flex: 1, minHeight: 400 }}>
                <AnimatePresence mode="wait">
                  {activeStep === 0 && <SORDash key="sor" />}
                  {activeStep === 1 && <ReviewDash key="review" />}
                  {activeStep === 2 && <ProformaDash key="proforma" />}
                  {activeStep === 3 && <DispatchDash key="dispatch" />}
                  {activeStep === 4 && <InvoiceDash key="invoice" />}
                </AnimatePresence>
              </div>

              {/* Progress Indicator Footer */}
              <div style={{ padding: '20px 32px', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <div style={{ fontSize: 9, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 1.5 }}>Operational Audit Trail</div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8, color: 'var(--text3)' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#28C840' }} /> Active
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8, color: 'var(--text3)' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,.2)' }} /> Scheduled
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  {LIFECYCLE_STEPS.map((ls, li) => (
                    <div key={li} style={{ display: 'flex', alignItems: 'center', flex: li < LIFECYCLE_STEPS.length - 1 ? 1 : 'none' }}>
                      <div style={{
                        width: 24, height: 24, borderRadius: '50%',
                        border: `2px solid ${li <= activeStep ? ls.color : 'rgba(255,255,255,.1)'}`,
                        background: li <= activeStep ? `${ls.color}15` : 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all .3s',
                      }}>
                        {li < activeStep ? (
                          <CheckCircle size={12} color={ls.color} strokeWidth={3} />
                        ) : (
                          <span style={{ width: 8, height: 8, borderRadius: '50%', background: li === activeStep ? ls.color : 'rgba(255,255,255,.15)', display: 'block' }} />
                        )}
                      </div>
                      {li < LIFECYCLE_STEPS.length - 1 && (
                        <div style={{
                          flex: 1, height: 2,
                          background: li < activeStep ? ls.color : 'rgba(255,255,255,.05)',
                          transition: 'background .3s',
                        }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stage Selector Dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 32 }}>
              {LIFECYCLE_STEPS.map((ls, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  style={{
                    width: activeStep === i ? 32 : 10,
                    height: 10,
                    borderRadius: 100,
                    background: activeStep === i ? ls.color : 'rgba(255,255,255,.1)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all .4s cubic-bezier(0.16, 1, 0.3, 1)',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
