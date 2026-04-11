export type SendMailInput = {
  to: string | string[]
  subject: string
  html: string
  text?: string
  replyTo?: string
  from?: string
}

export type SendMailResult = {
  ok: boolean
  status?: number
  error?: string
}

/**
 * Sends an email using Brevo's (Sendinblue) SMTP API.
 * Uses native fetch to be compatible with Cloudflare Edge Runtime.
 */
export async function sendMail(input: SendMailInput): Promise<SendMailResult> {
  const apiKey = process.env.BREVO_API_KEY
  const fromName = process.env.EMAIL_FROM_NAME || 'ClientEra'
  const fromEmail = process.env.EMAIL_FROM_ADDRESS || 'notifications@clientera.io'
  
  const from = input.from || `"${fromName}" <${fromEmail}>`

  // Development mock mode
  if (!apiKey) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('--- [MOCK MAIL] ---');
      console.log(`From: ${from}`);
      console.log(`To: ${input.to}`);
      console.log(`Subject: ${input.subject}`);
      console.log(`HTML: ${input.html.substring(0, 100)}...`);
      console.log('--- [/MOCK MAIL] ---');
      return { ok: true, status: 200 };
    }
    console.warn('[mail] BREVO_API_KEY is missing. Email not sent.', { to: input.to, subject: input.subject });
    return { ok: false, error: 'BREVO_API_KEY is missing.' };
  }

  // Parse "Name <email@example.com>" format
  const fromMatch = from.match(/^(.*)<(.+)>$/)
  const sender = fromMatch
    ? { name: fromMatch[1].trim().replace(/^"|"$/g, ''), email: fromMatch[2].trim() }
    : { name: fromName, email: fromEmail }

  const to = Array.isArray(input.to) ? input.to : [input.to]
  
  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sender,
        to: to.map((email) => ({ email })),
        subject: input.subject,
        htmlContent: input.html,
        textContent: input.text,
        replyTo: input.replyTo ? { email: input.replyTo } : undefined
      })
    })

    if (!res.ok) {
      const body = await res.text().catch(() => '')
      console.error('[mail] Provider error:', body);
      return {
        ok: false,
        status: res.status,
        error: body || `Email provider rejected request with status ${res.status}.`
      }
    }

    return { ok: true, status: res.status }
  } catch (err: any) {
    console.error('[mail] Fetch error:', err);
    return { ok: false, error: err.message };
  }
}
