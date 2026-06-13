import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Platform — Neuraplex',
  description: 'End-to-end neurodevelopmental assessment platform features and pathway.',
}

export default function PlatformPage() {
  return (
    <div className="wrap py-20 text-center">
      <p className="eyebrow mb-4">Coming in Phase 2</p>
      <h1 className="font-display font-bold text-plumInk text-4xl tracking-tightest">Platform</h1>
      <p className="text-slate mt-4 max-w-md mx-auto">
        Full platform detail — Pathway Pulse, feature deep-dives, and product screenshots — launches with Phase 2.
      </p>
    </div>
  )
}
