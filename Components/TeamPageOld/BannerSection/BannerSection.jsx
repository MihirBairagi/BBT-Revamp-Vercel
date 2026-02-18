"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-black">
      <div className="max-1920">
        <div className="relative">
          <div>
            <img
              src="/images/team-page/team-banner-desktop.webp"
              alt="Banner Image"
              width="1920"
              height="1100"
              className="hidden w-full h-auto sm:block sm:min-h-[600px] object-cover"
            />
            <img
              src="/images/team-page/team-banner-mobile.webp"
              alt="Banner Image"
              width="391"
              height="686"
              className="block w-full h-auto object-cover sm:hidden"
            />
          </div>
          <div className="text-center absolute w-full h-full left-0 top-0 flex flex-col justify-between pt-[9rem] pb-[5rem] sm:text-left sm:block sm:pt-[15rem] 1xl:pt-[17rem] 2xl:pt-[19rem] 3xl:pt-[24rem]">
            <div className="container text-white">
              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <p className="uppercase text-[1.12rem] mb-[1.5rem] lg:hidden">
                  the Team
                </p>
                <p className="hidden lg:block [&_img]:invert text-white text-left font-light mb-[1.5rem] breadcrumbs">
                  <Link
                    href="/"
                    className="text-[1rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]"
                  >
                    Home
                  </Link>
                  <img
                    src="/images/breadcrumb-arrow.webp"
                    className="object-contain w-2 xl:w-[0.6rem] inline-block mx-2 h-auto 1xl:mx-3 3xl:mx-4 3xl:w-[0.8rem]"
                    width="6"
                    height="11"
                    alt="Arrow Icon"
                  />
                  <span className="text-[1rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]">
                    The Team
                  </span>
                </p>
                <h1 className="font-extralight [&>b]:font-normal text-[3.6rem] tracking-[-2px] leading-[1.15] md:max-w-[40rem] lg:text-[4rem] xl:text-[5rem] xl:max-w-[56rem] 1xl:text-[5.45rem] 1xl:leading-[1.25] 2xl:text-[5.8rem] 3xl:max-w-[88rem] 3xl:text-[7.5rem] 3xl:leading-[1.15]">
                  Discover our team of luxury{" "}
                  <b>car enthusiasts ready to assist</b>
                </h1>
              </div>
            </div>
            <div className="container">
              <div
                className="flex justify-between px-[1.5rem] sm:max-w-[39rem] sm:mt-[5rem] sm:px-0 md:max-w-[32rem] lg:justify-start xl:max-w-none xl:mt-[7rem] 1xl:mt-[7.5rem] 3xl:mt-[9rem]"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <div className="w-[47.2%] bg-white py-[3rem] rounded-[1rem] h-[inherit] text-center lg:w-[11rem] lg:pt-[1.5rem] lg:pb-[1rem] lg:px-[1.5rem] xl:w-[12.5rem] xl:pt-[2.2rem] 1xl:w-[14rem] 2xl:w-[15rem] 2xl:pt-[2.8rem] 2xl:pb-[1.5rem] 3xl:w-[18rem] 3xl:h-[18.6rem]">
                  <img
                    src="/images/team-page/team-banner-icon-1.webp"
                    alt="Icon"
                    className="object-contain w-auto h-[5.7rem] inline-block lg:h-[4.2rem] xl:h-[4.6rem] 1xl:h-[6rem] 3xl:h-[6.7rem]"
                  />
                  <p className="text-[1.2rem] tracking-[-0.19px] mt-[2.2rem] font-medium [&>br]:hidden lg:[&>br]:block lg:mt-[1rem] lg:text-[1.1rem] lg:leading-[1.2] xl:text-[1.3rem] 1xl:text-[1.5rem] 3xl:text-[2rem]">
                    Management <br /> Team
                  </p>
                </div>
                <div className="w-[47.2%] bg-white bg-opacity-20 backdrop-blur-[2px] py-[3rem] rounded-[1rem] h-[inherit] text-center lg:w-[11rem] lg:pt-[1.5rem] lg:pb-[1rem] lg:px-[1.5rem] lg:ml-[1.5rem] xl:w-[12.5rem] xl:pt-[2.2rem] 1xl:w-[14rem] 1xl:ml-[2rem] 2xl:w-[15rem] 2xl:pt-[2.8rem] 2xl:pb-[1.5rem] 3xl:w-[18rem] 3xl:h-[18.6rem] 3xl:ml-[3rem]">
                  <img
                    src="/images/team-page/team-banner-icon-2.webp"
                    alt="Icon"
                    className="object-contain w-auto h-[5.7rem] inline-block lg:h-[4.2rem] xl:h-[4.6rem] 1xl:h-[6rem] 3xl:h-[6.7rem]"
                  />
                  <p className="text-[1.2rem] tracking-[-0.19px] mt-[2.2rem] font-medium [&>br]:hidden lg:[&>br]:block text-white lg:mt-[1rem] lg:text-[1.1rem] lg:leading-[1.2] xl:text-[1.3rem] 1xl:text-[1.5rem] 3xl:text-[2rem] ">
                    The <br /> Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
