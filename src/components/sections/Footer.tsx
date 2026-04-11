'use client'

const COLS = [
  {
    heading: 'Platform',
    links: ['Sales Ops', 'Management', 'Customer Support', 'Field Sales', 'Desk Sales', 'Operations', 'Distributor Portal'],
    paths: ['/order-to-cash', '/sales-and-engagement', '/customer-excellence', '#', '#', '#', '#']
  },
  {
    heading: 'Company',
    links: ['About', 'Security', 'FAQ', 'Pricing', 'Careers', 'Blog'],
    paths: ['#', '#', '/faq', '#', '#', '#']
  },
  {
    heading: 'Legal',
    links: ['Legal Center', 'Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Cookie Preferences'],
    paths: ['/legal', '/legal/privacy', '/legal/terms', '/legal/cookies', 'preferences']
  },
]

export default function Footer() {
  return (
    <footer className="ce-footer">
      <div className="ce-footer-grid">
        {/* Brand */}
        <div>
          <div className="ce-footer-logo">client<em>era</em></div>
          <p className="ce-footer-desc">
            The AI-Powered Commercial Operating System. One timeline. One truth. Zero gaps.
          </p>
          <p style={{ fontSize: 11, color: 'var(--text3)', marginTop: 14 }}>Built for India. Compliant worldwide.</p>
        </div>

        {/* Link columns */}
        {COLS.map(col => (
          <div key={col.heading}>
            <div className="ce-fc-h">{col.heading}</div>
            <ul className="ce-fc-links">
              {col.links.map((l, i) => (
                <li key={l}>
                  {col.paths[i] === 'preferences' ? (
                    <button 
                      onClick={() => window.dispatchEvent(new Event('open-cookie-preferences'))}
                      style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', font: 'inherit', cursor: 'pointer', textAlign: 'left' }}
                    >
                      {l}
                    </button>
                  ) : (
                    <a href={col.paths[i]}>
                      {l}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="ce-footer-bottom">
        <span>&copy; 2026 ClientEra. All rights reserved.</span>
        <div className="ce-footer-links-row">
          <a href="/legal/privacy">Privacy</a>
          <a href="/legal/terms">Terms</a>
          <a href="/legal/cookies">Cookies</a>
        </div>
      </div>
    </footer>
  )
}