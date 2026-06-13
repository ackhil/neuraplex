'use client'

/**
 * HubSpot Meetings embed.
 * Set NEXT_PUBLIC_HUBSPOT_MEETINGS_URL in .env.local to your meetings page URL.
 * e.g. https://meetings.hubspot.com/your-team-link
 *
 * Phase 4 wires this to real calendar availability.
 */
export default function HubSpotMeetings() {
  const url = process.env.NEXT_PUBLIC_HUBSPOT_MEETINGS_URL

  if (!url || url === 'https://meetings.hubspot.com/placeholder') {
    return (
      <div className="rounded-brand border border-line bg-mist p-8 text-center min-h-[420px] flex flex-col items-center justify-center gap-3">
        <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mb-2">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="3" y="5" width="16" height="14" rx="2.5" stroke="#119DA4" strokeWidth="1.6"/>
            <path d="M7 3v4M15 3v4" stroke="#119DA4" strokeWidth="1.6" strokeLinecap="round"/>
            <path d="M3 10h16" stroke="#119DA4" strokeWidth="1.5"/>
          </svg>
        </div>
        <p className="font-display font-semibold text-plumInk text-[15px]">Calendar coming soon</p>
        <p className="text-slate text-[13px] max-w-[28ch]">
          HubSpot Meetings embed — set{' '}
          <code className="font-mono text-[11px] bg-white border border-line rounded px-1">
            NEXT_PUBLIC_HUBSPOT_MEETINGS_URL
          </code>{' '}
          in <code className="font-mono text-[11px] bg-white border border-line rounded px-1">.env.local</code> to activate.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-brand overflow-hidden border border-line shadow-sm min-h-[650px]">
      <iframe
        src={url}
        title="Book a time with Neuraplex"
        width="100%"
        height="650"
        frameBorder="0"
        allowFullScreen
        style={{ display: 'block' }}
      />
    </div>
  )
}
