export const SITE_NAME = 'ClientEra'
export const SITE_TITLE_TEMPLATE = '%s | ClientEra'
export const SITE_DESCRIPTION = 'ClientEra is the unified Commercial Operating System for sales teams. From first conversation to final payment — manage leads, visits, pipeline, quotes, and customer service in one AI-powered platform.'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://clientera.ai'
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-NVHJK7JJ'

export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return 'http://localhost:3000'
}
