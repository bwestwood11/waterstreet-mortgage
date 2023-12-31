
import {BsHouse} from 'react-icons/bs'
import { GiReceiveMoney } from 'react-icons/gi'
import { LiaPiggyBankSolid, LiaHandshakeSolid } from 'react-icons/lia'
import { Button } from './ui/button'


const features = [
  {
    name: 'First Time Home Buyers',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: BsHouse,
  },
  {
    name: 'Mortgage Refinancing',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LiaPiggyBankSolid,
  },
  {
    name: 'Conventional Loans',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: LiaHandshakeSolid,
  },
  {
    name: 'Investment Loans',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: GiReceiveMoney,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-black">What we offer</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Listed below is some of our most popular loan services amongst our amazing clients. To see a full list of all our loans. Click the button below.
          </p>
          <Button size="lg" variant='outline' className="mt-6">
            See All Loans
          </Button>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#000080] via-[#1E3A8A] to-[#000080]">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
