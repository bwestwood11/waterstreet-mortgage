'use client'

import { cn } from "@/lib/utils";
import { AiOutlineHome } from "react-icons/ai";
import { BiBuildingHouse } from "react-icons/bi";
import { MdApartment } from "react-icons/md";
import { Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {
  data: HomeBuyer | RefinanceProspect;
  setData: React.Dispatch<React.SetStateAction<HomeBuyer | RefinanceProspect>>;
};

const homes = [
  {
    type: "Single Family",
    icon: AiOutlineHome,
  },
  {
    type: "Multi-Family",
    icon: BiBuildingHouse,
  },
  {
    type: "Townhouse",
    icon: AiOutlineHome,
  },
  {
    type: "Condominium",
    icon: MdApartment,
  },
];

const TypeofHome = ({ data, setData }: Props) => {
    const [selectedType, setSelectedType] = useState<string | null>(null);


  return (
    <div className="w-full bg-white">
      <div className="max-w-2xl mx-auto grid sm:grid-cols-4 gap-8 px-10 sm:px-0">
        {homes.map((home, i) => (
          <div
            key={i}
            className={`flex flex-col items-center cursor-pointer border-2 border-black shadow-xl rounded-full sm:p-5 p-2 group transition-transform transform ${
                selectedType === home.type
                  ? 'bg-gradient-to-br from-[#000080] via-[#1E3A8A] to-[#000080] text-white'
                  : 'hover:bg-gradient-to-br from-[#000080] via-[#1E3A8A] to-[#000080] hover:text-white'
              }`}
            onClick={(e) => {
              console.log("Selected value:", home.type);
              setData({ ...data, propertyType: home.type });
              setSelectedType(home.type);
            }}
          >
            <div className="flex flex-row justify-center">
              <home.icon className="text-6xl text-[#000080] group-hover:text-white" />
            </div>
            <p
              className={cn(
                montserrat.className,
                "text-center text-sm font-extrabold"
              )}
            >
              {home.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeofHome;
