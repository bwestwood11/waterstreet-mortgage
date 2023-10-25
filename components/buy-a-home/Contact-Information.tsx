import { cn } from "@/lib/utils";
import { AiOutlineHome } from "react-icons/ai";
import { BiBuildingHouse } from "react-icons/bi";
import { MdApartment } from "react-icons/md";
import { Montserrat } from "next/font/google";
import { useState } from "react";
import { FaUmbrellaBeach } from "react-icons/fa";

const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {
  data: HomeBuyer | RefinanceProspect;
  setData: React.Dispatch<React.SetStateAction<HomeBuyer | RefinanceProspect>>;
};


const ContactInfo = ({ data, setData }: Props) => {

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Name Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Name
        </label>
        <input
          onChange={(e) => setData({ ...data, name: e.target.value as string})}
     
          type="text"
          id="name"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      {/* Email Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Email
        </label>
        <input
          onChange={(e) => setData({ ...data, email: e.target.value as string })}
         
          type="email"
          id="email"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      {/* Phone Number Section */}
      <div className="mt-1 relative">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Phone Number
        </label>
        <input
          onChange={(e) => setData({ ...data, phone: e.target.value as string })}
            type="text"
          id="phone"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>

    </div>
  );
};

export default ContactInfo;
