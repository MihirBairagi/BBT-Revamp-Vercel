"use client";
import React from 'react'

function GallerySection() {
  return (
    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-black' >
        <div className="container">
            <div className="text-center text-white"
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >Gallery </p>
                <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem] mb-[1rem]' >A closer look at life <strong>inside Pavilion</strong></h2>
                <p className='para' >A visual walkthrough of Pavilion’s architecture, interiors, and lifestyle amenities.</p>
                <ul className='flex flex-wrap gap-[1.5rem] lg:gap-y-[2.2rem] lg:gap-x-[2.5%] mt-[4rem] 3xl:gap-y-[3.5rem] 3xl:mt-[5rem]' >
                    <li className='w-[100%]' >        
                        <img className='rounded-[1.5rem] w-full' src="/realty/images/h-pro-slider-7.webp" alt="" />
                    </li>   
                    <li className='w-[47.5%] lg:w-[31.5%]' >        
                        <img className='rounded-[1.5rem] w-full' src="/realty/images/db-gallery-2.webp" alt="" />
                    </li>   
                    <li className='w-[47.5%] lg:w-[31.5%]' >        
                        <img className='rounded-[1.5rem] w-full' src="/realty/images/db-gallery-3.webp" alt="" />
                    </li>
                    <li className='w-[100%] lg:w-[31.5%]' >        
                        <img className='rounded-[1.5rem] w-full' src="/realty/images/db-gallery-4.webp" alt="" />
                    </li>
                    <li className='w-[100%]' >        
                        <img className='rounded-[1.5rem] w-full' src="/realty/images/h-pro-slider-8.webp" alt="" />
                    </li> 
                </ul>
            </div>
        </div>
    </section>
  )
}

export default GallerySection