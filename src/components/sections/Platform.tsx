const Icon = ({ d, size = 18 }: { d: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
)

const features = [
  {
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    iconClass: '',
    title: 'GPS-Verified Field Visits',
    desc: 'Field reps check in automatically when they arrive within 200m of a client. Managers see live visit status on a real-time map. Every visit is timestamped, logged, and verified — no manual reporting needed.',
    tags: ['GPS check-in', 'QR code check-in', 'Live map', 'Visit duration'],
  },
  {
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    iconClass: 'blue-icon',
    title: 'AI Daily Co-Pilot',
    desc: 'Every morning, each rep gets a ready-made plan — visits in the best order, overdue follow-ups, client news, and AI-generated talking points for every meeting. No prep time. No blank starts.',
    tags: ['Today\'s Plan', 'Pre-visit brief', 'AI talking points', 'Voice notes'],
  },
  {
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    iconClass: 'green-icon',
    title: 'Client Intelligence Card',
    desc: 'One card for every account — visits, calls, emails, quotes, orders, invoices, support tickets, and payment history, all in a single timeline. A rep reads this card in 60 seconds and walks into every meeting fully prepared.',
    tags: ['Unified timeline', 'Payment history', 'Open tickets', 'Contact profiles'],
  },
  {
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    iconClass: '',
    title: 'Smart Email & Calendar Sync',
    desc: 'Connect Gmail or Outlook once. Emails from clients are sorted by account, not by time. AI surfaces the ones that need attention, drafts replies in context, and logs everything to the client record automatically.',
    tags: ['Gmail', 'Outlook', 'Client-centric inbox', 'AI reply drafts'],
  },
  {
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    iconClass: 'blue-icon',
    title: 'Pipeline & Quote Builder',
    desc: 'Configure your own deal stages. Build quotes live during client visits from a product catalogue. Set approval rules by deal value. Track every deal from first meeting to signed order in a single view.',
    tags: ['Custom stages', 'On-site quotes', 'Approval workflow', 'Win rate tracking'],
  },
  {
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    iconClass: 'green-icon',
    title: 'Manager & Director Dashboards',
    desc: 'Managers see their team\'s live activity without asking for updates. Exception alerts surface issues automatically — overdue follow-ups, stalled deals, neglected accounts, and reps who need coaching.',
    tags: ['Live team map', 'Exception alerts', 'KPI tracking', 'Hierarchy analytics'],
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    iconClass: '',
    title: 'Marketing to Sales Handoff',
    desc: 'Marketing managers run campaigns, score leads, and hand qualified prospects to sales with full context — source, engagement history, and fit score — all travelling with the lead. No lost intelligence at handoff.',
    tags: ['Lead scoring', 'MQL handoff', 'Campaign attribution', 'Nurture sequences'],
    wide: true,
  },
]

export default function Platform() {
  return (
    <section className="section-navy" id="solutions">
      <div className="wrap">
        <div className="section-title-center" style={{ maxWidth: 600, margin: '0 auto' }}>
          <div className="eyebrow"><div className="ey-line" />The Platform</div>
          <h2 className="h2">Everything your commercial team needs, <em>in one place.</em></h2>
          <p className="lead">ClientEra covers the full commercial lifecycle — field visits, desk sales, pipeline management, invoicing, and customer service — without any integration glue.</p>
        </div>
        <div className="features-grid">
          {features.map(f => (
            <div key={f.title} className={`feat-card${f.wide ? ' feat-wide' : ''}`}>
              <div className={`feat-icon-box${f.iconClass ? ' ' + f.iconClass : ''}`}>
                <Icon d={f.icon} size={20} />
              </div>
              <div className="feat-title">{f.title}</div>
              <div className="feat-desc">{f.desc}</div>
              <div className="feat-tags">
                {f.tags.map(t => <span key={t} className="feat-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
