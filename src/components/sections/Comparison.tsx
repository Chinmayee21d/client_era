'use client'

import { useState } from 'react';

const ROWS = [
    { feature: 'Data Model', legacy: 'Fragmented, bolted-on systems', clientera: 'One Unified 360° Timeline' },
    { feature: 'AI Role', legacy: 'Bolted-on chatbots', clientera: 'Core foundational intelligence layer' },
    { feature: 'Follow-ups', legacy: 'Manual rep reminders', clientera: 'Autonomous system execution' },
    { feature: 'Forecasting', legacy: 'Historical, rear-view reporting', clientera: 'Predictive revenue modeling' },
    { feature: 'User Experience', legacy: 'Data-entry heavy', clientera: 'Ambient AI-assisted, low-effort UI' },
    { feature: 'Field Sales', legacy: 'No GPS, no mobile intelligence', clientera: 'GPS check-ins + Groq voice AI' },
    { feature: 'Marketing Attribution', legacy: 'Vanishes after lead handoff', clientera: 'Full-funnel to closed revenue' },
    { feature: 'Compliance', legacy: 'Varies, often manual', clientera: 'SOC2, ISO27001, GDPR, DPDP 2023' },
];

export default function Comparison() {
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);

    return (
        <section className="section-dark" id="comparison" style={{ position: 'relative', background: 'var(--navy)', padding: '40px 0', overflow: 'hidden' }}>
            <div className="wrap">
                
                {/* ── Header ── */}
                <div className="reveal" style={{ textAlign: 'center', maxWidth: 660, margin: '0 auto 32px' }}>
                    <div className="eyebrow" style={{ justifyContent: 'center' }}>
                        <span className="ey-line" />Why ClientEra
                    </div>
                    <h2 className="h2" style={{ textAlign: 'center', marginTop: 8 }}>
                        Old systems record.<br /><em>ClientEra decides.</em>
                    </h2>
                    <p className="lead" style={{ margin: '0 auto', textAlign: 'center', marginTop: 12 }}>
                        Legacy CRMs act strictly as rear-view mirrors. ClientEra is the intelligent steering wheel — processing the past to execute your future.
                    </p>
                </div>

                {/* ── Dual-Pillar Comparison ── */}
                <div className="ce-compare-wrapper reveal" style={{ transitionDelay: '.2s' }}>
                    
                    {/* Left Axis: Capability Labels */}
                    <div className="ce-compare-labels">
                        <div style={{ height: 104 }} /> {/* Offset: legacy padding 24px + header 80px */}
                        {ROWS.map((r, i) => (
                            <div 
                                key={i} 
                                onMouseEnter={() => setHoveredRow(i)}
                                onMouseLeave={() => setHoveredRow(null)}
                                className="ce-row-label"
                                style={{
                                    color: hoveredRow === i ? 'var(--gold)' : 'var(--text2)',
                                    transform: hoveredRow === i ? 'translateX(4px)' : 'none',
                                }}
                            >
                                {r.feature}
                            </div>
                        ))}
                    </div>

                    {/* Left Pillar: Legacy Form */}
                    <div className="ce-compare-legacy">
                        <div className="ce-pillar-header">
                            <div className="ce-pillar-sub" style={{ color: 'rgba(255,255,255,0.5)' }}>The Old Way</div>
                            <div className="ce-pillar-title" style={{ color: 'var(--text)' }}>Legacy Systems</div>
                        </div>
                        
                        {ROWS.map((r, i) => (
                            <div 
                                key={i}
                                onMouseEnter={() => setHoveredRow(i)}
                                onMouseLeave={() => setHoveredRow(null)}
                                className="ce-pillar-row"
                                style={{ 
                                    background: hoveredRow === i ? 'rgba(255,255,255,0.04)' : 'transparent',
                                }}
                            >
                                <span className="ce-mobile-label">{r.feature}</span>
                                <div style={{ display: 'flex' }}>
                                    <span style={{ color: '#ef4444', marginRight: 14, fontWeight: 700 }}>✗</span>
                                    <span style={{ color: 'var(--text2)' }}>{r.legacy}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Pillar: ClientEra Form */}
                    <div className="ce-compare-ce">
                        <div className="ce-pillar-header ce-header-ce">
                            <div style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(196,154,60,0.12)', border: '1px solid rgba(196,154,60,0.25)', borderRadius: 100, color: 'var(--gold)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700, alignSelf: 'flex-start', marginBottom: 8 }}>
                                The Only Way
                            </div>
                            <div className="ce-pillar-title" style={{ color: '#fff', fontSize: 24 }}>ClientEra OS</div>
                        </div>
                        
                        {ROWS.map((r, i) => (
                            <div 
                                key={i}
                                onMouseEnter={() => setHoveredRow(i)}
                                onMouseLeave={() => setHoveredRow(null)}
                                className="ce-pillar-row"
                                style={{ 
                                    background: hoveredRow === i ? 'rgba(255,255,255,0.04)' : 'transparent',
                                    borderLeft: hoveredRow === i ? '3px solid var(--gold)' : '3px solid transparent',
                                }}
                            >
                                <span className="ce-mobile-label ce-mobile-label-ce">{r.feature}</span>
                                <div style={{ display: 'flex' }}>
                                    <span style={{ color: 'var(--gold)', marginRight: 14, fontWeight: 700 }}>✓</span>
                                    <span style={{ color: '#fff', fontWeight: 500 }}>{r.clientera}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <p style={{ textAlign: 'center', fontFamily: "'Fraunces',serif", fontSize: 17, color: 'var(--text2)', marginTop: 40, fontStyle: 'italic', fontWeight: 300 }}>
                    "Old systems record what happened. ClientEra decides what should happen next — and executes it."
                </p>
            </div>

            <style jsx>{`
                .ce-compare-wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 32px;
                    perspective: 1000px;
                }

                .ce-compare-labels {
                    width: 200px;
                    margin-right: 32px;
                    display: flex;
                    flex-direction: column;
                }

                .ce-row-label {
                    height: 52px;
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    font-weight: 700;
                    letter-spacing: -0.2px;
                    transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
                    cursor: default;
                }

                /* Legacy Pillar */
                .ce-compare-legacy {
                    width: 320px;
                    background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%);
                    border-radius: 20px 0 0 20px;
                    border: 1px solid rgba(255,255,255,0.1);
                    border-right: none;
                    padding-top: 24px;
                    padding-bottom: 24px;
                    box-shadow: -10px 0 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05);
                    position: relative;
                    z-index: 1;
                    backdrop-filter: blur(10px);
                }

                /* ClientEra Pillar */
                .ce-compare-ce {
                    width: 380px;
                    background: linear-gradient(135deg, rgba(196,154,60,0.12) 0%, rgba(196,154,60,0.06) 100%);
                    border-radius: 20px;
                    padding-top: 40px;
                    padding-bottom: 40px;
                    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(196,154,60,0.3), inset 0 1px 0 rgba(196,154,60,0.2);
                    position: relative;
                    z-index: 10;
                    margin-left: -16px; /* Vital overlap */
                    border: 1px solid rgba(196,154,60,0.25);
                    backdrop-filter: blur(10px);
                }
                
                .ce-compare-ce::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 20px;
                    background: radial-gradient(ellipse at top, rgba(196,154,60,0.15) 0%, transparent 60%);
                    pointer-events: none;
                }

                .ce-pillar-header {
                    padding: 0 32px;
                    height: 80px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    margin-bottom: 12px;
                }
                .ce-header-ce {
                    padding: 0 40px;
                    height: 96px; /* Slightly taller header for CE to match extra badge spacing */
                }

                .ce-pillar-sub {
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    font-weight: 700;
                    margin-bottom: 6px;
                }

                .ce-pillar-title {
                    font-size: 20px;
                    font-weight: 700;
                    letter-spacing: -0.5px;
                }

                .ce-pillar-row {
                    height: 52px;
                    padding: 0 32px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    font-size: 14px;
                    line-height: 1.4;
                    transition: all 0.2s;
                    cursor: default;
                }
                .ce-compare-ce .ce-pillar-row {
                    padding: 0 40px;
                }

                .ce-mobile-label { display: none; }

                /* Responsive Mobile Stacking */
                @media (max-width: 992px) {
                    .ce-compare-wrapper {
                        flex-direction: column;
                        align-items: stretch;
                        gap: 32px;
                        margin-top: 48px;
                    }
                    .ce-compare-labels { 
                        display: none; 
                    }
                    .ce-compare-legacy, .ce-compare-ce {
                        width: 100%;
                        border-radius: 20px;
                        margin-left: 0;
                        padding-top: 32px;
                        padding-bottom: 32px;
                    }
                    .ce-compare-legacy {
                        border-right: 1px solid rgba(255,255,255,0.1);
                    }
                    .ce-pillar-header {
                        height: auto;
                        padding: 0 24px;
                        margin-bottom: 16px;
                    }
                    .ce-pillar-row {
                        height: auto;
                        min-height: 52px;
                        padding: 12px 24px;
                    }
                    .ce-compare-ce .ce-pillar-row {
                        padding: 12px 24px;
                    }
                    
                    /* Show labels inline on mobile */
                    .ce-mobile-label { 
                        display: block; 
                        font-size: 11.5px; 
                        text-transform: uppercase; 
                        letter-spacing: 1px;
                        color: rgba(255,255,255,0.4); 
                        font-weight: 700;
                        margin-bottom: 8px; 
                    }
                    .ce-mobile-label-ce {
                        color: rgba(255,255,255,0.5);
                    }
                }
            `}</style>
        </section>
    );
}