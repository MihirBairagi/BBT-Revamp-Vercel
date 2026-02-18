"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FounderQuote = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-white">
      <div className="max-1920 relative overflow-hidden py-[6rem] lg:py-[10rem] 1xl:py-[13rem] 3xl:py-[15rem]">
        {/* <img
          src="/images/team/founder-quote-before.webp"
          alt=""
          className="hidden xl:inline-block object-contain absolute top-[-9rem] left-0 w-[40%] max-w-[40rem] 1xl:max-w-[45rem] 2xl:max-w-[48rem]"
        /> */}
        <div className="container">
          <div className="text-center lg:max-w-[58rem] lg:mx-auto xl:max-w-[86rem] 1xl:max-w-[101rem] 2xl:max-w-[109rem] 3xl:max-w-[119rem]">
            {/* <div className="mx-auto max-w-[15rem] xl:max-w-[20rem] 1xl:max-w-[31rem] 2xl:max-w-[34rem] 3xl:max-w-[38rem]">
              <img
                src="/images/team/drifting-car.webp"
                alt="Car Image"
                className="w-full object-contain h-auto"
              />
            </div> */}
            <p className="text-[1.9rem] mb-[3rem] leading-[1.3] xl:text-[2.8rem] xl:leading-[1.45] xl:mb-[4rem] 1xl:text-[3.3rem] 1xl:my-[5rem] 2xl:text-[3.5rem] 3xl:text-[4.5rem] 3xl:tracking-[-3px] italic">
              Driving dreams, one luxury car at a time. Experience excellence in
              every journey with our handpicked selection of top-tier used
              luxury cars. Welcome to the ultimate destination for automotive
              sophistication and unparalleled service.{" "}
            </p>
            <div className="flex flex-wrap items-center w-max mx-auto px-[4rem] pt-[3rem] border-t border-[#D9D9D9] 2xl:pt-[4rem]">
              <div className="w-[4.5rem] h-[4.5rem] xl:w-[6rem] xl:h-[6rem] overflow-hidden 1xl:w-[7rem] 1xl:h-[7rem] 2xl:w-[8rem] 2xl:h-[8rem] 3xl:w-[9.67rem] 3xl:h-[9.67rem]">
                <img
                  src="/images/team/founder-quote-avatar.webp"
                  alt="Avatar"
                  className="w-full object-cover rounded-[1rem] h-auto"
                />
              </div>
              <div className="text-left flex-1 ml-[1.5rem]">
                <h6 className="text-[1.4rem] xl:text-[1.6rem] 1xl:text-[1.9rem] 2xl:text-[2.4rem] 3xl:text-[2.9rem]">
                  Jatin Ahuja
                </h6>
                <p className="text-[1.2rem] xl:text-[1.25rem] 1xl:text-[1.28rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
                  Founder & Managing Director
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <img
          src="/images/team/founder-quote-after.webp"
          alt=""
          className="hidden xl:inline-block object-contain absolute bottom-[-8rem] right-[-3rem] w-[40%] max-w-[40rem] 1xl:max-w-[45rem] 2xl:max-w-[48rem]"
        /> */}
      </div>
    </section>
  );
};

export default FounderQuote;
