import { cn } from '@/lib/utils'
import { Montserrat } from 'next/font/google'
import Services from './Services'

const montserrat = Montserrat({ subsets: ['latin'] })

const WhatWeOffer = () => {
  return (
    <div className="w-full bg-white h-full flex flex-col pt-16 px-6">
    <div className="max-w-6xl mx-auto w-full">
      <div className="flex max-w-md mb-4 mx-auto text-center justify-center gap-3 items-center">
        <p className=" font-bold uppercase text-[#000080]">
          What&apos; We Offer
        </p>
        <div className="border-b lg:h-1/4 h-full border-2 border-[#000080] w-1/6" />
      </div>
      <h2
        className={cn(
          montserrat.className,
          "font-extrabold text-center text-4xl"
        )}
      >
        Our Core Services
      </h2>
      <p className="text-center leading-8 text-gray-600 mt-5 max-w-lg mx-auto">
       We offer a wide range of mortgage products to fit your needs. Whether you are looking to buy a home, refinance, or build a home, we have the right product for you.
      </p>
      </div>
      <Services />
      </div>
  )
}

export default WhatWeOffer