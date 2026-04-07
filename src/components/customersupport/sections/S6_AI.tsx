'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { 
  Brain, Sparkles, Activity, CheckCircle2, 
  Search, MessageSquare, Bot, ArrowRight,
  ShieldCheck, Zap, Globe, Clock, User,
  Mail, Phone, FileText, Database
} from 'lucide-react'

/* 
  ── UX REFINED AI DASHBOARD ──
  A spectacular, high-fidelity command center for Customer Support AI.
  Features: Fake cursor simulation, laser scanning, ghost-typing, 
  and real-time context retrieval visualization.
*/

const C = {
  navy: "#080f1e", navy2: "#0c1526", navy3: "#101d30",
  surf: "#14243c", surf2: "#192d48",
  b: "rgba(255,255,255,.06)", b2: "rgba(255,255,255,.11)",
  tx: "#e8eeff", tx2: "#94aac4", tx3: "#526880",
  gold: "#c49a3c", gBg: "rgba(196,154,60,.09)",
  grn: "#17b378", gnBg: "rgba(23,179,120,.09)",
  red: "#e0384f", rBg: "rgba(224,56,79,.08)",
  blu: "#3470F0", blBg: "rgba(52,112,240,.09)",
}

const wait = (ms: number) => new Promise(r => setTimeout(r, ms))

function Pip({ col = C.grn, sz = 5 }) {
  return (
    <span style={{
      display: "inline-block", width: sz, height: sz, borderRadius: "50%",
      background: col, flexShrink: 0,
      boxShadow: `0 0 8px ${col}aa`,
      animation: "aidPulse 2.2s ease-in-out infinite",
    }} />
  )
}

function SBar({ pct, col, delay = 0, h = 3, show }: { pct: number, col: string, delay?: number, h?: number, show: boolean }) {
  const [w, setW] = useState(0)
  useEffect(() => {
    if (!show) { setW(0); return }
    const t = setTimeout(() => setW(pct), delay + 100)
    return () => clearTimeout(t)
  }, [show, pct, delay])
  return (
    <div style={{ height: h, borderRadius: 99, background: "rgba(255,255,255,.04)", overflow: "hidden" }}>
      <div style={{
        height: "100%", borderRadius: 99, background: col, width: `${w}%`,
        transition: "width 1.4s cubic-bezier(.16,1,.3,1)",
        boxShadow: `0 0 10px ${col}33`,
      }} />
    </div>
  )
}

function Cursor({ x, y, vis, ring }: { x: number, y: number, vis: boolean, ring: boolean }) {
  return (
    <div style={{
      position: "absolute", left: x, top: y, pointerEvents: "none", zIndex: 1000,
      transform: "translate(-3px,-2px)",
      transition: "left .6s cubic-bezier(.16,1,.3,1), top .6s cubic-bezier(.16,1,.3,1), opacity .3s",
      opacity: vis ? 1 : 0,
    }}>
      {ring && (
        <div style={{
          position: "absolute", top: -12, left: -12, width: 32, height: 32,
          borderRadius: "50%", border: `2px solid ${C.gold}`, opacity: 0,
          animation: "aidRipple .6s ease-out forwards",
        }} />
      )}
      <svg width="20" height="23" viewBox="0 0 20 23" fill="none" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}>
        <path d="M4 3L18 12.5L10 14L7 22L4 3Z" fill="white" stroke={C.navy} strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export default function CS_AI_Intelligence() {
  const [step, setStep] = useState(0)
  const [caption, setCaption] = useState("")
  const [cx, setCx] = useState(100)
  const [cy, setCy] = useState(100)
  const [curVis, setCurVis] = useState(false)
  const [curRing, setCurRing] = useState(false)
  
  // Simulation Values
  const [queryTyped, setQueryTyped] = useState("")
  const [sentiment, setSentiment] = useState(0)
  const [draftedText, setDraftedText] = useState("")
  const [kbHits, setKbHits] = useState<any[]>([])
  const [isResolved, setIsResolved] = useState(false)
  const [isScanning, setIsScanning] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const dashRef = useRef<HTMLDivElement>(null)
  const approveBtnRef = useRef<HTMLButtonElement>(null)
  const running = useRef(false)

  const moveCursor = useCallback((x: number, y: number, duration = 600) => {
    setCx(x); setCy(y); return wait(duration)
  }, [])

  const clickEffect = useCallback(async () => {
    setCurRing(true); await wait(400); setCurRing(false)
  }, [])

  const typeEffect = useCallback(async (text: string, setter: (s: string) => void, speed = 40) => {
    let curr = ""
    for (const char of text) {
      curr += char
      setter(curr)
      await wait(Math.random() * speed + speed/2)
    }
  }, [])

  const runSimulation = useCallback(async () => {
    if (running.current) return
    running.current = true

    // RESET STATE
    setStep(0); setCaption("Standby — Monitoring Incoming Requests..."); setCurVis(false); setIsScanning(false)
    setQueryTyped(""); setSentiment(0); setDraftedText(""); setKbHits([]); setIsResolved(false)
    await wait(1500)
    setCurVis(true)

    // PHASE 1: INTAKE & SENTIMENT
    setCaption("Stage 1 — Parsing Intent & Sentiment Analytics")
    await moveCursor(140, 210, 800)
    await typeEffect("I've been charged twice for my subscription and I can't reach anyone on the phone! Please fix this ASAP.", setQueryTyped, 45)
    await wait(800)
    setSentiment(22) // Angry
    setCaption("✓ Critical billing intent detected · Sentiment: High Frustration")
    await wait(1800)

    // PHASE 2: CONTEXT SCAN
    setStep(1); setCaption("Stage 2 — Scanning Cross-System Intelligence...")
    setIsScanning(true)
    await moveCursor(80, 260, 700)
    await wait(400)
    setKbHits([
      { title: "Billing Sync Logs", confidence: 99, type: 'ERP' },
      { title: "Commercial Deal #8822", confidence: 91, type: 'CRM' }
    ])
    await wait(1200)
    setIsScanning(false)
    setSentiment(55) // Improving as AI finds the solution
    setCaption("✓ Duplicate payment verified in Stripe metadata. Solution found.")
    await wait(2000)

    // PHASE 3: AI DRAFTING
    setStep(2); setCaption("Stage 3 — Drafting Context-Aware Resolution...")
    await moveCursor(200, 240, 700)
    // PHASE 3: AI DRAFTING
    setStep(2); setCaption("Stage 3 — Drafting Context-Aware Resolution...")
    await moveCursor(200, 240, 700)
    await typeEffect("Hello! I've located the duplicate transaction (Ref: #882A) caused by a momentary sync lag. I've already initiated a direct refund which will appear in 3-5 days. I've also added a 10% credit to your next bill as a goodwill gesture for the inconvenience.", setDraftedText, 25)
    await wait(1000)
    setCaption("Proposal ready for Governance check.")
    await wait(1800)

    // PHASE 4: APPROVAL
    setStep(3); setCaption("Stage 4 — Human-in-the-Loop Approval")
    if (approveBtnRef.current && dashRef.current) {
        const dRect = dashRef.current.getBoundingClientRect()
        const bRect = approveBtnRef.current.getBoundingClientRect()
        await moveCursor(bRect.left - dRect.left + bRect.width/2, bRect.top - dRect.top + bRect.height/2, 900)
        await clickEffect()
        setIsResolved(true)
        setSentiment(98)
        setCaption("✓ Response Dispatched. Strategic relationship secured.")
    }
    await wait(3500)

    setCurVis(false)
    running.current = false
    setTimeout(runSimulation, 2000)
  }, [moveCursor, clickEffect, typeEffect])

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) runSimulation()
    }, { threshold: 0.15 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [runSimulation])

  return (
    <section className="cs-ai-intelligence" ref={sectionRef} id="ai-intelligence">
      <style>{`
        .cs-ai-intelligence { background: var(--cream); padding: clamp(80px, 10vw, 140px) 0; overflow: hidden; }
        .cs-ai-grid { max-width: 1200px; margin: 0 auto; padding: 0 clamp(20px, 5vw, 40px); display: grid; grid-template-columns: 1fr 1.4fr; gap: 100px; align-items: start; }
        
        .cs-ai-content { position: relative; z-index: 2; }
        .cs-ai-eyebrow { display: inline-flex; align-items: center; gap: 10px; font-size: 11px; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 2.5px; margin-bottom: 24px; }
        .cs-ai-ey-line { width: 32px; height: 1.5px; background: var(--gold); border-radius: 99px; }
        .cs-ai-h2 { font-family: 'Fraunces', serif; font-size: clamp(36px, 4.5vw, 54px); line-height: 1.05; color: var(--navy); margin-bottom: 32px; font-weight: 400; }
        .cs-ai-h2 em { font-style: italic; color: var(--gold); font-weight: 300; }
        .cs-ai-lead { font-size: 17px; color: var(--ink3); line-height: 1.7; margin-bottom: 40px; font-weight: 300; max-width: 480px; }
        .cs-dash-wrapper { margin-top: 156px; }

        /* Dashboard Shell */
        .cs-dash-shell {
          background: ${C.navy};
          border-radius: 20px;
          border: 1px solid ${C.b2};
          box-shadow: 0 40px 100px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04);
          position: relative; overflow: hidden;
          aspect-ratio: 16 / 13;
          display: flex; flex-direction: column;
          color: white;
        }

        .cs-dash-top { height: 40px; background: ${C.navy2}; border-bottom: 1px solid ${C.b}; display: flex; align-items: center; padding: 0 16px; gap: 12px; position: relative; z-index: 10; }
        .cs-dash-dots { display: flex; gap: 6px; }
        .cs-dash-dot { width: 9px; height: 9px; border-radius: 50%; }

        .cs-dash-main { flex: 1; display: grid; grid-template-columns: 180px 1fr; overflow: hidden; }
        .cs-dash-side { background: ${C.navy2}; border-right: 1px solid ${C.b}; padding: 20px; display: flex; flex-direction: column; gap: 20px; }
        
        .cs-dash-body { padding: 20px; position: relative; overflow: hidden; display: flex; flex-direction: column; }
        .cs-scan-line { position: absolute; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, ${C.gold}, transparent); top: 0; z-index: 5; box-shadow: 0 0 12px ${C.gold}; animation: dashScan 2s linear infinite; display: none; }
        .cs-scan-line.active { display: block; }
        @keyframes dashScan { from { top: 0; } to { top: 100%; } }

        .cs-step-pills { display: flex; gap: 6px; margin-bottom: 20px; }
        .cs-step-pill { flex: 1; height: 3px; border-radius: 4px; background: ${C.b2}; transition: all .6s; }
        .cs-step-pill.active { background: var(--gold); box-shadow: 0 0 8px var(--gold); }
        .cs-step-pill.done { background: ${C.grn}; }

        .cs-ticket-card { background: ${C.surf}; border: 1px solid ${C.b2}; border-radius: 10px; padding: 14px; font-size: 11.5px; line-height: 1.5; color: ${C.tx2}; position: relative; }
        .cs-draft-box { background: rgba(255,255,255,0.02); border: 1px dashed rgba(196,154,60,0.3); border-radius: 10px; padding: 14px; margin-top: 16px; font-size: 11.5px; line-height: 1.5; color: ${C.tx}; position: relative; animation: dashFadeIn 0.5s ease; }
        @keyframes dashFadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }

        .cs-caption-dock { height: 38px; background: #000; border-top: 1px solid ${C.b}; display: flex; align-items: center; padding: 0 18px; font-size: 10px; color: ${C.tx2}; gap: 10px; letter-spacing: 0.5px; }

        .cs-btn-action { padding: 10px 20px; border-radius: 8px; font-size: 12px; font-weight: 700; cursor: pointer; border: none; transition: all .3s cubic-bezier(.22,1,.36,1); }
        .cs-btn-approve { background: var(--gold); color: ${C.navy}; }
        .cs-btn-approve.success { background: ${C.grn}; color: white; }

        @keyframes aidPulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.1); opacity: 0.5; } }
        @keyframes aidRipple { 0% { transform: scale(0.3); opacity: 1; } 100% { transform: scale(3.5); opacity: 0; } }

        @media (max-width: 1024px) {
          .cs-ai-grid { grid-template-columns: 1fr; text-align: center; gap: 48px; }
          .cs-ai-lead { margin: 0 auto 40px; }
          .cs-dash-wrapper { margin-top: 0; }
          .cs-dash-shell { aspect-ratio: 16/13; }
        }
        @media (max-width: 768px) {
          .cs-dash-side { display: none; }
          .cs-dash-main { grid-template-columns: 1fr; }
          .cs-dash-shell { aspect-ratio: 1/1; }
        }
      `}</style>

      <div className="cs-ai-grid" ref={dashRef}>
        <div className="cs-ai-content reveal">
          <div className="cs-ai-eyebrow">
            <span className="cs-ai-ey-line" /> Native Intelligence
          </div>
          <h2 className="cs-ai-h2">
            The AI knows the deal<br />
            <em>Inside and out.</em>
          </h2>
          <p className="cs-ai-lead">
            ClientEra's AI doesn't just read the ticket. It reads the customer's full history — commercial value, historical sentiment, and operational commitments — to resolve issues before they escalate.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="cs-ai-feature" style={{ background: 'white', border: '1px solid #e8e4de', borderRadius: 16, padding: '20px 24px' }}>
              <Database size={18} color="var(--gold)" style={{ marginBottom: 10 }} />
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--navy)', marginBottom: 4 }}>Cross-Silo Context</div>
              <div style={{ fontSize: 11, color: 'var(--ink3)', lineHeight: 1.5 }}>Aggregates data from Zendesk, Freshdesk, and internal ERPs automatically.</div>
            </div>
            <div style={{ background: 'rgba(196,154,60,0.04)', borderRadius: 16, padding: '20px 24px', border: '1px solid rgba(196,154,60,0.1)' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--gold)', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
                <Zap size={14} /> 72% Efficiency
              </div>
              <div style={{ fontSize: 11, color: 'var(--ink3)', lineHeight: 1.5 }}>Reduction in first-response time across elite enterprise deployments.</div>
            </div>
          </div>
        </div>

        <div className="cs-dash-wrapper reveal">
          <div className="cs-dash-shell">
            {/* Nav Header */}
            <div className="cs-dash-top">
              <div className="cs-dash-dots">
                <div className="cs-dash-dot" style={{ background: '#FF5F57' }} />
                <div className="cs-dash-dot" style={{ background: '#FFBD2E' }} />
                <div className="cs-dash-dot" style={{ background: '#28C840' }} />
              </div>
              <div style={{ fontSize: 10, color: C.tx3, letterSpacing: 1.2, fontWeight: 500 }}>AI_COPILOT_CMD_CENTER v4.0</div>
            </div>

            {/* Dashboard Content */}
            <div className="cs-dash-main">
              <div className="cs-dash-side">
                <div>
                  <div style={{ fontSize: 8.5, fontWeight: 700, color: C.tx3, textTransform: 'uppercase', letterSpacing: 1.8, marginBottom: 12 }}>Sentiment Analysis</div>
                  <div style={{ background: C.surf, border: `1px solid ${C.b2}`, borderRadius: 10, padding: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, alignItems: 'center' }}>
                      <span style={{ fontSize: 16 }}>{sentiment > 50 ? '🙂' : '😡'}</span>
                      <span style={{ fontSize: 11, fontWeight: 700, color: sentiment > 50 ? C.grn : C.red }}>{sentiment}%</span>
                    </div>
                    <SBar pct={sentiment} col={sentiment > 50 ? C.grn : C.red} show={true} />
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: 8.5, fontWeight: 700, color: C.tx3, textTransform: 'uppercase', letterSpacing: 1.8, marginBottom: 12 }}>Knowledge Hits</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {kbHits.length === 0 ? (
                      <div style={{ padding: 12, border: `1px dashed ${C.b}`, borderRadius: 8, fontSize: 9, color: C.tx3, textAlign: 'center' }}>Awaiting Scan...</div>
                    ) : (
                      kbHits.map((h, i) => (
                        <div key={i} className="dashFadeIn" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: 10, border: `1px solid ${C.b}` }}>
                          <div style={{ fontSize: 10, fontWeight: 700, color: C.tx, marginBottom: 4 }}>{h.title}</div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 8 }}>
                            <span style={{ color: C.tx3 }}>Source: {h.type}</span>
                            <span style={{ color: C.grn }}>{h.confidence}% Match</span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div style={{ marginTop: 'auto', background: 'rgba(196,154,60,0.06)', borderRadius: 10, padding: 12, border: `1px solid ${C.b2}`, textAlign: 'center' }}>
                    <Activity size={18} color="var(--gold)" style={{ margin: '0 auto 8px', animation: 'aidPulse 2s infinite' }} />
                    <div style={{ fontSize: 8, fontWeight: 700, color: 'var(--gold)', letterSpacing: 1 }}>AUTO-OPTIMIZING</div>
                </div>
              </div>

              <div className="cs-dash-body">
                <Cursor x={cx} y={cy} vis={curVis} ring={curRing} />
                <div className={`cs-scan-line ${isScanning ? 'active' : ''}`} />

                <div className="cs-step-pills">
                  {[0, 1, 2, 3].map(i => (
                    <div key={i} className={`cs-step-pill ${step >= i ? (step === 3 && isResolved ? 'done' : 'active') : ''}`} />
                  ))}
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: '#192D48', border: `1px solid ${C.b}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <User size={16} color={C.tx2} />
                    </div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: C.tx }}>Amit K. (Bharti Airtel)</div>
                      <div style={{ fontSize: 9, color: C.tx3 }}>Strategic Enterprise Acc.</div>
                    </div>
                  </div>

                  <div className="cs-ticket-card">
                    {queryTyped}
                    {step === 0 && queryTyped.length === 0 && <span className="cs-ai-cursor" />}
                  </div>

                  {step >= 2 && (
                    <div className="cs-draft-box">
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                        <Bot size={14} color="var(--gold)" />
                        <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--gold)', letterSpacing: 1 }}>AI RESOLUTION SUGGESTION</span>
                      </div>
                      <div style={{ color: 'rgba(255,255,255,.85)', fontSize: 12 }}>
                        {draftedText}
                        {step === 2 && draftedText.length < 100 && <span className="cs-ai-cursor" />}
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div style={{ marginTop: 'auto', display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
                      <button className="cs-btn-action" style={{ background: 'rgba(255,255,255,0.05)', color: C.tx2, border: `1.5px solid ${C.b2}` }}>Regenerate</button>
                      <button ref={approveBtnRef} className={`cs-btn-action cs-btn-approve ${isResolved ? 'success' : ''}`}>
                        {isResolved ? "Response Sent ✓" : "Send Resolution"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="cs-caption-dock">
              <Pip col={C.gold} />
              <span>{caption}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}