import Link from 'next/link'

export default function LegalHeader() {
  return (
    <header style={{
      width: '100%',
      padding: '24px clamp(24px, 5vw, 64px)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(10px)',
      background: 'rgba(11,22,40,0.85)'
    }}>
      <Link href="/">
        <img src="/transparent.png" alt="ClientEra Logo" style={{ height: '30px', width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }} />
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <Link href="/legal" style={{
            color: 'var(--text2)', 
            fontSize: 13, 
            fontWeight: 600, 
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: 1
        }}>
          Legal Center
        </Link>
        <Link href="/" className="lh-btn" style={{
            padding: '8px 16px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 8,
            color: 'var(--text)',
            fontSize: 13,
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.2s'
        }}>
          Return to Site
        </Link>
        <style>{`
          .lh-btn:hover { background: rgba(255,255,255,0.1) !important; }
        `}</style>
      </div>
    </header>
  )
}
