"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const styles = {
  uspItem:
    "w-2/6 px-[0.5rem] py-2 text-center border-l border-[#D9D9D9] first-of-type:border-l-0 sm:first-of-type:border-l sm:last-of-type:border-r 1xl:py-[1rem] 2xl:py-[1.5rem] 3xl:py-[2.5rem]",
  uspTitle:
    "text-[1.1rem] font-[300] [&>b]:font-[400] mt-[1rem] leading-[1.4] lg:text-[1.8rem] xl:text-[1.6rem] 1xl:text-[1.8rem] 1xl:mt-[1.5rem] 2xl:text-[2rem] 3xl:text-[2.4rem]",
  uspIcon:
    "object-contain inline-block w-[2.3rem] lg:w-[3.5rem] 1xl:w-[4rem] 1xl:max-h-[4rem] 2xl:w-[4.5rem] 3xl:w-[5.5rem]",
};

const BannerSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#1B1A1D] text-white relative">
      <div className="max-[3000px] mx-auto relative">
        <img
          src="/images/team/team-banner-mobile.webp"
          width="390"
          height="787"
          alt="Banner Image"
          className="block w-full object-cover sm:hidden"
        />
        <img
          src="/images/team/team-banner.webp"
          width="2500"
          height="1400"
          alt="Banner Image"
          className="w-full object-cover hidden sm:block"
        />
        <div className="absolute top-0 left-0 h-full w-full text-center pt-[16rem] pb-[7rem] flex flex-col justify-between sm:pt-[7rem] md:pb-[5rem] lg:pt-[12rem] lg:pb-[7rem] xl:pt-[10rem] 1xl:pt-[12rem] 2xl:pt-[13rem] 3xl:pt-[17rem] 3xl:pb-[10rem]">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="container">
              <p className="text-[1.12rem] uppercase mb-[1rem] lg:hidden">
                the Team
              </p>
              <p className="hidden lg:block [&_img]:invert text-white text-center font-light mb-[1.5rem] xl:mb-0 breadcrumbs">
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
              <h1 className="font-extralight [&>b]:font-normal text-[3.6rem] tracking-[-2px] leading-[1.15] lg:text-[4rem] xl:text-[5rem] 1xl:text-[5.45rem] 1xl:leading-[1.25] 2xl:text-[5.8rem] 3xl:text-[7.5rem] 3xl:leading-[1.15]">
                Discover <b>our team</b> <br /> at Big Boy Toyz
              </h1>
            </div>
          </div>
          <div className="px-[1rem] sm:w-[60%] sm:mx-auto lg:w-[60%] lg:max-w-[70rem] 2xl:max-w-[75rem] 3xl:max-w-[94rem]">
            <ul className="flex flex-wrap mt-16">
              <li className={styles.uspItem}>
                <img
                  src="/images/team/banner-usp-1.webp"
                  alt="USP Icon"
                  width="60"
                  height="60"
                  className={styles.uspIcon}
                />
                <p className={styles.uspTitle}>
                  Virtual{" "}
                  <b>
                    BBT <br /> Onboarding
                  </b>
                </p>
              </li>
              <li className={styles.uspItem}>
                <img
                  src="/images/team/banner-usp-2.webp"
                  alt="USP Icon"
                  width="60"
                  height="60"
                  className={styles.uspIcon}
                />
                <p className={styles.uspTitle}>
                  Freelance <b>Business Development</b>
                </p>
              </li>
              <li className={styles.uspItem}>
                <img
                  src="/images/team/banner-usp-3.webp"
                  alt="USP Icon"
                  width="60"
                  height="60"
                  className={styles.uspIcon}
                />
                <p className={styles.uspTitle}>
                  More than <b>100+ Car Enthusiasts</b>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
