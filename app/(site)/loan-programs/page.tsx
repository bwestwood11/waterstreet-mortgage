import FAQ from '@/components/FAQs'
import WhatWeOffer from '@/components/What-We-Offer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Waterstreet Mortgage | Loan Programs',
  description: 'We offer a variety of loan programs to fit your needs in the state of Florida.',
  robots: {
    follow: true,
    index: true
  },
  
}

const LoansPage = () => {
  return (
    <div>
      <WhatWeOffer />
      <FAQ />
    </div>
  )
}

export default LoansPage