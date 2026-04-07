'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  RotateCcw, Zap, Link, MessageSquare,
  Folder, Tag, ChevronRight, Activity
} from 'lucide-react'

export default function CS_TicketLifecycle() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const section = sectionRef.current
    if (!section) return
    section.querySelectorAll('.cstl-reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const stages = [
    { id: 'open', label: 'Open', color: '#E0384F', bg: 'rgba(224,56,79,.12)' },
    { id: 'in_progress', label: 'In Progress', color: '#F5A623', bg: 'rgba(245,166,35,.1)' },
    { id: 'pending_client', label: 'Pending Client', color: 'var(--blue)', bg: 'rgba(52,112,240,.1)' },
    { id: 'resolved', label: 'Resolved', color: 'var(--gold)', bg: 'rgba(196,154,60,.1)' },
    { id: 'closed', label: 'Closed', color: 'var(--green)', bg: 'rgba(24,184,122,.1)' },
  ]

  const features = [
    {
      icon: RotateCcw,
      title: 'Rework Workflow',
      desc: 'Approvers can send tickets back to any prior step for correction with a forced reason. No hard rejections that lose history — just continuous refinement.',
    },
    {
      icon: Zap,
      title: 'SLA Risk Detection',
      desc: 'SLA breaches are predicted before they happen. Automated escalation rules fire based on account priority and custom business thresholds.',
    },
    {
      icon: Link,
      title: 'Commercial Linkage',
      desc: 'Every ticket is natively tethered to the relevant Deal or Sales Order. Reps see account health directly on their pipeline timeline.',
    },
    {
      icon: MessageSquare,
      title: 'Audit-Trail Threads',
      desc: 'Threaded internal and external comments provide a permanent record. Every interaction is time-stamped and attached to the ticket permanently.',
    },
    {
      icon: Folder,
      title: 'Dynamic Routing',
      desc: 'Configure custom ticket categories that trigger specific intake forms, SLA rules, and intelligent routing based on ticket content.',
    },
    {
      icon: Tag,
      title: 'Priority Governance',
      desc: 'Tiered SLA enforcement across four priority levels. Response and resolution targets are automatically mapped to account importance levels.',
    },
  ]

  return (
    <>
      <style>{`
        .cstl-section {
          background: var(--navy);
          position: relative;
          overflow: hidden;
        }
        .cstl-wrap {
          max-width: min(96vw, 1200px);
          margin: 0 auto;
          padding: 80px clamp(20px, 4vw, 72px);
          position: relative; z-index: 1;
        }
        .cstl-header {
          max-width: 640px;
          margin-bottom: 56px;
        }
        .cstl-flow {
          display: flex; align-items: center;
          gap: 0;
          padding: 60px 48px; margin-bottom: 80px;
          background: rgba(255,255,255,.01);
          border: 1px solid rgba(255,255,255,.05);
          border-radius: 40px;
          position: relative;
          z-index: 2;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -ms-overflow-style: none;
          scrollbar-width: none;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .cstl-flow::-webkit-scrollbar { display: none; }

        .cstl-stage-wrapper {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          scroll-snap-align: center;
        }

        .cstl-stage {
          width: 240px;
          flex-shrink: 0;
          position: relative; z-index: 2;
        }

        .cstl-stage-box {
          position: relative;
          width: 100%;
          padding: 18px 28px;
          border-radius: 16px;
          font-size: 14px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 12px;
          border: 1px solid;
          justify-content: center;
          white-space: nowrap;
          cursor: default;
          background: var(--stage-bg);
          box-shadow: 0 4px 12px rgba(0,0,0,.2), inset 0 0 10px rgba(255,255,255,0.05);
          transition: all .4s cubic-bezier(.16,1,.3,1);
        }
        .cstl-stage-box:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 12px 32px rgba(0,0,0,.4);
          border-color: var(--stage-color) !important;
        }
        
        .cstl-signal {
          position: absolute;
          top: 50%; left: 0;
          width: 120px; height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          box-shadow: 0 0 15px var(--gold);
          z-index: 0;
          animation: cstlTravel 5s linear infinite;
          opacity: 0.3;
        }
        @keyframes cstlTravel {
          0% { left: -20%; opacity: 0; }
          20% { opacity: 0.3; }
          80% { opacity: 0.3; }
          100% { left: 120%; opacity: 0; }
        }

        .cstl-stage-pulse {
          width: 8px; height: 8px; border-radius: 50%;
          position: relative;
        }
        .cstl-stage-pulse::after {
          content: ""; position: absolute; inset: -4px;
          border-radius: 50%; background: inherit;
          animation: cstlPulse 2s ease-out infinite; opacity: 0.4;
        }
        @keyframes cstlPulse {
          to { transform: scale(3); opacity: 0; }
        }

        .cstl-path {
          width: 80px; height: 2px;
          position: relative; display: flex; align-items: center;
          flex-shrink: 0;
          margin: 0;
        }
        .cstl-path-inner {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.15), rgba(255,255,255,0.02));
          border-radius: 2px;
        }
        .cstl-path-arrow {
          position: absolute; right: 0;
          color: rgba(255,255,255,0.4);
          filter: drop-shadow(0 0 4px rgba(255,255,255,0.2));
          animation: cstlArrowFlow 2s ease-in-out infinite;
        }
        @keyframes cstlArrowFlow {
          0%, 100% { transform: translateX(0); opacity: 0.4; }
          50% { transform: translateX(6px); opacity: 0.8; }
        }

        .cstl-path {
          width: 60px; height: 2px;
          position: relative; display: flex; align-items: center;
          flex-shrink: 0;
        }
        .cstl-path-inner {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.15), rgba(255,255,255,0.02));
          border-radius: 2px;
        }
        .cstl-path-arrow {
          position: absolute; right: 0;
          color: rgba(255,255,255,0.4);
          filter: drop-shadow(0 0 4px rgba(255,255,255,0.2));
          animation: cstlArrowFlow 2s ease-in-out infinite;
        }
        @keyframes cstlArrowFlow {
          0%, 100% { transform: translateX(0); opacity: 0.4; }
          50% { transform: translateX(4px); opacity: 0.8; }
        }

        .cstl-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .cstl-feat-card {
          background: rgba(255,255,255,.02);
          border: 1px solid rgba(255,255,255,.06);
          border-radius: 16px; padding: 28px;
          transition: all .25s; cursor: default;
        }
        .cstl-feat-card:hover {
          border-color: var(--gold);
          background: rgba(255,255,255,.04);
          transform: translateY(-4px);
        }
        .cstl-feat-icon {
          color: var(--gold); margin-bottom: 16px;
        }
        .cstl-feat-title {
          font-size: 15px; font-weight: 600;
          color: var(--text); margin-bottom: 8px;
          font-family: 'Fraunces', serif;
        }
        .cstl-feat-desc {
          font-size: 13px; color: var(--text2);
          line-height: 1.6; font-weight: 300;
        }

        .cstl-reveal {
          opacity: 0; transform: translateY(22px);
          transition: opacity .7s ease, transform .7s cubic-bezier(.16,1,.3,1);
        }
        .cstl-reveal.visible { opacity: 1; transform: none; }
        .cstl-reveal-d1 { transition-delay: .1s; }
        .cstl-reveal-d2 { transition-delay: .15s; }
        .cstl-reveal-d3 { transition-delay: .2s; }
        .cstl-reveal-d4 { transition-delay: .25s; }
        .cstl-reveal-d5 { transition-delay: .3s; }
        .cstl-reveal-d6 { transition-delay: .35s; }

        @media (max-width: 1024px) {
          .cstl-flow { padding-bottom: 30px; margin-bottom: 40px; }
          .cstl-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 768px) {
          .cstl-stage { width: 180px; }
          .cstl-path { width: 40px; }
          .cstl-stage-box { padding: 14px 18px; font-size: 12px; }
        }
        @media (max-width: 640px) {
          .cstl-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="cstl-section" ref={sectionRef} id="lifecycle">
        <div className="cstl-wrap">
          <div className="cstl-header cstl-reveal">
            <div className="eyebrow eyebrow-gold"><span className="ey-line"></span>Lifecycle & Governance</div>
            <h2 className="h2 h2-white">State Machine Architecture.<br /><em>From Open to Closed.</em></h2>
            <p className="lead lead-white">
              A high-trust governance layer designed for enterprise scale. Every status change, rework event, and SLA breach is natively tethered to commercial value in real-time.
            </p>
          </div>

          <div className="cstl-reveal cstl-reveal-d1">
            <div className="cstl-flow">
              <div className="cstl-signal"></div>
              {stages.map((s, i) => (
                <div key={s.id} className="cstl-stage-wrapper">
                  <motion.div
                    className="cstl-stage"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <div
                      className="cstl-stage-box"
                      style={{
                        '--stage-color': s.color,
                        '--stage-bg': s.bg,
                        color: s.color,
                        background: s.bg,
                        borderColor: s.color + '55'
                      } as any}
                    >
                      <div className="cstl-stage-pulse" style={{ background: s.color }} />
                      {s.label}
                    </div>
                  </motion.div>

                  {i < stages.length - 1 && (
                    <div className="cstl-path">
                      <div className="cstl-path-inner" />
                      <ChevronRight size={20} className="cstl-path-arrow" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="cstl-grid">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className={`cstl-feat-card cstl-reveal cstl-reveal-d${i + 1}`}
                whileHover={{ y: -5, borderColor: 'var(--gold)', backgroundColor: 'rgba(255,255,255,0.04)' }}
              >
                <div className="cstl-feat-icon">
                  <f.icon size={22} strokeWidth={2} />
                </div>
                <div className="cstl-feat-title">{f.title}</div>
                <div className="cstl-feat-desc">{f.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}