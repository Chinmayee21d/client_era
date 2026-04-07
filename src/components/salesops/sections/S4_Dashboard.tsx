'use client';

import { useEffect, useRef, useState } from 'react';

type Persona = 'distributor' | 'sales_manager' | 'logistics' | 'dispatcher';

const PERSONAS: { id: Persona; label: string; color: string; role: string }[] = [
  { id: 'distributor', label: 'Distributor', color: 'var(--gold)', role: 'External Portal' },
  { id: 'sales_manager', label: 'Sales Manager', color: 'var(--blue)', role: 'Internal CRM' },
  { id: 'logistics', label: 'Logistics Planner', color: 'var(--green)', role: 'Operations' },
  { id: 'dispatcher', label: 'Dispatcher', color: '#9C40F0', role: 'Fulfillment' },
];

export default function S4_Dashboard() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activePersona, setActivePersona] = useState<Persona>('distributor');

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="dashboard" ref={sectionRef} style={{
      background: 'var(--cream)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle,rgba(11,22,40,.04) 1px,transparent 1px)',
        backgroundSize: '32px 32px',
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
          margin: '0 auto 44px',
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
            color: '#1B50D4',
            textTransform: 'uppercase',
            letterSpacing: '2.5px',
            marginBottom: 16,
          }}>
            <span style={{ width: 18, height: 1, background: '#1B50D4', display: 'block' }} />
            Live Platform Views
            <span style={{ width: 18, height: 1, background: '#1B50D4', display: 'block' }} />
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
            The right view for <em style={{ color: '#1B50D4', fontStyle: 'italic', fontWeight: 300 }}>every role.</em>
          </h2>
          <p style={{ fontSize: 'var(--std-intro-size)', color: 'var(--ink3)', lineHeight: 1.65, fontWeight: 300 }}>
            Each persona sees exactly what they need — nothing more, nothing less.
          </p>
        </div>

        {/* Persona tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 32,
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(16px)',
          transition: 'opacity .6s .15s, transform .6s .15s',
        }}>
          <div style={{
            display: 'inline-flex',
            background: '#fff',
            border: '1px solid rgba(11,22,40,.1)',
            borderRadius: 14,
            padding: 5,
            gap: 4,
            boxShadow: '0 2px 16px rgba(11,22,40,.07)',
            flexWrap: 'wrap',
          }}>
            {PERSONAS.map(p => (
              <button
                key={p.id}
                onClick={() => setActivePersona(p.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 7,
                  padding: '9px 18px',
                  borderRadius: 10,
                  fontFamily: "'Geist', sans-serif",
                  fontSize: 13,
                  fontWeight: activePersona === p.id ? 700 : 500,
                  color: activePersona === p.id ? '#fff' : 'var(--ink3)',
                  background: activePersona === p.id ? p.color : 'transparent',
                  border: `1.5px solid ${activePersona === p.id ? p.color : 'transparent'}`,
                  cursor: 'pointer',
                  transition: 'all .22s',
                  whiteSpace: 'nowrap',
                }}
              >
                <span style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: activePersona === p.id ? 'rgba(255,255,255,.6)' : p.color,
                  opacity: activePersona === p.id ? 1 : 0.5,
                  display: 'block',
                  flexShrink: 0,
                }} />
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard view */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(24px)',
          transition: 'opacity .7s .25s, transform .7s .25s',
        }}>
          <DashboardView persona={activePersona} />
        </div>
      </div>
    </section>
  );
}

function DashboardView({ persona }: { persona: Persona }) {
  const personaConfig = PERSONAS.find(p => p.id === persona)!;

  return (
    <div key={persona} style={{
      background: 'var(--navy)',
      borderRadius: 20,
      overflow: 'hidden',
      border: '1px solid var(--border2)',
      boxShadow: '0 32px 80px rgba(11,22,40,.22)',
      animation: 'panelIn .35s ease both',
    }}>
      {/* Browser bar */}
      <div style={{
        height: 44,
        background: 'var(--navy2)',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        gap: 10,
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57', display: 'block' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E', display: 'block' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840', display: 'block' }} />
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border2)',
            borderRadius: 7,
            padding: '4px 16px',
            fontSize: 10.5,
            color: 'var(--text3)',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            maxWidth: 280,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--green)', display: 'block', animation: 'pulse 2s infinite' }} />
            clientera.app/{persona === 'distributor' ? 'portal' : 'ops/' + persona.replace('_', '-')}
          </div>
        </div>
        <div style={{ fontSize: 10, color: 'var(--text3)', display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ padding: '2px 8px', borderRadius: 100, background: `${personaConfig.color}18`, color: personaConfig.color, fontSize: 9, fontWeight: 700 }}>{personaConfig.role}</span>
        </div>
      </div>

      {/* App grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: persona === 'distributor' ? '200px 1fr' : '180px 1fr 220px',
        height: 440,
      }}>
        {/* Sidebar */}
        <Sidebar persona={persona} color={personaConfig.color} />
        {/* Main canvas */}
        <MainCanvas persona={persona} color={personaConfig.color} />
        {/* Right panel - only for internal users */}
        {persona !== 'distributor' && <RightPanel persona={persona} color={personaConfig.color} />}
      </div>
    </div>
  );
}

function Sidebar({ persona, color }: { persona: Persona; color: string }) {
  const navItems: Record<Persona, { icon: string; label: string; active?: boolean; badge?: string }[]> = {
    distributor: [
      { icon: '📊', label: 'Dashboard', active: true },
      { icon: '📦', label: 'Place Order' },
      { icon: '📋', label: 'My Orders', badge: '3' },
      { icon: '🎯', label: 'My Targets' },
      { icon: '📄', label: 'Invoices' },
      { icon: '🔖', label: 'Claims', badge: '1' },
      { icon: '🔔', label: 'Announcements' },
    ],
    sales_manager: [
      { icon: '📊', label: 'Dashboard', active: true },
      { icon: '📥', label: 'SOR Queue', badge: '7' },
      { icon: '✅', label: 'Proforma Approval' },
      { icon: '🎯', label: 'Targets & KPIs' },
      { icon: '👥', label: 'Distributors' },
      { icon: '📢', label: 'Announcements' },
    ],
    logistics: [
      { icon: '📊', label: 'Operations', active: true },
      { icon: '💰', label: 'Create Proforma', badge: '4' },
      { icon: '📅', label: 'ETA Manager' },
      { icon: '🗓️', label: 'Dispatch Plan' },
      { icon: '📈', label: 'Reports' },
    ],
    dispatcher: [
      { icon: '📊', label: 'Dispatch Board', active: true },
      { icon: '🚛', label: 'Ready to Ship', badge: '5' },
      { icon: '📦', label: 'Dispatch Plan' },
      { icon: '📄', label: 'ASN Generator' },
      { icon: '📍', label: 'Tracking' },
    ],
  };

  return (
    <div style={{
      borderRight: '1px solid var(--border)',
      background: 'var(--navy2)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* User header */}
      <div style={{ padding: '10px 12px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 28, height: 28, borderRadius: '50%',
            background: `${color}22`,
            border: `1.5px solid ${color}40`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 10, fontWeight: 700, color,
          }}>
            {persona === 'distributor' ? 'AD' : persona === 'sales_manager' ? 'SM' : persona === 'logistics' ? 'LP' : 'DS'}
          </div>
          <div>
            <div style={{ fontSize: 10.5, fontWeight: 600, color: 'var(--text)', lineHeight: 1 }}>
              {persona === 'distributor' ? 'Apex Distributors' : persona === 'sales_manager' ? 'Rajan Mehta' : persona === 'logistics' ? 'Priya Sharma' : 'Arun Kumar'}
            </div>
            <div style={{ fontSize: 8.5, color: 'var(--text3)', marginTop: 1 }}>
              {PERSONAS.find(p => p.id === persona)?.role}
            </div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div style={{ flex: 1, padding: '8px 6px', overflow: 'hidden' }}>
        {navItems[persona].map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '7px 8px',
            borderRadius: 7,
            marginBottom: 2,
            background: item.active ? `${color}14` : 'transparent',
            border: `1px solid ${item.active ? color + '28' : 'transparent'}`,
            cursor: 'pointer',
            transition: 'all .2s',
          }}>
            <span style={{ fontSize: 13, flexShrink: 0 }}>{item.icon}</span>
            <span style={{ fontSize: 10.5, fontWeight: item.active ? 600 : 400, color: item.active ? 'var(--text)' : 'var(--text3)', flex: 1 }}>{item.label}</span>
            {item.badge && (
              <span style={{
                fontSize: 8.5,
                fontWeight: 700,
                padding: '1px 6px',
                borderRadius: 100,
                background: `${color}20`,
                color,
              }}>{item.badge}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function MainCanvas({ persona, color }: { persona: Persona; color: string }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      borderRight: persona !== 'distributor' ? '1px solid var(--border)' : 'none',
    }}>
      {/* Top bar */}
      <div style={{
        height: 44,
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid var(--border)',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: color, display: 'block' }} />
          <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)' }}>
            {persona === 'distributor' ? 'My Orders Overview' : persona === 'sales_manager' ? 'SOR Approval Queue' : persona === 'logistics' ? 'Operations Center' : 'Dispatch Board'}
          </span>
        </div>
        <div style={{ display: 'flex', gap: 5 }}>
          {['filter', 'export'].map((btn, i) => (
            <button key={i} style={{
              padding: '4px 10px',
              borderRadius: 6,
              fontSize: 9.5,
              fontWeight: 600,
              border: '1px solid var(--border2)',
              color: 'var(--text3)',
              background: 'transparent',
              cursor: 'pointer',
              transition: 'all .2s',
            }}>{btn.charAt(0).toUpperCase() + btn.slice(1)}</button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: 'hidden', padding: '14px 16px' }}>
        {persona === 'distributor' && <DistributorView color={color} />}
        {persona === 'sales_manager' && <SalesManagerView color={color} />}
        {persona === 'logistics' && <LogisticsView color={color} />}
        {persona === 'dispatcher' && <DispatcherView color={color} />}
      </div>
    </div>
  );
}

function DistributorView({ color }: { color: string }) {
  const orders = [
    { ref: 'SOR-2024-0891', status: 'SAP Order', statusCol: 'var(--green)', amount: '₹4,82,000', date: '12 Jan' },
    { ref: 'SOR-2024-0890', status: 'Proforma Available', statusCol: color, amount: '₹2,15,500', date: '11 Jan' },
    { ref: 'SOR-2024-0889', status: 'Dispatched', statusCol: 'var(--blue)', amount: '₹6,30,000', date: '10 Jan' },
    { ref: 'SOR-2024-0888', status: 'Confirmed Order', statusCol: 'var(--gold)', amount: '₹1,89,000', date: '9 Jan' },
    { ref: 'SOR-2024-0887', status: 'Delivered', statusCol: 'var(--text3)', amount: '₹3,40,000', date: '5 Jan' },
  ];

  return (
    <div>
      {/* Summary row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginBottom: 14 }}>
        {[
          { label: 'Active Orders', val: '4', col: color },
          { label: 'Target Achievement', val: '73%', col: 'var(--green)' },
          { label: 'Open Claims', val: '1', col: 'var(--red)' },
        ].map((s, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,.04)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: '9px 12px',
          }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 20, color: s.col, letterSpacing: '-1px' }}>{s.val}</div>
            <div style={{ fontSize: 9, color: 'var(--text3)', marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {orders.map((o, i) => (
        <div key={i} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '8px 10px',
          background: 'rgba(255,255,255,.028)',
          border: '1px solid var(--border)',
          borderRadius: 8,
          marginBottom: 5,
          transition: 'background .2s',
          cursor: 'pointer',
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.05)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.028)'; }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text)' }}>{o.ref}</div>
            <div style={{ fontSize: 9, color: 'var(--text3)', marginTop: 1 }}>{o.date}</div>
          </div>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text2)' }}>{o.amount}</div>
          <span style={{
            fontSize: 8.5, fontWeight: 700, padding: '2px 8px', borderRadius: 100,
            background: `${o.statusCol}18`, color: o.statusCol,
          }}>{o.status}</span>
        </div>
      ))}
    </div>
  );
}

function SalesManagerView({ color }: { color: string }) {
  const queue = [
    { ref: 'SOR-2024-0895', dist: 'Metro Traders', items: 8, val: '₹2,15,500', urgency: 'High' },
    { ref: 'SOR-2024-0894', dist: 'Northern Hub', items: 14, val: '₹5,72,000', urgency: 'Normal' },
    { ref: 'SOR-2024-0893', dist: 'South Depot', items: 6, val: '₹1,89,000', urgency: 'Normal' },
    { ref: 'SOR-2024-0892', dist: 'West Zone Co', items: 22, val: '₹8,44,000', urgency: 'Low' },
  ];

  return (
    <div>
      <div style={{ fontSize: 9.5, color: 'var(--text3)', fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 10 }}>
        Pending Review — 7 SORs
      </div>
      {queue.map((item, i) => (
        <div key={i} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '10px 12px',
          background: 'rgba(255,255,255,.035)',
          border: '1px solid var(--border)',
          borderRadius: 9,
          marginBottom: 6,
          cursor: 'pointer',
          transition: 'all .2s',
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.06)'; (e.currentTarget as HTMLElement).style.borderColor = `${color}30`; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.035)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text)' }}>{item.ref}</span>
              <span style={{
                fontSize: 8, fontWeight: 700, padding: '1px 6px', borderRadius: 100,
                background: item.urgency === 'High' ? 'rgba(224,56,79,.12)' : 'rgba(255,255,255,.06)',
                color: item.urgency === 'High' ? 'var(--red)' : 'var(--text3)',
              }}>{item.urgency}</span>
            </div>
            <div style={{ fontSize: 9.5, color: 'var(--text3)', marginTop: 2 }}>{item.dist} · {item.items} items</div>
          </div>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text2)' }}>{item.val}</div>
          <div style={{ display: 'flex', gap: 4 }}>
            <button style={{
              padding: '4px 9px', borderRadius: 6, fontSize: 9.5, fontWeight: 700,
              background: 'rgba(24,184,122,.12)', color: 'var(--green)', border: 'none', cursor: 'pointer',
            }}>Forward</button>
            <button style={{
              padding: '4px 9px', borderRadius: 6, fontSize: 9.5, fontWeight: 700,
              background: 'rgba(224,56,79,.08)', color: 'var(--red)', border: 'none', cursor: 'pointer',
            }}>Reject</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function LogisticsView({ color }: { color: string }) {
  return (
    <div>
      <div style={{ fontSize: 9.5, color: 'var(--text3)', fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 10 }}>
        Proforma Queue — 4 Pending
      </div>
      {[
        { ref: 'SOR-2024-0891', dist: 'Apex Distributors', items: 12, action: 'Create Proforma' },
        { ref: 'SOR-2024-0890', dist: 'Metro Traders', items: 8, action: 'Awaiting SM Approval' },
      ].map((item, i) => (
        <div key={i} style={{
          padding: '12px 14px',
          background: 'rgba(255,255,255,.035)',
          border: '1px solid var(--border)',
          borderRadius: 10,
          marginBottom: 8,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
            <div>
              <div style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--text)' }}>{item.ref}</div>
              <div style={{ fontSize: 9.5, color: 'var(--text3)', marginTop: 1 }}>{item.dist} · {item.items} items</div>
            </div>
            <button style={{
              padding: '5px 12px', borderRadius: 7, fontSize: 10, fontWeight: 700,
              background: i === 0 ? `${color}18` : 'rgba(255,255,255,.06)',
              color: i === 0 ? color : 'var(--text3)',
              border: `1px solid ${i === 0 ? color + '30' : 'var(--border)'}`,
              cursor: 'pointer',
            }}>{item.action}</button>
          </div>
          {i === 0 && (
            <div style={{ display: 'flex', gap: 5 }}>
              {['Unit Price', 'Freight', 'GST', 'Total'].map((f, fi) => (
                <div key={fi} style={{ flex: 1, background: 'rgba(255,255,255,.04)', border: '1px solid var(--border)', borderRadius: 6, padding: '5px 6px', textAlign: 'center' }}>
                  <div style={{ fontSize: 8, color: 'var(--text3)', marginBottom: 2 }}>{f}</div>
                  <div style={{ fontSize: 9.5, fontWeight: 600, color: fi === 3 ? color : 'var(--text2)' }}>—</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Dispatch plan preview */}
      <div style={{ marginTop: 10 }}>
        <div style={{ fontSize: 9.5, color: 'var(--text3)', fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 8 }}>Today's Dispatch Plan</div>
        {['SOR-0886 · Apex · 15 Jan', 'SOR-0883 · Metro · 17 Jan'].map((d, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '7px 10px',
            background: 'rgba(255,255,255,.025)',
            border: '1px solid var(--border)',
            borderRadius: 7, marginBottom: 4,
          }}>
            <span style={{ fontSize: 10, color: 'var(--text3)', flex: 1 }}>{d}</span>
            <span style={{ fontSize: 8.5, fontWeight: 700, color: 'var(--green)', background: 'rgba(24,184,122,.1)', padding: '2px 6px', borderRadius: 100 }}>On Schedule</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DispatcherView({ color }: { color: string }) {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 14 }}>
        {[{ l: 'Ready to Ship', v: '5', c: color }, { l: 'Dispatched Today', v: '3', c: 'var(--green)' }, { l: 'ASNs Sent', v: '3', c: 'var(--blue)' }].map((s, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px', textAlign: 'center' }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 20, color: s.c }}>{s.v}</div>
            <div style={{ fontSize: 8.5, color: 'var(--text3)', marginTop: 2 }}>{s.l}</div>
          </div>
        ))}
      </div>

      {[
        { ref: 'SOR-0886', dist: 'Apex Distributors', dispatched: false },
        { ref: 'SOR-0884', dist: 'Metro Traders Ltd', dispatched: true },
        { ref: 'SOR-0882', dist: 'South Depot Co', dispatched: true },
      ].map((item, i) => (
        <div key={i} style={{
          padding: '10px 12px',
          background: item.dispatched ? 'rgba(24,184,122,.04)' : 'rgba(255,255,255,.035)',
          border: `1px solid ${item.dispatched ? 'rgba(24,184,122,.2)' : 'var(--border)'}`,
          borderRadius: 9, marginBottom: 6,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text)' }}>{item.ref}</div>
              <div style={{ fontSize: 9.5, color: 'var(--text3)', marginTop: 1 }}>{item.dist}</div>
            </div>
            {!item.dispatched ? (
              <button style={{
                padding: '5px 12px', borderRadius: 7, fontSize: 10, fontWeight: 700,
                background: `${color}18`, color, border: `1px solid ${color}30`, cursor: 'pointer',
              }}>Confirm Dispatch</button>
            ) : (
              <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                <span style={{ fontSize: 8.5, fontWeight: 700, color: 'var(--green)', background: 'rgba(24,184,122,.1)', padding: '2px 7px', borderRadius: 100 }}>✓ Dispatched</span>
                <span style={{ fontSize: 8.5, fontWeight: 700, color: 'var(--blue)', background: 'rgba(52,112,240,.1)', padding: '2px 7px', borderRadius: 100 }}>ASN Sent</span>
              </div>
            )}
          </div>
          {!item.dispatched && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginTop: 8 }}>
              {['Vehicle No.', 'AWB / Tracking'].map((f, fi) => (
                <div key={fi} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid var(--border)', borderRadius: 6, padding: '5px 8px' }}>
                  <div style={{ fontSize: 8, color: 'var(--text3)', marginBottom: 2 }}>{f}</div>
                  <div style={{ fontSize: 9.5, color: 'var(--text3)', fontStyle: 'italic' }}>Enter value…</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function RightPanel({ persona, color }: { persona: Persona; color: string }) {
  if (persona === 'sales_manager') {
    return (
      <div style={{
        borderLeft: '1px solid var(--border)',
        background: 'var(--navy2)',
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
      }}>
        <div style={{ padding: '9px 12px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 8.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.4, color: 'var(--text3)' }}>Activity</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, fontWeight: 700, color: 'var(--green)' }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--green)', display: 'block', animation: 'pulse 2s infinite' }} />
            Live
          </span>
        </div>
        <div style={{ flex: 1, padding: 7, display: 'flex', flexDirection: 'column', gap: 4, overflow: 'hidden' }}>
          {[
            { icon: '📦', msg: 'SOR-895 submitted by Metro Traders', time: '2m ago', col: 'var(--gold)' },
            { icon: '✅', msg: 'SOR-892 Proforma approved', time: '8m ago', col: 'var(--green)' },
            { icon: '🚛', msg: 'SOR-886 dispatched by Arun K', time: '22m ago', col: 'var(--blue)' },
            { icon: '🎯', msg: 'Apex hit 73% monthly target', time: '1h ago', col: color },
          ].map((n, i) => (
            <div key={i} style={{
              padding: '8px 9px',
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,.06)',
              background: 'rgba(255,255,255,.03)',
              animation: `slideIn .4s ${i * 0.08}s both`,
            }}>
              <div style={{ display: 'flex', gap: 7, alignItems: 'flex-start' }}>
                <span style={{
                  width: 24, height: 24, borderRadius: 6, background: `${n.col}14`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, flexShrink: 0,
                }}>{n.icon}</span>
                <div>
                  <div style={{ fontSize: 9.5, color: 'var(--text2)', lineHeight: 1.4 }}>{n.msg}</div>
                  <div style={{ fontSize: 8, color: 'var(--text3)', marginTop: 3 }}>{n.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (persona === 'logistics') {
    return (
      <div style={{
        borderLeft: '1px solid var(--border)',
        background: 'var(--navy2)',
        display: 'flex', flexDirection: 'column', padding: '12px', overflow: 'hidden',
      }}>
        <div style={{ fontSize: 8.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.4, color: 'var(--text3)', marginBottom: 10 }}>ETA Calendar</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 2, marginBottom: 10 }}>
          {['M','T','W','T','F','S','S'].map((d, i) => (
            <div key={i} style={{ textAlign: 'center', fontSize: 8, color: 'var(--text3)', fontWeight: 700, padding: '3px 0' }}>{d}</div>
          ))}
          {Array.from({ length: 21 }, (_, i) => (
            <div key={i} style={{
              textAlign: 'center', fontSize: 9, padding: '5px 0', borderRadius: 5,
              background: [4, 8, 12].includes(i) ? `${color}25` : 'rgba(255,255,255,.04)',
              color: [4, 8, 12].includes(i) ? color : 'var(--text3)',
              border: [4, 8, 12].includes(i) ? `1px solid ${color}40` : '1px solid var(--border)',
            }}>{i + 10}</div>
          ))}
        </div>
        <div style={{ fontSize: 8.5, color: 'var(--text3)', marginBottom: 6 }}>Highlighted = dispatch dates</div>
        {[color + ' — 3 orders'].map((note, i) => (
          <div key={i} style={{
            display: 'flex', gap: 5, alignItems: 'center',
            fontSize: 9, color: 'var(--text3)', marginBottom: 4,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: color, display: 'block' }} />
            {note}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{
      borderLeft: '1px solid var(--border)',
      background: 'var(--navy2)',
      display: 'flex', flexDirection: 'column', padding: '12px', overflow: 'hidden',
    }}>
      <div style={{ fontSize: 8.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.4, color: 'var(--text3)', marginBottom: 10 }}>ASN Preview</div>
      <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid var(--border)', borderRadius: 9, padding: '10px 12px' }}>
        <div style={{ fontSize: 10.5, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>ASN-2024-0342</div>
        {[
          ['Order', 'SOR-0884'],
          ['Distributor', 'Metro Traders'],
          ['Vehicle', 'MH-12-XY-1234'],
          ['AWB', 'BD20241234'],
          ['ETA', '17 Jan 2025'],
        ].map(([k, v], i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', padding: '5px 0', fontSize: 9.5 }}>
            <span style={{ color: 'var(--text3)' }}>{k}</span>
            <span style={{ color: 'var(--text)', fontWeight: 600 }}>{v}</span>
          </div>
        ))}
        <button style={{
          width: '100%', marginTop: 10, padding: '7px', borderRadius: 7,
          background: `${color}18`, color, border: `1px solid ${color}30`,
          fontSize: 10, fontWeight: 700, cursor: 'pointer',
        }}>Send ASN to Distributor</button>
      </div>
    </div>
  );
}
