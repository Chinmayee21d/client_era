'use client'

import { motion } from 'framer-motion'
import { Filter, GitBranch, VolumeX, ArrowRight } from 'lucide-react'

const FEATURES = [
  { Icon: Filter, title: 'Dynamic Segmentation', desc: 'Build audience segments from any combination of lead attributes — industry, geography, score range, source channel, engagement behaviour, or custom fields. Segments update automatically.', color: 'var(--gold)', bg: 'rgba(196,154,60,.08)', border: 'rgba(196,154,60,.2)' },
  { Icon: GitBranch, title: 'Multi-Touch Nurture Sequences', desc: 'Configurable triggers (time delay, engagement event, or score change), communication types (email, LinkedIn touch, SDR call task), and branching logic based on recipient response.', color: '#3470F0', bg: 'rgba(52,112,240,.08)', border: 'rgba(52,112,240,.2)' },
  { Icon: VolumeX, title: 'Suppression Management', desc: 'Unsubscribes, bounces, and opt-outs managed natively. Suppression rules cascade across all campaign types by default — configurable to channel-specific suppression.', color: '#18B87A', bg: 'rgba(24,184,122,.08)', border: 'rgba(24,184,122,.2)' },
]

const SEQ_STEPS = [
  { day: 'Day 0', action: 'Welcome Email → Score below 75 on open', color: '#3470F0', status: 'Sent' },
  { day: 'Day 3', action: 'Case Study Email → Opens tracked', color: '#C49A3C', status: 'Sent' },
  { day: 'Day 7', action: 'SDR Call Task assigned → No click on Day 3', color: '#8B5CF6', status: 'Active' },
  { day: 'Day 14', action: 'LinkedIn Touch Suggestion → Engagement check', color: '#18B87A', status: 'Pending' },
  { day: 'Day 21', action: 'Re-score evaluation → MQL or extend hold', color: '#F59E0B', status: 'Scheduled' },
]

export default function LM_Nurture() {
  return (
    <section id="nurture" style={{ background: '#f8f8f6' }}>
      <style>{`
        .lm-nur-feat {
          display: flex; gap: 14px; align-items: flex-start;
          padding: 16px 18px; border-radius: 14px;
          border: 1px solid transparent; transition: all .28s; cursor: default;
        }
        .lm-nur-feat:hover {
          background: rgba(0,0,0,.03); border-color: rgba(0,0,0,.07);
          transform: translateX(6px);
        }
        .lm-nur-feat-icon {
          width: 40px; height: 40px; border-radius: 11px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: transform .3s;
        }
        .lm-nur-feat:hover .lm-nur-feat-icon { transform: scale(1.1) rotate(-4deg); }
        .lm-seq-row {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 10px 14px; border-radius: 10px;
          background: rgba(0,0,0,.025); border: 1px solid rgba(0,0,0,.05);
          margin-bottom: 8px; transition: all .2s; cursor: default;
        }
        .lm-seq-row:hover { background: rgba(0,0,0,.05); transform: translateX(4px); }
        @media (max-width: 900px) { .lm-nur-cols { grid-template-columns: 1fr !important; } }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div className="eyebrow eyebrow-dark"><span className="ey-line" />Feature 8 — Lead Nurture &amp; Segmentation</div>
          <h2 className="h2 h2-ink">
            Leads That Aren't Ready Today —<br /><em>Won't Stay That Way.</em>
          </h2>
          <p className="lead lead-ink">
            Leads that don't reach the MQL threshold don't disappear. They stay in the nurture queue, managed through sequences and campaigns until their score crosses the line.
          </p>
        </div>

        <div className="reveal lm-nur-cols" style={{
          display: 'grid', gridTemplateColumns: '1fr 1.1fr',
          gap: 48, alignItems: 'start', transitionDelay: '.15s',
        }}>
          {/* LEFT — 3 feature strips */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                className="lm-nur-feat"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .1 }}
              >
                <div className="lm-nur-feat-icon" style={{ background: f.bg, border: `1px solid ${f.border}`, color: f.color }}>
                  <f.Icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--ink3)', lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — Sequence preview */}
          <div style={{
            background: '#fff', border: '1.5px solid rgba(0,0,0,.07)',
            borderRadius: 18, overflow: 'hidden', boxShadow: '0 8px 28px rgba(0,0,0,.06)',
          }}>
            <div style={{ padding: '12px 18px', borderBottom: '1px solid rgba(0,0,0,.06)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <GitBranch size={15} style={{ color: '#3470F0' }} />
              <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--ink3)', textTransform: 'uppercase', letterSpacing: 1.5 }}>Active Nurture Sequence — Anita Roy</span>
            </div>
            <div style={{ padding: '16px 18px' }}>
              <div style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.2, color: 'var(--ink3)', marginBottom: 12 }}>
                Sequence: Enterprise Late-Stage · Step 3 Active
              </div>
              {SEQ_STEPS.map((s, i) => (
                <motion.div
                  key={s.day}
                  className="lm-seq-row"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * .08 }}
                >
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: s.color, flexShrink: 0, marginTop: 4 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: s.color, marginBottom: 2 }}>{s.day}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink)', lineHeight: 1.5 }}>{s.action}</div>
                  </div>
                  <div style={{ fontSize: 9, fontWeight: 700, padding: '2px 8px', borderRadius: 100, background: `${s.color}15`, border: `1px solid ${s.color}30`, color: s.color, flexShrink: 0 }}>{s.status}</div>
                </motion.div>
              ))}
              <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8, color: 'var(--ink3)', fontSize: 11 }}>
                <ArrowRight size={13} style={{ color: '#3470F0' }} />
                Score will be re-evaluated at Day 21. If score ≥ 75, lead auto-promotes to MQL.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
