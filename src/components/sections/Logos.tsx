export default function Logos() {
  const logos = ['Gmail', 'Outlook', 'Zoom', 'Salesforce', 'WhatsApp', 'Fireflies', 'RingCentral', 'Zendesk', 'SAP ERP']
  return (
    <div className="logos-bar">
      <div className="logos-label">Connects with the tools your team already uses</div>
      <div className="logos-track">
        {logos.map(l => <div key={l} className="logo-item">{l}</div>)}
      </div>
    </div>
  )
}
