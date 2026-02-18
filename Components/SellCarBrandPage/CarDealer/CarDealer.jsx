"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CarDealer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#f2f2f2] py-[6rem] xl:py-[10rem] 2xl:py-[12rem]">
      <div className="container">
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <h2 className="font-light [&>b]:font-normal leading-[1.2] tracking-[-0.2rem] 1xl:text-[4.2rem] 3xl:text-[5.8rem]">
            BBT Best Car Dealer To Sell Your <br />
            <b>Used Bmw</b>
          </h2>
          <div className="mt-[2rem] font-light text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem]">
            <p className="">
              We offer what most do not. We move forward with the legacy of the
              splendid BMW Car Series and present to you the best of the
              services. Big Boy Toyz is a top car dealer all over India with
              used, pre-owned, and luxury cars, verified and checked before
              displaying in their showroom.
            </p>
          </div>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-[3rem] justify-center mt-[4rem] w-[80%] mx-auto xl:mt-[7rem] 3xl:w-[60%]">
          <li
            className="flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <span className="bg-white flex justify-center items-center rounded-[1rem] mb-[1rem] w-[90px] h-[90px] xl:w-[110px] xl:h-[110px] xl:mb-[2rem] xl:rounded-[1.8rem] 3xl:w-[120px] 3xl:h-[120px]">
              <img
                src="https://cdn.bigboytoyz.com/new-version/assets/images/outrightsale-icon.png"
                alt="Icon"
                className="object-contain w-[4.5rem] h-auto xl:w-[5rem] 3xl:w-[6rem]"
              />
            </span>
            <span className="text-[1.5rem] xl:text-[2rem] 3xl:text-[2.3rem]">
              Outright <br /> Sale
            </span>
          </li>
          <li
            className="flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <span className="bg-white flex justify-center items-center rounded-[1rem] mb-[1rem] w-[90px] h-[90px] xl:w-[110px] xl:h-[110px] xl:mb-[2rem] xl:rounded-[1.8rem] 3xl:w-[120px] 3xl:h-[120px]">
              <img
                src="https://cdn.bigboytoyz.com/new-version/assets/images/bestofferin29mins-icon.png"
                alt="Icon"
                className="object-contain w-[4.5rem] h-auto xl:w-[5rem] 3xl:w-[6rem]"
              />
            </span>
            <span className="text-[1.5rem] xl:text-[2rem] 3xl:text-[2.3rem]">
              Best offer <br /> in 29mins
            </span>
          </li>
          <li
            className="flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <span className="bg-white flex justify-center items-center rounded-[1rem] mb-[1rem] w-[90px] h-[90px] xl:w-[110px] xl:h-[110px] xl:mb-[2rem] xl:rounded-[1.8rem] 3xl:w-[120px] 3xl:h-[120px]">
              <img
                src="https://cdn.bigboytoyz.com/new-version/assets/images/men-icon1.png"
                alt="Icon"
                className="object-contain w-[4.5rem] h-auto xl:w-[5rem] 3xl:w-[6rem]"
              />
            </span>
            <span className="text-[1.5rem] xl:text-[2rem] 3xl:text-[2.3rem]">
              7600+ Satisfied <br /> Customers
            </span>
          </li>
          <li
            className="flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <span className="bg-white flex justify-center items-center rounded-[1rem] mb-[1rem] w-[90px] h-[90px] xl:w-[110px] xl:h-[110px] xl:mb-[2rem] xl:rounded-[1.8rem] 3xl:w-[120px] 3xl:h-[120px]">
              <img
                src="https://cdn.bigboytoyz.com/new-version/assets/images/hasslefree-icon1.png"
                alt="Icon"
                className="object-contain w-[4.5rem] h-auto xl:w-[5rem] 3xl:w-[6rem]"
              />
            </span>
            <span className="text-[1.5rem] xl:text-[2rem] 3xl:text-[2.3rem]">
              Confidentiality <br /> of Seller.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CarDealer;
