'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Users, Headphones, TrendingUp, LineChart,
  CheckCircle2, Bot, Zap,
  BarChart3, Heart, MessageSquare, ArrowRight, Activity
} from 'lucide-react'

/* 
  ── STRIPE-INSPIRED PERSONA HUB ──
  A world-class UI/UX redesign featuring deep layering, 
  glassmorphism, and role-specific dashboard excerpts.
*/

const PERSONAS = [
  {
    id: 'agent',
    icon: Headphones,
    label: 'Support Agent',
    headline: 'Stop Asking "Can I get your order number?"',
    desc: 'Agents open a ticket and instantly see the client\'s tier, their open sales deals, and the exact product they were viewing. No more blind troubleshooting.',
    features: ['Real-time CRM Sync', 'AI Co-pilot Drafting', 'SLA Breach Warnings'],
    color: '#3470F0', // Vibrant Stripe Blue
    bg: 'rgba(52,112,240,0.08)'
  },
  {
    id: 'rep',
    icon: Users,
    label: 'Sales Rep',
    headline: 'Never Get Blindsided in a Meeting.',
    desc: 'Sales reps receive push notifications if a critical issue opens on their key accounts before they walk into a renewal meeting.',
    features: ['Pre-visit Briefings', 'Account Health Score', 'Churn Alerts'],
    color: '#c49a3c', // Gold
    bg: 'rgba(196,154,60,0.08)'
  },
  {
    id: 'manager',
    icon: TrendingUp,
    label: 'CS Manager',
    headline: 'Manage Escalations Proactively.',
    desc: 'Automatically flag tickets that mention competitors, pricing disputes, or cancellation threats directly to leadership for immediate intervention.',
    features: ['Sentiment Tracking', 'SLA Escalation Rules', 'Market IQ Routing'],
    color: '#17b378', // Green
    bg: 'rgba(23,179,120,0.08)'
  },
  {
    id: 'leader',
    icon: LineChart,
    label: 'Leadership',
    headline: 'Connect Support to Revenue.',
    desc: 'Stop viewing support as a cost center. Map CSAT scores directly to NRR (Net Revenue Retention) and overall pipeline health.',
    features: ['Revenue Impact View', 'Cross-Dept Analytics', 'ROI Reporting'],
    color: '#E0384F', // Red
    bg: 'rgba(224,56,79,0.08)'
  }
]

// ── Redesigned Widgets (Stripe-Fidelity) ──

function AgentWidget() {
  return (
    <div className="cs-s-widget">
      <div className="cs-s-w-head">
        <div className="cs-s-w-avatar"><MessageSquare size={16} color="var(--blue)" /></div>
        <div>
          <div className="cs-s-w-title">Enterprise Tkt #884</div>
          <div className="cs-s-w-sub">Bharti Airtel • Strategic</div>
        </div>
        <div className="cs-s-w-badge">Live</div>
      </div>
      <div className="cs-s-w-ai-box">
        <div className="cs-s-w-ai-label"><Bot size={12} /> AI Ghost-Draft</div>
        <div className="cs-s-w-ai-line" style={{ width: '90%' }} />
        <div className="cs-s-w-ai-line" style={{ width: '60%' }} />
      </div>
      <div className="cs-s-w-footer">
        <Zap size={14} color="var(--gold)" />
        <span>Renewal Signal: High Confidence</span>
      </div>
    </div>
  )
}

function RepWidget() {
  return (
    <div className="cs-s-widget">
      <div className="cs-s-w-mini-label">Account Health Index</div>
      <div className="cs-s-w-health-val">96.8<span className="unit">%</span></div>
      <div className="cs-s-w-trend positive">↑ 4.2% Growth</div>
      
      <div className="cs-s-w-stack" style={{ marginTop: 20 }}>
        <div className="cs-s-w-alert">
          <Activity size={14} /> P1 Urgent Escalation Detected
        </div>
        <div className="cs-s-w-item">
          <span>Market Sentiment</span>
          <span className="val" style={{ color: 'var(--gold)' }}>Stable</span>
        </div>
      </div>
    </div>
  )
}

function ManagerWidget() {
  return (
    <div className="cs-s-widget">
      <div className="cs-s-w-head" style={{ marginBottom: 24 }}>
        <div className="cs-s-w-title">Regional NRR Index</div>
        <BarChart3 size={16} color="rgba(255,255,255,0.4)" />
      </div>
      <div className="cs-s-w-bars">
        {['APAC', 'EMEA', 'US-E'].map((r, i) => (
          <div key={r} className="cs-s-w-bar-row">
            <div className="label"><span>{r}</span> <span>{98 - i*5}%</span></div>
            <div className="bar-track"><div className="bar-fill" style={{ width: `${98 - i*5}%`, background: i === 0 ? 'var(--green)' : 'var(--gold)' }} /></div>
          </div>
        ))}
      </div>
    </div>
  )
}

function LeaderWidget() {
  return (
    <div className="cs-s-widget">
      <div className="cs-s-w-head">
        <Heart size={16} color="#E0384F" />
        <div className="cs-s-w-title">Revenue Impact Monitoring</div>
      </div>
      <div className="cs-s-w-big-val">$4.2M<span className="sub">+14%</span></div>
      <div className="cs-s-w-spark">
        {[20, 35, 25, 50, 45, 70, 60, 95].map((h, i) => (
          <div key={i} className="spark-bar" style={{ height: `${h}%`, opacity: i === 7 ? 1 : 0.4 }} />
        ))}
      </div>
      <div className="cs-s-w-mini-foot">Attributed to Support Retention Flow</div>
    </div>
  )
}

export default function S9_Personas() {
  const [activeTab, setActiveTab] = useState(PERSONAS[0].id)
  const activeData = PERSONAS.find(p => p.id === activeTab) || PERSONAS[0]

  return (
    <section id="personas" className="cs-s-section">
      <style>{`
        .cs-s-section { 
          padding: 120px 0; 
          background: #F9F8F6; 
          position: relative; overflow: hidden; 
        }
        
        /* Stripe-style background mesh */
        .cs-s-bg-mesh {
          position: absolute; top: 0; left: 0; right: 0; height: 100%;
          background: radial-gradient(circle at 0% 0%, rgba(196,154,60,0.03) 0%, transparent 50%),
                      radial-gradient(circle at 100% 100%, rgba(52,112,240,0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .cs-s-wrap { max-width: 1240px; margin: 0 auto; padding: 0 40px; position: relative; z-index: 2; }
        
        .cs-s-header { text-align: center; max-width: 720px; margin: 0 auto 80px; }
        .cs-s-h2 { font-family: 'Fraunces', serif; font-size: clamp(36px, 5vw, 56px); line-height: 1.05; color: var(--navy); margin-bottom: 24px; font-weight: 350; }
        .cs-s-h2 em { font-style: italic; color: var(--gold); font-weight: 300; }
        
        .cs-s-container {
          background: #fff; border-radius: 32px;
          border: 1px solid rgba(0,0,0,0.04);
          box-shadow: 0 40px 100px -20px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.1);
          overflow: hidden; display: flex; flex-direction: column;
        }

        .cs-s-tabs {
          display: flex; background: #fafafa;
          border-bottom: 1px solid rgba(0,0,0,0.04);
          padding: 8px; gap: 8px;
        }
        .cs-s-tab {
          flex: 1; padding: 16px 24px; border: none; background: transparent;
          border-radius: 12px; cursor: pointer; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex; align-items: center; justify-content: center; gap: 12px;
        }
        .cs-s-tab.active { background: #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.04); }
        .cs-s-tab-label { font-size: 13px; font-weight: 600; color: #666; transition: color 0.3s; }
        .cs-s-tab.active .cs-s-tab-label { color: var(--navy); }

        .cs-s-content { padding: clamp(40px, 8vw, 80px); }
        .cs-s-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        
        .cs-s-text h3 { font-family: 'Fraunces', serif; font-size: clamp(28px, 4vw, 42px); color: var(--navy); line-height: 1.15; margin-bottom: 24px; font-weight: 400; }
        .cs-s-text p { font-size: 17px; color: #555; line-height: 1.7; margin-bottom: 40px; font-weight: 300; }
        
        .cs-s-feats { display: grid; grid-template-columns: 1fr; gap: 14px; }
        .cs-s-feat { display: flex; align-items: center; gap: 12px; font-size: 14px; font-weight: 600; color: var(--navy); }
        .cs-s-feat-icon { width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; background: #f4f4f4; color: var(--gold); }

        /* Dashboard Viewport */
        .cs-s-view {
          background: #080f1e; border-radius: 24px; padding: 48px;
          position: relative; overflow: hidden; aspect-ratio: 16 / 11;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 32px 64px -16px rgba(8, 15, 30, 0.4);
        }
        .cs-s-view::after {
          content: ""; position: absolute; top: 0; left: 0; right: 0; height: 100%;
          background: radial-gradient(circle at top right, var(--tab-color), transparent 60%);
          opacity: 0.1; pointer-events: none;
        }

        /* Widget Details */
        .cs-s-widget {
          width: 100%; max-width: 320px;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px); border-radius: 20px; padding: 32px;
          position: relative; z-index: 5; color: white;
          animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes slideUpFade { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        .cs-s-w-head { display: flex; align-items: center; gap: 12px; }
        .cs-s-w-avatar { width: 32px; height: 32px; border-radius: 8px; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; }
        .cs-s-w-title { font-size: 13px; font-weight: 700; }
        .cs-s-w-sub { font-size: 10px; color: rgba(255,255,255,0.4); margin-top: 2px; }
        .cs-s-w-badge { margin-left: auto; font-size: 9px; font-weight: 800; text-transform: uppercase; background: var(--green); color: white; padding: 4px 8px; border-radius: 4px; }
        
        .cs-s-w-ai-box { background: rgba(255,255,255,0.02); border-radius: 12px; padding: 16px; margin: 20px 0; border: 1px dashed rgba(255,255,255,0.1); }
        .cs-s-w-ai-label { font-size: 10px; font-weight: 700; color: var(--gold); display: flex; align-items: center; gap: 6px; margin-bottom: 12px; }
        .cs-s-w-ai-line { height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; margin-bottom: 8px; position: relative; overflow: hidden; }
        .cs-s-w-ai-line::after { content: ""; position: absolute; left: 0; top: 0; height: 100%; width: 40%; background: var(--gold); animation: stripeShimmer 2s infinite; }
        @keyframes stripeShimmer { from { left: -100%; } to { left: 100%; } }

        .cs-s-w-footer { display: flex; align-items: center; gap: 10px; font-size: 10px; font-weight: 700; color: var(--gold); border-top: 1px solid rgba(255,255,255,0.05); padding-top: 16px; }

        .cs-s-w-mini-label { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
        .cs-s-w-health-val { font-size: 48px; font-weight: 800; font-family: 'Fraunces', serif; display: flex; align-items: baseline; }
        .cs-s-w-health-val .unit { font-size: 18px; color: rgba(255,255,255,0.2); margin-left: 4px; }
        .cs-s-w-trend { font-size: 12px; font-weight: 700; margin-top: 4px; }
        .cs-s-w-trend.positive { color: var(--green); }
        .cs-s-w-stack { display: flex; flex-direction: column; gap: 12px; }
        .cs-s-w-alert { background: rgba(224,56,79,0.1); border: 1px solid rgba(224,56,79,0.2); padding: 12px; border-radius: 10px; font-size: 10px; font-weight: 700; color: #ff5a6e; display: flex; align-items: center; gap: 8px; }
        .cs-s-w-item { display: flex; justifyContent: space-between; font-size: 11px; color: rgba(255,255,255,0.6); }

        .cs-s-w-bar-row { margin-bottom: 16px; }
        .cs-s-w-bar-row:last-child { margin-bottom: 0; }
        .cs-s-w-bar-row .label { display: flex; justify-content: space-between; font-size: 11px; font-weight: 600; margin-bottom: 6px; }
        .cs-s-w-bar-row .bar-track { height: 6px; background: rgba(255,255,255,0.05); border-radius: 100px; overflow: hidden; }
        .cs-s-w-bar-row .bar-fill { height: 100%; border-radius: 100px; transition: width 1s ease-out; }

        .cs-s-w-big-val { font-size: 42px; font-weight: 800; font-family: 'Fraunces', serif; margin: 12px 0; }
        .cs-s-w-big-val .sub { font-size: 14px; font-family: 'Inter'; color: var(--green); margin-left: 12px; font-weight: 700; }
        .cs-s-w-spark { display: flex; align-items: flex-end; gap: 4px; height: 60px; margin: 20px 0; }
        .cs-s-w-spark .spark-bar { flex: 1; background: #E0384F; border-radius: 3px 3px 0 0; min-width: 8px; transition: height 1s; }
        .cs-s-w-mini-foot { font-size: 9px; color: rgba(255,255,255,0.3); text-align: center; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.05); }

        @media (max-width: 1024px) {
          .cs-s-grid { gap: 40px; }
          .cs-s-view { padding: 32px; }
        }

        @media (max-width: 900px) {
          .cs-s-section { padding: 80px 0; }
          .cs-s-grid { grid-template-columns: 1fr; gap: 48px; text-align: center; }
          .cs-s-text { max-width: 100%; }
          .cs-s-feats { justify-content: center; }
          .cs-s-feat { justify-content: center; }
          .cs-s-view { aspect-ratio: auto; min-height: 380px; width: 100%; max-width: 600px; margin: 0 auto; }
          .cs-s-widget { max-width: 100%; }
        }

        @media (max-width: 768px) {
          .cs-s-tabs { overflow-x: auto; scrollbar-width: none; border-radius: 0; padding: 4px; }
          .cs-s-tab { min-width: 140px; }
          .cs-s-content { padding: 40px 24px; }
        }

        @media (max-width: 480px) {
          .cs-s-tab { min-width: 120px; padding: 12px 8px; }
          .cs-s-tab-label { font-size: 11px; }
          .cs-s-view { padding: 24px; min-height: 320px; }
          .cs-s-widget { padding: 24px; }
        }
      `}</style>

      <div className="cs-s-bg-mesh" />

      <div className="cs-s-wrap">
        <div className="cs-s-header reveal">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="ey-line" /> Perspective: Revenue Alignment
          </div>
          <h2 className="cs-s-h2">
            Built for Every<br /><em>Stakeholder.</em>
          </h2>
          <p className="lead lead-ink" style={{ maxWidth: 640, margin: '0 auto' }}>
            Post-sale success is a team sport. ClientEra surfaces the specific context needed by every member of the revenue team to drive net revenue retention.
          </p>
        </div>

        <div className="cs-s-container reveal">
          <div className="cs-s-tabs">
            {PERSONAS.map(p => (
              <button
                key={p.id}
                className={`cs-s-tab ${activeTab === p.id ? 'active' : ''}`}
                onClick={() => setActiveTab(p.id)}
              >
                <p.icon size={18} color={activeTab === p.id ? p.color : '#999'} strokeWidth={2.5} />
                <span className="cs-s-tab-label">{p.label}</span>
              </button>
            ))}
          </div>

          <div className="cs-s-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="cs-s-grid"
              >
                <div className="cs-s-text">
                  <h3>{activeData.headline}</h3>
                  <p>{activeData.desc}</p>
                  <div className="cs-s-feats">
                    {activeData.features.map(f => (
                      <div key={f} className="cs-s-feat">
                        <div className="cs-s-feat-icon">
                          <CheckCircle2 size={12} />
                        </div>
                        {f}
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
                     {/* Placeholder for CTA if needed */}
                  </div>
                </div>

                <div className="cs-s-view" style={{ '--tab-color': activeData.color } as any}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab + 'widget'}
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 1.05, opacity: 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                    >
                      {activeTab === 'agent' && <AgentWidget />}
                      {activeTab === 'rep' && <RepWidget />}
                      {activeTab === 'manager' && <ManagerWidget />}
                      {activeTab === 'leader' && <LeaderWidget />}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
