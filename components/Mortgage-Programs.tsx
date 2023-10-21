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
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

const programs = [
  {
    name: "First Time Home Buyers",
    icon: BiSolidBuildingHouse,
    description: "lorem ipsum dolor sit amet",
  },
  {
    name: "Apply for Loan",
    icon: RiMoneyDollarCircleFill,
  },
  {
    name: "Refinancing Your Home",
    icon: BsHouse,
  },
  {
    name: "Capital Management",
    icon: TbHandFinger,
  },
  {
    name: "Renovation House",
    icon: RxAvatar,
  },
  {
    name: "Refinance Advisor",
    icon: RxAvatar,
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
          <p className=" font-bold uppercase text-[#000080]">What&apos;s the Best</p>
          <div className="border-b lg:h-1/4 h-full border-2 border-[#000080] w-1/6" />
        </div>
        <h2
          className={cn(
            montserrat.className,
            "font-extrabold text-center text-4xl"
          )}
        >
          Mortgage Programs
        </h2>
        <p className="text-center leading-8 text-gray-600 mt-5 max-w-lg mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
          reiciendis ipsum quasi doloribus eligendi necessitatibus sunt optio
          magni iusto officiis! Aliquid, distinctio provident architecto a modi
          nesciunt beatae officia eum??
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
            {programContent && <h2>{programContent.description}</h2>}
            <Link href="/mortgage-programs">
              <div className="flex gap-2 items-center text-green-500 font-bold">
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
