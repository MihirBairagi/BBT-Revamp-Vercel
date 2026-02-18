"use client";

import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import BbtFeaturedSlider from "../../CommonComponents/BbtFeaturedSlider/BbtFeaturedSlider";

const data = [
  {
    title: "Join Us",
    thumbnail: "/images/team-page/bbt-world-1.webp",
    url: "#",
  },
  {
    title: "Why us",
    thumbnail: "/images/team-page/bbt-world-2.webp",
    url: "#",
  },
  {
    title: "Join Us",
    thumbnail: "/images/team-page/bbt-world-1.webp",
    url: "#",
  },
];

const BbtFeatured = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-white py-20 lg:py-40 xl:py-48 2xl:py-56 3xl:py-72">
      <div className="max-1920">
        <div className="pl-8 md:pl-[2rem] lg:flex lg:justify-between items-center lg:pl-40 xl:pl-48 1xl:pl-52 2xl:pl-56 3xl:pl-64">
          <div
            className="section-heading md:pl-8 lg:w-30% lg:pl-0"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <img
              src="/images/down-circle-arrow-white.webp"
              width="123"
              height="123"
              alt="Arrow Icon"
              className="hidden lg:inline-block mb-[2rem] object-contain lg:w-[7rem] invert 1xl:w-[9rem] 1xl:mb-[3rem] 3xl:w-[12.4rem]"
            />
            <h2 className="mb-[2rem] text-black lg:leading-[1.2] lg:text-[3rem] 3xl:text-[4.5rem]">
              From The <br className="hidden lg:block" /> BBT World
            </h2>
            <p className="hidden lg:block text-black leading-[1.4] lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.4] 1xl:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
              Get your dream luxury car in 4 easy steps at <br /> Big Boy Toyz,
              India's trusted used car portal.
            </p>
          </div>

          {/* Featured Slider */}
          <BbtFeaturedSlider sliderList={data} />
        </div>
      </div>
    </section>
  );
};

export default BbtFeatured;
