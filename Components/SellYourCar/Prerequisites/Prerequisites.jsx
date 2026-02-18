"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const prerequisites = [
  {
    icon: "/images/sell-your-car/prerequisites-icon-1.webp",
    title: `No Accidental <br> <b>History</b>`,
    isChecked: false,
  },
  {
    icon: "/images/sell-your-car/prerequisites-icon-2.webp",
    title: `No <br> <b>litigations</b>`,
    isChecked: false,
  },
  {
    icon: "/images/sell-your-car/prerequisites-icon-3.webp",
    title: `No Odometer  <b>Tampering</b>`,
    isChecked: false,
  },
  {
    icon: "/images/sell-your-car/prerequisites-icon-4.webp",
    title: `National Crime  <b>Record Check</b>`,
    isChecked: true,
  },
  {
    icon: "/images/sell-your-car/prerequisites-icon-5.webp",
    title: `Model 2015 & above  <b>& KMS driven less than 30,000 only.</b>`,
    isChecked: true,
  },
  {
    icon: "/images/sell-your-car/prerequisites-icon-6.webp",
    title: `Service <b> History <br> Check</b>`,
    isChecked: true,
  },
  {
    icon: "/images/sell-your-car/prerequisites-icon-7.webp",
    title: `Insurance <b>History <br> Check</b>`,
    isChecked: true,
  },
  {
    icon: "/images/sell-your-car/prerequisites-icon-8.webp ",
    title: `Physical <br> <b>Evaluation</b>`,
    isChecked: true,
  },
];

const Prerequisites = ({ bg, cardBg }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className={`${
        bg ? `bg-[${bg}]` : "bg-[#F4F4F1]"
      }  py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]`}
    >
      <div className="max-1920">
        <div className="container">
          <div
            className="text-center lg:text-left"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] tracking-[-0.1rem] mb-[2rem] xl:text-[3.7rem] xl:[&>br]:hidden 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize sm:[&>br]:hidden">
              Prerequisites to sell your <b>luxury car at BBT</b>
            </h2>
            <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden md:[&>br]:block">
              Our list of Associates share a common vision for <br /> Automotive
              Excellence.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-x-[1.5rem] gap-y-[1.5rem] mt-[4rem] sm:grid-cols-3 md:max-w-[650px] md:mx-auto lg:max-w-none lg:grid-cols-4 xl:gap-[2.5rem] 1xl:mt-[5rem] 2xl:mt-[6rem]">
            {prerequisites.map((item, index) => (
              <li
                key={index}
                className={`${
                  cardBg ? `bg-[${cardBg}]` : "bg-white"
                } px-[1.5rem] py-[2rem] rounded-[1.5rem] flex flex-col justify-between min-h-[16rem] lg:min-h-[20rem] lg:px-[2rem] lg:py-[2.5rem] xl:px-[3rem] xl:pr-[1.5rem] xl:py-[3.5rem] xl:min-h-[30rem] 2xl:min-h-[34rem] 3xl:min-h-[41rem] 1xl:pr-[2.5rem] 1xl:rounded-[2.5rem] 2xl:pl-[4rem] 2xl:py-[4rem] 3xl:py-[5rem] 3xl:pl-[5rem]`}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <div className="flex justify-between 2xl:pr-[1rem] items-start">
                  <img
                    src={item.icon}
                    alt="Icon"
                    className="w-full max-w-[3rem] xl:max-w-[5.5rem] 1xl:max-w-[6rem] 3xl:max-w-[8rem] xl:max-h-[5rem] 1xl:max-h-[6rem] 3xl:max-h-[8rem] object-contain h-auto"
                  />
                  <img
                    src={
                      item.isChecked
                        ? "/images/sell-your-car/prerequisites-tick.webp"
                        : "/images/sell-your-car/prerequisites-cross.webp"
                    }
                    alt={item.isChecked ? "Checked" : "Not Checked"}
                    className="w-[2.5rem] h-auto object-contain xl:w-[3.5rem] 1xl:w-[4rem] 3xl:w-[5rem]"
                  />
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: item.title }}
                  className="text-[1.3rem] lg:text-[1.6rem] xl:text-[2rem] 1xl:text-[2.3rem] 2xl:text-[2.3rem] 3xl:text-[3rem] font-normal xl:font-light [&>b]:font-medium mt-[2rem] capitalize xl:tracking-tight xl:leading-[1.2]"
                ></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Prerequisites;
