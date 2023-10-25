
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
      "Conventional loans, available through our mortgage brokerage, are a secure and flexible choice for home buyers. These mortgage options, not backed by government agencies, offer competitive interest rates and tailored terms, making your homeownership dreams a reality.",
    icon: BsHouse,
    image: '/conventional-loans.png'
  },
  {
    name: "Jumbo Loans",
    description:
      "Jumbo loans, offered by our mortgage brokerage, are designed for high-value property purchases, exceeding the limits of conventional loans. If you're in the market for luxury or upscale real estate, our jumbo loans provide the financial support you need to acquire your dream home.",
    icon: MdOutlineAddHomeWork,
    image: '/jumbo-loans.png'
  },
  {
    name: "FHA Loans",
    description:
      "FHA loans, available through our mortgage brokerage, are a government-backed solution for homebuyers, offering a path to homeownership with more lenient credit and down payment requirements. These loans are an excellent choice for those seeking affordable financing options and the security of federal backing.",
    icon: MdOutlineAddHomeWork,
    image: '/fha-loans.png'
  },
  {
    name: "VA Loans",
    description:
      "VA loans, proudly offered by our mortgage brokerage, are exclusive benefits for eligible veterans, active-duty service members, and their families. These government-backed loans provide a path to homeownership with no down payment requirement, competitive interest rates, and flexible terms, honoring your service with a secure path to your dream home.",
    icon: GiReceiveMoney,
    image: '/va-loans.png'
  },
  {
    name: "First Time Home Buyers",
    description:
      "For first-time homebuyers, our mortgage brokerage provides tailored support and expert guidance throughout the homebuying journey. We offer specialized loan programs, valuable resources, and personalized advice to make your first home purchase a seamless and memorable experience.",
    icon: GiReceiveMoney,
    image: '/first-time-home-buyer.png'
  },
  {
    name: "USDA Loans",
    description:
      "USDA loans, available through our mortgage brokerage, are a government-backed option designed to support rural homebuyers. These loans offer attractive terms, including no down payment requirements, making them an excellent choice for those seeking homeownership in eligible rural and suburban areas.",
    icon: GiReceiveMoney,
    image: '/usda-loans.png'
  },
  {
    name: "Cash Out Refinances",
    description:
      "Cash-out refinancing, offered by our mortgage brokerage, is a smart financial strategy that allows you to access the equity in your home. With this option, you can replace your existing mortgage with a new one, receiving the difference in cash, which can be used for various financial goals, from home improvements to debt consolidation.",
    icon: LiaPiggyBankSolid,
    image: '/cash-out-refinance.png'
  },
  {
    name: "Home Equity Loans",
    description:
      "Home equity loans, available through our mortgage brokerage, are a valuable financial tool that lets you tap into the equity built in your home. These loans provide a lump sum of money with a fixed interest rate, ideal for financing major expenses like home renovations, education, or debt consolidation, using the value of your home as collateral.",
    icon: MdOutlineAddHomeWork,
    image: '/home-equity-loans.png'
  },
  {
    name: "Renovation Loans",
    description:
      "Renovation loans, offered by our mortgage brokerage, are a strategic financing option to transform your current property into your dream home. These loans provide the funding needed for renovations, repairs, and upgrades, allowing you to enhance your living space and increase the value of your property while maintaining manageable repayment terms.",
    icon: GrUserWorker,
    image: '/renovation-loans.png'
  },
  {
    name: "Investment Loans",
    description:
      "Investment loans, available through our mortgage brokerage, are tailored for real estate investors looking to grow their portfolio. These loans offer the capital needed to acquire income-producing properties, whether it's residential or commercial, with terms and rates structured to support your investment goals and maximize returns.",
    icon: FaMoneyBillAlt,
    image: '/investment-loans.png'
  },
  {
    name: "Multi-Unit Properties",
    description:
      "Multi-unit properties, available through our mortgage brokerage, are a lucrative investment opportunity for those looking to generate rental income. These properties, such as duplexes, triplexes, or apartment buildings, provide multiple rental units under one roof, creating a steady cash flow and potential for long-term financial growth for investors.",
    icon: GiReceiveMoney,
    image: '/multi-unit-properties.png'
  },
  {
    name: "DSCR Loans",
    description:
      "Debt Service Coverage Ratio (DSCR) loans, offered through our mortgage brokerage, are a specialized financing option tailored for commercial real estate investors. These loans focus on the property's ability to generate sufficient income to cover the debt payments, ensuring a sound financial foundation for your commercial property investment.",
    icon: GiReceiveMoney,
    image: '/dscr-loans.png'
  },
  {
    name: "New Construction",
    description:
      "New construction loans, available through our mortgage brokerage, are the ideal solution for building your dream home from the ground up. These loans offer the financial support needed to cover construction costs, and they can often be converted into a traditional mortgage once the home is completed, providing you with a seamless and efficient way to bring your vision to life.",
    icon: MdOutlineAddHomeWork,
    image: '/new-construction.png'
  },
  {
    name: "Manufacturer Homes",
    description:
      "Manufactured homes, available through our mortgage brokerage, are a cost-effective and convenient housing option for those seeking quality and affordability. These homes are built in a factory and transported to your desired location, offering a variety of floor plans and features to meet your housing needs, all with the convenience of flexible financing options.",
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
            <Link href='/contact' className="mt-4 flex text-center text-sm items-center uppercase font-bold flex-row gap-2 text-green-500 hover:underline">
              Learn More
              <span>
                <BiRightArrowAlt size="25" />
                </span>
            </Link>
            <div
            className='absolute xl:top-[35%] lg:top-[27%] md:top-[30%] top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-xl w-16 h-16 flex items-center justify-center' >
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