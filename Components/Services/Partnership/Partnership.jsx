"use client";

import React, { useState } from "react";
import RequestCallPopup from "../../RequestCallPopup/RequestCallPopup";

const partners = [
  { logo: "/images/services/partner-img-1.webp" },
  { logo: "/images/services/partner-img-2.webp" },
  { logo: "/images/services/partner-img-3.webp" },
  { logo: "/images/services/partner-img-4.webp" },
  { logo: "/images/services/partner-img-5.webp" },
  { logo: "/images/services/partner-img-6.webp" },
  { logo: "/images/services/partner-img-7.webp" },
  { logo: "/images/services/partner-img-8.webp" },
  { logo: "/images/services/partner-img-9.webp" },
];

const Partnership = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      {popupOpen && (
        <RequestCallPopup active={popupOpen} togglePopup={togglePopup} />
      )}
      <div className="max-1920">
        <div className="container">
          <h3 className="titleWithLine mobileLine block">
            <span className="bg-[#ffffff] pr-[3rem] inline-block relative z-10 text-[2.5rem] tracking-[-2px] xl:text-[3rem] xl:pr-[4rem] 1xl:text-[3.7rem] 3xl:text-[4.5rem]">
              OEM Partnership
            </span>
          </h3>
          <div className="flex flex-wrap justify-between mt-[4rem] xl:mt-[6rem] 1xl:mt-[10rem]">
            <div className="w-full md:w-[40%] lg:w-[45%]">
              <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] tracking-[-0.1rem] mb-[2rem] md:text-left xl:text-[3.7rem] xl:[&>br]:hidden 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize 3xl:tracking-[-2px]">
                we are friends with <b>some elites in the industry</b>
              </h2>
              <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden md:[&>br]:block xl:tracking-tighter">
                Big Boy Toyz offers a curated selection of the world's most
                prestigious car brands, ensuring that customers receive an
                unparalleled experience in luxury and performance.
              </p>

              <p className="font-[300] text-[1.5rem] leading-[1.5] lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.5] 1xl:text-[1.28rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0] [&>b]:font-[500] mt-[2rem]">
                Beyond sales, the company excels in providing comprehensive
                services including expert maintenance, bespoke customization,
                and exceptional customer support.
              </p>
              <div className="mt-[4rem] hidden md:block">
                <button
                  onClick={togglePopup}
                  className="w-max h-[4.5rem] flex justify-center items-center text-[1.2rem] bg-black border border-black text-white px-[3rem] py-[1rem] rounded-[3rem] xl:px-[4.5rem] xl:h-[5rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:text-[1.3rem] 2xl:h-[5.5rem] 3xl:h-[6.5rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[8rem] transition-all duration-500 ease-in-out hover:bg-white hover:text-black"
                >
                  Schedule Call With Us
                </button>
              </div>
            </div>
            <div className="w-full mt-[4rem] sm:max-w-[450px] sm:mx-auto md:max-w-none md:mr-0 md:w-[42%] md:mt-0 lg:w-[40%] xl:w-[45%]">
              <ul className="grid grid-cols-3 gap-[1rem] auto-rows-fr xl:gap-x-[4rem] xl:gap-y-[2rem] 3xl:gap-x-[5.5rem] 3xl:gap-y-[3rem]">
                {partners.map((item, index) => (
                  <li
                    key={index}
                    className="rounded-[0.5rem] border border-[#AEAEAE] p-[1rem] flex justify-center items-center xl:rounded-[1.5rem] xl:p-[1.5rem] 3xl:h-[200px] 3xl:rounded-[2rem]"
                  >
                    <img
                      src={item.logo}
                      alt="logo"
                      className="h-auto object-contain w-full"
                    />
                  </li>
                ))}
              </ul>

              <div className="mt-[4rem] md:hidden">
                <button
                  onClick={togglePopup}
                  className="w-max mx-auto h-[4.5rem] flex justify-center items-center text-[1.2rem] bg-black text-white px-[3rem] py-[1rem] rounded-[3rem] xl:px-[6rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:text-[1.3rem] 2xl:h-[5.5rem] 3xl:h-[6.5rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[8rem] hover:bg-[#333333] transition-all duration-500 ease-in-out"
                >
                  Schedule Call With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
