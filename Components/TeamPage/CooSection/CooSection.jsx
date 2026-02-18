"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CooSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <div className="max-1920 relative">
        <div className="sm:hidden">
          <img
            src="/images/team/coo-banner-mobile.webp"
            alt="Coo Image"
            className="w-full object-cover h-full"
          />
        </div>
        <div className="hidden sm:block">
          <img
            src="/images/team/coo-banner-bg.webp"
            alt="Coo Image"
            className="w-full object-cover h-auto min-h-[500px]"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full sm:flex sm:items-center text-white py-[5rem] text-center sm:text-left">
          <div
            className="container"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="sm:w-[55%] lg:w-[45%] xl:w-[43%] 3xl:w-[42%]">
              <div>
                <h2 className="text-[2.8rem] tracking-[-1.5px] lg:text-[3rem] lg:font-[400] 1xl:text-[3.3rem] 2xl:text-[3.5rem] 3xl:text-[4.5rem] 3xl:tracking-[-3px]">
                  Mrs. Ritika Jatin Ahuja
                </h2>
                <p className="text-[1.2rem] lg:text-[1.5rem] 1xl:text-[1.7rem] 2xl:text-[1.8rem] 3xl:text-[2.2rem]">
                  COO-Merchandise
                </p>
              </div>
              <p className="font-light text-[1.4rem] leading-[1.4] mt-[3rem] [&>b]:font-normal sm:mt-[1rem] lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.4] xl:mt-[2rem] 1xl:text-[1.28rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0]">
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
              <div className="w-max mx-auto mt-[3rem] sm:ml-0">
                <img
                  src="/images/team/ritika-ahuja-signature.png"
                  alt="Signature"
                  className="h-auto w-[23rem] object-contain 1xl:w-[25rem] 2xl:w-[32rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CooSection;
