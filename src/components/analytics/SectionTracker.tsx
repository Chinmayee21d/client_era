'use client'

import { useEffect, useRef } from 'react'
import { trackSectionView, trackSectionEngagement } from '@/lib/analytics'

interface SectionTrackerProps {
  /** Name that appears in GA4 reports under "section_name" */
  name: string
  children: React.ReactNode
  className?: string
  id?: string
  /**
   * How much of the section must be visible before it's counted as "viewed".
   * 0.4 = 40% visible (default). Use 0.1 for tall sections.
   */
  threshold?: number
  /** Also track how many seconds the user spends in this section. Default: true */
  trackEngagement?: boolean
}

/**
 * SectionTracker — wrap any page section with this to automatically track:
 * 1. When the user first sees the section          → fires "section_viewed"
 * 2. How long the user stays in the section        → fires "section_engagement"
 *
 * Usage:
 *   <SectionTracker name="Hero">
 *     <HeroComponent />
 *   </SectionTracker>
 *
 * The wrapper also adds data-section="name" so the global click tracker in
 * GoogleAnalytics.tsx can attribute clicks to the correct section automatically.
 */
export default function SectionTracker({
  name,
  children,
  className,
  id,
  threshold = 0.4,
  trackEngagement = true,
}: SectionTrackerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const hasViewed = useRef(false)
  const enterTime = useRef<number | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // First view → fire section_viewed event
          if (!hasViewed.current) {
            hasViewed.current = true
            trackSectionView(name)
          }
          // Record when user entered the section
          enterTime.current = Date.now()
        } else {
          // User scrolled away — track engagement time
          if (trackEngagement && enterTime.current !== null) {
            const seconds = Math.round((Date.now() - enterTime.current) / 1000)
            if (seconds >= 2) {
              // Only count if they spent at least 2 seconds
              trackSectionEngagement(name, seconds)
            }
            enterTime.current = null
          }
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [name, threshold, trackEngagement])

  return (
    <div
      ref={ref}
      className={className}
      id={id}
      data-section={name}
    >
      {children}
    </div>
  )
}
