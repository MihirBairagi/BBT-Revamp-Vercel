import Link from "next/link";
import React from "react";

const OurShowrooms = () => {
  return (
    <section>
      <div className="max-1920 relative">
        <div className="sm:hidden">
          <img
            src="/images/filter-showroom-bg-mob.webp"
            alt="Background Image"
            className="w-full object-cover h-full"
          />
        </div>
        <div className="hidden sm:block">
          <img
            src="/images/filter-showroom-bg-desk.webp"
            alt="Background Image"
            className="w-full object-cover h-auto min-h-[400px]"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="container w-full h-full">
            <div className="flex h-full w-full flex-col justify-between py-[6rem] sm:justify-start xl:pt-[7rem] 1xl:pt-[8rem] 2xl:pt-[9rem] 3xl:pt-[12rem]">
              <div className="text-center text-white">
                <p className="text-[1.4rem] uppercase font-light xl:text-[1.37rem] 1xl:text-[1.6rem] 3xl:text-[2.2rem]">
                  Enhanced Customer Journey
                </p>
                <h2 className="font-light [&>b]:font-normal leading-[1.2] mt-[1.5rem] tracking-[-2px] text-[2.9rem] xl:text-[3.75rem] 1xl:text-[4.2rem] 1xl:mt-[2rem] 2xl:text-[4.3rem] 3xl:text-[5.8rem]">
                  For Better Experience Visit <br /> <b> Our Showroom. </b>
                </h2>
              </div>
              <div className="text-center sm:mt-[3rem] 3xl:mt-[5rem]">
                <Link
                  href="/showrooms"
                  className="w-full max-w-[31rem] h-[5.5rem] flex justify-center items-center text-[1.4rem] bg-white px-[3rem] py-[1rem] rounded-[3rem] mx-auto tracking-[-1px] font-medium sm:max-w-[27.3rem] xl:h-[4.5rem] xl:max-w-[17rem] xl:text-[1.2rem] 1xl:h-[5rem] 1xl:max-w-[20rem] 1xl:text-[1.4rem] 2xl:max-w-none 2xl:w-max 2xl:px-[6rem] 2xl:text-[1.5rem] 3xl:h-[6.5rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[7rem] hover:bg-[#f1f1f1] transition-all duration-500 ease-in-out"
                >
                 Our Showrooms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurShowrooms;
