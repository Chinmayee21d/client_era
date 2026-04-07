'use client'

import { motion } from 'framer-motion'
import { BrainCircuit, FileText, TrendingDown, ShieldAlert } from 'lucide-react'

const AI_CAPS = [
  {
    Icon: BrainCircuit,
    badge: 'Scoring Layer',
    title: 'AI Lead Score Overlay',
    desc: 'The AI analyses enrichment data, news signals, and behavioural patterns to surface leads showing buying intent before they cross your MQL threshold. Always advisory — your configured scoring model stays in control.',
    color: 'var(--gold)',
    bg: 'rgba(196,154,60,.08)',
    border: 'rgba(196,154,60,.25)',
  },
  {
    Icon: FileText,
    badge: 'Handoff Layer',
    title: 'MQL Qualification Brief',
    desc: 'When a rep receives an MQL from the handoff queue, the AI generates a structured brief: fit assessment, intent signals, opening questions, and any enrichment signals commercially relevant — delivered as a collapsible panel on the lead record.',
    color: '#3470F0',
    bg: 'rgba(52,112,240,.08)',
    border: 'rgba(52,112,240,.25)',
  },
  {
    Icon: TrendingDown,
    badge: 'Analytics Layer',
    title: 'Campaign Insight Alerts',
    desc: 'The analytics dashboard includes an AI insights panel identifying campaigns tracking significantly above or below expectations — suggesting budget reallocation and flagging segments with unusual engagement.',
    color: 'var(--green)',
    bg: 'rgba(24,184,122,.08)',
    border: 'rgba(24,184,122,.25)',
  },
]

export default function LM_AI() {
  return (
    <section id="ai" style={{ background: 'var(--navy)' }}>
      <style>{`
        .lm-ai-card {
          background: rgba(255,255,255,.025);
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 18px; padding: 30px 28px;
          position: relative; overflow: hidden;
          transition: all .35s cubic-bezier(.175,.885,.32,1.275); cursor: default;
        }
        .lm-ai-card:hover { transform: translateY(-6px); box-shadow: 0 24px 56px rgba(0,0,0,.45); background: rgba(255,255,255,.04); }
        .lm-ai-accent { position: absolute; top: 0; left: 0; right: 0; height: 2px; border-radius: 18px 18px 0 0; }
        .lm-ai-icon {
          width: 50px; height: 50px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px; transition: transform .3s;
        }
        .lm-ai-card:hover .lm-ai-icon { transform: scale(1.1) rotate(-5deg); }
        .lm-ai-badge {
          display: inline-flex; font-size: 8px; font-weight: 700; padding: 2px 8px; border-radius: 100px;
          text-transform: uppercase; letter-spacing: .5px; margin-bottom: 12px;
        }
        @media (max-width: 900px) { .lm-ai-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .lm-ai-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 56px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="ey-line" />AI Intelligence Layer
          </div>
          <h2 className="h2" style={{ textAlign: 'center' }}>
            The AI That Works<br /><em>Before You Do.</em>
          </h2>
          <p className="lead" style={{ margin: '0 auto', textAlign: 'center' }}>
            Three AI capabilities embedded directly into the lead lifecycle — surfacing signals, generating briefs, and flagging opportunities before you think to look.
          </p>
        </div>

        <div className="reveal lm-ai-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20, transitionDelay: '.1s',
        }}>
          {AI_CAPS.map((c, i) => (
            <motion.div
              key={c.title}
              className="lm-ai-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .12 }}
            >
              <div className="lm-ai-accent" style={{ background: `linear-gradient(90deg, ${c.color}, transparent)` }} />
              <div className="lm-ai-icon" style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.color }}>
                <c.Icon size={24} strokeWidth={1.8} />
              </div>
              <div className="lm-ai-badge" style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.color }}>{c.badge}</div>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 400, color: 'var(--text)', lineHeight: 1.3, marginBottom: 14 }}>
                {c.title}
              </div>
              <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Advisory note */}
        <div className="reveal" style={{
          marginTop: 24, display: 'flex', gap: 12, alignItems: 'flex-start',
          padding: '18px 24px', borderRadius: 14,
          background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.07)',
          transitionDelay: '.2s',
        }}>
          <ShieldAlert size={18} style={{ color: 'var(--text3)', flexShrink: 0, marginTop: 2 }} strokeWidth={1.8} />
          <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: 'var(--text)' }}>Always advisory by default.</strong> All AI features surface signals and recommendations — they never override your configured scoring model, qualification rules, or routing logic unless you explicitly enable autonomous AI actions.
          </p>
        </div>
      </div>
    </section>
  )
}
