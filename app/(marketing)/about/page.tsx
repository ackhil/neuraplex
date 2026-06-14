import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About -- Neuraplex',
  description:
    'Neuraplex is a clinician-led platform built to fix broken neurodevelopmental assessment pathways. Our mission: every neurodiverse child assessed on time, every time.',
}

const problemStats = [
  { value: '5 years',   label: 'Average wait for NHS autism diagnosis in some regions' },
  { value: '400,000+', label: 'Children on waiting lists for assessment in England' },
  { value: '70%',      label: 'Of delays caused by admin failure, not clinical capacity' },
  { value: '£3,000+',  label: 'Average cost per assessment across NHS and independent providers' },
]

const values = [
  { icon: '🩺', title: 'Clinician-first design',       desc: 'Every feature validated with practicing clinicians before it ships. We build what works in a clinic, not what sounds good in a boardroom.' },
  { icon: '🔗', title: 'Pathway thinking',             desc: "We don't digitise isolated steps -- we connect the whole pathway. Referral to report: one flow, no dropped handovers." },
  { icon: '👨‍👩‍👧', title: 'Families at the centre',    desc: 'Every design decision asks: does this help a child get assessed faster? Does it keep their family informed and supported?' },
  { icon: '📊', title: 'Evidence over assumption',     desc: 'Product decisions are driven by outcome data from real services -- not theory, not benchmarks, not surveys alone.' },
  { icon: '🔒', title: 'Security without compromise',  desc: 'Clinical data is among the most sensitive that exists. We apply NHS-standard data protection and UK GDPR compliance throughout.' },
  { icon: '🏥', title: 'Built for the NHS ecosystem', desc: 'We align to NICE guidelines, NHS terminology, and UK regulatory frameworks -- so Neuraplex integrates into how services actually operate.' },
]

const roles = [
  {
    num: '01', title: 'Clinical leads & consultants',
    desc: 'Oversight of the full pathway -- caseload visibility, team performance, and audit trail -- without the manual reporting overhead.',
    tasks: ['Dashboard overview of all active cases', 'Team workload management', 'Clinical governance audit trail'],
  },
  {
    num: '02', title: 'Assessing clinicians',
    desc: 'NICE-aligned templates, AI documentation assist, and one-click reports -- so clinical time is spent on the child, not the keyboard.',
    tasks: ['NICE NG142 / NG87 assessment templates', 'Voice-to-text and grammar assist', 'Auto-generated report from assessment data'],
  },
  {
    num: '03', title: 'Administrators & coordinators',
    desc: 'Triage, scheduling, and family communication in one place -- replacing email chains, spreadsheets, and manual chasing.',
    tasks: ['Unified enquiry inbox and triage queue', 'Automated appointment booking & reminders', 'Family communication log'],
  },
  {
    num: '04', title: 'Families & carers',
    desc: 'Clear, timely communication throughout the pathway -- forms to complete, appointment links to accept, and updates as the assessment progresses.',
    tasks: ['Mobile-friendly referral forms', 'Opt-in appointment booking', 'Automated status updates'],
  },
  {
    num: '05', title: 'Schools & GPs',
    desc: 'Simple, structured referral forms that capture the right information from the start -- reducing back-and-forth with the clinical team.',
    tasks: ['Structured digital referral forms', 'Instant submission acknowledgement', 'Secure information sharing'],
  },
]

function ProblemDiagram() {
  const steps = [
    { label: 'GP referral',     note: 'No standard process' },
    { label: 'Waiting list',    note: 'Months to years' },
    { label: 'Intake forms',    note: 'Paper or email' },
    { label: 'Booking',         note: 'Manual chasing' },
    { label: 'Assessment',      note: 'Underpowered tools' },
    { label: 'Report writing',  note: '3-4 hrs admin' },
    { label: 'Outcome',         note: 'Delayed, fragmented' },
  ]
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex items-start min-w-[560px] gap-1">
        {steps.map(({ label, note }, i) => (
          <div key={label} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <div className="w-full h-10 bg-red-100 border border-red-200 rounded-lg flex items-center justify-center px-1">
                <p className="text-[11px] font-semibold text-red-700 text-center leading-tight">{label}</p>
              </div>
              <p className="text-[10px] text-red-400 text-center mt-1 leading-tight">{note}</p>
            </div>
            {i < steps.length - 1 && (
              <svg width="14" height="10" viewBox="0 0 14 10" className="flex-shrink-0 mx-0.5 mt-[-10px]">
                <path d="M0 5h10M7 1l4 4-4 4" stroke="#FCA5A5" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              </svg>
            )}
          </div>
        ))}
      </div>
      <p className="font-mono text-[10px] text-red-400 tracking-wider text-center mt-3">WITHOUT NEURAPLEX -- FRAGMENTED · MANUAL · DELAYED</p>
    </div>
  )
}

function SolutionDiagram() {
  const steps = [
    { label: 'Digital referral', note: 'Structured intake' },
    { label: 'Auto triage',      note: 'Instant dashboard' },
    { label: 'Smart booking',    note: 'Opt-in links' },
    { label: 'NICE templates',   note: 'AI-assisted' },
    { label: 'One-click report', note: '15 min output' },
    { label: 'Family update',    note: 'Automated' },
    { label: 'Outcome logged',   note: 'Full audit trail' },
  ]
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex items-start min-w-[560px] gap-1">
        {steps.map(({ label, note }, i) => (
          <div key={label} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <div className="w-full h-10 bg-signal/10 border border-signal/30 rounded-lg flex items-center justify-center px-1">
                <p className="text-[11px] font-semibold text-signal text-center leading-tight">{label}</p>
              </div>
              <p className="text-[10px] text-teal text-center mt-1 leading-tight">{note}</p>
            </div>
            {i < steps.length - 1 && (
              <svg width="14" height="10" viewBox="0 0 14 10" className="flex-shrink-0 mx-0.5 mt-[-10px]">
                <path d="M0 5h10M7 1l4 4-4 4" stroke="#119DA4" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              </svg>
            )}
          </div>
        ))}
      </div>
      <p className="font-mono text-[10px] text-signal tracking-wider text-center mt-3">WITH NEURAPLEX -- CONNECTED · DIGITAL · ON TIME</p>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(180deg,#F6F2F8 0%,#fff 100%)', borderBottom: '1px solid #E7DEEC' }} className="py-20">
        <div className="wrap text-center">
          <p className="eyebrow mb-4">Our mission</p>
          <h1 className="font-display font-bold tracking-tightest text-plumInk mb-5" style={{ fontSize: 'clamp(32px,5vw,56px)' }}>
            Every neurodiverse child assessed<br/>
            <em className="not-italic text-aubergine">on time, every time.</em>
          </h1>
          <p className="text-slate max-w-[60ch] mx-auto text-[17px] leading-relaxed">
            Neuraplex exists because the pathway from referral to diagnosis is broken --
            fragmented across emails, paper forms and spreadsheets while children wait years for answers.
            We&apos;re fixing it.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="py-16 border-b border-line">
        <div className="wrap">
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">The problem</p>
            <h2 className="font-display font-bold tracking-tightest text-plumInk mb-3" style={{ fontSize: 'clamp(24px,3.5vw,38px)' }}>
              The system is failing neurodiverse children
            </h2>
            <p className="text-slate max-w-[54ch] mx-auto text-[16px]">
              The waits are long. The admin is overwhelming. The tools are inadequate.
              And the families bearing the cost are the most vulnerable.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {problemStats.map(({ value, label }) => (
              <div key={label} className="bg-red-50 border border-red-100 rounded-brand p-5 text-center">
                <p className="font-display font-extrabold text-red-600 leading-none mb-2" style={{ fontSize: 'clamp(20px,3vw,28px)' }}>
                  {value}
                </p>
                <p className="text-red-700 text-[12px] leading-snug">{label}</p>
              </div>
            ))}
          </div>
          <div className="bg-mist rounded-brand border border-line p-6 mb-4">
            <p className="font-display font-semibold text-plumInk text-[14px] mb-4">The pathway without Neuraplex</p>
            <ProblemDiagram />
          </div>
          <div className="bg-white rounded-brand border border-signal/20 p-6">
            <p className="font-display font-semibold text-plumInk text-[14px] mb-4">The pathway with Neuraplex</p>
            <SolutionDiagram />
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="py-16 border-b border-line bg-mist">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-3">Our approach</p>
              <h2 className="font-display font-bold tracking-tightest text-plumInk mb-5" style={{ fontSize: 'clamp(24px,3.5vw,38px)' }}>
                Clinician-led from day one
              </h2>
              <p className="text-slate text-[16px] leading-relaxed mb-5">
                Neuraplex wasn&apos;t designed in isolation. It was built in partnership with
                the clinicians who run neurodevelopmental assessment services -- psychologists,
                paediatricians, clinical leads, and the administrators who keep pathways moving.
              </p>
              <p className="text-slate text-[16px] leading-relaxed mb-5">
                Every feature started as a problem reported by a practitioner.
                Every template is aligned to NICE clinical guidelines.
                Every workflow reflects how assessments actually run.
              </p>
              <p className="text-slate text-[16px] leading-relaxed">
                The result is a platform that clinicians actually use -- because it makes their day easier, not harder.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { stat: '100%', label: 'Features validated with practicing clinicians before release' },
                { stat: 'NICE', label: 'NG142 (autism) and NG87 (ADHD) templates built in from the start' },
                { stat: '85+',  label: 'Cases processed in the first six months of live deployment' },
                { stat: '0',    label: 'Patient data collected on this site -- B2B only, always' },
              ].map(({ stat, label }) => (
                <div key={label} className="flex items-start gap-4 bg-white rounded-[14px] border border-line p-5">
                  <span className="font-display font-extrabold text-aubergine text-xl leading-none flex-shrink-0 w-14 text-right pt-0.5">{stat}</span>
                  <p className="text-slate text-[14px] leading-relaxed">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 border-b border-line">
        <div className="wrap">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">What we believe</p>
            <h2 className="font-display font-bold tracking-tightest text-plumInk" style={{ fontSize: 'clamp(24px,3.5vw,38px)' }}>
              Six principles we don&apos;t compromise on
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="bg-mist rounded-brand border border-line p-6">
                <span className="text-3xl mb-4 block">{icon}</span>
                <h3 className="font-display font-bold text-plumInk text-[16px] mb-3">{title}</h3>
                <p className="text-slate text-[14px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 border-b border-line bg-mist">
        <div className="wrap">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Built for everyone on the pathway</p>
            <h2 className="font-display font-bold tracking-tightest text-plumInk" style={{ fontSize: 'clamp(24px,3.5vw,38px)' }}>
              One platform. Every role supported.
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {roles.map(({ num, title, desc, tasks }) => (
              <div key={title} className="bg-white rounded-brand border border-line p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[11px] text-teal bg-teal/10 rounded px-2 py-1">{num}</span>
                    <h3 className="font-display font-bold text-plumInk text-[16px]">{title}</h3>
                  </div>
                  <p className="text-slate text-[14px] leading-relaxed">{desc}</p>
                </div>
                <ul className="flex flex-col gap-2">
                  {tasks.map(t => (
                    <li key={t} className="flex items-start gap-2 text-[13px] text-plumInk">
                      <span className="text-signal mt-0.5 flex-shrink-0">✓</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-plumInk">
        <div className="wrap text-center">
          <p className="eyebrow mb-3" style={{ color: '#C9B6D1' }}>Join the early services</p>
          <h2 className="font-display font-bold tracking-tightest text-white mb-4" style={{ fontSize: 'clamp(26px,3.5vw,40px)' }}>
            Be part of fixing the pathway
          </h2>
          <p className="max-w-[48ch] mx-auto text-[16px] mb-8 leading-relaxed" style={{ color: '#C9B6D1' }}>
            We&apos;re working with a small number of independent practices and NHS services in the UK.
            If you run or commission neurodevelopmental assessments, we&apos;d love to talk.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/demo" variant="primary" size="lg">Book a demo</Button>
            <Button href="/evidence" variant="ghost" size="lg">See the evidence</Button>
          </div>
        </div>
      </section>
    </>
  )
}
