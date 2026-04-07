'use client'

import { motion } from 'framer-motion'
import { CheckCircle, RotateCcw, Inbox, ArrowUpRight } from 'lucide-react'

const FEATURES = [
  {
    icon: Inbox,
    title: 'Centralised Queue',
    desc: 'One place for all approvals — high-discount quotes, new account requests, and expense claims. No more scattered channels.',
  },
  {
    icon: ArrowUpRight,
    title: 'Auto-Escalation Engine',
    desc: 'Requests above your threshold automatically escalate to the next hierarchy level. Nothing falls through the cracks.',
  },
  {
    icon: RotateCcw,
    title: 'Rework mechanism',
    desc: 'Send back a request with specific notes. The rep corrects and resubmits — no restart. Collaboration, not bureaucracy.',
  },
]

const APPROVALS = [
  {
    type: 'Quote Approval',
    from: 'Arjun S.',
    detail: 'Reliance Ventures — ₹42L',
    badge: '22% discount',
    badgeCol: 'var(--gold)',
    badgeBg: 'rgba(196,154,60,.1)',
    time: '2h ago',
  },
  {
    type: 'New Account',
    from: 'Priya M.',
    detail: 'Mahindra Logistics — Mumbai West',
    badge: 'New Lead',
    badgeCol: 'var(--blue)',
    badgeBg: 'rgba(52,112,240,.1)',
    time: '4h ago',
  },
  {
    type: 'Expense Claim',
    from: 'Raj K.',
    detail: '₹4,200 — Client travel, Pune',
    badge: '₹4,200',
    badgeCol: 'var(--green)',
    badgeBg: 'rgba(24,184,122,.1)',
    time: '6h ago',
  },
]

export default function SM_Approvals() {
  return (
    <section className="section-light">
      <style>{`
        .sm-appr-feat {
          display: flex; gap: 14px; align-items: flex-start;
          padding: 16px 18px; border-radius: 14px;
          border: 1px solid transparent;
          transition: all .28s; cursor: default;
        }
        .sm-appr-feat:hover {
          background: #fff;
          border-color: rgba(0,0,0,.06);
          transform: translateX(6px);
        }
        .sm-appr-icon {
          width: 40px; height: 40px; border-radius: 11px;
          background: rgba(10,45,128,.06);
          border: 1px solid rgba(10,45,128,.12);
          display: flex; align-items: center; justify-content: center;
          color: #0A2D80; flex-shrink: 0;
          transition: transform .3s;
        }
        .sm-appr-feat:hover .sm-appr-icon { transform: scale(1.1) rotate(-4deg); }
        .sm-appr-item {
          padding: 16px 18px; border-radius: 14px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,.03);
          transition: all .25s; cursor: default;
        }
        .sm-appr-item:hover {
          background: rgba(255,255,255,.06);
          border-color: var(--border2);
          transform: translateY(-2px);
        }
        .sm-appr-btn {
          padding: 5px 12px; border-radius: 7px;
          font-size: 10px; font-weight: 700;
          border: none; cursor: pointer;
          transition: all .2s;
          text-transform: uppercase;
          letter-spacing: .5px;
        }
        .sm-appr-btn:hover { transform: translateY(-1px); }

        .sm-appr-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 48px;
          align-items: center;
          transition-delay: .15s;
        }
        @media (max-width: 1024px) {
          .sm-appr-grid {
            display: flex;
            flex-direction: column-reverse;
            gap: 32px;
          }
          .sm-appr-item { padding: 12px 14px; }
        }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div className="eyebrow eyebrow-dark"><span className="ey-line" />Approval Workflows</div>
          <h2 className="h2 h2-ink">
            Decide in seconds.<br /><em>Not in email threads.</em>
          </h2>
          <p className="lead lead-ink">
            Quotes, expenses, and new accounts — all in one intelligent queue with auto-escalation and a rework mechanic that eliminates restarts.
          </p>
        </div>

        <div className="reveal sm-appr-grid">
          {/* LEFT — Features */}
          <div className="sm-appr-features">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                className="sm-appr-feat"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .1 }}
              >
                <div className="sm-appr-icon">
                  <f.icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--ink3)', lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — Approval queue mockup */}
          <div className="sm-appr-dashboard">
            <div style={{
              background: 'var(--navy)',
              borderRadius: 18,
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,.2)',
            }}>
              <div className="ce-card-titlebar" style={{ borderBottom: '1px solid var(--border)' }}>
                <span className="ce-wdot ce-wd-r" /><span className="ce-wdot ce-wd-y" /><span className="ce-wdot ce-wd-g" />
                <span className="ce-card-lbl">Approval Queue — 3 Pending</span>
              </div>

              <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {APPROVALS.map((a, i) => (
                  <motion.div
                    key={a.type}
                    className="sm-appr-item"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * .1 }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 8, fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 3 }}>
                          {a.type}
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 2 }}>{a.detail}</div>
                        <div style={{ fontSize: 11, color: 'var(--text3)' }}>from {a.from} · {a.time}</div>
                      </div>
                      <span style={{
                        fontSize: 9, fontWeight: 700, padding: '3px 10px',
                        borderRadius: 100, background: a.badgeBg,
                        color: a.badgeCol, border: `1px solid ${a.badgeCol}30`,
                        marginLeft: 8
                      }}>
                        {a.badge}
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      <button className="sm-appr-btn" style={{ background: 'var(--green)', color: '#fff' }}>
                        <CheckCircle size={10} style={{ marginRight: 4, verticalAlign: -1 }} />Approve
                      </button>
                      <button className="sm-appr-btn" style={{ background: 'rgba(255,255,255,.08)', color: 'var(--text2)' }}>
                        Hold
                      </button>
                      <button className="sm-appr-btn" style={{ background: 'rgba(245,166,35,.12)', color: '#F5A623' }}>
                        <RotateCcw size={10} style={{ marginRight: 4, verticalAlign: -1 }} />Rework
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
