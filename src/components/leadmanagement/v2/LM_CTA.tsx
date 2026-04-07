'use client'

import { ShieldCheck } from 'lucide-react'

export default function LM_CTA() {
  return (
    <section className="ce-cta-outer" id="lm-cta" style={{ background: 'var(--cream)' }}>
      <div className="ce-cta-card">
        <div className="ce-cta-glow" />
        <div className="ce-cta-left">
          <div className="ce-cta-eyebrow">ClientEra</div>
          <h2 className="ce-cta-h2">
            Start Turning Signals<br /><em>Into Revenue.</em>
          </h2>
          <p className="ce-cta-lead">
            From the first campaign touch to the signed invoice — one timeline, one system, zero context lost. Request access today and stop losing deals in the handoff.
          </p>
        </div>
        <div className="ce-cta-right">
          <a href="#" className="ce-cta-btn ce-cta-btn-primary">Request Early Access &rarr;</a>
          <a href="#" className="ce-cta-btn ce-cta-btn-ghost">Book a Demo</a>
          <p className="ce-cta-micro">
            <ShieldCheck size={14} style={{ color: '#18B87A', verticalAlign: 'text-bottom' }} strokeWidth={2} />
            {" "}SOC2, ISO 27001, & GDPR Compliant
          </p>
        </div>
      </div>
    </section>
  )
}
