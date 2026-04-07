'use client';

import { useEffect, useState } from 'react';

export default function S1_Hero() {
    return (
        <section className="ce-hero" style={{
            position: 'relative',
            minHeight: '92vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            background: 'var(--navy)',
        }}>
            {/* Background canvas */}
            <div className="ce-hero-canvas">
                <div className="ce-hero-bg" />
                <div className="ce-hero-grid" />
                <div className="ce-hero-orb1" />
                <div className="ce-hero-orb2" />
                {/* Sweep lines */}
                {[
                    { top: '18%', width: '40%', left: '-5%', delay: '-2.0s', dur: '9s' },
                    { top: '33%', width: '35%', left: '10%', delay: '-5.5s', dur: '11s' },
                    { top: '50%', width: '50%', left: '-8%', delay: '-1.2s', dur: '8s' },
                    { top: '63%', width: '36%', left: '5%', delay: '-7.0s', dur: '10s' },
                    { top: '78%', width: '42%', left: '-3%', delay: '-3.8s', dur: '12s' },
                ].map((l, i) => (
                    <div key={i} className="ce-data-line" style={{ top: l.top, width: l.width, left: l.left, animationDelay: l.delay, animationDuration: l.dur }} />
                ))}
            </div>

            <div className="wrap" style={{
                position: 'relative',
                zIndex: 10,
                flex: 1,
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1fr)',
                gap: 'clamp(32px, 5vw, 64px)',
                alignItems: 'center',
                paddingTop: 'clamp(80px, 8vh, 100px)',
                paddingBottom: 'clamp(40px, 6vh, 80px)',
            }}>
                {/* Left content */}
                <div style={{
                    position: 'relative',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 9,
                    fontSize: 'clamp(11px,2.5vw,13px)',
                    fontWeight: 600,
                    color: 'var(--gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    marginBottom: 'clamp(20px,3vw,32px)',
                    marginTop: 'clamp(12px,4vw,64px)',
                }}>
                    <span style={{ width: 22, height: 1, background: 'var(--gold)', display: 'block' }} />
                    Clientera · Sales Ops
                    <span style={{ width: 22, height: 1, background: 'var(--gold)', display: 'block' }} />
                </div>

                <h1 style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: 'clamp(42px,5.5vw,76px)',
                    lineHeight: 1.05,
                    letterSpacing: 'clamp(-1px,-0.2vw,-2.5px)',
                    color: 'var(--text)',
                    marginBottom: 'clamp(20px,3vw,32px)',
                }}>
                    Every distributor.<br />
                    Every order. <em style={{ color: 'var(--gold)', fontStyle: 'italic', fontWeight: 300 }}>One view.</em>
                </h1>

                <p style={{
                    fontSize: 'clamp(17px,1.4vw,21px)',
                    color: 'var(--text2)',
                    maxWidth: 580,
                    lineHeight: 1.68,
                    marginBottom: 'clamp(32px,5vw,48px)',
                    fontWeight: 300,
                }}>
                    The Clientera Sales Ops module replaces fragmented emails, WhatsApp chains and spreadsheets with a single structured system for managing your entire distributor network — from SOR to dispatch, targets to claims.
                </p>

                <div style={{
                    display: 'flex',
                    gap: 12,
                    flexWrap: 'wrap',
                    marginBottom: 'clamp(32px,5vw,52px)',
                }}>
                    <a href="#workflow" style={{
                        fontSize: 'clamp(14px, 1.2vw, 16px)',
                        fontWeight: 600,
                        color: 'var(--navy)',
                        background: 'var(--gold)',
                        borderRadius: 12,
                        padding: 'clamp(12px, 1.6vw, 15px) clamp(24px, 2.8vw, 36px)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 10,
                        transition: 'all .2s',
                    }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--gold2)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 22px rgba(196,154,60,.3)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--gold)'; (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = ''; }}
                    >
                        See How It Works
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                    <a href="#dashboard" style={{
                        fontSize: 'clamp(14px, 1.2vw, 16px)',
                        fontWeight: 400,
                        color: 'var(--text)',
                        background: 'none',
                        border: '1px solid var(--border2)',
                        borderRadius: 12,
                        padding: 'clamp(12px, 1.6vw, 15px) clamp(24px, 2.8vw, 36px)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 10,
                        transition: 'all .2s',
                    }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,.28)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border2)'; }}
                    >
                        Live Dashboard
                    </a>
                </div>


            </div>

            {/* Right: animated dashboard card (Hidden on mobile) */}
            <div className="s1-hero-dashboard" style={{
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
            }}>
                <HeroDashboardCard />
            </div>
            </div>

            <style jsx>{`
                .s1-stats-bar {
                    position: relative;
                    z-index: 10;
                    display: flex;
                    align-items: stretch;
                    background: rgba(255,255,255,.032);
                    border-top: 1px solid rgba(255,255,255,.07);
                    backdrop-filter: blur(14px);
                    margin-top: auto;
                }
                .s1-stats-item {
                    flex: 1;
                    text-align: center;
                    padding: 16px;
                    border-right: 1px solid rgba(255,255,255,.07);
                    position: relative;
                    overflow: hidden;
                    transition: background .3s;
                }
                .s1-stats-item::before {
                    content: '';
                    position: absolute; inset: 0;
                    background: radial-gradient(ellipse at 50% 0%, rgba(196,154,60,.09) 0%, transparent 68%);
                    opacity: 0; transition: opacity .35s;
                }
                .s1-stats-item:hover::before { opacity: 1; }
                .s1-stats-num {
                    font-family: 'Fraunces', serif;
                    font-size: clamp(22px, 2vw, 34px);
                    color: var(--text); letter-spacing: -1px;
                    line-height: 1; margin-bottom: 5px;
                    position: relative; z-index: 1;
                }
                .s1-stats-lbl {
                    font-size: 9.5px;
                    color: rgba(255,255,255,.36);
                    letter-spacing: 1.5px;
                    text-transform: uppercase; font-weight: 500;
                    position: relative; z-index: 1;
                }

                @media (max-width: 900px) {
                    .s1-hero-dashboard {
                        display: none !important;
                    }
                    .ce-hero {
                        min-height: auto !important;
                        padding-bottom: 0 !important;
                    }
                    .wrap {
                        grid-template-columns: 1fr !important;
                        padding-top: 60px !important;
                        text-align: center !important;
                    }
                    .wrap p {
                        margin-left: auto !important;
                        margin-right: auto !important;
                    }
                    .wrap > div {
                        align-items: center !important;
                    }
                    .s1-stats-bar {
                        overflow-x: auto;
                        scrollbar-width: none;
                        -ms-overflow-style: none;
                        scroll-snap-type: x mandatory;
                        mask-image: linear-gradient(to right, transparent, black 15% , black 85%, transparent);
                        -webkit-mask-image: linear-gradient(to right, transparent, black 15% , black 85%, transparent);
                    }
                    .s1-stats-bar::-webkit-scrollbar { display: none; }
                    .s1-stats-item {
                        flex: 0 0 160px !important;
                        scroll-snap-align: center;
                    }
                }
                @media (max-width: 500px) {
                    .s1-stats-item { flex: 0 0 140px !important; }
                }
            `}</style>

            {/* Stats bar */}
            <div className="s1-stats-bar">
                {[
                    { num: '100%', label: 'Order Visibility' },
                    { num: '< 2min', label: 'SOR Notification' },
                    { num: '6', label: 'Workflow Stages' },
                    { num: 'Real-time', label: 'Target Tracking' },
                    { num: 'Full', label: 'Audit Trail' },
                ].map((item, i) => (
                    <div key={i} className="s1-stats-item" style={{ borderRight: i < 4 ? '1px solid rgba(255,255,255,.07)' : 'none' }}>
                        <div className="s1-stats-num">{item.num}</div>
                        <div className="s1-stats-lbl">{item.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function HeroDashboardCard() {
    const [activeStatus, setActiveStatus] = useState(0);

    const orders = [
        { ref: 'SOR-2024-0891', dist: 'Apex Distributors', status: 'SAP Order', statusColor: 'var(--green)', amount: '₹4,82,000', items: 12 },
        { ref: 'SOR-2024-0890', dist: 'Metro Traders Ltd', status: 'Proforma Pending', statusColor: '#F5A623', amount: '₹2,15,500', items: 8 },
        { ref: 'SOR-2024-0889', dist: 'Southern Depot Co', status: 'Dispatched', statusColor: 'var(--blue)', amount: '₹6,30,000', items: 19 },
        { ref: 'SOR-2024-0888', dist: 'North Region Hub', status: 'Confirmed Order', statusColor: 'var(--gold)', amount: '₹1,89,000', items: 6 },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStatus(p => (p + 1) % orders.length);
        }, 2400);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            background: 'rgba(18,32,64,.92)',
            backdropFilter: 'blur(22px)',
            border: '1px solid var(--border2)',
            borderRadius: 16,
            boxShadow: '0 24px 64px rgba(0,0,0,.45)',
            width: '100%',
            maxWidth: 480,
            overflow: 'hidden',
            animation: 'floatB 7s 1s ease-in-out infinite',
        }}>
            {/* Title bar */}
            <div style={{
                height: 40,
                background: 'rgba(255,255,255,.035)',
                borderBottom: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 14px',
                gap: 6,
            }}>
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#FF5F57', display: 'block' }} />
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#FFBD2E', display: 'block' }} />
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#28C840', display: 'block' }} />
                <span style={{ flex: 1, textAlign: 'center', fontSize: 10, color: 'var(--text3)', letterSpacing: 1 }}>Sales Operations · Live</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 9, color: 'var(--gold)', fontWeight: 600 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', display: 'block', animation: 'pulse 2s infinite' }} />
                    LIVE
                </span>
            </div>

            <div style={{ padding: '14px 16px' }}>
                {/* Header stats */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3,1fr)',
                    gap: 8,
                    marginBottom: 14,
                }}>
                    {[
                        { label: 'Pending SORs', val: '7', color: '#F5A623' },
                        { label: 'Active Orders', val: '23', color: 'var(--gold)' },
                        { label: 'Dispatched Today', val: '5', color: 'var(--green)' },
                    ].map((stat, i) => (
                        <div key={i} style={{
                            background: 'rgba(255,255,255,.04)',
                            border: '1px solid var(--border)',
                            borderRadius: 8,
                            padding: '8px 10px',
                            textAlign: 'center',
                        }}>
                            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 22, color: stat.color, letterSpacing: '-1px', lineHeight: 1 }}>{stat.val}</div>
                            <div style={{ fontSize: 8.5, color: 'var(--text3)', marginTop: 2 }}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Order rows */}
                <div style={{ fontSize: 9, color: 'var(--text3)', letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 8, fontWeight: 700 }}>Recent Orders</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    {orders.map((order, i) => (
                        <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 9,
                            padding: '8px 10px',
                            background: activeStatus === i ? 'rgba(196,154,60,.06)' : 'rgba(255,255,255,.025)',
                            border: `1px solid ${activeStatus === i ? 'rgba(196,154,60,.25)' : 'var(--border)'}`,
                            borderRadius: 8,
                            transition: 'all .4s',
                        }}>
                            <div style={{
                                width: 28, height: 28, borderRadius: '50%',
                                background: `hsl(${i * 70 + 200},60%,30%)`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 9, fontWeight: 700, color: '#fff', flexShrink: 0,
                            }}>
                                {order.dist.slice(0, 2).toUpperCase()}
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{order.ref}</div>
                                <div style={{ fontSize: 9.5, color: 'var(--text3)', marginTop: 1 }}>{order.dist} · {order.items} items</div>
                            </div>
                            <div style={{ textAlign: 'right', flexShrink: 0 }}>
                                <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text)' }}>{order.amount}</div>
                                <div style={{
                                    fontSize: 8,
                                    fontWeight: 700,
                                    padding: '2px 7px',
                                    borderRadius: 100,
                                    background: `${order.statusColor}18`,
                                    color: order.statusColor,
                                    marginTop: 2,
                                }}>{order.status}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Target bar */}
                <div style={{
                    marginTop: 12,
                    background: 'rgba(196,154,60,.08)',
                    border: '1px solid rgba(196,154,60,.18)',
                    borderRadius: 8,
                    padding: '9px 11px',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                        <span style={{ fontSize: 9.5, color: 'var(--text2)', fontWeight: 600 }}>Monthly Target Progress</span>
                        <span style={{ fontSize: 9.5, color: 'var(--gold)', fontWeight: 700 }}>73% achieved</span>
                    </div>
                    <div style={{ height: 5, background: 'rgba(255,255,255,.08)', borderRadius: 100, overflow: 'hidden' }}>
                        <div style={{
                            width: '73%',
                            height: '100%',
                            background: 'linear-gradient(90deg,var(--gold),var(--gold2))',
                            borderRadius: 100,
                            animation: 'progressGrow 1.5s ease-out',
                        }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                        <span style={{ fontSize: 8.5, color: 'var(--text3)' }}>₹1.46Cr of ₹2Cr</span>
                        <span style={{ fontSize: 8.5, color: 'var(--text3)' }}>9 days left</span>
                    </div>
                </div>
            </div>
        </div>
    );
}