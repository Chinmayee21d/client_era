'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function EnquiryPage() {
  const router = useRouter()

  useEffect(() => {
    document.title = 'Book a Demo | ClientEra'

    // EnquiryModal auto-opens when it detects pathname === '/enquiry'.
    // We only need to listen for the close event to navigate back.
    const handleModalClose = () => {
      router.back()
    }

    window.addEventListener('enquiry-modal-closed', handleModalClose)

    return () => {
      window.removeEventListener('enquiry-modal-closed', handleModalClose)
    }
  }, [router])

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* EnquiryModal (global in layout) auto-opens on this route */}
    </div>
  )
}
