"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const IntroSection = ({ brandName = 'BMW', bannerImageUrl = 'https://cdn.bigboytoyz.com/new-version/sellcarcontents/bmw.png' }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="max-1920 mx-auto relative">
        <div className="container">
          <div className="block xl:flex xl:justify-between relative">
            <div className="w-full xl:w-[40%] py-[6rem] xl:py-[10rem]">
              <div
                className="text-center xl:text-left "
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <h1 className="text-[3rem] md:text-[3.5rem] 3xl:text-[5rem] uppercase font-bold leading-[1.1]">
                  {`Sell Your Used ${brandName.replace(/\b\w/g, l => l.toUpperCase())}`}
                </h1>
                <h2 class="stroke-text text-[3rem] md:text-[3.5rem] 3xl:text-[5rem] uppercase font-bold leading-[1.1] mt-5">
                  Within 29 minutes in <br />3 easy steps.
                </h2>
                <div className="block xl:hidden mt-[5rem] mx-auto max-w-[640px] w-[90%]">
                  <img
                    src={bannerImageUrl}
                    alt="Sell Your Car Image"
                    className="w-full object-contain"
                  />
                </div>
              </div>

              <ul
                className="mt-[4rem] sm:mx-auto sm:w-max xl:ml-0"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <li className="flex items-center my-[15px]">
                  <span className="w-[6rem] h-[6rem] border border-[#cacaca] rounded-[0.8rem] flex items-center justify-center p-[1.5rem] 3xl:w-[8.5rem] 3xl:h-[8.5rem]">
                    <img
                      src="https://cdn.bigboytoyz.com/new-version/assets/images/151checkpoints-icon.png"
                      alt="151 Check Points Icon"
                    />
                  </span>
                  <span className="inline-block ml-[15px] text-[1.8rem] 3xl:text-[2.5rem]">
                    151 <strong>Check Point</strong>
                  </span>
                </li>
                <li className="flex items-center my-[15px]">
                  <span className="w-[6rem] h-[6rem] border border-[#cacaca] rounded-[0.8rem] flex items-center justify-center p-[1.5rem] 3xl:w-[8.5rem] 3xl:h-[8.5rem]">
                    <img
                      src="https://cdn.bigboytoyz.com/new-version/assets/images/clock-icon.png"
                      alt="Get Offer in 29 Minutes Icon"
                    />
                  </span>
                  <span className="inline-block ml-[15px] text-[1.8rem] 3xl:text-[2.5rem]">
                    Get Offer <strong>in 29 Minutes</strong>
                  </span>
                </li>
                <li className="flex items-center my-[15px]">
                  <span className="w-[6rem] h-[6rem] border border-[#cacaca] rounded-[0.8rem] flex items-center justify-center p-[1.5rem] 3xl:w-[8.5rem] 3xl:h-[8.5rem]">
                    <img
                      src="https://cdn.bigboytoyz.com/new-version/assets/images/men-icon.png"
                      alt="Satisfied Customers"
                    />
                  </span>
                  <span className="inline-block ml-[15px] text-[1.8rem] 3xl:text-[2.5rem]">
                    10000+ Satisfied <strong>Customers</strong>
                  </span>
                </li>
              </ul>
              <div
                className="mt-[4rem] sm:mx-auto sm:w-max sm:flex sm:items-center sm:gap-x-[20px] xl:ml-0"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <a
                  href="https://wa.me/919999999915?text=Hello%20Big%20Boy%20Toyz%20Team,%20I%20Would%20like%20to%20know%20more%20about%20Selling%20My%20Car%20?"
                  target="_blank"
                  className="flex items-center justify-center w-full sm:w-max px-[30px] py-[15px] bg-[#2cb742] text-white rounded-[10px] hover:bg-[#2e9e3f]"
                >
                  <img
                    src="https://cdn.bigboytoyz.com/new-version/assets/images/whatsappcallbtn-icon2.png"
                    alt="Whatsapp Icon"
                    className="object-contain w-[20px] h-auto"
                  />
                  <span className="inline-block uppercase ml-[10px] text-[1.4rem] 3xl:text-[1.85rem]">
                    Chat On Whatsapp
                  </span>
                </a>

                <a
                  href="tel:+919999999915"
                  className="flex items-center justify-center w-full sm:w-max px-[30px] py-[15px] bg-[#111111] border border-[#111111] text-white rounded-[10px] mt-[2rem] sm:mt-0 hover:bg-transparent hover:text-black"
                >
                  <span className="inline-block uppercase ml-[10px] text-[1.4rem] 3xl:text-[1.85rem]">
                    Call Now: 9999 9999 15
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" hidden xl:block xl:w-[50%] absolute top-0 right-0 3xl:w-[47%] 3xl:right-[8%]">
          <div
            className="relative w-full"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <img
              src="https://cdn.bigboytoyz.com/new-version/assets/images/sellyourcar-banner-imgbg.jpg"
              alt=""
              className="w-full block object-cover"
            />
            <div className="absolute left-[-10rem] top-[40%] w-full">
              <img
                src={bannerImageUrl}
                alt="Sell Your Car Image"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
