'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function CS_CTA() {
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const card = cardRef.current
        if (!card) return
        const onMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect()
            const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width
            const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height
            card.style.transform = `perspective(1200px) rotateX(${-dy * 3}deg) rotateY(${dx * 3}deg)`
        }
        const onLeave = () => { card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)' }
        card.addEventListener('mousemove', onMove)
        card.addEventListener('mouseleave', onLeave)
        return () => {
            card.removeEventListener('mousemove', onMove)
            card.removeEventListener('mouseleave', onLeave)
        }
    }, [])

    return (
        <>
            <style>{`
        /* ── CS CTA — LIGHT WRAPPER ── */
        .cs-cta-outer {
          background: var(--cream);
          padding: clamp(48px, 5vw, 72px) clamp(20px, 4.8vw, 72px);
          position: relative; overflow: hidden;
        }
        .cs-cta-card {
          max-width: min(96vw, 1180px);
          margin: 0 auto;
          background: var(--navy);
          border-radius: 22px;
          padding: clamp(36px, 3.5vw, 56px) clamp(32px, 4.5vw, 64px);
          display: flex; align-items: center;
          justify-content: space-between;
          gap: clamp(24px, 3.5vw, 52px);
          position: relative; overflow: hidden;
          border: 1px solid rgba(196,154,60,.35);
          box-shadow: 0 0 32px rgba(196,154,60,.1), 0 32px 80px rgba(11,22,40,.28);
          transition: transform .3s ease;
        }
        .cs-cta-card::before {
          content: '';
          position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(196,154,60,.7), transparent);
        }
        .cs-cta-glow {
          position: absolute; border-radius: 50%;
          pointer-events: none;
          background: radial-gradient(circle, rgba(196,154,60,.18) 0%, transparent 68%);
          width: 380px; height: 380px;
          top: -160px; right: -80px;
          filter: blur(32px);
          animation: csctaglowdrift 14s ease-in-out infinite;
        }
        @keyframes csctaglowdrift {
          0%,100% { transform: translate(0,0) scale(1); }
          35% { transform: translate(16px,-18px) scale(1.07); }
          70% { transform: translate(-10px,12px) scale(.96); }
        }
        .cs-cta-left { position: relative; z-index: 1; flex: 1; min-width: 0; }
        .cs-cta-eyebrow {
          display: flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: var(--gold); margin-bottom: 18px;
        }
        .cs-cta-eyebrow::before, .cs-cta-eyebrow::after {
          content: ''; display: block;
          width: 24px; height: 1px;
          background: var(--gold); opacity: .6;
        }
        .cs-cta-h2 {
          font-family: 'Fraunces', serif;
          font-size: clamp(26px, 2.5vw, 42px); font-weight: 400;
          color: var(--text); line-height: 1.08;
          letter-spacing: -1px; margin-bottom: 10px;
        }
        .cs-cta-h2 em { font-style: italic; color: var(--gold); font-weight: 300; }
        .cs-cta-lead {
          font-size: clamp(13px, .9vw, 15px);
          color: rgba(143,163,192,.85); line-height: 1.6;
        }

        /* cross-page nav pills */
        .cs-cta-pills { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 20px; }
        .cs-cta-pill {
          padding: 6px 14px; border-radius: 100px;
          font-size: 11.5px; font-weight: 500;
          border: 1px solid rgba(255,255,255,.12);
          color: var(--text2); text-decoration: none;
          transition: all .2s;
        }
        .cs-cta-pill:hover {
          border-color: rgba(196,154,60,.35);
          color: var(--gold); background: rgba(196,154,60,.06);
        }

        .cs-cta-right {
          display: flex; flex-direction: column;
          gap: 10px; width: clamp(180px, 16vw, 230px);
          flex-shrink: 0; position: relative; z-index: 1;
        }
        .cs-cta-btn {
          display: flex; align-items: center; justify-content: center;
          padding: 14px 22px; border-radius: 10px;
          font-size: 14px; font-weight: 600;
          cursor: pointer; border: none;
          transition: all .28s cubic-bezier(.22,1,.36,1);
          text-decoration: none; width: 100%;
        }
        .cs-cta-btn-primary {
          background: var(--gold); color: var(--navy);
          box-shadow: 0 4px 22px rgba(196,154,60,.38);
        }
        .cs-cta-btn-primary:hover {
          background: var(--gold2); transform: translateY(-2px);
          box-shadow: 0 8px 36px rgba(196,154,60,.62);
        }
        .cs-cta-btn-ghost {
          background: rgba(255,255,255,.06); color: var(--text);
          border: 1.5px solid rgba(255,255,255,.22);
        }
        .cs-cta-btn-ghost:hover {
          background: rgba(255,255,255,.11);
          border-color: rgba(255,255,255,.38);
          transform: translateY(-2px);
        }
        .cs-cta-micro {
          text-align: center; font-size: 10.5px;
          color: rgba(255,255,255,.2); margin: 2px 0 0;
        }

        @media (max-width: 680px) {
          .cs-cta-card {
            flex-direction: column; align-items: stretch;
            padding: 28px 22px;
          }
          .cs-cta-left { text-align: center; }
          .cs-cta-eyebrow { justify-content: center; }
          .cs-cta-pills { justify-content: center; }
          .cs-cta-right { width: 100%; }
        }
      `}</style>

            <div className="cs-cta-outer">
                <div className="cs-cta-card" ref={cardRef}>
                    <div className="cs-cta-glow" aria-hidden="true"></div>

                    <div className="cs-cta-left">
                        <div className="cs-cta-eyebrow">Get Started</div>
                        <h2 className="cs-cta-h2">
                            Support that's built<br />
                            <em>into the deal.</em>
                        </h2>
                        <p className="cs-cta-lead">
                            Set up in 15 minutes. No integration required. Your team closes deals and resolves issues on the same platform — context never lost.
                        </p>
                        <div className="cs-cta-pills">
                            <a href="/lead-management" className="cs-cta-pill">← Lead Management</a>
                            <a href="/order-to-cash" className="cs-cta-pill">Order to Cash →</a>
                            <a href="/sales-and-engagement" className="cs-cta-pill">Sales and Engagement →</a>
                        </div>
                    </div>

                    <div className="cs-cta-right">
                        <Link href="/enquiry" className="cs-cta-btn cs-cta-btn-primary" style={{ textDecoration: 'none' }}>Book a demo</Link>
                        <a href="#features" className="cs-cta-btn cs-cta-btn-ghost">Explore features</a>
                        <p className="cs-cta-micro">No setup fees · Cancel anytime</p>
                    </div>
                </div>
            </div>
        </>
    )
}