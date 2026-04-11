'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface AnimatedIconProps {
  icon: LucideIcon
  size?: number
  strokeWidth?: number
  className?: string
  color?: string
  animate?: 'bounce' | 'pulse' | 'spin' | 'scale' | 'none'
}

export default function AnimatedIcon({
  icon: Icon,
  size = 24,
  strokeWidth = 2,
  className = '',
  color,
  animate = 'scale'
}: AnimatedIconProps) {
  const animations = {
    bounce: {
      initial: { y: 0 },
      animate: { 
        y: [-2, 0, -2],
        transition: { 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    pulse: {
      initial: { scale: 1 },
      animate: { 
        scale: [1, 1.1, 1],
        transition: { 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    spin: {
      initial: { rotate: 0 },
      animate: { 
        rotate: 360,
        transition: { 
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }
      }
    },
    scale: {
      initial: { scale: 1 },
      whileHover: { 
        scale: 1.15,
        transition: { 
          duration: 0.3,
          ease: "easeOut"
        }
      }
    },
    none: {
      initial: {},
      animate: {}
    }
  }

  const selectedAnimation = animations[animate]

  return (
    <motion.div
      className={className}
      initial={selectedAnimation.initial}
      animate={selectedAnimation.animate}
      whileHover={selectedAnimation.whileHover}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Icon size={size} strokeWidth={strokeWidth} color={color} />
    </motion.div>
  )
}
