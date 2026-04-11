'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  RotateCcw, Zap, Link, MessageSquare,
  Folder, Tag, ChevronRight, Activity
} from 'lucide-react'

export default function CS_TicketLifecycle() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, card: HTMLDivElement) => {
      const rect = card.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      card.style.setProperty('--mouse-x', `${x}%`)
      card.style.setProperty('--mouse-y', `${y}%`)
    }

    cardRefs.current.forEach(card => {
      if (card) {
        const handler = (e: MouseEvent) => handleMouseMove(e, card)
        card.addEventListener('mousemove', handler)
        card.addEventListener('mouseleave', () => {
          card.style.setProperty('--mouse-x', '50%')
          card.style.setProperty('--mouse-y', '50%')
        })
      }
    })
  }, [])

  const stages = [
    { id: 'open', label: 'Open', color: '#E0384F', bg: '#fff' },
    { id: 'in_progress', label: 'In Progress', color: '#F5A623', bg: '#fff' },
    { id: 'pending_client', label: 'Pending Client', color: 'var(--blue)', bg: '#fff' },
    { id: 'resolved', label: 'Resolved', color: 'var(--gold)', bg: '#fff' },
    { id: 'closed', label: 'Closed', color: 'var(--green)', bg: '#fff' },
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
          margin-bottom: 48px;
        }
        .cstl-flow {
          display: flex; 
          align-items: center;
          justify-content: center;
          gap: 0;
          padding: 0;
          margin-bottom: 64px;
          position: relative;
          z-index: 2;
        }

        .cstl-stage-wrapper {
          display: flex;
          align-items: center;
          flex-shrink: 1;
          min-width: 0;
        }

        .cstl-stage {
          flex: 1;
          min-width: 0;
          position: relative;
          z-index: 2;
        }

        .cstl-stage-box {
          position: relative;
          width: 100%;
          padding: 18px 24px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          cursor: pointer;
          background: #fff;
          border: 2px solid;
          border-color: var(--stage-color);
          color: var(--stage-color);
          box-shadow: 0 4px 16px rgba(0,0,0,.06);
          transition: all .35s cubic-bezier(.16,1,.3,1);
          overflow: hidden;
        }
        .cstl-stage-box::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--stage-color);
          opacity: 0;
          transition: opacity .35s cubic-bezier(.16,1,.3,1);
          z-index: -1;
        }
        .cstl-stage-box:hover {
          transform: translateY(-6px) scale(1.04);
          box-shadow: 0 16px 40px rgba(0,0,0,.15);
          color: #fff;
          border-color: var(--stage-color);
        }
        .cstl-stage-box:hover::before {
          opacity: 1;
        }
        .cstl-stage-box::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255,255,255,.3);
          transform: translate(-50%, -50%);
          transition: width .6s, height .6s;
        }
        .cstl-stage-box:hover::after {
          width: 300px;
          height: 300px;
        }

        .cstl-stage-pulse {
          display: none;
        }

        .cstl-path {
          width: 60px; height: 2px;
          position: relative; display: flex; align-items: center;
          flex-shrink: 0;
          margin: 0;
        }
        .cstl-path-inner {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(196,154,60,0.3), transparent);
          border-radius: 2px;
          overflow: hidden;
        }
        .cstl-path-inner::after {
          content: "";
          position: absolute;
          left: -100%;
          top: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          animation: flowLine 3s ease-in-out infinite;
        }
        @keyframes flowLine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .cstl-path-arrow {
          position: absolute; right: -2px;
          color: var(--gold);
          filter: drop-shadow(0 0 4px rgba(196,154,60,0.4));
          animation: cstlArrowFlow 2s ease-in-out infinite;
        }
        @keyframes cstlArrowFlow {
          0%, 100% { transform: translateX(0); opacity: 0.5; }
          50% { transform: translateX(4px); opacity: 1; }
        }

        .cstl-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .cstl-feat-card {
          background: rgba(255,255,255,.02);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 18px; 
          padding: 32px;
          transition: all .35s cubic-bezier(.16,1,.3,1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .cstl-feat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(196,154,60,.08) 0%, transparent 50%);
          opacity: 0;
          transition: opacity .35s;
        }
        .cstl-feat-card:hover {
          border-color: rgba(196,154,60,.4);
          background: rgba(255,255,255,.05);
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,.2);
        }
        .cstl-feat-card:hover::before {
          opacity: 1;
        }
        .cstl-feat-icon {
          color: var(--gold); 
          margin-bottom: 20px;
          transition: all .35s cubic-bezier(.16,1,.3,1);
        }
        .cstl-feat-card:hover .cstl-feat-icon {
          transform: scale(1.15) rotate(-5deg);
          filter: drop-shadow(0 4px 8px rgba(196,154,60,.4));
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
          .cstl-flow { margin-bottom: 48px; }
          .cstl-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 768px) {
          .cstl-flow { flex-wrap: wrap; gap: 12px; }
          .cstl-stage-wrapper { flex-direction: column; width: 100%; }
          .cstl-stage { width: 100%; }
          .cstl-path { display: none; }
          .cstl-stage-box { padding: 12px 16px; font-size: 12px; }
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
                      } as any}
                    >
                      {s.label}
                    </div>
                  </motion.div>

                  {i < stages.length - 1 && (
                    <div className="cstl-path">
                      <div className="cstl-path-inner" />
                      <ChevronRight size={16} className="cstl-path-arrow" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="cstl-grid">
            {features.map((f, i) => (
              <div
                key={i}
                ref={el => { cardRefs.current[i] = el }}
                className={`cstl-feat-card cstl-reveal cstl-reveal-d${i + 1}`}
              >
                <div className="cstl-feat-icon">
                  <f.icon size={24} strokeWidth={2.2} />
                </div>
                <div className="cstl-feat-title">{f.title}</div>
                <div className="cstl-feat-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}