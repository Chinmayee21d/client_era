'use client'

import { motion } from 'framer-motion'
import { Globe, Link2, Mail, FileQuestion, Upload, CalendarDays } from 'lucide-react'

const SOURCES = [
  { Icon: Globe, title: 'Web-to-Lead Forms', desc: 'Embeddable forms on your website or landing pages. Every submission creates a lead with source, UTM parameters, and campaign attribution automatically applied.', color: '#2D5BE3', bg: 'rgba(45,91,227,.08)', border: 'rgba(45,91,227,.2)' },
  { Icon: Link2, title: 'LinkedIn Import', desc: 'Save a LinkedIn profile as a lead in one click. Professional data pre-populated via the enrichment engine. Bulk import supported.', color: '#0A66C2', bg: 'rgba(10,102,194,.08)', border: 'rgba(10,102,194,.2)' },
  { Icon: Mail, title: 'Email Campaign Clicks', desc: 'Contacts who click and fill a campaign form become leads attributed to that specific campaign and touchpoint automatically.', color: 'var(--gold)', bg: 'rgba(196,154,60,.08)', border: 'rgba(196,154,60,.2)' },
  { Icon: FileQuestion, title: 'Inbound RfQ', desc: 'A company emails a quote request before any relationship exists? They\'re a lead. Instantly tracked, not lost in someone\'s inbox.', color: '#8B5CF6', bg: 'rgba(139,92,246,.08)', border: 'rgba(139,92,246,.2)' },
  { Icon: Upload, title: 'Manual Entry & CSV', desc: 'For outbound prospecting, referrals, and event lists. Bulk import with field mapping and deduplication built in.', color: 'var(--green)', bg: 'rgba(24,184,122,.08)', border: 'rgba(24,184,122,.2)' },
  { Icon: CalendarDays, title: 'Event Registrations', desc: 'Trade show or webinar attendees become leads attributed to that event campaign — zero manual work after the event.', color: '#F59E0B', bg: 'rgba(245,158,11,.08)', border: 'rgba(245,158,11,.2)' },
]

export default function LM_Capture() {
  return (
    <section id="capture" style={{ background: '#f8f8f6', overflow: 'hidden' }}>
      <style>{`
        .lm-cap-card {
          background: #fff; 
          border: 1px solid rgba(0,0,0,.04);
          border-radius: 20px; 
          padding: 24px 22px;
          display: flex; 
          flex-direction: column;
          align-items: flex-start; 
          gap: 18px;
          transition: all .4s cubic-bezier(.22, 1, .36, 1); 
          cursor: default;
          height: 100%;
          position: relative;
          box-shadow: 0 4px 12px rgba(0,0,0,.02);
        }
        
        .lm-cap-card:hover { 
          transform: translateY(-6px); 
          box-shadow: 0 24px 48px rgba(0,0,0,.08);
          border-color: rgba(0,0,0,.08);
        }

        .lm-cap-icon {
          width: 48px; 
          height: 48px; 
          border-radius: 14px;
          display: flex; 
          align-items: center; 
          justify-content: center;
          flex-shrink: 0; 
          transition: all .4s cubic-bezier(.22, 1, .36, 1);
          position: relative;
        }

        .lm-cap-card:hover .lm-cap-icon { 
          transform: rotate(-8deg) scale(1.1); 
        }

        /* Decorative bottom accent */
        .lm-cap-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 24px; right: 24px;
          height: 2px;
          background: var(--gold);
          transform: scaleX(0);
          transition: transform .4s ease;
          border-radius: 2px;
          opacity: 0.6;
        }
        .lm-cap-card:hover::after {
          transform: scaleX(1);
        }
        
        .lm-cap-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 1024px) {
          .lm-cap-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .lm-cap-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .lm-cap-card { padding: 20px 16px; gap: 14px; }
          .lm-cap-icon { width: 40px; height: 40px; }
        }
      `}</style>

      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 60 }}>
          <div className="eyebrow eyebrow-dark"><span className="ey-line" />Feature 2 — Lead Capture &amp; Attribution</div>
          <h2 className="h2 h2-ink">
            Every Lead. Tracked From<br /><em>the First Touch.</em>
          </h2>
          <p className="lead lead-ink">
            ClientEra captures leads from every channel and tags every single one back to its origin. Every lead record shows its complete origin: channel, campaign, specific asset, and exact timestamp of first engagement.
          </p>
        </div>

        <div className="reveal lm-cap-grid">
          {SOURCES.map((s, i) => (
            <motion.div
              key={s.title}
              className="lm-cap-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="lm-cap-icon" style={{ 
                background: s.bg, 
                border: `1.5px solid ${s.border}`, 
                color: s.color,
                boxShadow: `0 8px 16px -4px ${s.border}`
              }}>
                <s.Icon size={22} strokeWidth={2.2} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ 
                   fontSize: 14, 
                   fontWeight: 700, 
                   color: 'var(--navy)', 
                   marginBottom: 8,
                   letterSpacing: '-0.01em'
                }}>
                  {s.title}
                </div>
                <div style={{ 
                   fontSize: 12, 
                   color: 'var(--ink2)', 
                   lineHeight: 1.6,
                   opacity: 0.85
                }}>
                  {s.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
