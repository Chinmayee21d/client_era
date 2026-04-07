'use client'

import { motion } from 'framer-motion'
import { Activity, FileText, MessageSquare } from 'lucide-react'

const REPS_SCATTER = [
  { name: 'Arjun S.', visits: 42, quotes: 18, size: 38, color: 'var(--green)' },
  { name: 'Priya M.', visits: 38, quotes: 15, size: 34, color: 'var(--gold)' },
  { name: 'Sneha R.', visits: 35, quotes: 14, size: 32, color: 'var(--blue)' },
  { name: 'Raj K.', visits: 48, quotes: 8, size: 28, color: '#F5A623' },
  { name: 'Dev T.', visits: 22, quotes: 3, size: 22, color: 'var(--red)' },
]

const QUALITY_SCORES = [
  { name: 'Arjun S.', score: 92, color: 'var(--green)' },
  { name: 'Priya M.', score: 85, color: 'var(--gold)' },
  { name: 'Sneha R.', score: 78, color: 'var(--blue)' },
  { name: 'Raj K.', score: 45, color: '#F5A623' },
  { name: 'Dev T.', score: 32, color: 'var(--red)' },
]

const CHAT = [
  { from: 'manager', name: 'Vikram', text: 'Raj — I see 48 visits this month but only 8 quotes. What\'s happening with conversion?', time: '10:14 AM' },
  { from: 'rep', name: 'Raj K.', text: 'Most visits are existing account servicing. I\'ll focus on prospecting qualified leads this week.', time: '10:18 AM' },
  { from: 'manager', name: 'Vikram', text: 'Good. I\'ve tagged 5 high-potential accounts for you. Let\'s review Friday.', time: '10:20 AM' },
]

export default function SM_Coaching() {
  return (
    <section className="section-dark">
      <style>{`
        .sm-coach-chat-msg {
          padding: 10px 14px; border-radius: 12px;
          max-width: 85%; font-size: 12px; line-height: 1.55;
        }
        .sm-coach-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          transition-delay: .15s;
        }
        @media (max-width: 1024px) {
          .sm-coach-grid {
            display: flex;
            flex-direction: column;
            gap: 24px;
          }
          .sm-coach-scatter { height: 180px !important; }
        }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48, maxWidth: 650, margin: '0 auto 48px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="ey-line" />Coaching &amp; Performance
          </div>
          <h2 className="h2" style={{ textAlign: 'center' }}>
            Coach smarter.<br /><em>Not louder.</em>
          </h2>
          <p className="lead" style={{ margin: '0 auto', textAlign: 'center' }}>
            Correlate activity to results. See which reps work hard vs. work smart. Then have a conversation backed by data, not assumptions.
          </p>
        </div>

        <div className="reveal sm-coach-grid">
          {/* LEFT — Efficiency scatter + Quality bars */}
          <div className="sm-coach-dashboard" style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 18,
            padding: '24px 22px',
          }}>
            {/* Scatter plot simulation */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16,
            }}>
              <Activity size={16} style={{ color: 'var(--gold)' }} />
              <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: 1.5 }}>
                Activity-to-Result Efficiency
              </span>
            </div>

            <div className="sm-coach-scatter" style={{
              position: 'relative',
              height: 200,
              borderLeft: '1px solid var(--border)',
              borderBottom: '1px solid var(--border)',
              marginBottom: 8,
            }}>
              {/* Axis labels */}
              <div style={{ position: 'absolute', bottom: -20, left: '50%', transform: 'translateX(-50%)', fontSize: 8, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 1 }}>
                Visits →
              </div>
              <div style={{ position: 'absolute', left: -14, top: '50%', transform: 'translateY(-50%) rotate(-90deg)', fontSize: 8, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 1 }}>
                Quotes →
              </div>

              {/* Scatter dots */}
              {REPS_SCATTER.map((r, i) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * .1 + .2 }}
                  className="sm-coach-dot"
                  style={{
                    position: 'absolute',
                    left: `${(r.visits / 55) * 90 + 5}%`,
                    bottom: `${(r.quotes / 22) * 85 + 5}%`,
                    width: r.size,
                    height: r.size,
                    borderRadius: '50%',
                    background: `${r.color}25`,
                    border: `2px solid ${r.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'default',
                    transition: 'transform .2s',
                  }}
                  title={`${r.name}: ${r.visits} visits, ${r.quotes} quotes`}
                  whileHover={{ scale: 1.2 }}
                >
                  <span style={{ fontSize: 7, fontWeight: 700, color: r.color }}>{r.name.split(' ')[0]}</span>
                </motion.div>
              ))}
            </div>

            {/* Data Quality Scores */}
            <div style={{ marginTop: 28 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12,
              }}>
                <FileText size={14} style={{ color: 'var(--gold)' }} />
                <span style={{ fontSize: 9, fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 1.2 }}>
                  Data Quality Score
                </span>
              </div>
              {QUALITY_SCORES.map((r, i) => (
                <div key={r.name} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 60, fontSize: 10, color: 'var(--text3)', fontWeight: 500 }}>{r.name}</div>
                  <div style={{ flex: 1, height: 6, borderRadius: 3, background: 'rgba(255,255,255,.06)', overflow: 'hidden' }}>
                    <motion.div
                      style={{ height: '100%', borderRadius: 3, background: r.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${r.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: .5, delay: i * .08 + .2 }}
                    />
                  </div>
                  <div style={{ width: 28, fontSize: 11, fontWeight: 700, color: r.color, textAlign: 'right' }}>{r.score}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Manager-rep coaching thread */}
          <div className="sm-coach-thread" style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 18,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{
              padding: '14px 18px',
              borderBottom: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <MessageSquare size={16} style={{ color: 'var(--gold)' }} />
              <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: 1.5 }}>
                Contextual Coaching · Raj K. → Vikram
              </span>
            </div>

            <div style={{ padding: '18px 18px', flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {/* Account context */}
              <div style={{
                padding: '10px 14px',
                background: 'rgba(196,154,60,.06)',
                border: '1px solid rgba(196,154,60,.15)',
                borderRadius: 10,
                fontSize: 10, color: 'var(--text3)',
              }}>
                <span style={{ color: 'var(--gold)', fontWeight: 700 }}>Context:</span> Viewing deal — Raj K.&apos;s efficiency report · March 2026
              </div>

              {/* Chat messages */}
              {CHAT.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * .15 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: msg.from === 'manager' ? 'flex-end' : 'flex-start',
                  }}
                >
                  <div style={{ fontSize: 9, color: 'var(--text3)', marginBottom: 3, fontWeight: 600 }}>
                    {msg.name} · {msg.time}
                  </div>
                  <div
                    className="sm-coach-chat-msg"
                    style={{
                      background: msg.from === 'manager' ? 'rgba(196,154,60,.1)' : 'rgba(52,112,240,.08)',
                      border: `1px solid ${msg.from === 'manager' ? 'rgba(196,154,60,.2)' : 'rgba(52,112,240,.15)'}`,
                      color: 'var(--text2)',
                    }}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
