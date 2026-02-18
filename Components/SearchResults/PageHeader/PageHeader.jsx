import React from "react";
import Link from "next/link";
import Image from "next/image";

const PageHeader = ({ totalResults = 0, searchQuery = '', filters = {} }) => {
  // Determine the search display text
  const getSearchDisplayText = () => {
    if (searchQuery) {
      return `"${searchQuery}"`;
    }
    
    // If no search query but has filters, show filter type
    if (filters.brand) {
      return `"${filters.brand}"`;
    }
    
    if (filters.category) {
      return `"${filters.category}"`;
    }
    
    return '"All Cars"';
  };

  const displayText = getSearchDisplayText();

  return (
    <section className="bg-white md:bg-[#f3f3f3]">
      <div className="container">
        <div className="pt-[3rem] pb-[2rem] xl:pt-[5rem] md:border-b md:border-[#D9D9D9] xl:border-0 xl:pb-0 1xl:pt-[9rem] 3xl:pt-[11rem]">
          <p className="flex flex-wrap items-center font-normal">
            <Link
              href="/"
              className="text-lg md:text-xl xl:text-[1.2rem] 1xl:text-[1.4rem] 3xl:text-[1.8rem]"
            >
              Home
            </Link>
            <Image
              src="/images/breadcrumb-arrow.webp"
              className="object-contain w-2 xl:w-[0.6rem] inline-block mx-2 h-auto 1xl:mx-3 3xl:mx-4 3xl:w-[0.8rem]"
              width="6"
              height="11"
              alt="Arrow Icon"
            />
            <span className="text-lg md:text-xl xl:text-[1.2rem] 1xl:text-[1.4rem] 3xl:text-[1.8rem]">
              Search
            </span>
          </p>
          <div className="mt-5 xl:mt-[1.8rem] 1xl:mt-[2rem] 3xl:mt-[3rem]">
            <h2 className="font-[200] [&>b]:font-[400] text-[4.5rem] leading-[1.1] tracking-[-2px] xl:text-[5rem] xl:tracking-[-3px] 1xl:text-[5.5rem] 2xl:text-[5.8rem] 3xl:text-[7.5rem] 3xl:tracking-[-5px]">
              Search By <b>{displayText}</b>
            </h2>
            {totalResults > 0 && (
              <p className="text-[1.5rem] leading-0 xl:text-[1.7rem] 1xl:text-[1.8rem] 2xl:text-[1.9rem] 3xl:text-[2rem] font-medium xl:font-normal pt-[2rem] border-t border-[#D9D9D9] mt-[2rem] xl:mt-[5rem] 1xl:mt-[8rem] 3xl:pt-[4rem]">
                Total {totalResults} Results Found
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
