import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { cn } from '@/lib/utils'
import Team from '@/components/Team'

const montserrat = Montserrat({ subsets: ['latin'] })

const people = [
    {
      name: 'Kevin Tabares',
      role: 'Broker Owner',
      imageUrl:
        '/Kevin.jpg',
      NMLS: 'NMLS# 1994473',
      email: 'ktabares@waterstreetmtg.com',
    },
    {
      name: 'Jeffrey Tabares',
      role: 'Broker Owner',
      imageUrl:
        '/Jeffrey.jpg',
      NMLS: 'NMLS# 2105748',
      email: 'jtabares@waterstreetmtg.com',  
    },
    {
      name: 'Haley Tubbs',
      role: 'Mortgage Broker',
      imageUrl:
        '/Haley.jpg',
      NMLS: 'NMLS# 2082764',
      email: 'ahtubbs@waterstreetmtg.com',
    },
   
  ]



const AboutPage = () => {



  return (
    <section className='w-full'>
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className={cn(montserrat.className, "max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto")}>
                We’re a passionate group of people working for our clients and their needs.
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                  irure qui lorem cupidatat commodo.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
                alt=""
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
          <Team />
        </div>

    </section>
  )
}

export default AboutPage