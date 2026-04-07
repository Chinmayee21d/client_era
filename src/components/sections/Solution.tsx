'use client'
import { Layers, Zap, RotateCcw, BarChart3, Megaphone, UserPlus, FileText, Package, Receipt, LifeBuoy, Home, Settings, Shield } from 'lucide-react'

const STAGES = [
    { label: 'Campaign', icon: Megaphone, color: '#f87171', border: 'rgba(239,68,68,.4)' },
    { label: 'Lead', icon: UserPlus, color: '#fbbf24', border: 'rgba(245,158,11,.4)' },
    { label: 'SOR', icon: FileText, color: '#34d399', border: 'rgba(16,185,129,.4)' },
    { label: 'Sales Order', icon: Package, color: 'var(--gold)', border: 'rgba(196,154,60,.45)' },
    { label: 'Invoice', icon: Receipt, color: '#a5b4fc', border: 'rgba(99,102,241,.4)' },
    { label: 'Support', icon: LifeBuoy, color: '#22d3ee', border: 'rgba(6,182,212,.4)' },
]

const CARDS = [
    {
        icon: Home,
        title: 'One Home for Your Data',
        desc: 'Everything from the first chat to the final payment stays in one place. You never have to copy-paste or switch between different apps again.'
    },
    {
        icon: Zap,
        title: 'Smart AI Helper',
        desc: 'AI that writes your emails and summarizes your meetings for you. It handles the busy work so you can spend more time with your customers.'
    },
    {
        icon: Settings,
        title: 'Smooth Workflow Machine',
        desc: 'Deals move easily from sales to delivery. Everyone stays on the same page, and fixing mistakes is as simple as a single click.'
    },
    {
        icon: Shield,
        title: 'Verified & Secure Tracking',
        desc: 'Every meeting and update is automatically proven and safely stored. You get total honesty and security without any extra effort.'
    },
]

export default function Solution() {
    return (
        <section className="section-dark" id="solution">
            <div className="wrap">
                <div className="reveal" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto' }}>
                    <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="ey-line" />One Customer. One Timeline.</div>
                    <h2 className="h2" style={{ textAlign: 'center' }}>
                        Every touchpoint on a<br /><em>single intelligent timeline.</em>
                    </h2>
                    <p className="lead" style={{ margin: '0 auto', textAlign: 'center' }}>
                        A lead is not separate from a customer — it's the same entity evolving over time. ClientEra tracks the entire journey in one unified record. Context is never lost.
                    </p>
                </div>

                {/* Timeline flow */}
                <div className="ce-timeline reveal ce-timeline-responsive" style={{ transitionDelay: '.1s', marginTop: 40 }}>
                    {STAGES.map((s, i) => (
                        <div key={s.label} style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="ce-stage-box" style={{
                                borderColor: s.border,
                                color: s.color,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                fontWeight: 600,
                                fontSize: 13
                            }}>
                                <s.icon size={14} strokeWidth={2.5} />
                                {s.label}
                            </div>
                            {i < STAGES.length - 1 && <div className="ce-stage-connector" />}
                        </div>
                    ))}
                </div>

                {/* Cards */}
                <div className="reveal" style={{ transitionDelay: '.15s', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, marginTop: 40 }}>
                    {CARDS.map(c => (
                        <div key={c.title} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: 26, transition: 'all .3s', cursor: 'default' }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border2)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
                        >
                            <div style={{ width: 42, height: 42, borderRadius: 11, background: 'var(--gold-bg)', border: '1px solid rgba(196,154,60,.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', marginBottom: 14 }}>
                                <c.icon size={20} strokeWidth={2.2} />
                            </div>
                            <div style={{ fontFamily: "'Fraunces',serif", fontSize: 16, fontWeight: 400, marginBottom: 8, color: 'var(--text)' }}>{c.title}</div>
                            <div style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6 }}>{c.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}