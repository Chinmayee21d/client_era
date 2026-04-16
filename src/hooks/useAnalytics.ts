'use client'

import { useCallback } from 'react'
import {
  trackClick,
  trackCTAClick,
  trackFormStart,
  trackFormSubmit,
  trackFormError,
  trackAccordionOpen,
  trackVideoPlay,
  trackSearch,
  trackNavClick,
} from '@/lib/analytics'

/**
 * useAnalytics — convenience hook for firing GA4 events from any component.
 *
 * Pass a `defaultSection` string (e.g. "Hero", "Pricing") so every event
 * fired from that component is automatically tagged with the correct section.
 *
 * Usage:
 *   const { logCTA, logFormSubmit } = useAnalytics('Hero')
 *   <button onClick={() => logCTA('Book Demo')}>Book Demo</button>
 */
export function useAnalytics(defaultSection = 'unknown') {
  /** Track any generic element click */
  const logClick = useCallback(
    (elementType: string, label?: string, section = defaultSection) => {
      trackClick(elementType, section, label)
    },
    [defaultSection]
  )

  /** Track a Call-to-Action button */
  const logCTA = useCallback(
    (ctaName: string, location = defaultSection) => {
      trackCTAClick(ctaName, location)
    },
    [defaultSection]
  )

  /** Track a nav link click */
  const logNav = useCallback((destination: string) => {
    trackNavClick(destination)
  }, [])

  /** Track when a user first touches a form field */
  const logFormStart = useCallback((formName: string) => {
    trackFormStart(formName)
  }, [])

  /** Track a form submission result */
  const logFormSubmit = useCallback((formName: string, success: boolean) => {
    trackFormSubmit(formName, success)
  }, [])

  /** Track a form validation error */
  const logFormError = useCallback((formName: string, field: string) => {
    trackFormError(formName, field)
  }, [])

  /** Track opening a FAQ / accordion item */
  const logAccordion = useCallback(
    (itemName: string, section = defaultSection) => {
      trackAccordionOpen(itemName, section)
    },
    [defaultSection]
  )

  /** Track a video play */
  const logVideo = useCallback(
    (videoTitle: string, section = defaultSection) => {
      trackVideoPlay(videoTitle, section)
    },
    [defaultSection]
  )

  /** Track a search query */
  const logSearch = useCallback((query: string, resultsCount?: number) => {
    trackSearch(query, resultsCount)
  }, [])

  return {
    logClick,
    logCTA,
    logNav,
    logFormStart,
    logFormSubmit,
    logFormError,
    logAccordion,
    logVideo,
    logSearch,
  }
}
