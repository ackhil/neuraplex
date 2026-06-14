'use client'

/**
 * JourneyInfographic
 * Hand-drawn-style animated illustration showing the parent + child journey
 * before and after Neuraplex. Uses CSS keyframe animations and inline SVG.
 * No external dependencies.
 */

import { useEffect, useRef, useState } from 'react'

/* --- Tiny reusable SVG figures -------------------------------------------- */

function ParentFigure({ mood, color }: { mood: 'worried' | 'happy'; color: string }) {
  return (
    <g>
      {/* Head */}
      <circle cx="0" cy="-28" r="9" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      {/* Body */}
      <line x1="0" y1="-19" x2="0" y2="2" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      {/* Arms */}
      {mood === 'worried'
        ? <><line x1="0" y1="-12" x2="-12" y2="-4" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
             <line x1="0" y1="-12" x2="12" y2="-4" stroke={color} strokeWidth="2.5" strokeLinecap="round"/></>
        : <><line x1="0" y1="-12" x2="-12" y2="-18" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
             <line x1="0" y1="-12" x2="12" y2="-18" stroke={color} strokeWidth="2.5" strokeLinecap="round"/></>
      }
      {/* Legs */}
      <line x1="0" y1="2" x2="-7" y2="18" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="0" y1="2" x2="7" y2="18" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      {/* Face */}
      {mood === 'worried'
        ? <path d="M-4 -24 Q0 -28 4 -24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        : <path d="M-4 -27 Q0 -23 4 -27" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      }
    </g>
  )
}

function ChildFigure({ mood, color }: { mood: 'restless' | 'calm'; color: string }) {
  return (
    <g>
      {/* Head (smaller) */}
      <circle cx="0" cy="-20" r="7" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      {/* Body */}
      <line x1="0" y1="-13" x2="0" y2="2" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      {/* Arms */}
      {mood === 'restless'
        ? <><line x1="0" y1="-8" x2="-10" y2="-2" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
             <line x1="0" y1="-8" x2="10" y2="2" stroke={color} strokeWidth="2.5" strokeLinecap="round"/></>
        : <><line x1="0" y1="-8" x2="-9" y2="-14" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
             <line x1="0" y1="-8" x2="9" y2="-14" stroke={color} strokeWidth="2.5" strokeLinecap="round"/></>
      }
      {/* Legs */}
      <line x1="0" y1="2" x2="-6" y2="14" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="0" y1="2" x2="6" y2="14" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      {/* Face */}
      {mood === 'restless'
        ? <circle cx="0" cy="-20" r="1" fill={color}/>
        : <path d="M-3 -18 Q0 -15 3 -18" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      }
    </g>
  )
}

/* --- Main component ------------------------------------------------------- */

export default function JourneyInfographic() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.25 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="py-20 border-b border-line overflow-hidden" style={{ background: 'linear-gradient(180deg,#F6F2F8 0%,#fff 100%)' }}>
      <div className="wrap">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">The journey</p>
          <h2 className="font-display font-bold tracking-tightest text-plumInk" style={{ fontSize: 'clamp(26px,4vw,44px)' }}>
            From years of waiting<br/>to answers in weeks
          </h2>
        </div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          <svg
            viewBox="0 0 900 340"
            className="w-full h-auto"
            aria-label="Journey from struggling family to supported family with Neuraplex"
            role="img"
          >
            {/* -- BEFORE panel ---------------------------------------- */}
            {/* Background wash */}
            <rect x="10" y="10" width="370" height="320" rx="18" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1.5"
              strokeDasharray={visible ? '0' : '2000'} strokeDashoffset={visible ? '0' : '2000'}
              style={{ transition: 'stroke-dashoffset 1.2s ease', fill: '#FEF2F2' }}
            />

            {/* Label */}
            <text x="195" y="48" textAnchor="middle" fontSize="11" fill="#EF4444" fontFamily="monospace" letterSpacing="2"
              opacity={visible ? 1 : 0} style={{ transition: 'opacity 0.4s ease 0.3s' }}>
              BEFORE NEURAPLEX
            </text>

            {/* Parent figure -- worried */}
            <g transform="translate(100, 170)" opacity={visible ? 1 : 0} style={{ transition: 'opacity 0.5s ease 0.5s' }}>
              <ParentFigure mood="worried" color="#EF4444" />
            </g>

            {/* Child figure -- restless */}
            <g transform="translate(155, 180)" opacity={visible ? 1 : 0} style={{ transition: 'opacity 0.5s ease 0.6s' }}>
              <ChildFigure mood="restless" color="#F97316" />
            </g>

            {/* Stress cloud above parent */}
            <g opacity={visible ? 1 : 0} style={{ transition: 'opacity 0.5s ease 0.7s' }}>
              <ellipse cx="80" cy="108" rx="22" ry="14" fill="none" stroke="#FECACA" strokeWidth="1.8" strokeDasharray="4 3"/>
              <ellipse cx="105" cy="100" rx="18" ry="12" fill="none" stroke="#FECACA" strokeWidth="1.8" strokeDasharray="4 3"/>
              <ellipse cx="128" cy="107" rx="16" ry="11" fill="none" stroke="#FECACA" strokeWidth="1.8" strokeDasharray="4 3"/>
              <line x1="100" y1="118" x2="102" y2="130" stroke="#FECACA" strokeWidth="1.5"/>
            </g>

            {/* Clock with long wait */}
            <g transform="translate(260, 130)" opacity={visible ? 1 : 0} style={{ transition: 'opacity 0.5s ease 0.8s' }}>
              <circle cx="0" cy="0" r="26" fill="none" stroke="#FCA5A5" strokeWidth="2"/>
              <line x1="0" y1="0" x2="0" y2="-18" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="0" y1="0" x2="14" y2="7" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round"/>
              <text x="0" y="42" textAnchor="middle" fontSize="9.5" fill="#EF4444" fontFamily="sans-serif" fontWeight="600">2-5 year</text>
              <text x="0" y="54" textAnchor="middle" fontSize="9.5" fill="#EF4444" fontFamily="sans-serif" fontWeight="600">wait</text>
            </g>

            {/* Paper chaos */}
            <g opacity={visible ? 1 : 0} style={{ transition: 'opacity 0.5s ease 0.9s' }}>
              <rect x="188" y="220" width="34" height="42" rx="3" fill="none" stroke="#FCA5A5" strokeWidth="1.8" transform="rotate(-8 205 241)"/>
              <rect x="198" y="217" width="34" height="42" rx="3" fill="none" stroke="#FCA5A5" strokeWidth="1.8" transform="rotate(4 215 238)"/>
              <line x1="196" y1="230" x2="218" y2="230" stroke="#FCA5A5" strokeWidth="1" transform="rotate(-8 207 230)"/>
              <line x1="196" y1="237" x2="218" y2="237" stroke="#FCA5A5" strokeWidth="1" transform="rotate(-8 207 237)"/>
              <text x="215" y="276" textAnchor="middle" fontSize="9" fill="#EF4444" fontFamily="sans-serif">paper forms</text>
            </g>

            {/* Email chaos squiggles */}
            <g opacity={visible ? 1 : 0} style={{ transition: 'opacity 0.5s ease 1s' }}>
              <path d="M280 220 Q300 210 320 220 Q340 230 360 218" fill="none" stroke="#FCA5A5" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M285 232 Q305 222 325 232 Q345 242 355 230" fill="none" stroke="#FCA5A5" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M290 244 Q310 234 330 244" fill="none" stroke="#FCA5A5" strokeWidth="1.5" strokeLinecap="round"/>
              <text x="320" y="262" textAnchor="middle" fontSize="9" fill="#EF4444" fontFamily="sans-serif">email chains</text>
            </g>

            {/* -- ARROW / TRANSITION -------------------------------- */}
            <g opacity={visible ? 1 : 0} style={{ transition: 'opacity 0.6s ease 1.1s' }}>
              {/* Arrow shaft */}
              <line x1="395" y1="170" x2="495" y2="170" stroke="#741F7C" strokeWidth="3" strokeLinecap="round"
                strokeDasharray={visible ? '0' : '200'} strokeDashoffset={visible ? '0' : '200'}
                style={{ transition: 'stroke-dashoffset 0.8s ease 1.2s' }}
              />
              {/* Arrowhead */}
              <path d="M487 160 L499 170 L487 180" fill="none" stroke="#741F7C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Logo mark */}
              <rect x="413" y="148" width="60" height="26" rx="6" fill="#741F7C"/>
              <text x="443" y="165" textAnchor="middle" fontSize="9" fill="white" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.5">NEURAPLEX</text>
            </g>

            {/* -- AFTER panel ---------------------------------------- */}
            <rect x="520" y="10" width="370" height="320" rx="18" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1.5"
              opacity={visible ? 1 : 0} style={{ transition: 'opacity 0.6s ease 1.3s' }}
            />

            <text x="705" y="48" textAnchor="middle" fontSize="11" fill="#1BA672" fontFamily="monospace" letterSpacing="2"
              opacity={visible ? 1 : 0} style={{ transition: 'opacity 0.4s ease 1.4s' }}>
              WITH NEURAPLEX
            </text>

            {/* Parent figure -- happy */}
            <g transform="translate(605, 170)" opacity={visible ? 1 : 0} style={{ transition: 'opacity 0.5s ease 1.5s' }}>
              <ParentFigure mood="happy" color="#1BA672" />
            </g>

            {/* Child figure -- calm */}
            <g transform="translate(660, 178)" opacity={visible ? 1 : 0} style={{ transition: 'opacity 0.5s ease 1.6s' }}>
              <ChildFigure mood="calm" color="#119DA4" />
            </g>

            {/* Heart / relief above */}
            <g opacity={visible ? 1 : 0} style={{ transition: 'opacity 0.5s ease 1.7s' }}>
              <path d="M625 108 C625 103 630 98 635 103 C640 98 645 103 645 108 C645 114 635 122 635 122 C635 122 625 114 625 108Z"
                fill="none" stroke="#1BA672" strokeWidth="2"/>
              <path d="M650 106 C650 102 654 98 658 102 C662 98 666 102 666 106 C666 111 658 118 658 118 C658 118 650 111 650 106Z"
                fill="none" stroke="#1BA672" strokeWidth="2"/>
            </g>

            {/* Fast clock */}
            <g transform="translate(760, 130)" opacity={visible ? 1 : 0} style={{ transition: 'opacity 0.5s ease 1.8s' }}>
              <circle cx="0" cy="0" r="26" fill="none" stroke="#86EFAC" strokeWidth="2"/>
              <line x1="0" y1="0" x2="0" y2="-18" stroke="#1BA672" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="0" y1="0" x2="12" y2="-12" stroke="#1BA672" strokeWidth="2.5" strokeLinecap="round"/>
              {/* Speed lines */}
              <line x1="-34" y1="-8" x2="-28" y2="-8" stroke="#86EFAC" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="-34" y1="0" x2="-28" y2="0" stroke="#86EFAC" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="-34" y1="8" x2="-28" y2="8" stroke="#86EFAC" strokeWidth="1.5" strokeLinecap="round"/>
              <text x="0" y="42" textAnchor="middle" fontSize="9.5" fill="#1BA672" fontFamily="sans-serif" fontWeight="600">weeks,</text>
              <text x="0" y="54" textAnchor="middle" fontSize="9.5" fill="#1BA672" fontFamily="sans-serif" fontWeight="600">not years</text>
            </g>

            {/* Digital flow / checkmarks */}
            <g opacity={visible ? 1 : 0} style={{ transition: 'opacity 0.5s ease 1.9s' }}>
              {/* Three step cards */}
              {[0, 1, 2].map(i => (
                <g key={i} transform={`translate(${543 + i * 80}, 218)`}>
                  <rect x="0" y="0" width="64" height="36" rx="6" fill="none" stroke="#86EFAC" strokeWidth="1.5"/>
                  <path d={`M14 18 L26 26 L50 10`} fill="none" stroke="#1BA672" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    strokeDasharray={visible ? '0' : '60'} strokeDashoffset={visible ? '0' : '60'}
                    style={{ transition: `stroke-dashoffset 0.6s ease ${1.9 + i * 0.2}s` }}
                  />
                  <text x="32" y="50" textAnchor="middle" fontSize="8.5" fill="#1BA672" fontFamily="sans-serif">
                    {['Referred', 'Assessed', 'Report'][i]}
                  </text>
                </g>
              ))}
              {/* Connector arrows between cards */}
              <line x1="610" y1="236" x2="622" y2="236" stroke="#86EFAC" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="690" y1="236" x2="702" y2="236" stroke="#86EFAC" strokeWidth="1.5" strokeLinecap="round"/>
            </g>

            {/* Stars / sparkles around happy family */}
            <g opacity={visible ? 1 : 0} style={{ transition: 'opacity 0.6s ease 2s' }}>
              {[[590, 145, 6], [675, 138, 5], [700, 152, 4]].map(([x, y, s], i) => (
                <g key={i} transform={`translate(${x},${y})`}>
                  <line x1="0" y1={-s} x2="0" y2={s} stroke="#1BA672" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1={-s} y1="0" x2={s} y2="0" stroke="#1BA672" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1={-s*0.7} y1={-s*0.7} x2={s*0.7} y2={s*0.7} stroke="#1BA672" strokeWidth="1" strokeLinecap="round"/>
                  <line x1={s*0.7} y1={-s*0.7} x2={-s*0.7} y2={s*0.7} stroke="#1BA672" strokeWidth="1" strokeLinecap="round"/>
                </g>
              ))}
            </g>
          </svg>

          {/* Caption strip */}
          <div className="mt-6 grid grid-cols-2 gap-4 max-w-2xl mx-auto text-center">
            <div className="bg-red-50 border border-red-100 rounded-[14px] px-4 py-3">
              <p className="font-mono text-[10px] text-red-400 tracking-wider uppercase mb-1">Without Neuraplex</p>
              <p className="font-display font-semibold text-red-700 text-[13px]">Years of waiting. Mountains of paperwork. Families left in the dark.</p>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-[14px] px-4 py-3">
              <p className="font-mono text-[10px] text-signal tracking-wider uppercase mb-1">With Neuraplex</p>
              <p className="font-display font-semibold text-[13px]" style={{ color: '#1BA672' }}>Assessed in weeks. Families supported. Clinicians with capacity to care.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
