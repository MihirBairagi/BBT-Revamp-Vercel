"use client";

import React, { useEffect, useState } from "react";

import AOS from "aos";
import PopupForm from "../PopupForm/PopupForm";

const usps = [
  {
    title: `Power and Durability – <b>Built tough for any terrain.</b>`,
    icon: "/images/landing-pages/hilux/why-us-icon-1.webp",
  },
  {
    title: `Efficiency and Performance – <b>Strong drive, less fuel, more savings.</b>`,
    icon: "/images/landing-pages/hilux/why-us-icon-2.webp",
  },
  {
    title: `Style and Comfort – Rugged <b> outside, modern inside, ultimate comfort.</b>`,
    icon: "/images/landing-pages/hilux/why-us-icon-3.webp",
  },
];

const WhyUs = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="hilux-why-us relative bg-[#F4F4F1] overflow-hidden">
      {popupOpen && <PopupForm active={popupOpen} togglePopup={togglePopup} />}
      <div className="container">
        <h6
          className="flex items-center text-[1.8rem] relative z-[2]"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <span className="inline-block mr-[1.5rem]">Toyota Hilux</span>
          <span className="flex-[1] h-[1px] inline-block bg-black"></span>
        </h6>
      </div>
      <div className="max-w-[1920px] mx-auto">
        <div className="wrapper  pb-[7rem] lg:pb-[3rem]">
          <div className="container">
            <div className="flex flex-wrap justify-between flex-col-reverse lg:flex-row lg:items-end">
              <div
                className="w-full  mt-[3rem]  lg:w-[50%]"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <div className="w-[115%] ml-[-18px] md:ml-[-5%] lg:w-[59vw] lg:ml-[-9vw] 3xl:ml-[-17rem]">
                  <img
                    src="/images/landing-pages/hilux/why-us-thumb.webp"
                    alt="HIlux Car Image"
                    className="block"
                  />
                </div>
              </div>
              <div className="w-full lg:w-[40%] lg:pb-[4rem] xl:pb-[7rem] xl:pt-[8rem] xl:w-[36%] 3xl:py-[12rem]">
                <h2
                  className="text-[3.2rem] font-[300] [&>b]:font-[400] capitalize leading-[1.3] tracking-tighter mt-[4rem] xl:text-[4rem] 2xl:text-[5rem] 2xl:leading-[1.1] 3xl:text-[5.8rem] 3xl:leading-[1.3] xl:mt-0"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  Why Africa <b>Loves It</b>
                </h2>
                <ul
                  className="mt-[3rem] [&>li:last-child]:border-b-0"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  {usps.map((usp, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between py-[2rem] border-b border-b-[#D9D9D9]"
                    >
                      <span className="icon w-[8rem] h-[8rem] bg-white flex justify-center items-center rounded-[50%] mr-[1.5rem] 2xl:w-[10rem] 2xl:h-[10rem] 3xl:w-[13rem] 3xl:h-[13rem]">
                        <img
                          src={usp.icon}
                          alt="Icon"
                          className="object-contain w-full max-w-[3.7rem] max-h-[3.8rem]"
                        />
                      </span>
                      <p
                        className="flex-[1] text-[1.8rem] font-[300] [&>b]:font-[400] xl:[&>b]:block 2xl:text-[2rem] 3xl:text-[2.4rem]"
                        dangerouslySetInnerHTML={{ __html: usp.title }}
                      ></p>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setPopupOpen(true)}
                  className="bg-black border border-black text-white py-[1.5rem] rounded-[1rem] text-center mt-[4rem]  mx-auto  px-[6rem] w-max hidden lg:inline-block hover:bg-transparent hover:text-black transition-all duration-500 3xl:text-[1.9rem] 3xl:min-w-[37rem]"
                >
                  Request Details
                </button>
              </div>
            </div>
          </div>
          <div
            className="container md:flex md:justify-center lg:hidden"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <button
              onClick={() => setPopupOpen(true)}
              className="bg-[#181818] text-white text-[1.8rem] py-[1.4rem] w-full px-[3rem] text-center max-w-[400px] mx-auto mt-[5rem] rounded-[1rem] inline-block"
            >
              Request Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
