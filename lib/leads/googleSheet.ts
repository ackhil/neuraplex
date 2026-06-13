import type { Lead } from './index'

/**
 * Sends lead data to a Google Apps Script web-app endpoint,
 * which appends a row to a Google Sheet.
 *
 * Setup:
 *  1. In Google Sheets, open Extensions → Apps Script.
 *  2. Deploy as a Web App (execute as "Me", access "Anyone").
 *  3. Copy the /exec URL into GSHEET_WEBAPP_URL in .env.local.
 */
export async function toGoogleSheet(lead: Lead): Promise<void> {
  const url = process.env.GSHEET_WEBAPP_URL

  if (!url || url === 'https://script.google.com/macros/s/placeholder/exec') {
    console.warn('[leads/googleSheet] GSHEET_WEBAPP_URL not configured — lead not sent:', lead)
    return
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...lead,
      submittedAt: new Date().toISOString(),
      source: 'neuraplex.co.uk',
    }),
  })

  if (!res.ok) {
    throw new Error(`[leads/googleSheet] HTTP ${res.status}: ${await res.text()}`)
  }
}
