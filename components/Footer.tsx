import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-line pt-10 pb-16 text-slate text-[13px]">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-aubergine text-white font-display font-bold text-xs">
                N
              </span>
              <span className="font-display font-bold text-plumInk text-base tracking-tightest">
                Neuraplex
              </span>
            </div>
            <p className="max-w-xs leading-relaxed">
              Secure digital software for autism &amp; ADHD assessment, built for clinicians.
            </p>
            <p className="mt-3 font-mono text-aubergine text-[11px] tracking-wider">
              NICE-ALIGNED · CLINICIAN-LED · GDPR-READY
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="font-display font-semibold text-plumInk text-sm mb-3">Product</p>
            <ul className="flex flex-col gap-2">
              <li><Link href="/platform" className="hover:text-plumInk transition-colors">Platform</Link></li>
              <li><Link href="/evidence" className="hover:text-plumInk transition-colors">Evidence</Link></li>
              <li><Link href="/demo" className="hover:text-plumInk transition-colors">Book a demo</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-display font-semibold text-plumInk text-sm mb-3">Company</p>
            <ul className="flex flex-col gap-2">
              <li><Link href="/about" className="hover:text-plumInk transition-colors">About</Link></li>
              <li><Link href="/privacy" className="hover:text-plumInk transition-colors">Privacy policy</Link></li>
              <li>
                <a href="mailto:hello@neuraplex.co.uk" className="hover:text-plumInk transition-colors">
                  hello@neuraplex.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p>© {new Date().getFullYear()} Neuraplex Ltd. All rights reserved.</p>
          <p>
            <Link href="/privacy" className="hover:text-plumInk transition-colors mr-4">Privacy</Link>
            <Link href="/terms" className="hover:text-plumInk transition-colors">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
