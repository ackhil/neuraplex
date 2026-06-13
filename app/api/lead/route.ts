import { type NextRequest } from 'next/server'
import { submitLead, type Lead } from '@/lib/leads'

// Honeypot field — bots fill it, humans don't
const HONEYPOT = '_hp'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Lead & { [HONEYPOT]?: string }

    // Anti-spam: honeypot check
    if (body[HONEYPOT]) {
      // Silently succeed so bots don't know they failed
      return Response.json({ ok: true })
    }

    // Basic validation
    const required: (keyof Lead)[] = ['name', 'role', 'org', 'email']
    for (const field of required) {
      if (!body[field]?.toString().trim()) {
        return Response.json(
          { ok: false, error: `${field} is required` },
          { status: 400 },
        )
      }
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return Response.json({ ok: false, error: 'Invalid email' }, { status: 400 })
    }

    const lead: Lead = {
      name:          body.name.trim(),
      role:          body.role.trim(),
      org:           body.org.trim(),
      email:         body.email.trim().toLowerCase(),
      phone:         body.phone?.trim(),
      message:       body.message?.trim(),
      preferredSlot: body.preferredSlot?.trim(),
    }

    await submitLead(lead)

    return Response.json({ ok: true })
  } catch (err) {
    console.error('[api/lead] Error:', err)
    return Response.json({ ok: false, error: 'Internal error' }, { status: 500 })
  }
}
