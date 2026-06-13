import { type ReactNode } from 'react'

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-signal/10 text-signal font-mono text-[12px] px-3 py-1.5 rounded-full font-medium">
      <span className="w-1.5 h-1.5 rounded-full bg-signal" />
      {children}
    </span>
  )
}
