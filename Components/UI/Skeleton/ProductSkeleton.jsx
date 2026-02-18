"use client";
import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="w-full md:w-[48%] xl:w-[31%] [&_.item-divider]:hidden">
      <div className="pb-16 md:bg-[#fff] md:mt-[4rem] common-car-item transition-all duration-500 ease-in-out animate-pulse border-b border-b-zinc-500 lg:border-b-0">
        <div className="px-14 pt-16 md:px-10 1xl:pl-[3rem] 3xl:pl-[4rem]">
          {/* Registration Year */}
          <div className="inline-block bg-gray-200 text-white text-center rounded-2xl h-8 w-36"></div>
          
          {/* Title */}
          <div className="mt-4 bg-gray-200 h-8 w-full"></div>
          
          {/* Price */}
          <div className="mt-2 bg-gray-200 h-10 w-2/3 mb-12"></div>
        </div>

        {/* Image Placeholder */}
        <div className="relative">
          <div className="w-full h-[300px] bg-gray-200"></div>
        </div>

        <div className="px-16 pt-8 md:px-10 xl:px-[3rem] 1xl:px-[4rem] 3xl:px-[5rem] 1xl:pt-[2.5rem] 3xl:pt-[3rem]">
          {/* Car Info */}
          <ul className="flex carCommonInfo [&>*:first-child]:pl-0 [&>*:first-child]:border-0">
            <li className="w-2/6 pl-[1.7rem] border-l border-[rgb(207,207,207)] sm:pl-[1.2rem]">
              <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
              <div className="bg-gray-200 mt-4 mb-2 h-4 w-full"></div>
              <div className="bg-gray-200 h-6 w-2/3"></div>
            </li>
            <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
              <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
              <div className="bg-gray-200 mt-4 mb-2 h-4 w-full"></div>
              <div className="bg-gray-200 h-6 w-2/3"></div>
            </li>
            <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
              <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
              <div className="bg-gray-200 mt-4 mb-2 h-4 w-full"></div>
              <div className="bg-gray-200 h-6 w-2/3"></div>
            </li>
          </ul>

          {/* Call Buttons */}
          <div className="flex items-center justify-between callBtnGroup mt-12 overflow-hidden flex-wrap">
            <div className="flex-grow">
              <div className="bg-gray-200 h-[4.5rem] rounded-[0.5rem]"></div>
            </div>
            <div className="callBtnRight ml-4">
              <div className="w-[4.5rem] h-[4.5rem] bg-gray-200 rounded-[5px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductSkeletonGroup = ({ count = 6 }) => {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
    </>
  );
};

export default ProductSkeleton; 