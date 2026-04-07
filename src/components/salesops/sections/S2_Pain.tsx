'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, LayoutTemplate, Clock, FileText, CheckCircle2 } from 'lucide-react';

/* 
  ── S2 OPERATIONAL DEFICIENCIES ──
  High-fidelity 'Friction vs Resolution' redesign.
  Comparative grid layout with premium typography and subtle depth.
*/

const PROBLEMS = [
  {
    icon: <MessageSquare size={20} strokeWidth={1.5} />,
    color: '#E0384F',
    fTitle: 'Orders arrive by WhatsApp',
    fDesc: 'Suggested orders via chat, email, and phone calls. Fragmented data leads to miscommunication and delayed fulfillment.',
    rTitle: 'Structured SOR portal with full status visibility',
    rDesc: ''
  },
  {
    icon: <LayoutTemplate size={20} strokeWidth={1.5} />,
    color: '#F5A623',
    fTitle: 'Targets live in spreadsheets',
    fDesc: 'Reviews are the only time distributors see their targets. There is no real-time urgency or commercial accountability.',
    rTitle: 'Real-time sales target dashboards for every territory',
    rDesc: ''
  },
  {
    icon: <Clock size={20} strokeWidth={1.5} />,
    color: '#3470F0',
    fTitle: 'ETA updates are guesswork',
    fDesc: 'Logistics teams manage dispatch through manual check-ins. "Where is my order?" calls dominate the workday.',
    rTitle: 'Automated ASN notifications at every logistics node',
    rDesc: ''
  },
  {
    icon: <FileText size={20} strokeWidth={1.5} />,
    color: '#17B378',
    fTitle: 'Claims tracked in email chains',
    fDesc: 'Short deliveries and damages are handled across inboxes with no SLA tracking, ownership, or clear audit trail.',
    rTitle: 'Digitized claims workflow with strict SLA enforcement',
    rDesc: ''
  }
];

export default function S2_Pain() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (i: number) => {
     setActiveCard(activeCard === i ? null : i);
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="s2-pain">
      <style jsx>{`
        .s2-pain {
          background: #F9F8F6 !important;
          padding: 120px 0 !important;
          position: relative !important;
          overflow: hidden !important;
        }
        .s2-wrap {
          max-width: 1140px !important;
          margin: 0 auto !important;
          padding: 0 40px !important;
          position: relative !important;
          z-index: 2 !important;
        }
        .s2-header {
          margin-bottom: 80px !important;
          max-width: 720px !important;
        }
        .s2-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'Geist', 'Inter', sans-serif !important;
          font-size: 11px;
          font-weight: 700;
          color: #E0384F;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          margin-bottom: 24px;
        }
        .s2-eyebrow-line {
          width: 36px;
          height: 1.5px;
          background: #E0384F;
          flex-shrink: 0;
        }
        .s2-h2 {
          font-family: 'Fraunces', serif;
          font-size: clamp(40px, 5vw, 64px);
          line-height: 1.05;
          color: #0B1628;
          font-weight: 500;
          letter-spacing: -2px;
          margin: 0 0 24px 0;
        }
        .s2-h2 em {
          font-style: italic;
          color: #E0384F;
          font-weight: 400;
        }
        .s2-header-desc {
          font-family: 'Geist', 'Inter', sans-serif !important;
          font-size: 16px;
          color: #64748b;
          line-height: 1.6;
          max-width: 580px;
          margin: 0;
        }

        .s2-grid {
          display: flex !important;
          flex-direction: column !important;
          gap: 16px !important;
        }

        .s2-card {
          background: #ffffff !important;
          border-radius: 20px !important;
          border: 1px solid rgba(0,0,0,0.06) !important;
          box-shadow: 0 4px 20px rgba(0,0,0,0.01) !important;
          display: flex !important;
          flex-direction: column !important;
          overflow: hidden !important;
          position: relative !important;
          transition: all 0.4s ease !important;
          cursor: pointer !important;
        }

        .s2-card:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 30px rgba(0,0,0,0.04) !important;
          border-color: rgba(0,0,0,0.1) !important;
        }

        .s2-col {
          padding: 28px 40px !important;
          display: flex !important;
          flex-direction: column !important;
          position: relative !important;
        }

        .s2-col-friction {
          background: #ffffff !important;
          z-index: 5 !important;
        }

        .s2-col-resolution {
          background: #fbfbfb !important;
          border-top: 1px solid rgba(0,0,0,0.05) !important;
          z-index: 1 !important;
        }

        .s2-toggle-icon {
          position: absolute !important;
          right: 32px !important;
          top: 32px !important;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          color: var(--line-color);
          transition: all 0.3s ease;
        }

        .s2-card:hover .s2-toggle-icon {
          background: var(--line-color);
          color: #fff;
          border-color: var(--line-color);
        }

        .s2-card:hover .s2-col-resolution {
          transform: translateY(0) !important;
          opacity: 1 !important;
          background: #ffffff !important;
        }

        .s2-card:hover .s2-col-resolution {
          transform: translateY(0) !important;
          opacity: 1 !important;
          background: #ffffff !important;
        }

        .s2-accent-line {
          position: absolute !important;
          left: 0 !important;
          top: 28px !important;
          bottom: 28px !important;
          width: 3px !important;
          background: var(--line-color) !important;
          border-radius: 2px !important;
        }

        .s2-item-eyebrow {
          font-family: 'Geist', sans-serif !important;
          font-size: 10px;
          font-weight: 800;
          color: var(--line-color);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 8px;
          display: block;
        }

        .s2-item-top {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .s2-icon-box {
          width: 36px;
          height: 36px;
          background: rgba(0,0,0,0.02);
          border-radius: 10px;
          color: var(--line-color);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .s2-item-head {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 12px;
        }

        .s2-item-h3 {
          font-family: 'Geist', sans-serif !important;
          font-size: 19px;
          font-weight: 800;
          color: #0B1628;
          margin: 0;
          line-height: 1.25;
          letter-spacing: -0.4px;
        }

        .s2-item-desc {
          font-family: 'Geist', sans-serif !important;
          font-size: 14.5px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
          font-weight: 400;
          max-width: 480px;
        }

        /* ── Responsive breakpoints ── */

        @media (max-width: 1024px) {
          .s2-card {
            grid-template-columns: 1fr !important;
          }
          .s2-col-resolution {
            border-left: none !important;
            border-top: 1px solid rgba(0,0,0,0.05) !important;
          }
          .s2-col {
            padding: 40px !important;
          }
        }
      `}</style>

      <div className="s2-wrap">
        <div className="s2-header">
          <div className="s2-eyebrow">
            <span className="s2-eyebrow-line" />
            OPERATIONAL DEFICIENCIES
          </div>
          <h2 className="s2-h2">
            Distributor ops built on <em>manual effort.</em>
          </h2>
          <p className="s2-header-desc">
            Fragmented tools and informal communication are costing you transparency, trust, and territory growth.
          </p>
        </div>

        <div className="s2-grid">
          {PROBLEMS.map((p, i) => {
            const isOpen = activeCard === i;
            return (
              <motion.div
                key={i}
                className="s2-card"
                initial={{ opacity: 0, y: 30 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => toggleCard(i)}
              >
                {/* FRICTION COLUMN (Header) */}
                <div className="s2-col s2-col-friction" style={{ '--line-color': p.color } as React.CSSProperties}>
                  <div className="s2-toggle-icon">
                    {isOpen ? <motion.div animate={{ rotate: 180 }}><Clock size={16} /></motion.div> : <motion.div animate={{ rotate: 0 }}><MessageSquare size={16} /></motion.div>}
                  </div>

                  <div className="s2-item-top">
                    <div className="s2-icon-box" style={{ background: `${p.color}08` }}>
                      {p.icon}
                    </div>
                    <span className="s2-item-eyebrow" style={{ marginBottom: 0 }}>THE FRICTION</span>
                  </div>
                  <h3 className="s2-item-h3" style={{ marginBottom: 12 }}>{p.fTitle}</h3>
                  <p className="s2-item-desc">{p.fDesc}</p>
                </div>

                {/* RESOLUTION COLUMN (Collapsible) */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="s2-col s2-col-resolution" style={{ '--line-color': p.color } as React.CSSProperties}>
                    <div className="s2-accent-line" />
                    <span className="s2-item-eyebrow">THE CLIENTERA RESOLUTION</span>
                    <div className="s2-item-head">
                      <div style={{ color: p.color, display: 'flex', alignItems: 'center', marginTop: 4 }}>
                        <CheckCircle2 size={24} strokeWidth={3} />
                      </div>
                      <h3 className="s2-item-h3">{p.rTitle}</h3>
                    </div>
                    {p.rDesc && <p className="s2-item-desc">{p.rDesc}</p>}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}