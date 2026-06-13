'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const demoPoints = [
  'No pressure, no setup required',
  'Tailored to autism, ADHD or both',
  'Questions answered by clinicians',
]

export default function DemoForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries())

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (json.ok) {
        setState('success')
      } else {
        setErrorMsg(json.error ?? 'Something went wrong.')
        setState('error')
      }
    } catch {
      setErrorMsg('Network error — please try again.')
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="bg-mist border border-line rounded-brand p-10 text-center reveal in">
        <div className="w-14 h-14 rounded-full bg-signal/10 flex items-center justify-center mx-auto mb-4">
          <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
            <path d="M2 10L8.5 17L22 2" stroke="#1BA672" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="font-display font-bold text-plumInk text-xl mb-2">Request received</h3>
        <p className="text-slate text-[15px]">
          We&apos;ll be in touch within one working day to confirm your demo slot.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="reveal bg-white border border-line rounded-brand p-7 shadow-sm"
      noValidate
    >
      {/* Honeypot — hidden from humans, filled by bots */}
      <input name="_hp" type="text" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <Field label="Full name"            name="name"    type="text"  required />
        <Field label="Role"                 name="role"    type="text"  required placeholder="e.g. Clinical Lead" />
        <Field label="Practice / organisation" name="org"  type="text"  required />
        <Field label="Work email"           name="email"   type="email" required />
        <Field label="Phone"                name="phone"   type="tel" />
      </div>

      <div className="mb-4">
        <label className="block text-[13px] font-medium text-plumInk mb-1.5">
          What would you like to see?
        </label>
        <textarea
          name="message"
          rows={3}
          className="w-full border border-line rounded-[10px] px-4 py-2.5 text-[14px] text-plumInk placeholder:text-slate/60 focus:outline-none focus:ring-2 focus:ring-aubergine/30 focus:border-aubergine transition resize-none"
          placeholder="Autism pathway, ADHD workflow, reporting — whatever matters most to your service."
        />
      </div>

      {state === 'error' && (
        <p className="text-sm text-red-600 mb-4 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
          {errorMsg}
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-full justify-center" disabled={state === 'loading'}>
        {state === 'loading' ? 'Sending…' : 'Request demo →'}
      </Button>

      <p className="text-[11px] text-slate text-center mt-3">
        B2B enquiry only · no patient data collected here.
      </p>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[13px] font-medium text-plumInk mb-1.5">
        {label}{required && <span className="text-aubergine ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border border-line rounded-[10px] px-4 py-2.5 text-[14px] text-plumInk placeholder:text-slate/60 focus:outline-none focus:ring-2 focus:ring-aubergine/30 focus:border-aubergine transition"
      />
    </div>
  )
}
