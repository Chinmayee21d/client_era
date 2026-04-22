'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import {
  trackScrollDepth,
  trackTimeOnPage,
  trackClick,
  trackOutboundLink,
  trackPageView,
  trackEvent,
} from '@/lib/analytics'

// ─── Constants ────────────────────────────────────────────────────────────────

/** Scroll milestones in % */
const SCROLL_MILESTONES = [25, 50, 75, 90, 100]

/** Time-on-page milestones in seconds */
const TIME_MILESTONES = [15, 30, 60, 120, 300]

// ─── Consent ──────────────────────────────────────────────────────────────────

const CONSENT_VERSION = '2026-03-01'
const STORAGE_KEY = `ce_cookie_consent_${CONSENT_VERSION}`

type ConsentState = {
  necessary: true
  analytics: boolean
  marketing: boolean
  timestamp: string
  version: string
  dnt: boolean
}

function getConsentFromStorage(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as ConsentState
  } catch {
    return null
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function GoogleAnalytics() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)
  const pathname = usePathname()

  const scrollMilestones = useRef(new Set<number>())
  const timeMilestones   = useRef(new Set<number>())
  const pageStart        = useRef(Date.now())
  const timerRef         = useRef<ReturnType<typeof setInterval> | null>(null)

  // ── Check & listen for consent ────────────────────────────────────────────
  useEffect(() => {
    const consent = getConsentFromStorage()
    if (consent?.analytics) setAnalyticsEnabled(true)

    function onStorage(e: StorageEvent) {
      if (e.key !== STORAGE_KEY || !e.newValue) return
      try {
        const updated = JSON.parse(e.newValue) as ConsentState
        setAnalyticsEnabled(!!updated.analytics)
      } catch { /* ignore */ }
    }

    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  // ── Reset milestones on route change & fire page_view ─────────────────────
  useEffect(() => {
    if (!analyticsEnabled) return
    scrollMilestones.current.clear()
    timeMilestones.current.clear()
    pageStart.current = Date.now()
    trackPageView(pathname, document.title)
  }, [analyticsEnabled, pathname])

  // ── Traffic source / referrer tracking (once per session) ─────────────────
  useEffect(() => {
    if (!analyticsEnabled) return
    // Only run once per session
    if (sessionStorage.getItem('ce_source_tracked')) return
    sessionStorage.setItem('ce_source_tracked', '1')

    const referrer = document.referrer
    const params   = new URLSearchParams(window.location.search)

    let source  = 'direct'
    let medium  = 'none'
    let campaign = params.get('utm_campaign') || '(not set)'

    // UTM overrides everything
    if (params.get('utm_source')) {
      source   = params.get('utm_source')!
      medium   = params.get('utm_medium') || 'none'
      campaign = params.get('utm_campaign') || '(not set)'
    } else if (referrer) {
      try {
        const refHost = new URL(referrer).hostname
        if (/google\.|bing\.|yahoo\.|duckduckgo\./.test(refHost)) {
          source = refHost.replace('www.', '')
          medium = 'organic'
        } else if (/linkedin\.com/.test(refHost)) {
          source = 'linkedin'
          medium = 'social'
        } else if (/twitter\.com|x\.com/.test(refHost)) {
          source = 'twitter'
          medium = 'social'
        } else if (/facebook\.com|fb\./.test(refHost)) {
          source = 'facebook'
          medium = 'social'
        } else {
          source = refHost
          medium = 'referral'
        }
      } catch { /* ignore malformed referrer */ }
    }

    // Push to dataLayer so GTM can use these values in goals/audiences
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event:           'session_source_identified',
      traffic_source:  source,
      traffic_medium:  medium,
      traffic_campaign: campaign,
      page_referrer:   referrer || '(direct)',
    })

    trackEvent('session_source', {
      traffic_source:   source,
      traffic_medium:   medium,
      traffic_campaign: campaign,
      page_referrer:    referrer || '(direct)',
    })
  }, [analyticsEnabled])

  // ── Scroll depth tracking ─────────────────────────────────────────────────
  useEffect(() => {
    if (!analyticsEnabled) return

    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight
      const total    = document.documentElement.scrollHeight
      if (total <= 0) return
      const pct = Math.round((scrolled / total) * 100)

      for (const milestone of SCROLL_MILESTONES) {
        if (pct >= milestone && !scrollMilestones.current.has(milestone)) {
          scrollMilestones.current.add(milestone)
          trackScrollDepth(milestone)
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [analyticsEnabled, pathname])

  // ── Time on page tracking ─────────────────────────────────────────────────
  useEffect(() => {
    if (!analyticsEnabled) return

    if (timerRef.current) clearInterval(timerRef.current)

    timerRef.current = setInterval(() => {
      const elapsed = Math.floor((Date.now() - pageStart.current) / 1000)
      for (const milestone of TIME_MILESTONES) {
        if (elapsed >= milestone && !timeMilestones.current.has(milestone)) {
          timeMilestones.current.add(milestone)
          trackTimeOnPage(milestone)
        }
      }
    }, 5_000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [analyticsEnabled, pathname])

  // ── Global click tracking ─────────────────────────────────────────────────
  useEffect(() => {
    if (!analyticsEnabled) return

    function onGlobalClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (!target) return

      // Walk up the DOM to find the nearest interactive element
      const el = target.closest(
        'a, button, [data-track], [role="button"], input[type="submit"]'
      ) as HTMLElement | null

      // Track raw clicks that miss interactive elements (rage-click / misclick heatmap)
      if (!el) {
        const section = (
          target.closest('[data-section]') as HTMLElement | null
        )?.dataset.section ?? 'unknown'

        trackEvent('raw_click', {
          click_x:      Math.round(e.clientX),
          click_y:      Math.round(e.clientY),
          viewport_w:   window.innerWidth,
          viewport_h:   window.innerHeight,
          element_tag:  target.tagName.toLowerCase(),
          section_name: section,
        })
        return
      }

      // Find the nearest data-section ancestor
      const sectionEl  = el.closest('[data-section]') as HTMLElement | null
      const section    = sectionEl?.dataset.section ?? 'unknown'

      // Best label: aria-label → data-label → visible text
      const label =
        el.getAttribute('aria-label') ??
        el.getAttribute('data-label') ??
        el.textContent?.trim().slice(0, 80) ??
        'unknown'

      const tag = el.tagName.toLowerCase()

      // Outbound link?
      if (tag === 'a') {
        const href       = (el as HTMLAnchorElement).href
        const isExternal =
          href &&
          !href.startsWith(window.location.origin) &&
          !href.startsWith('/') &&
          !href.startsWith('#')
        if (isExternal) {
          trackOutboundLink(href, label)
          return
        }
      }

      trackClick(tag, section, label)
    }

    document.addEventListener('click', onGlobalClick)
    return () => document.removeEventListener('click', onGlobalClick)
  }, [analyticsEnabled])

  // This component renders nothing — it only attaches event listeners
  return null
}
