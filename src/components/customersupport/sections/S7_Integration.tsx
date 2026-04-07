'use client'
import { useEffect, useRef } from 'react'

export default function CS_Comparison() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
            },
            { threshold: 0.1 }
        )
        const s = sectionRef.current
        if (!s) return
        s.querySelectorAll('.cscmp-reveal').forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    const rows = [
        { feature: 'Data model', legacy: 'Isolated ticketing system', clientera: 'Same platform as deals, invoices, orders' },
        { feature: 'Rep visibility', legacy: 'Never sees open tickets', clientera: 'Full ticket context in pre-visit brief' },
        { feature: 'SLA tracking', legacy: 'Manual spreadsheet updates', clientera: 'Real-time SLA engine, auto-escalation' },
        { feature: 'AI role', legacy: 'Generic chatbot, no context', clientera: 'Reads orders, invoices, visits — drafts reply' },
        { feature: 'CSAT', legacy: 'Score collected, never surfaced', clientera: 'Trend surfaced to rep before every visit' },
        { feature: 'Client portal', legacy: 'Expensive add-on or absent', clientera: 'Native, branded, tenant toggle — included' },
        { feature: 'Commercial link', legacy: 'No connection to deals or SOs', clientera: 'Ticket ↔ Deal ↔ SO linkage on one timeline' },
        { feature: 'Existing tools', legacy: 'Replace or ignore', clientera: 'Mirror in from Zendesk, Freshdesk, Intercom' },
    ]

    return (
        <>
            <style>{`
        /* ── CS COMPARISON — DARK ── */
        .cscmp-section {
          background: var(--navy2);
          position: relative; overflow: hidden;
        }
        .cscmp-wrap {
          max-width: min(96vw, 1200px);
          margin: 0 auto;
          padding: 80px clamp(20px, 4vw, 72px);
          position: relative; z-index: 1;
        }
        .cscmp-header { max-width: 640px; margin: 0 auto 52px; text-align: center; }
        .cscmp-eyebrow {
          display: inline-flex; align-items: center; gap: 9px;
          font-size: 11px; font-weight: 600; color: var(--gold);
          text-transform: uppercase; letter-spacing: 2.5px; margin-bottom: 18px;
        }
        .cscmp-ey-line { width: 20px; height: 1px; background: var(--gold); }
        .cscmp-h2 {
          font-family: 'Fraunces', serif;
          font-size: var(--std-h2-size); font-weight: 400;
          line-height: 1.08; letter-spacing: -1.2px;
          color: var(--text); margin-bottom: 14px;
        }
        .cscmp-h2 em { font-style: italic; color: var(--gold); font-weight: 300; }
        .cscmp-lead {
          font-size: var(--std-intro-size); color: var(--text2);
          line-height: 1.68; font-weight: 300;
        }

        /* comparison table */
        .cscmp-table {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 18px; overflow: hidden;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
        .cscmp-table::-webkit-scrollbar { display: none; }
        .cscmp-head {
          display: grid;
          grid-template-columns: 2fr 1.5fr 1.5fr;
          background: var(--navy3);
          border-bottom: 1px solid var(--border2);
          min-width: 560px;
        }
        .cscmp-head > div { padding: 16px 22px; font-size: 12px; font-weight: 700; }
        .cscmp-head .cscmp-col-ce {
          background: var(--gold-bg);
          border-left: 2px solid var(--gold);
          color: var(--gold);
        }
        .cscmp-row {
          display: grid;
          grid-template-columns: 2fr 1.5fr 1.5fr;
          border-bottom: 1px solid var(--border);
          transition: background .15s; min-width: 560px;
        }
        .cscmp-row:last-child { border-bottom: none; }
        .cscmp-row:hover { background: var(--navy3); }
        .cscmp-row > div { padding: 14px 22px; font-size: 12.5px; }
        .cscmp-col-feat { color: var(--text2); font-weight: 600; font-size: 12px; }
        .cscmp-col-leg { color: var(--text3); display: flex; align-items: center; gap: 7px; }
        .cscmp-col-ce {
          background: rgba(196,154,60,.04);
          border-left: 2px solid rgba(196,154,60,.15);
          color: var(--text); font-weight: 500;
          display: flex; align-items: center; gap: 7px;
        }
        .cscmp-check { color: var(--green); font-size: 14px; flex-shrink: 0; }
        .cscmp-cross { color: var(--text3); font-size: 14px; flex-shrink: 0; }

        /* bottom banner */
        .cscmp-bottom {
          margin-top: 20px;
          padding: 18px 24px;
          background: rgba(196,154,60,.08);
          border: 1px solid rgba(196,154,60,.2);
          border-radius: 12px;
          text-align: center;
          font-size: 14px; color: var(--text2); line-height: 1.6;
        }
        .cscmp-bottom em { color: var(--gold); font-style: normal; font-weight: 700; }

        /* reveal */
        .cscmp-reveal {
          opacity: 0; transform: translateY(22px);
          transition: opacity .7s ease, transform .7s cubic-bezier(.16,1,.3,1);
        }
        .cscmp-reveal.visible { opacity: 1; transform: none; }
        .cscmp-rd1 { transition-delay: .05s; }
        .cscmp-rd2 { transition-delay: .15s; }
        .cscmp-rd3 { transition-delay: .25s; }

        @media (max-width: 768px) {
          .cscmp-wrap { padding: 60px 22px; }
          .cscmp-head, .cscmp-row { grid-template-columns: 1.2fr 1fr 1fr; }
        }
      `}</style>

            <section className="cscmp-section" ref={sectionRef} id="comparison">
                <div className="cscmp-wrap">

                    <div className="cscmp-header cscmp-reveal cscmp-rd1">
                        <div className="cscmp-eyebrow" style={{ justifyContent: 'center' }}>
                            <div className="cscmp-ey-line"></div>The Diagnostic Matrix<div className="cscmp-ey-line"></div>
                        </div>
                        <h2 className="cscmp-h2">Legacy support tools<br /><em>vs ClientEra</em></h2>
                        <p className="cscmp-lead">
                            Old systems record what happened to a ticket. ClientEra connects it to everything that happened to the client — and decides what should happen next.
                        </p>
                    </div>

                    <div className="cscmp-reveal cscmp-rd2">
                        <div className="cscmp-table">
                            <div className="cscmp-head">
                                <div style={{ color: 'var(--text3)' }}>Capability</div>
                                <div style={{ color: 'var(--text3)' }}>Legacy Ticketing</div>
                                <div className="cscmp-col-ce">ClientEra</div>
                            </div>
                            {rows.map((row, i) => (
                                <div key={i} className="cscmp-row">
                                    <div className="cscmp-col-feat">{row.feature}</div>
                                    <div className="cscmp-col-leg">
                                        <span className="cscmp-cross">✕</span>
                                        {row.legacy}
                                    </div>
                                    <div className="cscmp-col-ce">
                                        <span className="cscmp-check">✓</span>
                                        {row.clientera}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cscmp-bottom">
                            Old systems record what happened to a ticket. <em>ClientEra connects it to the full commercial relationship — and acts on it.</em>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}