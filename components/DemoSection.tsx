import DemoForm from '@/components/DemoForm'

const points = [
  'No pressure, no setup required',
  'Tailored to autism, ADHD or both',
  'Questions answered by clinicians',
]

export default function DemoSection() {
  return (
    <section id="demo" className="section-divider py-16 bg-mist">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Copy */}
          <div className="pt-1">
            <p className="eyebrow mb-3">Book a demo</p>
            <h2
              className="font-display font-bold tracking-tightest mb-4"
              style={{ fontSize: 'clamp(26px, 3.3vw, 36px)' }}
            >
              See Neuraplex on your own pathway
            </h2>
            <p className="text-slate text-[16px] leading-relaxed mb-7 max-w-[50ch]">
              A 30-minute walkthrough with the team. We&apos;ll show triage, NICE-aligned
              assessment, and one-click reporting on a service like yours.
            </p>

            <ul className="flex flex-col gap-3">
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
          </div>

          {/* Form */}
          <div>
            <DemoForm />
          </div>
        </div>
      </div>
    </section>
  )
}
