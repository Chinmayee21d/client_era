const steps = [
  { num: '1', title: 'Connect your tools', desc: 'Link Gmail, Outlook, calendar, your phone system, and your ERP in minutes. Data flows in automatically from day one.' },
  { num: '2', title: 'Set up your team', desc: 'Create your hierarchy, roles, and KPIs using straightforward defaults or fully custom configuration — no technical setup required.' },
  { num: '3', title: 'Your team gets to work', desc: 'Reps open the app each morning and their day is already planned. Managers see live updates without asking for them.' },
  { num: '4', title: 'You grow with confidence', desc: 'Every deal, every visit, every invoice is tracked. Decisions are based on real data, not gut feel or wishful reporting.' },
]

export default function HowItWorks() {
  return (
    <section className="section-navy">
      <div className="wrap">
        <div className="section-title-center" style={{ maxWidth: 560, margin: '0 auto' }}>
          <div className="eyebrow"><div className="ey-line" />How It Works</div>
          <h2 className="h2">Up and running <em>in days,</em> not months.</h2>
          <p className="lead">No long implementation projects. No expensive consultants. ClientEra is designed for real teams, not IT departments.</p>
        </div>
        <div className="how-steps">
          {steps.map(s => (
            <div key={s.num} className="how-step">
              <div className="how-num-wrap">
                <div className="how-num">{s.num}</div>
              </div>
              <div className="how-title">{s.title}</div>
              <div className="how-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
