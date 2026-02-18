"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCenter = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#F4F4F1] py-[5rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[17rem]">
      <div className="max-1920">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="lg:flex flex-wrap justify-between items-center">
            <div className="lg:w-[30%]">
              <h2 className="font-light [&>b]:font-normal leading-[1.1] tracking-[-1.5px] xl:[&>b]:font-[500] xl:text-[3.9rem] 1xl:text-[4.3rem] 2xl:text-[4.6rem] 3xl:text-[5.8rem]">
                Dedicated <br /> <b>Service Centre</b>
              </h2>
              <p className="font-light text-[1.2rem] leading-[1.3] w-[81%] mt-[1.5rem] md:text-[1.4rem] lg:w-full xl:text-[1.13rem] xl:font-normal xl:tracking-tight xl:leading-[1.4] 1xl:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem] 3xl:mt-[2.5rem]">
                We believe in the philosophy, that If you can’t keep your
                customers Happy better not to do that business. At Big Boy Toyz
                the aim has always been to dream big and achieve great. Welcome
                to our showroom's tour.
              </p>
              <div className="mt-[3rem] max-w-[310px] mx-auto hidden lg:block lg:ml-0 1xl:mt-[4rem] 3xl:mt-[4.5rem]">
                <Link
                  href="/services"
                  className="bg-black border border-black text-white text-center text-[1.4rem] flex justify-center items-center rounded-[3rem] h-[5rem] xl:w-max xl:px-[4rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:text-[1.3rem] 1xl:px-[5rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 2xl:h-[6rem] 2xl:rounded-[4rem] 3xl:h-[7.3rem] 3xl:px-[7rem] hover:bg-[#ffffff] hover:text-black"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="mt-[4rem] lg:mt-0 lg:w-[60%] xl:w-[64.5%]">
              <img
                src="/images/about-us/about-service-center-img.webp"
                alt="Thumbnail"
                className="w-full h-auto object-cover min-h-[43rem]"
              />
            </div>
          </div>
          <div className="mt-[3rem] sm:max-w-[310px] sm:mx-auto lg:hidden">
            <Link
              href="/services"
              className="bg-black text-white text-center text-[1.4rem] flex justify-center items-center rounded-[3rem] h-[5rem] "
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCenter;
