"use client";
import React, { useEffect } from "react";
import AOS from "aos";
const processData = [
  {
    title: "Share Your  <b>Vision</b>",
    subtitle:
      "Tell us your goals — protection, style, performance, or bespoke.",
    icon: "/images/modifications/process-icon-1.webp",
  },
  {
    title: "Digital  <b>Preview</b>",
    subtitle:
      "We create high-resolution renders & mockups so you can see it before it’s built.",
    icon: "/images/modifications/process-icon-2.webp",
  },
  {
    title: "Approve &  <b>Customize</b>",
    subtitle:
      "Fine-tune details — finishes, colours, sound profiles, materials.",
    icon: "/images/modifications/process-icon-3.webp",
  },
  {
    title: "Build &  <b>Deliver</b>",
    subtitle:
      "Our experts craft, fit, and finish your car to OEM-plus standards, with full documentation.",
    icon: "/images/modifications/process-icon-4.webp",
  },
];

const ProcessCard = ({ data, index }) => {
  return (
    <div className="bg-[#131313] px-[2rem] pt-[2.5rem] pb-[5rem] overflow-hidden relative text-white rounded-[1rem] my-[1rem] xl:pb-[7rem] xl:pl-[3rem] 1xl:px-[3rem] 2xl:pt-[3.5rem] 3xl:pt-[5rem] 3xl:pb-[9rem] 3xl:pl-[4rem]">
      <div>
        <img
          src={data.icon}
          alt=""
          className="w-full object-contain h-auto max-w-[3rem] 1xl:max-w-[3.8rem] 3xl:max-w-[5rem]"
        />
      </div>
      <h4
        dangerouslySetInnerHTML={{ __html: data.title }}
        className="text-[1.5rem] mt-[3rem] font-light [&>b]:font-medium lg:[&>b]:block xl:text-[1.9rem] xl:mt-[5rem] 1xl:text-[2.2rem] 2xl:text-[2.5rem] 3xl:text-[3rem] 1xl:mt-[6rem] 3xl:mt-[8rem] xl:leading-[1.3]"
      ></h4>
      <p className="font-light text-[1.2rem] leading-[1.5] mt-[2rem] sm:mt-[1rem] lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.5] 1xl:text-[1.28rem] 2xl:mt-[2rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0] [&>br]:hidden sm:[&>br]:block">
        {data.subtitle}
      </p>
      <div className="absolute right-[-0.5rem] bottom-[-2.5rem] font-medium text-[#424242] text-[5rem] tracking-tight xl:text-[7rem] 1xl:text-[8rem] 3xl:text-[10rem] xl:bottom-[-3.5rem] 1xl:bottom-[-4rem] 3xl:bottom-[-5rem]">
        0{index + 1}
      </div>
    </div>
  );
};

const ProcessSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-black text-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <p className="text-[1rem] 1xl:text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]">
              Our Process
            </p>
            <h2 className="font-light text-white leading-[1.2] tracking-tighter mt-[1rem] text-center xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
              How It <b>Works</b>
            </h2>
            <p className="text-[1.5rem] text-white xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light">
              Our customization process begins with you <br /> specifying your
              requirements.
            </p>
            <img
              src="/images/down-circle-arrow-white.webp"
              width="123"
              height="123"
              alt="Arrow Icon"
              className="inline-block object-contain mt-[3rem] w-[6rem] xl:w-[8.5rem] xl:mt-[5rem] 1xl:w-[9rem] 2xl:w-[9.5rem] 3xl:w-[12.36rem] 3xl:mt-[6rem"
            />
          </div>
          {processData && processData.length > 0 && (
            <div
              className="grid grid-cols-2 gap-x-[1.5rem] mt-[3rem] max-w-[450px] mx-auto md:max-w-none md:grid-cols-4 lg:w-[90%] xl:mt-[5rem] xl:gap-x-[3.5rem] xl:w-[88%] 1xl:gap-x-[4rem] 1xl:mt-[7rem] 3xl:mt-[9rem] 3xl:gap-x-[6rem]"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              {processData.map((process, index) => (
                <ProcessCard data={process} key={index} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
