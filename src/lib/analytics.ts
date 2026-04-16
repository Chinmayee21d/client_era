/**
 * analytics.ts — ClientEra event tracking library
 *
 * All functions are safe to call server-side (they return early if window/gtag
 * is not available), so you can import them anywhere without 'use client' guards.
 *
 * HOW IT WORKS
 * ─────────────
 * These are the "Tags" you would configure in Google Tag Manager.
 * Each function is one Tag that fires a specific GA4 event.
 * The parameters are the "Variables" that carry data with the tag.
 * The moment something happens in the UI is the "Trigger".
 */

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

export type GAParams = Record<string, string | number | boolean | null | undefined>

// ─── Core dispatcher ─────────────────────────────────────────────────────────

/**
 * Send any GA4 event. All other functions call this internally.
 * Equivalent to a GTM "Custom Event" tag.
 */
export function trackEvent(eventName: string, params?: GAParams): void {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return
  window.gtag('event', eventName, {
    page_path: window.location.pathname,
    page_title: document.title,
    referrer: typeof document !== 'undefined' ? document.referrer : '',
    ...params,
  })
}

/**
 * Set the current user's identity.
 */
export function identifyUser(userId: string, userTraits?: GAParams): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
    user_id: userId,
    ...userTraits,
  })
}

// ─── Page tracking ───────────────────────────────────────────────────────────

/**
 * Track a virtual page view (called automatically on route change).
 * GA4 Built-in: page_view
 */
export function trackPageView(path: string, title: string): void {
  trackEvent('page_view', {
    page_location: typeof window !== 'undefined' ? window.location.href : '',
    page_path: path,
    page_title: title,
  })
}

// ─── Click tracking ──────────────────────────────────────────────────────────

/**
 * Track any element click.
 * Custom event: element_click
 * Variables: element_type, section_name, click_label
 */
export function trackClick(elementType: string, sectionName: string, label?: string): void {
  trackEvent('element_click', {
    element_type: elementType,
    section_name: sectionName,
    click_label: label?.slice(0, 100),
  })
}

/**
 * Track a CTA (Call-to-Action) button click.
 * Custom event: cta_click
 * Variables: cta_name, cta_location
 */
export function trackCTAClick(ctaName: string, ctaLocation: string): void {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: ctaLocation,
  })
}

/**
 * Track navigation link clicks.
 * Custom event: nav_click
 */
export function trackNavClick(destination: string): void {
  trackEvent('nav_click', {
    nav_destination: destination,
  })
}

/**
 * Track clicks on external links leaving the site.
 * Custom event: outbound_link_click
 */
export function trackOutboundLink(href: string, linkText: string): void {
  trackEvent('outbound_link_click', {
    link_url: href,
    link_text: linkText?.slice(0, 100),
  })
}

// ─── Scroll depth ────────────────────────────────────────────────────────────

/**
 * Track how far the user has scrolled (milestone: 25, 50, 75, 90, 100).
 * Custom event: scroll_depth_milestone
 */
export function trackScrollDepth(percent: number): void {
  trackEvent('scroll_depth_milestone', {
    scroll_percent: percent,
  })
}

// ─── Section tracking ────────────────────────────────────────────────────────

/**
 * Track when a page section enters the viewport (user "sees" it).
 * Custom event: section_viewed
 * Variable: section_name
 */
export function trackSectionView(sectionName: string): void {
  trackEvent('section_viewed', {
    section_name: sectionName,
  })
}

/**
 * Track how long a user stays within a section.
 * Custom event: section_engagement
 */
export function trackSectionEngagement(sectionName: string, secondsSpent: number): void {
  trackEvent('section_engagement', {
    section_name: sectionName,
    seconds_spent: secondsSpent,
  })
}

// ─── Time on page ────────────────────────────────────────────────────────────

/**
 * Track milestones of how long a user has been on the page.
 * Custom event: time_on_page_milestone
 * Milestones: 15s, 30s, 60s, 2min, 5min
 */
export function trackTimeOnPage(seconds: number): void {
  trackEvent('time_on_page_milestone', {
    seconds_spent: seconds,
  })
}

// ─── Form tracking ───────────────────────────────────────────────────────────

/** User first interacts with a form. Custom event: form_start */
export function trackFormStart(formName: string): void {
  trackEvent('form_start', { form_name: formName })
}

/** User submits a form. Custom event: form_submit */
export function trackFormSubmit(formName: string, success: boolean): void {
  trackEvent('form_submit', {
    form_name: formName,
    form_success: success,
  })
}

/** A form field has a validation error. Custom event: form_error */
export function trackFormError(formName: string, errorField: string): void {
  trackEvent('form_error', {
    form_name: formName,
    error_field: errorField,
  })
}

// ─── Search ──────────────────────────────────────────────────────────────────

/** User performs a search. Custom event: search (GA4 standard) */
export function trackSearch(query: string, resultsCount?: number): void {
  trackEvent('search', {
    search_term: query,
    results_count: resultsCount,
  })
}

// ─── Engagement helpers ──────────────────────────────────────────────────────

/** User opens a dropdown / accordion / FAQ item. Custom event: accordion_open */
export function trackAccordionOpen(itemName: string, section: string): void {
  trackEvent('accordion_open', {
    item_name: itemName,
    section_name: section,
  })
}

/** User watches a video. Custom event: video_play */
export function trackVideoPlay(videoTitle: string, section: string): void {
  trackEvent('video_play', {
    video_title: videoTitle,
    section_name: section,
  })
}
