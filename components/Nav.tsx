'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line">
      <div className="wrap flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-aubergine text-white font-display font-bold text-sm">
            N
          </span>
          <span className="font-display font-bold text-plumInk text-lg tracking-tightest">
            Neuraplex
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          <Link
            href="/platform"
            className="text-[15px] font-medium text-slate hover:text-plumInk transition-colors"
          >
            Platform
          </Link>
          <Link
            href="/evidence"
            className="text-[15px] font-medium text-slate hover:text-plumInk transition-colors"
          >
            Evidence
          </Link>
          <Link
            href="/about"
            className="text-[15px] font-medium text-slate hover:text-plumInk transition-colors"
          >
            About
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 bg-aubergine text-white font-body font-semibold text-[15px] rounded-[11px] px-5 py-2.5 hover:bg-[#621069] transition-colors"
          >
            Book a demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-plumInk"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="3" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="3" y1="17" x2="19" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-line bg-white px-5 pb-5 pt-3 flex flex-col gap-4">
          <Link href="/platform" className="text-[15px] font-medium text-slate py-1" onClick={() => setOpen(false)}>Platform</Link>
          <Link href="/evidence" className="text-[15px] font-medium text-slate py-1" onClick={() => setOpen(false)}>Evidence</Link>
          <Link href="/about" className="text-[15px] font-medium text-slate py-1" onClick={() => setOpen(false)}>About</Link>
          <Link
            href="/demo"
            className="inline-flex justify-center bg-aubergine text-white font-semibold text-[15px] rounded-[11px] px-5 py-2.5"
            onClick={() => setOpen(false)}
          >
            Book a demo
          </Link>
        </div>
      )}
    </nav>
  )
}
