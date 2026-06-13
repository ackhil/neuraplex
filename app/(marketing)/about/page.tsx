import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Neuraplex',
  description: 'Clinician-led team building better neurodevelopmental assessment tools.',
}

export default function AboutPage() {
  return (
    <div className="wrap py-20 text-center">
      <p className="eyebrow mb-4">Coming in Phase 2</p>
      <h1 className="font-display font-bold text-plumInk text-4xl tracking-tightest">About</h1>
      <p className="text-slate mt-4 max-w-md mx-auto">
        Team story, clinical advisory board, and our mission — launches with Phase 2.
      </p>
    </div>
  )
}
