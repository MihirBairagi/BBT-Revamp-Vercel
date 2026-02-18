"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bbtr-home-banner-section relative overflow-hidden">
      
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src=""
        poster="/realty/images/bbtr-new-banner.webp"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="container relative z-10">
        <div className="bbtr-home-banner-box h-[100vh] flex items-end pt-0 pb-[15vh] lg:h-auto lg:block lg:pt-[32vw] lg:pb-[12rem] 1xl:pb-[15rem] 3xl:pb-[18rem]">
          
          <div
            className="lg:flex lg:items-center lg:justify-between"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="text-box text-white text-center lg:text-start lg:w-[50%]">
              <p className="max-[1023px]:text-[1.5rem] f-22 mb-[0.8rem] font-[200]">
                From the House of Big Boy Toyz
              </p>

              <h1 className="h1 font-[200] tracking-[-0.2rem] leading-[1.2]">
               Building <strong>Trust.</strong> Delivering <strong>Value.</strong>
              </h1>
            </div>

            <Image
              src="/realty/images/bbtr-h-down-arrow.webp"
              alt="Scroll Down"
              width={272}
              height={272}
              priority
              className="object-contain w-[8rem] lg:w-[9rem] xl:w-[11rem] 1xl:w-[13rem] 3xl:w-[17rem]
                        cursor-pointer
                        animate-bounce
                        [animation-duration:2s]
                        hover:scale-[1.1]
                        transition-transform duration-300
                        mx-auto mt-[5rem] lg:mx-0 lg:mt-[0] "
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight * 1.15,
                  behavior: "smooth",
                });
              }}
            />


          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
