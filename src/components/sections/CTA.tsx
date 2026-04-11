'use client'

export default function CTABanner() {
  return (
    <section className="ce-cta-outer" id="cta">
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
          <button 
            onClick={() => window.dispatchEvent(new Event('open-enquiry-modal'))}
            className="ce-cta-btn ce-cta-btn-primary"
            style={{ cursor: 'pointer', border: 'none' }}
          >
            Book a Live Demo →
          </button>
          <a href="#solution" className="ce-cta-btn ce-cta-btn-ghost">Explore the Platform</a>
          <p className="ce-cta-micro">No credit card required · SOC2 compliant</p>
        </div>
      </div>
    </section>
  )
}