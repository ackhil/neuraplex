const roles = [
  { icon: '🩺', title: 'Clinicians',      sub: 'Faster, clearer documentation' },
  { icon: '🗂️', title: 'Administrators',  sub: 'Less manual workload' },
  { icon: '👨‍👩‍👧', title: 'Families & carers', sub: 'Supported & signposted' },
  { icon: '🏫', title: 'Schools & GPs',   sub: 'Simple, secure referrals' },
]

export default function WhoFor() {
  return (
    <section id="about" className="section-divider py-16 text-center">
      <div className="wrap">
        <p className="eyebrow mb-3">Built for everyone on the pathway</p>
        <h2
          className="font-display font-bold tracking-tightest mb-12"
          style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
        >
          One platform, every role supported
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {roles.map(({ icon, title, sub }, i) => (
            <div
              key={title}
              className="reveal bg-mist border border-line rounded-brand p-6 flex flex-col items-center text-center"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="text-3xl mb-3">{icon}</span>
              <p className="font-display font-semibold text-plumInk text-[15px] mb-1">{title}</p>
              <p className="text-slate text-[13px]">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
