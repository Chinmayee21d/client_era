const integrations = [
  { logo: '📧', name: 'Gmail', cat: 'Email' },
  { logo: '📮', name: 'Outlook', cat: 'Email & Calendar' },
  { logo: '📹', name: 'Zoom', cat: 'Video Meetings' },
  { logo: '💬', name: 'Teams', cat: 'Video & Chat' },
  { logo: '🔥', name: 'Fireflies', cat: 'Meeting AI' },
  { logo: '📝', name: 'Otter.ai', cat: 'Transcription' },
  { logo: '💚', name: 'WhatsApp', cat: 'Messaging' },
  { logo: '📞', name: 'RingCentral', cat: 'VoIP' },
  { logo: '☁️', name: 'Salesforce', cat: 'CRM' },
  { logo: '🟠', name: 'HubSpot', cat: 'CRM & Marketing' },
  { logo: '🎯', name: 'Apollo.io', cat: 'Enrichment' },
  { logo: '🗄️', name: 'SAP ERP', cat: 'ERP Sync' },
  { logo: '🎫', name: 'Zendesk', cat: 'Customer Service' },
  { logo: '🔗', name: 'LinkedIn', cat: 'Sales Navigator' },
  { logo: '☁️', name: 'Zoho', cat: 'CRM' },
  { logo: '🚀', name: 'Aircall', cat: 'VoIP' },
]

export default function Integrations() {
  return (
    <section className="section-navy2" id="integrations">
      <div className="wrap">
        <div style={{ maxWidth: 600 }}>
          <div className="eyebrow"><div className="ey-line" />Integrations</div>
          <h2 className="h2">Works with the tools <em>your team already uses.</em></h2>
          <p className="lead">ClientEra brings together the data from every tool you rely on — email, video, VoIP, CRM, ERP — into a single client view. No ripping and replacing.</p>
        </div>
        <div className="integrations-grid">
          {integrations.map(i => (
            <div key={i.name} className="int-card">
              <div className="int-logo">{i.logo}</div>
              <div className="int-name">{i.name}</div>
              <div className="int-cat">{i.cat}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
