"use client";

import React, { useEffect } from "react";

import AOS from "aos";
import Link from "next/link";

const usps = [
  {
    title: `<b>10+ Years of Trust</b> – With over a decade of global presence, BBT has built a reputation for reliability, excellence, & customer satisfaction.`,
  },
  {
    title: `<b>Premium Expertise</b> – As specialists in luxury cars, SUVs, and pickups, every vehicle we deliver is carefully curated, inspected, and certified to meet the highest international standards.`,
  },
  {
    title: `<b>Our Commitment</b> – More than selling cars, we deliver transparency, quality, and dependable support, so every customer drives with confidence.`,
  },
];

const AboutSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="hilux-about-section py-[7rem] xl:py-[10rem] 3xl:py-[13rem]">
      <div className="container">
        <div
          className="flex flex-wrap justify-between"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <h2 className="w-[90%] text-[2.8rem] font-[300] text-white [&>b]:text-[400] xl:w-[50%] xl:text-[3.5rem] leading-[1.2] 2xl:text-[5rem] 2xl:leading-[1.1] 3xl:text-[5.8rem] 2xl:w-[55%] 2xl:tracking-tighter 3xl:leading-[1.3]">
            Driven by Experience, Powered by Passion – <b>Big Boy Toyz</b>
          </h2>
          <div className="w-full mt-[2rem] text-[1.6rem] font-[300] leading-[1.6] text-[#F3F3F3] xl:w-[40%] xl:mt-0 1xl:text-[1.45rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
            At Big Boy Toyz (BBT), we go beyond selling cars — we curate
            world-class automobiles backed by over a decade of trust &
            expertise. With thousands of happy customers across continents, BBT
            is known for transparency, quality, and reliable after-sales
            support.
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse mt-[5rem] lg:flex-row lg:justify-between lg:items-center 2xl:mt-[7rem]">
          <ul className="mt-[2rem] hilux-about-usp lg:w-[55%] lg:mt-0 xl:w-[45%]">
            {usps.map((usp, index) => (
              <li
                key={index}
                className="flex pt-[2rem]"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <span className="count inline-block w-[6rem] text-[4rem] xl:text-[5rem] xl:w-[9rem] leading-[1] font-medium 2xl:text-[3.5rem] 2xl:w-[7rem] 3xl:text-[4rem] 3xl:w-[8rem]">
                  0{index + 1}
                </span>
                <div
                  className="flex-[1] text-[1.6rem] text-white font-[300] leading-[1.6] pb-[2rem] border-b border-b-[#D9D9D9] 1xl:text-[1.45rem] 2xl:text-[1.5rem] 3xl:text-[1.9rem]"
                  dangerouslySetInnerHTML={{ __html: usp.title }}
                ></div>
              </li>
            ))}
          </ul>
          <div
            className="w-full text-center flex flex-col items-center lg:w-[35%] xl:w-[40%]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <img
              src="/images/landing-pages/hilux/passion-bbt-logo.webp"
              alt="BBT Logo"
              className="object-contain inline-block max-w-[26rem] lg:w-full lg:max-w-none"
            />

            <Link href="/collection" className="bg-white text-black text-[1.8rem] py-[1.4rem] w-full px-[3rem] text-center max-w-[400px] mx-auto mt-[5rem] rounded-[1rem] hidden lg:inline-block lg:w-max lg:px-[5rem] hover:bg-black hover:text-white">Explore Collection</Link>

          </div>
        </div>

        <div className="flex justify-center mt-[2rem] lg:hidden">
          <Link href="/collection" className="bg-white text-black text-[1.8rem] py-[1.4rem] w-full px-[3rem] text-center max-w-[400px] mx-auto mt-[5rem] rounded-[1rem] inline-block">Explore Collection</Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
