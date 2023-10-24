import CTA from '@/components/Call-To-Action'
import Logos from '@/components/Cloud-Logos'

import Hero from '@/components/Hero'
import MortgagePrograms from '@/components/Mortgage-Programs'
import Reviews from '@/components/Review'
import WhyUs from '@/components/Why-Us'


export default function Home() {
  return (
    <section>
      <Hero /> 
      <Logos />
      <MortgagePrograms />
      <Reviews />
      <WhyUs />
     <CTA />
    </section>
  )
}
