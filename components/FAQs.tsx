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
    <div className="w-full flex lg:gap-4 gap-10 lg:flex-row flex-col py-20 max-w-6xl mx-auto z-10 px-8">
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
        <div className="max-w-2xl mx-auto basis-1/2 z-10">
            <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How Do You Qualify For A Loan?</AccordionTrigger>
        <AccordionContent>
        To qualify for a loan, you typically need a stable income, a good credit history, and the ability to demonstrate your ability to repay the borrowed funds. Lenders also consider factors such as your debt-to-income ratio and the purpose of the loan when evaluating your eligibility.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Can You Get A Mortgage Without A Credit Score?</AccordionTrigger>
        <AccordionContent>
        It is possible to get a mortgage without a credit score, but it can be challenging. Some lenders offer alternative programs that consider factors like rental payment history and employment stability, but these options may come with higher interest rates or stricter requirements.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How Much Home Can You Afford?</AccordionTrigger>
        <AccordionContent>
        To determine how much home you can afford, consider your income, monthly expenses, and down payment. A common guideline is that your housing costs should not exceed 28% of your gross monthly income, but it's important to consult with a financial advisor or use online calculators to get a more accurate estimate based on your specific financial situation.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
        </div>
         
    </div>
  )
}

export default FAQ