const cards = [
  {
    type:    'Autism assessment',
    stat:    '97%',
    sub:     'completed within 28 days',
    rows: [
      { label: 'Children assessed',     value: '58' },
      { label: 'Clinicians delivering', value: '3' },
      { label: 'Total clinician time',  value: '4–6 hrs' },
    ],
  },
  {
    type:    'ADHD assessment',
    stat:    '93%',
    sub:     'completed within 17 days',
    rows: [
      { label: 'Children assessed',     value: '27' },
      { label: 'Clinicians delivering', value: '2' },
      { label: 'Total clinician time',  value: '2 hrs' },
    ],
  },
]

export default function Evidence() {
  return (
    <section id="evidence" className="section-divider py-16 text-center">
      <div className="wrap">
        <p className="eyebrow mb-3">Evidence from the real world</p>
        <h2
          className="font-display font-bold tracking-tightest mb-3"
          style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
        >
          6 months in an independent practice
        </h2>
        <p className="text-slate max-w-[56ch] mx-auto mb-12 text-[16px]">
          May–November 2025. Reliable, predictable pathways — measured, not promised.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {cards.map(({ type, stat, sub, rows }) => (
            <div
              key={type}
              className="reveal bg-mist border border-line rounded-brand p-7 text-left"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-lg bg-aubergine/10 flex items-center justify-center text-base">
                  {type.startsWith('Autism') ? '🧠' : '⚡'}
                </span>
                <h3 className="font-display font-semibold text-plumInk text-[16px]">{type}</h3>
              </div>

              <p
                className="font-display font-extrabold text-aubergine leading-none mb-1"
                style={{ fontSize: 'clamp(42px, 6vw, 56px)' }}
              >
                {stat}
              </p>
              <p className="text-slate text-[13px] mb-5">{sub}</p>

              <div className="flex flex-col gap-2">
                {rows.map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center border-t border-line pt-2 first:border-0 first:pt-0">
                    <span className="text-slate text-[13px]">{label}</span>
                    <span className="font-display font-bold text-plumInk text-[15px]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
