/**
 * Signature 5-step pathway — "referral to report".
 * The connecting thread SVG uses brand teal.
 */

const steps = [
  {
    num: '01',
    title: 'Pre-assessment',
    desc:  'Parents, schools & GPs complete secure, mobile-friendly forms — vital information gathered early.',
  },
  {
    num: '02',
    title: 'Triage',
    desc:  'Everything flows into the clinician dashboard to triage, assign team members and request info.',
  },
  {
    num: '03',
    title: 'Appointment',
    desc:  'Opt-in booking minimises "not brought in" and keeps the pathway predictable.',
  },
  {
    num: '04',
    title: 'Assessment',
    desc:  'NICE-aligned templates with AI documentation — grammar help and voice-to-text.',
  },
  {
    num: '05',
    title: 'Report',
    desc:  'One-click report generation with easy review. Families signposted throughout.',
  },
]

export default function Pathway() {
  return (
    <section id="pathway" className="section-divider py-16">
      <div className="wrap text-center">
        <p className="eyebrow mb-3">How it works</p>
        <h2
          className="font-display font-bold tracking-tightest mb-4"
          style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
        >
          Five connected steps — referral to report
        </h2>
        <p className="text-slate max-w-[58ch] mx-auto mb-12 text-[16px]">
          Neuraplex carries every case along one continuous pathway. No isolated steps, no dropped handovers.
        </p>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1.5px] z-0"
            style={{ background: 'linear-gradient(90deg, #119DA4, rgba(17,157,164,0.15))' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map(({ num, title, desc }, i) => (
              <div
                key={num}
                className="reveal flex flex-col items-center md:items-start text-center md:text-left"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Node */}
                <div className="w-12 h-12 rounded-full bg-teal/10 border-2 border-teal flex items-center justify-center mb-3 flex-shrink-0">
                  <span className="font-mono text-[12px] font-medium text-teal">{num}</span>
                </div>

                <h3 className="font-display font-semibold text-[16px] text-plumInk mb-2">{title}</h3>
                <p className="text-slate text-[13px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
