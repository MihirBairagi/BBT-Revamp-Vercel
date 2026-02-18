"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const LifeStyle = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#F3F3F3] py-[6rem] md:py-[10rem] xl:py-[12rem] 3xl:py-[16rem]">
      <div className="max-1920">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="md:flex md:justify-between md:items-center">
            <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] text-center tracking-[-0.1rem] mb-[2rem] md:text-left xl:text-[3.7rem] xl:[&>br]:hidden xl:max-w-[45rem] 1xl:text-[4.2rem] 1xl:max-w-[49rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] 2xl:max-w-[54rem] 3xl:max-w-[70rem]">
              Be a Part of The <br /> <b>BBT Fun, Work & Lifestyle</b>
            </h2>
            <div className="hidden md:block">
              <Link
                href="#"
                className="w-full h-[5rem] flex justify-center items-center text-[1.4rem] bg-black border border-black text-white px-[3rem] py-[1rem] rounded-[3rem] mx-auto sm:max-w-[300px] xl:max-w-none xl:px-[8rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:max-w-none 1xl:px-[9rem] 1xl:text-[1.3rem] 2xl:h-[6rem] 3xl:h-[7.37rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:min-w-[31rem] hover:bg-[#f1f1f1] hover:text-black transition-all duration-500 ease-in-out"
              >
                Join Now
              </Link>
            </div>
          </div>
          <div className="pt-[1.5rem] md:pt-[3rem] 3xl:pt-[5.5rem]">
            <div className="md:hidden">
              <img
                src="images/bbt-squad/squad-lifestyle-2.webp"
                alt="Lifestyle Image"
                className="w-full object-cover h-auto"
                width="510"
                height="344"
              />
            </div>
            <div className="flex flex-wrap justify-between my-[1.8rem] md:grid md:grid-cols-3 md:gap-[2rem] md:my-0 3xl:gap-[3rem]">
              <div className="w-[47.6%] md:w-auto">
                <img
                  src="images/bbt-squad/squad-lifestyle-1.webp"
                  alt="Lifestyle Image"
                  className="w-full object-cover h-auto"
                  width="505"
                  height="720"
                />
              </div>
              <div className="hidden md:block">
                <div>
                  <img
                    src="images/bbt-squad/squad-lifestyle-2.webp"
                    alt="Lifestyle Image"
                    className="w-full object-cover h-auto"
                    width="510"
                    height="344"
                  />
                </div>
                <div className="md:mt-[1.8rem] xl:mt-[2.5rem] 3xl:mt-[3.5rem]">
                  <img
                    src="images/bbt-squad/squad-lifestyle-3.webp"
                    alt="Lifestyle Image"
                    className="w-full object-cover h-auto"
                    width="510"
                    height="344"
                  />
                </div>
              </div>
              <div className="w-[47.6%] md:w-auto">
                <img
                  src="images/bbt-squad/squad-lifestyle-4.webp"
                  alt="Lifestyle Image"
                  className="w-full object-cover h-auto"
                  width="505"
                  height="720"
                />
              </div>
            </div>
            <div className="md:hidden">
              <img
                src="images/bbt-squad/squad-lifestyle-3.webp"
                alt="Lifestyle Image"
                className="w-full object-cover h-auto"
                width="510"
                height="344"
              />
            </div>
          </div>

          <div className="mt-[2.5rem] md:hidden">
            <Link
              href="#"
              className="w-full h-[5rem] flex justify-center items-center text-[1.4rem] bg-black text-white px-[3rem] py-[1rem] rounded-[3rem] mx-auto sm:max-w-[300px]"
            >
              Join Us Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeStyle;
