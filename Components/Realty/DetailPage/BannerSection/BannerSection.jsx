"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";
import "aos/dist/aos.css";

const BannerSection = () => {
      useEffect(() => {
        AOS.init();
      }, []);
      
  return (
   
    <section className="bg-[url('/realty/images/dp-banner-mob-new.webp')] lg:bg-[url('/realty/images/dp-banner-new.webp')] bg-cover bg-center bg-no-repeat h-[100vh] flex items-end lg:h-auto lg:block" >
        <div className="container">
            <div className=" pb-[22vh] lg:pt-[13vw] xl:pt-[10vw] 1xl:pt-[9vw] 3xl:pt-[8vw] lg:pb-[12rem] 1xl:pb-[15rem] 3xl:pb-[18rem]">
                <div className="lg:flex lg:items-center lg:justify-center">
                    <div className="text-white text-center lg:text-center"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                    >
                        <p className='max-[1023px]:text-[1.5rem] f-18 mb-[0.8rem] flex w-max items-center mx-auto' >
                            <span><img className='w-[1.5rem] mr-[1rem]' src="/realty/images/h-pro-location.png" alt="" /></span>
                            <a href="https://maps.app.goo.gl/Eyc9unqTKDJsE4da9" target="_blank">
                                Luxury Residences in Vadodara
                            </a>
                        </p>
                        <h1 className='h1 font-[200] tracking-[-0.2rem] leading-[1.2] lg:w-[100%] lg:mx-auto' ><strong>Pavilion</strong> <br/>Contemporary Living Designed with Purpose</h1>
                        <p className="hidden lg:block para mt-[0.5rem] lg:w-[60%] lg:mx-auto" >Thoughtfully designed residences, expansive layouts, and curated lifestyle amenities come together to create one of Vadodara’s most distinguished residential communities.</p>
                        <div className="lg:flex mt-[3.5rem] lg:mt-[3rem] lg:mb-[5rem] xl:mt-[5rem] xl:mb-[8rem] 1xl:mb-[12rem] hidden items-center justify-center " >
                            <Link
                                href=""
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.scrollTo({
                                    top: window.innerHeight * 0.8,
                                    behavior: "smooth",
                                    });
                                }}
                                className="max-[1023px]:text-[1.5rem] max-[1023px]:h-[5rem] com-btn border-transparent font-normal justify-center px-[3rem] lg:px-[4rem]"
                                >
                                Enquire Now
                            </Link>

                            <a className="max-[1023px]:text-[1.5rem] max-[1023px]:h-[5rem] com-btn border-transparent font-normal justify-center ml-[1.5rem] px-[3rem] lg:px-[4rem]" href="#amenities-scroll">Explore the Lifestyle</a>
                        </div>
                        <div className="mt-[2.5rem] lg:w-max ml-auto hidden lg:block">
                           <div className="img-box relative flex items-center justify-end">
                                <img
                                    src="/realty/images/dp-banner-icon-cover.webp"
                                    alt="Banner Icon"
                                    className="object-contain w-[8rem] lg:w-[8rem] xl:w-[8.5rem] 1xl:w-[13rem] animate-rotate"
                                />

                                <img
                                    src="/realty/images/dp-banner-icon-arrow.png"
                                    alt="Inner Icon"
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1.5rem] 1xl:w-[2rem]"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

   


  )
}

export default BannerSection
