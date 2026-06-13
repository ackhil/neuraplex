import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Evidence — Neuraplex',
  description: 'Real-world outcomes from Neuraplex deployments in independent practices.',
}

export default function EvidencePage() {
  return (
    <div className="wrap py-20 text-center">
      <p className="eyebrow mb-4">Coming in Phase 2</p>
      <h1 className="font-display font-bold text-plumInk text-4xl tracking-tightest">Evidence</h1>
      <p className="text-slate mt-4 max-w-md mx-auto">
        Detailed outcome data, case studies, and clinical validation — launches with Phase 2.
      </p>
    </div>
  )
}
