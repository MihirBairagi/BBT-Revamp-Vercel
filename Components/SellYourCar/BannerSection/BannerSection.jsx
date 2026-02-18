"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import RequestCallPopup from "../../RequestCallPopup/RequestCallPopup";

const BannerSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="text-white bg-black">
      <div className="max-1920">
      {popupOpen && (
          <RequestCallPopup active={popupOpen} togglePopup={togglePopup} formType="sell_your_car" />
        )}
        <div className="relative">
          <div>
            <img
              src="/images/sell-your-car/sell-car-banner-desktop.webp"
              alt="Banner Image"
              width="1920"
              height="1100"
              className="hidden w-full h-auto sm:block sm:min-h-[600px] object-cover"
            />
            <img
              src="/images/sell-your-car/sell-car-banner-desktop.webp"
              alt="Banner Image"
              width="391"
              height="686"
              className="block w-full h-auto object-cover sm:hidden min-h-[650px]"
            />
          </div>
          <div className=" text-center absolute w-full h-full left-0 top-0 flex flex-col justify-between pt-[12rem] pb-16 sm:text-left sm:pt-[15rem] md:pt-[18rem] lg:pt-[19rem] 1xl:pt-[22rem] 2xl:pt-[24rem] 3xl:pt-[30rem] 3xl:pb-[6rem]">
            <div
              className="px-14 md:text-left md:px-[8rem] lg:px-0 lg:w-[82%] lg:mx-auto"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <p className="text-center sm:block [&_img]:invert text-white sm:text-left font-light breadcrumbs">
                <Link
                  href="/"
                  className="text-[1rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]"
                >
                  Home
                </Link>
                <img
                  src="/images/breadcrumb-arrow.webp"
                  className="object-contain w-2 xl:w-[0.6rem] inline-block mx-2 h-auto 1xl:mx-3 3xl:mx-4 3xl:w-[0.8rem]"
                  width="6"
                  height="11"
                  alt="Arrow Icon"
                />
                <span className="text-[1rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]">
                  Sell Your Car
                </span>
              </p>
              <h1 className="font-extralight [&>br]:hidden sm:[&>br]:block text-[4.5rem] tracking-tighter leading-[1] mt-6 [&>b]:font-normal lg:mt-10 lg:text-[4.5rem] xl:text-[5rem] xl:leading-[1.2] xl:mt-[1rem] 1xl:text-[5.5rem] 2xl:text-[6rem] 3xl:text-[7.5rem] 3xl:mt-[2rem] capitalize">
                Sell Your Car <br /> <b> hassle free </b>
              </h1>
              <p className="text-[1.2rem] mt-[2rem] [&>br]:hidden sm:[&>br]:block xl:mt-[1.2rem] xl:text-[1.1rem] 1xl:text-[1.22rem] 1xl:mt-[2rem] 2xl:text-[1.3rem] 3xl:text-[1.6rem]">
                If your heart races at the sight of a sleek chassis or the purr{" "}
                <br /> of a finely-tuned engine, then buckle up, because you're
                in <br /> for a wild ride!
              </p>

              {/* Banner  Buttons */}
              <div className="flex items-center w-max sm:mt-[3rem] lg:mt-[6rem] xl:mt-[7rem] 2xl:mt-[8.5rem]">
                <button
                   onClick={togglePopup}
                  className="hidden sm:flex items-center justify-center bg-white text-black w-max h-[5rem] px-[2rem] rounded-[0.5rem] xl:h-[4.5rem] xl:rounded-[1rem] 1xl:h-[5rem] 3xl:h-[6.5rem] transition-all duration-500 hover:bg-[#f0f0f0]"
                >
                  <img
                    src="/images/sell-your-car/banner-email-icon.webp"
                    alt="Email Icon"
                      className="w-[1.9rem] object-contain h-auto xl:w-[1.7rem] 3xl:w-[2.2rem]"
                  />
                  <p className="flex-[1] pl-[1rem] text-[1.5rem] xl:text-[1.2rem] 1xl:text-[1.3rem] 2xl:text-[1.4rem] xl:tracking-tight 2xl:tracking-tighter capitalize 3xl:text-[1.6rem] font-medium">Request a call back</p>
                </button>
                <div className="fixed w-full bottom-0 left-0 bg-white flex py-[2rem] px-[2rem] items-center justify-center z-10 sm:static sm:bg-transparent sm:py-0 sm:px-0 sm:ml-[1.5rem] sm:w-max xl:ml-[1rem]">
                  <a
                    href="tel:+919999999915"
                    className="flex items-center justify-center bg-white text-black w-max h-[5rem] px-[2rem] rounded-[0.5rem] mr-[1.5rem] shadow-[0_11px_60px_-10px_rgba(0,0,0,0.4)] sm:shadow-none xl:mr-[1rem] xl:h-[4.5rem] xl:rounded-[1rem] 1xl:h-[5rem] 3xl:h-[6.5rem] transition-all duration-500 hover:bg-[#f0f0f0]"
                  >
                    <img
                      src="/images/sell-your-car/banner-call-iocn.webp"
                      alt="Call Icon"
                      className="w-[1.9rem] object-contain h-auto xl:w-[1.7rem] 3xl:w-[2.2rem]"
                    />
                    <p className="flex-[1] pl-[1rem] text-[1.5rem] xl:text-[1.2rem] xl:tracking-tight 1xl:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem] 2xl:tracking-tighter capitalize font-medium">
                      Call Now : 9999 9999 15 
                    </p>
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=+919999999915"
                    className="w-[5rem] h-[5rem] bg-[#1BD741] flex items-center justify-center rounded-[0.7rem] shadow-[0_11px_60px_-10px_rgba(0,0,0,0.4)] sm:shadow-none xl:h-[4.5rem] xl:w-[4.5rem] xl:rounded-[1rem] 3xl:h-[6.5rem] 3xl:w-[6.5rem] 1xl:h-[5rem] 1xl:w-[5rem] 1xl:rounded-[1.5rem] hover:bg-[#31af4a] transition-all duration-500"
                    target="_blank"
                  >
                    <img
                      src="/images/sell-your-car/banner-whatsapp-icon.webp"
                      alt="Call Icon"
                      className="w-[2.7rem] object-contain h-auto xl:w-[2rem] 1xl:w-[2.2rem] 2xl:w-[2.4rem] 3xl:w-[2.8rem]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
