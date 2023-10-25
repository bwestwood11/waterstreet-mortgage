"use client";

import React, { useState } from "react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { BsHouse } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { TbHandFinger } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import Image from "next/image";
import { BiRightArrowAlt, BiCheck } from "react-icons/bi";
import Link from "next/link";
import {MdOutlineConstruction} from "react-icons/md";


const montserrat = Montserrat({ subsets: ["latin"] });

const programs = [
  {
    name: "First Time Home Buyer",
    icon: BiSolidBuildingHouse,
    description: "A first-time homebuyer loan is a specialized mortgage program designed to assist individuals purchasing their first home. It typically offers favorable terms, including lower down payments and interest rates, to make homeownership more accessible for those who are new to the real estate market.",
  },
  {
    name: "Apply for Loan",
    icon: RiMoneyDollarCircleFill,
    description: "To apply for a mortgage loan, one typically starts by gathering financial documents, including income and credit history details. Next, you submit an application to us, who we assesses your eligibility, and if approved, guide you through the home loan process, from pre-approval to closing on your new home."
  },
  {
    name: "Refinancing Your Home",
    icon: BsHouse,
    description: "Refinancing a home allows homeowners to secure a new mortgage with more favorable terms, often leading to lower monthly payments and potentially saving money in the long run. It's a smart financial strategy to consider when seeking to optimize your home financing."
  },
  {
    name: "Capital Management",
    icon: TbHandFinger,
    description: "Capital management for home loans involves effectively handling and optimizing financial resources related to mortgage lending. It encompasses actions like prudent allocation of funds, risk assessment, and strategic decision-making to ensure the stability and profitability of a home loan portfolio for lenders or financial institutions. Efficient capital management is crucial in the housing finance industry to maintain healthy lending practices and manage potential risks."
  },
  {
    name: "Renovation House",
    icon: MdOutlineConstruction,
    description: "Renovating a house is a transformative process that revitalizes and enhances a property, increasing its value and making it a more comfortable and aesthetically pleasing place to call home! Whether it's a small update or a complete overhaul, let us help you secure the appropriate loan necessary."
  },
  {
    name: "Conventional Loans",
    icon: BiCheck,
    description: "These loans are typically offered by private lenders and banks, and they follow the guidelines set by Fannie Mae and Freddie Mac. Conventional loans are a popular choice for homebuyers with strong credit profiles and the ability to make a down payment."
  },
];

type ProgramType = {
  name: string;
  icon: React.ElementType;
};

const MortgagePrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramType | null>(
    programs[0]
  );

  const handleProgramClick = (program: ProgramType) => {
    console.log(program.name);
    setSelectedProgram(program);
  };

  const programContent = selectedProgram
    ? programs.find((program) => program.name === selectedProgram.name)
    : null;

  const formattedProgramName = programContent
    ? programContent.name.toLowerCase().replace(/ /g, "-")
    : "";

  const imageName = `${formattedProgramName}.png`;

  return (
    <div className="w-full bg-white h-full flex py-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex max-w-md mb-4 mx-auto text-center justify-center gap-3 items-center">
          <p className=" font-bold uppercase text-[#000080]">
            What&apos;s the Best
          </p>
          <div className="border-b lg:h-1/4 h-full border-2 border-[#000080] w-1/6" />
        </div>
        <h2
          className={cn(
            montserrat.className,
            "text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-5xl"
          )}
        >
          Mortgage Programs
        </h2>
        <p className="text-center leading-8 text-gray-600 mt-5 max-w-lg mx-auto">
        We take pride in offering the finest loan options available in the great state of Florida, providing our clients with top-notch financial solutions tailored to their specific needs. Our commitment to excellence sets us apart as the premier choice for those seeking the best in lending services.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-6xl mx-auto mt-8">
          {programs.map((program, index) => (
            <div
              key={program.name}
              className={`flex flex-col cursor-pointer items-center justify-center bg-gray-100 lg:p-4 xl:p-5 p-3 rounded-lg ${
                selectedProgram === program
                  ? "bg-gradient-to-br from-[#000080] via-[#1E3A8A] to-[#000080] text-white"
                  : ""
              }`}
              onClick={() => handleProgramClick(program)}
            >
              <program.icon
                className={`h-12 w-12 text-black ${
                  selectedProgram === program ? "text-white" : "text-black"
                }`}
              />
              <p
                className={`text-center mt-3 font-bold ${
                  selectedProgram === program ? "text-white" : "text-black"
                }`}
              >
                {program.name}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-white shadow-xl max-w-6xl gap-5 mx-auto flex flex-col sm:flex-row mt-6 p-4 sm:p-6">
          <div className="basis-1/2 w-full">
            {programContent && (
              <Image
                src={`/${imageName}`}
                alt={programContent.name}
                width={800}
                height={800}
                priority
                className="rounded-lg"
              />
            )}
          </div>
          <div className="basis-1/2">
            {programContent && (
              <h2
                className={cn(montserrat.className, "font-extrabold text-xl")}
              >
                {programContent.name}
              </h2>
            )}
            {programContent && <p className="text-gray-600 mt-3 leading-7 tracking-tight">{programContent.description}</p>}
            <Link href="/mortgage-programs">
              <div className="flex gap-2 items-center mt-8 text-green-500 font-bold">
                <span>
                  <BiRightArrowAlt size="25" />
                </span>
                Read More
              </div>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgagePrograms;
