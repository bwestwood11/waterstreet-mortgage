"use client";

import TypeofHome from "@/components/buy-a-home/Type-of-Home";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import toast from "react-hot-toast";
import { Montserrat } from "next/font/google";
import IntendedUse from "@/components/buy-a-home/Intended-Use";
import PurchasePrice from "@/components/buy-a-home/Purchase-Price";
import DownPayment from "@/components/buy-a-home/Down-Payment";
import Veteran from "@/components/buy-a-home/Veteran-Or-Not";
import FirstHome from "@/components/buy-a-home/First-Home";
import CreditScore from "@/components/buy-a-home/Credit-Score";
import ContactInfo from "@/components/buy-a-home/Contact-Information";
import ProgressBar from "@/components/Progress-Bar";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({ subsets: ["latin"] });

const BuyAHomePage = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState<HomeBuyer | RefinanceProspect>({
    propertyType: "",
    intendedUse: "",
    purchasePrice: "",
    downPayment: "",
    military: "",
    firstTimeBuyer: "",
    creditScore: "",
    name: "",
    email: "",
    phone: "",
  });

  const router = useRouter();

  const SubmitUser = async (e:any) => {
    e.preventDefault();
    const response = await fetch('/api/buy-a-home', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    } )

  }

  const titles = ["Type of Home?", "What is the intended use of the property?", "Purchase Price?", "Down Payment %", "Veteran or Active Duty Military?", "Is this your 1st home purchase?", "Your Credit Score?", "Contact Information" ];

  const PageDisplay = () => {
    if (page == 0) {
      return <TypeofHome data={data} setData={setData} />;
    } else if (page == 1) {
      return <IntendedUse data={data} setData={setData} />;
    } else if (page == 2) {
       return <PurchasePrice data={data} setData={setData} />; 
    } else if (page == 3) {
       return <DownPayment data={data} setData={setData} />; 
    } else if (page == 4) {
        return <Veteran data={data} setData={setData} />; 
     } else if (page == 5) {
        return <FirstHome data={data} setData={setData} />; 
     } else if (page == 6) {
        return <CreditScore data={data} setData={setData} />; 
     } else if (page == 7) {
        return <ContactInfo data={data} setData={setData} />; 
     }

  };

  return (
  <div className='bg-white w-full h-screen min-h-full flex flex-col pt-20 sm:px-6 lg:px-8 z-100 md:h-screen'>
   <ProgressBar currentPage={page} totalPages={titles.length} />
  <div className='sm:mx-auto sm:w-full'>
     <h1 className='mt-6 text-center text-3xl font-extrabold tracking-tight text-gray-900'>
      {titles[page]}
     </h1>
  </div>
  <div className='mt-8 sm:mx-auto sm:w-full'>
    <div className='bg-white py-8 px-4 sm:px-10'>
    <div>{PageDisplay()}</div>
    <div className='flex flex-row gap-3 mx-auto w-full justify-center pt-8'>
      <Button 
      disabled={page == 0}
      onClick={() => {
        setPage((currPage) => currPage - 1)
      }}
      >
        Back</Button>
      <Button 
       onClick={(e) => {
          if (page === titles.length - 1){
            toast.success("Thank you for your submission! We will be in contact with you via phone or email.");
            SubmitUser(e);
             router.push('/')
          } else {
            setPage((currPage) => currPage + 1)
          }
       }}
      >
        {page === titles.length - 1 ? "Submit" : "Next"}</Button>
    </div>
    </div>
  </div>
</div>)
};

export default BuyAHomePage;
