"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Chairman = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section>
      <div className="max-1920 relative">
        <div className="sm:hidden">
          <img
            src="/images/team/chairman-bg-mobile.webp"
            alt="Chairman Image"
            className="w-full object-cover h-full"
          />
        </div>
        <div className="hidden sm:block">
          <img
            src="/images/team/chairman-bg-desktop.webp"
            alt="Chairman Image"
            className="w-full object-cover h-auto min-h-[500px]"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full sm:flex sm:items-center text-white py-[5rem] text-center sm:text-left">
          <div className="container"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
          >
            <div className="sm:w-[60%] lg:w-[45%] xl:w-[39%] 2xl:w-[40%]">
              <div>
                <h2 className="text-[2.8rem] tracking-[-1.5px] lg:text-[3rem] lg:font-[400] 1xl:text-[3.3rem] 2xl:text-[3.5rem] 3xl:text-[4.5rem] 3xl:tracking-[-3px]">
                  S.L. Ahuja
                </h2>
                <p className="text-[1.2rem] lg:text-[1.5rem] 1xl:text-[1.7rem] 2xl:text-[1.8rem] 3xl:text-[2.2rem]">
                  Chairman
                </p>
              </div>
              <p className="font-light text-[1.4rem] leading-[1.4] mt-[3rem] [&>b]:font-normal sm:mt-[1rem] lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.4] xl:mt-[2rem] 1xl:text-[1.28rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0]">
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
              <div className="w-max mx-auto mt-[3rem] sm:ml-0">
                <img
                  src="/images/team/sl-ahuja-signature.png"
                  alt="Signature"
                  className="h-auto w-[15rem] object-contain 1xl:w-[18.5rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chairman;
