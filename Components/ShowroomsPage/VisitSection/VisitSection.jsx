"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const VisitSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-black py-[6rem] text-white relative lg:pt-[8rem] lg:pb-[0] xl:pt-[10rem] 1xl:pt-[12rem] 3xl:pt-[16rem]">
      <div className="max-1920 relative overflow-hidden lg:pb-[15rem] 1xl:pb-[22rem]">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="visit-wrapper sm:max-w-[450px] sm:mx-auto lg:max-w-[100%] lg:flex lg:flex-wrap lg:justify-between relative z-10">
            <div className="lg:w-[50%]">
              <h2 className="font-normal [&>b]:font-normal tracking-[-1px] leading-[1.2] lg:font-light lg:[&>b]:font-medium">
                Luxury car showroom packed with{" "}
                <b>bmw, audi range rover more...</b>
              </h2>
              <p className="font-light text-[1.2rem] my-[2.5rem] lg:text-[1.45rem] xl:text-[1.3rem] 1xl:text-[1.4rem] 1xl:leading-[1.9] 2xl:text-[1.6rem] 3xl:text-[1.9rem] 3xl:my-[3rem]">
                Confused which Car you should buy? CarDekho helps compare two or
                more cars of your choice with the best car comparison tool.
                Compare cars in India on various parameters like price,
                features, specifications, fuel consumption, mileage,
                performance, dimension, safety & more to make a smart choice for
                you.
              </p>
              <ul>
                <li className="flex mb-[0.6rem] xl:mb-[0.8rem] 3xl:mb-[1rem]">
                  <img
                    src="/images/showroom-page/visit-usp-sign.webp"
                    alt="Sign Icon"
                    width="23"
                    height="15"
                    className="w-[1.3rem] h-auto object-contain 1xl:w-[1.8rem] 2xl:w-[2.1rem] 3xl:w-[2.35rem]"
                  />
                  <p className="flex-1 font-light text-[1.2rem] pl-[1rem] xl:text-[1.5rem] 1xl:text-[1.7rem] 2xl:text-[1.9rem] 3xl:text-[2.2rem]">
                    Six-DVD changer.
                  </p>
                </li>
                <li className="flex mb-[0.6rem] xl:mb-[0.8rem]">
                  <img
                    src="/images/showroom-page/visit-usp-sign.webp"
                    alt="Sign Icon"
                    width="23"
                    height="15"
                    className="w-[1.3rem] h-auto object-contain 1xl:w-[1.8rem] 2xl:w-[2.1rem] 3xl:w-[2.35rem]"
                  />
                  <p className="flex-1 font-light text-[1.2rem] pl-[1rem] xl:text-[1.5rem] 1xl:text-[1.7rem] 2xl:text-[1.9rem] 3xl:text-[2.2rem]">
                    Rear Theatre Configuration.
                  </p>
                </li>
                <li className="flex mb-[0.6rem] xl:mb-[0.8rem]">
                  <img
                    src="/images/showroom-page/visit-usp-sign.webp"
                    alt="Sign Icon"
                    width="23"
                    height="15"
                    className="w-[1.3rem] h-auto object-contain 1xl:w-[1.8rem] 2xl:w-[2.1rem] 3xl:w-[2.35rem]"
                  />
                  <p className="flex-1 font-light text-[1.2rem] pl-[1rem] xl:text-[1.5rem] 1xl:text-[1.7rem] 2xl:text-[1.9rem] 3xl:text-[2.2rem]">
                    USB & Bluetooth with Assist.
                  </p>
                </li>
                <li className="flex mb-[0.6rem] xl:mb-[0.8rem]">
                  <img
                    src="/images/showroom-page/visit-usp-sign.webp"
                    alt="Sign Icon"
                    width="23"
                    height="15"
                    className="w-[1.3rem] h-auto object-contain 1xl:w-[1.8rem] 2xl:w-[2.1rem] 3xl:w-[2.35rem]"
                  />
                  <p className="flex-1 font-light text-[1.2rem] pl-[1rem] xl:text-[1.5rem] 1xl:text-[1.7rem] 2xl:text-[1.9rem] 3xl:text-[2.2rem]">
                    RR all headrests - Contrast.
                  </p>
                </li>
                <li className="flex mb-[0.6rem] xl:mb-[0.8rem]">
                  <img
                    src="/images/showroom-page/visit-usp-sign.webp"
                    alt="Sign Icon"
                    width="23"
                    height="15"
                    className="w-[1.3rem] h-auto object-contain 1xl:w-[1.8rem] 2xl:w-[2.1rem] 3xl:w-[2.35rem]"
                  />
                  <p className="flex-1 font-light text-[1.2rem] pl-[1rem] xl:text-[1.5rem] 1xl:text-[1.7rem] 2xl:text-[1.9rem] 3xl:text-[2.2rem]">
                    Silver Satin Bonnet finish.
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-[4rem] lg:mt-0 lg:w-[40%]">
              <div className="bg-[#1F1F1F] py-[2.5rem] px-[3.5rem] rounded-[0.8rem] lg:max-w-[358px] lg:ml-auto lg:flex lg:flex-wrap lg:flex-col lg:justify-between lg:min-h-[38.5rem] xl:max-w-[24rem] xl:px-[2rem] xl:min-h-[35rem] 1xl:max-w-[28rem] 1xl:min-h-[38rem] 1xl:px-[2.5rem] 2xl:max-w-[30rem] 3xl:max-w-[37rem] 2xl:min-h-[45rem] 3xl:min-h-[55rem] 3xl:px-[3rem] 3xl:py-[3rem]">
                <div>
                  <h3 className="font-normal [&>b]:font-normal text-[2.6rem] mb-[1.5rem] leading-[1.4] xl:font-light xl:text-[2.2rem] 1xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.8rem]">
                    Schedule A <br /> <b>Visit Talk To Us</b>
                  </h3>
                  <p className="font-light text-[1.2rem] mb-[2.5rem] lg:text-[1.45rem] xl:text-[1.1rem] 1xl:text-[1.27rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
                    Confused which Car you should buy? CarDekho helps compare
                    two or more cars of your choice with the best car comparison
                    tool.
                  </p>
                </div>
                <Link
                  href="/contact-us"
                  className="flex flex-wrap justify-between items-center w-full h-[4.8rem] bg-white border border-white text-black px-[3rem] rounded-[0.6rem] xl:h-[4rem] xl:px-[2rem] 1xl:h-[4.4rem] 2xl:h-[4.8rem] 3xl:h-[6rem] hover:bg-[#222222] hover:text-white transition-all duration-500 ease-in-out group"
                >
                  <span className="text-[1.4rem] xl:text-[1.3rem] 1xl:text-[1.5rem] 2xl:text-[1.65rem] 3xl:text-[1.8rem]">
                    Talk to Us
                  </span>
                  <img
                    src="/images/showroom-page/visit-message-icon.webp"
                    alt="Message icon"
                    width="25"
                    height="22"
                    className=" object-contain h-auto w-[1.9rem] 3xl:w-[2.45rem] group-hover:invert transition-all duration-500 ease-in-out group"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute left-0 bottom-0 w-full ">
          <div
            className="w-full flex flex-wrap justify-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <img
              src="/images/showroom-page/visit-thumb.webp"
              alt="Thumbnail"
              className="w-full object-contain h-auto lg:w-[57%] lg:ml-[-8rem]"
              width="1088"
              height="596"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
