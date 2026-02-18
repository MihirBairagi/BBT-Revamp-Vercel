"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const BannerSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="text-white bg-black">
      <div className="max-w-[1920px] mx-auto relative">
        <div>
          <img
            src="/images/modifications/modification-banner-desktop.webp"
            alt="Banner Image"
            width="2500"
            height="1400"
            className="hidden w-full h-full min-h-[800px] sm:block object-cover"
          />
          <img
            src="/images/modifications/modification-banner-desktop.webp"
            alt="Banner Image"
            width="391"
            height="686"
            className="block w-full h-[95vh] min-h-[450px] object-cover sm:hidden"
          />
        </div>
        <div className=" text-center absolute w-full h-full left-0 top-0 flex flex-col justify-between pt-[16rem] pb-16 sm:text-left sm:pt-[15rem] md:pt-[12rem] lg:pt-[13rem] 1xl:pt-[16rem] 2xl:pt-[18rem] 3xl:pt-[21rem] 3xl:pb-[6rem]">
          <div className="container">
            <div
              className="md:text-left "
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <p className="text-center sm:block [&_img]:invert text-white sm:text-left font-light breadcrumbs">
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
                  Modification
                </span>
              </p>
              <h1 className="font-extralight text-[4.5rem] tracking-tighter leading-[1] mt-6 [&>b]:font-normal lg:mt-10 lg:text-[4.5rem] xl:text-[5rem] xl:leading-[1.2] xl:mt-[1rem] 1xl:text-[5.5rem] 2xl:text-[6rem] 3xl:text-[7.5rem] 3xl:mt-[2rem] [&>br]:hidden sm:[&>br]:block">
                <b>Luxury Cars,</b> <br /> Perfected Beyond Stock
              </h1>
              <p className="text-[1.2rem] leading-[1.6] mt-[2rem] [&>br]:hidden sm:[&>br]:block xl:text-[1.1rem] xl:mt-[2.5rem] 1xl:text-[1.22rem] 2xl:text-[1.3rem] 3xl:text-[1.7rem] tracking-normal 1xl:leading-[1.8]">
                Pushing boundaries of Speed, Style & Sound. <br /> All your
                modification needs curated under one roof.
              </p>
              <div className="mt-[5rem] xl:mt-[8rem] 1xl:mt-[11rem] 2xl:mt-[13rem] 3xl:mt-[16rem]">
                <p className="font-medium sm:text-left mb-[2rem] text-[1.3rem] xl:tracking-wide 1xl:text-[1.4rem] 2xl:text-[1.6rem] 3xl:text-[2rem] 2xl:mb-[3rem]">
                  Modification Available For
                </p>
                <ul className="grid grid-cols-2 gap-x-[1rem] justify-between text-white max-w-[300px] mx-auto sm:ml-0 xl:gap-x-[1.5rem] 1xl:max-w-[400px] 1xl:gap-x-[2.5rem] 3xl:max-w-[500px]">
                  <li className={styles.uspItem}>
                    <img
                      src="/images/modifications/banner-icon-1.webp"
                      alt=""
                      className={styles.uspIcon}
                    />
                    <p className={styles.uspTitle}>Super Cars</p>
                  </li>
                  <li className={styles.uspItem}>
                    <img
                      src="/images/modifications/banner-icon-2.webp"
                      alt=""
                      className={styles.uspIcon}
                    />
                    <p className={styles.uspTitle}>Super Bikes</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`text-center hidden lg:flex flex-col justify-center items-center scroll-animation`}
          >
            <img
              src="/images/banner-scroll-icon-white.webp"
              alt="Scroll Down"
              width="19"
              height="29"
              className="inline-block object-contain w-8 xl:w-[1.5rem] 1xl:w-6 3xl:w-[1.9rem]"
            />
            <span className="uppercase mt-5 text-base xl:text-[0.8rem] 3xl:text-[0.9rem]">
              Scroll Down
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;

const styles = {
  uspItem:
    "px-[1.5rem] py-[2rem] rounded-[8px] mod-banner-card flex flex-col items-center min-h-[12rem] justify-center 1xl:py-[3rem] 2xl:py-[3.5rem] 3xl:py-[4rem] 3xl:pt-[4.5rem] 3xl:rounded-[15px]",
  uspIcon:
    "w-[80%] h-auto max-h-[3rem] block object-contain xl:w-[70%] 1xl:max-h-[3.5rem] 2xl:max-h-[3.8rem] 3xl:max-h-[5rem]",
  uspTitle:
    "font-medium text-[1.2rem] mt-[1rem] xl:mt-[2rem] xl:text-[1.25rem] 1xl:text-[1.4rem] 1xl:mt-[2.5rem] 2xl:text-[1.6rem] 3xl:text-[2rem] 3xl:mt-[3rem]",
};
