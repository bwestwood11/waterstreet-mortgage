import Image from 'next/image'
import React from 'react'
import { Montserrat } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import Link from 'next/link'


const montserrat = Montserrat({ subsets: ['latin'] })

const Hero = () => {
  return (
    <div className='w-full'>
          <div className='w-screen h-[80vh] relative'>
          <div className="absolute top-0 left-0 w-full h-[80vh] bg-gradient-to-r from-black to-transparent z-10" />
             <Image
             src='/tampa3.png'
                layout='fill'
                alt='Tampa'
                objectFit='cover'
                objectPosition='center'
                priority
                className='absolute inset-0 z-1 brightness-110'
                />
                <div className="flex absolute sm:top-40 top-32 z-[50] lg:left-28 lg:flex-row gap-16 lg:gap-4 flex-col max-w-7xl mx-auto px-6" style={{pointerEvents: 'all'}}>
          <div className={cn(montserrat.className, "basis-1/2 lg:px-4 md:px-16")}>
            <h1 className="font-semibold mb-2 text-white">
              Tampa&apos;s Premiere Mortgage Broker
            </h1>
            <h2 className="font-extrabold xl:text-7xl text-5xl text-white tracking-wide">
              Unlock Your Dream Home
            </h2>
            <p className="mt-6 text-white font-normal leading-6">
            Bringing Welcome Home, One Mortgage at a Time. Experience the difference with our friendly team dedicated to making your home ownership dreams come true. Welcome to Florida!   
            </p>
            <div className='flex flex-col sm:flex-row gap-4 mt-6 px-10 sm:px-0'>
            <Link href='/refinance-a-home'> 
                <Button size="lg" variant='default' className="w-full font-bold p-7 hover:scale-105 transition ease-in-out">
                    Refinance a Home
                </Button>
                </Link>
                <Link href='/buy-a-home'> 
                <Button size="lg" variant='outline' className="w-full font-bold p-7 hover:scale-105 transition ease-in-out">
                    Buy a Home
                </Button>
                </Link>
            </div>
          </div> 
        </div>
          </div>
    </div>
  )
}

export default Hero