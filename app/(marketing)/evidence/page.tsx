import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Evidence -- Neuraplex',
  description:
    '6 months of real-world outcome data from an independent neurodevelopmental practice. 97% autism completions within 28 days.',
}

const topStats = [
  { value: '97%',  label: 'Autism assessments completed within 28 days', color: 'text-aubergine' },
  { value: '93%',  label: 'ADHD assessments completed within 17 days',   color: 'text-teal' },
  { value: '75%',  label: 'Reduction in clinician admin time',            color: 'text-signal' },
  { value: '£453', label: 'Saved per assessment vs. previous process',    color: 'text-aubergine' },
]

const autismRows = [
  { label: 'Children assessed',            value: '58' },
  { label: 'Clinicians delivering',         value: '3' },
  { label: 'Total clinician time per case', value: '4-6 hrs' },
  { label: 'Admin time before Neuraplex',   value: '~3 hrs/case' },
  { label: 'Admin time with Neuraplex',     value: '<45 min/case' },
  { label: 'Reports auto-generated',        value: '100%' },
  { label: 'Families signposted digitally', value: '100%' },
]

const adhdRows = [
  { label: 'Children assessed',            value: '27' },
  { label: 'Clinicians delivering',         value: '1' },
  { label: 'Total clinician time per case', value: '2 hrs' },
  { label: 'Admin time before Neuraplex',   value: '~2 hrs/case' },
  { label: 'Admin time with Neuraplex',     value: '<30 min/case' },
  { label: 'Reports auto-generated',        value: '100%' },
  { label: 'Families signposted digitally', value: '100%' },
]

const timeline = [
  { month: 'May 2025',     event: 'Neuraplex deployed at independent practice' },
  { month: 'Jun 2025',     event: 'First cohort of cases triaged through platform' },
  { month: 'Jul 2025',     event: 'Assessment templates live -- clinician training complete' },
  { month: 'Aug 2025',     event: 'One-click reporting enabled -- admin time drops 75%' },
  { month: 'Sep-Oct 2025', event: 'Full MDT workflow active; 60+ cases processed' },
  { month: 'Nov 2025',     event: 'Six-month review: 85 total assessments, targets exceeded' },
]

function Donut({ pct, color, label }: { pct: number; color: string; label: string }) {
  const r = 46
  const circ = 2 * Math.PI * r
  const dash = (pct / 100) * circ
  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={r} fill="none" stroke="#E7DEEC" strokeWidth="10"/>
        <circle cx="60" cy="60" r={r} fill="none" stroke={color} strokeWidth="10"
          strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" transform="rotate(-90 60 60)"/>
        <text x="60" y="65" textAnchor="middle" fontSize="18" fontWeight="800"
          fill="#2A1430" fontFamily="sans-serif">{pct}%</text>
      </svg>
      <p className="text-[12px] text-slate text-center max-w-[11ch] leading-snug">{label}</p>
    </div>
  )
}

function HBar({ label, before, after, beforePct, afterPct }:
  { label: string; before: string; after: string; beforePct: number; afterPct: number }) {
  return (
    <div className="mb-5">
      <p className="font-medium text-plumInk text-[14px] mb-2">{label}</p>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-3">
          <span className="w-28 text-[12px] text-slate flex-shrink-0">Before</span>
          <div className="flex-1 h-7 bg-red-100 rounded-lg overflow-hidden relative">
            <div className="h-full bg-red-300/80 rounded-lg" style={{ width: `${beforePct}%` }}/>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-red-700 font-medium">{before}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-28 text-[12px] text-slate flex-shrink-0">With Neuraplex</span>
          <div className="flex-1 h-7 bg-signal/10 rounded-lg overflow-hidden relative">
            <div className="h-full bg-signal/40 rounded-lg" style={{ width: `${afterPct}%` }}/>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-signal font-medium">{after}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function StudyCard({ type, guideline, period, headline, headlineSub, rows }:
  { type: string; guideline: string; period: string; headline: string; headlineSub: string; rows: { label: string; value: string }[] }) {
  return (
    <div className="bg-white rounded-brand border border-line shadow-sm overflow-hidden">
      <div className="bg-mist border-b border-line px-6 py-4 flex flex-wrap items-center gap-3">
        <span className="font-mono text-[11px] text-teal bg-teal/10 rounded px-2 py-1">{guideline}</span>
        <h3 className="font-display font-bold text-plumInk text-[17px]">{type}</h3>
        <span className="ml-auto text-[12px] text-slate">{period}</span>
      </div>
      <div className="p-6">
        <div className="text-center mb-6 pb-6 border-b border-line">
          <p className="font-display font-extrabold text-aubergine leading-none" style={{ fontSize: 'clamp(48px,7vw,64px)' }}>
            {headline}
          </p>
          <p className="text-slate text-[14px] mt-1">{headlineSub}</p>
        </div>
        <div className="flex flex-col gap-0">
          {rows.map(({ label, value }) => (
            <div key={label} className="flex justify-between items-center py-2.5 border-b border-line/60 last:border-0">
              <span className="text-slate text-[13px]">{label}</span>
              <span className="font-display font-bold text-plumInk text-[14px]">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function EvidencePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(180deg,#F6F2F8 0%,#fff 100%)', borderBottom: '1px solid #E7DEEC' }} className="py-20">
        <div className="wrap text-center">
          <p className="eyebrow mb-4">Evidence from the real world</p>
          <h1 className="font-display font-bold tracking-tightest text-plumInk mb-5" style={{ fontSize: 'clamp(32px,5vw,56px)' }}>
            Measured, not promised.
          </h1>
          <p className="text-slate max-w-[58ch] mx-auto text-[17px] leading-relaxed mb-6">
            Six months of live outcome data from an independent neurodevelopmental practice.
            Real caseloads. Real clinicians. Real children and families.
          </p>
          <p className="font-mono text-[12px] text-teal tracking-wider">
            MAY-NOVEMBER 2025 · INDEPENDENT PRACTICE · UK
          </p>
        </div>
      </section>

      {/* Headline stats */}
      <section className="py-14 border-b border-line">
        <div className="wrap">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {topStats.map(({ value, label, color }) => (
              <div key={label} className="bg-mist rounded-brand border border-line p-6 text-center">
                <p className={`font-display font-extrabold ${color} leading-none mb-2`} style={{ fontSize: 'clamp(28px,4vw,40px)' }}>
                  {value}
                </p>
                <p className="text-slate text-[13px] leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donut charts */}
      <section className="py-16 border-b border-line">
        <div className="wrap">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Completion rates</p>
            <h2 className="font-display font-bold tracking-tightest text-plumInk" style={{ fontSize: 'clamp(24px,3.5vw,38px)' }}>
              Pathways completed within NICE windows
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            <Donut pct={97}  color="#741F7C" label="Autism within 28 days"/>
            <Donut pct={93}  color="#119DA4" label="ADHD within 17 days"/>
            <Donut pct={75}  color="#1BA672" label="Admin time saved"/>
            <Donut pct={100} color="#741F7C" label="Reports auto-generated"/>
          </div>
        </div>
      </section>

      {/* Study cards */}
      <section className="py-16 border-b border-line bg-mist">
        <div className="wrap">
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">Study detail</p>
            <h2 className="font-display font-bold tracking-tightest text-plumInk" style={{ fontSize: 'clamp(24px,3.5vw,38px)' }}>
              Assessment-by-assessment breakdown
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StudyCard
              type="Autism Assessment" guideline="NICE NG142" period="May-Nov 2025"
              headline="97%" headlineSub="completed within 28 days" rows={autismRows}
            />
            <StudyCard
              type="ADHD Assessment" guideline="NICE NG87" period="May-Nov 2025"
              headline="93%" headlineSub="completed within 17 days" rows={adhdRows}
            />
          </div>
        </div>
      </section>

      {/* Time comparison */}
      <section className="py-16 border-b border-line">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow mb-3">Time saved</p>
              <h2 className="font-display font-bold tracking-tightest text-plumInk mb-4" style={{ fontSize: 'clamp(24px,3.5vw,38px)' }}>
                Where the hours went
              </h2>
              <p className="text-slate text-[16px] leading-relaxed mb-6">
                The biggest gains came from eliminating manual documentation and report writing --
                tasks eating 3-4 hours per case before Neuraplex.
              </p>
              <div className="bg-signal/5 border border-signal/20 rounded-brand p-5">
                <p className="font-display font-bold text-plumInk text-[15px] mb-1">Net result: 2× clinician capacity</p>
                <p className="text-slate text-[14px] leading-relaxed">
                  The same clinical team can now handle twice as many cases in the same working week --
                  without any reduction in assessment quality.
                </p>
              </div>
            </div>
            <div className="bg-mist rounded-brand border border-line p-6">
              <HBar label="Documentation per assessment" before="3-4 hours" after="~45 minutes" beforePct={100} afterPct={22}/>
              <HBar label="Report writing" before="2-3 hours" after="~15 minutes" beforePct={100} afterPct={10}/>
              <HBar label="Family communication" before="30-60 min" after="Automated" beforePct={70} afterPct={5}/>
              <HBar label="MDT coordination" before="1-2 hrs/week" after="~10 min/week" beforePct={80} afterPct={12}/>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 border-b border-line bg-mist">
        <div className="wrap">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Deployment timeline</p>
            <h2 className="font-display font-bold tracking-tightest text-plumInk" style={{ fontSize: 'clamp(24px,3.5vw,38px)' }}>
              Six months from go-live to results
            </h2>
          </div>
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-line"/>
            {timeline.map(({ month, event }, i) => (
              <div key={i} className="relative flex gap-5 mb-6 last:mb-0">
                <div className="w-6 h-6 rounded-full bg-aubergine flex-shrink-0 flex items-center justify-center z-10 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-white"/>
                </div>
                <div>
                  <p className="font-mono text-[11px] text-teal tracking-wider mb-1">{month}</p>
                  <p className="text-plumInk text-[14px] leading-relaxed">{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-14 border-b border-line">
        <div className="wrap">
          <div className="max-w-2xl mx-auto bg-plumInk rounded-brand p-10 text-center">
            <p className="font-display font-bold text-white text-[18px] leading-relaxed mb-4 italic">
              &ldquo;[Placeholder -- drop in a real clinician quote here. This is where social proof lands.]&rdquo;
            </p>
            <p className="font-mono text-[11px] tracking-wider" style={{ color: '#C9B6D1' }}>
              -- LEAD CLINICIAN · INDEPENDENT PRACTICE · UK
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-10 border-b border-line">
        <div className="wrap">
          <div className="max-w-3xl mx-auto bg-teal/5 border border-teal/20 rounded-brand p-6">
            <p className="font-display font-semibold text-plumInk text-[15px] mb-2">Methodology note</p>
            <p className="text-slate text-[14px] leading-relaxed">
              Data collected from a single independent neurodevelopmental assessment practice in the UK,
              May-November 2025. 85 total cases (58 autism, 27 ADHD). Completion times measured from
              referral receipt to report dispatch. Admin time measured via clinician self-report before
              and after Neuraplex deployment. Cost savings calculated against the practice&apos;s
              pre-Neuraplex cost-per-case baseline. Results reflect this specific practice and may vary.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: 'linear-gradient(180deg,#F6F2F8 0%,#fff 100%)' }}>
        <div className="wrap text-center">
          <p className="eyebrow mb-3">Replicate these results</p>
          <h2 className="font-display font-bold tracking-tightest text-plumInk mb-4" style={{ fontSize: 'clamp(26px,3.5vw,40px)' }}>
            See how Neuraplex fits your service
          </h2>
          <p className="text-slate max-w-[46ch] mx-auto text-[16px] mb-8">
            Every pathway is different. In 30 minutes we&apos;ll show you how this data translates to your caseload.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/demo" variant="primary" size="lg">Book a demo</Button>
            <Button href="/platform" variant="ghost" size="lg">Explore the platform</Button>
          </div>
        </div>
      </section>
    </>
  )
}
