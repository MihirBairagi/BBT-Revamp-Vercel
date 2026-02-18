"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Chairman = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#F4F4F1] py-[5rem] sm:py-[8rem] xl:py-[12rem] 2xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="sm:hidden">
            <h2 className="text-[2.8rem] tracking-[-1.5px]">S.L. Ahuja</h2>
            <p className="text-[1.2rem]">Chairman</p>
          </div>
          <div className="sm:flex sm:flex-wrap sm:items-center sm:justify-between">
            <div className="relative pr-[3rem] pb-[9rem] mt-[2rem] sm:w-[48%] lg:w-[54%] lg:pr-[11.5%] lg:pb-[8rem] xl:pb-[9.5rem] 1xl:pb-[12.5rem]">
              <img
                src="/images/team-page/chairman-img.webp"
                alt="Chairman"
                className="w-full h-auto object-cover rounded-[2rem]"
              />
              <div className="bg-black absolute right-0 bottom-0 pt-[4rem] pb-[2rem] px-[2rem] w-[17rem] rounded-[1.5rem] lg:w-[22rem] lg:pt-[5rem] lg:px-[3rem] xl:w-[27.5rem] xl:pt-[6rem] xl:pr-[3.3rem] 1xl:w-[49%] 1xl:pt-[7rem] 1xl:pb-[3.5rem] 2xl:pl-[4rem] 2xl:pr-[4.5rem]">
                <div className="absolute top-[2rem] right-[2rem] w-max xl:top-[3rem] xl:right-[3rem] 3xl:top-[4rem] 3xl:right-[4rem]">
                  <img
                    src="/images/team-page/team-quote-white-1.webp"
                    alt="Quote Icon"
                    className="h-auto object-contain w-[2.19rem] lg:w-[2.7rem] xl:w-[3.5rem] 1xl:w-[4rem] 3xl:w-[5.4rem]"
                  />
                </div>
                <p className="text-[1.5rem] tracking-[-1px] leading-[1.4] pr-[1.1rem] text-white font-light lg:text-[1.8rem] xl:text-[2.4rem] 1xl:text-[2.8rem] 1xl:leading-[1.3] 3xl:text-[3.72rem] 3xl:tracking-[-1.2px]">
                  A man with a vision to create a venerable business of
                  excellence
                </p>
                <img
                  src="/images/team-page/team-chairman-bbt-logo.webp"
                  alt="BBT Logo"
                  className="inline-block mt-[2rem] h-auto object-contain w-[4.1rem] lg:w-[5.1rem] xl:w-[7rem] 1xl:w-[8rem] 1xl:mt-[3rem] 3xl:w-[10rem]"
                />
              </div>
            </div>

            <div className="sm:w-[48%] lg:w-[39.5%]">
              <div className="hidden sm:block">
                <h2 className="text-[2.8rem] tracking-[-1.5px] lg:text-[3rem] lg:font-[400] 1xl:text-[3.3rem] 2xl:text-[3.5rem] 3xl:text-[4.5rem] 3xl:tracking-[-3px]">
                  S.L. Ahuja
                </h2>
                <p className="text-[1.2rem] lg:text-[1.5rem] 1xl:text-[1.7rem] 2xl:text-[1.8rem] 3xl:text-[2.2rem]">
                  Chairman
                </p>
              </div>
              <p className="font-light text-[1.2rem] leading-[1.4] mt-[3rem] [&>b]:font-normal sm:mt-[1rem] lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.4] xl:mt-[2rem] 1xl:text-[1.28rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0]">
                <b>Mr. S. L. Ahuja</b>, B.Com, FCA, LL.B, is the driving force
                behind the company. A man with a vision to create a venerable
                business of excellence, he is the inspiration that spearheads
                the company's management and operations; strategizing and
                directing it through its next phase of growth. Born in Haryana,
                Mr Ahuja qualified as a Fellow Chartered Accountant with
                specialization in Finance. His keen business acumen helped him
                chart early success in consumer and automobile finance that led
                him to venture into business with the establishment of M/s Kiran
                Securities Pvt Ltd in the year 1994, venturing into consumer
                finance.
              </p>
              <img
                src="/images/down-circle-arrow-white.webp"
                width="123"
                height="123"
                alt="Arrow Icon"
                className="hidden lg:inline-block mt-[3rem] object-contain lg:w-[7rem] invert xl:mt-[4.5rem] xl:w-[8.5rem] 2xl:w-[9.5rem] 3xl:w-[12.36rem] 3xl:mt-[6.5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chairman;
