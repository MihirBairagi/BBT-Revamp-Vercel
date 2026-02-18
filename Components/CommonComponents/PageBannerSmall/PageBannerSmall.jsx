"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const PageBannerSmall = ({ data }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="text-white bg-black">
      <div className="max-[3000px] mx-auto">
        <div className="relative">
          <div>
            <img
              src={data.bannerImage}
              alt="Banner Image"
              width="2500"
              height="1200"
              className="hidden w-full h-auto sm:block sm:min-h-[400px] object-cover"
            />
            <img
              src={
                data?.bannerImageMobile
                  ? data.bannerImageMobile
                  : data.bannerImage
              }
              alt="Banner Image"
              width="391"
              height="686"
              className="block w-full h-auto object-cover sm:hidden min-h-[600px]"
            />
          </div>
          <div className=" text-center absolute w-full h-full left-0 top-0 flex flex-col justify-start pt-[12rem] pb-[5rem] sm:justify-center">
            <div
              className="px-14 md:text-left md:px-[8rem] lg:px-0 lg:w-[82%] lg:mx-auto"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              {data.breadcrumb && (
                <p className="text-center md:text-left [&_img]:invert text-white font-light">
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
                    {data.breadcrumb}
                  </span>
                </p>
              )}

              <h1
                className="font-extralight capitalize text-[4.5rem] tracking-tighter leading-[1] mt-6 [&>b]:font-normal lg:mt-10 lg:text-[4.5rem] xl:text-[5rem] xl:leading-[1.2] xl:mt-[1rem] 1xl:text-[5.5rem] 2xl:text-[6rem] 3xl:text-[7.5rem] 3xl:mt-[2rem]"
                dangerouslySetInnerHTML={{ __html: data.title }}
              ></h1>
              {data?.description && (
                <p
                  className="text-[1.2rem] mt-[2rem] [&>br]:hidden sm:[&>br]:block xl:mt-[1.2rem] xl:text-[1.1rem] 1xl:text-[1.22rem] 2xl:text-[1.3rem] 3xl:text-[1.6rem]"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                ></p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBannerSmall;
