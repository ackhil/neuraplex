import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import Pathway from '@/components/Pathway'

export const metadata: Metadata = {
  title: 'Platform -- Neuraplex',
  description:
    'End-to-end neurodevelopmental assessment platform. NICE-aligned templates, AI documentation, one-click reporting, and multidisciplinary team tools.',
}

const modules = [
  {
    num: '01',
    title: 'Smart Enquiry Intake',
    desc: 'Parents, schools and GPs submit referrals through secure, mobile-friendly forms. Neuraplex captures the right information from the start -- reducing back-and-forth and ensuring no referral is lost.',
    details: ['Customisable referral forms', 'Automatic acknowledgement emails', 'GDPR-compliant data capture', 'Real-time notification to the clinical team'],
    color: 'bg-aubergine/[0.06]',
    accent: 'text-aubergine',
    border: 'border-aubergine/20',
  },
  {
    num: '02',
    title: 'Clinician Triage Dashboard',
    desc: 'Every enquiry lands in one place. Triage cases by urgency, assign to the right clinician, flag missing information, and track status -- all from a single view.',
    details: ['Priority flagging and filtering', 'Team member assignment', 'Missing information tracker', 'Caseload overview at a glance'],
    color: 'bg-teal/[0.06]',
    accent: 'text-teal',
    border: 'border-teal/20',
  },
  {
    num: '03',
    title: 'Appointment Management',
    desc: 'Opt-in booking links sent directly to families reduce "not brought in" rates and keep the pathway moving. Reminders are automatic.',
    details: ['Opt-in family booking links', 'Automated appointment reminders', 'Calendar integration', 'Rescheduling handled in-platform'],
    color: 'bg-signal/[0.06]',
    accent: 'text-signal',
    border: 'border-signal/20',
  },
  {
    num: '04',
    title: 'NICE-Aligned Assessment',
    desc: 'Structured assessment templates built to NICE guideline standards for autism (NG142) and ADHD (NG87). AI grammar assist and voice-to-text keep the clinician focused on the child, not the keyboard.',
    details: ['NG142 (autism) and NG87 (ADHD) templates', 'AI grammar and phrasing assist', 'Voice-to-text documentation', 'Scoring tools built in'],
    color: 'bg-aubergine/[0.06]',
    accent: 'text-aubergine',
    border: 'border-aubergine/20',
  },
  {
    num: '05',
    title: 'One-Click Report Generation',
    desc: 'Assessment data flows directly into a formatted clinical report. Review, edit, and finalise in minutes -- not hours. Families are signposted to next steps automatically.',
    details: ['Pre-populated from assessment data', 'Editable before finalising', 'Automatic family copy', 'Digital signature support'],
    color: 'bg-teal/[0.06]',
    accent: 'text-teal',
    border: 'border-teal/20',
  },
  {
    num: '06',
    title: 'Multidisciplinary Team Tools',
    desc: 'Share case information securely across your MDT. Task assignment, internal notes, and case handovers -- all audited, all in one place.',
    details: ['Secure internal messaging', 'Task assignment and tracking', 'Full audit trail', 'Role-based access control'],
    color: 'bg-signal/[0.06]',
    accent: 'text-signal',
    border: 'border-signal/20',
  },
]

const compliance = [
  { label: 'NICE NG142', sub: 'Autism assessment' },
  { label: 'NICE NG87', sub: 'ADHD assessment' },
  { label: 'UK GDPR', sub: 'Data protection' },
  { label: 'NHS DSP Toolkit', sub: 'Security standards' },
  { label: 'ISO 27001', sub: 'Info security' },
  { label: 'WCAG 2.1 AA', sub: 'Accessibility' },
]

const beforeAfterRows = [
  { label: 'Referral acknowledgement', before: 'Days or weeks', after: 'Instant, automated' },
  { label: 'Information gathering', before: 'Phone calls, paper forms', after: 'Digital forms, mobile-friendly' },
  { label: 'Triage & assignment', before: 'Email chains, spreadsheets', after: 'Unified dashboard, real-time' },
  { label: 'Assessment documentation', before: '3-4 hours of typing', after: '45 min with AI assist' },
  { label: 'Report writing', before: '2-3 hours per report', after: 'One-click from assessment data' },
  { label: 'Family communication', before: 'Manual letters/calls', after: 'Automated, signposted' },
  { label: 'MDT coordination', before: 'Separate emails and meetings', after: 'In-platform tasks and notes' },
  { label: 'Audit trail', before: 'Scattered, incomplete', after: 'Automatic, comprehensive' },
]

function PathwaySVG() {
  const steps = [
    { x: 90,  num: '01', title: 'Pre-assessment', sub: 'Families & referrers' },
    { x: 270, num: '02', title: 'Triage',          sub: 'Clinical dashboard' },
    { x: 450, num: '03', title: 'Appointment',     sub: 'Opt-in booking' },
    { x: 630, num: '04', title: 'Assessment',      sub: 'NICE templates + AI' },
    { x: 810, num: '05', title: 'Report',          sub: 'One-click output' },
  ]
  return (
    <div className="w-full overflow-x-auto py-4">
      <svg viewBox="0 0 900 150" className="w-full min-w-[580px]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pathGrad" x1="90" y1="0" x2="810" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#741F7C"/>
            <stop offset="100%" stopColor="#119DA4"/>
          </linearGradient>
        </defs>
        <line x1="90" y1="55" x2="810" y2="55" stroke="#E7DEEC" strokeWidth="2"/>
        <line x1="90" y1="55" x2="810" y2="55" stroke="url(#pathGrad)" strokeWidth="2.5" opacity="0.6"/>
        {[180, 360, 540, 720].map(x => (
          <polygon key={x} points={`${x},51 ${x+8},55 ${x},59`} fill="#119DA4" opacity="0.7"/>
        ))}
        {steps.map(({ x, num, title, sub }) => (
          <g key={num}>
            <circle cx={x} cy="55" r="26" fill="#741F7C" opacity="0.08"/>
            <circle cx={x} cy="55" r="20" fill="white" stroke="#741F7C" strokeWidth="2"/>
            <text x={x} y="60" textAnchor="middle" fontSize="12" fill="#741F7C" fontWeight="700" fontFamily="monospace">{num}</text>
            <text x={x} y="100" textAnchor="middle" fontSize="12.5" fill="#2A1430" fontWeight="600" fontFamily="sans-serif">{title}</text>
            <text x={x} y="118" textAnchor="middle" fontSize="10.5" fill="#6B6475" fontFamily="sans-serif">{sub}</text>
          </g>
        ))}
      </svg>
    </div>
  )
}

function StatBar({ label, value, pct, color }: { label: string; value: string; pct: number; color: string }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-[13px] text-plumInk font-medium">{label}</span>
        <span className="text-[13px] font-mono text-aubergine font-semibold">{value}</span>
      </div>
      <div className="h-2.5 bg-line rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }}/>
      </div>
    </div>
  )
}

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(180deg,#F6F2F8 0%,#fff 100%)', borderBottom: '1px solid #E7DEEC' }} className="py-20">
        <div className="wrap text-center">
          <p className="eyebrow mb-4">The Platform</p>
          <h1 className="font-display font-bold tracking-tightest text-plumInk mb-5" style={{ fontSize: 'clamp(32px,5vw,56px)' }}>
            Everything the pathway needs.<br/>
            <em className="not-italic text-aubergine">Nothing it doesn&apos;t.</em>
          </h1>
          <p className="text-slate max-w-[58ch] mx-auto text-[17px] leading-relaxed mb-8">
            Neuraplex is built around the real clinical workflow -- from first referral to final report -- with NICE-aligned tools,
            AI documentation assist, and secure multidisciplinary team coordination in one place.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/demo" variant="primary" size="lg">Book a demo</Button>
            <Button href="/evidence" variant="ghost" size="lg">See the evidence</Button>
          </div>
        </div>
      </section>

      {/* Pathway SVG */}
      <section className="py-14 border-b border-line">
        <div className="wrap">
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">How it works</p>
            <h2 className="font-display font-bold tracking-tightest text-plumInk mb-3" style={{ fontSize: 'clamp(24px,3.5vw,38px)' }}>
              One continuous pathway -- referral to report
            </h2>
            <p className="text-slate max-w-[52ch] mx-auto text-[16px]">
              Every step connected. No handover gaps. No duplicated effort.
            </p>
          </div>
          <PathwaySVG />
        </div>
      </section>

      {/* Module cards */}
      <section className="py-16 border-b border-line">
        <div className="wrap">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Platform modules</p>
            <h2 className="font-display font-bold tracking-tightest text-plumInk" style={{ fontSize: 'clamp(24px,3.5vw,38px)' }}>
              Six modules. One joined-up system.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map(({ num, title, desc, details, color, accent, border }) => (
              <div key={num} className={`rounded-brand border ${border} ${color} p-6 flex flex-col`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`font-mono text-[11px] font-semibold tracking-wider ${accent}`}>{num}</span>
                  <h3 className="font-display font-bold text-plumInk text-[16px]">{title}</h3>
                </div>
                <p className="text-slate text-[14px] leading-relaxed mb-5 flex-1">{desc}</p>
                <ul className="flex flex-col gap-2">
                  {details.map(d => (
                    <li key={d} className="flex items-start gap-2 text-[13px] text-plumInk">
                      <span className="text-signal flex-shrink-0 mt-0.5">✓</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After table */}
      <section className="py-16 border-b border-line bg-mist">
        <div className="wrap">
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">The difference</p>
            <h2 className="font-display font-bold tracking-tightest text-plumInk mb-3" style={{ fontSize: 'clamp(24px,3.5vw,38px)' }}>
              Before Neuraplex vs. after
            </h2>
            <p className="text-slate max-w-[50ch] mx-auto text-[16px]">
              The same clinical pathway -- one fragmented across email and paper, one joined up.
            </p>
          </div>
          <div className="overflow-x-auto rounded-brand border border-line">
            <table className="w-full text-[14px]">
              <thead>
                <tr>
                  <th className="text-left px-5 py-3 bg-mist font-display font-semibold text-plumInk text-[13px] border-b border-line">Process step</th>
                  <th className="text-left px-5 py-3 bg-red-50 font-display font-semibold text-red-700 text-[13px] border-b border-line">Without Neuraplex</th>
                  <th className="text-left px-5 py-3 bg-signal/5 font-display font-semibold text-signal text-[13px] border-b border-line">With Neuraplex</th>
                </tr>
              </thead>
              <tbody>
                {beforeAfterRows.map(({ label, before, after }, i) => (
                  <tr key={label} className={i % 2 === 0 ? 'bg-white' : 'bg-mist/50'}>
                    <td className="px-5 py-3 text-plumInk font-medium border-b border-line">{label}</td>
                    <td className="px-5 py-3 text-red-600 border-b border-line">✗ {before}</td>
                    <td className="px-5 py-3 text-signal font-medium border-b border-line">✓ {after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="py-16 border-b border-line">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-3">Measured impact</p>
              <h2 className="font-display font-bold tracking-tightest text-plumInk mb-4" style={{ fontSize: 'clamp(24px,3.5vw,38px)' }}>
                Numbers from a real clinical service
              </h2>
              <p className="text-slate text-[16px] leading-relaxed mb-6">
                Six months of live data from an independent neurodevelopmental practice.
                Not modelled projections -- actual outcomes measured from deployment.
              </p>
              <Link href="/evidence" className="inline-flex items-center gap-2 text-aubergine font-semibold text-[15px] hover:underline">
                Read the full evidence →
              </Link>
            </div>
            <div className="bg-mist rounded-brand border border-line p-8">
              <StatBar label="Autism cases completed within 28 days" value="97%" pct={97} color="bg-aubergine"/>
              <StatBar label="ADHD cases completed within 17 days" value="93%" pct={93} color="bg-teal"/>
              <StatBar label="Reduction in clinician admin time" value="75%" pct={75} color="bg-signal"/>
              <StatBar label="Reports auto-generated from assessment" value="100%" pct={100} color="bg-aubergine"/>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { val: '£453', lab: 'saved per assessment' },
                  { val: '2×',   lab: 'clinician throughput' },
                  { val: '58',   lab: 'autism cases (6 months)' },
                  { val: '27',   lab: 'ADHD cases (6 months)' },
                ].map(({ val, lab }) => (
                  <div key={lab} className="bg-white rounded-[12px] border border-line p-4 text-center">
                    <p className="font-display font-extrabold text-aubergine text-2xl leading-none mb-1">{val}</p>
                    <p className="text-slate text-[12px]">{lab}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 border-b border-line bg-plumInk">
        <div className="wrap">
          <div className="text-center mb-10">
            <p className="eyebrow mb-3" style={{ color: '#C9B6D1' }}>Trust &amp; compliance</p>
            <h2 className="font-display font-bold tracking-tightest text-white mb-3" style={{ fontSize: 'clamp(24px,3.5vw,38px)' }}>
              Built to clinical and regulatory standards
            </h2>
            <p className="max-w-[52ch] mx-auto text-[16px] leading-relaxed" style={{ color: '#C9B6D1' }}>
              Designed from the ground up for NHS, NICE, and UK data protection requirements.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {compliance.map(({ label, sub }) => (
              <div key={label} className="rounded-[14px] border border-white/10 bg-white/5 p-5 text-center">
                <p className="font-display font-bold text-white text-[15px] mb-1">{label}</p>
                <p className="text-[12px]" style={{ color: '#C9B6D1' }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pathway />

      {/* CTA */}
      <section className="py-16" style={{ background: 'linear-gradient(180deg,#F6F2F8 0%,#fff 100%)' }}>
        <div className="wrap text-center">
          <p className="eyebrow mb-3">Ready to see it?</p>
          <h2 className="font-display font-bold tracking-tightest text-plumInk mb-4" style={{ fontSize: 'clamp(26px,3.5vw,40px)' }}>
            See Neuraplex on your own pathway
          </h2>
          <p className="text-slate max-w-[46ch] mx-auto text-[16px] mb-8">
            30 minutes with the team. Live demo on a service like yours. No setup, no pressure.
          </p>
          <Button href="/demo" variant="primary" size="lg">Book a demo</Button>
        </div>
      </section>
    </>
  )
}
