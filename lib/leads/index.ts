import { toGoogleSheet } from './googleSheet'
// import { toHubSpot } from './hubspot'  // ← flip this one line to migrate

export type Lead = {
  name:          string
  role:          string
  org:           string
  email:         string
  phone?:        string
  message?:      string
  preferredSlot?: string
  // GDPR: B2B contact data only. No patient / child fields here.
  // Patient data → Supabase (EU, row-level security) — Phase 7.
}

/**
 * CHANGE THIS ONE LINE to migrate lead provider — nothing else moves.
 * Current:  Google Sheet (MVP)
 * Future:   HubSpot CRM
 */
export const submitLead = (lead: Lead): Promise<void> => toGoogleSheet(lead)
