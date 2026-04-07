'use client'

import { motion } from 'framer-motion'
import { Building2, Copy, Check, History, ArrowRight } from 'lucide-react'

const CONVERT_FIELDS = [
  { label: 'Company', value: 'BlueSky Logistics Pvt Ltd', kept: true },
  { label: 'Contact', value: 'Anita Roy · VP Operations', kept: true },
  { label: 'Source', value: 'LinkedIn Import · March 2026', kept: true },
  { label: 'Lead Score', value: '82 / 100 at conversion', kept: true },
  { label: 'Campaign', value: 'Logistics Growth Q1', kept: true },
  { label: 'Visit History', value: '3 meetings logged', kept: true },
]

const FEATURES = [
  { Icon: Building2, title: 'No Re-entry on Conversion', desc: 'When you click Convert, ClientEra creates an Account, Contact, and Deal — optionally a Sales Quote — in one step. Zero redundant data entry.' },
  { Icon: History, title: 'Full History Travels Forward', desc: 'The campaign touch, form fill, enrichment data, qualification notes, and sales hand-off notes all travel onto the new Account record. Reps don\'t start blind.' },
  { Icon: Copy, title: 'Duplicate Detection', desc: 'Before creating a new Account or Contact, ClientEra checks for existing matches by domain, company name, and contact details. You choose to merge or create new.' },
]

export default function LM_Conversion() {
  return (
    <section id="conversion" style={{ background: 'var(--navy)' }}>
      <style>{`
        .lm-conv-field {
          display: flex; align-items: center; gap: 10px;
          padding: 9px 14px; border-radius: 8px; transition: background .2s; cursor: default;
        }
        .lm-conv-field:hover { background: rgba(255,255,255,.04); }
        .lm-conv-feat {
          display: flex; gap: 14px; align-items: flex-start;
          padding: 16px 18px; border-radius: 14px;
          border: 1px solid transparent; transition: all .28s; cursor: default;
        }
        .lm-conv-feat:hover {
          background: rgba(255,255,255,.04); border-color: rgba(255,255,255,.07);
          transform: translateX(6px);
        }
        .lm-conv-feat-icon {
          width: 40px; height: 40px; border-radius: 11px;
          background: var(--gold-bg); border: 1px solid rgba(196,154,60,.2);
          display: flex; align-items: center; justify-content: center;
          color: var(--gold); flex-shrink: 0; transition: transform .3s;
        }
        .lm-conv-feat:hover .lm-conv-feat-icon { transform: scale(1.1) rotate(-4deg); }
        @media (max-width: 900px) { .lm-conv-cols { grid-template-columns: 1fr !important; } }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div className="eyebrow"><span className="ey-line" />Feature 7 — Lead Conversion</div>
          <h2 className="h2">
            One Click to Convert —<br /><em>Zero Context Lost.</em>
          </h2>
          <p className="lead">
            Converting a lead to a customer shouldn't mean starting over. In ClientEra, the lead becomes the account. Everything travels forward.
          </p>
        </div>

        <div className="reveal lm-conv-cols" style={{
          display: 'grid', gridTemplateColumns: '1.1fr 1fr',
          gap: 48, alignItems: 'center', transitionDelay: '.15s',
        }}>
          {/* LEFT — Conversion preview */}
          <div style={{
            background: 'rgba(13,28,52,.88)', backdropFilter: 'blur(22px)',
            border: '1px solid var(--border2)', borderRadius: 16, overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,.4)',
          }}>
            <div className="ce-card-titlebar">
              <span className="ce-wdot ce-wd-r" /><span className="ce-wdot ce-wd-y" /><span className="ce-wdot ce-wd-g" />
              <span className="ce-card-lbl">Convert Lead → Account + Deal</span>
            </div>
            <div style={{ padding: '16px 18px' }}>
              <div style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.2, color: 'var(--text3)', marginBottom: 10 }}>
                Fields carried forward — automatically
              </div>
              {CONVERT_FIELDS.map((f, i) => (
                <motion.div
                  key={f.label}
                  className="lm-conv-field"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * .08 }}
                >
                  <Check size={13} style={{ color: '#18B87A', flexShrink: 0 }} strokeWidth={2.5} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <span style={{ fontSize: 10, color: 'var(--text3)', marginRight: 8 }}>{f.label}:</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)' }}>{f.value}</span>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: .6 }}
                style={{
                  marginTop: 16, padding: '12px 16px',
                  background: 'rgba(24,184,122,.08)', border: '1px solid rgba(24,184,122,.22)',
                  borderRadius: 12, display: 'flex', alignItems: 'center', gap: 10,
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--green)', marginBottom: 2 }}>Conversion Complete</div>
                  <div style={{ fontSize: 10, color: 'var(--text3)' }}>Account, Contact, Deal and Quote created · 0 fields re-entered</div>
                </div>
                <ArrowRight size={16} style={{ color: 'var(--green)', flexShrink: 0 }} />
              </motion.div>
            </div>
          </div>

          {/* RIGHT — Features */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                className="lm-conv-feat"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .1 }}
              >
                <div className="lm-conv-feat-icon">
                  <f.Icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--text2)', lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
