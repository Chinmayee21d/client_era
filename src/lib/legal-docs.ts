import { promises as fs } from 'fs'
import path from 'path'
import { marked } from 'marked'

export type LegalDocDef = {
  slug: string
  title: string
  description: string
  sourceFile: string
  startHeading?: string
  endHeading?: string
}

const complianceDir = path.join(process.cwd(), 'src', 'compliance')

export const LEGAL_DOCS: Record<string, LegalDocDef> = {
  privacy: {
    slug: 'privacy',
    title: 'Privacy Policy',
    description: 'How Client Era collects, uses, and protects your business and operational data.',
    sourceFile: '01-privacy-policy.md',
  },
  terms: {
    slug: 'terms',
    title: 'Terms of Service',
    description: 'Terms governing the use of Client Era services.',
    sourceFile: '02-terms-of-service.md',
  },
  cookies: {
    slug: 'cookies',
    title: 'Cookie Policy',
    description: 'Cookie categories, purposes, and consent controls for Client Era.',
    sourceFile: '04-cookie-policy.md',
  },
}

function sectionBetweenHeadings(
  markdown: string,
  startHeading?: string,
  endHeading?: string,
): string {
  if (!startHeading && !endHeading) {
    return markdown
  }

  const normalized = markdown.replace(/\r\n/g, '\n')
  const startIndex = startHeading ? normalized.indexOf(startHeading) : 0

  if (startHeading && startIndex === -1) {
    return normalized
  }

  const from = startIndex >= 0 ? startIndex : 0
  const tail = normalized.slice(from)
  const endIndex = endHeading ? tail.indexOf(endHeading) : -1

  return endIndex >= 0 ? tail.slice(0, endIndex).trim() : tail.trim()
}

export async function getLegalDocContent(def: LegalDocDef): Promise<string> {
  const filePath = path.join(complianceDir, def.sourceFile)
  const raw = await fs.readFile(filePath, 'utf8')
  return sectionBetweenHeadings(raw, def.startHeading, def.endHeading)
}

export async function getLegalDocHtml(def: LegalDocDef): Promise<string> {
  const markdown = await getLegalDocContent(def)
  return marked.parse(markdown, { gfm: true }) as string
}
