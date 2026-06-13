import Link from 'next/link'
import { type ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'teal'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-aubergine text-white hover:bg-[#621069]',
  ghost:   'bg-transparent text-aubergine border border-[1.5px] border-aubergine hover:bg-aubergine/5',
  teal:    'bg-teal text-white hover:bg-[#0e8a90]',
}

const sizeClasses: Record<Size, string> = {
  sm: 'text-[13px] px-4 py-2',
  md: 'text-[15px] px-5 py-2.5',
  lg: 'text-[16px] px-6 py-3',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const base = `inline-flex items-center gap-2 font-body font-semibold rounded-[11px] transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={base} disabled={disabled}>
      {children}
    </button>
  )
}
