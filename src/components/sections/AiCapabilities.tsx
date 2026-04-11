'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Mic, Mail, LineChart, Search, ImageIcon, Target } from 'lucide-react'

/* ── unchanged card data ── */
const CAPS = [
    {
        title: 'Voice Note Transcription',
        desc: 'Field reps record a note on the mobile app — up to 5 minutes. Groq Whisper transcribes it, tuned for Indian English and regional accents. Action items, follow-up dates, and mentioned names are extracted and presented for the rep to confirm as formal tasks.',
        Icon: Mic,
        badge: 'Real-time',
        badgeColor: '#18B87A',
        accent: '#18B87A',
        accentDim: 'rgba(24,184,122,0.10)',
        accentBorder: 'rgba(24,184,122,0.20)',
    },
    {
        title: 'Email Draft Assistance',
        desc: 'When replying to a client email, the AI drafts a suggested reply using the full client record — interaction history, open follow-ups, pipeline stage, and pending invoices. The rep edits and sends without leaving the platform.',
        Icon: Mail,
        badge: 'Always on',
        badgeColor: '#3470F0',
        accent: '#3470F0',
        accentDim: 'rgba(52,112,240,0.10)',
        accentBorder: 'rgba(52,112,240,0.20)',
    },
    {
        title: 'Target Commentary',
        desc: 'The Target vs Actual dashboard includes a one-paragraph AI commentary: current tracking percentage, the top three underperforming accounts or SKUs, projected end-of-period outcome, and one actionable recommendation. Refreshed every 6 hours.',
        Icon: LineChart,
        badge: 'Automated',
        badgeColor: '#C49A3C',
        accent: '#C49A3C',
        accentDim: 'rgba(196,154,60,0.10)',
        accentBorder: 'rgba(196,154,60,0.22)',
    },
    {
        title: 'Natural Language Filters',
        desc: 'A plain-language input bar on all main list pages — SOR, SO, Invoice, Claim, Account. The AI generates the corresponding filter set and applies it. Filters appear as editable chips labelled "AI Filter". The standard filter UI is never replaced.',
        Icon: Search,
        badge: 'Included',
        badgeColor: '#18B87A',
        accent: '#18B87A',
        accentDim: 'rgba(24,184,122,0.10)',
        accentBorder: 'rgba(24,184,122,0.20)',
    },
    {
        title: 'Claim Defect Classification',
        desc: "When a claim is submitted with images, the AI reads the description and photos and suggests a defect category and severity level from the tenant's configured categories. Shown as a suggestion panel to the claims processor — always human-confirmed.",
        Icon: ImageIcon,
        badge: 'Advisory',
        badgeColor: '#C49A3C',
        accent: '#C49A3C',
        accentDim: 'rgba(196,154,60,0.10)',
        accentBorder: 'rgba(196,154,60,0.22)',
    },
    {
        title: 'MQL Qualification Brief',
        desc: 'When a rep receives an MQL from the handoff queue, the AI generates a qualification brief: fit assessment, intent signals, suggested opening questions, and commercially relevant enrichment signals. Delivered as a collapsible panel on the lead record.',
        Icon: Target,
        badge: 'By design',
        badgeColor: '#3470F0',
        accent: '#3470F0',
        accentDim: 'rgba(52,112,240,0.10)',
        accentBorder: 'rgba(52,112,240,0.20)',
    },
]

const TOTAL = CAPS.length

/*
  Layout — tuned to match the CSS-slider reference image:
  ─────────────────────────────────────────────────────────
  Cards fan out symmetrically from center.
  Center card is largest (scale 1.0), lifted highest (lowest translateY).
  Each step away: smaller, slightly lower, less opaque, behind.
  Horizontal step is tight so cards overlap significantly (~45%).
  Cards beyond ±2 positions are hidden (opacity 0).
  No rotation — all cards stay perfectly upright.
*/
type TransformResult = {
    x: number
    y: number
    scale: number
    opacity: number
    zIndex: number
}

function getTransform(offset: number, isMobile: boolean, isTiny: boolean): TransformResult {
    const abs = Math.abs(offset)
    const sign = offset === 0 ? 0 : offset > 0 ? 1 : -1

    /* x — spacing between cards */
    const xStep = isMobile ? (isTiny ? 65 : 100) : 136
    const x = sign * xStep * abs

    /* y — drop side cards down */
    const yTable = isMobile ? [0, 20, 40] : [0, 36, 60]
    const y = yTable[Math.min(abs, 2)] ?? 80

    /* scale — active vs sides */
    const scaleTable = isMobile ? [1.0, 0.82, 0.7] : [1.0, 0.875, 0.765]
    const scale = scaleTable[Math.min(abs, 2)] ?? 0.6

    /* opacity — hide secondary cards on tiny screens */
    let opacity = 1
    if (abs === 0) opacity = 1
    else if (abs === 1) opacity = 1
    else if (isTiny) opacity = 0
    else if (abs === 2) opacity = 0.8
    else opacity = 0

    const zIndex = 200 - abs * 40

    return { x, y, scale, opacity, zIndex }
}

/* ── scoped styles ── */
const CSS = `
  .cap-stage {
    position: relative;
    height: 480px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    perspective: 1600px;
    perspective-origin: 50% 100%;
    margin-bottom: 20px;
  }

  .cap-card {
    position: absolute;
    width: 330px;
    min-height: 420px;
    border-radius: 22px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    will-change: transform, opacity;
    transition:
      transform  0.6s cubic-bezier(0.16, 1, 0.3, 1),
      opacity    0.5s ease,
      box-shadow 0.4s  ease,
      border     0.3s  ease;
    background: #ffffff;
  }
  .cap-card[style*="opacity: 0"] { pointer-events: none; }

  .cap-inner {
    padding: 36px 32px 30px;
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
  }

  .cap-bar {
    position: absolute;
    top: 0; left: 28px; right: 28px;
    height: 3px;
    border-radius: 0 0 3px 3px;
  }

  .cap-icon {
    width: 52px; height: 52px;
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 26px; flex-shrink: 0;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .cap-card.active .cap-icon { transform: scale(1.1); }

  .cap-title {
    font-family: 'Fraunces', serif;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 14px;
    color: var(--ink);
  }

  .cap-desc {
    font-family: 'Geist', sans-serif;
    font-size: 15px;
    color: var(--ink3);
    line-height: 1.75;
    font-weight: 300;
    flex: 1;
    margin: 0;
  }

  .cap-badge {
    display: inline-flex;
    align-self: flex-start;
    align-items: center;
    gap: 6px;
    font-family: 'Geist', sans-serif;
    font-size: 11px;
    font-weight: 700;
    padding: 5px 12px;
    border-radius: 100px;
    border: 1px solid transparent;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 20px;
  }

  .cap-arrow {
    width: 44px; height: 44px;
    border-radius: 50%;
    border: 1px solid rgba(11,22,40,0.13);
    background: #fff;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    color: var(--ink2);
    box-shadow: 0 2px 10px rgba(11,22,40,0.07);
    transition: all 0.25s;
    user-select: none;
  }
  .cap-arrow:hover {
    border-color: var(--gold);
    color: var(--gold);
    transform: scale(1.06);
  }

  @media (max-width: 768px) {
    .cap-card { width: 300px; min-height: 400px; }
  }

  @media (max-width: 640px) {
    .cap-stage { height: 440px; margin-bottom: 0; }
    .cap-card  { width: 275px; min-height: 380px; }
    .cap-inner { padding: 30px 24px 24px; }
    .cap-title { font-size: 18px; margin-bottom: 8px; }
    .cap-desc  { font-size: 13px; line-height: 1.6; }
    .cap-icon  { width: 42px; height: 42px; margin-bottom: 18px; }
  }

  @media (max-width: 480px) {
    .cap-card { width: 250px; min-height: 360px; }
  }
`

export default function AiCapabilities() {
    const [active, setActive] = useState(0)
    const [visible, setVisible] = useState(false)
    const [width, setWidth] = useState(1200)
    const sectionRef = useRef<HTMLDivElement>(null)
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

    /* resize hook */
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const isMobile = width < 768
    const isTiny = width < 480

    /* intersection reveal */
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true) },
            { threshold: 0.1 }
        )
        if (sectionRef.current) obs.observe(sectionRef.current)
        return () => obs.disconnect()
    }, [])

    /* auto-advance */
    const resetTimer = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current)
        timerRef.current = setInterval(() => setActive(p => (p + 1) % TOTAL), 3600)
    }, [])

    useEffect(() => {
        resetTimer()
        return () => { if (timerRef.current) clearInterval(timerRef.current) }
    }, [resetTimer])

    const go = useCallback((dir: 1 | -1) => {
        setActive(p => (p + dir + TOTAL) % TOTAL)
        resetTimer()
    }, [resetTimer])

    const jump = useCallback((i: number) => {
        setActive(i)
        resetTimer()
    }, [resetTimer])

    /* keyboard */
    useEffect(() => {
        const h = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') go(-1)
            if (e.key === 'ArrowRight') go(1)
        }
        window.addEventListener('keydown', h)
        return () => window.removeEventListener('keydown', h)
    }, [go])

    const cap = CAPS[active]

    return (
        <section
            ref={sectionRef}
            className="section-light"
            style={{ background: 'var(--cream)', padding: '32px 0 48px', position: 'relative', overflow: 'hidden' }}
        >
            <style>{CSS}</style>

            {/* dot-grid background */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: 'radial-gradient(circle, rgba(11,22,40,.05) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
            }} />

            {/* warm glow */}
            <div style={{
                position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)',
                width: 640, height: 380, borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(196,154,60,.08) 0%, transparent 65%)',
                pointerEvents: 'none',
            }} />

            <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>

                {/* ── Heading ── */}
                <div style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'none' : 'translateY(20px)',
                    transition: 'all 0.65s cubic-bezier(0.22,1,0.36,1)',
                    textAlign: 'center', maxWidth: 800, margin: '0 auto 56px',
                }}>
                    <div className="eyebrow eyebrow-dark" style={{ justifyContent: 'center' }}>
                        <span className="ey-line" />Native Intelligence
                    </div>
                    <h2 className="h2 h2-ink" style={{ 
                        marginTop: 12, marginBottom: 14, 
                        fontSize: isMobile ? '32px' : '52px',
                        lineHeight: 1.15
                    }}>
                        AI built into<br />{isMobile ? <em>every workflow.</em> : <em>every daily workflow.</em>}
                    </h2>
                    <p className="lead lead-ink" style={{ 
                        margin: '0 auto',
                        fontSize: isMobile ? '16px' : '19px',
                        maxWidth: 640,
                        lineHeight: 1.7
                    }}>
                        No separate tabs, no prompting required. ClientEra's AI works in the background — extracting tasks, drafting responses, and surfacing anomalies as you work.
                    </p>
                </div>

                {/* ── Card slider stage ── */}
                <div className="cap-stage">
                    {CAPS.map((c, i) => {
                        /* compute wrapped offset */
                        let offset = i - active
                        if (offset < -Math.floor(TOTAL / 2)) offset += TOTAL
                        if (offset > Math.floor(TOTAL / 2)) offset -= TOTAL

                        const { x, y, scale, opacity, zIndex } = getTransform(offset, isMobile, isTiny)
                        const isActive = offset === 0
                        const { Icon } = c

                        const shadow = isActive
                            ? `0 28px 64px rgba(11,22,40,0.14), 0 0 0 1.5px ${c.accentBorder}`
                            : `0 ${6 + Math.abs(offset) * 4}px ${20 + Math.abs(offset) * 10}px rgba(11,22,40,0.07)`

                        const border = isActive
                            ? `1.5px solid ${c.accentBorder}`
                            : '1px solid rgba(11,22,40,0.055)'

                        return (
                            <div
                                key={i}
                                className={`cap-card${isActive ? ' active' : ''}`}
                                onClick={() => jump(i)}
                                style={{
                                    transform: `translateX(${x}px) translateY(${y}px) scale(${scale})`,
                                    opacity,
                                    zIndex,
                                    boxShadow: shadow,
                                    border,
                                    pointerEvents: opacity < 0.05 ? 'none' : 'auto',
                                }}
                            >
                                <div className="cap-inner">

                                    {/* top colour bar */}
                                    <div
                                        className="cap-bar"
                                        style={{
                                            background: `linear-gradient(90deg, ${c.accent}, ${c.accent}66)`,
                                            opacity: isActive ? 1 : 0.4,
                                        }}
                                    />

                                    {/* icon */}
                                    <div
                                        className="cap-icon"
                                        style={{ background: c.accentDim, border: `1px solid ${c.accentBorder}`, color: c.accent }}
                                    >
                                        <Icon size={22} strokeWidth={1.65} />
                                    </div>

                                    {/* title */}
                                    <h3
                                        className="cap-title"
                                        style={{ color: isActive ? 'var(--ink)' : 'var(--ink2)' }}
                                    >
                                        {c.title}
                                    </h3>

                                    {/* description */}
                                    <p className="cap-desc" style={{ opacity: isActive ? 1 : 0.5 }}>
                                        {c.desc}
                                    </p>

                                    {/* badge */}
                                    <div
                                        className="cap-badge"
                                        style={{
                                            color: c.badgeColor,
                                            borderColor: c.badgeColor + '38',
                                            background: c.badgeColor + '0f',
                                        }}
                                    >
                                        <span className="cap-badge-dot" style={{ background: c.badgeColor }} />
                                        {c.badge}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* ── Navigation ── */}
                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: 18, marginTop: 32,
                }}>
                    {/* prev */}
                    <button className="cap-arrow" onClick={() => go(-1)} aria-label="Previous">←</button>

                    {/* dots */}
                    <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
                        {CAPS.map((c, i) => (
                            <button
                                key={i}
                                className="cap-dot"
                                onClick={() => jump(i)}
                                aria-label={`Go to ${c.title}`}
                                style={{
                                    all: 'unset',
                                    cursor: 'pointer',
                                    width: i === active ? 26 : 8,
                                    background: i === active ? c.badgeColor : 'rgba(11,22,40,0.13)',
                                    boxShadow: i === active ? `0 0 0 3px ${c.badgeColor}28` : 'none',
                                    height: 8,
                                    borderRadius: 100,
                                    transition: 'all 0.42s cubic-bezier(0.34,1.2,0.64,1)',
                                    display: 'block',
                                }}
                            />
                        ))}
                    </div>

                    {/* next */}
                    <button className="cap-arrow" onClick={() => go(1)} aria-label="Next">→</button>
                </div>

                {/* counter label */}
                <p style={{
                    textAlign: 'center', marginTop: 16,
                    fontFamily: "'Geist',sans-serif",
                    fontSize: 11.5, fontWeight: 500,
                    color: 'var(--ink3)', letterSpacing: '0.4px',
                    opacity: visible ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                }}>
                    {active + 1} / {TOTAL}&ensp;&mdash;&ensp;{cap.title}
                </p>
            </div>
        </section>
    )
}