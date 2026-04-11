'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { UserPlus, Database, Target, CheckCircle2, ArrowRight } from 'lucide-react'

const steps = [
  { icon: UserPlus, label: 'Capture', color: '#3470F0', status: 'Lead captured from web form' },
  { icon: Database, label: 'Enrich', color: '#3470F0', status: 'Company data enriched' },
  { icon: Target, label: 'Score', color: '#3470F0', status: 'AI scoring: 87/100' },
  { icon: CheckCircle2, label: 'Qualify', color: '#3470F0', status: 'MQL threshold reached' },
  { icon: ArrowRight, label: 'Handoff', color: '#22c55e', status: 'Assigned to sales rep' },
]

export default function LeadManagementAnimation() {
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
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              scale: isActive ? 1.05 : 1,
              backgroundColor: isActive ? 'rgba(52,112,240,0.08)' : isCompleted ? 'rgba(34,197,94,0.05)' : 'rgba(0,0,0,0.02)'
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '12px',
              border: `1.5px solid ${isActive ? step.color : isCompleted ? '#22c55e' : 'rgba(0,0,0,0.06)'}`,
              position: 'relative'
            }}
          >
            <motion.div
              animate={{ 
                scale: isActive ? [1, 1.2, 1] : 1,
                rotate: isActive ? [0, 5, -5, 0] : 0
              }}
              transition={{ duration: 0.6, repeat: isActive ? Infinity : 0 }}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: isCompleted ? 'rgba(34,197,94,0.15)' : isActive ? `${step.color}20` : 'rgba(0,0,0,0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Icon 
                size={16} 
                strokeWidth={2.5} 
                color={isCompleted ? '#22c55e' : isActive ? step.color : '#94a3b8'} 
              />
            </motion.div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ 
                fontSize: '13px', 
                fontWeight: 600, 
                color: isActive || isCompleted ? '#0f172a' : '#64748b',
                marginBottom: '2px'
              }}>
                {step.label}
              </div>
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{ 
                      fontSize: '11px', 
                      color: '#64748b',
                      overflow: 'hidden'
                    }}
                  >
                    {step.status}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {isCompleted && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              >
                <CheckCircle2 size={16} color="#22c55e" strokeWidth={2.5} />
              </motion.div>
            )}
          </motion.div>
        )
      })}

      {/* Progress Bar */}
      <div style={{
        marginTop: '8px',
        height: '4px',
        background: 'rgba(0,0,0,0.06)',
        borderRadius: '2px',
        overflow: 'hidden'
      }}>
        <motion.div
          animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #3470F0, #22c55e)',
            borderRadius: '2px'
          }}
        />
      </div>
    </div>
  )
}
