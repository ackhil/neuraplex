import Hero               from '@/components/Hero'
import StatBand           from '@/components/StatBand'
import Pathway            from '@/components/Pathway'
import Features           from '@/components/Features'
import Evidence           from '@/components/Evidence'
import JourneyInfographic from '@/components/JourneyInfographic'
import Testimonial        from '@/components/Testimonial'
import WhoFor             from '@/components/WhoFor'
import DemoSection        from '@/components/DemoSection'
import RevealObserver     from '@/components/RevealObserver'

export default function HomePage() {
  return (
    <>
      <RevealObserver />
      <Hero />
      <StatBand />
      <JourneyInfographic />
      <Pathway />
      <Features />
      <Evidence />
      <Testimonial />
      <WhoFor />
      <DemoSection />
    </>
  )
}
