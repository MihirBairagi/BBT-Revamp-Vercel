"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const uspList = [
  { icon: "/images/car-detailing/mod-icon-1.webp", title: "ceramic coating" },
  { icon: "/images/car-detailing/mod-icon-2.webp", title: "exhaust system" },
  { icon: "/images/car-detailing/mod-icon-3.webp", title: "alloy wheels" },
  { icon: "/images/car-detailing/mod-icon-4.webp", title: "interior upgrade" },
  { icon: "/images/car-detailing/mod-icon-5.webp", title: "car facelift kit" },
  { icon: "/images/car-detailing/mod-icon-6.webp", title: "engine upgrade" },
];

const ModifyRide = () => {
    useEffect(() => {
      AOS.init();
    }, []);
  return (
    <section className="bg-black">
      <div className="max-[3000px] mx-auto relative">
        <div className="sm:hidden">
          <img
            src="/images/car-detailing/modify-banner-dsektop.webp"
            alt="Background Image"
            className="w-full object-cover h-full min-h-[700px]"
          />
        </div>
        <div className="hidden sm:block">
          <img
            src="/images/car-detailing/modify-banner-dsektop.webp"
            alt="Background Image"
            className="w-full object-cover h-auto min-h-[600px]"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="container w-full h-full">
            <div
              className="flex h-full w-full flex-col justify-between py-[6rem] sm:justify-start  md:pt-[8rem]  xl:pt-[12rem] 2xl:pt-[14rem] 3xl:pt-[22rem] "
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
            >
              <div className="text-center text-white sm:text-left">
                <p className="text-[1.4rem] uppercase font-light xl:text-[1.37rem] 1xl:text-[1.6rem] 3xl:text-[2.2rem]">
                  Modify Ride
                </p>
                <h2 className="font-light [&>b]:font-normal leading-[1.2] mt-[1.5rem] tracking-[-2px] text-[2.9rem] xl:text-[3.75rem] 1xl:text-[4.2rem] 1xl:mt-[2rem] 2xl:text-[4.3rem] 3xl:text-[5.8rem] 3xl:tracking-[-3px] capitalize [&>br]:hidden sm:[&>br]:block">
                  Modify your ride <br /> <b>to savage levels</b>
                </h2>
                <p className="font-light text-[1.2rem] leading-[1.5] mt-[2rem] sm:mt-[1rem] sm:mb-[1.5rem] lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.5] xl:mb-[3rem] 1xl:text-[1.28rem] xl:mt-[3rem] 2xl:text-[1.4rem] 2xl:mb-[4.5rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0] [&>br]:hidden sm:[&>br]:block">
                  We're not just about making your car look pretty, we're all
                  about making it <br /> perform like a champ too. From
                  turbocharging your engine to upgrading your <br /> suspension
                  for that buttery smooth ride!
                </p>
                <div className="flex flex-wrap justify-start sm:grid sm:grid-cols-6 sm:gap-[1.5rem] md:grid-cols-7 md:max-w-[600px] sm:ml-[-2rem] xl:max-w-[530px] 1xl:ml-[-1rem] 1xl:max-w-[49%]">
                  {uspList.map((usp, index) => (
                    <div
                      key={index}
                      className="text-center w-[25%] px-[1rem] mt-[2rem] max-w-[11rem] sm:w-full sm:px-0"
                    >
                      <div className="w-[4rem] h-[4rem] mx-auto rounded-full border border-[#fff] flex justify-center items-center p-[1rem] 1xl:w-[5rem] 1xl:h-[5rem] 3xl:w-[6rem] 3xl:h-[6rem]">
                        <img
                          src={usp.icon}
                          alt="Icon"
                          className="h-auto w-full object-contain 1xl:max-h-[3rem]"
                        />
                      </div>
                      <h6 className="text-white text-[1.1rem] 3xl:text-[1.4rem] text-center capitalize font-normal mt-[1rem]">
                        {usp.title}
                      </h6>
                    </div>
                  ))}
                  <div className="text-center w-[25%] px-[1rem] mt-[2rem] max-w-[11rem] sm:w-full sm:px-0">
                    <div className="w-[4rem] h-[4rem] mx-auto rounded-full border border-[#fff] flex flex-col justify-center items-center pt-[1rem] px-[0.5rem] 1xl:w-[5rem] 1xl:h-[5rem] 3xl:w-[6rem] 3xl:h-[6rem]">
                      <h6 className="text-white text-[1.1rem] text-center capitalize font-normal leading-[1] 3xl:text-[1.4rem]">
                        24
                      </h6>
                      <p className="text-[1.7rem] font-[100] leading-[1] 3xl:text-[3rem]">+</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center sm:mt-[5rem] sm:text-left 3xl:mt-[5rem]">
                <Link
                  href="/modifications"
                  className="w-full max-w-[31rem] h-[5.5rem] flex justify-center items-center text-[1.4rem] bg-white border border-white text-black px-[3rem] py-[1rem] rounded-[3rem] mx-auto tracking-[-1px] font-medium sm:max-w-[20rem] sm:ml-0 xl:h-[4.5rem] xl:max-w-[17rem] xl:text-[1.2rem] 1xl:h-[5rem] 1xl:max-w-[20rem] 1xl:text-[1.4rem] 2xl:max-w-none 2xl:w-max 2xl:px-[6rem] 2xl:text-[1.5rem] 3xl:h-[6.5rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[7rem] hover:bg-black hover:text-white transition-all duration-500 ease-in-out"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModifyRide;
