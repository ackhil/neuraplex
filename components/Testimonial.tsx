/** Phase 3: wire to Sanity testimonials schema. Placeholder for now. */
export default function Testimonial() {
  return (
    <section className="section-divider py-14">
      <div className="wrap">
        <div className="reveal max-w-2xl mx-auto bg-plumInk rounded-brand p-10 text-center">
          <svg
            className="mx-auto mb-5 opacity-40"
            width="40" height="32" viewBox="0 0 40 32" fill="none"
          >
            <path
              d="M0 20C0 9 6 3 18 0l2 4C12 6 9 10 9 14h8v18H0V20zm22 0C22 9 28 3 40 0l2 4C34 6 31 10 31 14h8v18H22V20z"
              fill="#E7DEEC" fillOpacity=".4"
            />
          </svg>

          <blockquote className="font-display text-white text-[18px] leading-relaxed mb-6 italic">
            "[Placeholder — drop in a real clinician quote here. This is where social proof lands.]"
          </blockquote>

          <cite className="not-italic text-[#C9B6D1] text-[13px]">
            — Lead clinician · independent practice · placeholder
          </cite>
        </div>
      </div>
    </section>
  )
}
