"use client"

import { useState, useEffect } from 'react';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';



const Header = () => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 45) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div className={shadow ? 'fixed top-0 bg-black h-4 w-full flex items-center justify-center gap-10 text-center py-4 px-4 z-[100]': 'bg-slate-900 h-4 w-full gap-10 flex items-center justify-center text-center py-4 px-4'}>
       <a className='sm:flex flex-row items-center hidden' href='mailto:ktabares@waterstreetmtg.com'>
        <AiOutlineMail className='text-white hover:text-white/70 text-lg mr-3' /> <p className='text-white hover:text-white/70 hidden text-sm sm:flex font-normal mr-10'>ktabares@wlmtg.com</p>
        </a>
    <a href='tel:+1813500-5479' className='flex'>
          <p className='text-white mr-3 text-sm'>Call Today</p><AiFillPhone className='text-white text-lg flex mr-2' /> <p className='text-white text-sm'> (813) 400-5479  </p>
          </a>   
            </div>
  )
}

export default Header;