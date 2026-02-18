"use client";
import React, { useState } from "react";

const uspListLeft = [
  {
    title: "Car Pick &  <b> Drop Services</b>",
    icon: "/images/workshop/excellence-icon-1.webp",
    description:
      "At BBT, we redefine convenience and luxury with our Car Pick & Drop Services. Imagine driving your dream car without the hassle of ownership or long-term commitments. Our subscription packages offer unparalleled flexibility, convenience, and access to a fleet of premium vehicles that embody sophistication and performance.",
  },
  {
    title: "Dedicated  <b> Account Manager</b>",
    icon: "/images/workshop/excellence-icon-2.webp",
    description:
      "At BBT, we redefine convenience and luxury with our Account Services. Imagine driving your dream car without the hassle of ownership or long-term commitments. Our subscription packages offer unparalleled flexibility, convenience, and access to a fleet of premium vehicles that embody sophistication and performance.",
  },
];
const uspListRight = [
  {
    title: "Home Basics  <b> Services</b>",
    icon: "/images/workshop/excellence-icon-3.webp",
    description:
      "At BBT, we redefine convenience and luxury with our Home basic Services. Imagine driving your dream car without the hassle of ownership or long-term commitments. Our subscription packages offer unparalleled flexibility, convenience, and access to a fleet of premium vehicles that embody sophistication and performance.",
  },
  {
    title: "Monthly Subscription   <b> Packages</b>",
    icon: "/images/workshop/excellence-icon-4.webp",
    description:
      "At BBT, we redefine convenience and luxury with our exclusive Monthly Subscription Packages. Imagine driving your dream car without the hassle of ownership or long-term commitments. Our subscription packages offer unparalleled flexibility, convenience, and access to a fleet of premium vehicles that embody sophistication and performance.",
  },
];

export const UspItem = ({ data,isActive }) => {
  return (
    <div
      className={` mt-[1.5rem] md:mt-[2rem] lg:my-[2rem] pt-[3rem] pb-[2rem] px-[1.5rem] md:px-[2rem] pr-[1rem] rounded-[1rem] xl:pt-[4.5rem] xl:pb-[5rem] xl:pl-[2.5rem] xl:my-[3rem] 2xl:pt-[6rem] 2xl:pb-[5rem] 3xl:pl-[3rem] 2xl:my-[3.5rem] 3xl:rounded-[1.3rem] group hover:bg-[#212121] transition-all duration-500 ease-in-out cursor-pointer bg-white`}
    >
      <div className="h-[2.8rem] xl:h-[3.2rem] 1xl:h-[4rem]">
        <img
          src={data.icon}
          alt="Icon"
          width="32"
          height="32"
          className={`object-contain h-auto max-w-[3.2rem] max-h-[2.77rem] w-full xl:max-h-[3rem] xl:max-w-[4rem] 1xl:max-w-[4rem] 1xl:max-h-[3.8rem] 2xl:max-w-[4.6rem] 2xl:max-h-[4.4rem] 3xl:max-w-[6rem] 3xl:max-h-[4.8rem] transition-all duration-500 ease-in-out group-hover:invert`}
        />
      </div>
      <p
        dangerouslySetInnerHTML={{ __html: data.title }}
        className={`text-[1.3rem] font-[200] [&>b]:font-[500] mt-[1.5rem] [&>b]:block leading-[1.4] lg:text-[1.6rem] xl:text-[1.6rem] 1xl:text-[1.8rem] 2xl:text-[2rem] 3xl:text-[2.4rem] 3xl:mt-[3.5rem] 3xl:leading-[1.6] transition-all duration-500 ease-in-out group-hover:text-white`}
      ></p>
    </div>
  );
};

const ExcellenceSection = () => {
  const [description, setDescription] = useState(uspListLeft[0].description);

  const handleDescription = (description) => {
    setDescription(description);
  };
  return (
    <section className="bg-[#F4F4F1] py-[6rem] lg:py-[10rem] 1xl:py-[14rem] 2xl:py-[13rem] 3xl:py-[15rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex justify-between items-start flex-wrap xl:w-[93.5%] mx-auto">
            <div className="w-full flex justify-between lg:block md:w-[48.5%] lg:w-[25%] order-2 lg:order-1 xl:w-[21%]">
              {uspListLeft.map((item, index) => (
                <div
                  key={index}
                  onMouseOver={() => {
                    handleDescription(item.description);
                  }}
                  className="w-[47%] lg:w-full"
                >
                  <UspItem data={item}  />
                </div>
              ))}
            </div>
            <div className="w-full order-1 mb-[4rem] lg:mb-0 lg:w-[37%] lg:order-2 text-center xl:pt-[6rem]">
              <img
                src="/images/down-circle-arrow-white.webp"
                width="123"
                height="123"
                alt="Arrow Icon"
                className="hidden xl:inline-block object-contain  invert xl:mb-[3rem] xl:w-[8.5rem] 2xl:w-[9.5rem] 3xl:w-[12.36rem] 3xl:mb-[4rem]"
              />
              <h2 className="flex-1 font-light [&>b]:font-[500] XL:[&>b]:block leading-[1.1] pr-[2rem] tracking-[-1.2px] lg:tracking-[-2px] capitalize">
                A Place Designed for <b>your car excellence</b>
              </h2>
              <div className="lg:bg-white lg:py-[3rem] px-[2rem] mt-[3rem] rounded-[1rem] xl:py-[4rem] xl:px-[3rem] 3xl:py-[6rem] 3xl:px-[5rem] xl:rounded-[1rem] 3xl:mt-[5rem] lg:shadow-detail-space">
                <p className="font-[300] text-[1.2rem] leading-[1.5] mt-[2rem] md:mt-0 lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.5] 1xl:text-[1.28rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0]">
                  {description}
                </p>
              </div>
            </div>
            <div className="w-full flex justify-between lg:block md:w-[48.5%] lg:w-[25%] order-3 xl:w-[21%]">
              {uspListRight.map((item, index) => (
                <div
                  key={index}
                  onMouseOver={() => {
                    handleDescription(item.description);
                  }}
                  className="w-[47%] lg:w-full"
                >
                  <UspItem data={item} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
