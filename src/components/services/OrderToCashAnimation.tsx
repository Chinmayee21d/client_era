'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FileText, CheckSquare, Send, CreditCard, Lock } from 'lucide-react'

const steps = [
  { icon: FileText, label: 'Order', amount: '₹2,45,000', status: 'SO-2024-1847' },
  { icon: CheckSquare, label: 'Approve', amount: '₹2,45,000', status: 'Credit approved' },
  { icon: Send, label: 'Invoice', amount: '₹2,45,000', status: 'INV-2024-1847' },
  { icon: CreditCard, label: 'Payment', amount: '₹2,45,000', status: 'Received & reconciled' },
  { icon: Lock, label: 'Close', amount: '₹2,45,000', status: 'Revenue recognized' },
]

export default function OrderToCashAnimation() {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '32px',
      gap: '16px'
    }}>
      {steps.map((step, index) => {
        const isActive = index === currentStep
        const isCompleted = index < currentStep
        const Icon = step.icon

        return (
          <motion.div
            key={index}
            animate={{ 
              scale: isActive ? 1.05 : 1,
              backgroundColor: isActive ? 'rgba(196,154,60,0.08)' : isCompleted ? 'rgba(34,197,94,0.05)' : 'rgba(0,0,0,0.02)'
            }}
            transition={{ duration: 0.4 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '12px',
              border: `1.5px solid ${isActive ? '#C49A3C' : isCompleted ? '#22c55e' : 'rgba(0,0,0,0.06)'}`,
            }}
          >
            <motion.div
              animate={{ 
                scale: isActive ? [1, 1.2, 1] : 1,
              }}
              transition={{ duration: 0.6, repeat: isActive ? Infinity : 0 }}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: isCompleted ? 'rgba(34,197,94,0.15)' : isActive ? 'rgba(196,154,60,0.2)' : 'rgba(0,0,0,0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Icon 
                size={16} 
                strokeWidth={2.5} 
                color={isCompleted ? '#22c55e' : isActive ? '#C49A3C' : '#94a3b8'} 
              />
            </motion.div>

            <div style={{ flex: 1 }}>
              <div style={{ 
                fontSize: '13px', 
                fontWeight: 600, 
                color: isActive || isCompleted ? '#0f172a' : '#64748b',
                marginBottom: '2px'
              }}>
                {step.label}
              </div>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ fontSize: '11px', color: '#64748b' }}
                >
                  {step.status}
                </motion.div>
              )}
            </div>

            <div style={{ 
              fontSize: '13px', 
              fontWeight: 700, 
              color: isActive ? '#C49A3C' : isCompleted ? '#22c55e' : '#94a3b8',
              fontFamily: 'monospace'
            }}>
              {step.amount}
            </div>
          </motion.div>
        )
      })}

      <div style={{
        marginTop: '8px',
        height: '4px',
        background: 'rgba(0,0,0,0.06)',
        borderRadius: '2px',
        overflow: 'hidden'
      }}>
        <motion.div
          animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.4 }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #C49A3C, #22c55e)',
            borderRadius: '2px'
          }}
        />
      </div>
    </div>
  )
}
