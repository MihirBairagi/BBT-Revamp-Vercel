"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CooSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-white py-[4rem] sm:py-[8rem] 2xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="sm:hidden">
            <h2 className="text-[2.8rem] tracking-[-1.5px]">
              Mrs. Ritika Jatin Ahuja
            </h2>
            <p className="text-[1.2rem]">COO-Merchandise</p>
          </div>
          <div className="sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:flex-row-reverse">
            <div className="mt-[2rem] sm:mt-0 sm:w-[40%] lg:w-[46%]">
              <img
                src="/images/team-page/coo-img.webp"
                alt="Chairman"
                className="w-full h-auto object-cover rounded-[2rem]"
              />
            </div>
            <div className="sm:w-[50%] lg:w-[42%]">
              <div className="hidden sm:block">
                <h2 className="text-[2.8rem] tracking-[-1.5px] lg:text-[3rem] lg:font-[400] 1xl:text-[3.3rem] 2xl:text-[3.5rem] 3xl:text-[4.5rem] 3xl:tracking-[-3px]">
                  Mrs. Ritika Jatin Ahuja
                </h2>
                <p className="text-[1.2rem] lg:text-[1.5rem] 1xl:text-[1.7rem] 2xl:text-[1.8rem] 3xl:text-[2.2rem]">
                  COO-Merchandise
                </p>
              </div>
              <p className="font-light text-[1.2rem] leading-[1.4] mt-[2rem] lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.4] 1xl:text-[1.28rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0]">
                A budding entrepreneur, Mrs. Ritika Jatin Ahuja spearheads the
                Merchandising section at Big Boy Toyz. She has been an avid
                collector of miniature perfumes since childhood which she
                cultivated as a hobby and a passion. She has been awarded the
                ‘Certificate of Excellence’ by the Golden Book of World Records
                for the same. An interior designer by profession, she has also
                specialized in the interior designing of jets and yachts from
                the University of Arts London. The manner in which she has
                balanced motherhood and profession with great harmony and
                precision has been commendable.
              </p>
              <img
                src="/images/down-circle-arrow-white.webp"
                width="123"
                height="123"
                alt="Arrow Icon"
                className="hidden lg:inline-block mt-[3rem] object-contain lg:w-[7rem] invert xl:mt-[4.5rem] xl:w-[8.5rem] 2xl:w-[9.5rem] 3xl:w-[12.36rem] 3xl:mt-[7.5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CooSection;
