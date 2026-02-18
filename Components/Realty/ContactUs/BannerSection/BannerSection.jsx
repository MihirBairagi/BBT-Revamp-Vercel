"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



function BannerSection() {

    useEffect(() => {
          AOS.init();
      }, []);


  return (
      <section className="bg-[url('/images/c-mob-banner.webp')] lg:bg-[url('/images/c-banner.webp')] bg-cover bg-center bg-no-repeat" >
        <div className="container">
            <div className="pt-[34rem] pb-[8rem] lg:pt-[17vw] xl:pt-[15vw] lg:pb-[12rem] 1xl:pb-[15rem] 3xl:pb-[18rem]">
                <div className="lg:flex lg:items-center lg:justify-between"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                >
                    <div className="text-box text-white text-center lg:text-start lg:w-[50%]">
                        <p className='max-[1023px]:text-[1.5rem] f-22 mb-[0.8rem] font-[200]' >Contact Us</p>
                        <h1 className='h1 font-[200] tracking-[-0.2rem] leading-[1.2]' >Connect with <strong>BBt Realty</strong></h1>
                        <p className="para mt-[0.8rem]" >Our team is here to assist you with project details, site visits, and personalised guidance</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BannerSection