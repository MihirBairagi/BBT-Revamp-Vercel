"use client";
import React from "react";
import "aos/dist/aos.css";

const BannerSection = () => {


  return (
   
    <>    
    <section className="bg-[url('/images/dp-about-mob-banner.webp')] lg:bg-[url('/images/dp-about-banner.webp')] bg-cover bg-center bg-no-repeat h-[100vh] flex items-end lg:h-auto lg:block" >
        <div className="container">
            <div className="pb-[18vh] lg:pt-[17vw] xl:pt-[25vw] 3xl:pt-[26vw] lg:pb-[12rem] 1xl:pb-[15rem] 3xl:pb-[18rem]">
                <div className="lg:flex lg:items-center lg:justify-between"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                >
                    <div className="text-box text-white text-center lg:text-start lg:w-[70%]">
                        <p className='max-[1023px]:text-[1.5rem] f-22 mb-[0.8rem] font-[200]' >About Us</p>
                        <h1 className='h1 font-[200] tracking-[-0.2rem] leading-[1.2]' >Redefining premium real estate through <strong>intent and integrity.</strong></h1>
                    </div>
                    <div className="mt-[3.5rem] lg:hidden" >
                            <img
                                src="/realty/images/bbtr-h-down-arrow.webp"
                                alt="Banner Icon"
                                className=" object-contain w-[8rem]  lg:w-[9rem] xl:w-[11rem] 1xl:w-[13rem] 3xl:w-[17rem] mx-auto"
                            />
                    </div>
                </div>
            </div>
        </div>
    </section>

 




    </>

  )
}

export default BannerSection
