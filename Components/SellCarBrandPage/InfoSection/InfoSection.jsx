"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const InfoSection = ({ brandName = 'BMW', sellcarlogoUrl = 'https://cdn.bigboytoyz.com/new-version/sellcarcontents/sell-your-cars-brand-logos0000s0000bmw.png', logocontent = '' }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-white py-[6rem] xl:py-[10rem] 2xl:py-[12rem] sellCar-infoSection">
      <div className="container">
        <div className="lg:flex lg:justify-between lg:items-center">
          <div
            className="lg:w-[70%] w-full text-center lg:text-left"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h2 className="font-light [&>b]:font-normal leading-[1.2] tracking-[-0.2rem] 1xl:text-[4.2rem] 3xl:text-[5.8rem]">
              {`Sell Your Used ${brandName.replace(/\b\w/g, l => l.toUpperCase())} To `}
              <b>Big Boy Toyz</b>
            </h2>
            <div className="mt-[2rem] font-light description-box" dangerouslySetInnerHTML={{ __html: logocontent }} />
          </div>
          <div
            className="flex justify-center items-center lg:block lg:w-[25%] mt-[4rem] lg:mt-0"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <img
              src={sellcarlogoUrl}
              alt={brandName}
              className="max-w-[250px] w-full lg:max-w-[350px] inline-block mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
