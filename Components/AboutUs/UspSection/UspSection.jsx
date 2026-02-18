"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const uspList = [
  {
    title: "7600+ Happy Customers",
    description:
      "At BBT, we offer you comparisons across various parameters thereby helping you choose the ideal one.",
    thumbnail: "/images/about-us/about-usp-img-1.webp",
  },
  {
    title: "Asia's Biggest Studio",
    description:
      "At BBT, we offer you comparisons across various parameters thereby helping you choose the ideal one.",
    thumbnail: "/images/about-us/about-usp-img-2.webp",
  },
  {
    title: "30 Luxury Car Brands",
    description:
      "At BBT, we offer you comparisons across various parameters thereby helping you choose the ideal one.",
    thumbnail: "/images/about-us/about-usp-img-3.webp",
  },
  {
    title: "151 Quality Checkpoints",
    description:
      "At BBT, we offer you comparisons across various parameters thereby helping you choose the ideal one.",
    thumbnail: "/images/about-us/about-usp-img-4.webp",
  },
];

const UspSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-black py-[5rem] text-white lg:py-[8rem] xl:py-[14rem] 1xl:pb-[17rem] 3xl:pt-[17rem] 3xl:pb-[20rem]">
      <div className="max-1920">
        <div className="container">
          <div
            className="w-[84%] mx-auto lg:w-full"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="text-center xl:text-left xl:w-[39%]">
              <h2 className="font-normal xl:text-[4.2rem] 3xl:text-[5.8rem]">
                Our USP
              </h2>
              <p className="font-light text-[1.2rem] leading-[1.5] mt-[1rem] md:text-[1.4rem] lg:mt-[2rem] xl:text-[1.3rem] 1xl:text-[1.4rem] 2xl:text-[1.5rem] 3xl:text-[1.8rem]">
                Since then our mission has been to provide quality exotic cars
                with highly personalized care at a competitive price. Creating a
                new benchmark for excellence in every aspect of our business.
              </p>
            </div>
   

            {/* DESKTOP USP LIST */}
            <div className="block lg:flex flex-wrap justify-between mt-[4rem] xl:mt-0 xl:[&>*:nth-child(even)]:translate-y-[-20rem]">
              {uspList.map((usp, index) => (
                <div className=" w-full lg:w-[46.5%]" key={index + 1}>
                  <div className="border border-[#343434] rounded-[1rem] overflow-hidden mt-[2.5rem] xl:mt-[9rem] 1xl:rounded-[2rem]">
                    <div className="p-0">
                      <img
                        src={usp.thumbnail}
                        alt="USP Image"
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="py-[3.5rem] px-[2rem] border-0 xl:py-[4rem] xl:px-[5rem] 1xl:py-[5.5rem] 1xl:px-[6rem] 3xl:pl-[7rem] 3xl:pr-[8rem] 3xl:py-[6.5rem]">
                      <div className="relative">
                        <h3 className="text-[2rem] font-normal mb-[1.5rem] tracking-[-1px] pr-[1.5rem] xl:text-[2.7rem] 2xl:text-[3rem] 3xl:text-[3.8rem]">
                          {usp.title}
                        </h3>
                        <p className="font-light text-[1.2rem] leading-[1.4] md:text-[1.4rem] xl:text-[1.25rem] 1xl:text-[1.35rem] 2xl:text-[1.5rem] 3xl:text-[1.8rem] xl:leading-[1.5]">
                          {usp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UspSection;
