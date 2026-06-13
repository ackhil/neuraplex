import type { Lead } from './index'

/**
 * Future HubSpot CRM provider — stub ready to enable.
 *
 * To activate:
 *  1. Uncomment the import in lib/leads/index.ts.
 *  2. Add HUBSPOT_PORTAL_ID + HUBSPOT_FORM_GUID to .env.local.
 *  3. Change submitLead() to call toHubSpot() instead of toGoogleSheet().
 */
export async function toHubSpot(lead: Lead): Promise<void> {
  const portalId = process.env.HUBSPOT_PORTAL_ID
  const formGuid = process.env.HUBSPOT_FORM_GUID

  if (!portalId || !formGuid) {
    throw new Error('[leads/hubspot] HUBSPOT_PORTAL_ID or HUBSPOT_FORM_GUID missing')
  }

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`

  const fields = [
    { name: 'firstname',   value: lead.name.split(' ')[0] ?? '' },
    { name: 'lastname',    value: lead.name.split(' ').slice(1).join(' ') },
    { name: 'email',       value: lead.email },
    { name: 'phone',       value: lead.phone  ?? '' },
    { name: 'jobtitle',    value: lead.role },
    { name: 'company',     value: lead.org },
    { name: 'message',     value: lead.message ?? '' },
  ]

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields, context: { pageUri: 'https://neuraplex.co.uk/demo' } }),
  })

  if (!res.ok) {
    throw new Error(`[leads/hubspot] HTTP ${res.status}: ${await res.text()}`)
  }
}
