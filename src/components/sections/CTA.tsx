'use client'

import Link from 'next/link'
import { useAnalytics } from '@/hooks/useAnalytics'

export default function CTABanner() {
  const { logCTA } = useAnalytics('CTA Banner')

  return (
    <section className="ce-cta-outer" id="cta" data-section="CTA Banner">
      <div className="ce-cta-card">
        <div className="ce-cta-glow" />
        <div className="ce-cta-left">
          <div className="ce-cta-eyebrow">ClientEra</div>
          <h2 className="ce-cta-h2">
            Ready to unify your<br /><em>commercial engine?</em>
          </h2>
          <p className="ce-cta-lead">
            Join companies that have eliminated the gap between Marketing, Sales, Operations, and Customer Service. One system. Every deal. Zero gaps.
          </p>
        </div>
        <div className="ce-cta-right">
          <Link
            href="/enquiry"
            className="ce-cta-btn ce-cta-btn-primary"
            style={{ textDecoration: 'none' }}
            onClick={() => logCTA('Book a Live Demo', 'CTA Banner')}
          >
            Book a Live Demo →
          </Link>
          <a
            href="#solution"
            className="ce-cta-btn ce-cta-btn-ghost"
            onClick={() => logCTA('Explore the Platform', 'CTA Banner')}
          >
            Explore the Platform
          </a>
          <p className="ce-cta-micro">No credit card required · SOC2 compliant</p>
        </div>
      </div>
    </section>
  )
}