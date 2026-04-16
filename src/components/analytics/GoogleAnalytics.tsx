// 'use client'

// import Script from 'next/script'
// import { usePathname } from 'next/navigation'
// import { useEffect, useRef, useState } from 'react'
// import {
//   trackScrollDepth,
//   trackTimeOnPage,
//   trackClick,
//   trackOutboundLink,
//   trackPageView,
// } from '@/lib/analytics'

// // ─── Consent ─────────────────────────────────────────────────────────────────

// const CONSENT_VERSION = '2026-03-01'
// const STORAGE_KEY = `ce_cookie_consent_${CONSENT_VERSION}`

// type ConsentState = {
//   necessary: true
//   analytics: boolean
//   marketing: boolean
//   timestamp: string
//   version: string
//   dnt: boolean
// }

// function getConsentFromStorage(): ConsentState | null {
//   try {
//     const raw = localStorage.getItem(STORAGE_KEY)
//     if (!raw) return null
//     return JSON.parse(raw) as ConsentState
//   } catch {
//     return null
//   }
// }

// // ─── Milestones ──────────────────────────────────────────────────────────────

// /** Scroll milestones in % */
// const SCROLL_MILESTONES = [25, 50, 75, 90, 100]

// /** Time-on-page milestones in seconds */
// const TIME_MILESTONES = [15, 30, 60, 120, 300]

// // ─── Component ───────────────────────────────────────────────────────────────

// export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
//   const [analyticsEnabled, setAnalyticsEnabled] = useState(false)
//   const pathname = usePathname()

//   const scrollMilestones = useRef(new Set<number>())
//   const timeMilestones = useRef(new Set<number>())
//   const pageStart = useRef(Date.now())
//   const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

//   // ── Check & listen for consent ────────────────────────────────────────────
//   useEffect(() => {
//     const consent = getConsentFromStorage()
//     if (consent?.analytics) setAnalyticsEnabled(true)

//     function onStorage(e: StorageEvent) {
//       if (e.key !== STORAGE_KEY || !e.newValue) return
//       try {
//         const updated = JSON.parse(e.newValue) as ConsentState
//         setAnalyticsEnabled(!!updated.analytics)
//       } catch { /* ignore */ }
//     }

//     window.addEventListener('storage', onStorage)
//     return () => window.removeEventListener('storage', onStorage)
//   }, [])

//   // ── Reset milestones on route change & fire page_view ─────────────────────
//   useEffect(() => {
//     if (!analyticsEnabled) return
//     scrollMilestones.current.clear()
//     timeMilestones.current.clear()
//     pageStart.current = Date.now()
//     trackPageView(pathname, document.title)
//   }, [analyticsEnabled, pathname])

//   // ── Scroll depth tracking ─────────────────────────────────────────────────
//   useEffect(() => {
//     if (!analyticsEnabled) return

//     function onScroll() {
//       const scrolled = window.scrollY + window.innerHeight
//       const total = document.documentElement.scrollHeight
//       if (total <= 0) return
//       const pct = Math.round((scrolled / total) * 100)

//       for (const milestone of SCROLL_MILESTONES) {
//         if (pct >= milestone && !scrollMilestones.current.has(milestone)) {
//           scrollMilestones.current.add(milestone)
//           trackScrollDepth(milestone)
//         }
//       }
//     }

//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [analyticsEnabled])

//   // ── Time on page tracking ─────────────────────────────────────────────────
//   useEffect(() => {
//     if (!analyticsEnabled) return

//     if (timerRef.current) clearInterval(timerRef.current)

//     timerRef.current = setInterval(() => {
//       const elapsed = Math.floor((Date.now() - pageStart.current) / 1000)
//       for (const milestone of TIME_MILESTONES) {
//         if (elapsed >= milestone && !timeMilestones.current.has(milestone)) {
//           timeMilestones.current.add(milestone)
//           trackTimeOnPage(milestone)
//         }
//       }
//     }, 5_000)

//     return () => {
//       if (timerRef.current) clearInterval(timerRef.current)
//     }
//   }, [analyticsEnabled, pathname])

//   // ── IP and Source tracking ───────────────────────────────────────────────
//   useEffect(() => {
//     if (!analyticsEnabled) return

//     async function fetchUserContext() {
//       try {
//         const response = await fetch('https://ipapi.co/json/')
//         const data = await response.json()
        
//         // Push to dataLayer for GTM use
//         window.dataLayer = window.dataLayer || []
//         window.dataLayer.push({
//           event: 'user_context_ready',
//           user_ip: data.ip,
//           user_city: data.city,
//           user_country: data.country_name,
//           user_provider: data.org,
//           referrer: document.referrer || 'direct'
//         })

//         // Also track as a one-time event
//         trackEvent('session_context', {
//           ip_address: data.ip,
//           location: `${data.city}, ${data.country_name}`,
//           referrer: document.referrer || 'direct'
//         })
//       } catch (err) {
//         console.error('Failed to fetch user context:', err)
//       }
//     }

//     fetchUserContext()
//   }, [analyticsEnabled])

//   // ── Section Dwell Time tracking ───────────────────────────────────────────
//   useEffect(() => {
//     if (!analyticsEnabled) return

//     const sectionTimers = new Map<string, number>()
    
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const sectionName = (entry.target as HTMLElement).dataset.section
//           if (!sectionName) return

//           if (entry.isIntersecting) {
//             // Started viewing
//             sectionTimers.set(sectionName, Date.now())
//           } else {
//             // Stopped viewing
//             const startTime = sectionTimers.get(sectionName)
//             if (startTime) {
//               const secondsSpent = Math.floor((Date.now() - startTime) / 1000)
//               if (secondsSpent >= 2) { // Only track if they stayed for at least 2s
//                 trackSectionEngagement(sectionName, secondsSpent)
//               }
//               sectionTimers.delete(sectionName)
//             }
//           }
//         })
//       },
//       { threshold: 0.5 } // Must see 50% of the section
//     )

//     // Observe all elements with data-section
//     const sections = document.querySelectorAll('[data-section]')
//     sections.forEach((s) => observer.observe(s))

//     return () => observer.disconnect()
//   }, [analyticsEnabled, pathname])

//   // ── Global click tracking ─────────────────────────────────────────────────
//   useEffect(() => {
//     if (!analyticsEnabled) return

//     function onGlobalClick(e: MouseEvent) {
//       const target = e.target as HTMLElement
//       if (!target) return

//       // Walk up the DOM to find the nearest trackable element
//       const el = target.closest(
//         'a, button, [data-track], [role="button"]'
//       ) as HTMLElement | null
      
//       // If we didn't hit a button/link, let's still track WHERE the click happened
//       // to find "interaction hotspots"
//       if (!el) {
//         trackEvent('missed_click', {
//           click_x: e.clientX,
//           click_y: e.clientY,
//           viewport_w: window.innerWidth,
//           viewport_h: window.innerHeight,
//           element_tag: target.tagName.toLowerCase()
//         })
//         return
//       }

//       // Read section name from the nearest [data-section] ancestor
//       const sectionEl = el.closest('[data-section]') as HTMLElement | null
//       const section = sectionEl?.dataset.section ?? 'unknown'

//       // Best label: aria-label → data-label → visible text
//       const label =
//         el.getAttribute('aria-label') ??
//         el.getAttribute('data-label') ??
//         el.textContent?.trim().slice(0, 80) ??
//         'unknown'

//       const tag = el.tagName.toLowerCase()

//       // Outbound link?
//       if (tag === 'a') {
//         const href = (el as HTMLAnchorElement).href
//         const isExternal =
//           href &&
//           !href.startsWith(window.location.origin) &&
//           !href.startsWith('/') &&
//           !href.startsWith('#')
//         if (isExternal) {
//           trackOutboundLink(href, label)
//           return
//         }
//       }

//       trackClick(tag, section, label)
//     }

//     document.addEventListener('click', onGlobalClick)
//     return () => document.removeEventListener('click', onGlobalClick)
//   }, [analyticsEnabled])

//   // ── Render GA4 scripts ────────────────────────────────────────────────────
//   if (!analyticsEnabled || !GA_MEASUREMENT_ID) return null

//   return (
//     <>
//       <Script
//         async
//         strategy="afterInteractive"
//         src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
//       />
//       <Script
//         id="google-analytics"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', '${GA_MEASUREMENT_ID}', {
//               send_page_view: false
//             });
//           `,
//         }}
//       />
//     </>
//   )
// }
