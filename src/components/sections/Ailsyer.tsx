'use client'
import { useState, useEffect, useRef } from 'react'

/* ─────────────────────────────────────────────────────────
   DATA — sourced directly from BRD §48
   ───────────────────────────────────────────────────────── */

const LAYERS = [
    {
        id: 'copilot',
        badgeLabel: 'Surface Layer',
        title: 'The Daily Co-Pilot',
        tagline: 'Every user starts the day knowing exactly what needs to happen.',
        desc: 'At 08:00, the AI Digest converts structured data — overdue invoices, pending approvals, target tracking, at-risk deals — into a plain-language briefing for each user. After every interaction, the co-pilot suggests the next logical action based on pipeline stage, transcript content, and open follow-ups.',
        color: '#18B87A',
        colorDim: 'rgba(24,184,122,0.12)',
        borderDim: 'rgba(24,184,122,0.25)',
    },
    {
        id: 'automation',
        badgeLabel: 'Operations Layer',
        title: 'AI That Works Before You Do',
        tagline: 'Forms pre-filled, anomalies flagged, drafts ready — before you open the record.',
        desc: 'When a new SOR is opened for an account with prior orders, the form is pre-filled with AI-suggested line items, quantities, and pricing from order history. Every submission is checked against the account\'s trailing 6-month pattern — anomalies surface to the approver as an inline warning, never as a blocker.',
        color: '#C49A3C',
        colorDim: 'rgba(196,154,60,0.12)',
        borderDim: 'rgba(196,154,60,0.28)',
    },
    {
        id: 'gateway',
        badgeLabel: 'Foundation Layer',
        title: 'Model Gateway & BYOK',
        tagline: 'Your keys, your models, your cost — with no lock-in.',
        desc: 'Two model aliases — fast and smart — abstract provider and model selection. The fast alias handles latency-sensitive tasks: form pre-fill, natural language filters, digest generation. The smart alias handles reasoning tasks: thread summarisation, bottleneck analysis, pricing intelligence. BYOK tenants point their own keys at either alias with no platform token cap.',
        color: '#3470F0',
        colorDim: 'rgba(52,112,240,0.12)',
        borderDim: 'rgba(52,112,240,0.28)',
    },
]


/* ─────────────────────────────────────────────────────────
   DASHBOARD SCREENS
   ───────────────────────────────────────────────────────── */

function CopilotScreen() {
    return (
        <div style={{ padding: '18px 20px' }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '1.6px', marginBottom: 14 }}>
                AI Digest — 08:00
            </div>
            <div style={{ background: 'rgba(24,184,122,0.07)', border: '1px solid rgba(24,184,122,0.2)', borderRadius: 11, padding: '12px 14px', marginBottom: 12 }}>
                <div style={{ fontSize: 9.5, fontWeight: 700, color: '#18B87A', letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 7 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#18B87A', display: 'inline-block', animation: 'ceAiPulse 2s ease-in-out infinite' }} />
                    Morning Digest
                </div>
                <div style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.65 }}>
                    2 approvals pending — oldest waiting 18 hours. Overdue invoices total ₹34.2L across 4 accounts. Target attainment at 71% with 8 days remaining. Recommended action: follow up on SOR-0892.
                </div>
            </div>
            {[
                { client: 'Tata Metals', action: 'SOR-0892 — approval pending 18 hours', urgency: 'Urgent', uc: '#E0384F', ub: 'rgba(224,56,79,.08)', ubr: 'rgba(224,56,79,.22)' },
                { client: 'Infosys Ltd', action: 'MQL score 92 — qualification brief ready', urgency: 'Handoff', uc: '#18B87A', ub: 'rgba(24,184,122,.07)', ubr: 'rgba(24,184,122,.22)' },
                { client: 'Wipro Networks', action: 'Proposal sent 5 days ago — no response', urgency: 'Review', uc: '#C49A3C', ub: 'rgba(196,154,60,.07)', ubr: 'rgba(196,154,60,.2)' },
            ].map((row, i) => (
                <div key={row.client} style={{
                    display: 'flex', alignItems: 'center', gap: 10, padding: '9px 11px',
                    background: row.ub, border: `1px solid ${row.ubr}`, borderRadius: 9, marginBottom: 6,
                    animation: `ceSlideIn 0.4s ${i * 0.1}s cubic-bezier(.16,1,.3,1) both`,
                }}>
                    <div style={{
                        width: 30, height: 30, borderRadius: '50%',
                        background: `${row.uc}18`, border: `1px solid ${row.uc}35`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, fontSize: 9.5, fontWeight: 800, color: row.uc,
                        fontFamily: "'Fraunces',serif",
                    }}>
                        {row.client.slice(0, 2).toUpperCase()}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--text)', marginBottom: 2 }}>{row.client}</div>
                        <div style={{ fontSize: 10, color: 'var(--text3)', lineHeight: 1.4 }}>{row.action}</div>
                    </div>
                    <div style={{ fontSize: 9, fontWeight: 700, padding: '3px 9px', borderRadius: 100, background: `${row.uc}18`, color: row.uc, border: `1px solid ${row.uc}35`, flexShrink: 0 }}>
                        {row.urgency}
                    </div>
                </div>
            ))}
        </div>
    )
}

function AutomationScreen() {
    return (
        <div style={{ padding: '18px 20px' }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '1.6px', marginBottom: 14 }}>
                Operations AI — Running
            </div>
            {[
                {
                    label: 'Smart Draft — SOR-0912',
                    detail: 'Pre-filled from last 10 Tata Metals orders',
                    status: 'AI Suggested', sc: '#C49A3C', sb: 'rgba(196,154,60,.09)', sbc: 'rgba(196,154,60,.25)',
                    bar: 100, bc: '#C49A3C',
                    sub: [
                        { txt: 'Steel Rods 12mm — 200 units @ ₹2,100/unit', accepted: true },
                        { txt: 'Flat Bars 50×6mm — 150 units @ ₹1,850/unit', accepted: true },
                    ],
                },
                {
                    label: 'Anomaly Detection',
                    detail: 'Order value 340% above trailing 6-month average',
                    status: 'Flagged', sc: '#E0384F', sb: 'rgba(224,56,79,.07)', sbc: 'rgba(224,56,79,.22)',
                    bar: 100, bc: '#E0384F', sub: [],
                },
                {
                    label: 'Pricing Intelligence',
                    detail: 'Based on 8 prior Proformas — trend −2% per quarter',
                    status: 'Advisory', sc: '#3470F0', sb: 'rgba(52,112,240,.07)', sbc: 'rgba(52,112,240,.22)',
                    bar: 100, bc: '#3470F0', sub: [],
                },
            ].map((item, i) => (
                <div key={item.label} style={{
                    background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)',
                    borderRadius: 10, padding: '10px 13px', marginBottom: 7,
                    animation: `ceSlideIn 0.4s ${i * 0.09}s cubic-bezier(.16,1,.3,1) both`,
                }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9, marginBottom: 5 }}>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--text)', marginBottom: 1 }}>{item.label}</div>
                            <div style={{ fontSize: 9.5, color: 'var(--text3)', lineHeight: 1.4 }}>{item.detail}</div>
                        </div>
                        <div style={{ fontSize: 9, fontWeight: 700, padding: '2px 9px', borderRadius: 100, background: item.sb, color: item.sc, border: `1px solid ${item.sbc}`, flexShrink: 0, whiteSpace: 'nowrap' }}>
                            {item.status}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

function GatewayScreen() {
    return (
        <div style={{ padding: '18px 20px' }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '1.6px', marginBottom: 14 }}>
                Model Gateway — BYOK Active
            </div>
            <div style={{ background: 'rgba(52,112,240,.07)', border: '1px solid rgba(52,112,240,.18)', borderRadius: 11, padding: 14, marginBottom: 12 }}>
                {[
                    { alias: 'fast', model: 'Claude 3.5 Haiku', target: '< 800ms', col: '#C49A3C', w: '72%' },
                    { alias: 'smart', model: 'Claude 3.5 Sonnet', target: '< 4s', col: '#3470F0', w: '28%' },
                ].map((m, i) => (
                    <div key={m.alias} style={{ marginBottom: i === 0 ? 12 : 0, animation: `ceSlideIn 0.4s ${i * 0.12}s cubic-bezier(.16,1,.3,1) both` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 5 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                                <span style={{ fontFamily: "'Fraunces',serif", fontSize: 14, color: 'var(--text)', fontStyle: 'italic' }}>{m.alias}</span>
                                <span style={{ fontSize: 8.5, fontWeight: 700, padding: '1px 7px', borderRadius: 100, background: `${m.col}18`, color: m.col, border: `1px solid ${m.col}35` }}>alias</span>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text2)' }}>{m.model}</div>
                                <div style={{ fontSize: 9.5, color: m.col, fontWeight: 700 }}>{m.target}</div>
                            </div>
                        </div>
                        <div style={{ height: 3, background: 'rgba(255,255,255,.06)', borderRadius: 100, overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: m.w, background: m.col, borderRadius: 100 }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const SCREENS = [CopilotScreen, AutomationScreen, GatewayScreen]

/* ─────────────────────────────────────────────────────────
   SUB-COMPONENT: BROWSER VIEW
   ───────────────────────────────────────────────────────── */

function BrowserView({ active, layer, isMobile, caption }: {
    active: number,
    layer: any,
    isMobile?: boolean,
    caption: string
}) {
    const Screen = SCREENS[active]
    return (
        <div style={{
            background: 'var(--surface)', border: '1px solid var(--border2)',
            borderRadius: isMobile ? 20 : 16, overflow: 'hidden',
            boxShadow: `0 24px 72px rgba(0,0,0,.42), 0 0 0 1px rgba(255,255,255,.04), 0 0 50px ${layer.colorDim}`,
            transition: 'box-shadow 0.8s ease',
            marginTop: isMobile ? 12 : 0,
            marginBottom: isMobile ? 40 : 0,
            width: '100%',
        }}>
            <div style={{
                height: isMobile ? 36 : 40, background: 'var(--navy3)', borderBottom: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', padding: '0 14px', gap: 10,
            }}>
                <div style={{ display: 'flex', gap: 5 }}>
                    {['#FF5F57', '#FFBD2E', '#28C840'].map(c => (
                        <span key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c, display: 'inline-block' }} />
                    ))}
                </div>
                {!isMobile && (
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                        <div style={{
                            background: 'var(--surface2)', border: '1px solid var(--border2)',
                            borderRadius: 6, padding: '4px 14px', fontSize: 10, color: 'var(--text3)',
                            display: 'flex', alignItems: 'center', gap: 7, maxWidth: 260,
                        }}>
                            <span style={{ width: 5, height: 5, borderRadius: '50%', background: layer.color, display: 'inline-block' }} />
                            app.clientera.io / ai-intelligence
                        </div>
                    </div>
                )}
                <div style={{ fontSize: 9, color: 'var(--text3)', whiteSpace: 'nowrap', marginLeft: isMobile ? 'auto' : 0 }}>
                    <span style={{ color: layer.color, fontWeight: 700 }}>{layer.badgeLabel}</span>
                </div>
            </div>

            <div style={{ minHeight: isMobile ? 300 : 360 }}>
                <Screen />
            </div>

            <div style={{
                height: 32, background: 'rgba(0,0,0,0.22)', borderTop: '1px solid var(--border)',
                display: isMobile ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 10.5, fontWeight: 500, color: 'var(--text2)', gap: 8,
            }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: layer.color, display: 'inline-block' }} />
                {caption}
            </div>
        </div>
    )
}

/* ─────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────── */

export default function AILayer() {
    const [active, setActive] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true)
    const observerRef = useRef<IntersectionObserver | null>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

    const CAPTIONS = [
        'AI Digest delivered at 08:00 — next action surfaced automatically per user',
        'Smart Draft and Anomaly Detection run on every SOR submission before approval',
        'Model aliases resolved at runtime — BYOK tenants carry no platform token cap',
    ]

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '-25% 0px -45% 0px',
            threshold: 0.1
        }

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const idx = Number(entry.target.getAttribute('data-index'))
                    if (!isNaN(idx)) {
                        setActive(idx)
                        setAutoPlay(false)
                    }
                }
            })
        }, options)

        cardsRef.current.forEach(c => { if (c) observerRef.current?.observe(c) })

        return () => observerRef.current?.disconnect()
    }, [])

    useEffect(() => {
        if (autoPlay) {
            timerRef.current = setInterval(() => setActive(p => (p + 1) % LAYERS.length), 5500)
        } else if (timerRef.current) clearInterval(timerRef.current)
        return () => { if (timerRef.current) clearInterval(timerRef.current) }
    }, [autoPlay])

    const pick = (i: number) => {
        setActive(i)
        setAutoPlay(false)
        cardsRef.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return (
        <section className="section-dark" id="ai-layer" style={{ position: 'relative', overflow: 'hidden' }}>
            <style>{`
                @keyframes ceAiPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(1.5)} }
                @keyframes ceSlideIn { from{opacity:0;transform:translateY(9px)} to{opacity:1;transform:none} }
                @keyframes ceDashReveal {
                    from { opacity: 0; transform: translateY(20px) scale(0.98); filter: blur(4px); }
                    to { opacity: 1; transform: none; filter: blur(0); }
                }
                .ai-grid { 
                    display: grid; 
                    grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr); 
                    gap: 64px; 
                    align-items: start; 
                    margin-top: 56px; 
                }
                .ai-mobile { display: none; }
                .dashboard-reveal {
                    animation: ceDashReveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
                }
                @media (max-width: 900px) {
                    .ai-grid { display: none; }
                    .ai-mobile { display: flex; flex-direction: column; gap: 0; }
                }
            `}</style>

            <div style={{
                position: 'absolute', top: -180, right: -160, width: 560, height: 560,
                borderRadius: '50%', background: LAYERS[active].colorDim, filter: 'blur(110px)',
                pointerEvents: 'none', transition: 'background 0.9s ease', zIndex: 0,
            }} />

            <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
                <div className="reveal" style={{ maxWidth: 640 }}>
                    <div className="eyebrow"><span className="ey-line" />AI Intelligence Layer</div>
                    <h2 className="h2" style={{ whiteSpace: 'normal', overflowWrap: 'break-word' }}>AI that acts,<br /><em>not just advises.</em></h2>
                    <p className="lead" style={{ whiteSpace: 'normal', overflowWrap: 'break-word' }}>Clientera is designed to reduce effort. AI always surfaces a recommendation.</p>
                </div>

                <div className="reveal ai-grid">
                    <div style={{ paddingRight: 32 }}>
                        {LAYERS.map((l, i) => (
                            <div 
                                key={l.id}
                                ref={el => { cardsRef.current[i] = el }}
                                data-index={i}
                                onClick={() => pick(i)}
                                style={{
                                    display: 'flex', alignItems: 'flex-start', gap: 16,
                                    padding: '32px 0 32px 16px', borderBottom: '1px solid var(--border)',
                                    cursor: 'pointer', position: 'relative', width: '100%',
                                    transition: 'opacity 0.4s ease',
                                    opacity: active === i ? 1 : 0.4,
                                }}
                            >
                                <div style={{
                                    position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: l.color,
                                    transform: active === i ? 'scaleY(1)' : 'scaleY(0)', transformOrigin: 'top', transition: 'transform .45s'
                                }} />
                                <div style={{ width: '100%', minWidth: 0 }}>
                                    <div style={{ fontSize: 9, fontWeight: 700, padding: '2px 8px', borderRadius: 100, marginBottom: 8, background: active === i ? `${l.color}18` : 'rgba(255,255,255,.04)', color: active === i ? l.color : 'var(--text3)', border: `1px solid ${active === i ? l.borderDim : 'transparent'}`, display: 'inline-block' }}>{l.badgeLabel}</div>
                                    <div style={{ fontFamily: "'Fraunces',serif", fontSize: 20, color: active === i ? 'var(--text)' : 'var(--text2)', marginBottom: 6, transition: 'color 0.4s' }}>{l.title}</div>
                                    <div style={{ 
                                        fontSize: 13, color: 'var(--text2)', lineHeight: 1.7, 
                                        opacity: active === i ? 1 : 0, 
                                        maxHeight: active === i ? 250 : 0, 
                                        overflow: 'hidden', transition: 'all .5s cubic-bezier(0.16, 1, 0.3, 1)',
                                        whiteSpace: 'normal', overflowWrap: 'break-word'
                                    }}>{l.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ position: 'sticky', top: 120 }}>
                        <div key={active} className="dashboard-reveal">
                            <BrowserView active={active} layer={LAYERS[active]} caption={CAPTIONS[active]} />
                        </div>
                    </div>
                </div>

                <div className="ai-mobile">
                    {LAYERS.map((l, i) => (
                        <div key={l.id} style={{ marginBottom: 40 }}>
                            <div style={{ padding: '24px 20px', background: 'rgba(255,255,255,.02)', borderRadius: '20px 20px 0 0', border: `1px solid ${l.color}44`, borderBottom: 'none' }}>
                                <div style={{ fontSize: 9, fontWeight: 700, color: l.color, textTransform: 'uppercase', marginBottom: 8 }}>{l.badgeLabel}</div>
                                <div style={{ fontFamily: "'Fraunces',serif", fontSize: 20, color: '#fff', marginBottom: 8 }}>{l.title}</div>
                                <div style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6 }}>{l.desc}</div>
                            </div>
                            <BrowserView active={i} layer={l} caption={CAPTIONS[i]} isMobile={true} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}