"use client";

import React, { useEffect } from "react";

import AOS from "aos";

const usps = [
  { title: `<span>Engine:</span> 2.4L / 2.8L Turbo Diesel` },
  { title: `<span>Drive Type: </span> 4x2 / 4x4 <br /> 2 Variants` },
  { title: `<span>Seating Capacity: </span> 5 Persons` },
  { title: `<span>Towing Capacity:</span> Up to 3,500 kg` },
  { title: `<span>Transmission: </span> 6S Manual / Automatic` },
];

const ReliabilitySection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#181819] pt-[7rem] 3xl:pt-[10rem]">
      <div className="container">
        <div className="flex flex-wrap lg:items-end lg:justify-between">
          <div className="w-full lg:w-[55%]">
            <h2
              className="text-[2.8rem] font-[300] text-white [&>b]:text-[400] xl:text-[4rem] leading-[1.2] xl:[&>b]:block 2xl:text-[5rem] 2xl:leading-[1.1] 3xl:text-[5.8rem] 3xl:leading-[1.3]"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <b>Unmatched Strength</b> You Can Rely On
            </h2>
            <div
              className="mt-[2rem] text-[1.6rem] font-[300] leading-[1.6] text-[#F3F3F3] 1xl:text-[1.45rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem] 3xl:mt-[3rem]"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              The Toyota Hilux is more than just a pickup – it’s a symbol of
              power, durability, and trust across Africa. Built to conquer every
              terrain, from bustling city roads to the toughest off-road tracks,
              the Hilux stands strong as the vehicle of choice for both work &
              adventure. Its rugged design ensures reliability.
            </div>
            <ul
              className="mt-[5rem] grid grid-cols-2 gap-[2rem] md:grid-cols-3 lg:pb-[7rem] xl:mt-[8rem] xl:pb-[10rem] 3xl:gap-[3rem] 3xl:pb-[13rem]"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              {usps.map((usp, index) => (
                <li
                  key={index}
                  className="relative border border-[#AEAEAE] rounded-[2.3rem] px-[2rem] py-[3rem] xl:min-h-[16rem] xl:flex xl:flex-col xl:justify-center xl:px-[3rem] 1xl:min-h-[19rem] 3xl:min-h-[26rem] 3xl:pl-[5rem]"
                >
                  <img
                    src="/images/landing-pages/hilux/green-circle-tick.webp"
                    alt="Tick Icon"
                    className="object-contain w-[2.7rem] h-[2.7rem] absolute top-[-0.7rem] right-[-0.7rem] 1xl:w-[3rem] 1xl:h-[3rem] 3xl:w-[4.2rem] 3xl:h-[4.2rem] 3xl:top-[-1.2rem]"
                  />
                  <p
                    className="text-white text-[1.8rem] font-medium [&>span]:font-[300] [&>span]:block lg:text-[1.6rem] 1xl:text-[1.8rem] 2xl:text-[2.1rem] 3xl:text-[2.8rem]"
                    dangerouslySetInnerHTML={{ __html: usp.title }}
                  ></p>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="w-full mt-[5rem] lg:w-[40%] 1xl:w-[35%]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <img
              src="/images/landing-pages/hilux/reliability-thumb-mob.webp"
              alt=""
              className="object-contain block w-ful max-w-[35rem] mx-auto lg:hidden"
            />
            <img
              src="/images/landing-pages/hilux/reliability-thumb.webp"
              alt=""
              className="object-contain hidden lg:block w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReliabilitySection;
