'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function EnquiryPage() {
  const router = useRouter()

  useEffect(() => {
    // Set page title
    document.title = 'Book a Demo | ClientEra'
    
    // Open the enquiry modal when this page loads
    window.dispatchEvent(new Event('open-enquiry-modal'))
    
    // Listen for modal close to navigate back
    const handleModalClose = () => {
      router.back()
    }
    
    // We'll need to add a custom event for modal close
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
      {/* Modal will be rendered by the global EnquiryModal component */}
    </div>
  )
}
