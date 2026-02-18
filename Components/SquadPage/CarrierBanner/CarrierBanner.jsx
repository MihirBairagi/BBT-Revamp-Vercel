"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const CarrierBanner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section>
      <div className="max-w-[3000px] mx-auto relative">
        <div className="sm:hidden">
          <img
            src="/images/bbt-squad/squad-carrier-banner-mobile.webp"
            alt="Background Image"
            className="w-full object-cover h-full block"
          />
        </div>
        <div className="hidden sm:block">
          <img
            src="/images/bbt-squad/squad-carrier-banner-desktop.webp"
            alt="Background Image"
            className="w-full object-cover h-auto block min-h-[600px]"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="container w-full h-full"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="flex h-full w-full flex-col justify-between py-[8rem] sm:justify-center sm:max-w-[400px] sm:w-[50%] sm:ml-auto lg:justify-start lg:pt-[8rem] lg:mr-[8rem] xl:pt-[10rem] 1xl:max-w-[450px] 1xl:mr-[9rem] 1xl:pt-[11rem] 2xl:max-w-[485px] 3xl:max-w-[585px] 3xl:pt-[14rem] 3xl:mr-[12rem]">
              <div className="text-center text-white sm:text-left">
                <h2 className="font-light [&>b]:font-normal leading-[1.2] mt-[1.5rem] tracking-[-1px] xl:text-[3.7rem] 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem]">
                  Looking For <b>A Full Time Carrier At BBT.</b>
                </h2>
                <p className="font-light text-[1.2rem] mt-[1.5rem] max-w-[29.5rem] mx-auto sm:max-w-none xl:text-[1.1rem] 1xl:text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.6rem] 3xl:mt-[2rem]">
                  BBT Squad is a new platform inviting car enthusiasts to pursue
                  their passion for automobiles without compromising on their
                  existing work areas. You can exploit the opportunity of
                  earning by procuring cars for us.
                </p>
              </div>
              <div className="text-center sm:text-left sm:mt-[3rem] 3xl:mt-[4rem]">
                <Link
                  href="/career#openingSection"
                  className="w-full max-w-[31rem] h-[5rem] flex justify-center items-center text-[1.4rem] bg-white border border-white px-[3rem] py-[1rem] rounded-[3rem] mx-auto tracking-[-1px] font-medium sm:max-w-[25rem] sm:ml-0 xl:text-[1.2rem] xl:h-[4rem] xl:max-w-[20rem] 1xl:max-w-[24rem] 3xl:max-w-[31rem] 3xl:h-[5rem] 3xl:text-[1.4rem] hover:bg-[#111111] hover:text-white transition-all duration-500 ease-in-out"
                >
                  View Openings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarrierBanner;
