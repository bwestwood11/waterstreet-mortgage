'use client'

import { Progress } from "@/components/ui/progress"

const ProgressBar = ({ currentPage, totalPages }: any) => {
    const progress = ((currentPage + 1) / totalPages) * 100;
    const percentage = Math.round(progress);
  
    return (
      <div className="px-10">
        <Progress style={{ width: `${progress}%` }} className="bg-black" />
        <div className="text-lg mt-4 text-gray-900 tracking-tight">
        {currentPage === 0 ? 'Get Started' : `${percentage}% Complete`}
        </div>
      </div>
    );
  };
  
  export default ProgressBar;