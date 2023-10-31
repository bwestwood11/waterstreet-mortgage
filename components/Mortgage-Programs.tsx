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
import { MdOutlineConstruction } from "react-icons/md";

const montserrat = Montserrat({ subsets: ["latin"] });

const programs = [
  {
    name: "First Time Home Buyer",
    icon: BiSolidBuildingHouse,
    description:
      "A first-time homebuyer loan is a specialized mortgage program designed to assist individuals purchasing their first home. It typically offers favorable terms, including lower down payments and interest rates, to make homeownership more accessible for those who are new to the real estate market.",
  },
  {
    name: "Second Mortgage Program",
    icon: RiMoneyDollarCircleFill,
    description:
      "You can either choose a home equity loan or a Home Equity Line of Credit aka a HELOC. A home equity loan allows homeowners to borrow money using the equity in their property as collateral. These loans are often used for large expenses such as home improvements, debt consolidation, or education costs, with the house's value determining the borrowing limit. A Home Equity Line of Credit (HELOC) is a flexible financial tool that lets homeowners access a revolving line of credit based on the equity in their home. It's a convenient way to fund ongoing projects or expenses, offering the freedom to borrow as needed while paying interest only on the amount drawn.",
  },
  {
    name: "Refinancing Your Home",
    icon: BsHouse,
    description:
      "Cash-out refinancing allows homeowners to refinance their mortgage for an amount greater than what they owe on their home, enabling them to receive cash in hand by borrowing against the equity they've built. In contrast, rate and term refinancing involves replacing an existing mortgage with a new one, primarily to secure a more favorable interest rate or to adjust the loan term without taking cash out, potentially reducing monthly payments or paying off the loan faster.",
  },
  {
    name: "Down Payment Assistance Program",
    icon: TbHandFinger,
    description:
      "Down payment assistance programs offer financial support to prospective homebuyers by providing funds to cover a portion of their down payment, making homeownership more affordable and accessible. These initiatives are especially beneficial for those with limited savings, helping them achieve their goal of owning a home.",
  },
  {
    name: "Bridge Loans",
    icon: MdOutlineConstruction,
    description:
      'Bridge loans are short-term financing options designed to "bridge" the gap between the purchase of a new property and the sale of an existing one. They provide homeowners with quick access to capital to facilitate a smooth transition without the need for a long-term commitment. These loans usually have a duration of 12 to 18 months and are great options for those who have investment properties',
  },
  {
    name: "Conventional Loans",
    icon: BiCheck,
    description:
      "These loans are typically offered by private lenders and banks, and they follow the guidelines set by Fannie Mae and Freddie Mac. Conventional loans are a popular choice for homebuyers with strong credit profiles and the ability to make a down payment.",
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

  const splitDescriptionSecondMortgage =
    programContent?.name === "Second Mortgage Program"
      ? programContent.description.split("borrowing limit.")
      : null;

  const splitDescriptionRefinancing =
    programContent?.name === "Refinancing Your Home"
      ? programContent.description.split("they've built.")
      : null;

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
          We take pride in offering the finest loan options available in the
          great state of Florida, providing our clients with top-notch financial
          solutions tailored to their specific needs. Our commitment to
          excellence sets us apart as the premier choice for those seeking the
          best in lending services.
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
            {splitDescriptionSecondMortgage ? (
              <>
                <p className="text-gray-600 mt-3 leading-7 tracking-tight">
                  {splitDescriptionSecondMortgage[0]}borrowing limit.
                </p>
                <p className="text-gray-600 mt-3 leading-7 tracking-tight">
                  {splitDescriptionSecondMortgage[1]}
                </p>
              </>
            ) : splitDescriptionRefinancing ? (
              <>
                <p className="text-gray-600 mt-3 leading-7 tracking-tight">
                  {splitDescriptionRefinancing[0]}they've built
                </p>
                <p className="text-gray-600 mt-3 leading-7 tracking-tight">
                  {splitDescriptionRefinancing[1]}
                </p>
              </>
            ) : (
              <p className="text-gray-600 mt-3 leading-7 tracking-tight">
                {programContent && programContent.description}
              </p>
            )}
            <Link href="/loan-programs">
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
