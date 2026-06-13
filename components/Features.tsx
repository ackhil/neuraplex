import { Button } from '@/components/ui/Button'

const featureList = [
  'Structured templates aligned with national guidance',
  'Seamless data capture & reporting',
  'Integrated multidisciplinary teamworking',
  'Secure information sharing across teams',
]

/** Enquiry list mockup — matches the second browser frame in neuraplex_home.html */
function EnquiryMock() {
  const rows = [
    { name: 'Precious Smith', age: '8', town: 'Kent',    date: '15/10', status: 'New',      statusColor: 'bg-aubergine/10 text-aubergine' },
    { name: 'Aiden Clarke',   age: '11', town: 'Bristol', date: '14/10', status: 'Accepted', statusColor: 'bg-signal/10 text-signal' },
    { name: 'Maya Okafor',    age: '9', town: 'Leeds',   date: '14/10', status: 'Accepted', statusColor: 'bg-signal/10 text-signal' },
  ]

  return (
    <div className="rounded-[18px] overflow-hidden shadow-xl border border-line bg-white">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-[#F0EBF4] border-b border-line">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className="flex-1 ml-3 bg-white rounded-md px-3 py-1 font-mono text-[11px] text-slate">
          app.neuraplex.co.uk/enquiry
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="font-display font-semibold text-plumInk text-[14px]">Enquiry list</p>
          <span className="text-[12px] bg-aubergine text-white rounded-lg px-3 py-1.5 font-medium cursor-default">
            + Add new
          </span>
        </div>

        <table className="w-full text-[12px]">
          <thead>
            <tr className="text-slate border-b border-line">
              {['Name', 'Age', 'Town', 'Enquiry on', 'Status'].map((h) => (
                <th key={h} className="text-left py-2 font-medium pr-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(({ name, age, town, date, status, statusColor }) => (
              <tr key={name} className="border-b border-line last:border-0">
                <td className="py-2.5 pr-3 font-medium text-plumInk">{name}</td>
                <td className="py-2.5 pr-3 text-slate">{age}</td>
                <td className="py-2.5 pr-3 text-slate">{town}</td>
                <td className="py-2.5 pr-3 text-slate">{date}</td>
                <td className="py-2.5">
                  <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${statusColor}`}>
                    {status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section className="section-divider py-16" style={{ paddingTop: '20px' }}>
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <h2
              className="font-display font-bold tracking-tightest mb-5"
              style={{ fontSize: 'clamp(24px, 3.3vw, 38px)' }}
            >
              A smarter way to manage neurodevelopmental assessments
            </h2>
            <p className="text-slate text-[16px] leading-relaxed mb-7">
              Designed for clinicians, administrators and the families they serve — Neuraplex
              reduces delays and simplifies the admin that slows every service down.
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {featureList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.8 7L9 1" stroke="#119DA4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-[15px] text-plumInk">{item}</span>
                </li>
              ))}
            </ul>

            <Button href="/demo" variant="teal">Watch a 2-min tour</Button>
          </div>

          {/* Enquiry mock */}
          <div className="reveal">
            <EnquiryMock />
          </div>
        </div>
      </div>
    </section>
  )
}
