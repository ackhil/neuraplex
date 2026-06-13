const stats = [
  { value: '75', unit: '%', label: 'reduction in admin time' },
  { value: '2×',  unit: '',  label: 'clinician capacity' },
  { value: '£453', unit: '', label: 'saved per assessment' },
  { value: '28',  unit: ' days', label: 'typical autism completion' },
]

export default function StatBand() {
  return (
    <section className="section-divider py-9">
      <div className="wrap">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
          {stats.map(({ value, unit, label }) => (
            <div key={label} className="border-t-2 border-aubergine pt-4">
              <p className="font-display font-extrabold text-aubergine leading-none mb-1"
                 style={{ fontSize: 'clamp(28px, 3vw, 36px)' }}>
                {value}<span className="text-lg">{unit}</span>
              </p>
              <p className="text-slate text-[13px]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
