import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

const FAQ = () => {
  return (
    <div className="w-full flex lg:gap-4 gap-10 lg:flex-row flex-col py-8 max-w-6xl mx-auto px-8">
        <div className="basis-1/2">
           <div className="text-center lg:text-left">
            <h2 className="font-extrabold text-4xl lg:pr-8">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-5 max-w-md mx-auto lg:mx-0 text-center lg:text-left lg:pr-8">
              Check out our blog to learn about different mortgage programs in more depth. However, if you have any questions, please feel free to contact us.
              </p>
              <Link href='/blog'>
                   <Button size='lg' className="mt-4">
                    Learn More
              </Button>
              </Link>
           
            </div>
        </div>
        <div className="max-w-2xl mx-auto basis-1/2">
            <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How Do You Qualify For A Loan?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Can You Get A Mortgage Without A Credit Score?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How Much Home Can You Afford?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
        </div>
         
    </div>
  )
}

export default FAQ