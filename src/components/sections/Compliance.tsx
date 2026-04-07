'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { List, Lock, Globe, RefreshCcw, Shield, HardDrive, Database } from 'lucide-react'

const CARDS = [
    {
        title: 'DPDP Compliant',
        desc: "India's Digital Personal Data Protection Act. Consent tracking, right to erasure, data localisation. Live regulation — handled by design.",
        badge: 'Active',
        icon: Shield,
        iconColor: '#fbbf24',
        badgeColor: 'rgba(52, 211, 153, 0.1)',
        badgeTextCol: '#34d399'
    },
    {
        title: 'SOC 2 Type II',
        desc: "The security posture enterprise procurement requires. Without it you can't enter mid-market deals. With it, procurement becomes a product conversation.",
        badge: 'Certified',
        icon: Lock,
        iconColor: '#60a5fa',
        badgeColor: 'rgba(96, 165, 250, 0.1)',
        badgeTextCol: '#60a5fa'
    },
    {
        title: 'GDPR Ready',
        desc: "For companies hiring internationally or with EU operations. Data processing agreements, consent management, and erasure workflows built in.",
        badge: 'Compliant',
        icon: RefreshCcw,
        iconColor: '#34d399',
        badgeColor: 'rgba(52, 211, 153, 0.1)',
        badgeTextCol: '#34d399'
    },
    {
        title: 'Immutable Audit Log',
        desc: 'Every hire decision, override, commission trigger, and data access — timestamped and locked forever. Finance audit, legal discovery, all answered from one log.',
        badge: 'Always on',
        icon: List,
        iconColor: '#fbbf24',
        badgeColor: 'rgba(52, 211, 153, 0.1)',
        badgeTextCol: '#34d399'
    },
    {
        title: 'Data Sovereignty',
        desc: 'The buyer always owns the data. When any relationship ends, the non-paying party can export their data cleanly. No data held hostage.',
        badge: 'Guaranteed',
        icon: Database,
        iconColor: '#34d399',
        badgeColor: 'rgba(52, 211, 153, 0.1)',
        badgeTextCol: '#34d399'
    }
];

export default function Compliance() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="section-dark" id="compliance" style={{ background: '#0a1628', padding: '40px 0', overflow: 'hidden' }}>
            <div className="wrap">
                <div className="reveal" style={{ marginBottom: 40 }}>
                    <div className="eyebrow"><span className="ey-line" />Compliance + Trust</div>
                    <h2 className="h2 h2-white" style={{ fontSize: '48px', fontWeight: 400, marginTop: 16 }}>Compliance isn't a feature<br /><em style={{ color: 'var(--gold)', fontStyle: 'italic', fontWeight: 600 }}>you turn on.</em></h2>
                    <p className="lead" style={{ maxWidth: 700, color: 'rgba(255,255,255,0.7)', marginTop: 24 }}>It's how ClientEra was built. Enterprise procurement, CISOs, and data protection officers can relax.</p>
                </div>

                <div className="ce-comp-grid reveal" style={{ transitionDelay: '.2s' }}>
                    {CARDS.map((c, i) => (
                        <div
                            key={i}
                            className="ce-comp-card-wrap"
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="ce-comp-card">
                                <div className="ce-comp-icon">
                                    <c.icon size={16} color={c.iconColor} />
                                </div>
                                <div className="ce-comp-title">{c.title}</div>
                                <div className="ce-comp-desc">{c.desc}</div>
                                <div className="ce-comp-badge" style={{ background: 'rgba(52, 211, 153, 0.08)', color: '#34d399' }}>{c.badge}</div>
                            </div>

                            {/* Animated Floating Border Box */}
                            {hoveredIndex === i && (
                                <motion.div
                                    layoutId="complianceHoverBoundary"
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    className="ce-comp-hover-frame"
                                >
                                    <div className="ce-comp-hover-border" />
                                    <div className="ce-comp-hover-glow" />
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
            .ce-comp-grid {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                gap: 12px;
                padding-top: 10px;
            }
            
            .ce-comp-card-wrap {
                position: relative;
                cursor: default;
                height: 100%;
            }

            .ce-comp-card {
                position: relative;
                z-index: 2;
                background: rgba(255, 255, 255, 0.03); 
                border: 1px solid rgba(255,255,255,0.08);
                border-radius: 20px;
                padding: 24px 16px;
                height: 100%;
                min-height: 310px;
                display: flex;
                flex-direction: column;
                transition: background 0.3s;
            }

            .ce-comp-icon {
                width: 32px;
                height: 32px;
                border-radius: 10px;
                background: rgba(255,255,255,0.05);
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 20px;
                border: 1px solid rgba(255,255,255,0.1);
            }

            .ce-comp-title {
                font-size: 15px;
                font-weight: 700;
                color: #fff;
                margin-bottom: 12px;
                letter-spacing: -0.2px;
            }

            .ce-comp-desc {
                font-size: 12.5px;
                color: rgba(255,255,255,0.5);
                line-height: 1.5;
                font-weight: 400;
                flex: 1;
                margin-bottom: 20px;
            }

            .ce-comp-badge {
                align-self: flex-start;
                font-size: 10.5px;
                font-weight: 600;
                padding: 4px 12px;
                border-radius: 100px;
                letter-spacing: 0.3px;
                border: 1px solid rgba(52, 211, 153, 0.15);
            }

            .ce-comp-hover-frame {
                position: absolute;
                inset: -1px;
                border-radius: 21px;
                z-index: 3;
                pointer-events: none;
            }

            .ce-comp-hover-border {
                position: absolute;
                inset: 0;
                padding: 1.5px;
                border-radius: 21px;
                background: linear-gradient(145deg, rgba(196,154,60,0.8) 0%, rgba(196,154,60,0.2) 45%, rgba(196,154,60,0) 100%);
                -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                -webkit-mask-composite: xor;
                mask-composite: exclude;
            }

            .ce-comp-hover-glow {
                position: absolute;
                inset: 1.5px;
                border-radius: 19.5px;
                background: radial-gradient(circle at 10% 10%, rgba(196,154,60,0.12) 0%, rgba(196,154,60,0) 60%);
            }

            @media (max-width: 1200px) {
                .ce-comp-grid {
                    grid-template-columns: repeat(3, 1fr);
                }
            }

            @media (max-width: 768px) {
                .ce-comp-grid {
                    display: flex;
                    overflow-x: auto;
                    padding-bottom: 20px;
                    gap: 16px;
                    /* Hide scrollbar */
                    scrollbar-width: none; /* Firefox */
                    -ms-overflow-style: none;  /* IE and Edge */
                }
                .ce-comp-grid::-webkit-scrollbar {
                    display: none; /* Chrome, Safari and Opera */
                }
                .ce-comp-card-wrap {
                    flex: 0 0 280px;
                }
            }
        `}</style>
        </section>
    )
}
