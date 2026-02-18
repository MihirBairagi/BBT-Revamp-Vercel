"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BottomInfoSection = ({ brandName = 'BMW', shortdescription = '', description = '' }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#f2f2f2] py-[6rem] xl:py-[10rem] 2xl:py-[12rem] sellCar-bottomInfo">
      <div className="container">
        <h2
          className="font-light [&>b]:font-normal leading-[1.2] tracking-[-0.2rem] 1xl:text-[4.2rem] 3xl:text-[5.8rem] hidden"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <b>{`Used ${brandName.replace(/\b\w/g, l => l.toUpperCase())}`}</b> in India
        </h2>
        <div
          className="mt-[2rem] font-light text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem]"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          {shortdescription ? (
            <div className="mb-[2rem] short-description" dangerouslySetInnerHTML={{ __html: shortdescription }} />
          ) : null}
          {description ? (
            <div dangerouslySetInnerHTML={{ __html: description }} />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default BottomInfoSection;
