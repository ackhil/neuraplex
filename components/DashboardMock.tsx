/**
 * Neuraplex-branded product mockup — matches the hero frame in neuraplex_home.html.
 * Phase 5 replaces this with real product screenshots.
 */
export default function DashboardMock() {
  return (
    <div className="rounded-[18px] overflow-hidden shadow-2xl border border-line bg-white">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-[#F0EBF4] border-b border-line">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className="flex-1 ml-3 bg-white rounded-md px-3 py-1 font-mono text-[11px] text-slate">
          app.neuraplex.co.uk/dashboard
        </span>
      </div>

      {/* App shell */}
      <div className="flex min-h-[340px]">
        {/* Sidebar */}
        <div className="w-44 bg-plumInk text-white flex-shrink-0 p-4 flex flex-col gap-1">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-6 h-6 rounded bg-aubergine flex items-center justify-center font-display font-bold text-xs">N</span>
            <span className="font-display font-bold text-sm">Neuraplex</span>
          </div>
          {[
            { label: 'Dashboard', active: true },
            { label: 'Enquiry', badge: '3' },
            { label: 'Patients' },
            { label: 'Calendar' },
            { label: 'Questionnaire' },
            { label: 'AI Assistant', badge: 'new' },
            { label: 'Tasks', badge: '2' },
          ].map(({ label, active, badge }) => (
            <div
              key={label}
              className={`flex items-center justify-between rounded-md px-3 py-1.5 text-[12px] font-medium cursor-default ${
                active ? 'bg-aubergine text-white' : 'text-[#C9B6D1] hover:text-white hover:bg-white/10'
              }`}
            >
              <span>{label}</span>
              {badge && (
                <span className="text-[10px] bg-teal text-white rounded-full px-1.5 py-0.5 font-mono leading-none">
                  {badge}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-5 bg-mist">
          <p className="font-mono text-[11px] text-teal tracking-wider mb-4">Dashboard · Cases</p>

          {/* KPI cards */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { label: 'New enquiry', value: '3', color: 'text-aubergine' },
              { label: 'Appointments', value: '24', color: 'text-teal' },
              { label: 'Active cases', value: '80', color: 'text-signal' },
            ].map(({ label, value, color }) => (
              <div key={label} className="bg-white rounded-[14px] p-4 border border-line">
                <p className="text-[11px] text-slate mb-1">{label}</p>
                <p className={`font-display font-bold text-2xl ${color}`}>{value}</p>
              </div>
            ))}
          </div>

          {/* Stats list */}
          <div className="bg-white rounded-[14px] border border-line p-4">
            {[
              { label: 'Completed cases', value: '480' },
              { label: 'Other follow up', value: '12' },
              { label: 'Reports generated', value: '94' },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-center py-2 border-b border-line last:border-0">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-signal" />
                  <span className="text-[12px] text-slate">{label}</span>
                </div>
                <span className="font-display font-bold text-plumInk text-sm">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
