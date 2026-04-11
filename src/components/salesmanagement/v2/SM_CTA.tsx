'use client'

import Link from 'next/link'

export default function SM_CTA() {
  return (
    <section className="ce-cta-outer" id="sm-cta">
      <div className="ce-cta-card">
        <div className="ce-cta-glow" />
        <div className="ce-cta-left">
          <div className="ce-cta-eyebrow">ClientEra</div>
          <h2 className="ce-cta-h2">
            Stop managing from the past.<br /><em>Lead in real time.</em>
          </h2>
          <p className="ce-cta-lead">
            Join sales leaders who have replaced spreadsheets, WhatsApp groups, and gut-feel forecasting with a live, data-driven command centre. 30 minutes to see the difference.
          </p>
        </div>
        <div className="ce-cta-right">
          <Link href="/enquiry" className="ce-cta-btn ce-cta-btn-primary" style={{ textDecoration: 'none' }}>Book a Live Demo →</Link>
          <a href="#" className="ce-cta-btn ce-cta-btn-ghost">Explore Pricing</a>
          <p className="ce-cta-micro">No commitment · 30-min session · SOC2 compliant</p>
        </div>
      </div>
    </section>
  )
}
