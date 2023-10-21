
import { BsHouse } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineAddHomeWork } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";


const services = [
  {
    name: "Conventional Loans",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: BsHouse,
    image: '/conventional-loans.png'
  },
  {
    name: "Jumbo Loans",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: MdOutlineAddHomeWork,
    image: '/jumbo-loans.png'
  },
  {
    name: "FHA Loans",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: MdOutlineAddHomeWork,
    image: '/fha-loans.png'
  },
  {
    name: "VA Loans",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: GiReceiveMoney,
    image: '/va-loans.png'
  },
  {
    name: "First Time Home Buyers",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: GiReceiveMoney,
    image: '/first-time-home-buyer.png'
  },
  {
    name: "USDA Loans",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: GiReceiveMoney,
    image: '/usda-loans.png'
  },
  {
    name: "Cash Out Refinances",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: LiaPiggyBankSolid,
    image: '/cash-out-refinance.png'
  },
  {
    name: "Home Equity Loans",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: MdOutlineAddHomeWork,
    image: '/home-equity-loans.png'
  },
  {
    name: "Renovation Loans",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: GrUserWorker,
    image: '/renovation-loans.png'
  },
  {
    name: "Investment Loans",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FaMoneyBillAlt,
    image: '/investment-loans.png'
  },
  {
    name: "Multi-Unit Properties",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: GiReceiveMoney,
    image: '/multi-unit-properties.png'
  },
  {
    name: "DSCR Loans",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: GiReceiveMoney,
    image: '/dscr-loans.png'
  },
  {
    name: "New Construction",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: MdOutlineAddHomeWork,
    image: '/new-construction.png'
  },
  {
    name: "Manufacturer Homes",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: GiReceiveMoney,
    image: '/manufactured-homes.png'
  },
];

type Service = {
    name: string;
    description: string;
    icon: React.ComponentType;
    image: string;
  };


const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {


    return (
      <div className="w-full p-4">
        <div className="bg-white rounded-lg shadow-xl relative">
         <Image src={service.image} alt={service.name} layout="responsive" priority width={100} height={100} />
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold text-[#000080] mt-6">{service.name}</h3>
            <p className="mt-2 mb-6 text-base text-gray-600">{service.description}</p>
            <Link href='/contact' className="mt-4 flex text-center text-sm items-center uppercase font-bold flex-row gap-2 text-[#000080] hover:underline">
              Contact Us
              <span>
                <BiRightArrowAlt size="25" />
                </span>
            </Link>
            <div
            className='absolute xl:top-[45%] lg:top-[37%] md:top-[42%] top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-xl w-16 h-16 flex items-center justify-center' >
                <div  className="text-[#000080] text-2xl" >
                     <service.icon />
                </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const Services = () => {
    return (
      <div className="w-full py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Services;