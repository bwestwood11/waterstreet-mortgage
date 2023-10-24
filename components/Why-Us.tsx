import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"] });

const WhyUs = () => {
  return (
    <div className="w-full h-full py-32">
      <div className="max-w-7xl mx-auto flex gap-10 lg:flex-row flex-col px-6 lg:px-8 relative isolate overflow-hidden">
        <div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.indigo.100),white)] opacity-20 lg:left-36" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center" />
        <div className="basis-1/2 w-full mx-auto flex justify-center items-center">
          <div className="col-end-1 lg:row-span-4 w-3/4 h-full ">
            <Image
              src="/happy-family-3.png"
              alt="happy family"
              width={2000}
              height={2000}
              className="rounded-lg shadow-slate-900 h-full md:h-3/4 xl:h-full hover:scale-105 ease-in-out duration-500 transform"
              priority
            />
          </div>
        </div>
        <div className="basis-1/2 flex items-start">
          <div className="border-l h-full lg:h-1/4 border-4 border-[#000080] mr-4" />
          <div className="flex flex-col">
            <p className="mb-1">Waterstreet Mortgage</p>
            <h3 className={cn(
            montserrat.className,
            "font-extrabold text-4xl"
          )}>
              Why Should You Choose Us?
            </h3>
            <p className="mt-5 text-sm leading-7 text-gray-600">
              At Waterstreet Mortgage, we are your top choice for all your
              mortgage needs in Tampa Bay. Our team is not only licensed to
              conduct business in the state of Florida, ensuring that we have a
              deep understanding of the local market, but we also make ourselves
              available 24/7 to provide you with a better buying experience. We
              understand that securing a mortgage can be a time-sensitive
              process, so we offer same-day pre-approvals to expedite your
              journey to homeownership.
            </p>
            <p className="mt-5 text-sm leading-7 text-gray-600">
              What sets us apart is our genuine
              passion for real estate; we love attending open houses and sharing
              our knowledge with you to help you find the perfect home. Our
              commitment to a seamless mortgage experience is further reflected
              in our user-friendly loan portal, which simplifies the application
              and approval process. Additionally, we take great pride in our
              Pre-Qualified Shining Star Hero&apos;s program, which provides special
              support to heroes with no existing realtor relationships, making
              your dream of homeownership a reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
