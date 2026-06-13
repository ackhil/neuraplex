import { Button } from '@/components/ui/Button'
import DashboardMock from '@/components/DashboardMock'

const trustBadges = [
  'NICE-aligned templates',
  'Secure & multidisciplinary',
  'Clinician-led',
]

export default function Hero() {
  return (
    <header
      className="section-divider"
      style={{
        background: 'linear-gradient(180deg, #F6F2F8 0%, #FFFFFF 100%)',
        paddingTop: 'clamp(48px, 8vw, 96px)',
        paddingBottom: 'clamp(48px, 8vw, 96px)',
      }}
    >
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <p className="eyebrow mb-4">Autism &amp; ADHD assessment software</p>

            <h1
              className="font-display font-bold tracking-tightest leading-tight mb-5"
              style={{ fontSize: 'clamp(34px, 5vw, 58px)' }}
            >
              Digitising autism &amp; ADHD pathways with{' '}
              <em className="not-italic text-aubergine">clinical precision.</em>
            </h1>

            <p
              className="text-slate leading-relaxed mb-8 max-w-[54ch]"
              style={{ fontSize: 'clamp(17px, 2vw, 21px)' }}
            >
              Neuraplex is a clinician-led, end-to-end platform that supports assessment and
              management across the care pathway — cutting waiting times, standardising clinical
              process, and improving outcomes for neurodiverse children and their families.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button href="/demo" variant="primary" size="lg">Book a demo</Button>
              <Button href="#pathway" variant="ghost" size="lg">See the pathway</Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {trustBadges.map((badge) => (
                <span key={badge} className="flex items-center gap-2 text-slate text-[14px]">
                  <span className="w-4 h-4 rounded-full bg-signal/15 flex items-center justify-center flex-shrink-0">
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path d="M1 3.5L3.5 6L8 1" stroke="#1BA672" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Dashboard mock */}
          <div className="reveal">
            <DashboardMock />
          </div>
        </div>
      </div>
    </header>
  )
}
