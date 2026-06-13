import type { Metadata } from 'next'
import DemoForm from '@/components/DemoForm'
import HubSpotMeetings from '@/components/HubSpotMeetings'

export const metadata: Metadata = {
  title: 'Book a Demo — Neuraplex',
  description: 'Book a 30-minute walkthrough of Neuraplex with the clinical team.',
}

const points = [
  'No pressure, no setup required',
  'Tailored to autism, ADHD or both',
  'Questions answered by clinicians',
  'Live walkthrough on a service like yours',
]

export default function DemoPage() {
  return (
    <div className="py-16" style={{ background: 'linear-gradient(180deg, #F6F2F8 0%, #FFFFFF 60%)' }}>
      <div className="wrap">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">Book a demo</p>
          <h1
            className="font-display font-bold tracking-tightest text-plumInk mb-4"
            style={{ fontSize: 'clamp(30px, 4vw, 48px)' }}
          >
            See Neuraplex on your own pathway
          </h1>
          <p className="text-slate max-w-[52ch] mx-auto text-[17px] leading-relaxed">
            A 30-minute walkthrough with the team. We&apos;ll show triage, NICE-aligned assessment,
            and one-click reporting on a service like yours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: benefits + form */}
          <div>
            <ul className="flex flex-col gap-3 mb-8">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-signal/15 flex items-center justify-center flex-shrink-0">
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path d="M1 3.5L3.5 6L8 1" stroke="#1BA672" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-[15px] text-plumInk">{p}</span>
                </li>
              ))}
            </ul>
            <DemoForm />
          </div>

          {/* Right: HubSpot Meetings embed */}
          <div>
            <HubSpotMeetings />
          </div>
        </div>
      </div>
    </div>
  )
}
