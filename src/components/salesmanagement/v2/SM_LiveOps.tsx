'use client'

import { MapPin, ShieldCheck, AlertTriangle, Video } from 'lucide-react'
import { motion } from 'framer-motion'

const FEATURES = [
  {
    icon: MapPin,
    title: 'Live Presence Map',
    desc: 'Real-time GPS locations of every field rep on an interactive map. Know who is where, and whether they\'re on schedule.',
  },
  {
    icon: ShieldCheck,
    title: 'Visit Verification Badges',
    desc: 'Every visit is tagged — GPS-verified, QR-verified, or manual entry. Spot-check duration and proximity instantly.',
  },
  {
    icon: AlertTriangle,
    title: 'Exception Flags',
    desc: 'Automatic alerts when reps haven\'t started their day, missed visits, or deviated from planned routes.',
  },
  {
    icon: Video,
    title: 'Desk Rep Meeting Feed',
    desc: 'Live status of Zoom/Teams calls for inside sales. See who\'s on a call, call duration, and next scheduled.',
  },
]

const REPS = [
  { name: 'Arjun S.', initials: 'AS', status: 'In Meeting', badge: 'GPS', badgeCol: 'var(--green)', visits: '4/5', time: '09:14 AM', col: 'rgba(24,184,122,.15)' },
  { name: 'Priya M.', initials: 'PM', status: 'In Transit', badge: 'GPS', badgeCol: 'var(--gold)', visits: '2/6', time: '10:32 AM', col: 'rgba(196,154,60,.15)' },
  { name: 'Raj K.', initials: 'RK', status: 'At Client', badge: 'QR', badgeCol: 'var(--blue)', visits: '3/4', time: '11:05 AM', col: 'rgba(52,112,240,.15)' },
  { name: 'Dev T.', initials: 'DT', status: 'Not Started', badge: '⚠️', badgeCol: 'var(--red)', visits: '0/5', time: '—', col: 'rgba(224,56,79,.15)' },
  { name: 'Sneha R.', initials: 'SR', status: 'Completed', badge: 'GPS', badgeCol: 'var(--green)', visits: '5/5', time: '08:45 AM', col: 'rgba(24,184,122,.15)' },
]

export default function SM_LiveOps() {
  return (
    <section className="section-dark">
      <style>{`
        .sm-ops-feat {
          display: flex; gap: 14px; align-items: flex-start;
          padding: 16px 18px; border-radius: 14px;
          border: 1px solid transparent;
          transition: all .28s cubic-bezier(.22,1,.36,1);
          cursor: default;
        }
        .sm-ops-feat:hover {
          background: var(--surface);
          border-color: var(--border);
          transform: translateX(6px);
        }
        .sm-ops-icon {
          width: 40px; height: 40px; border-radius: 11px;
          background: var(--gold-bg);
          border: 1px solid rgba(196,154,60,.2);
          display: flex; align-items: center; justify-content: center;
          color: var(--gold); flex-shrink: 0;
          transition: transform .3s;
        }
        .sm-ops-feat:hover .sm-ops-icon { transform: scale(1.1) rotate(-4deg); }
        .sm-rep-row {
          display: grid;
          grid-template-columns: 32px 1fr auto auto auto;
          gap: 10px; align-items: center;
          padding: 9px 12px;
          border-radius: 8px;
          transition: background .2s;
        }
        .sm-rep-row:hover { background: rgba(255,255,255,.04); }

        .sm-ops-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 48px;
          align-items: center;
          transition-delay: .15s;
        }
        @media (max-width: 1024px) {
          .sm-ops-grid {
            display: flex;
            flex-direction: column-reverse;
            gap: 32px;
          }
          .sm-rep-row {
            grid-template-columns: 28px 1fr auto auto;
            font-size: 10px;
          }
          .sm-rep-row :nth-child(5) { display: none; }
        }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div className="eyebrow"><span className="ey-line" />Live Operations</div>
          <h2 className="h2">
            Mission Control<br /><em>for the field.</em>
          </h2>
          <p className="lead">
            Your team is out there — and you can see every move in real time. GPS-verified visits, live call tracking, and automatic exception alerts mean you never manage from the past again.
          </p>
        </div>

        <div className="reveal sm-ops-grid">
          {/* LEFT — Features */}
          <div className="sm-ops-features">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                className="sm-ops-feat"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .1 }}
              >
                <div className="sm-ops-icon">
                  <f.icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--text2)', lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — Dashboard mockup */}
          <div className="sm-ops-dashboard">
            <div style={{
              background: 'rgba(13,28,52,.88)',
              backdropFilter: 'blur(22px)',
              border: '1px solid var(--border2)',
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,.4)',
            }}>
            <div className="ce-card-titlebar">
              <span className="ce-wdot ce-wd-r" /><span className="ce-wdot ce-wd-y" /><span className="ce-wdot ce-wd-g" />
              <span className="ce-card-lbl">Field Team — Live Status</span>
            </div>

            <div style={{ padding: '14px 16px' }}>
              {/* Tally bar */}
              <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
                {[
                  { label: 'Total Visits', val: '19/25', col: 'var(--text)' },
                  { label: 'Active Now', val: '4', col: 'var(--green)' },
                  { label: 'Exceptions', val: '1', col: 'var(--red)' },
                ].map(t => (
                  <div key={t.label} style={{
                    flex: 1,
                    background: 'rgba(255,255,255,.035)',
                    border: '1px solid var(--border)',
                    borderRadius: 8,
                    padding: '8px 10px',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontSize: 8, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 3 }}>{t.label}</div>
                    <div style={{ fontFamily: "'Fraunces', serif", fontSize: 18, color: t.col }}>{t.val}</div>
                  </div>
                ))}
              </div>

              {/* Header */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '32px 1fr auto auto auto',
                gap: 10,
                padding: '6px 12px',
                fontSize: 8,
                fontWeight: 700,
                color: 'var(--text3)',
                textTransform: 'uppercase',
                letterSpacing: 1,
                borderBottom: '1px solid var(--border)',
                marginBottom: 4,
              }}>
                <div></div>
                <div>Rep</div>
                <div>Badge</div>
                <div>Visits</div>
                <div>Start</div>
              </div>

              {/* Rep rows */}
              {REPS.map((r, i) => (
                <motion.div
                  key={r.name}
                  className="sm-rep-row"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * .08 }}
                >
                  <div className="ce-av" style={{ background: r.col, color: r.badgeCol, width: 28, height: 28, fontSize: 9 }}>{r.initials}</div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text)' }}>{r.name}</div>
                    <div style={{ fontSize: 9, color: 'var(--text3)' }}>{r.status}</div>
                  </div>
                  <div style={{
                    fontSize: 8, fontWeight: 700, padding: '2px 7px',
                    borderRadius: 100,
                    background: r.col,
                    color: r.badgeCol,
                    textTransform: 'uppercase',
                    letterSpacing: .5,
                  }}>{r.badge}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text)' }}>{r.visits}</div>
                  <div style={{ fontSize: 10, color: 'var(--text3)' }}>{r.time}</div>
                </motion.div>
              ))}

              {/* Exception alert */}
              <div style={{
                marginTop: 10,
                padding: '8px 12px',
                background: 'rgba(224,56,79,.08)',
                border: '1px solid rgba(224,56,79,.2)',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}>
                <AlertTriangle size={14} style={{ color: 'var(--red)', flexShrink: 0 }} />
                <span style={{ fontSize: 10, color: 'var(--red)', fontWeight: 500 }}>
                  Dev T. has not started — 5 scheduled visits at risk today
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
