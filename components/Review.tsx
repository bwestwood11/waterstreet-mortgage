'use client'

import Image from "next/image";
import { BsQuote } from "react-icons/bs";
import { PiSealCheckFill } from "react-icons/pi";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import {FcGoogle} from 'react-icons/fc'


const reviews = [
  {
    id: 1,
    name: "joey Albino",
    text: "Our company has been using competitive edge junk removal for a few years now. There is no other company we will use because these guys are the most efficient, reliable, trustworthy, and over all good people do keep doing business with. I will highly recommend these guys to anyone in the construction and roofing business",
    date: '2 months ago',
    image: '/joey.png'
  },
  {
    id: 2,
    name: "Dylan Rutledge",
    text: "Very impressed with Brian and his team! I&apos;ve had horror stories with other companies in the past. I can honestly say I will never go to another company again. They were on time, respectful, great customer service, and got the job done a lot quicker than I was expecting. Would highly recommend this company!",
    date: 'a month ago',
    image: '/dylan.png'
  },
  {
    id: 3,
    name: "Sally Welch",
    text: "Professional. Prompt. Friendly and nice. Extremely competitive rates! Don&apos;t hesitate to hire competitive edge, junk removal… They did a super terrible job for me!! I sent out a request for the job on Sunday evening and they were at my house Tuesday morning.",
    date: 'a month ago',
    image: '/sally.png'
  },
];

const Reviews = () => {
  const [expandedState, setExpandedState] = useState<{ [key: number]: boolean }>({});

  const GoToGoogle = () => {
    window.open('https://g.page/r/CQXPOeJYAYouEB0/review')
  }

  const toggleExpanded = (reviewId:number) => {
    setExpandedState((prevState) => ({
      ...prevState,
      [reviewId]: !prevState[reviewId],
    }));
  };

  return (
    <div className="w-full sm:h-full bg-white pt-12 sm:pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col text-center">
          <h3 className="text-[#1F2937] font-bold">Excellent</h3>
          <div className="flex max-w-xl mx-auto">
          <AiFillStar className="text-[#F59E0B] text-4xl mx-auto mt-2" />
          <AiFillStar className="text-[#F59E0B] text-4xl mx-auto mt-2" />
          <AiFillStar className="text-[#F59E0B] text-4xl mx-auto mt-2" />
          <AiFillStar className="text-[#F59E0B] text-4xl mx-auto mt-2" />
          <AiFillStar className="text-[#F59E0B] text-4xl mx-auto mt-2" />
          </div>
          <p className="text-sm mt-1">Based on <span className="font-bold">3 reviews</span></p>
          <Image
            src="/google-logo-transparent.png"
            alt="user1"
            width={110}
            height={110}
            className="mx-auto mt-4"
          />
          <button onClick={GoToGoogle} className="border md:w-1/6  mx-auto rounded-md bg-white hover:bg-white/50 text-sm mt-3 py-2 px-3">
            Leave us a review
           <FcGoogle className="inline-block ml-2" />
            </button>
        </div>
        {/* Review Cards */}
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 mt-8 px-10">
          
          {reviews.map((review, index) => (
            <div key={review.id}>
              <div
                className="flex flex-col items-center w-full shadow-xl rounded-lg border-gray-50 border-2 bg-white pt-4 pb-1 px-8" 
                style={{ height: expandedState[review.id] ? "auto" : "250px" }}
              >
                <div className="flex items-center w-full justify-between">
                  <div className="flex gap-3 items-center">
                  <Image
                  src={review.image}
                  alt="user1"
                  width={25}
                  height={25}
                  />
                  <p className="font-bold text-sm">{review.name}</p> 
                  </div>
                  
                  <Image 
                  src="/google-icon-review.png"
                  alt="user1"
                  width={25}
                  height={25}
                  />
                  </div>
                     <p className="w-full">
                  <span className="text-xs text-gray-400">{review.date}</span>
                     </p>
                     <div className="flex w-full items-start mb-2">
          <AiFillStar className="text-[#F59E0B] text-xl mt-2" />
          <AiFillStar className="text-[#F59E0B] text-xl mt-2" />
          <AiFillStar className="text-[#F59E0B] text-xl mt-2" />
          <AiFillStar className="text-[#F59E0B] text-xl mt-2" />
          <AiFillStar className="text-[#F59E0B] text-xl mt-2" />
          </div>
          <div  style={{
                  maxHeight: expandedState[review.id] ? "none" : "200px", // Adjust the max-height as needed
                  overflowY: "hidden", // Enable the vertical scroll bar
                  scrollbarWidth: "none", // Firefox
                  scrollbarColor: "transparent transparent", // Firefox
                }}>
                <p className="text-sm lg:text-base">{review.text}</p>  
              </div>
              {review.text.length > 200 && (
                <button className="text-gray-400 text-sm py-1 w-full text-left" onClick={() => toggleExpanded(review.id)}>
                  {expandedState[review.id] ? "Read Less" : "Read More"}
                </button>)}
          </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reviews
