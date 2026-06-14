'use client'

const quotes = [
  {
    text: 'The system makes it so easy for professionals to share information and work holistically. Writing reports is quicker and more organised, and features like tick boxes, dictation and grammar checks really support the workflow.',
    role: 'Paediatrician',
    accent: '#741F7C',
  },
  {
    text: "It's secure, intuitive, and incredibly easy to use. Finding the right form or specific details, such as family history, takes seconds; everything is exactly where you expect it to be.",
    role: 'Administrator',
    accent: '#119DA4',
  },
  {
    text: 'Navigation is extremely simple; you can move through each section without any confusion.',
    role: 'Highly Specialist Speech and Language Therapist',
    accent: '#1BA672',
  },
  {
    text: 'Speech-to-text microphone made it easier and quicker to fill. Yes/No section was very easy to use. Final report was very detailed, and the short version was very helpful.',
    role: 'Parent of a child',
    accent: '#741F7C',
  },
  {
    text: 'The Pre-assessment form was minimalistic and very easy to follow. The purple and white colour combination was calming and friendly. The microphone was easy to use and very helpful. The report had everything needed.',
    role: 'Parent of a child',
    accent: '#119DA4',
  },
]

function QuoteMark({ color }: { color: string }) {
  return (
    <svg width="28" height="22" viewBox="0 0 40 32" fill="none" aria-hidden="true">
      <path
        d="M0 20C0 9 6 3 18 0l2 4C12 6 9 10 9 14h8v18H0V20zm22 0C22 9 28 3 40 0l2 4C34 6 31 10 31 14h8v18H22V20z"
        fill={color}
        fillOpacity=".3"
      />
    </svg>
  )
}

export default function Testimonial() {
  return (
    <>
      {/* Featured quote */}
      <section className="py-14 border-b border-line">
        <div className="wrap">
          <div className="reveal max-w-2xl mx-auto bg-plumInk rounded-brand p-10 text-center">
            <div className="flex justify-center mb-5">
              <QuoteMark color="#E7DEEC" />
            </div>
            <blockquote className="font-display text-white text-[18px] leading-relaxed mb-6 italic">
              &ldquo;{quotes[0].text}&rdquo;
            </blockquote>
            <cite className="not-italic font-mono text-[12px] tracking-wider uppercase" style={{ color: '#C9B6D1' }}>
              &mdash; {quotes[0].role}
            </cite>
          </div>
        </div>
      </section>

      {/* Quote grid */}
      <section className="py-16 bg-mist border-b border-line">
        <div className="wrap">
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">What users say</p>
            <h2 className="font-display font-bold tracking-tightest text-plumInk" style={{ fontSize: 'clamp(24px,3.5vw,36px)' }}>
              Clinicians, families &amp; administrators
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {quotes.slice(1).map(({ text, role, accent }, i) => (
              <div key={i} className="reveal bg-white rounded-brand border border-line p-7 flex flex-col gap-4">
                <QuoteMark color={accent} />
                <blockquote className="font-body text-plumInk text-[15px] leading-relaxed italic flex-1">
                  &ldquo;{text}&rdquo;
                </blockquote>
                <cite className="not-italic font-mono text-[11px] tracking-wider uppercase" style={{ color: accent }}>
                  &mdash; {role}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder bio */}
      <section className="py-16 border-b border-line">
        <div className="wrap">
          <div className="reveal max-w-3xl mx-auto bg-white rounded-brand border border-line overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="md:col-span-1 bg-mist flex items-center justify-center p-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://static.wixstatic.com/media/a6f563_a4e0229e85cb4a6f980f5cc9d3846457~mv2.jpg/v1/fill/w_320,h_360,al_c,q_85,enc_avif,quality_auto/Deepshikha%20Thakur_edited.jpg"
                  alt="Deepshikha Thakur, Founder of Neuraplex"
                  width={160}
                  height={180}
                  className="rounded-[14px] object-cover shadow-sm"
                  style={{ width: '160px', height: '180px' }}
                />
              </div>
              <div className="md:col-span-2 p-8 flex flex-col justify-center">
                <p className="eyebrow mb-3">Founder</p>
                <h3 className="font-display font-bold text-plumInk text-[22px] mb-1">Deepshikha Thakur</h3>
                <p className="font-mono text-[11px] text-teal tracking-wider mb-5 uppercase">
                  Neurodevelopmental Paediatrician &middot; NHS Clinical Entrepreneur
                </p>
                <p className="text-slate text-[15px] leading-relaxed">
                  I&apos;m a Neurodevelopmental Paediatrician and the founder of Neuraplex &mdash; a clinician-led
                  digital platform designed specifically for Autism and ADHD assessments. Our secure and
                  intuitive interface streamlines the entire process, using smart pre-assessment information
                  and real-time data tracking to enhance efficiency. With proven results that double clinician
                  capacity and halve assessment duration, Neuraplex is committed to improving access to care
                  while reducing health inequalities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
