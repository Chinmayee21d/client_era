'use client'

import { useEffect, useMemo, useState } from 'react'

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

function isDntEnabled(): boolean {
  if (typeof navigator === 'undefined' || typeof window === 'undefined') {
    return false
  }
  const dnt =
    navigator.doNotTrack ||
    (window as Window & { doNotTrack?: string }).doNotTrack ||
    (navigator as Navigator & { msDoNotTrack?: string }).msDoNotTrack
  return dnt === '1' || dnt === 'yes'
}

function saveConsent(consent: Omit<ConsentState, 'timestamp' | 'version'>): ConsentState {
  const payload: ConsentState = {
    ...consent,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  return payload
}

export default function CookieConsentBanner() {
  const [loaded, setLoaded] = useState(false)
  const [showBanner, setShowBanner] = useState(false)
  const [showManage, setShowManage] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)
  const dntEnabled = useMemo(() => isDntEnabled(), [])

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      setLoaded(true)
      return
    }

    if (dntEnabled) {
      saveConsent({
        necessary: true,
        analytics: false,
        marketing: false,
        dnt: true,
      })
      setLoaded(true)
      return
    }

    setShowBanner(true)
    setLoaded(true)
  }, [dntEnabled])

  useEffect(() => {
    const openPrefs = () => {
      setShowBanner(true)
      setShowManage(true)
    }

    window.addEventListener('open-cookie-preferences', openPrefs)
    return () => window.removeEventListener('open-cookie-preferences', openPrefs)
  }, [])

  function acceptAll() {
    saveConsent({
      necessary: true,
      analytics: !dntEnabled,
      marketing: !dntEnabled,
      dnt: dntEnabled,
    })
    setShowBanner(false)
    setShowManage(false)
  }

  function rejectNonEssential() {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      dnt: dntEnabled,
    })
    setShowBanner(false)
    setShowManage(false)
  }

  function savePreferences() {
    saveConsent({
      necessary: true,
      analytics: dntEnabled ? false : analytics,
      marketing: dntEnabled ? false : marketing,
      dnt: dntEnabled,
    })
    setShowBanner(false)
    setShowManage(false)
  }

  if (!loaded || !showBanner) {
    return null
  }

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-content">
        <p>
          We use cookies to ensure optimal platform functionality and improve performance. Read our{' '}
          <a href="/legal/cookies">Cookie Policy</a>.
        </p>
        {dntEnabled ? (
          <p className="cookie-note">
            Do Not Track is enabled in your browser. Analytics and marketing cookies stay off.
          </p>
        ) : null}
        <div className="cookie-actions">
          <button type="button" onClick={acceptAll} className="btn-accept">
            Accept All
          </button>
          <button type="button" onClick={rejectNonEssential} className="btn-reject">
            Reject Non-Essential
          </button>
          <button type="button" onClick={() => setShowManage((v) => !v)} className="btn-manage">
            Manage Preferences
          </button>
        </div>
        {showManage ? (
          <div className="cookie-manage">
            <label>
              <input type="checkbox" checked readOnly />
              Strictly Necessary (always on)
            </label>
            <label>
              <input
                type="checkbox"
                checked={dntEnabled ? false : analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                disabled={dntEnabled}
              />
              Analytics
            </label>
            <label>
              <input
                type="checkbox"
                checked={dntEnabled ? false : marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                disabled={dntEnabled}
              />
              Marketing
            </label>
            <button type="button" onClick={savePreferences} className="btn-save">
              Save Preferences
            </button>
          </div>
        ) : null}
      </div>

      <style jsx>{`
        .cookie-banner {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 99999;
          width: 100%;
          max-width: 400px;
          background: rgba(11, 22, 40, 0.95);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          color: var(--text);
          font-family: var(--font-sans);
        }
        .cookie-content p {
          font-size: 13px;
          line-height: 1.5;
          margin: 0 0 16px 0;
          color: var(--text2);
        }
        .cookie-content a {
          color: var(--gold);
          text-decoration: underline;
        }
        .cookie-note {
          font-size: 11px !important;
          color: #FFBD2E !important;
          background: rgba(255, 189, 46, 0.1);
          padding: 8px 12px;
          border-radius: 6px;
          margin-bottom: 16px !important;
        }
        .cookie-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        button {
          padding: 10px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
        }
        .btn-accept {
          background: var(--gold);
          color: var(--navy);
        }
        .btn-accept:hover {
          background: var(--gold2);
        }
        .btn-reject {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .btn-reject:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        .btn-manage {
          background: transparent;
          color: var(--text3);
          text-decoration: underline;
          padding: 4px;
          margin-top: 4px;
        }
        .cookie-manage {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .cookie-manage label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: var(--text);
          cursor: pointer;
        }
        .cookie-manage input {
          width: 16px;
          height: 16px;
          accent-color: var(--gold);
        }
        .btn-save {
          margin-top: 8px;
          background: rgba(255, 255, 255, 0.1);
          color: var(--text);
        }
        @media (max-width: 500px) {
          .cookie-banner {
            bottom: 0;
            right: 0;
            max-width: 100%;
            border-radius: 16px 16px 0 0;
            border-bottom: none;
            border-left: none;
            border-right: none;
          }
        }
      `}</style>
    </div>
  )
}
