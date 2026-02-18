"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import { submitForm } from "../../../app/lib/services/api";
import Image from "next/image";
import PopupForm from "../PopupForm/PopupForm";

const usps = [
  {
    title: `Unmatched <br /> Value`,
    icon: "/images/landing-pages/hilux/intro-usp-icon-1.webp",
  },
  {
    title: `Proven <br /> Reliability`,
    icon: "/images/landing-pages/hilux/intro-usp-icon-2.webp",
  },
  {
    title: `BBT <br /> Assurance`,
    icon: "/images/landing-pages/hilux/intro-usp-icon-3.webp",
  },
];

const IntroSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#F4F4F1] py-[7rem] relative overflow-hidden xl:py-[10rem] 3xl:py-[13rem]">
      {popupOpen && <PopupForm active={popupOpen} togglePopup={togglePopup} />}
      <img
        src="/images/landing-pages/hilux/banner-down-arrow-mob.webp"
        alt="Down Arrow"
        className="object-contain w-[16.5rem] h-[5.1rem] absolute top-[-2px] left-[50%] translate-x-[-50%] xl:hidden"
      />
      <img
        src="/images/landing-pages/hilux/banner-down-arrow.webp"
        alt="Down Arrow"
        className="object-contain w-[16.5rem] h-[5.1rem] absolute top-[-2px] left-[50%] translate-x-[-50%] hidden xl:inline-block 3xl:w-[22rem] 3xl:h-[6.9rem]"
      />
      <div className="container">
        <h2
          className="text-[3.2rem] font-[300] [&>b]:font-[400] capitalize leading-[1.3] tracking-tighter mt-[4rem] md:text-center lg:text-left xl:text-[4rem] 2xl:text-[5rem] 2xl:leading-[1.1] 3xl:text-[5.8rem] 3xl:leading-[1.2]"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          Africa’s Toughest Pickup, <br /> at <b>Best Price</b>
        </h2>
        <div className="block lg:flex lg:flex-wrap lg:justify-between lg:flex-row-reverse">
          <div
            className="w-full lg:w-[50%]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="relative flex flex-col items-end pr-[3rem] mt-[5rem] lg:pr-0 1xl:mt-0 2xl:mt-[-3rem]">
              <span className="text-right inline-block relative text-[#E4E4E4] text-[2.6rem] tracking-tight italic xl:text-[3.5rem] 2xl:text-[4.1rem] 3xl:text-[5.8rem]">
                $40,000{" "}
                <span className="absolute left-0 top-[45%] w-[103%] h-[1.2px] bg-[#B2ADAD]"></span>
              </span>
              <span className="text-right inline-block relative text-[#888888] text-[8rem] leading-[1] italic font-[500] tracking-[-0.3rem] mt-[-1rem] intro-gradient-price pr-[0.5rem] xl:text-[10rem] 2xl:text-[13rem] 3xl:text-[17rem]">
                $27,000{" "}
              </span>
            </div>
            <div className="mt-[-6rem] relative z-[2] mr-[-18px] md:mr-[-5%] lg:w-[50vw] lg:mr-[-9vw] 2xl:mt-[-10rem] 3xl:w-[89rem] 3xl:mr-[-10rem]">
              <img
                src="/images/landing-pages/hilux/intro-thumb.webp"
                alt=""
                className="w-full"
              />
            </div>
          </div>
          <div
            className="flex flex-col-reverse md:max-w-[600px] md:mx-auto lg:w-[50%] lg:block lg:max-w-none lg:ml-0 lg:mr-0"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <button
              onClick={() => setPopupOpen(true)}
              className="bg-black text-white px-[3rem] py-[1.5rem] rounded-[1rem] text-center mt-[4rem] max-w-[400px] mx-auto w-full md:ml-0 md:max-w-none md:px-[6rem] md:w-max lg:hidden"
            >
              Connect With Us
            </button>
            <div className="mt-[5rem] text-[1.6rem] font-[300] [&>b]:font-[400] [&>span]:font-[400] leading-[1.6] 1xl:text-justify 1 xl:text-[1.45rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
              At <b>Big Boy Toyz,</b> we believe premium doesn’t always have to
              mean expensive. The legendary Toyota Hilux, trusted across Africa
              for its unmatched strength & reliability now available at an
              unbeatable offer. Instead of the regular market price of{" "}
              <b>$40,000,</b> you can own it exclusively from BBT for just{" "}
              <span className="text-[#ED2126]">$27,000</span>—giving you a
              massive saving of <span className="text-[#1F9D00]">$13,000</span>.
              This is more than just a deal; it’s your chance to experience a
              world-class pickup truck at a value that truly makes sense. With
              limited stock and unlimited power, there has never been a better
              time to drive home your Hilux.
            </div>
            <ul className="mt-[5rem] [&>li]:border-t [&>li]:border-t-[#828282] [&>li:last-child]:border-b [&>li:last-child]:border-b-[#828282] lg:[&>li]:border lg:[&>li]:border-[#828282] lg:[&>li]:rounded-[2rem] lg:grid lg:grid-cols-3 lg:gap-[1.5rem] 3xl:gap-[2.5rem]">
              {usps.map((usp, index) => (
                <li
                  key={index}
                  className="py-[2rem] flex items-center lg:flex-col lg:items-center lg:py-[3rem] lg:px-[1.5rem] xl:px-[2.5rem] 2xl:py-[4rem] 3xl:py-[6rem]"
                >
                  <img
                    src={usp.icon}
                    alt="Icon"
                    className="object-contain max-h-[4rem] w-[4rem] inline-block lg:w-[4.5rem]"
                  />
                  <span
                    className="text-[1.8rem] [&>br]:hidden lg:[&>br]:block text-[#020203] font-normal inline-block ml-[2rem] lg:ml-0 lg:text-center lg:text-[1.6rem] lg:mt-[2rem] lg:font-[300] lg:leading-[1.2] 2xl:text-[2rem] 3xl:text-[2.4rem]"
                    dangerouslySetInnerHTML={{ __html: usp.title }}
                  ></span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setPopupOpen(true)}
              className="bg-black border border-black text-white py-[1.5rem] rounded-[1rem] text-center mt-[4rem]  mx-auto  px-[6rem] w-max hidden lg:inline-block hover:bg-transparent hover:text-black transition-all duration-500 3xl:text-[1.9rem] 3xl:min-w-[37rem]"
            >
              Connect With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
