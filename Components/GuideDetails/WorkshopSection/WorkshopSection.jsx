"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const WorkshopSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-black">
      <div className="max-[3000px] mx-auto relative">
        <div className="sm:hidden">
          <img
            src="/images/guide-detail/gd-workshop-bg-mob.webp"
            alt="Background Image"
            className="w-full object-cover h-full"
          />
        </div>
        <div className="hidden sm:block">
          <img
            src="/images/guide-detail/gd-workshop-bg.webp"
            alt="Background Image"
            className="w-full object-cover h-auto min-h-[500px]"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="container w-full h-full">
            <div
              className="flex h-full w-full flex-col justify-between py-[6rem] sm:justify-start sm:max-w-[60%] lg:pt-[8rem] xl:max-w-[43%] xl:pt-[12rem] 2xl:pt-[14rem] 3xl:pt-[22rem] 3xl:max-w-[44%]"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div className="text-center text-white lg:max-w-[440px] 3xl:max-w-[530px] sm:text-left">
                <p className="text-[1.4rem] uppercase font-light xl:text-[1.37rem] 1xl:text-[1.6rem] 3xl:text-[2.2rem]">
                  Workshop
                </p>
                <h2 className="font-light [&>b]:font-normal leading-[1.2] mt-[1.5rem] tracking-[-2px] text-[2.9rem] xl:text-[3.75rem] 1xl:text-[4.2rem] 1xl:mt-[2rem] 2xl:text-[4.3rem] 3xl:text-[5.8rem] 3xl:tracking-[-3px]">
                  We Are A Team <b>Best Car Doctors In Town</b>
                </h2>
                <p className="font-light text-[1.2rem] leading-[1.5] mt-[2rem] sm:mt-[1rem] sm:mb-[1.5rem] lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.5] xl:mb-[3rem] 1xl:text-[1.28rem] 2xl:text-[1.4rem] 2xl:mb-[4.5rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0]">
                  A budding entrepreneur, Mrs. Ritika Jatin Ahuja spearheads the
                  Merchandising section at Big Boy Toyz. She has been an avid
                  collector of miniature perfumes since childhood which she
                  cultivated as a hobby and a passion
                </p>
              </div>
              <div className="text-center sm:mt-[3rem] sm:text-left 3xl:mt-[5rem]">
                <Link
                  href="/workshop"
                  className="w-full max-w-[31rem] h-[5.5rem] flex justify-center items-center text-[1.4rem] bg-white border border-white text-black px-[3rem] py-[1rem] rounded-[3rem] mx-auto tracking-[-1px] font-medium sm:max-w-[27.3rem] sm:ml-0 xl:h-[4.5rem] xl:max-w-[17rem] xl:text-[1.2rem] 1xl:h-[5rem] 1xl:max-w-[20rem] 1xl:text-[1.4rem] 2xl:max-w-none 2xl:w-max 2xl:px-[6rem] 2xl:text-[1.5rem] 3xl:h-[6.5rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[7rem] hover:bg-[#111111] hover:text-white transition-all duration-500 ease-in-out"
                >
                  Workshop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
