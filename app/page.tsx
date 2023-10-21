import CTA from '@/components/Call-To-Action'
import Logos from '@/components/Cloud-Logos'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Hero2 from '@/components/Hero2'
import MortgagePrograms from '@/components/Mortgage-Programs'
import Reviews from '@/components/Review'
import Review from '@/components/Review'
import WhyUs from '@/components/Why-Us'


export default function Home() {
  return (
    <section>
      <Hero />
      {/* <Hero2 /> */}
      <Logos />
      <MortgagePrograms />
      <Reviews />
      <WhyUs />
      {/* <Features /> */}
     <CTA />
    </section>
  )
}
