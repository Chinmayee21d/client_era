'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, Zap, Wrench, Star, CheckCircle2 } from 'lucide-react'

const steps = [
  { icon: AlertCircle, label: 'Ticket', priority: 'High', status: 'Payment issue reported' },
  { icon: Zap, label: 'Route', priority: 'High', status: 'Auto-assigned to billing' },
  { icon: Wrench, label: 'Resolve', priority: 'High', status: 'Issue fixed in 12 min' },
  { icon: Star, label: 'Feedback', priority: 'Medium', status: 'CSAT: 5/5 stars' },
  { icon: CheckCircle2, label: 'Close', priority: 'Low', status: 'KB article created' },
]

export default function CustomerExcellenceAnimation() {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const getPriorityColor = (priority: string, isActive: boolean, isCompleted: boolean) => {
    if (isCompleted) return '#22c55e'
    if (!isActive) return '#94a3b8'
    if (priority === 'High') return '#ef4444'
    if (priority === 'Medium') return '#f59e0b'
    return '#8B5CF6'
  }

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
        const priorityColor = getPriorityColor(step.priority, isActive, isCompleted)

        return (
          <motion.div
            key={index}
            animate={{ 
              scale: isActive ? 1.05 : 1,
              backgroundColor: isActive ? 'rgba(139,92,246,0.08)' : isCompleted ? 'rgba(34,197,94,0.05)' : 'rgba(0,0,0,0.02)'
            }}
            transition={{ duration: 0.4 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '12px',
              border: `1.5px solid ${isActive ? '#8B5CF6' : isCompleted ? '#22c55e' : 'rgba(0,0,0,0.06)'}`,
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
                background: isCompleted ? 'rgba(34,197,94,0.15)' : isActive ? 'rgba(139,92,246,0.2)' : 'rgba(0,0,0,0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Icon 
                size={16} 
                strokeWidth={2.5} 
                color={isCompleted ? '#22c55e' : isActive ? '#8B5CF6' : '#94a3b8'} 
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
              fontSize: '10px', 
              fontWeight: 700, 
              color: priorityColor,
              padding: '4px 8px',
              background: `${priorityColor}15`,
              borderRadius: '6px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {step.priority}
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
            background: 'linear-gradient(90deg, #8B5CF6, #22c55e)',
            borderRadius: '2px'
          }}
        />
      </div>
    </div>
  )
}
