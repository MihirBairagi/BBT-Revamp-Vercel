"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useCompareContextOptional } from "../../app/lib/contexts/CompareContext";

const CompareFloatingBubble = () => {
  const [isHovered, setIsHovered] = useState(false);
  const compareContext = useCompareContextOptional();

  // Don't render if no context or no cars to compare
  if (!compareContext || compareContext.compareCount === 0) {
    return null;
  }

  const { compareCount, goToCompare } = compareContext;

  return (
    <div
      className="fixed bottom-[40px] right-[3rem] z-50 3xl:right-[4rem] floating-compare-btns transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute top-[-80%] right-0 mb-3 px-4 py-3 bg-white text-[#838383] rounded-lg whitespace-nowrap transform opacity-100 transition-all duration-200 shadow-xl border border-gray-200 text-[11px] xl:text-[14px]">
          {compareCount} car{compareCount > 1 ? "s" : ""} in compare
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
        </div>
      )}

      {/* Floating Bubble */}
      <button
        onClick={goToCompare}
        className={`
          relative bg-white text-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center group hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 p-[12px] w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] xl:p-[15px] 3xl:w-[70px] 3xl:h-[70px]`}
      >
        {/* Car Icon */}
        <div className="relative">
          <img
            src="/images/compare-floating-icon.png"
            alt="Compare Cars"
            width="36"
            height="32"
            className="object-contain w-full group-hover:scale-[1.05] transition-transform duration-400"
          />
        </div>

        {/* Count Badge */}
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-medium leading-[1] rounded-full w-[18px] h-[18px] flex items-center justify-center border-2 border-white xl:w-[20px] xl:h-[20px] xl:text-[12px] shadow-md">
          {compareCount}
        </div>

        {/* Pulse Animation Ring */}
        <div className="absolute inset-0 rounded-full bg-gray-300 animate-ping opacity-30"></div>
      </button>
    </div>
  );
};

export default CompareFloatingBubble;
